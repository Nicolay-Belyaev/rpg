const {names, secondNames, job, city} = require("./dataSourse.js");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function generateRandomMan () {
    return {
        name: names[getRandomInt(names.length - 1)],
        secondName: secondNames[getRandomInt(secondNames.length - 1)],
        city: city[getRandomInt(city.length -1)],
        job: job[getRandomInt(job.length - 1)]
    }
}

export function generateRandomMansList (exemplarsAmount) {
    let rndMansList = [];
    for (let i = 0; i < exemplarsAmount; i++) {
        rndMansList.push(generateRandomMan());
    }
    return rndMansList;
}

