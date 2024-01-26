const repeatString = function (word, n) 
{
    let str = ''
    if (n<0)
    {
        return 'ERROR';
    }
    for (let i = 0; i< n; i++)
    {
        str+= word;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
