export const getRandomColor = function() {
  const priceColor = ['#5bd35b', '#00c3ff', '#e75dc9', '#e6582d']
    return priceColor[Math.floor(Math.random() * priceColor.length)]
}