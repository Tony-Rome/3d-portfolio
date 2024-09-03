import {Route, BrowserRouter as Router, Routes, NavLink} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
    return (
        <main>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </Router>
        </main>
    )
}

export default App;