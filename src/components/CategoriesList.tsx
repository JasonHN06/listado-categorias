import React from "react";
import { useCategories } from "../hooks/useCategories";

const CategoriesList: React.FC = () => {
  const { categories, loading, error } = useCategories();
  if (loading) {
    return <p className="text-center text-blue-500">Cargando categorías...</p>;
  }
  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Categorías de Productos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
