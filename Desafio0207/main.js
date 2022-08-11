function VerificarDados() {
    //alert('O botão foi pressionado!');
    alert('Olá, ' + document.getElementById('Nome').value + ' você tem ' + document.getElementById('Idade').value + ' anos e está estudando ' + document.getElementById('Linguagem').value);
    if (confirm('Você gosta de estudar ' + document.getElementById('Linguagem').value + '?')==true)
    {
        alert('Muito bom! Continue estudando e você terá muito sucesso. Parabéns');
    }
    else{
        alert('Ahh que pena... Já tentou aprender outras linguagens?');
    }
} 

document.querySelector('#btn-VerificarDados').onclick = VerificarDados;