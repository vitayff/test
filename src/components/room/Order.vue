<template>
  <div>
    <el-row style="height: 740px;">
      <el-tooltip
        effect="dark"
        placement="right"
        v-for="item in orders.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )"
        :key="item.roomId"
      >
        <template #content>
          <p style="font-size: 14px;margin-bottom: 6px;">
            订单号：{{ item.id }}
          </p>
          <p style="font-size: 13px;margin-bottom: 6px">
            <span>订单状态：{{ item.state }}</span>
          </p>
          <p style="font-size: 13px;margin-bottom: 6px">
            <span>房间号：{{ item.rid }}</span>
          </p>
          <p style="width: 300px" class="abstract">
            <span>入住时间：{{ item.enterDate }}</span>
          </p>
          <p style="width: 300px" class="abstract">
            <span>离开时间：{{ item.leaveDate }}</span>
          </p>
          <p class="abstract">
            <span>入住人信息</span> <br />
            <span>姓名：{{ item.cust_name }}</span> <br />
            <span>证件号：{{ item.cust_id }}</span
            ><br />
            <span>性别：{{ item.sex }}</span
            ><br />
            <span>手机号：{{ item.phone }}</span>
          </p>
        </template>
        <el-card class="box-card">
          <div class="cover">
            <img :src="icon" alt="封面" />
          </div>
          <div>
            <div class="title">
              {{ item.rid.roomId }}
            </div>
            <i class="el-icon-delete" @click="finishOrder(item.cust_id)"></i>
          </div>
        </el-card>
      </el-tooltip>
    </el-row>
    <el-row class="vvv">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="orders.length"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      icon: require("../../assets/p1.jpg"),
      currentPage: 1,
      pageSize: 12,
      orders: [
        {
          id: "",
          rid: "",
          enterDate: "",
          leaveDate: "",
          state: "",
          cust_id: "",
          cust_name: "",
          phone: "",
          sex: "",
          age: "",
        },
      ],
    };
  },
  mounted() {
    this.getOnesOrder();
  },
  methods: {
    getOnesOrder: function() {
      this.$axios.post("/orderhistoy", "").then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.orders = response.data;
        }
      });
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage);
    },
    finishOrder(id) {
      this.$confirm("此操作将取消订单, 是否继续?", "提示", {
        confirmButtonText: "取消订单",
        cancelButtonText: "返回",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .post("/finishOrder", { cust_id: id, info: "取消" })
            .then((resp) => {
              if (resp.status === 200) {
                this.getOnesOrder();
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
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
  display: inline;
  float: left;
  font-size: 14px;
  text-align: left;
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
