import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import ProductData from "../data/product.json"; // fallback data lokal

export default function KeranjangPage() {
  const [open, setOpen] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      navigate(-1);
    }, 300);
  };

  useEffect(() => {
    axios
      .get("/product.json")
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data);
        } else {
          throw new Error("API Error");
        }
      })
      .catch((err) => {
        console.warn("API failed, using local product.json instead.");
        setProducts(ProductData.slice(0, 10));
        setError(err.message);
      });
  }, []);

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <DialogPanel className="w-full max-w-2xl rounded-lg bg-white shadow-xl">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <DialogTitle className="text-lg font-semibold text-gray-900">Shopping Cart</DialogTitle>
            <button
              type="button"
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <AiOutlineClose className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">
            {error && (
              <div className="text-sm text-red-600 mb-4">
                {error} — showing fallback products.
              </div>
            )}

            <ul className="space-y-4">
              {ProductData.map((product) => (
                <li key={product.id} className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-500">Stock: {product.stock ?? 'N/A'}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{product.price}</p>
                    <button className="text-sm text-red-500 hover:underline">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex justify-between mb-2">
              <span className="text-base font-medium text-gray-700">Subtotal</span>
              <span className="text-base font-medium text-gray-900">$262.00</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
            <div className="flex flex-col gap-2">
              <button className="w-full rounded bg-indigo-600 py-2 text-white font-medium hover:bg-indigo-700">
                Checkout
              </button>
              <button
                onClick={handleClose}
                className="text-sm text-indigo-600 hover:underline text-center"
              >
                Continue Shopping →
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
