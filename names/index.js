const listOfPeople = require("../country/state/city/index.js");
const listOfNames = require("../utilities/utils/index.js");

function getPeopleInCity(listOfPeople) {
  return listOfNames(listOfPeople);
}

module.exports = getPeopleInCity;
