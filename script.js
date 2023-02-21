const characterId = document.getElementById("characterId");
const btnGO = document.getElementById("btn-go");
const content = document.getElementById("content");
const img = document.getElementById("img");

const fetchApi = (value) => {
  const result = fetch(`
  https://rickandmortyapi.com/api/character/${value}`
  )
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)
  });
//   console.log(result);
};

fetchApi(10);

btnGO.addEventListener("click", () => {

});
