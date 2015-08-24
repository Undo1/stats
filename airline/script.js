var count = 0

$("#roll_die").click(function() {
	$("#results_table tr:not(:first)").remove()
	count = 0
	
	while (count < 5)
	{
		console.log("Running");

		count = count + 1;

		malePilots = choosePilots();

		$("#results_table").append("<tr><td>" + count + "</td><td>" + malePilots + "</td><td>" + (8-malePilots) + "</td></tr>")
	}
});
function choosePilots()
{
	var pilots = fillArray("M", 15).concat(fillArray("F", 10));
	shuffle(pilots);

	selectedPilots = pilots.slice(0,8);

	return selectedPilots.filter(function(x) { return x=="M" }).length	
}
function fillArray(value, len) {
	var arr = [];
	for (var i = 0; i < len; i++) {
		arr.push(value);
	}
	return arr;
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
