/* 🔹 NEW CODE START: Basic JavaScript for IRIS Dashboard */

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  console.log("IRIS Dashboard Loaded ✅");

  // Example: Get elements dynamically
  const welcomeText = document.querySelector(".welcome h1");
  const cgpaElement = document.querySelector(".purple p");
  const subjectBoxes = document.querySelectorAll(".subject");

  // Example static data (can be replaced with API later)
  const studentData = {
    name: "Vashisth",
    majorCGPA: 8.08,
    cgpaChange: "+0.12",
    subjects: [
      { name: "Data Structures", attendance: 92 },
      { name: "Computer Networks", attendance: 68 },
      { name: "Operating Systems", attendance: 78 },
      { name: "Database Management", attendance: 85 },
      { name: "Linear Algebra", attendance: 95 },
    ],
  };

  // Update welcome message
  if (welcomeText) {
    welcomeText.textContent = `Welcome back, ${studentData.name}`;
  }

  // Update CGPA and change dynamically
  if (cgpaElement) {
    cgpaElement.innerHTML = `${studentData.majorCGPA} <span class="change">${studentData.cgpaChange}</span>`;
  }

  // Update subject attendance dynamically
  subjectBoxes.forEach((box, i) => {
    const subject = studentData.subjects[i];
    if (subject) {
      const pTag = box.querySelector("p");
      if (pTag) {
        pTag.innerHTML = `${subject.attendance}% <span>auto-updated</span>`;
      }
    }
  });

  // Example hover sound or effect placeholder
  subjectBoxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.transition = "transform 0.25s, box-shadow 0.25s";
      box.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.3)";
    });

    box.addEventListener("mouseleave", () => {
      box.style.boxShadow = "";
    });
  });
});
/* 🔹 NEW CODE END */
