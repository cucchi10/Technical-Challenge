# E-commerce Frontend Challenge

## ⏱️ Tiempo: 60 minutos

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/AGBGDA/Technical-Challenge.git

# Cambiar al directorio
cd Technical-Challenge

# Cambiar a tu rama designada
git checkout candidate-1  # o candidate-2 según corresponda

# Instalar dependencias
npm install

# Iniciar el desarrollo
npm run dev

🎯 Funcionalidades Requeridas
1. Catálogo de Productos (40 min)
Mostrar grid de productos (imagen, título, precio)
Filtro simple por categorías
Botón "Agregar al carrito"
Diseño responsive básico

2. Carrito de Compras Básico (20 min)
Agregar/eliminar productos
Mostrar total
Persistir en localStorage

📚 API a Utilizar
Base URL: https://fakestoreapi.com

Endpoints:
// Obtener productos
GET /products

// Obtener categorías
GET /products/categories

// Obtener productos por categoría
GET /products/category/{categoryName}

Ejemplo de respuesta de producto

Formato JSON: 

{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest.",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}

💡 Consideraciones
Enfócate en la funcionalidad principal
Implementa un diseño responsive básico
Maneja estados de carga
Estructura clara del código
Usa TypeScript correctamente
📁 Estructura Sugerida
src/
├── pages/
├── components/
├── types/
├── context/
└── services/
🛠️ Stack Tecnológico
Next.js 13+
TypeScript
Styled Components
Context API o Redux (opcional)

✅ Criterios de Éxito
Funcionalidad completa del catálogo
Implementación correcta del carrito
Código limpio y bien organizado
Manejo de tipos con TypeScript
Diseño responsive funcional


¡Buena suerte! 🚀