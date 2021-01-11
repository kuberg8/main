const titleComponent = `
<div>
  <div 
    v-for="(item, index) in blocks" 
    :key="index" class="libary__block" 
    style="border-top: 1px dashed #4fc08d"
    >
      <h2 v-if="item.title">{{item.title}}</h2>
      <h3>{{item.text}}</h3>
      <a 
        :href="item.link" 
        target="_blank" 
        title="Ссылка" 
        style="color: #4fc08d"
        >
        <i class='fas fa-link'></i>
        </a>
   </div>
</div>
`;

var vm = new Vue({
  el: "#vueDOM",
  template: titleComponent,
  data() {
    return {
      blocks: [
        {
          title: null,
          text:
            "Vue - это фреймворк для создания пользовательских интерфейсов.",
          link: "https://ru.vuejs.org/",
        },
        {
          title: "VueX",
          text:
            "Vuex — паттерн управления состоянием + библиотека для приложений на Vue.js.",
          link: "https://vuex.vuejs.org/ru/",
        },
        {
          title: "Nuxt",
          text:
            "Nuxt.js — это минималистичный фреймворк для создания приложений на Vue.js с серверным рендерингом.",
          link: "https://ru.nuxtjs.org/",
        },
        {
          title: "Vuelidate",
          text:
            "Vuelidate - это библиотека, которая упрощает работу с проверкой форм, позволяет писать свои валидаторы.",
          link: "https://vuelidate.js.org/",
        },
        {
          title: "Vuetify",
          text: "Vuetify - это компонентный фреймворк дизайна для Vue.js.",
          link: "https://vuetifyjs.com/en/",
        },
        {
          title: "Vue Router",
          text: "Vue Router — официальная библиотека маршрутизации для Vue.js.",
          link: "https://router.vuejs.org/ru/",
        },
        {
          title: "Slot",
          text:
            "Слоты представляют способ создания фиксированной структуры компонента, при котором содержимое для различных частей компонента определяет родительский компонент.",
          link: "https://ru.vuejs.org/v2/guide/components-slots.html",
        },
        {
          title: "Mixins",
          text:
            "Примеси (mixins) — это гибкий инструмент повторного использования кода в компонентах Vue. Объект примеси может содержать любые опции компонентов. При использовании компонентом примеси, все опции примеси «подмешиваются» к собственным опциям компонента.",
          link: "https://ru.vuejs.org/v2/guide/mixins.html",
        },
        {
          title: "Filter",
          text:
            "Для распространённых задач форматирования текста во Vue используются фильтры.",
          link: "https://ru.vuejs.org/v2/guide/filters.html",
        },
        {
          title: "Keep-alive",
          text: "Keep-alive - это кеширование компонентов",
          link: "https://ru.vuejs.org/v2/guide/components-dynamic-async.html",
        },
      ],
    };
  },
});
