<template>
  <div class="product-box">
    <slot></slot>
    <goods-item v-for="item in filterGoods" v-bind="item" :key="item.id" @add-product="addProduct">
    </goods-item>
  </div>
</template>

<style lang="scss">
.product-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 65px 0;
  @media (max-width: 1180px) {
    justify-content: space-around;
  }
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';
import GoodsItem from './goods-item.vue';
import GetData from './get-data.vue';

export default {
  mixins: [GetData],
  props: {
    url: {
      type: String,
      default: '/api/products',
    },
    filter: {
      type: String,
      default: '',
    },
    cart: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.getProducts(this.url);
  },
  components: {
    'goods-item': GoodsItem,
  },
  computed: {
    filterGoods() {
      if (this.filter.trim() === '') return this.goods;
      const reg = new RegExp(this.filter, 'i');
      return this.goods.filter((item) => reg.test(item.product_name));
    },
    ...mapGetters({
      goods: 'product/products',
    }),
  },
  methods: {
    addProduct(product) {
      this.$emit('add-product', product);
    },
    ...mapActions({
      getProducts: 'product/getProducts',
    }),
  },
};
</script>
