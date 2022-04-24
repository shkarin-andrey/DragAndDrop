const updateTable = () => {
  const form = document.querySelector("form");
  const state = JSON.parse(window.localStorage.getItem("table"));
  const id = window.localStorage.getItem("updateId");

  const idx = state.findIndex((x) => x.id === id);

  const formData = {
    id: window.localStorage.getItem("updateId"),
    name: form[0].value,
    type: form[1].value,
    color: form[2].value.toUpperCase(),
  };
  state[idx] = formData;
  window.localStorage.setItem("table", JSON.stringify(state));
  console.log("update");
};

export default updateTable;
