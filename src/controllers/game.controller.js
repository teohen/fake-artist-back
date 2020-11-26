const GameService = require("../service/game.service")

const GameController = {
    create(code){
        return GameService.create(code)
    },
    async getGame(code) {
        return await GameService.findByCode(code);
    }
}

module.exports = GameController