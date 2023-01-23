export function setRating(rate, white, yellow) {
  let starLength = white.offsetWidth
  let width = rate / 5 * 100
  let result = starLength / 100 * width
  yellow.style.width = `${result}px`
}