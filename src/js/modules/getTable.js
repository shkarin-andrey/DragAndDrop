import { updateSvg, deleteSvg } from "../assets/svg";
import deleteTable from "./deleteTable";
import dndTable from "./dndTable";
import listTable from "./listTable";

const getTable = () => {
  const tbody = document.querySelector("tbody");
  const state = JSON.parse(window.localStorage.getItem("table"));

  tbody.innerHTML = "";

  state.forEach((item) => {
    const rowTable = document.createElement("tr");

    rowTable.dataset.id = item.id;
    rowTable.draggable = true;
    rowTable.innerHTML = `
        <td>
            <div style="background:${item.color}" class="table-color"></div>    
        </td>
        <td>${item.name}</td>
        <td>${item.type}</td>
        <td>${item.color}</td>
        <td class="update">${updateSvg}</td>
        <td class="delete">${deleteSvg}</td>
    `;
    tbody.appendChild(rowTable);
  });

  dndTable();
  listTable();
  deleteTable();
};

export default getTable;
