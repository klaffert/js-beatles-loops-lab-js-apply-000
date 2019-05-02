function theBeatlesPlay(musician, instrument) {
  var array = []
  for (var i = 1; i < 1;i++)
  array.push(`${musician[i]} plays ${instrument[i]}`)
  return `${musician} plays ${instrument} ${array.join(", ")}`
}