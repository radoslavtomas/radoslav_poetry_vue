<template>
  <Book
    :title="$t('book.title')"
    year="2009"
    cover="/assets/img/covers/wolves_weddings_cover.png"
    pdf="/assets/download/radoslav_tomas_vlcie_svadby.pdf"
    :desc="$t('book.desc')"
    :info="$t('book.info')"
    :poems="$t('book.poems')"
  />
</template>

<i18n>
{
  "en": {
    "book": {
      "title": "Wolves' Weddings",
      "desc": "Wolves’ weddings (Vlčie svadby) are based on mythology. I work here with Greek and Biblical motifs and their relevance for current society. The focus is on details which provide a framework for the story. They provide anchors through which the reader is invited to relate to the story. This relationship is particularly highlighted in the final part of the book, in which an old mythology and the story of my grandfather, whom I have never met, interconnect into one archetypal tale.",
      "info": "Publishing house: Na konári, Praha, 2009. Illustrations Ján Mikuš. Paperback, 76 pages, ISBN 9788090448704.",
      "poems": "<strong>(Medea)</strong><br><br>1<br><br><p>Medea si v zákulisí<br>zapletá vlasy Hanblivo<br>uteká domov<br><br>Na chodbe<br>sa na chvíľu zastaví a stratí<br>jednu<br>studenú<br>slučku<br><br>ukrytú<br>v každej<br>slze<br><br>Kotúľajú sa dolu<br>schodmi<br>ako detský krik<br><br>Keď sa v noci zobudí<br>zdá sa jej<br>že ktosi chodí po byte<br><br>To dotyky<br>ktorých už niet<br>ako tma z krídel<br><br>padajú<br>krehko<br>na dlážku<br><br>2<br><br>Ráno počíta<br>koľko slov sa zmestí<br>do boľavých úst<br><br>Medzi písmenami<br>jej padá dážď<br><br>Jeho špinavá mokrá duša<br>smutno puká<br><br>raz z nenávisti<br>raz z lásky<br><br>Len oči<br>ako pošliapaný obzor<br>sledujú<br><br>nôž<br><br>ktorý placho<br><br>šumí<br><br><br>A nie je viac<br><br>ako<br>prst<br>na<br>ústach<br>bohýň<br><br>3<br><br>Cez deň máva sny<br><br>Ale len na jedno oko<br><br>ako cez kľúčovú<br>dierku<br><br>Nikto okrem nej nevie<br>aké je to<br><br>umlčať<br><br>toľko<br>pohľadov<br>v sebe<br><br>Potichu v nej vyrastá<br>plánka<br>s čiernymi<br><br>detskými<br><br>jabĺčkami<br><br>4<br><br>Medea sa vracia<br>na scénu<br><br>Stráca sa<br>v každom dotyku<br>obyčajných<br>vecí<br><br>Pod kožou jej<br>divoko bubnuje<br>dobiela rozpálené<br>slnko<br><br>Ktosi všetko pozorne<br>sleduje<br>z hľadiska<br><br>Práve vtedy<br>keď váha<br>je najviac<br>matkou<br><br>A aj sama vie<br>že nijaký iný divý zver<br>by to nespravil<br><br>Vtedy jej<br>barbarke z Kolchidy<br>nehlučne<br>vzlietne rozliate víno<br>do materského znamienka<br><br>Na scénu ktosi napíše<br>jedenkrát súcit<br>a dvakrát vražda<br><br>Vražda<br><br>Každá pavučina<br><br>jej odteraz bude pripomínať<br><br>detské<br>ústa<br>stuhnuté<br>do výkriku<br><br>5<br><br>Na ulici<br>sa za ňou otáčajú<br>tri slepé stareny<br><br>Má s nimi čosi spoločné<br>v bruškách prstov<br><br>Občas sa<br>náhlivo<br>obzrie<br><br>A rovnako ako dážď<br>ktorý<br>kráča po ceste<br>hrubými drevákmi<br><br>tak i ona<br><br>chodí medzi nás<br><br>s neumytou<br>farbou na očiach<br><br>a so všetkým<br>čo má vo svojom hlase<br><br>navyše<br></p>"
    }
  },
  "sk": {
    "book": {
      "title": "Vlčie svadby",
      "desc": "Vlčie svadby vychádzajú z mytológie. Pracujem tu s gréckymi a biblickými motívmi, ktoré som sa snažil preniesť do súčasnosti. Pozornosť je na detailoch, ktoré príbeh rámcujú. Vytvárajú mapu, pomocou ktorej sa čitatelia a čitateľky môžu stotožniť s príbehom a prežiť ho ako ich osobný. Toto je súčasťou najmä poslednej časti, kde som vložil mytológiu a príbeh môjho starého otca, ktorého som nikdy nepoznal osobne.",
      "info": "Vydavateľstvo Na konári, Praha. Rok vydania 2009. Ilustrácie Ján Mikuš. Brožovaná väzba, 76 strán, ISBN 9788090448704.",
      "poems": "<strong>(Medea)</strong><br><br>1<br><br><p>Medea si v zákulisí<br>zapletá vlasy Hanblivo<br>uteká domov<br><br>Na chodbe<br>sa na chvíľu zastaví a stratí<br>jednu<br>studenú<br>slučku<br><br>ukrytú<br>v každej<br>slze<br><br>Kotúľajú sa dolu<br>schodmi<br>ako detský krik<br><br>Keď sa v noci zobudí<br>zdá sa jej<br>že ktosi chodí po byte<br><br>To dotyky<br>ktorých už niet<br>ako tma z krídel<br><br>padajú<br>krehko<br>na dlážku<br><br>2<br><br>Ráno počíta<br>koľko slov sa zmestí<br>do boľavých úst<br><br>Medzi písmenami<br>jej padá dážď<br><br>Jeho špinavá mokrá duša<br>smutno puká<br><br>raz z nenávisti<br>raz z lásky<br><br>Len oči<br>ako pošliapaný obzor<br>sledujú<br><br>nôž<br><br>ktorý placho<br><br>šumí<br><br><br>A nie je viac<br><br>ako<br>prst<br>na<br>ústach<br>bohýň<br><br>3<br><br>Cez deň máva sny<br><br>Ale len na jedno oko<br><br>ako cez kľúčovú<br>dierku<br><br>Nikto okrem nej nevie<br>aké je to<br><br>umlčať<br><br>toľko<br>pohľadov<br>v sebe<br><br>Potichu v nej vyrastá<br>plánka<br>s čiernymi<br><br>detskými<br><br>jabĺčkami<br><br>4<br><br>Medea sa vracia<br>na scénu<br><br>Stráca sa<br>v každom dotyku<br>obyčajných<br>vecí<br><br>Pod kožou jej<br>divoko bubnuje<br>dobiela rozpálené<br>slnko<br><br>Ktosi všetko pozorne<br>sleduje<br>z hľadiska<br><br>Práve vtedy<br>keď váha<br>je najviac<br>matkou<br><br>A aj sama vie<br>že nijaký iný divý zver<br>by to nespravil<br><br>Vtedy jej<br>barbarke z Kolchidy<br>nehlučne<br>vzlietne rozliate víno<br>do materského znamienka<br><br>Na scénu ktosi napíše<br>jedenkrát súcit<br>a dvakrát vražda<br><br>Vražda<br><br>Každá pavučina<br><br>jej odteraz bude pripomínať<br><br>detské<br>ústa<br>stuhnuté<br>do výkriku<br><br>5<br><br>Na ulici<br>sa za ňou otáčajú<br>tri slepé stareny<br><br>Má s nimi čosi spoločné<br>v bruškách prstov<br><br>Občas sa<br>náhlivo<br>obzrie<br><br>A rovnako ako dážď<br>ktorý<br>kráča po ceste<br>hrubými drevákmi<br><br>tak i ona<br><br>chodí medzi nás<br><br>s neumytou<br>farbou na očiach<br><br>a so všetkým<br>čo má vo svojom hlase<br><br>navyše<br></p>"
    }
  }
}
</i18n>

<script>
import Book from "@/components/Book.vue";
export default {
  components: {
    Book
  }
};
</script>

<style lang="scss" scoped>
</style>
