document.addEventListener('DOMContentLoaded', function () { //hicimos las const con las id que nos dieron en el html
    const contenedor = document.getElementById('contenedor');
    const inputItem = document.getElementById('item');
    const btnAgregar = document.getElementById('agregar');
    const btnLimpiar = document.getElementById('limpiar');
  
    
    cargarItems();
  
    btnAgregar.addEventListener('click', function () { // funcion para q el boton fuyncione con el click 
      const nuevoItem = inputItem.value.trim(); // cramos const para q nos de el valor de la const previamente definida
      if (nuevoItem !== '') {
        agregarItem(nuevoItem); // si un item es dferente de nada se agrega y se actualiza la vista de la pagina
        actualizarVista();
        inputItem.value = ''; 
      }
    });
  
    btnLimpiar.addEventListener('click', function () { // funcion para q el boton limpiar fuyncione con el click 
      localStorage.removeItem('items'); // se remueve del local storage 
      contenedor.innerHTML = ''; 
    });
  
    function cargarItems() {
      const items = localStorage.getItem('items'); //hicimos la const para cargar item con getItems
      if (items) {
        const itemList = JSON.parse(items); //convertimos el json sting a objeto
        itemList.forEach(item => { // se agregue cada item de itemlist 
          agregarItem(item);
        });
      }
    }
  
    function agregarItem(item) {
      const itemList = obtenerItems();
      itemList.push(item);
      localStorage.setItem('items', JSON.stringify(itemList)); //que quede guardado en el local
    }
  
    function obtenerItems() {
      const items = localStorage.getItem('items');
      return items ? JSON.parse(items) : []; // transforma el valor JSON a un array o devuelve un array vacío si no hay nada guardado
    }
  
    function actualizarVista() {
      const itemList = obtenerItems();
      contenedor.innerHTML = '';
      itemList.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        contenedor.appendChild(li);
      });
    }
  });