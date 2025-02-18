import { sql } from "@vercel/postgres";

export default async function fetchReplies(comment_id) {
  const { rows } =
    await sql`SELECT * FROM replies WHERE comments_id = ${comment_id}`;
  return rows;
}
