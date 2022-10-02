var menuItem = 0;
const sideButton = () => {
  let getSubDiv = document.getElementById("getSubDiv");
  let sidebar_Btn = document.getElementById("sidebar_Btn");
  //   console.log(getSubDiv);

  if (menuItem === 0) {
    menuItem = 1;
    getSubDiv.style.visibility = "visible";
    getSubDiv.style.width = "285px";
    getSubDiv.style.right = "20px";
    getSubDiv.style.display = "block";

    sidebar_Btn.style.right = "-248px";
  } else {
    menuItem = 0;
    getSubDiv.style.width = "0px";
    getSubDiv.style.right = "20px";
    sidebar_Btn.style.right = "-532px";
    getSubDiv.style.display = "none";
  }
};
