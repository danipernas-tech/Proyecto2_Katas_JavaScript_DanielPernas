const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]);

aldeanos.push("Cervasio");
console.log(aldeanos);

aldeanos[0] = "Bambina";
console.log(aldeanos);

aldeanos.reverse();
console.log(aldeanos);

const posicionNarciso = aldeanos.indexOf("Narciso");
aldeanos.splice(posicionNarciso, 1, "Canela");
console.log(aldeanos);

console.log(aldeanos[aldeanos.length - 1]);
