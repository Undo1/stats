var hand = 0

$("#generate_hands").click(function() {
	hand = 0
	$("#results_table tr").remove()
	iterations = Number($("#number_of_hands").val())
	console.log("it: " + iterations)
	for(it=0; it<iterations; it++)
		generateHand()
});

function generateHand()
{
	hand = hand + 1
	suits = new Array("H", "C", "S", "D");
	var cards = new Array();
	// changed 3 to 4 to display all four suits
	var cnt = 0;
	for(i=0; i<4; i++)
		for(j=1; j<=13; j++)
			cards[cnt++] = suits[i] + j;

	
	cards = shuffle(cards);
	console.log(cards);
	card1 = cards[0];
	card2 = cards[1];

	console.log(rankForCard(card1) + " of " + suitForCard(card1))

	row = "<tr><td>" + hand + "</td><td>" + renderCard(card1) + "</td><td>" + renderCard(card2) + "</td></tr>"
	$("#results_table tbody").append(row)
}
function renderCard(card) 
{
	str = "<div class='playingCards'>"
	str = str + "<div class='card rank-" + rankForCard(card) + " " + suitForCard(card) + "'>"
	str = str + "<span class='rank'>" + rankForCard(card).toUpperCase() + "</span>"
	str = str + "<span class='suit'>&" + suitForCard(card) + ";</span>"
	str = str + "</div>"
	str = str + "</div>"
	return str
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
function suitForCard(card)
{
	cardSuits = {};
	cardSuits["D"] = "diams";
	cardSuits["H"] = "hearts";
	cardSuits["C"] = "clubs";
	cardSuits["S"] = "spades";

	return cardSuits[card.charAt(0)];
}
function rankForCard(card)
{
	cardType = card.substr(1);
	if (cardType === "1")
	{
		return "a"
	}
	if (cardType === "11")
	{
		return "j"
	}
	if (cardType === "12")
	{
		return "q"
	}
	if (cardType === "13")
	{
		return "k"
	}
	return cardType
}
