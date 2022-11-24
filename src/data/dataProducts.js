const dataProducts = [
    {
        id: 1,
        choice:"ФРУКТЫ",
        price: 110,
        img: 'apple',
        category: 'ФРУКТЫ',
        name: 'Яблоки',
        form: 'кг'
    },
    {
        id: 2,
        choice:"ФРУКТЫ",
        price: 150,
        img: 'orange',
        category: 'ФРУКТЫ',
        name: 'Апельсины',
        form: 'кг'
    },
    {
        id: 3,
        choice:"ФРУКТЫ",
        price: 60,
        img: 'bananas',
        category: 'ФРУКТЫ',
        name: 'Бананы',
        form: 'кг'
    },
    {
        id: 4,
        choice:"ФРУКТЫ",
        price: 340,
        img: 'grapes',
        category: 'ФРУКТЫ',
        name: 'Виноград',
        form: 'кг'
    },
    {
        id: 5,
        choice:"ФРУКТЫ",
        price: 300,
        img: 'peach',
        category: 'ФРУКТЫ',
        name: 'Персики',
        form: 'кг'
    },
    {
        id: 6,
        choice:"ФРУКТЫ",
        price: 80,
        img: 'pear',
        category: 'ФРУКТЫ',
        name: 'Груши',
        form: 'кг'
    },
    {
        id: 7,
        choice:"ФРУКТЫ",
        price: 170,
        img: 'avocado',
        category: 'ФРУКТЫ',
        name: 'Авокадо',
        form: 'шт'
    },
    {
        id: 8,
        choice:"ФРУКТЫ",
        price: 110,
        img: 'persimmon',
        category: 'ФРУКТЫ',
        name: 'Хурма',
        form: 'кг'
    },
    {
        id: 9,
        choice:"ФРУКТЫ",
        price: 500,
        img: 'pineapple',
        category: 'ФРУКТЫ',
        name: 'Ананас',
        form: 'шт'
    },
    {
        id: 10,
        choice: "ОВОЩИ",
        price: 210,
        img: 'tomato',
        category: 'ОВОЩИ',
        name: 'Помидоры',
        form: 'кг'
    },
    {
        id: 11,
        choice: "ОВОЩИ",
        price: 120,
        img: 'cucumber',
        category: 'ОВОЩИ',
        name: 'Огурцы',
        form: 'кг'
    },
    {
        id: 12,
        choice: "ОВОЩИ",
        price: 30,
        img: 'carrot',
        category: 'ОВОЩИ',
        name: 'Морковь',
        form: 'кг'
    },
    {
        id: 13,
        choice: "ОВОЩИ",
        price: 110,
        img: 'potato',
        category: 'ОВОЩИ',
        name: 'Картофель',
        form: 'кг'
    },
    {
        id: 14,
        choice: "ОВОЩИ",
        price: 50,
        img: 'onion',
        category: 'ОВОЩИ',
        name: 'Репчаптый лук',
        form: 'кг'
    },
    {
        id: 15,
        choice: "ОВОЩИ",
        price: 180,
        img: 'zucchini',
        category: 'ОВОЩИ',
        name: 'Кабачок',
        form: 'кг'
    },
    {
        id: 16,
        choice: "ОВОЩИ",
        price: 40,
        img: 'parsley',
        category: 'ОВОЩИ',
        name: 'Укроп',
         form: 'уп, 50 гр'

    },
    {
        id: 17,
        choice: "ОВОЩИ",
        price: 220,
        img: 'aubergine',
        category: 'ОВОЩИ',
        name: 'Баклажаны',
        form: 'кг'
    },
    {
        id: 18,
        choice: "ОВОЩИ",
        price: 40,
        img: 'garlic',
        category: 'ОВОЩИ',
        name: 'Чеснок',
        form: 'уп, 3 шт'
    },
    
    {
        id: 19,
        choice: "МЯСО",
        price: 330,
        img: 'meat',
        category: 'МЯСО',
        name: 'Говядина',
        form: 'кг'
    },
    {
        id: 20,
        choice: "МЯСО",
        price: 280,
        img: 'pork',
        category: 'МЯСО',
        name: 'Свинина',
        form: 'кг'
    },
    {
        id: 21,
        choice: "МЯСО",
        price: 290,
        img: 'lamb',
        category: 'МЯСО',
        name: 'Баранина',
        form: 'кг'
    },
    {
        id: 22,
        choice: "МЯСО",
        price: 210,
        img: 'chicken',
        category: 'МЯСО',
        name: 'Курица',
        form: 'кг'
    },
    {
        id: 23,
        choice: "МЯСО",
        price: 130,
        img: 'dumplings',
        category: 'МЯСО',
        name: 'Пельмени',
        form: 'уп, 500 гр'
    },
    {
        id: 24,
        choice: "МЯСО",
        price: 200,
        img: 'nuggets',
        category: 'МЯСО',
        name: 'Котлеты',
        form: 'уп,500 гр'
    },

    {
        id: 25,
        choice: "РЫБА",
        price: 140,
        img: 'pike',
        category: 'РЫБА',
        name: 'Щука',
        form: 'кг'
    },
    {
        id: 26,
        choice: "РЫБА",
        price: 150,
        img: 'perch',
        category: 'РЫБА',
        name: 'Окунь',
        form: 'кг'
    },
    {
        id: 27,
        choice: "РЫБА",
        price: 100,
        img: 'cod',
        category: 'РЫБА',
        name: 'Треска',
        form: 'кг'
    },
    {
        id: 28,
        choice: "РЫБА",
        price: 360,
        img: 'salmon',
        category: 'РЫБА',
        name: 'Лосось',
        form: 'кг'
    },
    {
        id: 29,
        choice: "РЫБА",
        price: 340,
        img: 'zander',
        category: 'РЫБА',
        name: 'Судак',
        form: 'кг'
    },
    {
        id: 30,
        choice: "РЫБА",
        price: 140,
        img: 'smoked-fish',
        category: 'РЫБА',
        name: 'Копчёная рыба',
        form: 'шт'
    },
    {
        id: 31,
        choice: "ХЛЕБ",
        price: 100,
        img: 'bread',
        category: 'ХЛЕБ',
        name: 'Черный хлеб',
        form: 'шт.'
    },
    {
        id: 32,
        choice: "ХЛЕБ",
        price: 110,
        img: 'white-bread',
        category: 'ХЛЕБ',
        name: 'Белый хлеб',
        form: 'шт.'
    },
    {
        id: 33,
        choice: "ХЛЕБ",
        price: 120,
        img: 'cereal-bread',
        category: 'ХЛЕБ',
        name: 'Зерновой хлеб',
        form: ' шт.'
    },
    {
        id: 34,
        choice: "ХЛЕБ",
        price: 50,
        img: 'croissant',
        category: 'ХЛЕБ',
        name: 'Круассаны',
        form: ' шт.'
    },
    {
        id: 35,
        choice: "ХЛЕБ",
        price: 70,
        img: 'baked-pies',
        category: 'ХЛЕБ',
        name: 'Пирожки',
        form: 'шт.'
    },
    {
        id: 36,
        choice: "ХЛЕБ",
        price: 120,
        img: 'cookies',
        category: 'ХЛЕБ',
        name: 'Печенье',
        form: 'упак.'
    },
    {
        id: 37,
        choice: "АЛКОГОЛЬ",
        price: 200,
        img: 'vodka',
        category: 'АЛКОГОЛЬ',
        name: 'Водка',
        form: 'бут.'
    },
    {
        id: 38,
        choice: "АЛКОГОЛЬ",
        price: 550,
        img: 'champagne',
        category: 'АЛКОГОЛЬ',
        name: 'Шампанское',
        form: 'бут.'
    },
    {
        id: 39,
        choice: "АЛКОГОЛЬ",
        price: 1800,
        img: 'whiskey',
        category: 'АЛКОГОЛЬ',
        name: 'Виски',
        form: 'бут.'
    },
    {
        id: 40,
        choice: "АЛКОГОЛЬ",
        price: 150,
        img: 'bear',
        category: 'АЛКОГОЛЬ',
        name: 'Пиво',
        form: 'бут.'
    },
    {
        id: 41,
        choice: "АЛКОГОЛЬ",
        price: 450,
        img: 'red-wine',
        category: 'АЛКОГОЛЬ',
        name: 'Красное вино',
        form: 'бут.'
    },
    {
        id: 42,
        choice: "АЛКОГОЛЬ",
        price: 450,
        img: 'white-wine',
        category: 'АЛКОГОЛЬ',
        name: 'Белое вино',
        form: 'бут.'
    },
    
]
export default dataProducts;