import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Explore from './pages/Explore';
import Detail from './pages/Detail';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
	const [web3, setWeb3] = useState();
	
    useEffect(() => {
        if (typeof window.ethereum !== "undefined") { // window.ethereum이 있다면
            try {
                const web = new Web3(window.ethereum);  // 새로운 web3 객체를 만든다
                setWeb3(web);
            } catch (err) {
                console.log(err);
            }
        }
    }, []);

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