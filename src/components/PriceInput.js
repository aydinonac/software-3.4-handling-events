function PriceInput({ value, label, onChange}) {
    const inputPriceChange = (event) => {
      onChange(event.target.value);
    };
    return (
      <div>
        <label>{label}</label>
        <input value={value} onChange={inputPriceChange} />
      </div>
  );
}
export default PriceInput;