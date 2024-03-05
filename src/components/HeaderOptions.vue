<template>
  <div class="h__options_container">
    <router-link class="link link--back" :to="routerBack">{{ textBack }}</router-link>
    <div class="h__main">
      <router-link class="link link--new" :to="routerAdd">{{ textAdd }}</router-link>
      <input
        type="text"
        v-model="search"
        class="input_search"
        @input="emitSearch"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  routerBack: String,
  routerAdd: String,
  textBack: String,
  textAdd: String,
  placeholder: String
})
const search = ref('')

const emit = defineEmits(['emitSearch'])

const emitSearch = () => {
  emit('emitSearch', search.value)
}
</script>

<style lang="scss">
.h__options_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 16px;
  }
  .link {
    color: $background;
    padding: 8px 32px;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 8px;
    transition: transform 0.5s;
    @media only screen and (max-width: 768px) {
      line-height: 2;
      font-size: 14px;
      padding: 8px 16px;
      text-align: center;
    }
  }
  .link--back {
    background: $grey-1;
    &:hover {
      opacity: 0.9;
      box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.1),
        0 8px 16px rgba(0, 0, 0, 0.1);
    }
  }
  .h__main {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 32px;
    width: 60%;
    @media only screen and (min-width: 576px) and (max-width: 768px) {
      justify-content: space-between;
      width: 100%;
    }
    @media only screen and (max-width: 575px) {
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }
    .link--new {
      background: $secondary;
      &:hover {
        opacity: 0.9;
        box-shadow:
          0 4px 8px rgba(0, 0, 0, 0.1),
          0 8px 16px rgba(0, 0, 0, 0.1);
      }
    }

    .input_search {
      box-sizing: border-box;
      width: 50%;
      padding: 8px;
      border: 2px solid $grey-2;
      border-radius: 8px;
      color: $dark;
      @media only screen and (max-width: 768px) {
      }
      @media only screen and (max-width: 575px) {
        width: 100%;
      }
      &:focus-within {
        outline: none !important;
        border: 2px solid $grey-1;
      }
    }
  }
}
</style>
