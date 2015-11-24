function checkTurnCount(turnValue){
	var turnCount = 0;
	for (i = 0; i < 3; i++){
		for (j = 0; j < 3; j++){
			if (board[i][j] == turnValue){
				turnCount++;
			}
		}
	}

	return turnCount;
}

function divMov(x, y){
	var diferent = false;

	if (turn == "cross"){
		if (cross_selected_x != x){
			diferent = true;
		}
		if (cross_selected_y != y){
			diferent = true;
		}
	}
	else{
		if (ball_selected_x != x){
			diferent = true;
		}
		if (ball_selected_y != y){
			diferent = true;
		}
	}

	return diferent;
}