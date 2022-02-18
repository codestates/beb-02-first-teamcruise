import React from 'react';

const Erc721 = () => {
	return(
		<div className="erc721list">
			<div style={{ width: '24%', height: '500px',  padding: '1.5% 1.25% 1.5% 1.25%', marginLeft: '15px', marginTop: '15px', border: '2.5px solid rgb(0, 0, 0)', float: 'left' }}>
				<img src='https://i.pinimg.com/736x/f9/f0/ac/f9f0ac4cd288169798b49a6f499b0736.jpg' style={{width: '100%', height: '300px'}} alt='example_nft_info'></img>
				<span style={{ }}>
					<h3 style={{ textAlign: 'left', fontSize: '20px'}}>{'소유자 지갑주소'}</h3>
				</span>
				<span style={{float: 'left'}}>
					<h3 style={{ textAlign: 'left', fontSize: '20px'}}>{'NFT 이름'}</h3>
				</span>
				<span style={{float: 'right'}}>
					<h3 style={{ textAlign: 'right', fontSize: '20px'}}>{'가격'}</h3>
				</span>
			</div>
		</div>
	);
}

export default Erc721;