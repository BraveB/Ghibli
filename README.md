# Ghilbi Films

Aplicación desarrollada para mostrar la lista de películas de Ghilbi Studio, a través de ella podrás consultar los detalles de cada película enlistada y agregarla a tu propia lista de favoritos. Desarrollada con el fin de resolver los requerimientos enlistados en [*Prueba frontend*](https://github.com/resuelve/prueba_frontend).

## Requerimientos

- Node js 14.15.4
- Angular 11.2.3

Proyecto desarrollado utilizando el framework Angular 11.2.3 sobre nodeJS 14.15.4.

## Instalación

La instalación de nodeJS se puede hacer a través de su página web oficial: 
https://nodejs.org/es/download/

Configuración del proyecto:

```bash
# Clonar el repositorio del proyecto.
$ git clone git@github.com:BraveB/ghilbi.git

# Instalar angular.
npm install @angular/cli

# Instalar los paquetes del archivo ./package.json.
$ npm install 
```

Para iniciar la aplicación:

```bash
$ ng serve
# La aplicación utilizará el puerto 4200 por defecto. 
```

## Desarrollo

### Arquitectura
El proyecto esta desarrollado con una arquitectura típica de Angular, la cual se basa en componentes, data binding, interfaces y servicios. Una gran ventaja de angular es que nos permite crear una aplicación de página única que le da fluidez a la experiencia, esto es debido a que cada elemento html al ser creado es relacionado con su propio archivo de typescript y css, permitiendo el diseño del comportamiento y estilo de cada elemento, además de tener la propiedad de data binding para que el usuario pueda interactuar con los elementos sin recargar la pagina. 
Las interfaces nos permiten definir modelos que se adecuan a lo que deseamos mostrar en cada pantalla, en el proyecto Ghilbi fueron de gran utilidad para agregar la funcionalidad de favoritos y evitar algunos problemas que se presentaban al devolver el path de la imagen en formato string. 
Los servicios también se encuentran desacoplados para que estos puedan ser consumidos desde cualquier componente que lo requiera.

### Routing

Actualmente existen tres rutas a través de las cuales puedes navegar. 

|URL|Función|
|---|---|
|*/films*| Ruta por defecto, la cual nos mostrará la lista de películas pertenecientes a Studio Ghilbi |
|*/films/:id*| Ruta que permite conocer los detalles de la película seleccionada |
|*/favorites*| Ruta que muestra la lista de las películas que el usuario ha indicado como favoritas|


Para la ruta de favoritos, se utiliza un arreglo interno en el servicio de *filmService*, el cuál permanece consistente hasta que la página es refrescada. No se almaceno en el local/session storage puesto que el listado no es de propia auditoria.

Para los detalles enlistados se utilizo una api externa [The movie DB](https://developers.themoviedb.org/3/movies/get-movie-details), de la cual se extrae el poster_path y es añadido para su consulta en su [propio visualizador](https://image.tmdb.org/t/p/w500/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg). Los id son actualizados diariamente, por lo cual es probable que el enlace proporcionado no muestre imagen alguna. Para la primer consulta es requerida un apikey, el cual fue manejado como una variable de ambiente y no agregada al proyecto actual.

### Limitaciones
La funcionalidad de favoritos tiene un comportamiento limitado, debido a que es almacenada en la aplicación. De ser posible se actualizarían los datos para relacionar cada película con el atributo de favoritos y almacenar el cambio haciendo una petición PUT al servidor.

Para mostrar las imágenes es requerido un api key, el cual puede quedar expuesto al usuario en la url al realizar la consulta de las películas. Para tratarlo de manera adecuada se crearía un servicio de back-end que funja de proxy y devolviera dicha clave para realizar la consulta en vez de agregarlo de forma estática en el código.

La barra del buscador esta pre cargada con los 21 elementos que devuelve el end point  [*/films*](https://ghibliapi.herokuapp.com/films), esto debido al limitado número de registros devuelto y que la api no posee un end point que permita la consulta por nombre. Lo mejor sería realizar una consulta por cada carácter tecleado para la búsqueda de elementos.


## Producción

Para la publicación de esta aplicación se utilizo el servicio de github. Explore usted mismo las joyas de este estudio:
https://braveb.github.io/Ghibli/
 
 ## Destacados
 El componente más destacado de este desarrollo sin duda fue el de los detalles de las películas (**film-details**), el reto de agregar una imagen para que el contenido resaltará fue mi parte favorita.
\src\app\components\film-details
