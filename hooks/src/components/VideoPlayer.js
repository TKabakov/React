import { useState, useRef, useEffect } from 'react';

function Player({ src, isPlaying }) {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
    }, [isPlaying] // ref and setIsPlaying are omitted in dipendancy arrey,
    //because they are stable (alway return the same result)
    );

    return (
        <video ref={ref} src={src} loop playsInline />
    );
}

export default function VideoPlayer(){
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