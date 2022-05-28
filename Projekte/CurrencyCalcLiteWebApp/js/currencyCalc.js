var g_currencyValIn = "0";
var g_currencyValOut = "0";
var g_maxSize = 14;
var g_nachkommastellen = 2;

function InitializeCurrencyCombobox() {

var combobox = document.getElementById("ComboboxDropdown");
combobox.innerHTML = "";

// <div class="ComboboxItem I" onclick="SelectCmbItem(this); calc();" currencyShort="EUR">
//	<img src="./img/svgs/01. Flag_of_Europe.svg" />
//	<p>Euro</p>
// 	<p class="cmbTextWaehrungRechts">€</div>
//combobox.appendChild()
var currencyKeys = Object.keys(currencyDict);
  for(var i = 0; i < currencyKeys.length; i++) {
      var newCombobox = document.createElement("div");  
    var newComboboxImg = document.createElement("img");
    var newComboboxCurrencyName = document.createElement("p");
    var newComboboxCurrencyShort = document.createElement("p");
    
    newCombobox.setAttribute("class", "ComboboxItem I");
    newCombobox.setAttribute("onclick", "SelectCmbItem(this); CalcCurrencies();");
    newCombobox.setAttribute("currencyShort", currencyKeys[i]);
    newComboboxImg.setAttribute("src", "./img/svgs/" + currencyDict[currencyKeys[i]][3]);
    newComboboxCurrencyName.textContent = currencyDict[currencyKeys[i]][1];
    newComboboxCurrencyShort.textContent = currencyDict[currencyKeys[i]][2];
    newComboboxCurrencyShort.setAttribute("class", "cmbTextWaehrungRechts");
    
      newCombobox.appendChild(newComboboxImg);
    newCombobox.appendChild(newComboboxCurrencyName);
    newCombobox.appendChild(newComboboxCurrencyShort);
    combobox.appendChild(newCombobox);
  }
}

function SetCurrencyValIn(clickedElement, newVal) {

  if([".", "R", "Del"].includes(newVal)) {
    if(newVal == "R") {
      g_currencyValIn = "0";
    }
    else if(newVal == "Del") {
      if(g_currencyValIn.length > 1) {
        g_currencyValIn = g_currencyValIn.substr(0, g_currencyValIn.length -1);
      }
      else {
        g_currencyValIn = "0"
      }
    }
    else if(newVal == ".") {
      if(!g_currencyValIn.includes(".")) {
        g_currencyValIn += "."
      }
    }
  }
  else {
    if (g_currencyValIn == "0") {

      if(newVal.replaceAll("0", "") != "")
        g_currencyValIn = "" + newVal;
    }
    else {
        if (g_currencyValIn.length + newVal.length > g_maxSize)
          return;
      g_currencyValIn += newVal; 
    }
  }

  document.getElementById("lblWertIn").textContent = g_currencyValIn;
  
  // btnClick anzeigen
  try {
    var clickedId = clickedElement.getAttribute("id");
    console.log(clickedId);
    var btnId = clickedId.match("btn[A-Z0-9][0-9a-z]*")[0];
    ShowClickEffect(btnId);
  }
  catch {}

  CalcCurrencies();
}


function ShowClickEffect(targetId) {
  var el = document.getElementById(targetId)

  // Node muss gecloned werden, damit Klick-Effekt wieder angezeigt wird
  // Da "cloneNode" nicht die Eventhandler mitkopiert, muessen diese manuell wieder hinzugefuegt werden.
  // Dies geschieht via eval(...)
  var elCloned = el.cloneNode(true);
  elCloned.classList.add("KlickEffekt"); 
  el.parentNode.replaceChild(elCloned, el);
  eval(eventHandlerDict[targetId]);

}

function Swap() {
  ShowClickEffect("btnTauschen");

  var g_currencyInOld = g_currencyIn;
  var g_currencyOutOld = g_currencyOut;
  SetCurrencyIn(g_currencyOutOld);
  SetCurrencyOut(g_currencyInOld);

  CalcCurrencies();
}

function CalcCurrencies() {
  g_currencyValOut = Number(g_currencyValIn) / currencyDict[g_currencyIn][4] * currencyDict[g_currencyOut][4];
  var result = g_currencyValOut.toFixed(g_nachkommastellen); // auf anzahl nachkommastellen runden

  if(String(result).length > g_maxSize) {
    result = "Error";
  }
  
  document.getElementById("lblWertOut").textContent = result;
}
