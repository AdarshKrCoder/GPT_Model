import React from 'react'
import { Article,Brand,CTA ,Navbar} from './components'
import {Footer,Blog,Possibility,Features,whatGPT3,Header}from './containers'
import './App.css'


const App = () => {
  return (
    <div className='App'> 
        
        <div  className='gradient__bg'>
           <Navbar/>
           <Header/>
        </div>
        <Brand/>
        <whatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Footer/>

    </div>
  )
}

export default App