import React,{useState, useEffect} from "react";
import './index.css';
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom";
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'
import Part4 from './Part4'

function App() {

  const [orgOrmData, setOrgOrmData] = useState([])
  const [accountPlanOrmData, setAccountPlanOrmData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/fakeData')
    .then(resp => resp.json())
    .then((data) => {
      setOrgOrmData(data.organization_orm)
      setAccountPlanOrmData(data.account_plan_orm)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
          <Route path='/' element={<Part1 orgOrmData={orgOrmData}/>}></Route>
          <Route path='/part2' element={<Part2 orgOrmData={orgOrmData} accountPlanOrmData={accountPlanOrmData} />}></Route>
          <Route path='/part3' element={<Part3 orgOrmData={orgOrmData} accountPlanOrmData={accountPlanOrmData} />}></Route>
          <Route path='/part4' element={<Part4 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
