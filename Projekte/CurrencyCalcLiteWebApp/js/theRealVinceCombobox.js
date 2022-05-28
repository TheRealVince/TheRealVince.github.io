var g_currencyIn = "USD"
var g_currencyOut = "EUR"
var g_lastSelectedCombobox = "";
var g_comboboxFilterString = "";

// Klassen- & Funktionsdefinitionen
function InitializeCombobox() {
    InitializeCloseComboboxEventhandler();
    SelectCmbItem(document.querySelectorAll(".ComboboxItem")[1]);

    // Combobox-Click-Eventhandler (erstes item skippen da Auswahl)
    // Wird nun manuell im Code gesetzt, da bessere Lesbarkeit bei Aufruf von 2 verschiedenen Click-Funktionen 
    /*
    var elemente = document.getElementsByClassName("ComboboxItem");
    for(var i = 1; i < elemente.length; i++) {
      elemente[i].onclick = function() { SelectCmbItem(this); };
    } */
}

function InitializeCloseComboboxEventhandler() {
  targetDiv = document.getElementById("Combobox");
  auswahl = document.getElementById("txtAuswahl");

  document.addEventListener('click', function(event) {
    var isClickInsideCombobox = targetDiv.contains(event.target);

    if (!isClickInsideCombobox) {
        HideComboboxDropdown(event);
    }});
}

function ShowComboboxAtPosition(x, y, maxHeight, itemHeight, itemWidth, closeCombobox, relocate = 0) {


  ComboboxDropdown.setAttribute("style", "position: fixed; left: " + x + "px !important; top: " + y + "px !important; max-height: " + maxHeight + "px !important;"); 


  // Items in Combobox reseten
  document.querySelectorAll(".ComboboxItem").forEach(ci => ci.className = "ComboboxItem I");
var comboboxItems = document.getElementsByClassName("ComboboxItem");
for(var i = 0; i < comboboxItems.length; i++) {
  
  comboboxItems[i].setAttribute("style", "width: " + itemWidth + "px; height: " + itemHeight + "px; ");

  // Selektiertes Item in Combobox verstecken
  if((g_lastSelectedCombobox == "In" && comboboxItems[i].getAttribute("currencyShort") == g_currencyIn) ||
     (g_lastSelectedCombobox == "Out" && comboboxItems[i].getAttribute("currencyShort") == g_currencyOut)) {
        comboboxItems[i].className = "ComboboxItem O";
  }
}

  var comboboxItemFlagSize = itemHeight * 0.97;
  var root = document.documentElement;
  root.style.setProperty('--comboboxMaxFlagImgSize', "" + comboboxItemFlagSize + "px");


  if(document.getElementById("ComboboxDropdown").className == "I" && closeCombobox) {
       document.getElementById("ComboboxDropdown").className = "O" // nach 2tem draufdrucken verstecken
  }
  else if(document.getElementById("ComboboxDropdown").className == "O" && relocate == 1) {
    // nichts tun
  }
  else {
    document.getElementById("ComboboxDropdown").className = "I";
  }    

// Wegen Firefox-Bug redrawing des Layouts forcieren
// https://stackoverflow.com/a/366646
document.body.style.display = 'none';
document.body.style.display = 'block';


}

// Denk daran es gibt 2 Klick-Eventhandler
// 1. Klick auf Pfeil Button um Dropdown zu oeffnen
// 2. Klick auf Dropdown-Element
function ShowComboboxDropdown(targetObj, relocate = 0) {
  console.log(g_lastSelectedCombobox);
  // Scroll-Position der Combobox zuruecksetzen
  document.getElementById("ComboboxDropdown").scrollTo(0, 0);

  var InArr = ["btnDropdownIn", "txtIn"];
  var OutArr = ["btnDropdownOut", "txtOut"];

  var closeCombobox = 0;

  // StartKoordinaten, hoehe und breite von aktuellem Element ermitteln
  if(targetObj == "In") { // Bei erster Box anzeigen
    if(relocate != 1)
      ShowClickEffect("btnDropdownIn");

    if (g_lastSelectedCombobox == "In" && relocate == 0)
      closeCombobox = 1;


    var currencyBoxButton = document.getElementById("btnDropdownIn")
    var currencyBox = document.getElementById("txtIn")
    g_lastSelectedCombobox = "In";
  }
  else if(targetObj == "Out") { // Bei zweiter Box anzeigen
    if(relocate != 1)
      ShowClickEffect("btnDropdownOut");

    if (g_lastSelectedCombobox == "Out" && relocate == 0)
      closeCombobox = 1;

    var currencyBoxButton = document.getElementById("btnDropdownOut")
    var currencyBox = document.getElementById("txtOut")
    g_lastSelectedCombobox = "Out";
  }

  // Combobox-Location & -Proportionen setzen // muss auch bei Resize geaendert werden!!!
  if(currencyBoxButton != undefined) {
    var locationOfCurrencyBoxButton = currencyBoxButton.getBoundingClientRect();
    var locationOfCurrencyBox = currencyBox.getBoundingClientRect();

    // Item-Proportionen setzen
    var newWidth = locationOfCurrencyBoxButton.left - locationOfCurrencyBox.left;
    var newHeight = locationOfCurrencyBox.bottom - locationOfCurrencyBox.top;
    newHeight = newHeight - (newHeight * 0.2); // 20 % wenige
    var maxHeight = 5.8 * newHeight;

    ShowComboboxAtPosition(locationOfCurrencyBox.left, locationOfCurrencyBox.bottom, maxHeight, newHeight, newWidth, closeCombobox, relocate);
  }
}

function HideCombobox(e) {
  
  if(e.target.tagName.toLowerCase() == "svg" || 
     e.target.tagName.toLowerCase() == "body" || 
     e.target.tagName.toLowerCase() == "div")  
    {
    document.getElementById("ComboboxDropdown").className = "O";
  }

  if(e.target !== e.currentTarget) return;
}

function CalcFlagPositionAndSizeForInputBox(svgLabelId, flagId) {
  var bboxLabel = document.getElementById(svgLabelId).getBoundingClientRect();
  var bboxFlag = document.getElementById(flagId).getBoundingClientRect();
  
  //var newX = bboxLabel.x - (bboxFlag.width + 5); // falls Text ebenfalls angezeigt wird
  var newX = bboxLabel.x; // Falls kein Text angezeigt wird
  var newY = bboxLabel.y - (bboxFlag.height / 2);
  var newY = bboxLabel.y;
  var newSize = bboxLabel.height;

  return [newX, newY, newSize];
}

function SetCurrencyIn(currencyShort) {
      g_currencyIn = currencyShort;
      document.getElementById("lblCurrencySignIn").textContent = currencyDict[currencyShort][2];
      document.getElementById("lblCurrencyLongIn").textContent = currencyDict[currencyShort][1]; // sprachindex hier setzen
      document.getElementById("lblIn").querySelector("tspan").textContent = currencyDict[currencyShort][1]; // sprachindex hier setzen
      document.getElementById("textboxImgIn").setAttribute("src", "./img/svgs/" + currencyDict[currencyShort][3])
}

function SetCurrencyOut(currencyShort) {
      g_currencyOut = currencyShort;
      document.getElementById("lblCurrencySignOut").textContent = currencyDict[currencyShort][2];
      document.getElementById("lblCurrencyLongOut").textContent = currencyDict[currencyShort][1]; // sprachindex hier setzen
      document.getElementById("lblOut").querySelector("tspan").textContent = currencyDict[currencyShort][1]; // sprachindex hier setzen
      document.getElementById("textboxImgOut").setAttribute("src", "./img/svgs/" + currencyDict[currencyShort][3])

}

function SelectCmbItem(myElement) {
  // 1. Waehrungszeichen setzen 
  // 2. Waehrungskuerzel abspeichern
  var currencyShort = myElement.getAttribute("currencyShort");
  if(g_lastSelectedCombobox == "In") {
    SetCurrencyIn(currencyShort);
  }
  else if(g_lastSelectedCombobox == "Out") {
    SetCurrencyOut(currencyShort);
  }
  

  SetPositionAndSizeOfTextboxFlags();


  

 

  // ComboboxDropdown verstecken
  document.getElementById("ComboboxDropdown").className = "O" // nach 2tem draufdrucken verstecken
}
