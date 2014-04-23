$(document).ready(function(){
	$("#content div:nth-child(1)").show();
	$(".abas dt:first div").addClass("selected");
	$(".aba").click(function(){
		$(".aba").removeClass("selected");
		$(this).addClass("selected");
		var indice = $(this).parent().index();
		indice++;
		$("#content div").hide();
		$("#content div:nth-child("+indice+")").show();
	});
	$(".aba").hover(
		function(){$(this).addClass("ativa")},
		function(){$(this).removeClass("ativa")}
	);
});

function hora(){
	var hora = new Date().toLocaleString().split(" ")[1];
	
	return hora
}

function btnInicio(){
	document.getElementById("bgn").value = hora();
}

function btnIntervalo(){
	var stringBgn = document.getElementById("bgn").value;
	if ((stringBgn == null)||(stringBgn == "")){
		alert("Inicie a Contagem!");
		} else {
			document.getElementById("int").value = hora();
		}
}

function btnRetorno(){
	var stringInt = document.getElementById("int").value;
	if((stringInt == null) || (stringInt == "") || (stringInt == "Inicie a Contagem!")){
		alert("Inicie a Contagem!");
	} else {
	document.getElementById("bck").value = hora();
	}
}

function btnSaida(){
	var stringBgn = document.getElementById("bgn").value;
	if ((stringBgn == null)||(stringBgn == "")){
		alert("Inicie a Contagem!");
		} else {
			document.getElementById("out").value = hora();
		}
}

function btnSalvar(){
	var stringBgn = document.getElementById("bgn").value;
	var stringOut = document.getElementById("out").value;
	
	if (((stringBgn == null)||(stringBgn =="")) && ((stringOut == null)||(stringOut == ""))){
		alert("É necessário ao menos um Início e uma Saída!");
	} else {
		
	}
}
