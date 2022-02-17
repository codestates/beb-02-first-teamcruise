# Branch: mingyun#

0217 push list
1. 창현님 브랜치와 merge
2. client/src/contract 추가<br>
    client 측에서 컨트랙트를 사용해야 하는 경우, contract의 ABI가 필요.<br>
    이 폴더에는 본 프로젝트에서 사용할 ERC721 contract 파일과 ABI가 저장되어 있음.<br>
    현재 push한 contract 파일은 urclass에 올라온 버전과 동일.
3. client/src/functions 추가<br>
    * buyToken : 토큰을 구매하는 function. 구매자가 토큰 소유자의 어카운트로 원하는 만큼의 이더를 송금한 후,이더 송금에 성공한다면 token을 전송하는 함수(sendToken)을 호출.
    * sendToken: 토큰 소유자 어카운트에서 토큰 구매 희망자 어카운트로 NFT 토큰을 전송. 제 3자에게 토큰 전송 권한을 부여하여 transferFrom 메서드를 호출. 성공적으로 NFT 전송이 완료되면 true를 반환.
    * getErc721Contract : src/contract에 저장된 ABI를 통해 컨트랙트 객체를 가져온다. 
        ```
        return {erc721Contract, tokenName, tokenSymbol, totalSupply}
        ```
    * getWeb3.js : window.ethereum을 이용하여 web3 객체를 할당한 후 반환.


더 자세한 사용 방법은 나중에 추가하겠습니당!