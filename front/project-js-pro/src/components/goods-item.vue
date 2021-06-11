<template>
  <div class="product-card">
    <a class="product-card__link" :data-id="id_product" :href="url">
      <img class="product-card__img" :src="img" :alt="product_name" height="420">
      <span class="product-card__name">{{ product_name }}</span>
      <p class="product-card__desc font_general">{{ description }}</p>
      <span class="product-card__price">{{ price }}</span>
    </a>
    <button class="product__add-btn"
            @click="addProduct">Add to Cart
    </button>
  </div>
</template>

<style lang="scss">
.product-card{
  width: 360px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 7px 30px;
  padding: 0 0 20px 0;
  background: #F8F8F8;
  text-decoration: none;
  &:hover{
    .product-card__link:after{
      visibility: visible;
    }
    .product__add-btn{
      visibility: visible;
    }
  }
}
.product-card__link{
  text-decoration: none;
  position: relative;
  &:after{
    content: '';
    width: 100%;
    height: 420px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(33, 20, 20, 0.7);
    visibility: hidden;
  }
}
.product-card__img{
  width: 360px;
  height: 420px;
  display: block;
  margin: 0 0 24px 0;
}
.product-card__name{
  display: block;
  margin: 0 0 12px 0;
  padding: 0 18px;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  color: #000000
}
.product-card__desc{
  margin: 0 0 18px 0;
  padding: 0 16px;
  font-weight: 300;
  color: #5d5d5d;
}
.product-card__price{
  padding: 0 18px;
  font-size: 16px;
  line-height: 19px;
  color: #f16d7f;
}
.product__add-btn{
  display:flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  visibility: hidden;
  position: absolute;
  margin: 187px auto;
  padding: 10px 13px 8px;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  border: 1px solid #FFFFFF;
  background: transparent;
  outline: none;
  cursor: pointer;
  z-index: 1;
  &:before{
    content: '';
    display: block;
    width: 26px;
    height: 24px;
    background: url("../img/basket_ico.svg") center / contain no-repeat;
    margin-right: 11px;
  }
  &:hover{
    background: #f16d7f;
    border: 1px solid #f16d7f;
  }
  &:active{
    background: transparent;
    border: 1px solid #fff;

  }
}
.product__add-btn_visible{
  border-color: #ff6a6a;
  color: #ef5b70;
  margin-top: 48px;
  visibility: visible;
  position: relative;
  min-width: 210px;
  &:before{
    background-image: url("../img/basket_ico_red.svg");
  }
  &:hover{
    color: #fff;
    &:before{
      background-image: url("../img/basket_ico.svg");
    }
  }
  &:active{
    color: #ef5b70;
    border: 1px solid #f16d7f;
    &:before{
      background-image: url("../img/basket_ico_red.svg");
    }
  }
}
.product-card__img-box:hover .product__add-btn{
  display: flex;
}
</style>

<script>
import Item from './item.vue';

export default {
  mixins: [Item],
  methods: {
    addProduct() {
      const product = {
        id_product: this.id_product,
        product_name: this.product_name,
        price: this.price,
        img: this.img,
        description: this.description,
      };
      this.$emit('add-product', product);
    },
  },
  computed: {
    url() {
      return `product/${this.id_product}`;
    },
  },

}; </script>
