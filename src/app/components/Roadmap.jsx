export default function Roadmap() {
  const spanStyles = "justify-self-end font-bold";
  const pStyles = "text-gray-500";
  return (
    <div className="bg-white rounded-md p-5 grid grid-cols-2 gap-2">
      <h1 className="font-bold text-xl">Roadmap</h1>
      <p className="justify-self-end">view</p>
      <p className={pStyles}>Planned</p>
      <span className={spanStyles}>2</span>
      <p className={pStyles}>In-Progess</p>
      <span className={spanStyles}>3</span>
      <p className={pStyles}>Live</p>
      <span className={spanStyles}>1</span>
    </div>
  );
}
