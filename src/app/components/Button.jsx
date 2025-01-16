export default function Button({ children, bg }) {
  return (
    <button
      className={`${bg} text-white p-3 rounded-xl font-bold w-full`}
      type="submit"
    >
      {children}
    </button>
  );
}
