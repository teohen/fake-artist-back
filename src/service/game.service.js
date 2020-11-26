const { create } = require("../controllers/game.controller")

const Redis = require("ioredis");
const redis = new Redis();
 


const GameService = {
    create(code) {
        redis.set("code", code)
        return { code: code}
    },
    async findByCode() {
        return await redis.get("code")
    }

}

module.exports = GameService