var emailTitle = document.getElementsByName('_subject')[0];
var nameInput = document.getElementById('name');

// Ustawia temat maila
nameInput.onblur = function() {
    emailTitle.setAttribute('value', "Sadzonki - wiadomość od "+nameInput.value);
};


// Waliduje pole formularza
function sprawdzPole(pole_id,obiektRegex) {
    var obiektPole = document.getElementById(pole_id);

    console.log(obiektPole.value);
    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
}

var iframe = document.getElementsByTagName("iframe")[0];
iframe.scrolling="no";

var
    email = document.getElementById("email"),
    phone = document.getElementById("phone");

function sprawdz()
{
    var ok=true;
    obiektNazw = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,}\s[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,}$/; //wyrażenie regularne dla imienia i nazwiska
    obiektEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; //wyrażenie regularne dla emaila
    obiektTelefon = /^[0-9]{9}$/;

    if (!sprawdzPole("name",obiektNazw))
    {
        ok=false;
        document.getElementsByClassName("invalid-data")[0].innerHTML="Wprowadź poprawne dane!";
    }
    else document.getElementsByClassName("invalid-data")[0].innerHTML="";

    if (!sprawdzPole("email",obiektEmail))
    {
        ok=false;
        document.getElementsByClassName("invalid-data")[2].innerHTML="Wprowadź poprawne dane!";
    }
    else document.getElementsByClassName("invalid-data")[2].innerHTML="";

    if (!sprawdzPole("phone",obiektTelefon))
    {
        ok=false;
        document.getElementsByClassName("invalid-data")[1].innerHTML="Wprowadź poprawne dane!";
    }
    else document.getElementsByClassName("invalid-data")[1].innerHTML="";

    if(ok)
    {
        localStorage.setItem('imie_nazwisko',nameInput.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('phone',phone.value);
    }

    return ok;
}
nameInput.value = localStorage.getItem('imie_nazwisko');
email.value = localStorage.getItem('email');
phone.value = localStorage.getItem('phone');