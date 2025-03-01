// src/app/api/survey/responses/route.js
import pool from "../../../../../lib/db";

export async function GET() {
  try {
    const query = `
      SELECT * FROM survey_responses
      ORDER BY created_at DESC;
    `;
    const result = await pool.query(query);
    return Response.json(result.rows);
  } catch (error) {
    console.error("Error fetching survey responses:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
