export const getCardsToLocalStorage = (cardId: number | string) => {
  const localStorageData = localStorage.getItem('recentlyViewedProducts');
  const recentlyViewedCards: string[] = localStorageData ? JSON.parse(localStorageData) : []
  
  return recentlyViewedCards.filter(item => Number(item) !== Number(cardId))
};