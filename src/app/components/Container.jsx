export default function Container({ children }) {
  return (
    <div className="container mx-auto px-5 bg-transparent md:px-10">
      {children}
    </div>
  );
}
