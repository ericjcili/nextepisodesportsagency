const User = require('./User');
const Post = require('./Post');
const Athlete = require('./Athlete');

User.hasMany(Post, {
    foreignKey: 'user_id'
});
User.hasMany(Athlete, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
Athlete.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Athlete };
