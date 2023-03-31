import { useState } from "react";
import { Select } from "./elements/index.js";
import data from "../../data.json";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [make, setMake] = useState();
  const [model, setModel] = useState();
  const [year, setYear] = useState();
  const [engine, setEngine] = useState();
  const [option, setOption] = useState("Flex");

  // Returns and sorts the options available for selecting: brand, model, year, and engine
  function getSearch(make, model, year, engine) {
    const makes = Array.from(new Set(data.map((car) => car.make))).sort();

    const models = Array.from(
      new Set(
        data.filter((car) => make && car.make === make).map((car) => car.model)
      )
    ).sort();

    const years = Array.from(
      new Set(
        data
          .filter(
            (car) => make && model && car.make === make && car.model === model
          )
          .map((car) => `${car.year.begin} - ${car.year.end}`)
      )
    ).sort();

    const engines = Array.from(
      new Set(
        data
          .filter(
            (car) =>
              make &&
              model &&
              year &&
              car.make === make &&
              car.model === model &&
              `${car.year.begin} - ${car.year.end}` === year
          )
          .map(
            (car) =>
              `${car.engine.cc} ${car.engine.model}, ${car.engine.hp} hp, ${car.engine.fuel}`
          )
      )
    ).sort();

    const selectedCar = data.find(
      (car) =>
        make &&
        model &&
        year &&
        engine &&
        car.make === make &&
        car.model === model &&
        `${car.year.begin} - ${car.year.end}` === year &&
        `${car.engine.cc} ${car.engine.model}, ${car.engine.hp} hp, ${car.engine.fuel}` ===
          engine
    );
    return { selectedCar, makes, models, years, engines };
  }

  const { selectedCar, makes, models, years, engines } = getSearch(
    make,
    model,
    year,
    engine
  );

  // Returns yearther function, which calculates the values of a selected car based on the user's performance option.
  function getCarValues() {
    return (car) => {
      if (!car) return {};

      const { engine, price } = car;
      let { hp, binary } = engine;

      switch (option) {
        case "Eco":
          binary *= 1.2;
          hp *= 1.2;
          return { binary, hp, price: price + 50 };
        case "Flex":
          binary *= 1.3;
          hp *= 1.3;
          return { binary, hp, price };
        case "Sport":
          binary *= 1.4;
          hp *= 1.4;
          return { binary, hp, price: price + 100 };
        default:
          return {};
      }
    };
  }

  const calculateValues = getCarValues();

  // Destructure the returned object into "binary", "hp", and "price" variables.
  const { binary, hp, price } = calculateValues(selectedCar);

  const searchAvailable = make && model && year && engine;

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchAvailable) {
      localStorage.setItem("selectedCar", JSON.stringify(selectedCar));
      localStorage.setItem("year", year);
      localStorage.setItem("engine", engine);
      localStorage.setItem("hp", hp);
      localStorage.setItem("binary", binary);
      localStorage.setItem("price", price);
      localStorage.setItem("option", option);

      navigate(`/${make}-${model}`);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col md:flex-row h-12 justify-center gap-4 mb-10 ">
        <Select
          value={make}
          onChange={(e) => {
            setMake(e.target.value);
            setModel();
            setYear();
            setEngine();
          }}
          map={makes}
          placeholder="Select make"
        />

        <Select
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
            setYear();
            setEngine();
          }}
          disabled={!make}
          map={models}
          placeholder="Select model"
        />

        <Select
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            setEngine();
          }}
          disabled={!model}
          map={years}
          placeholder="Select year"
        />

        <Select
          value={engine}
          onChange={(e) => {
            setEngine(e.target.value);
          }}
          disabled={!year}
          map={engines}
          placeholder="Select engine"
        />
      </div>
      <button
        className={`flex items-center gap-4 px-4 py-3 rounded text-[#5f0e0d] uppercase strokeme font-bold ${
          searchAvailable ? " bg-[#a11c1a] " : "bg-[#9B2A1D] "
        }`}
        onClick={handleSearch}
        disabled={!searchAvailable}
      >
        <div
          className={`h-2 w-5 duration-300 shadow-md rounded-full ${
            searchAvailable ? " bg-[#3bf550]" : "bg-[#858585]"
          }`}
        />
        Simulate
      </button>
    </div>
  );
};
export default Search;
