const TweetSchema = require('../models/tweet');

module.exports = {
    async index(req, res) {
        const tweets = await TweetSchema.find({}).sort('-createdAt')

        return res.json(tweets);
    },

    async store(req, res) {
        const tweet = await TweetSchema.create(req.body);

        req.io.emit('tweet', tweet)//Enviar tweet em tempo real
        return res.json(tweet)
    }
}