<template>
    <div>
        <h1>
            Hey!!asdddddddddxxxx
        </h1>
        <ul v-for="todo in $data.todos">
            <li>
                {{todo.text}}
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        data() {
            return this.$props.state;
        },
        props: ['state']
    }
</script>


<style>

</style>