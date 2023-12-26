import express from 'express';
const server = express();
export{server};
server.get("/", (req, res)=> res.send(`olá dev`)
);