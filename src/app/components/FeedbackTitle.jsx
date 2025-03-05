import Link from "next/link";
export default function FeedbackTitle({ href, children }) {
  return (
    <Link href={href} className="font-bold hover:text-[#4661E6] block">
      {children}
    </Link>
  );
}
