const removeFromArray = function(arr, ...val) 
{
    let new_arr = [];
    let n = val.length;
    // console.log(val);
    for (let arr_val of arr)
    {
        if (!val.includes(arr_val))
        {
            new_arr.push(arr_val);
        }
    }
    return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
