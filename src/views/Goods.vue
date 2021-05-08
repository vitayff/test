<template>
  <div id="table">
    <div class="add">
      <input type="text" v-model="fff.title" name="title" placeholder="标题"/>
      <input type="text" v-model="fff.user" name="user" placeholder="发布人"/>
      <input type="date" v-model="fff.dates" name="date" placeholder="发布时间"/>
      <button @click="adddetail">新增</button>
    </div>
    <table>
      <thead>
      <tr>
        <th>序号</th>
        <th>标题</th>
        <th>发布人</th>
        <th>发布时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in newsList"
          v-bind:key="index"
      >
        <td width="5%">{{ index + 1 }}</td>
        <td>{{ item.title }}</td>
        <td width="10%">{{ item.user }}</td>
        <td width="15%">{{ item.dates }}</td>
        <td width="10%"><span @click="deletelist(index)" class="delete">删除</span><span class="edit"
                                                                                       @click="edit(item)">编辑</span>
        </td>
      </tr>
      </tbody>
    </table>
    <div id="mask" v-if="editlist">
      <div class="mask">
        <div class="title">
          编辑
          <span @click="editlist=false">
							X
						</span>
        </div>
        <div class="content">
          <input type="text" v-model="fff.title" name="title" placeholder="标题"/>
          <input type="text" v-model="fff.user" name="user" placeholder="发布人"/>
          <input type="date" v-model="fff.dates" name="date" placeholder="发布时间"/>
          <button @click="update">更新</button>
          <button @click="editlist=false">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">


import {reactive,ref} from "vue";

interface goods {
  title: string,
  user: string,
  dates: string,
  id: string
}

export default {
  name: "Goods",
  setup() {
    const newsList: Array<goods> = reactive(
        [{
          title: '在移动设备开发',
          user: '王小俊',
          dates: '2019-05-03',
          id: "55222676"
        }, {
          title: '图形及特效特性',
          user: '胡奎',
          dates: '2019-03-07',
          id: "51341325"
        }, {
          title: '设备兼容特性',
          user: '李三',
          dates: '2019-07-09',
          id: "61451431"
        }, {
          title: 'W3C将致力于开发用于实时通信',
          user: '张兵',
          dates: '2019-06-08',
          id: "61345315"
        }, {
          title: '全新的表单输入对象',
          user: '沈舟',
          dates: '2019-03-15',
          id: "47322467"
        }]
    )
    const fff: goods = reactive({title: '', user: '', dates: '', id: ''})

    let editlist = ref(false)
    let editid = ''

    const adddetail = () => {
      fff.id = Math.floor(Math.random() * 1000000 + 1).toString()
      newsList.push(fff)
    }
    const deletelist = (i: number) => {
      newsList.splice(i, 1);
    }
    const edit = (item: goods) => {
      fff.title = item.title
      fff.user = item.user
      fff.dates = item.dates
      fff.id = item.id

      editlist.value = true
      editid = item.id

    }
    const update = () => {

      for (let i = 0; i < newsList.length; i++) {
        if (newsList[i].id === editid) {
          newsList[i] = {
            title: fff.title,
            user: fff.user,
            dates: fff.dates,
            id: editid
          }
          editlist.value = false
        }
      }
    }

    return {
      adddetail,
      deletelist,
      newsList,
      fff,
      editlist,
      edit,
      update
    }
  },


}
</script>

<style scoped>
#table table {
  width: 100%;
  font-size: 14px;
  border: 1px solid #eee
}

#table {
  padding: 0 10px;
}

table thead th {
  background: #f5f5f5;
  padding: 10px;
  text-align: left;
}

table tbody td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
}

table tbody td span {
  margin: 0 10px;
  cursor: pointer;
}

.delete {
  color: red;
}

.edit {
  color: #008cd5;
}

.add {
  border: 1px solid #eee;
  margin: 10px 0;
  padding: 15px;
}

input {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 3px;
  margin-right: 15px;
  float: left;
}

button {
  background: #008cd5;
  border: 0;
  border-radius: 3px;
  color: #fff;
  margin: 0;
  display: inline-block;
  float: left;
  width: 85px;
  height: 35px;
  text-align: center;
}

#mask {
  background: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
}

.mask {
  width: 300px;
  height: 250px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 47;
  border-radius: 5px;
}

.title {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.title span {
  float: right;
  cursor: pointer;
}

.content {
  padding: 10px;
}

.content input {
  width: 270px;
  margin-bottom: 15px;
}


</style>
