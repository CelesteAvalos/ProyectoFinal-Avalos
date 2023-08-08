const contenedorArticulos = document.querySelector("#articulos-contenedor");

function cargarArticulos () {
    articulos.forEach(articulo => {

        const div = document.createElement("div");
        div.classList.add("articulo");
        div.innerHTML = `
                    <img class="imagen-articulo" src="${articulo.imagen}" alt="${articulo.titulo}">
                    <div class="info-art">
                         <h3 class="tit-art">${articulo.titulo}</h3>
                         <p class="precio-art">${articulo.precio}</p>
                         <button class="agregar-art">Agregar</button>
                    </div>
        `
    })
}

/*<div class="articulo">
                    <img class="imagen-articulo" src="./img/img.cuadros.jpg" alt="">
                    <div class="info-art">
                         <h3 class="tit-art">CUADROS art-01</h3>
                         <p class="precio-art">$800</p>
                         <button class="agregar-art">Agregar</button>
                    </div>
                </div> */