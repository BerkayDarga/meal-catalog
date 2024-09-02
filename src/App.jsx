import { useState } from 'react'
import './App.css'
import { Routes, Route, Router } from 'react-router-dom';

import Home from '../src/homePageComponents/home'
import Meal from '../src/mealPageComponents/mealPage'
import Ingredient from '../src/ingredientComponents/ingredient'

function App() {

  return (
    <>
      {/* <Router> */}

      {/* <Header/> */}

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/meal' element={<Meal />} />
        <Route path='/ingredient' element={<Ingredient />}></Route>


      </Routes>

      {/* </Router> */}
    </>
  )
}

export default App
