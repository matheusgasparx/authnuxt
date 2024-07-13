<script setup lang="ts">

const id = ref("");
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const submit = async () => {
  try {
    const { data } = await $fetch('/api/users/register', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
      }
    })

    id.value = data.id

  } catch (error) {
    console.log(error);
  }
};

const update = async () => {
  try {
    name.value = `${name.value} - update`

    await $fetch(`/api/users/${id.value}`, {
      method: 'PUT',
      headers: {
        Authorizathion: 'xyz'
      },
      body: {
        name: name.value,
        email: email.value
      }
    })
  } catch (error) {
    console.log(error)
  }
}

const remove = async () => {
  try {
    await $fetch(`/api/users/${id.value}`, {
      method: 'DELETE',
      headers: {
        Authorizathion: 'xyz'
      },
    })

    id.value = ''
    name.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''

  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" v-model="name"/>
      <input type="email" v-model="email"/>
      <input type="password" v-model="password"/>
      <input type="password" v-model="confirmPassword"/>

      <button type="submit">Salvar</button>
    </form>

    <div>
      <button type="button" @click="update">Atualizar</button>
      <button type="button" @click="remove">Excluir</button>
    </div>
  </div>
</template>
