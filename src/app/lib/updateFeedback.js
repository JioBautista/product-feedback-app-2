import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function updateFeedback(id, formData) {
  "use server";
  const rawFormData = {
    title: formData.get("title"),
    category: formData.get("category"),
    status: formData.get("status"),
    description: formData.get("description"),
  };
  await sql`UPDATE products
  SET title = ${rawFormData.title},
  category = ${rawFormData.category},
  status = ${rawFormData.status},
  description = ${rawFormData.description}
  WHERE id = ${id}
  `;
  redirect("/");
}
