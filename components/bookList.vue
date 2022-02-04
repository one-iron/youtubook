<template>
  <div class="bookList">
    <div class="book" v-for="(item, index) in books" :key="index">
      <nuxt-link
        :to="`/${item.id}`"
        style="text-decoration: none; color: inherit"
      >
        <img :src="item.thumbnail" class="thumbnail" />
        <div class="bookInfo">
          <img :src="item.channelImg" />
          <div class="titleInfo">
            <div>
              <b>{{ item.channelName }}</b>
            </div>
            <div>{{ item.videoTitle }}</div>
          </div>
        </div>
        <div class="tagList">
          <a-tag color="pink">{{ item.videoTime }}</a-tag>
          <a-tag color="blue">{{ item.bookTime }}</a-tag>
          <a-tag color="cyan">{{ item.tags[0] }}</a-tag>
          <a-tag color="purple">{{ item.tags[1] }}</a-tag>
        </div>
        <div class="summary">
          <div>
            <b>🔖 {{ item.summary }}</b>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  props: ["books"],
};
</script>

<style scoped>
.bookList {
  font-family: "Nanum Gothic", sans-serif;
}

.book {
  margin-bottom: 25px;
  border-radius: 15px;
  box-shadow: 5px 3px 25px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

.book img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.thumbnail {
  width: 324px;
  height: 180px;
  background-size: contain;
}

.bookInfo {
  margin-top: 10px;
  width: 324px;
  padding: 5px 8px;
  display: flex;
  align-items: center;
}

.bookInfo img {
  border-radius: 15px;
  width: 45px;
  height: 45px;
}

.titleInfo {
  margin-left: 8px;
}

.tagList {
  margin: 5px 8px;
}

.summary {
  padding: 5px 8px;
  /* border: 1px solid red; */
}

.summary div {
  padding: 8px;
  background-color: #f6f8fb;
  border-radius: 15px;
  margin-bottom: 10px;
}
</style>