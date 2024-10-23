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
