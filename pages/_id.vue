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
      <div class="adfitArea"></div>
      <div class="coupangAd" v-if="page.coupang">
        <iframe
          :src="page.coupangUrl"
          width="324"
          height="240"
          frameborder="0"
          scrolling="no"
          referrerpolicy="unsafe-url"
        ></iframe>
        <p class="adMessage">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
          제공받습니다.
        </p>
      </div>
      <div class="btnGroup">
        <a-button class="backBtn" @click="toBack()"
          ><a-icon type="arrow-left"
        /></a-button>
        <a-button class="upBtn" @click="toTop()"
          ><a-icon type="arrow-up"
        /></a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    console.log("enter1");
    const page = await $content(`article/${params.id}`)
      .fetch()
      .catch((err) => {
        console.log("error2", error);
        error({ statusCode: 404, message: "Page not found" });
      });
    console.log("enter3");
    return {
      page,
    };
  },
  data() {
    return {
      deviceHeight: "",
      page: {},
    };
  },
  mounted() {
    console.log("enter4");
    this.deviceHeight = window.innerHeight;

    let ins = document.createElement("ins");
    let scr = document.createElement("script");
    ins.className = "kakao_ad_area";
    ins.style = "display:none; width:100%;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute("data-ad-width", "320");
    ins.setAttribute("data-ad-height", "50");
    ins.setAttribute("data-ad-unit", "DAN-0x5Ns9JujJVDLFJ7");
    document.querySelector(".adfitArea").appendChild(ins);
    document.querySelector(".adfitArea").appendChild(scr);
  },
  methods: {
    toTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    toBack() {
      window.history.go(-1);
      this.toTop();
    },
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

.adfitArea {
  margin-top: 40px;
}

.coupangAd {
  text-align: center;
}

.adMessage {
  font-size: 10px;
}

.btnGroup {
  display: flex;
  margin-top: 50px;
}

.backBtn {
  height: 60px;
  width: 80%;
  /* border: 1px solid red; */
}

.upBtn {
  width: 20%;
  height: 60px;
}
</style>