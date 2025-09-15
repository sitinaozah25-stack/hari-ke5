//file map
var huruf = ['a', 'b', 'c', 'd', 'e'];
var hasil= huruf.map(huruf =>huruf+'aba' );
console.log (hasil);

// file forEach
var huruf= ['a', 'b', 'c', 'd', 'e'];
var hasil= [];
huruf.forEach(huruf => {
    hasil.push(huruf+'aba');
});
console.log(hasil);