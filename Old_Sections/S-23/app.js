// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// function greet(person, msg = ("Hey")) {
//     console.log(`${msg}, ${person}`)
// }



// //spead:
// nums = [2, 1, 5, 65, 434, 657, 4, 3, 45, 67, 8, 84, 2, 221, 4, 6];
// Math.max(...nums)

// const cats = ["Mittens", "Mistery", "vanilla"];
// const dogs = ["Snooky", "Wyatt", "Stoney", "Remington", "blake", "bud", "Rahgar", "Visarion"];
// const snakes = ["Neisa", "Blaerion"];
// const allPets = [...cats, ...dogs, ...snakes];

// // Rest Params:
// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

// function raceResults(gold, silver, ...everyongElse) {
//     console.log(`GOLD GOES TO: ${gold}`)
//     console.log(`SILVER GOES TO: ${silver}`)
//     console.log(`AND THANKS TO EVERYONE ELSE: ${everyongElse}`)
// }

// //Destructuring Arrays:
// const scores = [10, 9, 8, 7, 6, 5, 4];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// const [gold, silver, bronze] = scores;

//Destructuring Objects:






const movies = [
    {
        title: "The Matrix",
        score: 87,
        year: 1999
    },
    {
        title: "Inception",
        score: 91,
        year: 2010
    },
    {
        title: "Interstellar",
        score: 74,
        year: 2014
    },
    {
        title: "Parasite",
        score: 96,
        year: 2019
    },
    {
        title: "Joker",
        score: 69,
        year: 2019
    },
    {
        title: "Toy Story",
        score: 95,
        year: 1995
    },
    {
        title: "Avatar",
        score: 82,
        year: 2009
    },
    {
        title: "Titanic",
        score: 89,
        year: 1997
    },
    {
        title: "Finding Nemo",
        score: 93,
        year: 2003
    },
    {
        title: "The Godfather",
        score: 100,
        year: 1972
    }
];

//Destructuring Params:
movies.filter(({ score }) => score >= 90)

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})