import {
  CarDetails,
  PerformanceOptions,
} from "../components/Search/elements/index.js";

const CarDetailsPage = ({ location }) => {
  const { selectedCar, year, engine, hp, binary, price, option, setOption } =
    location.state;

  return (
    <div>
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

export default CarDetailsPage;
