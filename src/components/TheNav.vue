<template>
    <nav class="navbar">
      <div class="container">
        <div class="logo">DANTE</div>
        <ul class="nav">
          <li>
              <a href="#">Ratings</a>
          </li>
           <li>
              <a href="#">Champs</a>
          </li>
           <li>
              <a href="#">Login/SignUp</a>
          </li>
           <li>
              <a href="#">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>

</script>

<style scoped>

.navbar {
   background: linear-gradient(to right, #333333, #dd1818);
  color: #fff;
  height: 60px;
}

.navbar .logo {
  font-size: x-large;
  font-weight: bold;
  background: linear-gradient(to right, #ffefba, #ffffff);
  -webkit-background-clip: text;
  color:  transparent;
  width: 210x;
  font-size: 40px;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}
.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.navbar ul {
  display: flex;
  list-style-type: none;
}

.navbar ul li {
  margin-left: 20px;
}
</style>