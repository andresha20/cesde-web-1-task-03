const getAlert = (text, number) => {
    if (number) {
        return parseInt(prompt(text));
    } else {
        return prompt(text);
    }
}

const runScript = (e) => {
    switch (parseInt(e.target.value)) {
        case 1:
            let width = getAlert("Ancho", true);
            let height = getAlert("Alto", true);
            console.log(calculateTriangleSurface(width, height));
            break;
        case 2:
            let returnType = getAlert("Return type", true);
            let speed = getAlert("Speed", true);
            console.log(displaySpeed(speed, returnType));
            break;
        case 3:
            let radius = getAlert("Radio", true);
            console.log(calculateCircunference(radius));
            break;
        case 4:
            let name = getAlert("Name");
            console.log(showName(name));
            break;
        case 5:
            let num1 = getAlert("Number 1", true);
            let num2 = getAlert("Number 2", true);
            let sign = getAlert("Number from 1 to 5", true);
            console.log(operations(num1, num2, sign));
            break;
        case 6:
            let celsius = getAlert("Celsius", true);
            console.log(convertTemperature(celsius));
            break;
        case 7:
            let h = getAlert("Altura", true);
            let w = getAlert("Peso", true);
            console.log(calculateMass(h, w));
            break;
        case 8:
            let n = getAlert("Name");
            console.log(verifyName(n));
            break;
        case 9:
            getProducts();
            break;
        case 10:
            getCurrentDate();
            break;
        case 11:
            getTotalProducts();
            break;
        default:
            break;
    }
}

addEventListener("click", runScript)


