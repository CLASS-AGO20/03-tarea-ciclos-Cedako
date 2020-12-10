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

    esPrimo(numero) {
        let i = 1;
        let primo = 0;
        do {
            if (numero%i === 0) {
                primo++;
            }
            i++;
        }
        while (i<=numero);
        if (primo==2) {
            return true;
        }
        else if (numero === 1) {
            return true;
        }
        else {
            return false;
        }
    }

    obtenerMultiplos(inicio, fin) {
        let multiplos = "";
        let i=inicio;
        do {
            if (i%3===0) {
                multiplos+=i;
            }
            i++
        }
        while(i<=fin);
        return multiplos;
    }

    obtenerImpares(numero1, numero2) {
        let i = numero2;
        let impares = "";
        let t;
        if (numero1 < numero2) {
            t=numero2;
            numero2=numero1;
            numero1=t;
        }
        do {
            if (i%2 !== 0) {
                impares+=i+",";
            }
            i--
        }
        while(i>=numero2);
        return impares;
    }
}

let app = new App();

console.log(app.sumatoriaSerieUno(300/311));
console.log(app.sumatoriaSerieDos(10));
console.log(app.esPrimo(212));
console.log(app.obtenerMultiplos(1,10));
console.log(app.obtenerImpares(1,5))