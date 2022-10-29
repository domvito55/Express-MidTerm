// Filename: appclient.js
// Student: Matheus Teixeira
// StudentId: 301236904
// Date: Oct 29, 2022
// Author: Julio Vinicius
// Webapp: todo

console.log('app script is working.');

//Asks for confiramtion before deleting any data
if(getTitle == "To-Do List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}

//Check if tha page is singup, if it is creates a listener to check if both
//password fields match
if(getTitle == "Sign-up Form")
{
    const confirm = document.querySelector('input[name=password_confirm]');

    confirm.addEventListener('change', onChange); 
}

//Compare fiels password and confirm password to see if they match
function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password_confirm]');
    
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
}