export const searchData = JSON.parse(localStorage.getItem("search")) || {
    value: "",
    searchData: [], // for checking search input
    filterActive: {
        all: true,
        dessert: false,
        vegan: false,
        meat: false,
        seafood: false,
        drinks: false,
        pasta: false,
    },
};
