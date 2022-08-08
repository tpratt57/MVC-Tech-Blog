const { Post } = require("../models");

const postData = [
    {
        title: "Hello World!",
        post_content: "This is my first blogpost! Hello all!",
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;