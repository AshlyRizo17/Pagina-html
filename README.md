# Pagina-html 
BabyStore - Tienda de Ropa para Bebés
Descripción:
Sitio web de muestra para una tienda de ropa de bebé llamada BabyStore. Este diseño responsivo ofrece una experiencia atractiva y funcional para mostrar productos, enfatizando ternura, seguridad y amor hacia los más pequeños.

📄 Estructura del Proyecto
1. Encabezado (<header>)
Contiene:

El logotipo de la tienda (BabyStore🌟🕶️).

Estilizado con fondo, sombreado y diseño flexible para distintos dispositivos.

2. Sección de Misión e Instrucciones
Describe la misión de la tienda: calidad, ternura y confianza para las familias.

Contiene una cuadrícula de imágenes (uso de <picture> para responsividad e imágenes adaptadas según el dispositivo).

Cada imagen muestra un producto conceptual con soporte para srcset, sizes y lazy loading.

3. Sección de Productos Destacados
Grid de 4 tarjetas de productos con:

Imagen optimizada.

Título, descripción, precio (con opción de precio original tachado).

Botones: Agregar al carrito y Ver detalles.

Etiquetas decorativas (Nuevo, Oferta, Premium) usando position: absolute.

4. Pie de página
Incluye aviso de derechos de autor.

Diseño simple, claro y centrado.

..Estilos CSS
Uso de variables CSS (:root) para manejar:

Colores (primario, secundario, fondo, texto, etc.)

Tipografías con valores fluidos (clamp)

Espaciados (--space-xs a --space-xl)

Estilos responsivos mediante media queries:

Móvil (1 columna)

Tablet (2 columnas)

Desktop (3 columnas)

Extra grande (4 columnas)

..Optimización de Imágenes
Cada imagen de producto está implementada con:

<picture> para servir imágenes adaptadas según el ancho de pantalla.

srcset y sizes para mejorar la carga adaptativa.

loading="lazy" para mejorar el rendimiento.

..Estas técnicas aseguran:

Menor carga inicial.

Mejores prácticas SEO.

Ahorro de datos móviles.

..Script de Verificación
Se incluye un pequeño script JavaScript al final que:

Verifica e imprime en consola:

Cuántos elementos <picture> hay.

Cuántas imágenes usan srcset.

Cuántas usan loading="lazy".

Ejecuta la verificación cada 5 segundos.

..Tecnologías Usadas
HTML5 + CSS

JavaScript para inspección (sin frameworks).

Diseño 100% responsivo sin necesidad de librerías externas.

Imágenes alojadas externamente en alta calidad.

..Público objetivo
Este sitio está pensado para:

Padres/madres buscando ropa de bebé.

Comerciantes que deseen exhibir un catálogo digital bonito y accesible.

