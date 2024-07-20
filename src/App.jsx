import { useState } from "react";
import Navbar from "./components/Navbar"
import Newsbar from "./components/Newsbar"
import './App.css';


 const App = () => {
  const [category,setCategory]=useState("general"); 
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsbar category={category}/>
    </div>
  )
}
export default App
