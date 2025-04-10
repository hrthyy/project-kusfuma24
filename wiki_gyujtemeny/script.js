const last_upd = "2025.04.10."

const LINKEK = [
    "https://hu.wikipedia.org/wiki/Sonk%C3%A1sszendvicst%C3%A9tel",
    "https://en.wikipedia.org/wiki/Cox%E2%80%93Zucker_machine",
    "https://hu.wikipedia.org/wiki/Hitlerszalonna",
    "https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Bacon_number",
    "https://hu.wikipedia.org/wiki/Vajasmacska-paradoxon",
    "https://hu.wikipedia.org/wiki/V%C3%A9gtelen_sok_majom_%C3%A9s_%C3%ADr%C3%B3g%C3%A9p_t%C3%A9tele",
    "https://hu.wikipedia.org/wiki/Raszputyin_p%C3%A9nisze",
    "https://hu.wikipedia.org/wiki/Csipker%C3%B3zsika-paradoxon",
    "https://hu.wikipedia.org/wiki/Sonic_hedgehog",
    "https://hu.wikipedia.org/wiki/Gravit%C3%A1ci%C3%B3s_domb",
    "https://hu.wikipedia.org/wiki/Kett%C5%91s_bet%C5%B1vel_egybees%C5%91_bet%C5%B1egy%C3%BCttest_tartalmaz%C3%B3_magyar_szavak_list%C3%A1ja",
    "https://hu.wikipedia.org/wiki/Fasz%C3%A9less%C3%A9g",
    "https://en.wikipedia.org/wiki/Thinking_about_the_immortality_of_the_crab",
    "https://en.wikipedia.org/wiki/Osama_bin_Laden_(elephant)",
    "https://hu.wikipedia.org/wiki/Lofat#A_n%C3%A9v",
    "https://en.wikipedia.org/wiki/Bayes%27_theorem#Interpretations",
    "https://en.wikipedia.org/wiki/Zenzizenzizenzic",
    "https://hu.wikipedia.org/wiki/Buffalo_buffalo_Buffalo_buffalo_buffalo_buffalo_Buffalo_buffalo",
    "https://hu.wikipedia.org/wiki/Strasbourgi_t%C3%A1ncm%C3%A1nia",
    "https://hu.wikipedia.org/wiki/Emuh%C3%A1bor%C3%BA",
    "https://hu.wikipedia.org/wiki/Fa,_ami_%C3%B6nmaga_tulajdona_(Georgia)",
    "https://hu.wikipedia.org/wiki/Babilonokia",
    "https://en.wikipedia.org/wiki/Big_Dumb_Object",
    "https://hu.wikipedia.org/wiki/Lopadotemakhoszelakhogaleokranioleipszanodrim%C3%BCpotrimmato%C2%ADszilphiokarabomelitokatakekh%C3%BCmenokikhlepikossz%C3%BCphophattoperiszter%C2%ADalektr%C3%BConoptokephalliokinklopeleiolag%C3%B3osziraiobaph%C3%A9%C2%ADtraganopter%C3%BCg%C3%B3n",
    "https://hu.wikipedia.org/wiki/Myrmotherula_longipennis",
    "https://hu.wikipedia.org/wiki/Sz%C3%A1znapos_toj%C3%A1s",
    "https://hu.wikipedia.org/wiki/Cukr%C3%A1szdah%C3%A1bor%C3%BA",
    "https://hu.wikipedia.org/wiki/Nyolckir%C3%A1lyn%C5%91-probl%C3%A9ma",
    "https://hu.wikipedia.org/wiki/Herny%C3%B3gr%C3%A1f",

]
const SZOVEG = [
    "Sonkásszendvicstétel",
    "Cox-Zucker machine",
    "Hitlerszalonna",
    "Erdős-Bacon number",
    "Vajasmacska-paradoxon",
    "Végtelen sok majom és írógép tétele",
    "Raszputyin pénisze",
    "Csipkerózsika-paradoxon",
    "Sonic hedgehog",
    "Gravitációs domb",
    "Kettős betűvel egybeeső betűegyüttest tartalmazó magyar szavak listája",
    "Faszélesség",
    "Thinking about the immortality of the crab",
    "Osama bin Laden (elephant)",
    "Lofat/név eredet",
    "Bayes' theorem/interpretations elso kep",
    "Zenzizenzizenzic",
    "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo",
    "Strasbourgi táncmánia",
    "Emuháború",
    "Fa, ami önmaga tulajdona",
    "Babilonokia",
    "Big Dumb Object",
    "Lopado...pterügón",
    "Myrmotherula longipennis",
    "Száznapos tojás",
    "Cukrászdaháború",
    "Nyolckirálynő-probléma",
    "Hernyógráf"
]

function load_text() {
    var new_line = ""
    for (i=0;i<SZOVEG.length;i++) {
        new_line = "<a href='"
        new_line += LINKEK[i]
        new_line += "'>"
        new_line += SZOVEG[i]
        new_line += "</a><br>"
        document.body.innerHTML += new_line
    }
    document.body.innerHTML += "<br><p>legutobbi frissites: " + last_upd + "</p><br>"
}
