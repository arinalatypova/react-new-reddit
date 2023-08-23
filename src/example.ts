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

// Union type
const strOrNumber: string | number = '2'; // переменная может иметь как строковый, так и числовой тип

// const strOrNumber1: string | number = '2';
// const strOrNumber2: string | number = '2';
// const strOrNumber3: string | number = '2';

// Чтобы не писать по несколько раз string | number ts предлогает ключевое слово type, который позволяет создать type alias

// Type alias
type typeAliasStrOrNum = string | number;

const strOrNumber1: typeAliasStrOrNum | number = '2';
const strOrNumber2: typeAliasStrOrNum | number = '2';
const strOrNumber3: typeAliasStrOrNum | number = '2';

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

// Array
const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number)[] = [1, 2, '2'];
const unionArrayGeneric: Array<string | number> = [1, 2, '2'];

// Tuple - массив фиксированной длины
const myTuple: [number, string] = [1, '2'];
// const val = myTuple[1000]; // можно взять либо 0, либо 1 элемент

// const [state, setState] = useState() - возвращает tuple

// Object
// const myObj: { a: number; b: string } = { a: 1, b: '2' };
type MyObjType = { a: number; b: string };
const myObj: MyObjType = { a: 1, b: '2' };

interface MyFirstInterface {
  readonly a: number;
  b: string;
  c?: number[]; // либо может быть, либо нет // optional type
  e: number | undefined; // эти записи не одинаковы
}

const myObj2: MyFirstInterface = {
  a: 2,
  b: '123',
  e: undefined,
};

const value = myObj.b;

// myObj2.a = 5; // ошибка, так как стоит значение readonly

// const ApiAnswer = { key: 'asd', key1: 'saw' };

interface IndexInterface {
  [n: string]: string;
}

const ApiAnswer: IndexInterface = { key: 'asd', key1: 'saw' };

const val3 = ApiAnswer.randomkey;

// Типизация функций
// calculate('add', 5, 5) // -> 10
function calculate(method: 'add' | 'sub', left: number, right: number): number {
  switch (method) {
    case 'add':
      return left + right;
    case 'sub':
      return left - right;
  }
}

const sum = calculate('add', 2, 2);

// Enum - удобнее в использовании
enum Methods {
  add,
  sub,
}

function calculate2(method: Methods, left: number, right: number): number {
  switch (method) {
    case Methods.add:
      return left + right;
    case Methods.sub:
      return left - right;
  }
}

// console.log(Methods.add) -> 0

const ArrowFn: TypeFn = () => 2;

type TypeFn = () => number;

interface FnInterface {
  (a: number): void;
}

const ArrowFn2: FnInterface = (value) => 2;

type StrangeTsType = any | unknown | never;

const some: any = ['2']; // можно положить что угодно, выключается типизация, можно выполнить любую функцию, даже если её нет, использовать крайне редко.

const un: unknown = '2'; // все также подходит, но у unkhown не подходит не под один тип, можно маркировать им переменные, которые мы узнаем в дальнейшем

if (typeof un === 'string') {
  un.concat();
}

// void у функций ничего не возвращает

// never означет, что у функции не должно быть окончания

function neverFn(): never {
  throw new Error('my exception');
}
