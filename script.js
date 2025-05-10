const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const courseCards = document.querySelectorAll(".course-card");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();

  courseCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
const jobForm = document.getElementById("jobForm");
const jobContainer = document.getElementById("jobContainer");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function displayJobs() {
  jobContainer.innerHTML = "";
  jobs.forEach((job, index) => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h4>${job.title}</h4>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
    `;
    jobContainer.appendChild(div);
  });
}

jobForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const jobTitle = document.getElementById("jobTitle").value;
  const companyName = document.getElementById("companyName").value;
  const jobLocation = document.getElementById("jobLocation").value;

  const newJob = {
    title: jobTitle,
    company: companyName,
    location: jobLocation
  };

  jobs.push(newJob);
  localStorage.setItem("jobs", JSON.stringify(jobs));

  displayJobs();
  jobForm.reset();
});

displayJobs(); // show existing jobs on load

function displayJobs() {
    jobContainer.innerHTML = "";
    jobs.forEach((job, index) => {
      const div = document.createElement("div");
      div.className = "job-card";
      div.innerHTML = `
        <h4>${job.title}</h4>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSer0RPnhGCaJvb3DRT-F9J2w6PxeJu5wn2hU87sc3-NxlijfA/viewform?usp=header" target="_blank">
          <button class="apply-btn">Apply</button>
        </a>
      `;
      jobContainer.appendChild(div);
    });
  }

  // Navbar links mapped to section IDs
const navLinks = {
    homeLink: "homeSection",
    jobLink: "jobSection",
    postJobLink: "postJobSection",
    contactLink: "contactSection",
    loginLink: "loginSection"
  };
  
  function showSection(sectionId) {
    document.querySelectorAll(".page-section").forEach(section => {
      section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
  }
  
  // Add event listeners to each navbar link
  Object.keys(navLinks).forEach(linkId => {
    const link = document.getElementById(linkId);
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(navLinks[linkId]);
    });
  });
  

  