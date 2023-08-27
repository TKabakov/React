import { useState, useRef, useEffect } from 'react';

function Player ({ src, isPlaying }){


}

export default VideoPlayer(){
    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <div>
            <button onClick = {() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            
        </div>
    )

}