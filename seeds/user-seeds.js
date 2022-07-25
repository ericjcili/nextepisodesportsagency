const { User } = require('../models');

const userData = [
  {
    username: "Eric Cili",
    email: "ericrocks2000@gmail.com",
    password: "password123"
  },
  {
    username: "Mark Reynolds",
    email: "kaylaisawesome@gmail.com",
    password: "password123"
  },
  {
      username: "Jaffrey Coolfish",
      email: "jacobiscool24@yahoo.com",
      password: "password123"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;