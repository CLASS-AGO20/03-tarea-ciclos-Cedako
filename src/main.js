export default class App {
    sumatoriaSerieUno(numero) {
        let sumatoria=1;
        for (let i=1; i<=5; i++) {
            (sumatoria = sumatoria + 1/i).toFixed(2);
        }
        return (sumatoria + 1/numero).toFixed(2);
    }
    sumatoriaSerieDos(numero) {
        let i = 1;
        let sumatoria = 0;
        while (i<=5) {
            if (i==3){
            (sumatoria = sumatoria - 1/i).toFixed(2);
            i++
            }
            else if (i==5){
            (sumatoria = sumatoria - 1/i).toFixed(2);
            }
            else {
                (sumatoria = sumatoria + 1/i).toFixed(2);
            }
            return (sumatoria + 1/numero).toFixed(2);
            i++
        }
    }
}

let app = new App();

console.log(app.sumatoriaSerieUno(6));
console.log(app.sumatoriaSerieDos(6));