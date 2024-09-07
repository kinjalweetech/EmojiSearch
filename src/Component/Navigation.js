import EmojiPicker from 'emoji-picker-react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<EmojiPicker/>}>

                </Route>
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigation
