import './App.css';
import Member from './Member/Member';
import CountryList from './CountryList/CountryList';
import CountryNames from './CountryList/CountryNames';
import PeopleList from './PeopleList/PeopleList';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Member/>
        <PeopleList />
        <CountryNames selected="Russia"/>
        <CountryList/>
      </header>
    </div>
  );
}

export default App;
