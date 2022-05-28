// CurencyCalc
// Copyright: Vincenzo Galati / TheRealVince
// version: Fri 27 May 00:01:53 CEST 2022
var version = '2022.05.27';
var currencyDict = {};
currencyDict["EUR"] = ['Euro', 'Euro', '€', '01. Flag_of_Europe.svg', 1.0];
currencyDict["USD"] = ['US dollar', 'US Dollar', '$', '02. Flag_of_the_United_States.svg', 1.0697];
currencyDict["JPY"] = ['Japanese yen', 'Japanischer Yen', '¥', '03. Flag_of_Japan.svg', 135.95];
currencyDict["BGN"] = ['Bulgarian lev', 'Bulgarischer Lev', 'лв.', '04. Flag_of_Bulgaria.svg', 1.9558];
currencyDict["CZK"] = ['Czech koruna', 'Tschechische Koruna', 'Kč', '05. Flag_of_the_Czech_Republic.svg', 24.676];
currencyDict["DKK"] = ['Danish krone', 'Dänische Krone', 'kr', '06. Flag_of_Denmark.svg', 7.4409];
currencyDict["GBP"] = ['Pound sterling', 'Pfund Sterling', '£', '07. Flag_of_the_United_Kingdom.svg', 0.85073];
currencyDict["HUF"] = ['Hungarian forint', 'Ungarischer Forint', 'Ft', '08. Flag_of_Hungary.svg', 391.72];
currencyDict["PLN"] = ['Polish zloty', 'Polnischer Zloty', 'zł', '09. Flag_of_Poland.svg', 4.6083];
currencyDict["RON"] = ['Romanian leu', 'Rumänischer Leu', 'L', '10. Flag_of_Romania.svg', 4.9423];
currencyDict["SEK"] = ['Swedish krona', 'Schwedische Krona', 'kr', '11. Flag_of_Sweden.svg', 10.5983];
currencyDict["CHF"] = ['Swiss franc', 'Schweizer Franken', 'Fr', '12. Flag_of_Switzerland.svg', 1.0283];
currencyDict["ISK"] = ['Icelandic krona', 'Isländische Krona', 'kr', '13. Flag_of_Iceland.svg', 138.1];
currencyDict["NOK"] = ['Norwegian krone', 'Norwegische Krone', 'kr', '14. Flag of Norway.svg', 10.2715];
currencyDict["HRK"] = ['Croatian kuna', 'Kroatische Kuna', 'kn', '15. Flag_of_Croatia.svg', 7.5355];
currencyDict["RUB"] = ['Russian rouble', 'Russischer Rubel', '₽', '16. Flag_of_Russia.svg', -9999.99];
currencyDict["TRY"] = ['Turkish lira', 'Türkische Lira', '₺', '17. Flag_of_Turkey.svg', 17.5588];
currencyDict["AUD"] = ['Australian dollar', 'Australischer Dollar', 'A$', '18. Flag_of_Australia_(converted).svg', 1.511];
currencyDict["BRL"] = ['Brazilian real', 'Brasilianischer Real', 'R$', '19. Flag_of_Brazil.svg', 5.1741];
currencyDict["CAD"] = ['Canadian dollar', 'Kanadischer Dollar', 'CA$', '20. Flag of Canada (Pantone colours).svg', 1.3715];
currencyDict["CNY"] = ['Chinese yuan renminbi', 'Chinesischer Yuan Renminbi', '¥', "21. Flag_of_the_People's_Republic_of_China.svg", 7.2024];
currencyDict["HKD"] = ['Hong Kong dollar', 'Hong Kong Dollar', 'HK$', '22. Flag_of_Hong_Kong.svg', 8.397];
currencyDict["IDR"] = ['Indonesian rupiah', 'Indonesische Rupiah', 'Rp', '23. Flag_of_Indonesia.svg', 15628.91];
currencyDict["ILS"] = ['Israeli shekel', 'Isrälischer Schekel', '₪', '24. Flag_of_Israel.svg', 3.5935];
currencyDict["INR"] = ['Indian rupee', 'Indische Rupie', '₹', '25. Flag_of_India.svg', 83.0065];
currencyDict["KRW"] = ['South Korean won', 'Südkoreanischer Won', '₩', '26. Flag of South Korea.svg', 1352.69];
currencyDict["MXN"] = ['Mexican peso', 'Mexikanischer Peso', '$', '27. Flag_of_Mexico.svg', 21.1935];
currencyDict["MYR"] = ['Malaysian ringgit', 'Malaysischer Ringgit', 'RM', '28. Flag of Malaysia.svg', 4.7045];
currencyDict["NZD"] = ['New Zealand dollar', 'Neuseeland-Dollar', 'NZ$', '29. Flag_of_New_Zealand.svg', 1.6541];
currencyDict["PHP"] = ['Philippine peso', 'Philippinischer Peso', '₱', '30. Flag_of_the_Philippines.svg', 55.975];
currencyDict["SGD"] = ['Singapore dollar', 'Singapur-Dollar', 'S$', '31. Flag_of_Singapore.svg', 1.4709];
currencyDict["THB"] = ['Thai baht', 'Thailändischer Baht', '฿', '32. Flag_of_Thailand.svg', 36.589];
currencyDict["ZAR"] = ['South African rand', 'Südafrikanischer Rand', 'R', '33. Flag_of_South_Africa.svg', 16.9312];
