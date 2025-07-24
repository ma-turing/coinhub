import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Suspense, lazy } from "react";
import Footer from "./views/Footer/Footer";
import Header from "./views/Header/Header";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import store from "./store";
import "./App.css";

// Lazy load components for code splitting
const Home = lazy(() => import("./views/Home/Home"));
const Error = lazy(() => import("./views/Error/Error"));
const Explore = lazy(() => import("./views/Explore/Explore"));

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Header />
				<Suspense fallback={<LoadingSpinner message="Loading page..." />}>
					<Routes>
						<Route path="/*" element={<Home />} />
						<Route path="/explore" element={<Explore />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</Suspense>
				<Footer />
			</Router>
		</Provider>
	);
}

export default App;
