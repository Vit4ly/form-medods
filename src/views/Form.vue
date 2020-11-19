<template>
  <div class="form">
    <div class="container">
      <h1 class="form__title">Регистрация</h1>
      <form action="" class="form__inner" @submit.prevent="submitHandler">

        <div class="form__header">

          <div class="form__header-col">
            <label class="form__all-label" for="surname">Фамилия</label>
            <input
              class="form__all-input"
              id="surname"
              placeholder="Фамилия*"
              type="text"
              v-model.trim="surname"
              :class="{ isInvalid: $v.surname.$error}"

            >
            <small
              v-if="$v.surname.$error"
              :class="{errorText: $v.surname.$error}"
            >Это поле обязательно к заполнению</small>
          </div>

          <div class="form__header-col form__col-name">
            <label class="form__all-label" for="name">Имя</label>
            <input
              class="form__all-input"
              type="text"
              id="name"
              placeholder="Имя*"
              v-model.trim="name"
              :class="{ isInvalid: $v.name.$error}"

            >
            <small
              v-if="$v.name.$error"
              :class="{errorText: $v.name.$error}"
            >Это поле обязательно к заполнению</small>
          </div>

          <div class="form__header-col form__col-patronymic">
            <label class="form__all-label" for="patronymic">Отчество</label>

            <input
              class="form__all-input"
              type="text"
              id="patronymic"
              placeholder="Отчество">
          </div>

          <div class="form__header-date-phone">

            <div class="form__col-birth form__header-col">
              <label class="form__all-label" for="birth">Дата рождения*</label>
              <input
                class="form__all-input"
                type="date"
                id="birth"
                v-model="dateOfBirth"
                :class="{ isInvalid: $v.dateOfBirth.$error}"

              >
              <small
                v-if="$v.dateOfBirth.$error"
                :class="{errorText: $v.dateOfBirth.$error}"
              >Введите дату рождения</small>
            </div>

            <div class="form__col-phone form__header-col">

              <label class="form__all-label" for="phone">Телефон*</label>

              <input
                class="form__all-input"
                type="tel"
                id="phone"
                v-model.trim.number="phone"
                :class="{ isInvalid: $v.phone.$error}"
              >
              <small
                v-if="$v.phone.$error"
                :class="{errorText: $v.phone.$error}"
              >Введите телефон</small>
            </div>
          </div>

          <div class="form__header-col ">

            <span class="form__all-label">Пол</span>

            <div class="form__header-col-male">

              <label

                for="male">М
              </label>
              <input

                type="radio"
                id="male"
                name="gender"
                value="male"
                v-model="gender">

              <label for="female">Ж</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                v-model="gender">
            </div>
          </div>

          <div class="form__header-select-block">

            <div class="form__header-col">
              <label class="form__all-label" for="client">Группа клиентов*</label>
              <select
                class="form__header-select-client"
                name=""
                id="client"
                multiple
                v-model="status"
                :class="{isInvalid: $v.status.$error}"
              >
                <option
                  v-for="(client, ind) in clientStatus"
                  :key="ind"
                  :value="client"

                >
                  {{ client }}
                </option>
              </select>
              <small
                v-if="$v.status.$error"
                :class="{errorText: $v.status.$error}"
              >Выберите группу клиентов</small>
            </div>

            <div class="form__header-col ">
              <label class="form__all-label" for="doctor">Лечащий врач</label>
              <select
                class="form__header-select-doctor"
                name="" id="doctor"

              >
                <option value=""
                        selected
                        disabled
                        hidden
                >
                  Выберите врача
                </option>
                <option
                  v-for="(doc, ind) in doctor"
                  :key="ind"
                  value=""
                >
                  {{ doc }}
                </option>
              </select>
            </div>

          </div>

          <div class="form__header-col">
            <label class="form__all-label" for="sms">Не отправлять СМС</label>
            <input type="checkbox" id="sms">
          </div>
          <hr class="hr-line">
          <h3 class=" form__title">Адресс</h3>

          <div class="form__header-address">

            <div class="form__header-address-col-zip">

              <div class="form__header-col">
                <label class="form__all-label" for="zip-code">Индекс</label>
                <input class="form__all-input" id="zip-code" placeholder="Индекс" type="text">
              </div>

              <div class="form__header-col">
                <label class="form__all-label" for="country">Страна</label>
                <input class="form__all-input" id="country" placeholder="Страна" type="text">
              </div>

            </div>

            <div class="form__header-col">
              <label class="form__all-label" for="region">Область</label>
              <input class="form__all-input" id="region" placeholder="Область" type="text">
            </div>

            <div class="form__header-col">
              <label class="form__all-label" for="city">Город*</label>
              <input
                class="form__all-input"
                id="city"
                placeholder="Город"
                type="text"
                v-model="city"
                :class="{isInvalid: $v.city.$error}"
              >
              <small
                v-if="$v.city.$error"
                :class="{errorText: $v.city.$error}"
              >Выберите город</small>
            </div>

            <div class="form__header-address-col-street">
              <div class="form__header-col">
                <label class="form__all-label" for="street">Улица</label>
                <input class="form__all-input" id="street" placeholder="Улица" type="text">
              </div>

              <div class="form__header-col">
                <label class="form__all-label" for="house">Дом</label>
                <input class="form__all-input" id="house" placeholder="Дом" type="text">
              </div>

            </div>

          </div>
          <hr class="hr-line">

          <h3 class="form__title">
            Паспортные данные
          </h3>

          <div class="form__header-passport">

            <div class="form__header-col">
              <label class="form__all-label" for="type-doc">Тип документа*</label>
              <select
                class="form__header-select-client"
                name="" id="type-doc"
                v-model="typeDoc"
                :class="{isInvalid: ($v.typeDoc.$error)}"
              >
                <option
                  v-for="(doc, ind) in typeDocument"
                  :key="ind"
                  :value="doc"
                >
                  {{ doc }}
                </option>
              </select>
              <small
                v-if="$v.typeDoc.$error"
                :class="{errorText: $v.typeDoc.$error}"
              >Выберите тип документа</small>
            </div>

            <div class="form__header-passport-col">
              <div class="form__header-col">
                <label class="form__all-label" for="series">Серия</label>
                <input
                  class="form__all-input"
                  type="text"
                  id="series"
                  placeholder="Серия"
                >
              </div>

              <div class="form__header-col">
                <label class="form__all-label" for="number">Номер</label>
                <input
                  class="form__all-input"
                  type="text"
                  id="number"
                  placeholder="Номер документа"
                >
              </div>

            </div>

            <div class="form__header-passport-col-1">
              <div class="form__header-col">
                <label
                  class="form__all-label"
                  for="issued"
                >Кем выдан
                </label>
                <input
                  class="form__all-input"
                  type="text"
                  id="issued"
                  placeholder="Кем выдан"
                >
              </div>

              <div class="form__header-col">
                <label
                  class="form__all-label"
                  for="date-issued">Дата выдачи*
                </label>

                <input
                  class="form__all-input"
                  type="date"
                  id="date-issued"
                  v-model="datIssued"
                  :class="{ isInvalid: $v.datIssued.$error}"
                >
                <small
                  v-if="$v.datIssued.$error"
                  :class="{errorText: $v.datIssued.$error}"
                >Выберите дату выдачи</small>
              </div>

            </div>
          </div>

          <div class=" form__next-step">
            <button
              class="form__btn"
              type="submit">
              Завершить регистрацию
            </button>
          </div>

        </div>

      </form>
    </div>
  </div>
</template>

<script>
import { required, minValue, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'FormAll',
  data() {
    return {
      surname: '',
      name: '',
      patronymic: '',
      dateOfBirth: '',
      phone: '7',
      gender: '',
      doctor: ['Иванов', 'Захаров', 'Чернышева'],
      clientStatus: ['VIP', 'Проблемные', 'ОМС'],
      status: [],
      city: '',
      typeDocument: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'],
      typeDoc: '',
      datIssued: '',
    };
  },

  validations: {
    surname: { required },
    name: { required },
    dateOfBirth: { minValue, required },
    phone: { minLength: minLength(11), required },
    status: { required },
    city: { required },
    typeDoc: { required },
    datIssued: { minValue, required },
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$router.push('/message');
    },
  },
};
</script>

<style scoped lang="scss">

</style>
