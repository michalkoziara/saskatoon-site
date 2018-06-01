// Get the modal
var modal;

// Get the button that opens the modal
var btnThies = document.getElementById("myBtnThiessen");
var btnSmoky = document.getElementById("myBtnSmoky");
var btnVine = document.getElementById("myBtnVine");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("text-right close");

// When the user clicks the button, open the modal 
btnThies.onclick = function() {
    modal = document.getElementById('myModalThies');
    modal.style.display = "block";
};

btnSmoky.onclick = function() {
    
    modal = document.getElementById('myModalSmoky');
    modal.style.display = "block";
};

btnVine.onclick = function() {
    
    modal = document.getElementById('myModalVine');
    modal.style.display = "block";
};

for (i = 0, len = span.length; i < len; i++){
    span[i].onclick = spanClick;
}
// When the user clicks on <span> (x), close the modal
function spanClick() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

