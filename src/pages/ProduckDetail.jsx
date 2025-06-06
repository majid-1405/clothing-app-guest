import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";  // <-- import useNavigate
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import productData from "../data/product.json";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const [open, setOpen] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();  // <-- inisialisasi useNavigate
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const foundProduct = productData.find((item) => item.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.details.size[0]);
    } else {
      setProduct(null);
      setSelectedSize("");
    }
  }, [id]);

  if (!product) {
    return <div>Loading produk...</div>;
  }

  const colorMap = {
    Black: "bg-black",
    White: "bg-white border",
    Gray: "bg-gray-500",
  };

  // Fungsi untuk tutup modal dan navigasi kembali
  function handleClose() {
    setOpen(false);
    navigate(-1); // Kembali ke halaman sebelumnya
  }

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center px-4">
          <DialogPanel className="w-full max-w-3xl transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all">
            <button
              onClick={handleClose}  // <-- panggil handleClose di tombol close
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            >
              <AiOutlineClose className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg object-cover"
              />

              <div>
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="text-xl text-gray-700 mt-2">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <p className="text-sm text-gray-500 mt-1">Stock: {product.stock}</p>

                <form className="mt-6">
                  <div>
                    <legend className="text-sm font-medium text-gray-900 mb-1">
                      Warna
                    </legend>
                    <div className="flex gap-3">
                      {product.details.color.map((color) => (
                        <span
                          key={color}
                          title={color}
                          className={classNames(
                            "w-8 h-8 rounded-full border",
                            colorMap[color] || "bg-gray-300"
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <legend className="text-sm font-medium text-gray-900 mb-1">
                      Ukuran
                    </legend>
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-2"
                    >
                      {product.details.size.map((size) => (
                        <Radio
                          key={size}
                          value={size}
                          className="text-sm text-center border rounded-md px-2 py-1 cursor-pointer hover:bg-gray-100"
                        >
                          {size}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
                  >
                    Tambahkan ke Keranjang
                  </button>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
