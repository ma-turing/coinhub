import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./views/Footer/Footer";
import Header from "./views/Header/Header";
import Home from "./views/Home/Home";
import Error from "./views/Error/Error";
import "./App.css";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/*" element={<Home />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
