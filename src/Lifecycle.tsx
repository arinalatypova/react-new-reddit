import React from 'react';

interface ILifecycleProps {
  someProp: number;
}

interface ILifecycleState {
  stateField: number;
  isMounted: boolean;
  hasError: false;
}

export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {
  constructor(props: ILifecycleProps) {
    super(props);

    this.state = { stateField: 0, isMounted: false, hasError: false };
    // this.handleClick = this.handleClick.bind(this); // либо написать стрелочную функцию
    // this.setState({}); // setState доступен только после того, как компонент будет встроен в DOM-дерево, а на данном этапе он только создаётся
  }

  static getDerivedStateFromProps(
    props: Readonly<ILifecycleProps>,
    state: Readonly<ILifecycleState>,
  ) {
    return { stateField: props.someProp };
    // return null;
  }

  static getDerivedStateFromErrors(error: Error) {
    // метод для обработки ошибок
    return { hasError: true };
  }

  // не использовать при PureComponent!
  public shouldComponentUpdate(
    nextProps: Readonly<ILifecycleProps>,
    nextState: Readonly<ILifecycleState>,
    nextContext: any,
  ): boolean {
    return true;
    // return false; компонент не будет отрендерен никогда, как и его дочерние
    // return (
    //   JSON.stringify(this.state) !== JSON.stringify(nextState) ||
    //   JSON.stringify(this.props) !== JSON.stringify(nextProps)
    // ); нельзя использовать данную конструкцию, так как это даст большую нагрузку
  }

  public render() {
    if (this.state.hasError) {
      return <div>Error</div>; // в случае ошибки возвращаем запасной интерфейс с ошибкой
    }
    // метод может возвращать массив, строки, числа, портал(React.createPortal)
    return <div onClick={this.handleClick}>1</div>;
  }

  public getSnapshotBeforeUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
  ) {
    // можем хранить здесь состояние скрола или ширину окна и вернуть это значение
  }

  public componentDidUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
    snapshot?: any, // то, что мы возвращем из прошлого метода
  ): void {
    // этот метод не будет вызываться, если мы вернули false в shouldComponentUpdate
    if (snapshot > 100) {
      this.setState({}); // этот метод можно вызывать только если обурнуть его в условие, иначе будет бесконечное обновление
    }
  }

  public componentDidMount() {
    // создан для подписок на события(первый пример), таймеров, счётчиков и т.д.
    document.addEventListener('resize', () => {});
    setTimeout(() => {}, 0);
    this.setState({ isMounted: true });
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // logError(errorInfo.componentStack);
  }

  public componentWillUnmount() {
    // вызывается перед удалением компонента из dom-дерева, используется для отписок от событий, обнуления таймеров
    document.removeEventListener('resize', () => {});
  }

  private handleClick = () => {
    this.setState({ stateField: 1 });
  };
}
