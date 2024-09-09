// import EmojiPicker from 'emoji-picker-react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmojiFetch from './EmojiPicker'

function Navigation() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<EmojiFetch/>}>

                </Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigation
