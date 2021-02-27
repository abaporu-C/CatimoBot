const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    playerName: String,
    playerWins: {type: Number, default: 0},
    playerLoses: {type: Number, default: 0},
    highscore: {type: Number, default: 0}
});

module.exports = mongoose.model('Player', playerSchema, 'players');