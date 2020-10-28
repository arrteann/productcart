<template>
  <keep-alive>
    <div class="container">
      <ul>
        <transition-group
          enter-active-class="animate__animated animate__tada"
          leave-active-class="animate__animated animate__bounceOutRight"
          mode="out-in"
        >
          <li
            v-for="(product, index) in this.$store.state.products"
            :key="index"
          >
            <span> - {{ product }}</span>
            <a @click="removeProd(index)">REMOVE</a>
          </li>
        </transition-group>
      </ul>
    </div>
  </keep-alive>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["removeProd"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    margin: 5px 0px;
    font-size: 1rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      display: inline-block;
      margin-left: 100px;
      padding: 5px 10px;
      border: 1px solid #323232;
      color: #323232;
      border-radius: 3px;
      transition: all 0.6s ease;
      user-select: none;
      cursor: pointer;
      &:hover {
        background-color: #323232;
        color: white;
      }
    }
  }
}
</style>