"use strict";

const e = React.createElement;

class ReactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [
        {
          title: null,
          text:
            "React - это JavaScript библиотека, для упращения разработки визуальных интерфейсов. Используется для создания одностраничных веб-приложений",
          link: "https://ru.reactjs.org/",
        },
        {
          title: "Redux",
          text:
            "REDUX — это библиотека для JavaScript, предназначенная для управления состоянием приложения. Redux создаёт свой store(это объекта в котором есть методы dispatch, subscribe, getState, setState...), позволяет упростить передачу данных через контекст.",
          link: "https://redux.js.org/",
        },
        {
          title: "Redux Form",
          text:
            "Redux-form - это библиотека Redux, которая позволяет управления состоянием форм в приложении React.",
          link: "https://redux-form.com/8.3.0",
        },
        {
          title: "Redux Thunk",
          text:
            "Redux Thunk это middleware библиотека, которая позволяет вам вызвать action creator, возвращая при этом функцию вместо объекта.",
          link: "https://github.com/reduxjs/redux-thunk",
        },
        {
          title: "React Redux",
          text:
            "React Redux - это официальная привязка React для Redux. Он позволяет вашим компонентам React считывать данные из хранилища Redux и отправлять действия в хранилище для обновления данных.",
          link: "https://react-redux.js.org",
        },
        {
          title: "React Router",
          text:
            "React Router - популярная и полная библиотека маршрутизации для React. js, которая синхронизирует пользовательский интерфейс с URL-адресом. Он поддерживает ленивую загрузку кода, динамическое сопоставление маршрутов и обработку перехода по местоположению.",
          link: "https://reactrouter.com/",
        },
        {
          title: "Hook",
          text:
            "Hook - это функции, которые позволяют определять категорию состояния и жизненный цикл (state, lifecycle) компонент без использования классов.",
          link: "https://ru.reactjs.org/docs/hooks-intro.html",
        },
        {
          title: "HOC",
          text:
            "HOC (high order component) компонент высшего порядка - это функция, которая принимает компонент и возвращает новый контейнерный компонент. С помощью HOC можно повторно использовать логику для других компонент.",
          link: "https://ru.reactjs.org/docs/higher-order-components.html",
        },
        {
          title: "Reselect",
          text:
            "Reselect - это библиотека для создания мемоизированных селекторов. Используя мемоизацию, мы можем предотвратить ненужные перерисовки. Selector - это функция которая получает state, делает выборку данных из state.",
          link: "https://github.com/reduxjs/reselect",
        },
        {
          title: "MATERIAL-UI",
          text:
            "MATERIAL-UI - это UI библиотека с React компонентами для быстрой и легкой веб-разработки.",
          link: "https://material-ui.com/ru/",
        },
      ],
    };
  }

  render() {
    return this.state.blocks.map((item) =>
      React.createElement(
        "span",
        {
          className: "libary__block",
          style: { "border-top": "1px dashed #61dafb" },
        },
        item.title ? React.createElement("h2", null, item.title) : null,
        React.createElement("h3", null, item.text),
        React.createElement(
          "a",
          {
            href: item.link,
            target: "_blank",
            title: "Ссылка",
            style: { color: "#61dafb" },
          },
          React.createElement("i", { className: "fas fa-link" })
        )
      )
    );
  }
}

const domContainer = document.getElementById("reactDOM");
ReactDOM.render(e(ReactPage), domContainer);
