<template>
    <div class="goods-info">
        <div class="goods-image">
            <img :src="goodsImage" width="100%"/>
        </div>
        <div class="goods-name">{{goodsName}}</div>
        <div>￥{{goodsPrice | moneyFilter}}</div>
    </div>
</template>

<script>
    import {toMoney} from '@/filter/moneyFilter.js'
    export default {
        props:['goodsName','goodsPrice','goodsImage'],
        
        filters:{
            moneyFilter(money){
                return toMoney(money);
            }
        }
    }
</script>

<style scoped>
    .goods-name{
        padding: 0 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>