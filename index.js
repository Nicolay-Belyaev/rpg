const {getRandomInt} = require("./utils.js")
const {names, secondNames, job, city} = require("./dataSourse.js");

function generateRandomPerson () {
    return {
        name: names[getRandomInt(names.length - 1)],
        secondName: secondNames[getRandomInt(secondNames.length - 1)],
        city: city[getRandomInt(city.length -1)],
        job: job[getRandomInt(job.length - 1)]
    }
}

function generateRandomPersonList (exemplarsAmount) {
    let rndMansList = [];
    for (let i = 0; i < exemplarsAmount; i++) {
        rndMansList.push(generateRandomPerson());
    }
    return rndMansList;
}

module.exports = { generateRandomPerson, generateRandomPersonList };
