let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

 let sum = sumSalaries( salaries );
alert (sum);


function sumSalaries (players) {
  let sumSal = 0;
  for (let key in players) sumSal += players[key];
  return sumSal;
}