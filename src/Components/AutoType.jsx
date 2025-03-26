import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function AutoTyping() {
  return (
    <h2  style={{ color: 'rgb(11, 209, 21)', fontWeight: 'lighter' }}>
      <span style={{color:'#fff',fontWeight:'lighter'}}>I'm a {' '}</span>
      <Typewriter
        words={['Full Stack Developer', 'Web Developer', 'MERN Stack Developer']}
        loop={Infinity}

        cursor
        cursorColor='rgb(5, 252, 100)'
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h2>
  );
}

export default AutoTyping;

