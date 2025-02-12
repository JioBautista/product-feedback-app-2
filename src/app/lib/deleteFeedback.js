import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function deleteFeedback(id) {
  "use server";
  await sql`DELETE FROM products WHERE id = ${id}`;
  redirect("/");
  return;
}
