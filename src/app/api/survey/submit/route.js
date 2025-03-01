// src/app/api/survey/submit/route.js
import pool from "../../../../../lib/db";

export async function POST(request) {
  const { name, email, rating, feedback } = await request.json();

  try {
    const query = `
      INSERT INTO survey_responses (name, email, rating, feedback)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [name, email, rating, feedback];
    const result = await pool.query(query, values);
    return Response.json(result.rows[0]);
  } catch (error) {
    console.error("Error submitting survey:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
