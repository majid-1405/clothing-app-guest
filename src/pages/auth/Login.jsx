import axios from "axios";
import { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "", // isinya username sebenarnya
    password: "",
  });
  const [role, setRole] = useState("guest");

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    console.log("LOGIN:", dataForm.email, dataForm.password, role);

    axios
      .post(
        "https://dummyjson.com/auth/login",
        {
          username: dataForm.email,
          password: dataForm.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }

        // ✅ Simpan token (opsional)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);

        // ✅ Redirect berdasarkan role
        if (role === "admin") {
          window.location.href = "https://your-admin-dashboard.vercel.app"; // Ganti sesuai kebutuhan
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "Login gagal");
        } else {
          setError(err.message || "Terjadi kesalahan");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const errorInfo = error && (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  );

  const loadingInfo = loading && (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center font-gothic">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center font-gothic">
        Login Role-Based
      </h2>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit}>
        {/* Input Username */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1 font-gothic">
            Username
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 text-black"
            placeholder="e.g. kminchelle"
          />
        </div>

        {/* Input Password */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1 font-gothic">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 text-black"
            placeholder="********"
          />
        </div>

        {/* Dropdown Role */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1 font-gothic">
            Pilih Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm text-black"
          >
            <option value="guest">Guest</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-600 hover:bg-black text-white font-gothic py-2 px-4 rounded-lg transition duration-300"
        >
          Login
        </button>
      </form>

      {/* Footer Aksi */}
      <div className="mt-6 text-center space-y-2">
        <button
          onClick={() => navigate("/Forgot")}
          className="text-sm text-blue-500 hover:text-blue-600 font-gothic"
        >
          Forgot Password?
        </button>
        <br />
        <button
          onClick={() => navigate("/Register")}
          className="text-sm text-blue-500 hover:text-blue-600 font-gothic"
        >
          Don't have an account? Register
        </button>
      </div>
    </div>
  );
}
