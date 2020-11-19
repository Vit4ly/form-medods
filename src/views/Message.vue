<template>
  <div class="done">
    <div class="container">
      <div class="done__inner">
        <h1 class="done__message">
          Новый клиент успешно создан!
        </h1>
      </div>
      <router-link
        class="form__btn done__btn"
        to="/">
        Регистрация нового клиента
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',

};
</script>

<style scoped lang="scss">

.done {
  margin-top: 100px;

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 92, 248, .6);
    border-radius: 5px;
    width: 100%;
  }

  &__message {
    font-weight: 700;
    font-size: 19px;
    line-height: 2;
    padding: 10%;
    color: rgb(159, 159, 159);
  }

  &__btn {
    text-align: center;
    display: inline-block;
    color: white;
    margin-top: 50px;
  }
}
</style>
