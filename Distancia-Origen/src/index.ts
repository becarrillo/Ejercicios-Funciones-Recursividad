function distOn(x: number, y: number) {
    let sq: number = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    return sq;
}

type Input = string | null;

function isNull(arg: Input): arg is null {
    return typeof arg === null
}

function isString(arg: Input): arg is string {
    return typeof arg === 'string'
}

const main = (ev: Event) => {
    ev.preventDefault();
    let a: number;
    let b: number;
    
    let input1: Input = document.querySelector('#numberA')?.getAttribute('value')!;
    let input2: Input = document.querySelector('#numberB')?.getAttribute('value')!;
    if (typeof input1 !== undefined && typeof input2 !== undefined) {
        if (!isNull(input1) && isString(input2)) {
            a = parseFloat(input1);
            b = parseFloat(input2);
            console.log(distOn(a, b));
        }
    }
}

document.querySelector('#originForm')?.addEventListener('submit', main);