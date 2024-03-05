<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink exact to="/"> Cadastros </RouterLink>
        </li>
        <li>
          <RouterLink to="carts"> Carrinho </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
header {
  width: 100%;
  nav {
    padding: 24px;
    background-color: $accent;

    ul {
      display: flex;
      list-style: none;
      gap: 32px;
      li {
        letter-spacing: 3px;
        a {
          font-size: 1.2rem;
          font-weight: 500;
          color: #fff;
          text-decoration: none;
          @media only screen and (max-width: 768px) {
            font-size: 14px;
          }
          &:hover,
          &.router-link-exact-active {
            border-bottom: 2px solid #fff;
          }
        }
      }
    }
  }
}
</style>
