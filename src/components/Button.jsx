const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-2 px-4 bg-blue-gradient font-poppins font-medium text-[18px] text-black outline-none ${styles} rounded-[10px]`}
    >
      Learn more
    </button>
  );
};

export default Button;
