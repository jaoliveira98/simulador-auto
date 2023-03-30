function CarDetails({
  heading,
  description,
  selectedCar,
  year,
  engine,
  hp,
  binary,
  price,
}) {
  return (
    <div className="container mx-auto overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-gray-900">{heading}</h3>
        <p className="mt-1 text-gray-500">{description}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {selectedCar && (
            <div className="bg-gray-50 text-black px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <p>Make: {selectedCar.make}</p>
              <p>Model: {selectedCar.model}</p>
              <p>Year: {year}</p>
              <p>Engine: {engine}</p>
              <p>Horse Power: {Math.ceil(hp)} HP</p>
              <p>Binary: {Math.ceil(binary)} NM</p>
              <p>Price: {Math.ceil(price)} €</p>
              <img
                src={selectedCar.image}
                alt={`${selectedCar.make} ${selectedCar.model}`}
                style={{ maxWidth: "300px" }}
              />
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
export default CarDetails;
