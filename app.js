$(function(){
	var checkIfWin = 0;
	var turn = 0;
	var field = [
		[null,null,null],
		[null,null,null],
		[null,null,null]
		];
	var players = [];
	var afterWin = function(gracz){
			$('h1').append('<h2 class="col-md-12">'+'Wygrywa:  '+gracz+'</h2>');
			$('.click').off('click');
			checkIfWin ++;
	};

	var win = function(gracz){
			if(checkIfWin===0 && turn===8){
				$('h1').append('<h2 class="col-md-12">'+'Remis'+'</h2>');
			}else{
				//poziomy
				if(field[0][0]===gracz&&field[0][1]===gracz&&field[0][2]===gracz){
					afterWin(gracz);
				}
				else if(field[1][0]===gracz&&field[1][1]===gracz&&field[1][2]===gracz){
					afterWin(gracz);
				}
				else if(field[2][0]===gracz&&field[2][1]===gracz&&field[2][2]===gracz){
					afterWin(gracz);
				}
				//piony
				else if(field[0][0]===gracz&&field[1][0]===gracz&&field[2][0]===gracz){
					afterWin(gracz);
				}
				else if(field[0][1]===gracz&&field[1][1]===gracz&&field[2][1]===gracz){
					afterWin(gracz);
				}
				else if(field[0][2]===gracz&&field[1][2]===gracz&&field[2][2]===gracz){
					afterWin(gracz);
				}
				//skosy
				else if(field[0][0]===gracz&&field[1][1]===gracz&&field[2][2]===gracz){
					afterWin(gracz);
				}
				else if(field[0][2]===gracz
					&&field[1][1]===gracz&&field[2][0]===gracz){
					afterWin(gracz);
				}
			}
	};
	var markField = function(x,y,z){
		field[x][y] = players[z];
	};
	$('form').on('submit',function(e){
		var playerCross = $('#playerCross').val();
		players.push(playerCross);
		var playerCircle = $('#playerCircle').val();
		players.push(playerCircle);
		$('#left').append('<h2>'+playerCross+'</h2>').toggleClass('turn');
		$('#right').append('<h2>'+playerCircle+'</h2>');
		$('#board').show();
		$(this).hide();
		e.preventDefault();
	});
	$('.click').on('click',function(){
		$('#left').toggleClass('turn');
		$('#right').toggleClass('turn');
			if (turn%2===0){
				$(this).append('<svg height="100" width="100">\
		  						<line x1="0" y1="0" x2="100" y2="100"\
		  						 style="stroke:rgb(0,0,0);stroke-width:2" />\
		  						 <line x1="0" y1="100" x2="100" y2="0"\
								 style="stroke:rgb(0,0,0);stroke-width:2" /></svg>');
				markField($(this).data('x'),$(this).data('y'),0);
				win(players[0]);
				} 
				else {
				$(this).append('<svg height="100" width="100">\
				<circle cx="50" cy="50" r="40" stroke="black"\
				 stroke-width="2" fill="white"/></svg>');
				markField($(this).data('x'),$(this).data('y'),1);
				win(players[1]);
				}
			$(this).off('click');
			turn++;	
	});
});