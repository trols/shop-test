const dataProducts = [
    {
        id: 1,
        price: 100,
        img: 'apple',
        category: 'ФРУКТЫ',
        name: 'Яблоки'
    },
    {
        id: 2,
        price: 150,
        img: 'orange',
        category: 'ФРУКТЫ',
        name: 'Апельсины'
    },
    {
        id: 3,
        price: 100,
        img: 'bananas',
        category: 'ФРУКТЫ',
        name: 'Бананы'
    },
    {
        id: 4,
        price: 140,
        img: 'grapes',
        category: 'ФРУКТЫ',
        name: 'Виноград'
    },
    {
        id: 5,
        price: 100,
        img: 'peach',
        category: 'ФРУКТЫ',
        name: 'Персики'
    },
    {
        id: 6,
        price: 100,
        img: 'apple',
        category: 'ФРУКТЫ',
        name: 'Яблоки'
    },
    {
        id: 7,
        price: 100,
        img: 'avocado',
        category: 'ФРУКТЫ',
        name: 'Авокадо'
    },
    {
        id: 8,
        price: 100,
        img: 'persimmon',
        category: 'ФРУКТЫ',
        name: 'Хурма'
    },
    {
        id: 9,
        price: 100,
        img: 'pineapple',
        category: 'ФРУКТЫ',
        name: 'Ананас'
    },
    {
        id: 10,
        price: 110,
        img: 'tomato',
        category: 'ОВОЩИ',
        name: 'Помидоры'
    },
    {
        id: 11,
        price: 120,
        img: 'cucumber',
        category: 'ОВОЩИ',
        name: 'Огурцы'
    },
    {
        id: 12,
        price: 110,
        img: 'carrot',
        category: 'ОВОЩИ',
        name: 'Морковь'
    },
    {
        id: 13,
        price: 110,
        img: 'potato',
        category: 'ОВОЩИ',
        name: 'Картофель'
    },
    {
        id: 14,
        price: 110,
        img: 'onion',
        category: 'ОВОЩИ',
        name: 'Репчаптый лук'
    },
    {
        id: 15,
        price: 110,
        img: 'zucchini',
        category: 'ОВОЩИ',
        name: 'Кабачок'
    },
    {
        id: 16,
        price: 110,
        img: 'parsley',
        category: 'ОВОЩИ',
        name: 'Зелень'
    },
    {
        id: 17,
        price: 110,
        img: 'aubergine',
        category: 'ОВОЩИ',
        name: 'Баклажаны'
    },
    {
        id: 18,
        price: 110,
        img: 'garlic',
        category: 'ОВОЩИ',
        name: 'Чеснок'
    },
    
    {
        id: 19,
        price: 130,
        img: 'meat',
        category: 'МЯСО',
        name: 'Говядина'
    },
    {
        id: 20,
        price: 130,
        img: 'pork',
        category: 'МЯСО',
        name: 'Свинина'
    },
    {
        id: 21,
        price: 130,
        img: 'lamb',
        category: 'МЯСО',
        name: 'Баранина'
    },
    {
        id: 22,
        price: 130,
        img: 'chicken',
        category: 'МЯСО',
        name: 'Курица'
    },
    {
        id: 23,
        price: 130,
        img: 'dumplings',
        category: 'МЯСО',
        name: 'Пельмени'
    },
    {
        id: 24,
        price: 130,
        img: 'nuggets',
        category: 'МЯСО',
        name: 'Котлеты'
    },

    {
        id: 25,
        price: 140,
        img: 'pike',
        category: 'РЫБА',
        name: 'Щука'
    },
    {
        id: 26,
        price: 140,
        img: 'perch',
        category: 'РЫБА',
        name: 'Окунь'
    },
    {
        id: 27,
        price: 140,
        img: 'cod',
        category: 'РЫБА',
        name: 'Треска'
    },
    {
        id: 28,
        price: 140,
        img: 'salmon',
        category: 'РЫБА',
        name: 'Лосось'
    },
    {
        id: 29,
        price: 140,
        img: 'zander',
        category: 'РЫБА',
        name: 'Судак'
    },
    {
        id: 30,
        price: 140,
        img: 'smoked-fish',
        category: 'РЫБА',
        name: 'Копчёная рыба'
    },
    {
        id: 31,
        price: 120,
        img: 'bread',
        category: 'ХЛЕБ',
        name: 'Черный хлеб'
    },
    {
        id: 32,
        price: 120,
        img: 'white-bread',
        category: 'ХЛЕБ',
        name: 'Белый хлеб'
    },
    {
        id: 33,
        price: 120,
        img: 'cereal-bread',
        category: 'ХЛЕБ',
        name: 'Зерновой хлеб'
    },
    {
        id: 34,
        price: 120,
        img: 'croissant',
        category: 'ХЛЕБ',
        name: 'Круассаны'
    },
    {
        id: 35,
        price: 120,
        img: 'baked-pies',
        category: 'ХЛЕБ',
        name: 'Пирожки'
    },
    {
        id: 36,
        price: 120,
        img: 'cookies',
        category: 'ХЛЕБ',
        name: 'Печенье'
    },
    {
        id: 37,
        price: 150,
        img: 'vodka',
        category: 'АЛКОГОЛЬ',
        name: 'Водка'
    },
    {
        id: 38,
        price: 150,
        img: 'champagne',
        category: 'АЛКОГОЛЬ',
        name: 'Шампанское'
    },
    {
        id: 39,
        price: 150,
        img: 'whiskey',
        category: 'АЛКОГОЛЬ',
        name: 'Виски'
    },
    {
        id: 40,
        price: 150,
        img: 'bear',
        category: 'АЛКОГОЛЬ',
        name: 'Пиво'
    },
    {
        id: 41,
        price: 150,
        img: 'red-wine',
        category: 'АЛКОГОЛЬ',
        name: 'Красное вино'
    },
    {
        id: 42,
        price: 150,
        img: 'white-wine',
        category: 'АЛКОГОЛЬ',
        name: 'Белое вино'
    },
    
]
export default dataProducts;