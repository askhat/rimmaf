<template lang="pug">
div
  .ui.very.padded.basic.text.segment
    .ui.two.column.grid
      .column
        .ui.right.aligned.huge.header Римма Федяева
        .ui.right.aligned.medium.header к.с.н., доцент кафедры конфликтологии КНИТУ (КХТИ), психолог
      .column
        .ui.list
          .item
            i.book.icon
            .content
              .header автор ряда научных публикаций, статей и монографии 
          .item
            i.certificate.icon
            .content
              .header сертифицированный слушатель зарубежных квалификационных семинаров по психологии и эффективности личности
              |(г. Никосия, г. Прага, г. Любляны, г. Цюрих)
          .item
            i.user.icon
            .content
              .header опытный практический консультант—психолог
              |(индивидуальное консультирование 11 лет)
  .ui.divider
  .ui.very.padded.center.aligned.basic.text.segment
    .ui.horizontal.list
      .item
        img.ui.mini.image(src="/whatsapp.svg")
        .content
          .header +7 (917) 395-43-67
      .item
        img.ui.mini.image(src="/instagram.svg")
        .content
          .header
            a(href="https://instagram.com/fedyaeva.rimma", target="_blank") @fedyaeva.rimma
      .item
        img.ui.mini.image(src="/skype.svg")
        .content
          .header @rimma.fedyaeva
      .item
        img.ui.mini.image(src="/email.svg")
        .content
          .header
            a(href="mailto:rimma.fedyaeva@mail.ru") rimma.fedyaeva@mail.ru
</template>

<style scoped>
.ui.mini.image {
  max-width: 25px;
}
</style>
