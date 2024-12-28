function organizeInventory(inventory) {

   // Usamos reduce para transformar el array en un objeto
    return inventory.reduce((result, {name, quantity, category}) => {

   // Si la categoría no existe en el objeto result, la inicializamos
    if (!result[category]) {
        result[category] = {}; // Inicializamos un objeto vacío para la categoría
    }                         
     // Si el juguete ya está en la categoría, sumamos la cantidad; si no, lo agregamos con la cantidad
     if (result[category][name]) {
        result[category][name] += quantity; // Si el juguete ya existe lo sumamos 
     } else {
        result[category][name] = quantity; // Agregamos el juguete con su cantidad inicial
     }                               
   return result;

}, {}); // Inicializamos el objeto vacío
    
 }
 const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]
  console.log(organizeInventory(inventory));