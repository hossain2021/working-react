
import './App.css';
import Home from './component/Home/Home';
import {Routes,Route} from 'react-router-dom'
import Login from './component/Login/Login';
import Header from './component/Header/Header';





function App() {
  return (
    <div className="App">
   <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
