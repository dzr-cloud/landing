// const evenOdd = (num) => {
//     if (isNaN(num)) {
//         return 'Упс вы ошиблись'
//     } else if (num % 2 === 0) {
//         return 'Четное'
//     } else {
//         return 'Нечетное'
//     }
// };
// console.log(evenOdd(6));

// const minMax = (string) => {
//     let arr = string.split(' ').sort((a, b) => a-b);
//     return ${arr[arr.length - 1]} ${arr[0]};
// };
// console.log(minMax('1 9 3 4 -5'));

// const persistence = num => {
//     let times = 0;

//     num = num.toString();

//     while (num.length > 1) {
//         times++;
//         num = num.split(' ').map(Number).reduce((a, b) => a * b).toString();
//     }
//     return times;
// };

// console.log(persistence (39));