<script>
import MyButton from './UI/MyButton.vue'
import MyInput from './UI/MyInput.vue'
export default {
  components: { MyButton, MyInput },
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <MyInput v-focus v-model="post.title" type="text" placeholder="Название" />
    <my-input v-model="post.body" type="text" placeholder="Описание" />
    <my-button style="align-self: center" @click="createPost">Новый пост</my-button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
