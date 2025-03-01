// public/survey-form.js

const surveyForm = document.createElement("div");
surveyForm.innerHTML = `
  <div id="survey-form">
    <h2>Survey Form</h2>
    <form id="survey">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <button type="submit">Submit</button>
    </form>
  </div>
`;

document.body.appendChild(surveyForm);

document.getElementById("survey").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const response = await fetch("/api/survey/submit", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert("Survey submitted successfully!");
  } else {
    alert("Submission failed. Please try again.");
  }
});
