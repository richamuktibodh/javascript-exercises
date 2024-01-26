const fibonacci = function(n) {
    let prev = 0, curr = 1, nxt = 0;
    if (n == 0)
    {
        return prev;
    }
    if (n == 1)
    {
        return curr;
    }
    if (n<0)
    {
        return 'OOPS';
    }
    for (i = 0; i< n-1; i++)
    {
        nxt = curr + prev;
        prev = curr;
        curr = nxt;
    }
    return nxt;


};

// Do not edit below this line
module.exports = fibonacci;
