function check() {
        const inputList = document.getElementsByClassName('inputs');
        const element = document.getElementById('alert');

        element.style.visibility = 'hidden';

        if (inputList[0].value === "") {
                element.style.visibility = 'visible';
                document.getElementById("text").innerHTML = "Insert email";
        } else if (inputList[1].value === "") {
                element.style.visibility = 'visible';
                document.getElementById("text").innerHTML = "Insert Password";
        }
}