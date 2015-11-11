$(function(){

	function Team (name, abbr){
		this.constructor.all.push(this);
		this.name = name;
		this.abbr = abbr;
		this.id = Team.count;
		Team.count++;
		this.wins = 0;
		this.draws = 0;
		this.losses = 0;
		this.games = 0;
		this.points = 0;
		this.gf = 0;
		this.ga = 0;
		this.diff = 0;
		
		//// MAIN TABLE ROW ////
		this.el = function(){
			return "<tr data-id='"+this.id+"'><td>" + this.name + "</td><td>" + this.games + "</td><td>" + this.wins + "</td><td>" + this.draws + "</td><td>" + this.losses + "</td><td>" + this.points + "</td><td>" + this.gf + "</td><td>" + this.ga + "</td><td>" + this.diff +"</td></tr>";
		};
		this.display = function(){
			$('#standings tbody').append(this.el());
		};

		// SECOND TABLE HEADING ////
		this.tablehead = function(){
			return "<th>" + this.abbr + "</th>";
		};
		//// SECOND TABLE ROW ////
		this.tablerow = function(){
			return "<tr data-row='"+this.id+"'><th>" + this.abbr + "</th><td data-id='0'></td><td data-id='1'></td><td data-id='2'></td><td data-id='3'></td><td data-id='4'></td><td data-id='5'></td></tr>";
		};
		
		//// SECOND TABLE DISPLAY ////
		this.display2 = function(){
			$('#team-heading').append(this.tablehead());
			$('#team-row').append(this.tablerow());
		};
	}
	//// TEAM COUNTER ////
	Team.count = 0;


	//// SORTABLE TABLE ////
	 $('#simpleTable').stupidtable();
	
	//// CREATE TEAM ARRAY ////
	Team.all = [];
	
	//// CREATE TEAMS ////
	var czech = new Team("Czech Republic", "CZE");
	var iceland = new Team("Iceland", "ICE");
	var netherlands = new Team ("Netherlands", "NED");
	var turkey = new Team ("Turkey", "TUR");
	var latvia = new Team ("Latvia", "LAT");
	var kazakhstan = new Team ("Kazakhstan", "KZK");

	//// DISPLAY TEAMS IN TABLES ////	
	for (var i = 0; i < Team.all.length; i++){
		Team.all[i].display();
		Team.all[i].display2();
	}


	//// MATCH DISPLAY ////
	//ROUND 1
	function DisplayGame1(){
		return "<li>"+czech.abbr+"<input data-id='"+czech.id+"'> vs. "+iceland.abbr+"<input data-id='"+iceland.id+"'></li>"+
		"<li>"+netherlands.abbr+"<input data-id='"+netherlands.id+"'> vs. "+turkey.abbr+"<input data-id='"+turkey.id+"'></li>"+
		"<li>"+latvia.abbr+"<input data-id='"+latvia.id+"'> vs. "+kazakhstan.abbr+"<input data-id='"+kazakhstan.id+"'></li></ul>";
	}
	$("#game1").append(DisplayGame1());

	//ROUND 2
	function DisplayGame2(){
		return "<li>"+iceland.abbr+"<input data-id='"+iceland.id+"'> vs. "+czech.abbr+"<input data-id='"+czech.id+"'></li>"+
		"<li>"+turkey.abbr+"<input data-id='"+turkey.id+"'> vs. "+netherlands.abbr+"<input data-id='"+netherlands.id+"'></li>"+
		"<li>"+kazakhstan.abbr+"<input data-id='"+kazakhstan.id+"'> vs. "+latvia.abbr+"<input data-id='"+latvia.id+"'></li></ul>";
	}
	$("#game2").append(DisplayGame2());
	$("#play2").hide();
	
	//ROUND 3
	function DisplayGame3(){
		return "<li>"+czech.abbr+"<input data-id='"+czech.id+"'> vs. "+netherlands.abbr+"<input data-id='"+netherlands.id+"'></li>"+
		"<li>"+iceland.abbr+"<input data-id='"+iceland.id+"'> vs. "+latvia.abbr+"<input data-id='"+latvia.id+"'></li>"+
		"<li>"+turkey.abbr+"<input data-id='"+turkey.id+"'> vs. "+kazakhstan.abbr+"<input data-id='"+kazakhstan.id+"'></li></ul>";
	}
	$("#game3").append(DisplayGame3());
	$("#play3").hide();

	//ROUND 4
	function DisplayGame4(){
		return "<li>"+netherlands.abbr+"<input data-id='"+netherlands.id+"'> vs. "+czech.abbr+"<input data-id='"+czech.id+"'></li>"+
		"<li>"+latvia.abbr+"<input data-id='"+latvia.id+"'> vs. "+iceland.abbr+"<input data-id='"+iceland.id+"'></li>"+
		"<li>"+kazakhstan.abbr+"<input data-id='"+kazakhstan.id+"'> vs. "+turkey.abbr+"<input data-id='"+turkey.id+"'></li></ul>";
	}
	$("#game4").append(DisplayGame4());
	$("#play4").hide();

	//ROUND 5
	function DisplayGame5(){
		return "<li>"+czech.abbr+"<input data-id='"+czech.id+"'> vs. "+turkey.abbr+"<input data-id='"+turkey.id+"'></li>"+
		"<li>"+iceland.abbr+"<input data-id='"+iceland.id+"'> vs. "+kazakhstan.abbr+"<input data-id='"+kazakhstan.id+"'></li>"+
		"<li>"+netherlands.abbr+"<input data-id='"+netherlands.id+"'> vs. "+latvia.abbr+"<input data-id='"+latvia.id+"'></li></ul>";
	}
	$("#game5").append(DisplayGame5());
	$("#play5").hide();

	//ROUND 6
	function DisplayGame6(){
		return "<li>"+turkey.abbr+"<input data-id='"+turkey.id+"'> vs. "+czech.abbr+"<input data-id='"+czech.id+"'></li>"+
		"<li>"+kazakhstan.abbr+"<input data-id='"+kazakhstan.id+"'> vs. "+iceland.abbr+"<input data-id='"+iceland.id+"'></li>"+
		"<li>"+latvia.abbr+"<input data-id='"+latvia.id+"'> vs. "+netherlands.abbr+"<input data-id='"+netherlands.id+"'></li></ul>";
	}
	$("#game6").append(DisplayGame6());
	$("#play6").hide();

	//ROUND 7
	function DisplayGame7(){
		return "<li>"+czech.abbr+"<input data-id='"+czech.id+"'> vs. "+latvia.abbr+"<input data-id='"+latvia.id+"'></li>"+
		"<li>"+iceland.abbr+"<input data-id='"+iceland.id+"'> vs. "+turkey.abbr+"<input data-id='"+turkey.id+"'></li>"+
		"<li>"+netherlands.abbr+"<input data-id='"+netherlands.id+"'> vs. "+kazakhstan.abbr+"<input data-id='"+kazakhstan.id+"'></li></ul>";
	}
	$("#game7").append(DisplayGame7());
	$("#play7").hide();

	//ROUND 8
	function DisplayGame8(){
		return "<li>"+latvia.abbr+"<input data-id='"+latvia.id+"'> vs. "+czech.abbr+"<input data-id='"+czech.id+"'></li>"+
		"<li>"+turkey.abbr+"<input data-id='"+turkey.id+"'> vs. "+iceland.abbr+"<input data-id='"+iceland.id+"'></li>"+
		"<li>"+kazakhstan.abbr+"<input data-id='"+kazakhstan.id+"'> vs. "+netherlands.abbr+"<input data-id='"+netherlands.id+"'></li></ul>";
	}
	$("#game8").append(DisplayGame8());
	$("#play8").hide();
	
	//ROUND 9
	function DisplayGame9(){
		return "<li>"+czech.abbr+"<input data-id='"+czech.id+"'> vs. "+kazakhstan.abbr+"<input data-id='"+kazakhstan.id+"'></li>"+
		"<li>"+latvia.abbr+"<input data-id='"+latvia.id+"'> vs. "+turkey.abbr+"<input data-id='"+turkey.id+"'></li>"+
		"<li>"+netherlands.abbr+"<input data-id='"+netherlands.id+"'> vs. "+iceland.abbr+"<input data-id='"+iceland.id+"'></li></ul>";
	}
	$("#game9").append(DisplayGame9());
	$("#play9").hide();

	//ROUND 10
	function DisplayGame10(){
		return "<li>"+kazakhstan.abbr+"<input data-id='"+kazakhstan.id+"'> vs. "+czech.abbr+"<input data-id='"+czech.id+"'></li>"+
		"<li>"+turkey.abbr+"<input data-id='"+turkey.id+"'> vs. "+latvia.abbr+"<input data-id='"+latvia.id+"'></li>"+
		"<li>"+iceland.abbr+"<input data-id='"+iceland.id+"'> vs. "+netherlands.abbr+"<input data-id='"+netherlands.id+"'></li></ul>";
	}
	$("#game10").append(DisplayGame10());
	$("#play10").hide();
	var pointarray = [];
		//// CHANGE UNIFORM DATA ////
	var gametime =	function (game){
		for (var i = 0; i < Team.all.length; i++){
			// DECLARE VARIABLES
			var index = game.find("input[data-id='"+Team.all[i].id+"']").index(),
				teamscore = parseInt(game.find("input[data-id='"+Team.all[i].id+"']").val()),
				oppscore = 0, 
				oppid = parseInt(game.find("input[data-id='"+Team.all[i].id+"']").siblings().data('id'));
			scoretable = function(){
				return teamscore + " - " + oppscore;
			};
			scorefixture = function(){
				return "<span>" + oppscore + " - " + teamscore + "</span>";
			};

			//FIND OPPONENT'S SCORE IN THE LI and MANIPULATE TABLE 2
			if (index === 0){
				var oppscore = parseInt(game.find("input[data-id='"+Team.all[i].id+"']").parent().find('input').eq(1).val());
				$('#team-row').find("tr[data-row='"+Team.all[i].id+"']").find("td[data-id='"+Team.all[i].id+"']").html("X");
				$('#team-row').find("tr[data-row='"+Team.all[i].id+"']").find("td[data-id='"+oppid+"']").html(scoretable());
			} else {
				var oppscore =  parseInt(game.find("input[data-id='"+Team.all[i].id+"']").parent().find('input').eq(0).val());
				game.find("input[data-id='"+Team.all[i].id+"']").parent().append(scorefixture()); 
				$('#team-row').find("tr[data-row='"+Team.all[i].id+"']").find("td[data-id='"+Team.all[i].id+"']").html("X");
			}
			//MODIFY TABLE DATA
			Team.all[i].games += 1;
			Team.all[i].gf += teamscore;
			Team.all[i].ga += oppscore;
			Team.all[i].diff = parseInt(Team.all[i].gf - Team.all[i].ga);

			if ($('input').val() === ""){		//TABLE VALIDATION
				return alert("fill in the boxes!!!");
			}

			if (teamscore > oppscore){
				Team.all[i].wins += 1;
				Team.all[i].points +=3;
			} else if (oppscore > teamscore){
				Team.all[i].losses += 1;
			} else {
				Team.all[i].draws += 1;
				Team.all[i].points += 1;
			}

			$('tbody').find('tr[data-id="'+Team.all[i].id+'"]').remove();
			Team.all[i].display();


		} //end for loop
	}; //end gametime function

	// var pointarray = [];
	// var pointvalue = function(){
	// 	for (i = 0; i < Team.all.length; i++){
	// 		pointarray.push(Team.all.points);
	// 		console.log(Team.all.points);
	// 	}
	// 	var champion = parseInt(Math.max(pointarray));
	// 	console.log(champion);
	// 	if (champion === Team.all.points){
	// 		$('tr').css({backgroundColor: "#ffe"});
	// 	}
	// }

	$('#game2').hide();	
	$('#game3').hide();	
	$('#game4').hide();	
	$('#game5').hide();	
	$('#game6').hide();	
	$('#game7').hide();	
	$('#game8').hide();	
	$('#game9').hide();	
	$('#game10').hide();	

	//DISPLAY ROUND 1 RESULTS
	$("#play1").click(function(event){
		event.preventDefault();
		gametime($("#game1"));
		$("#play1").remove(); //Remove this button, so that you can only play this game once.
		$('#game1 input').hide();
		$('#game2').show();
		$('#play2').show();
	});
	
	//DISPLAY ROUND 2 RESULTS
	$("#play2").click(function(event){
		event.preventDefault();
		gametime($("#game2"));
		$("#play2").remove(); //Remove this button, so that you can only play this game once.
		$('#game2 input').hide();
		$('#game3').show();
		$('#play3').show();
	});
	
	//DISPLAY ROUND 3 RESULTS
	$("#play3").click(function(event){
		event.preventDefault();
		gametime($("#game3"));
		$("#play3").remove(); //Remove this button, so that you can only play this game once.
		$('#game3 input').hide();
		$('#game4').show();
		$('#play4').show();
	});

	//DISPLAY ROUND 4 RESULTS
	$("#play4").click(function(event){
		event.preventDefault();
		gametime($("#game4"));
		$("#play4").remove(); //Remove this button, so that you can only play this game once.
		$('#game4 input').hide();
		$('#game5').show();
		$('#play5').show();
	});
	//DISPLAY ROUND 5 RESULTS
	$("#play5").click(function(event){
		event.preventDefault();
		gametime($("#game5"));
		$("#play5").remove(); //Remove this button, so that you can only play this game once.
		$('#game5 input').hide();
		$('#game6').show();
		$('#play6').show();
	});
	//DISPLAY ROUND 6 RESULTS
	$("#play6").click(function(event){
		event.preventDefault();
		gametime($("#game6"));
		$("#play6").remove(); //Remove this button, so that you can only play this game once.
		$('#game6 input').hide();
		$('#game7').show();
		$('#play7').show();
	});
	//DISPLAY ROUND 7 RESULTS
	$("#play7").click(function(event){
		event.preventDefault();
		gametime($("#game7"));
		$("#play7").remove(); //Remove this button, so that you can only play this game once.
		$('#game7 input').hide();
		$('#game8').show();	
		$('#play8').show();
	});
	//DISPLAY ROUND 8 RESULTS
	$("#play8").click(function(event){
		event.preventDefault();
		gametime($("#game8"));
		$("#play8").remove(); //Remove this button, so that you can only play this game once.
		$('#game8 input').hide();
		$('#game9').show();		
		$('#play9').show();
	});
	//DISPLAY ROUND 9 RESULTS
	$("#play9").click(function(event){
		event.preventDefault();
		gametime($("#game9"));
		$("#play9").remove(); //Remove this button, so that you can only play this game once.
		$('#game9 input').hide();
		$('#game10').show();		
		$('#play10').show();
	});
	//DISPLAY ROUND 10 RESULTS
	$("#play10").click(function(event){
		event.preventDefault();
		gametime($("#game10"));
		$("#play10").remove(); //Remove this button, so that you can only play this game once.
		$('#game10 input').hide();
	});


});