//getting ids of the elements
const inputBtn = document.querySelector("#input-btn");
const searchBar = document.querySelector("#input");
const resultContainer = document.querySelector("#result");

//event listener for the button
inputBtn.addEventListener("click", () => {
  const getPoem = async () => {
    try {
      const poemUrl = `https://poetrydb.org/title/${searchBar.value}/lines.json`;
      const poemData = await fetch(poemUrl);
      const response = await poemData.json();
      Promise.resolve(response);
      return response;
    } catch (err) {
      console.log(err);
      resultContainer.innerHTML = `<h1 class="error-msg>oops, something went wrong :(</h1>`;
      Promise.reject(err);
    }
  };

  getPoem().then((data) => {
    resultContainer.innerHTML = "";
    try {
      data.forEach((index) => {
        let poemElement = `<h2 class="para">Para</h2>
        <p class="poem">${index.lines}</p>`;

        resultContainer.innerHTML += poemElement;
        document.querySelector("#footer").style.display = "block";
      });
    } catch (err) {
      resultContainer.innerHTML = `<h2 class="error-msg">the poem you searched does not exist in our Databse :(</h2>`;
      console.log(err);
    }
  });
});
