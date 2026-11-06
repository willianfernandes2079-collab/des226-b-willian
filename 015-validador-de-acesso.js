let idade = 16;
let acompanhado = true;
let bloqueado = false;

if (bloqueado) {
    console.log("Acesso bloqueado.");
} else if ((idade >= 18 || acompanhado) && !bloqueado) {
    console.log("Acesso liberado.");
} else {
    console.log("Acesso negado.");
}
