<template>
  <div class="indexMain">
    <div class="header">
      <header-title :flickingShow="false" :backButton="true" />
    </div>
    <div class="markdown-body" :style="{ minHeight: `${deviceHeight}px` }">
      <iframe
        width="324"
        height="180"
        :src="`https://www.youtube.com/embed/${page.youtubeUrl}`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="youtubeWarn">
        "동영상을 재생할 수 없음"이 뜰 경우, 퍼가기를 허용하지 않은 영상입니다.
      </div>
      <h3 class="pageTitle">
        <b>{{ page.title }}</b>
      </h3>
      <article>
        <nuxt-content :document="page" />
      </article>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "../components/HeaderTitle.vue";
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content(`article/${params.id}`)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });
    return {
      page,
    };
  },
  data() {
    return {
      deviceHeight: "",
    };
  },
  mounted() {
    this.deviceHeight = window.innerHeight;
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Myeongjo:wght@700;800&display=swap");
.indexMain {
  width: 414px;
  margin: 0 auto;

  /* 박스 그림자 */
  box-shadow: 5px 3px 25px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  font-family: "Nanum Myeongjo", serif;
}

.header {
  width: 414px;
  position: fixed;
  top: 0;
  padding: 20px 30px 0px 45px;
  background-color: #ffffff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 10;
  /* border: 1px solid red; */
}

.bookBody {
  padding: 180px 45px;
}

.markdown-body {
  font-family: "Gowun Batang", serif;
  /* min-height: 700px; */
  padding: 100px 45px;
}

.youtubeWarn {
  font-size: 10px;
  margin-bottom: 30px;
  color: gray;
  /* border: 1px solid red; */
}

.pageTitle {
  margin-bottom: 30px;
}
</style>