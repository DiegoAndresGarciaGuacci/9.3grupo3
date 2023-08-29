document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('contenedor');
    const inputItem = document.getElementById('item');
    const btnAgregar = document.getElementById('agregar');
    const btnLimpiar = document.getElementById('limpiar');
  
    
    cargarItems();
  
    btnAgregar.addEventListener('click', function () {
      const nuevoItem = inputItem.value.trim();
      if (nuevoItem !== '') {
        agregarItem(nuevoItem);
        actualizarVista();
        inputItem.value = ''; 
      }
    });
  
    btnLimpiar.addEventListener('click', function () {
      localStorage.removeItem('items'); 
      contenedor.innerHTML = ''; 
    });
  
    function cargarItems() {
      const items = localStorage.getItem('items');
      if (items) {
        const itemList = JSON.parse(items);
        itemList.forEach(item => {
          agregarItem(item);
        });
      }
    }
  
    function agregarItem(item) {
      const itemList = obtenerItems();
      itemList.push(item);
      localStorage.setItem('items', JSON.stringify(itemList));
    }
  
    function obtenerItems() {
      const items = localStorage.getItem('items');
      return items ? JSON.parse(items) : [];
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