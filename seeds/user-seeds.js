const { User } = require('../models');

const userData = [
    {
        username: "Jett Emmerson ",
        password: "jettIsCool123",
        email: "jettEmmerson88@example.com",
        github: "jEmmert",
        twitter: "@jettEmmers_"
    },
    {
        username: "April Delaney",
        password: "imyRocko:(9001)",
        email: "april.delaney@example.com",
        github: "delapril92",
        twitter: "@rockosmoderlifestan"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;