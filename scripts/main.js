var button = document.querySelector('#sendButton');
var inscricao = document.querySelector('#inscricao');
var notInicial = document.querySelector('#notInicial');
var notFinal = document.querySelector('#notFinal');


button.onclick = function(){
    let request = new XMLHttpRequest();
    for(var i=notInicial.value; i<=notInicial.value; i++){
        var url = `http://nfe.maraba.pa.gov.br/eSiat/Valida_NFE_Emissao.aspx?InscricaoMunicipal=${inscricao.value}&NumeroNota=${i}&Origem=RELACAO`;
        request.open('GET', url);
        request.setRequestHeader("Content-Type",
                                    "text/plain;charset=UTF-8");
        request.send(null);
    }
};