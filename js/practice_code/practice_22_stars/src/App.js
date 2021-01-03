import './App.css';
import AddColorForm from './AddColorForm';
import StarRating from './rating/StarRating';
import Star from './rating/Star';


const logColor = (title, color) =>
 console.log(`New Color: ${title} | ${color}`)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddColorForm onNewColor={logColor}/>
        <StarRating/>
      </header>
    </div>
  );
}

export default App;
