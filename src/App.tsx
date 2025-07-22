import { useState } from 'react'
import './App.css'
import {input_items} from './consts.tsx'

import SearchForm from './components/SearchForm.tsx';


function App() {

  return (
    <>
        <SearchForm data={ input_items }></SearchForm>
    </>
  )
}

export default App
