import Stone1 from '../assets/collections/MicaStudio_sopek_IMG_8879_3.JPG'
import Nature1 from '../assets/collections/MicaStudio107_IMG_7726.JPG'
import Asymmetrical1 from '../assets/collections/MicaStudio121_IMG_7771.JPG'
import MicaStudio201 from '../assets/collections/MicaStudio201_IMG_7815.JPG'
import stone1 from '../assets/Pottery/STONE/globoka skleda.JPG'
import stone2 from '../assets/Pottery/STONE/KROZNIKI.JPG'
import stone3 from '../assets/Pottery/STONE/KROZNIKI_.JPG'
import stone4 from '../assets/Pottery/STONE/K_rozniki.JPG'
import stone5 from '../assets/Pottery/STONE/mali in veliki pekac.jpg'
import stone6 from '../assets/Pottery/STONE/pekac_cajnik_posoda za olive.JPG'
import stone7 from '../assets/Pottery/STONE/VAZE.JPG'
import stone8 from '../assets/Pottery/STONE/VAZE_.JPG'
import stoneNoir1 from '../assets/Pottery/STONE_NOIR/1_STONE NOIR.jpg'
import stoneNoir2 from '../assets/Pottery/STONE_NOIR/vaza STONE NOIR 1.jpg'
import stoneNoir3 from '../assets/Pottery/STONE_NOIR/vaaza sTONE NOIR 1a.jpg'
import stoneNoir4 from '../assets/Pottery/STONE_NOIR/vaza STONE NOIR_b.jpg'
import stoneNoir5 from '../assets/Pottery/STONE_NOIR/vaza STONE NOIR_a.jpg'
import verde1 from '../assets/Pottery/NATURE_VERDE/NATURE VERDE_posodice1.jpg'
import verde2 from '../assets/Pottery/NATURE_VERDE/NATURE VERDE.jpg'
import verde3 from '../assets/Pottery/NATURE_VERDE/NATURE VERDE_vrc1.jpg'
import verde4 from '../assets/Pottery/NATURE_VERDE/vaza velika_vazi mali_rozice.jpg'
import verde5 from '../assets/Pottery/NATURE_VERDE/vaza velika_rozice.jpg'
import verde6 from '../assets/Pottery/NATURE_VERDE/vrc_krocnicek in loncek za kavo_rozice.jpg'
import oak1 from '../assets/Pottery/NATURE_OAK/kroznicek in loncek za kavo.jpg'
import oak2 from '../assets/Pottery/NATURE_OAK/kroznicek in loncek za kavo_.jpg'
import oak3 from '../assets/Pottery/NATURE_OAK/kroznicek in_loncek za kavo.jpg'
import oak4 from '../assets/Pottery/NATURE_OAK/kroznicek_in loncek za kavo.jpg'
import oak5 from '../assets/Pottery/NATURE_OAK/MicaSAtudio3_IMG_9936.JPG'
import fern1 from '../assets/Pottery/NATURE_FERN/kroznik_veliki.JPG'
import fern2 from '../assets/Pottery/NATURE_FERN/MicaStudio103_IMG_7704.JPG'
import fern3 from '../assets/Pottery/NATURE_FERN/pladenj in krozniki.jpg'
import fern4 from '../assets/Pottery/NATURE_FERN/pladenj_krozniki.jpg'
import asym1 from '../assets/Pottery/A_SYMMETRICAL/SKLEDA.JPG'
import asym2 from '../assets/Pottery/A_SYMMETRICAL/SKLEDA_.JPG'
import asym3 from '../assets/Pottery/A_SYMMETRICAL/SKLEDA_s skledicami.JPG'
import asym4 from '../assets/Pottery/A_SYMMETRICAL/SKLEDA_KROZNICEK.JPG'
import asym5 from '../assets/Pottery/A_SYMMETRICAL/POSODA ZA OLIVE_SKLEDA.JPG'
import asym6 from '../assets/Pottery/A_SYMMETRICAL/SKLEDA_loncek.JPG'
import asym7 from '../assets/Pottery/A_SYMMETRICAL/A_SYMMETRICAL_3.jpg'
import asym8 from '../assets/Pottery/A_SYMMETRICAL/VAZA.JPG'

// `group` = section heading on the home page; `price` optional (shows N/A)
export const collections = [
  {
    id: 'stone',
    name: 'STONE',
    group: 'STONE',
    description:
      'Navdih za kolekcijo STONE črpam iz kamnin – njihove strukture, površine in naravnih oblik. Izdelki so ročno oblikovani iz valjane šamotirane gline, v kateri drobna zrna ustvarjajo značilno, rahlo hrapavo teksturo. Vsak kos je žgan pri 1245 °C, kar mu daje trdnost in obstojnost, hkrati pa ohranja občutek prijetne topline dotika. Kolekcija STONE zrcali eleganco kamnin – hladna na pogled, a topla v svoji pripovedi.',
    image: Stone1,
    items: [
      { id: 1, name: 'Globoka skleda', inStock: true, images: [stone1] },
      { id: 2, name: 'Krožniki', inStock: true, images: [stone2, stone3, stone4] },
      { id: 3, name: 'Mali in veliki pekač', inStock: true, images: [stone5] },
      { id: 4, name: 'Pekač, čajnik in posoda za olive', inStock: true, images: [stone6] },
      { id: 5, name: 'Vaze', inStock: true, images: [stone7, stone8, Stone1] },
    ],
  },
  {
    id: 'stone-noir',
    name: 'STONE NOIR',
    group: 'STONE',
    description:
      'Navdih za kolekcijo STONE črpam iz kamnin – njihove strukture, površine in naravnih oblik. Izdelki so ročno oblikovani iz valjane šamotirane gline, v kateri drobna zrna ustvarjajo značilno, rahlo hrapavo teksturo. Vsak kos je žgan pri 1245 °C, kar mu daje trdnost in obstojnost, hkrati pa ohranja občutek prijetne topline dotika. Kolekcija STONE zrcali eleganco kamnin – hladna na pogled, a topla v svoji pripovedi.',
    image: stoneNoir1,
    items: [
      { id: 6, name: 'Okrogla vaza', inStock: true, images: [stoneNoir1, stoneNoir2, stoneNoir3] },
      { id: 7, name: 'Kvadratna vaza', inStock: true, images: [stoneNoir4, stoneNoir5] },
    ],
  },
  {
    id: 'nature-verde',
    name: 'NATURE VERDE',
    group: 'NATURE',
    description:
      'Kolekcija NATURE je poklon naravi – predvsem gozdu, kjer se prepletajo mir, toplina in umirjenost. Na izdelkih se pojavljata motiva praproti in hrasta. Praprot simbolizira nežno moč rasti in vztrajnosti, hrast pa trdnost in moč narave. Zeleno barvo sem izbrala kot odsev gozda – njegove globine, miru in tišine. V njej je nekaj umirjenega, skoraj meditativnega. Izdelki, žgani pri 1245 °C, so namenjeni vsakodnevni uporabi, hkrati pa v svoj prostor prinašajo košček narave in občutek povezanosti z njo. Kolekcija NATURE je povabilo k trenutku miru, preprostosti in stiku z naravo.',
    image: verde1,
    items: [
      { id: 8, name: 'Posodice', inStock: true, images: [verde1, verde2] },
      { id: 9, name: 'Vrč', inStock: true, images: [verde3] },
      { id: 10, name: 'Velika in mali vazi', inStock: true, images: [verde4, verde5] },
      { id: 11, name: 'Vrč, krožniček in lonček za kavo', inStock: true, images: [verde6] },
    ],
  },
  {
    id: 'nature-oak',
    name: 'NATURE OAK',
    group: 'NATURE',
    description:
      'Kolekcija NATURE je poklon naravi – predvsem gozdu, kjer se prepletajo mir, toplina in umirjenost. Na izdelkih se pojavljata motiva praproti in hrasta. Praprot simbolizira nežno moč rasti in vztrajnosti, hrast pa trdnost in moč narave. Zeleno barvo sem izbrala kot odsev gozda – njegove globine, miru in tišine. V njej je nekaj umirjenega, skoraj meditativnega. Izdelki, žgani pri 1245 °C, so namenjeni vsakodnevni uporabi, hkrati pa v svoj prostor prinašajo košček narave in občutek povezanosti z njo. Kolekcija NATURE je povabilo k trenutku miru, preprostosti in stiku z naravo.',
    image: oak1,
    items: [
      { id: 12, name: 'Krožniček in lonček za kavo', inStock: true, images: [oak1, oak2, oak3, oak4] },
      { id: 13, name: 'Vaza in listki', inStock: true, images: [oak5] },
    ],
  },
  {
    id: 'nature-fern',
    name: 'NATURE FERN',
    group: 'NATURE',
    description:
      'Kolekcija NATURE je poklon naravi – predvsem gozdu, kjer se prepletajo mir, toplina in umirjenost. Na izdelkih se pojavljata motiva praproti in hrasta. Praprot simbolizira nežno moč rasti in vztrajnosti, hrast pa trdnost in moč narave. Zeleno barvo sem izbrala kot odsev gozda – njegove globine, miru in tišine. V njej je nekaj umirjenega, skoraj meditativnega. Izdelki, žgani pri 1245 °C, so namenjeni vsakodnevni uporabi, hkrati pa v svoj prostor prinašajo košček narave in občutek povezanosti z njo. Kolekcija NATURE je povabilo k trenutku miru, preprostosti in stiku z naravo.',
    image: Nature1,
    items: [
      { id: 14, name: 'Velik krožnik', inStock: true, images: [fern1] },
      { id: 15, name: 'Pladenj in skledice', inStock: true, images: [fern2, Nature1] },
      { id: 16, name: 'Pladenj in krožniki', inStock: true, images: [fern3, fern4] },
    ],
  },
  {
    id: 'a-symmetrical',
    name: 'A-SYMMETRICAL',
    group: 'A-SYMMETRICAL',
    description:
      'Kolekcija A-SYMMETRICAL se igra z ravnotežjem med redom in nepravilnostjo. Navdihuje jo narava, kjer se pravilnost in nepopolnost ves čas prepletata in ustvarjata svoj naravni red. Izdelki, žgani pri 1245 °C, nastajajo iz jasnih in urejenih oblik, ki jim asimetrija prinaša igrivost, dinamiko in svojstven značaj. A-SYMMETRICAL – kolekcija, ki išče lepoto v nepopolnosti.',
    image: Asymmetrical1,
    items: [
      { id: 17, name: 'Skleda', inStock: false, images: [asym1, asym2] },
      { id: 18, name: 'Skleda s skledicami', inStock: false, images: [asym3] },
      { id: 19, name: 'Skleda in krožniček', inStock: false, images: [asym4] },
      { id: 20, name: 'Posoda za olive in skleda', inStock: false, images: [asym5, MicaStudio201] },
      { id: 21, name: 'Skleda in lonček', inStock: false, images: [asym6] },
      { id: 22, name: 'Posoda za olive in skleda (lila)', inStock: false, images: [asym7] },
      { id: 23, name: 'Vaza', inStock: false, images: [asym8, Asymmetrical1] },
    ],
  },
];
