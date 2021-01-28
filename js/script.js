/* TODO 
_aggiungere verificationa handleAdd... : campo vuoto non va bene.
_placeholder input
*/

var app = new Vue({
    el: "#root",
    data: {
        // prop legata a input newTodoItem
        todoItem: "",
        todoList: [],
    },
    methods: {
        // funzione che aggiuge newTodoItem a data.todoList
        handleAddNewItem: function() {
            this.todoList.push(this.todoItem)

            // resetta l'input todoItem
            this.todoItem = "";
            console.log(this.todoList);
        }
    },
})

Vue.config.devtools = true;