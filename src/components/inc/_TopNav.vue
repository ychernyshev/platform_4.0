<template>
    <div class="container">
        <div class="row h-100 d-flex align-items-center">
            <div class="col-lg-3 col-sm-12 media-text-center" style="height:2rem">
                <h5 class="text-company-style">
                    Company
                    <span class="text-secondary-central">Name</span>
                </h5>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="col-lg-4 col-sm-12 mx-left p-3 mx-auto">
                <form class="d-flex" role="search">
                    <input class="form-control me-2 right-angle" type="search" placeholder="щось знайти?" aria-label="Search">
                    <button class="btn btn-light-button bg-company-style right-angle" type="submit">Пошук</button>
                </form>
            </div>
            <div class="col-lg-3 col-sm-12">
                <div class="mx-auto">
                    <router-link to="/" class="btn btn-account right-angle p-2" width="25rem">Особистий кабінет</router-link>
                </div>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-secondary-light" style="padding: .2rem; height: auto;">
        <div class="container-fluid">
            <div class="row media-text-center">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">всі послуги</a>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">база знань</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">блоги</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">новини</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">контакти</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link" aria-current="page">Про фірму</router-link>
                    </li>
                </ul>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "_TopNav"
}
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border-bottom: .1rem;
}

nav {
  padding: 30px;

  a {
    color: #2c3e50;
    text-decoration: none;
    text-transform: uppercase;

    font-size: 1.1rem;

    &.router-link-exact-active {
      color: #56C6BF;
    }
  }
}
</style>