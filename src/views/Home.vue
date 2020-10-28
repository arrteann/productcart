<template>
    <div class="container">
        <h4>ADD PRODUCT</h4>
        <app-form></app-form>
    </div>
</template>

<script>
import Form from '../components/mains/Form';
export default {
    components :{
        'app-form' : Form,
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