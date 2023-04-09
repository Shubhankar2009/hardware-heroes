import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Idea from "./components/Idea/Idea";
import MyIdea from "./components/Idea/MyIdea";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/idea" element={<Idea/>}/>
        <Route path="/my-idea" element={<MyIdea/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
