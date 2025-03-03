export const HEADER_INDIVIDUAL_CONFIG = Object.freeze({
  block_fields: {
    logo: '/logo.png',
    text: '',
    buttonOpen: 'menu.buttonOpen',
    buttonClose: 'menu.buttonClose',
    buttonForm: 'menu.buttonForm',
    menu: [
      {
        text: 'menu.main',
        link: '/'
      },
      {
        text: 'menu.services',
        link: '/services'
      },
      {
        text: 'menu.portfolio',
        link: '/portfolio'
      },
      {
        text: 'menu.team',
        link: '/team'
      },
      {
        text: 'menu.contacts',
        link: '/contacts'
      }
    ],

    contacts: {
      title: 'contacts.title',
      subtitle: 'contacts.subtitle',
      info: [
        {
          label: 'contacts.info.phone',
          value: '+7 999 999-99-99'
        },
        {
          label: 'contacts.info.mail',
          value: 'rmnchstyling@gmail.com'
        },
        {
          label: 'contacts.info.messengers',
          items: [
            { name: 'TELEGRAM', shortName: 'tg', link: 'https://telegram.org/' },
            { name: 'WHATSAPP', shortName: 'wa', link: 'https://www.whatsapp.com' }
          ]
        },
        {
          label: 'contacts.info.socials',
          items: [
            { name: 'VKONTAKTE', shortName: 'vk', link: 'https://vk.com/' },
            { name: 'INSTAGRAM', shortName: 'inst', link: 'https://instagram.com' },
            { name: 'BEHANCE', shortName: 'bn', link: 'https://behance.net' }
          ]
        },
        {
          label: 'contacts.info.projects',
          items: [
            { name: 'ШКОЛА ДИЗАЙНЕРОВ', link: '/school' },
            { name: 'БЛОГ О ДИЗАЙНЕ', link: '/blog' }
          ]
        }
      ]
    },

    formSettings: {
      title: 'Заявка на консультацию',
      subtitle: 'Заполните форму ниже. Мы ответим вам в течение N минут',
      buttonText: 'Отправить заявку',
      description: `Отправляя форму, вы даете <a href="/" class="text-brand-1">согласие</a> на обработку своих персональных данных и
                    соглашаетесь с
                    <a href="/" class="text-brand-1">политикой обработки персональных данных</a>`
    }
  }
});

export const FOOTER_DEFAULT_CONFIG = Object.freeze({
  block_fields: {
    offers: [
      {
        text: 'Договор-оферта',
        link: '/about-company'
      },
      {
        text: 'Лицензия',
        link: 'https://google.com'
      },
      {
        text: 'Тарифы',
        link: ''
      }
    ]
  }
});

// export const HEADER_DEFAULT_CONFIG = Object.freeze({
//   block_fields: {
//     logo: '/logo.png',
//     text: 'Rmnch',
//     buttonMenu: 'menu.button',
//     buttonForm: 'menu.buttonForm',
//     menu: [
//       {
//         text: 'menu.main',
//         link: '/'
//       },
//       {
//         text: 'menu.services',
//         link: '/services'
//       },
//       {
//         text: 'menu.portfolio',
//         link: '/portfolio'
//       },
//       {
//         text: 'menu.team',
//         link: '/team'
//       },
//       {
//         text: 'menu.contacts',
//         link: '/contacts'
//       }
//     ],
//     phone: '88006001967',
//     email: 'info@rmnch.ru',
//     socials: [
//       {
//         name: 'vkontakte',
//         shortName: 'vk',
//         link: 'https://vk.com/'
//       },
//       {
//         name: 'whatsapp',
//         shortName: 'wa',
//         link: 'https://www.whatsapp.com'
//       },
//       {
//         name: 'telegram',
//         shortName: 'tg',
//         link: 'https://telegram.org/'
//       }
//     ],
//     formSettings: {
//       title: 'Заявка на консультацию',
//       subtitle: 'Заполните форму ниже. Мы ответим вам в течение N минут',
//       buttonText: 'Отправить заявку',
//       description: `Отправляя форму, вы даете <a href="/" class="text-brand-1">согласие</a> на обработку своих персональных данных и
//                     соглашаетесь с
//                     <a href="/" class="text-brand-1">политикой обработки персональных данных</a>`
//     }
//   }
// });
