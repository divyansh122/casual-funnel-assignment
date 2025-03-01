// src/components/SurveyForm.js
"use client";
import {
  Button,
  Card,
  FormLayout,
  TextField,
  ChoiceList,
} from "@shopify/polaris";
import { useState } from "react";

// Add a styled div to center the form
const SurveyForm = () => {
  const [responses, setResponses] = useState({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/survey/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responses),
      });
      if (response.ok) {
        alert("Thank you for your feedback!");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting survey:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Full viewport height to center vertically
        padding: "20px", // Optional padding for small screens
      }}
    >
      <Card sectioned>
        <FormLayout>
          <TextField
            label="Name"
            value={responses.name}
            onChange={(value) => setResponses({ ...responses, name: value })}
          />
          <TextField
            label="Email"
            type="email"
            value={responses.email}
            onChange={(value) => setResponses({ ...responses, email: value })}
          />
          <ChoiceList
            title="How would you rate your experience?"
            choices={[
              { label: "Excellent", value: "5" },
              { label: "Good", value: "4" },
              { label: "Average", value: "3" },
              { label: "Poor", value: "2" },
              { label: "Terrible", value: "1" },
            ]}
            selected={[responses.rating]}
            onChange={(value) =>
              setResponses({ ...responses, rating: value[0] })
            }
          />
          <TextField
            label="Additional Feedback"
            multiline
            value={responses.feedback}
            onChange={(value) =>
              setResponses({ ...responses, feedback: value })
            }
          />
          <Button primary onClick={handleSubmit}>
            Submit
          </Button>
        </FormLayout>
      </Card>
    </div>
  );
};

export default SurveyForm;
