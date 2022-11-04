const datos = ['juan', 'pedro','maria','ana','luis'];
const nuevo = new Set(datos);
console.log('datos :>> ', datos);
console.log('nuevo Set :>> ', nuevo);

nuevo.add('ana');
console.log('nuevo Set con duplicado :>> ', nuevo);

nuevo.add('Javascript');
console.log('nuevo Set con Javascript :>> ', nuevo);