

// soo qapasho
const colorPicker = document.getElementById("colorpicker");
const colorPreview = document.getElementById("colorPreview");
const colorHistory = document.getElementById("colorHistory");
const clearBtn = document.getElementById("clearHistory");

// array 
let savedColors = [];

colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;

  
  colorPreview.style.backgroundColor = selectedColor;


  
  if (savedColors.includes(selectedColor)) {
    return; 
  }

  savedColors.push(selectedColor);


  const li = document.createElement("li");

  //  value-ga color-ka
  li.textContent = selectedColor;

  li.style.color = selectedColor;

  
  colorHistory.appendChild(li);
});

clearBtn.addEventListener("click", function () {
  colorHistory.innerHTML = "";

  
  savedColors = [];

  colorPreview.style.backgroundColor = "transparent";
  colorPreview.textContent = "color preview";
});
