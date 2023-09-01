import time from './time.png'
import players from './players.png'
import busket from './busket.png'

import Warhammer40000ChaosSpaceMarines from './Warhammer40,000ChaosSpaceMarines.png'
import BrokenRealms from './BrokenRealms.png'
import Mars from './mars.png'
import OrksGhazghkullThraka from './Warhammer40,000ChaosSpaceMarines.png'

export const findImg = (src: string) => {
  switch (src) {
    case 'Warhammer 40,000: Chaos Space Marines':
      return Warhammer40000ChaosSpaceMarines
    case 'Broken Realms: Horrek\'s Dreadlance':
      return BrokenRealms
    case 'На марсе':
      return Mars
    case 'Orks: Ghazghkull Thraka Коллекционный выпуск':
      return OrksGhazghkullThraka
    default:
      return ''
  }
}

export { time, players, busket }