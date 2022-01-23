<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/task11">Task1.1</router-link>
      <router-link to="/task21">Task2.1</router-link>
      <router-link to="/task22">Task2.2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 10px;
  padding-right: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
