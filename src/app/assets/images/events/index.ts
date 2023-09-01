import boardGame from './boardGame.png'
import desiredReleases from './desiredReleases.png'
import halloween from './halloween.png'
import imperialis from './imperialis.png'
import warhammer from './warhammer.png'

export const findEventImg = (src: string) => {
  switch (src) {
    case 'halloween':
      return halloween
    case 'warhammer':
      return warhammer
    case 'imperialis':
      return imperialis
    case 'board-game':
      return boardGame
    case 'desired-releases':
      return desiredReleases
    default:
      return ''
  }
}