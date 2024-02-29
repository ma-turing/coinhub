import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Footer from "./views/Footer/Footer";
import Header from "./views/Header/Header";
import Home from "./views/Home/Home";
import Error from "./views/Error/Error";
import Explore from "./views/Explore/Explore";
import store from "./store";
import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Header />
				<Routes>
					<Route path="/*" element={<Home />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</Router>
		</Provider>
	);
}

export default App;
