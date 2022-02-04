<template>
  <div>
    <h1 class="headerTitle">
      <nuxt-link to="/" style="text-decoration: none; color: inherit"
        >유튜북 📖</nuxt-link
      >
    </h1>
    <Flicking
      :options="{ circular: true, horizontal: false }"
      :plugins="plugins"
      v-if="flickingShow"
      class="subTitle"
    >
      <div class="weather-panel">긴 유튜브 영상, <b>가볍게</b> 읽으세요. ⏱</div>
      <div class="weather-panel">10분 영상 👉 <b>1분 독서</b> 👉 🐶🍯</div>
      <div class="weather-panel"><b>유튜북</b>에서 소중한 시간 아끼세요. 📕 </div>
      <div class="weather-panel"><b>핵심 정보</b>만 글로 정리했어요. 📝</div>
    </Flicking>
  </div>
</template>

<script>
import { AutoPlay } from "@egjs/flicking-plugins";

export default {
  props: ["flickingShow", "backButton"],
  data() {
    return {
      plugins: [new AutoPlay({ duration: 3000, direction: "NEXT" })],
    };
  },
};
</script>

<style scoped>
.headerTitle {
  font-size: 32px;
  color: rgb(70, 70, 70);
  margin-bottom: 25px;
  display: inline-block;
  cursor: pointer;
}

.subTitle {
  margin-left: 8px;
  font-size: 10px;
  height: 16px;
  font-family: "Nanum Gothic", sans-serif;
}

</style>