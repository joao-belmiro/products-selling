<script setup>
</script>

<template>
  <div class="flex h__full_body">
    <router-link to="/clients"> Clientes</router-link>
    <router-link to="/products"> Produtos</router-link>
  </div>
</template>
<style lang="scss" scoped>
a {
  width: 20%;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  border-radius: 8px;
  letter-spacing: 2px;
  text-decoration: none;
  padding: 16px 32px;
  background: $primary;
  color: $background;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 8px 16px rgba(0, 0, 0, 0.1);
  }
  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 50%;
  }
  @media only screen and (max-width: 575px) {
    width: 70%;
  }
}
</style>
