let today = new Date();
let thisYear = today.getFullYear();

// DOM Selection
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = 'Tiffany ' + thisYear
footer.appendChild(copyright)

const skills = ['Assembler', 'COBOL', 'JCL', 'Microsoft Suite', 'Endevor', 'Eztrieve', 'Math Tutor', 'Travel Agent', 'Insurance Agent'];

const skillsSection = document.getElementById('skills');
console.log(skillsSection);

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
let skill = document.createElement("li");
skill.innerHTML = skills[i];
skillsList.appendChild(skill);
}
