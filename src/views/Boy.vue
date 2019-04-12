<template>
  <Book
    :title="$t('book.title')"
    year="2005"
    cover="/assets/img/covers/boy_cover.png"
    pdf="/assets/download/radoslav_tomas_chlapec.pdf"
    :desc="$t('book.desc')"
    :info="$t('book.info')"
    :poems="$t('book.poems')"
  />
</template>

<i18n>
{
  "en": {
    "book": {
      "title": "A Boy",
      "desc": "My first book which I wrote when I was 17-18 years old. It received literary prize for first-published poets in Slovakia – the Ivan Krasko Prize. Personally, I would now hesitate to put some of the poems into the book, yet I still appreciate its nostalgic simplicity. I enjoy coming back to it, as it hides many stories from my childhood and first joys from poetic discovery of the world.",
      "info": "Publishing house: Vydavateľstvo Spolku slovenských spisovateľov, Bratislava, 2005. Illustrations Kamila Bíziková. Paperback, 56 pages, ISBN 8080612188.",
      "poems": "<strong>motýľ</strong><br><br><p>potichu položíš na stôl<br>nôž plný slnka<br><br>voda zrazu zosladla<br>v broskyňovom svetle<br>stíchol vlk<br><br>aj rozcítené husle zaspávajú<br><br>starci pod zelenou jabloňou<br>ťa kreslia<br>v horúcej sline<br><br>a za hlinenou dedinou<br>prechádza sa<br>spolu s vetrom<br>pšeničný kristus<br></p><br><br><strong>plachosť</strong><br><br><p>zo stola vzala jablko<br>a prudko doň zahryzla<br><br>má presne také prsia<br>spievajú ako kohút<br><br>je nahá<br>a voňavá ako sviatočná<br>košeľa<br><br>do rúk ti spadnú jej vlasy<br>celkom plaché od dažďa<br></p><br><br><strong>pod srdcom</strong><br><br><p>ticho vrastá do dlážky<br>v izbe je tma<br>a jesenná slávnosť<br><br>ďaleko od nás znejú hrany<br>dedinského kostola<br>v šálke práve zaspal<br>jej posledný horúci výdych<br><br>teraz len tak vyzlečená leží<br>jemne ako svetlo<br><br>a niekde pod srdcom<br>jej rozkvitajú ľalie<br>alebo iné bijúce zvony<br></p><br><br><strong>večer</strong><br><br>1<br><br><p>krajina si tají pod šatami<br>dych<br>večer sa zlieva<br>do svetlého hrnčeka<br><br>v očiach trasú sa jej<br>sny<br>jablko na stole planie<br><br>s tušením smútku<br>v sebe<br>je studené a ľahké<br><br></p>2<br><br><p>potichu ale ako čisto<br>nadväzuješ<br>na bolesť<br><br>dážď dvíha svoje ťažké ruky<br>dopichané svetlými<br>ihlami<br></p><br><br><strong>doma</strong><br>(mame)<br><br><p>ťažké nahé ruky<br>spadnú jej na kolená<br><br>v očiach je zasnívaná<br>ako sneh za oknom<br><br>akoby chcela odletieť<br><br>v kuchyni je ticho a hlboko<br>voda v pohári voňavá<br>a hrubá<br><br>je sama a často si hovorí<br>krásne príbehy<br><br>ale keď prídem<br>len tak sedí nič nepovie<br>počúva<br></p><br><br>"
    }
  },
  "sk": {
    "book": {
      "title": "Chlapec",
      "desc": "Moja prvá kniha, ktorú som napísal ako 17 až 18-ročný. Získala Cenu Ivana Kraska za najlepší debut roka. Osobne by som dnes už niektoré z básní do knihy nezaradil, mám ale veľmi rád nostalgickú naivitu, ktorá v nich je. A vždy sa k nim rád vrátim. Je v nich veľa môjho detstva a radosti z objavovania sveta.",
      "info": "Vydavateľstvo Spolku slovenských spisovateľov, Bratislava. Rok vydania 2005. Ilustrácie Kamila Bíziková. Brožovaná väzba, 56 strán, ISBN 8080612188.",
      "poems": "<strong>motýľ</strong><br><br><p>potichu položíš na stôl<br>nôž plný slnka<br><br>voda zrazu zosladla<br>v broskyňovom svetle<br>stíchol vlk<br><br>aj rozcítené husle zaspávajú<br><br>starci pod zelenou jabloňou<br>ťa kreslia<br>v horúcej sline<br><br>a za hlinenou dedinou<br>prechádza sa<br>spolu s vetrom<br>pšeničný kristus<br></p><br><br><strong>plachosť</strong><br><br><p>zo stola vzala jablko<br>a prudko doň zahryzla<br><br>má presne také prsia<br>spievajú ako kohút<br><br>je nahá<br>a voňavá ako sviatočná<br>košeľa<br><br>do rúk ti spadnú jej vlasy<br>celkom plaché od dažďa<br></p><br><br><strong>pod srdcom</strong><br><br><p>ticho vrastá do dlážky<br>v izbe je tma<br>a jesenná slávnosť<br><br>ďaleko od nás znejú hrany<br>dedinského kostola<br>v šálke práve zaspal<br>jej posledný horúci výdych<br><br>teraz len tak vyzlečená leží<br>jemne ako svetlo<br><br>a niekde pod srdcom<br>jej rozkvitajú ľalie<br>alebo iné bijúce zvony<br></p><br><br><strong>večer</strong><br><br>1<br><br><p>krajina si tají pod šatami<br>dych<br>večer sa zlieva<br>do svetlého hrnčeka<br><br>v očiach trasú sa jej<br>sny<br>jablko na stole planie<br><br>s tušením smútku<br>v sebe<br>je studené a ľahké<br><br></p>2<br><br><p>potichu ale ako čisto<br>nadväzuješ<br>na bolesť<br><br>dážď dvíha svoje ťažké ruky<br>dopichané svetlými<br>ihlami<br></p><br><br><strong>doma</strong><br>(mame)<br><br><p>ťažké nahé ruky<br>spadnú jej na kolená<br><br>v očiach je zasnívaná<br>ako sneh za oknom<br><br>akoby chcela odletieť<br><br>v kuchyni je ticho a hlboko<br>voda v pohári voňavá<br>a hrubá<br><br>je sama a často si hovorí<br>krásne príbehy<br><br>ale keď prídem<br>len tak sedí nič nepovie<br>počúva<br></p><br><br>"
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
