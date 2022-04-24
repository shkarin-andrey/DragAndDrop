const modalForm = () => {
  const btn = document.querySelector(".js-open"),
    modal = document.querySelector(".modal"),
    modalBtn = modal.querySelector(".btn"),
    close = modal.querySelector(".close"),
    modalTitle = modal.querySelector(".title"),
    form = modal.querySelector("form");

  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalTitle.textContent = "Добавление цвета";
    modalBtn.textContent = "Добавить";
    modal.dataset.update = false;

    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
};

export default modalForm;
