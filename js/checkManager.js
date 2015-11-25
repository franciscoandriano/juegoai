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

function checkRow(x, value){
	var count  = 0;

	for (i = 0; i < 3; i++){
		if (board[i][x] == value){
			count++;
		}
	}

	return count;
}

function checkLine(){
	if (turn == "ball"){
		value = 1;
	}
	else{
		value = 2;
	}

	if (checkRow(0, value) == 3){
		alert(turn + ' ha ganado');
	}

	if (checkRow(1, value) == 3){
		alert(turn + ' ha ganado');
	}

	if (checkRow(2, value) == 3){
		alert(turn + ' ha ganado');
	}

	if (checkColum(0, value) == 3){
		alert(turn + ' ha ganado');
	}

	if (checkColum(1, value) == 3){
		alert(turn + ' ha ganado');
	}

	if (checkColum(2, value) == 3){
		alert(turn + ' ha ganado');
	}

	if (checkDiag(1, value) == 3){
		alert(turn + ' ha ganado');
	}

	if (checkDiag(-1, value) == 3){
		alert(turn + ' ha ganado');
	}
}

function checkColum(y, value){
	var count = 0;

	for (i = 0; i < 3; i++){
		if (board[y][i] == value){
			count++;
		}
	}

	return count;
}

function checkDiag(d, value){
	count = 0;

	if (board[(1 + d)][0] == value){
		count++;
	}

	if (board[1][1] == value){
		count++;
	}

	if (board[(1 - d)][2] == value){
		count++;
	}

	return count;
}