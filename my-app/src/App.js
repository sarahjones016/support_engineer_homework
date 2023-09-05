import { Route, Routes } from "react-router-dom";
import React from "react";
import './index.css';
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'
import Part4 from './Part4'


function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Part1 />}></Route>
        <Route path='/part2' element={<Part2 />}></Route>
        <Route path='/part3' element={<Part3 />}></Route>
        <Route path='/part4' element={<Part4 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
