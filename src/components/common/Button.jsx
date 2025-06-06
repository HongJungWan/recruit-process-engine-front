const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 
        disabled:opacity-50 disabled:cursor-not-allowed 
        focus:outline-none focus:ring-2 focus:ring-blue-400 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
