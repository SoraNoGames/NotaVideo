$(document).ready(main);

var contador=1;

//Se define un tamaño maximo de pantalla 
var mediaqueryList = window.matchMedia("(max-width: 850px)");

function main(){

	//En el main, si se presiona el boton de menu realiza la siguiente funcion

	$('.menu').click(function(){

		if (contador == 1){

			//Si se cumple con el tamaño maximo de la pantalla y se clickea el menu, cambia el posicionamiento

			if(mediaqueryList.matches) {
  				$('.nav_menu').animate({
					left: '38%'
				});
			} else {

				//Si se clickea el menu, cambia el posicionamiento

				$('.nav_menu').animate({
					left: '70%'
				});

			}

			contador = 0;

		}else{

			//Si no se clickea el menu, o se clickea de nuevo, lo oculta

			contador = 1;

			$('.nav_menu').animate({
				left:'100%'
			});

		}

	});

};