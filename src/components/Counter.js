import { useState } from "react";
import Button from './Button';
import Input from './Input';
import PriceInput from './PriceInput';

function refreshPage() { 
  window.location.reload(false);
}

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Fruit/veg");
  const [price , setPrice] = useState('');
  const [colour, setColour] = useState('black');

  const handleName = (value) => {
    setName(value);
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handlePlus = () => {
    setCount((prevCount) => {

      let newcount = prevCount + 1;
      if (newcount >= 0) {
        setColour('black')
        setName('Fruit/veg')
      }
      if (newcount >= 5) {
        setDiscount(20); 
      }
      return newcount;
    });    
  };

  const handleMinus = () => {
    setCount((prevCount) => {
      let newcount = prevCount - 1;
      if (newcount < 0) {
          setName('Cannot be negative! Please try again')
          // setTimeout(() => {refreshPage()}, 1500);
          setColour('red')
      } 
      if (newcount < 5) {
        setDiscount(0);
      }
      return newcount;
    });
  };

  return (
    <>
      <Input value={name} label="Type in your Product Name:"
      handleNameProp={handleName} />
      <h1 style={{color: colour}}>{name}</h1>
      
      <img src = {require('./watermelons.png')}
      style={{width: 360, height: 40}}></img>
     
      <PriceInput value={price} label="Type in your product Price:"
      onChange={handlePriceChange} />
      <h2>Unit cost £{price}</h2>

      <Button label = "-" handleClick={handleMinus} />
      <span>{count}</span>
      <Button label = "+" handleClick={handlePlus} />

      <h2>Total cost: £{(count*price).toFixed(2)}</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      <span style={{fontSize: 25, background: 'paleGreen',padding: 5,
      border: "2px solid green"}}>Total cost with discount:
      £{(count*price*((100-discount)/100)).toFixed(2)}</span>    
      <br/>
      <button style={{
        width: 200, fontSize: 20, background: '#eee'}} 
        onClick={refreshPage}>Click to restart!</button>
    </>
  );
}
export default Counter;