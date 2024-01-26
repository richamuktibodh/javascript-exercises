const sumAll = function(first_num, second_num) 
{
    if (first_num<0 || second_num < 0 || typeof first_num !== 'number' || typeof second_num !== 'number')
    {
        return 'ERROR';
    }
    if (first_num>second_num)
    {
        let temp = first_num;
        first_num = second_num;
        second_num = temp;
    }
    let total_sum = 0;
    let val = first_num;
    while(val <= second_num)
    {
        total_sum += val;
        val++;
    }
    return total_sum;
};

// Do not edit below this line
module.exports = sumAll;
