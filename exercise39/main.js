const button = document.querySelector("button");
const fromInput = document.querySelector("#somali");
const toInput = document.querySelector("#engilish");
const textInput = document.querySelector("#text");
const resultDiv = document.querySelector(".tanslate");

// https://developers.google.com/workspace/admin/directory/v1/languages

button.addEventListener("click", translateText);

async function translateText() {

    const from = fromInput.value.trim();
    const to = toInput.value.trim();
    const text = textInput.value.trim();

    if (!from || !to || !text) {
        alert("Fadlan dhammaan meelaha buuxi");
        return;
    }

  const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": 'fe7de5b27fmsh7b8166eb6d0e168p11e3d9jsn0c24e2d322e6',
            "X-RapidAPI-Host": 'google-translate113.p.rapidapi.com',
        },
        body: JSON.stringify({
            from: from,
            to: to,
            text: text
        })
    };

    try {
        const response = await fetch(url, options);
        console.log(response)
        const data = await response.json();
        console.log(data)


        
        resultDiv.innerHTML = `<strong>Result:</strong> ${data.trans}`;

    } catch (error) {
        resultDiv.innerHTML = "waa qalad saxip";
        console.error(error);
    }
}

