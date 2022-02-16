import React, { useState} from 'react';
import './Navbar.css';
import Search from './Search';
import { Link } from 'react-router-dom';

const Navbar = () => {

	// 지갑 연결
	
	// 원래는 const로 해야되는데 warning 뜨고 페이지가 멈춰버려서 임시로 let을 씀 
	let [account, setAccount] = useState('');

	const connectWallet = async () => {
        account = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        setAccount(account[0]);
    };


	return (
			<div className="navbar">
					<Search />
				<ul className="link">
					<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><li>Home</li></Link>
					<Link to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}><li>Explore</li></Link>
					<Link to="/create" style={{ textDecoration: 'none', color: 'inherit' }}><li>Create</li></Link>
					{/* <li calssName='metaConnect' style={{cursor: 'pointer'}}onClick={() => { 
						connectWallet();
					}}> { account !== account[0] ? 'ConnectWallet' : `${account}` }</li> */}
					<li calssName='metaConnect' style={{cursor: 'pointer'}}onClick={() => { 
						connectWallet(); console.log(account);
					}}>ConnectWallet</li>
				</ul>
			</div>
	);
};

export default Navbar;