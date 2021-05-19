<template>
  <div>
    <el-dialog title="修改订单" v-model="dialogFormVisible" @close="clear">
      <el-form v-model="form" style="text-align: left" ref="dataForm">
        <el-form-item label="订单号" :label-width="formLabelWidth">
          <el-tag type="success">{{ form.id }}</el-tag>
        </el-form-item>
        <el-form-item label="房间号" :label-width="formLabelWidth">
          <el-input v-model="form.rid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="入住日期" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-date-picker
              type="datetimerange"
              placeholder="选择日期"
              v-model="ttime"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-select v-model="form.state" placeholder="请选择状态">
            <el-option label="已预订" value="已预订"></el-option>
            <el-option label="已入住" value="已入住"></el-option>
            <el-option label="已完成" value="已完成"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <slot name="footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit">确 定</el-button>
        </slot>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "EditOrder",
  data() {
    return {
      ttime: [],
      dialogFormVisible: false,
      form: {
        id: "",
        rid: "",
        enterDate: "",
        leaveDate: "",
        state: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    clear() {
      this.ttime = [];
      this.form = {
        id: "",
        rid: "",
        enterDate: "",
        leaveDate: "",
        state: "",
      };
    },
    onSubmit() {
      console.log(this.ttime);
      this.$axios
        .post("/updateOrderInfo", {
          id: this.form.id,
          rid: this.form.rid,
          enterDate: moment(this.ttime[0]).format("YYYY-MM-DDTHH:mm:ss"),
          leaveDate: moment(this.ttime[1]).format("YYYY-MM-DDTHH:mm:ss"),
          state: this.form.state,
        })
        .then((resp) => {
          if (resp.status === 200) {
            this.dialogFormVisible = false;
            this.$emit("onSubmit");
          }
        });
    },
  },
};
</script>

<style scoped></style>
