const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#emailLogIn').value;
    const password = document.querySelector('#inputPassword').value;
    console.log(email)
    

    if(email && password) {
        console.log('hit')
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // const response = await fetch('/api/users/login', {
        //     method: 'POST',
        //     body: '{"email":"mschimmoeller@email.com"}',
        //     headers: { 'Content-Type': 'application/json' },
        // });

        if (response.ok) {
            document.location.replace('/user');
        } else {
            alert('failed to log in');
        }
    }
};


const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#usernameSignUp').value.trim();
    const email = document.querySelector('#emailSignUp').value.trim();
    const password = document.querySelector('#newPassword').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
};

document    
    .querySelector('.login-form')
    .addEventListener('click', loginFormHandler);


document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  