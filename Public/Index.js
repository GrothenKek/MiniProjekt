const jokesDiv = document.getElementById("jokes");
const jokeInput = document.getElementById("joke");



// app data

const getJokes = async () => {
    const jokes = await fetch("/jokes");
    return await jokes.json();
};

const sendJoke = async(Setup, Punchline)=>{
    let newJoke = await fetch("/jokes",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            Setup: Setup,
            Punchline: Punchline,
        }),
    });
}