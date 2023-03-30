function CarDetails({
  heading,
  description,
  selectedCar,
  ano,
  motor,
  cavalos,
  binario,
  preco,
}) {
  return (
    <div className="container mx-auto overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {heading}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{description}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {selectedCar && (
            <div className="bg-gray-50 text-black px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <p>Marca: {selectedCar.marca}</p>
              <p>Modelo: {selectedCar.modelo}</p>
              <p>Ano: {ano}</p>
              <p>Motor: {motor}</p>
              <p>Cavalos: {Math.ceil(cavalos)} CV</p>
              <p>Binario: {Math.ceil(binario)} NM</p>
              <p>Preco: {Math.ceil(preco)} €</p>
              <img
                src={selectedCar.image}
                alt={`${selectedCar.marca} ${selectedCar.modelo}`}
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
