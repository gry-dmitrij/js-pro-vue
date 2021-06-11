<template>
  <main>
    <section class="banner">
      <div class="container banner__box">
        <div class="banner__txt-decoration">
          <span class="banner-txt banner-txt_lvl1">the brand</span>
          <span class="banner-txt banner-txt_lvl2">
            of luxerious <span class="banner-txt_color">fashion</span>
          </span>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="card-box">
        <div class="card card_for-women">
          <span class="card__photo-desc">30% off</span>
          <span class="card__photo-desc card__photo-desc_color">for women</span>
        </div>

        <div class="card card_for-men">
          <span class="card__photo-desc">30% off</span>
          <span class="card__photo-desc card__photo-desc_color">for women</span>
        </div>

        <div class="card card_for-kids">
          <span class="card__photo-desc">30% off</span>
          <span class="card__photo-desc card__photo-desc_color">for women</span>
        </div>

        <div class="card card_wide">
          <span class="card__photo-desc">luxirous & trendy</span>
          <span class="card__photo-desc card__photo-desc_color">accesories</span>
        </div>
      </div>
      <goods>
        <span class="product-caption">Fetured Items</span>
        <p class="product-desc">Shop for items based on what we featured in this week</p>
      </goods>

    </section>
  </main>
</template>

<script>
import Goods from '../components/goods.vue';

export default {
  components: {
    goods: Goods,
  },
};
</script>

<style lang="scss" scoped>
.card{
  background: center / cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32%;
  padding: 9.5% 0;
  margin-bottom: 30px;
  @media (max-width: 480px) {
    width: 100%;
    padding: 29.5% 0;
  }
}
.card_wide{
  padding: 8% 0;
  width: 100%;
  background-image: linear-gradient(rgba(33, 22, 22, 0.7), rgba(33, 22, 22, 0.7)),
  url("../img/accesories.png");
}
.card_for-women{
  background-image: linear-gradient(rgba(33, 22, 22, 0.7), rgba(33, 22, 22, 0.7)),
  url("../img/for_women.png");
}
.card_for-men{
  background-image: linear-gradient(rgba(33, 22, 22, 0.7), rgba(33, 22, 22, 0.7)),
  url("../img/for_men.png");
}
.card_for-kids{
  background-image: linear-gradient(rgba(33, 22, 22, 0.7), rgba(33, 22, 22, 0.7)),
  url("../img/for_kids.png");
}
.card:last-child{
  margin-bottom: 0;
}
.card_fill{
  flex-basis: 100%;
}
.card:last-child{
  margin-right: 0;
}
.card-box{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0 0 30px 0;
  @media (max-width: 1180px) {
    padding: 0 16px;
  }
  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
}
.card__photo-desc{
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
.card__photo-desc_color{
  font-size: 24px;
  font-weight: 700;
  color: #f16d7f;
}
.container{
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 1180px) {
    padding: 0;
  }
}
.banner{
  background: #f1e4e6;
  margin: 0 0 65px 0;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
}
.banner__box{
  display: flex;
  min-height: 365px;
  justify-content: flex-end;
  position: relative;
  background-image: url(../img/brand_photo.png);
  background-repeat: no-repeat;
  background-position: calc(-65% + 75px) 0;
  background-size: auto 100%;
  &:after{
    content: '';
    display: block;
    padding: 33.5% 0;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
  @media (max-width: 600px) {
    background-image: none;
    justify-content: center;
    align-items: center;
    position: relative;
  }
}
.banner__box_mini{
  min-height: 0;
  padding: 60px 20px;
  justify-content: space-between;
  background-image: none;
  &:after{
    display: none;
  }
  @media (max-width: 600px) {
    flex-flow: column;
    padding: 24px 20px 46px;
  }
}
.banner__box_no-breadcrumb{
  @media (max-width: 600px) {
    padding-bottom: 24px;
  }
}
.banner-txt{
  display: block;
  color: #222;
  text-transform: uppercase;
}
.banner-txt_lvl1{
  font-weight: 900;
  font-size: 48px;
  line-height: 58px;
}
.banner-txt_lvl2{
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
}
.banner-txt_color{
  color: #f16d7f;
}

@media (max-width: 768px) {
  .banner-txt_lvl1{
    font-size: 44px;
    line-height: 53px;
  }
  .banner-txt_lvl2{
    font-size: 24px;
    line-height: 29px;
  }
}
.banner__txt-decoration{
  padding-left: 16px;
  border-left: 12px solid #f16d7f;
  position: absolute;
  bottom: 50%;
  box-sizing: border-box;
  min-width: 403px;
  width: 40%;
}
@media (max-width: 768px) {
  .banner__txt-decoration{
    width: auto;
    right: 34px;
    min-width: 300px;
    position: relative;
  }
}
@media (max-width: 600px) {
  .banner__txt-decoration{
    position: relative;
    right: 0;
  }
}
.product-caption{
  width: 100%;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  margin-bottom: 6px;
}
.product-desc{
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  margin-bottom: 48px;
}
</style>
