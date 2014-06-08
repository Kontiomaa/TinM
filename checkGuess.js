function checkGuess(){
	var correctAnswers=0;
	var correctNumbers=0;
	
	var value1Checked=0;
	var value2Checked=0;
	var value3Checked=0;
	var value4Checked=0;
	
	var guess1Checked=0;
	var guess2Checked=0;
	var guess3Checked=0;
	var guess4Checked=0;
				
	var guess1=document.getElementById("g"+currentRound+"n1").value;
	var guess2=document.getElementById("g"+currentRound+"n2").value;
	var guess3=document.getElementById("g"+currentRound+"n3").value;
	var guess4=document.getElementById("g"+currentRound+"n4").value;
	
	difficulty=sessionStorage.getItem("difficulty");
	
	if(guess1==value1)
	{
		correctAnswers++;
		if("easy"==difficulty)
		{
			document.getElementById("g"+currentRound+"n1").style.backgroundColor="#00CC00";
			document.getElementById("g"+currentRound+"n1").style.color="black";
		}
		value1Checked=1;
		guess1Checked=1;
	}
	if(guess2==value2)
	{
		correctAnswers++;
		if("easy"==difficulty)
		{
			document.getElementById("g"+currentRound+"n2").style.backgroundColor="#00CC00";
			document.getElementById("g"+currentRound+"n2").style.color="black";
		}
		value2Checked=1;
		guess2Checked=1;
	}
	if(guess3==value3)
	{
		correctAnswers++;
		if("easy"==difficulty)
		{
			document.getElementById("g"+currentRound+"n3").style.backgroundColor="#00CC00";
			document.getElementById("g"+currentRound+"n3").style.color="black";
		}
		value3Checked=1;
		guess3Checked=1;
	}
	if(guess4==value4)
	{
		correctAnswers++;
		if("easy"==difficulty)
		{
			document.getElementById("g"+currentRound+"n4").style.backgroundColor="#00CC00";
			document.getElementById("g"+currentRound+"n4").style.color="black";
		}
		value4Checked=1;
		guess4Checked=1;
	}
	
	if(correctAnswers===4)
	{
		document.getElementById("result").innerHTML='<h1>You Win</h1>';

		document.getElementById("answer1").innerHTML="<th id='answer1'>"+value1+"</th>";
		document.getElementById("answer2").innerHTML="<th id='answer2'>"+value2+"</th>";
		document.getElementById("answer3").innerHTML="<th id='answer3'>"+value3+"</th>";
		document.getElementById("answer4").innerHTML="<th id='answer4'>"+value4+"</th>";
					
		document.getElementById("answerButton").disabled=true;
	}
	else
	{
		if(guess1Checked===0)
		{
			if(value2Checked===0)
			{
				if(guess1==value2)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n1").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n1").style.color="black";
					}
					value2Checked=1;
				}
			}
			if(value3Checked===0)
			{
				if(guess1==value3)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n1").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n1").style.color="black";
					}
					value3Checked=1;
				}
			}
			if(value4Checked===0)
			{
				if(guess1==value4)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n1").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n1").style.color="black";
					}
					value4Checked=1;
				}
			}
		}
		if(guess2Checked===0)
		{
			if(value1Checked===0)
			{
				if(guess2==value1)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n2").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n2").style.color="black";
					}
					value1Checked=1;
				}
			}
			if(value3Checked===0)
			{
				if(guess2==value3)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n2").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n2").style.color="black";
					}
					value3Checked=1;
				}
			}
			if(value4Checked===0)
			{
				if(guess2==value4)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n2").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n2").style.color="black";
					}
					value4Checked=1;
				}
			}
		}
		if(guess3Checked===0)
		{
			if(value1Checked===0)
			{
				if(guess3==value1)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n3").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n3").style.color="black";
					}
					value1Checked=1;
				}
			}
			if(value2Checked===0)
			{
				if(guess3==value2)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n3").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n3").style.color="black";
					}
					value2Checked=1;
				}
			}
			if(value4Checked===0)
			{
				if(guess3==value4)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n3").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n3").style.color="black";
					}
					value4Checked=1;
				}
			}
		}
		if(guess4Checked===0)
		{
			if(value1Checked===0)
			{
				if(guess4==value1)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n4").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n4").style.color="black";
					}
					value1Checked=1;
				}
			}
			if(value2Checked===0)
			{
				if(guess4==value2)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n4").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n4").style.color="black";
					}
					value2Checked=1;
				}
			}
			if(value3Checked===0)
			{
				if(guess4==value3)
				{
					if("normal"==difficulty)
					{
						correctNumbers++;
					}
					else
					{
						document.getElementById("g"+currentRound+"n4").style.backgroundColor="#00CCFF";
						document.getElementById("g"+currentRound+"n4").style.color="black";
					}
					value3Checked=1;
				}
			}
		}
	}

	if("normal"==difficulty)
	{
		if(currentRound<10)
		{
			document.getElementById("h"+currentRound).innerHTML='0'+currentRound+'. <b class="green">'+correctAnswers+'</b> <b class="blue">'+correctNumbers+'</b>';
		}
		else
		{
			document.getElementById("h"+currentRound).innerHTML=currentRound+'. <b class="green">'+correctAnswers+'</b> <b class="blue">'+correctNumbers+'</b>';
		}
	}

	document.getElementById("g"+currentRound+"n1").disabled=true;
	document.getElementById("g"+currentRound+"n2").disabled=true;
	document.getElementById("g"+currentRound+"n3").disabled=true;
	document.getElementById("g"+currentRound+"n4").disabled=true;
			
	currentRound++;

	if(currentRound===11&&!(correctAnswers===4))
	{
		document.getElementById("result").innerHTML='<h1>Game Over</h1>';

		document.getElementById("answer1").innerHTML="<th id='answer1'>"+value1+"</th>";
		document.getElementById("answer2").innerHTML="<th id='answer2'>"+value2+"</th>";
		document.getElementById("answer3").innerHTML="<th id='answer3'>"+value3+"</th>";
		document.getElementById("answer4").innerHTML="<th id='answer4'>"+value4+"</th>";

		document.getElementById("answerButton").disabled=true;
	}

	if(!(correctAnswers===4) && !(currentRound===11))
	{
		document.getElementById("g"+currentRound+"n1").disabled=false;
		document.getElementById("g"+currentRound+"n2").disabled=false;
		document.getElementById("g"+currentRound+"n3").disabled=false;
		document.getElementById("g"+currentRound+"n4").disabled=false;

		document.getElementById("round"+(currentRound-1)).style.backgroundColor="";//#F2EFE4 stop highlighting previous round
		document.getElementById("round"+currentRound).style.backgroundColor="#E3DEC1";//highlight current round
	}
}