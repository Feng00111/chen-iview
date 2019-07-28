<template>
<div>
    <Button type="success" @click="add">Add</Button>
    <Table border :columns="columns7" :data="data6">
        <template slot-scope="{ row, index}" slot="action">
            <ButtonGroup size="small">
                <Button type="info" ghost style="margin-right: 5px" @click="show(index)">View</Button>
                <Button type="primary" style="margin-right: 5px" @click="edit(index)">Edit</Button>
                <Button type="error" @click="remove(index)">Delete</Button>
            </ButtonGroup>
        </template>
    </Table>
</div>
</template>
<script>
import { loadTodoAll, removeTodo } from '@/api'
export default {
  data () {
    return {
      columns7: [
        {
          title: 'ID',
          key: 'id'
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
          slot: 'action'
        }
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
    loadAll () {
      loadTodoAll().then(res => {
        var todos = res.data
        this.data6 = todos
      })
    },
    add () {
      this.$router.push('add')
    },
    edit (index) {
      var t = this.data6[index]
      sessionStorage.setItem('onEdit', JSON.stringify(t))
      this.$router.push('edit')
    },
    remove (index) {
      var id = this.data6[index].id
      removeTodo(id).then(res => {
        this.$Modal.info({
          title: 'Add Info',
          content: `${res.data.message}<br>`
        })
        this.loadAll()
      })
    }
  },
  mounted () {
    this.loadAll()
  }
}
</script>
