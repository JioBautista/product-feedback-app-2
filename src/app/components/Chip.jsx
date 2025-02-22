export default function Chip({ children, gridPosition }) {
  return (
    <span
      className={`justify-self-start px-4 py-2 font-bold rounded-xl ${gridPosition} bg-[#F2F4FF] text-[#4661E6]`}
    >
      <div className="flex items-center gap-2">{children}</div>
    </span>
  );
}
