const characterId = document.getElementById("characterID");
const btnGO = document.getElementById("btn-go");
const content = document.getElementById("content");
const img = document.getElementById("img");

const fetchApi = (value) => {
  const result = fetch(`
  https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
      //  const { status: vivo, name: nome } = data
       console.log(data);
      // return data
      //  console.log(`meu mome é ${nome} e eu ainda estou ${vivo}`)
      return data;
    });
  return result;
};


btnGO.addEventListener("click", async (event) => {
  event.preventDefault();
  const result = await fetchApi(characterId.value);
  content.textContent = `${JSON.stringify(result,undefined,2)}`
  img.src = `${result.image}`
});
