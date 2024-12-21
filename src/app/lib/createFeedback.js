import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function createFeedback(formData) {
  "use server";
  const rawFormData = {
    title: formData.get("title"),
    category: formData.get("category"),
    upvotes: formData.get("upvotes"),
    status: formData.get("status"),
    description: formData.get("description"),
  };
  await sql`
    INSERT INTO products(title, category, upvotes, status, description)
    VALUES(${rawFormData.title},
    ${rawFormData.category},
    ${rawFormData.upvotes},
    ${rawFormData.status},
    ${rawFormData.description})
    `;
  console.log(rawFormData);
  redirect("/");
}
