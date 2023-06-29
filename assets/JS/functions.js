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

