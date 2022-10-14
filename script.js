function talk(){
    var know={
        "Hi": "Hello",
        "Who are you?": "Your Chatbot here",
        "How are you?": "I am fine",
        "ok": "Thank you so much",
        "Bye": "Okay!I will meet you soon..",
    };
    var user=document.getElementById("search-bar").value;
    document.getElementById("answer").innerHTML= user+"<br>";

    if(user in know)
    {
        document.getElementById("answer").innerHTML=know[user]+"<br>";
    }
    else
    {
        document.getElementById("answer").innerHTML="Sorry, I don't understand";
    }
}
