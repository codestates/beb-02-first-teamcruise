import React from 'react';

const Home = () => {

	const HeadText = "Discover, collect, and sell extraordinary NFTs"
	const DescText = "OpenSea is the world's first and largest NFT marketplace"

	return(
		<div>
			<div style={{float: 'left', width: '40%', padding: '3% 3% 3% 3%', margin: 'auto'}}>
					<div style={{margin: "auto"}}>
						<h1 style={{textAlign: 'left'}}>{HeadText}</h1>
						<h3 style={{textAlign: 'left', color: 'gray'}}>{DescText}</h3>
					</div>
					{/* button from https://getbootstrap.com/docs/4.3/components/buttons/ */}
					<div style={{display: "flex", marginTop: "10%", justifyContent: "center"}}>
						<button type="button" class="btn btn-primary btn-lg" style={{width: "25%", marginRight: "10%"}}>Explore</button>
						<button type="button" class="btn btn-outline-primary btn-lg" style={{width: "25%", marginRight: "10%"}}>Create</button>
					</div>
			</div>
			<div className="div-right" style={{float: 'right', width: '55%', padding: '3% 3% 3% 3%', margin: 'auto'}}>
				<img src="https://www.coindeskkorea.com/news/photo/202103/73065_10919_4125.jpg" width="100%" height="100%"></img>
			</div>
		</div>
	);

}

export default Home;