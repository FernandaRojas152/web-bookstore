import { defineStore } from 'pinia';
export const useUserStore = defineStore("user", {
    state: () => ({
        books: localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) :[
        ],
        selectedFilters: {}
    }),
    getters: {
    },
    actions: {
    },

});