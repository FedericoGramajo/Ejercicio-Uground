
function ejercicioNro1() {
    fetch('data/data1.json')
        .then(response => response.json())
        .then(data => {
            var valoresData = data.questionType;
            var valoresFinales = []
            valoresFinales = logicaValores(valoresData)
            const arrayDisplay = document.getElementById("array-display1");
            arrayDisplay.textContent = JSON.stringify(valoresFinales, null, 2);
        })
        .catch(error => console.error('Error:', error));
}

function ejercicioNro2() {
    fetch('data/data2.json')
        .then(response => response.json())
        .then(data => {
            var valoresData = data.questionType;
            var valoresFinales = []
            valoresFinales = logicaValores(valoresData)
            const arrayDisplay = document.getElementById("array-display2");
            arrayDisplay.textContent = JSON.stringify(valoresFinales, null, 2);
        })
        .catch(error => console.error('Error:', error));
}
function logicaValores(valoresData) {

    var valoresSumados = []
    let cont = 0
    let sum = 0
    var valoresArray = valoresData.QUESTIONVALUES.split(',').filter(value => value !== "").sort((a, b) => a - b)
    console.log("Array ordenado de menor a mayor = " + valoresArray)
    for (let index = 0; index < valoresArray.length; index++) {
        sum += Number(valoresArray[index]);
        cont++
        if (cont == 2) {
            valoresSumados.push(sum)
            valoresSumados.sort((a, b) => a - b)
            sum = 0
            cont = 0
        }
        if (valoresArray.length - 1 == index && index % 2 == 0) {
            valoresSumados.push(sum)
            valoresSumados.sort((a, b) => a - b)
        }
    }

    return valoresSumados
}

ejercicioNro1()
ejercicioNro2()