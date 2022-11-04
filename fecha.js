const hoy = new Date();
console.log('hoy :>> ', hoy);

const nacimiento = new Date('july 28, 1995')
console.log('nacimiento :>> ', nacimiento);

const mas_tarde = hoy.getTime()> nacimiento.getTime();
console.log('mas_tarde :>> ', mas_tarde);

const dia = nacimiento.getDate()
console.log('dia :>> ', dia);

const mes = nacimiento.getMonth();
console.log('mes :>> ', mes+1);

const anio = nacimiento.getFullYear();
console.log('anio :>> ', anio);