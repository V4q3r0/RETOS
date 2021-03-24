function nave(clave)
{
    const result = clave.split(':');
    console.log("Piloto: "+result[1]);
}

let nave2 = (clave)=>
{
    let result = clave.split(':');
    console.log("Piloto: "+result[1]);
}

nave("ARQ2555:Sara Bel-Sun");
nave2("ARQ2556:Nodin Chavdri");

