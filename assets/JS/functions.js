const calculateTriangleSurface = (width, height) => {
    return width * height;
}

const displaySpeed = (speed, returnType) => {
    if (returnType == "1") {
        return speed / 1.609344;
    } else {
        return speed * 1000;
    }
}

const calculateCircunference = (radius) => {
    return 2 * Math.PI * radius;
}

const calculateCube = (number) => {
    return Math.pow(number, 3);
}

const showName = (name) => {
    let label = `Hi, ${name}`;
    if (!isNaN(name)) {
        label = "Insert a valid name!";
    }
    return print(label);
}

const operations = (num1, num2, sign) => {
    let result = 0;
    switch (sign) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 * num2;
            break;
        case 3:
            result = num1 / num2;
            break;
        case 4:
            result = num1 - num2;
            break;
        case 5:
            result = num1 % num2;
            break;
        default:
            break;
    }
    return result;
}

// Punto 6

const convertTemperature = (celsius) => {
    let fahrenheit = (celsius * 9/5) + 32;
    let label = "Tiene fiebre o es el apocalípsis";
    switch (true) {
        case (fahrenheit == 32):
            label = "Nos congelamos";
            break;
        case (fahrenheit > 32 && fahrenheit <= 50):
            label = "Hace frío";
            break;
        case (fahrenheit > 50 && fahrenheit <= 77):
            label = "Está templado";
            break;
        default:
            break;
    }
    return print(label);
}

// Punto 7

const calculateMass = (height, weight) => {
    let label = "Obeso debe ir al nutricionista";
    let IMC = weight/(height * 2);
    switch (true) {
        case (IMC < 18.5):
            label = "Bajo peso debe ir al nutricionista";
            break;
        case (IMC >= 18.5 && IMC <= 24.9):
            label = "Normal";
            break;
        case (IMC >= 25 && IMC <= 29.9):
            label = "Sobrepeso";
            break;
        default:
            break;
    }
    return print(label);
}

// Punto 8

const verifyName = (name) => {
    if (!isNaN(name)) {
        return printName(undefined);
    }
    return printName(name);
}

const printName = (result) => {
    if (result) {
        return "Welcome, " + result;
    } else {
        return "Error";
    }
}

// Punto 9

