

let names = [ 'Sarvar', 'Ibragim', 'Odil', 'Anvar'];

for(let key in names) {
	// console.log(names[key]);

	// Metod splice(nomer yacheyki, kollichestvo yacheyek) - udalayet vibranniye yacheyki c massiva.

	// names[key] == 'Sarvar' ? names.splice(key, 2) : ''; tun nachinayet udalit posle pervogo massiva (Ibragim i Odil udalitsya)

	names[key] == 'Sarvar' ? names.splice(0, 5) : '';/* '' - eto zaglushka ona stavitsya obyazatelna. Tut nachinayet udalit snachala  */

}

// metod push() - Dobavlyaet ukazannoe znachenie v kones massiva
// metod unshift() - Dobavlyaet ukazannoe znachenie v nachala massiva
// metod pop() - Udalyaet poslednoy znachenie massiva

names.push('Zafar');
names.unshift('Void');
names.pop();
console.log(names);