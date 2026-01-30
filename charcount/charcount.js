const textArea = document.getElementById("textarea");
const totalChar = document.getElementById("total-char");
const remainingchar = document.getElementById("remaining-char");
const body = document.querySelector("body")
textArea.addEventListener("keyup", () => {
    updateCounter()
})
// updateCounter()
function updateCounter(){
    totalChar.innerText = textArea.value.length
    remainingchar.innerText = textArea.getAttribute("maxLength") - textArea.value.length
}


