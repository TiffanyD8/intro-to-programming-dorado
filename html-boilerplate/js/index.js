let today = new Date();
let thisYear = today.getFullYear();

// DOM Selection 4.2
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = 'Tiffany ' + thisYear
footer.appendChild(copyright)

// add skills
const skills = ['Assembler', 'COBOL', 'JCL', 'Microsoft Suite', 'Endevor', 'Eztrieve', 'Math Tutor', 'Travel Agent', 'Insurance Agent'];

const skillsSection = document.getElementById('skills');
console.log(skillsSection);

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
let skill = document.createElement("li");
skill.innerHTML = skills[i]
skillsList.appendChild(skill)
}

// DOM Selection 4.3
//*******************************************************************************************
// create messages
// *******************************************************************************************
// display the information from the form

let msgForm = document.getElementsByName("leave_message");
console.log(msgForm[0], "Show the data from the form ");

msgForm[0].addEventListener("submit", function(event){
  event.preventDefault();

let theMsgForm = event.target;

let name = event.target.name.value;
let email = event.target.email.value;
let message = event.target.message.value;

console.log("Display your name: ", name);
console.log("Show Email: ", email);
console.log("Show text here: ", message);

let messageSection = document.getElementById("messages");
let messageList = messageSection.querySelector("ul");
let newMessage = document.createElement("li");    

//adding messages to the list
messageList.appendChild(newMessage);

    newMessage.innerHTML = `
    <a href="mailto:${email}">${name}</a>
    <span>${message}</span>
    `;
//************ REMOVE BUTTON  *****************************
const removeButton = document.createElement("button");
removeButton.type = "button";
removeButton.innerHTML = "REMOVE";

// this button will remove the message that was posted
removeButton.addEventListener("click", function(event){
event.preventDefault();
let entry = removeButton.parentNode;
entry.remove();
})

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

// this will reset the form
event.target.reset();
});