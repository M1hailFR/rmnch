import { en } from 'vuetify/locale'

export default {
  $vuetify: {
    ...en,
    dataIterator: {
      rowsPerPageText: 'Items per page:',
      pageText: '{0}-{1} of {2}',
    },
  },
  
  menu: {
    main: 'Main',
    services: 'Services',
    portfolio: 'Portfolo',
    team: 'Team',
    contacts: 'Contacts',
    buttonOpen: 'Menu',
    buttonClose: 'Close',
    buttonForm: 'Fill out a brief'
  },
  contacts: {
    title: 'Located in Moscow',
    subtitle: 'Working across Russia and Worldwide',
    info: {
      phone: 'Phone',
      mail: 'Email',
      messengers: 'Messengers',
      socials: 'Social networks',
      projects: 'Our other projects'
    }
  },
  test: {
    hello: 'Hello!',
    welcome: 'Welcome, {name}!'
  },

}
