// JS Types            // typeof

const str = 'string'; // typeof str   -> 'string'
const num = 2; // typeof num   -> 'number'
const nan = NaN; // typeof nan   -> 'number'
const obj = {}; // typeof obj   -> 'object'
const arr = []; // typeof arr   -> 'object'
const nul = null; // typeof nul   -> 'object'
const sym = Symbol(); // typeof sym   -> 'symbol'
const und = undefined; // typeof und   -> 'undefined'
const _void = void 0; // typeof _void -> 'undefined'
const bool = true; // typeof bool  -> 'boolean'
const fn = () => {}; // typeof fn    -> 'function'

let tsStr: string = 'abs';
tsStr = '1';

// function sumJS(arr) {
//   if (arr instanceof Array) {
//     return arr.reduce((a, v) => a + v);
//   }
//   throw new Error('type mismatch');
// }

function sumTS(arr: number[]) {
  return arr.reduce((a, v) => a + v);
}

// 'some' + 2 // -> 'some2'
// 'some' - 2 // -> NaN
// '2' + 2 -> '22'
// '2' - 2 -> NaN

const tsNumber = 2;
const tsString = 'str';

const result = tsNumber + tsString; // string
// const resultTwo = tsString - tsNumber; // левая сторона не может быть строкой
const resultTwo = parseInt(tsString) - tsNumber; // number

if (typeof tsString === 'number') {
  const resultThree = tsString - tsNumber;
}
