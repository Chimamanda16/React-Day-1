 function generateCard(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const dataObj = Object.fromEntries(data);
    document.getElementById("std-name").innerHTML = `Name: ${dataObj.fullname}`
    document.getElementById("college-name").innerHTML = `College Name: ${dataObj.college}`
    document.getElementById("std-location").innerHTML = `Location: ${dataObj.location}`
}
document.getElementById("form").addEventListener("submit", generateCard);   