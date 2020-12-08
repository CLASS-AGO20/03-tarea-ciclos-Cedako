export default class App {
    sumatoriaSerieUno(numero) {
        let suma;
        for (let i=1; i<=1; i++) {
        }
        suma = parseFloat(((1/2)+(1/3)+(1/4)+(1/5)+(1/numero)).toFixed(2));
        return parseFloat((suma + 1).toFixed(2));
    }
    sumatoriaSerieDos(numero) {
        let i = 0;
        while (i<=1) {
            i++;
        }
        return ;
    }
}

let app = new App();

console.log(app.sumatoriaSerieUno(9));
console.log(app.sumatoriaSerieDos(10));