<template>
    <div id="app">

        <h1><img style = "width: 8%; " src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"  alt="Vue Logo"  /> to-do App</h1>
        <ul v-for="todo in $data.todos.filter(shouldShowToDo)">
            <li v-bind:class="{complete: todo.done}">
                {{todo.text}}
                <input type="checkbox" v-model="todo.done">
            </li>
        </ul>
        <form v-on:submit="handleAddTodo($event)" class="d-flex  align-items-center" id="new-form">
            <label>New: </label>
            <input type="text" v-model="input">
        </form>
        <ul>
            <li>
                <label class="show-completed"> Show Completed Items?</label>
                <input type="checkbox" v-model="showDone">
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        methods: {
            handleAddTodo(e) {
                e.preventDefault();
                this.$data.todos.push({text:this.input, done:false});
                this.input = "";
            },
            shouldShowToDo(todo) {
                if(this.$data.showDone) {
                    return true;
                } else {
                    return !todo.done;
                }
            }
        },
        data() {
            return this.$props.state;
        },
        props: ['state']
    }
</script>


<style>
    /*Vue blue: #34495E, Vue Green: #41B883*/
    body {
        font-family: Helvetica, sans-serif;
        color: darkslategray;
        font-size: 1.4em;
        position: relative;
    }
    h1 {
        text-align: center;
    }
    #app {
        margin: 1em auto auto auto;
        padding: 0px 5px 0px 5px;
        width: 22em;
        border: 4px #41B883 solid;
    }
    input[type=text] {
        margin-top: 1em;
        padding: 0.8em;
        width: 100em;
        font-size: 0.7em;
    }
    input[type=checkbox] {
        position: absolute;
        right: 0;
        top: 36px;
        padding: 1em;
    }
    li {
        list-style-type: none;
        padding: 1em 0 1em 0;
        border-bottom: 1px solid #34495E;
        position: relative;
    }
    li input {
        transform: scale(1.8);
    }
    ul {
        padding: 0;
    }
    label {
        width: 80%;
    }
    .complete {
        color: gainsboro;
        text-decoration: line-through;
        font-style: italic;
    }
    .show-completed {
        font-size: 1rem;
        color: slategray;
    }
    .show-completed input {
        transform: scale(1.4);
    }
</style>