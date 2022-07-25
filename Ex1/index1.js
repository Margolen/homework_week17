function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let submit = document.querySelector('button');
submit.addEventListener('click', () => {
    let username = document.getElementById('username');
    let array = username.value.split(' ').filter((x) => x != '').map((x) => x.toLowerCase()).map(capitalizeFirstLetter);
    console.log(array);
    if (array.length !== 3) {
        alert('Введите ФИО полностью!');
    } else {
        alert(array.join(' '));
    }
});