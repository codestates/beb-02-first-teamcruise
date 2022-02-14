import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Explore from './pages/Explore';
import Detail from './pages/Detail';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/create">
							<Create />
						</Route>
						<Route exact path="/explore">
							<Explore />
						</Route>
						<Route exact path="/detail">
							<Detail />
						</Route>
					</Switch>
			</div>
		</BrowserRouter>
		
	);
}

export default App;