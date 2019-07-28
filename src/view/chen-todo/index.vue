<template>
<div>
    <Button type="success" @click="newTodo">Add</Button>
    <Table border :columns="columns7" :data="data6">
        <template slot-scope="{ row, index}" slot="action">
            <ButtonGroup size="small">
                <Button type="info" ghost style="margin-right: 5px" @click="show(index)">View</Button>
                <Button type="primary" style="margin-right: 5px" >Edit</Button>
                <Button type="error">Delete</Button>
            </ButtonGroup>
        </template>
    </Table>
</div>
</template>
<script>
import { loadTodoAll } from '@/api'
export default {
    data () {
        return {
            columns7: [
                {
                    title: 'ID',
                    key: 'id',
                },
                {
                    title: 'Time',
                    key: 'time'
                },
                {
                    title: 'Thing',
                    key: 'todothing'
                },
                {
                    title: 'Action',
                    slot: 'action',
                },
            ],
            data6: [
                {
                    id: 'John Brown',
                    time: 18,
                    todothing: 'New York No. 1 Lake Park'
                }
            ]
        }
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `ID：${this.data6[index].id}<br>
                Time：${this.data6[index].time}<br>
                Thing：${this.data6[index].todothing}`
            })
        },
        loadAll() {
            loadTodoAll().then(res => {
                var todos = res.data
                console.log('todos', todos)
               
                todos.forEach(function (value) {
                    console.log(value)
                })
                this.data6 = todos
            })
        },
        newTodo() {
            this.$router.push('add')
        },
    },
    mounted() {
        this.loadAll()
    },
}
</script>
