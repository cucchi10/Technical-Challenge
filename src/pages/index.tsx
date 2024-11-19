'use client';

import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ cartItemCount, totalAmount, handleCompra, handleClearCart }: { cartItemCount: number, totalAmount: number, handleCompra: () => void, handleClearCart: () => void }) => (
  <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <h1 className="text-2xl font-bold">Mi Tienda</h1>
    <div className="flex items-center space-x-4">
      <div className="relative">
        <FaShoppingCart size={24} />
        {cartItemCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            {cartItemCount}
          </span>
        )}
      </div>
      <span>${totalAmount.toFixed(2)}</span>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        onClick={handleCompra}
      >
        Comprar
      </button>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        onClick={handleClearCart}
      >
        Vaciar Carrito
      </button>
    </div>
  </header>
);

const ProductoCard = ({ producto, addToCart }: { producto: any, addToCart: (producto: any) => void }) => (
  <div className="flex flex-col items-center border border-gray-300 p-4 text-center rounded-lg shadow-md">
    <img className="w-[100px] h-[100px] rounded-lg" src={producto.image} alt={producto.title} />
    <h3 className="mt-4 font-semibold">{producto.title}</h3>
    <p className="text-gray-600">{producto.description}</p>
    <p className="mt-2 font-bold">Precio: ${producto.price}</p>
    <button
      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      onClick={() => addToCart(producto)}
    >
      Agregar al carrito
    </button>
  </div>
);

const CatalogoCompras = () => {
  const [productos, setProductos] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProductos(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los productos');
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const addToCart = (producto: any) => {
    setCart((prevCart) => [...prevCart, producto]);
  };

  const handleCompra = () => {
    if (cart.length > 0) {
      alert('Compra realizada con éxito');
      setCart([]); 
    } else {
      alert('No tienes productos en el carrito');
    }
  };

  const handleClearCart = () => {
    setCart([]); 
  };

  const cartItemCount = cart.length;
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center">{error}</p>;

  return (
    <div>
      <Header cartItemCount={cartItemCount} totalAmount={totalAmount} handleCompra={handleCompra} handleClearCart={handleClearCart} />
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold mb-2">Catálogo de Compras</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {productos.slice(0, 8).map((producto) => (
            <ProductoCard key={producto.id} producto={producto} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>Mi Tienda - Todos los derechos reservados</p>
        <div>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Política de privacidad</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Términos legales</a>
        </div>
      </footer>
    </div>
  );
};

export default function Page() {
  return (
    <div>
      <CatalogoCompras />
    </div>
  );
}
