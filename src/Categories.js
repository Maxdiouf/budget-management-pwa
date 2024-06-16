import React, { useState, useEffect } from "react";
import supabase from "./supabaseClient.js";

function Categories() {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);

  //ici on insere la catégorie dans la table categories
  const insertCategory = async () => {
    const { data, error } = await supabase
      .from("categories")
      .insert([{ name }]);

    if (error) {
      console.error("err lors de l'insertion:", error);
    } else {
      console.log("insertion ok:", data);
      //on affiche les catégories
      fetchCategories();
    }
  };

  //fonction pour affiche les catégories
  const fetchCategories = async () => {
    const { data, error } = await supabase.from("categories").select("*");

    if (error) {
      console.error("err lors de l'affichage:", error);
    } else {
      setCategories(data);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="App p-8 max-w-lg mx-auto bg-green-200">
      <h1 className="text-2xl font-bold mb-4">
        Ajouter une nouvelle catégorie
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nom de la catégorie"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-2"
        />
        <button
          onClick={insertCategory}
          className="w-full bg-purple-500 text-white p-2 rounded-lg"
        >
          Ajouter
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Les catégories :</h2>
      <ul className="list-disc pl-5 bg-red-200">
        {categories.map((category) => (
          <li key={category.id} className="mb-1">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
