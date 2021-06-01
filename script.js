
const init = function () {
    document.querySelector('.hamburgerMenu').classList.add('hide');


}
init();
document.querySelector('body').addEventListener('click', function (e) {
    console.log(e);
    if (e.target.nodeName === 'INPUT') {
        document.querySelector('.hamburgerMenu').classList.toggle('hide');
    }

});


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    let comment = document.createElement('div');
    if (document.querySelector('textArea').value !== '' && document.querySelector('input#full-name').value !== '') {
        const commentMessage = document.querySelector('textArea').value;
        const name = document.querySelector('input#full-name').value

        comment.classList.add('comment1');

        comment.style.width = '100%';
        const date = new Date();
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        comment.innerHTML = `<img src="./images/comment-image2.jpg"alt="user profile picture of two zerbras with greenery in background"><div><p class="boldText">${(date.getDay() === 0) ? "Sunday" : (date.getDay() === 1) ? "Monday" : (date.getDay() === 2) ? "Tuesday" : (date.getDay() === 3) ? "Wednesday" : (date.getDay() === 4) ? "Thursday" : (date.getDay() === 5) ? "Friday" : "Saturday"} ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} by ${name}</p><p>${commentMessage}</p></div>`;

        var list = document.querySelector(".comment-section");

        list.insertBefore(comment, list.childNodes[3]);

    };



    document.querySelector('textArea').value = '';
    document.querySelector('input#full-name').value = '';
    document.querySelector('input#email').value = '';






});


// document.querySelector('.sidebarIconToggle').addEventListener('click', function () {
//     document.querySelector('.hamburgerMenu').classList.toggle('hide');

// });