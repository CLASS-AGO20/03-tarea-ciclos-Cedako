export default class App {
    sumatoriaSerieUno(numero) {
        let suma;
        //let test;
        for (let i=1; i<=1; i++) {
        }
        suma = parseFloat(((1/2)+(1/3)+(1/4)+(1/5)+(1/numero)).toFixed(2));
        return parseFloat((suma + 1).toFixed(2));
        //test = parseFloat((1/2).toFixed(2))+parseFloat((1/3).toFixed(2))+parseFloat((1/4).toFixed(2))+parseFloat((1/5).toFixed(2));
        //return parseFloat((test + 1 + 1/numero).toFixed(2));
    }
    sumatoriaSerieDos(numero) {
        let i = 0;
        let suma;
        while (i<=1) {
            i++;
        }
        suma = parseFloat(((1/2)-(1/3)+(1/4)-(1/5)+(1/numero)).toFixed(2));
        return parseFloat((suma + 1).toFixed(2));
    }
}

let app = new App();

console.log(app.sumatoriaSerieUno(2));
console.log(app.sumatoriaSerieDos(10));