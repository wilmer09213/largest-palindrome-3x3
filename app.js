let biggestPalindromeNumber = 0;
let normalNumber = 0;
let reversedNumber = 0;

let variables = "";

const getLargestPalindrome3DigitNumber = () => {
    //nested for loop starting from 999 to 0
    for(let i =999; i > 0; i--) {
        for(let j = 999; j > 0; j--) {
    
            //get product of i and j
            normalNumber = i*j;
    
            //reverse the number 
            reversedNumber = Number(normalNumber.toString().split("").reverse().join(""));
    
            //find palindrome and see if the last biggest palindrome is less than the new one
            if(normalNumber === reversedNumber && biggestPalindromeNumber < normalNumber) {
                variables = `${i} x ${j}`;
                biggestPalindromeNumber = normalNumber;
            }
        }
    }
    console.log(biggestPalindromeNumber)
    return biggestPalindromeNumber;
}
getLargestPalindrome3DigitNumber();

//for frontend
document.getElementById("variables").textContent = variables;
document.getElementById("answer").textContent = biggestPalindromeNumber;