const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  var array = []
  for (var i = 0; i<musicians.length; i++)
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  return array
}

function johnLennonFacts(facts) {
  
}