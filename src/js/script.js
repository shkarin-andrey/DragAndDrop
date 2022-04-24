import "../scss/style.scss";
import initialState from "./modules/initialState";
import modalForm from "./modules/modalForm";
import getTable from "./modules/getTable";

import createTable from "./modules/createTable";
import updateTable from "./modules/updateTable";
// import deleteTable from "./modules/deleteTable";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const modal = document.querySelector(".modal");

  initialState();
  getTable();
  modalForm();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (modal.dataset.update === "false") {
      createTable();
    } else {
      updateTable();
    }

    getTable();
    modal.classList.add("hidden");
    form.reset();
  });

  // deleteTable();
});
