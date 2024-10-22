import { useRef } from 'react';
import './AboutMeArticle.css';

export default function AboutMeArticle() {
  const contextType = "2d";
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctx = canvasRef.getContext(contextType);

 

  return (
    <article className='about-me-frame'>
      <canvas ref={canvasRef}></canvas>
    </article>
  );
}
