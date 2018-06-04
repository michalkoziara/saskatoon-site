var modal;

// Przyciski otwierające modal
var btnThies = document.getElementById("myBtnThiessen");
var btnSmoky = document.getElementById("myBtnSmoky");
var btnVine = document.getElementById("myBtnVine");

// Weź <span> który zamyka modal
var span = document.getElementsByClassName("text-right close");

// Kiedy użytkownik kliknie przycisk otwórz modal
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
// Kiedy użytkownik kliknie <span> (x), zamknij modal
function spanClick() {
    modal.style.display = "none";
};

// Kiedy użytkownik kliknie poza modalem, zamknij modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

