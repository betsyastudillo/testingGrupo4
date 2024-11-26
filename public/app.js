// Función para realizar la búsqueda desde el frontend
function buscarAplicaciones() {
    const query = document.getElementById('searchInput').value;
  
    fetch(`http://localhost:4000/aplicaciones/buscar?query=${query}`)
      .then(response => response.json())
      .then(data => {
        // Aquí puedes manejar los datos que llegan (por ejemplo, mostrarlos en una lista)
        console.log(data);
      })
      .catch(error => console.error('Error al buscar aplicaciones:', error));
  }  