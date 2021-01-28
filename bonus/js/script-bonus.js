var app = new Vue({
    el: "#root",
    data: {
        // prop legata a input newTodoItem
        todoItem: "",
        todoList: [],
    },
    methods: {

        // controlla che l'input nn sia vuoto
        isEmpty: function(input) {
            return input === "" ? true : false;
        }, 
        
        // funzione che aggiuge newTodoItem a data.todoList
        handleAddNewItem: function() {

            if(this.isEmpty(this.todoItem)) {

                alert("Il campo to do non può essere vuoto.")

            } else {
                
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