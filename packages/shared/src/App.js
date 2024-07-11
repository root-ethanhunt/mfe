
import './App.css';
import TextField from "./components/atom/TextField"
import ToggleButtonGroup from "./components/molecules/ToggleButtonGroup"
import Menu from "./components/atom/Menu"
import Header from './components/organisms/Header'
import SubHeader from './components/organisms/SubHeader.jsx' 

function App() {
  return (
    <div className="App">
      <TextField/>
      <ToggleButtonGroup/>
      <Menu/>
      <Header/>
      <SubHeader/>
    </div>
  );
}

export default App;
