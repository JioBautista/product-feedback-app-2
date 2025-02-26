import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
export default async function updateUpvote(formData) {
  "use server";
  const rawFormData = {
    upvotes: formData.get("upvotes"),
    id: formData.get("id"),
  };
  let upvotes = parseInt(rawFormData.upvotes);
  upvotes += 1;
  await sql`UPDATE products SET upvotes = ${upvotes} WHERE id = ${rawFormData.id}`;
  redirect("/");
}
