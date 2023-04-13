import senators from "./assets/data/senators.json";

const inputFilterEl = document.getElementById("filter");

const senatorsNames = senators.objects.map((senator) => senator.person.name);
console.log(senatorsNames);

const buildSenatorsList = (data) => {
  const senatorsEl = document.getElementById("senators");

  const senatorsItems = data.map((item) => `<li>${item}</li>`);
  senatorsEl.innerHTML = senatorsItems.join("");
};

buildSenatorsList(senatorsNames);

inputFilterEl.addEventListener("input", (event) => {
  const text = event.currentTarget.value;

  const filteredNames = senatorsNames.filter((name) => {
    return name.toLowerCase().includes(text.toLowerCase());
  });
  buildSenatorsList(filteredNames);
});
