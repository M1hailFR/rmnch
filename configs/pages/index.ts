export const MAIN_BANNER_CONFIG = Object.freeze({
  desktopPadding: {
    top: '190px',
    bottom: '90px',
  },
  mobilePadding: {
    top: '100px',
    bottom: '40px',
  },
  block_fields: {
    title: `<span class="align-self-start">Rmnch styling</span>
      <span class="text-brand-1 align-self-center">Дизайн сайтов</span>
      <span class="align-self-end">Приложений</span>
      <span class="align-self-center offset-3">Брендинг</span>`,
    subtitle:
      '<span class="banner--subtitle-negative"> Разрабатываем, продвигаем, обслуживаем онлайн шоу-румы для дилерских центров и импортеров</span> <span>Разрабатываем , продвигаем, обслуживаем онлайн шоу-румы для дилерских центров и импортеров</span>',
    logo: '/icon.png',
    titleTextSize: 'text-md-title1',
    subscribeTextSize: 'text-body2 mt-15',
    subscribeType: 'banner--subtitle-negative',
  },
})

export const MAIN_INFO_CONFIG = Object.freeze({
  desktopPadding: {
    top: '148px',
    bottom: '148px',
  },
  mobilePadding: {
    top: '74px',
    bottom: '74px',
  },
  block_fields: {
    title: `<span class="align-self-start">Наша сильная сторона – это</span>
      <span class="align-self-end text-right w-66">создание дизайна сайтов и приложений.</span>`,
    subtitle: ` 
      <span>
        <span class="d-block mr-md-15">Думаем об удобстве пользователя и проектируем интерфесы понятные для аудитории вашего бизнеса. Изучаем вашу нишу, аудиторию, конкурентов и тренды, чтобы сделать обдуманный дизайн и донести пользователю ценность вашего продукта.</span> 
        <p class="text-body2 text-md-right mt-4">Разрабатываем дизайн с нуля и обновляем уже существующие.</p>
      </span>`,
    image: '/img/shared/info/zoro.jpg',
    titleTextSize: 'text-title4 text-sm-title3 text-md-title2',
    subscribeTextSize: 'text-body2 text-md-title3',
    subscribeType: 'banner--subtitle-positive',
  },
})

export const MAIN_CARD_OUR_SERVICES_BLOCK = Object.freeze({
  desktopPadding: {
    top: '148px',
    bottom: '148px',
  },
  mobilePadding: {
    top: '74px',
    bottom: '74px',
  },
  block_fields: {
    title: `
      <div class="text-no-wrap" style="overflow: hidden;">
        <span class="align-self-start">Услуги</span>
        <span class="text-body2 text-md-body1" style="margin: 0 230px 0 90px;">ФУНКЦИОНАЛЬНОСТЬ И Wow-дизайн</span>
        <span class="align-self-start" style="margin-right: 90px;">Услуги</span>
        <span class="text-body1">ФУНКЦИОНАЛЬНОСТЬ И Wow-дизайн</span>
      </div>`,
    card: {
      buttonText: 'Заполнить бриф',
      buttonLink: '/brif',
      buttonStagesOpen: 'Этапы работ',
      buttonStagesClose: 'Закрыть',
      listTitle: 'Этапы разработки',
      lists: [
        {
          title: 'ЛЕНДИНГ',
          text: 'Создаем эффективные посадочные страницы, которые превращают посетителей в клиентов. Наша команда фокусируется на ключевых преимуществах вашего продукта, используя современные принципы веб-дизайна и маркетинга. Разрабатываем уникальные визуальные решения, которые выделяют ваш бренд среди конкурентов. Особое внимание уделяем оптимизации конверсии и скорости загрузки страницы для достижения максимальных результатов.',
          price: 'От 100 000 ₽',
          duration: '14-21 ДЕНЬ',
          stages: [
            { title: 'Брифинг', duration: '1 ДЕНЬ', price: 0 },
            { title: 'Аналитика', duration: '2 ДНЯ', price: 5000 },
            { title: 'Исследования', duration: '2 ДНЯ', price: 5000 },
            { title: 'Прототип', duration: '3 ДНЯ', price: 15000 },
            { title: 'Дизайн', duration: '4 ДНЯ', price: 20000 },
            { title: 'Адаптивы', duration: '2 ДНЯ', price: 15000 },
            { title: 'Анимация', duration: '3 ДНЯ', price: 15000 },
            { title: 'Макет сайта', duration: '1 ДЕНЬ', price: 5000 },
          ],
        },
        {
          title: 'КОРПОРАТИВНЫЙ САЙТ',
          text: 'Разрабатываем комплексные корпоративные решения, которые эффективно представляют ваш бизнес в цифровом пространстве. Создаем удобную структуру с интуитивной навигацией, позволяющую посетителям легко находить нужную информацию о компании, услугах и продуктах. Внедряем современные технологии и инструменты для управления контентом, обеспечивая простоту обновления информации. Уделяем особое внимание безопасности и масштабируемости решения для роста вместе с вашим бизнесом.',
          price: 'От 300 000 ₽',
          duration: '14-21 ДЕНЬ',
          stages: [
            { title: 'Брифинг', duration: '2 ДНЯ', price: 0 },
            { title: 'Аналитика', duration: '3 ДНЯ', price: 15000 },
            { title: 'Исследования', duration: '3 ДНЯ', price: 15000 },
            { title: 'Карта', duration: '2 ДНЯ', price: 20000 },
            { title: 'Прототип', duration: '5 ДНЕЙ', price: 35000 },
            { title: 'Дизайн', duration: '7 ДНЕЙ', price: 45000 },
            { title: 'Адаптивы', duration: '4 ДНЯ', price: 30000 },
            { title: 'Анимация', duration: '4 ДНЯ', price: 25000 },
            { title: 'Микроанимации', duration: '3 ДНЯ', price: 20000 },
            { title: 'Макет сайта', duration: '2 ДНЯ', price: 15000 },
          ],
        },
        {
          title: 'ИНТЕРНЕТ МАГАЗИН',
          text: 'Создаем современные торговые платформы с продуманной архитектурой и удобным процессом покупки. Разрабатываем интуитивный интерфейс каталога товаров с умными фильтрами и системой поиска для быстрого нахождения нужных товаров. Интегрируем надежные платежные системы и удобные способы доставки, обеспечивая безопасность транзакций. Внедряем инструменты аналитики и CRM-системы для эффективного управления продажами и маркетингом.',
          price: 'От 500 000 ₽',
          duration: '21-30 ДЕНЬ',
          stages: [
            { title: 'Брифинг', duration: '2 ДНЯ', price: 0 },
            { title: 'Аналитика', duration: '4 ДНЯ', price: 25000 },
            { title: 'Исследования', duration: '4 ДНЯ', price: 25000 },
            { title: 'Карта', duration: '3 ДНЯ', price: 30000 },
            { title: 'Проектирование', duration: '3 ДНЯ', price: 35000 },
            { title: 'Прототип', duration: '7 ДНЕЙ', price: 50000 },
            { title: 'Дизайн', duration: '10 ДНЕЙ', price: 70000 },
            { title: 'Дизайн-система', duration: '5 ДНЕЙ', price: 40000 },
            { title: 'Адаптивы', duration: '6 ДНЕЙ', price: 45000 },
            { title: 'Анимация', duration: '5 ДНЕЙ', price: 35000 },
            { title: 'Микроанимации', duration: '4 ДНЯ', price: 30000 },
            { title: 'Макет сайта', duration: '3 ДНЯ', price: 25000 },
          ],
        },
        {
          title: 'ДИЗАЙН ПРИЛОЖЕНИЙ',
          text: 'Создаем инновационные решения для мобильных и десктопных платформ с фокусом на пользовательский опыт. Разрабатываем интуитивно понятные интерфейсы, которые делают взаимодействие с приложением простым и приятным. Уделяем особое внимание производительности и оптимизации для различных устройств и операционных систем. Применяем современные паттерны проектирования и следуем лучшим практикам UI/UX дизайна для создания конкурентоспособного продукта.',
          price: 'От 500 000 ₽',
          duration: '21-30 ДЕНЬ',
          stages: [
            { title: 'Брифинг', duration: '2 ДНЯ', price: 0 },
            { title: 'Аналитика', duration: '4 ДНЯ', price: 25000 },
            { title: 'Исследования', duration: '4 ДНЯ', price: 25000 },
            { title: 'Карта', duration: '3 ДНЯ', price: 30000 },
            { title: 'Проектирование', duration: '5 ДНЕЙ', price: 45000 },
            { title: 'Прототип', duration: '7 ДНЕЙ', price: 50000 },
            { title: 'Дизайн', duration: '10 ДНЕЙ', price: 70000 },
            { title: 'Дизайн-система', duration: '6 ДНЕЙ', price: 45000 },
            { title: 'Адаптивы', duration: '5 ДНЕЙ', price: 40000 },
            { title: 'Анимация', duration: '5 ДНЕЙ', price: 35000 },
            { title: 'Микроанимации', duration: '4 ДНЯ', price: 30000 },
            { title: 'Макет', duration: '3 ДНЯ', price: 25000 },
          ],
        },
        {
          title: 'БРЕНДИНГ',
          text: 'Разрабатываем целостную айдентику, которая отражает ценности и философию вашего бренда. Создаем запоминающийся визуальный язык, который выделяет вас среди конкурентов и остается в памяти целевой аудитории. Формируем полноценную систему визуальных коммуникаций, от логотипа до корпоративных материалов. Обеспечиваем последовательность бренда во всех точках контакта с аудиторией, создавая сильный и узнаваемый образ.',
          price: 'От 300 000 ₽',
          duration: '21-30 ДЕНЬ',
          stages: [
            { title: 'Брифинг', duration: '2 ДНЯ', price: 0 },
            { title: 'Аналитика', duration: '4 ДНЯ', price: 20000 },
            { title: 'Исследования', duration: '3 ДНЯ', price: 20000 },
            { title: 'Позиционирование', duration: '3 ДНЯ', price: 25000 },
            { title: 'Разработка концепции', duration: '5 ДНЕЙ', price: 35000 },
            { title: 'Логотип и айдентика', duration: '7 ДНЕЙ', price: 50000 },
            { title: 'Фирменный стиль', duration: '6 ДНЕЙ', price: 45000 },
            { title: 'Брендбук', duration: '5 ДНЕЙ', price: 35000 },
            { title: 'Гайдлайн', duration: '4 ДНЯ', price: 30000 },
            { title: 'Подготовка макетов', duration: '3 ДНЯ', price: 20000 },
          ],
        },
      ],
    },
  },
})
