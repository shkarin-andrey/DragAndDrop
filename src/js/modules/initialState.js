const initialState = () => {
  const mockDB = [
    {
      id: "1",
      name: "Мятное утро",
      type: "base",
      color: "#86EAE9",
    },
    {
      name: "Тест",
      type: "main",
      color: "#00F030",
      id: "s0MNBD8",
    },
  ];

  window.localStorage.setItem("table", JSON.stringify(mockDB));
};
export default initialState;
