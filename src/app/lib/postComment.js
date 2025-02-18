import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function postComment(product_id, formData) {
  "use server";
  const rawFormData = {
    full_name: formData.get("full_name"),
    username: formData.get("username"),
    content: formData.get("content"),
  };
  await sql`INSERT INTO comments(full_name,username,content,product_id)
  VALUES(
  ${rawFormData.full_name},
  ${rawFormData.username},
  ${rawFormData.content},
  ${product_id}
  )`;
  return redirect(`/${product_id}`);
}
