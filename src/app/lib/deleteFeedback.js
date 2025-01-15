import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function deleteFeedback(feedbackID) {
  "use server";
  await sql`DELETE FROM products WHERE productid = ${feedbackID}`;
  redirect("/");
  return;
}
