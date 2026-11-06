let valorCompra = 180;
let valorFrete = valorCompra > 150 ? 0 : 20;
let total = valorCompra + valorFrete;

console.log("Compra: R$ " + valorCompra);
console.log("Frete: R$ " + valorFrete);
console.log("Total a pagar: R$ " + total);
