
function checkImplementation() {
    const pictures = document.querySelectorAll('picture');
    const imagesWithSrcset = document.querySelectorAll('img[srcset]');
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    console.log(`
📊 ESTADO DE TU IMPLEMENTACIÓN:
• Picture elements: ${pictures.length}
• Imágenes con srcset: ${imagesWithSrcset.length}
• Imágenes con lazy loading: ${lazyImages.length}

${pictures.length > 0 ? '✅' : '❌'} Picture elements implementados
${imagesWithSrcset.length > 0 ? '✅' : '❌'} Srcset implementado
${lazyImages.length > 0 ? '✅' : '❌'} Lazy loading implementado
    `);
}

setInterval(checkImplementation, 5000);
setTimeout(checkImplementation, 2000);
