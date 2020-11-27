const redis = require('../config/redis.config')

const GameService = {
    create(code) {
        redis.set("code", code)
        return { code: code }
    },
    async findByCode() {
        return await redis.get("code")
    }

}

module.exports = GameService