export const data = [
  {
    "dateFlight": "2017-06-21T19:00:00.000Z", // Дата рейса
    "flight": "AB-3377", // Номер рейса
    "plnType": "B-757-200", // Тип воздушного судна
    "pln": "XXXAK", // Бортовой номер воздушного судна
    "timeFlight": 26100, // Время налета (с момента взлета до посадки)
    "timeBlock": 27000, // Полетное время (время налета + руление и работа двигателя на земле)
    "timeNight": 16200, // Ночное летное время (является частью налета)
    "timeBiologicalNight": 28200, // Биологическая ночь
    "timeWork": 37800, // Рабочее время (полетное время + предполетная и послеполетная подготовка)
    "type": 0, // Тип записи (0 - фактический налет, 1 - плановый)
    "takeoff": {
      "name": "Томск(Богашево)", // Аэропорт вылета
      "lat": 56.38333333, // Широта
      "long": 85.2 // Долгота
    },
    "landing": {
      "name": "Нячанг(Камрань Интл)", // Аэропорт посадки
      "lat": 11.99805555, // Широта
      "long": 109.21944444 // Долгота
    }
  },
  {
    "dateFlight": "2017-06-24T11:20:00.000Z",
    "flight": "AB-3218",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 23700,
    "timeBlock": 25200,
    "timeNight": 23700,
    "timeBiologicalNight": 12900,
    "timeWork": 33300,
    "type": 0,
    "takeoff": {
      "name": "Нячанг(Камрань Интл)",
      "lat": 11.99805555,
      "long": 109.21944444
    },
    "landing": {
      "name": "Владивосток(Кневичи)",
      "lat": 43.38333333,
      "long": 132.13333333
    }
  },
  {
    "dateFlight": "2017-06-26T23:05:00.000Z",
    "flight": "AB-3211",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 21000,
    "timeBlock": 22200,
    "timeNight": 3300,
    "timeBiologicalNight": 22500,
    "timeWork": 31500,
    "type": 0,
    "takeoff": {
      "name": "Иркутск",
      "lat": 52.26611111,
      "long": 104.38333333
    },
    "landing": {
      "name": "Нячанг(Камрань Интл)",
      "lat": 11.99805555,
      "long": 109.21944444
    }
  },
  {
    "dateFlight": "2017-06-30T04:50:00.000Z",
    "flight": "AB-3508",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 22800,
    "timeBlock": 24300,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 28800,
    "type": 0,
    "takeoff": {
      "name": "Нячанг(Камрань Интл)",
      "lat": 11.99805555,
      "long": 109.21944444
    },
    "landing": {
      "name": "ЛАХОР",
      "lat": 31.52138888,
      "long": 75.40444444
    }
  },
  {
    "dateFlight": "2017-06-30T12:25:00.000Z",
    "flight": "AB-3508",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 19200,
    "timeBlock": 20700,
    "timeNight": 19200,
    "timeBiologicalNight": 10800,
    "timeWork": 22500,
    "type": 0,
    "takeoff": {
      "name": "ЛАХОР",
      "lat": 31.52138888,
      "long": 75.40444444
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-07-03T00:20:00.000Z",
    "flight": "AB-3091",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 16500,
    "timeBlock": 17400,
    "timeNight": 14400,
    "timeBiologicalNight": 10200,
    "timeWork": 20400,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    }
  },
  {
    "dateFlight": "2017-07-03T06:10:00.000Z",
    "flight": "AB-3092",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 15000,
    "timeBlock": 15900,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21300,
    "type": 0,
    "takeoff": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2017-07-05T02:20:00.000Z",
    "flight": "AB-3191",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 16500,
    "timeBlock": 17400,
    "timeNight": 7800,
    "timeBiologicalNight": 9300,
    "timeWork": 21600,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    }
  },
  {
    "dateFlight": "2017-07-05T08:05:00.000Z",
    "flight": "AB-3336",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 12000,
    "timeBlock": 12900,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18000,
    "type": 0,
    "takeoff": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-07-08T01:55:00.000Z",
    "flight": "AB-3191",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 15600,
    "timeBlock": 16800,
    "timeNight": 9900,
    "timeBiologicalNight": 11400,
    "timeWork": 23100,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    }
  },
  {
    "dateFlight": "2017-07-08T07:20:00.000Z",
    "flight": "AB-3336",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 13200,
    "timeBlock": 14100,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18900,
    "type": 0,
    "takeoff": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-07-10T20:45:00.000Z",
    "flight": "AB-3585",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 15600,
    "timeBlock": 16800,
    "timeNight": 15600,
    "timeBiologicalNight": 22200,
    "timeWork": 24600,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "Красноярск(Емельяново)",
      "lat": 56.16666666,
      "long": 92.53333333
    }
  },
  {
    "dateFlight": "2017-07-11T02:15:00.000Z",
    "flight": "AB-3585",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 27000,
    "timeBlock": 27900,
    "timeNight": 0,
    "timeBiologicalNight": 6600,
    "timeWork": 33000,
    "type": 0,
    "takeoff": {
      "name": "Красноярск(Емельяново)",
      "lat": 56.16666666,
      "long": 92.53333333
    },
    "landing": {
      "name": "Нячанг(Камрань Интл)",
      "lat": 11.99805555,
      "long": 109.21944444
    }
  },
  {
    "dateFlight": "2017-07-15T03:30:00.000Z",
    "flight": "AB-3542",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 22800,
    "timeBlock": 24000,
    "timeNight": 0,
    "timeBiologicalNight": 3600,
    "timeWork": 28500,
    "type": 0,
    "takeoff": {
      "name": "Нячанг(Камрань Интл)",
      "lat": 11.99805555,
      "long": 109.21944444
    },
    "landing": {
      "name": "ЛАХОР",
      "lat": 31.52138888,
      "long": 75.40444444
    }
  },
  {
    "dateFlight": "2017-07-15T10:55:00.000Z",
    "flight": "AB-3542",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 15300,
    "timeBlock": 16500,
    "timeNight": 7200,
    "timeBiologicalNight": 0,
    "timeWork": 21300,
    "type": 0,
    "takeoff": {
      "name": "ЛАХОР",
      "lat": 31.52138888,
      "long": 75.40444444
    },
    "landing": {
      "name": "Самара(Курумоч)",
      "lat": 53.23333333,
      "long": 50.31666666
    }
  },
  {
    "dateFlight": "2017-07-25T17:45:00.000Z",
    "flight": "AB-3507",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 16200,
    "timeBlock": 17100,
    "timeNight": 16200,
    "timeBiologicalNight": 19200,
    "timeWork": 24000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "ЛАХОР",
      "lat": 31.52138888,
      "long": 75.40444444
    }
  },
  {
    "dateFlight": "2017-07-25T23:35:00.000Z",
    "flight": "AB-3507",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 18000,
    "timeBlock": 18900,
    "timeNight": 4800,
    "timeBiologicalNight": 9600,
    "timeWork": 24000,
    "type": 0,
    "takeoff": {
      "name": "ЛАХОР",
      "lat": 31.52138888,
      "long": 75.40444444
    },
    "landing": {
      "name": "Нячанг(Камрань Интл)",
      "lat": 11.99805555,
      "long": 109.21944444
    }
  },
  {
    "dateFlight": "2017-08-01T10:00:00.000Z",
    "flight": "AB-3218",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 22200,
    "timeBlock": 23100,
    "timeNight": 18600,
    "timeBiologicalNight": 26400,
    "timeWork": 30600,
    "type": 0,
    "takeoff": {
      "name": "Нячанг(Камрань Интл)",
      "lat": 11.99805555,
      "long": 109.21944444
    },
    "landing": {
      "name": "Владивосток(Кневичи)",
      "lat": 43.38333333,
      "long": 132.13333333
    }
  },
  {
    "dateFlight": "2017-08-03T01:05:00.000Z",
    "flight": "AB-3091",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 15300,
    "timeBlock": 16200,
    "timeNight": 11100,
    "timeBiologicalNight": 13200,
    "timeWork": 21900,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    }
  },
  {
    "dateFlight": "2017-08-03T06:40:00.000Z",
    "flight": "AB-3268",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 17400,
    "timeBlock": 18600,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 24000,
    "type": 0,
    "takeoff": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    },
    "landing": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    }
  },
  {
    "dateFlight": "2017-08-08T20:35:00.000Z",
    "flight": "AB-3585",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 19200,
    "timeBlock": 20700,
    "timeNight": 15900,
    "timeBiologicalNight": 27600,
    "timeWork": 27600,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "Иркутск",
      "lat": 52.26611111,
      "long": 104.38333333
    }
  },
  {
    "dateFlight": "2017-08-09T03:30:00.000Z",
    "flight": "AB-3585",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 21000,
    "timeBlock": 21900,
    "timeNight": 0,
    "timeBiologicalNight": 1200,
    "timeWork": 26100,
    "type": 0,
    "takeoff": {
      "name": "Иркутск",
      "lat": 52.26611111,
      "long": 104.38333333
    },
    "landing": {
      "name": "Нячанг(Камрань Интл)",
      "lat": 11.99805555,
      "long": 109.21944444
    }
  },
  {
    "dateFlight": "2017-08-10T02:50:00.000Z",
    "flight": "AB-3508",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 21600,
    "timeBlock": 22800,
    "timeNight": 0,
    "timeBiologicalNight": 6000,
    "timeWork": 30000,
    "type": 0,
    "takeoff": {
      "name": "Нячанг(Камрань Интл)",
      "lat": 11.99805555,
      "long": 109.21944444
    },
    "landing": {
      "name": "ЛАХОР",
      "lat": 31.52138888,
      "long": 75.40444444
    }
  },
  {
    "dateFlight": "2017-08-10T12:00:00.000Z",
    "flight": "AB-3508",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 17400,
    "timeBlock": 18600,
    "timeNight": 10200,
    "timeBiologicalNight": 0,
    "timeWork": 27000,
    "type": 0,
    "takeoff": {
      "name": "ЛАХОР",
      "lat": 31.52138888,
      "long": 75.40444444
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-08-14T12:40:00.000Z",
    "flight": "AB-3325",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 12600,
    "timeBlock": 13500,
    "timeNight": 1500,
    "timeBiologicalNight": 12000,
    "timeWork": 18900,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    }
  },
  {
    "dateFlight": "2017-08-14T17:15:00.000Z",
    "flight": "AB-3090",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 15900,
    "timeBlock": 17100,
    "timeNight": 15900,
    "timeBiologicalNight": 0,
    "timeWork": 20100,
    "type": 0,
    "takeoff": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2017-08-25T23:20:00.000Z",
    "flight": "AB-3567",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 16800,
    "timeBlock": 18000,
    "timeNight": 15900,
    "timeBiologicalNight": 19800,
    "timeWork": 25800,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    }
  },
  {
    "dateFlight": "2017-08-26T16:00:00.000Z",
    "flight": "AB-3568",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 17400,
    "timeBlock": 18300,
    "timeNight": 17400,
    "timeBiologicalNight": 8700,
    "timeWork": 24900,
    "type": 0,
    "takeoff": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    },
    "landing": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    }
  },
  {
    "dateFlight": "2017-08-28T20:45:00.000Z",
    "flight": "AB-3127",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 21000,
    "timeBlock": 21900,
    "timeNight": 21000,
    "timeBiologicalNight": 28800,
    "timeWork": 29100,
    "type": 0,
    "takeoff": {
      "name": "Екатеринбург(Кольцово)",
      "lat": 56.73333333,
      "long": 60.8
    },
    "landing": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    }
  },
  {
    "dateFlight": "2017-08-29T13:50:00.000Z",
    "flight": "AB-3128",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 19500,
    "timeBlock": 20400,
    "timeNight": 11700,
    "timeBiologicalNight": 3000,
    "timeWork": 27600,
    "type": 0,
    "takeoff": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    },
    "landing": {
      "name": "Екатеринбург(Кольцово)",
      "lat": 56.73333333,
      "long": 60.8
    }
  },
  {
    "dateFlight": "2017-09-04T11:05:00.000Z",
    "flight": "AB-3091",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 15300,
    "timeBlock": 16500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 25500,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    }
  },
  {
    "dateFlight": "2017-09-06T09:35:00.000Z",
    "flight": "AB-3414",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 10800,
    "timeBlock": 12000,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18900,
    "type": 0,
    "takeoff": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    },
    "landing": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    }
  },
  {
    "dateFlight": "2017-09-12T11:15:00.000Z",
    "flight": "AB-3339",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 15000,
    "timeBlock": 16200,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 27900,
    "type": 0,
    "takeoff": {
      "name": "Калининград(Храброво)",
      "lat": 55,
      "long": 20.96666666
    },
    "landing": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    }
  },
  {
    "dateFlight": "2017-09-13T07:20:00.000Z",
    "flight": "AB-3414",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 11700,
    "timeBlock": 12600,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21600,
    "type": 0,
    "takeoff": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    },
    "landing": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    }
  },
  {
    "dateFlight": "2017-09-13T12:40:00.000Z",
    "flight": "AB-3413",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 10500,
    "timeBlock": 11700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 15600,
    "type": 0,
    "takeoff": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    },
    "landing": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    }
  },
  {
    "dateFlight": "2017-09-14T16:20:00.000Z",
    "flight": "AB-3268",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 18000,
    "timeBlock": 18900,
    "timeNight": 18000,
    "timeBiologicalNight": 10200,
    "timeWork": 26400,
    "type": 0,
    "takeoff": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    },
    "landing": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    }
  },
  {
    "dateFlight": "2017-09-26T00:25:00.000Z",
    "flight": "AB-3007",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7500,
    "timeBlock": 8400,
    "timeNight": 7500,
    "timeBiologicalNight": 7500,
    "timeWork": 15300,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2017-09-26T15:10:00.000Z",
    "flight": "AB-3110",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 14700,
    "timeBlock": 15600,
    "timeNight": 10500,
    "timeBiologicalNight": 3000,
    "timeWork": 22200,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Екатеринбург(Кольцово)",
      "lat": 56.73333333,
      "long": 60.8
    }
  },
  {
    "dateFlight": "2017-09-27T19:00:00.000Z",
    "flight": "AB-3157",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 15300,
    "timeBlock": 16200,
    "timeNight": 15300,
    "timeBiologicalNight": 17400,
    "timeWork": 23700,
    "type": 0,
    "takeoff": {
      "name": "Екатеринбург(Кольцово)",
      "lat": 56.73333333,
      "long": 60.8
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2017-09-28T19:30:00.000Z",
    "flight": "AB-3008",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 6600,
    "timeBlock": 7500,
    "timeNight": 6600,
    "timeBiologicalNight": 12000,
    "timeWork": 14100,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-09-29T00:40:00.000Z",
    "flight": "AB-3007",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 8100,
    "timeBlock": 9000,
    "timeNight": 8100,
    "timeBiologicalNight": 15600,
    "timeWork": 15600,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2017-10-01T07:50:00.000Z",
    "flight": "AB-3402",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 6000,
    "timeBlock": 7500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 12000,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    }
  },
  {
    "dateFlight": "2017-10-01T12:40:00.000Z",
    "flight": "AB-3401",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 6300,
    "timeBlock": 7200,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 19200,
    "type": 0,
    "takeoff": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2017-10-02T20:10:00.000Z",
    "flight": "AB-3008",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 7500,
    "timeBlock": 8700,
    "timeNight": 7500,
    "timeBiologicalNight": 15000,
    "timeWork": 15000,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-10-04T23:55:00.000Z",
    "flight": "AB-3007",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 7200,
    "timeBiologicalNight": 14700,
    "timeWork": 14700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2017-10-06T20:05:00.000Z",
    "flight": "AB-3008",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7500,
    "timeBlock": 9000,
    "timeNight": 7500,
    "timeBiologicalNight": 13800,
    "timeWork": 16500,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-10-09T22:00:00.000Z",
    "flight": "AB-3335",
    "plnType": "B-757-200",
    "pln": "XXXAF",
    "timeFlight": 12600,
    "timeBlock": 13500,
    "timeNight": 12600,
    "timeBiologicalNight": 18300,
    "timeWork": 18300,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    }
  },
  {
    "dateFlight": "2017-10-11T15:30:00.000Z",
    "flight": "AB-3340",
    "plnType": "B-757-200",
    "pln": "XXXAF",
    "timeFlight": 15300,
    "timeBlock": 16200,
    "timeNight": 7200,
    "timeBiologicalNight": 4800,
    "timeWork": 24600,
    "type": 0,
    "takeoff": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    },
    "landing": {
      "name": "Калининград(Храброво)",
      "lat": 55,
      "long": 20.96666666
    }
  },
  {
    "dateFlight": "2017-10-25T23:55:00.000Z",
    "flight": "AB-3471",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 7500,
    "timeBlock": 8400,
    "timeNight": 7500,
    "timeBiologicalNight": 15300,
    "timeWork": 15300,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2017-10-26T19:20:00.000Z",
    "flight": "AB-3008",
    "plnType": "B-757-200",
    "pln": "XXXAF",
    "timeFlight": 6900,
    "timeBlock": 7800,
    "timeNight": 6900,
    "timeBiologicalNight": 10200,
    "timeWork": 12900,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-10-30T02:30:00.000Z",
    "flight": "AB-3007",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 0,
    "timeBiologicalNight": 7800,
    "timeWork": 15300,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2017-10-30T20:05:00.000Z",
    "flight": "AB-3008",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 6900,
    "timeBlock": 7800,
    "timeNight": 6900,
    "timeBiologicalNight": 12900,
    "timeWork": 15600,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-11-08T21:05:00.000Z",
    "flight": "AB-3007",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 7200,
    "timeBiologicalNight": 14700,
    "timeWork": 14700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2017-11-09T20:05:00.000Z",
    "flight": "AB-3008",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 6600,
    "timeBlock": 8100,
    "timeNight": 6600,
    "timeBiologicalNight": 12900,
    "timeWork": 13800,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-11-14T00:10:00.000Z",
    "flight": "AB-3007",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 7500,
    "timeBlock": 8400,
    "timeNight": 7500,
    "timeBiologicalNight": 15900,
    "timeWork": 15900,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2017-11-14T19:15:00.000Z",
    "flight": "AB-3358",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 12300,
    "timeBlock": 13500,
    "timeNight": 12300,
    "timeBiologicalNight": 15600,
    "timeWork": 21000,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    }
  },
  {
    "dateFlight": "2017-11-15T12:25:00.000Z",
    "flight": "AB-3321",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 12300,
    "timeBlock": 13200,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18900,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2017-11-15T17:15:00.000Z",
    "flight": "AB-3322",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 12600,
    "timeBlock": 13800,
    "timeNight": 12000,
    "timeBiologicalNight": 6900,
    "timeWork": 19800,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    }
  },
  {
    "dateFlight": "2017-11-24T12:45:00.000Z",
    "flight": "AB-3411",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 7800,
    "timeBlock": 8700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 14400,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2017-11-24T16:10:00.000Z",
    "flight": "AB-3412",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 7200,
    "timeBlock": 8400,
    "timeNight": 2400,
    "timeBiologicalNight": 0,
    "timeWork": 13800,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-11-27T12:15:00.000Z",
    "flight": "AB-3567",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 18000,
    "timeBlock": 18900,
    "timeNight": 2100,
    "timeBiologicalNight": 27000,
    "timeWork": 27000,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    }
  },
  {
    "dateFlight": "2017-11-29T23:00:00.000Z",
    "flight": "AB-3314",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 15000,
    "timeBlock": 15900,
    "timeNight": 8700,
    "timeBiologicalNight": 19800,
    "timeWork": 22500,
    "type": 0,
    "takeoff": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    },
    "landing": {
      "name": "Казань",
      "lat": 55.6,
      "long": 49.28277777
    }
  },
  {
    "dateFlight": "2017-12-08T12:30:00.000Z",
    "flight": "AB-3411",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7800,
    "timeBlock": 8700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 13500,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2017-12-08T16:05:00.000Z",
    "flight": "AB-3412",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7500,
    "timeBlock": 8400,
    "timeNight": 3000,
    "timeBiologicalNight": 0,
    "timeWork": 14400,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-12-15T16:25:00.000Z",
    "flight": "AB-3411",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7500,
    "timeBlock": 8700,
    "timeNight": 4200,
    "timeBiologicalNight": 0,
    "timeWork": 14100,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2017-12-15T20:00:00.000Z",
    "flight": "AB-3412",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7500,
    "timeBlock": 8400,
    "timeNight": 7500,
    "timeBiologicalNight": 13200,
    "timeWork": 14700,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2017-12-19T01:10:00.000Z",
    "flight": "AB-3315",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 12000,
    "timeBlock": 12900,
    "timeNight": 0,
    "timeBiologicalNight": 9000,
    "timeWork": 20100,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2017-12-19T06:00:00.000Z",
    "flight": "AB-3316",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 12600,
    "timeBlock": 13500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18000,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    }
  },
  {
    "dateFlight": "2017-12-20T13:10:00.000Z",
    "flight": "AB-3321",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 12000,
    "timeBlock": 13500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21600,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2017-12-20T17:50:00.000Z",
    "flight": "AB-3322",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 12900,
    "timeBlock": 14100,
    "timeNight": 12900,
    "timeBiologicalNight": 14700,
    "timeWork": 18900,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    }
  },
  {
    "dateFlight": "2017-12-21T12:25:00.000Z",
    "flight": "AB-3267",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 15900,
    "timeBlock": 17100,
    "timeNight": 600,
    "timeBiologicalNight": 0,
    "timeWork": 24900,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    }
  },
  {
    "dateFlight": "2017-12-22T06:55:00.000Z",
    "flight": "AB-3336",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 12300,
    "timeBlock": 13200,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18600,
    "type": 0,
    "takeoff": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-01-19T09:30:00.000Z",
    "flight": "AB-3411",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 8100,
    "timeBlock": 9000,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2018-01-19T13:00:00.000Z",
    "flight": "AB-3412",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 9300,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-01-26T13:20:00.000Z",
    "flight": "AB-3411",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 7800,
    "timeBlock": 8700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 17100,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2018-01-26T16:40:00.000Z",
    "flight": "AB-3412",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 7500,
    "timeBlock": 8700,
    "timeNight": 7200,
    "timeBiologicalNight": 1500,
    "timeWork": 14100,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-01-29T10:30:00.000Z",
    "flight": "AB-3007",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 0,
    "timeBlock": 0,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 10200,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2018-01-29T19:40:00.000Z",
    "flight": "AB-3422",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 8100,
    "timeBlock": 9000,
    "timeNight": 8100,
    "timeBiologicalNight": 12600,
    "timeWork": 16200,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-01-30T01:50:00.000Z",
    "flight": "AB-3421",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 6600,
    "timeBlock": 7500,
    "timeNight": 4500,
    "timeBiologicalNight": 4800,
    "timeWork": 14400,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2018-01-30T19:05:00.000Z",
    "flight": "AB-3162",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 14700,
    "timeBlock": 15900,
    "timeNight": 14700,
    "timeBiologicalNight": 15300,
    "timeWork": 19200,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Пермь(Большое Савино)",
      "lat": 57.95,
      "long": 56.01666666
    }
  },
  {
    "dateFlight": "2018-01-31T00:50:00.000Z",
    "flight": "AB-3161",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 13800,
    "timeBlock": 14700,
    "timeNight": 3000,
    "timeBiologicalNight": 13500,
    "timeWork": 21600,
    "type": 0,
    "takeoff": {
      "name": "Пермь(Большое Савино)",
      "lat": 57.95,
      "long": 56.01666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2018-01-31T05:20:00.000Z",
    "flight": "AB-3008",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 0,
    "timeBlock": 0,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 11100,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-02-05T12:20:00.000Z",
    "flight": "AB-3567",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 18000,
    "timeBlock": 18900,
    "timeNight": 3900,
    "timeBiologicalNight": 0,
    "timeWork": 23100,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    }
  },
  {
    "dateFlight": "2018-02-05T18:30:00.000Z",
    "flight": "AB-3568",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 16500,
    "timeBlock": 17400,
    "timeNight": 16500,
    "timeBiologicalNight": 16800,
    "timeWork": 22500,
    "type": 0,
    "takeoff": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    },
    "landing": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    }
  },
  {
    "dateFlight": "2018-02-07T00:05:00.000Z",
    "flight": "AB-3321",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 13200,
    "timeBlock": 14100,
    "timeNight": 11700,
    "timeBiologicalNight": 21300,
    "timeWork": 21300,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2018-02-07T04:50:00.000Z",
    "flight": "AB-3322",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 11700,
    "timeBlock": 12600,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 14700,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    }
  },
  {
    "dateFlight": "2018-02-10T00:25:00.000Z",
    "flight": "AB-3411",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 8100,
    "timeBlock": 9000,
    "timeNight": 8100,
    "timeBiologicalNight": 20700,
    "timeWork": 21300,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2018-02-10T03:40:00.000Z",
    "flight": "AB-6698",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 1800,
    "timeBlock": 2700,
    "timeNight": 300,
    "timeBiologicalNight": 0,
    "timeWork": 6600,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2018-02-10T06:00:00.000Z",
    "flight": "AB-3008",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 0,
    "timeBlock": 0,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 10800,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-02-16T13:05:00.000Z",
    "flight": "AB-3411",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 15000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2018-02-16T16:25:00.000Z",
    "flight": "AB-3412",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7500,
    "timeBlock": 8700,
    "timeNight": 7500,
    "timeBiologicalNight": 0,
    "timeWork": 15000,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-02-22T12:40:00.000Z",
    "flight": "AB-3325",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 12600,
    "timeBlock": 13500,
    "timeNight": 2400,
    "timeBiologicalNight": 0,
    "timeWork": 20700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    }
  },
  {
    "dateFlight": "2018-02-23T22:45:00.000Z",
    "flight": "AB-3372",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 19200,
    "timeBlock": 20400,
    "timeNight": 18300,
    "timeBiologicalNight": 21600,
    "timeWork": 27600,
    "type": 0,
    "takeoff": {
      "name": "ХУРГАДА",
      "lat": 27.16861111,
      "long": 33.78555555
    },
    "landing": {
      "name": "Архангельск (Талаги)",
      "lat": 64.6,
      "long": 40.71833333
    }
  },
  {
    "dateFlight": "2018-03-22T00:05:00.000Z",
    "flight": "AB-9757",
    "plnType": "B-757-200",
    "pln": "XXXAF",
    "timeFlight": 12300,
    "timeBlock": 13200,
    "timeNight": 12300,
    "timeBiologicalNight": 20700,
    "timeWork": 20700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    }
  },
  {
    "dateFlight": "2018-03-24T05:30:00.000Z",
    "flight": "AB-9786",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 15000,
    "timeBlock": 15900,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 22200,
    "type": 0,
    "takeoff": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2018-03-25T02:10:00.000Z",
    "flight": "AB-9701",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 15600,
    "timeBlock": 16800,
    "timeNight": 7500,
    "timeBiologicalNight": 9000,
    "timeWork": 24000,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    }
  },
  {
    "dateFlight": "2018-03-25T08:40:00.000Z",
    "flight": "AB-9702",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 16800,
    "timeBlock": 17700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 24300,
    "type": 0,
    "takeoff": {
      "name": "ШАРМ-ЭЛЬ-ШЕЙХ",
      "lat": 27.98583333,
      "long": 34.40222222
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2018-04-16T08:05:00.000Z",
    "flight": "AB-3087",
    "plnType": "B-767-300ER",
    "pln": "XXXAE",
    "timeFlight": 10500,
    "timeBlock": 12000,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21600,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2018-04-16T13:45:00.000Z",
    "flight": "AB-3088",
    "plnType": "B-767-300ER",
    "pln": "XXXAE",
    "timeFlight": 11700,
    "timeBlock": 12600,
    "timeNight": 3300,
    "timeBiologicalNight": 0,
    "timeWork": 21300,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2018-04-18T02:15:00.000Z",
    "flight": "AB-7777",
    "plnType": "B-767-300ER",
    "pln": "XXXXO",
    "timeFlight": 10200,
    "timeBlock": 11700,
    "timeNight": 8700,
    "timeBiologicalNight": 3600,
    "timeWork": 18000,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2018-04-18T08:10:00.000Z",
    "flight": "AB-7778",
    "plnType": "B-767-300ER",
    "pln": "XXXXO",
    "timeFlight": 12000,
    "timeBlock": 13800,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 24300,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2018-04-19T03:50:00.000Z",
    "flight": "AB-7777",
    "plnType": "B-767-300ER",
    "pln": "XXXXM",
    "timeFlight": 9900,
    "timeBlock": 11100,
    "timeNight": 5400,
    "timeBiologicalNight": 4800,
    "timeWork": 18000,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2018-04-19T09:50:00.000Z",
    "flight": "AB-7778",
    "plnType": "B-767-300ER",
    "pln": "XXXXM",
    "timeFlight": 11100,
    "timeBlock": 12300,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21000,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2018-04-22T03:30:00.000Z",
    "flight": "AB-7777",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 12000,
    "timeBlock": 13200,
    "timeNight": 6300,
    "timeBiologicalNight": 7200,
    "timeWork": 20100,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2018-04-22T08:05:00.000Z",
    "flight": "AB-9158",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 13500,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-07-20T23:15:00.000Z",
    "flight": "AB-9301",
    "plnType": "B-767-300ER",
    "pln": "XXXXW",
    "timeFlight": 32700,
    "timeBlock": 35100,
    "timeNight": 11760,
    "timeBiologicalNight": 15300,
    "timeWork": 45000,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Бангкок(Суварнамбхуми Интл)",
      "lat": 13.915,
      "long": 100.605
    }
  },
  {
    "dateFlight": "2018-07-23T05:50:00.000Z",
    "flight": "AB-9358",
    "plnType": "B-767-300ER",
    "pln": "XXXXW",
    "timeFlight": 33300,
    "timeBlock": 34500,
    "timeNight": 2400,
    "timeBiologicalNight": 0,
    "timeWork": 41400,
    "type": 0,
    "takeoff": {
      "name": "Бангкок(Суварнамбхуми Интл)",
      "lat": 13.915,
      "long": 100.605
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-08-05T22:45:00.000Z",
    "flight": "AB-7731",
    "plnType": "B-767-300ER",
    "pln": "XXXXM",
    "timeFlight": 33300,
    "timeBlock": 34500,
    "timeNight": 17700,
    "timeBiologicalNight": 16200,
    "timeWork": 42000,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    }
  },
  {
    "dateFlight": "2018-08-08T02:35:00.000Z",
    "flight": "AB-9458",
    "plnType": "B-767-300ER",
    "pln": "XXXXM",
    "timeFlight": 32700,
    "timeBlock": 34200,
    "timeNight": 0,
    "timeBiologicalNight": 2400,
    "timeWork": 44100,
    "type": 0,
    "takeoff": {
      "name": "Краби",
      "lat": 8.05,
      "long": 98.91666666
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-09-26T09:05:00.000Z",
    "flight": "AB-3907",
    "plnType": "B-767-300ER",
    "pln": "XXXXM",
    "timeFlight": 11100,
    "timeBlock": 12300,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 19200,
    "type": 0,
    "takeoff": {
      "name": "Калининград(Храброво)",
      "lat": 55,
      "long": 20.96666666
    },
    "landing": {
      "name": "Монастир",
      "lat": 36.83333333,
      "long": 10.23333333
    }
  },
  {
    "dateFlight": "2018-09-26T13:35:00.000Z",
    "flight": "AB-7708",
    "plnType": "B-767-300ER",
    "pln": "XXXXM",
    "timeFlight": 14100,
    "timeBlock": 15300,
    "timeNight": 2100,
    "timeBiologicalNight": 0,
    "timeWork": 19500,
    "type": 0,
    "takeoff": {
      "name": "Монастир",
      "lat": 36.83333333,
      "long": 10.23333333
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2018-09-28T00:45:00.000Z",
    "flight": "AB-7707",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 15300,
    "timeBlock": 16500,
    "timeNight": 13800,
    "timeBiologicalNight": 9000,
    "timeWork": 22800,
    "type": 0,
    "takeoff": {
      "name": "Москва(Внуково)",
      "lat": 55.6,
      "long": 37.28333333
    },
    "landing": {
      "name": "Монастир",
      "lat": 36.83333333,
      "long": 10.23333333
    }
  },
  {
    "dateFlight": "2018-09-28T06:15:00.000Z",
    "flight": "AB-6108",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 13200,
    "timeBlock": 14100,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 19500,
    "type": 0,
    "takeoff": {
      "name": "Монастир",
      "lat": 36.83333333,
      "long": 10.23333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-10-01T11:35:00.000Z",
    "flight": "AB-6165",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 9900,
    "timeBlock": 10800,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    }
  },
  {
    "dateFlight": "2018-10-01T16:35:00.000Z",
    "flight": "AB-7766",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 13200,
    "timeBlock": 14100,
    "timeNight": 11700,
    "timeBiologicalNight": 4800,
    "timeWork": 21000,
    "type": 0,
    "takeoff": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2018-10-03T00:35:00.000Z",
    "flight": "AB-7755",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 15000,
    "timeBlock": 16200,
    "timeNight": 15000,
    "timeBiologicalNight": 17400,
    "timeWork": 21600,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2018-10-03T06:05:00.000Z",
    "flight": "AB-6152",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 15900,
    "timeBlock": 17700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 22500,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-10-08T01:10:00.000Z",
    "flight": "AB-7765",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 13800,
    "timeBlock": 14700,
    "timeNight": 2400,
    "timeBiologicalNight": 7200,
    "timeWork": 18300,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    }
  },
  {
    "dateFlight": "2018-10-08T06:40:00.000Z",
    "flight": "AB-6166",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 9000,
    "timeBlock": 9900,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 16800,
    "type": 0,
    "takeoff": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-10-14T04:30:00.000Z",
    "flight": "AB-7709",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 15300,
    "timeBlock": 16200,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21000,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Энфида(Хаммамет)",
      "lat": 36.08055555,
      "long": 10.44166666
    }
  },
  {
    "dateFlight": "2018-10-14T10:30:00.000Z",
    "flight": "AB-7710",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 14700,
    "timeBlock": 15900,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21600,
    "type": 0,
    "takeoff": {
      "name": "Энфида(Хаммамет)",
      "lat": 36.08055555,
      "long": 10.44166666
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2018-10-16T02:15:00.000Z",
    "flight": "AB-7781",
    "plnType": "B-767-300ER",
    "pln": "XXXXO",
    "timeFlight": 11400,
    "timeBlock": 12600,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18000,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Бургас",
      "lat": 42.48333333,
      "long": 27.48333333
    }
  },
  {
    "dateFlight": "2018-10-16T06:35:00.000Z",
    "flight": "AB-7782",
    "plnType": "B-767-300ER",
    "pln": "XXXXO",
    "timeFlight": 10800,
    "timeBlock": 11700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 16800,
    "type": 0,
    "takeoff": {
      "name": "Бургас",
      "lat": 42.48333333,
      "long": 27.48333333
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2018-10-16T23:40:00.000Z",
    "flight": "AB-7755",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 14700,
    "timeBlock": 16200,
    "timeNight": 14700,
    "timeBiologicalNight": 13500,
    "timeWork": 21600,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2018-10-17T05:50:00.000Z",
    "flight": "AB-6152",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 15000,
    "timeBlock": 16500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 24000,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-11-11T22:30:00.000Z",
    "flight": "AB-6111",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 14700,
    "timeBlock": 15600,
    "timeNight": 14700,
    "timeBiologicalNight": 19200,
    "timeWork": 21000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Джерба(Зарзис)",
      "lat": 36.83333333,
      "long": 10.23333333
    }
  },
  {
    "dateFlight": "2018-11-12T18:35:00.000Z",
    "flight": "AB-6112",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 13800,
    "timeBlock": 14700,
    "timeNight": 13800,
    "timeBiologicalNight": 19800,
    "timeWork": 19800,
    "type": 0,
    "takeoff": {
      "name": "Джерба(Зарзис)",
      "lat": 36.83333333,
      "long": 10.23333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-11-16T02:00:00.000Z",
    "flight": "AB-6165",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 9600,
    "timeBlock": 10500,
    "timeNight": 0,
    "timeBiologicalNight": 4200,
    "timeWork": 14700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    }
  },
  {
    "dateFlight": "2018-11-16T06:00:00.000Z",
    "flight": "AB-3966",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 11400,
    "timeBlock": 12300,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18000,
    "type": 0,
    "takeoff": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    },
    "landing": {
      "name": "Калининград(Храброво)",
      "lat": 55,
      "long": 20.96666666
    }
  },
  {
    "dateFlight": "2018-11-21T04:00:00.000Z",
    "flight": "AB-6169",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 7800,
    "timeBlock": 9000,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 15000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Родос",
      "lat": 36.40833333,
      "long": 28.08888888
    }
  },
  {
    "dateFlight": "2018-11-21T07:35:00.000Z",
    "flight": "AB-6170",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 8400,
    "timeBlock": 9600,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 15300,
    "type": 0,
    "takeoff": {
      "name": "Родос",
      "lat": 36.40833333,
      "long": 28.08888888
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-11-23T04:15:00.000Z",
    "flight": "AB-6165",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 9900,
    "timeBlock": 10800,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 15600,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    }
  },
  {
    "dateFlight": "2018-11-23T08:45:00.000Z",
    "flight": "AB-6166",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 9300,
    "timeBlock": 10500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 17700,
    "type": 0,
    "takeoff": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-11-25T04:55:00.000Z",
    "flight": "AB-6151",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 16800,
    "timeBlock": 18000,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 22200,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2018-11-25T11:50:00.000Z",
    "flight": "AB-6152",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 15900,
    "timeBlock": 17700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 24300,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-12-06T15:00:00.000Z",
    "flight": "AB-2355",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 16200,
    "timeBlock": 17400,
    "timeNight": 300,
    "timeBiologicalNight": 2400,
    "timeWork": 21300,
    "type": 0,
    "takeoff": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2018-12-06T21:05:00.000Z",
    "flight": "AB-7756",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 13800,
    "timeBlock": 15600,
    "timeNight": 13800,
    "timeBiologicalNight": 15600,
    "timeWork": 21600,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2018-12-07T12:40:00.000Z",
    "flight": "AB-9797",
    "plnType": "B-767-300ER",
    "pln": "XXXAE",
    "timeFlight": 7800,
    "timeBlock": 9000,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 14100,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Сочи(Адлер)",
      "lat": 43.43333333,
      "long": 39.93333333
    }
  },
  {
    "dateFlight": "2018-12-07T16:15:00.000Z",
    "flight": "AB-9798",
    "plnType": "B-767-300ER",
    "pln": "XXXAE",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 300,
    "timeBiologicalNight": 0,
    "timeWork": 14100,
    "type": 0,
    "takeoff": {
      "name": "Сочи(Адлер)",
      "lat": 43.43333333,
      "long": 39.93333333
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2018-12-09T10:50:00.000Z",
    "flight": "AB-615",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 17100,
    "timeBlock": 18600,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 22200,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2018-12-09T19:00:00.000Z",
    "flight": "AB-616",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 15600,
    "timeBlock": 17700,
    "timeNight": 14400,
    "timeBiologicalNight": 15900,
    "timeWork": 29700,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-12-17T00:55:00.000Z",
    "flight": "AB-6111",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 15900,
    "timeBlock": 16800,
    "timeNight": 8100,
    "timeBiologicalNight": 8100,
    "timeWork": 23100,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Джерба(Зарзис)",
      "lat": 36.83333333,
      "long": 10.23333333
    }
  },
  {
    "dateFlight": "2018-12-17T19:55:00.000Z",
    "flight": "AB-6112",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 13200,
    "timeBlock": 14400,
    "timeNight": 13200,
    "timeBiologicalNight": 8100,
    "timeWork": 24600,
    "type": 0,
    "takeoff": {
      "name": "Джерба(Зарзис)",
      "lat": 36.83333333,
      "long": 10.23333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-12-26T18:10:00.000Z",
    "flight": "AB-6169",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 8100,
    "timeBlock": 9000,
    "timeNight": 8100,
    "timeBiologicalNight": 9000,
    "timeWork": 14700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Родос",
      "lat": 36.40833333,
      "long": 28.08888888
    }
  },
  {
    "dateFlight": "2018-12-26T21:30:00.000Z",
    "flight": "AB-6170",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 7200,
    "timeBiologicalNight": 8100,
    "timeWork": 12900,
    "type": 0,
    "takeoff": {
      "name": "Родос",
      "lat": 36.40833333,
      "long": 28.08888888
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2018-12-30T10:40:00.000Z",
    "flight": "AB-615",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 17400,
    "timeBlock": 18600,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21900,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2018-12-30T18:00:00.000Z",
    "flight": "AB-616",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 16200,
    "timeBlock": 18600,
    "timeNight": 16200,
    "timeBiologicalNight": 13200,
    "timeWork": 23700,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-01-02T10:35:00.000Z",
    "flight": "AB-6169",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 8100,
    "timeBlock": 9300,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 14400,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Родос",
      "lat": 36.40833333,
      "long": 28.08888888
    }
  },
  {
    "dateFlight": "2019-01-02T14:25:00.000Z",
    "flight": "AB-6170",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7800,
    "timeBlock": 8700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 15000,
    "type": 0,
    "takeoff": {
      "name": "Родос",
      "lat": 36.40833333,
      "long": 28.08888888
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-01-09T23:45:00.000Z",
    "flight": "AB-6107",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 15000,
    "timeBlock": 15900,
    "timeNight": 15000,
    "timeBiologicalNight": 11700,
    "timeWork": 23100,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Энфида(Хаммамет)",
      "lat": 36.08055555,
      "long": 10.44166666
    }
  },
  {
    "dateFlight": "2019-01-11T00:00:00.000Z",
    "flight": "AB-7710",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 12900,
    "timeBlock": 14100,
    "timeNight": 7200,
    "timeBiologicalNight": 11400,
    "timeWork": 19500,
    "type": 0,
    "takeoff": {
      "name": "Энфида(Хаммамет)",
      "lat": 36.08055555,
      "long": 10.44166666
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2019-01-13T10:45:00.000Z",
    "flight": "AB-615",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 18300,
    "timeBlock": 19800,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 23400,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2019-01-13T19:00:00.000Z",
    "flight": "AB-616",
    "plnType": "B-757-200",
    "pln": "XXXAP",
    "timeFlight": 14700,
    "timeBlock": 16200,
    "timeNight": 14700,
    "timeBiologicalNight": 15000,
    "timeWork": 22200,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-01-19T06:05:00.000Z",
    "flight": "AB-6107",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 15300,
    "timeBlock": 16500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 19500,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Энфида(Хаммамет)",
      "lat": 36.08055555,
      "long": 10.44166666
    }
  },
  {
    "dateFlight": "2019-01-19T18:40:00.000Z",
    "flight": "AB-6108",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 13500,
    "timeBlock": 14700,
    "timeNight": 13500,
    "timeBiologicalNight": 12600,
    "timeWork": 20100,
    "type": 0,
    "takeoff": {
      "name": "Энфида(Хаммамет)",
      "lat": 36.08055555,
      "long": 10.44166666
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-01-21T00:25:00.000Z",
    "flight": "AB-6111",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 15300,
    "timeBlock": 16500,
    "timeNight": 15300,
    "timeBiologicalNight": 10200,
    "timeWork": 21300,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Джерба(Зарзис)",
      "lat": 36.83333333,
      "long": 10.23333333
    }
  },
  {
    "dateFlight": "2019-01-22T11:30:00.000Z",
    "flight": "AB-6112",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 13200,
    "timeBlock": 14400,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18600,
    "type": 0,
    "takeoff": {
      "name": "Джерба(Зарзис)",
      "lat": 36.83333333,
      "long": 10.23333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-01-25T12:35:00.000Z",
    "flight": "AB-7765",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 14700,
    "timeBlock": 15900,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21120,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    }
  },
  {
    "dateFlight": "2019-01-25T18:00:00.000Z",
    "flight": "AB-6166",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 8400,
    "timeBlock": 9900,
    "timeNight": 8400,
    "timeBiologicalNight": 5400,
    "timeWork": 14880,
    "type": 0,
    "takeoff": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-01-27T10:50:00.000Z",
    "flight": "AB-615",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 16800,
    "timeBlock": 17700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21900,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2019-01-27T18:00:00.000Z",
    "flight": "AB-616",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 15900,
    "timeBlock": 18300,
    "timeNight": 14400,
    "timeBiologicalNight": 12900,
    "timeWork": 24600,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-02-01T17:35:00.000Z",
    "flight": "AB-6698",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 3900,
    "timeBlock": 5100,
    "timeNight": 3900,
    "timeBiologicalNight": 0,
    "timeWork": 10200,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Воронеж(Чертовицкое)",
      "lat": 51.8,
      "long": 39.21666666
    }
  },
  {
    "dateFlight": "2019-02-01T22:40:00.000Z",
    "flight": "AB-6699",
    "plnType": "B-757-200",
    "pln": "XXXAF",
    "timeFlight": 3600,
    "timeBlock": 4500,
    "timeNight": 3600,
    "timeBiologicalNight": 4500,
    "timeWork": 19500,
    "type": 0,
    "takeoff": {
      "name": "Воронеж(Чертовицкое)",
      "lat": 51.8,
      "long": 39.21666666
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-02-03T13:15:00.000Z",
    "flight": "AB-615",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 16500,
    "timeBlock": 17700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2019-02-03T19:40:00.000Z",
    "flight": "AB-616",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 16500,
    "timeBlock": 18300,
    "timeNight": 16500,
    "timeBiologicalNight": 18300,
    "timeWork": 24900,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-02-06T12:05:00.000Z",
    "flight": "AB-6169",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 8400,
    "timeBlock": 9300,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 14700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Родос",
      "lat": 36.40833333,
      "long": 28.08888888
    }
  },
  {
    "dateFlight": "2019-02-06T16:00:00.000Z",
    "flight": "AB-6170",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 8400,
    "timeBlock": 9600,
    "timeNight": 7200,
    "timeBiologicalNight": 0,
    "timeWork": 16200,
    "type": 0,
    "takeoff": {
      "name": "Родос",
      "lat": 36.40833333,
      "long": 28.08888888
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-02-08T23:20:00.000Z",
    "flight": "AB-6107",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 14700,
    "timeBlock": 15900,
    "timeNight": 14700,
    "timeBiologicalNight": 13800,
    "timeWork": 22800,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Энфида(Хаммамет)",
      "lat": 36.08055555,
      "long": 10.44166666
    }
  },
  {
    "dateFlight": "2019-02-09T22:00:00.000Z",
    "flight": "AB-6108",
    "plnType": "B-757-200",
    "pln": "XXXAF",
    "timeFlight": 13200,
    "timeBlock": 14400,
    "timeNight": 13200,
    "timeBiologicalNight": 14400,
    "timeWork": 19200,
    "type": 0,
    "takeoff": {
      "name": "Энфида(Хаммамет)",
      "lat": 36.08055555,
      "long": 10.44166666
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-02-13T10:40:00.000Z",
    "flight": "AB-6169",
    "plnType": "B-757-200",
    "pln": "XXXAF",
    "timeFlight": 8400,
    "timeBlock": 9600,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 15000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Родос",
      "lat": 36.40833333,
      "long": 28.08888888
    }
  },
  {
    "dateFlight": "2019-02-13T14:20:00.000Z",
    "flight": "AB-6170",
    "plnType": "B-757-200",
    "pln": "XXXAF",
    "timeFlight": 7500,
    "timeBlock": 8400,
    "timeNight": 1800,
    "timeBiologicalNight": 0,
    "timeWork": 13800,
    "type": 0,
    "takeoff": {
      "name": "Родос",
      "lat": 36.40833333,
      "long": 28.08888888
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-03-11T20:50:00.000Z",
    "flight": "AB-7741",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 13800,
    "timeBlock": 15000,
    "timeNight": 13800,
    "timeBiologicalNight": 14400,
    "timeWork": 21000,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Новосибирск(Толмачево)",
      "lat": 55,
      "long": 82.65
    }
  },
  {
    "dateFlight": "2019-03-12T02:20:00.000Z",
    "flight": "AB-7741",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 25200,
    "timeBlock": 26400,
    "timeNight": 0,
    "timeBiologicalNight": 3000,
    "timeWork": 33300,
    "type": 0,
    "takeoff": {
      "name": "Новосибирск(Толмачево)",
      "lat": 55,
      "long": 82.65
    },
    "landing": {
      "name": "Нячанг(Камрань Интл)",
      "lat": 11.99805555,
      "long": 109.21944444
    }
  },
  {
    "dateFlight": "2019-03-13T10:30:00.000Z",
    "flight": "AB-2444",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 25800,
    "timeBlock": 27000,
    "timeNight": 25800,
    "timeBiologicalNight": 30000,
    "timeWork": 34800,
    "type": 0,
    "takeoff": {
      "name": "Нячанг(Камрань Интл)",
      "lat": 11.99805555,
      "long": 109.21944444
    },
    "landing": {
      "name": "Красноярск(Емельяново)",
      "lat": 56.16666666,
      "long": 92.53333333
    }
  },
  {
    "dateFlight": "2019-03-15T00:30:00.000Z",
    "flight": "AB-7755",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 15300,
    "timeBlock": 16500,
    "timeNight": 15300,
    "timeBiologicalNight": 0,
    "timeWork": 19800,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2019-03-15T06:30:00.000Z",
    "flight": "AB-7756",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 14700,
    "timeBlock": 16200,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 22500,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2019-03-31T04:35:00.000Z",
    "flight": "AB-8885",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 12600,
    "timeBlock": 14400,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 22200,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-03-31T14:50:00.000Z",
    "flight": "AB-8888",
    "plnType": "B-767-300ER",
    "pln": "XXXXM",
    "timeFlight": 10200,
    "timeBlock": 10800,
    "timeNight": 10200,
    "timeBiologicalNight": 0,
    "timeWork": 16200,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2019-04-02T21:50:00.000Z",
    "flight": "AB-5421",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 24000,
    "timeBlock": 24900,
    "timeNight": 7200,
    "timeBiologicalNight": 19200,
    "timeWork": 32700,
    "type": 0,
    "takeoff": {
      "name": "Новосибирск(Толмачево)",
      "lat": 55,
      "long": 82.65
    },
    "landing": {
      "name": "Бангкок(Суварнамбхуми Интл)",
      "lat": 13.915,
      "long": 100.605
    }
  },
  {
    "dateFlight": "2019-04-05T08:00:00.000Z",
    "flight": "AB-6132",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 15900,
    "timeBlock": 17400,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 25800,
    "type": 0,
    "takeoff": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    },
    "landing": {
      "name": "Дели",
      "lat": 28.58333333,
      "long": 77.2
    }
  },
  {
    "dateFlight": "2019-04-05T14:05:00.000Z",
    "flight": "AB-6132",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 20700,
    "timeBlock": 22200,
    "timeNight": 20700,
    "timeBiologicalNight": 3300,
    "timeWork": 28200,
    "type": 0,
    "takeoff": {
      "name": "Дели",
      "lat": 28.58333333,
      "long": 77.2
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-04-16T23:50:00.000Z",
    "flight": "AB-7733",
    "plnType": "B-767-300ER",
    "pln": "XXXXM",
    "timeFlight": 32700,
    "timeBlock": 33600,
    "timeNight": 17700,
    "timeBiologicalNight": 12000,
    "timeWork": 39600,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    }
  },
  {
    "dateFlight": "2019-04-19T08:00:00.000Z",
    "flight": "AB-7734",
    "plnType": "B-767-300ER",
    "pln": "XXXXV",
    "timeFlight": 36900,
    "timeBlock": 37800,
    "timeNight": 21600,
    "timeBiologicalNight": 0,
    "timeWork": 46800,
    "type": 0,
    "takeoff": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2019-06-18T17:35:00.000Z",
    "flight": "AB-7733",
    "plnType": "B-767-300ER",
    "pln": "XXXXF",
    "timeFlight": 33300,
    "timeBlock": 34800,
    "timeNight": 25200,
    "timeBiologicalNight": 28800,
    "timeWork": 45600,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    }
  },
  {
    "dateFlight": "2019-06-21T02:35:00.000Z",
    "flight": "AB-9634",
    "plnType": "B-767-300ER",
    "pln": "XXXXM",
    "timeFlight": 30600,
    "timeBlock": 31500,
    "timeNight": 0,
    "timeBiologicalNight": 2100,
    "timeWork": 37500,
    "type": 0,
    "takeoff": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    },
    "landing": {
      "name": "Екатеринбург(Кольцово)",
      "lat": 56.73333333,
      "long": 60.8
    }
  },
  {
    "dateFlight": "2019-06-28T23:10:00.000Z",
    "flight": "AB-7721",
    "plnType": "B-767-300ER",
    "pln": "XXXXO",
    "timeFlight": 31800,
    "timeBlock": 33300,
    "timeNight": 12600,
    "timeBiologicalNight": 20400,
    "timeWork": 40800,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Бангкок(Суварнамбхуми Интл)",
      "lat": 13.915,
      "long": 100.605
    }
  },
  {
    "dateFlight": "2019-06-30T16:30:00.000Z",
    "flight": "AB-7750",
    "plnType": "B-767-300ER",
    "pln": "XXXXO",
    "timeFlight": 32400,
    "timeBlock": 33900,
    "timeNight": 32400,
    "timeBiologicalNight": 24000,
    "timeWork": 40200,
    "type": 0,
    "takeoff": {
      "name": "Коломбо",
      "lat": 0,
      "long": 0
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2019-08-25T10:30:00.000Z",
    "flight": "AB-8887",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 12000,
    "timeBlock": 13200,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 18000,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-08-25T15:15:00.000Z",
    "flight": "AB-8888",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 12000,
    "timeBlock": 12900,
    "timeNight": 8400,
    "timeBiologicalNight": 0,
    "timeWork": 18600,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2019-08-27T21:25:00.000Z",
    "flight": "AB-7731",
    "plnType": "B-767-300ER",
    "pln": "XXXXV",
    "timeFlight": 32100,
    "timeBlock": 33900,
    "timeNight": 15600,
    "timeBiologicalNight": 21300,
    "timeWork": 46800,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    }
  },
  {
    "dateFlight": "2019-08-30T08:45:00.000Z",
    "flight": "AB-7734",
    "plnType": "B-767-300ER",
    "pln": "XXXXM",
    "timeFlight": 36300,
    "timeBlock": 37200,
    "timeNight": 20100,
    "timeBiologicalNight": 14100,
    "timeWork": 42600,
    "type": 0,
    "takeoff": {
      "name": "Краби",
      "lat": 8.05,
      "long": 98.91666666
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2019-09-03T23:40:00.000Z",
    "flight": "AB-7731",
    "plnType": "B-767-300ER",
    "pln": "XXXAE",
    "timeFlight": 32400,
    "timeBlock": 33600,
    "timeNight": 7200,
    "timeBiologicalNight": 12900,
    "timeWork": 40800,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    }
  },
  {
    "dateFlight": "2019-09-05T13:15:00.000Z",
    "flight": "AB-9634",
    "plnType": "B-767-300ER",
    "pln": "XXXXL",
    "timeFlight": 30900,
    "timeBlock": 33000,
    "timeNight": 30900,
    "timeBiologicalNight": 10800,
    "timeWork": 40500,
    "type": 0,
    "takeoff": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    },
    "landing": {
      "name": "Екатеринбург(Кольцово)",
      "lat": 56.73333333,
      "long": 60.8
    }
  },
  {
    "dateFlight": "2019-09-13T03:50:00.000Z",
    "flight": "AB-773",
    "plnType": "B-767-300ER",
    "pln": "XXXXF",
    "timeFlight": 17400,
    "timeBlock": 18600,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 25500,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Дубай(Аль-Мактум Интл)",
      "lat": 25.25,
      "long": 55.33333333
    }
  },
  {
    "dateFlight": "2019-09-15T09:10:00.000Z",
    "flight": "AB-776",
    "plnType": "B-767-300ER",
    "pln": "XXXXF",
    "timeFlight": 17400,
    "timeBlock": 18900,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 24300,
    "type": 0,
    "takeoff": {
      "name": "Дубай(Аль-Мактум Интл)",
      "lat": 25.25,
      "long": 55.33333333
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2019-09-23T02:15:00.000Z",
    "flight": "AB-7707",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 15000,
    "timeBlock": 16200,
    "timeNight": 0,
    "timeBiologicalNight": 3600,
    "timeWork": 24600,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Энфида(Хаммамет)",
      "lat": 36.08055555,
      "long": 10.44166666
    }
  },
  {
    "dateFlight": "2019-09-23T19:20:00.000Z",
    "flight": "AB-7708",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 14400,
    "timeBlock": 15300,
    "timeNight": 14400,
    "timeBiologicalNight": 15300,
    "timeWork": 20700,
    "type": 0,
    "takeoff": {
      "name": "Энфида(Хаммамет)",
      "lat": 36.08055555,
      "long": 10.44166666
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2019-09-28T00:50:00.000Z",
    "flight": "AB-6191",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 6900,
    "timeBlock": 8100,
    "timeNight": 6900,
    "timeBiologicalNight": 8100,
    "timeWork": 15900,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-09-28T21:45:00.000Z",
    "flight": "AB-9696",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 14700,
    "timeBlock": 15600,
    "timeNight": 10500,
    "timeBiologicalNight": 15600,
    "timeWork": 24600,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Екатеринбург(Кольцово)",
      "lat": 56.73333333,
      "long": 60.8
    }
  },
  {
    "dateFlight": "2019-09-29T22:25:00.000Z",
    "flight": "AB-9695",
    "plnType": "B-767-300ER",
    "pln": "XXXXS",
    "timeFlight": 15000,
    "timeBlock": 15900,
    "timeNight": 15000,
    "timeBiologicalNight": 15900,
    "timeWork": 25200,
    "type": 0,
    "takeoff": {
      "name": "Екатеринбург(Кольцово)",
      "lat": 56.73333333,
      "long": 60.8
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-09-30T04:55:00.000Z",
    "flight": "AB-8888",
    "plnType": "B-767-300ER",
    "pln": "XXXXS",
    "timeFlight": 11400,
    "timeBlock": 12300,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 17700,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2019-10-06T08:05:00.000Z",
    "flight": "AB-6165",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 10200,
    "timeBlock": 11100,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 16200,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    }
  },
  {
    "dateFlight": "2019-10-06T12:35:00.000Z",
    "flight": "AB-2366",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 7800,
    "timeBlock": 9300,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 15900,
    "type": 0,
    "takeoff": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    },
    "landing": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    }
  },
  {
    "dateFlight": "2019-10-07T12:10:00.000Z",
    "flight": "AB-6155",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 17700,
    "timeBlock": 18600,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 22200,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2019-10-07T19:05:00.000Z",
    "flight": "AB-6156",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 15300,
    "timeBlock": 16800,
    "timeNight": 15300,
    "timeBiologicalNight": 15900,
    "timeWork": 24300,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-11-09T17:20:00.000Z",
    "flight": "AB-2391",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 6600,
    "timeBlock": 7500,
    "timeNight": 6600,
    "timeBiologicalNight": 900,
    "timeWork": 16500,
    "type": 0,
    "takeoff": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-11-09T20:30:00.000Z",
    "flight": "AB-6192",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 6300,
    "timeBlock": 7800,
    "timeNight": 6300,
    "timeBiologicalNight": 7800,
    "timeWork": 13200,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-11-14T16:20:00.000Z",
    "flight": "AB-6189",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 8100,
    "timeBlock": 9000,
    "timeNight": 4500,
    "timeBiologicalNight": 0,
    "timeWork": 14100,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2019-11-14T20:00:00.000Z",
    "flight": "AB-6190",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7500,
    "timeBlock": 8400,
    "timeNight": 7500,
    "timeBiologicalNight": 8400,
    "timeWork": 14400,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-11-17T02:35:00.000Z",
    "flight": "AB-6193",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 7200,
    "timeBlock": 8400,
    "timeNight": 0,
    "timeBiologicalNight": 2400,
    "timeWork": 15000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-11-17T05:50:00.000Z",
    "flight": "AB-6194",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 6900,
    "timeBlock": 7800,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 12000,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-11-21T16:05:00.000Z",
    "flight": "AB-6189",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7800,
    "timeBlock": 8700,
    "timeNight": 3300,
    "timeBiologicalNight": 0,
    "timeWork": 12000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2019-11-21T19:35:00.000Z",
    "flight": "AB-6190",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7800,
    "timeBlock": 8700,
    "timeNight": 7800,
    "timeBiologicalNight": 8700,
    "timeWork": 14400,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-11-24T08:30:00.000Z",
    "flight": "AB-6165",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 9600,
    "timeBlock": 10800,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 17100,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    }
  },
  {
    "dateFlight": "2019-11-24T13:00:00.000Z",
    "flight": "AB-2366",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 8100,
    "timeBlock": 9000,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 16500,
    "type": 0,
    "takeoff": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    },
    "landing": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    }
  },
  {
    "dateFlight": "2019-11-27T00:30:00.000Z",
    "flight": "AB-6191",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 7500,
    "timeBlock": 8400,
    "timeNight": 7500,
    "timeBiologicalNight": 8400,
    "timeWork": 15600,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-11-27T20:05:00.000Z",
    "flight": "AB-6192",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 6600,
    "timeBlock": 7800,
    "timeNight": 6600,
    "timeBiologicalNight": 7800,
    "timeWork": 14100,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-11-29T02:20:00.000Z",
    "flight": "AB-6191",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7800,
    "timeBlock": 8700,
    "timeNight": 0,
    "timeBiologicalNight": 3000,
    "timeWork": 15300,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-11-29T08:55:00.000Z",
    "flight": "AB-6192",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 15900,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-11-30T18:25:00.000Z",
    "flight": "AB-2391",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 5700,
    "timeBlock": 7200,
    "timeNight": 5700,
    "timeBiologicalNight": 3900,
    "timeWork": 13800,
    "type": 0,
    "takeoff": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-11-30T21:45:00.000Z",
    "flight": "AB-6192",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 7200,
    "timeBiologicalNight": 8100,
    "timeWork": 15300,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-12-09T17:55:00.000Z",
    "flight": "AB-6155",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 17400,
    "timeBlock": 18300,
    "timeNight": 17400,
    "timeBiologicalNight": 13800,
    "timeWork": 23400,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    }
  },
  {
    "dateFlight": "2019-12-10T00:05:00.000Z",
    "flight": "AB-6156",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 15300,
    "timeBlock": 17100,
    "timeNight": 9000,
    "timeBiologicalNight": 11400,
    "timeWork": 22500,
    "type": 0,
    "takeoff": {
      "name": "Барселона(Эль-Прат)",
      "lat": 42.96666666,
      "long": 2
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-12-12T18:45:00.000Z",
    "flight": "AB-6189",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 8100,
    "timeBlock": 9000,
    "timeNight": 8100,
    "timeBiologicalNight": 7500,
    "timeWork": 15000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2019-12-12T22:20:00.000Z",
    "flight": "AB-6190",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 7200,
    "timeBlock": 8400,
    "timeNight": 7200,
    "timeBiologicalNight": 8400,
    "timeWork": 14100,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-12-20T02:25:00.000Z",
    "flight": "AB-6193",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 8100,
    "timeBlock": 9000,
    "timeNight": 0,
    "timeBiologicalNight": 2700,
    "timeWork": 15300,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-12-21T05:50:00.000Z",
    "flight": "AB-3094",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 7800,
    "timeBlock": 8700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 12900,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Астрахань(Нариманово)",
      "lat": 46.28333333,
      "long": 48.005
    }
  },
  {
    "dateFlight": "2019-12-21T10:35:00.000Z",
    "flight": "AB-3093",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 9600,
    "timeBlock": 10800,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 20700,
    "type": 0,
    "takeoff": {
      "name": "Астрахань(Нариманово)",
      "lat": 46.28333333,
      "long": 48.005
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-12-23T05:50:00.000Z",
    "flight": "AB-3192",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 9600,
    "timeBlock": 10500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 14100,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Белгород",
      "lat": 50.64333333,
      "long": 36.59166666
    }
  },
  {
    "dateFlight": "2019-12-23T11:20:00.000Z",
    "flight": "AB-3191",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 9900,
    "timeBlock": 10800,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21300,
    "type": 0,
    "takeoff": {
      "name": "Белгород",
      "lat": 50.64333333,
      "long": 36.59166666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-12-25T16:45:00.000Z",
    "flight": "AB-7892",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 13200,
    "timeBlock": 14100,
    "timeNight": 9600,
    "timeBiologicalNight": 5400,
    "timeWork": 19800,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    }
  },
  {
    "dateFlight": "2019-12-25T23:15:00.000Z",
    "flight": "AB-7893",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 13800,
    "timeBlock": 15000,
    "timeNight": 13500,
    "timeBiologicalNight": 14100,
    "timeWork": 23400,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-12-28T06:20:00.000Z",
    "flight": "AB-8888",
    "plnType": "B-767-300ER",
    "pln": "XXXXV",
    "timeFlight": 10500,
    "timeBlock": 12300,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 19800,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2019-12-28T13:40:00.000Z",
    "flight": "AB-8887",
    "plnType": "B-767-300ER",
    "pln": "XXXXS",
    "timeFlight": 12600,
    "timeBlock": 14400,
    "timeNight": 600,
    "timeBiologicalNight": 0,
    "timeWork": 23700,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-12-29T14:10:00.000Z",
    "flight": "AB-2392",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 5700,
    "timeBlock": 6300,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 12000,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    }
  },
  {
    "dateFlight": "2019-12-29T20:05:00.000Z",
    "flight": "AB-2391",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 6000,
    "timeBlock": 6900,
    "timeNight": 6000,
    "timeBiologicalNight": 6900,
    "timeWork": 21600,
    "type": 0,
    "takeoff": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2019-12-30T06:55:00.000Z",
    "flight": "AB-6192",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 0,
    "timeBlock": 0,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 10800,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2019-12-31T02:55:00.000Z",
    "flight": "AB-6181",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 6900,
    "timeBlock": 8100,
    "timeNight": 0,
    "timeBiologicalNight": 1200,
    "timeWork": 14100,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Бургас",
      "lat": 42.48333333,
      "long": 27.48333333
    }
  },
  {
    "dateFlight": "2019-12-31T06:20:00.000Z",
    "flight": "AB-6182",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 6600,
    "timeBlock": 7500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 13800,
    "type": 0,
    "takeoff": {
      "name": "Бургас",
      "lat": 42.48333333,
      "long": 27.48333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-01-04T08:50:00.000Z",
    "flight": "AB-7785",
    "plnType": "B-767-300ER",
    "pln": "XXXXV",
    "timeFlight": 11100,
    "timeBlock": 12600,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 17820,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Варна",
      "lat": 43.2,
      "long": 27.91666666
    }
  },
  {
    "dateFlight": "2020-01-04T13:45:00.000Z",
    "flight": "AB-7786",
    "plnType": "B-767-300ER",
    "pln": "XXXXV",
    "timeFlight": 10800,
    "timeBlock": 11700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 19200,
    "type": 0,
    "takeoff": {
      "name": "Варна",
      "lat": 43.2,
      "long": 27.91666666
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2020-01-09T15:35:00.000Z",
    "flight": "AB-6189",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 8100,
    "timeBlock": 9000,
    "timeNight": 3000,
    "timeBiologicalNight": 0,
    "timeWork": 14100,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2020-01-09T19:15:00.000Z",
    "flight": "AB-6190",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 7800,
    "timeBlock": 9000,
    "timeNight": 9000,
    "timeBiologicalNight": 9000,
    "timeWork": 15000,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-01-20T03:30:00.000Z",
    "flight": "AB-6191",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 7500,
    "timeBlock": 8400,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 12000,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2020-01-20T08:45:00.000Z",
    "flight": "AB-6192",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 6600,
    "timeBlock": 7500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 14400,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-01-21T09:45:00.000Z",
    "flight": "AB-6191",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7800,
    "timeBlock": 8700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 13800,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2020-01-21T13:15:00.000Z",
    "flight": "AB-6192",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 6600,
    "timeBlock": 7500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 11400,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-01-22T23:45:00.000Z",
    "flight": "AB-6193",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 7800,
    "timeBlock": 8700,
    "timeNight": 7800,
    "timeBiologicalNight": 8700,
    "timeWork": 13800,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2020-01-23T11:50:00.000Z",
    "flight": "AB-6192",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 6900,
    "timeBlock": 7800,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 15600,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-01-27T02:10:00.000Z",
    "flight": "AB-6191",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 1200,
    "timeBiologicalNight": 3600,
    "timeWork": 14700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2020-01-27T09:05:00.000Z",
    "flight": "AB-6192",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 6300,
    "timeBlock": 7500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 14700,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-02-13T18:45:00.000Z",
    "flight": "AB-6189",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 8400,
    "timeBlock": 9300,
    "timeNight": 8400,
    "timeBiologicalNight": 7800,
    "timeWork": 13200,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    }
  },
  {
    "dateFlight": "2020-02-13T22:10:00.000Z",
    "flight": "AB-6190",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 7200,
    "timeBiologicalNight": 8100,
    "timeWork": 12900,
    "type": 0,
    "takeoff": {
      "name": "Даламан",
      "lat": 36.7,
      "long": 28.78333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-02-14T23:20:00.000Z",
    "flight": "AB-6193",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 7800,
    "timeBlock": 8700,
    "timeNight": 7800,
    "timeBiologicalNight": 8700,
    "timeWork": 14700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2020-02-15T02:50:00.000Z",
    "flight": "AB-2392",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 5700,
    "timeBlock": 6900,
    "timeNight": 1800,
    "timeBiologicalNight": 1200,
    "timeWork": 12600,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    }
  },
  {
    "dateFlight": "2020-02-15T18:50:00.000Z",
    "flight": "AB-2391",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 5700,
    "timeBlock": 7800,
    "timeNight": 5700,
    "timeBiologicalNight": 5400,
    "timeWork": 15600,
    "type": 0,
    "takeoff": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2020-02-15T21:45:00.000Z",
    "flight": "AB-6192",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 6900,
    "timeBlock": 8100,
    "timeNight": 6900,
    "timeBiologicalNight": 8100,
    "timeWork": 13800,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-02-16T13:15:00.000Z",
    "flight": "AB-6165",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 9300,
    "timeBlock": 10200,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 13800,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    }
  },
  {
    "dateFlight": "2020-02-16T17:40:00.000Z",
    "flight": "AB-6166",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 9000,
    "timeBlock": 10500,
    "timeNight": 9000,
    "timeBiologicalNight": 4800,
    "timeWork": 17700,
    "type": 0,
    "takeoff": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-02-18T08:25:00.000Z",
    "flight": "AB-6181",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 7200,
    "timeBlock": 8100,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 11400,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Бургас",
      "lat": 42.48333333,
      "long": 27.48333333
    }
  },
  {
    "dateFlight": "2020-02-18T12:10:00.000Z",
    "flight": "AB-6182",
    "plnType": "B-757-200",
    "pln": "XXXXA",
    "timeFlight": 6600,
    "timeBlock": 7500,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 14400,
    "type": 0,
    "takeoff": {
      "name": "Бургас",
      "lat": 42.48333333,
      "long": 27.48333333
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-02-23T13:40:00.000Z",
    "flight": "AB-6165",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 9900,
    "timeBlock": 10800,
    "timeNight": 600,
    "timeBiologicalNight": 0,
    "timeWork": 14700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    }
  },
  {
    "dateFlight": "2020-02-23T18:05:00.000Z",
    "flight": "AB-6166",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 9000,
    "timeBlock": 10500,
    "timeNight": 9000,
    "timeBiologicalNight": 6300,
    "timeWork": 17100,
    "type": 0,
    "takeoff": {
      "name": "Ираклион(Никос Казанцакис)",
      "lat": 35.34444444,
      "long": 25.18611111
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-02-25T13:45:00.000Z",
    "flight": "AB-6187",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 8400,
    "timeBlock": 9300,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 13200,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Бодрум",
      "lat": 37.25,
      "long": 27.675
    }
  },
  {
    "dateFlight": "2020-02-25T17:10:00.000Z",
    "flight": "AB-6188",
    "plnType": "B-757-200",
    "pln": "XXXAC",
    "timeFlight": 7800,
    "timeBlock": 9000,
    "timeNight": 7800,
    "timeBiologicalNight": 1800,
    "timeWork": 13800,
    "type": 0,
    "takeoff": {
      "name": "Бодрум",
      "lat": 37.25,
      "long": 27.675
    },
    "landing": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    }
  },
  {
    "dateFlight": "2020-03-14T19:00:00.000Z",
    "flight": "AB-7892",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 15600,
    "timeBlock": 16500,
    "timeNight": 15600,
    "timeBiologicalNight": 15900,
    "timeWork": 21300,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    }
  },
  {
    "dateFlight": "2020-03-15T01:05:00.000Z",
    "flight": "AB-7891",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 12900,
    "timeBlock": 13800,
    "timeNight": 10800,
    "timeBiologicalNight": 7500,
    "timeWork": 21000,
    "type": 0,
    "takeoff": {
      "name": "Санкт-Петербург(Пулково)",
      "lat": 59.8,
      "long": 30.28333333
    },
    "landing": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    }
  },
  {
    "dateFlight": "2020-03-15T21:30:00.000Z",
    "flight": "AB-8884",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 12300,
    "timeBlock": 13500,
    "timeNight": 12300,
    "timeBiologicalNight": 13500,
    "timeWork": 18300,
    "type": 0,
    "takeoff": {
      "name": "Анталья",
      "lat": 36.9,
      "long": 30.8
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2020-04-04T18:50:00.000Z",
    "flight": "AB-6121",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 29100,
    "timeBlock": 30600,
    "timeNight": 19800,
    "timeBiologicalNight": 28800,
    "timeWork": 38700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    }
  },
  {
    "dateFlight": "2020-04-06T08:15:00.000Z",
    "flight": "AB-5922",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 24600,
    "timeBlock": 25500,
    "timeNight": 17400,
    "timeBiologicalNight": 27000,
    "timeWork": 33300,
    "type": 0,
    "takeoff": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    },
    "landing": {
      "name": "Новосибирск(Толмачево)",
      "lat": 55,
      "long": 82.65
    }
  },
  {
    "dateFlight": "2020-04-06T16:15:00.000Z",
    "flight": "AB-5922",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 9300,
    "timeBlock": 10200,
    "timeNight": 9300,
    "timeBiologicalNight": 13500,
    "timeWork": 13500,
    "type": 0,
    "takeoff": {
      "name": "Новосибирск(Толмачево)",
      "lat": 55,
      "long": 82.65
    },
    "landing": {
      "name": "Пермь(Большое Савино)",
      "lat": 57.95,
      "long": 56.01666666
    }
  },
  {
    "dateFlight": "2020-04-10T19:55:00.000Z",
    "flight": "AB-6131",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 31800,
    "timeBlock": 32700,
    "timeNight": 21900,
    "timeBiologicalNight": 26100,
    "timeWork": 41700,
    "type": 0,
    "takeoff": {
      "name": "Ростов-на-Дону",
      "lat": 47.26666666,
      "long": 39.81666666
    },
    "landing": {
      "name": "Краби",
      "lat": 8.05,
      "long": 98.91666666
    }
  },
  {
    "dateFlight": "2020-04-13T02:00:00.000Z",
    "flight": "AB-7234",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 28800,
    "timeBlock": 30000,
    "timeNight": 0,
    "timeBiologicalNight": 4200,
    "timeWork": 33600,
    "type": 0,
    "takeoff": {
      "name": "Краби",
      "lat": 8.05,
      "long": 98.91666666
    },
    "landing": {
      "name": "Новосибирск(Толмачево)",
      "lat": 55,
      "long": 82.65
    }
  },
  {
    "dateFlight": "2020-04-13T11:05:00.000Z",
    "flight": "AB-7234",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 6000,
    "timeBlock": 7200,
    "timeNight": 6000,
    "timeBiologicalNight": 0,
    "timeWork": 11700,
    "type": 0,
    "takeoff": {
      "name": "Новосибирск(Толмачево)",
      "lat": 55,
      "long": 82.65
    },
    "landing": {
      "name": "Тюмень(Рощино)",
      "lat": 57.16666666,
      "long": 65.31666666
    }
  },
  {
    "dateFlight": "2020-04-20T17:50:00.000Z",
    "flight": "AB-1631",
    "plnType": "B-767-300ER",
    "pln": "XXXXV",
    "timeFlight": 30300,
    "timeBlock": 31500,
    "timeNight": 22800,
    "timeBiologicalNight": 26400,
    "timeWork": 41700,
    "type": 0,
    "takeoff": {
      "name": "Казань",
      "lat": 55.6,
      "long": 49.28277777
    },
    "landing": {
      "name": "Краби",
      "lat": 8.05,
      "long": 98.91666666
    }
  },
  {
    "dateFlight": "2020-04-23T03:45:00.000Z",
    "flight": "AB-9634",
    "plnType": "B-767-300ER",
    "pln": "XXXXM",
    "timeFlight": 31800,
    "timeBlock": 33000,
    "timeNight": 3600,
    "timeBiologicalNight": 0,
    "timeWork": 40200,
    "type": 0,
    "takeoff": {
      "name": "Краби",
      "lat": 8.05,
      "long": 98.91666666
    },
    "landing": {
      "name": "Екатеринбург(Кольцово)",
      "lat": 56.73333333,
      "long": 60.8
    }
  },
  {
    "dateFlight": "2020-05-09T20:35:00.000Z",
    "flight": "AB-2321",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 15900,
    "timeBlock": 17100,
    "timeNight": 15900,
    "timeBiologicalNight": 17100,
    "timeWork": 24000,
    "type": 0,
    "takeoff": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    },
    "landing": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    }
  },
  {
    "dateFlight": "2020-05-10T01:55:00.000Z",
    "flight": "AB-2321",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 15000,
    "timeBlock": 15900,
    "timeNight": 0,
    "timeBiologicalNight": 4500,
    "timeWork": 18000,
    "type": 0,
    "takeoff": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    },
    "landing": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    }
  },
  {
    "dateFlight": "2020-05-13T06:05:00.000Z",
    "flight": "AB-6122",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 16800,
    "timeBlock": 17700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 23400,
    "type": 0,
    "takeoff": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    },
    "landing": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    }
  },
  {
    "dateFlight": "2020-05-13T11:55:00.000Z",
    "flight": "AB-6122",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 17400,
    "timeBlock": 18300,
    "timeNight": 17400,
    "timeBiologicalNight": 6600,
    "timeWork": 23400,
    "type": 0,
    "takeoff": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    },
    "landing": {
      "name": "Ростов на Дону(Платов)",
      "lat": 47.49416666,
      "long": 39.92472222
    }
  },
  {
    "dateFlight": "2020-05-17T19:45:00.000Z",
    "flight": "AB-7221",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 8400,
    "timeBlock": 9300,
    "timeNight": 8400,
    "timeBiologicalNight": 9300,
    "timeWork": 15000,
    "type": 0,
    "takeoff": {
      "name": "Тюмень(Рощино)",
      "lat": 57.16666666,
      "long": 65.31666666
    },
    "landing": {
      "name": "АБАКАН",
      "lat": 0,
      "long": 0
    }
  },
  {
    "dateFlight": "2020-05-17T23:40:00.000Z",
    "flight": "AB-7221",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 22200,
    "timeBlock": 23400,
    "timeNight": 3600,
    "timeBiologicalNight": 12600,
    "timeWork": 29400,
    "type": 0,
    "takeoff": {
      "name": "АБАКАН",
      "lat": 0,
      "long": 0
    },
    "landing": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    }
  },
  {
    "dateFlight": "2020-05-20T04:20:00.000Z",
    "flight": "AB-2322",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 16500,
    "timeBlock": 17700,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 21000,
    "type": 0,
    "takeoff": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    },
    "landing": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    }
  },
  {
    "dateFlight": "2020-05-20T10:10:00.000Z",
    "flight": "AB-2322",
    "plnType": "B-757-200",
    "pln": "XXXAD",
    "timeFlight": 18300,
    "timeBlock": 19800,
    "timeNight": 6300,
    "timeBiologicalNight": 1500,
    "timeWork": 24600,
    "type": 0,
    "takeoff": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    },
    "landing": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    }
  },
  {
    "dateFlight": "2020-06-23T18:25:00.000Z",
    "flight": "AB-5921",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 15900,
    "timeBlock": 16800,
    "timeNight": 15900,
    "timeBiologicalNight": 14100,
    "timeWork": 22500,
    "type": 0,
    "takeoff": {
      "name": "Пермь(Большое Савино)",
      "lat": 57.95,
      "long": 56.01666666
    },
    "landing": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    }
  },
  {
    "dateFlight": "2020-06-23T23:50:00.000Z",
    "flight": "AB-5921",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 14700,
    "timeBlock": 15600,
    "timeNight": 4800,
    "timeBiologicalNight": 12000,
    "timeWork": 20100,
    "type": 0,
    "takeoff": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    },
    "landing": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    }
  },
  {
    "dateFlight": "2020-06-27T03:40:00.000Z",
    "flight": "AB-6132",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 19200,
    "timeBlock": 20100,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 25500,
    "type": 0,
    "takeoff": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    },
    "landing": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    }
  },
  {
    "dateFlight": "2020-06-27T10:20:00.000Z",
    "flight": "AB-6132",
    "plnType": "B-757-200",
    "pln": "XXXAL",
    "timeFlight": 18300,
    "timeBlock": 19500,
    "timeNight": 12000,
    "timeBiologicalNight": 1800,
    "timeWork": 24900,
    "type": 0,
    "takeoff": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    },
    "landing": {
      "name": "Ростов на Дону(Платов)",
      "lat": 47.49416666,
      "long": 39.92472222
    }
  },
  {
    "dateFlight": "2020-07-01T20:15:00.000Z",
    "flight": "AB-5521",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 27000,
    "timeBlock": 27900,
    "timeNight": 14100,
    "timeBiologicalNight": 24900,
    "timeWork": 37200,
    "type": 0,
    "takeoff": {
      "name": "Омск(Центральный)",
      "lat": 54.96666666,
      "long": 73.31666666
    },
    "landing": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    }
  },
  {
    "dateFlight": "2020-07-03T13:55:00.000Z",
    "flight": "AB-7722",
    "plnType": "B-767-300ER",
    "pln": "XXXXV",
    "timeFlight": 36300,
    "timeBlock": 37500,
    "timeNight": 36300,
    "timeBiologicalNight": 18600,
    "timeWork": 43200,
    "type": 0,
    "takeoff": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  },
  {
    "dateFlight": "2020-07-05T22:30:00.000Z",
    "flight": "AB-7721",
    "plnType": "B-767-300ER",
    "pln": "XXXAE",
    "timeFlight": 31800,
    "timeBlock": 33300,
    "timeNight": 13500,
    "timeBiologicalNight": 17400,
    "timeWork": 39300,
    "type": 0,
    "takeoff": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    },
    "landing": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    }
  },
  {
    "dateFlight": "2020-07-08T22:50:00.000Z",
    "flight": "AB-6132",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 17700,
    "timeBlock": 18600,
    "timeNight": 4200,
    "timeBiologicalNight": 15600,
    "timeWork": 24600,
    "type": 0,
    "takeoff": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    },
    "landing": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    }
  },
  {
    "dateFlight": "2020-07-09T04:55:00.000Z",
    "flight": "AB-6132",
    "plnType": "B-757-200",
    "pln": "XXXXG",
    "timeFlight": 18000,
    "timeBlock": 18900,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 24000,
    "type": 0,
    "takeoff": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    },
    "landing": {
      "name": "Ростов на Дону(Платов)",
      "lat": 47.49416666,
      "long": 39.92472222
    }
  },
  {
    "dateFlight": "2020-07-13T06:00:00.000Z",
    "flight": "AB-9633",
    "plnType": "B-767-300ER",
    "pln": "XXXXS",
    "timeFlight": 30000,
    "timeBlock": 31200,
    "timeNight": 9000,
    "timeBiologicalNight": 0,
    "timeWork": 39300,
    "type": 0,
    "takeoff": {
      "name": "Екатеринбург(Кольцово)",
      "lat": 56.73333333,
      "long": 60.8
    },
    "landing": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    }
  },
  {
    "dateFlight": "2020-07-15T03:20:00.000Z",
    "flight": "AB-9634",
    "plnType": "B-767-300ER",
    "pln": "XXXXS",
    "timeFlight": 31200,
    "timeBlock": 32400,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 38400,
    "type": 0,
    "takeoff": {
      "name": "Пхукет",
      "lat": 8.11333333,
      "long": 98.31694444
    },
    "landing": {
      "name": "Екатеринбург(Кольцово)",
      "lat": 56.73333333,
      "long": 60.8
    }
  },
  {
    "dateFlight": "2020-08-01T19:25:00.000Z",
    "flight": "AB-6121",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 16080,
    "timeBlock": 17100,
    "timeNight": 16080,
    "timeBiologicalNight": 17100,
    "timeWork": 22200,
    "type": 0,
    "takeoff": {
      "name": "Ростов на Дону(Платов)",
      "lat": 47.49416666,
      "long": 39.92472222
    },
    "landing": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    }
  },
  {
    "dateFlight": "2020-08-02T01:03:00.000Z",
    "flight": "AB-6121",
    "plnType": "B-757-200",
    "pln": "XXXAK",
    "timeFlight": 14340,
    "timeBlock": 15300,
    "timeNight": 1800,
    "timeBiologicalNight": 7500,
    "timeWork": 20400,
    "type": 0,
    "takeoff": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    },
    "landing": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    }
  },
  {
    "dateFlight": "2020-08-14T04:33:00.000Z",
    "flight": "AB-6122",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 18240,
    "timeBlock": 19800,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 24600,
    "type": 0,
    "takeoff": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    },
    "landing": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    }
  },
  {
    "dateFlight": "2020-08-14T11:00:00.000Z",
    "flight": "AB-6122",
    "plnType": "B-757-200",
    "pln": "XXXAM",
    "timeFlight": 17400,
    "timeBlock": 18600,
    "timeNight": 3600,
    "timeBiologicalNight": 0,
    "timeWork": 23400,
    "type": 0,
    "takeoff": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    },
    "landing": {
      "name": "Ростов на Дону(Платов)",
      "lat": 47.49416666,
      "long": 39.92472222
    }
  },
  {
    "dateFlight": "2020-08-24T18:42:00.000Z",
    "flight": "AB-2321",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 28680,
    "timeBlock": 30000,
    "timeNight": 21960,
    "timeBiologicalNight": 28080,
    "timeWork": 41580,
    "type": 0,
    "takeoff": {
      "name": "Краснодар(Пашковский)",
      "lat": 45.03277777,
      "long": 39.14944444
    },
    "landing": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    }
  },
  {
    "dateFlight": "2020-08-27T05:20:00.000Z",
    "flight": "AB-6122",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 17520,
    "timeBlock": 19200,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 24600,
    "type": 0,
    "takeoff": {
      "name": "Паттайя(Утапао)",
      "lat": 12.68888888,
      "long": 101.00833333
    },
    "landing": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    }
  },
  {
    "dateFlight": "2020-08-27T11:25:00.000Z",
    "flight": "AB-6122",
    "plnType": "B-757-200",
    "pln": "XXXXC",
    "timeFlight": 19500,
    "timeBlock": 20400,
    "timeNight": 8400,
    "timeBiologicalNight": 0,
    "timeWork": 25500,
    "type": 0,
    "takeoff": {
      "name": "АМРИТСАР",
      "lat": -31.61666666,
      "long": -74.85
    },
    "landing": {
      "name": "Ростов на Дону(Платов)",
      "lat": 47.49416666,
      "long": 39.92472222
    }
  },
  {
    "dateFlight": "2020-11-07T17:38:00.000Z",
    "flight": "AB-978",
    "plnType": "B-767-300ER",
    "pln": "XXXXW",
    "timeFlight": 38580,
    "timeBlock": 38580,
    "timeNight": 0,
    "timeBiologicalNight": 0,
    "timeWork": 38580,
    "type": 0,
    "takeoff": {
      "name": "Пунта Кана",
      "lat": 18.56666666,
      "long": -68.35194444
    },
    "landing": {
      "name": "Москва(Домодедово)",
      "lat": 55.39944444,
      "long": 37.89944444
    }
  }
]
