


// 1 Створіть змінну, що симулює вибір варіанта зі списку. 
// Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

const drink = "Кава"; 

const select = prompt("Введіть напій із списку: Кава, Чай або Сік").toLowerCase().trim();


switch (drink) {
  case "Кава":
    console.log("Ви вибрали каву.");
    break;
  case "Чай":
    console.log("Ви вибрали чай.");
    break;
  case "Сік":
    console.log("Ви вибрали сік.");
    break;
  default:
    console.log("Невідомий напій.");
}

// 2. Визначення дня тижня
let day = "Субота"; // приклад: Понеділок, Вівторок, Субота...

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
    console.log("Невірно введено день.");
}

// 3. Визначення пори року за номером місяця
let month = 4; // приклад: 1–12

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
    console.log("Невірний номер місяця.");
}

// 4. Повідомлення залежно від кольору
let color = "жовтий"; // червоний, зелений, жовтий

switch (color.toLowerCase()) {
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

// 5. Калькулятор
let num1 = 10;
let num2 = 0;
let operator = "/"; // можна: +, -, *, /

switch (operator) {
  case "+":
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case "-":
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case "*":
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Помилка: ділення на нуль.");
    } else {
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    break;
  default:
    console.log("Невідомий оператор.");
}
