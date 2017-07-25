var T=true;
var T1=true;
var arr=['_','_','_','_','_','_','_','_','_'];
var arr1 = [0,0];
var m='O';
var a = 'X';
function f(arg)
{
	var rqs = '<div id="question">Would you like to be X or O?</div><button value="X" onclick="choose(this.value)">X</button><button value="O" onclick="choose(this.value)">O</button></br><button onclick="backall()" id="bac">Back ?</button>';
	$("#all").html(rqs);
	if(arg!=="one") T1=false;
}
function backall()
{
	var rqs = '<button value="one" onclick="f(this.value)">1 Player</button><br/><button value="two" onclick="f(this.value)">2 Player</button>';
	$("#all").html(rqs);
	$('#title').html('');

	T=true; T1=true; arr=['_','_','_','_','_','_','_','_','_']; arr1 = [0,0];
	board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    myMove = false;
}
function back(){
	arr=['_','_','_','_','_','_','_','_','_']; 
	board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    myMove = false;
    choose('haha');
}
function choose(arg){
	if(arg=="X") 
		{
			T = false;
			m = 'X';
			a = 'O';
		}
	if(!T1){var rqs = '<div style="position: absolute;"><div style="display: flex;"><div onclick="play(0)" id="0" class="case"></div><div onclick="play(1)" id="1" class="case"></div><div id="2" onclick="play(2)" class="case"></div></div><div style="display: flex;"><div id="3" onclick="play(3)" class="case"></div><div id="4" onclick="play(4)" class="case"></div><div id="5" onclick="play(5)" class="case"></div></div><div style="display: flex;"><div id="6" onclick="play(6)" class="case"></div><div id="7" onclick="play(7)" class="case"></div><div id="8" onclick="play(8)" class="case"></div></div></div><div id="who"></div>';}
	else { var rqs= '<div style="position: absolute;"><div style="display: flex;"><div onclick="play(\'c00\')" id="c00" class="case"></div><div onclick="play(\'c01\')" id="c01" class="case"></div><div id="c02" onclick="play(\'c02\')" class="case"></div></div><div style="display: flex;"><div id="c10" onclick="play(\'c10\')" class="case"></div><div id="c11" onclick="play(\'c11\')" class="case"></div><div id="c12" onclick="play(\'c12\')" class="case"></div></div><div style="display: flex;"><div id="c20" onclick="play(\'c20\')" class="case"></div><div id="c21" onclick="play(\'c21\')" class="case"></div><div id="c22" onclick="play(\'c22\')" class="case"></div></div></div><div id="who"></div>'}
	$("#all").html(rqs);
	$('#title').html('<button onclick="backall()">Reset All</button><button onclick="back()">Reset</button><div id="score">X\'s Score : <span id="xs">'+arr1[1]+'</span> &nbsp O\'s Score : <span id="os">'+arr1[0]+'</span></div>');
	var ran = Math.round(Math.random());
	if(ran==0 )  
		{
			myMove = true;
			makeMove();
		}
	else myMove = false;
}
var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

var myMove = false;

if (myMove) {
    makeMove();
}
function play(arg){
	if(T1==false)
	{
		if(arr[arg]=='_')
		{
			var id='#'+arg;
			if(T)
			{
				$(id).html('O');
				arr[arg]='O';
				T=false;
			}
			else
			{
				$(id).html('X');
				arr[arg]='X';
				T=true;
			}
		}
		var x = setTimeout("alertt()", 10);
	}
	else
	{
        var row = parseInt(arg[1]);
        var col = parseInt(arg[2]);
        if (!myMove && board[row][col]==null) {
            board[row][col] = false;
            myMove = true;
            updateMove();
            makeMove();
        }
	}

}
function check(arr){
	if(arr[0]==arr[1] && arr[0]==arr[2] && arr[0]!='_') return arr[0];
	else if(arr[0]==arr[4] && arr[0]==arr[8] && arr[0]!='_') return arr[0];
	else if(arr[0]==arr[3] && arr[0]==arr[6] && arr[0]!='_') return arr[0];
	else if(arr[1]==arr[4] && arr[1]==arr[7] && arr[1]!='_') return arr[1];
	else if(arr[2]==arr[4] && arr[2]==arr[6] && arr[2]!='_') return arr[2];
	else if(arr[2]==arr[5] && arr[2]==arr[8] && arr[2]!='_') return arr[2];
	else if(arr[3]==arr[4] && arr[3]==arr[5] && arr[3]!='_') return arr[3];
	else if(arr[6]==arr[7] && arr[6]==arr[8] && arr[6]!='_') return arr[6];
	else if(arr.indexOf('_')===-1) return 'draw';
}
function alertt(){
	var res = check(arr);
	if(res)
	{	
		if(res=='draw') $("#who").html('&#10; Draw !');
		else $("#who").html('&#10;'+res+' Won !');
		arr=['_','_','_','_','_','_','_','_','_'];
		show();
		setTimeout('hide()',3000);
		setTimeout("choose('haha')",3000);
		if(res=='O') $('#os').html(++arr1[0]);
		if(res=='X') $('#xs').html(++arr1[1]); 
	}
}

function updateMove() {
    updateButtons();
    
    winner = getWinner(board);
}
function g(){
	winner == 1 ? "AI Won!" : winner == 0 ? "You Won!" : winner == -1 ? "Tie!" : "";
    if(winner==1) 
    	{
    		$("#who").html('You Lost !');
    			if(a=='O') $('#os').html(++arr1[0]);
    			else $('#xs').html(++arr1[1]);
    		show();
			setTimeout('hide()',3000);
    		setTimeout('back()',3000);
    	}  
    else if(winner==0) 
    	{
    		$("#who").html("You Won!"); 
    		if(m=='O') $('#os').html(++arr1[0]);
    		else $('#xs').html(++arr1[1]);
    		show();
			setTimeout('hide()',3000);
    		setTimeout('back()',3000);
    	}  
    else if(winner==-1) 
    	{
    		$("#who").html('Draw !');
    		show();
			setTimeout('hide()',3000);
    		setTimeout('back()',3000);
		}
}
function getWinner(board) {
   
       vals = [true, false];
    var allNotNull = true;
    for (var k = 0; k < vals.length; k++) {
        var value = vals[k];
        
       

        var diagonalComplete1 = true;
        var diagonalComplete2 = true;
        for (var i = 0; i < 3; i++) {
            if (board[i][i] != value) {
                diagonalComplete1 = false;
            }
            if (board[2 - i][i] != value) {
                diagonalComplete2 = false;
            }
            var rowComplete = true;
            var colComplete = true;
            for (var j = 0; j < 3; j++) {
                if (board[i][j] != value) {
                    rowComplete = false;
                }
                if (board[j][i] != value) {
                    colComplete = false;
                }
                if (board[i][j] == null) {
                    allNotNull = false;
                }
            }
            if (rowComplete || colComplete) {
                return value ? 1 : 0;
            }
        }
        if (diagonalComplete1 || diagonalComplete2) {
            return value ? 1 : 0;
        }
    }
    if (allNotNull) {
        return -1;
    }
    return null;
}
    
function updateButtons() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            $("#c" + i + "" + j).text(board[i][j] == false ? m : board[i][j] == true ? a : "");
        }
    }
}

function makeMove() {
    board = minimaxMove(board);
    console.log(numNodes);
    myMove = false;
    updateMove();
    setTimeout("g()",10);
}

function minimaxMove(board) {
    numNodes = 0;
    return recurseMinimax(board, true)[1];
}

var numNodes = 0;

function recurseMinimax(board, player) {
    numNodes++;
    var winner = getWinner(board);
    if (winner != null) {
        switch(winner) {
            case 1:
                return [1, board]
            case 0:
                return [-1, board]
            case -1:
                return [0, board];
        }
    } else {
        var nextVal = null;
        var nextBoard = null;
        
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] == null) {
                    board[i][j] = player;
                    var value = recurseMinimax(board, !player)[0];
                    if ((player && (nextVal == null || value > nextVal)) || (!player && (nextVal == null || value < nextVal))) {
                        nextBoard = board.map(function(arr) {
                            return arr.slice();
                        });
                        nextVal = value;
                    }
                    board[i][j] = null;
                }
            }
        }
        return [nextVal, nextBoard];
    }
}
var i=0;
function show(){
	if(i<308) 
	{
		i++;
		$('#who').css('height',i);
		setTimeout("show()",3);
	}
}
function hide(){
	if(i>0) 
	{
		i--;
		if(i==10) $("#who").html(""); 
		$('#who').css('height',i);
		setTimeout("hide()",3);
	}
}









