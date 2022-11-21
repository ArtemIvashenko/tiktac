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
class PlayerX{
	constructor(name){
		this.name = name;
	}
	moveFirstPlayer(){
	    player0move.hodTakMessage();
                ticTak[event.target.dataset.id] = 'x';
				event.target.innerHTML = resX;
                event.target.classList.add('X');
    }

    winnerX(){
	    $('.messageWinner').fadeIn(2000);
        $('.messageWinner').fadeOut(2500);
        $('.block').css({'opacity': '0.1'});
    }
    hodXMessage(){
	    $('div').remove('.hodX');
	    $('.pole').after(`<div class="hodX" > Ходят ${this.name}</div>`);
    }
}

class Player0{
	constructor(name){
		this.name = name;
	}
	winnerNull(){
	    $('.pole').append('<div class="messageWinnerNull"> win 0 </div>');
	    $('.block').css({'opacity': '0.1'});s
    }
    hodTakMessage(){
	    $('div').remove('.hodX');
	    $('.pole').after(`<div class="hodX">Ходят ${this.name} </div>`);
    }

}

function hod (){	
	$('.pole').click(function (event) {
		
		if (event.target.className === 'block'){
			if (move % 2 ==0){
				playerXmove.moveFirstPlayer();
			}else{
				
				playerXmove.hodXMessage();
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


function winner() {
	let pole = $('.block');
	if(ticTak[0] =='x' && ticTak[1]  =='x' && ticTak[2] =='x'){
		playerXmove.winnerX();
		setTimeout(render, 3000);
		hodXMessage();
	}
	if(ticTak[3]=='x' && ticTak[4] =='x' && ticTak[5]=='x'){
		playerXmove.winnerX();
		setTimeout(render, 3000);
	}
	if(ticTak[6]=='x' && ticTak[7] =='x' && ticTak[8]=='x'){
		playerXmove.winnerX();
		setTimeout(render, 3000);
	}
	if(ticTak[0]=='x' && ticTak[3] =='x' && ticTak[6]=='x'){
		playerXmove.winnerX();
		setTimeout(render, 3000);
	}
	if(ticTak[1]=='x' && ticTak[4] =='x' && ticTak[7]=='x'){
		playerXmove.winnerX();
		setTimeout(render, 3000);
	}
	if(ticTak[2]=='x' && ticTak[5] =='x' && ticTak[8]=='x'){
		playerXmove.winnerX();
		setTimeout(render, 3000);
	}
	if(ticTak[0]=='x' && ticTak[4] =='x' && ticTak[8]=='x'){
		playerXmove.winnerX();
		setTimeout(render, 3000);
	}if(ticTak[2]=='x' && ticTak[4] =='x' && ticTak[6]=='x'){
		playerXmove.winnerX();
		setTimeout(render, 3000);
	}

	if(ticTak[0]=='0' && ticTak[1] =='0' && ticTak[2]=='0'){
		player0move.winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[3]=='0' && ticTak[4] =='0' && ticTak[5]=='0'){
		player0move.winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[6]=='0' && ticTak[7] =='0' && ticTak[8]=='0'){
		player0move.winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[0]=='0' && ticTak[3] =='0' && ticTak[6]=='0'){
		player0move.winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[1]=='0' && ticTak[4] =='0' && ticTak[7]=='0'){
		player0move.winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[2]=='0' && ticTak[5] =='0' && ticTak[8]=='0'){
		player0move.winnerNull();
		setTimeout(render, 3000);
	}
	if(ticTak[0]=='0' && ticTak[4] =='0' && ticTak[8]=='0'){
		player0move.winnerNull();
		setTimeout(render, 3000);
	}if(ticTak[2]=='0' && ticTak[4] =='0' && ticTak[6]=='0'){
		player0move.winnerNull();
		setTimeout(render, 3000);
	}
	
}
function getRandomInt(max) {
  return Math.floor(Math.random() * 9);
}


function compPlay(){
	
	$('.pole').click(function (event) {
		if (event.target.className === 'block'){
				playerXmove.moveFirstPlayer();
			    winner();
				
				playerXmove.hodXMessage();
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

let playerXmove = new PlayerX('X');
let player0move = new Player0('0');



$(document).ready(function(){


    $('#reset').click(function(){
    	render();
    	playerXmove.hodXMessage();
    	document.location.reload();

    });
    $('#start').click(function(){
    	render();
        selectPlay();
    	playerXmove.hodXMessage();
        
    });

});
