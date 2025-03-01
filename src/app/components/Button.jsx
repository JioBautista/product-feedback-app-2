export default function Button({ children, bg, formAction }) {
  return (
    <button
      className={`${bg} text-white p-3 rounded-xl font-bold hover:brightness-125 md:px-6`}
      type="submit"
      formAction={formAction}
    >
      {children}
    </button>
  );
}
