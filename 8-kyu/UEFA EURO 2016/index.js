function uefaEuro2016(teams, scores) {
  // your code...

  let firstTeam = teams[0]
  let secondTeam = teams[1]

  let firstScore = scores[0]
  let secondScore = scores[1]

  if (firstScore > secondScore) {
    return `At match ${firstTeam} - ${secondTeam}, ${firstTeam} won!`
  } else if (secondScore > firstScore) {
    return `At match ${firstTeam} - ${secondTeam}, ${secondTeam} won!`
  } else {
    return 'At match ' + firstTeam + ' - ' + secondTeam + ', teams played draw.'
  }
}
