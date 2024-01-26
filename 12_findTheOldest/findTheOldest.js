const findTheOldest = function(arr) {
    let res;
    let max = 0;
    for (let ppl of arr)
    {
        let age = - ppl['yearOfBirth'];
        if (!ppl['yearOfDeath'])
        {
            age += 2024;
        }
        else{
            age += ppl['yearOfDeath'];
        }
        if (age>max)
        {
            max = age;
            res = ppl;
        }
    }
    return res;

};

// Do not edit below this line
module.exports = findTheOldest;
