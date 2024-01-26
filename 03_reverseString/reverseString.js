const reverseString = function(word) 
{
    let split_str = word.split("");
    let rev_char_str = split_str.reverse();

    let rev_word = rev_char_str.join('');
    return rev_word;
};

// Do not edit below this line
module.exports = reverseString;
