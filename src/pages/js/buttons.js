
const button = document.getElementById("btn1");
const sidebar = document.getElementById("sidebar")
const button2 = document.getElementById("btn2")

button.addEventListener("click", () => {
  sidebar.showModal()
})

button2.addEventListener("click", () =>{
  sidebar.close()
})