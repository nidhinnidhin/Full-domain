// Find the longest palindrome

let str = "stsdsfgdsmalayalamdfmsssspacapsssspsaammsdfsaaaas";

function longestPalindrome(str) {
  let longestLength = 0;
  let longestPalindromicWord;
  let palindromes = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        palindromes.push(str.substring(i, j + 1));
      }
    }
  }
  for (let i = 0; i < palindromes.length; i++) {
    let start = 0;
    let end = palindromes[i].length - 1;

    let word = palindromes[i];

    let isPalindrome = 1;
    while (start < end) {
      if (word[start] !== word[end]) {
        isPalindrome = 0;
        break;
      }
      start++;
      end--;
    }
    if (isPalindrome === 1) {
      if (longestLength < palindromes[i].length) {
        longestLength = palindromes[i].length;
        longestPalindromicWord = palindromes[i];
      }
    }
  }
  return longestPalindromicWord;
}
console.log(longestPalindrome(str));
