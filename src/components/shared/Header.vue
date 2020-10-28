<template>
  <header>
    <h1>CART LIST</h1>
    <nav class="nav">
      <ul>
        <router-link to="/" tag="li" active-class="active" exact
          >HOME</router-link
        >
        <router-link to="/cart" tag="li" active-class="active" exact
          >LIST</router-link
        >
      </ul>
    </nav>
    <div class="line"></div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  text-align: left;
  h1 {
    letter-spacing: 5px;
  }

  nav {
    text-align: center;
    display: flex;
    justify-content: flex-start;
    ul {
      padding: 0;
      list-style: none;
      display: flex;
      li {
        user-select: none;
        cursor: pointer;
        &:not(:first-child) {
          margin-left: 20px;
        }
        padding: 10px 16px;
        width: 4rem;
        border-radius: 1px;
        color: #323232;
        transition: all 0.6s ease;
      }
      li.active {
        transition: all 0.6s ease;
        border-bottom: 1px solid #323232;
        animation: active 0.3s ease;
      }
      @keyframes active {
        from {
          transform: translateX(20px);
        }
        to {
          transform: translate(0, 0);
        }
      }
    }
  }
}
</style>