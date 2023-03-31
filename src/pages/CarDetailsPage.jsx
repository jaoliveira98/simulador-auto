import { useState, useEffect } from "react";
import {
  CarDetails,
  PerformanceOptions,
} from "../components/Search/elements/index.js";

const CarDetailsPage = ({ location }) => {
  const [option, setOption] = useState(
    localStorage.getItem("option") || "Flex"
  );
  const selectedCar = JSON.parse(localStorage.getItem("selectedCar")) || null;
  const year = localStorage.getItem("year") || "";
  const engine = localStorage.getItem("engine") || "";

  // Create state for the performance values
  const [performanceValues, setPerformanceValues] = useState({
    hp: parseFloat(localStorage.getItem("hp")) || 0,
    binary: parseFloat(localStorage.getItem("binary")) || 0,
    price: parseFloat(localStorage.getItem("price")) || 0,
  });

  // This function calculates the performance values based on the option and car information
  const calculatePerformanceValues = (car, performanceOption) => {
    if (!car) return {};

    const { engine, price } = car;
    let { hp, binary } = engine;

    switch (performanceOption) {
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

  // Update performance values when the option changes
  useEffect(() => {
    const newPerformanceValues = calculatePerformanceValues(
      selectedCar,
      option
    );
    setPerformanceValues(newPerformanceValues);
  }, [option]);

  return (
    <div className="bg-black">
      <CarDetails
        heading="Details"
        description="Car information"
        selectedCar={selectedCar}
        year={year}
        engine={engine}
        hp={performanceValues.hp}
        binary={performanceValues.binary}
        price={performanceValues.price}
      />
      <PerformanceOptions option={option} setOption={setOption} />
    </div>
  );
};

export default CarDetailsPage;
