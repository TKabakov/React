import logo from './assets/logo.png';

//Dispalying an image using import
//Diplaying an image using the require function

function App() {
  const profileImg = "https://picsum.photos/400/265";
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
    </div>
  );
}

export default App;