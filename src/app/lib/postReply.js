"use server";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function postReply(comment_id, formData) {
  const rawFormData = {
    replyto: formData.get("replyto"),
    full_name: formData.get("full_name"),
    username: formData.get("username"),
    content: formData.get("content"),
  };
  await sql`INSERT INTO replies(comments_id,replyto,full_name,username,content)
    VALUES(
    ${comment_id},
    ${rawFormData.replyto},
    ${rawFormData.full_name},
    ${rawFormData.username},
    ${rawFormData.content}
    )`;

  const { rows } =
    await sql`SELECT product_id FROM comments WHERE id = ${comment_id}`;

  return redirect(`/${rows[0].product_id}`);
}
