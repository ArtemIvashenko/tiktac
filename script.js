let ticTak = [];
ticTak.length = 9;
let move = 0;
let resX ='<img class="imgPlayer" src="./img/x.png">' ;
let res0 ='<img class="imgPlayer" src="./img/0.png">' ;

function render(){

	let out = '';
	for (let i = 0; i < ticTak.length; i++){
		out += '<div class="block" data-id = '+i+'>  </div>';
	} 
	$('.pole').html(out);
    ticTak = [];
    ticTak.length = 9;
    move = 0;
}
function hod (){
	
	
	$('.pole').click(function (event) {
		
		if (event.target.className === 'block'){
			if (move % 2 ==0){
				moveFirstPlayer();
			}else{
				
				hodXMessage();
                ticTak[event.target.dataset.id] = '0'
				event.target.innerHTML = res0;
                event.target.classList.add('0');	
			}
			move++;
			winner();
		}
console.log(ticTak);
		
	})
}
function moveFirstPlayer(){
	hodTakMessage();
                ticTak[event.target.dataset.id] = 'x';
				event.target.innerHTML = resX;
                event.target.classList.add('X');
}

function winner() {
	let pole = $('.block');
	if(ticTak[0] =='x' && ticTak[1]  =='x' && ticTak[2] =='x'){
		winnerX();
		setTimeout(render, 3000);
	}
	if(ticTak[3]=='x' && ticTak[4] =='x' && ticTak[5]=='x'){
		winnerX();
		setTimeout(render, 3000);
	}
	if(ticTak[6]=='x' && ticTak[7] =='x' && ticTak[8]=='x'){
		winnerX();
		setTimeout(render, 3000);
	}
	if(ticTak[0]=='x' && ticTak[3] =='x' && ticTak[6]=='x'){
		winnerX();
		setTimeout(render, 3000);
	}
	if(ticTak[1]=='x' && ticTak[4] =='x' && ticTak[7]=='x'){
		winnerX();
		setTimeout(render, 3000);
	}
	if(ticTak[2]=='x' && ticTak[5] =='x' && ticTak[8]=='x'){
		winnerX();
		setTimeout(render, 3000);
	}
	if(ticTak[0]=='x' && ticTak[4] =='x' && ticTak[8]=='x'){
		winnerX();
		setTimeout(render, 3000);
	}if(ticTak[2]=='x' && ticTak[4] =='x' && ticTak[6]=='x'){
		winnerX();
		setTimeout(render, 3000);
	}

	if(ticTak[0]=='0' && ticTak[1] =='0' && ticTak[2]=='0'){
		winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[3]=='0' && ticTak[4] =='0' && ticTak[5]=='0'){
		winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[6]=='0' && ticTak[7] =='0' && ticTak[8]=='0'){
		winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[0]=='0' && ticTak[3] =='0' && ticTak[6]=='0'){
		winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[1]=='0' && ticTak[4] =='0' && ticTak[7]=='0'){
		winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[2]=='0' && ticTak[5] =='0' && ticTak[8]=='0'){
		winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[0]=='0' && ticTak[4] =='0' && ticTak[8]=='0'){
		winnerNull();
		setTimeout(render, 3000);
	}if(ticTak[2]=='0' && ticTak[4] =='0' && ticTak[6]=='0'){
		winnerNull();
		setTimeout(render, 3000);
	}
	
}
function getRandomInt(max) {
  return Math.floor(Math.random() * 9);
}


function winnerX(){
	$('.messageWinner').fadeIn(2000);
    $('.messageWinner').fadeOut(2500);
    $('.block').css({'opacity': '0.1'});
}
function winnerNull(){
	$('.pole').append('<div class="messageWinnerNull"> win 0 </div>');
	$('.block').css({'opacity': '0.1'});
}

function hodXMessage(){
	$('div').remove('.hodX');
	 $('.pole').after('<div class="hodX" >Ходят Х</div>');

}

function hodTakMessage(){
	$('div').remove('.hodX');
	 $('.pole').after('<div class="hodX">Ходят 0 </div>');
}

function compPlay(){
	
	$('.pole').click(function (event) {
		if (event.target.className === 'block'){
				moveFirstPlayer();
			    winner();
				
				hodXMessage();
				setTimeout(algoritmX, 2000);
					
				  winner();
				
			
		}
console.log(ticTak);
		
	});
}
function algoritmX(){
	let moveComp = document.querySelectorAll('.block');
	let flag = false;
    
	    while (true){
	    
	    	let moveCompMas = getRandomInt(8);
            for (let i = 0; i < ticTak.length; i++){
		        if( ticTak[i] == undefined ){
                    ticTak[i] = i;
		       }
		        if(moveCompMas ==ticTak[i]){
                        	flag = true;
                        ticTak[moveCompMas] = '0';
	                    moveComp[moveCompMas].innerHTML = res0;
	                    moveComp[moveCompMas].classList.add('X');
	                    return;
	            }    
	            else{
	        	    flag = false;
	        	    continue;
	            }
	        }

		
	    }	
}

    function selectPlay() {
    	$('.computerPlayer').before('<div class="twoPlayer">Выберите режим игры</div>')
        $('.twoPlayer').addClass('selectPlay');
        $('.computerPlayer').addClass('selectPlay');
    
        $('.twoPlayer').click(function(){
            $('.computerPlayer').removeClass('selectPlay');
            $('div').remove('.twoPlayer');
            hod();
    });
        $('.computerPlayer').click(function(){
        	$('.twoPlayer').removeClass('selectPlay');
        	$('div').remove('.twoPlayer');
            compPlay();
        });

}




$(document).ready(function(){


    $('#reset').click(function(){
    	render();
    	hodXMessage();
    	document.location.reload();

    });
    $('#start').click(function(){
    	render();
        selectPlay();
    	hodXMessage();
        
    });

});
