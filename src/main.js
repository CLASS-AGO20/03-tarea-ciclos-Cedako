export default class App {
    sumatoriaSerieUno(numero)  {
        let sumatoria=1;
        for (let i=1; i=5; i=i++) {
            sumatoria = sumatoria + 1/i;
        }
        return sumatoria + 1/numero;
    }
}

let app = new App();

console.log(app.sumatoriaSerieUno(6));