// Sum Zero Functions
function sumOfZero(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

// This functions runtime would be O(n^2) because it uses a nested for loop. 

//Unique Characters Function
function uniqueCharacters(word) {
    const charFrequency = {};
    for (let char of word) {
        if (charFrequency[char]) {
            return false;
        }
        charFrequency[char] = 1;
    }
    return true;
}

// This functions runtime would be O(n) because it only runs through the word one time.

//Pangram Sentence Function
function isPangram(sentence) {
    const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");
    for (let char of sentence.toLowerCase()) {
        alphabetSet.delete(char);
    }
    return alphabetSet.size === 0;
}

// This functions runtime would be O(n) because it only runs through the sentence one time.

//Longest Word Function
function findLongestWord(words) {
    if (words.length === 0) {
        return 0;
    }
    const longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
    return longestWord.length;
}

// This functions runtime would be O(n) because it runs through each word only one time and there are only n number of words. 