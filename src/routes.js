const express = require('express')

const GameController = require('./controllers/game.controller')

const router = express.Router()

router.get('/status', (req, res)  => {
    res.status(200).send({message: "ok"})
})

router.get('/game/:code', async (req, res) => {
    try{
        const game = await GameController.getGame(req.params.code)
        res.status(200).send(game)
    }catch(err){
        console.log(err)
        res.status(500).send({message: "Internal Server Error"})
    }
})

router.post('/game', (req, res) => {
    try{
        const game = GameController.create(req.body.code)
        res.status(200).send(game)
    }catch(err){
        console.log(err)
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = router