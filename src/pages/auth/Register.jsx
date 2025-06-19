import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate() 
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center  ">
                Create Your Account 
            </h2>

            <form>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1  font-gothic"  
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1 font-gothic"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 bg-gray-50 border text-gray-700 border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400  "
                        placeholder="********"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700 mb-1  font-gothic"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
                        placeholder="********"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gray-600 hover:bg-black text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300  font-gothic"
                >
                    Register
                </button>
            </form>
            <div className="mt-6 text-center">
                <button
                        onClick={() => navigate('/Login')}
                        className="text-sm text-blue-500 hover:text-blue-600 font-gothic"
                    >
                         Login ?
                    </button>
                </div>
        </div>
    )
}