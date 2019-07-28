<template>
    <Form ref="formCustom" :model="todo" :label-width="80">
        <FormItem label="time">
            <Input type="text" v-model="todo.time"></Input>
        </FormItem>
        <FormItem label="todothing">
            <Input type="text" v-model="todo.todothing"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="save" style="margin-left: 8px">Submit</Button>
        </FormItem>
    </Form>
</template>
<script>
import { addTodo } from '@/api'
export default {
    data () {
        return {
            todo: {
                time: '',
                todothing: '',
            },
        }
    },
    methods: {
        save() {
            var t = JSON.stringify(this.todo) 
            addTodo(t).then(res => {
                this.$Modal.info({
                    title: 'Add Info',
                    content: `：${res.data.message}<br>`
                })
            })
        }
    }
}
</script>
