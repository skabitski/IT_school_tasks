

function sumInput() {
    let numbers = []; // Создаем пустой массив для сохранения введенных чисел

    while (true) {
        let input = prompt("Введите число", ""); // Запрашиваем у пользователя ввод числа

        // Проверяем, ввел ли пользователь число или нажал "Отмена" или ввел пустую строку
        if (input === null || input.trim() === "" || !isFinite(input)) {
            break; // Если пользователь нажал "Отмена" или ввел пустую строку или не число, выходим из цикла
        }

        numbers.push(+input); // Добавляем введенное число в массив
    }

    // Сортируем массив по возрастанию
    numbers.sort(function(a, b) {
        return a - b;
    });

    // Вычисляем сумму элементов массива
    let sum = numbers.reduce(function(acc, val) {
        return acc + val;
    }, 0);

    return { sortedArray: numbers, sum: sum }; // Возвращаем отсортированный массив и сумму элементов
}

let result = sumInput();
console.log("Отсортированный массив:", result.sortedArray);
console.log("Сумма элементов массива:", result.sum);










// let arr = [1, 2, 3];
// arr[0];
// let arrs = new Array(1, 2, 3, 4);
// arrs[2];

// let max = ["name", "lastname", "age"];
// for (let i = 0; i < 3; i++) {
//   console.log(max[i]);
// }

// let test = new Array(5)
// test[2]
// alert(test.length)

// for(let i = 0; i)

// let inputs = document.querySelectorAll('#registrationForm input');

// // let names = ["max", "yulia", "yulik"];
// let names = new Array ("max", "yulia", "yulik")  //(3) massive s pustymi 3 elementami

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// for (let name of names) {
//   console.log(name);
// }

// names.forEach(function (names, index) {
//     console.log(index)
//   console.log(names);
// });

// // разные типы значений
// let items = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];

// // получить элемент с индексом 1 (объект) и затем показать его свойство
// alert( items[1].name ); // Джон

// // получить элемент с индексом 3 (функция) и выполнить её
// items[3](); // привет

// let fruits = ["Яблоко", "Апельсин", "Груша"];

// for (let i = 0; i < fruits.length; i++)
// {
// 		alert( fruits[i] );
// }

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// // проходит по значениям
// for (let fruit of fruits) {
//   alert( fruit );
// }

// arr.forEach(function(item, index, array) {
//     // ... делать что-то с item (элементом)
//   });

//   // Вызов alert для каждого элемента
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} имеет позицию ${index} в ${array}`);
//   });

//   let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

//   alert( matrix[1][1] ); // 5, центральный элемент

//   Мы можем добавлять и удалять элементы в массиве, используя следующие операции:

// - `push(...items)`добавляет `items` в конец массива
// - `pop()` удаляет элемент в конце массива и возвращает его
// - `shift()` удаляет элемент в начале массива и возвращает его
// - `unshift(...items)` добавляет `items` в начало массива

// Чтобы пройтись по элементам массива:

// - `for (let i=0; i<arr.length; i++)` – работает быстрее всего, совместим со старыми браузерами
// - `for (let item of arr)` – современный синтаксис только для значений элементов (к индексам нет доступа)
// - `arr.forEach` - также современный синтаксис для вызова каких-то действий применимо к элементам массива
// - `for (let item in arr)` – никогда не используйте для массивов!

// <ul>
// 	<li>Этот</li>
// 	<li>тест</li>
// </ul>
// <ul>
// 	<li>полностью</li>
// 	<li>пройден</li>
// </ul>

// <script>
//   let elements = document.querySelectorAll('ul > li:last-child');
// 	console.log(elements);
// </script>
// document.querySelectorAll(':hover')

// <h1>Содержание</h1>
// <div class="contents">
// <ul class="book">
// <li class="chapter">Глава 1</li>
// <li class="chapter">Глава 2</li>
// </ul>
// </div>
// <script>
//   let chapter = document.querySelector('.chapter'); // LI

//   alert(chapter.closest('.book')); // UL
//   alert(chapter.closest('.contents')); // DIV

//   alert(chapter.closest('h1')); // null (потому что h1 - не предок)
// </script>
