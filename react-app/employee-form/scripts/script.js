console.log('js is included');
const ename = document.querySelector('.name');
const id = document.querySelector('.ID');
const mobile = document.querySelector('.mobile');
const email = document.querySelector('.email');

let nextButton = document.getElementById('nextButton');
let submitButton = document.getElementById('submitButton');
let editButton = document.getElementById('editButton');

function init(){
    submitButton.style.display = "none";
    editButton.style.display = "none";
}

function goToSubmit(){
    console.log("hhh");
    ename.disabled = true;
    id.disabled = true;
    mobile.disabled = true;
    email.disabled = true;

    // nextButton.parentNode.removeChild(nextButton);
    nextButton.style.display = "none";
    // submitButton = document.createElement('button');
    // submitButton.textContent = 'Submit';
    // document.body.append(submitButton);
    // editButton = document.createElement('button');
    // editButton.textContent = 'Edit';
    // document.body.append(editButton);
    // editButton.addEventListener('click',goToEdit);

    submitButton.style.display = "inline-block";
    editButton.style.display = "inline-block";
}
function goToEdit(){
    console.log('I am in goToEdit');
    ename.disabled = false;
    id.disabled = false;
    mobile.disabled = false;
    email.disabled = false;

    // submitButton.parentNode.removeChild(submitButton);
    // editButton.parentNode.removeChild(editButton);
    // nextButton = document.createElement('button');
    // nextButton.setAttribute("id","nextButton");
    // nextButton.textContent = 'Next';
    // document.body.append(nextButton);
    nextButton.style.display = "inline-block";
    init();
    
}

nextButton.addEventListener('click',goToSubmit);
editButton.addEventListener('click',goToEdit);
// goToSubmit();

document.addEventListener('DOMContentLoaded',()=>{
    init();
});
