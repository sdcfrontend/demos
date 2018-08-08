"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// STATIC DATA
// Lookup data for supported sports

exports.default = {
  "football": {
    "selectableFormations": true,
    "categories": {
      "default": {
        "displayName": "default",
        "order": 0,
        "goalkeeper": {
          "displayName": "Goalkeeper",
          "order": 0,
          "positions": ["Goalkeeper"]
        },
        "defender": {
          "displayName": "Defenders",
          "order": 1,
          "positions": ["Defender"]
        },
        "midfielder": {
          "displayName": "Midfielders",
          "order": 2,
          "positions": ["Midfielder", "Attacking Midfielder"]
        },
        "striker": {
          "displayName": "Strikers",
          "order": 3,
          "positions": ["Striker"]
        }
      }
    },
    "formations": {
      "0": {
        "name": "334",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 5
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 25,
            "y": 30
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 30
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 75,
            "y": 30
          },
          "5": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 25,
            "y": 55
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 55
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 75,
            "y": 55
          },
          "8": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 12,
            "y": 80
          },
          "9": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 37,
            "y": 80
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 63,
            "y": 80
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 88,
            "y": 80
          }
        }
      },
      "1": {
        "name": "343",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 5
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 25,
            "y": 30
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 30
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 75,
            "y": 30
          },
          "5": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 12,
            "y": 55
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 55
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 55
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 88,
            "y": 55
          },
          "9": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 25,
            "y": 80
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 80
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 75,
            "y": 80
          }
        }
      },
      "2": {
        "name": "352",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 5
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 25,
            "y": 30
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 30
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 75,
            "y": 30
          },
          "5": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 11,
            "y": 60
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 30,
            "y": 53
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 50
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 70,
            "y": 53
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 89,
            "y": 60
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 32,
            "y": 80
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 66,
            "y": 80
          }
        }
      },
      "3": {
        "name": "361",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 5
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 25,
            "y": 30
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 30
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 75,
            "y": 30
          },
          "5": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 7,
            "y": 61
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 23,
            "y": 56
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 41,
            "y": 54
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 59,
            "y": 54
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 77,
            "y": 56
          },
          "10": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 93,
            "y": 61
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 80
          }
        }
      },
      "4": {
        "name": "3142",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 25,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 75,
            "y": 22
          },
          "5": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 42
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 12,
            "y": 62
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 62
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 62
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 88,
            "y": 62
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 37,
            "y": 82
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 63,
            "y": 82
          }
        }
      },
      "5": {
        "name": "3331",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 25,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 75,
            "y": 22
          },
          "5": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 25,
            "y": 42
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 42
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 75,
            "y": 42
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 25,
            "y": 62
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 62
          },
          "10": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 75,
            "y": 62
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 82
          }
        }
      },
      "6": {
        "name": "3412",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 25,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 75,
            "y": 22
          },
          "5": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 12,
            "y": 42
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 42
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 42
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 88,
            "y": 42
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 62
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 37,
            "y": 82
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 63,
            "y": 82
          }
        }
      },
      "7": {
        "name": "3421",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 25,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 75,
            "y": 22
          },
          "5": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 12,
            "y": 42
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 42
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 42
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 88,
            "y": 42
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 62
          },
          "10": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 62
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 82
          }
        }
      },
      "8": {
        "name": "3511",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 25,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 75,
            "y": 22
          },
          "5": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 11,
            "y": 52
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 30,
            "y": 45
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 42
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 70,
            "y": 45
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 89,
            "y": 52
          },
          "10": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 62
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 82
          }
        }
      },
      "9": {
        "name": "31312",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 25,
            "y": 20
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 20
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 75,
            "y": 20
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 37
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 25,
            "y": 54
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 54
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 75,
            "y": 54
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 71
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 32,
            "y": 88
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 67,
            "y": 88
          }
        }
      },
      "10": {
        "name": "424",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 5
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 30
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37,
            "y": 30
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 63,
            "y": 30
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 30
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 55
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 55
          },
          "8": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 12,
            "y": 80
          },
          "9": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 37,
            "y": 80
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 63,
            "y": 80
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 88,
            "y": 80
          }
        }
      },
      "11": {
        "name": "433",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 5
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 30
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37,
            "y": 30
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 63,
            "y": 30
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 30
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 25,
            "y": 55
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 55
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 75,
            "y": 55
          },
          "9": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 17,
            "y": 80
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 80
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 83,
            "y": 80
          }
        }
      },
      "12": {
        "name": "442",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 5
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 30
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37.25,
            "y": 30
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 62.75,
            "y": 30
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 30
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 12,
            "y": 55
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37.25,
            "y": 55
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 62.75,
            "y": 55
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 88,
            "y": 55
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 37.25,
            "y": 80
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 62.75,
            "y": 80
          }
        }
      },
      "13": {
        "name": "451",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 5
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 30
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37,
            "y": 30
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 63,
            "y": 30
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 30
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 11,
            "y": 60
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 30,
            "y": 53
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 50
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 70,
            "y": 53
          },
          "10": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 89,
            "y": 60
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 80
          }
        }
      },
      "14": {
        "name": "4132",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 63,
            "y": 22
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 22
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 42
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 25,
            "y": 62
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 62
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 75,
            "y": 62
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 37,
            "y": 82
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 63,
            "y": 82
          }
        }
      },
      "15": {
        "name": "4141",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 63,
            "y": 22
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 22
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 42
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 12,
            "y": 62
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 62
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 62
          },
          "10": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 88,
            "y": 62
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 82
          }
        }
      },
      "16": {
        "name": "4222",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 63,
            "y": 22
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 22
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 42
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 42
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 62
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 62
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 37,
            "y": 82
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 63,
            "y": 82
          }
        }
      },
      "17": {
        "name": "4231",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 63,
            "y": 22
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 22
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 42
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 42
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 25,
            "y": 62
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 62
          },
          "10": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 75,
            "y": 62
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 82
          }
        }
      },
      "18": {
        "name": "4312",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 63,
            "y": 22
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 22
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 25,
            "y": 42
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 42
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 75,
            "y": 42
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 62
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 37,
            "y": 82
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 63,
            "y": 82
          }
        }
      },
      "19": {
        "name": "4321",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 63,
            "y": 22
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 22
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 25,
            "y": 42
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 42
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 75,
            "y": 42
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 62
          },
          "10": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 62
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 82
          }
        }
      },
      "20": {
        "name": "4411",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 22
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37,
            "y": 22
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 63,
            "y": 22
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 22
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 12,
            "y": 42
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 42
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 42
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 88,
            "y": 42
          },
          "10": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 62
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 82
          }
        }
      },
      "21": {
        "name": "41212",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 2
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 12,
            "y": 20
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 37,
            "y": 20
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 63,
            "y": 20
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 88,
            "y": 20
          },
          "6": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 37
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 54
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 54
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 71
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 37,
            "y": 88
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 63,
            "y": 88
          }
        }
      },
      "22": {
        "name": "523",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 5
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 11,
            "y": 35
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 30,
            "y": 28
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 25
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 70,
            "y": 28
          },
          "6": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 89,
            "y": 35
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 30,
            "y": 55
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 70,
            "y": 55
          },
          "9": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 25,
            "y": 80
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 80
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 75,
            "y": 80
          }
        }
      },
      "23": {
        "name": "532",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 5
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 11,
            "y": 35
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 30,
            "y": 28
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 25
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 70,
            "y": 28
          },
          "6": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 89,
            "y": 35
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 25,
            "y": 55
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 50,
            "y": 55
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 75,
            "y": 55
          },
          "10": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 30,
            "y": 80
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 70,
            "y": 80
          }
        }
      },
      "24": {
        "name": "541",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "goalkeeper",
            "positionName": "goalkeeper",
            "positionDisplayName": "Goalkeeper",
            "positionVariations": ["goalkeeper"],
            "x": 50,
            "y": 5
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 11,
            "y": 35
          },
          "3": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 30,
            "y": 28
          },
          "4": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 50,
            "y": 25
          },
          "5": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 70,
            "y": 28
          },
          "6": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "defender",
            "positionName": "defender",
            "positionDisplayName": "Defender",
            "positionVariations": ["defender"],
            "x": 89,
            "y": 35
          },
          "7": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 12,
            "y": 55
          },
          "8": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 37,
            "y": 55
          },
          "9": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 63,
            "y": 55
          },
          "10": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "midfielder",
            "positionName": "midfielder",
            "positionDisplayName": "Midfielder",
            "positionVariations": ["midfielder", "attackingMidfielder"],
            "x": 88,
            "y": 55
          },
          "11": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "striker",
            "positionName": "striker",
            "positionDisplayName": "Striker",
            "positionVariations": ["striker"],
            "x": 50,
            "y": 80
          }
        }
      },
      "25": {
        "name": "squad23",
        "openPositions": "true",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 12,
            "y": 3
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 37,
            "y": 3
          },
          "3": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 63,
            "y": 3
          },
          "4": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 88,
            "y": 3
          },
          "5": {
            "id": "5",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 12,
            "y": 20
          },
          "6": {
            "id": "6",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 37,
            "y": 20
          },
          "7": {
            "id": "7",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 63,
            "y": 20
          },
          "8": {
            "id": "8",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 88,
            "y": 20
          },
          "9": {
            "id": "9",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 12,
            "y": 37
          },
          "10": {
            "id": "10",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 37,
            "y": 37
          },
          "11": {
            "id": "11",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 63,
            "y": 37
          },
          "12": {
            "id": "12",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 88,
            "y": 37
          },
          "13": {
            "id": "13",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 12,
            "y": 54
          },
          "14": {
            "id": "14",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 37,
            "y": 54
          },
          "15": {
            "id": "15",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 63,
            "y": 54
          },
          "16": {
            "id": "16",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 88,
            "y": 54
          },
          "17": {
            "id": "17",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 12,
            "y": 71
          },
          "18": {
            "id": "18",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 37,
            "y": 71
          },
          "19": {
            "id": "19",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 63,
            "y": 71
          },
          "20": {
            "id": "20",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 88,
            "y": 71
          },
          "21": {
            "id": "21",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 25,
            "y": 88
          },
          "22": {
            "id": "22",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 50,
            "y": 88
          },
          "23": {
            "id": "23",
            "label": false,
            "group": "default",
            "subGroup": "squad23",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 75,
            "y": 88
          }
        }
      },
      "26": {
        "name": "squad24",
        "openPositions": "true",
        "positions": {
          "1": {
            "id": "1",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 12,
            "y": 3
          },
          "2": {
            "id": "2",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 37,
            "y": 3
          },
          "3": {
            "id": "3",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 63,
            "y": 3
          },
          "4": {
            "id": "4",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 88,
            "y": 3
          },
          "5": {
            "id": "5",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 12,
            "y": 20
          },
          "6": {
            "id": "6",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 37,
            "y": 20
          },
          "7": {
            "id": "7",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 63,
            "y": 20
          },
          "8": {
            "id": "8",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 88,
            "y": 20
          },
          "9": {
            "id": "9",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 12,
            "y": 37
          },
          "10": {
            "id": "10",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 37,
            "y": 37
          },
          "11": {
            "id": "11",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 63,
            "y": 37
          },
          "12": {
            "id": "12",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 88,
            "y": 37
          },
          "13": {
            "id": "13",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 12,
            "y": 54
          },
          "14": {
            "id": "14",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 37,
            "y": 54
          },
          "15": {
            "id": "15",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 63,
            "y": 54
          },
          "16": {
            "id": "16",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 88,
            "y": 54
          },
          "17": {
            "id": "17",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 12,
            "y": 71
          },
          "18": {
            "id": "18",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 37,
            "y": 71
          },
          "19": {
            "id": "19",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 63,
            "y": 71
          },
          "20": {
            "id": "20",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 88,
            "y": 71
          },
          "21": {
            "id": "21",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 12,
            "y": 88
          },
          "22": {
            "id": "22",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 37,
            "y": 88
          },
          "23": {
            "id": "23",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 63,
            "y": 88
          },
          "24": {
            "id": "24",
            "label": false,
            "group": "default",
            "subGroup": "squad24",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": [],
            "x": 88,
            "y": 88
          }
        }
      }
    }
  },
  "rugbyunion": {
    "categories": {
      "forwards": {
        "displayName": "Forwards",
        "order": 0,
        "frontRow": {
          "displayName": "Front Row",
          "order": 0,
          "positions": ["Loose Head Prop", "Hooker", "Tight Head Prop", "Prop", "Front Row"]
        },
        "secondRow": {
          "displayName": "Second Row",
          "order": 1,
          "positions": ["Lock", "Second Row"]
        },
        "backRow": {
          "displayName": "Back Row",
          "order": 2,
          "positions": ["Flanker", "Openside Flanker", "Blindside Flanker", "No 8", "Back Row"]
        }
      },
      "backs": {
        "displayName": "Backs",
        "order": 1,
        "halfBacks": {
          "displayName": "Half Backs",
          "order": 0,
          "positions": ["Fly Half", "Scrum Half", "Half Back"]
        },
        "centres": {
          "displayName": "Centres",
          "order": 1,
          "positions": ["Inside Centre", "Outside Centre", "Centre"]
        },
        "wingers": {
          "displayName": "Wingers",
          "order": 2,
          "positions": ["Right Wing", "Left Wing", "Winger"]
        },
        "fullBack": {
          "displayName": "Full Back",
          "order": 3,
          "positions": ["Full Back"]
        }
      }
    },
    "formations": {
      "0": {
        "name": "32325",
        "positions": {
          "1": {
            "id": "1",
            "label": "1",
            "group": "forwards",
            "subGroup": "frontRow",
            "positionName": "looseHeadProp",
            "positionDisplayName": "Loose Head Prop",
            "positionVariations": ["frontRow", "prop", "looseHeadProp"],
            "x": 10,
            "y": 8
          },
          "2": {
            "id": "2",
            "label": "2",
            "group": "forwards",
            "subGroup": "frontRow",
            "positionName": "hooker",
            "positionDisplayName": "Hooker",
            "positionVariations": ["frontRow", "hooker"],
            "x": 35,
            "y": 8
          },
          "3": {
            "id": "3",
            "label": "3",
            "group": "forwards",
            "subGroup": "frontRow",
            "positionName": "tightHeadProp",
            "positionDisplayName": "Tight Head Prop",
            "positionVariations": ["frontRow", "prop", "tightHeadProp"],
            "x": 60,
            "y": 8
          },
          "4": {
            "id": "4",
            "label": "4",
            "group": "forwards",
            "subGroup": "secondRow",
            "positionName": "lock",
            "positionDisplayName": "Lock",
            "positionVariations": ["lock", "secondRow"],
            "x": 20,
            "y": 18
          },
          "5": {
            "id": "4",
            "label": "5",
            "group": "forwards",
            "subGroup": "secondRow",
            "positionName": "lock",
            "positionDisplayName": "Lock",
            "positionVariations": ["lock", "secondRow"],
            "x": 50,
            "y": 18
          },
          "6": {
            "id": "5",
            "label": "6",
            "group": "forwards",
            "subGroup": "backRow",
            "positionName": "blindsideFlanker",
            "positionDisplayName": "Blindside Flanker",
            "positionVariations": ["flanker", "blindsideFlanker", "backRow"],
            "x": 5,
            "y": 28
          },
          "7": {
            "id": "6",
            "label": "7",
            "group": "forwards",
            "subGroup": "backRow",
            "positionName": "opensideFlanker",
            "positionDisplayName": "Openside Flanker",
            "positionVariations": ["flanker", "opensideFlanker", "backRow"],
            "x": 65,
            "y": 28
          },
          "8": {
            "id": "7",
            "label": "8",
            "group": "forwards",
            "subGroup": "backRow",
            "positionName": "no8",
            "positionDisplayName": "Number 8",
            "positionVariations": ["no8", "backRow"],
            "x": 35,
            "y": 33
          },
          "9": {
            "id": "8",
            "label": "9",
            "group": "backs",
            "subGroup": "halfBacks",
            "positionName": "scrumHalf",
            "positionDisplayName": "Scrum Half",
            "positionVariations": ["scrumHalf"],
            "x": 51,
            "y": 43
          },
          "10": {
            "id": "9",
            "label": "10",
            "group": "backs",
            "subGroup": "halfBacks",
            "positionName": "flyHalf",
            "positionDisplayName": "Fly Half",
            "positionVariations": ["flyHalf"],
            "x": 63,
            "y": 54
          },
          "11": {
            "id": "11",
            "label": "12",
            "group": "backs",
            "subGroup": "centres",
            "positionName": "insideCentre",
            "positionDisplayName": "Inside Centre",
            "positionVariations": ["centre", "insideCentre"],
            "x": 73,
            "y": 63
          },
          "12": {
            "id": "12",
            "label": "13",
            "group": "backs",
            "subGroup": "centres",
            "positionName": "outsideCentre",
            "positionDisplayName": "Outside Centre",
            "positionVariations": ["centre", "outsideCentre"],
            "x": 84,
            "y": 73
          },
          "13": {
            "id": "10",
            "label": "11",
            "group": "backs",
            "subGroup": "wingers",
            "positionName": "leftWing",
            "positionDisplayName": "Left Winger",
            "positionVariations": ["winger", "leftWing"],
            "x": 5,
            "y": 83
          },
          "14": {
            "id": "13",
            "label": "14",
            "group": "backs",
            "subGroup": "wingers",
            "positionName": "rightWing",
            "positionDisplayName": "Right Winger",
            "positionVariations": ["winger", "rightWing"],
            "x": 95,
            "y": 83
          },
          "15": {
            "id": "14",
            "label": "15",
            "group": "backs",
            "subGroup": "fullBack",
            "positionName": "fullBack",
            "positionDisplayName": "Full Back",
            "positionVariations": ["fullBack"],
            "x": 50,
            "y": 93
          }
        }
      }
    }
  },
  "rugbyleague": {
    "categories": {
      "forwards": {
        "displayName": "Forwards",
        "order": 0,
        "frontRow": {
          "displayName": "Front Row",
          "order": 0,
          "positions": ["Prop", "Hooker", "Forward", "Utility"]
        },
        "backRow": {
          "displayName": "Back Row",
          "order": 1,
          "positions": ["Second Row", "Loose Forward", "Lock", "Forward", "Utility"]
        }
      },
      "backs": {
        "displayName": "Backs",
        "order": 1,
        "halves": {
          "displayName": "Halves",
          "order": 0,
          "positions": ["Scrum Half", "Stand Off", "Util. Back", "Utility"]
        },
        "threequarters": {
          "displayName": "Threequarters",
          "order": 1,
          "positions": ["Winger", "Centre", "Util. Back", "Utility"]
        },
        "fullBack": {
          "displayName": "Full Back",
          "order": 2,
          "positions": ["Full Back", "Util. Back", "Utility"]
        }
      }
    },
    "formations": {
      "0": {
        "name": "33241",
        "positions": {
          "1": {
            "id": "1",
            "label": "10",
            "group": "forwards",
            "subGroup": "frontRow",
            "positionName": "prop",
            "positionDisplayName": "Prop",
            "positionVariations": ["prop"],
            "x": 15,
            "y": 8
          },
          "2": {
            "id": "2",
            "label": "9",
            "group": "forwards",
            "subGroup": "frontRow",
            "positionName": "hooker",
            "positionDisplayName": "Hooker",
            "positionVariations": ["hooker"],
            "x": 50,
            "y": 8
          },
          "3": {
            "id": "1",
            "label": "8",
            "group": "forwards",
            "subGroup": "frontRow",
            "positionName": "prop",
            "positionDisplayName": "Prop",
            "positionVariations": ["prop"],
            "x": 85,
            "y": 8
          },
          "4": {
            "id": "4",
            "label": "13",
            "group": "forwards",
            "subGroup": "backRow",
            "positionName": "looseForward",
            "positionDisplayName": "Loose Forward",
            "positionVariations": ["looseForward"],
            "x": 50,
            "y": 32
          },
          "5": {
            "id": "3",
            "label": "12",
            "group": "forwards",
            "subGroup": "backRow",
            "positionName": "secondRow",
            "positionDisplayName": "Second Row",
            "positionVariations": ["secondRow"],
            "x": 32,
            "y": 20
          },
          "6": {
            "id": "3",
            "label": "11",
            "group": "forwards",
            "subGroup": "backRow",
            "positionName": "secondRow",
            "positionDisplayName": "Second Row",
            "positionVariations": ["secondRow"],
            "x": 68,
            "y": 20
          },
          "7": {
            "id": "5",
            "label": "7",
            "group": "backs",
            "subGroup": "halves",
            "positionName": "scrumHalf",
            "positionDisplayName": "Scrum Half",
            "positionVariations": ["scrumHalf"],
            "x": 50,
            "y": 44
          },
          "8": {
            "id": "6",
            "label": "6",
            "group": "backs",
            "subGroup": "halves",
            "positionName": "standOff",
            "positionDisplayName": "Stand Off",
            "positionVariations": ["standOff"],
            "x": 65,
            "y": 56
          },
          "9": {
            "id": "8",
            "label": "5",
            "group": "backs",
            "subGroup": "threequarters",
            "positionName": "winger",
            "positionDisplayName": "Winger",
            "positionVariations": ["winger"],
            "x": 5,
            "y": 80
          },
          "10": {
            "id": "7",
            "label": "4",
            "group": "backs",
            "subGroup": "threequarters",
            "positionName": "centre",
            "positionDisplayName": "Centre",
            "positionVariations": ["centre"],
            "x": 20,
            "y": 68
          },
          "11": {
            "id": "7",
            "label": "3",
            "group": "backs",
            "subGroup": "threequarters",
            "positionName": "centre",
            "positionDisplayName": "Centre",
            "positionVariations": ["centre"],
            "x": 80,
            "y": 68
          },
          "12": {
            "id": "8",
            "label": "2",
            "group": "backs",
            "subGroup": "threequarters",
            "positionName": "winger",
            "positionDisplayName": "Winger",
            "positionVariations": ["winger"],
            "x": 95,
            "y": 80
          },
          "13": {
            "id": "9",
            "label": "1",
            "group": "backs",
            "subGroup": "fullBack",
            "positionName": "fullBack",
            "positionDisplayName": "Full Back",
            "positionVariations": ["fullBack"],
            "x": 50,
            "y": 92
          }
        }
      }
    }
  },
  "cricket": {
    "categories": {
      "default": {
        "displayName": "default",
        "order": 0,
        "batsman": {
          "displayName": "Batsmen",
          "order": 0,
          "positions": ["Batsman", "Unknown"]
        },
        "allrounder": {
          "displayName": "All Rounders",
          "order": 1,
          "positions": ["All Rounder", "Unknown"]
        },
        "bowler": {
          "displayName": "Bowlers",
          "order": 2,
          "positions": ["Bowler", "Unknown"]
        },
        "wicketkeeper": {
          "displayName": "Wicket Keepers",
          "order": 3,
          "positions": ["Wicket Keeper", "Wicketkeeper\/batsman", "Unknown"]
        }
      }
    },
    "formations": {
      "0": {
        "name": "default",
        "openPositions": "true",
        "positions": {
          "1": {
            "id": "1",
            "group": "default",
            "subGroup": "default",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": []
          },
          "2": {
            "id": "2",
            "group": "default",
            "subGroup": "default",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": []
          },
          "3": {
            "id": "3",
            "group": "default",
            "subGroup": "default",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": []
          },
          "4": {
            "id": "4",
            "group": "default",
            "subGroup": "default",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": []
          },
          "5": {
            "id": "5",
            "group": "default",
            "subGroup": "default",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": []
          },
          "6": {
            "id": "6",
            "group": "default",
            "subGroup": "default",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": []
          },
          "7": {
            "id": "7",
            "group": "default",
            "subGroup": "default",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": []
          },
          "8": {
            "id": "8",
            "group": "default",
            "subGroup": "default",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": []
          },
          "9": {
            "id": "9",
            "group": "default",
            "subGroup": "default",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": []
          },
          "10": {
            "id": "10",
            "group": "default",
            "subGroup": "default",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": []
          },
          "11": {
            "id": "11",
            "group": "default",
            "subGroup": "default",
            "positionName": "all",
            "positionDisplayName": "Player",
            "positionVariations": []
          }
        }
      }
    }
  },
  "ryder-cup": {
    "selectableFormations": false,
    "categories": {
      "default": {
        "displayName": "default",
        "order": 0,
        "europe": {
          "displayName": "Europe",
          "order": 0,
          "positions": ["Europe"]
        },
        "usa": {
          "displayName": "USA",
          "order": 1,
          "positions": ["USA"]
        }
      }
    },
    "formations": {
      "0": {
        "name": "wildcards-eu-usa",
        "positions": {
          "1": {
            "id": "1",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "2": {
            "id": "2",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "3": {
            "id": "3",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "4": {
            "id": "4",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "5": {
            "id": "5",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "6": {
            "id": "6",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "7": {
            "id": "7",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "8": {
            "id": "8",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          }
        }
      },
      "1": {
        "name": "fourballs-eu-usa",
        "positions": {
          "1": {
            "id": "1",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "2": {
            "id": "2",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "3": {
            "id": "3",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "4": {
            "id": "4",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "5": {
            "id": "5",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "6": {
            "id": "6",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "7": {
            "id": "7",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "8": {
            "id": "8",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "9": {
            "id": "9",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "10": {
            "id": "10",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "11": {
            "id": "11",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "12": {
            "id": "12",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "13": {
            "id": "13",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "14": {
            "id": "14",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "15": {
            "id": "15",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "16": {
            "id": "16",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          }
        }
      },
      "2": {
        "name": "singles-eu-usa",
        "positions": {
          "1": {
            "id": "1",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "2": {
            "id": "2",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "3": {
            "id": "3",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "4": {
            "id": "4",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "5": {
            "id": "5",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "6": {
            "id": "6",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "7": {
            "id": "7",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "8": {
            "id": "8",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "9": {
            "id": "9",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "10": {
            "id": "10",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "11": {
            "id": "11",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "12": {
            "id": "12",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "13": {
            "id": "13",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "14": {
            "id": "14",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          },
          "15": {
            "id": "15",
            "group": "default",
            "subGroup": "europe",
            "positionName": "europe",
            "positionDisplayName": "Europe",
            "positionVariations": ["europe"]
          },
          "16": {
            "id": "16",
            "group": "default",
            "subGroup": "usa",
            "positionName": "usa",
            "positionDisplayName": "USA",
            "positionVariations": ["usa"]
          }
        }
      }
    }
  }
};