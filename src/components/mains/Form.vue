<template>
  <div class="container">
    <form @submit.prevent="addProduct">
      <input
        type="text"
        placeholder="Product Name..."
        v-model="product"
        ref="product"
        required
      />
      <br />
      <input type="button" @click.prevent="addProduct" value="Add Product" />
    </form>
    <!-- SNACKBAR -->
    <div class="snackbar-container">
      <transition
        enter-active-class="animate__animated animate__fadeInUp"
        leave-active-class="animate__animated animate__fadeOutDown"
      >
        <div
          class="snackbar"
          :class="{
            success: this.$store.state.saved,
            error: !this.$store.state.saved,
          }"
          v-if="snackbar"
        >
          {{ this.$store.state.msg }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: "",
      snackbar: false,
    };
  },
  methods: {
    //   CHANGE STORE VALUE
    changeStoreValue(msg, saved, snack) {
      this.$store.state.msg = msg;
      this.$store.state.saved = saved;
      this.product = "";
      this.snackbar = snack;
    },

    timeOut(func) {
      setTimeout(() => {
        this.changeStoreValue(func);
      }, 1900);
    },

    addProduct() {
      if (this.product == "") {
        this.changeStoreValue("CHECK INPUT PLEASE", false, true);
        this.timeOut(("", false, false));
        return;
      }
      this.$store.commit("pushProd", this.product);

      if (this.$store.state.saved) {
        this.changeStoreValue("PRODUCT ADDED", true, true);
        this.timeOut(("", false, false));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  input[type="text"] {
    all: unset;
    padding: 5px 10px;
    border: 1px solid #323232;
    border-radius: 2px;
    margin-bottom: 15px;
  }
  input[type="button"] {
    all: unset;
    text-transform: uppercase;
    color: white;
    background: #323232;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 3px;
    font-size: 0.8rem;
    transition: all 0.5s ease;
    &:hover {
      transform: translateY(-4px);
    }
  }
}
.snackbar-container {
  position: absolute;
  overflow: hidden;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  .snackbar {
    width: 15rem;
    text-align: center;
    padding: 12px 20px;
    border-radius: 4px;
    box-shadow: 0px 3px 6px rgba($color: #000000, $alpha: 0.2);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .success {
    background-color: #08cc60;
  }
  .error {
    background-color: #f83b22;
  }
}
</style>