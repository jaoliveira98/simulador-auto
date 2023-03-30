import { useState } from "react";
import { CarDetails, Select, PerformanceOptions } from "./elements/index.js";
import data from "../../data.json";

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

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex h-12 justify-center gap-4 mb-10">
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

      <CarDetails
        heading="Details"
        description="Car information"
        selectedCar={selectedCar}
        year={year}
        engine={engine}
        hp={hp}
        binary={binary}
        price={price}
      />

      {engine && <PerformanceOptions option={option} setOption={setOption} />}
    </div>
  );
};
export default Search;
