<template>
  <div>
    <el-dialog title="新建订单" v-model="dialogFormVisible" @close="clear">
      <el-form v-model="form" style="text-align: left" ref="dataForm">
        <el-form-item label="房间号" :label-width="formLabelWidth">
          <el-tag type="success">{{ form.room_id }} </el-tag>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.cust_name" autocomplete="off"></el-input>
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
        <el-form-item label="身份证号" :label-width="formLabelWidth">
          <el-input v-model="form.cust_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input type="number" v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
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
  name: "EditForm",
  data() {
    return {
      ttime: [],
      dialogFormVisible: false,
      form: {
        cust_id: "",
        cust_name: "",
        phone: "",
        sex: "",
        age: "",
        room_id: "",
        enter_date: "",
        leave_date: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    clear() {
      this.form = {
        cust_id: "",
        cust_name: "",
        phone: "",
        sex: "",
        age: "",
        room_id: "",
        enter_date: "",
      };
    },
    onSubmit() {
      this.$axios
        .post("/order", {
          cust_id: this.form.cust_id,
          cust_name: this.form.cust_name,
          phone: this.form.phone,
          sex: this.form.sex,
          age: this.form.age,
          room_id: this.form.room_id,
          enter_date: moment(this.ttime[0]).format("YYYY-MM-DDTHH:mm:ss"),
          leave_date: moment(this.ttime[1]).format("YYYY-MM-DDTHH:mm:ss"),
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
