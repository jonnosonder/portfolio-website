import { useRef, useEffect, useContext  } from 'react';
import { GlobalContext } from '../GlobalContext';

const BackgroundBalls = () => {
  const { isBurgerActive } = useContext(GlobalContext);
  const paused = isBurgerActive;

  const canvasRef = useRef(null);
  const balls = useRef([]);
  const animationFrameId = useRef(null);
  const pauseTimeoutId = useRef(null);

  const ballCount = 40;

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
        this.radius = Math.random() * 2 + 1;
        this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
        this.y = Math.random() * (canvas.height - this.radius * 2) + this.radius;
        this.dx = (Math.random() - 0.5) * 1.5;
        this.dy = (Math.random() - 0.5) * 1.5;
        this.color = 'white';
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
    }

    if (balls.current.length === 0) {
      for (let i = 0; i < ballCount; i++) {
        balls.current.push(new Ball());
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.current.forEach((ball) => ball.update());
      animationFrameId.current = requestAnimationFrame(animate);
    };

    if (!paused) {
      // If unpausing, clear any pending pause timeout and start animation immediately
      if (pauseTimeoutId.current) {
        clearTimeout(pauseTimeoutId.current);
        pauseTimeoutId.current = null;
      }
      animate();
    } else {
      animate();
      pauseTimeoutId.current = setTimeout(() => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
          animationFrameId.current = null;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 1000);
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
  }, [paused]);

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
