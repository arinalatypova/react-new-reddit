const mistake = [] as Array<number>; // type casting
mistake.push(1);
// mistake.push('1');

let bigObject = {
  commit: {
    id: '12d65c8dd2b2676fa3ac47d955accc085a37a9c1',
    short_id: '12d65c8dd2b',
    title: 'JS fix',
    author_name: 'Example User',
    author_email: 'user@example.com',
    created_at: '2014-02-27T10:27:00+02:00',
  },
  commits: [
    {
      id: '12d65c8dd2b2676fa3ac47d955accc085a37a9c1',
      short_id: '12d65c8dd2b',
      title: 'JS fix',
      author_name: 'Example User',
      author_email: 'user@example.com',
      created_at: '2014-02-27T10:27:00+02:00',
    },
  ],
  diffs: [
    {
      old_path: 'files/js/application.js',
      new_path: 'files/js/application.js',
      a_mode: null,
      b_mode: '100644',
      new_file: false,
      renamed_file: false,
      deleted_file: false,
    },
  ],
  compare_timeout: false,
  compare_same_ref: false,
};

// bigObject.compare_same_ref = 'true'; // ошибка
bigObject.compare_same_ref = true;

type TMyBigObject = typeof bigObject; // typeof достанет тип из bigObject и присвоет его TMyBigObject

const typedBigObject: MyReadonly<TMyBigObject> = bigObject;

// typedBigObject.compare_same_ref = false; // ошибка
typedBigObject.commit.id = '123';

// type MyReadonly = {
//   readonly [N in 'asd' | 'qwe']: N;
// };

// for (let N of ['asd', 'qwe']) {}

// const some1: MyReadonly = {
//   asd: 'asd',
//   qwe: 'qwe',
// };

type TObject = keyof TMyBigObject;
type TCommitType = TMyBigObject['commit'];

type MyReadonly<T> = {
  // mapped types
  readonly [N in keyof TMyBigObject]: TMyBigObject[N];
};

// const some3: MyReadonly<TMyBigObject> = {
//   compare_same_ref: true,
// };

type MyPartial<T> = {
  [N in keyof T]?: T[N];
};

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
};

type piked = MyPick<TMyBigObject, 'commit' | 'commits'>;

type MyReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N];
};

const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;

// typedBigObjectDeep.compare_same_ref = false; // ошибка
// typedBigObjectDeep.commit.id = '123'; // ошибка

type TSomeType = MyReadonlyDeep<TMyBigObject>;

// type inference
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeType>;

function greaterThenZero(a: number, b: string): boolean {
  return a > 0;
}

type FnReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type FnParametersType<T> = T extends (...args: infer R) => any ? R : never;

type TReturnType = FnReturnType<typeof greaterThenZero>;
type TParametersType = FnParametersType<typeof greaterThenZero>;
