function theBeatlesPlay(musician, instrument) {
  var array = []
  for (var i = 1; i < 4; i++)
  array.push(`${musician} plays ${instrument[i]}`)
  return `${musician} plays ${instrument}`
}