import { sql } from "@vercel/postgres";
import Container from "./components/Container";
import Product from "./components/Product";
import AddFeedback from "./components/AddFeedback";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const filter = (await searchParams).filter;
  const { rows } = await sql`SELECT * FROM products`;
  return (
    <Container>
      <div className="py-5 space-y-5">
        {rows.map((items) => (
          <Product data={items} />
        ))}
        {rows.length === 0 && (
          <>
            <div className="bg-white px-6 py-20 rounded-md flex flex-col items-center gap-3">
              <Image
                src="/illustration-empty.svg"
                width={102}
                height={108}
                alt="Empty feedback"
              />
              <h1 className="font-bold text-2xl">There is no feedback yet.</h1>
              <p className="text-gray-500 text-center">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </p>
              <AddFeedback />
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
