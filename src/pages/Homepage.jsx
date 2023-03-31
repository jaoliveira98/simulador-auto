import { Search, Highlight } from "../components/index.js";
import { video, logo } from "../assets/index.js";

const Homepage = () => {
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
          <img src={logo} alt="Logo" className="w-[300px] mb-8" />
          <h4>
            Liberte todo o potencial do seu veículo com a ajuda da Autopicapau
          </h4>
          <p className="mb-8">
            Indique-nos qual a sua viatura e descubra o que tem estado a perder!
          </p>
          <Search />
        </div>
      </div>
    </>
  );
};

export default Homepage;
