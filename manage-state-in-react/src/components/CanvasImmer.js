import { useImmer } from 'use-immer';
import Background from './components 2/Background.js';
import Box from './components 2/Box.js';


const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, updateShape] = useImmer({
    color: 'orange',
    position: initialPosition
  });
// use updateShape and useImmer
  function handleMove(dx, dy) {
    updateShape(draft =>{
      draft.position.x += dx;
      draftcposition.y += dy;
  });
  }
//add draftr, delete ...position, replace position with draft.position.x 
//and draft.position.y and
// replace : with = operatator

  function handleColorChange(e) {
    updateShape(draft =>{
      draft.color = e.target.value;
    });
  }
//add draftr, delete ...shape, replace color with draft.color
// replace : with = operatator
  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}