// 1
const generateArray = (n) => Array.from({ length: n }, (_, index) => index);

const isMultipleOfThree = (num) => num % 3 === 0;

const printElements = (arr) => {
  const filteredIndexes = arr
    .map((_, index) => index) 
    .filter(isMultipleOfThree); 
  console.log(filteredIndexes);
};

const n = 20; 
const array = generateArray(n);
printElements(array); 

// 2

const generateArray2 = (n) => Array.from({ length: n }, (_, index) => index);

const isEven2 = (num) => num % 2 === 0;

const printEvenElements2 = (arr) => {
  const evenElements = arr.filter(isEven2);
  console.log(evenElements);
};

// 3

const words = ["apple", "banana", "cherry", "date"];

const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const capitalizedWords = words.map(capitalizeFirstLetter);

const result = capitalizedWords.join(" ");
console.log(result);

// 4

let s = "В лесу родилась елочка";

const swapFirstAndLastLetter = (word) => {
  if (word.length <= 1) return word; 
  const lastLetter = word[word.length - 1];
  const middlePart = word.slice(1, -1);
  return lastLetter + middlePart + firstLetter;
};

const wordsArray = s.split(" ");

const swappedWordsArray = wordsArray.map(swapFirstAndLastLetter);

const s1 = swappedWordsArray.join(" ");

console.log(s1);

// 5

const generateRealNumbersArray = (length, min, max) => {
  return Array.from({ length }, () => Math.random() * (max - min) + min);
};

const realNumbers = generateRealNumbersArray(10, -10, 10);

const positiveNumbers = realNumbers.filter(num => num > 0);
console.log("Положительные элементы массива:", positiveNumbers);
console.log("Количество положительных элементов:", positiveNumbers.length);

const negativeNumbers = realNumbers.filter(num => num < 0);
const productOfNegativeNumbers = negativeNumbers.reduce((acc, num) => acc * num, 1);
console.log("Произведение отрицательных элементов массива:", productOfNegativeNumbers);


// 6

const countInversions = (arr) => {
  const merge = (left, right) => {
    let inversions = 0;
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
        inversions += left.length - i;
      }
    }

    result = result.concat(left.slice(i)).concat(right.slice(j));
    return { result, inversions };
  };

  const mergeSort = (arr) => {
    if (arr.length <= 1) return { result: arr, inversions: 0 };
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const leftResult = mergeSort(left);
    const rightResult = mergeSort(right);
    const { result, inversions } = merge(leftResult.result, rightResult.result);
    return { result, inversions: inversions + leftResult.inversions + rightResult.inversions };
  };

  const { inversions } = mergeSort(arr);
  return inversions;
};

// 7

const team1Height = [180, 175, 185, 170, 190];

const team2Height = [175, 165, 185, 170, 195];


const hasSameHeightPlayers = (team1, team2) => {
  for (let height1 of team1) {
    for (let height2 of team2) {
      if (height1 === height2) {
        return true;
      }
    }
  }
  return false;
};

const sameHeightPlayersExist = hasSameHeightPlayers(team1Height, team2Height);

if (sameHeightPlayersExist) {
  console.log("В данных командах есть игроки одинакового роста.");
} else {
  console.log("В данных командах нет игроков одинакового роста.");
}

// 8

const arr = [2, 5, 7, 2, 9, 8, 5, 3, 1, 6];

const hasDuplicatePair = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return true;
      }
    }
  }

};

const hasDuplicate = hasDuplicatePair(arr);

if (hasDuplicate) {
  console.log("В заданном массиве есть хотя бы одна пара совпадающих элементов.");
} else {
  console.log("В заданном массиве нет пары совпадающих элементов.");
}











