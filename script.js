let failedAttempts = 0;
let isLocked = false;

function checkPassword() {
    const enteredPassword = document.getElementById('password').value;
    const correctPassword = 'ABCdef123,.-';

    if (isLocked) {
        alert('Account ist gesperrt. Bitte versuchen Sie es später erneut.');
        return false;
    }

    if (enteredPassword === correctPassword) {
        alert('Login erfolgreich!');
        failedAttempts = 0;
        return true;
    } else {
        failedAttempts++;
        document.getElementById('error-message').style.display = 'block';

        if (failedAttempts >= 5) {
            isLocked = true;
            alert('Zu viele falsche Versuche. Account gesperrt.');
            setTimeout(() => {
                isLocked = false;
                failedAttempts = 0;
            }, 30000);
        } else {
            const waitTime = Math.pow(2, failedAttempts - 1) * 1000;
            alert(`Falsches Passwort. Bitte warten Sie ${waitTime / 1000} Sekunden, bevor Sie es erneut versuchen.`);
            setTimeout(() => {
                document.getElementById('password').value = '';
            }, waitTime);
        }
        return false;
    }
}



function validatePassword() {
    const password = document.querySelector('.login-form input[type="password"]').value;
    const minLength = 8;
    const maxLength = 16;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength || password.length > maxLength) {
        alert(`Das Passwort muss zwischen ${minLength} und ${maxLength} Zeichen lang sein.`);
        return false;
    }

    if (!hasUpperCase || !hasLowerCase || !hasSpecialChar) {
        alert("Das Passwort muss Groß- und Kleinbuchstaben sowie ein Sonderzeichen enthalten.");
        return false;
    }

    else{
        alert(`Das Passwort: "${password}" wurde erstellt.`);
    }
    return true;
}
