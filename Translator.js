import initialState from "./InitialState";


const SystemTexts = {
    Eng:{

        Profile:  "Profile",
        Add:  "Add",
        Freelance:  "Freelance",
        Store:  "Store",
        Project:  "Project",
        Chat:  "Chat",
        Cart:  "Cart",
        Order:  "Order",
        Product:  "Product",
        Work:  "Work",

        Search: "Search",
        AddToFavourites:"Add to favourites",
        ToChat:"To chat",

        University:  "University",
        City:  "City",
        Subject:  "Subject",
        KnowMore:  "Know More",
        Knowledge:  "Knowledge",
        Communicate:  "How to communicate",
        MoreInfo:  "More information",
        SeePortfolio:  "See portfolio",

        Step:  "Step",
        Next:  "Next",
        Previous:  "Previous",
        Title:  "Title",
        Payment:"Payment",
        Description:"Description",
        Deadline:"Deadline",
        Choose:"Choose",
        PaymentType:"Payment Type",
        SelectAllKnowledge:"Select All Knowledge types that needed to work",
        NoSelectedKnowledge:"No Selected Knowledge",
        Main:"Main",
        Information:"Information",
        ProductName: "Product Name",
        ProductImageAdd:"Add Image for Product",
        ProjectImageAdd: "Add Image,Video or File about project",
        Price: "Price",
        ProjectName: "Project Name",


        Publisher:"Publisher",
        AboutOrder:"about order",

        Send:"Send",
        You: "You",
        NoMessagesYet:"No messages yet",

        By:"By",
        Filter:"Filter",
        UseFilter:"Use Filter",
        DeleteFromCart: "Delete from cart",
        SignUpInWebsite: "Date of registration",
        CreatePortfolio: "Create portfolio"

    },

    Ru:{
        Profile: "Профиль",
        Add: "Добавить",
        Freelance: "Фриланс",
        Store: "Магазин",
        Project: "Проект",
        Chat: "Чат",
        Cart: "Корзина",
        Order: "Заказ",
        Product: "Продукт",
        Work: "Работа",

        Search:"Искать",
        AddToFavourites:"Добавлять в корзину",
        ToChat:"Написать",

        University: "Университет",
        City: "Город",
        Subject: "Придмет",
        KnowMore: "Знать больше",
        Knowledge: "Знании",
        Communicate: "Как связываться",
        MoreInfo: "Больше информация",
        SeePortfolio: "Видеть Портфолио",

        Step: "Шаг",
        Next: "Следующий",
        Previous:"Предидущий",
        Title: "Тема",
        Payment:"Оплата",
        Description:"Описания",
        Deadline:"Дедлайн",
        Choose:"Выбирать",
        PaymentType:"Тип Оплаты",
        SelectAllKnowledge:"Выберитете знании которые нужно для работы",
        NoSelectedKnowledge:"Нет выберенный знании",
        Main:"Главная",
        Information:"Информация",
        ProductName: "Названия продукта",
        ProductImageAdd:"Добавить изображения продукта",
        ProjectImageAdd: "Добавить изображения,видео или файл о проекте",
        Price:"Цена",
        ProjectName: "Названия проекта",

        Publisher:"Издатель",
        AboutOrder:"О заказе",

        Send:"Отправить",
        You: "Вы",
        NoMessagesYet:"Нет никаких сообщении",

        By:"По",
        Filter:"Филтрь",
        UseFilter:"Исползовать филтрь",
        DeleteFromCart: "Удалить из корзины",
        SignUpInWebsite: "Дата регистрация",
        CreatePortfolio: "Создать портфоля"


    }
 }

function TextByLang(status){
    switch (status){
        case "eng":
           return SystemTexts.Eng;
        case "ru":
           return SystemTexts.Ru;
        default:
           return SystemTexts.Ru;
    }
}

export let LangSystemText = TextByLang(initialState.Root.Language.Status);