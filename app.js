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
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length); 
    let amigoSorteado = listaAmigos[indiceSorteado]; 

    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML = `<li>🎉 O amigo sorteado foi <strong>${amigoSorteado}</strong>! 🎉</li>`; 
}
