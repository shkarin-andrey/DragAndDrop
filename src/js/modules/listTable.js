const listTable = () => {
  const modal = document.querySelector(".modal"),
    modalBtn = modal.querySelector(".btn"),
    modalTitle = modal.querySelector(".title"),
    updateBtn = document.querySelectorAll(".update"),
    form = modal.querySelector("form");

  updateBtn.forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.parentElement.dataset.id;

      modal.classList.remove("hidden");
      modalTitle.textContent = "Измениение цвета";
      modalBtn.textContent = "Изменить";
      modal.dataset.update = true;
      window.localStorage.setItem("updateId", id);

      const state = JSON.parse(window.localStorage.getItem("table"));
      const thisElement = state.filter((x) => x.id === id);

      form[0].value = thisElement[0].name;
      form[1].value = thisElement[0].type;
      form[2].value = thisElement[0].color;
    });
  });
};

export default listTable;
