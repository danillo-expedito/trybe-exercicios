const headerStyle = document.getElementById("header-container");
const firstTask = document.getElementsByClassName("emergency-tasks");
const secondTask = document.getElementsByClassName("no-emergency-tasks");

document.querySelectorAll(".emergency-tasks h3")[0].style.backgroundColor = 'purple'
document.querySelectorAll(".emergency-tasks h3")[1].style.backgroundColor = 'purple'
document.querySelectorAll(".no-emergency-tasks h3")[0].style.backgroundColor = 'black'
document.querySelectorAll(".no-emergency-tasks h3")[1].style.backgroundColor = 'black'
document.getElementById("footer-container").style.backgroundColor = 'darkgreen'


headerStyle.style.backgroundColor = 'green';
firstTask[0].style.backgroundColor = 'salmon';
secondTask[0].style.backgroundColor = 'yellow';

