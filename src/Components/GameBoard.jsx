import React,{useState}from 'react'
import Tile from './Tile'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const GameBoard = () => {
  const [playerTurn,setPlayerTurn]=useState('X')
  const [gameOver,setGameOver]=useState(false)
  const [gameBoard,setGameBoard]=useState([['','','',],['','',''],['','','']])
  const [turns,setTurns]=useState([])
  const rows=[0,0,0]
  const cols=[0,0,0]

  const setValue=(row,col)=>{
    if(!gameOver && gameBoard[row][col]===''){
    let currentgame=gameBoard
    let turn=turns
    currentgame[row][col]=playerTurn
    turn.push(playerTurn)
    setTurns(turn)
    setGameBoard(currentgame)
    checkWin(currentgame,row,col)
      if(playerTurn==='X')
        setPlayerTurn('O')
      else
      setPlayerTurn('X')
      checkGameOver()
  }
}

const checkGameOver=()=>{
  const over=localStorage.getItem('gameover')
  if(turns.length===9 && !gameOver)
    {
     toast("Match Tie...")
}
}
  const reset=()=>{
      setGameBoard([['','','',],['','',''],['','','']])
      setPlayerTurn('X')
      setTurns([])
      localStorage.setItem('gameover',false)
      setGameOver(false)
  }

  const setWinner=(player)=>{
    localStorage.setItem('gameover',true)
    toast.success(player+' Wins')

  }

  const checkWin=(gameBoard,row,col)=>{
   //diagnols logic
    if(row===col){     
      if(gameBoard[0][0]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][2])    //checking straight diagnol
    { setGameOver(true) 
      setWinner(gameBoard[row][col])}
     else if(row===0){                    
          if(gameBoard[row][col]===gameBoard[row+1][col] && gameBoard[row+1][col]===gameBoard[row+2][col])    //checking rows
         { setGameOver(true) 
          setWinner(gameBoard[row][col])}
          else if(gameBoard[row][col]===gameBoard[row][col+1] && gameBoard[row][col+1]===gameBoard[row][col+2])  //checking cols
          { setWinner(gameBoard[row][col])
            setGameOver(true)}
      }
      else if(row===1){       
        if(gameBoard[row][col]===gameBoard[row+1][col] && gameBoard[row+1][col]===gameBoard[row-1][col])    //checking rows
         { setWinner(gameBoard[row][col])
          setGameOver(true)}
        else if(gameBoard[row][col]===gameBoard[row][col-1] && gameBoard[row][col-1] ===gameBoard[row][col+1])  //checking cols
          {setWinner(gameBoard[row][col])
            setGameOver(true)}
        else if(gameBoard[row][col]===gameBoard[row+1][col-1] && gameBoard[row+1][col-1]===gameBoard[row-1][col+1])
          {setWinner(gameBoard[row][col])
            setGameOver(true)}
      }
      else{
        if(gameBoard[row][col]===gameBoard[row-1][col] && gameBoard[row-1][col]===gameBoard[row-2][col])    //checking rows
        {setWinner(gameBoard[row][col])
          setGameOver(true)}
      else if(gameBoard[row][col]===gameBoard[row][col-1] && gameBoard[row][col-1]===gameBoard[row][col-2])  //checking cols
        {setWinner(gameBoard[row][col])
          setGameOver(true)}
      }
    }
    //reverse diagnol
    else if(Math.abs(row-col)==2){
        if(gameBoard[0][2]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][0]){
          setWinner(gameBoard[row][col])
          setGameOver(true)
        }
        else if(gameBoard[0][col]===gameBoard[1][col] && gameBoard[1][col]===gameBoard[2][col]){
          setWinner(gameBoard[row][col])
          setGameOver(true)
    }
    else if(gameBoard[row][0]===gameBoard[row][1] && gameBoard[row][1]===gameBoard[row][2]){
      setWinner(gameBoard[row][col])
      setGameOver(true)}
    }
    else{
      if(gameBoard[row][0]===gameBoard[row][1] && gameBoard[row][1]===gameBoard[row][2]){
        setWinner(gameBoard[row][col])
        setGameOver(true)
      }
      else if(gameBoard[0][col]===gameBoard[1][col] && gameBoard[1][col]===gameBoard[2][col]){
        setWinner(gameBoard[row][col])
        setGameOver(true)
      }
    }
   
  }

  return (
    <div className='flex flex-col items-center justify-center mt-10 pt-10'>
<div className='block space-y-3'>
{
  rows.map((row,ind)=>{
return(
  
      <div className='flex items-center justify-center space-x-3'>
        {
  cols.map((col,index)=>{
    return(
  <Tile col={index} row={ind} value={gameBoard[ind][index]} setValue={setValue}/>
  )
  })
}
</div> 

  )}

)}
</div>
 <div className='flex items-center justify-center pr-5'>
      <button onClick={reset} className='rounded-3xl border-2 mt-10 text-white text-xl px-5 py-3'>Reset</button>
      </div>

  <div className='text-center mt-3'> 
    <h1 className='text-white text-2xl '>Next Player: {playerTurn}</h1>
  </div>
  <div className='bg-black text-black'>
  <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
theme='dark'
/>
  </div>

    </div>
  )
}

export default GameBoard