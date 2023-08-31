# Film Connect - Juego Multijugador de Películas

Film Connect es una aplicación web que te permite jugar un emocionante juego multijugador con tus amigos para decidir qué película ver a continuación. En este juego, se te presentan películas al azar, y tú y tus amigos pueden votar por las películas que les gustan. Cuando todos estén de acuerdo en una película, ¡esa será la elegida!

## Funcionalidades Principales

- **Juego Multijugador**: Invita a tus amigos a unirse al juego y tomar decisiones juntos sobre qué película ver.

- **Votación de Películas**: Cada película se presenta con dos botones: "Me gusta" y "Descartar". Los jugadores pueden votar por las películas que les gustan.

- **Selección de Película**: Cuando todos los jugadores votan "Me gusta" en la misma película, se selecciona automáticamente como la próxima película para ver.

- **Mostrar Películas Mejor Valoradas del Día**: Film Connect muestra automáticamente las películas mejor valoradas del día utilizando la API de [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api).

## Explicación del Código Actual

En el código actual de Film Connect, hemos implementado la funcionalidad de mostrar las películas mejor valoradas del día. Aquí hay una explicación del código:

- Utilizamos la API de TMDb para obtener una lista de películas ordenadas por popularidad y filtradas por el día actual. La función `fetchMovies` se encarga de hacer esta solicitud a la API.

- Mostramos las películas en tarjetas en la interfaz de usuario. Cada tarjeta contiene la imagen de la película, el título y una breve descripción.

- Los usuarios pueden votar por las películas utilizando los botones "Me gusta" y "Descartar" en cada tarjeta. Los votos se almacenan y se utiliza lógica adicional para determinar cuándo se ha alcanzado un consenso en una película.

## Cómo Iniciar

Para iniciar la aplicación en tu entorno local, sigue estos pasos:

1. Clona este repositorio a tu computadora:

   ```bash
   git clone https://github.com/tuusuario/film-connect.git
   cd film-connect
   Instala vite si no lo tienes instalado
   npm install
   npm run dev
## Contribuciones
-Si deseas contribuir a este proyecto, ¡te damos la bienvenida! Siéntete     libre de abrir problemas (issues) o enviar solicitudes de extracción (pull   requests) para mejorar la aplicación.

## Tecnologías Utilizadas
- React.js
- The Movie Database (TMDb) API
-Otros paquetes y dependencias necesarios (ver el archivo package.json).

## Autor
- Contacto: juanbc06@gmail.com
- GitHub: wangallego

## Licencia
- Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para   obtener más detalles.
