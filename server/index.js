const express = require("express");
const cors = require('cors');

const app = express();

const controllers = require("./controllers")

app.use(express.json());
app.use(
    cors({
      origin: "*",
      credentials: true,
      methods: ['GET', 'POST', 'OPTIONS']
    })
  );

app.get("/", (req, res)=> {
    res.send("Hello World");
});

app.get("/getAllNFT", controllers.getAllNFT);
app.get("/getWhoesNFT", controllers.getWhoesNFT);

// http listen port 생성 서버 실행
app.listen(4000, () => console.log("server running..."));