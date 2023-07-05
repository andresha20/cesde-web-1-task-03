const calculateTriangleSurface = (width, height) => {
    return width * height;
}

const displaySpeed = (speed, returnType) => {
    if (returnType == 1) {
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
    return label;
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
    return label;
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
    return label;
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

const getProducts = () => {
    const products = parseInt(prompt("Cantidad de productos"));
    let total = 0;
    for (let i = 1; i <= products; i++) {
        let price = parseInt(prompt("Precio " + i))
        total += price;
    }
    return getTotal(total);
}

const getTotal = total => {
    let totalWithIVA = total * 1.19;
    return console.log("Total is " + totalWithIVA);
}

// Punto 10

const getCurrentDate = () => {
    let date = Date.now();
    return getTimeLeft(date);
}

const getTimeLeft = (date) => {
    const total = Date.parse("31 Dec 2023") - Date.parse(new Date(date));
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    return console.log(`Total: ${total} | Time: ${days} days - ${hours}:${minutes}:${seconds}`);
}

// Punto 11

const getTotalProducts = () => {
    const products = parseInt(prompt("Cantidad de productos"));
    let totalProducts = [];
    for (let i = 1; i <= products; i++) {
        let name = prompt("Nombre " + i)
        let price = parseInt(prompt("Precio " + i))
        let amount = parseInt(prompt("Cantidad " + i))
        totalProducts.push({ name, price, amount })
    }
    return getProductsInArray(totalProducts);
}

const getProductsInArray = (totalProducts) => totalProducts.map(el => console.log(el))
