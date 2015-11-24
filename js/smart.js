/**
*
*/
function searchMove(){
	turnCount = checkTurnCount(1);

	if (turnCount == 3){
		cellFind = false;

		while(!cellFind){
			x = Math.round(Math.random() * 2);
			y = Math.round(Math.random() * 2);
			if (board[x][y] == 1){
				cellFind = true;
			}
		}

		ball_selected_x = x;
		ball_selected_y = y;
		clearCell(x, y);
	}

	randomMove();
}

function randomMove(){
	cellAvailable = false;

	while(!cellAvailable){
		x = Math.round(Math.random() * 2);
		y = Math.round(Math.random() * 2);

		if (board[x][y] == 0 && divMov(x, y)){
			cellAvailable = true;
		}
	}

	paintCell(x, y);
}