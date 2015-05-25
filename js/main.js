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

	//// DISPLAY TEAMS IN TABLE 1 ////	
	for (var i = 0; i < Team.all.length; i++){
		Team.all[i].display();
		Team.all[i].display2();
	}


	//// MATCH DISPLAY ////
	// TEAM VARIABLES //


	//ROUND 1
	function DisplayGame1(){
		return "<li>"+czech.abbr+"<input data-id='"+czech.id+"'> vs. "+iceland.abbr+"<input data-id='"+iceland.id+"'></li>"+
		"<li>"+netherlands.abbr+"<input data-id='"+netherlands.id+"'> vs. "+turkey.abbr+"<input data-id='"+turkey.id+"'></li>"+
		"<li>"+latvia.abbr+"<input data-id='"+latvia.id+"'> vs. "+kazakhstan.abbr+"<input data-id='"+kazakhstan.id+"'></li></ul>";
	}
	$("#game1").append(DisplayGame1());

	//DISPLAY ROUND 1 RESULTS
	$("#play").click(function(event){
		event.preventDefault();
		//// CHANGE UNIFORM DATA ////
			for (var i = 0; i < Team.all.length; i++){
				// DECLARE VARIABLES
				var index = $('#game1').find("input[data-id='"+Team.all[i].id+"']").index(),
					teamscore = parseInt($('#game1').find("input[data-id='"+Team.all[i].id+"']").val()),
					oppscore = 0;
				//FIND OPPONENT'S SCORE IN THE LI and MANIPULATE TABLE 2
				if (index === 0){	//could add home and away goal criteria, as well as table2 display here if i wanted
				
					var oppscore = parseInt($('#game1').find("input[data-id='"+Team.all[i].id+"']").parent().find('input').eq(1).val());
					$('#team-row').find("tr[data-row='"+Team.all[i].id+"']").find("td[data-id='"+Team.all[i].id+"']").html("X");
				
				} else {
					var oppscore =  parseInt($('#game1').find("input[data-id='"+Team.all[i].id+"']").parent().find('input').eq(0).val());
					score = function(){
						return oppscore + " - " + teamscore;
					};
					$('#game1').find("input[data-id='"+Team.all[i].id+"']").parent().append(score()); //APPEND SCORES IN PLACE OF DATA INPUTS
					
					//DISPLAY 
					$('#team-row').find("tr[data-row='"+Team.all[i].id+"']").find("td[data-id='"+Team.all[i].id+"']").html("X");

				}
				//MODIFY TABLE DATA
				Team.all[i].games += 1;
				Team.all[i].gf += teamscore;
				Team.all[i].ga += oppscore;
				Team.all[i].diff += parseInt(Team.all[i].gf - Team.all[i].ga);

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

			$("#play").remove(); //Remove this button, so that you can only play this game once.
			$('input').hide();

	});
	//GAME 2
	//GAME 3
	//GAME 4
	//GAME 5
	//GAME 6
	//GAME 7
	//GAME 8
	//GAME 9
	//GAME 10


});