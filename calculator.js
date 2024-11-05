// Создание консольного приложения на языке JavaScript,
//     реализующее класс "Калькулятор".

// Реализация класса "Калькулятор"
class Calculator {
    constructor() {
        this.memory = 0; // Изначально память равна 0
    }

    // Метод для хранения числа в памяти
    setMemory(value) {
        this.memory = value;
        console.log(`Число ${value} установлено в памяти.`);
    }

    // Очистка памяти
    clearMemory() {
        this.memory = 0;
        console.log(`Память очищена.`);
    }

    // Сложение
    add(value) {
        const result = this.memory + value;
        console.log(`Сложение: ${this.memory} + ${value} = ${result}`);
        this.memory = result;
        return result;
    }

    // Вычитание
    subtract(value) {
        const result = this.memory - value;
        console.log(`Вычитание: ${this.memory} - ${value} = ${result}`);
        this.memory = result;
        return result;
    }

    // Умножение
    multiply(value) {
        const result = this.memory * value;
        console.log(`Умножение: ${this.memory} * ${value} = ${result}`);
        this.memory = result;
        return result;
    }

    // Деление
    divide(value) {
        if (value === 0) {
            console.log("Ошибка: Деление на ноль невозможно.");
            return null;
        }
        const result = this.memory / value;
        console.log(`Деление: ${this.memory} / ${value} = ${result}`);
        this.memory = result;
        return result;
    }

    // Возведение в степень
    power(value) {
        const result = Math.pow(this.memory, value);
        console.log(`Возведение в степень: ${this.memory} ^ ${value} = ${result}`);
        this.memory = result;
        return result;
    }
}

// Создаем экземпляр калькулятора
const calculator = new Calculator();

// Пример работы с калькулятором
calculator.setMemory(15);      // Устанавливаем 10 в память
calculator.add(5);             // 10 + 5
calculator.subtract(3);        // 15 - 3
calculator.multiply(2);        // 12 * 2
calculator.divide(4);          // 24 / 4
calculator.power(2);           // 6 ^ 2
calculator.clearMemory();      // Очищаем память