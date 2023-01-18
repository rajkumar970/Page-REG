// JavaScript code to handle form submission and validation
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting
  
    // get form data
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
  
    // validate form data
    if (name === '' || email === '' || password === '') {
      alert('Please fill out all fields');
      return;
    }
  
    // submit form data (in a real-world scenario, this would likely involve sending a request to a server)
    alert('Form submitted successfully!');
  });
  