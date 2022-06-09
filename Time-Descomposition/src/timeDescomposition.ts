let results: Array<number> = []

function descompose(h: number, m: number, s: number): void {       // Comenzamos procedimiento descomposición con 3 parámetros
    let sec: number = Math.round( (s % 3600) % 60 );              //  cada que llamamos descompose calcula la entrada de segundos dividida entre 3600 segundos
    let mins: number = Math.round( m + ((s % 3600) / 60) );      //  El resultado de módulo de la entrada s entre 3600 seg (1 h) dividido entre 60
    let hours: number = Math.round( h + (s / 3600) );           // El resultado del resíduo entre entrada y 3600 (1 min) y el resíduo éste a su vez con 60 da los segundos
    results.push(hours);                // Se agregan las variables a un nuevo arreglo de enteros
    results.push(mins);                 // Se agregan las variables a un nuevo arreglo de enteros
    results.push(sec);
}

type Propmt = string | null;

function isNull(arg: Propmt): arg is null {
    return typeof arg === null
}

function isString(arg: Propmt): arg is string {
    return typeof arg === 'string'
}

let secondsInput: Propmt = window.prompt("¿Cuántos segundos en número quieres descomponer en horas con minutos con segundos? ");
if (!isNull(secondsInput) && isString(secondsInput) ) {
    let secondsInt: number = parseInt(secondsInput);   // Entrada no nula & tipo string? => guardamos en nueva variable tipo numérico
    let mins: number = 0;                         // Inicializamos variable minutos en 0
    let h: number = 0;                           // Inicializamos variable horas en 0
    descompose(h, mins, secondsInt);            // Realizamos operaciones (horas, minutos, segundos)
    if (!isNull(secondsInput) && !isNull(String(mins)) && !isNull(String(h))) {
        document.querySelector('#result')?.setAttribute('value', String(results[0]) + " horas " + String(results[1]) + " mins " + String(results[2]) + " seg")
    }
}