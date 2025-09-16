const findTheOldest = function(people) {
    let currentAge = 0;
    let refAge = 0;

    older = people.reduce(function(a, b){
        b.yearOfDeath = b.yearOfDeath !== undefined ? b.yearOfDeath : new Date().getFullYear();
        currentAge = b.yearOfDeath - b.yearOfBirth;
        if (currentAge > refAge){
            a = { ...b };
            refAge = a.yearOfDeath - a.yearOfBirth;
        }
        return a;
    },{})
    return older;
};

// Do not edit below this line
module.exports = findTheOldest;
