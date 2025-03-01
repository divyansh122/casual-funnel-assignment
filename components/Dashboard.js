// src/components/Dashboard.js
"use client";
import { Page, Card, DataTable } from "@shopify/polaris";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const response = await fetch("/api/survey/responses");
        const data = await response.json();
        setResponses(data);
      } catch (error) {
        console.error("Error fetching survey responses:", error);
      }
    };
    fetchResponses();
  }, []);

  const rows = responses.map((response) => [
    response.name,
    response.email,
    response.rating,
    response.feedback,
    new Date(response.created_at).toLocaleString(),
  ]);

  return (
    <Page title="Survey Responses">
      <Card>
        <DataTable
          columnContentTypes={["text", "text", "text", "text", "text"]}
          headings={["Name", "Email", "Rating", "Feedback", "Timestamp"]}
          rows={rows}
        />
      </Card>
    </Page>
  );
};

export default Dashboard;
