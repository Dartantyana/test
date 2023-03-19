// const Len = "JavaScript is awesome".length;
// console.log(Len)
// const up = "JavaScript is awesome".toUpperCase();
// console.log(up)
// количество (count)
// код чего-либо (code)
// размер (size, length)
// номер (number)

// Логичным названием для булевой переменной — вопрос с ответом да или нет.

// это (is)
// содержит (has/contain)
// может (can)
// должен (shoud)
// возможность (able)

// const isPopupOpen = true;
// const hasUpperLetters = true;
// const containObject = false;
// const shoudUpdate = false;
// const disabled = true;

// Это существительные во множественном числе, которые имеют окончание на s и es.
// const users = [{ name: 'Yury'}];
// const letters = ['A', 'B', 'C'];
// const codes = [21, 37];

// 10. Симметричные пары
// Общие:

// min/max
// up/down
// old/new
// begin/end
// first/last
// next/previous
// Для функций:

// open/close
// get/set
// add/remove
// create/destroy
// start/stop
// insert/delete
// increment/decrement
// show/hide
// suspend/resume
// const message = "JavaScript is awesome!";
// alert(message);

// const foo = { id: 1, verified: true, color: 'green' };
// const bar = { id: 2, verified: false, color: 'red' };
// console.log(foo)
// console.log(bar)
// console.log({ foo, bar, Len, up })
// console.table({ up, bar, Len,  message, foo })
// console.group({ foo, bar, Len, up })

// console.group('User Details');
// console.log('name: John Doe');
// console.log('job: Software Developer');
// Nested Group
// console.group('Address');
// console.log('Street: 123 Townsend Street');
// console.log('City: San Francisco');
// console.log('State: CA');
// console.groupEnd();
// console.groupEnd();


// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

//  Важлива особливість prompt полягає в тому,
//  що незалежно від того, що ввів користувач,
//  завжди повернеться рядок.
//  Тобто, якщо користувач ввів 5, то повернеться не число 5,
//  а рядок "5".

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number (valueB)); // "number"

// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// // Math.floor(num) - повертає найбільше ціле число,
// // менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найменше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy
// const message1 = "Mango "
// const message2 = "is "
// const message3 = "happy"
// console.log(message1 + message2 + message3);
// const messages = message1 + message2 + message3;
// console.log(messages)

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// const message = "Welcome to Bahamas!";
// console.log(message.length);

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// const productName = "Ремонтний дроїд";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.includes("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("ремонтний")); // false

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

//  Запам'ятайте 6 хибних (falsy) значень,
//  що приводяться до false у логічному перетворенні:
//  0, NaN, null, undefined, порожній рядок і false.
//  Абсолютно все інше приводиться до true.

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true
// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false
// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true
// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true
// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false



















































