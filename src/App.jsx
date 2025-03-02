import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./components/layout/Layout";

function App() {

  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Layout />} >
          {routes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              element={<route.component />} 
            />
          ))}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
