const returnFirstTwoDrivers = function (names){
    return names.slice(0,2)
}

const returnLastTwoDrivers = function (city){
    return city.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(fare){
        return num*fare
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers)
}