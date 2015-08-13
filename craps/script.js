var win = false
var lose = false
var count = 0

$("#roll_die").click(function() {
	$("#results_table tr:not(:first)").remove()
	count = 0
	win = false
	lose = false
	while (!win && !lose)
	{
		console.log("Running")
		count = count + 1
		rollDie()
	}
});

function rollDie()
{
	var diceFaces = new Array("1", "2", "3", "4", "5", "6")
	
	shuffle(diceFaces)

	var die1 = diceFaces[0]

	shuffle(diceFaces)

	var die2 = diceFaces[0]

	var sum = Number(die1) + Number(die2)

	console.log(sum)

	if (sum == 2 || sum == 3 || sum == 12)
	{
		lose = true
	}
	if (sum == 7 || sum == 11)
	{
		win = true
	}
	
	var row_class = ''
	if (win)
	{
		row_class = 'success'
	}
	if (lose)
	{
		row_class = 'danger'
	}

	var result = '-'
	if (win)
	{
		result = "Win"
	}
	if (lose)
	{
		result = "Lose"
	}

	var row = "<tr class='" + row_class + "'><td>" + count + "</td><td>" + renderRoll(die1) + "</td><td>" + renderRoll(die2) + "</td><td>" + result + "</td></tr>"
	$("#results_table").append(row)
}

function renderRoll(d)
{
	str = "<div class='die " + nameForNumber(d) + "'><span class='dot'></span></div>"
	return str
}

function nameForNumber(n)
{
	var arr = new Array("one", "two", "three", "four", "five", "six")
	return arr[Number(n)-1]
}

function shuffle(array)
{
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
