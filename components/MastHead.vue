<template lang="pug">
  .ui.raised.cover.teal.segment(:style="{ height, backgroundImage }")
    //- .ui.basic.inverted.icon.button: i.ui.backward.icon
    //- .ui.basic.inverted.icon.button: i.ui.forward.icon
    .ui.right.aligned.basic.segment
      .ui.two.column.grid
        blockquote.right.floated.column
          p.ui.inverted.large.header Меняйтесь внутренне, взращиваете лучшие качества характера — вы увидите как изменятся внешние обстоятельства
          footer.ui.inverted.sub.header главный совет от Риммы Федяевой
    //- .ui.right.aligned.basic.segment
    //-   .ui.two.column.grid
    //-     blockquote.right.floated.column
    //-       p.ui.inverted.small.header Целенаправленные усилия руководителей по обучению кадров незамедлительно дают ощутимые результаты, люди лучше выполняют работу, возрастает производительность, повышается степень удовлетворения, поскольку люди чувствуют, что их уважают и ценят, счастливые реже болеют, не думают об увольнении, не сидят без дела, размышляя чем бы заняться
    //-       footer.ui.inverted.small.sub.header Диана Трейси (автор бестселлера Как побороть в себе управленческий психоз и найти простой ключ к успеху)
    //- .ui.center.aligned.basic.segment
    //-   blockquote
    //-     p.ui.inverted.medium.header Я берусь помочь взглянуть на вашу историю профессиональным взглядом, самостоятельно определить приемлемые и правильные пути выхода из ситуации, при помощи здравого смысла, глубокого понимания происходящего, анализируя, используя научные и проверенные методы разрешения внутренних и межличностных конфликтов
    //-     footer.ui.inverted.sub.header Римма Федяева
    //- .ui.right.aligned.basic.segment
    //-   .ui.two.column.grid
    //-     blockquote.right.floated.column
    //-       p.ui.inverted.medium.header Стать свободным и счастливым человеком на постоянной основе и независимо от любых ситуаций испытывать абсолютное  спокойствие, высокий уровень сознания, силы и любви.  Получить новые, полезные знания в других областях.
</template>

<script>
export default {
  name: 'JumbotronSlider',
  props: {
    image: { type: String, default: () => 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' },
    height: { type: String, default: () => '608px' }
  },
  data () {
    return {
      currentSlide: 1
    }
  },
  computed: {
    backgroundImage () {
      switch (this.currentSlide) {
        case 1: return 'url(/img/head1.png)'
        case 2: return 'url(/img/head2.png)'
        case 3: return 'url(/img/head3.png)'
      }
    }
  }
}
</script>

<style scoped>
:root {
  --primary-color: #00C4B1;
}
.cover {
  background-color: var(--primary-color);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: -200px;
}
@media (min-width: 568px) {
  .cover { background-position-x: -100px; }
}
@media (min-width: 737px) {
  .cover { background-position-x: left; }
}
.ui.large.header { font-size: 1.15em; }
.ui.medium.header { font-size: .9em; }
.ui.small.header { font-size: .81em; }
.ui.small.sub.header { font-size: .58em; }
.ui.inverted.header { text-shadow: 1px 1px 5px black; }
@media (max-width: 375px) {
  .ui.header { word-wrap: break-word; }
}
@media (min-width: 375px) {
  .ui.medium.header { font-size: 1em; }
  .ui.small.header { font-size: .9em; }
  .ui.small.sub.header { font-size: .6em; }
}
@media (min-width: 414px) {
  .ui.small.header { font-size: .99em; }
  .ui.small.sub.header { font-size: .65em; }
}
@media (min-width: 568px) {
  .ui.large.header { font-size: 1.5em; }
}
@media (min-width: 736px) {
  .ui.segment { padding: 3em; }
  .ui.large.header { font-size: 2em; }
  .ui.medium.header { font-size: 1.4em; }
  .ui.small.header { font-size: 1.1em; }
  .ui.small.sub.header { font-size: .8em; }
}
@media (min-width: 1200px) {
  .ui.small.header { font-size: 1.6em; }
}
</style>
