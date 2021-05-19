<template>
  <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>

  <el-container>
    <el-main class="nnn">
      <el-row style="height: 720px">
        <div
          v-for="item in onesData.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )"
          :key="item.id"
          style="margin: 0 auto;float: left"
        >
          <el-col>
            <el-card style="width: 1500px" @click="editO(item)">
              <el-descriptions title="订单信息">
                <el-descriptions-item label="订单名"
                  >{{ item.id }}
                </el-descriptions-item>
                <el-descriptions-item label="房间信息"
                  >(房间号：{{ item.rid.roomId }}🍎房间类型：{{
                    item.rid.room_type
                  }}🍎房间价格：{{ item.rid.price }}元/晚)
                </el-descriptions-item>
                <el-descriptions-item label="状态">
                  <el-tag size="small">{{ item.state }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="入住日期"
                  >{{ item.enterDate }}
                </el-descriptions-item>
                <el-descriptions-item label="离开日期"
                  >{{ item.leaveDate }}
                </el-descriptions-item>
                <el-descriptions-item label="身份证"
                  >{{ sfz }}
                </el-descriptions-item>
              </el-descriptions>
            </el-card>
          </el-col>
          <el-col v-if="ifOk(item.state)">
            <el-row>
              <el-button
                type="primary"
                style="height: 76px"
                @click="
                  finishOrder(
                    sfz,
                    item.rid.price,
                    compute(item.enterDate, item.leaveDate)
                  )
                "
                icon="el-icon-s-claim"
              >
                完成订单
              </el-button>
            </el-row>
            <el-row>
              <el-button
                type="danger"
                style="height: 76px"
                @click="cancelOrder(sfz)"
                icon="el-icon-s-release"
              >
                取消订单
              </el-button>
            </el-row>
          </el-col>
        </div>
      </el-row>
      <edit-order @submit="getAllRooms" ref="updateR"></edit-order>

      <el-row class="vvv">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="onesData.length"
        >
        </el-pagination>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import SearchBar from "@/components/room/SearchBar";
import moment from "moment";
import EditOrder from "@/components/manage/EditOrder";

export default {
  name: "ManageIndex",
  components: {
    SearchBar,
    EditOrder,
  },
  data() {
    return {
      sfz: "",
      currentPage: 1,
      pageSize: 4,
      onesData: [
        {
          id: "",
          rid: "",
          enterDate: "",
          leaveDate: "",
          state: "",
        },
      ],
    };
  },
  mounted() {
    this.getAllRooms();
  },
  methods: {
    editO(item) {
      this.$refs.updateR.ttime = [
        moment(item.enterDate),
        moment(item.leaveDate),
      ];
      this.$refs.updateR.dialogFormVisible = true;
      this.$refs.updateR.form = {
        id: item.id,
        rid: item.rid.roomId,
        state: item.state,
      };
    },
    ifOk(dd) {
      return dd === "已预订" || dd === "已入住";
    },
    compute(a, b) {
      const bb = moment(b);
      const aa = moment(a);
      return bb.diff(aa, "day");
    },
    finishOrder(id, pp, gg) {
      const ttt = this;
      this.$confirm(
        "此操作将完成订单, 是否继续?订单总价：" + pp * gg + "元",
        "提示",
        {
          confirmButtonText: "完成订单",
          cancelButtonText: "返回",
          type: "warning",
        }
      )
        .then(() => {
          ttt.$axios
            .post("/finishOrder", { cust_id: id, info: "完成" })
            .then((resp) => {
              if (resp.status === 200) {
                ttt.$axios
                  .post("/findOnesOrder", {
                    cust_id: ttt.sfz,
                  })
                  .then((successResponse) => {
                    if (successResponse.status === 200) {
                      ttt.onesData = successResponse.data;
                    }
                  });
              }
            });
        })
        .catch(() => {
          ttt.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
    cancelOrder(id) {
      const ttt = this;
      this.$confirm("此操作将取消订单, 是否继续?", "提示", {
        confirmButtonText: "取消订单",
        cancelButtonText: "返回",
        type: "warning",
      })
        .then(() => {
          ttt.$axios
            .post("/finishOrder", { cust_id: id, info: "取消" })
            .then((resp) => {
              if (resp.status === 200) {
                ttt.$axios
                  .post("/findOnesOrder", {
                    cust_id: ttt.sfz,
                  })
                  .then((successResponse) => {
                    if (successResponse.status === 200) {
                      ttt.onesData = successResponse.data;
                    }
                  });
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
    getAllRooms: function() {
      this.$axios.get("/getAllRoomInfo").then((resp) => {
        if (resp && resp.status === 200) {
          this.onesData = resp.data;
        }
      });
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage);
    },
    searchResult() {
      const ttt = this;
      this.$axios
        .post("/findOnesOrder", {
          cust_id: ttt.$refs.searchBar.keywords,
        })
        .then((successResponse) => {
          ttt.sfz = ttt.$refs.searchBar.keywords;
          console.log(successResponse.data);
          if (
            successResponse.data.length > 0 &&
            successResponse.status === 200
          ) {
            ttt.onesData = successResponse.data;
          } else {
            ttt.onesData = "";
            ttt.$message({
              type: "info",
              message: "未找到",
            });
          }
        });
    },
  },
};
</script>

<style scoped>
.nnn {
  width: 990px;
  margin-left: auto;
  margin-right: auto;
}

.vvv {
  justify-content: center;
}
</style>
