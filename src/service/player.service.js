const redis = require('../config/redis.config')

const PlayerService = {
    create(playerName) {
        redis.set("player", playerName)
    },
}

module.exports = PlayerService