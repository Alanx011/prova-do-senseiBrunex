import { Router } from "express";
import { inserirHeroi, listarHerois } from "../repository/HeroiRepository.js";

const server = Router();

  

server.get('/superHeroi', async (req,resp) => {
    try{
        const resposta = await listarHerois();
        resp.send(resposta);
    }catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

    server.post('/Heroi' , async (req, resp) => {
        try{
            const novoHeroi = req.body;
    
            const heroiInserido = await inserirHeroi(novoHeroi);
    
            resp.status(200).send(heroiInserido);
        }  catch (err) {
            resp.status(400).send({
                erro: err.message
            })
        }
    })


export default server;