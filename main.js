const form = document.getElementById("form");
const form_b = document.getElementById("form_b")
const main = document.getElementById("main")
const complished = document.getElementById("complished")
const button = document.getElementById("submit")
const buttonb = document.getElementById("submit")

function Onmount(){
    if(localStorage.getItem("complished") === "true"){
        main.style.display = "none"
        complished.style.display = "flex"
    }
}

//Onmount()

function handleForm(event) { 
    event.preventDefault(); 

    button.innerHTML = 'Patientez...';

    const name = document.getElementById("input_name").value
    const prenom = document.getElementById("input_prenom").value
    const mail = document.getElementById("input_mail").value
    const sexe = document.getElementById("input_sexe").value
    const age = document.getElementById("input_age").value

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer key1knTuZ7MwzCLsY");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "brw=brwwHT6INJ9ksGpYp; AWSALB=AOBoyZv++4HGaV30P1PmRIaUBxobwGIFA6tEPTgCCnRGObuyfNP8UnZHF1OAxpknVPUidmw7bc+4yRKqtiyhbqdC+stjO7sBhXDgQBYVp+7Mr6XWKcNp8MvJlccJ; AWSALBCORS=AOBoyZv++4HGaV30P1PmRIaUBxobwGIFA6tEPTgCCnRGObuyfNP8UnZHF1OAxpknVPUidmw7bc+4yRKqtiyhbqdC+stjO7sBhXDgQBYVp+7Mr6XWKcNp8MvJlccJ");

    var raw = JSON.stringify({
    "records": [{
        "fields": {
            "Nom": name,
            "Prenom": prenom,
            "Adresse_mail": mail,
            "Sexe": sexe,
            "Age": age
        }
        }]
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://api.airtable.com/v0/appJzYfevQHNz6cRZ/Inscription_LP", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result.records)
        changeForm()
    })
    .catch(error => console.log('error', error));
} 

function changeForm(){
    form.style.display = "none"
    form_b.style.display = "flex"
}


function handleFormb(event) { 
    event.preventDefault(); 

    buttonb.innerHTML = 'Patientez...';

    const q1 = document.getElementById("input_question_1").value
    const q2 = document.getElementById("input_question_2").value
    const q3 = document.getElementById("input_question_3").value
    const q4 = document.getElementById("input_question_4").value
    const q5 = document.getElementById("input_question_5").value
    const q6 = document.getElementById("input_question_6").value

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer key1knTuZ7MwzCLsY");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "brw=brwwHT6INJ9ksGpYp; AWSALB=AOBoyZv++4HGaV30P1PmRIaUBxobwGIFA6tEPTgCCnRGObuyfNP8UnZHF1OAxpknVPUidmw7bc+4yRKqtiyhbqdC+stjO7sBhXDgQBYVp+7Mr6XWKcNp8MvJlccJ; AWSALBCORS=AOBoyZv++4HGaV30P1PmRIaUBxobwGIFA6tEPTgCCnRGObuyfNP8UnZHF1OAxpknVPUidmw7bc+4yRKqtiyhbqdC+stjO7sBhXDgQBYVp+7Mr6XWKcNp8MvJlccJ");

    var raw = JSON.stringify({
    "records": [{
        "fields": {
            "Question_1": q1,
            "Question_2": q2,
            "Question_3": q3,
            "Question_4": q4,
            "Question_5": q5,
            "Question_6": q6,
        }
        }]
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://api.airtable.com/v0/appJzYfevQHNz6cRZ/Questionnaire", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result.records)
        localStorage.setItem("complished", true)
        Onmount()
    })
    .catch(error => console.log('error', error));
} 

form.addEventListener('submit', handleForm);
form_b.addEventListener('submit', handleFormb);
