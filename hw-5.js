


// 1 Створіть змінну, що симулює вибір варіанта зі списку. 
// Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

let drink;
const main = prompt("Введіть напій із списку: Кава, Чай або Сік").toLowerCase().trim();


switch (main) {
  case "Кава":
    drink = "Ви вибрали каву з молоком.";
    break;
  case "Чай":
    drink = "Ви вибрали чай з фруктів.";
    break;
  case "Сік":
    drink = "Ви вибрали сік з натуральної яблуні.";
    break;
  default:
    drink = "Невідомий напій веди ще раз.";
}

// 2 Створіть змінну для зберігання введеного рядка, який може бути днем тижня.
//  Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

const day = prompt("Введіть день тиждня: понеділок, вівторок ........").toLowerCase().trim();

switch (day) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П’ятниця":
    console.log("Це робочий день.");
    break;
  case "Субота":
  case "Неділя":
    console.log("Це вихідний.");
    break;
  default:
    console.log("Невірно введено день веди ще раз.");
}

//   3) Створіть змінну для зберігання номера місяця. 
// За номером місяця визначайте пору року і виводьте відповідне повідомлення.

const month = Number(prompt("Введіть номер місяця (4) як номер за рахунком від 1 до 12"));

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("Невірний номер місяця попробуйте щк раз.");
}

// 4 Створіть змінну для зберігання назви кольору. 
// Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const colorave = prompt("Введіть колір світлофора: зелений, жовтий, червоний").toLowerCase().trim();

switch (colorave) {
  case "червоний":
    console.log("Стоп");
    break;
  case "зелений":
    console.log("Йти");
    break;
  case "жовтий":
    console.log("Чекати");
    break;
  default:
    console.log("Невідомий колір.");
}

// 5 Створіть змінні для зберігання двох чисел та оператора (як у списку select). 
// Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

let numeric = Number(prompt("Введіть число"));
let number = Numbper(prompt("Введіть друге число"));
let equation = promt("введіть оператор *, /, -, +");
let respond;

switch (equation) {
    case "+":
        respond = numeric + number;
        break;
    case "-":
        respond = numeric - number;
        break;
    case "*":
        respond = numeric * number;
        break;
    case "/":
        if (number === 0) {
            console.log("Не можна ділтити на 0");
        } else {
            respond = numeric / number;
        }
        break;

    default:
        console.log("Не існуючий оператор");

}

console.log(result);
