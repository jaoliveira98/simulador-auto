const CarDetails = ({
  heading,
  description,
  selectedCar,
  year,
  engine,
  hp,
  binary,
  price,
}) => {
  return (
    selectedCar && (
      <>
        <div className="container mx-auto">
          <div className="grid grid-col-1 md:grid-cols-2 ">
            <div>
              <p>
                {selectedCar.make} {selectedCar.model}
              </p>
              <img
                src={selectedCar.image}
                alt={`${selectedCar.make} ${selectedCar.model}`}
                style={{ maxWidth: "300px" }}
              />
            </div>

            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <p>Year: {year}</p>
              <p>Engine: {engine}</p>
              <p>Horse Power: {Math.ceil(hp)} HP</p>
              <p>Binary: {Math.ceil(binary)} NM</p>
              <p>Price: {Math.ceil(price)} €</p>
            </div>
          </div>
        </div>
      </>
    )
  );
};
export default CarDetails;
