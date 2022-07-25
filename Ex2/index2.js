const message = document.getElementById('chat');
message.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = checkSpam(message.value);

        document.body.appendChild(newDiv);
        message.value = '';
    }
});

const badWords = [
    'viagra',
    'xxx',
];

function checkSpam(str) {
    let result = str.split(' ').map(function (elem) {
        let small = elem.toLowerCase();
        if (badWords.includes(small)) {
            return '***';
        } else {
            return elem;
        }
    }).join(' ');

    return result;
}