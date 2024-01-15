import { allCatalog, boardGames, colors, magicTheGathering, wargames } from '@/app/assets/images/catalog'

export const cotalogItems = [
  {
    title: 'Настольные игры',
    imgSrc: boardGames,
    link: 'board-games'
  }, {
    title: 'Варгеймы',
    imgSrc: wargames,
    link: 'wargames'
  }, {
    title: 'Краски',
    imgSrc: colors,
    link: 'colors'
  }, {
    title: 'Magic:the Gathering',
    imgSrc: magicTheGathering,
    link: 'magic-the-gathering'
  }, {
    title: 'Весь каталог',
    imgSrc: allCatalog,
    link: 'all-catalog'
  },
]