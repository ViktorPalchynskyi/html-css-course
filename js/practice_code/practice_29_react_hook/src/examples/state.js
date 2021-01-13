function computeInitialCounter() { 
   console.log('Some calc...');
   return Math.trunc(Math.random() * 20);
  }

const [counter, setCounter] = useState(() => computeInitialCounter());

const [state, setState] = useState({
  title: 'Счетчик',
  data: Date.now()
});

function incriment() { 
  setCounter(prev => prev + 1);
}

function decriment(){ 
  setCounter(prev => prev - 1);
}

function updateTitle() {
  setState(prev => {
    return{
      ...prev,
      title:'Миша в режиме санина'
    };
  });
}

return (
  <div >
    <h1>Счетчик: {counter}</h1>
    <button className="btn btn-success" onClick={incriment}>Добавить</button>
    <button className="btn btn-danger" onClick={decriment}>Отнять</button>
    <button className="btn btn-default" onClick={updateTitle}>Изменить название</button>

    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  </div>
);