const Input = ({type, placeholder, value, setUserName}) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder}
      value={value}
      onChange={(e) => setUserName(e.target.value)}
    />
  );
}

export default Input;