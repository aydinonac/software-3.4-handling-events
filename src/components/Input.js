function Input({ value, label, handleNameProp}) {
    const inputHandlerChange = (event) => {
      handleNameProp(event.target.value);
    };
    return (
      <div>
        <label>{label}</label>
        <input value={value} onChange={inputHandlerChange} />
      </div>
  );
}
export default Input;