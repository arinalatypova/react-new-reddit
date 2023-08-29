// Generics
// const myArray: Array<number> = [1, 2, 3];

interface MyArray<T> {
  [N: number]: T;

  map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;
}

const myArray2: MyArray<number> = [1, 2, 3];
let variable = myArray2[1];

myArray2.map((f) => f + 1); // -> [2, 3, 4]
myArray2.map((f) => `f + ${f}`); // -> ['f + 1', 'f + 2' ...]

function identity<T>(arg: T): T {
  return arg;
}

let res = identity(12);

function getLen<T extends Array<any>>(arr: T): number {
  return arr.length;
}

getLen([1, 2, 3]);

interface IValueWithType<T> {
  type: string;
  value: T;
}

function withType<U>(arg: U): IValueWithType<U> {
  return {
    type: typeof arg,
    value: arg,
  };
}

const res2 = withType(123);

// Встроенные generics

interface IExample<T> {
  type: string;
  value: T;
  isEmpty: boolean;
}

const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
  // для удаления ключей из интерфейса
  type: 'asd',
};

const picked: Pick<IExample<number>, 'isEmpty'> = {
  // забирает определенные ключи, которые мы хотим использовать
  isEmpty: true,
};

const partial: Partial<IExample<object>> = {
  // делает все ключи необязательными
};
