const countVow = function(text) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of text)
    {
        if (
            char === 'a' || char === 'e' || char === 'i' ||
            char === 'o' || char === 'u' || char === 'A' || 
            char === 'E' || char === 'I' || char === 'O' || 
            char === 'U'
        ) {
            count++;
        }
    }
    return count;
};

let word = "This is a sentENCE";
console.log("Number of vowels in word: " + countVow(word));