const btn = document.getElementById('kechki');

btn.addEventListener("click", () => {
 
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black"; 
    btn.textContent = "🌙"; 

    const container = document.querySelector('.container');
    container.style.backgroundColor = "white";
    container.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.color = "white";
    btn.textContent = "☀️";
    const container = document.querySelector('.container');
    container.style.backgroundColor = "black";
    container.style.color = "white";
  }
});