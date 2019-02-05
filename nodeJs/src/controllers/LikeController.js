const TweetSchema = require('../models/tweet');

module.exports = {
    async store(req, res) {
        const tweet = await TweetSchema.findById(req.params.id)

        tweet.set({ likes: tweet.likes + 1});

        await tweet.save();

        req.io.emit('like', tweet)

        return res.json(tweet);
    }
};