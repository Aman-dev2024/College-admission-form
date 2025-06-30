document.getElementById("College-form").addEventListener("submit",function(e){
  e.preventDefault();

    const student = {
    firstName: document.getElementById("first-name").value.trim(),
    lastName: document.getElementById("last-name").value.trim(),
    dob: document.getElementById("dob").value,
    phoneno: document.getElementById("phoneno").value.trim(),
    email: document.getElementById("email").value.trim(),
    address: document.getElementById("home-address").value.trim(),
    city: document.getElementById("city").value.trim(),
    state: document.getElementById("state").value.trim(),
    code: document.getElementById("zip-code").value.trim(),
    department: document.getElementById("department").value,
    course: document.getElementById("course").value,
    submittedAt: new Date().toLocaleString()
  };

  const allStudents=JSON.parse(localStorage.getItem("admission")) || [];

  allStudents.push(student);

  localStorage.setItem("Data",JSON.stringify(allStudents));

  localStorage.setItem("latest data",JSON.stringify(student));

  window.location.href="result.html";
})
