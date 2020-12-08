export default class App {
    sumatoriaSerieUno(numero) {
        let sumatoria=0;
        for (let i=1; i<=5; i++) {
            (sumatoria = sumatoria + 1/i);
        }
        return parseFloat(((1+(1/2).toFixed(2)+(1/3).toFixed(2)+(1/4).toFixed(2)+(1/5).toFixed(2))+(1/numero).toFixed(2)));
    }
    sumatoriaSerieDos(numero) {
        let i = 0;
        while (i<=1) {
            i++;
        }
        return parseFloat((((1+(1/2)-(1/3)+(1/4)-(1/5))+(1/numero))).toFixed(2));
    }
}

let app = new App();

console.log(app.sumatoriaSerieUno(9));
console.log(app.sumatoriaSerieDos(10));