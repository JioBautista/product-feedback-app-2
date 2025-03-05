export default function Chip({ children, additionalClass }) {
  return (
    <div
      className={`px-4 py-2 font-bold rounded-xl bg-[#F2F4FF] text-[#4661E6] inline-block ${additionalClass}`}
    >
      <span>{children}</span>
    </div>
  );
}
