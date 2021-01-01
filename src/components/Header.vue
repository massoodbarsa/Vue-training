<template>
  <nav class="navbar">
    <router-link
      v-for="item in list"
      :key="item.to"
      :to="item.to"
      class="nav-link"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Slider", to: "/slider" },
        { title: "Todo", to: "/todo" },
        { title: "Blog", to: "/blog" },
        { title: "Survay", to: "/survay" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: rgb(39, 34, 34);
  padding: 2rem;
  border-radius: 5px;
}
.nav-link {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: aqua;
  margin: 2rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px;
}
</style>