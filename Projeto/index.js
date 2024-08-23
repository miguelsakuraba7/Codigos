const $form = document.querySelector('form');

$form.addEventListener('submit', function(event){
    event.preventDefault();
    const $listaDePost = document.querySelector('.listaDePost');
    const $txtMsg = document.querySelector('#txtMsg');

    $listaDePost.insertAdjacentHTML('afterbegin', `<li>${$txtMsg.value}</li><button type="button" class="btnDelete">Deletar</button>`);
    $txtMsg.value = "";
});

document.querySelector('.listaDePost').addEventListener('click', function(event){
    const btnDelete = event.target.classList.contains('btnDelete');
    const elementoAtual = event.target;
    
    if(btnDelete){
        elementoAtual.parentNode.remove()
    }
});