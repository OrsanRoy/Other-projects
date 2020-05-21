// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
const mystery6 = [8, 9, 2, 9, 4, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6]

// m1 - false, m2 - true, m3 - false, m4 - false, m5 - true;

// Add your functions below:

function validateCred(array) {
    let sum = 0;
    for (let i = (array.length - 1); i >= 0; i-=2) {
        sum+=array[i];
        // console.log(i, sum);
    }
    for (let j = (array.length - 2); j >= 0; j-=2) {
        if (array[j] * 2 > 9) {
            sum+=(array[j] * 2 - 9);
        } else {
            sum+=(array[j] * 2);
        }
        // console.log(sum);
    }

    if (sum % 10 === 0) {
        return true;
    } else {
        return false;
    }
}


function findInvalidCards(array) {
    let invalidArray = [];
    for (let i = 0; i < array.length; i++) {
        validateCred(array[i]);
        if (validateCred(array[i]) === false) {
            invalidArray.push(array[i]);
        } 
    } 
    return invalidArray;
} 

// console.log(validateCred(mystery5));

// findInvalidCards(batch);

function idInvalidCardCompanies(cards) {
    let creditCardCompanies = [];
    let invalidCards = findInvalidCards(cards);
    for (let i = 0; i < invalidCards.length; i++) {
        if (invalidCards[i][0] === 3 && creditCardCompanies.indexOf('Amex (American Express)') === -1) {
            creditCardCompanies.push('Amex (American Express)');
        } else if (invalidCards[i][0] === 4 && creditCardCompanies.indexOf('Visa') === -1) {
            creditCardCompanies.push('Visa');
        } else if (invalidCards[i][0] === 5 && creditCardCompanies.indexOf('Mastercard') === -1) {
            creditCardCompanies.push('Mastercard');
        } else if (invalidCards[i][0] === 6 && creditCardCompanies.indexOf('Discover') === -1) {
            creditCardCompanies.push('Discover'); 
        } else if (creditCardCompanies.indexOf('Company not found') === -1){
            creditCardCompanies.push('Company not found')
        }
    }
    return creditCardCompanies;
}

// console.log(idInvalidCardCompanies(batch));


function createArrayFromString(string) {
    let cardNumberArray = []
    for (let i = 0; i < string.length; i++) {
        cardNumberArray.push(Number.parseInt(string[i]));
    }
    return cardNumberArray;
}

const mystery7 = createArrayFromString('372739178813505');
const mystery8 = createArrayFromString('6385974953739728')
const mystery9 = createArrayFromString('6081608887672840')
const mystery10 = createArrayFromString('5384178348778838')

// console.log(mystery7, mystery8, mystery9, mystery10);

const batch2 = [mystery7, mystery8, mystery9, mystery10, mystery3, invalid4];

// console.log(idInvalidCardCompanies(batch));
console.log(idInvalidCardCompanies(batch2));

// console.log(findInvalidCards(batch2));
