export const saveCardToLocalStorage = (cardId: string | number) => {
  const localStorageData = localStorage.getItem('recentlyViewedProducts');
  const recentlyViewedCards: (string | number)[] = localStorageData ? JSON.parse(localStorageData) : []

  if (!recentlyViewedCards.includes(cardId)) {
    recentlyViewedCards.unshift(cardId);

    if (recentlyViewedCards.length > 5) {
      recentlyViewedCards.length = 5
    }
    
    localStorage.setItem('recentlyViewedProducts', JSON.stringify(recentlyViewedCards));
  }
};