import { useRef, useEffect, useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

const BackgroundBalls = () => {
  const { isBackgroundActive, isBurgerActive, ballCountValue, ballRadiusValue, ballSpeedValue } = useContext(GlobalContext);
  const paused = isBurgerActive;

  const canvasRef = useRef(null);
  const balls = useRef([]);
  const animationFrameId = useRef(null);
  const pauseTimeoutId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    window.addEventListener('resize', setCanvasSize);

    class Ball {
      constructor() {
        this.radius = Math.random() * 2 + parseFloat(ballRadiusValue);
        this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
        this.y = Math.random() * (canvas.height - this.radius * 2) + this.radius;
        this.dx = (Math.random() - 0.5) * parseFloat(ballSpeedValue);
        this.dy = (Math.random() - 0.5) * parseFloat(ballSpeedValue);
        this.color = 'rgba(255, 255, 255, 1)';
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }

      updateRadius(newBallRadius) {
        this.radius = Math.random() * 2 + parseFloat(newBallRadius);
      }

      updateSpeed(newVelocity) {
        var newXV = (Math.random() - 0.5) * parseFloat(newVelocity);
        var newYV = (Math.random() - 0.5) * parseFloat(newVelocity);
        this.dx = newXV;
        this.dy = newYV;
      }
    }

    const createBalls = (count) => {
      const newBalls = [];
      for (let i = 0; i < count; i++) {
        newBalls.push(new Ball());
      }
      return newBalls;
    };

    // Initialize balls if empty or count has changed
    if (balls.current.length !== ballCountValue) {
      balls.current = createBalls(ballCountValue);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.current.forEach((ball) => ball.update());
      animationFrameId.current = requestAnimationFrame(animate);
    };

    if ((!paused) && (isBackgroundActive)) {
      // If unpausing, clear any pending pause timeout and start animation immediately
      if (pauseTimeoutId.current) {
        clearTimeout(pauseTimeoutId.current);
        pauseTimeoutId.current = null;
      }
      animate();
    } else {
      animate();
      if (isBackgroundActive){
        pauseTimeoutId.current = setTimeout(() => {
          if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = null;
          }
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 1000);
      } else {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
          animationFrameId.current = null;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (pauseTimeoutId.current) {
        clearTimeout(pauseTimeoutId.current);
      }
    };
  }, [paused, isBackgroundActive, ballCountValue, ballRadiusValue, ballSpeedValue]);

  useEffect(() => {
      if (balls.current.length !== 0) { 
        balls.current.forEach((ball) => { 
          ball.updateRadius(ballRadiusValue);
        });
      }
  }, [ballRadiusValue]);

  useEffect(() => {
      if (balls.current.length !== 0) {
        balls.current.forEach((ball) => {
          ball.updateSpeed(ballSpeedValue);
        });
      }
  }, [ballSpeedValue]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--backgroundColor)',
      }}
    />
  );
};

export default BackgroundBalls;