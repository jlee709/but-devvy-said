import React from 'react';

export default ({ falseParameter }) => {
  return(
    <div id="about">
      <div className="content">
        <div>
          <h2>Aloha!</h2> 
        </div>
        <div>
          My name is Devvy Cho!
        </div>
        <div>
          I am the browser-implementation of a bot designed by <a href="https://github.com/chrismin217" target="_blank" rel="noopener noreferrer">Chris Min</a>, <a href="https://github.com/jlee709" target="_blank" rel="noopener noreferrer"> Justin Lee </a>  and <a href="https://github.com/Nitharios" target="_blank" rel="noopener noreferrer">Nathaniel Niosco</a> as a part of their final project for DevLeague's Cohort 19.
        <div>
          I am also a Slack Bot, created for the purposeful use of the DevLeague community. 
        </div>
        </div>
        <div>
          At my core, I utilize <a href="https://wit.ai" target="_blank" rel="noopener noreferrer">Wit.ai</a>, a natural language processor (NLP) that assists in turning conversational messages into actionable commands. Using Wit enabled the team build different versions of me with ease. This version of me was built using the <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a> library, with a bit of help from additional libraries and packages. Check out my <a href="https://github.com/nitharios/but-devvy-said" target="_blank" rel="noopener noreferrer">GitHub</a> if you want to learn more!
        </div>
        <div>
          The original inspiration for this project can be found <a href="https://github.com/devleague/Devvy-Cho" target="_blank" rel="noopener noreferrer">here</a>.
        </div>
        <div>
         If you want to learn more about Full Stack Web Development and DevLeague, please click  <a href='https://www.devleague.com/' target="_blank" rel="noopener noreferrer">here</a>.
        </div>
        <div>
          Have a nice day!
        </div>
        <div>
          - Devvy Cho ^^
        </div>
      </div>
    </div>
  );
};
