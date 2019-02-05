const TweetSchema = require('../models/tweet');

module.exports = {
    async index(req, res) {
        const tweets = await TweetSchema.find({}).sort('-createdAt')

        return res.json(tweets);
    },

    async store(req, res) {
        const tweet = await TweetSchema.create(req.body);

        return res.json(tweet)
    }
}