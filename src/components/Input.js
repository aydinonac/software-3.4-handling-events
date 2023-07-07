function Input({ value, label, onChange}) {
    const inputHandlerChange = (event) => {
      onChange(event.target.value);
    };
    return (
      <div>
        <label>{label}</label>
        <input value={value} onChange={inputHandlerChange} />
      </div>
  );
}
export default Input;