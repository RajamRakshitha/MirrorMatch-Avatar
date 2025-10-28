const surveyQuestions = [
  "What’s your vibe today? (Minimal / Bold / Modern / Traditional)",
  "What’s your favorite jewelry type? (Necklace / Earrings / Rings / Bangles)",
  "What’s your preferred occasion? (Casual / Party / Wedding)"
];

document.getElementById("startBtn").addEventListener("click", startSurvey);

function startSurvey() {
  const surveyDiv = document.getElementById("survey");
  surveyDiv.innerHTML = "";
  surveyQuestions.forEach((q, i) => {
    const label = document.createElement("p");
    label.innerText = q;
    const input = document.createElement("input");
    input.type = "text";
    input.id = "q" + i;
    surveyDiv.appendChild(label);
    surveyDiv.appendChild(input);
  });
  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Show My Match";
  submitBtn.onclick = showResult;
  surveyDiv.appendChild(submitBtn);
}

function showResult() {
  const vibe = document.getElementById("q0").value.toLowerCase();
  const resultDiv = document.getElementById("result");
  if (vibe.includes("bold")) {
    resultDiv.innerHTML = "<h3>Your celebrity match is Deepika Padukone ✨</h3>";
  } else if (vibe.includes("minimal")) {
    resultDiv.innerHTML = "<h3>Your celebrity match is Alia Bhatt 💎</h3>";
  } else {
    resultDiv.innerHTML = "<h3>Your celebrity match is Priyanka Chopra 👑</h3>";
  }
}