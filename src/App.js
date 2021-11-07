import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/home" element={<Home />}></Route>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="*" element={<NotFound />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
