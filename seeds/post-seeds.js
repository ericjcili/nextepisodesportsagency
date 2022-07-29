const { Post } = require('../models');

const postData = [
  {
    title: 'The French Language in a Nutshell',
    post_desc: "Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.",
    post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel. Accumsan lacus vel facilisis volutpat est velit. Egestas tellus rutrum tellus pellentesque eu tincidunt. Fames ac turpis egestas maecenas pharetra convallis posuere. Sem et tortor consequat id porta nibh venenatis cras sed. Curabitur gravida arcu ac tortor dignissim convallis. Senectus et netus et malesuada fames. Consequat interdum varius sit amet. Pulvinar sapien et ligula ullamcorper. Euismod in pellentesque massa placerat. Et malesuada fames ac turpis egestas sed tempus urna et. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Suspendisse in est ante in nibh mauris. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Quis eleifend quam adipiscing vitae. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Ipsum a arcu cursus vitae congue mauris rhoncus. Sem et tortor consequat id porta nibh venenatis cras sed. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Lacus laoreet non curabitur gravida arcu. Nulla aliquet enim tortor at auctor urna. Dolor magna eget est lorem ipsum dolor sit amet. Sed enim ut sem viverra aliquet eget. Neque vitae tempus quam pellentesque nec nam aliquam. At in tellus integer feugiat scelerisque varius morbi. Quis viverra nibh cras pulvinar mattis. Amet nisl suscipit adipiscing bibendum est ultricies. Sit amet nulla facilisi morbi tempus iaculis urna id. Eget nunc lobortis mattis aliquam. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Fusce id velit ut tortor pretium. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Risus commodo viverra maecenas accumsan lacus. Pellentesque massa placerat duis ultricies lacus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Amet risus nullam eget felis eget nunc lobortis mattis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. In pellentesque massa placerat duis ultricies lacus sed turpis. Interdum consectetur libero id faucibus. Ac turpis egestas maecenas pharetra convallis. Dui faucibus in ornare quam viverra orci. Sapien et ligula ullamcorper malesuada proin libero nunc.",
    user_id: 1,
    tags: 'Sequelize, MySQL, Express'
  },
  {
    title: 'Handlebars Template Engine',
    post_desc: "Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.",
    post_text: "Lorem ipsum dolor sit amet,acus vel. Accumsan lacus vel facilisis volutpat est velit. Egestas tellus rutrum tellus pellentesque eu tincidunt. Fames ac turpis egestas maecenas pharetra convallis posuere. Sem et tortor consequat id porta nibh venenatis cras sed. Curabitur gravida arcu ac tortor dignissim convallis. Senectus et netus et malesuada fames. Consequat interdum varius sit amet. Pulvinar sapien et ligula ullamcorper. Euismod in pellentesque massa placerat. Et malesuada fames ac turpis egestas sed tempus urna et. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Suspendisse in est ante in nibh mauris. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Quis eleifend quam adipiscing vitae. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Ipsum a arcu cursus vitae congue mauris rhoncus. Sem et tortor consequat id porta nibh venenatis cras sed. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Lacus laoreet non curabitur gravida arcu. Nulla aliquet enim tortor at auctor urna. Dolor magna eget est lorem ipsum dolor sit amet. Sed enim ut sem viverra aliquet eget. Neque vitae tempus quam pellentesque nec nam aliquam. At in tellus integer feugiat scelerisque varius morbi. Quis viverra nibh cras pulvinar mattis. Amet nisl suscipit adipiscing bibendum est ultricies. Sit amet nulla facilisi morbi tempus iaculis urna id. Eget nunc lobortis mattis aliquam. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Fusce id velit ut tortor pretium. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Risus commodo viverra maecenas accumsan lacus. Pellentesque massa placerat duis ultricies lacus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Amet risus nullam eget felis eget nunc lobortis mattis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. In pellentesque massa placerat duis ultricies lacus sed turpis. Interdum consectetur libero id faucibus. Ac turpis egestas maecenas pharetra convallis. Dui faucibus in ornare quam viverra orci. Sapien et ligula ullamcorper malesuada proin libero nunc.",
    user_id: 2,
    tags: 'Express, Handlebars, NPM, Node'
  },
  {
    title: 'Handlebars Partials',
    post_desc: "Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.",
    post_text: 'Partials are another handlebars feature where you can create a partial bit of code for something like post information, or for a comment. You can then use that partial whenever that bit of information is needed for your website.',
    user_id: 3,
    tags: 'Express, Handlebars, Partials'
  },
  {
    title: 'Sessions',
    post_desc: "Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.",
    post_text: 'When a user logs in, a session can be established using a package such as Express Session. A cookie will be saved on the user computer, authenticating them on the website. Cookies can be set for a limited time or indefinitely.',
    user_id: 4,
    tags: 'Java'
  },
  {
    title: 'Hashing',
    post_desc: "Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.",
    post_text: 'A very important part of user authentication is hashing passwords. When a user creates a password and when they log in, sensitive information like the password should be protected. bcrypt is a popular npm package that accomplishes this task.',
    user_id: 5,
  },
  {
    title: 'Express.js',
    post_desc: "Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.",
    post_text: 'Express.js is an easy way to set up a server with JavaScript. With a few lines of code, you can be on your way to hosting a dynamic webpage.',
    user_id: 3,
    tags: 'Express, Java'
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;