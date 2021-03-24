function calcularDistancia(xini, xfin, yini, yfin)
{
    return Math.sqrt((Math.pow(xfin-xini, 2))+(Math.pow(yfin-yini, 2)));
}

let distancia = calcularDistancia(20, -10, 2, 0);

let distancia2 = (xini, xfin, yini, yfin)=>Math.sqrt((Math.pow(xfin-xini, 2))+(Math.pow(yfin-yini, 2)));

console.log("La distancia es: "+distancia);
console.log("La distancia es: "+distancia2(40, 20, 0, 90));



