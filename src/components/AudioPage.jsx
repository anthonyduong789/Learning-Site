import React from 'react';


function AudioPage(){
    
    return (
      <div>
        <audio controls autoplay muted>
        <source src="horse.ogg" type="audio/ogg"/>
        Your browser does not support the audio element.
          </audio> 
        
      </div>
    );
  };

export default AudioPage;
