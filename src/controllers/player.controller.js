const PlayerService = require("../service/player.service")

const PlayerController = {
    create(name) {
        return PlayerService.create(name)
    },
}

module.exports = PlayerController