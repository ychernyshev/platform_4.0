<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-sm-12 col-12 bg-secondary-light" style="">
                <div class="row mt-4 mb-4">
                    <div class="col-xl-7 col-lg-7 col-sm-12 col-12">
                        <h3 class="display-6 text-secondary-central">Головний процесорний юніт
                            <span class="display-6 text-company-style">
                        Company
                        <span class="text-secondary-central">Name</span>
                    </span>
                        </h3>
                        <p class="text-secondary-central-light">Високоефективна процесорна одиниця для оброблення
                            мультимедіа
                            високої роздільної здатності</p>
                        <h3 class="display-6 text-secondary-central mt-4">Від 2900 у.о.</h3>
                        <router-link to="/about" class="text-secondary d-flex flex-row" style="text-decoration: none">
                            <h6>дивитись більше</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M3.6 46 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                <path fill-rule="evenodd"
                                      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </router-link>
                    </div>
                    <div class="col-xl-5 col-lg-5 col-sm-12 col-12 text-center">
                        <img src="@/assets/static/images/main_unit.png" class="mobile-image-sizes-1" width="400" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AllServices"
}
</script>

<style scoped>

</style>