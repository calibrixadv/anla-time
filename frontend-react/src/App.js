import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {Navbar} from './components'

import { DateContext } from './constants';
import {StartPage, Hero, DateForm, DateUploadForm, Introduction, Contact, Archive, ErrorPage, Terms, About} from './containers'

import './App.scss';

const App = () =>{
    const [data, setData] = useState('')

    return(
        <div className='app'>
            <BrowserRouter>
                <Navbar/>
                <DateContext.Provider value={{data,setData}}>
                <Routes>
                    <Route exact path='/'
                    element={
                        <>
                            <StartPage/>
                            <Hero/>
                        </>
                    }/>
                    <Route path='/terms&use'
                        element={
                            <Terms/>
                        }
                    />
                    <Route path='/about'
                        element={
                            <About/>
                        }
                    />
                    <Route path='/archive'
                        element={
                            <Archive/>
                        }
                    />
                    <Route path='/calculator'
                        element={
                            <DateForm/>
                        }
                    />
                    <Route path='/contact'
                        element={
                            <Contact/>
                        }
                    />
                    <Route path='/get%20started'
                        element={
                            <Introduction/>
                        }
                    />
                    <Route path='/page-create/:id' 
                        element={
                            <DateUploadForm/>
                        }
                    />
                    <Route path='*'
                        element={
                            <ErrorPage message='the link may expired or it does not exist'/>
                        }
                    />
                </Routes>
                </DateContext.Provider>
            </BrowserRouter>
        </div>

    )
}

export default App