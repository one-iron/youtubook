<template>
  <div class="indexMain">
    <div class="header">
      <header-title :flickingShow="true"/>
      <filter-category :search="search" />
    </div>
    <div class="mainBody">
      <book-list :books="books" />
    </div>
  </div>
</template>

<script>
import BookList from "../components/bookList.vue";
import FilterCategory from "../components/FilterCategory.vue";
import HeaderTitle from "../components/HeaderTitle.vue";
export default {
  components: { HeaderTitle, FilterCategory, BookList },
  name: "IndexPage",
  mounted() {
    this.searchAll();
  },
  data() {
    return {
      deviceHeight: 0,
      books: [],
    };
  },
  methods: {
    async searchAll() {
      const books = await this.$content("article")
        .without(["body"])
        .sortBy("date", "desc")
        .fetch();
      this.books = books;
    },

    async search(category) {
      if (category !== "전체") {
        const books = await this.$content("article")
          .where({ tags: { $contains: [`${category}`] } })
          .sortBy("date", "desc")
          .fetch();
        this.books = books;
      } else {
        this.searchAll();
      }
    },
  },
};
</script>

<style scoped>
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
  position: fixed;
  top: 0;
  padding: 20px 30px 0px 45px;
  background-color: #ffffff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  /* border: 1px solid red; */
}

.mainBody {
  padding: 180px 45px;
}
</style>