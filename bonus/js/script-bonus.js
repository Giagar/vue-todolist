/* TODO 
_aggiungi solo spazi in isEmpty
_elimina ridondanza fra le due funzioni che gesticono gli errori degli utenti
*/

var app = new Vue({
    el: "#root",
    data: {
        // prop legata a input newTodoItem
        todoItem: "",
        todoList: [],
        inputPlaceholder: {
            normal: "Nuovo Todo",
            userError: "Scrivi qualcosa per creare un nuovo todo",
        }
    },
    methods: {

        // messaggio e style di errore
        handleUserErrors: function(flag) {
            const target = document.querySelector("#newTodoItem");

            flag ? (
                // flag è true: placeholder errore
                target.placeholder = this.inputPlaceholder.userError,
                target.classList.add("userError")
                ) : (
                // flag è false: placeholder normale
                target.placeholder = this.inputPlaceholder.normal,
                target.classList.remove("userError")
            );
        },

        // alla pressione di qualsiasi tasto, input viene riportato alla condizione iniziale (no errore)
        resetUserErrors: function() {
            const target = document.querySelector("#newTodoItem");

            target.placeholder = this.inputPlaceholder.normal;
            target.classList.remove("userError");
        },

        // controlla che l'input nn sia vuoto
        isEmpty: function(input) {
            return input === "" ? true : false;
        }, 
        
        // funzione che aggiuge newTodoItem a data.todoList
        handleAddNewItem: function() {

            if(this.isEmpty(this.todoItem)) {
                
                // invoca la funzione che gestisce gli errori dell'utente  
                this.handleUserErrors(true);

            } else {

                // invoca la funzione che gestisce gli errori dell'utente  
                this.handleUserErrors(false);

                // aggiunge il nuovo input a todoList
                this.todoList.push(this.todoItem)
    
                // resetta l'input todoItem
                this.todoItem = "";
                console.log(this.todoList);
            }

        },

        // funzione che restituisce un nuovo array privo dell'elemento rimosso
        handleDeleteItem: function(itemIndex) {
            this.todoList = this.todoList.filter((el, i) => i !== itemIndex);
        }
    },
})

Vue.config.devtools = true;