//namespace
const app = {};



//run once the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {

    app.init = function () { //init function
        document.querySelector('.hamburgerMenu').classList.add('hide');
        app.addPageListeners();
    }

    //function used to add listeners to the page
    app.addPageListeners = function () {
        //add listener to the body
        document.querySelector('body').addEventListener('click', function (e) {
            //if target has nodeName of input and type of checkbox toggle hide
            if (e.target.nodeName === 'INPUT' && e.target.type === 'checkbox') {
                document.querySelector('.hamburgerMenu').classList.toggle('hide');
            }

        });

        //if the current page is the blog page
        if (document.URL.includes("blog")) {
            //add event listener on the form
            document.querySelector('form').addEventListener('submit', function (e) {
                e.preventDefault() //remove the reload page default

                if (document.querySelector('textArea').value !== '' && document.querySelector('input#full-name').value !== '') { //if message and name box are not empty
                    const comment = document.createElement('div'); //create empty div element
                    const commentMessage = document.querySelector('textArea').value; //get value from message box
                    const name = document.querySelector('input#full-name').value //get value from name box

                    comment.classList.add('comment1'); //add class to the created div

                    comment.style.width = '100%'; //change width of created div to 100%
                    const date = new Date(); //create new date object

                    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //array object used to convert the date.getMonth() into word form. 

                    comment.innerHTML = `<img src="./images/comment-image2.jpg"alt="user profile picture of two zebras with greenery in background"><div><p class="boldText">${(date.getDay() === 0) ? "Sunday" : (date.getDay() === 1) ? "Monday" : (date.getDay() === 2) ? "Tuesday" : (date.getDay() === 3) ? "Wednesday" : (date.getDay() === 4) ? "Thursday" : (date.getDay() === 5) ? "Friday" : "Saturday"} ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} by ${name}</p><p>${commentMessage}</p></div>`;

                    //the inner html of the comment is changed to include an img and another div that contains two p elements. The first p element has class of boldText and is used for the date and name and the second p element is used to show the message. The date day of the week is added using a ternary operator and the month is added using the array we created and the index is chosen by using date.getMonth() and the date and year are added using the appropriate date methods. 

                    //get the comment section
                    var commentSection = document.querySelector(".comment-section");
                    //add comment before the commentSection 2nd child node. 
                    commentSection.insertBefore(comment, commentSection.childNodes[2]);


                };

                //empty the values inside the form
                document.querySelector('textArea').value = '';
                document.querySelector('input#full-name').value = '';
                document.querySelector('input#email').value = '';

            });
        }
    }

    //call the init function
    app.init();
});