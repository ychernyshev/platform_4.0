<template>
    <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-6 col-sm-12 col-12">
                <div class="card shadow-1 right-angle mt-5">
                    <div class="bg-company-style right-angle p-3 text-light">
                        <h4>Форма запиту на консультацію</h4>
                    </div>
                    <div class="card-body border-0 d-flex flex-column">
                        <h5 class="card-title text-justify">Будь ласка, заповніть цю форму, щоб налагодити зв'язок із нашим відділом
                            продажів
                            <span class="text-company-style">
                                Company
                                <span class="text-secondary-central">Name</span>
                            </span>
                            та обговорити умови співпраці.</h5>
                        <hr>
                        <small class="text-justify"><strong>
                            Попередньо, пропонуємо вам ознайомитися із
                            <a href="" class="text-company-style">
                                переліком відповідей на часті запитання
                            </a>.
                            Однак, якщо вас цікавить негайний зв'язок із нашим
                            представником, наведена нижче форма до ваших послуг
                        </strong></small>
                        <hr>
                        <p class="card-text text-secondary-central-light">
                            <small>Вкажіть діючу електронну адресу, щоб мати можливість отримати зворотній
                                зв'язок.</small>
                        </p>
                        <hr>
                        <label for="name">Ім'я:</label>
                        <input type="text" class="mt-1" name="name" value="" placeholder="наприклад, Сашко">
                        <label for="second_name" class="mt-2">По батькові:</label>
                        <input type="text" class="mt-1" name="second_name" value="" placeholder="наприклад, Олегович">
                        <label for="email" class="mt-2">Електронна адреса:</label>
                        <input type="text" class="mt-1" name="email" value="" placeholder="email@example.com">
                        <label for="phone" class="mt-2">Номер телефону:</label>
                        <input type="text" class="mt-1" name="phone" value="" placeholder="+38(___)___-__-__">
                        <small class="text-secondary-central-light mt-4">
                            Надсилаючи наведену форму, Ви погоджуєтеся з
                            <a href="" class="text-secondary">умовами конфіденційності</a>
                            компанії
                            <span class="text-company-style">
                                Company
                                <span class="text-secondary-central">Name</span>
                            </span>
                        </small>
                        <a href="#" class="btn btn-light-button right-angle mt-4">Надіслати запит</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "CooperationView"
}
</script>

<style scoped>

</style>