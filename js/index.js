// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, item) {
    return arr.splice(arr.indexOf(item), 1);
}

removeElement(array, 5);
console.log(array);
