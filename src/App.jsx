import "./App.css";
import { Search, Highlight } from "./components/index.js";
import { video, logo } from "./assets/index.js";

function App() {
  return (
    <>
      <div id="video-background">
        <video autoPlay muted loop>
          <source src={video} type="video/webm" />
        </video>
      </div>
      <Highlight />
      <div className="flex items-center justify-center h-[100vh]">
        <div className="flex items-center flex-col">
          <img src={logo} alt="Logo" className="w-[300px]" />
          <Search />
        </div>
      </div>
    </>
  );
}

export default App;
