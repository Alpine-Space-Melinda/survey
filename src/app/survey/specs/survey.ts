// Survey definition
export const surveyModel = {
 "pages": [
  {
   "name": "filtering",
   "elements": [
    {
     "type": "radiogroup",
     "name": "QF1",
     "title": {
      "default": "Please select your Country of residence",
      "de": "Bitte nennen Sie uns den Staat in dem Ihr Wohnort liegt.",
      "de-at": "Bitte nennen Sie uns den Staat in dem Ihr Wohnort liegt.",
      "de-ch": "Bitte nennen Sie uns den Staat in dem Ihr Wohnort liegt.",
      "fr": "Sélectionnez votre pays de résidence.",
      "sl": "Izberite državo stalnega prebivališča",
      "it": "Seleziona il tuo paese di residenza"
     },
     "enableIf": "{source} != 'si'",
     "isRequired": true,
     "choices": [
      {
       "value": "at",
       "text": {
        "default": "Austria",
        "de": "Österreich",
        "fr": "Autriche",
        "sl": "Avstrija",
        "de-at": "Österreich",
        "de-ch": "Österreich"
       }
      },
      {
       "value": "fr",
       "text": {
        "default": "France",
        "de": "Frankreich",
        "sl": "Francija",
        "it": "Francia",
        "de-at": "Frankreich",
        "de-ch": "Frankreich"
       }
      },
      {
       "value": "de",
       "text": {
        "default": "Germany",
        "de": "Deutschland",
        "fr": "Allemagne",
        "sl": "Nemčija",
        "it": "Germania",
        "de-at": "Deutschland",
        "de-ch": "Deutschland"
       }
      },
      {
       "value": "it",
       "text": {
        "default": "Italy",
        "de": "Italien",
        "fr": "Italie",
        "sl": "Italija",
        "it": "Italia",
        "de-at": "Italien",
        "de-ch": "Italien"
       }
      },
      {
       "value": "li",
       "text": {
        "default": "Liechtenstein",
        "sl": "Lihtenštajn"
       }
      },
      {
       "value": "si",
       "text": {
        "default": "Slovenia",
        "de": "Slowenien",
        "fr": "Slovenie",
        "sl": "Slovenija",
        "de-at": "Slowenien",
        "de-ch": "Slowenien"
       }
      },
      {
       "value": "ch",
       "text": {
        "default": "Switzerland",
        "de": "Schweiz",
        "fr": "Suisse",
        "sl": "Švica",
        "it": "Svizzera",
        "de-at": "Schweiz",
        "de-ch": "Schweiz"
       }
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2FD",
     "visible": false,
     "visibleIf": "{QF1} == \"fr\"",
     "title": {
      "default": "Could you please precise in which Department do you live?",
      "fr": "Dans quel département vivez-vous?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "A1",
       "text": "Ain"
      },
      {
       "value": "A2",
       "text": "Allier"
      },
      {
       "value": "A3",
       "text": "Ardèche"
      },
      {
       "value": "A4",
       "text": "Cantal"
      },
      {
       "value": "A5",
       "text": "Drȏme"
      },
      {
       "value": "A6",
       "text": "Isère"
      },
      {
       "value": "A7",
       "text": "Loire"
      },
      {
       "value": "A8",
       "text": "Haute-Loire"
      },
      {
       "value": "A9",
       "text": "Puy-de-Dȏme"
      },
      {
       "value": "A10",
       "text": "Rhȏne"
      },
      {
       "value": "A11",
       "text": "Métropole de Lyon"
      },
      {
       "value": "A12",
       "text": "Savoie"
      },
      {
       "value": "A13",
       "text": "Haute-Savoie"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2AR",
     "visible": false,
     "visibleIf": "{QF1} == \"at\"",
     "title": {
      "default": "Could you please precise in which Region do you live?",
      "de": "Bitte nennen Sie uns das Bundesland, in dem Ihr Wohnort liegt.",
      "de-at": "Bitte nennen Sie uns das Bundesland, in dem Ihr Wohnort liegt.",
      "de-ch": "Bitte nennen Sie uns das Bundesland, in dem Ihr Wohnort liegt."
     },
     "isRequired": true,
     "choices": [
      {
       "value": "A1",
       "text": "Vorarlberg"
      },
      {
       "value": "A2",
       "text": {
        "default": "Tyrol",
        "de-at": "Tirol",
        "de-ch": "Tirol",
        "de": "Tirol"
       }
      },
      {
       "value": "A3",
       "text": "Salzburg"
      },
      {
       "value": "A4",
       "text": {
        "default": "Carinthia",
        "de-at": "Kärnten",
        "de-ch": "Kärnten",
        "de": "Kärnten"
       }
      },
      {
       "value": "A5",
       "text": {
        "default": "Styria",
        "de-at": "Steier­mark",
        "de-ch": "Steier­mark",
        "de": "Steier­mark"
       }
      },
      {
       "value": "A6",
       "text": {
        "default": "Upper Austria",
        "de-at": "Oberösterreich",
        "de-ch": "Oberösterreich",
        "de": "Oberösterreich"
       }
      },
      {
       "value": "A7",
       "text": {
        "default": "Lower Austria",
        "de-ch": "Niederösterreich",
        "de-at": "Niederösterreich",
        "de": "Niederösterreich"
       }
      },
      {
       "value": "A8",
       "text": "Wien"
      },
      {
       "value": "A9",
       "text": "Burgenland"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2AR2",
     "visible": false,
     "visibleIf": "{QF1} == \"at\" and {QF2AR} == \"A2\"",
     "title": {
      "default": "In which municipality? (if \"other\" please specify your Postal Code)",
      "de": "In welchem Gemeinde liegt Ihr Wohnort?\n(Wenn \"andere\", Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes)",
      "de-at": "In welchem Gemeinde liegt Ihr Wohnort?\n(Wenn \"andere\", Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes)",
      "de-ch": "In welchem Gemeinde liegt Ihr Wohnort?\n(Wenn \"andere\", Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes)"
     },
     "isRequired": true,
     "hasOther": true,
     "choices": [
      {
       "value": "A1",
       "text": "Zirl"
      }
     ],
     "otherText": {
      "default": "Other (postal code)",
      "de": "Andere (Postleitzahl)",
      "de-at": "Andere (Postleitzahl)",
      "de-ch": "Andere (Postleitzahl)"
     }
    },
    {
     "type": "dropdown",
     "name": "QF2FD10",
     "visible": false,
     "visibleIf": "{QF1} == \"fr\" and {QF2FD} == \"A11\"",
     "title": {
      "default": "In which municipality?",
      "fr": "Dans quel commune vivez-vous?"
     },
     "choices": [
      {
       "value": "A1",
       "text": "Lyon"
      },
      {
       "value": "A2",
       "text": "Albigny-sur-Saône"
      },
      {
       "value": "A3",
       "text": "Bron"
      },
      {
       "value": "A4",
       "text": "Cailloux-sur-Fontaines"
      },
      {
       "value": "A5",
       "text": "Caluire-et-Cuire"
      },
      {
       "value": "A6",
       "text": "Caluire-et-Cuire"
      },
      {
       "value": "A7",
       "text": "Charbonnières-les-Bains"
      },
      {
       "value": "A8",
       "text": "Charly"
      },
      {
       "value": "A9",
       "text": "Chassieu"
      },
      {
       "value": "A10",
       "text": "Collonges-au-Mont-d'Or"
      },
      {
       "value": "A11",
       "text": "Corbas"
      },
      {
       "value": "A12",
       "text": "Couzon-au-Mont-d'Or"
      },
      {
       "value": "A13",
       "text": "Craponne"
      },
      {
       "value": "A14",
       "text": "Curis-au-Mont-d'Or"
      },
      {
       "value": "A15",
       "text": "Dardilly"
      },
      {
       "value": "A16",
       "text": "Décines-Charpieu"
      },
      {
       "value": "A17",
       "text": "Écully"
      },
      {
       "value": "A18",
       "text": "Feyzin"
      },
      {
       "value": "A19",
       "text": "Fleurieu-sur-Saône"
      },
      {
       "value": "A20",
       "text": "Fontaines-Saint-Martin"
      },
      {
       "value": "A21",
       "text": "Fontaines-sur-Saône"
      },
      {
       "value": "A22",
       "text": "Francheville"
      },
      {
       "value": "A23",
       "text": "Genay"
      },
      {
       "value": "A24",
       "text": "Givors"
      },
      {
       "value": "A25",
       "text": "Grigny"
      },
      {
       "value": "A26",
       "text": "Irigny"
      },
      {
       "value": "A27",
       "text": "Jonage"
      },
      {
       "value": "A28",
       "text": "Limonest"
      },
      {
       "value": "A29",
       "text": "Lissieu"
      },
      {
       "value": "A30",
       "text": "Marcy-l'Étoile"
      },
      {
       "value": "A31",
       "text": "Meyzieu"
      },
      {
       "value": "A32",
       "text": "Mions"
      },
      {
       "value": "A33",
       "text": "Montanay"
      },
      {
       "value": "A34",
       "text": "La Mulatière"
      },
      {
       "value": "A35",
       "text": "Neuville-sur-Saône"
      },
      {
       "value": "A36",
       "text": "Oullins"
      },
      {
       "value": "A37",
       "text": "Pierre-Bénite"
      },
      {
       "value": "A38",
       "text": "Poleymieux-au-Mont-d'Or"
      },
      {
       "value": "A39",
       "text": "Quincieux"
      },
      {
       "value": "A40",
       "text": "Rillieux-la-Pape"
      },
      {
       "value": "A41",
       "text": "Rochetaillée-sur-Saône"
      },
      {
       "value": "A42",
       "text": "Saint-Cyr-au-Mont-d'Or"
      },
      {
       "value": "A43",
       "text": "Saint-Didier-au-Mont-d'Or"
      },
      {
       "value": "A44",
       "text": "Sainte-Foy-lès-Lyon"
      },
      {
       "value": "A45",
       "text": "Saint-Fons"
      },
      {
       "value": "A46",
       "text": "Saint-Genis-Laval"
      },
      {
       "value": "A47",
       "text": "Saint-Genis-les-Ollières"
      },
      {
       "value": "A48",
       "text": "Saint-Germain-au-Mont-d'Or"
      },
      {
       "value": "A49",
       "text": "Saint-Priest"
      },
      {
       "value": "A50",
       "text": "Saint-Romain-au-Mont-d'Or"
      },
      {
       "value": "A51",
       "text": "Sathonay-Camp"
      },
      {
       "value": "A52",
       "text": "Sathonay-Village"
      },
      {
       "value": "A53",
       "text": "Solaize"
      },
      {
       "value": "A54",
       "text": "Tassin-la-Demi-Lune"
      },
      {
       "value": "A55",
       "text": "La Tour-de-Salvagny"
      },
      {
       "value": "A56",
       "text": "Vaulx-en-Velin"
      },
      {
       "value": "A57",
       "text": "Vénissieux"
      },
      {
       "value": "A58",
       "text": "Vernaison"
      },
      {
       "value": "A59",
       "text": "Villeurbanne"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2FD13",
     "visible": false,
     "visibleIf": "{QF1} == \"fr\" and {QF2FD} == \"A13\"",
     "title": {
      "default": "In which municipality?",
      "fr": "Dans quel commune vivez-vous?"
     },
     "choices": [
      {
       "value": "A1",
       "text": "Alby-sur-Chéran"
      },
      {
       "value": "A2",
       "text": "Allèves"
      },
      {
       "value": "A3",
       "text": "Annecy"
      },
      {
       "value": "A4",
       "text": "Argonay"
      },
      {
       "value": "A5",
       "text": "Bluffy"
      },
      {
       "value": "A6",
       "text": "Chainaz-les-Frasses"
      },
      {
       "value": "A7",
       "text": "Chapeiry"
      },
      {
       "value": "A8",
       "text": "Charvonnex"
      },
      {
       "value": "A9",
       "text": "Chavanod"
      },
      {
       "value": "A10",
       "text": "Cusy"
      },
      {
       "value": "A11",
       "text": "Duingt"
      },
      {
       "value": "A12",
       "text": "Entrevernes"
      },
      {
       "value": "A13",
       "text": "Épagny-Metz-Tessy"
      },
      {
       "value": "A14",
       "text": "Fillière"
      },
      {
       "value": "A15",
       "text": "Groisy"
      },
      {
       "value": "A16",
       "text": "Gruffy"
      },
      {
       "value": "A17",
       "text": "Héry-sur-Alby"
      },
      {
       "value": "A18",
       "text": "La Chapelle-Saint-Maurice"
      },
      {
       "value": "A19",
       "text": "Leschaux"
      },
      {
       "value": "A20",
       "text": "Menthon-Saint-Bernard"
      },
      {
       "value": "A21",
       "text": "Montagny-les-Lanches"
      },
      {
       "value": "A22",
       "text": "Mûres"
      },
      {
       "value": "A23",
       "text": "Nâves-Parmelan"
      },
      {
       "value": "A24",
       "text": "Poisy"
      },
      {
       "value": "A25",
       "text": "Quintal"
      },
      {
       "value": "A26",
       "text": "Saint-Eustache"
      },
      {
       "value": "A27",
       "text": "Saint-Félix"
      },
      {
       "value": "A28",
       "text": "Saint-Jorioz"
      },
      {
       "value": "A29",
       "text": "Saint-Sylvestre"
      },
      {
       "value": "A30",
       "text": "Sévrier"
      },
      {
       "value": "A31",
       "text": "Talloires-Montmin"
      },
      {
       "value": "A32",
       "text": "Veyrier-du-Lac"
      },
      {
       "value": "A33",
       "text": "Villaz"
      },
      {
       "value": "A34",
       "text": "Viuz-la-Chiésaz"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2GB",
     "visible": false,
     "visibleIf": "{QF1} == \"de\"",
     "title": {
      "default": "Could you please precise in which Bundesland do you live?",
      "de": "Bitte nennen Sie uns das Bundesland, in dem Ihr Wohnort liegt.",
      "de-at": "Bitte nennen Sie uns das Bundesland, in dem Ihr Wohnort liegt.",
      "de-ch": "Bitte nennen Sie uns das Bundesland, in dem Ihr Wohnort liegt."
     },
     "choices": [
      {
       "value": "A1",
       "text": "Baden-Württemberg"
      },
      {
       "value": "A2",
       "text": "Bayern"
      },
      {
       "value": "A3",
       "text": "Berlin"
      },
      {
       "value": "A4",
       "text": "Brandenburg"
      },
      {
       "value": "A5",
       "text": "Bremen"
      },
      {
       "value": "A6",
       "text": "Hamburg"
      },
      {
       "value": "A7",
       "text": "Hesse"
      },
      {
       "value": "A8",
       "text": "Niedersachsen"
      },
      {
       "value": "A9",
       "text": "Mecklenburg-Vorpommern"
      },
      {
       "value": "A10",
       "text": "Nordrhein-Westfalen"
      },
      {
       "value": "A11",
       "text": "Rheinland-Pfalz"
      },
      {
       "value": "A12",
       "text": "Saarland"
      },
      {
       "value": "A13",
       "text": "Sachsen"
      },
      {
       "value": "A14",
       "text": "Sachsen-Anhalt"
      },
      {
       "value": "A15",
       "text": "Schleswig-Holstein"
      },
      {
       "value": "A16",
       "text": "Thüringen"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2GB2",
     "visible": false,
     "visibleIf": "((!{source}) or {source} == 'de') and {QF1} == \"de\" and {QF2GB} == \"A2\"",
     "title": {
      "default": "Could you precise in which Landkreis?",
      "de": "In welchem Landkreis liegt Ihr Wohnort?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Aichach-Friedberg"
      },
      {
       "value": "2",
       "text": "Altötting"
      },
      {
       "value": "3",
       "text": "Amberg-Sulzbach"
      },
      {
       "value": "4",
       "text": "Ansbach"
      },
      {
       "value": "5",
       "text": "Aschaffenburg"
      },
      {
       "value": "6",
       "text": "Augsburg"
      },
      {
       "value": "7",
       "text": "Bad Kissingen"
      },
      {
       "value": "8",
       "text": "Bad Tölz-Wolfratshausen"
      },
      {
       "value": "9",
       "text": "Bamberg"
      },
      {
       "value": "10",
       "text": "Bayreuth"
      },
      {
       "value": "11",
       "text": "Berchtesgadener Land"
      },
      {
       "value": "12",
       "text": "Cham"
      },
      {
       "value": "13",
       "text": "Coburg"
      },
      {
       "value": "14",
       "text": "Dachau"
      },
      {
       "value": "15",
       "text": "Deggendorf"
      },
      {
       "value": "16",
       "text": "Dillingen"
      },
      {
       "value": "17",
       "text": "Dingolfing-Landau"
      },
      {
       "value": "18",
       "text": "Donau-Ries"
      },
      {
       "value": "19",
       "text": "Ebersberg"
      },
      {
       "value": "20",
       "text": "Eichstätt"
      },
      {
       "value": "21",
       "text": "Erding"
      },
      {
       "value": "22",
       "text": "Erlangen-Höchstadt"
      },
      {
       "value": "23",
       "text": "Forchheim"
      },
      {
       "value": "24",
       "text": "Freising"
      },
      {
       "value": "25",
       "text": "Freyung-Grafenau"
      },
      {
       "value": "26",
       "text": "Fürstenfeldbruck"
      },
      {
       "value": "27",
       "text": "Fürth"
      },
      {
       "value": "28",
       "text": "Garmisch-Partenkirchen"
      },
      {
       "value": "29",
       "text": "Günzburg"
      },
      {
       "value": "30",
       "text": "Hassberge"
      },
      {
       "value": "31",
       "text": "Hof"
      },
      {
       "value": "32",
       "text": "Kelheim"
      },
      {
       "value": "33",
       "text": "Kitzingen"
      },
      {
       "value": "34",
       "text": "Kronach"
      },
      {
       "value": "35",
       "text": "Kulmbach"
      },
      {
       "value": "36",
       "text": "Landsberg"
      },
      {
       "value": "37",
       "text": "Landshut"
      },
      {
       "value": "38",
       "text": "Lichtenfels"
      },
      {
       "value": "39",
       "text": "Lindau"
      },
      {
       "value": "40",
       "text": "Main-Spessart"
      },
      {
       "value": "41",
       "text": "Miesbach"
      },
      {
       "value": "42",
       "text": "Miltenberg"
      },
      {
       "value": "43",
       "text": "Mühldorf"
      },
      {
       "value": "44",
       "text": "München (Landkreis)"
      },
      {
       "value": "45",
       "text": "Neuburg-Schrobenha"
      },
      {
       "value": "46",
       "text": "Neumarkt"
      },
      {
       "value": "47",
       "text": "Neustadt (Aisch)-B"
      },
      {
       "value": "48",
       "text": "Neustadt an der Wa"
      },
      {
       "value": "49",
       "text": "Neu-Ulm"
      },
      {
       "value": "50",
       "text": "Nürnberger Land"
      },
      {
       "value": "51",
       "text": "Oberallgäu"
      },
      {
       "value": "52",
       "text": "Ostallgäu"
      },
      {
       "value": "53",
       "text": "Passau"
      },
      {
       "value": "54",
       "text": "Pfaffenhofen"
      },
      {
       "value": "55",
       "text": "Regen"
      },
      {
       "value": "56",
       "text": "Regensburg"
      },
      {
       "value": "57",
       "text": "Rhön-Grabfeld"
      },
      {
       "value": "58",
       "text": "Rosenheim"
      },
      {
       "value": "59",
       "text": "Roth"
      },
      {
       "value": "60",
       "text": "Rottal-Inn"
      },
      {
       "value": "61",
       "text": "Schwandorf"
      },
      {
       "value": "62",
       "text": "Schweinfurt"
      },
      {
       "value": "63",
       "text": "Starnberg"
      },
      {
       "value": "64",
       "text": "Straubing-Bogen"
      },
      {
       "value": "65",
       "text": "Tirschenreuth"
      },
      {
       "value": "66",
       "text": "Traunstein"
      },
      {
       "value": "67",
       "text": "Unterallgäu"
      },
      {
       "value": "68",
       "text": "Weilheim-Schongau"
      },
      {
       "value": "69",
       "text": "Weissenburg-Gunzen"
      },
      {
       "value": "70",
       "text": "Wunsiedel"
      },
      {
       "value": "71",
       "text": "Würzburg"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2GB2EB",
     "visible": false,
     "visibleIf": "(!{source} or {source} == 'de') and {QF1} == \"de\" and {QF2GB} == \"A2\" and {QF2GB2} = \"19\"",
     "title": {
      "default": "In Landkreis Ebersberg, in which municipality do you live?",
      "de": "In welcher Kommune des Landkreises Ebersberg wohnen Sie?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Anzing"
      },
      {
       "value": "2",
       "text": "Aßling"
      },
      {
       "value": "3",
       "text": "Baiern"
      },
      {
       "value": "4",
       "text": "Bruck"
      },
      {
       "value": "5",
       "text": "Ebersberg"
      },
      {
       "value": "6",
       "text": "Egmating"
      },
      {
       "value": "7",
       "text": "Emmering"
      },
      {
       "value": "8",
       "text": "Forstinning"
      },
      {
       "value": "9",
       "text": "Frauenneuharting"
      },
      {
       "value": "10",
       "text": "Glonn"
      },
      {
       "value": "11",
       "text": "Grafing"
      },
      {
       "value": "12",
       "text": "Hohenlinden"
      },
      {
       "value": "13",
       "text": "Kirchseeon"
      },
      {
       "value": "14",
       "text": "Markt Schwaben"
      },
      {
       "value": "15",
       "text": "Moosach"
      },
      {
       "value": "16",
       "text": "Oberpframmern"
      },
      {
       "value": "17",
       "text": "Pliening"
      },
      {
       "value": "18",
       "text": "Poing"
      },
      {
       "value": "19",
       "text": "Steinhöring"
      },
      {
       "value": "20",
       "text": "Vaterstetten"
      },
      {
       "value": "21",
       "text": "Zorneding"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QFSW1",
     "visible": false,
     "visibleIf": "{QF1} = \"ch\"",
     "title": {
      "default": "Could you please precise in which Canton do you live?",
      "de": "Bitte nennen Sie uns den Kanton, in dem Ihr Wohnort liegt.",
      "de-at": "Bitte nennen Sie uns den Kanton, in dem Ihr Wohnort liegt.",
      "de-ch": "Bitte nennen Sie uns den Kanton, in dem Ihr Wohnort liegt."
     },
     "isRequired": true,
     "choices": [
      {
       "value": "A1",
       "text": "Aargau"
      },
      {
       "value": "A2",
       "text": "Appenzell Ausserrhoden"
      },
      {
       "value": "A3",
       "text": "Appenzell Innerrhoden"
      },
      {
       "value": "A4",
       "text": "Basel-Landschaft"
      },
      {
       "value": "A5",
       "text": "Basel-Stadt"
      },
      {
       "value": "A6",
       "text": "Bern"
      },
      {
       "value": "A7",
       "text": "Freiburg"
      },
      {
       "value": "A8",
       "text": "Genf"
      },
      {
       "value": "A9",
       "text": "Glarus"
      },
      {
       "value": "A10",
       "text": "Graubünden"
      },
      {
       "value": "A11",
       "text": "Jura"
      },
      {
       "value": "A12",
       "text": "Luzern"
      },
      {
       "value": "A13",
       "text": "Neuenburg"
      },
      {
       "value": "A14",
       "text": "Nidwalden"
      },
      {
       "value": "A15",
       "text": "Obwalden"
      },
      {
       "value": "A16",
       "text": "Schaffhausen"
      },
      {
       "value": "A17",
       "text": "Schwyz"
      },
      {
       "value": "A18",
       "text": "Solothurn"
      },
      {
       "value": "A19",
       "text": "St. Gallen"
      },
      {
       "value": "A20",
       "text": "Tessin"
      },
      {
       "value": "A21",
       "text": "Thurgau"
      },
      {
       "value": "A22",
       "text": "Uri"
      },
      {
       "value": "A23",
       "text": "Waadt"
      },
      {
       "value": "A24",
       "text": "Wallis"
      },
      {
       "value": "A25",
       "text": "Zug"
      },
      {
       "value": "A26",
       "text": "Zürich"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "QF2IT",
     "visible": false,
     "visibleIf": "{QF1} == \"it\"",
     "title": {
      "default": "In which province do you live?",
      "it": "In quale provincia vivi?"
     },
     "choices": [
      {
       "value": "1",
       "text": "Provincia di Pordenone"
      },
      {
       "value": "2",
       "text": {
        "default": "Other",
        "it": "Altra provincia"
       }
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2ITUTI",
     "visible": false,
     "visibleIf": "{QF1} == 'it' and {QF2IT} = \"1\"",
     "title": {
      "default": "In which municipality?",
      "it": "In quale comune?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Andreis"
      },
      {
       "value": "2",
       "text": "Arba"
      },
      {
       "value": "3",
       "text": "Aviano"
      },
      {
       "value": "4",
       "text": "Azzano Decimo"
      },
      {
       "value": "5",
       "text": "Barcis"
      },
      {
       "value": "6",
       "text": "Brugnera"
      },
      {
       "value": "7",
       "text": "Budoia"
      },
      {
       "value": "8",
       "text": "Caneva"
      },
      {
       "value": "9",
       "text": "Casarsa della Delizia"
      },
      {
       "value": "10",
       "text": "Castelnovo del Friuli"
      },
      {
       "value": "11",
       "text": "Cavasso Nuovo"
      },
      {
       "value": "12",
       "text": "Chions"
      },
      {
       "value": "13",
       "text": "Cimolais"
      },
      {
       "value": "14",
       "text": "Claut"
      },
      {
       "value": "15",
       "text": "Clauzetto"
      },
      {
       "value": "16",
       "text": "Cordenons"
      },
      {
       "value": "17",
       "text": "Cordovado"
      },
      {
       "value": "18",
       "text": "Erto e Casso"
      },
      {
       "value": "19",
       "text": "Fanna"
      },
      {
       "value": "20",
       "text": "Fiume Veneto"
      },
      {
       "value": "21",
       "text": "Fontanafredda"
      },
      {
       "value": "22",
       "text": "Frisanco"
      },
      {
       "value": "23",
       "text": "Maniago"
      },
      {
       "value": "24",
       "text": "Meduno"
      },
      {
       "value": "25",
       "text": "Montereale Valcellina"
      },
      {
       "value": "26",
       "text": "Morsano al Tagliamento"
      },
      {
       "value": "27",
       "text": "Pasiano di Pordenone"
      },
      {
       "value": "28",
       "text": "Pinzano al Tagliamento"
      },
      {
       "value": "29",
       "text": "Polcenigo"
      },
      {
       "value": "30",
       "text": "Porcia"
      },
      {
       "value": "31",
       "text": "Pordenone"
      },
      {
       "value": "32",
       "text": "Prata di Pordenone"
      },
      {
       "value": "33",
       "text": "Pravisdomini"
      },
      {
       "value": "34",
       "text": "Roveredo in Piano"
      },
      {
       "value": "35",
       "text": "Sacile"
      },
      {
       "value": "36",
       "text": "San Giorgio della Richinvelda"
      },
      {
       "value": "37",
       "text": "San Martino al Tagliamento"
      },
      {
       "value": "38",
       "text": "San Quirino"
      },
      {
       "value": "39",
       "text": "San Vito al Tagliamento"
      },
      {
       "value": "40",
       "text": "Sequals"
      },
      {
       "value": "41",
       "text": "Sesto al Reghena"
      },
      {
       "value": "42",
       "text": "Spilimbergo"
      },
      {
       "value": "43",
       "text": "Tramonti di Sopra"
      },
      {
       "value": "44",
       "text": "Tramonti di Sotto"
      },
      {
       "value": "45",
       "text": "Travesio"
      },
      {
       "value": "46",
       "text": "Vito d'Asio"
      },
      {
       "value": "47",
       "text": "Vivaro"
      },
      {
       "value": "48",
       "text": "Zoppola"
      },
      {
       "value": "49",
       "text": "Vajont"
      },
      {
       "value": "50",
       "text": "Valvasone Arzene"
      }
     ],
     "otherText": {
      "default": "Other (describe)",
      "it": "Altro (CAP)"
     }
    },
    {
     "type": "dropdown",
     "name": "QF2SL",
     "visible": false,
     "visibleIf": "{QF1} == \"si\"",
     "title": {
      "default": "Could you precise in which region do you live?",
      "sl": "Navedite prosim regijo, v kateri živite."
     },
     "choices": [
      {
       "value": "7",
       "text": "Podravska"
      },
      {
       "value": "1",
       "text": "Gorenjska"
      },
      {
       "value": "2",
       "text": "Goriška"
      },
      {
       "value": "3",
       "text": "Jugovzhodna Slovenija"
      },
      {
       "value": "4",
       "text": "Koroška"
      },
      {
       "value": "5",
       "text": "Obalno-kraška"
      },
      {
       "value": "6",
       "text": "Osrednjeslovenska"
      },
      {
       "value": "8",
       "text": "Pomurska"
      },
      {
       "value": "9",
       "text": "Posavska"
      },
      {
       "value": "10",
       "text": "Primorsko-notranjska"
      },
      {
       "value": "11",
       "text": "Savinjska"
      },
      {
       "value": "12",
       "text": "Zasavska"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "QF2SL7",
     "visible": false,
     "visibleIf": "{QF2SL} == \"7\"",
     "title": {
      "default": "Could you precise in which municipality do you live?",
      "sl": "Lahko natančneje navedete občino, v kateri živite?"
     },
     "choices": [
      {
       "value": "17",
       "text": "Maribor"
      },
      {
       "value": "1",
       "text": "Benedikt"
      },
      {
       "value": "2",
       "text": "Cerkvenjak"
      },
      {
       "value": "3",
       "text": "Cirkulane"
      },
      {
       "value": "4",
       "text": "Destrnik"
      },
      {
       "value": "5",
       "text": "Dornava"
      },
      {
       "value": "6",
       "text": "Duplek"
      },
      {
       "value": "7",
       "text": "Gorišnica"
      },
      {
       "value": "8",
       "text": "Hajdina"
      },
      {
       "value": "9",
       "text": "Hoče - Slivnica"
      },
      {
       "value": "10",
       "text": "Juršinci"
      },
      {
       "value": "11",
       "text": "Kidričevo"
      },
      {
       "value": "12",
       "text": "Kungota"
      },
      {
       "value": "13",
       "text": "Lenart"
      },
      {
       "value": "14",
       "text": "Lovrenc na Pohorju"
      },
      {
       "value": "15",
       "text": "Majšperk"
      },
      {
       "value": "16",
       "text": "Makole"
      },
      {
       "value": "18",
       "text": "Markovci"
      },
      {
       "value": "19",
       "text": "Miklavž na Dravskem polju"
      },
      {
       "value": "20",
       "text": "Oplotnica"
      },
      {
       "value": "21",
       "text": "Ormož"
      },
      {
       "value": "22",
       "text": "Pesnica"
      },
      {
       "value": "23",
       "text": "Podlehnik"
      },
      {
       "value": "24",
       "text": "Poljčane"
      },
      {
       "value": "25",
       "text": "Ptuj"
      },
      {
       "value": "26",
       "text": "Rače - Fram"
      },
      {
       "value": "27",
       "text": "Ruše"
      },
      {
       "value": "28",
       "text": "Selnica ob Dravi"
      },
      {
       "value": "29",
       "text": "Šentilj"
      },
      {
       "value": "30",
       "text": "Slovenska Bistrica"
      },
      {
       "value": "31",
       "text": "Središče ob Dravi"
      },
      {
       "value": "32",
       "text": "Starše"
      },
      {
       "value": "33",
       "text": "Sveta Ana"
      },
      {
       "value": "34",
       "text": "Sveta Trojica v Slovenskih goricah"
      },
      {
       "value": "35",
       "text": "Sveti Andraž v Slovenskih goricah"
      },
      {
       "value": "36",
       "text": "Sveti Jurij v Slovenskih goricah"
      },
      {
       "value": "37",
       "text": "Sveti Tomaž"
      },
      {
       "value": "38",
       "text": "Trnovska vas"
      },
      {
       "value": "39",
       "text": "Videm"
      },
      {
       "value": "40",
       "text": "Zavrč"
      },
      {
       "value": "41",
       "text": "Žetale"
      }
     ]
    },
    {
     "type": "text",
     "name": "QF3",
     "visible": false,
     "visibleIf": "{source} != 'at' and (\r\n({QF2FD} notempty and !([\"A11\", \"A13\"] anyof {QF2FD}))\r\nor\r\n({QF2AR} notempty and !([\"A1\", \"A2\"] anyof {QF2AR}))\r\nor\r\n({QF2GB2} notempty and {QF2GB2} != \"19\")\r\nor\r\n({QFSW1} notempty and !([\"A6\", \"A10\", \"A12\", \"A19\"] anyof {QFSW1}))\r\nor\r\n{QFSW1} == \"A2\"\r\n)",
     "title": {
      "default": "Could you please specify your postal code?",
      "de": "Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes.",
      "sl": "Lahko navedete poštno številko?",
      "fr": "Quel est votre code postal?",
      "it": "Puoi indicare per favore il codice di avviamento postale (cap) del tuo comune?",
      "de-ch": "Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes.",
      "de-at": "Bitte nennen Sie uns die Postleitzahl Ihres Wohnortes."
     }
    }
   ]
  },
  {
   "name": "activities",
   "elements": [
    {
     "type": "checkbox",
     "name": "EQ1AU",
     "visible": false,
     "visibleIf": "((!{source}) or {source} == \"at\") and ({QF1} == \"at\" or {QF1} == \"li\" or ({QF1} == \"de\" and {QF2GB} == \"A2\") or ({QF1} == \"ch\" and ({QFSW1} == \"A10\" or {QFSW1} == \"A19\")))",
     "title": {
      "default": "In the Vorarlberg Region do you usually carry out any of the following activities?",
      "de": "Welche dieser Aktivitäten führen Sie regelmäßig in Vorarlberg aus?",
      "de-at": "Welche dieser Aktivitäten führen Sie regelmäßig in Vorarlberg aus?",
      "de-ch": "Welche dieser Aktivitäten führen Sie regelmäßig in Vorarlberg aus?"
     },
     "description": {
      "default": "(Multiple answers are possible)",
      "de": "(Mehrfachnennungen sind möglich)",
      "de-at": "(Mehrfachnennungen sind möglich)",
      "de-ch": "(Mehrfachnennungen sind möglich)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "de": "Arbeit/Geschäftlich",
        "de-at": "Arbeit/Geschäftlich",
        "de-ch": "Arbeit/Geschäftlich"
       },
       "enableIf": "{EQ1AU} anyof \"1\" or !({EQ1AU} anyof \"6\")"
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "de": "Ausbildung",
        "de-at": "Ausbildung",
        "de-ch": "Ausbildung"
       },
       "enableIf": "{EQ1AU} anyof \"2\" or !({EQ1AU} anyof \"6\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "de": "Einkaufen",
        "de-ch": "Einkaufen",
        "de-at": "Einkaufen"
       },
       "enableIf": "{EQ1AU} anyof \"3\" or !({EQ1AU} anyof \"6\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "de": "Freizeitaktivitäten",
        "de-at": "Freizeitaktivitäten",
        "de-ch": "Freizeitaktivitäten"
       },
       "enableIf": "{EQ1AU} anyof \"4\" or !({EQ1AU} anyof \"6\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "de": "Sonstiges",
        "de-at": "Sonstiges",
        "de-ch": "Sonstiges"
       },
       "enableIf": "{EQ1AU} anyof \"5\" or !({EQ1AU} anyof \"6\")"
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "de": "Keine der genannten",
        "de-at": "Keine der genannten",
        "de-ch": "Keine der genannten"
       },
       "enableIf": "{EQ1AU} anyof \"6\" or {EQ1AU.length} == 0"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "EQ1GE",
     "visible": false,
     "visibleIf": "((!{source}) or {source} == 'de') and  {QF1} == \"de\"",
     "title": {
      "default": "In the Landkreis Ebersberg do you usually carry out any of the following activities?",
      "de": "Welche dieser Aktivitäten führen Sie regelmäßig im Landkreis Ebersberg aus?"
     },
     "description": {
      "default": "(Multiple answers are possible)",
      "de": "(Mehrfachnennungen sind möglich)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "de": "Arbeit"
       },
       "enableIf": "{EQ1GE} anyof \"1\" or !({EQ1GE} anyof \"6\")"
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "de": "Studium"
       },
       "enableIf": "{EQ1GE} anyof \"2\" or !({EQ1GE} anyof \"6\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "de": "Einkaufen"
       },
       "enableIf": "{EQ1GE} anyof \"3\" or !({EQ1GE} anyof \"6\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "de": "Freizeitaktivitäten"
       },
       "enableIf": "{EQ1GE} anyof \"4\" or !({EQ1GE} anyof \"6\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "de": "Sonstiges"
       },
       "enableIf": "{EQ1GE} anyof \"5\" or !({EQ1GE} anyof \"6\")"
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "de": "Keine der genannten"
       },
       "enableIf": "{EQ1GE} anyof \"6\" or {EQ1GE.length} == 0"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "EQ1IT",
     "visible": false,
     "visibleIf": "{QF1} == 'it' and {QF2ITUTI} notempty and [\"16\", \"21\", \"30\", \"31\", \"34\", \"48\"] contains {QF2ITUTI}",
     "title": {
      "default": "In one or more of these municipalities: Porcia, Fontanafredda, Roveredo in Piano, Zoppola, Cordenons do you usually carry out any of the following activities?",
      "it": "In uno o più di questi comuni: Pordenone, Porcia, Fontanafredda, Roveredo in Piano, Zoppola o Cordenons svolgi solitamente una o più delle seguenti attività?"
     },
     "description": {
      "default": "(Multiple answers are possible)",
      "it": "(Sono possibili più risposte)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "it": "Lavoro/affari"
       },
       "enableIf": "{EQ1IT} anyof \"1\" or !({EQ1IT} anyof \"6\")"
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "it": "Studio"
       },
       "enableIf": "{EQ1IT} anyof \"2\" or !({EQ1IT} anyof \"6\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "it": "Acquisti"
       },
       "enableIf": "{EQ1IT} anyof \"3\" or !({EQ1IT} anyof \"6\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "it": "Attività di svago (nel tempo libero)"
       },
       "enableIf": "{EQ1IT} anyof \"4\" or !({EQ1IT} anyof \"6\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "it": "Altro"
       },
       "enableIf": "{EQ1IT} anyof \"5\" or !({EQ1IT} anyof \"6\")"
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "it": "Nessuna"
       },
       "enableIf": "{EQ1IT} anyof \"6\" or {EQ1IT.length} == 0"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "EQ1SL",
     "visible": false,
     "visibleIf": "{QF1} == 'si' and {QF2SL} == '7'",
     "title": {
      "default": "In the city of Maribor do you usually carry out any of the following activities?",
      "sl": "Ali v mestu Maribor običajno izvajate katere od naslednjih aktivnosti?"
     },
     "description": {
      "default": "(Multiple answers are possible)",
      "sl": "(Možnih je več odgovorov)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "sl": "Delo/posel"
       },
       "enableIf": "{EQ1SL} anyof \"1\" or !({EQ1SL} anyof \"6\")"
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "sl": "Študij"
       },
       "enableIf": "{EQ1SL} anyof \"2\" or !({EQ1SL} anyof \"6\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "sl": "Nakupovanje"
       },
       "enableIf": "{EQ1SL} anyof \"3\" or !({EQ1SL} anyof \"6\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "sl": "Aktivnosti v prostem času "
       },
       "enableIf": "{EQ1SL} anyof \"4\" or !({EQ1SL} anyof \"6\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "sl": "Drugo"
       },
       "enableIf": "{EQ1SL} anyof \"5\" or !({EQ1SL} anyof \"6\")"
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "sl": "Nobenega izmed navedenih"
       },
       "enableIf": "{EQ1SL} anyof \"6\" or {EQ1SL.length} == 0"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "EQ1SW1",
     "visible": false,
     "visibleIf": "((!{source}) or {source} == 'ch') and ({QFSW1} == 'A6' or {QFSW1} == 'A10' or {QFSW1} == 'A12' or {QFSW1} == 'A19')",
     "title": {
      "default": "In the Canton of Berne do you usually carry out any of the following activities?",
      "de": "Welche dieser Aktivitäten führen Sie in ihrer Wohngemeinde regelmässig aus?",
      "sl": "Ali v mestu Maribor običajno izvajate katere od naslednjih aktivnosti?",
      "de-ch": "Welche dieser Aktivitäten führen Sie in ihrer Wohngemeinde regelmässig aus?",
      "de-at": "Welche dieser Aktivitäten führen Sie in ihrer Wohngemeinde regelmässig aus?"
     },
     "description": {
      "default": "(Multiple answers are possible)",
      "sl": "(Možnih je več odgovorov)",
      "de": "(Mehrfachnennungen sind möglich)",
      "de-at": "(Mehrfachnennungen sind möglich)",
      "de-ch": "(Mehrfachnennungen sind möglich)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "de": "Arbeit/Geschäftlich",
        "de-at": "Arbeit/Geschäftlich",
        "de-ch": "Arbeit"
       },
       "enableIf": "{EQ1SW1} anyof \"1\" or !({EQ1SW1} anyof \"6\")"
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "de": "Ausbildung",
        "de-at": "Ausbildung",
        "de-ch": "Studium"
       },
       "enableIf": "{EQ1SW1} anyof \"2\" or !({EQ1SW1} anyof \"6\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "de": "Einkaufen",
        "de-at": "Einkaufen",
        "de-ch": "Einkaufen"
       },
       "enableIf": "{EQ1SW1} anyof \"3\" or !({EQ1SW1} anyof \"6\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "de": "Freizeitaktivitäten",
        "de-at": "Freizeitaktivitäten",
        "de-ch": "Freizeitaktivitäten"
       },
       "enableIf": "{EQ1SW1} anyof \"4\" or !({EQ1SW1} anyof \"6\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "de": "Sonstiges",
        "de-at": "Sonstiges",
        "de-ch": "Sonstiges"
       },
       "enableIf": "{EQ1SW1} anyof \"5\" or !({EQ1SW1} anyof \"6\")"
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "de": "Keine der genannten",
        "de-at": "Keine der genannten",
        "de-ch": "Keine der genannten"
       },
       "enableIf": "{EQ1SW1} anyof \"6\" or {EQ1SW1.length} == 0"
      }
     ]
    }
   ]
  },
  {
   "name": "activities_greater_lyon",
   "elements": [
    {
     "type": "checkbox",
     "name": "EQ1FRGL",
     "title": {
      "default": "In the Greater Lyon",
      "fr": "Sur le Grand Lyon"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "fr": "Travail"
       },
       "enableIf": "{EQ1FRGL} anyof \"1\" or !({EQ1FRGL} anyof \"6\")"
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "fr": "Etudes"
       },
       "enableIf": "{EQ1FRGL} anyof \"2\" or !({EQ1FRGL} anyof \"6\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "fr": "Courses"
       },
       "enableIf": "{EQ1FRGL} anyof \"3\" or !({EQ1FRGL} anyof \"6\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "fr": "Loisirs"
       },
       "enableIf": "{EQ1FRGL} anyof \"4\" or !({EQ1FRGL} anyof \"6\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "fr": "Autres"
       },
       "enableIf": "{EQ1FRGL} anyof \"5\" or !({EQ1FRGL} anyof \"6\")"
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "fr": "Aucune"
       },
       "enableIf": "{EQ1FRGL} anyof \"6\" or {EQ1FRGL.length} == 0"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "EQ1FRGA",
     "title": {
      "default": "In the Greater Annecy",
      "fr": "Sur le Grand Annecy"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Work/Business",
        "fr": "Travail"
       },
       "enableIf": "{EQ1FRGA} anyof \"1\" or !({EQ1FRGA} anyof \"6\")"
      },
      {
       "value": "2",
       "text": {
        "default": "Study",
        "fr": "Etudes"
       },
       "enableIf": "{EQ1FRGA} anyof \"2\" or !({EQ1FRGA} anyof \"6\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Shopping",
        "fr": "Courses"
       },
       "enableIf": "{EQ1FRGA} anyof \"3\" or !({EQ1FRGA} anyof \"6\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Leisure activities (free time)",
        "fr": "Loisirs"
       },
       "enableIf": "{EQ1FRGA} anyof \"4\" or !({EQ1FRGA} anyof \"6\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Other",
        "fr": "Autres"
       },
       "enableIf": "{EQ1FRGA} anyof \"5\" or !({EQ1FRGA} anyof \"6\")"
      },
      {
       "value": "6",
       "text": {
        "default": "None",
        "fr": "Aucune"
       },
       "enableIf": "{EQ1FRGA} anyof \"6\" or {EQ1FRGA.length} == 0"
      }
     ]
    }
   ],
   "visibleIf": "{QF2FD} == 'A1' or {QF2FD} == 'A3' or {QF2FD} == 'A5' or {QF2FD} == 'A6' or {QF2FD} == 'A7' or {QF2FD} == 'A8' or {QF2FD} == 'A10' or {QF2FD} == 'A11' or {QF2FD} == 'A12' or {QF2FD} == 'A13'",
   "description": {
    "default": "In the Greater Lyon or Greater Annecy do you usually carry out any of the following activities?",
    "fr": "Quelles activités pratiquez-vous sur le Grand Lyon ou le Grand Annecy?\n(plusieurs réponses possibles)"
   }
  },
  {
   "name": "question1",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q1TRAIN",
     "title": {
      "default": "Which of these aspects would you associate to the TRAIN?",
      "it": "Quali aspetti assoceresti al TRENO?",
      "de": "Welchen Aspekt verknüpfen Sie mit der BAHN?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit der BAHN?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit der BAHN?",
      "sl": "VLAK",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux au TRAIN?"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1TRAIN.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de": "Guter Komfort",
        "de-at": "Guter Komfort",
        "de-ch": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1TRAIN} anyof \"1\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1TRAIN} anyof \"2\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de-at": "Kostengünstig",
        "de-ch": "Kostengünstig",
        "de": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1TRAIN} anyof \"3\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de-ch": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1TRAIN} anyof \"4\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de-ch": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1TRAIN} anyof \"5\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de": "Gesundheitsfördernd",
        "de-ch": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1TRAIN} anyof \"6\" or {Q1TRAIN.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1TRAIN} anyof \"7\" or {Q1TRAIN.length} < 3"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q1CAR",
     "title": {
      "default": "Which of these aspects would you associate to the CAR?",
      "it": "Quali aspetti assoceresti all'AUTO?",
      "de": "Welchen Aspekt verknüpfen Sie mit AUTOVERKEHR?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit AUTOVERKEHR?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit AUTOVERKEHR?",
      "sl": "AVTOMOBIL",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux au CAR?"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1CAR.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de": "Guter Komfort",
        "de-at": "Guter Komfort",
        "de-ch": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1CAR} anyof \"1\" or {Q1CAR.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1CAR} anyof \"2\" or {Q1CAR.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de": "Kostengünstig",
        "de-at": "Kostengünstig",
        "de-ch": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1CAR} anyof \"3\" or {Q1CAR.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de-ch": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1CAR} anyof \"4\" or {Q1CAR.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de-ch": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1CAR} anyof \"5\" or {Q1CAR.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "de-ch": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1CAR} anyof \"6\" or {Q1CAR.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1CAR} anyof \"7\" or {Q1CAR.length} < 3"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q1PT",
     "title": {
      "default": "Which of these aspects would you associate to the PUBLIC TRANSPORT (Bus, Tram, Metro)?",
      "it": "Quali aspetti assoceresti al TRASPORTO PUBBLICO (Bus, Tram, Metro)?",
      "de": "Welchen Aspekt verknüpfen Sie mit DEM ÖPNV?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit DEM ÖPNV?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit DEM ÖFFENTLICHEN VERKEHR?",
      "sl": "JAVNI MESTNI PREVOZ (avtobus)",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux au TRANSPORT PUBLIC URBAIN (Bus, Tram, Métro)?"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1PT.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de-ch": "Guter Komfort",
        "de-at": "Guter Komfort",
        "de": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1PT} anyof \"1\" or {Q1PT.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1PT} anyof \"2\" or {Q1PT.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de-ch": "Kostengünstig",
        "de-at": "Kostengünstig",
        "de": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1PT} anyof \"3\" or {Q1PT.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de-ch": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1PT} anyof \"4\" or {Q1PT.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de-ch": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1PT} anyof \"5\" or {Q1PT.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de-ch": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "de": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1PT} anyof \"6\" or {Q1PT.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1PT} anyof \"7\" or {Q1PT.length} < 3"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q1BIKE",
     "title": {
      "default": "Which of these aspects would you associate to the BIKE?",
      "it": "Quali aspetti assoceresti alla BICICLETTA?",
      "de": "Welchen Aspekt verknüpfen Sie mit FAHRRADFAHREN?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit FAHRRADFAHREN?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit FAHRRADFAHREN?",
      "sl": "KOLESARJENJE",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux au VÉLO?"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1BIKE.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de": "Guter Komfort",
        "de-at": "Guter Komfort",
        "de-ch": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1BIKE} anyof \"1\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1BIKE} anyof \"2\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de": "Kostengünstig",
        "de-at": "Kostengünstig",
        "de-ch": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1BIKE} anyof \"3\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de-ch": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1BIKE} anyof \"4\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de-ch": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1BIKE} anyof \"5\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "de-ch": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1BIKE} anyof \"6\" or {Q1BIKE.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1BIKE} anyof \"7\" or {Q1BIKE.length} < 3"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q1WALK",
     "title": {
      "default": "Which of these aspects would you associate to the WALK?",
      "it": "Quali aspetti assoceresti al CAMMINARE?",
      "de": "Welchen Aspekt verknüpfen Sie mit DEM ZU Fuß GEHEN?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit DEM ZU Fuß GEHEN?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit DEM ZU FUSS GEHEN?",
      "sl": "HOJA",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux À LA MARCHE?"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1WALK.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de": "Guter Komfort",
        "de-at": "Guter Komfort",
        "de-ch": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1WALK} anyof \"1\" or {Q1WALK.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1WALK} anyof \"2\" or {Q1WALK.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de": "Kostengünstig",
        "de-at": "Kostengünstig",
        "de-ch": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1WALK} anyof \"3\" or {Q1WALK.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de-ch": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1WALK} anyof \"4\" or {Q1WALK.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de-ch": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1WALK} anyof \"5\" or {Q1WALK.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de-ch": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "de": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1WALK} anyof \"6\" or {Q1WALK.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1WALK} anyof \"7\" or {Q1WALK.length} < 3"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q1MOTORB",
     "title": {
      "default": "Which of these aspects would you associate to the MOTORBIKE/MOPED?",
      "it": "Quali aspetti assoceresti alla MOTOCICLETTA/MOTORINO?",
      "de": "Welchen Aspekt verknüpfen Sie mit MOTORRADFAHREN?",
      "de-at": "Welchen Aspekt verknüpfen Sie mit MOTORRAD/MOPED?",
      "de-ch": "Welchen Aspekt verknüpfen Sie mit MOTORRADFAHREN?",
      "fr": "Quels sont les qualificatifs qui correspondent le mieux aux 2 ROUES MOTORISÉS?",
      "sl": "MOTOR/MOPED"
     },
     "validators": [
      {
       "type": "expression",
       "text": {
        "default": "Please select at most 3 aspects",
        "it": "Per favore, seleziona al massimo 3 delle opzioni elencate",
        "de": "Bitte wählen Sie max. drei der folgenden Optionen",
        "sl": "Za vsako rešitev mobilnosti izberite največ 3 možnosti.",
        "fr": "Sélectionnez au maximum 3 termes parmi ceux proposés",
        "de-at": "Bitte wählen Sie max. drei der folgenden Optionen",
        "de-ch": "Bitte wählen Sie max. drei der folgenden Optionen"
       },
       "expression": "{Q1MOTORB.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Good Comfort",
        "it": "Comfort/comodità",
        "de": "Guter Komfort",
        "de-ch": "Guter Komfort",
        "de-at": "Guter Komfort",
        "sl": "Udobje",
        "fr": "Bon confort"
       },
       "enableIf": "{Q1MOTORB} anyof \"1\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "2",
       "text": {
        "default": "High Accessibility",
        "it": "Elevata facilità di accesso",
        "de": "Hohe Barrierefreiheit",
        "de-at": "Hohe Barrierefreiheit",
        "de-ch": "Hohe Barrierefreiheit",
        "sl": "Visoka dostopnost",
        "fr": "Grande accesibilité"
       },
       "enableIf": "{Q1MOTORB} anyof \"2\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "3",
       "text": {
        "default": "Cost efficiency",
        "it": "Buon rapporto qualità/prezzo",
        "de": "Kostengünstig",
        "de-at": "Kostengünstig",
        "de-ch": "Kostengünstig",
        "sl": "Stroškovna učinkovitost",
        "fr": "Bon rapport qualité / prix"
       },
       "enableIf": "{Q1MOTORB} anyof \"3\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "4",
       "text": {
        "default": "Time saving",
        "it": "Risparmio di tempo",
        "de": "Zeitsparend",
        "de-at": "Zeitsparend",
        "de-ch": "Zeitsparend",
        "sl": "Prihranek časa",
        "fr": "Gain de temps"
       },
       "enableIf": "{Q1MOTORB} anyof \"4\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "5",
       "text": {
        "default": "Reducing pollution",
        "it": "Riduzione dell'inquinamento",
        "de": "Umweltfreundlich",
        "de-at": "Umweltfreundlich",
        "de-ch": "Umweltfreundlich",
        "sl": "Zmanjšanje onesnaževanja",
        "fr": "Réduction de la pollution"
       },
       "enableIf": "{Q1MOTORB} anyof \"5\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "6",
       "text": {
        "default": "Improve health conditions",
        "it": "Miglioramento della propria salute",
        "de": "Gesundheitsfördernd",
        "de-at": "Gesundheitsfördernd",
        "de-ch": "Gesundheitsfördernd",
        "sl": "Boljši zdravstveni pogoji",
        "fr": "Amélioration de la santé"
       },
       "enableIf": "{Q1MOTORB} anyof \"6\" or {Q1MOTORB.length} < 3"
      },
      {
       "value": "7",
       "text": {
        "default": "High Sociability",
        "it": "Elevata socialità (relazione con altre persone)",
        "de": "Geselligkeit",
        "de-at": "Geselligkeit",
        "de-ch": "Geselligkeit",
        "sl": "Družabnost",
        "fr": "Grande sociabilité"
       },
       "enableIf": "{Q1MOTORB} anyof \"7\" or {Q1MOTORB.length} < 3"
      }
     ]
    }
   ],
   "description": {
    "default": "Which of these aspects would you associate to the following different transport modes: TRAIN, CAR, PUBLIC TRANSPORT, BICYCLE, WALK, MOTORBIKE/MOPED? Please, for each mobility solution select maximum 3 options between the given ones.",
    "it": "Quale di questi aspetti assoceresti ai seguenti mezzi di spostamento: TRENO, AUTO, TRASPORTO PUBBLICO, BICICLETTA, CAMMINARE, MOTOCICLETTA/MOTORINO?\nPer favore, per ogni mezzo seleziona al massimo 3 delle opzioni elencate",
    "de": "Welche Assoziationen verknüpfen Sie mit den folgenden Mobilitätsformen: Eisenbahn, Auto, ÖPNV, Fahrrad, zu Fuß, Motorrad?\n(Bitte wählen Sie für jede Mobilitätsart max. drei der folgenden Optionen)",
    "de-ch": "Welche Assoziationen verknüpfen Sie mit den folgenden Mobilitätsformen: Eisenbahn, Auto, öffentlicher Verkehr, Fahrrad, zu FuSS, Motorrad?\nBitte wählen Sie für jede Mobilitätsart max. drei der folgenden Optionen.",
    "de-at": "Welche der folgenden Aspekte würden Sie den folgenden Verkehrsmitteln zuordnen? Eisenbahn, Auto, öffentlicher Nahverkehr, Fahrrad, zu Fuß, Motorrad?\n(Bitte wählen Sie für jede Mobilitätsart max. drei der folgenden Optionen)",
    "sl": "Katere od naštetih trditev bi lahko povezali z omenjenimi načini prevoza? Za vsako rešitev mobilnosti izberite največ 3 možnosti.\n",
    "fr": "Quels sont les qualificatifs qui correspondent le mieux à ces différents modes de transport (train, car, transport public, vélo, marche, 2 roues motorisés)?\nPour chaque mode de transport, sélectionnez au maximum 3 termes parmi ceux proposés."
   }
  },
  {
   "name": "mobilita_quotidiana_1",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q2",
     "title": {
      "default": "What are the means of transport you use for your daily travels?",
      "it": "Quali sono i mezzi di trasporto che usi abitualmente per i tuoi spostamenti quotidiani?",
      "de": "Welche Transportmittel benutzen Sie für Ihre täglichen Reisen?",
      "de-ch": "Welche Transportmittel benutzen Sie für Ihre täglichen Reisen?",
      "de-at": "Welche Transportmittel/Verkehrsmittel benutzen Sie für Ihre täglichen Reisen/tägliche Mobilität?",
      "sl": "Katera načine prevoza uporabljate za vsakodnevna potovanja?",
      "fr": "Quels moyens de transport utilisez-vous pour vos déplacements quotidiens?"
     },
     "description": {
      "default": "(Multiple answers are possible)",
      "sl": "(Možnih je več odgovorov)",
      "de": "(Mehrfachnennungen sind möglich)",
      "de-at": "(Mehrfachnennungen sind möglich)",
      "de-ch": "(Mehrfachnennungen sind möglich)",
      "it": "(Sono possibili più risposte)",
      "fr": "(Plusieurs réponses possibles)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Car (both as a driver/passenger)",
        "it": "Automobile (sia come guidatore che come passeggero)",
        "de": "Auto (Als Fahrer und Beifahrer)",
        "de-at": "Auto (Als Fahrer*in und Passagier*in)",
        "de-ch": "Auto (Als Fahrer und Beifahrer)",
        "sl": "Avtomobil (kot voznik ali sopotnik)",
        "fr": "Voiture (conducteur ou passager)"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Motorbike",
        "it": "Motocicletta",
        "de": "Motorrad",
        "de-at": "Motorrad",
        "de-ch": "Motorrad",
        "sl": "Motor",
        "fr": "2 roues motorisés"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Public transport (Bus/tram/metro)",
        "it": "Trasporto Pubblico (bus/tram/metro)",
        "de": "ÖPNV (Bus/Tram/Metro)",
        "de-at": "Öffentlicher Verkehr (Bus/Tram/U-Bahn/Schnellzug)",
        "de-ch": "Öffentlicher Verkehr (Bus/Tram/Metro)",
        "sl": "Javni prevoz",
        "fr": "Transport public (bus/tram/métro)"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Train",
        "it": "Treno",
        "de": "Bahn",
        "de-at": "Bahn",
        "de-ch": "Bahn",
        "sl": "Vlak"
       }
      },
      {
       "value": "5",
       "text": {
        "default": "Bicycle (also e-bike)",
        "it": "Bicicletta / Bicicletta elettrica",
        "de": "Fahrrad (E-Fahrrad, ...)",
        "de-at": "Fahrrad (E-Fahrrad, ...)",
        "de-ch": "Fahrrad (E-Fahrrad, ...)",
        "sl": "Kolo (tudi električno kolo)",
        "fr": "Vélo/Vélo à assistance électrique"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "Walk",
        "it": "Camminare",
        "de": "Zu Fuß",
        "de-at": "Zu Fuß",
        "de-ch": "Zu Fuss",
        "sl": "Hoja",
        "fr": "Marche"
       }
      },
      {
       "value": "7",
       "text": {
        "default": "Other (scooter/skateboard/hoverboard, …)",
        "it": "Altro (monopattino/skateboard/hoverboard, …)",
        "de": "Sonstiges ((E-)Scooter, ...)",
        "de-at": "Sonstiges ((E-)Scooter, ...)",
        "de-ch": "Sonstiges ((E-)Scooter, ...)",
        "sl": "Drugo",
        "fr": "Autre (trotinette/skateboard/hoverboard/…)"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "mobilita_quotidiana_2",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q3",
     "title": {
      "default": "What is the mean of transport you use the most (longest trip in terms of distance)?",
      "it": "Qual è il mezzo di trasporto che usi di più, ovvero per coprire la distanza più lunga?",
      "de": "Welches Transportmittel nutzen Sie am meisten (in Bezug auf die Entfernung)?",
      "de-ch": "Welches Transportmittel nutzen Sie am meisten (in Bezug auf die Entfernung)?\n(Nur eine Nennung möglich)",
      "de-at": "Welches Transportmittel/Verkehrsmittel nutzen Sie am meisten (in Bezug auf die Distanz)?",
      "sl": "S katerim načinom prevoza opravljate najdaljša potovanja?",
      "fr": "Quel est le moyen de transport avec lequel vous parcourez la distance la plus grande?"
     },
     "description": {
      "default": "(Only one answer possible)",
      "fr": "(Une seule réponse possible)",
      "it": "(È possibile una sola risposta)",
      "de": "(Nur eine Nennung möglich)",
      "de-at": "(Nur eine Nennung möglich)",
      "de-ch": "(Nur eine Nennung möglich)",
      "sl": "(Izberite samo en odgovor)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Car (both as a driver/passenger)",
        "de": "Auto (Als Fahrer und Beifahrer)",
        "de-ch": "Auto (Als Fahrer und Beifahrer)",
        "de-at": "Auto (Als Fahrer*in und Passagier*in)",
        "it": "Automobile (sia come guidatore che come passeggero)",
        "sl": "Avtomobil (kot voznik ali sopotnik)",
        "fr": "Voiture (conducteur ou passager)"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Motorbike",
        "de": "Motorrad",
        "de-at": "Motorrad",
        "de-ch": "Motorrad",
        "it": "Motocicletta",
        "sl": "Motor",
        "fr": "2 roues motorisés"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Public transport (Bus/tram/metro)",
        "de": "ÖPNV (Bus/Tram/Metro)",
        "de-at": "Öffentlicher Verkehr (Bus/Tram/U-Bahn/Schnellzug)",
        "de-ch": "Öffentlicher Verkehr (Bus/Tram/Metro)",
        "it": "Trasporto Pubblico (bus/tram/metro)",
        "sl": "Javni prevoz",
        "fr": "Transport public (bus/tram/métro)"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Train",
        "de": "Bahn",
        "de-at": "Bahn",
        "de-ch": "Bahn",
        "it": "Treno",
        "sl": "Vlak"
       }
      },
      {
       "value": "5",
       "text": {
        "default": "Bicycle (also e-bike)",
        "de": "Fahrrad (E-Fahrrad, ...)",
        "de-at": "Fahrrad (E-Fahrrad, ...)",
        "de-ch": "Fahrrad (E-Fahrrad, ...)",
        "it": "Bicicletta / Bicicletta elettrica",
        "sl": "Kolo (tudi električno kolo)",
        "fr": "Vélo/Vélo à assistance électrique"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "Walk",
        "de": "Zu Fuß",
        "de-at": "Zu Fuß",
        "de-ch": "Zu Fuss",
        "it": "Camminare",
        "sl": "Hoja",
        "fr": "Marche"
       }
      },
      {
       "value": "7",
       "text": {
        "default": "Other (scooter/skateboard/hoverboard, …)",
        "de": "Sonstiges ((E-)Scooter, ...)",
        "de-at": "Sonstiges ((E-)Scooter, ...)",
        "de-ch": "Sonstiges ((E-)Scooter, ...)",
        "it": "Altro (monopattino/skateboard/hoverboard, …)",
        "sl": "Drugo",
        "fr": "Autre (trotinette/skateboard/hoverboard/…)"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "mobilita_quotidiana_3",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q4",
     "title": {
      "default": "Which of the following travel services have you ever heard of?",
      "it": "Di quali dei seguenti servizi di mobilità hai sentito parlare?",
      "de": "Von welche der folgenden Mobilitätslösungen haben Sie schon einmal gehört?",
      "de-ch": "Von welche der folgenden Mobilitätslösungen haben Sie schon einmal gehört?",
      "de-at": "Von welche der folgenden Mobilitätslösungen/Mobilitätsangebote haben Sie schon einmal gehört?",
      "sl": "Za katere od naslednjih storitev mobilnosti ste že slišali?",
      "fr": "Desquelles de ces solutions de mobilité avez vous entendu parler?"
     },
     "description": {
      "default": "(Multiple answers possible)",
      "it": "(Possibili più risposte)",
      "de": "(Mehrfachnennungen sind möglich)",
      "de-at": "(Mehrfachnennungen sind möglich)",
      "de-ch": "(Mehrfachnennungen sind möglich)",
      "fr": "(Plusieurs réponses possibles)",
      "sl": "(Možnih je več odgovorov)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Car sharing",
        "sl": "Skupna uporaba avtomobila (car sharing)",
        "fr": "Autopartage",
        "de": "Car-sharing",
        "de-at": "Car-sharing",
        "de-ch": "Car-sharing"
       },
       "enableIf": "{Q4} anyof \"1\" or !({Q4} anyof \"7\")"
      },
      {
       "value": "2",
       "text": {
        "default": "Car pooling",
        "de": "Car-pooling",
        "de-at": "Car-pooling",
        "de-ch": "Car-pooling",
        "sl": "Souporaba avtomobila (car pooling)",
        "fr": "Covoiturage"
       },
       "enableIf": "{Q4} anyof \"2\" or !({Q4} anyof \"7\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Bike sharing",
        "de": "Bike-sharing",
        "de-at": "Bike-sharing",
        "de-ch": "Bike-sharing",
        "sl": "Skupna uporaba kolesa (bike sharing)",
        "fr": "Vélopartage"
       },
       "enableIf": "{Q4} anyof \"3\" or !({Q4} anyof \"7\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Ride hailing",
        "de": "Ruftaxi (z.B. Uber, sonstiger Fahrdienstleister)",
        "de-at": "Ruftaxi (z.B. Uber, sonstiger Fahrdienstleister)",
        "de-ch": "Ruftaxi (z.B. Uber, sonstiger Fahrdienstleister)",
        "it": "Servizi di trasporto a chiamata (non taxi)",
        "sl": "Sopotništvo (ride hailing)",
        "fr": "VTC"
       },
       "enableIf": "{Q4} anyof \"4\" or !({Q4} anyof \"7\")"
      },
      {
       "value": "8",
       "text": {
        "default": "Dial-a-bus",
        "de": "Bedarfsbusse",
        "de-at": "Bedarfsbusse",
        "de-ch": "Bedarfsbusse"
       },
       "visibleIf": "{QF1} == \"ch\"",
       "enableIf": "{Q4} anyof \"8\" or !({Q4} anyof \"7\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Scooter sharing",
        "de": "Roller-sharing",
        "de-at": "Scooter-sharing",
        "de-ch": "Roller-sharing",
        "sl": "Skupna uporaba skuterja (scooter sharing)",
        "fr": "Motopartage"
       },
       "enableIf": "{Q4} anyof \"5\" or !({Q4} anyof \"7\")"
      },
      {
       "value": "6",
       "text": {
        "default": "Hitchhiking benches",
        "de": "Mitfahrbänke",
        "de-at": "Mitfahrbänke",
        "de-ch": "Mitfahrbänke",
        "it": "Panchine-autostop",
        "sl": "Klopi za štopanje",
        "fr": "Autostop organisé"
       },
       "enableIf": "{Q4} anyof \"6\" or !({Q4} anyof \"7\")"
      },
      {
       "value": "7",
       "text": {
        "default": "None of these",
        "de": "Keine der genannten",
        "de-at": "Keine der genannten",
        "de-ch": "Keine der genannten",
        "it": "Nessuno di questi",
        "sl": "Nobenega izmed navedenih",
        "fr": "Aucune"
       },
       "enableIf": "{Q4} anyof \"7\" or {Q4.length} == 0"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Q5",
     "title": {
      "default": "Which of those have you ever used?",
      "it": "Quale di questi ti è capitato di utilizzare?",
      "de": "Welche davon haben Sie bisher genutzt?",
      "de-ch": "Welche davon haben Sie bisher genutzt?",
      "de-at": "Welche davon haben Sie bisher genutzt?",
      "sl": "Katere od omenjenih ste že uporabili?",
      "fr": "Lesquelles avez-vous utilisées?"
     },
     "description": {
      "default": "(Multiple answers possible)",
      "it": "(Possibili più risposte)",
      "de-ch": "(Mehrfachnennungen sind möglich)",
      "de-at": "(Mehrfachnennungen sind möglich)",
      "de": "(Mehrfachnennungen sind möglich)",
      "fr": "(Plusieurs réponses possibles)",
      "sl": "(Možnih je več odgovorov)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Car sharing",
        "de": "Car-sharing",
        "de-at": "Car-sharing",
        "de-ch": "Car-sharing",
        "sl": "Skupna uporaba avtomobila (car sharing)",
        "fr": "Autopartage"
       },
       "enableIf": "{Q5} anyof \"1\" or !({Q5} anyof \"7\")"
      },
      {
       "value": "2",
       "text": {
        "default": "Car pooling",
        "de": "Car-pooling",
        "de-at": "Car-pooling",
        "de-ch": "Car-pooling",
        "sl": "Souporaba avtomobila (car pooling)",
        "fr": "Covoiturage"
       },
       "enableIf": "{Q5} anyof \"2\" or !({Q5} anyof \"7\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Bike sharing",
        "de": "Bike-sharing",
        "de-at": "Bike-sharing",
        "de-ch": "Bike-sharing",
        "sl": "Skupna uporaba kolesa (bike sharing)",
        "fr": "Vélopartage"
       },
       "enableIf": "{Q5} anyof \"3\" or !({Q5} anyof \"7\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Ride hailing",
        "it": "Servizi di trasporto a chiamata (non taxi)",
        "de": "Ruftaxi (z.B. Uber, sonstiger Fahrdienstleister)",
        "de-at": "Ruftaxi (z.B. Uber, sonstiger Fahrdienstleister)",
        "de-ch": "Ruftaxi (z.B. Uber, sonstiger Fahrdienstleister)",
        "sl": "Sopotništvo (ride hailing)",
        "fr": "VTC"
       },
       "enableIf": "{Q5} anyof \"4\" or !({Q5} anyof \"7\")"
      },
      {
       "value": "8",
       "text": {
        "default": "Dial-a-bus",
        "de": "Bedarfsbusse",
        "de-at": "Bedarfsbusse",
        "de-ch": "Bedarfsbusse"
       },
       "visibleIf": "{QF1} == \"ch\"",
       "enableIf": "{Q5} anyof \"8\" or !({Q5} anyof \"7\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Scooter sharing",
        "de": "Roller-sharing",
        "de-at": "Scooter-sharing",
        "de-ch": "Roller-sharing",
        "sl": "Skupna uporaba skuterja (scooter sharing)",
        "fr": "Motopartage"
       },
       "enableIf": "{Q5} anyof \"5\" or !({Q5} anyof \"7\")"
      },
      {
       "value": "6",
       "text": {
        "default": "Hitchhiking benches",
        "it": "Panchine-autostop",
        "de": "Mitfahrbänke",
        "de-at": "Mitfahrbänke",
        "de-ch": "Mitfahrbänke",
        "sl": "Klopi za štopanje",
        "fr": "Autostop organisé"
       },
       "enableIf": "{Q5} anyof \"6\" or !({Q5} anyof \"7\")"
      },
      {
       "value": "7",
       "text": {
        "default": "None of these",
        "it": "Nessuno di questi",
        "de": "Keine der genannten",
        "de-at": "Keine der genannten",
        "de-ch": "Keine der genannten",
        "sl": "Nobenega izmed navedenih",
        "fr": "Aucune"
       },
       "enableIf": "{Q5} anyof \"7\" or {Q5.length} == 0"
      }
     ]
    }
   ]
  },
  {
   "name": "mobility_capital",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q6",
     "title": {
      "default": "Which means of transport do you own or have access to*?",
      "it": "A quali mezzi di trasporto hai accesso* o possiedi?",
      "de": "Welche Transportmittel besitzen Sie oder haben *Zugriff darauf?",
      "de-at": "Welche Transportmittel besitzen Sie oder haben *Zugriff darauf?",
      "de-ch": "Welche Transportmittel besitzen Sie oder haben *Zugriff darauf?",
      "sl": "Do katerih prevoznih sredstev lahko dostopate?",
      "fr": "A quel moyens de transport avez-vous accès* ?"
     },
     "description": {
      "default": "\\* to have access to means that you can easily use it even if you don't own it (for example: \"my parents own a car I can use if I want/need\")",
      "it": "\\* per \"Avere accesso\" si intende che puoi utilizzarli facilmente anche senza averne il diretto possesso (ad esempio: \"i miei genitori posseggono un'auto che posso utilizzare in caso ne avessi bisogno\")",
      "de": "\\* Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört (z. B.: \"Meine Eltern besitzen ein Auto, das ich benutzen kann, wenn ich es will/benötige\")",
      "de-at": "\\* Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört (z. B.: \"Meine Eltern besitzen ein Auto, das ich benutzen kann, wenn ich es will/benötige\")",
      "de-ch": "\\* Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört (z. B.: \"Meine Eltern besitzen ein Auto, das ich benutzen kann, wenn ich es will/benötige\")",
      "sl": "Imeti dostop pomeni, da jih lahko enostavno uporabljate, tudi če jih nimate v lasti (na primer: »Moji starši imajo avto, ki ga lahko uporabim, če ga hočem/potrebujem.«)",
      "fr": "\\* Avoir accès signifie que vous pouvez facilement l'utiliser même si vous n'en avez pas la propriété"
     },
     "validators": [
      {
       "type": "expression",
       "text": "You can't select anything if you selected \"None of these\"",
       "expression": "(!({Q6} anyof \"9\")) or {Q6.length} == 1"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Cars",
        "it": "Automobile",
        "de": "Autos",
        "de-at": "Autos",
        "de-ch": "Autos",
        "sl": "Avtomobili",
        "fr": "Voiture"
       },
       "enableIf": "{Q6} anyof \"1\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "2",
       "text": {
        "default": "Public Transport Season ticket",
        "it": "Abbonamento al trasporto pubblico (o carnet multicorse)",
        "de": "Dauerkarte ÖPNV",
        "de-at": "Monats-/Jahres-Ticket für den öffentlichen Verkehr",
        "de-ch": "Billette des öffentlichen Verkehrs",
        "sl": "Mesečna vozovnica za javni prevoz",
        "fr": "Abonnement transports en commun"
       },
       "enableIf": "{Q6} anyof \"2\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Motorbike/moped",
        "it": "Motocicletta/motorino",
        "de": "Motorrad/Moped",
        "de-at": "Motorrad/Moped",
        "de-ch": "Motorrad/Moped",
        "sl": "Motor/moped",
        "fr": "2 roues motorisés"
       },
       "enableIf": "{Q6} anyof \"3\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Bicycle",
        "it": "Bicicletta/bicicletta elettrica",
        "de": "Fahrrad (E-Fahrrad, ...)",
        "de-at": "Fahrrad (E-Fahrrad, ...)",
        "de-ch": "Fahrrad (E-Fahrrad, ...)",
        "sl": "Kolo (tudi električno kolo)",
        "fr": "Vélo/Vélo à assistance électrique"
       },
       "enableIf": "{Q6} anyof \"4\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Scooter/skateboard/hoverboard",
        "it": "Monopattino/skateboard/hoverboard",
        "de": "Roller/Skateboard/Hoverboard",
        "de-at": "(E-)Scooter/Skateboard/Hoverboard",
        "de-ch": "Roller/Skateboard/Hoverboard",
        "sl": "Skiro/rolka/hoverboard",
        "fr": "Trotinette/skateboard/hoverboard"
       },
       "enableIf": "{Q6} anyof \"5\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "6",
       "text": {
        "default": "Bike Sharing account",
        "it": "Abbonamento al servizio di Bike Sharing",
        "de": "Bike-Sharing-Mitgliedschaft",
        "de-at": "Bike-Sharing-Mitgliedschaft",
        "de-ch": "Bike-Sharing-Mitgliedschaft",
        "sl": "Račun za storitev skupne uporabe koles (bike sharing)",
        "fr": "Abonnement vélo"
       },
       "enableIf": "{Q6} anyof \"6\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "7",
       "text": {
        "default": "Car sharing account",
        "it": "Abbonamento al servizio di Car Sharing",
        "de": "Auto-Sharing-Mitgliedschaft",
        "de-at": "Auto-Sharing-Mitgliedschaft",
        "de-ch": "Carsharing-Mitgliedschaft",
        "sl": "Račun za storitev skupne uporabe avtomobilov (car sharing)",
        "fr": "Abonnement autopartage"
       },
       "enableIf": "{Q6} anyof \"7\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "8",
       "text": {
        "default": "Other",
        "it": "Altro",
        "de": "Andere",
        "de-at": "Andere",
        "de-ch": "Andere",
        "sl": "Drugo",
        "fr": "Autre"
       },
       "enableIf": "{Q6} anyof \"8\" or !({Q6} anyof \"9\")"
      },
      {
       "value": "9",
       "text": {
        "default": "None of these",
        "it": "Nessuno di questi",
        "de": "Nichts davon",
        "de-at": "Nichts davon",
        "de-ch": "Nichts davon",
        "sl": "Ničesar od omenjenega",
        "fr": "Aucun"
       },
       "enableIf": "{Q6} anyof \"9\" or {Q6.length} == 0"
      }
     ]
    }
   ]
  },
  {
   "name": "Q6_bis",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q6CARS",
     "visibleIf": "{Q6} anyof \"1\"",
     "title": {
      "default": "How often do you have access to a car?",
      "it": "Con quale frequenza puoi accedere a un'auto?",
      "de": "Wie oft steht Ihnen ein Auto zu Verfügung?",
      "de-at": "Verfügbarkeit eines Autos",
      "de-ch": "Verfügbarkeit eines Autos",
      "sl": "Kako pogosto lahko dostopate do avtomobila?",
      "fr": "Avez-vous accès à une voiture?"
     },
     "description": {
      "default": "To have access to means that you can easily use it even if you don't own it.",
      "it": "Per \"Avere accesso\" si intende che puoi utilizzarli facilmente anche senza averne il diretto possesso.",
      "de": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "de-at": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "de-ch": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "sl": "Imeti dostop pomeni, da jih lahko enostavno uporabljate, tudi če jih nimate v lasti.",
      "fr": "Avoir accès signifie que vous pouvez facilement l'utiliser même si vous n'en avez pas la propriété."
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Always",
        "it": "Sempre",
        "de": "Immer",
        "de-at": "Immer",
        "de-ch": "Immer",
        "sl": "Vedno",
        "fr": "Toujours"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Often",
        "it": "Spesso",
        "de": "Oft",
        "de-at": "Oft",
        "de-ch": "Oft",
        "sl": "Pogosto",
        "fr": "Fréquemment"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Rarely",
        "it": "Raramente",
        "de": "Selten",
        "de-at": "Selten",
        "de-ch": "Selten",
        "sl": "Redko",
        "fr": "Rarement"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Never",
        "it": "Mai",
        "de": "Nie",
        "de-at": "Nie",
        "de-ch": "Nie",
        "sl": "Nikoli",
        "fr": "Jamais"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q6MOTOR",
     "visibleIf": "{Q6} anyof \"3\"",
     "title": {
      "default": "How often do you have access to a Motorbike/moped?",
      "it": "Con quale frequenza puoi accedere a una motocicletta/motorino?",
      "de": "Wie oft steht Ihnen ein Motorrad/Moped zur Vefügung?",
      "de-at": "Verfügbarkeit eines Motorrads/Mopeds",
      "de-ch": "Verfügbarkeit eines Motorrads/Mopeds",
      "sl": "Kako pogosto lahko dostopate do motorja/mopeda?",
      "fr": "Avez-vous accès à une mobylette / moto?"
     },
     "description": {
      "default": "To have access to means that you can easily use it even if you don't own it.",
      "de": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "de-at": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "de-ch": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "sl": "Imeti dostop pomeni, da jih lahko enostavno uporabljate, tudi če jih nimate v lasti.",
      "fr": "Avoir accès signifie que vous pouvez facilement l'utiliser même si vous n'en avez pas la propriété.",
      "it": "Per \"Avere accesso\" si intende che puoi utilizzarli facilmente anche senza averne il diretto possesso."
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Always",
        "it": "Sempre",
        "de": "Immer",
        "de-at": "Immer",
        "de-ch": "Immer",
        "sl": "Vedno",
        "fr": "Toujours"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Often",
        "it": "Spesso",
        "de": "Oft",
        "de-at": "Oft",
        "de-ch": "Oft",
        "sl": "Pogosto",
        "fr": "Fréquemment"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Rarely",
        "it": "Raramente",
        "de-ch": "Selten",
        "de-at": "Selten",
        "de": "Selten",
        "sl": "Redko",
        "fr": "Rarement"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Never",
        "it": "Mai",
        "de": "Nie",
        "de-at": "Nie",
        "de-ch": "Nie",
        "sl": "Nikoli",
        "fr": "Jamais"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q6BIKES",
     "visibleIf": "{Q6} anyof \"4\"",
     "title": {
      "default": "How often do you have access to a bicycle/e-bike?",
      "it": "Con quale frequenza puoi accedere a una bicicletta?",
      "de": "Wie oft steht Ihnen ein Fahrrad zur Verfügung?",
      "de-at": "Verfügbarkeit eines Fahrrads",
      "de-ch": "Verfügbarkeit eines Fahrrads",
      "sl": "Kako pogosto lahko dostopate do kolesa?",
      "fr": "Avez-vous accès à un vélo?"
     },
     "description": {
      "default": "To have access to means that you can easily use it even if you don't own it.",
      "it": "Per \"Avere accesso\" si intende che puoi utilizzarli facilmente anche senza averne il diretto possesso.",
      "de": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "de-at": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "de-ch": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "sl": "Imeti dostop pomeni, da jih lahko enostavno uporabljate, tudi če jih nimate v lasti.",
      "fr": "Avoir accès signifie que vous pouvez facilement l'utiliser même si vous n'en avez pas la propriété."
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Always",
        "it": "Sempre",
        "de": "Immer",
        "de-at": "Immer",
        "de-ch": "Immer",
        "sl": "Vedno",
        "fr": "Toujours"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Often",
        "it": "Spesso",
        "de": "Oft",
        "de-at": "Oft",
        "de-ch": "Oft",
        "sl": "Pogosto",
        "fr": "Fréquemment"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Rarely",
        "it": "Raramente",
        "de": "Selten",
        "de-at": "Selten",
        "de-ch": "Selten",
        "sl": "Redko",
        "fr": "Rarement"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Never",
        "it": "Mai",
        "de": "Nie",
        "de-at": "Nie",
        "de-ch": "Nie",
        "sl": "Nikoli",
        "fr": "Jamais"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q6SCOOT",
     "visibleIf": "{Q6} anyof \"5\"",
     "title": {
      "default": "How often do you have access to a scooter/skateboard/hoverboard?",
      "de": "Wie oft steht Ihnen ein Roller/Skateboards/Hoverboard zur Verfügung?",
      "de-at": "Verfügbarkeit eines Roller/Skateboards/Hoverboards",
      "de-ch": "Verfügbarkeit eines Roller/Skateboards/Hoverboards",
      "sl": "Kako pogosto lahko dostopate do skiro/rolke?",
      "fr": "Avez-vous accès à une trotinette/skateboard/hoverboard?",
      "it": "Con quale frequenza puoi accedere a un monopattino/skateboard/hoverboard?"
     },
     "description": {
      "default": "To have access to means that you can easily use it even if you don't own it.",
      "de": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "de-at": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "de-ch": "Zugriff bedeutet, dass eine (Mit)Nutzung möglich ist, auch wenn einem das Transportmittel nicht persönlich gehört.",
      "sl": "Imeti dostop pomeni, da jih lahko enostavno uporabljate, tudi če jih nimate v lasti.",
      "fr": "Avoir accès signifie que vous pouvez facilement l'utiliser même si vous n'en avez pas la propriété.",
      "it": "Per \"Avere accesso\" si intende che puoi utilizzarli facilmente anche senza averne il diretto possesso."
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Always",
        "it": "Sempre",
        "de": "Immer",
        "de-at": "Immer",
        "de-ch": "Immer",
        "sl": "Vedno",
        "fr": "Toujours"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Often",
        "it": "Spesso",
        "de": "Oft",
        "de-at": "Oft",
        "de-ch": "Oft",
        "sl": "Pogosto",
        "fr": "Fréquemment"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Rarely",
        "it": "Raramente",
        "de": "Selten",
        "de-at": "Selten",
        "de-ch": "Selten",
        "sl": "Redko",
        "fr": "Rarement"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Never",
        "it": "Mai",
        "de": "Nie",
        "de-at": "Nie",
        "de-ch": "Nie",
        "sl": "Nikoli",
        "fr": "Jamais"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "q6_driving_licence",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q6DRIVEL",
     "visibleIf": "((!{source}) or {source} == 'ch') and {QF1} == 'ch'",
     "title": {
      "default": "Do you have a driving licence?",
      "de-ch": "Hast Du einen Führerschein?",
      "de-at": "Hast Du einen Führerschein?",
      "de": "Hast Du einen Führerschein?"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Yes",
        "de-ch": "Ja",
        "de": "Ja",
        "de-at": "Ja"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "No",
        "de-ch": "Nein",
        "de-at": "Nein",
        "de": "Nein"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "quiz1_intro",
   "elements": [
    {
     "type": "html",
     "name": "q7_text",
     "html": {
      "default": "Here you find some questions about aspects of daily life connected to mobility. Even if you don’t know the correct answer we kindly ask you to select the option you think is closest to the reality according to your experience or ideas.",
      "sl": "Sledita vprašanji o vidikih vsakdanjega življenja, povezanih z mobilnostjo. Tudi če ne poznate pravilnega odgovora, vas prosimo, da izberete možnost, za katero menite, da glede na vaše izkušnje ali ideje odraža dejansko stanje.",
      "de": "Hier finden Sie einige Fragen zu Aspekten des täglichen Lebens im Zusammenhang mit Mobilität. Auch wenn Sie die richtige Antwort nicht kennen, bitten wir Sie, die Option zu wählen, die Ihrer Meinung nach der Realität am nächsten kommt, entsprechend Ihrer Erfahrungen oder Ideen.",
      "de-at": "Hier finden Sie einige Fragen zu Aspekten des täglichen Lebens im Zusammenhang mit Mobilität. Auch wenn Sie die richtige Antwort nicht kennen, bitten wir Sie, die Option zu wählen, die Ihrer Meinung nach der Realität am nächsten kommt, entsprechend Ihrer Erfahrungen oder Ideen.",
      "de-ch": "Hier finden Sie einige Fragen zu Aspekten des täglichen Lebens im Zusammenhang mit Mobilität. Auch wenn Sie die richtige Antwort nicht kennen, bitten wir Sie, die Option zu wählen, die Ihrer Meinung nach der.",
      "it": "Qui di seguito troverai alcune domande riguardanti aspetti della vita quotidiana relativi alla mobilità. Anche se non conosci la risposta corretta ti chiediamo gentilmente di selezionare l'opzione che credi essere più vicina alla realtà, sulla base della tua esperienza od opinione.",
      "fr": "Vous allez trouver maintenant quelques questions sur des aspects de la vie quotidienne en lien avec la mobilité. Même si vous ne connaissez pas la bonne réponse, nous vous demandons de bien vouloir choisir l'option qui vous semble la plus proche de la réalité en fonction de votre expérience ou de vos idées."
     }
    }
   ]
  },
  {
   "name": "quiz1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q7dot1IT",
     "visibleIf": "{QF1} == 'it'",
     "title": {
      "default": "What can be, on average, the monthly cost of owning a (petrol) car in Italy (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
      "it": "Quale può essere il costo medio mensile per il possesso di un'auto (a benzina) in Italia (considerando il costo del carburante, il deprezzamento del mezzo, le tasse, l'assicurazione e la manutenzione)?\n\nCirca di…"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "150 euros",
        "it": "150 €"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "300 euros",
        "it": "300 €"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "600 euros",
        "it": "600 €"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "1200 euros",
        "it": "1200 €"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q7dot1AU",
     "visibleIf": "{QF1} == 'at' or {QF1} == 'li'",
     "title": {
      "default": "What can be, on average, the monthly cost of owning a (petrol) car in Austria (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
      "de-at": "Wie hoch sind im Durchschnitt die monatlichen Kosten für den Besitz eines (Benzin-)Autos in Deutschland (unter Berücksichtigung von Kraftstoff, Abschreibungen, Steuern, Versicherung und Wartung)?\nSchätzungsweise…"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "100 euros",
        "de-at": "100 €"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "250 euros",
        "de-at": "250 €"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "500 euros",
        "de-at": "500 €"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "1000 euros",
        "de-at": "1000 €"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q7dot1SL",
     "visibleIf": "{QF1} == 'si'",
     "title": {
      "default": "What can be, on average, the monthly cost of owning a (petrol) car in the EU (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
      "sl": "Kakšni so lahko povprečni mesečni stroški lastništva (bencinskega) avtomobila v EU (upoštevati gorivo, amortizacijo, davke, zavarovanje in vzdrževanje)?\nPribližno..."
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "100 euros",
        "sl": "100 €"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "250 euros",
        "sl": "250 €"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "500 euros",
        "sl": "500 €"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "1000 euros",
        "sl": "1000 €"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q7dot1SW",
     "visibleIf": "{QF1} == 'ch'",
     "title": {
      "default": "What can be, on average, the monthly cost of owning a (petrol) car in Switzerland (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
      "de-ch": "Wie hoch sind im Durchschnitt die monatlichen Kosten für den Besitz eines (Benzin-)Autos in der Schweiz  (unter Berücksichtigung von Kraftstoff, Abschreibungen, Steuern, Versicherung und Wartung)?"
     },
     "choices": [
      {
       "value": "1",
       "text": "100 Fr."
      },
      {
       "value": "2",
       "text": "250 Fr."
      },
      {
       "value": "3",
       "text": {
        "default": "500 Fr.",
        "de-ch": "500  Fr."
       }
      },
      {
       "value": "4",
       "text": "1000 Fr."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q7dot1FR",
     "visibleIf": "{QF1} == 'fr'",
     "title": {
      "default": "What can be, on average, the monthly cost of owning a (petrol) car in France (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
      "fr": "Quel est, en moyenne, le coût mensuel de possession d'une voiture en France (carburant, amortissement, taxes, assurance et entretien)?\nEnviron …"
     },
     "choices": [
      {
       "value": "1",
       "text": "100 euros"
      },
      {
       "value": "2",
       "text": "250 euros"
      },
      {
       "value": "3",
       "text": "500 euros"
      },
      {
       "value": "4",
       "text": "1000 euros"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q7dot1GE",
     "visibleIf": "{QF1} == 'de'",
     "title": {
      "default": "What can be, on average, the monthly cost of owning a (petrol) car in Germany (considering fuel, depreciation, taxes, insurance and maintenance)?\n\nClose to…",
      "de": "Wie hoch sind im Durchschnitt die monatlichen Kosten für den Besitz eines (Benzin-)Autos in Deutschland (unter Berücksichtigung von Kraftstoff, Abschreibungen, Steuern, Versicherung und Wartung)?\nSchätzungsweise…"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "100 euros",
        "de": "100 €"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "250 euros",
        "de": "250 €"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "500 euros",
        "de": "500 €"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "1000 euros",
        "de": "1000 €"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "quiz2",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q7dot2",
     "title": {
      "default": "In your opinion which of these two phenomena cause more deaths in the European Union?",
      "it": "In base al tuo parere quale di questi due fenomeni causa maggiori decessi nell'Unione Europea?",
      "de": "Wodurch werden Ihrer Meinung nach in der EU mehr Todesfälle verursacht?",
      "de-ch": "Wodurch werden mehr Todesfälle verursacht?",
      "de-at": "Wodurch werden Ihrer Meinung nach in der EU mehr Todesfälle verursacht?",
      "sl": "Kateri od omenjenih fenomenov v EU povzroča več smrtnih žrtev?",
      "fr": "A votre avis lequel de ces deux phénomènes génére le plus de décès dans l'Union Européenne?"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Roads incidents",
        "it": "Incidenti stradali",
        "de": "Durch Verkehrsunfälle",
        "de-ch": "Verkehrsunfälle",
        "de-at": "Verkehrsunfälle",
        "sl": "Nesreče v cestnem prometu",
        "fr": "Accidents de la route"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Air pollution",
        "it": "Inquinamento atmosferico",
        "de": "Durch Luftverschmutzung",
        "de-ch": "Luftverschmutzung",
        "de-at": "Luftverschmutzung",
        "sl": "Onesnaževanje zraka",
        "fr": "Pollution de l'air"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "quiz3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q7dot3",
     "title": {
      "default": "How much physical activity WHO recommend to do every day? How many minutes of daily walking activities does it correspond to?",
      "it": "Quanta attività fisica è necessario fare quotidianamente in maniera da rispettare le prescrizioni dell'Organizzazione Mondiale della Sanità? A quanti minuti di \"cammino sostenuto\" corrisponde?",
      "de": "Wie viel körperliche Aktivität empfiehlt die World Health Organisation (WHO) täglich? Wie viele Minuten täglicher Gehzeit entspricht dies?",
      "de-ch": "Wie viel körperliche Aktivität empfiehlt die World Health Organisation WHO täglich? Wie viele Minuten täglicher Gehzeit entspricht dies?",
      "de-at": "Wie viel körperliche Aktivität empfiehlt die World Health Organisation (WHO) täglich? Wie viele Minuten täglicher Gehzeit entspricht dies?",
      "sl": "Kakšen obseg dnevnih fizičnih aktivnosti v obliki hoje po svežem zraku priporoča svetovna zdravstvena organizacija (WHO)?",
      "fr": "Quelle quantité d'activité physique quotidienne l'OMS (Organisation Mondiale de la Santé) recommande-t-elle ? A quelle durée de marche correspond-elle ?"
     },
     "choices": [
      {
       "value": "A1",
       "text": {
        "default": "5 minutes",
        "it": "5 minuti",
        "de": "5 Minuten",
        "de-at": "5 Minuten",
        "de-ch": "5 Minuten",
        "sl": "5 minut"
       }
      },
      {
       "value": "A2",
       "text": {
        "default": "20 minutes",
        "it": "20 minuti",
        "de": "20 Minuten",
        "de-at": "20 Minuten",
        "de-ch": "20 Minuten",
        "sl": "20 minut"
       }
      },
      {
       "value": "A3",
       "text": {
        "default": "1 hour",
        "it": "1 ora",
        "de": "1 Stunde",
        "de-at": "1 Stunde",
        "de-ch": "1 Stunde",
        "sl": "1 ura",
        "fr": "1 heure"
       }
      },
      {
       "value": "A4",
       "text": {
        "default": "1,5 hours",
        "it": "1 ora e mezza",
        "de": "1,5 Stunden",
        "de-at": "1,5 Stunden",
        "de-ch": "1,5 Stunden",
        "sl": "1,5 ure",
        "fr": "1 heure 1/2"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "Sustainable behaviour",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q8",
     "title": {
      "default": "Have you done any of the following actions in the past six months?",
      "it": "Quali tra queste attività hai intrapreso negli scorsi 6 mesi?",
      "de": "Haben Sie in den letzten sechs Monaten eine der folgenden Aktionen durchgeführt?",
      "de-at": "Haben Sie in den letzten sechs Monaten eine der folgenden Aktionen durchgeführt?",
      "de-ch": "Haben Sie in den letzten sechs Monaten eine der folgenden Aktionen durchgeführt?",
      "sl": "Ste v zadnjih šestih mesecih izvedli katerega od naslednjih ukrepov?",
      "fr": "Avez-vous entrepris une des actions suivantes au cours des 6 derniers mois?"
     },
     "description": {
      "default": "(Multiple answers possible)",
      "sl": "(Možnih je več odgovorov)",
      "de": "(Mehrere Antworten möglich)",
      "de-at": "(Mehrere Antworten möglich)",
      "de-ch": "(Mehrere Antworten möglich)",
      "it": "(Sono possibili più risposte)",
      "fr": "(Plusieurs réponses possibles)"
     },
     "validators": [
      {
       "type": "expression",
       "text": "You can't select anything if you selected \"None\" or \"I don't known\"",
       "expression": "((!({Q8} anyof \"10\")) and (!({Q8} anyof \"11\"))) or {Q8.length} == 1"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Chosen a more environmentally-friendly way of travelling (walk, bicycle, public transport, electric car)",
        "it": "Ho scelto una modalità più eco-sostenibile di spostamento (camminare, bicicletta, trasporto pubblico, auto elettrica,…)",
        "de": "Eine umweltfreundlichere Art des Reisens gewählt (zu Fuß, mit dem Fahrrad, mit öffentlichen Verkehrsmitteln, mit dem Elektroauto).",
        "de-at": "Eine umweltfreundlichere Art des Reisens/der Mobilität gewählt (zu Fuß, mit dem Fahrrad, mit öffentlichen Verkehrsmitteln, mit dem Elektroauto).",
        "de-ch": "Eine umweltfreundlichere Art des Reisens gewählt (zu Fuss, mit dem Fahrrad, mit öffentlichen Verkehrsmitteln, mit dem Elektroauto).",
        "sl": "Izbrali okolju bolj prijazen način potovanja (hoja, kolo, javni prevoz, električni avtomobil)",
        "fr": "Choisir un mode de transport plus respectueux de l'environnement (marche, vélo, transport public, véhicule électrique)"
       },
       "enableIf": "{Q8} anyof \"1\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "2",
       "text": {
        "default": "Avoided buying over-packaged products",
        "it": "Ho evitato di acquistare prodotti con molto imballaggio",
        "de": "Den Kauf \"überverpackter\" Produkte vermieden.",
        "de-at": "Den Kauf \"überverpackter\" Produkte vermieden.",
        "de-ch": "Den Kauf \"überverpackter\" Produkte vermieden.",
        "sl": "Izognili se nakupu preveč pakiranih izdelkov",
        "fr": "Eviter d'acheter des produits sur-emballés"
       },
       "enableIf": "{Q8} anyof \"2\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Bought local products",
        "it": "Ho comprato prodotti locali",
        "de": "Lokale Produkte gekauft.",
        "de-at": "Lokale Produkte gekauft.",
        "de-ch": "Lokale Produkte gekauft.",
        "sl": "Kupili lokalne izdelke",
        "fr": "Acheter des produits locaux"
       },
       "enableIf": "{Q8} anyof \"3\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Cut down your water consumption",
        "it": "Ho diminuito il consumo personale di acqua",
        "de": "Den Wasserverbrauch reduziert.",
        "de-at": "Den Wasserverbrauch reduziert.",
        "de-ch": "Den Wasserverbrauch reduziert.",
        "sl": "Zmanjšali porabo vode",
        "fr": "Diminuer votre consommation d'eau"
       },
       "enableIf": "{Q8} anyof \"4\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Separated most of your waste for recycling",
        "it": "Ho effettuato la raccolta differenziata",
        "de": "Müll für Recycling getrennt.",
        "de-at": "Müll für Recycling getrennt.",
        "de-ch": "Müll für Recycling getrennt.",
        "sl": "Ločili večino odpadkov za recikliranje",
        "fr": "Trier vos déchets"
       },
       "enableIf": "{Q8} anyof \"5\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "6",
       "text": {
        "default": "Used your car less by avoiding unnecessary trips, working from home (teleworking), etc.",
        "it": "Ho usato meno la mia automobile evitando viaggi non necessari, lavorando da casa (telelavoro), ecc…",
        "de": "Das Auto stehen gelassen, durch Vermeidung unnötiger Fahrten.",
        "de-at": "Das Auto stehen gelassen, durch Vermeidung unnötiger Fahrten.",
        "de-ch": "Das Auto stehen gelassen, durch Vermeidung unnötiger Fahrten.",
        "sl": "Manjkrat uporabili avto in se izognili nepotrebnim potovanjem, delali od doma (delo na daljavo) itn",
        "fr": "Moins utiliser votre voiture en évitant de vous déplacer (en particulier télétravail)"
       },
       "enableIf": "{Q8} anyof \"6\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "7",
       "text": {
        "default": "Bought products marked with an environmental label",
        "it": "Ho acquistato prodotti che riportano certificazione di sostenibilità ambientale",
        "de": "Produkte mit Öko-Siegel gekauft.",
        "de-at": "Produkte mit Öko-Siegel gekauft.",
        "de-ch": "Produkte mit Öko-Siegel gekauft.",
        "sl": "Kupili izdelke, označene z okoljsko oznako.",
        "fr": "Acheter des produits avec un label environnemental"
       },
       "enableIf": "{Q8} anyof \"7\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "8",
       "text": {
        "default": "Avoided single-use plastic goods other than plastic bags (e.g. plastic cutlery, cups, plates, etc.) or bought reusable plastic products",
        "it": "Ho evitato di acquistare prodotti di plastica monouso, ad eccezione delle borse, come ad esempio posate, bicchieri, piatti, ecc…",
        "de": "Wegwerf-Plastik-Produkte vermieden.",
        "de-at": "Wegwerf-Plastik-Produkte vermieden.",
        "de-ch": "Wegwerf-Plastik-Produkte vermieden.",
        "sl": "Izognili se uporabi plastičnih izdelkov za enkratno uporabo, razen plastičnih vrečk (npr. plastični jedilni pribor, lončki, krožniki itn.) ali kupili plastične izdelke za večkratno uporabo",
        "fr": "Eviter d'acheter des plastiques à usage unique (hors sacs) comme de la vaiselle à usage unique, ou acheter des plastiques recyclés"
       },
       "enableIf": "{Q8} anyof \"8\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "9",
       "text": {
        "default": "Avoided single-use plastic goods other than plastic bags (e.g. plastic cutlery, cups, plates, etc.) or bought reusable plastic products",
        "it": "Ho ridotto il consumo di energia (ad esempio abbassando il livello dell'aria condizionata o del riscaldamento, evitando di lasciare elettrodomestici in stand-by, acquistando elettrodomestici più efficienti)",
        "de": "Den Energieverbrauchs (z. B. durch das Abschalten von Klimaanlagen oder Heizungen, den Verzicht auf Stand-by oder den Kauf energieeffizienter Geräte) reduziert.",
        "de-at": "Den Energieverbrauchs (z. B. durch das Abschalten von Klimaanlagen oder Heizungen, den Verzicht auf Stand-by oder den Kauf energieeffizienter Geräte) reduziert.",
        "de-ch": "Den Energieverbrauchs (z. B. durch das Abschalten von Klimaanlagen oder Heizungen, den Verzicht auf Stand-by oder den Kauf energieeffizienter Geräte) reduziert.",
        "sl": "Zmanjšali porabo energije (npr. z izklopom klimatske naprave ali ogrevanja, naprav niste pustili v stanju pripravljenosti, kupujete energetsko učinkovite aparate)",
        "fr": "Baisser votre consommation d'énergie (réglage du chauffage ou de la climatisation, extinction des équipements non utilisés, achat d'équipements plus performants, …)"
       },
       "enableIf": "{Q8} anyof \"9\" or !({Q8} anyof \"10\" or {Q8} anyof \"11\")"
      },
      {
       "value": "10",
       "text": {
        "default": "None",
        "it": "Nessuna",
        "de": "Keine",
        "de-at": "Keine",
        "de-ch": "Keine",
        "sl": "Nobenega",
        "fr": "Aucun"
       },
       "enableIf": "{Q8} anyof \"10\" or {Q8.length} == 0"
      },
      {
       "value": "11",
       "text": {
        "default": "I don’t know",
        "it": "Non so",
        "de": "Nicht bekannt",
        "de-at": "Nicht bekannt",
        "de-ch": "Nicht bekannt",
        "sl": "Ne vem",
        "fr": "Je ne sais pas"
       },
       "enableIf": "{Q8} anyof \"11\" or {Q8.length} == 0"
      }
     ]
    }
   ]
  },
  {
   "name": "Responsibility",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q9",
     "title": {
      "default": "In your opinion who should be mainly responsible for promoting new mobility policies in order to reduce air pollution? (maximum two answers are possible)",
      "it": "A tuo parere chi dovrebbe essere maggioremente responsabile per la promozione di nuove politiche per la mobilità in maniera da ridurre l'inquinamento atmosferico?\n(sono possibili al massimo 2 risposte)",
      "de": "Wer sollte Ihrer Meinung nach hauptsächlich für die Förderung neuer Mobilitätsstrategien zur Reduzierung der Luftverschmutzung verantwortlich sein?(maximal zwei Antworten sind möglich)",
      "de-ch": "Wer sollte Ihrer Meinung nach hauptsächlich für die Förderung neuer Mobilitätsstrategien zur Reduzierung der Luftverschmutzung verantwortlich sein?\n(maximal zwei Antworten sind möglich)",
      "de-at": "Wer sollte Ihrer Meinung nach hauptsächlich für die Förderung neuer Mobilitätsstrategien zur Reduzierung der Luftverschmutzung verantwortlich sein?\n(maximal zwei Antworten sind möglich)",
      "sl": "Kdo bi moral prevzeti odgovornost za spodbujanje novih politik mobilnosti, da bi zmanjšali onesnaževanje zraka?\n(Možna sta največ dva odgovora.)",
      "fr": "A votre avis qui devrait être le principal porteur de la promotion de nouvelles mobilités en vue de réduire la pollution de l'air?\n(maximum 2 réponses possibles)"
     },
     "validators": [
      {
       "type": "expression",
       "text": "Please select at most 2 answers",
       "expression": "{Q9.length} <= 2"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "City authorities",
        "it": "Le città",
        "de": "Die Stadtverwaltung",
        "de-at": "Die Stadtverwaltung",
        "de-ch": "Stadt",
        "sl": "Mestne oblasti",
        "fr": "Les villes"
       },
       "enableIf": "{Q9} anyof \"1\" or {Q9.length} < 2"
      },
      {
       "value": "2",
       "text": {
        "default": "Citizens themselves",
        "it": "I cittadini stessi",
        "de": "Die Bürgerinnen und Bürger",
        "de-at": "Die Bürgerinnen und Bürger",
        "de-ch": "Die Bürgerinnen und Bürger",
        "sl": "Državljani sami",
        "fr": "Les citoyens eux-mêmes"
       },
       "enableIf": "{Q9} anyof \"2\" or {Q9.length} < 2"
      },
      {
       "value": "3",
       "text": {
        "default": "Regional authorities",
        "it": "La Regione",
        "de": "Die Landesregierungen",
        "de-at": "Die Landesregierungen",
        "de-ch": "Kanton",
        "sl": "Regionalne oblasti",
        "fr": "La Région"
       },
       "enableIf": "{Q9} anyof \"3\" or {Q9.length} < 2"
      },
      {
       "value": "4",
       "text": {
        "default": "National Government",
        "it": "Lo Stato",
        "de": "Die Bundesregierung",
        "de-at": "Die Bundesregierung",
        "de-ch": "Bund",
        "sl": "Država",
        "fr": "L'Etat"
       },
       "enableIf": "{Q9} anyof \"4\" or {Q9.length} < 2"
      },
      {
       "value": "5",
       "text": {
        "default": "EU bodies",
        "it": "L'Unione Europea",
        "de": "Die Europäische Union (EU)",
        "de-at": "Die Europäische Union (EU)",
        "de-ch": "Die Europäische Union (EU)",
        "sl": "Organi EU",
        "fr": "Les agences de l'UE"
       },
       "visibleIf": "{QF1} != \"ch\"",
       "enableIf": "{Q9} anyof \"5\" or {Q9.length} < 2"
      },
      {
       "value": "6",
       "text": {
        "default": "Private companies",
        "it": "Le imprese private",
        "de": "Die private Unternehmen",
        "de-at": "Die private Unternehmen",
        "de-ch": "Die private Unternehmen",
        "sl": "Zasebna podjetja",
        "fr": "Les sociétés privées"
       },
       "enableIf": "{Q9} anyof \"6\" or {Q9.length} < 2"
      },
      {
       "value": "7",
       "text": {
        "default": "Trade Unions or Political Parties",
        "it": "I sindacati o partiti politici",
        "de": "Die Gewerkschaften und politischen Parteien",
        "de-at": "Die Gewerkschaften und politischen Parteien",
        "de-ch": "Die Gewerkschaften und politischen Parteien",
        "sl": "Sindikati ali politične stranke",
        "fr": "Les syndicats ou partis politiques"
       },
       "enableIf": "{Q9} anyof \"7\" or {Q9.length} < 2"
      },
      {
       "value": "8",
       "text": {
        "default": "Non-profit Associations/non-governmental organizations",
        "it": "Le associazioni non-profit o non-governative",
        "de": "Gemeinnützige Institutionen / Nichtregierungsorganisationen",
        "de-at": "Gemeinnützige Institutionen / Nichtregierungsorganisationen",
        "de-ch": "Gemeinnützige Institutionen / Nichtregierungsorganisationen",
        "sl": "Neprofitna združenja/nevladne organizacije",
        "fr": "Les associations"
       },
       "enableIf": "{Q9} anyof \"8\" or {Q9.length} < 2"
      },
      {
       "value": "9",
       "text": {
        "default": "Other",
        "it": "Altri",
        "de": "Andere",
        "de-at": "Andere",
        "de-ch": "Andere",
        "sl": "Drugi",
        "fr": "Autres"
       },
       "enableIf": "{Q9} anyof \"9\" or {Q9.length} < 2"
      }
     ]
    }
   ]
  },
  {
   "name": "Sources of information",
   "elements": [
    {
     "type": "checkbox",
     "name": "Q10",
     "title": {
      "default": "From the following list, which are your three main sources of information about the environment (climate change, pollution, …)?\n\n(maximum 3 answers possible)",
      "it": "Scegliendo dalla seguente lista, quali sono le tue tre principali fonti di informazione riguardo all'ambiente? (cambiamento climatico, inquinamento…)\n(sono possibili al massimo 3 risposte)",
      "de": "Welche der folgenden Auswahlmöglichkeiten sind Ihre drei wichtigsten Informationsquellen über die Umwelt (Klimawandel, Umweltverschmutzung,....)?\n(maximal 3 Antworten möglich)",
      "de-ch": "Welche der folgenden Auswahlmöglichkeiten sind Ihre drei wichtigsten Informationsquellen über die Umwelt (Klimawandel, Umweltverschmutzung,....)?\n(maximal 3 Antworten möglich)",
      "de-at": "Welche der folgenden Auswahlmöglichkeiten sind Ihre drei wichtigsten Informationsquellen über die Umweltaspekte (Klimawandel, Umweltverschmutzung,....)?\n(maximal 3 Antworten möglich)",
      "sl": "Kateri so vaši trije glavni viri informacij o okolju (podnebnih spremembah, onesnaževanju, ...)?\n(Možni so največ trije odgovori)",
      "fr": "Dans la liste suivante, indiquez quelles sont les 3 principales sources d'information sur l'environnement (changement climatique, pollution, …)?"
     },
     "validators": [
      {
       "type": "expression",
       "text": "You can't select anything if you selected \"I am not interested in the environment\" or \"I don't known\"",
       "expression": "((!({Q10} anyof \"8\")) and (!({Q10} anyof \"9\"))) or {Q10.length} == 1"
      },
      {
       "type": "expression",
       "text": "Maximum 3 answers possible",
       "expression": "{Q10.length} <= 3"
      }
     ],
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Newspapers and magazines",
        "it": "Quotidiani e riviste",
        "de": "Zeitungen und Zeitschriften",
        "de-at": "Zeitungen und Zeitschriften",
        "de-ch": "Zeitungen und Zeitschriften",
        "sl": "Časopisi in revije",
        "fr": "Journaux et magazines"
       },
       "enableIf": "{Q10} anyof \"1\" or ((!({Q10} anyof \"8\" or {Q10} anyof \"9\")) and {Q10.length} < 3)"
      },
      {
       "value": "2",
       "text": {
        "default": "Television news and/or radio",
        "it": "Notiziari televisivi e/o radio",
        "de": "Fernsehnachrichten und/oder Radio",
        "de-at": "Fernsehnachrichten und/oder Radio",
        "de-ch": "Fernsehnachrichten und/oder Radio",
        "sl": "Televizijske novice in/ali radio",
        "fr": "Journaux radiophoniques et/ou télévisés"
       },
       "enableIf": "{Q10} anyof \"2\" or ((!({Q10} anyof \"8\" or {Q10} anyof \"9\")) and {Q10.length} < 3)"
      },
      {
       "value": "3",
       "text": {
        "default": "Family, friends, neighbours or colleagues",
        "it": "La famiglia, gli amici, i vicini o colleghi",
        "de": "Familie, Freunde, Nachbarn oder Kollegen",
        "de-at": "Familie, Freunde, Nachbarn oder Kollegen",
        "de-ch": "Familie, Freunde, Nachbarn oder Kollegen",
        "sl": "Družina, prijatelji, sosedje ali znanci",
        "fr": "Famille, amis, voisins, collègues"
       },
       "enableIf": "{Q10} anyof \"3\" or ((!({Q10} anyof \"8\" or {Q10} anyof \"9\")) and {Q10.length} < 3)"
      },
      {
       "value": "4",
       "text": {
        "default": "Books or scientific publications and/or information materials",
        "it": "Libri o pubblicazioni e materiali informativi scientifici",
        "de": "Bücher oder wissenschaftliche Veröffentlichungen und/oder Informationsmaterialien",
        "de-at": "Bücher oder wissenschaftliche Veröffentlichungen und/oder Informationsmaterialien",
        "de-ch": "Bücher oder wissenschaftliche Veröffentlichungen und/oder Informationsmaterialien",
        "sl": "Knjige ali znanstvene publikacije in/ali informativno gradivo",
        "fr": "Livres, publications scientifiques"
       },
       "enableIf": "{Q10} anyof \"4\" or ((!({Q10} anyof \"8\" or {Q10} anyof \"9\")) and {Q10.length} < 3)"
      },
      {
       "value": "5",
       "text": {
        "default": "Online social networks (facebook, Instagram, Twitter, …)",
        "it": "I social (facebook, Instagram, Twitter, …)",
        "de": "Soziale Netzwerke (Facebook, Instagram, Twitter,....)",
        "de-at": "Soziale Netzwerke (Facebook, Instagram, Twitter,....)",
        "de-ch": "Soziale Netzwerke (Facebook, Instagram, Twitter,....)",
        "sl": "Spletna družbena omrežja (Facebook, Instagram, Twitter, ...)",
        "fr": "Réseaux sociaux (Facebook, Instagram, Twitter, ...)"
       },
       "enableIf": "{Q10} anyof \"5\" or ((!({Q10} anyof \"8\" or {Q10} anyof \"9\")) and {Q10.length} < 3)"
      },
      {
       "value": "6",
       "text": {
        "default": "The Internet (other websites, newsletters, blogs, forums, etc., NO social networks)",
        "it": "Internet (siti web, newsletter, blog, forum, ecc…, NON social network)",
        "de": "Das Internet (andere Websites, Newsletter, Blogs, Foren, etc., KEINE sozialen Netzwerke)",
        "de-at": "Das Internet (andere Websites, Newsletter, Blogs, Foren, etc., KEINE sozialen Netzwerke)",
        "de-ch": "Das Internet (andere Websites, Newsletter, Blogs, Foren, etc., KEINE sozialen Netzwerke)",
        "sl": "Internet (druge spletne strani,  glasila, blogi, forumi itn., BREZ socialnih omrežij)",
        "fr": "Internet hors réseaux sociaux (sites, lettres, blogs, forums, …)"
       },
       "enableIf": "{Q10} anyof \"6\" or ((!({Q10} anyof \"8\" or {Q10} anyof \"9\")) and {Q10.length} < 3)"
      },
      {
       "value": "7",
       "text": {
        "default": "Other",
        "it": "Altro",
        "de": "Sonstiges",
        "de-at": "Sonstiges",
        "de-ch": "Sonstiges",
        "sl": "Drugo",
        "fr": "Autre"
       },
       "enableIf": "{Q10} anyof \"7\" or ((!({Q10} anyof \"8\" or {Q10} anyof \"9\")) and {Q10.length} < 3)"
      },
      {
       "value": "8",
       "text": {
        "default": "I am not interested in the environment",
        "it": "Non sono interessato alle questioni ambientali",
        "de": "Ich interessiere mich nicht für die Umwelt",
        "de-at": "Ich interessiere mich nicht für die Umwelt",
        "de-ch": "Ich interessiere mich nicht für die Umwelt",
        "sl": "Okolje me ne zanima",
        "fr": "Je ne suis pas intéressé par l'environnement"
       },
       "enableIf": "{Q10} anyof \"8\" or {Q10.length} == 0"
      },
      {
       "value": "9",
       "text": {
        "default": "I don't know",
        "it": "Non so",
        "de": "Ich weiß es nicht",
        "de-at": "Ich weiß es nicht",
        "de-ch": "Ich weiß es nicht",
        "sl": "Ne vem",
        "fr": "Je ne sais pas"
       },
       "enableIf": "{Q10} anyof \"9\" or {Q10.length} == 0"
      }
     ]
    }
   ]
  },
  {
   "name": "PS1andPS2",
   "elements": [
    {
     "type": "radiogroup",
     "name": "S2Q1",
     "visibleIf": "[\"16\", \"21\", \"30\", \"31\", \"34\", \"48\"] contains {QF2ITUTI}",
     "title": {
      "default": "Do you use the bicycle as much as you would like to in your daily trips?",
      "it": "Utilizzi la bicicletta tanto quanto vorresti durante i tuoi spostamenti quotidiani?"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Yes",
        "it": "Sì"
       }
      },
      {
       "value": "2",
       "text": "No"
      },
      {
       "value": "3",
       "text": {
        "default": "I don't know",
        "it": "Non so"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "PS1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "PS4dot1",
     "visibleIf": "((!{source}) or {source} == 'ch') and {QF1} == \"ch\" and {QFSW1} == \"A10\"",
     "title": {
      "default": "Haben Sie bis zum heutigen Zeitpunkt von diesem Angebot gehört?",
      "it": "Utilizzi la bicicletta tanto quanto vorresti durante i tuoi spostamenti quotidiani?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Ja",
        "it": "Sì"
       }
      },
      {
       "value": "2",
       "text": "Nein"
      }
     ]
    }
   ],
   "description": "Seit Dezember 2019 wird zwischen Maladers und Chur das Mitfahrangebot Taxito angeboten.  Taxito macht freie Plätze in Fahrzeugen für Alle zugänglich.  Dafür wurden Stelen aufgestellt, wo man – wie an einer Bushaltestelle – in Autos einsteigen und mitfahren kann."
  },
  {
   "name": "PS2",
   "elements": [
    {
     "type": "checkbox",
     "name": "S2Q2",
     "visibleIf": "[\"16\", \"21\", \"30\", \"31\", \"34\", \"48\"] contains {QF2ITUTI}",
     "title": {
      "default": "According to your personal experience what do you think about cycling?",
      "it": "Pensando alla tua esperienza personale, cosa ne pensi dell'andare in bicicletta?"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "It takes too long",
        "it": "Si impiega troppo tempo negli spostamenti"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "It is an effective solution (faster than others)",
        "it": "È una soluzione efficiente (più rapida di altre)"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "It is too dangerous",
        "it": "È troppo pericoloso"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "There are not enough cycle paths",
        "it": "Non ci sono sufficienti piste ciclabili"
       }
      },
      {
       "value": "5",
       "text": {
        "default": "It is healthy (I fell better when cycling)",
        "it": "È salutare (mi sento meglio andando in bici)"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "It can be easily stolen",
        "it": "la bicicletta può essere facilmente rubata"
       }
      },
      {
       "value": "7",
       "text": {
        "default": "I have difficulties because I don't own a bike",
        "it": "Ho difficoltà ad andare in bici perché non ne possiedo una"
       }
      },
      {
       "value": "8",
       "text": {
        "default": "It's uncomfortable due to weather reasons (too much rain/too cold/too hot...)",
        "it": "è scomodo a causa del clima che abbiamo (troppa pioggia/troppo freddo/troppo caldo,...)"
       }
      },
      {
       "value": "9",
       "text": {
        "default": "It is too hard",
        "it": "È troppo faticoso"
       }
      },
      {
       "value": "10",
       "text": {
        "default": "It is funny",
        "it": "È divertente"
       }
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "PS4dot2",
     "visibleIf": "{PS4dot1} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Wie wurden Sie auf das Angebot aufmerksam?",
     "description": "Bitte zutreffendes ankreuzen (Mehrfachantworten möglich)",
     "isRequired": true,
     "hasOther": true,
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Informationsveranstaltungen",
        "it": "Sì"
       }
      },
      {
       "value": "2",
       "text": "Informationspost"
      },
      {
       "value": "3",
       "text": "Freunde bzw. Familie"
      },
      {
       "value": "4",
       "text": "Zeitung"
      },
      {
       "value": "5",
       "text": "Internet"
      }
     ],
     "otherText": "Sonstiges, und zwar freies Textfeld"
    },
    {
     "type": "radiogroup",
     "name": "PSq2",
     "visibleIf": "{QF1} == 'si'",
     "title": {
      "default": "Are you ready to change your mobility habits on the way to contribute to preserve natural environment?",
      "sl": "Ali bi bili pripravljeni svoje potovalne navade spremeniti na ta način, da bi prispevali k ohranjanju naravnega okolja?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Yes",
        "sl": "Da"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Maybe",
        "sl": "Mogoče"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Yes, If some relevant alternative does exist",
        "sl": "Če bi bila omogočena ustrezna alternativna možnost"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "No, I have no intent to change mobility habits",
        "sl": "Nimam namena spreminjati potovalnih navad"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "PS3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "S2Q3",
     "visibleIf": "[\"16\", \"21\", \"30\", \"31\", \"34\", \"48\"] contains {QF2ITUTI}",
     "title": {
      "default": "Would you go to work by bicycle if there was a monetary incentive from your employer?",
      "it": "Andresti al lavoro in bicicletta se ricevessi un incentivo economico dal tuo datore di lavoro?"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Yes",
        "it": "Sì"
       }
      },
      {
       "value": "2",
       "text": "No"
      },
      {
       "value": "3",
       "text": {
        "default": "I don't know",
        "it": "Non so"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "_ch_Q11",
     "visibleIf": "((!{source}) or {source} == 'ch') and {QF1} == \"ch\"",
     "title": {
      "default": "What is your age?",
      "it": "Quanti anni hai?",
      "de": "Wie alt sind Sie?",
      "de-at": "Wie alt sind Sie?",
      "de-ch": "Wie alt sind Sie?",
      "sl": "Vaša starost",
      "fr": "Quel age avez-vous?"
     },
     "enableIf": "{QF1} == \"ch\"",
     "choices": [
      {
       "value": "1",
       "text": "16-17"
      },
      {
       "value": "2",
       "text": "18-20"
      },
      {
       "value": "3",
       "text": "21-25"
      },
      {
       "value": "4",
       "text": "26-35"
      },
      {
       "value": "5",
       "text": "36-45"
      },
      {
       "value": "6",
       "text": "46-55"
      },
      {
       "value": "7",
       "text": "56-65"
      },
      {
       "value": "8",
       "text": "66-75"
      },
      {
       "value": "9",
       "text": "over 75"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "PS4dot3",
     "visibleIf": "({_ch_Q11} != \"1\" and {_ch_Q11}) and {PS4dot1} == \"1\" and {Q6DRIVEL} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Haben Sie bis zum heutigen Zeitpunkt bereits dieses Angebot als __Fahrer/In__ genutzt?",
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Ja"
      },
      {
       "value": "2",
       "text": "Nein"
      }
     ]
    },
    {
     "type": "matrix",
     "name": "PSq3",
     "visibleIf": "{QF1} == 'si' and {QF2SL} == '7'",
     "title": {
      "default": "Please assess existing stage of sustainable mobility offer in the city of Maribor. Particular domain assess with grades from 1 (not regulated) to 10 (excellent).",
      "sl": "Ocenite stanje ponudbe trajnostne mobilnosti v mestu Maribor. Posamezna področja ocenite z ocenami od 1 (ni urejeno) do 5 (dobro urejeno)."
     },
     "isRequired": true,
     "columns": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      {
       "value": "SQ001",
       "text": {
        "default": "City public passenger transport (Marprom)",
        "sl": "Mestni javni potniški promet (npr.: Marprom)"
       }
      },
      {
       "value": "SQ002",
       "text": {
        "default": "Taxi",
        "sl": "Taksi"
       }
      },
      {
       "value": "SQ003",
       "text": {
        "default": "Car sharing (for example: Avant2go)",
        "sl": "Souporaba osebnih vozil (Car sharing npr.: Avant2go)"
       }
      },
      {
       "value": "SQ004",
       "text": {
        "default": "Bike sharing, rent-a-bike",
        "sl": "Souporaba, sposoja koles (Bike sharing)"
       }
      },
      {
       "value": "SQ005",
       "text": {
        "default": "Bike areas",
        "sl": "Površine za kolesarjenje"
       }
      },
      {
       "value": "SQ006",
       "text": {
        "default": "Pedestrian areas",
        "sl": "Peščeve površine"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "PS4",
   "elements": [
    {
     "type": "radiogroup",
     "name": "S2Q4",
     "visibleIf": "[\"16\", \"21\", \"30\", \"31\", \"34\", \"48\"] contains {QF2ITUTI}",
     "title": {
      "default": "Is a bike-sharing* system available in the territories you usually cross during your daily activities (for work, study or purchase etc…)?",
      "it": "Esiste un servizio di Bike-sharing* nel comune o nei comuni in cui ti sposti quotidianamente?"
     },
     "description": {
      "default": "A bike sharing is a service where, after a subscription, anyone can use bicycles offered to the users in sharing.",
      "it": "\\* il bike-sharing è un servizio di mobilità in cui, in seguito all'iscrizione, l'utente può utilizzare (in forma di noleggio a breve termine) le biciclette messe a disposizione da un operatore (pubblico o privato), in condivisione con altri utenti."
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Yes",
        "it": "Sì"
       }
      },
      {
       "value": "2",
       "text": "No"
      },
      {
       "value": "3",
       "text": {
        "default": "I don't know",
        "it": "Non so"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "PS4dot4",
     "visibleIf": "{PS4dot3} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Wie häufig nutzen Sie das Angebot __als Fahrer/In__ bislang?",
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Täglich"
      },
      {
       "value": "2",
       "text": "Mehrmals pro Woche (2-3)"
      },
      {
       "value": "3",
       "text": "Mind. einmal pro Woche"
      },
      {
       "value": "4",
       "text": "Mehrmals im Monat"
      },
      {
       "value": "5",
       "text": "Mind. einmal pro Monat"
      },
      {
       "value": "6",
       "text": "Seltener als einmal im Monat"
      }
     ]
    }
   ]
  },
  {
   "name": "_si_PS4",
   "elements": [
    {
     "type": "checkbox",
     "name": "PSq4",
     "visibleIf": "{QF1} == 'si' and {QF2SL} == '7'",
     "title": {
      "default": "Would you be willing to use public bus for your daily commute (especially to/from work) using integrated ticket once available in Maribor?",
      "sl": "Ali bi bili v primeru uvedbe enotne vozovnice v sistem mestnega javnega prevoza v Mariboru pripravljeni za svoje vsakodnevne poti (predvsem na/iz dela) uporabljati avtobus?"
     },
     "description": {
      "default": "(maximum 3 answers possible)",
      "sl": "(Možni so največ trije odgovori.)"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Yes without conditions",
        "sl": "Prezpogojno da"
       },
       "enableIf": "{PSq4} anyof \"1\" or {PSq4.length} == 0"
      },
      {
       "value": "2",
       "text": {
        "default": "Yes, if the frequency would be higher and time tables harmonised",
        "sl": "Da, v kolikor bi bili usklajeni vozni redi in večja frekvenca mestnega prometa"
       },
       "enableIf": "{PSq4} anyof \"2\" or !({PSq4} anyof \"1\" or {PSq4} anyof \"5\")"
      },
      {
       "value": "3",
       "text": {
        "default": "Yes, if bus will be cheaper",
        "sl": "Da, če bi bilo ceneje"
       },
       "enableIf": "{PSq4} anyof \"3\" or !({PSq4} anyof \"1\" or {PSq4} anyof \"5\")"
      },
      {
       "value": "4",
       "text": {
        "default": "Public transport is irrelevant because of my residential address.",
        "sl": "Javni prevoz zaradi mesta bivanja ne pride v poštev"
       },
       "enableIf": "{PSq4} anyof \"4\" or !({PSq4} anyof \"1\" or {PSq4} anyof \"5\")"
      },
      {
       "value": "5",
       "text": {
        "default": "Certainly not, it is not interesting for me",
        "sl": "Nikakor ne, me ne zanima"
       },
       "enableIf": "{PSq4} anyof \"5\" or {PSq4.length} == 0"
      }
     ]
    }
   ],
   "visibleIf": "{QF1} == 'si'",
   "description": {
    "default": "Integrated ticket can be used for all public transport modalities (trains, regional and city buses). It enables passengers the use of only one ticket for urban buses as well as for trains and regional buses.",
    "sl": "Enotna vozovnica velja za prevoz z vsemi oblikami javnega prevoza (z vlakom, medkrajevnim avtobusom ter mestnim prometom). Pomembna prednost je, da lahko na območju mestnega pometa potnik z enotno vozovnico poleg vozil mestnega prevoznika uporablja tudi vlake in avtobuse v medkrajevnem prometu, kadar ustavljajo na tem območju."
   }
  },
  {
   "name": "PS5",
   "elements": [
    {
     "type": "radiogroup",
     "name": "S2Q5",
     "visibleIf": "[\"16\", \"21\", \"30\", \"31\", \"34\", \"48\"] contains {QF2ITUTI} and [\"2\", \"3\"] contains {S2Q4}",
     "title": {
      "default": "If there was a bike sharing system*, would it be easier for you to use the bicycle in your daily trips?",
      "it": "Se esistesse un servizio di Bike-sharing sarebbe più semplice per te utilizzare la bicicletta negli spostamenti quotidiani?"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Yes",
        "it": "Sì"
       }
      },
      {
       "value": "2",
       "text": "No"
      },
      {
       "value": "3",
       "text": {
        "default": "I don't know",
        "it": "Non so"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "PS4dot5",
     "visibleIf": "{PS4dot3} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Was sind Ihre Beweggründe, __als Fahrer/In__ weitere Mitfahrende mit Hilfe von Taxito mitzunehmen?",
     "description": "Bitte zutreffendes ankreuzen (Mehrfachantworten möglich)",
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Ich möchte das Maladers verkehrlich besser erreichbar ist  "
      },
      {
       "value": "2",
       "text": "Finanzieller Ertrag"
      },
      {
       "value": "3",
       "text": "Fahrgäste sind mit persönlich bekannt"
      },
      {
       "value": "4",
       "text": "Ich fahre gerne in Begleitung"
      },
      {
       "value": "5",
       "text": "Ökologische Gründe"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "PSq5",
     "visibleIf": "{QF1} == 'si' and {QF2SL} == '7'",
     "title": {
      "default": "Would you be willing to monitor/reconsider/alter your travel behaviour by using a mobile app showing you all available transport options in the city of Maribor?",
      "sl": "Ali bi kot pripomoček pri spreminjanju potovalnih navad bili pripravljeni uporabljati mobilno aplikacijo, ki bi vam pri tem pomagala tako, da bi vas opozarjala na vse možne oblike mobilnosti v mestu Maribor?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Yes",
        "sl": "Da"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Maybe",
        "sl": "Mogoče"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "No",
        "sl": "Ne"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "PS6",
   "elements": [
    {
     "type": "radiogroup",
     "name": "S2Q6",
     "visibleIf": "[\"16\", \"21\", \"30\", \"31\", \"34\", \"48\"] contains {QF2ITUTI}",
     "title": {
      "default": "Would you be interested in an electric bike-sharing system?",
      "it": "Saresti interessato/a ad un servizio di Bike-sharing elettrico?"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Yes, but only if for free",
        "it": "Sì, ma solo se gratis"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Yes, if the fee would be 5 euros/month maximum",
        "it": "Sì, ma solo se la tariffa non superasse i 5 euro al mese"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Yes, if the fee would be 10 euros/month maximum",
        "it": "Sì, ma solo se la tariffa non superasse i 10 euro al mese"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Yes, if the fee would be 15 euros/month maximum",
        "it": "Sì, ma solo se la tariffa non superasse i 15 euro al mese"
       }
      },
      {
       "value": "5",
       "text": "No"
      },
      {
       "value": "6",
       "text": {
        "default": "I don't know",
        "it": "Non so"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "PS4dot6",
     "visibleIf": "{PS4dot3} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Wie beabsichtigen Sie das Angebot in Zukunft als Fahrer/in zu nutzen?",
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Weniger als bisher"
      },
      {
       "value": "2",
       "text": "Wie bisher"
      },
      {
       "value": "3",
       "text": "Mehr als bisher"
      }
     ]
    }
   ]
  },
  {
   "name": "PS7",
   "elements": [
    {
     "type": "radiogroup",
     "name": "S2Q7",
     "visibleIf": "[\"16\", \"21\", \"30\", \"31\", \"34\", \"48\"] contains {QF2ITUTI}",
     "title": {
      "default": "If there was an electric bike sharing system free of charge, would you use less the car?",
      "it": "Se esistesse un servizio di Bike-sharing elettrico gratuito useresti di meno l'auto?"
     },
     "choices": [
      {
       "value": "1",
       "text": "No"
      },
      {
       "value": "2",
       "text": {
        "default": "More no than yes",
        "it": "Più no che sì"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "More yes than no",
        "it": "Più sì che no"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Yes",
        "it": "Sì"
       }
      },
      {
       "value": "5",
       "text": {
        "default": "I don't know",
        "it": "Non so"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "I never use the car",
        "it": "Non uso mai l'auto"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "PS4dot7",
     "visibleIf": "{PS4dot6} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Was ist der Grund, weshalb Sie in Zukunft beabsichtigen als Fahrer/in, das Angebot __weniger als bisher__ zu nützen?",
     "description": "Bitte zutreffendes ankreuzen (Mehrfachantworten möglich)",
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Entsprach nicht meinen Erwartungen"
      },
      {
       "value": "2",
       "text": "Komplikationen bei der Buchung"
      },
      {
       "value": "3",
       "text": "Ich habe negative Erfahrungen mit den Mitfahrenden gemacht "
      },
      {
       "value": "4",
       "text": "Die Ankunft war dadurch unpünktlich"
      },
      {
       "value": "5",
       "text": "Es gab für mich unnötige Umwege"
      }
     ]
    }
   ]
  },
  {
   "name": "PS8",
   "elements": [
    {
     "type": "radiogroup",
     "name": "S2Q8",
     "visibleIf": "[\"16\", \"21\", \"30\", \"31\", \"34\", \"48\"] contains {QF2ITUTI}",
     "title": {
      "default": "Do you plan to buy an electric bike in the next 3 years?",
      "it": "Hai in programma di acquistare una bicicletta elettrica nei prossimi 3 anni?"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Yes",
        "it": "Sì"
       }
      },
      {
       "value": "2",
       "text": "No"
      },
      {
       "value": "3",
       "text": {
        "default": "I don't know",
        "it": "Non so"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "PS4dot8",
     "visibleIf": "{PS4dot1} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Haben Sie bis zum heutigen Zeitpunkt bereits dieses Angebot als __Mitfahrer/In__ genutzt?",
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Ja"
      },
      {
       "value": "2",
       "text": "Nein"
      }
     ]
    }
   ]
  },
  {
   "name": "PS9",
   "elements": [
    {
     "type": "radiogroup",
     "name": "PS4dot9",
     "visibleIf": "{PS4dot8} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Wie häufig nutzen Sie das Angebot __Mitfahrer/In__ bislang?",
     "choices": [
      {
       "value": "1",
       "text": "Täglich"
      },
      {
       "value": "2",
       "text": "Mehrmals pro Woche (2-3)"
      },
      {
       "value": "3",
       "text": "Mind. einmal pro Woche"
      },
      {
       "value": "4",
       "text": "Mehrmals im Monat"
      },
      {
       "value": "5",
       "text": "Mind. einmal pro Monat"
      },
      {
       "value": "6",
       "text": "Seltener als einmal im Monat"
      }
     ]
    }
   ]
  },
  {
   "name": "PS10",
   "elements": [
    {
     "type": "checkbox",
     "name": "PS4dot10",
     "visibleIf": "{PS4dot8} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Wenn Taxito Ihnen nicht zur Verfügung gestanden wäre, mit welchen Verkehrsmitteln hätten Sie dann ihre letzte Fahrt unternommen?",
     "description": "Bitte zutreffendes ankreuzen (Mehrfachantworten möglich)",
     "isRequired": true,
     "hasOther": true,
     "choices": [
      {
       "value": "1",
       "text": "Ich hätte die Reise gar nicht unternommen (dann keine andere Auswahl/andere Möglichkeiten ausblenden)"
      },
      {
       "value": "2",
       "text": "Auto als Fahrer/In"
      },
      {
       "value": "3",
       "text": "Auto als Beifahrer/In"
      },
      {
       "value": "4",
       "text": "Motorrad"
      },
      {
       "value": "5",
       "text": "Bus/Tram/Metro/S-Bahn"
      },
      {
       "value": "6",
       "text": "Zug"
      },
      {
       "value": "7",
       "text": "Fahrrad (E-Fahrrad, normales)"
      },
      {
       "value": "8",
       "text": "Zu Fuss"
      }
     ],
     "otherText": "Sonstiges ((E-)Scooter etc.) und zwar Freies Textfeld"
    }
   ],
   "description": "Denken Sie an Ihre letzte Taxitofahrt als Mitfahrer/in:"
  },
  {
   "name": "PS11",
   "elements": [
    {
     "type": "checkbox",
     "name": "PS4dot11",
     "visibleIf": "{PS4dot8} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Haben Sie unmittelbar vor oder nach der Taxito-Fahrt ein weiteres Verkehrsmittel für dieselbe Reise benutzt?\n\nAlso sind Sie auf ein anderes Verkehrsmittel umgestiegen? Wenn ja, welche Verkehrsmittel?",
     "description": "Bitte zutreffendes ankreuzen (Mehrfachantworten möglich)",
     "isRequired": true,
     "hasOther": true,
     "choices": [
      {
       "value": "1",
       "text": "Auto als Fahrer/In"
      },
      {
       "value": "2",
       "text": "Auto als Beifahrer/In"
      },
      {
       "value": "3",
       "text": "Motorrad"
      },
      {
       "value": "4",
       "text": "Bus/Tram/Metro/S-Bahn"
      },
      {
       "value": "5",
       "text": "Zug"
      },
      {
       "value": "6",
       "text": "Fahrrad (E-Fahrrad, normales)"
      },
      {
       "value": "7",
       "text": "Zu Fuss"
      }
     ],
     "otherText": "Sonstiges ((E-)Scooter etc.) und zwar Freies Textfeld"
    }
   ],
   "description": "Denken Sie an Ihre letzte Taxitofahrt als Mitfahrer/in:"
  },
  {
   "name": "PS12",
   "elements": [
    {
     "type": "checkbox",
     "name": "PS4dot12",
     "visibleIf": "{PS4dot8} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Was waren Ihre Gründe für __Ihre Nutzung__ des Angebots als Mitfahrer/in?",
     "description": "Bitte zutreffendes ankreuzen (Mehrfachantworten möglich)",
     "isRequired": true,
     "hasOther": true,
     "choices": [
      {
       "value": "1",
       "text": "Hoher Komfort"
      },
      {
       "value": "2",
       "text": "Kostengünstig"
      },
      {
       "value": "3",
       "text": "Zeitsparend"
      },
      {
       "value": "4",
       "text": "Umweltfreundlich"
      },
      {
       "value": "5",
       "text": "Gesundheitsfördernd (Fussweg zur Stele)"
      },
      {
       "value": "6",
       "text": "Geselligkeit (Treffen von anderen Menschen)"
      },
      {
       "value": "7",
       "text": "Hohe Barrierefreiheit (Leichtes Ein- und Aussteigen)"
      }
     ],
     "otherText": "Sonstiges ((E-)Scooter etc.) und zwar Freies Textfeld"
    }
   ],
   "description": "Denken Sie an Ihre letzte Taxitofahrt als Mitfahrer/in:"
  },
  {
   "name": "PS13",
   "elements": [
    {
     "type": "radiogroup",
     "name": "PS4dot13",
     "visibleIf": "{PS4dot8} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Wie beabsichtigen Sie das Angebot in Zukunft als Mitfahrer/in zu nutzen?",
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Weniger als bisher"
      },
      {
       "value": "2",
       "text": "Wie bisher"
      },
      {
       "value": "3",
       "text": "Mehr als bisher"
      }
     ]
    }
   ]
  },
  {
   "name": "PS14",
   "elements": [
    {
     "type": "radiogroup",
     "name": "PS4dot14",
     "visibleIf": "{PS4dot8} == \"1\" and {PS4dot13} == \"1\" and {QFSW1} == \"A10\"",
     "title": "Was ist der Grund, weshalb Sie in Zukunft beabsichtigen als Mitfahrer/in, das Angebot __weniger als bisher__ zu nützen?",
     "isRequired": true,
     "hasOther": true,
     "choices": [
      {
       "value": "1",
       "text": "Entsprach nicht meinen Erwartungen"
      },
      {
       "value": "2",
       "text": "Komplikationen bei der Buchung"
      },
      {
       "value": "3",
       "text": "Ich habe negative Erfahrungen mit den Mitfahrenden gemacht (Lenker/Passagiere)"
      },
      {
       "value": "4",
       "text": "Die Fahrt war unpünktlich"
      },
      {
       "value": "5",
       "text": "Es gab lange Wartezeiten"
      },
      {
       "value": "6",
       "text": "Die Fahrt führte nicht direkt an das Ziel"
      }
     ],
     "otherText": "Sonstiges ((E-)Scooter etc.) und zwar Freies Textfeld"
    }
   ]
  },
  {
   "name": "PS15",
   "elements": [
    {
     "type": "checkbox",
     "name": "PS4dot15",
     "visibleIf": "{PS4dot1} == \"1\" and {PS4dot8} == \"2\" and {QFSW1} == \"A10\"",
     "title": "Was sind die Gründe dafür, dass Sie das Angebot als Mitfahrer/in __nicht nutzen__?",
     "description": "Bitte zutreffendes ankreuzen (Mehrfachantworten möglich)",
     "isRequired": true,
     "hasOther": true,
     "choices": [
      {
       "value": "1",
       "text": "Schlechter Komfort"
      },
      {
       "value": "2",
       "text": "Teuer"
      },
      {
       "value": "3",
       "text": "Dauert zu lange (Fussweg zur Stele, lange Wartezeiten)"
      },
      {
       "value": "4",
       "text": "Ist nicht umweltfreundlich"
      },
      {
       "value": "5",
       "text": "Fahre lieber mit dem Bus"
      },
      {
       "value": "6",
       "text": "Möchte mich nicht zu Fremden ins Auto setzen "
      },
      {
       "value": "7",
       "text": "Zu kompliziert (Ein- und Aussteigen, Technik) "
      },
      {
       "value": "8",
       "text": "Fahre lieber mit dem eigenen Personenwagen "
      },
      {
       "value": "9",
       "text": "Hatte bisher noch keine Gelegenheit "
      }
     ],
     "otherText": "Sonstiges, und zwar freies Textfeld"
    }
   ]
  },
  {
   "name": "PS16",
   "elements": [
    {
     "type": "radiogroup",
     "name": "PS4dot16",
     "visibleIf": "{PS4dot3} == \"2\" and {QFSW1} == \"A10\"",
     "title": "Was sind die Gründe dafür, dass Sie das Angebot als Fahrer/in __nicht nutzen__?",
     "description": "Bitte zutreffendes ankreuzen (Mehrfachantworten möglich)",
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": "Möchte nicht, dass Fremde ins Auto steigen"
      },
      {
       "value": "2",
       "text": "Dauert zu lange jemanden mitzunehmen"
      },
      {
       "value": "3",
       "text": "Fahre lieber alleine im Auto"
      },
      {
       "value": "4",
       "text": "Zu kompliziert (Ein- und Aussteigen, Technik)"
      },
      {
       "value": "5",
       "text": "Hatte bisher noch keine Gelegenheit es zu nutzen"
      }
     ]
    }
   ]
  },
  {
   "name": "PS17",
   "elements": [
    {
     "type": "comment",
     "name": "PS4dot17",
     "visibleIf": "((!{source}) or {source} == 'ch') and {QF1} == \"ch\" and {QFSW1} == \"A10\"",
     "title": "Haben Sie weitere Kommentare zum Angebot von Taxito? Dann können Sie hier Ihre Erfahrungen, Kritiken und Wünsche anbringen.",
     "isRequired": true
    }
   ]
  },
  {
   "name": "sociodemo",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q11",
     "visibleIf": "{QF1} != \"ch\"",
     "title": {
      "default": "What is your age?",
      "it": "Quanti anni hai?",
      "de": "Wie alt sind Sie?",
      "de-at": "Wie alt sind Sie?",
      "de-ch": "Wie alt sind Sie?",
      "sl": "Vaša starost",
      "fr": "Quel age avez-vous?"
     },
     "enableIf": "{QF1} != \"ch\"",
     "choices": [
      {
       "value": "1",
       "text": "16-17"
      },
      {
       "value": "2",
       "text": "18-20"
      },
      {
       "value": "3",
       "text": "21-25"
      },
      {
       "value": "4",
       "text": "26-35"
      },
      {
       "value": "5",
       "text": "36-45"
      },
      {
       "value": "6",
       "text": "46-55"
      },
      {
       "value": "7",
       "text": "56-65"
      },
      {
       "value": "8",
       "text": "66-75"
      },
      {
       "value": "9",
       "text": "over 75"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "Q12",
     "title": {
      "default": "You are:",
      "it": "Tu sei:",
      "de": "Sie sind:",
      "de-at": "Sie sind:",
      "de-ch": "Sie sind:",
      "sl": "Spol:",
      "fr": "Vous êtes:"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Male",
        "it": "Maschio",
        "de": "Männlich",
        "de-at": "Männlich",
        "de-ch": "Männlich",
        "sl": "Moški",
        "fr": "Un homme"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Female",
        "it": "Femmina",
        "de": "Weiblich",
        "de-at": "Weiblich",
        "de-ch": "Weiblich",
        "sl": "Ženska",
        "fr": "Une femme"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Other",
        "it": "Altro",
        "de": "Anderes",
        "de-at": "Anderes",
        "de-ch": "Anderes",
        "sl": "Drugo",
        "fr": "Autre"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "No answer",
        "it": "Nessuna risposta",
        "de": "Keine Antwort",
        "de-at": "Keine Antwort",
        "de-ch": "Keine Antwort",
        "sl": "Ni odgovora",
        "fr": "Ne souhaite pas répondre"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q13",
     "title": {
      "default": "What is your highest level of education?",
      "it": "Qual è il tuo titolo di studio?",
      "de": "Was ist Ihr höchster Bildungsabschluss?",
      "de-at": "Was ist Ihr höchster Bildungsabschluss?",
      "de-ch": "Was ist Ihr höchster Bildungsabschluss?",
      "sl": "Vaša stopnja izobrazbe",
      "fr": "Quel est votre niveau d'études?"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "PhD (ISCED 8)",
        "it": "Dottorato",
        "de": "Promotion",
        "de-at": "Doktor/PhD",
        "de-ch": "Promotion",
        "sl": "Doktorat",
        "fr": "Doctorat"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "University degree (ISCED 5-7)",
        "it": "Laurea",
        "de": "Hochschulabschluss",
        "de-at": "Universität Bachelor/Master",
        "de-ch": "Hochschulabschluss",
        "sl": "Univerzitetna stopnja",
        "fr": "Licence ou Master"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Upper-secondary school diploma (ISCED 3-4)",
        "it": "Diploma di scuola superiore",
        "de": "Hochschulreife",
        "de-at": "Matura",
        "de-ch": "Berufsabschluss",
        "sl": "Srednja šola",
        "fr": "Bac"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Lower-secondary and primary school (ISCED 2-1)",
        "it": "Diploma di scuola media inferiore o licenza elementare",
        "de": "Mittlere Reife und Haupschulabschluss",
        "de-at": "Mittlere Reife/Grundschule",
        "de-ch": "Matura/Sekundarschule",
        "sl": "Strokovna in osnovna šola",
        "fr": "CAP/BEP/Brevet"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Q15",
     "title": {
      "default": "Number of members in your houselhold (with you)",
      "it": "Di quante persone si compone il tuo nucleo famigliare (comprendendo te)?",
      "de": "Anzahl der Mitglieder in Ihrem Haushalt (mit Ihnen)",
      "de-at": "Anzahl der Mitglieder in Ihrem Haushalt (mit Ihnen)",
      "de-ch": "Anzahl der Mitglieder in Ihrem Haushalt (mit Ihnen)",
      "sl": "Število članov vašega gospodinjstva (skupaj z vami)",
      "fr": "Nombre de personnes composant votre ménage (y compris vous)"
     },
     "choices": [
      {
       "value": "0",
       "text": {
        "default": "One",
        "it": "Una",
        "de": "1",
        "de-at": "1",
        "de-ch": "1",
        "sl": "Eden",
        "fr": "1"
       }
      },
      {
       "value": "1",
       "text": {
        "default": "Two",
        "it": "Due",
        "de": "2",
        "de-at": "2",
        "de-ch": "2",
        "sl": "Dva",
        "fr": "2"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "3 or more",
        "it": "Tre o più",
        "de": "Mehr als 3",
        "de-at": "3 oder mehr",
        "de-ch": "Mehr als 3",
        "sl": "Tri ali več",
        "fr": "3 et plus"
       }
      }
     ]
    }
   ],
   "description": {
    "default": "In this last section we will ask you some socio-demograpich information in order to better contextualise your answers.\n\nWe remind you that all the answers will be kept anonymous and no one will be able to connect any information to your identity now and in the future. We remind you that all the answers will be kept anonymous and no one will be able to connect any information to your identity now and in the future.",
    "it": "In questa ultima sezione ti faremo alcune domande socio-anagrafiche in maniera da contestualizzare meglio le risposte date. Ti ricordiamo che tutte le risposte verranno mantenute anonime e nessuno sarà in grado, né ora né in futuro, di collegarle alla tua persona.",
    "de": "Im letzten Abschnitt der Umfarge werden wir Sie nach einigen soziodemographischen Informationen fragen, um Ihre Antworten besser einordnen zu können. Bitte bachten Sie, dass alle Antworten anonym sind und niemand in der Lage sein wird, jetzt und in Zukunft Ihre Auskünfte mit Ihrer Identität zu verbinden.",
    "de-at": "Im letzten Abschnitt der Umfarge werden wir Sie nach einigen soziodemographischen Informationen fragen, um Ihre Antworten besser einordnen zu können. Bitte bachten Sie, dass alle Antworten anonym sind und niemand in der Lage sein wird, jetzt und in Zukunft Ihre Auskünfte mit Ihrer Identität zu verbinden.",
    "de-ch": "Im letzten Abschnitt der Umfarge werden wir Sie nach einigen soziodemographischen Informationen fragen, um Ihre Antworten besser einordnen zu können. Bitte bachten Sie, dass alle Antworten anonym sind und niemand in der Lage sein wird, jetzt und in Zukunft Ihre Auskünfte mit Ihrer Identität zu verbinden.",
    "sl": "V zadnjem razdelku vas prosimo za nekaj socialno-demografskih podatkov, ki nam bodo omogočili boljše razumevnje vaših odgovorov. Zagotavljamo vam, da bodo vsi vaši odgovori anonimni in nihče ne bo mogel povezati informacij z vašo identiteto zdaj ali v prihodnosti.",
    "fr": "Dans cette dernière partie, nous allons vous poser quelques questions socio-économiques pour remettre vos réponses dans leur contexte. Nous vous rappelons que toutes vos réponses resteront anonymes et qu'elles ne seront pas utilisées pour vous contacter dans le futur, ni pour vous identifier."
   }
  },
  {
   "name": "job",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q14",
     "title": {
      "default": "What is your occupational status?",
      "it": "Da un punto di vista occupazionale sei:",
      "de": "Was ist Ihr Beschäftigungsverhältnis?",
      "de-at": "Was ist Ihr Beschäftigungsverhältnis?",
      "de-ch": "Was ist Ihr Beschäftigungsverhältnis?",
      "sl": "Kakšen je vaš zaposlitveni status?",
      "fr": "Quel est votre activité?"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Employed",
        "it": "Occupato/a",
        "de": "Angestellt",
        "de-at": "Angestellt",
        "de-ch": "Angestellt",
        "sl": "Zaposlen",
        "fr": "Employé"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Unemployed",
        "it": "Disoccupato/a",
        "de": "Arbeitslos",
        "de-at": "Arbeitslos",
        "de-ch": "Arbeitslos",
        "sl": "Brezposeln",
        "fr": "Sans activité rémunérée"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Retired",
        "it": "Pensionato/a",
        "de": "Im Ruhestand",
        "de-at": "Im Ruhestand",
        "de-ch": "Im Ruhestand",
        "sl": "Upokojenec",
        "fr": "Retraité"
       }
      },
      {
       "value": "4",
       "text": {
        "default": "Student",
        "it": "Studente/essa (università)",
        "de": "Studium",
        "de-at": "Studium",
        "de-ch": "Studium",
        "sl": "Študent",
        "fr": "Etudiant"
       }
      },
      {
       "value": "5",
       "text": {
        "default": "Pupil",
        "it": "Alunno/a (scuola superiore)",
        "de": "Schüler/Schülerin",
        "de-at": "Schüler/Schülerin",
        "de-ch": "Schüler/Schülerin",
        "sl": "Učenec",
        "fr": "Ecolier"
       }
      },
      {
       "value": "6",
       "text": {
        "default": "Other",
        "it": "Altro",
        "de": "Sonstiges",
        "de-at": "Sonstiges",
        "de-ch": "Sonstiges",
        "sl": "Drugo",
        "fr": "Autre"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "job2",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Q14bis",
     "visibleIf": "{Q14} == \"1\"",
     "title": {
      "default": "You work as:",
      "it": "Qual è la tua posizione lavorativa?",
      "de": "Sie arbeiten als:",
      "de-at": "Sie arbeiten als:",
      "de-ch": "Sie arbeiten als:",
      "sl": "Delate kot:",
      "fr": "Vous travaillez comme:"
     },
     "description": {
      "default": "(only one answer is possible)",
      "de": "(nur eine Nennung möglich)",
      "it": "(è possibile una sola risposta)",
      "de-at": "(nur eine Nennung möglich)",
      "de-ch": "(nur eine Nennung möglich)",
      "sl": "(izberite samo en odgovor)",
      "fr": "(une seule réponse possible)"
     },
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Self Employed",
        "it": "Lavoratore indipendente",
        "de": "Selbstständige/r",
        "de-at": "Selbstständige/r",
        "de-ch": "Selbstständige/r",
        "sl": "Samozaposleni",
        "fr": "Indépendant / Auto-entrepreneur"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Employee",
        "it": "Lavoratore dipendente",
        "de": "Angestellte/r",
        "de-at": "Angestellte/r",
        "de-ch": "Angestellte/r",
        "sl": "Zaposleni",
        "fr": "Employé"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Other",
        "it": "Altro",
        "de": "Andere",
        "de-at": "Andere",
        "de-ch": "Andere",
        "sl": "Drugo",
        "fr": "Autre"
       }
      }
     ]
    }
   ]
  },
  {
   "name": "_si_PS1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "PSq1",
     "visibleIf": "{QF1} == 'si' and {Q14} == '1'",
     "title": {
      "default": "Location of your working place:",
      "sl": "Lokacija vašega delovnega mesta:"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "1",
       "text": {
        "default": "Maribor - left side",
        "sl": "Maribor - levi breg"
       }
      },
      {
       "value": "2",
       "text": {
        "default": "Maribor - right side",
        "sl": "Maribor - desni breg"
       }
      },
      {
       "value": "3",
       "text": {
        "default": "Other locations",
        "sl": "Drugje"
       }
      }
     ]
    }
   ],
   "visibleIf": "{QF1} == 'si'"
  },
  {
   "name": "mail",
   "elements": [
    {
     "type": "text",
     "name": "MA",
     "title": {
      "default": "Se avessi piacere a ricevere informazioni e aggiornamenti sugli eventi e progressi del progetto Melinda puoi lasciarci qui di seguito il tuo indirizzo e-mail così da essere avvisato in futuro.",
      "it": "Se hai piacere a ricevere informazioni e aggiornamenti sugli eventi e progressi del progetto Melinda puoi lasciarci qui di seguito il tuo indirizzo e-mail così da essere avvisato in futuro.",
      "de": "Wenn Sie in Zukunft Informationen und Updates über Veranstaltungen und Ergebnisse des Melinda-Projekts erhalten möchten, können Sie Ihre E-Mail-Adresse angeben.",
      "de-at": "Wenn Sie in Zukunft Informationen und Updates über Veranstaltungen und Ergebnisse des Melinda-Projekts erhalten möchten, können Sie Ihre E-Mail-Adresse angeben.",
      "de-ch": "Wenn Sie in Zukunft Informationen und Updates über Veranstaltungen und Ergebnisse des Melinda-Projekts erhalten möchten, können Sie Ihre E-Mail-Adresse angeben.",
      "sl": "Če želite prejemati novice o dogodkih in napredkih projekta Melinda, nam prosim zaupajte svoj elektronski naslov.",
      "fr": "Si vous souhaitez recevoir des informations et des nouvelles du projet MELINDA, vous pouvez nous laisser votre courriel."
     },
     "description": {
      "default": "(Gli indirizzi email raccolti saranno custoditi su server sicuri localizzati nei paesi dell'Unione Europea e gestiti nel rispetto del GDPR, non saranno ceduti a terzi e verranno conservati solo per il tempo di durata del progetto stesso, sempre separati dagli altri dati del questionario).",
      "it": "(Gli indirizzi email raccolti saranno custoditi su server sicuri localizzati nei paesi dell'Unione Europea e gestiti nel rispetto del GDPR 2016/679, non saranno ceduti a terzi e verranno conservati solo per il tempo di durata del progetto stesso, sempre separati dagli altri dati del questionario).",
      "de": "Die gesammelten E-Mail-Adressen werden auf sicheren Servern in der EU gespeichert und gemäß DSGVO verarbeitet, nicht an Dritte weitergegeben, für die Zeit der Projekttätigkeit aufbewahrt und immer getrennt von anderen Erhebungsdaten gespeichert).",
      "de-at": "Die gesammelten E-Mail-Adressen werden auf sicheren Servern in der EU gespeichert und gemäß DSGVO verarbeitet, nicht an Dritte weitergegeben, für die Zeit der Projekttätigkeit aufbewahrt und immer getrennt von anderen Erhebungsdaten gespeichert).",
      "de-ch": "Die gesammelten E-Mail-Adressen werden auf sicheren Servern in der EU gespeichert und gemäß DSGVO verarbeitet, nicht an Dritte weitergegeben, für die Zeit der Projekttätigkeit aufbewahrt und immer getrennt von anderen Erhebungsdaten gespeichert).",
      "sl": "(Zbrani elektronski naslovi bodo shranjeni na varnih strežnikih, ki se nahajajo v EU, in bodo obdelani v skladu z GDPR. Z njimi se ne trguje, shranjeni bodo za čas projektne dejavnosti in vedno ločeno od drugih podatkov ankete.)",
      "fr": "(Celui-ci sera stocké dans un espace sécurisé, dans l'UE, et utilisé en conformité avec le RGPD. Il ne sera transmis à personne d'autre, gardé uniquement pendant la durée du projet et toujours séparément des autres données du projet)"
     },
     "validators": [
      {
       "type": "email"
      }
     ],
     "inputType": "email"
    }
   ]
  }
 ],
 "checkErrorsMode": "onValueChanged"
};
