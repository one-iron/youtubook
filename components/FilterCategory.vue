<template>
  <div class="filterCategory">
    <Flicking :options="{ moveType: 'freeScroll', bound: true }">
      <div
        :class="[item.isClicked ? 'clicked' : '', 'filter']"
        v-for="(item, index) in categories"
        :key="index"
        @click="clickHandle(index, item.name)"
      >
        <div>{{item.emoji}}{{ item.name }}</div>
      </div>
    </Flicking>
  </div>
</template>



<script>
export default {
  props: ['search'],
  data() {
    return {
      categories: [
        { name: "전체", emoji: "", isClicked: true },
        { name: "성공", emoji: "🎊 ", isClicked: false },
        { name: "동기부여", emoji: "💪 ", isClicked: false },
        { name: "책 리뷰", emoji: "📚 ", isClicked: false },
        { name: "주식", emoji: "📈 ", isClicked: false },
        { name: "부동산", emoji: "🏡 ", isClicked: false },
      ],
    };
  },
  methods: {
    // 클릭하면, 스타일 변경할 수 있게 isClicked 상태 변경
    clickHandle(index, category) {
      this.categories.map((item) => {
        item.isClicked = false;
      });
      this.categories[index].isClicked = true;
      this.search(category);
    },
  },
};
</script>

<style scoped>
.filterCategory {
  font-weight: 800;
  width: 323px;
  height: 50px;
  font-family: "Nanum Gothic", sans-serif;
}

.filter {
  display: inline-block;
  padding: 10px 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: #f6f8fb;
  cursor: pointer;
}

.clicked {
  color: white;
  background-color: #ff0600;
}
</style>