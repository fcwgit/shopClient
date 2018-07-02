<template>
    <div>
        <!-- vant 24格布局 -->
        <van-row class="test-row">
            <van-col span="8">
                span:8
            </van-col>
            <van-col span="8">
                span:8
            </van-col>
            <van-col span="8">
                span:8
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Shopping Mall'
            }
        },
    }
</script>

<style scoped>
    .test-row{
        text-align: center;
    }
</style>