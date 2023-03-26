import {useState,useRef, useEffect} from 'react';
import useInterval from './useInterval';
import {speed, canvasSize, scale, snakeStart, appleStart, directions} from './constants';

function App() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(snakeStart);
  const [apple, setApple] = useState(appleStart);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(400);
  const [gameOver, setGameOver] = useState(false);

  

  const startGame = () => {

  }

  const endGame = () => {
  }

  const moveSnake = ({keyCode}) => 
    keyCode >= 37 && keyCode <= 40 && setDir(directions[keyCode]);
  

  const createApple = () => {
  }

  const checkCollision = (piece, snk = snake) => {
  }

  const checkAppleCollision = (newSnake) => {
  }

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    snakeCopy.pop();
    setSnake(snakeCopy);
  }

  const start = () => {
  }

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.setTransform(scale, 0, 0, scale, 0, 0);
    context.clearRect(0, 0, canvasSize[0], canvasSize[1]);
    context.fillStyle = 'pink';
    snake.forEach(([x,y]) => context.fillRect(x,y,1,1));
    context.fillStyle = 'lightblue';
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  useInterval(() => gameLoop(), speed);

  return (
   <div role="button" tabIndex="0" onKeyDown={e=>{moveSnake(e)}}>
      <canvas
      style={{border: '1px solid black'}}
      ref={canvasRef}
      width={`${canvasSize[0]}px`}
      height={`${canvasSize[1]}px`}
      />
      {gameOver && <div>GAME OVER!</div>}
      <button onClick={startGame}>Start Game</button>
   </div>
  );
}

export default App;


