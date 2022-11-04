const datos = {nombre: 'karen', apellido:'Ordaz', edad: 27, altura: 1.59, isdeveloper:true}

const prop = 'edad';
console.log('Edad :>> ', datos[prop]);
const lista = {...datos};
console.log('Mis datos :>> ', lista);
const am = [
    { nom:'luis', apellido:'perez', eda:27, altura:1.70, isdeveloper:true },
    { nom:'ale', apellido:'mora', eda:28, altura:1.65, isdeveloper:true},
]
console.log('Amigos :>> ', am);

//para ordenar la lista .sort() Muta el valor de la lista original 
am.sort((a,b) => b.eda - a.eda )
console.log('Lista ordenada :>> ', am);