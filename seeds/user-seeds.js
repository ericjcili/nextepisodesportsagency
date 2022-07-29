const { User } = require('../models');

const userData = [
  {
    username: "Eric Cili",
    email: "ericrocks2000@gmail.com",
    password: "password123",
    bio: "a dedicated Web Developer with a passion of learning as much as I can in a lifetime. My hobbies include anything to do with computers and art/design. After building my own computer when I was 15, I quickly became enthralled with computer science."
  },
  {
    username: "Jenny Higgins",
    email: "kaylaisawesome@gmail.com",
    password: "password123",
    bio: "from the marketing world, Jenny has her awesome manner of telling things about herself without bragging too much. She has got the credentials to build a lengthy list but as she keeps it short and smart to keep the audience interested in her."
  },
  {
      username: "Jaffrey McDonald",
      email: "jacobiscool24@yahoo.com",
      password: "password123",
      bio: "I specialize in logo design, branding, web design and offer design services to businesses of all sizes around the world, ultimately improving their bottom line by crafting creative solutions to their business problems. Shoot me a quick email to see how I can help you!"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;