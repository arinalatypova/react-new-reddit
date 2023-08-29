// Old constructor example
// function OldConstructor(fieldValue) {
//   this.field = fieldValue || 123;
// }

// OldConstructor.prototype.method = function () {
//   return this.field;
// };

// const instance = new OldConstructor();
// instance.method(); // -> 123

class Constructor {
  public field: number = 123;
  private privateField: number = 123;

  constructor(arg: number) {
    this.field = arg;
  }

  public publicMethod(): number {
    return this.field;
  }

  protected protectedMethod() {
    // работает также, как private, но этот метод виден в наследниках
    return this.field + 10;
  }

  private privateMethod() {
    return this.field + 30;
  }
}

const instance = new Constructor(123);

class Child extends Constructor {
  public childMethod() {
    // здесь виден protectedMethod
  }

  protected protectedMethod(): number {
    return super.protectedMethod(); // super - функция, вызывающая родительский конструктор
  }
}

// Нельзя понижать уровень доступности(нельзя из protected делать private), однако повысить уровень доступа можно.

// Абстрактные классы
abstract class AbstractClass {
  // в абстрактных классах можно декларировать абстрактные поля
  public abstract abstractField: number;

  public abstract abstractMethod(): number;

  protected protectedMethod() {
    return this.abstractField;
  }
}

// const instance2 = new AbstractClass(); // Абстрактный класс инстанциировать нельзя, это класс, которые можно только унаследовать

class NewChild extends AbstractClass {
  // в таком случае мы обязаны внутри абстрактного класса имплементировать все поля.
  public abstractField: number = 123;

  public abstractMethod(): number {
    return 0;
  }
}

// Интерфейсы и ключевое слово implements
interface MyInterface<T> {
  field: string;
  method(): string;
}

class NewClass<T> implements MyInterface<T> {
  public conf?: T;

  field: string = '123';
  method(): string {
    return '';
  }
}
