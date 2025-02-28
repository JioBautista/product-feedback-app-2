export default function Chip({ children, gridPosition }) {
  return (
    <div
      className={`px-4 py-2 font-bold rounded-xl ${gridPosition} bg-[#F2F4FF] text-[#4661E6] inline-block`}
    >
      {children}
    </div>
  );
}
