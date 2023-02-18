// Import area

import React from 'react'
import { BrowserRouter as Grandparent, Routes as Parent, Route as Child } from 'react-router-dom'
import A from './A';
import B from './B';
import C from './C';
import D from './D';
import E from './Pages/E';

import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Registar from './Pages/Registar';

// Defination area
export default function App() {
  return (
    // Every function return something
    <Grandparent>
        <Parent>
            <Child path='/' element={<Home/>}></Child>
            <Child path='/login' element={<Login/>}></Child>
            <Child path='/Registar' element={<Registar/>}></Child>
            <Child path='/A' element={<A/>}></Child>
            <Child path='/B' element={<B/>}></Child>
            <Child path='/C' element={<C/>}></Child>
            <Child path='/D' element={<D/>}></Child>
            <Child path='/E' element={<E/>}></Child>
            <Child path='*' element={<NotFound/>}></Child>
           
        </Parent>
    </Grandparent>
  )
}

// export area
