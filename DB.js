const tickets = [
    {
        "arrival": "Кёльн",
        "departure": "Санкт-Петербург",
        "departure_date": "2023-01-20",
        "departure_time": "04:15",
        "id": 1
    },
    {
        "arrival": "Москва",
        "departure": "Милан",
        "departure_date": "2023-10-24",
        "departure_time": "11:34",
        "id": 2
    },
    {
        "arrival": "Донецк",
        "departure": "Львов",
        "departure_date": "2023-03-26",
        "departure_time": "10:52",
        "id": 3
    },
    {
        "arrival": "Лидс",
        "departure": "Милан",
        "departure_date": "2023-01-18",
        "departure_time": "03:16",
        "id": 4
    },
    {
        "arrival": "Париж",
        "departure": "Бирмингем",
        "departure_date": "2023-02-03",
        "departure_time": "22:11",
        "id": 5
    },
    {
        "arrival": "Харьков",
        "departure": "Копенгаген",
        "departure_date": "2023-12-28",
        "departure_time": "18:14",
        "id": 6
    },
    {
        "arrival": "Санкт-Петербург",
        "departure": "Уфа",
        "departure_date": "2023-08-14",
        "departure_time": "13:22",
        "id": 7
    },
    {
        "arrival": "Мадрид",
        "departure": "Гамбург",
        "departure_date": "2023-07-10",
        "departure_time": "18:21",
        "id": 8
    },
    {
        "arrival": "Ростов-на-Дону",
        "departure": "Загреб",
        "departure_date": "2023-02-20",
        "departure_time": "09:21",
        "id": 9
    },
    {
        "arrival": "Неаполь",
        "departure": "Краков",
        "departure_date": "2023-06-10",
        "departure_time": "19:16",
        "id": 10
    },
    {
        "arrival": "Бирмингем",
        "departure": "Милан",
        "departure_date": "2023-08-06",
        "departure_time": "07:06",
        "id": 11
    },
    {
        "arrival": "Прага",
        "departure": "Валенсия",
        "departure_date": "2023-06-04",
        "departure_time": "18:47",
        "id": 12
    },
    {
        "arrival": "Варшава",
        "departure": "Лидс",
        "departure_date": "2023-05-08",
        "departure_time": "12:30",
        "id": 13
    },
    {
        "arrival": "Прага",
        "departure": "Берлин",
        "departure_date": "2023-01-16",
        "departure_time": "15:53",
        "id": 14
    },
    {
        "arrival": "Бирмингем",
        "departure": "Мадрид",
        "departure_date": "2023-02-22",
        "departure_time": "18:54",
        "id": 15
    },
    {
        "arrival": "Стамбул",
        "departure": "Бирмингем",
        "departure_date": "2023-01-14",
        "departure_time": "10:24",
        "id": 16
    },
    {
        "arrival": "Барселона",
        "departure": "Валенсия",
        "departure_date": "2023-02-10",
        "departure_time": "14:30",
        "id": 17
    },
    {
        "arrival": "Кёльн",
        "departure": "Запорожье",
        "departure_date": "2023-03-09",
        "departure_time": "20:02",
        "id": 18
    },
    {
        "arrival": "Минск",
        "departure": "Минск",
        "departure_date": "2023-09-04",
        "departure_time": "12:24",
        "id": 19
    },
    {
        "arrival": "Загреб",
        "departure": "Копенгаген",
        "departure_date": "2023-11-12",
        "departure_time": "09:20",
        "id": 20
    },
    {
        "arrival": "Воронеж",
        "departure": "Стокгольм",
        "departure_date": "2023-09-05",
        "departure_time": "23:54",
        "id": 21
    },
    {
        "arrival": "Пермь",
        "departure": "Кёльн",
        "departure_date": "2023-03-13",
        "departure_time": "04:35",
        "id": 22
    },
    {
        "arrival": "Берлин",
        "departure": "Саратов",
        "departure_date": "2023-12-16",
        "departure_time": "21:11",
        "id": 23
    },
    {
        "arrival": "Минск",
        "departure": "София",
        "departure_date": "2023-03-28",
        "departure_time": "15:42",
        "id": 24
    },
    {
        "arrival": "Мадрид",
        "departure": "Донецк",
        "departure_date": "2023-09-10",
        "departure_time": "14:45",
        "id": 25
    },
    {
        "arrival": "Лондон",
        "departure": "Минск",
        "departure_date": "2023-06-28",
        "departure_time": "23:13",
        "id": 26
    },
    {
        "arrival": "Мюнхен",
        "departure": "Барселона",
        "departure_date": "2023-07-26",
        "departure_time": "21:48",
        "id": 27
    },
    {
        "arrival": "Амстердам",
        "departure": "Милан",
        "departure_date": "2023-04-08",
        "departure_time": "02:15",
        "id": 28
    },
    {
        "arrival": "Стокгольм",
        "departure": "Рим",
        "departure_date": "2023-08-28",
        "departure_time": "00:48",
        "id": 29
    },
    {
        "arrival": "Нижний-Новгород",
        "departure": "Рим",
        "departure_date": "2023-03-09",
        "departure_time": "18:47",
        "id": 30
    },
    {
        "arrival": "Ростов-на-Дону",
        "departure": "Копенгаген",
        "departure_date": "2023-04-11",
        "departure_time": "10:17",
        "id": 31
    },
    {
        "arrival": "Прага",
        "departure": "Бухарест",
        "departure_date": "2023-09-17",
        "departure_time": "17:54",
        "id": 32
    },
    {
        "arrival": "Стамбул",
        "departure": "Кёльн",
        "departure_date": "2023-11-21",
        "departure_time": "05:14",
        "id": 33
    },
    {
        "arrival": "Валенсия",
        "departure": "Берлин",
        "departure_date": "2023-07-05",
        "departure_time": "15:23",
        "id": 34
    },
    {
        "arrival": "Стокгольм",
        "departure": "Варшава",
        "departure_date": "2023-04-13",
        "departure_time": "20:22",
        "id": 35
    },
    {
        "arrival": "Киев",
        "departure": "Саратов",
        "departure_date": "2023-08-08",
        "departure_time": "16:53",
        "id": 36
    },
    {
        "arrival": "Мадрид",
        "departure": "Лидс",
        "departure_date": "2023-12-17",
        "departure_time": "23:36",
        "id": 37
    },
    {
        "arrival": "Санкт-Петербург",
        "departure": "Бухарест",
        "departure_date": "2023-08-27",
        "departure_time": "12:26",
        "id": 38
    },
    {
        "arrival": "Волгоград",
        "departure": "Гамбург",
        "departure_date": "2023-12-15",
        "departure_time": "11:48",
        "id": 39
    },
    {
        "arrival": "Минск",
        "departure": "Варшава",
        "departure_date": "2023-12-12",
        "departure_time": "07:57",
        "id": 40
    },
    {
        "arrival": "Берлин",
        "departure": "Москва",
        "departure_date": "2023-01-11",
        "departure_time": "22:53",
        "id": 41
    },
    {
        "arrival": "Амстердам",
        "departure": "Воронеж",
        "departure_date": "2023-06-15",
        "departure_time": "11:52",
        "id": 42
    },
    {
        "arrival": "Москва",
        "departure": "Воронеж",
        "departure_date": "2023-08-18",
        "departure_time": "16:58",
        "id": 43
    },
    {
        "arrival": "Берлин",
        "departure": "Париж",
        "departure_date": "2023-12-12",
        "departure_time": "02:05",
        "id": 44
    },
    {
        "arrival": "Барселона",
        "departure": "Франкфурт-на-Майне",
        "departure_date": "2023-11-22",
        "departure_time": "00:46",
        "id": 45
    },
    {
        "arrival": "Минск",
        "departure": "Белград",
        "departure_date": "2023-07-15",
        "departure_time": "07:12",
        "id": 46
    },
    {
        "arrival": "Самара",
        "departure": "Санкт-Петербург",
        "departure_date": "2023-01-07",
        "departure_time": "22:52",
        "id": 47
    },
    {
        "arrival": "Валенсия",
        "departure": "Валенсия",
        "departure_date": "2023-05-26",
        "departure_time": "16:56",
        "id": 48
    },
    {
        "arrival": "Нижний-Новгород",
        "departure": "Одесса",
        "departure_date": "2023-01-06",
        "departure_time": "04:03",
        "id": 49
    },
    {
        "arrival": "Самара",
        "departure": "Валенсия",
        "departure_date": "2023-07-23",
        "departure_time": "15:49",
        "id": 50
    }
]