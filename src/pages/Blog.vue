<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <div>
        <label>Blog Title:</label>
        <input type="text" v-model.lazy="blog.title" required />
      </div>
      <div>
        <label>Blog Content:</label>
        <textarea v-model.lazy.trim="blog.content"></textarea>
      </div>
      <div id="checkbox">
        <label>First</label>
        <input type="checkbox" value="First" v-model="blog.categories" />
        <label>Second</label>
        <input type="checkbox" value="Second" v-model="blog.categories" />
        <label>Third</label>
        <input type="checkbox" value="Third" v-model="blog.categories" />
        <label>Forth</label>
        <input type="checkbox" value="Forth" v-model="blog.categories" />
      </div>
      <label>Creator</label>
      <select v-model="blog.creator">
        <option v-for="creator in creators" :key="creator">
          {{ creator }}
        </option>
      </select>
      <button @click.prevent="post">Add Blog</button>
    </form>

    <div v-if="submitted">
      <h3>Form is submitted</h3>
    </div>

    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title:</p>
      <span> {{ blog.title }}</span>
      <!-- <input type="text" v-model.lazy="blog.title" required /> -->
      <p>Blog content:</p>
      <span>{{ blog.content }}</span>
      <p>Blog Categories</p>
      <span v-for="category in blog.categories" :key="category">
        {{ category }}
      </span>
      <p>Blog Creator</p>
      <span>{{ blog.creator }}</span>
    </div>
    <button v-if="submitted" @click="returnToForm">Return</button>
  </div>
</template>

<script>
// Imports

export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        creator: "",
      },
      creators: ["holly", "molly", "folly"],
      submitted: false,
    };
  },
  methods: {
    post() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userid: 1,
        })
        .then((data) => console.log(data))
        .then((this.submitted = true));
    },
    returnToForm() {
      this.submitted = false;
      this.blog = [];
    },
  },
};
</script>

<style scoped lang='scss'>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
  button {
    margin-left: 20px;
    padding: 5px;
    background-color: aqua;
    border: none;
    border-radius: 5px;
  }
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
  span {
    font-weight: bold;
    margin-right: 10px;
  }
}
h3 {
  margin-top: 10px;
}
#checkbox {
  input {
    display: inline-block;
    margin-right: 20px;
  }
  label {
    display: inline-block;
  }
}
</style>