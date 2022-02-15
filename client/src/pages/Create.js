import React from 'react';
import { Link } from 'react-router-dom';

const Create = () => {
	return(
		<div style={{justifyContent: 'center', width: '50%', padding: '3% 3% 3% 3%', margin: 'auto'}}>
			<div>
				<h3>사진 등록</h3>
				<button class='btn btn-outline-primary btn-lg' style={{width: '100%', height: '450px'}}>
				<i class='glyphicon glyphicon-picture' style={{fontSize: '500%'}}></i>
				</button>
			</div>
			<div>
				<h3>이름*</h3>
				<input style={{textAlign: 'left', width: '100%'}}></input>
			</div>
			<div>
				<h3>외부링크</h3>
				{/* <textarea></textarea> */}
				<input style={{textAlign: 'left', width: '100%'}}></input>
			</div>
			<div>
				<h3>설명</h3>
				<input style={{textAlign: 'left', width: '100%', height: '175px'}}></input>
			</div>
			<div style={{paddingTop: '5%'}}>
				<button type="button" class="btn btn-primary btn-lg" style={{width: "100%"}}>등록</button>
			</div>
		</div>
	);
}

export default Create;