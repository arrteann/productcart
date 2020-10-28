<template>
    <div class="container">
        <h4>Product List</h4>
        <app-list></app-list>
    </div>
</template>

<script>
import List from '../components/mains/List';
export default {
  props: {
  },
    components : {
        'app-list':List,
    }
}
</script>

<style lang="scss" scoped>
    .container{
        text-align: left;
        h4{
            display: inline-block;
            padding-bottom: 4px;
            border-bottom: 1px solid #323232;
        }
    }
</style>