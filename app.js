$(function(){
	var turn = 0;
	var crossArray = [];
	var circleArray = [];
	
	$('form').on('submit',function(e){
		var playerCross = $('#playerCross').val();
		var playerCircle = $('#playerCircle').val();
		$('#left').append('<h2>'+playerCross+'</h2>').toggleClass('turn');
		$('#right').append('<h2>'+playerCircle+'</h2>');
		$('#board').show();
		$(this).hide();
		e.preventDefault();
	});
	$('td').on('click',function(){
		$('#left').toggleClass('turn');
		$('#right').toggleClass('turn');
		if (turn%2===0){
			$(this).append('<svg height="100" width="100">\
	  						<line x1="0" y1="0" x2="100" y2="100"\
	  						 style="stroke:rgb(0,0,0);stroke-width:2" />\
	  						 <line x1="0" y1="100" x2="100" y2="0"\
							 style="stroke:rgb(0,0,0);stroke-width:2" /></svg>');
			var crossField = $(this).attr('id');
			var convert = parseFloat(crossField);
			crossArray.push(convert);
			console.log(crossArray);
			for(i = 0; i < crossArray.length; i++){
				console.log(crossArray[i]);
				
			}
			} else {
			$(this).append('<svg height="100" width="100">\
			<circle cx="50" cy="50" r="40" stroke="black"\
			 stroke-width="2" fill="white"/></svg>');
			circleArray.push($(this).attr('id'));
			}
		turn++;
	});


});
