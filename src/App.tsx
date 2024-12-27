import './App.css'
import FormPage from './pages/formPage';
import LandingPage from './pages/landingPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/form" element={<FormPage />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
