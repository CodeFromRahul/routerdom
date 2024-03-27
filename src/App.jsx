import { useState } from 'react'


import Layout from './Layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout/>
    </>
  )
}

export default App
