import React from 'react';
import './style.scss';

type videoProps = {
  height : number,
  width : number,
  title : string,
  src : string
}

export default function Video({width, height, title, src} : videoProps) {
  return (
    <div className="video">
      <iframe 
        className="iframe" 
        src={`https://www.youtube-nocookie.com/embed/${src}?autoplay=1`} 
        height={height} 
        width={width} 
        title={title} 
        allow="autoplay"
      />    
    </div>
  );
}
