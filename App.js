import './App.css';
import Header from './components/Header';
import UserCard from './components/UserCard';
import data from './data';


function App() {
  return (
    <div className="App">
      <Header />
      <UserCard data={data}/>
    </div>
  );
}

export default App;
