//ALERTA
function checkAcceptation()
{
    if (!confirm("Quiere ingresar a la pagina web de Chata Roa?"))
    history.go(-1);
    return " "
}
checkAcceptation();

//TEXTO EN MOVIMIENTO
var txt = "Catha Cevedo - PARADISE NAILS - "
var espera = 1000;
var refresca = null

function titulo(){

    document.title = txt;

    txt=txt.substring(1,txt.length)+txt.charAt(0);

    refresca=setTimeout("titulo()",espera);
}

titulo();