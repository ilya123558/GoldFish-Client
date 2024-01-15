import { ProfilePage } from "../ui/ProfilePage"
import { ProfileOrders } from "../ui/ProfileOrders"
// import { ProfilePage } from "../ui/ProfilePage"
import { ProfileSettings } from "../ui/ProfileSettings"

const navigationItems = [
  { title: 'Личный кабинет', url: 'profile' }
]

const navigationItemsForProfile = [
  ...navigationItems,
  { title: 'Профиль', url: 'profile' }
] 

const navigationItemsForOrders = [
  ...navigationItems,
  { title: 'Заказы', url: 'orders' }
] 

const navigationItemsForEvents = [
  ...navigationItems,
  { title: 'Мероприятия', url: 'events' }
] 

const navigationItemsForSettings = [
  ...navigationItems,
  { title: 'Настройки', url: 'settings' }
] 


export const infoAboutPage = {
  profile: {
    title: 'Личный кабинет',
    component: ProfilePage,
    navigationItems: navigationItemsForProfile
  },
  orders: {
    title: 'Заказы',
    component: ProfileOrders,
    navigationItems: navigationItemsForOrders
  },
  events: {
    title: 'Мероприятия',
    component: () => <div>Мероприятия</div>,
    navigationItems: navigationItemsForEvents
  },
  settings: {
    title: 'Настройки',
    component: ProfileSettings,
    navigationItems: navigationItemsForSettings
  },
} 