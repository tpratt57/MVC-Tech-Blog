const { User } = require('../models');

const userData = [
    {
        username: "",
        password: "",
        email: "",
        github: "",
        twitter: ""
    },
    {
        username: "",
        password: "",
        email: "",
        github: "",
        twitter: ""
    },
    {
        username: "",
        password: "",
        email: "",
        github: "",
        twitter: ""
    },
    {
        username: "",
        password: "",
        email: "",
        github: "",
        twitter: ""
    },
    {
        username: "",
        password: "",
        email: "",
        github: "",
        twitter: ""
    },
    {
        username: "",
        password: "",
        email: "",
        github: "",
        twitter: ""
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;