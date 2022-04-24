import getTable from "./getTable";

const deleteTable = () => {
  const del = document.querySelectorAll(".delete");
  del.forEach((item) => {
    item.addEventListener("click", () => {
      const state = JSON.parse(window.localStorage.getItem("table"));
      const id = item.parentElement.dataset.id;

      const deleteItem = state.filter((x) => x.id !== id);
      window.localStorage.setItem("table", JSON.stringify(deleteItem));
      getTable();
      console.log("delete");
    });
  });
};

export default deleteTable;
