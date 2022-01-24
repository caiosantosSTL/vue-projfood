<template>
  <div id="nav">
    <router-link to="/" id="logoUrl">
      <!--dinamic vars-->
      <img :src="logox" id="logoId" :alt="altx" />
    </router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["logox", "altx"],
};
</script>

<style>
#nav {
  background-color: rgb(112, 112, 112);
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nav #logoUrl {
  margin: auto;
  margin-left: 0;
}
#logoId {
  width: 40px;
  height: 40px;
}
#nav a {
  color: rgb(231, 212, 36);
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}
#nav a:hover {
    color: white;
}
</style>