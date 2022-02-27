const {LangSystemText} = require("../../Store/Translator");
export let titleList = [
    {
        title: LangSystemText.Profile,
        path: ["/profile","/profile/Product","/profile/Projects"]
    },
    {
        title: LangSystemText.Add,
        path: ["/add/work","/add/product",["/add/project"]]
    },
    {
        title: LangSystemText.Freelance,
        path: "/"
    },
    {
        title: LangSystemText.Store,
        path: "/store"
    },
    {
        title: LangSystemText.Project,
        path: "/projects"
    },
    {
        title: LangSystemText.Chat,
        path: "/chat"
    },
    {
        title: LangSystemText.Cart,
        path: ["/cart","/cart/Product","/cart/Project"]
    },
    {
        title: LangSystemText.Product,
        path: "/store/product"
    },
    {
        title: LangSystemText.Order,
        path: "/freelance/order"
    },
    {
        title: LangSystemText.Project+" "+LangSystemText.Product,
        path: "/projects/project"
    },

]