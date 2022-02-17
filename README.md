# Branch: mingyun#

## 0217 push list
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


---
## client/src/functions/buyToken.js
* description<br>
    NFT 토큰을 구매하고자 할 때 호출하는 버튼.<br>
    함수의 흐름은 (유효성 검사 이것 저것) -> (이더 전송 - sendEther 함수) -> (성공 시, sendToken 함수 호출).

* parameters<br>
    1. web3: web3 객체
    2. tokenAddr: ERC721 토큰의 컨트랙트 주소
    3. tokenId: 구매하고자 하는 NFT 토큰의 ID
    4. tokenOwner: 구매하고자 하는 NFT 토큰의 소유자 어카운트 주소
    5. tokenPrice: 구매하고자 하는 NFT의 가격
    6. tokenBuyer: 해당 NFT 토큰을 구매하고자 하는 사람의 어카운트 주소

* return<br>
    1. 만약 이더 송금에 관련한 유효성 검사를 통과하지 못했을 시에는 alert를 띄운 후 false를 반환.
    2. 이더 송금이 성공적으로 이루어졌다면 성공 alert를 띄운 후 sendToken 함수를 반환.

* 사용 방법<br>
    이 js 파일을 import 하여 함수를 호출할 수 있음.

## client/src/functions/sendToken.js
* description<br>
    NFT 토큰 구매 시, 이더를 성공적으로 전송한 후 NFT의 소유권을 바꿀 때 사용.
    함수의 흐름은 (tokenContract 불러오기) -> (rawTx 객체 만들기) -> (Tx에 서명한 후 트랜잭션 보내기) -> (성공 시, true 반환)

* parameters<br>
    1. web3: web3 객체
    2. tokenAddr: ERC721 토큰의 컨트랙트 주소
    3. tokenId: 구매하고자 하는 NFT 토큰의 ID
    4. tokenOwner: 구매하고자 하는 NFT 토큰의 소유자 어카운트 주소
    5. tokenBuyer: 해당 NFT 토큰을 구매하고자 하는 사람의 어카운트 주소

* return<br>
    1. 만약, NFT 전송 트랜잭션이 성공적으로 채굴되지 못한 경우 alert를 띄운 후 false 반환.
    2. 성공적으로 채굴되었다면(= 즉, 소유권을 잘 바꾸어 주었다면), alert를 띄운 후 true 반환.

* 사용 방법<br>
    이 js 파일을 import 하여 함수를 호출할 수 있음.

    ---
    ## 기타 정보
    1. 왜 이렇게 코드를 짰는지 + 기타 설명<br>
        => https://myumyu-ming.tistory.com/58
    2. front-end와 연결 예시 코드(위 블로그에서 사용한 코드)<br>
        => https://github.com/Seomingyun/OpenseaPractice
