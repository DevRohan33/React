import React from 'react'
import Hello from './components/Hello';
import Greeting from './components/Greeting';
import Counter from './components/counter';
import ClickMe from './components/ClickMe';

function App() {
  console.log("App Render")
  return (
    <>
    <div className="p-4">
      <Hello/>
      <Greeting name="Suman"/>
      <Greeting name="Bob"/>
      <Counter/>
      <ClickMe/>
    </div>
    </>
  )
}

export default App
