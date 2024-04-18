
let fullStackHeading = document.getElementById("full-stack");
let aboutNav = document.getElementById("aboutme-nav");
let projectsNav = document.getElementById("projects-nav");
let skillsNav = document.getElementById("skills-nav");

const headings = document.getElementsByClassName('heading');
const containers = document.getElementsByClassName('container');

const proj = document.getElementsByClassName('proj');
const projBox = document.getElementsByClassName('proj-box');
const projSkills = document.getElementsByClassName('proj-skills');
const projDesc = document.getElementsByClassName('proj-desc');
const projViewGit = document.getElementsByClassName('proj-git-view');

const expandSection = document.getElementsByClassName('expand-section');




//grow and shrink sections
containers[1].style.maxHeight = "0px";
containers[2].style.maxHeight = "0px";
let growToggle = [1,0,0];

function growShrink (x){
    if (growToggle[x] === 0){
        growToggle[x] = 1;
        containers[x].style.maxHeight = "";
        switch (x){
            case 0:
                expandSection[0].innerHTML = "-";
                expandSection[1].innerHTML = "-";
                break;
            case 1:
                expandSection[2].innerHTML = "-";
                expandSection[3].innerHTML = "-";
                break;
            case 2:
                expandSection[4].innerHTML = "-";
                expandSection[5].innerHTML = "-";
                break;
        };
    } else if (growToggle[x] === 1){
        growToggle[x] = 0;
        containers[x].style.maxHeight = "0px";
        switch (x){
            case 0:
                expandSection[0].innerHTML = "+";
                expandSection[1].innerHTML = "+";
                break;
            case 1:
                expandSection[2].innerHTML = "+";
                expandSection[3].innerHTML = "+";
                break;
            case 2:
                expandSection[4].innerHTML = "+";
                expandSection[5].innerHTML = "+";
                break;
        };
    }
};

headings[0].onclick = function(){
    growShrink(0);
};

headings[1].onclick = function(){
    growShrink(1);
};
headings[2].onclick = function(){
    growShrink(2);
};

//Grow from Nav Buttons

function navGrow (x){
    if (growToggle[x] === 0){
        growToggle[x] = 1;
        containers[x].style.maxHeight = "";
    }
};

aboutNav.onclick = function(){
    navGrow(0);
};

projectsNav.onclick = function(){
    navGrow(1);
};

skillsNav.onclick = function(){
    navGrow(2);
};

//Heading Hover
function headingHover(x){
    switch (x){
        case 0:
            expandSection[0].style.opacity = 1;
            expandSection[1].style.opacity = 1;
            expandSection[0].style.top = 0;
            expandSection[1].style.top = 0;
            break;
        case 1:
            expandSection[2].style.opacity = 1;
            expandSection[3].style.opacity = 1;
            expandSection[2].style.top = 0;
            expandSection[3].style.top = 0;
            break;
        case 2:
            expandSection[4].style.opacity = 1;
            expandSection[5].style.opacity = 1;
            expandSection[4].style.top = 0;
            expandSection[5].style.top = 0;
            break;
    };
};

function headingLeave(x){
    switch (x){
        case 0:
            expandSection[0].style.opacity = "";
            expandSection[1].style.opacity = "";
            expandSection[0].style.top = "";
            expandSection[1].style.top = "";
            break;
        case 1:
            expandSection[2].style.opacity = "";
            expandSection[3].style.opacity = "";
            expandSection[2].style.top = "";
            expandSection[3].style.top = "";
            break;
        case 2:
            expandSection[4].style.opacity = "";
            expandSection[5].style.opacity = "";
            expandSection[4].style.top = "";
            expandSection[5].style.top = "";
            break;
    };
};

headings[0].onmouseover = function(){
    headingHover(0);
};

headings[0].onmouseleave = function(){
    headingLeave(0);
};

headings[1].onmouseover = function(){
    headingHover(1);
};

headings[1].onmouseleave = function(){
    headingLeave(1);
};

headings[2].onmouseover = function(){
    headingHover(2);
};

headings[2].onmouseleave = function(){
    headingLeave(2);
};

//Project box hover

function projMouseOver(x){
    projSkills[x].style.opacity = 1;
    projSkills[x].style.bottom = 0;
    projDesc[x].style.opacity = 1;
    projViewGit[x].style.opacity = 1;
    projViewGit[x].style.top = 0;
};

function projMouseLeave(x){
    projSkills[x].style.opacity = "";
    projSkills[x].style.bottom = "";
    projDesc[x].style.opacity = 0;
    projViewGit[x].style.opacity = "";
    projViewGit[x].style.top = "";
};

proj[0].onmouseover = function(){
    projMouseOver(0);
};

proj[0].onmouseleave = function(){
    projMouseLeave(0);
};

proj[1].onmouseover = function(){
    projMouseOver(1);
};

proj[1].onmouseleave = function(){
    projMouseLeave(1);
};

proj[2].onmouseover = function(){
    projMouseOver(2);
};

proj[2].onmouseleave = function(){
    projMouseLeave(2);
};

// spin skill

const skillBox = document.getElementsByClassName('skill-box');
const skillArray = Array.from(skillBox);

function spinSkill(event) {
    event.target.style.rotate = "360deg";
}

function unspinSkill(event) {
    event.target.style.rotate = "0deg";
}

function hoverSkill(event) {
    event.onmouseover = spinSkill;
    event.onmouseleave = unspinSkill;
}

skillArray.forEach(hoverSkill);
