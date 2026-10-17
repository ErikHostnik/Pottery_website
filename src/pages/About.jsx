import aboutPhoto from '../assets/real/MicaStudio.JPG'
import ScrollReveal from '../components/ScrollReveal'
import './About.css'

export default function About() {
  return (
    <section className="about-page">
      <ScrollReveal className="about-hero">
        <h2 className="about-title">O meni</h2>
        <p className="about-subtitle">
          MICA studio – prostor, kjer se srečata glina in ustvarjalnost
        </p>
      </ScrollReveal>

      <div className="about-content">
        <ScrollReveal className="about-intro">
          <div className="about-photo-wrapper">
            <img
              src={aboutPhoto}
              alt="Mojca – MICA studio"
              className="about-photo"
            />
          </div>
          <div className="about-intro-text">
            <div className="about-section">
              <h3>Moja zgodba</h3>
              <p>
                Glina me spremlja že od študijskih let. Kot geologinjo me je med vsem »kamenjem« najbolj pritegnila prav glina. Že takrat sem jo raziskovala, pravo priložnost pa sem ji dala šele pred nekaj leti – predvsem pa sem jo takrat dala sebi.
              </p>
              <p>
                Prve učne ure in prvi tečaj sem obiskovala skupaj s hčerko Ano Mio. To so bili eni mojih najlepših trenutkov – čas, preživet s hčerko, in hkrati nekaj, kar naju je obe veselilo in izpolnjevalo. Po prvem tečaju je sledil drugi, tretji,… nato samostojno oblikovanje in ustvarjanje. Danes se mi pri ustvarjanju pogosto pridruži moja »mala« vajenka, nečakinja Lora.
              </p>
              <p>
                Glina je danes moj ustvarjalni prostor, pa tudi moj odmik, meditacija in sprostitev. V domači delavnici MICA studia nastaja ročno izdelana keramika, pri kateri me zanimajo predvsem preprostost, naravne oblike, površine in barve. Vsak kos nastaja počasi, po svoje, z veliko ljubezni in predanosti.
              </p>
              <p>
                V delavnici čas teče nekoliko drugače. Ure se spremenijo v minute, v ustvarjanju pa najdem mir, tišino in ravnovesje. Morda se prav to na svoj način odraža tudi v izdelkih.
              </p>
              <p>
                MICA studio, to sem jaz Mojca – in moja zgodba, zgodba z glino.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="about-section">
          <h3>Od gline do izdelka</h3>
          <p>
            Pri ustvarjanju uporabljam gline za visokotemperaturno žganje, ki jih oblikujem ročno – z valjanjem, ščipanjem in gradnjo iz glinenih plošč. Iz mehke gline tako počasi nastajajo različne oblike in izdelki, vsak s svojim značajem.
          </p>
          <p>
            Ko je oblikovanje končano, sledi sušenje, ki zahteva čas in potrpežljivost. Popolnoma suh izdelek je nato pripravljen na prvo, biskvitno žganje, pri katerem glina postane trdna in pripravljena na glaziranje. Po prvem žganju sledi glaziranje in nato še drugo žganje, po katerem izdelek dobi svojo končno trdnost in videz.
          </p>
          <p>
            Od prvega dotika gline do končnega izdelka je zato dolga pot. Oblikovanje, sušenje, žganje, glaziranje – vsak korak prinese nekaj novega in včasih tudi kakšno presenečenje. Prav ta proces me najbolj navdušuje: iz mehke in občutljive gline postopoma nastane nekaj trdnega, uporabnega in povsem svojega.
          </p>
          <p>
            In če lahko takšen kos s svojo obliko, barvo ali zgodbo polepša še vaš dom in vam pričara majhen trenutek veselja, je moja pot z glino še toliko lepša.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
