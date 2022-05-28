var eventHandlerDict = {}

function SetNumericButtonEvent(idBtn, textVal) {
  var btn = document.getElementById(idBtn);
  btn.addEventListener('click', (event) => ((arg1, arg2) => SetCurrencyValIn(arg1, arg2))(btn, textVal));

  var jsCode = "";
  jsCode += 'var idBtn = "' + idBtn + '";' + "\n";
  jsCode += 'var textVal = "' + textVal + '";' + "\n";
  jsCode += 'var btn = document.getElementById(idBtn);' + "\n";
  jsCode += 'btn.addEventListener("click", (event) => ((arg1, arg2) => SetCurrencyValIn(arg1, arg2))(btn, textVal));'

  eventHandlerDict[idBtn] = jsCode;
}

function SetNumericButtonEvents(idBtn, idBtnText, textVal) {

  //document.getElementById(idBtn).addEventListener('click', (event) => ((arg) => SetCurrencyValIn(arg))(textVal));
  //document.getElementById(idBtnText).addEventListener('click', (event) => ((arg) => SetCurrencyValIn(arg))(textVal));
  SetNumericButtonEvent(idBtn, textVal);
  SetNumericButtonEvent(idBtnText, textVal);
}

function Initialize() { 
 
  //document.getElementById("btnDropdownIn").addEventListener('click', (event) => ((arg) => ShowComboboxDropdown(arg))('In'));
  //document.getElementById("btnDropdownPfeilIn").addEventListener('click', (event) => ((arg) => ShowComboboxDropdown(arg))('In'));
  document.getElementById("currencyBoxIn").addEventListener('click', (event) => ((arg) => ShowComboboxDropdown(arg))('In'));

  //document.getElementById("btnDropdownOut").addEventListener('click', (event) => ((arg) => ShowComboboxDropdown(arg))('Out'));
  //document.getElementById("btnDropdownPfeilOut").addEventListener('click', (event) => ((arg) => ShowComboboxDropdown(arg))('Out'));
  document.getElementById("currencyBoxOut").addEventListener('click', (event) => ((arg) => ShowComboboxDropdown(arg))('Out'));

  document.getElementById("btnTauschen").addEventListener('click', (event) => (() => Swap())());
  eventHandlerDict["btnTauschen"] = "document.getElementById(\"btnTauschen\").addEventListener('click', (event) => (() => Swap())());";
  document.getElementById("btnTauschenPfeil").addEventListener('click', (event) => (() => Swap())());
 
  SetNumericButtonEvent("btnRPfeil", "R");
  SetNumericButtonEvents("btnR", "btnRText", "R");
  SetNumericButtonEvents("btnDel", "btnDelText", "Del");
  SetNumericButtonEvents("btnPunkt", "btnPunktText", ".");
  SetNumericButtonEvents("btn000", "btn000Text", "000");
  SetNumericButtonEvents("btn00", "btn00Text", "00");
  SetNumericButtonEvents("btn0", "btn0Text", "0");
  SetNumericButtonEvents("btn1", "btn1Text", "1");
  SetNumericButtonEvents("btn2", "btn2Text", "2");
  SetNumericButtonEvents("btn3", "btn3Text", "3");
  SetNumericButtonEvents("btn4", "btn4Text", "4");
  SetNumericButtonEvents("btn5", "btn5Text", "5");
  SetNumericButtonEvents("btn6", "btn6Text", "6");
  SetNumericButtonEvents("btn7", "btn7Text", "7");
  SetNumericButtonEvents("btn8", "btn8Text", "8");
  SetNumericButtonEvents("btn9", "btn9Text", "9");

  //window.addEventListener('resize', (event) => ((arg1, arg2) => ShowComboboxDropdown(arg1, arg2))(g_lastSelectedCombobox, 1));
  window.addEventListener('resize', (event) => ((arg1, arg2) => OnWindowResize(arg1, arg2))(g_lastSelectedCombobox, 1));

  // Initial Resize damit die Flaggen in den Textboxen die richtige Position und Size haben
  // ShowComboboxDropdown(g_lastSelectedCombobox, 1);
		// Groesze der Flaggen richtig setzen
  ShowComboboxDropdown("In", 1);
  ShowComboboxDropdown("Out", 1);
  ShowComboboxDropdown("Out", 1); // 2tes mal aufrufen um zu schlieszen
  //SelectCmbItem(this); // Positionen der Flaggen richtig setzen
  SetPositionAndSizeOfTextboxFlags();

  // Textbox fuellen
  BindKeysToTextbox();

  // Copyright verstecken
  document.getElementById("lblIn").querySelector("tspan").textContent = currencyDict[g_currencyIn][1];
  document.getElementById("lblOut").querySelector("tspan").textContent = currencyDict[g_currencyOut][1];

  // Berechnung durchfuehren
  CalcCurrencies();
}

function SetPositionAndSizeOfTextboxFlags() {
  // Positionen ermitteln
  var bboxIn = document.getElementById("lblCurrencySignIn").getBoundingClientRect();
  var bboxOut = document.getElementById("lblCurrencySignOut").getBoundingClientRect();

  var root = document.documentElement;
  var flagSize = root.style.getPropertyValue('--comboboxMaxFlagImgSize');

 
  var newFlagPosIn = CalcFlagPositionAndSizeForInputBox("lblCurrencyLongIn", "textboxImgIn")
  root.style.setProperty('--textboxImgInLeft', "" + newFlagPosIn[0] + "px");
  root.style.setProperty('--textboxImgInTop', "" + newFlagPosIn[1] + "px");
  root.style.setProperty('--textboxImgInSize', "" + newFlagPosIn[2] + "px");

  var newFlagPosOut = CalcFlagPositionAndSizeForInputBox("lblCurrencyLongOut", "textboxImgOut")
  root.style.setProperty('--textboxImgOutLeft', "" + newFlagPosOut[0] + "px");
  root.style.setProperty('--textboxImgOutTop', "" + newFlagPosOut[1] + "px");
  root.style.setProperty('--textboxImgOutSize', "" + newFlagPosOut[2] + "px");


 
}

function OnWindowResize(lastSelectedCmb, relocateCmb) {
  SetPositionAndSizeOfTextboxFlags();
  ShowComboboxDropdown(lastSelectedCmb, relocateCmb);

}

function BindKeysToTextbox() {
  //document.onkeypress = function (e) {
  document.onkeydown = function (e) {
     e = e || window.event;
     
     var btnArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "R", ".", ","];     
     var k = e.key.toUpperCase();
     if(btnArr.includes(k)) {
        console.log(k);
        var btnName = k.replace(".", "Punkt").replace(",", "Punkt");
        var finalBtnName = "btn" + btnName;
        ShowClickEffect(finalBtnName);
        
        if(k == ",") {
          k = "."
        }
         

        SetCurrencyValIn(finalBtnName, k);

     }
     else if (k == "BACKSPACE" || k == "DELETE"){
        
        var finalBtnName = "btnDel";
        ShowClickEffect(finalBtnName);
        SetCurrencyValIn(finalBtnName, "Del");
     }
  }
}


