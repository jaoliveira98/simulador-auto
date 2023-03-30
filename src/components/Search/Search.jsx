import { useState } from "react";
import { CarDetails, Select, PerformanceOptions } from "./elements/index.js";
import data from "../../data.json";

const Search = () => {
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();
  const [ano, setAno] = useState();
  const [motor, setMotor] = useState();
  const [option, setOption] = useState("Flex");

  // Retrieves and sorts the options available for selecting: brand, model, year, and engine
  function getSearch(marca, modelo, ano, motor) {
    const marcas = Array.from(new Set(data.map((car) => car.marca))).sort();

    const modelos = Array.from(
      new Set(
        data
          .filter((car) => marca && car.marca === marca)
          .map((car) => car.modelo)
      )
    ).sort();

    const anos = Array.from(
      new Set(
        data
          .filter(
            (car) =>
              marca && modelo && car.marca === marca && car.modelo === modelo
          )
          .map((car) => `${car.ano.inicio} - ${car.ano.fim}`)
      )
    ).sort();

    const motores = Array.from(
      new Set(
        data
          .filter(
            (car) =>
              marca &&
              modelo &&
              ano &&
              car.marca === marca &&
              car.modelo === modelo &&
              `${car.ano.inicio} - ${car.ano.fim}` === ano
          )
          .map(
            (car) =>
              `${car.motor.cilindrada} ${car.motor.modelo}, ${car.motor.cavalos} CV, ${car.motor.combustivel}`
          )
      )
    ).sort();

    const selectedCar = data.find(
      (car) =>
        marca &&
        modelo &&
        ano &&
        motor &&
        car.marca === marca &&
        car.modelo === modelo &&
        `${car.ano.inicio} - ${car.ano.fim}` === ano &&
        `${car.motor.cilindrada} ${car.motor.modelo}, ${car.motor.cavalos} CV, ${car.motor.combustivel}` ===
          motor
    );
    return { selectedCar, marcas, modelos, anos, motores };
  }

  const { selectedCar, marcas, modelos, anos, motores } = getSearch(
    marca,
    modelo,
    ano,
    motor
  );

  // Returns another function, which calculates the values of a selected car based on the user's performance option.
  function getCarValues() {
    return (car) => {
      if (!car) return {};

      const { motor, preco } = car;
      let { cavalos, binario } = motor;

      switch (option) {
        case "Eco":
          binario *= 1.2;
          cavalos *= 1.2;
          return { binario, cavalos, preco: preco + 50 };
        case "Flex":
          binario *= 1.3;
          cavalos *= 1.3;
          return { binario, cavalos, preco };
        case "Sport":
          binario *= 1.4;
          cavalos *= 1.4;
          return { binario, cavalos, preco: preco + 100 };
        default:
          return {};
      }
    };
  }

  const calculateValues = getCarValues();

  // Destructure the returned object into "binario", "cavalos", and "preco" variables.
  const { binario, cavalos, preco } = calculateValues(selectedCar);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex h-12 justify-center gap-4 mb-10">
        <Select
          value={marca}
          onChange={(e) => {
            setMarca(e.target.value);
            setModelo();
            setAno();
            setMotor();
          }}
          map={marcas}
          placeholder="Select marca"
        />

        <Select
          value={modelo}
          onChange={(e) => {
            setModelo(e.target.value);
            setAno();
            setMotor();
          }}
          disabled={!marca}
          map={modelos}
          placeholder="Select modelo"
        />

        <Select
          value={ano}
          onChange={(e) => {
            setAno(e.target.value);
            setMotor();
          }}
          disabled={!modelo}
          map={anos}
          placeholder="Select ano"
        />

        <Select
          value={motor}
          onChange={(e) => {
            setMotor(e.target.value);
          }}
          disabled={!ano}
          map={motores}
          placeholder="Select motor"
        />
      </div>

      <CarDetails
        heading="Details"
        description="Car information"
        selectedCar={selectedCar}
        ano={ano}
        motor={motor}
        cavalos={cavalos}
        binario={binario}
        preco={preco}
      />

      {motor && <PerformanceOptions option={option} setOption={setOption} />}
    </div>
  );
};
export default Search;
