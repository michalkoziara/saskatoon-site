var emailTitle = document.getElementsByName('_subject')[0];
var nameInput = document.getElementById('name');

// Ustawia temat maila
nameInput.onblur = function() {
    emailTitle.setAttribute('value', "Sadzonki - wiadomość od "+nameInput.value);
};


// Waliduje pole formularza
function sprawdzPole(pole_id,obiektRegex) {
    var obiektPole = document.getElementById(pole_id);

    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
}

function sprawdz()
{
    var ok=true;
    obiektNazw = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,}\s[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,}$/; //wyrażenie regularne dla imienia i nazwiska
    obiektEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/; //wyrażenie regularne dla emaila
    obiektTelefon = /^[0-9]{9}$/;

    if (!sprawdzPole("name",obiektNazw))
        ok=false;
    else document.getElementsByClassName("invalid-feedback")[0].innerHTML="";

    if (!sprawdzPole("email",obiektEmail))
        ok=false;
    else document.getElementsByClassName("invalid-feedback")[1].innerHTML="";

    if (!sprawdzPole("phone",obiektTelefon))
        ok=false;
    else document.getElementsByClassName("invalid-feedback")[2].innerHTML="";

    return ok;
}
