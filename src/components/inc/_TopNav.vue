<template>
    <div class="container media-mt-2">
        <div class="row h-100 d-flex align-items-center">
            <div class="col-lg-3 col-sm-6 col-4 media-text-center" style="height:2rem">
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
            <div class="col-lg-6 col-sm-6 col-4 text-center">
                <router-link to="/" class="btn btn-account right-angle" width="25rem">Особистий кабінет
                </router-link>
            </div>
            <div class="col-lg-3 col-sm-12 col-12 mx-left p-3 mx-auto">
                <form class="d-flex" role="search">
                    <input class="form-control me-2 right-angle" type="search" placeholder="щось знайти?"
                           aria-label="Search">
                    <button class="btn btn-light-button bg-company-style right-angle" type="submit">Пошук</button>
                </form>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-secondary-light media-mt-2" style="padding: .2rem; height: auto;">
        <div class="container-fluid">
            <button class="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="container-fluid">
                    <div class="row media-text-center">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link" aria-current="page">головна</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/all_services" class="nav-link" aria-current="page">всі послуги
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/knowledge_base" class="nav-link" aria-current="page">база знань
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/blogs" class="nav-link" aria-current="page">блоги</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/news" class="nav-link" aria-current="page">новини</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contacts" class="nav-link" aria-current="page">контакти</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link" aria-current="page">Про фірму</router-link>
                            </li>
                        </ul>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        </div>
                    </div>
                </div>
                <div class="row media-text-center">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link" aria-current="page">укр</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link" aria-current="page">eng</router-link>
                            </li>
                        </ul>
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