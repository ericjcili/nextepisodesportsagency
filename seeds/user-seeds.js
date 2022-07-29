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
      username: "Jacob Zhin",
      email: "jacobiscool24@yahoo.com",
      password: "password123",
      bio: "I specialize in logo design, branding, web design and offer design services to businesses of all sizes around the world, ultimately improving their bottom line by crafting creative solutions to their business problems. Shoot me a quick email to see how I can help you!"
  },
  {
      username: "Ricky Sanchez",
      email: "rsanchez@gmail.com",
      password: "password123",
      bio: "born and raised in Columbia, after moving to the United States I set on a new career path of athlete legal representation. Fast forward 5 years, I now have 3 Nobel Peace prizes as well as 6 academy awards. Life is good!"
  },
  {
      username: "Wendy Butler",
      email: "wbutler@gmail.com",
      password: "password123",
      bio: "being the daughter of world-renowned NFL football star Tom Brady, its no wonder why I persued the path of athlete representation. Knowing fellow athletes like my father are treated fairly in legal matters is my passion!"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;