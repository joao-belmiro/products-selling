<template>
  <form @submit.prevent="onSubmit">
    <slot></slot>
    <div class="submit-container">
      <button type="submit" class="btn btn-submit">{{ textSubmit }}</button>
      <router-link class="btn btn-cancel" :to="routeBack"> {{ textCancel }} </router-link>
    </div>
  </form>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  textSubmit: String,
  textCancel: String,
  routeBack: String
})
const emit = defineEmits(['onSubmit'])
const onSubmit = () => {
  emit('onSubmit')
}
</script>

<style lang="scss">
.submit-container {
  display: flex;
  margin-top: 16px;
  gap: 16px;
  .btn {
    height: 40px;
    border: none;
    width: 200px;
    font-weight: 550;
    color: $background;
    font-size: 14px;
    letter-spacing: 2px;
    border-radius: 4px;
  }
  .btn-cancel {
    line-height: 3;
    text-align: center;
    text-decoration: none;
    background-color: $grey-1;
    @media screen and (max-width: 576px) {
      width: 50%;
    }
    &:hover {
      box-shadow: 0 0 5px $grey-1;
    }
  }
  .btn-submit {
    background-color: $secondary;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 5px $secondary;
    }

    @media screen and (max-width: 576px) {
      width: 50%;
    }
  }
}
</style>
