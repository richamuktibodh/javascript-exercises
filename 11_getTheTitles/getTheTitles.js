const getTheTitles = function(books) {
    titles = []
    for (let b of books)
    {
        titles.push(b['title']);
    }
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
