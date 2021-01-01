<template>
  <div class="survay">
    <h1>
      You have registerd <span class="span">{{ taskCoiunt }}</span> tasks
    </h1>
    <ul>
      <li v-for="(task, index) in tasks" :key="task.name" class="list">
        <div>
          {{ task.name }} <button @click="removeTask(index)">Del</button>
        </div>
      </li>
    </ul>
    <form @submit.prevent="addTask()" class="form">
      <input
        type="text"
        v-model="newTask"
        placeholder="Add new task"
        class="input"
      />
      <button type="submit" class="Submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      newTask: "",
      show: false,
      count: 4,
      tasks: [{ name: "ridei" }],
    };
  },
  props: {
    msg: String,
  },
  computed: {
    taskCoiunt() {
      return this.tasks.length;
    },
  },
  methods: {
    addTask() {
      if (this.newTask !== "") {
        this.tasks.push({ name: this.newTask });
      }
      this.newTask = "";
    },
    removeTask(index) {
      this.tasks = this.tasks.filter((item, i) => i !== index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.list {
  display: flex;
  justify-content: center;
  margin: 0 300px;
  padding: 10px;
  button {
    margin-top: 10px;
    margin-left: 4rem;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #4caf50; /* Green */
    background-color: #42b983;
    font-size: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
.form {
  margin-top: 2rem;
}
.Submit {
  margin-left: 1rem;
  padding: 0.4rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: aqua;
  border: none;
  width: 3rem;
      border-radius: 5px;

}

.input {
  padding: 0.5rem;
}

.span {
  color: rgb(255, 72, 0);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
