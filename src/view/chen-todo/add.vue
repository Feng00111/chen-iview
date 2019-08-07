<template>
<div>
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
    <Modal v-model="isVisiable" title="Add Info" @on-ok="redirect">
        <p>{{message}}<br></p>
    </Modal>
</div>
</template>

<script>
import { addTodo } from '@/api'
export default {
  data () {
    return {
      todo: {
        time: '',
        todothing: ''
      },
      isVisiable: false,
      message: ''
    }
  },
  methods: {
    showModel () {
      this.isVisiable = true
    },
    closeModel () {
      this.isVisiable = false
    },
    redirect () {
      this.$router.push('show')
    },
    save () {
      var t = JSON.stringify(this.todo)
      addTodo(t).then(res => {
        this.message = res.data.message
        this.showModel()
      })
    }
  }
}
</script>
