//DZ 1 -1
const gmailInput = document.getElementById("gmail_input");
const gmailButton = document.getElementById("gmail_button");
const gmailResult = document.getElementById("gmail_result");

const RegPerson = /[a-zA-Z0-9_%+-]+([a-zA-Z]@gmail.com)$/;

gmailButton.onclick = () => {
    if (RegPerson.test(gmailInput.value)){
        gmailResult.innerHTML = 'Success'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'No'
        gmailResult.style.color = 'Red'
    }

}
//DZ 1-2

let counter = 0
function moveblock (){
    const child = document.querySelector('.child_block')
    child.style.left = `${counter}px`
    counter++
    if(counter <= 448) {
        requestAnimationFrame(moveblock)
    }
}

moveblock()