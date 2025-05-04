const visiblepass = document.getElementById('pass-view');
const eyeopen = document.querySelector('.open');
const eyeclose = document.querySelector('.close');
const passwd = document.querySelector('.password')

visiblepass.addEventListener('change', function() {
    if (visiblepass.checked) {
        eyeopen.classList.add('eyes-open');
        eyeclose.classList.add('eyes-close');
        passwd.type = "text";

    } else {
        eyeopen.classList.remove('eyes-open');
        eyeclose.classList.remove('eyes-close');
        passwd.type = "password";

    }
});