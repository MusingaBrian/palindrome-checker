const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

const isPalindrome = () => {

    const textInput = document.getElementById('text-input').value;

    if( textInput === "") {
        alert('Please input a value');
        result;
    }

    
    const checkPalindrome = (str) => {

        if (str.length <= 1 ) {
            return `${textInput} is a palindrome`;
        }

        const processedString = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
        let left = 0;
        let right = processedString.length - 1;

        while (left < right) {
            if (processedString[left] !== processedString[right]) {
              return `${textInput} is not  a palindrome`;
            }
            left++;
            right--;
          }

          return `${textInput} is a palindrome`;
    }
    
    result.innerText = checkPalindrome(textInput);
}