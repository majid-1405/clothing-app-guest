export default function InputLogin({label, type, placeholder, onChange}){
    return (
        <div className="mt-3">
            <label className="block text-sm/6 font-medium text-gray-900">{label}</label>
            <input 
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded" />
                
        </div>
    )
}