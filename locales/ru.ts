import { ru } from 'vuetify/locale'

export default {
  $vuetify: {
    ...ru,
    dataIterator: {
      rowsPerPageText: 'Элементов на странице:',
      pageText: '{0}-{1} из {2}',
    },
  },
  menu: {
    main: 'Главная',
    services: 'Услуги',
    portfolio: 'Портфолио',
    team: 'Команда',
    contacts: 'Контакты',
    buttonOpen: 'Меню',
    buttonClose: 'Закрыть',
    buttonForm: 'Заполнить бриф',
    
  },
  contacts: {
    title: 'Находимся в Москве',
    subtitle: 'Работаем по всей России и Миру',
    info: {
      phone: 'Телефон',
      mail: 'Почта',
      messengers: 'Мессенджеры',
      socials: 'Соц. сети',
      projects: 'Другие наши проекты'
    }
  },
  test: {
    hello: 'Привет!',
    welcome: 'Добро пожаловать, {name}!'
  },

}
