<template>
  <div>
    <el-row style="height: 740px; margin-top: 80px">
      <el-tooltip
        effect="dark"
        placement="right"
        v-for="item in books.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )"
        :key="item.roomId"
      >
        <template #content>
          <p style="font-size: 14px;margin-bottom: 6px;">
            房间号：{{ item.roomId }}
          </p>
          <p style="font-size: 13px;margin-bottom: 6px">
            <span>房间规格：{{ item.room_type }}</span> /
            <span>房间价格：{{ item.price }}</span>
          </p>
          <p style="width: 300px" class="abstract">
            房间大小：{{ item.size }}平方
          </p>
        </template>
        <el-card class="box-card">
          <div class="cover" @click="editBook(item)">
            <img :src="icon" alt="封面" />
          </div>
          <div>
            <div class="title">{{ item.roomId }}</div>
            <div class="author">{{ item.room_type }}</div>
          </div>
        </el-card>
      </el-tooltip>
      <edit-form @onSubmit="loadBooks()" ref="edit"></edit-form>
    </el-row>
    <el-row class="vvv">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="books.length"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import EditForm from "@/components/room/EditForm";

export default {
  name: "Room",
  components: { EditForm },
  data() {
    return {
      icon: require("../../assets/yq.jpg"),
      books: [
        {
          cover: require("../../assets/yq.jpg"),
          roomId: "加载中。。。。。。",
          room_type: "加载中。。。。。。",
          price: "2019-05-05",
          state: "重庆出版社",
          size:
            "文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……",
        },
      ],
      currentPage: 1,
      pageSize: 12,
    };
  },
  mounted: function() {
    this.loadBooks();
  },
  methods: {
    loadBooks() {
      const _this = this;
      this.$axios.get("/getRooms").then((resp) => {
        if (resp && resp.status === 200) {
          _this.books = resp.data;
        }
      });
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage);
    },
    searchResult() {
      const _this = this;
      this.$axios.get("/getRooms").then((resp) => {
        if (resp && resp.status === 200) {
          console.log(resp);
          _this.books = resp.data;
        }
      });
    },
    editBook(item) {
      this.$refs.edit.dialogFormVisible = true;
      this.$refs.edit.form = {
        room_id: item.roomId,
      };
    },
  },
};
</script>

<style scoped>
.cover {
  margin-bottom: 7px;
  overflow: hidden;
  cursor: pointer;
}

.box-card {
  width: 135px;
  margin-bottom: 20px;
  height: 233px;
  float: left;
  margin-right: 15px;
}

.vvv {
  justify-content: center;
}

img {
  width: 115px;
  height: 172px;
  margin: 0 auto;
}

.title {
  font-weight: bold;
  display: inline;
  font-size: 14px;
  float: left;
  text-align: center;
}

.author {
  display: inline;
  color: #409eff;
  font-size: 13px;
  float: right;
  text-align: center;
}

.abstract {
  display: block;
  line-height: 17px;
}

a {
  text-decoration: none;
}

a:link,
a:visited,
a:focus {
  color: #3377aa;
}
</style>
