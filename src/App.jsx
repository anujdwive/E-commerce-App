import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
