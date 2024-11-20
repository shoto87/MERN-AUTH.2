const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-gray-50 rounded-md border border-gray-300 focus:border-gray-500 
		  focus:ring-2 focus:ring-gray-500 text-gray-800 placeholder-gray-400 transition duration-200"
      />
    </div>
  );
};
export default Input;
