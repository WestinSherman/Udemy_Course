const Buildable = require("./Buildable")
const Comfort = require("./Comfort")
const Deployable = require("./Deployable")

const allShelters = [Buildable, Comfort, Deployable]
console.log(allShelters);

module.exports = allShelters;