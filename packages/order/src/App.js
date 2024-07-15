import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import { StylesProvider } from '@mui/material/styles';
// import { StylesProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';
import Some from './components/Jsjl'



function App() {
  console.log("hiiiii")
  return (
    <div className="App">
      <div>
      {/* <StylesProvider > */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/pricing" element={<Pricing/>} />
            <Route path="/" element={<Landing/>} />
            <Route path="/some" element={<Some/>} />
          </Routes>
        </BrowserRouter>
      {/* </StylesProvider> */}
    </div>
    </div>
  );
}

export default App;
