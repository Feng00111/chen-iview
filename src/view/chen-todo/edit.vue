<template>
  <Form ref="formCustom" :model="todo" :label-width="80">
    <FormItem label="time">
      <Input type="text" v-model="todo.time"></Input>
    </FormItem>
    <FormItem label="todothing">
      <Input type="text" v-model="todo.todothing"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="update" style="margin-left: 8px">Submit</Button>
    </FormItem>
  </Form>
</template>
<script>
import { updateTodo } from '@/api'
export default {
  data () {
    return {
      todo: {
        id: '',
        time: '',
        todothing: ''
      }
    }
  },
  methods: {
    show () {
      var t = sessionStorage.getItem('onEdit')
      this.todo = JSON.parse(String(t))
    },
    update () {
      var t = JSON.stringify(this.todo)
      updateTodo(t).then(res => {
        this.$Modal.info({
          title: 'Edit Info',
          content: `${res.data.message}<br>`
        })
      })
    }
  },
  mounted () {
    this.show()
  }
}
</script>
