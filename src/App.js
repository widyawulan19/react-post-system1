import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { HomeContextProvider } from './context/HomeContext' 

function App() {
  return (
    <div className='App'>
      <HomeContextProvider>
        <Home/>
      </HomeContextProvider>
    </div>

  );
}

export default App;
