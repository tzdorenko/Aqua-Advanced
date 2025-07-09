const array = [1, 10, 14, 2, 4, 5, 43, 34];
const sortedArray = [...array].sort((a, b) => a - b);

console.log("Початковий масив:", array);
console.log("Відсортований масив:", sortedArray);
