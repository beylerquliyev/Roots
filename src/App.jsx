

import {BrowserRouter,Routes,Route, Navigate, } from "react-router-dom"
import Home from "./Home"
import ToDo from "./ToDo"
import NotFound from "./NotFound";
import Setting from "./Setting";
import Movies from "./Movies";
import MovieDetail from "./MovieDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
    
      <Route path="/"  element={<Navigate to="/Home" replace/>}  />
      <Route path="/Home" element={<Home/>}/>
      <Route path="/todos" element={<ToDo/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/settings/*" element={<Setting/ >}  />
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:id" element={<MovieDetail/>}/>


      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
