let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

if (nome === "") {
    alert("Nome inválido!");
    return;
}

if (listaAmigos.includes(nome)) {
    alert("Esse nome já foi adicionado!");
    return;
}

listaAmigos.push(nome);

atualizarLista();

input.value = "";
}

function atualizarLista() {
    let ul = document.getElementById("listaAmigos"); 
    ul.innerHTML = ""; 

    listaAmigos.forEach(nome => { 
        let li = document.createElement("li"); 
        li.textContent = nome; 
        ul.appendChild(li); 
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) { 
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length); 
    let amigoSorteado = listaAmigos[indiceSorteado]; 

    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML = `<li>🎉 O amigo sorteado foi <strong>${amigoSorteado}</strong>! 🎉</li>`; 
}
