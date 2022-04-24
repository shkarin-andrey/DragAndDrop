import { v4 as uuidv4 } from "uuid";

const createTable = () => {
  const form = document.querySelector("form");
  const state = JSON.parse(window.localStorage.getItem("table"));

  const formData = {
    id: uuidv4(),
    name: form[0].value,
    type: form[1].value,
    color: form[2].value.toUpperCase(),
  };

  state.push(formData);
  window.localStorage.setItem("table", JSON.stringify(state));
  console.log("create");
};

export default createTable;
