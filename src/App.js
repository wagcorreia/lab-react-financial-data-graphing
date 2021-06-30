import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Chart from './Chart'

function App() {
  return (
    <div className="container mt-5">
      <Chart />

      {/* <BrowserRouter>
        <Route path="/" component={Chart} />
      </BrowserRouter> */}
    </div>
  )
}

export default App
