/**
* 
*/

var board = new Array(3);
var turn;

var cross_selected_x;
var cross_selected_y;

var ball_selected_x;
var ball_selected_y;


function clearCell(x, y){
	board[x][y] = 0;
	cell = document.getElementById('c' + x + y);
	cell.innerHTML = "";
}

function paintCell(x, y){
	cell = document.getElementById('c' + x + y);
	cell.innerHTML = "<img src='img/" + turn + ".gif'>";

	if (turn == "ball"){
		board[x][y] = 1;
		ball_selected_x = x;
		ball_selected_y = y;
	}
	else{
		board[x][y] = 2;
		cross_selected_x = x;
		cross_selected_y = y;
	}

	if (turn == "ball"){
		turn = "cross";	
	}
	else{
		turn = "ball";	
	}
}

function clearBoard(){
	for (i = 0; i < 3; i++)	{
		for (j = 0; j < 3; j++){
			board[i][j] = 0;
			clearCell(i, j);
		}
	}
}

function checkCell(x, y){
	crosses = checkTurnCount(2);

	if (crosses == 3){
		if (board[x][y] == 2){
			cross_selected_x = x;
			cross_selected_y = y;
			clearCell(x, y);
		}
	}
	else{
		if (board[x][y] == 0 && divMov(x, y)){
			selectCell(x, y);
		}
	}
}

function selectCell(x, y){
	paintCell(x, y);
	searchMove();
}

function autoplay(){
	for (i = 0; i < 3; i++)	board[i] = new Array(3);

	turn = "ball";
	cross_selected_x = 4;
	cross_selected_y = 4;
	ball_selected_x = 4;
	ball_selected_y = 4;

	clearBoard();
	searchMove();
}

autoplay();