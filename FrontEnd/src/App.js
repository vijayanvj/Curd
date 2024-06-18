
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import User from "./User"
import Update from "./Update"
import Create from "./Create"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path ="/" element ={<User/>}></Route>
 <Route path ="/Update/:id" element ={<Update/>}></Route>
 <Route path ="/Create" element ={<Create/>}></Route>
</Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
