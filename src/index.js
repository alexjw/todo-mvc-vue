import Vue from 'vue'
import App from './App'

new Vue({
    el: '#app',
    components: { App },
    template: '<App :state="state"/>',
    data: {
        state: {
            showDone: false,
            todos: [{
                text: "Refactor CSS",
                done: true
            }, {
                text: "Secure Docker instances",
                done: false
            }, {
                text: "Inject flavoring",
                done: false
            }]
        }
    }
})