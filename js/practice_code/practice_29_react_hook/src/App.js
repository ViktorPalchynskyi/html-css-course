import React, { useEffect, useState } from "react";

function useLogger(value) {
  useEffect(()=> { 
    console.log('Value changed: ', value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = event =>  {
    setValue(event.target.value);
  };

  const clear = () => setValue('');

  return{ 
   bind: { value, onChange},
   value,
   clear
  };
}

function App() {

  const input = useInput('');
  const lastName = useInput('');

  useLogger(input.value);
  useLogger(lastName.value);

  return(
    <div className={"container pt-3"}>
      <input type="text" {...input.bind}/>
      <input type="text" {...lastName.bind}/>
      <hr/>
      <h1>{input.value} {lastName.value}</h1>
      <button className="btn btn-warning" onClick={input.clear}>Очистить</button>
      <button className="btn btn-success" onClick={()=> lastName.clear()}>Очистить2</button>
    </div>
  )
}

export default App;
