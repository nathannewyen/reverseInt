// reverseInt(15) === 51
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

function reverseInt(numbers) {
    const reversedNum = parseInt(numbers.toString().split('').reverse().join(''))

    return reversedNum * Math.sign(numbers)

}

console.log(reverseInt(-91))