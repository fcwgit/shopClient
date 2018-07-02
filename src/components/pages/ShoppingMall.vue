<template>
    <div>
        <div class="search-bar">
            <!-- vant 24格布局 -->
            <van-row>
                <van-col span="3">
                    <img :src="locationIcon" width="80%" class="location-icon"/>
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input"/>
                </van-col>
                <van-col span="5">
                    <van-button size="mini" class="search-button">查询</van-button>
                </van-col>
            </van-row>
        </div>
        <!-- Swipe area -->
        <div class="swipe-area">
            <van-swipe :autoplay="1000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <!-- <img :src="banner.imageUrl" width="100%"/> -->
                    <img v-lazy="banner.imageUrl" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Shopping Mall',
                locationIcon:require('../../assets/images/location.png'),
                bannerPicArray:[
                    {imageUrl:require('../../assets/images/simleVueDemoPic001.jpg')},
                    {imageUrl:require('../../assets/images/simleVueDemoPic002.jpg')},
                    {imageUrl:require('../../assets/images/simleVueDemoPic003.jpg')}
                ]
            }
        },
    }
</script>

<style scoped>
    .search-bar{
        height: 2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }
    .search-input{
        width: 100%;
        height: 1.3rem;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 1px solid #fff !important;
        background-color: #e5017d;
        color: #fff;
    }
    .location-icon{
        padding-top: .2rem;
        padding-left: .3rem;
    }
    .search-button{
        margin-left: .5rem;
    }
    .swipe-area{
        clear: both;
        max-height: 15rem;
        overflow: hidden;
    }
</style>