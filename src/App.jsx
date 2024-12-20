import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from "../src/homePageComponents/header"

import Home from '../src/homePageComponents/home'
import Meal from './mealPageComponents/meal'
import Ingredient from '../src/ingredientComponents/ingredient'
import Wrapper from '../src/homePageComponents/wrapper'
import UrunEkleme from '../src/UrunEklemeComponent/UrunEkleme'
import DeleteUpdate from '../src/homePageComponents/deleteUpdate'
import CountryFilters from '../src/ulkeyeGoreFiltreleme/countryFilters'

function App() {

  return (
    <>

      {/* main.jsx te app i BrowserRouter ile sardığım için birdaha sarmama gerek yok */}
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/mealDetail/:idMeal' element={<Meal />} />
        <Route path='/ingredientDetail/:idIngredient' element={<Ingredient />} />
        <Route path='/urunEkleme' element={<UrunEkleme />} />
        <Route path='/deleteUpdate' element={<DeleteUpdate />} />
        {/* <Route path='/countryFilters'></Route> */}
        <Route path="/countryFilters" element={<CountryFilters />} />
        
      </Routes>
      <Wrapper />
    </>
  )
}

export default App
