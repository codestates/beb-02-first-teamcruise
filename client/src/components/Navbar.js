import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

	return (
			<div className="navbar">
					<input placeholder="Search" className="search_bar"></input>
					<button className="search_button">🔍</button>
				<ul className="link">
					<Link to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}><li>Explore</li></Link>
					<Link to="/create" style={{ textDecoration: 'none', color: 'inherit' }}><li>Create</li></Link>
					<Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}><li>ConnectWallet</li></Link>
				</ul>
			</div>
	);
};

export default Navbar;