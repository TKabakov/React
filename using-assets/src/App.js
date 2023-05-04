import React from "react";
import logo from './assets/logo.png';

//Dispalying an image using import
//Diplaying an image using the require function
//Displaying an image using URL

function App() {
  const profileImg = "https://picsum.photos/400/265";

  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  };

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  };

  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <img
        width={800}
        src={logo}
        alt="Logo"
      />
      <img
        width={1000}
        src={require("./assets/logo.png")}
        alt="Logo"
      />
      <img
        width={1000}
        src={ profileImg }
        alt="Logo"
      />
      <div>
        <button onClick={toggle1}>Caspian Tern 1</button>
        <button onClick={toggle2}>Caspian Tern 2</button>
      </div>
    </div>
  );
}

export default App;