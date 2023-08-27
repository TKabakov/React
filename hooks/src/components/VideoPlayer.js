import { useState, useRef, useEffect } from 'react';

function Player ({ src, isPlaying }){
    const ref = useRef (null);

    useEffect(() => {
        if (isPlaying) {
            ref.current.play();
        }
    })


}

export default VideoPlayer(){
    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <div>
            <button onClick = {() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <Player
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </div>
    );

}