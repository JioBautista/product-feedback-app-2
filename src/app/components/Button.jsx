export default function Button({ children, bg }) {
  return (
    <button
      className={`${bg} text-white p-3 rounded-xl font-bold w-full hover:brightness-125`}
      type="submit"
    >
      {children}
    </button>
  );
}
