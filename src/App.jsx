import { useState } from 'react'
import './App.css'
import { Routes, Route, Router } from 'react-router-dom';

import Header from "../src/homePageComponents/header"

import Home from '../src/homePageComponents/home'
import Meal from './mealPageComponents/meal'
import Ingredient from '../src/ingredientComponents/ingredient'

function App() {

  return (
    <>
      {/* <Routerx> */}

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/meal/:idMeal' element={<Meal />} />
        <Route path='/ingredient/:idIngredient' element={<Ingredient />} />


      </Routes>

      {/* </Router> */}
    </>
  )
}

export default App
