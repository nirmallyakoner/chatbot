function talk() {
    let know = {
        "Hi": "Hello",
        "Who are you?": "Your Chatbot here",
        "How are you?": "I am fine",
        "ok": "Thank you so much",
        "Bye": "Okay!I will meet you soon..",
    };
    let user = document.getElementById("search-bar").value;
    document.getElementById("answer").innerHTML = user + "<br>";

    if (user in know) {
        document.getElementById("answer").innerHTML = know[user] + "<br>";
    }
    else {
        document.getElementById("answer").innerHTML = "Sorry, I don't understand";
    }
}



function getJoke() {
    // Array of jokes or fun facts
    let jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
        "Did you know that the average person laughs about 10 times a day? Let's increase that with a good joke!",
        // Add more jokes or fun facts here
    ];

    // Get a random joke from the array
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Display the joke in the answer section
    document.getElementById("answer").innerHTML = randomJoke + "<br>";
}

