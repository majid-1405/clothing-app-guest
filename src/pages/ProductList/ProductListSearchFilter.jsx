import productData from "./product.json";
import { useState } from "react";

export default function ProductList() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
        // Tambah state lain beserta default value jika diperlukan
    });
    
    // Handle perubahan nilai input form
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };
    
    const _searchTerm = dataForm.searchTerm.toLowerCase();
    
    const filteredProduct = productData.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(_searchTerm);
    
        const matchesTag = dataForm.selectedTag
            ? product.tag.includes(dataForm.selectedTag)
            : true;
    
        return matchesSearch && matchesTag;
    });
    
    const allTags = [
        ...new Set(productData.flatMap((product) => product.tag)),
    ];

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center">Product List</h1>
            <input
                value={dataForm.searchTerm}
                type="text"
                name="searchTerm"
                placeholder="Search Product..."
                className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
            />

            <select
                value={dataForm.selectedTag}
                name="selectedTag"
                className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>
      
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredProduct.length > 0 ? (
                    filteredProduct.map((product) => (
                        <div key={product.id} className="border border-gray-400 p-5 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 group relative">
                <img
                  src={product.image}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className=" mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700"> {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">Stock : {product.stock}</p>
                   
                        <br /> Material : {product.details.material},
                        <br />
                        <br />
                       Size : {product.details.size.map((size,index)=>(
                                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                                    {size}
                                </span>
                            ))}
                            <br />
                            <br />
                        Color : {product.details.color.map((color,index)=>(
                                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                                    {color}
                                </span>
                            ))}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <br />
                        {product.tag.map((tag,index)=>(
                                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                                    {tag}
                                </span>
                            ))}
              </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 w-full">No products found.</p>
                )}
            </div>
        </div>
    );
}