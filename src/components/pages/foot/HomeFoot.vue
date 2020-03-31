<template>
          <div class="foot">
        <p class="foot1"><span><a href="#">蜀ICP备 19004343</a></span>
        <span>|</span>
        <span> 版权所有 © 2017 - 2020 </span>
        <span>|</span>
        <span>以商业目的使用本网站内容需获许可，非商业目的使用授权遵循CC BY-NC 4.0</span>
        </p>
        <p class="foot2">
          <span>All content is made available under the CC BY-NC 4.0 for non-commercial use. Commercial use of this content is prohibited without explicit permission.</span>
        </p>
      </div>
</template>

<script>
export default {
    name:'HomeFoot'
}
</script>

<style scoped>
/* 底部 */
.foot{
  margin-top: 20px;
  /* margin-bottom: 20px; */
  width: 100%;
  height: 90px;
  background:#f8f8f8;
}

.foot1,.foot2{
  text-align: center;
}
.foot1 span{
  padding: 0 5px;
}
.foot1 a{
  text-decoration: none;
  color: #777777;
}

</style>