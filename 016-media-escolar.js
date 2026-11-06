let nota1 = 7.5;
let nota2 = 4;
let nota3 = 8;

// As notas precisam estar entre 0 e 10.
if (
    nota1 < 0 || nota1 > 10 ||
    nota2 < 0 || nota2 > 10 ||
    nota3 < 0 || nota3 > 10
) {
    console.log("Existe uma nota inválida.");
} else {
    let media = (nota1 + nota2 + nota3) / 3;
    console.log("Média: " + media);

    if (media >= 7) {
        console.log("Aprovado direto.");
    } else if (media >= 5) {
        console.log("Recuperação.");
    } else {
        console.log("Reprovado.");
    }
}
