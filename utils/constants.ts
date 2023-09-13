export enum AppRoutes {
  INDEX = '/',
  DASHBOARD = '/dashboard',
  PROFILE = '/profile',
  TASK = '/task',
  AUTH = '/auth',
  AUTH_SIGN_IN = '/auth/sigin',
  AUTH_SIGN_UP = '/auth/signup',
  CONTACTS = '/contacts',
  ADMIN = '/admin',
  PREMIUM = '/premium',
  CATEGORY = '/category',
  DOMAIN = '/domain',
  PAYMENT = '/payment',
  PAYMENT_BULK = '/payment/bulk',
  SERVICE = '/service',
  CUSTOMER = '/customer',
  REAL_ESTATE = '/real-estate',
  STREETS = '/streets',
}

export enum Operations {
  Credit = 'credit',
  Debit = 'debit',
}

export enum COLOR_THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum PERIOD_FILTR {
  QUARTER = 'quarter',
  MONTH = 'month',
  YEAR = 'year',
}

export enum Roles {
  USER = 'User',
  WORKER = 'Worker',
  MODERATOR = 'Moderator',
  ADMIN = 'Admin',
  GLOBAL_ADMIN = 'GlobalAdmin',
  DOMAIN_ADMIN = 'DomainAdmin',
}

export interface errors {
  [index: string]: string
}

export const errors: errors = {
  SignIn: 'Спробуйте ввійти за допомогою іншого облікового запису.',
  OAuthSignIn: 'Спробуйте ввійти за допомогою іншого облікового запису.',
  OAuthCallback: 'Спробуйте ввійти за допомогою іншого облікового запису.',
  OAuthCreateAccount: 'Спробуйте ввійти за допомогою іншого облікового запису.',
  EmailCreateAccount: 'Спробуйте ввійти за допомогою іншого облікового запису.',
  Callback: 'Спробуйте ввійти за допомогою іншого облікового запису.',
  OAuthAccountNotLinked:
    'Щоб підтвердити свою особу, увійдіть за допомогою того самого облікового запису, який використовували спочатку.',
  EmailSignIn: 'Не вдалося надіслати електронний лист.',
  CredentialsSignIn:
    'Помилка входу. Перевірте правильність наданих вами даних.',
  SessionRequired: 'Увійдіть, щоб отримати доступ до цієї сторінки.',
  default: 'Не вдається ввійти.',
}

export const centerTownGeoCode = {
  lat: 50.264915,
  lng: 28.661954,
}

export enum TaskStatuses {
  PENDING = 'pending',
  PENDING_SELECTION = 'pending selection',
  REJECTED = 'rejected',
  IN_WORK = 'in work',
  EXPIRED = 'expired',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
}

export enum TaskView {
  CARD = 'card',
  LIST = 'list',
}
export const saltRounds = 10

export const paymentsTitle = {
  maintenancePrice: 'Утримання',
  placingPrice: 'Розміщення',
  electricityPrice: 'Електропостачання',
  waterPrice: 'Водопостачання',
  garbageCollectorPrice: 'Вивіз ТПВ',
  inflicionPrice: 'Індекс інфляції',
  waterPart: 'Нарахування водопостачання',
  discount: 'Знижка',
}

export enum ServiceType {
  Electricity = 'electricityPrice',
  Water = 'waterPrice',
  Placing = 'placingPrice',
  Maintenance = 'maintenancePrice',
  GarbageCollector = 'garbageCollectorPrice',
  Inflicion = 'inflicionPrice',
  Custom = 'custom',
  WaterPart = 'waterPart',
  Discount = 'discount'
}

export const quarters = {
  '1': [1, 2, 3],
  '2': [4, 5, 6],
  '3': [7, 8, 9],
  '4': [10, 11, 12],
}

export const cascaderYears = ['2021', '2022', '2023']

export const cascaderQuarters = [
  {
    label: ` І квартал`,
    value: '1',
  },
  {
    label: `ІІ квартал`,
    value: '2',
  },
  {
    label: `III квартал`,
    value: '3',
  },
  {
    label: `IV квартал`,
    value: '4',
  },
]

export const cascaderMonths = [
  {
    label: 'Січень',
    value: '1',
  },
  {
    label: 'Лютий',
    value: '2',
  },
  {
    label: 'Березень',
    value: '3',
  },
  {
    label: 'Квітень',
    value: '4',
  },
  {
    label: 'Травень',
    value: '5',
  },
  {
    label: 'Червень',
    value: '6',
  },
  {
    label: 'Липень',
    value: '7',
  },
  {
    label: 'Серпень',
    value: '8',
  },
  {
    label: 'Вересень',
    value: '9',
  },
  {
    label: 'Жовтень',
    value: '10',
  },
  {
    label: 'Листопад',
    value: '11',
  },
  {
    label: 'Грудень',
    value: '12',
  },
]
