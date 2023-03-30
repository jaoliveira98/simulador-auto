const PerformanceOptions = ({ option, setOption }) => {
  return (
    <div className="flex h-12 justify-center gap-4 mt-10">
      <label>
        <input
          type="radio"
          name="performanceOption"
          value="Eco"
          checked={option === "Eco"}
          onChange={(e) => setOption(e.target.value)}
        />
        Eco
      </label>
      <label>
        <input
          type="radio"
          name="performanceOption"
          value="Flex"
          checked={option === "Flex"}
          onChange={(e) => setOption(e.target.value)}
        />
        Flex
      </label>
      <label>
        <input
          type="radio"
          name="performanceOption"
          value="Sport"
          checked={option === "Sport"}
          onChange={(e) => setOption(e.target.value)}
        />
        Sport
      </label>
    </div>
  );
};

export default PerformanceOptions;
