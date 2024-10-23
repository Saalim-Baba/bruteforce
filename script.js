function checkPassword() {
    const enteredPassword = document.getElementById('password').value;

    const correctPassword = 'a31dx';

    if (enteredPassword === correctPassword) {
        alert('Login successful!');
        return true;
    } else {
        document.getElementById('error-message').style.display = 'block';
        return false;
    }
}


function validatePassword() {

    const password = document.getElementById('password').value;


    const minLength = 8;
    const maxLength = 32;
    const hasLetter = /[a-zA-Z]/;     // At least one letter
    const hasNumber = /[0-9]/;        // At least one number
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character

    if (password.length < minLength || password.length > maxLength) {
        document.getElementById('error-message').textContent = `Password must be between ${minLength} and ${maxLength} characters long.`;
        document.getElementById('error-message').style.display = 'block';
        return false;
    }

    if (!hasLetter.test(password)) {
        document.getElementById('error-message').textContent = 'Password must contain at least one letter.';
        document.getElementById('error-message').style.display = 'block';
        return false;
    }
    if (!hasNumber.test(password)) {
        document.getElementById('error-message').textContent = 'Password must contain at least one number.';
        document.getElementById('error-message').style.display = 'block';
        return false;
    }


    if (!hasSpecialChar.test(password)) {
        document.getElementById('error-message').textContent = 'Password must contain at least one special character.';
        document.getElementById('error-message').style.display = 'block';
        return false;
    }

    document.getElementById('error-message').style.display = 'none';
    alert(`Password created: ${password}`);
    return true;
}
