<template>
    <div class="card bg-secondary-light w-100 right-angle border-0">
        <div class="card-body text-center">
            <img src="../../assets/static/images/logo.png" alt="">
            <h3 class="card-title text-company-style">
                Company
                <span class="text-secondary-central">Name</span>
            </h3>
            <h5 class="card-subtitle mb-2 text-secondary-central-light mb-4">Вітає вас</h5>
            <h4 class="card-text text-company-style">Яким чином ви бажаєте співпрацювати?</h4>
            <h4 class="card-text text-secondary-central mb-4">Оберіть спосіб, який підходить саме Вам.</h4>
            <div class="row justify-content-center">
                <div class="col-lg-6 col-sm-12 col-12">
                    <div class="row mt-2">
                        <div class="col-lg-6 col-sm-12 col-12 mt-2">
                            <router-link to="/" class="card-link btn btn-company-button right-angle text-light p-2"
                                         style="width: 15rem">
                                Почати використовувати технологію
                            </router-link>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-12 mt-2">
                            <router-link to="/" class="card-link btn btn-light-button right-angle p-2"
                                         style="width: 15rem">
                                Скористатись нашими послугами
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card w-100 border-0 mt-5">
        <div class="row card-body">
            <div class="col-lg-4 col-sm-12">
                <img src="../../assets/static/images/cpu.png" alt="CPU" width="350">
            </div>
            <div class="col-lg-6 col-sm-12">
                <h3 class="card-title text-company-style media-text-center">Створюйте найкращі зображення</h3>
                <h3 class="card-title text-secondary-central media-text-center">Використовуйте найліпше обладнання</h3>
                <div class="d-flex flex-row mt-3">
                    <div class="wrap" style="margin-top: .9rem; margin-right: 2rem">
                        <div id="check-part-1" class="check-sign"></div>
                        <div id="check-part-2" class="check-sign"></div>
                    </div>
                    <p class="card-text">Навчайтесь та використовуйте обладнання
                        <span class="text-company-style">
                            Company
                            <span class="text-secondary-central">Name</span>
                        </span>
                    </p>
                </div>
                <div class="d-flex flex-row mt-3">
                    <div class="wrap" style="margin-top: .9rem; margin-right: 2rem">
                        <div id="check-part-1" class="check-sign"></div>
                        <div id="check-part-2" class="check-sign"></div>
                    </div>
                    <p class="card-text">
                        Розробки проведені з урахуванням всіх тенденцій ринку та з розрахунку на ціну-якість
                    </p>
                </div>
                <div class="d-flex flex-row mt-3">
                    <div class="wrap" style="margin-top: .9rem; margin-right: 2rem">
                        <div id="check-part-1" class="check-sign"></div>
                        <div id="check-part-2" class="check-sign"></div>
                    </div>
                    <p class="card-text">
                        Найповніший сервіс для всіх підприємств
                    </p>
                </div>
                <div class="row mt-2 text-center">
                    <div class="col-lg-6 col-sm-12 col-12 mt-2">
                        <router-link to="/" class="card-link btn btn-company-button right-angle text-light p-2"
                                     style="width: 16rem">
                            Ознайомитись з обладнанням
                        </router-link>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12 mt-2">
                        <router-link to="/cooperation/contact-form/" class="card-link btn btn-light-button right-angle p-2" style="width: 16rem">
                            Зв'язатись з відділом продажів
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <!--    <div id="carouselExampleAutoplaying" class="carousel slide mt-5" data-bs-ride="carousel">-->
  <!--        <div class="carousel-inner">-->
  <!--            <div class="carousel-item active">-->
  <!--                <img src="../../assets/static/images/how_to.png" class="d-block w-100" alt="...">-->
  <!--            </div>-->
  <!--            &lt;!&ndash;            <div class="carousel-item">&ndash;&gt;-->
  <!--            &lt;!&ndash;                <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="...">&ndash;&gt;-->
  <!--            &lt;!&ndash;            </div>&ndash;&gt;-->
  <!--            &lt;!&ndash;            <div class="carousel-item">&ndash;&gt;-->
  <!--            &lt;!&ndash;                <img src="https://th.bing.com/th/id/OIP.sWGI8dp3tIOXWLMjJqiSYQHaET?w=291&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" class="d-block w-100" alt="...">&ndash;&gt;-->
  <!--            &lt;!&ndash;            </div>&ndash;&gt;-->
  <!--        </div>-->
  <!--        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"-->
  <!--                data-bs-slide="prev">-->
  <!--            <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
  <!--            <span class="visually-hidden">Previous</span>-->
  <!--        </button>-->
  <!--        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"-->
  <!--                data-bs-slide="next">-->
  <!--            <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
  <!--            <span class="visually-hidden">Next</span>-->
  <!--        </button>-->
  <!--    </div>-->
    <div class="text-center mt-5">
        <h4 class="text-company-style">
            Чому потрібно довіряти свій бізнес саме нам?
        </h4>
        <h4 class="text-secondary-central">
            На скільки ми відповідальні?
        </h4>
    </div>
    <div class="row mt-4 mb-5">
        <div class="col-lg-6 col-sm-12 col-12 mt-4">
            <div class="costume-card h-100">
                <h4 class=" text-secondary-central">
                    Наша фірма працює згідно міжнародних стандартів документообігу та інформаційної безпеки
                </h4>
                <div class="row text-center justify-content-center">
                    <div class="col-lg-5 col-sm-12 col-12">
                        <img src="../../assets/static/images/isae3402.png" alt="" class="" width="200">
                    </div>
                    <div class="col-lg-5 col-sm-6 col-12">
                        <img src="../../assets/static/images/iso27001.png" alt="" class="" width="200">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12 col-12 mt-4">
            <div class="costume-card h-100">
                <h4 class=" text-secondary-central">
                    Наше обладнання сертифіковане в Україні та Євросоюзі
                </h4>
                <div class="row text-center justify-content-center">
                    <div class="col-lg-5 col-sm-12 col-12">
                        <img src="../../assets/static/images/sertifacate1.png" alt="" class="" width="200px">
                    </div>
                    <div class="col-lg-5 col-sm-6 col-12">
                        <img src="../../assets/static/images/sertifacate2.png" alt="" class="" width="200px">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12 col-12 mt-4">
            <div class="costume-card h-100">
                <h4 class=" text-secondary-central">
                    Наша фірма має власні запатентовані технології
                </h4>
                <div class="row text-center justify-content-center">
                    <div class="col-lg-5 col-sm-12 col-12">
                        <img src="../../assets/static/images/patent1.png" alt="" class="" width="200px">
                    </div>
                    <div class="col-lg-5 col-sm-6 col-12">
                        <img src="../../assets/static/images/patent2.png" alt="" class="" width="200px">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12 col-12 mt-4">
            <div class="costume-card h-100">
                <h4 class=" text-secondary-central">
                    Наш досвід та досвід наших спеціалістів складає більше
                </h4>
                <p class="display-1 text-company-style">
                    <strong>15</strong>
                </p>
                <h4 class=" text-secondary-central">
                    років розробок та виробництва обладнання
                </h4>
                <!--                <img src="../../assets/static/images/computer-engineer-icon-9.png" alt="" class="" width="200px">-->
            </div>
        </div>
        <div class="col-lg-6 col-sm-12 col-12 mt-4">
            <div class="costume-card h-100">
                <h4 class=" text-secondary-central">
                    Ми зібрали велику клієнтську базу у
                </h4>
                <p class="display-1 text-company-style">
                    <strong>7</strong>
                </p>
                <h4 class=" text-secondary-central">
                    країнах світу
                </h4>
                <img src="../../assets/static/images/worldmap.png" alt="" class="" width="200px">
            </div>
        </div>
    </div>
    <h4 class="text-center text-company-style mt-5">Відгуки клієнтів</h4>
    <div class="row justify-content-center">
        <div class="col-lg-8 col-sm-12 col-12 mb-sm-0">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h5 class="card-title text-secondary-central text-justify">
                        Обладнання відмінне
                    </h5>
                </li>
                <li class="list-group-item">
                    <h5 class="card-title text-secondary-central text-justify">
                        Користуюся обладнанням
                        <span class="text-company-style">
                            Company
                            <span class="text-secondary-central">Name</span>
                        </span>
                        вже чотири роки. Обладнання невбиване
                    </h5>
                </li>
                <li class="list-group-item">
                    <h5 class="card-title text-secondary-central text-justify">
                        "Обладнання" = ціна + якість"
                    </h5>
                </li>
                <li class="list-group-item">
                    <h5 class="card-title text-secondary-central text-justify">
                        Нещодавно придбали на фірмі обладнання
                        <span class="text-company-style">
                            Company
                            <span class="text-secondary-central">Name</span>
                        </span>. Порадував своєю доступністю в керуванні і якістю робіт
                    </h5>
                </li>
            </ul>
        </div>
    </div>
    <div class="mt-5 text-center">
        <h4 class="text-company-style">Як буде виглядати наша з вами співпраця?</h4>
        <h4 class="text-secondary-central">4 прості кроки</h4>
        <div class="row">
            <div class="col-lg-3 col-sm-6 col-12 mt-3">
                <div class="bg-secondary-light p-3 h-100">
                    <h5 class="text-secondary-central text-center">Ціноутворення</h5>
                    <p class="text-secondary-central-light">
                        Обирайте обладнання, яке вам підходить у співвідношенні ціна/якість
                    </p>
                    <img src="../../assets/static/images/sizes.png" alt="" width="100">
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12 mt-3">
                <div class="bg-secondary-light p-3 h-100">
                    <h5 class="text-secondary-central text-center">Взаємовідносини</h5>
                    <ul class="text-secondary-central-light square-type text-left">
                        <li>Укладаємо угоду;</li>
                        <li>виконуємо замовлення;</li>
                        <li>доставляємо.</li>
                    </ul>
                    <img src="../../assets/static/images/support.png" alt="" width="100">
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12 mt-3">
                <div class="bg-secondary-light p-3 h-100">
                    <h5 class="text-secondary-central text-center">Починаємо швидко</h5>
                    <p class="text-secondary-central-light">
                        Кілька годин навчання із нашим спеціалістом і ви готові працювати самостійно
                    </p>
                    <img src="../../assets/static/images/clock.png" alt="" width="100">
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12 mt-3">
                <div class="bg-secondary-light p-3 h-100">
                    <h5 class="text-secondary-central text-center">Постійна підтримка</h5>
                    <p class="text-secondary-central-light">
                        Отримуйте за вчасну допомогу по skype, телефону, e-mail, використовуючи web
                    </p>
                    <img src="../../assets/static/images/techsupport.png" alt="" width="100">
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-12 col-sm-12 col-12">
                <router-link to="/cooperation/contact-form/" class="btn btn-company-button btn-block text-light right-angle"
                             style="width: 15rem">
                    Розпочати співпрацю
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    components: {}
}
</script>
