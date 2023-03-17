// let num = prompt('Enter the number');

// if (num == 0){
//     console.log('num=0');
// }
// else if(num>0){
//      console.log('num>0');

// }
// else{
//     console.log('num<0');
// }

// let num1=Number(propmt('Enter the number'));
// let num2=Number(prompt('Enter the number'));

// if (num1>num2){
// console.log(num1);
// }
// else{
//     console.log(num2);
// }

// let num1=Number(prompt('Enter the number'));

// if (num1<0){
//     console.log(число положительн);
// }
// else if (num1>0){
//     console.log( число отрицательную);
// }
// else{
//     console.log(число = 0);
// }

// let fruits=['Apple','Banana'];

// console.log(fruits.lenght);
// console.log(fruits[0]);
// console.log(fruits[fruits.lenght-1]);

// fruits.push('Orange'); // В начале добавить какой-то элемент

// console.log(fruits);

// fruits.unshift('Mango');// добавить элемент в конце

// console.log(fruits);

// fruits.pop(); // удаление последнего элемента

// fruits.shift(); // удаление первого элемента

//fruits.splice(первый элемент индекс, второй элемент сколько нужно удалить позиции)

//fruits.splise(1.1);

//let fruits1 = fruits.splice(0, 2);

// console.log(fruits);
// console.log(fruits1);

// Задание:
// 1. Сдать и массив 'styles' с элементами "джаз " и "блюз" .
// 2. Добавьте "Рок н ролл" в конец .
// 3. Измените значение в средине на "Kлассика".
// 4. Удали первый элемент массива .
// 5. Вставь рэп и регги в начало массива .

// Массив по ходу выполнения операции:
// Джаз, блюз.
// Джаз, блюз, рок-н-ролл.
// Джаз, классика,рок-н-ролл.
// Классика, рок-н-ролл.
// Рэп, риги,классика,рок-н-ролл.

// let styles = ["Джас", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[1] = "Классика";
// styles.shift();
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// Задание: Написать программу, в которой объявлен массив с 5 числовыми элементами.
// Программа должна заполнить новый пустой массив квадратами чисел из первого массива.
// Пример:
// Исходный массив [1, 4, 2, 5, 3]
// Итоговый массив [1, 16, 4, 25, 9]

// let numbers = [1, 4, 2, 5, 3];
// let pow = [
//   numbers[0] ** 2,
//   numbers[1] ** 2,
//   numbers[2] ** 2,
//   numbers[3] ** 2,
//   numbers[4] ** 2,
// ];
// for (Начало; Условие; Шаг) {

// }

//let num = 4;

//console.log(++num);
//console.log(num++);

// for (let num = 0; num <= 5; num++) {
//   console.log(num);
//   if (num == 2) {
//     break; (До срочно прекращение работы цикла)
//   }
// }
// num = num + 1 (три варианта как число увеличить на единицу)
// num++
// num += 1

// for (let num = 0; num < 5; num++) {
//   if (num > 2) {
//     continue; // прерывает выполнение текущии иторации
//   }
//   console.log(num);
// }

// let numbers = [1, 4, 2, 5, 3];

// // let pow = [numbers [0]**2, numbers [1]**2, numbers [2]**2, numbers [3]**2, numbers [4]**2];

// let pow = [];

// for(let i = 0; i < numbers. length; i++){
//pow.push(numbers[i] ** 2);
// }

// console. log (numbers) ;
// console. log (pow);
