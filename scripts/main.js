button = document.querySelector('#sendButton');
nome = document.querySelector('#name');
tel = document.querySelector('#phone');
mail = document.querySelector('#mail');

button.onclick = function(){
    alert('Nome: '+nome.value);
    alert('Telefone: '+tel.value);
    alert('E-Mail: '+mail.value);  
};