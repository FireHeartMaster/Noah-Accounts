import {
  GlobeEntry,
  GlobeEntryTranslation,
  SupportedLocale,
} from "@/types/globe";
import { batch02Translations } from "@/data/entry-translations-batch-02";
import { batch03Translations } from "@/data/entry-translations-batch-03";
import { batch04Translations } from "@/data/entry-translations-batch-04";
import { batch05Translations } from "@/data/entry-translations-batch-05";
import { batch06Translations } from "@/data/entry-translations-batch-06";
import { batch07Translations } from "@/data/entry-translations-batch-07";
import { batch08Translations } from "@/data/entry-translations-batch-08";
import { batch09Translations } from "@/data/entry-translations-batch-09";
import { batch02DetailTranslations } from "@/data/entry-translation-details-batch-02";
import { batch03DetailTranslations } from "@/data/entry-translation-details-batch-03";
import { batch04DetailTranslations } from "@/data/entry-translation-details-batch-04";
import { batch05DetailTranslations } from "@/data/entry-translation-details-batch-05";

// Verified global flood-myth dataset.
// Top-level subtitle and text are short UI summaries.
// Full subtitle/classification and narrative text remain in details.classification and details.narrative.
// Coordinates are approximate map markers from the research notes, not precise archaeological proveniences unless stated.

type EntryTranslationMap = Record<
  string,
  Partial<Record<SupportedLocale, Partial<GlobeEntryTranslation>>>
>;

function mergeTranslationMaps(...maps: EntryTranslationMap[]) {
  const merged: EntryTranslationMap = {};

  for (const map of maps) {
    for (const [entryId, locales] of Object.entries(map)) {
      merged[entryId] ??= {};

      for (const [locale, translation] of Object.entries(locales) as Array<
        [SupportedLocale, Partial<GlobeEntryTranslation>]
      >) {
        const existing = merged[entryId][locale];

        merged[entryId][locale] = {
          ...existing,
          ...translation,
          details:
            existing?.details || translation.details
              ? {
                  ...existing?.details,
                  ...translation.details,
                }
              : undefined,
        };
      }
    }
  }

  return merged;
}

const entryTranslations: EntryTranslationMap = mergeTranslationMaps({
  ...batch09Translations,
  ...batch08Translations,
  ...batch07Translations,
  ...batch06Translations,
  ...batch05Translations,
  ...batch04Translations,
  ...batch03Translations,
  ...batch02Translations,
  "myth-001-atrahasis": {
    "es": {
      "title": "1. Atrahasis",
      "subtitle": "Mesopotamia acadia paleobabilónica",
      "text": "Los dioses deciden destruir a la humanidad porque el ruido humano perturba el mundo divino.",
      "date": "La recensión paleobabilónica más completa suele fecharse en el reinado de Ammi-saduqa, aproximadamente en el siglo XVII a. C.; los fragmentos conservados pertenecen al período paleobabilónico.",
      "details": {
        "classification": "Mesopotamia acadia paleobabilónica.",
        "geographicLocation": "Sur de la antigua Mesopotamia, en el aluvión del Tigris y el Éufrates; actual Irak. El marcador más útil es Tell Fara, la antigua Shuruppak, ciudad estrechamente asociada con las tradiciones del héroe del diluvio, aunque el texto de Atrahasis circuló de forma más amplia en Babilonia.",
        "mapPlacement": "Aprox. 31.78 N, 45.50 E.",
        "narrative": "Los dioses deciden destruir a la humanidad porque su ruido perturba el orden divino. Enki/Ea advierte en secreto a Atrahasis y le ordena construir una embarcación. Atrahasis sube a bordo con su casa y provisiones, llega el diluvio y sobrevive. Después, los dioses lamentan la destrucción porque ya no reciben ofrendas ni trabajo humano. El relato incluye advertencia divina, nave construida expresamente, supervivientes escogidos, preservación de la vida, inundación catastrófica y reorganización posterior.",
        "chronology": "La recensión paleobabilónica más completa suele fecharse en el reinado de Ammi-saduqa, aproximadamente en el siglo XVII a. C.; los fragmentos conservados pertenecen al período paleobabilónico.",
        "evidence": "Los estudios arqueológicos suelen comparar el relato con depósitos de inundación en sitios del sur mesopotámico como Ur, Kish y Shuruppak. La evidencia no demuestra un único diluvio mesopotámico ni global sincrónico. Algunos especialistas consideran plausible una gran inundación regional de comienzos del III milenio a. C., especialmente en torno a Kish y Shuruppak, como trasfondo de la memoria literaria, aunque sigue siendo una inferencia discutida."
      }
    },
    "pt-BR": {
      "title": "1. Atrahasis",
      "subtitle": "Mesopotâmia acádia paleobabilônica",
      "text": "Os deuses decidem destruir a humanidade porque o barulho humano perturba o mundo divino.",
      "date": "A recensão paleobabilônica mais completa costuma ser datada do reinado de Ammi-saduqa, aproximadamente no século XVII a.C.; os fragmentos preservados pertencem ao período paleobabilônico.",
      "details": {
        "classification": "Mesopotâmia acádia paleobabilônica.",
        "geographicLocation": "Sul da antiga Mesopotâmia, na planície aluvial do Tigre e do Eufrates; atual Iraque. O marcador mais útil é Tell Fara, a antiga Shuruppak, cidade estreitamente associada às tradições do herói do dilúvio, embora o texto de Atrahasis tenha circulado de modo mais amplo na Babilônia.",
        "mapPlacement": "Aprox. 31.78 N, 45.50 E.",
        "narrative": "Os deuses decidem destruir a humanidade porque seu ruído perturba a ordem divina. Enki/Ea avisa Atrahasis secretamente e manda que ele construa uma embarcação. Atrahasis embarca com sua casa e provisões, o dilúvio vem e ele sobrevive. Depois, os deuses lamentam o extermínio porque ficaram sem oferendas e sem trabalho humano. A narrativa inclui aviso divino, embarcação construída de propósito, sobreviventes escolhidos, preservação da vida, inundação catastrófica e reorganização pós-diluviana.",
        "chronology": "A recensão paleobabilônica mais completa costuma ser datada do reinado de Ammi-saduqa, aproximadamente no século XVII a.C.; os fragmentos preservados pertencem ao período paleobabilônico.",
        "evidence": "Discussões arqueológicas comparam com frequência esse relato a depósitos de inundação em sítios mesopotâmicos do sul, como Ur, Kish e Shuruppak. A evidência não demonstra um único dilúvio mesopotâmico nem global e sincrônico. Alguns estudiosos consideram plausível uma grande inundação regional no início do III milênio a.C., sobretudo em torno de Kish e Shuruppak, como pano de fundo para a memória literária, mas isso continua sendo debatido."
      }
    },
    "it": {
      "title": "1. Atrahasis",
      "subtitle": "Mesopotamia accadica paleobabilonese",
      "text": "Gli dèi decidono di distruggere l'umanità perché il rumore degli uomini disturba il mondo divino.",
      "date": "La recensione paleobabilonese più completa è di solito datata al regno di Ammi-saduqa, circa XVII secolo a.C.; i frammenti conservati appartengono al periodo paleobabilonese.",
      "details": {
        "classification": "Mesopotamia accadica paleobabilonese.",
        "geographicLocation": "Mesopotamia meridionale antica, nell'alluvione del Tigri e dell'Eufrate; attuale Iraq. Il marcatore più utile è Tell Fara, l'antica Shuruppak, città strettamente associata alle tradizioni dell'eroe del diluvio, anche se il testo di Atrahasis circolò più ampiamente in Babilonia.",
        "mapPlacement": "Circa 31.78 N, 45.50 E.",
        "narrative": "Gli dèi decidono di distruggere l'umanità perché il suo rumore sconvolge l'ordine divino. Enki/Ea avverte di nascosto Atrahasis e gli ordina di costruire un'imbarcazione. Atrahasis sale a bordo con la sua casa e le provviste, arriva il diluvio e sopravvive. In seguito gli dèi si pentono dello sterminio perché non ricevono più offerte né lavoro umano. Il racconto comprende avvertimento divino, nave costruita appositamente, sopravvissuti scelti, conservazione della vita, inondazione catastrofica e riordino dopo il diluvio.",
        "chronology": "La recensione paleobabilonese più completa è di solito datata al regno di Ammi-saduqa, circa XVII secolo a.C.; i frammenti conservati appartengono al periodo paleobabilonese.",
        "evidence": "Le discussioni archeologiche confrontano spesso il racconto con depositi di piena in siti mesopotamici meridionali come Ur, Kish e Shuruppak. Le prove non mostrano un unico diluvio mesopotamico o globale sincrono. Alcuni studiosi ritengono plausibile una grave piena regionale all'inizio del III millennio a.C., soprattutto attorno a Kish e Shuruppak, come possibile sfondo della memoria letteraria, ma l'ipotesi resta dibattuta."
      }
    },
    "fr": {
      "title": "1. Atrahasis",
      "subtitle": "Mésopotamie akkadienne paléo-babylonienne",
      "text": "Les dieux décident d'anéantir l'humanité parce que le bruit des hommes trouble le monde divin.",
      "date": "La recension paléo-babylonienne la plus complète est généralement datée du règne d'Ammi-saduqa, vers le XVIIe siècle av. J.-C. ; les fragments conservés appartiennent à la période paléo-babylonienne.",
      "details": {
        "classification": "Mésopotamie akkadienne paléo-babylonienne.",
        "geographicLocation": "Sud de l'ancienne Mésopotamie, dans l'alluvion du Tigre et de l'Euphrate ; Irak actuel. Le marqueur le plus utile est Tell Fara, l'ancienne Shuruppak, ville étroitement liée aux traditions du héros du déluge, même si le texte d'Atrahasis circulait plus largement en Babylonie.",
        "mapPlacement": "Env. 31.78 N, 45.50 E.",
        "narrative": "Les dieux décident d'anéantir l'humanité parce que son vacarme dérange l'ordre divin. Enki/Ea avertit secrètement Atrahasis et lui ordonne de construire un bateau. Atrahasis embarque avec sa maisonnée et des provisions, le déluge survient et il survit. Ensuite, les dieux regrettent l'extermination parce qu'ils n'ont plus d'offrandes ni de travail humain. Le récit comprend un avertissement divin, une embarcation construite pour l'occasion, des survivants choisis, la préservation de la vie, une inondation catastrophique et une réorganisation après le déluge.",
        "chronology": "La recension paléo-babylonienne la plus complète est généralement datée du règne d'Ammi-saduqa, vers le XVIIe siècle av. J.-C. ; les fragments conservés appartiennent à la période paléo-babylonienne.",
        "evidence": "Les discussions archéologiques comparent souvent ce récit à des dépôts de crue sur des sites mésopotamiens du sud comme Ur, Kish et Shuruppak. Les preuves ne démontrent ni un déluge mésopotamien unique ni un déluge mondial synchrone. Certains chercheurs jugent plausible une crue régionale majeure au début du IIIe millénaire av. J.-C., surtout autour de Kish et Shuruppak, comme arrière-plan possible de la mémoire littéraire, mais cette interprétation reste débattue."
      }
    },
    "nl": {
      "title": "1. Atrahasis",
      "subtitle": "Oud-Babylonisch Akkadisch Mesopotamië",
      "text": "De goden besluiten de mensheid te vernietigen omdat menselijk lawaai de goddelijke wereld verstoort.",
      "date": "De volledigste Oud-Babylonische versie wordt gewoonlijk gedateerd in de regering van Ammi-saduqa, ruwweg de zeventiende eeuw v.Chr.; de bewaarde fragmenten behoren tot de Oud-Babylonische periode.",
      "details": {
        "classification": "Oud-Babylonisch Akkadisch Mesopotamië.",
        "geographicLocation": "Zuidelijk oud Mesopotamië in het alluviale gebied van de Tigris en de Eufraat; het huidige Irak. De bruikbaarste marker is Tell Fara, het oude Shuruppak, een stad die nauw verbonden is met tradities rond de vloedheld, ook al circuleerde de Atrahasis-tekst breder in Babylonië.",
        "mapPlacement": "Ca. 31.78 N, 45.50 E.",
        "narrative": "De goden besluiten de mensheid te vernietigen omdat haar rumoer de goddelijke orde verstoort. Enki/Ea waarschuwt Atrahasis heimelijk en draagt hem op een boot te bouwen. Atrahasis gaat aan boord met zijn huisgenoten en voorraden, de vloed komt en hij overleeft. Daarna betreuren de goden de uitroeiing omdat zij geen offers en menselijke arbeid meer ontvangen. Het verhaal bevat een goddelijke waarschuwing, een speciaal gebouwd vaartuig, uitverkoren overlevenden, behoud van leven, een catastrofale overstroming en herordening na de vloed.",
        "chronology": "De volledigste Oud-Babylonische versie wordt gewoonlijk gedateerd in de regering van Ammi-saduqa, ruwweg de zeventiende eeuw v.Chr.; de bewaarde fragmenten behoren tot de Oud-Babylonische periode.",
        "evidence": "Archeologische discussies vergelijken dit verhaal vaak met overstromingslagen op zuid-Mesopotamische sites zoals Ur, Kish en Shuruppak. Het bewijs toont geen enkele synchrone Mesopotamische of wereldwijde vloed aan. Sommige onderzoekers achten een grote regionale rivieroverstroming aan het begin van het derde millennium v.Chr., vooral rond Kish en Shuruppak, aannemelijk als achtergrond voor latere literaire herinnering, maar dat blijft omstreden."
      }
    },
    "de": {
      "title": "1. Atrahasis",
      "subtitle": "Altbabylonisches akkadisches Mesopotamien",
      "text": "Die Götter beschließen, die Menschheit zu vernichten, weil menschlicher Lärm die göttliche Welt stört.",
      "date": "Die vollständigste altbabylonische Fassung wird gewöhnlich in die Regierungszeit Ammi-saduqas, also ungefähr ins 17. Jahrhundert v. Chr., datiert; die erhaltenen Fragmente gehören in die altbabylonische Zeit.",
      "details": {
        "classification": "Altbabylonisches akkadisches Mesopotamien.",
        "geographicLocation": "Südliches altes Mesopotamien im Schwemmland von Tigris und Euphrat; heutiger Irak. Der nützlichste Marker ist Tell Fara, das antike Shuruppak, eine Stadt, die eng mit den Traditionen des Fluthelden verbunden ist, auch wenn der Atrahasis-Text weiter in Babylonien zirkulierte.",
        "mapPlacement": "Ca. 31.78 N, 45.50 E.",
        "narrative": "Die Götter beschließen, die Menschheit zu vernichten, weil ihr Lärm die göttliche Ordnung stört. Enki/Ea warnt Atrahasis heimlich und befiehlt ihm, ein Boot zu bauen. Atrahasis geht mit seinem Haushalt und Vorräten an Bord, die Flut kommt, und er überlebt. Danach bereuen die Götter die Auslöschung, weil ihnen menschliche Opfergaben und Arbeit fehlen. Die Erzählung enthält göttliche Warnung, ein eigens gebautes Schiff, auserwählte Überlebende, Bewahrung des Lebens, eine katastrophale Überschwemmung und eine Neuordnung nach der Flut.",
        "chronology": "Die vollständigste altbabylonische Fassung wird gewöhnlich in die Regierungszeit Ammi-saduqas, also ungefähr ins 17. Jahrhundert v. Chr., datiert; die erhaltenen Fragmente gehören in die altbabylonische Zeit.",
        "evidence": "Archäologische Diskussionen vergleichen die Erzählung häufig mit Flutablagerungen an südmesopotamischen Orten wie Ur, Kish und Shuruppak. Die Evidenz zeigt weder eine einzige synchrone mesopotamische noch eine globale Flut. Manche Forschende halten eine schwere regionale Flussüberschwemmung zu Beginn des 3. Jahrtausends v. Chr., besonders um Kish und Shuruppak, für einen plausiblen Hintergrund späterer literarischer Erinnerung, doch das bleibt umstritten."
      }
    },
    "ja": {
      "title": "1. アトラハシス",
      "subtitle": "古バビロニア時代のアッカド語メソポタミア",
      "text": "人間の騒がしさが神々の世界を乱すため、神々は人類を滅ぼそうと決める。",
      "date": "最も完全な古バビロニア版は通常、アミ・サドゥカ王の治世、すなわち紀元前17世紀ごろに年代づけられ、現存断片は古バビロニア時代に属する。",
      "details": {
        "classification": "古バビロニア時代のアッカド語メソポタミア。",
        "geographicLocation": "ティグリス川・ユーフラテス川沖積地にある古代南メソポタミア、現在のイラク。最も有用な地図上の指標は古代シュルッパクにあたるテル・ファラで、この都市は洪水英雄の伝承と強く結び付いている。ただしアトラハシス本文自体はバビロニア全域でより広く流通していた。",
        "mapPlacement": "北緯31.78度、東経45.50度付近。",
        "narrative": "人間の騒音が神々の秩序を乱すため、神々は人類を滅ぼそうと決める。エンキ／エアは密かにアトラハシスへ警告し、船を造るよう命じる。アトラハシスは家族と食糧を載せて乗り込み、大洪水が来るが生き延びる。その後、神々は供物と人間の労働を失ったことを悔やむ。物語には神の警告、特別に造られた船、選ばれた生存者、生命の保存、壊滅的な洪水、そして洪水後の再編成が含まれる。",
        "chronology": "最も完全な古バビロニア版は通常、アミ・サドゥカ王の治世、すなわち紀元前17世紀ごろに年代づけられ、現存断片は古バビロニア時代に属する。",
        "evidence": "考古学的議論では、この物語はしばしばウル、キシュ、シュルッパクなど南メソポタミア遺跡の洪水堆積物と比較される。証拠は、単一で同時的なメソポタミア全域の洪水や世界洪水を示してはいない。一部の研究者は、紀元前3千年紀初頭、とくにキシュとシュルッパク周辺で起きた大規模な地域洪水を、後の文学的記憶の背景としてあり得るとみなすが、その解釈には議論がある。"
      }
    },
    "zh-CN": {
      "title": "1. 阿特拉哈西斯",
      "subtitle": "古巴比伦时期的阿卡德语美索不达米亚",
      "text": "众神决定毁灭人类，因为人类的喧嚣扰乱了神界。",
      "date": "现存最完整的古巴比伦版本通常被定年到阿米-萨杜卡在位时期，大致为公元前17世纪；保存下来的残片属于古巴比伦时期。",
      "details": {
        "classification": "古巴比伦时期的阿卡德语美索不达米亚。",
        "geographicLocation": "古代美索不达米亚南部的底格里斯河与幼发拉底河冲积平原，今伊拉克。最合适的地图标记是泰勒法拉，即古代舒鲁帕克，因为这座城市与洪水英雄传统关系密切，尽管《阿特拉哈西斯》文本在更广泛的巴比伦地区流传。",
        "mapPlacement": "约北纬31.78度，东经45.50度。",
        "narrative": "众神决定毁灭人类，因为人类的喧闹扰乱了神圣秩序。恩基/埃阿暗中警告阿特拉哈西斯，并指示他造船。阿特拉哈西斯带着家人和补给登船，洪水到来后得以幸存。后来，众神因失去人类的供奉和劳作而后悔灭绝行动。这个故事包含神圣预警、专门建造的船只、被拣选的幸存者、生命保存、灾难性洪水以及洪水后的秩序重建。",
        "chronology": "现存最完整的古巴比伦版本通常被定年到阿米-萨杜卡在位时期，大致为公元前17世纪；保存下来的残片属于古巴比伦时期。",
        "evidence": "考古讨论常把这一故事与乌尔、基什和舒鲁帕克等南部美索不达米亚遗址的洪水沉积层相比较。证据并不支持一次单一、同步的美索不达米亚洪水，更不支持全球性洪水。一些学者认为，公元前3千纪早期，尤其在基什和舒鲁帕克附近发生的严重区域性河水泛滥，可能构成后世文学记忆的背景，但这一推断仍有争议。"
      }
    },
    "hi": {
      "title": "1. अत्रहासिस",
      "subtitle": "पुरानी बेबीलोनियाई अक्कादी मेसोपोटामिया",
      "text": "देवता मानवता को नष्ट करने का निर्णय लेते हैं क्योंकि मनुष्यों का शोर दैवी जगत को विचलित करता है।",
      "date": "सबसे पूर्ण पुरानी बेबीलोनियाई प्रति को सामान्यतः अम्मी-सदूका के शासनकाल, लगभग सत्रहवीं शताब्दी ईसा पूर्व, में रखा जाता है; सुरक्षित खंड पुरानी बेबीलोनियाई काल के हैं।",
      "details": {
        "classification": "पुरानी बेबीलोनियाई अक्कादी मेसोपोटामिया।",
        "geographicLocation": "टिगरिस और यूफ्रेटीस के जलोढ़ क्षेत्र वाली प्राचीन दक्षिणी मेसोपोटामिया; आधुनिक इराक। सबसे उपयोगी मानचित्र-चिह्न टेल फरा, अर्थात प्राचीन शुरुप्पक, है, क्योंकि यह नगर बाढ़-नायक की परंपराओं से निकटता से जुड़ा है, यद्यपि अत्रहासिस का पाठ बाबिलोनिया में अधिक व्यापक रूप से प्रचलित था।",
        "mapPlacement": "लगभग 31.78 उ., 45.50 पू.",
        "narrative": "देवता मानवता को नष्ट करने का निर्णय लेते हैं क्योंकि उसका शोर दैवी व्यवस्था को भंग करता है। एन्की/ईआ गुप्त रूप से अत्रहासिस को चेतावनी देता है और नाव बनाने का निर्देश देता है। अत्रहासिस अपने परिवार और रसद के साथ उसमें चढ़ता है, प्रलय आती है, और वह बच जाता है। बाद में देवता इस विनाश पर पछताते हैं क्योंकि उन्हें मानव अर्पण और श्रम नहीं मिलता। कथा में दैवी चेतावनी, विशेष रूप से बनाई गई नौका, चुने हुए जीवित बचे लोग, जीवन का संरक्षण, विनाशकारी जलप्रलय और उसके बाद पुनर्गठन शामिल है।",
        "chronology": "सबसे पूर्ण पुरानी बेबीलोनियाई प्रति को सामान्यतः अम्मी-सदूका के शासनकाल, लगभग सत्रहवीं शताब्दी ईसा पूर्व, में रखा जाता है; सुरक्षित खंड पुरानी बेबीलोनियाई काल के हैं।",
        "evidence": "पुरातात्विक चर्चाएँ इस कथा की तुलना प्रायः उर, किश और शुरुप्पक जैसे दक्षिणी मेसोपोटामियाई स्थलों पर मिले बाढ़-निक्षेपों से करती हैं। प्रमाण किसी एक समकालिक मेसोपोटामियाई या वैश्विक बाढ़ को सिद्ध नहीं करते। कुछ विद्वान तीसरी सहस्राब्दी ईसा पूर्व की शुरुआत में, विशेषकर किश और शुरुप्पक के आसपास, एक गंभीर क्षेत्रीय नदी-बाढ़ को बाद की साहित्यिक स्मृति की संभावित पृष्ठभूमि मानते हैं, लेकिन यह मत अभी भी विवादित है।"
      }
    },
    "ru": {
      "title": "1. Атрахасис",
      "subtitle": "Старовавилонская аккадская Месопотамия",
      "text": "Боги решают уничтожить человечество, потому что человеческий шум тревожит божественный мир.",
      "date": "Наиболее полная старовавилонская редакция обычно датируется временем царя Амми-цадуки, приблизительно XVII веком до н. э.; сохранившиеся фрагменты относятся к старовавилонскому периоду.",
      "details": {
        "classification": "Старовавилонская аккадская Месопотамия.",
        "geographicLocation": "Юг древней Месопотамии, аллювиальная равнина Тигра и Евфрата; современный Ирак. Наиболее полезная точка на карте - Телль-Фара, древний Шуруппак, поскольку именно этот город тесно связан с традициями о герое потопа, хотя текст Атрахасиса распространялся значительно шире по Вавилонии.",
        "mapPlacement": "Ок. 31.78 с. ш., 45.50 в. д.",
        "narrative": "Боги решают уничтожить человечество, потому что его шум нарушает божественный порядок. Энки/Эа тайно предупреждает Атрахасиса и велит ему построить судно. Атрахасис поднимается на борт с домочадцами и припасами, приходит потоп, и он выживает. После этого боги сожалеют об истреблении людей, потому что лишаются подношений и человеческого труда. В повествовании присутствуют божественное предупреждение, специально построенное судно, избранные выжившие, сохранение жизни, катастрофическое наводнение и послепотопное переустройство мира.",
        "chronology": "Наиболее полная старовавилонская редакция обычно датируется временем царя Амми-цадуки, приблизительно XVII веком до н. э.; сохранившиеся фрагменты относятся к старовавилонскому периоду.",
        "evidence": "Археологические исследования часто сопоставляют этот сюжет со слоями наводнений на южномесопотамских памятниках, таких как Ур, Киш и Шуруппак. Эти данные не подтверждают существование одного синхронного месопотамского или тем более всемирного потопа. Некоторые исследователи считают правдоподобной крупную региональную речную катастрофу начала III тысячелетия до н. э., особенно в районе Киша и Шуруппака, как возможный фон для позднейшей литературной памяти, но это толкование остается спорным."
      }
    }
  },
  "myth-002-ziusudra-in-the-sumerian-flood-story": {
    "es": {
      "title": "2. Ziusudra en la historia sumeria del diluvio",
      "subtitle": "Mesopotamia sumeria",
      "text": "En la historia sumeria del diluvio, a menudo llamada Génesis de Eridu, los dioses resuelven enviar una inundación.",
      "date": "La tablilla principal conservada de Nippur es una copia paleobabilónica, generalmente fechada por la escritura en el siglo XVII a. C., aunque la tradición es anterior.",
      "details": {
        "classification": "Mesopotamia sumeria.",
        "geographicLocation": "Shuruppak antigua, en el sur de Sumer; actual Tell Fara, Irak. El texto identifica al héroe del diluvio con Shuruppak, lo que convierte a Tell Fara en la mejor ubicación cartográfica.",
        "mapPlacement": "Aprox. 31.78 N, 45.50 E.",
        "narrative": "En la historia sumeria del diluvio, a menudo llamada Génesis de Eridu, los dioses deciden enviar una inundación. Enki advierte a Ziusudra, quien construye una gran embarcación y sobrevive a siete días y siete noches de tormenta y anegamiento. Después del diluvio, abre la nave, ofrece sacrificio y recibe un estatus bendito extraordinario en Dilmun. El relato se parece a Noé por la advertencia divina, la supervivencia en una barca, el sacrificio tras el descenso de las aguas y la renovación del orden humano. La tablilla es fragmentaria, de modo que algunos detalles, como el transporte de animales, son menos explícitos que en Atrahasis y Gilgamesh.",
        "chronology": "La tablilla principal conservada de Nippur es una copia paleobabilónica, generalmente fechada por la escritura en el siglo XVII a. C., aunque la tradición es anterior.",
        "evidence": "El propio Shuruppak produjo un depósito de inundación notable, y parte de la investigación ha relacionado los estratos de crecida de Shuruppak y Kish, hacia 3000-2900 a. C., con posibles recuerdos históricos detrás de la tradición sumeria del diluvio. Esto respalda inundaciones locales o regionales serias, no un diluvio universal demostrado ni una prueba directa del mito."
      }
    },
    "pt-BR": {
      "title": "2. Ziusudra na história suméria do dilúvio",
      "subtitle": "Mesopotâmia suméria",
      "text": "Na narrativa suméria do dilúvio, frequentemente chamada de Gênese de Eridu, os deuses resolvem enviar uma inundação.",
      "date": "A principal tábua preservada de Nippur é uma cópia paleobabilônica, geralmente datada pela escrita ao século XVII a.C., embora a tradição seja mais antiga.",
      "details": {
        "classification": "Mesopotâmia suméria.",
        "geographicLocation": "Antiga Shuruppak, no sul da Suméria; atual Tell Fara, Iraque. O texto identifica o herói do dilúvio com Shuruppak, o que faz de Tell Fara a melhor localização cartográfica.",
        "mapPlacement": "Aprox. 31.78 N, 45.50 E.",
        "narrative": "Na narrativa suméria do dilúvio, frequentemente chamada de Gênese de Eridu, os deuses decidem enviar uma inundação. Enki avisa Ziusudra, que constrói uma grande embarcação e sobrevive a sete dias e sete noites de tempestade e alagamento. Depois do dilúvio, ele abre o barco, oferece sacrifício e recebe um status extraordinariamente abençoado em Dilmun. O relato se aproxima de Noé pelo aviso divino, pela sobrevivência numa embarcação, pelo sacrifício após a descida das águas e pela renovação da ordem humana. A tábua é fragmentária, de modo que certos detalhes, como o transporte de animais, ficam menos explícitos do que em Atrahasis e Gilgamesh.",
        "chronology": "A principal tábua preservada de Nippur é uma cópia paleobabilônica, geralmente datada pela escrita ao século XVII a.C., embora a tradição seja mais antiga.",
        "evidence": "A própria Shuruppak apresentou um depósito de inundação importante, e parte da bibliografia relaciona estratos de cheia em Shuruppak e Kish, por volta de 3000-2900 a.C., a possíveis lembranças históricas por trás da tradição suméria do dilúvio. Isso sustenta enchentes locais ou regionais sérias, não um dilúvio universal comprovado nem uma prova direta do mito."
      }
    },
    "it": {
      "title": "2. Ziusudra nel racconto sumerico del diluvio",
      "subtitle": "Mesopotamia sumerica",
      "text": "Nel racconto sumerico del diluvio, spesso chiamato Genesi di Eridu, gli dèi decidono di mandare un'inondazione.",
      "date": "La principale tavoletta conservata da Nippur è una copia paleobabilonese, generalmente datata dalla scrittura al XVII secolo a.C., anche se la tradizione è più antica.",
      "details": {
        "classification": "Mesopotamia sumerica.",
        "geographicLocation": "Antica Shuruppak nella Sumer meridionale; moderna Tell Fara, Iraq. Il testo identifica l'eroe del diluvio con Shuruppak, rendendo Tell Fara il miglior posizionamento cartografico.",
        "mapPlacement": "Circa 31.78 N, 45.50 E.",
        "narrative": "Nel racconto sumerico del diluvio, spesso chiamato Genesi di Eridu, gli dèi decidono di mandare un'inondazione. Enki avverte Ziusudra, che costruisce una grande barca e sopravvive a sette giorni e sette notti di tempesta e sommersione. Dopo il diluvio apre il vascello, offre un sacrificio e riceve uno speciale status benedetto a Dilmun. Il racconto ricorda Noè per l'avvertimento divino, la sopravvivenza su una barca, il sacrificio dopo l'approdo e il rinnovamento dell'ordine umano. La tavoletta è frammentaria, quindi alcuni dettagli, come il carico di animali, sono meno espliciti che in Atrahasis e Gilgamesh.",
        "chronology": "La principale tavoletta conservata da Nippur è una copia paleobabilonese, generalmente datata dalla scrittura al XVII secolo a.C., anche se la tradizione è più antica.",
        "evidence": "La stessa Shuruppak ha restituito un notevole deposito di piena e parte della ricerca ha collegato strati di inondazione a Shuruppak e Kish, intorno al 3000-2900 a.C., a possibili memorie storiche alla base della tradizione sumerica del diluvio. Ciò sostiene l'idea di serie piene locali o regionali, non di un diluvio universale dimostrato né di una prova diretta del mito."
      }
    },
    "fr": {
      "title": "2. Ziusudra dans le récit sumérien du déluge",
      "subtitle": "Mésopotamie sumérienne",
      "text": "Dans le récit sumérien du déluge, souvent appelé Genèse d'Eridu, les dieux décident d'envoyer une inondation.",
      "date": "La tablette principale conservée à Nippur est une copie paléo-babylonienne, généralement datée par l'écriture du XVIIe siècle av. J.-C., bien que la tradition soit plus ancienne.",
      "details": {
        "classification": "Mésopotamie sumérienne.",
        "geographicLocation": "Ancienne Shuruppak, dans le sud de Sumer ; actuel Tell Fara, Irak. Le texte identifie le héros du déluge à Shuruppak, ce qui fait de Tell Fara le meilleur point de placement cartographique.",
        "mapPlacement": "Env. 31.78 N, 45.50 E.",
        "narrative": "Dans le récit sumérien du déluge, souvent appelé Genèse d'Eridu, les dieux décident d'envoyer une inondation. Enki avertit Ziusudra, qui construit un grand bateau et survit à sept jours et sept nuits de tempête et de submersion. Après le déluge, il ouvre le navire, offre un sacrifice et reçoit un statut béni exceptionnel à Dilmun. Le récit rappelle Noé par l'avertissement divin, la survie dans un bateau, le sacrifice après l'accostage et le renouvellement de l'ordre humain. La tablette est fragmentaire, de sorte que certains détails, comme le chargement d'animaux, sont moins explicites que dans Atrahasis et Gilgamesh.",
        "chronology": "La tablette principale conservée à Nippur est une copie paléo-babylonienne, généralement datée par l'écriture du XVIIe siècle av. J.-C., bien que la tradition soit plus ancienne.",
        "evidence": "Shuruppak a elle-même livré un dépôt d'inondation notable, et une partie de la recherche a relié des strates de crue à Shuruppak et Kish, vers 3000-2900 av. J.-C., à de possibles souvenirs historiques derrière la tradition sumérienne du déluge. Cela appuie l'idée de fortes inondations locales ou régionales, non celle d'un déluge universel démontré ni d'une preuve directe du mythe."
      }
    },
    "nl": {
      "title": "2. Ziusudra in het Soemerische vloedverhaal",
      "subtitle": "Soemerisch Mesopotamië",
      "text": "In het Soemerische vloedverhaal, vaak de Eridu Genesis genoemd, besluiten de goden een overstroming te sturen.",
      "date": "Het belangrijkste bewaarde tablet uit Nippur is een Oud-Babylonische kopie, doorgaans op grond van het schrift gedateerd in de zeventiende eeuw v.Chr., al is de traditie ouder.",
      "details": {
        "classification": "Soemerisch Mesopotamië.",
        "geographicLocation": "Het oude Shuruppak in Zuid-Sumer; het huidige Tell Fara in Irak. De tekst identificeert de vloedheld met Shuruppak, waardoor Tell Fara de beste kaartlocatie is.",
        "mapPlacement": "Ca. 31.78 N, 45.50 E.",
        "narrative": "In het Soemerische vloedverhaal, vaak de Eridu Genesis genoemd, besluiten de goden een overstroming te sturen. Enki waarschuwt Ziusudra, die een groot vaartuig bouwt en zeven dagen en zeven nachten storm en overstroming overleeft. Na de vloed opent hij het schip, brengt een offer en ontvangt een uitzonderlijk gezegende status in Dilmun. Het verhaal lijkt op Noach door de goddelijke waarschuwing, overleving in een boot, offer na de landing en vernieuwing van de menselijke orde. Het tablet is fragmentarisch, zodat sommige details, zoals het meenemen van dieren, minder expliciet zijn dan in Atrahasis en Gilgamesj.",
        "chronology": "Het belangrijkste bewaarde tablet uit Nippur is een Oud-Babylonische kopie, doorgaans op grond van het schrift gedateerd in de zeventiende eeuw v.Chr., al is de traditie ouder.",
        "evidence": "Shuruppak zelf leverde een opvallende overstromingslaag op, en sommige onderzoekers verbinden vloedafzettingen rond Shuruppak en Kish, circa 3000-2900 v.Chr., met mogelijke historische herinneringen achter de Soemerische vloedtraditie. Dat ondersteunt het idee van ernstige lokale of regionale overstromingen, niet van een bewezen wereldwijde vloed of een rechtstreeks bewijs van de mythe."
      }
    },
    "de": {
      "title": "2. Ziusudra in der sumerischen Fluterzählung",
      "subtitle": "Sumerisches Mesopotamien",
      "text": "In der sumerischen Fluterzählung, die oft Eridu-Genesis genannt wird, beschließen die Götter, eine Überschwemmung zu senden.",
      "date": "Die wichtigste erhaltene Tafel aus Nippur ist eine altbabylonische Abschrift, die aufgrund der Schrift meist ins 17. Jahrhundert v. Chr. datiert wird, obwohl die Tradition älter ist.",
      "details": {
        "classification": "Sumerisches Mesopotamien.",
        "geographicLocation": "Das antike Shuruppak im südlichen Sumer; das heutige Tell Fara im Irak. Der Text identifiziert den Fluthelden mit Shuruppak, sodass Tell Fara die beste Kartenposition ist.",
        "mapPlacement": "Ca. 31.78 N, 45.50 E.",
        "narrative": "In der sumerischen Fluterzählung, die oft Eridu-Genesis genannt wird, beschließen die Götter, eine Überschwemmung zu senden. Enki warnt Ziusudra, der ein großes Boot baut und sieben Tage und sieben Nächte Sturm und Überflutung überlebt. Nach der Flut öffnet er das Schiff, bringt ein Opfer dar und erhält in Dilmun einen außergewöhnlich gesegneten Status. Die Erzählung erinnert an Noah durch göttliche Warnung, Überleben im Boot, Opfer nach der Landung und Erneuerung der menschlichen Ordnung. Die Tafel ist fragmentarisch, daher sind manche Details, etwa Tierfracht, weniger ausdrücklich als in Atrahasis und Gilgamesch.",
        "chronology": "Die wichtigste erhaltene Tafel aus Nippur ist eine altbabylonische Abschrift, die aufgrund der Schrift meist ins 17. Jahrhundert v. Chr. datiert wird, obwohl die Tradition älter ist.",
        "evidence": "Shuruppak selbst lieferte eine auffällige Flutablagerung, und ein Teil der Forschung verbindet Flutschichten um Shuruppak und Kish, etwa 3000-2900 v. Chr., mit möglichen historischen Erinnerungen hinter der sumerischen Fluttradition. Das spricht für ernsthafte lokale oder regionale Überschwemmungen, nicht für eine nachgewiesene weltweite Flut oder einen direkten Beweis des Mythos."
      }
    },
    "ja": {
      "title": "2. シュメール洪水物語におけるジウスドラ",
      "subtitle": "シュメールのメソポタミア",
      "text": "しばしば「エリドゥ創世記」と呼ばれるシュメール洪水物語では、神々が洪水を送ることを決める。",
      "date": "ニップル出土の主要な現存粘土板は古バビロニア時代の写本で、通常は書体から紀元前17世紀に年代づけられるが、伝承自体はそれより古い。",
      "details": {
        "classification": "シュメールのメソポタミア。",
        "geographicLocation": "シュメール南部の古代シュルッパク、現在のイラクのテル・ファラ。本文は洪水の英雄をシュルッパクと結び付けており、地図上の位置としてはテル・ファラが最適である。",
        "mapPlacement": "北緯31.78度、東経45.50度付近。",
        "narrative": "しばしば「エリドゥ創世記」と呼ばれるシュメール洪水物語では、神々が洪水を送ることを決める。エンキはジウスドラに警告し、彼は大きな船を造って七日七夜の嵐と氾濫を生き延びる。洪水後、彼は船を開き、供犠を捧げ、ディルムンで特別に祝福された地位を受ける。神の警告、船での生存、着地後の供犠、人間秩序の更新という点でノア物語に近い。ただし粘土板は断片的で、動物を積んだかどうかなどの細部はアトラハシスやギルガメシュほど明確ではない。",
        "chronology": "ニップル出土の主要な現存粘土板は古バビロニア時代の写本で、通常は書体から紀元前17世紀に年代づけられるが、伝承自体はそれより古い。",
        "evidence": "シュルッパク自体から顕著な洪水堆積層が見つかっており、研究の一部は紀元前3000-2900年ごろのシュルッパクとキシュの洪水地層を、シュメール洪水伝承の背後にある歴史的記憶と関連づけている。これは深刻な地域的あるいは局地的洪水を支持するが、普遍的な洪水の証明でも、神話の直接的証拠でもない。"
      }
    },
    "zh-CN": {
      "title": "2. 苏美尔洪水故事中的齐乌苏德拉",
      "subtitle": "苏美尔美索不达米亚",
      "text": "在常被称为《埃里都创世记》的苏美尔洪水故事中，众神决定降下洪水。",
      "date": "现存主要泥板来自尼普尔，是古巴比伦时期的抄本，通常根据字形断定为公元前17世纪，尽管这一传统本身更早。",
      "details": {
        "classification": "苏美尔美索不达米亚。",
        "geographicLocation": "苏美尔南部的古代舒鲁帕克，今伊拉克泰勒法拉。文本将洪水英雄与舒鲁帕克直接联系起来，因此泰勒法拉是最佳地图定位。",
        "mapPlacement": "约北纬31.78度，东经45.50度。",
        "narrative": "在常被称为《埃里都创世记》的苏美尔洪水故事中，众神决定降下洪水。恩基警告齐乌苏德拉，他建造一艘大船，并在七天七夜的风暴与洪水中幸存。洪水之后，他打开船只、献上祭品，并在迪尔蒙获得非凡的祝福地位。这个故事与诺亚故事相似之处在于神的警告、乘船幸存、登陆后的献祭以及人类秩序的更新。由于泥板残缺，诸如是否携带动物等细节，不如《阿特拉哈西斯》或《吉尔伽美什》那样明确。",
        "chronology": "现存主要泥板来自尼普尔，是古巴比伦时期的抄本，通常根据字形断定为公元前17世纪，尽管这一传统本身更早。",
        "evidence": "舒鲁帕克本身出土了显著的洪水沉积层，一些研究还把大约公元前3000-2900年舒鲁帕克和基什的洪水地层，与苏美尔洪水传统背后的历史记忆联系起来。这支持严重的地方性或区域性洪灾，并不构成已证实的全球洪水，也不是神话的直接证据。"
      }
    },
    "hi": {
      "title": "2. सुमेरी जलप्रलय कथा में ज़ियुसुद्रा",
      "subtitle": "सुमेरी मेसोपोटामिया",
      "text": "सुमेरी जलप्रलय कथा, जिसे अक्सर एरिडु जेनेसिस कहा जाता है, में देवता एक बाढ़ भेजने का निश्चय करते हैं।",
      "date": "निप्पुर से मिली मुख्य संरक्षित पट्टिका पुरानी बेबीलोनियाई प्रति है, जिसे सामान्यतः लिपि के आधार पर सत्रहवीं शताब्दी ईसा पूर्व में रखा जाता है, यद्यपि परंपरा इससे पुरानी है।",
      "details": {
        "classification": "सुमेरी मेसोपोटामिया।",
        "geographicLocation": "दक्षिणी सुमेर का प्राचीन शुरुप्पक; आधुनिक टेल फरा, इराक। पाठ जलप्रलय-नायक की पहचान शुरुप्पक से करता है, इसलिए टेल फरा सबसे उपयुक्त मानचित्र-स्थान है।",
        "mapPlacement": "लगभग 31.78 उ., 45.50 पू.",
        "narrative": "सुमेरी जलप्रलय कथा, जिसे अक्सर एरिडु जेनेसिस कहा जाता है, में देवता एक बाढ़ भेजने का निश्चय करते हैं। एन्की ज़ियुसुद्रा को चेतावनी देता है, जो एक बड़ी नाव बनाता है और सात दिन तथा सात रातों की आँधी और जलप्लावन से बच जाता है। बाढ़ के बाद वह नाव खोलता है, बलि चढ़ाता है और दिलमुन में असाधारण रूप से धन्य स्थिति प्राप्त करता है। यह कथा दैवी चेतावनी, नाव में बचना, उतरने के बाद बलि, और मानवीय व्यवस्था के नवीनीकरण के कारण नूह की कथा से मिलती है। पट्टिका खंडित है, इसलिए कुछ विवरण, जैसे पशुओं को साथ ले जाना, अत्रहासिस और गिलगमेश की तुलना में कम स्पष्ट हैं।",
        "chronology": "निप्पुर से मिली मुख्य संरक्षित पट्टिका पुरानी बेबीलोनियाई प्रति है, जिसे सामान्यतः लिपि के आधार पर सत्रहवीं शताब्दी ईसा पूर्व में रखा जाता है, यद्यपि परंपरा इससे पुरानी है।",
        "evidence": "शुरुप्पक से स्वयं एक उल्लेखनीय बाढ़-निक्षेप मिला है, और कुछ शोधकर्ता लगभग 3000-2900 ईसा पूर्व के शुरुप्पक और किश के बाढ़-स्तरों को सुमेरी जलप्रलय परंपरा के पीछे की संभावित ऐतिहासिक स्मृति से जोड़ते हैं। इससे गंभीर स्थानीय या क्षेत्रीय बाढ़ का संकेत मिलता है, न कि किसी सिद्ध सार्वभौमिक जलप्रलय का या मिथक के प्रत्यक्ष प्रमाण का।"
      }
    },
    "ru": {
      "title": "2. Зиусудра в шумерском сказании о потопе",
      "subtitle": "Шумерская Месопотамия",
      "text": "В шумерском сказании о потопе, которое часто называют Эриду-генезисом, боги решают наслать наводнение.",
      "date": "Главная сохранившаяся табличка из Ниппура является старовавилонской копией, обычно датируемой по письму XVII веком до н. э., хотя сама традиция древнее.",
      "details": {
        "classification": "Шумерская Месопотамия.",
        "geographicLocation": "Древний Шуруппак на юге Шумера; современный Телль-Фара, Ирак. Текст прямо связывает героя потопа с Шуруппаком, поэтому Телль-Фара - наиболее точная точка на карте.",
        "mapPlacement": "Ок. 31.78 с. ш., 45.50 в. д.",
        "narrative": "В шумерском сказании о потопе, которое часто называют Эриду-генезисом, боги решают наслать наводнение. Энки предупреждает Зиусудру, который строит большое судно и переживает семь дней и семь ночей бури и затопления. После потопа он открывает корабль, приносит жертву и получает в Дильмуне исключительный благословенный статус. Рассказ напоминает историю Ноя божественным предупреждением, спасением на судне, жертвоприношением после причаливания и обновлением человеческого порядка. Табличка фрагментарна, поэтому некоторые детали, например о перевозке животных, выражены менее ясно, чем в Атрахасисе и Гильгамеше.",
        "chronology": "Главная сохранившаяся табличка из Ниппура является старовавилонской копией, обычно датируемой по письму XVII веком до н. э., хотя сама традиция древнее.",
        "evidence": "В самом Шуруппака обнаружен заметный слой наводнения, и часть исследований связывает паводковые отложения Шуруппака и Киша около 3000-2900 гг. до н. э. с возможной исторической памятью, лежащей в основе шумерской традиции о потопе. Это говорит о серьезных локальных или региональных наводнениях, но не о доказанном всемирном потопе и не о прямом подтверждении мифа."
      }
    }
  },
  "myth-003-manu-and-the-fish": {
    "es": {
      "title": "3. Manu y el pez",
      "subtitle": "India védica / tradición hindú de Matsya",
      "text": "Manu rescata a un pequeño pez parlante, que crece y le advierte que un diluvio destruirá a todas las criaturas.",
      "date": "El testimonio textual conservado más antiguo es el Shatapatha Brahmana, comúnmente situado entre los siglos VIII y VI a. C., aunque detrás del texto hay una transmisión oral más antigua.",
      "details": {
        "classification": "India védica; posterior tradición hindú de Matsya.",
        "geographicLocation": "Norte del sur de Asia. El texto más antiguo dice que la nave es llevada a una montaña septentrional, de modo que el marcador es aproximado. Una ubicación práctica es el Himalaya central, en el actual Uttarakhand, India.",
        "mapPlacement": "Aprox. 30.74 N, 79.49 E.",
        "narrative": "Manu salva a un pequeño pez parlante, que crece y le advierte de un diluvio que destruirá a todos los seres. Manu prepara un barco, entra en él cuando suben las aguas y lo ata al cuerno del pez. El pez remolca la embarcación hasta una montaña del norte. Cuando las aguas retroceden, Manu realiza un sacrificio; de las aguas sacrificiales surge una mujer, y mediante ella la humanidad se renueva. La tradición incluye advertencia divina, un superviviente justo, un barco, llegada a la montaña, sacrificio y repoblación.",
        "chronology": "El testimonio textual conservado más antiguo es el Shatapatha Brahmana, comúnmente situado entre los siglos VIII y VI a. C., aunque detrás del texto hay una transmisión oral más antigua.",
        "evidence": "No existe consenso académico que identifique a Manu con un único episodio histórico de inundación. Los estudios paleohidrológicos del Holoceno y del final del Pleistoceno muestran crecidas repetidas de gran magnitud en sistemas fluviales himaláyicos y monzónicos, lo que hace verosímil un mito de diluvio, aunque las correlaciones concretas siguen siendo especulativas."
      }
    },
    "pt-BR": {
      "title": "3. Manu e o peixe",
      "subtitle": "Índia védica / tradição hindu de Matsya",
      "text": "Manu resgata um pequeno peixe falante, que cresce e o avisa de que um dilúvio destruirá todas as criaturas.",
      "date": "O testemunho textual preservado mais antigo é o Shatapatha Brahmana, geralmente situado entre os séculos VIII e VI a.C., embora haja uma transmissão oral mais antiga por trás do texto.",
      "details": {
        "classification": "Índia védica; tradição hindu posterior de Matsya.",
        "geographicLocation": "Norte do sul da Ásia. O texto mais antigo diz que o barco é levado a uma montanha do norte, de modo que o marcador é aproximado. Uma localização prática é o Himalaia central, no atual Uttarakhand, Índia.",
        "mapPlacement": "Aprox. 30.74 N, 79.49 E.",
        "narrative": "Manu salva um pequeno peixe falante, que cresce e o avisa de que um dilúvio destruirá todos os seres. Manu prepara um barco, entra nele quando as águas sobem e o amarra ao chifre do peixe. O peixe reboca a embarcação até uma montanha setentrional. Quando as águas recuam, Manu realiza um sacrifício; das águas sacrificiais surge uma mulher, e por meio dela a humanidade é renovada. A tradição inclui aviso divino, sobrevivente justo, barco, chegada à montanha, sacrifício e repovoamento.",
        "chronology": "O testemunho textual preservado mais antigo é o Shatapatha Brahmana, geralmente situado entre os séculos VIII e VI a.C., embora haja uma transmissão oral mais antiga por trás do texto.",
        "evidence": "Não há consenso acadêmico que identifique Manu com um único evento histórico de enchente. Estudos paleohidrológicos do Holoceno e do fim do Pleistoceno mostram cheias repetidas e muito grandes em sistemas fluviais himalaicos e alimentados por monções, o que torna plausível um mito de dilúvio, mas as correlações específicas continuam especulativas."
      }
    },
    "it": {
      "title": "3. Manu e il pesce",
      "subtitle": "India vedica / tradizione indù di Matsya",
      "text": "Manu salva un piccolo pesce parlante, che cresce e lo avverte che un diluvio distruggerà tutte le creature.",
      "date": "La più antica testimonianza testuale conservata è lo Shatapatha Brahmana, comunemente collocato tra l'VIII e il VI secolo a.C., anche se dietro il testo vi è una tradizione orale più antica.",
      "details": {
        "classification": "India vedica; successiva tradizione indù di Matsya.",
        "geographicLocation": "Asia meridionale settentrionale. Il testo più antico dice che la nave viene trascinata verso una montagna del nord, quindi il marcatore è approssimativo. Una collocazione pratica è l'Himalaya centrale, nell'attuale Uttarakhand, India.",
        "mapPlacement": "Circa 30.74 N, 79.49 E.",
        "narrative": "Manu salva un piccolo pesce parlante, che cresce e lo avverte che un diluvio distruggerà tutte le creature. Manu prepara una nave, vi sale quando le acque si alzano e la lega al corno del pesce. Il pesce traina l'imbarcazione fino a una montagna settentrionale. Quando le acque si ritirano, Manu compie un sacrificio; dalle acque sacrificali nasce una donna e, tramite lei, l'umanità si rinnova. La tradizione comprende avvertimento divino, sopravvissuto giusto, barca, approdo montano, sacrificio e ripopolamento.",
        "chronology": "La più antica testimonianza testuale conservata è lo Shatapatha Brahmana, comunemente collocato tra l'VIII e il VI secolo a.C., anche se dietro il testo vi è una tradizione orale più antica.",
        "evidence": "Non esiste un consenso accademico che identifichi Manu con uno specifico evento alluvionale. Gli studi paleoidrologici olocenici e tardo-pleistocenici mostrano grandi piene ripetute nei sistemi fluviali himalayani e monsonici, rendendo plausibile un mito di diluvio, ma le correlazioni puntuali restano speculative."
      }
    },
    "fr": {
      "title": "3. Manu et le poisson",
      "subtitle": "Inde védique / tradition hindoue de Matsya",
      "text": "Manu sauve un petit poisson parlant, qui grandit et l'avertit qu'un déluge détruira toutes les créatures.",
      "date": "Le plus ancien témoin textuel conservé est le Shatapatha Brahmana, généralement situé entre le VIIIe et le VIe siècle av. J.-C., même si une transmission orale plus ancienne se trouve derrière le texte.",
      "details": {
        "classification": "Inde védique ; tradition hindoue ultérieure de Matsya.",
        "geographicLocation": "Nord de l'Asie du Sud. Le texte le plus ancien indique que le bateau est conduit vers une montagne du nord, de sorte que le marqueur reste approximatif. Un placement pratique est l'Himalaya central, dans l'actuel Uttarakhand, en Inde.",
        "mapPlacement": "Env. 30.74 N, 79.49 E.",
        "narrative": "Manu sauve un petit poisson parlant, qui grandit et l'avertit qu'un déluge détruira tous les êtres. Manu prépare un bateau, y entre lorsque les eaux montent et l'attache à la corne du poisson. Le poisson remorque l'embarcation jusqu'à une montagne du nord. Lorsque les eaux se retirent, Manu accomplit un sacrifice ; une femme surgit des eaux sacrificielles et l'humanité se renouvelle par elle. La tradition comprend avertissement divin, survivant juste, bateau, atterrissage sur une montagne, sacrifice et repeuplement.",
        "chronology": "Le plus ancien témoin textuel conservé est le Shatapatha Brahmana, généralement situé entre le VIIIe et le VIe siècle av. J.-C., même si une transmission orale plus ancienne se trouve derrière le texte.",
        "evidence": "Aucun consensus savant n'identifie Manu à un événement d'inondation unique. Les études paléohydrologiques de l'Holocène et de la fin du Pléistocène montrent de grandes crues répétées dans les systèmes fluviaux himalayens et de mousson, ce qui rend plausible un mythe de déluge, mais les corrélations précises demeurent spéculatives."
      }
    },
    "nl": {
      "title": "3. Manu en de vis",
      "subtitle": "Vedisch India / hindoeïstische Matsya-traditie",
      "text": "Manu redt een kleine sprekende vis, die groeit en hem waarschuwt dat een vloed alle levende wezens zal vernietigen.",
      "date": "De vroegste bewaard gebleven tekstuele getuige is de Shatapatha Brahmana, doorgaans geplaatst in de achtste tot zesde eeuw v.Chr., al gaat achter de tekst een oudere mondelinge overlevering schuil.",
      "details": {
        "classification": "Vedisch India; latere hindoeïstische Matsya-traditie.",
        "geographicLocation": "Noordelijk Zuid-Azië. De oudste tekst zegt dat het schip naar een noordelijke berg wordt gebracht, zodat de marker benaderend is. Een praktische locatie is de centrale Himalaya in het huidige Uttarakhand, India.",
        "mapPlacement": "Ca. 30.74 N, 79.49 E.",
        "narrative": "Manu redt een kleine sprekende vis, die groeit en hem waarschuwt dat een vloed alle wezens zal vernietigen. Manu maakt een schip gereed, gaat aan boord wanneer het water stijgt en bindt het schip vast aan de hoorn van de vis. De vis sleept het vaartuig naar een noordelijke berg. Wanneer het water zakt, brengt Manu een offer; uit het offerwater verschijnt een vrouw, en door haar wordt de mensheid vernieuwd. De traditie bevat goddelijke waarschuwing, een rechtvaardige overlevende, een schip, landing op een berg, offer en herbevolking.",
        "chronology": "De vroegste bewaard gebleven tekstuele getuige is de Shatapatha Brahmana, doorgaans geplaatst in de achtste tot zesde eeuw v.Chr., al gaat achter de tekst een oudere mondelinge overlevering schuil.",
        "evidence": "Er bestaat geen wetenschappelijke consensus die Manu aan één specifieke overstromingsgebeurtenis koppelt. Paleohydrologische studies uit het Holoceen en het late Pleistoceen tonen herhaalde grote overstromingen in Himalaya- en moessongevoede riviersystemen, waardoor een vloedmythe milieuhistorisch plausibel is, maar concrete koppelingen blijven speculatief."
      }
    },
    "de": {
      "title": "3. Manu und der Fisch",
      "subtitle": "Vedisches Indien / hinduistische Matsya-Tradition",
      "text": "Manu rettet einen kleinen sprechenden Fisch, der wächst und ihn warnt, dass eine Flut alle Geschöpfe vernichten wird.",
      "date": "Der früheste erhaltene Textzeuge ist das Shatapatha Brahmana, gewöhnlich in das 8. bis 6. Jahrhundert v. Chr. datiert, auch wenn hinter dem Text eine ältere mündliche Überlieferung steht.",
      "details": {
        "classification": "Vedisches Indien; spätere hinduistische Matsya-Tradition.",
        "geographicLocation": "Nördliches Südasien. Der älteste Text sagt, dass das Schiff zu einem nördlichen Berg gebracht wird, daher ist der Marker nur annähernd. Eine praktische Platzierung ist der zentrale Himalaya im heutigen Uttarakhand, Indien.",
        "mapPlacement": "Ca. 30.74 N, 79.49 E.",
        "narrative": "Manu rettet einen kleinen sprechenden Fisch, der wächst und ihn warnt, dass eine Flut alle Wesen vernichten wird. Manu bereitet ein Schiff vor, betritt es, als das Wasser steigt, und bindet es an das Horn des Fisches. Der Fisch schleppt das Fahrzeug zu einem nördlichen Berg. Als die Wasser zurückgehen, vollzieht Manu ein Opfer; aus den Opferwassern erscheint eine Frau, und durch sie wird die Menschheit erneuert. Die Tradition enthält göttliche Warnung, einen gerechten Überlebenden, ein Schiff, Berglandung, Opfer und Wiederbevölkerung.",
        "chronology": "Der früheste erhaltene Textzeuge ist das Shatapatha Brahmana, gewöhnlich in das 8. bis 6. Jahrhundert v. Chr. datiert, auch wenn hinter dem Text eine ältere mündliche Überlieferung steht.",
        "evidence": "Es gibt keinen wissenschaftlichen Konsens, der Manu mit einem einzigen bestimmten Flutereignis identifiziert. Spätes Pleistozän und Holozän zeigen in paläohydrologischen Studien wiederholte große Überschwemmungen in Himalaya- und monsungespeisten Flusssystemen, was einen Flutmythos plausibel macht, doch konkrete Zuordnungen bleiben spekulativ."
      }
    },
    "ja": {
      "title": "3. マヌと魚",
      "subtitle": "ヴェーダ期インド / ヒンドゥー教マツヤ伝承",
      "text": "マヌは小さな話す魚を助け、その魚は成長して、洪水がすべての生き物を滅ぼすと警告する。",
      "date": "現存最古の文献証拠は『シャタパタ・ブラーフマナ』で、一般には紀元前8世紀から6世紀ごろに置かれるが、その背後にはより古い口承伝承がある。",
      "details": {
        "classification": "ヴェーダ期インド、のちのヒンドゥー教マツヤ伝承。",
        "geographicLocation": "南アジア北部。最古の本文では船が北方の山へ導かれるとされるため、位置は概略的である。実用的な配置としては、現在のインド・ウッタラーカンド州にあたる中央ヒマラヤが適切である。",
        "mapPlacement": "北緯30.74度、東経79.49度付近。",
        "narrative": "マヌは小さな話す魚を助け、その魚は成長して、洪水がすべての生き物を滅ぼすと警告する。マヌは船を用意し、水が増すとそこに乗り込み、船を魚の角につなぐ。魚はその船を北方の山へ曳いていく。水が引いた後、マヌは供犠を行い、その供犠の水から一人の女性が現れ、彼女を通じて人類が再生される。この伝承には神の警告、義なる生存者、船、山への到着、供犠、再人口化が含まれる。",
        "chronology": "現存最古の文献証拠は『シャタパタ・ブラーフマナ』で、一般には紀元前8世紀から6世紀ごろに置かれるが、その背後にはより古い口承伝承がある。",
        "evidence": "マヌ伝承を特定の単一洪水事件に結びつける学術的合意は存在しない。完新世および後期更新世の古水文学研究は、ヒマラヤ系・モンスーン系河川で大規模洪水が繰り返されたことを示しており、洪水神話の環境的背景としてはもっともらしいが、個別対応は依然として推測の域を出ない。"
      }
    },
    "zh-CN": {
      "title": "3. 摩奴与神鱼",
      "subtitle": "吠陀时代印度 / 印度教摩蹉传统",
      "text": "摩奴救下一条会说话的小鱼，这条鱼不断长大，并警告他说洪水将毁灭一切生灵。",
      "date": "现存最早的文本见证是《百道梵书》，一般被置于公元前8至前6世纪之间，但其背后还有更早的口传传统。",
      "details": {
        "classification": "吠陀时代印度；后来的印度教摩蹉传统。",
        "geographicLocation": "南亚北部。最早文本说船被带到北方的一座山上，因此该坐标只是近似值。一个实用的定位是今印度北阿坎德邦一带的中部喜马拉雅。",
        "mapPlacement": "约北纬30.74度，东经79.49度。",
        "narrative": "摩奴救下一条会说话的小鱼，这条鱼不断长大，并警告他说洪水将毁灭一切生灵。摩奴准备好船只，在洪水上涨时登船，并把船系在鱼角上。鱼拖着船来到北方的一座山。洪水退去后，摩奴举行祭祀；从祭祀之水中出现一位女子，人类通过她而获得更新。这个传统包含神圣预警、义人幸存者、船只、山上登陆、祭祀以及重新繁衍人类等要素。",
        "chronology": "现存最早的文本见证是《百道梵书》，一般被置于公元前8至前6世纪之间，但其背后还有更早的口传传统。",
        "evidence": "学界并无共识认为摩奴对应某一次特定洪水事件。全新世和更新世晚期的古洪水研究显示，喜马拉雅和季风供水河流系统曾多次发生大型洪灾，因此洪水神话在环境背景上是可信的，但具体对应关系仍属推测。"
      }
    },
    "hi": {
      "title": "3. मनु और मछली",
      "subtitle": "वैदिक भारत / हिंदू मत्स्य परंपरा",
      "text": "मनु एक छोटी बोलने वाली मछली को बचाते हैं, जो बड़ी होकर उन्हें चेतावनी देती है कि एक जलप्रलय सभी प्राणियों को नष्ट कर देगा।",
      "date": "सबसे प्राचीन उपलब्ध पाठ-साक्ष्य शतपथ ब्राह्मण है, जिसे सामान्यतः आठवीं से छठी शताब्दी ईसा पूर्व के बीच रखा जाता है, यद्यपि इसके पीछे इससे भी पुरानी मौखिक परंपरा है।",
      "details": {
        "classification": "वैदिक भारत; बाद की हिंदू मत्स्य परंपरा।",
        "geographicLocation": "उत्तरी दक्षिण एशिया। सबसे प्राचीन पाठ कहता है कि नौका को उत्तर की एक पर्वत-चोटी तक ले जाया गया, इसलिए मानचित्र-चिह्न अनुमानित है। व्यावहारिक रूप से आधुनिक उत्तराखंड, भारत के मध्य हिमालय को चुना जा सकता है।",
        "mapPlacement": "लगभग 30.74 उ., 79.49 पू.",
        "narrative": "मनु एक छोटी बोलने वाली मछली को बचाते हैं, जो बड़ी होकर उन्हें चेतावनी देती है कि एक जलप्रलय सभी प्राणियों को नष्ट कर देगा। मनु एक नाव तैयार करते हैं, जल बढ़ने पर उसमें प्रवेश करते हैं और उसे मछली के सींग से बाँध देते हैं। मछली उस नौका को उत्तर के एक पर्वत तक खींच ले जाती है। जल उतरने पर मनु यज्ञ करते हैं; यज्ञ-जल से एक स्त्री प्रकट होती है, और उसी के माध्यम से मानवता का नवीनीकरण होता है। इस परंपरा में दैवी चेतावनी, धर्मनिष्ठ जीवित बचे व्यक्ति, नाव, पर्वत पर ठहरना, बलि/यज्ञ और पुनर्वास शामिल हैं।",
        "chronology": "सबसे प्राचीन उपलब्ध पाठ-साक्ष्य शतपथ ब्राह्मण है, जिसे सामान्यतः आठवीं से छठी शताब्दी ईसा पूर्व के बीच रखा जाता है, यद्यपि इसके पीछे इससे भी पुरानी मौखिक परंपरा है।",
        "evidence": "मनु को किसी एक विशिष्ट बाढ़-घटना से जोड़ने पर विद्वानों में सहमति नहीं है। होलोसीन और उत्तर प्लाइस्टोसीन के पालीयो-बाढ़ अध्ययनों से हिमालयी और मानसून-आधारित नदी प्रणालियों में बार-बार बड़े बाढ़-प्रसंगों का संकेत मिलता है, जिससे प्रलय-मिथक का पर्यावरणीय आधार संभव लगता है, लेकिन ठोस मेल अब भी अनुमानात्मक है।"
      }
    },
    "ru": {
      "title": "3. Ману и рыба",
      "subtitle": "Ведическая Индия / индуистская традиция Матсьи",
      "text": "Ману спасает маленькую говорящую рыбу, которая вырастает и предупреждает его, что потоп уничтожит всех существ.",
      "date": "Самым ранним сохранившимся текстовым свидетельством считается Шатапатха-брахмана, обычно датируемая VIII-VI веками до н. э., хотя за текстом стоит более древняя устная традиция.",
      "details": {
        "classification": "Ведическая Индия; более поздняя индуистская традиция Матсьи.",
        "geographicLocation": "Север Южной Азии. Самый ранний текст говорит, что корабль был приведен к северной горе, поэтому точка на карте условна. Практичным ориентиром служит центральная часть Гималаев в современном Уттаракханде, Индия.",
        "mapPlacement": "Ок. 30.74 с. ш., 79.49 в. д.",
        "narrative": "Ману спасает маленькую говорящую рыбу, которая вырастает и предупреждает его, что потоп уничтожит все живое. Ману готовит корабль, входит в него, когда воды поднимаются, и привязывает судно к рогу рыбы. Рыба тянет корабль к северной горе. Когда воды сходят, Ману совершает жертвоприношение; из жертвенных вод появляется женщина, и через нее человечество обновляется. В этой традиции присутствуют божественное предупреждение, праведный выживший, судно, горная посадка, жертва и возобновление человеческого рода.",
        "chronology": "Самым ранним сохранившимся текстовым свидетельством считается Шатапатха-брахмана, обычно датируемая VIII-VI веками до н. э., хотя за текстом стоит более древняя устная традиция.",
        "evidence": "Научного консенсуса, связывающего Ману с каким-то одним конкретным наводнением, нет. Палеогидрологические исследования голоцена и позднего плейстоцена показывают повторяющиеся крупные паводки в гималайских и муссонных речных системах, что делает миф о потопе экологически правдоподобным, но конкретные корреляции остаются спекулятивными."
      }
    }
  },
  "myth-004-the-great-flood-of-gun-and-yu": {
    "es": {
      "title": "4. El gran diluvio de Gun y Yu",
      "subtitle": "Tradición china temprana",
      "text": "Un diluvio inmenso devasta el mundo. Gun fracasa al contenerlo y su hijo Yu triunfa al dragar y encauzar las aguas, restaurando el orden habitable.",
      "date": "Las formas escritas conservadas aparecen sobre todo en textos de los Reinos Combatientes y de inicios de la época imperial. El capítulo Yu Gong del Libro de los Documentos suele fecharse, según la investigación moderna, en el siglo V a. C. o más tarde, aunque la historia presenta a Yu como mucho más antiguo.",
      "details": {
        "classification": "Tradición china temprana.",
        "geographicLocation": "Mundo del Río Amarillo en el norte de China. Un marcador útil es la garganta de Jishi, en el curso alto del Río Amarillo, cerca de la actual frontera entre Qinghai y Gansu, porque ocupa un lugar central en una importante hipótesis geológica sobre esta tradición.",
        "mapPlacement": "Aprox. 35.80 N, 102.75 E.",
        "narrative": "Un diluvio inmenso devasta el mundo. Gun fracasa al controlarlo, y su hijo Yu logra someter las aguas mediante dragado y canalización, restaurando el orden habitable y haciendo posible un gobierno civilizado. Es menos parecido al arca de Noé que otros relatos, porque se centra en el control de la inundación más que en sobrevivir en una nave. Los paralelos principales son la catástrofe hídrica, el héroe cultural elegido, la preservación de la sociedad y la renovación posterior.",
        "chronology": "Las formas escritas conservadas aparecen sobre todo en textos de los Reinos Combatientes y de inicios de la época imperial. El capítulo Yu Gong del Libro de los Documentos suele fecharse, según la investigación moderna, en el siglo V a. C. o más tarde, aunque la historia presenta a Yu como mucho más antiguo.",
        "evidence": "Un artículo publicado en Science en 2016 propuso una gran crecida causada por el desbordamiento de una presa natural por deslizamiento en la garganta de Jishi, hacia 1920 a. C., como posible núcleo histórico del Gran Diluvio y de las tradiciones sobre la fundación de Xia. Esta interpretación es discutida; varios críticos sostienen que la tradición textual y la evidencia física no pueden reducirse con seguridad a un único evento."
      }
    },
    "pt-BR": {
      "title": "4. O grande dilúvio de Gun e Yu",
      "subtitle": "Tradição chinesa antiga",
      "text": "Uma inundação colossal devasta o mundo. Gun fracassa em controlá-la, e seu filho Yu consegue domar as águas ao dragá-las e canalizá-las, restaurando a ordem habitável.",
      "date": "As formas escritas preservadas aparecem principalmente em textos do período dos Reinos Combatentes e do início da era imperial. O capítulo Yu Gong do Livro dos Documentos costuma ser datado pela pesquisa moderna ao século V a.C. ou depois, embora a narrativa apresente Yu como muito mais antigo.",
      "details": {
        "classification": "Tradição chinesa antiga.",
        "geographicLocation": "Mundo do Rio Amarelo, no norte da China. Um marcador útil é o desfiladeiro de Jishi, no alto curso do Rio Amarelo, perto da atual fronteira Qinghai-Gansu, porque ele ocupa posição central em uma importante hipótese geológica sobre essa tradição.",
        "mapPlacement": "Aprox. 35.80 N, 102.75 E.",
        "narrative": "Uma inundação colossal devasta o mundo. Gun fracassa em controlá-la, e seu filho Yu tem sucesso ao dragar e canalizar as águas, restaurando a ordem habitável e tornando possível um governo civilizado. A história é menos semelhante à arca de Noé do que outros relatos, porque se concentra no controle das águas, e não na sobrevivência de uma família dentro de uma embarcação. Os paralelos principais são a catástrofe hídrica, o herói cultural escolhido, a preservação da sociedade e a renovação posterior.",
        "chronology": "As formas escritas preservadas aparecem principalmente em textos do período dos Reinos Combatentes e do início da era imperial. O capítulo Yu Gong do Livro dos Documentos costuma ser datado pela pesquisa moderna ao século V a.C. ou depois, embora a narrativa apresente Yu como muito mais antigo.",
        "evidence": "Um artigo da Science de 2016 propôs uma grande cheia causada pelo rompimento de uma barragem natural por deslizamento no desfiladeiro de Jishi, por volta de 1920 a.C., como possível núcleo histórico do Grande Dilúvio e das tradições da fundação Xia. Essa interpretação é debatida; críticos argumentam que a tradição textual e a evidência física não podem ser reduzidas com segurança a um único evento."
      }
    },
    "it": {
      "title": "4. Il grande diluvio di Gun e Yu",
      "subtitle": "Prima tradizione cinese",
      "text": "Un'immensa inondazione devasta il mondo. Gun fallisce nel contenerla e suo figlio Yu riesce a domare le acque dragandole e incanalandole, ristabilendo un ordine abitabile.",
      "date": "Le forme scritte conservate compaiono soprattutto in testi del periodo degli Stati Combattenti e dell'inizio dell'età imperiale. Il capitolo Yu Gong del Libro dei Documenti è spesso datato dalla ricerca moderna al V secolo a.C. o più tardi, anche se la storia presenta Yu come molto più antico.",
      "details": {
        "classification": "Prima tradizione cinese.",
        "geographicLocation": "Mondo del Fiume Giallo nella Cina settentrionale. Un marcatore utile è la gola di Jishi, sull'alto Fiume Giallo vicino all'attuale confine Qinghai-Gansu, perché è centrale in un'importante ipotesi geologica relativa a questa tradizione.",
        "mapPlacement": "Circa 35.80 N, 102.75 E.",
        "narrative": "Un'immensa inondazione devasta il mondo. Gun fallisce nel controllarla, e suo figlio Yu riesce a gestire le acque mediante dragaggio e canalizzazione, ristabilendo un ordine abitabile e rendendo possibile un governo civilizzato. Il racconto è meno simile all'arca di Noè di altri miti, perché si concentra sul controllo della piena più che sulla sopravvivenza di una famiglia in una nave. I paralleli principali sono la catastrofe d'acqua, l'eroe culturale prescelto, la conservazione della società e il rinnovamento successivo.",
        "chronology": "Le forme scritte conservate compaiono soprattutto in testi del periodo degli Stati Combattenti e dell'inizio dell'età imperiale. Il capitolo Yu Gong del Libro dei Documenti è spesso datato dalla ricerca moderna al V secolo a.C. o più tardi, anche se la storia presenta Yu come molto più antico.",
        "evidence": "Un articolo pubblicato su Science nel 2016 ha proposto una grande piena causata dal collasso di una diga naturale da frana nella gola di Jishi intorno al 1920 a.C. come possibile nucleo storico del Grande Diluvio e delle tradizioni sulla fondazione degli Xia. L'interpretazione è discussa; i critici sostengono che la tradizione testuale e le prove fisiche non si lascino ricondurre con sicurezza a un singolo evento."
      }
    },
    "fr": {
      "title": "4. Le grand déluge de Gun et Yu",
      "subtitle": "Tradition chinoise ancienne",
      "text": "Une immense inondation dévaste le monde. Gun échoue à la maîtriser, et son fils Yu réussit en draguant et en canalisant les eaux, rétablissant un ordre habitable.",
      "date": "Les formes écrites conservées apparaissent surtout dans des textes de l'époque des Royaumes combattants et du début de l'ère impériale. Le chapitre Yu Gong du Livre des Documents est souvent daté par la recherche moderne du Ve siècle av. J.-C. ou plus tard, même si le récit présente Yu comme beaucoup plus ancien.",
      "details": {
        "classification": "Tradition chinoise ancienne.",
        "geographicLocation": "Monde du Fleuve Jaune dans le nord de la Chine. Un marqueur utile est la gorge de Jishi, sur le haut Fleuve Jaune, près de l'actuelle frontière Qinghai-Gansu, car elle est centrale dans une importante hypothèse géologique concernant cette tradition.",
        "mapPlacement": "Env. 35.80 N, 102.75 E.",
        "narrative": "Une immense inondation dévaste le monde. Gun échoue à la contrôler et son fils Yu parvient à maîtriser les eaux par dragage et canalisation, restaurant un ordre habitable et rendant possible un pouvoir civilisé. Le récit ressemble moins à l'arche de Noé que d'autres traditions, car il met l'accent sur la gestion des eaux plutôt que sur la survie d'une famille dans un bateau. Les parallèles principaux sont la catastrophe hydrique, le héros culturel choisi, la préservation de la société et le renouveau après la crise.",
        "chronology": "Les formes écrites conservées apparaissent surtout dans des textes de l'époque des Royaumes combattants et du début de l'ère impériale. Le chapitre Yu Gong du Livre des Documents est souvent daté par la recherche moderne du Ve siècle av. J.-C. ou plus tard, même si le récit présente Yu comme beaucoup plus ancien.",
        "evidence": "Un article publié dans Science en 2016 a proposé une grande crue provoquée par la rupture d'un barrage de glissement de terrain dans la gorge de Jishi vers 1920 av. J.-C. comme possible noyau historique du Grand Déluge et des traditions de fondation des Xia. Cette interprétation est discutée ; des critiques estiment que la tradition textuelle et les données physiques ne se réduisent pas sûrement à un seul événement."
      }
    },
    "nl": {
      "title": "4. De grote vloed van Gun en Yu",
      "subtitle": "Vroege Chinese traditie",
      "text": "Een enorme vloed verwoest de wereld. Gun faalt in het beteugelen ervan, en zijn zoon Yu slaagt erin de wateren te beheersen door ze uit te baggeren en te kanaliseren, waardoor de bewoonbare orde wordt hersteld.",
      "date": "Bewaarde schriftelijke vormen verschijnen vooral in teksten uit de periode van de Strijdende Staten en het vroege keizerrijk. Het hoofdstuk Yu Gong in het Boek der Documenten wordt in modern onderzoek vaak in de vijfde eeuw v.Chr. of later geplaatst, hoewel het verhaal Yu veel ouder voorstelt.",
      "details": {
        "classification": "Vroege Chinese traditie.",
        "geographicLocation": "De wereld van de Gele Rivier in Noord-China. Een bruikbare marker is de Jishi-kloof aan de bovenloop van de Gele Rivier, nabij de huidige grens tussen Qinghai en Gansu, omdat die centraal staat in een belangrijke geologische hypothese over deze traditie.",
        "mapPlacement": "Ca. 35.80 N, 102.75 E.",
        "narrative": "Een enorme vloed verwoest de wereld. Gun faalt in de beheersing ervan, maar zijn zoon Yu slaagt erin de wateren via uitbaggering en kanalisering te bedwingen, waardoor de bewoonbare orde en beschaafd bestuur worden hersteld. Het verhaal lijkt minder op de ark van Noach dan andere overleveringen, omdat het draait om waterbeheersing in plaats van om een gezin dat in een schip overleeft. De hoofdparallellen zijn een catastrofale vloed, een uitverkoren cultuurheld, het behoud van de samenleving en vernieuwing na de ramp.",
        "chronology": "Bewaarde schriftelijke vormen verschijnen vooral in teksten uit de periode van de Strijdende Staten en het vroege keizerrijk. Het hoofdstuk Yu Gong in het Boek der Documenten wordt in modern onderzoek vaak in de vijfde eeuw v.Chr. of later geplaatst, hoewel het verhaal Yu veel ouder voorstelt.",
        "evidence": "Een Science-artikel uit 2016 stelde een door aardbeving veroorzaakte uitbraakvloed na een aardverschuivingsdam in de Jishi-kloof rond 1920 v.Chr. voor als mogelijke historische kern van de Grote Vloed en de Xia-stichtingstradities. Die interpretatie wordt betwist; critici stellen dat teksttraditie en fysiek bewijs zich niet veilig tot één gebeurtenis laten terugbrengen."
      }
    },
    "de": {
      "title": "4. Die große Flut von Gun und Yu",
      "subtitle": "Frühe chinesische Tradition",
      "text": "Eine gewaltige Flut verwüstet die Welt. Gun scheitert an ihrer Kontrolle, und sein Sohn Yu gelingt es, die Wasser durch Ausbaggern und Kanalisieren zu bändigen und so eine bewohnbare Ordnung wiederherzustellen.",
      "date": "Erhaltene schriftliche Formen erscheinen vor allem in Texten aus der Zeit der Streitenden Reiche und der frühen Kaiserzeit. Das Kapitel Yu Gong im Buch der Urkunden wird von der modernen Forschung oft ins 5. Jahrhundert v. Chr. oder später datiert, obwohl die Erzählung Yu als weit älter darstellt.",
      "details": {
        "classification": "Frühe chinesische Tradition.",
        "geographicLocation": "Die Welt des Gelben Flusses in Nordchina. Ein nützlicher Marker ist die Jishi-Schlucht am Oberlauf des Gelben Flusses nahe der heutigen Grenze zwischen Qinghai und Gansu, weil sie in einer wichtigen geologischen Hypothese zu dieser Tradition eine zentrale Rolle spielt.",
        "mapPlacement": "Ca. 35.80 N, 102.75 E.",
        "narrative": "Eine gewaltige Flut verwüstet die Welt. Gun scheitert daran, sie zu beherrschen, doch seinem Sohn Yu gelingt es, die Wasser durch Ausbaggern und Kanalisieren zu bändigen, eine bewohnbare Ordnung wiederherzustellen und zivilisierte Herrschaft zu ermöglichen. Die Erzählung ist weniger arkartig als die Geschichte Noahs, weil sie sich stärker auf Flutkontrolle als auf das Überleben einer Familie im Schiff konzentriert. Die Hauptparallelen sind eine katastrophale Flut, ein auserwählter Kulturheld, die Bewahrung der Gesellschaft und die Erneuerung danach.",
        "chronology": "Erhaltene schriftliche Formen erscheinen vor allem in Texten aus der Zeit der Streitenden Reiche und der frühen Kaiserzeit. Das Kapitel Yu Gong im Buch der Urkunden wird von der modernen Forschung oft ins 5. Jahrhundert v. Chr. oder später datiert, obwohl die Erzählung Yu als weit älter darstellt.",
        "evidence": "Ein 2016 in Science erschienener Artikel schlug eine durch Erdbeben ausgelöste Ausbruchflut nach einem Erdrutschdamm in der Jishi-Schlucht um 1920 v. Chr. als möglichen historischen Kern der Großen Flut und der Xia-Gründungstraditionen vor. Diese Deutung ist umstritten; Kritiker argumentieren, dass sich Textüberlieferung und physische Evidenz nicht sicher auf ein einziges Ereignis zurückführen lassen."
      }
    },
    "ja": {
      "title": "4. 鯀と禹の大洪水",
      "subtitle": "初期中国伝承",
      "text": "巨大な洪水が世界を荒廃させる。鯀はそれを制御できず、子の禹が浚渫と水路整備によって水を治め、居住可能な秩序を回復する。",
      "date": "現存する文書形態は主として戦国時代から初期帝政期の文献に見られる。『尚書』の「禹貢」篇は現代研究では紀元前5世紀以降に置かれることが多いが、物語自体は禹をはるかに古い存在として描く。",
      "details": {
        "classification": "初期中国伝承。",
        "geographicLocation": "中国北部の黄河世界。実用的な地図上の指標は、現在の青海省と甘粛省の境界近くにある黄河上流の積石峡で、この伝承に関する重要な地質学的仮説の中心に位置している。",
        "mapPlacement": "北緯35.80度、東経102.75度付近。",
        "narrative": "巨大な洪水が世界を荒廃させる。鯀は制御に失敗し、子の禹が浚渫と水路整備によって水を治め、居住可能な秩序と文明的統治を回復する。この物語は、家族が船で洪水をやり過ごす型ではなく、水制御そのものに重点を置くため、ノアの箱舟型の物語とはやや異なる。主要な共通点は壊滅的洪水、選ばれた文化英雄、社会の保存、そして事後の再生である。",
        "chronology": "現存する文書形態は主として戦国時代から初期帝政期の文献に見られる。『尚書』の「禹貢」篇は現代研究では紀元前5世紀以降に置かれることが多いが、物語自体は禹をはるかに古い存在として描く。",
        "evidence": "2016年の Science 論文は、紀元前1920年ごろの積石峡における地震誘発の地すべり天然ダム決壊洪水を、「大洪水」および夏王朝創始伝承の歴史的中核候補として提案した。この解釈には異論があり、本文伝承と自然科学的証拠を単一の出来事に安全に還元することはできないとする批判も多い。"
      }
    },
    "zh-CN": {
      "title": "4. 鲧禹大洪水",
      "subtitle": "早期中国传统",
      "text": "一场巨大的洪水摧毁了世界。鲧治水失败，而其子禹通过疏浚与导流成功治理洪水，恢复了可居住的秩序。",
      "date": "现存成文版本主要见于战国和早期帝国时期文献。《尚书》中的《禹贡》篇在现代学术中通常被定到公元前5世纪或更晚，尽管故事把禹描绘成远更早的人物。",
      "details": {
        "classification": "早期中国传统。",
        "geographicLocation": "中国北方的黄河世界。一个有用的地图标记是黄河上游的积石峡，位于今青海与甘肃交界附近，因为它是关于这一传统的一项重要地质假说的核心地点。",
        "mapPlacement": "约北纬35.80度，东经102.75度。",
        "narrative": "一场巨大的洪水摧毁了世界。鲧治水失败，而其子禹通过疏浚与导流成功治理洪水，恢复了可居住的秩序，也为文明统治奠定基础。这个故事不像诺亚方舟那样强调一家人乘船避难，而更重在洪水治理。它与其他洪水叙事的主要平行之处在于灾难性洪水、被拣选的文化英雄、社会的保全以及灾后的重建。",
        "chronology": "现存成文版本主要见于战国和早期帝国时期文献。《尚书》中的《禹贡》篇在现代学术中通常被定到公元前5世纪或更晚，尽管故事把禹描绘成远更早的人物。",
        "evidence": "2016年发表在《Science》上的论文提出，约公元前1920年积石峡一次由地震触发、滑坡堰塞坝溃决造成的大洪水，可能构成“大洪水”及夏朝建国传统的历史核心。这一解释仍有争议；批评者认为，文本传统和自然证据都不能被可靠地压缩成单一事件。"
      }
    },
    "hi": {
      "title": "4. गुन और यू का महान जलप्रलय",
      "subtitle": "प्रारंभिक चीनी परंपरा",
      "text": "एक विशाल बाढ़ संसार को तबाह कर देती है। गुन उसे नियंत्रित करने में असफल रहता है, और उसका पुत्र यू जलनिकास और नहरों के माध्यम से जल को साधकर रहने योग्य व्यवस्था बहाल करता है।",
      "date": "उपलब्ध लिखित रूप मुख्यतः युद्धरत राज्यों के काल और प्रारंभिक साम्राज्यकालीन ग्रंथों में मिलते हैं। 'बुक ऑफ डॉक्युमेंट्स' का 'यू गोंग' अध्याय आधुनिक शोध में प्रायः पाँचवीं शताब्दी ईसा पूर्व या उसके बाद का माना जाता है, यद्यपि कथा यू को उससे कहीं अधिक प्राचीन रूप में प्रस्तुत करती है।",
      "details": {
        "classification": "प्रारंभिक चीनी परंपरा।",
        "geographicLocation": "उत्तरी चीन की पीली नदी की दुनिया। एक उपयोगी मानचित्र-चिह्न ऊपरी पीली नदी पर जिशी गर्ज है, जो वर्तमान छिंगहाई-गांसू सीमा के निकट है, क्योंकि इस परंपरा से जुड़ी एक महत्वपूर्ण भूवैज्ञानिक परिकल्पना में उसका केंद्रीय स्थान है।",
        "mapPlacement": "लगभग 35.80 उ., 102.75 पू.",
        "narrative": "एक विशाल बाढ़ संसार को तबाह कर देती है। गुन उसे नियंत्रित करने में असफल रहता है, लेकिन उसका पुत्र यू जल को खोदकर और नहरों में मोड़कर उसे नियंत्रित करने में सफल होता है, जिससे रहने योग्य व्यवस्था और सभ्य शासन पुनर्स्थापित होते हैं। यह कथा नूह की नाव जैसी कम है, क्योंकि इसका केंद्र परिवार का नाव में बचना नहीं, बल्कि बाढ़-नियंत्रण है। इसके मुख्य समानांतर हैं विनाशकारी बाढ़, चुना हुआ सांस्कृतिक नायक, समाज का संरक्षण, और बाद की पुनर्स्थापना।",
        "chronology": "उपलब्ध लिखित रूप मुख्यतः युद्धरत राज्यों के काल और प्रारंभिक साम्राज्यकालीन ग्रंथों में मिलते हैं। 'बुक ऑफ डॉक्युमेंट्स' का 'यू गोंग' अध्याय आधुनिक शोध में प्रायः पाँचवीं शताब्दी ईसा पूर्व या उसके बाद का माना जाता है, यद्यपि कथा यू को उससे कहीं अधिक प्राचीन रूप में प्रस्तुत करती है।",
        "evidence": "2016 के Science लेख ने लगभग 1920 ईसा पूर्व जिशी गर्ज में भूस्खलन-बंध के टूटने से उत्पन्न, भूकंप-प्रेरित महाबाढ़ को महान जलप्रलय और शिया स्थापना-परंपराओं के संभावित ऐतिहासिक केंद्र के रूप में प्रस्तावित किया। यह व्याख्या विवादित है; आलोचकों का कहना है कि पाठ-परंपरा और भौतिक साक्ष्य को सुरक्षित रूप से किसी एक घटना में सीमित नहीं किया जा सकता।"
      }
    },
    "ru": {
      "title": "4. Великий потоп Гуня и Юя",
      "subtitle": "Ранняя китайская традиция",
      "text": "Огромный потоп опустошает мир. Гунь не справляется с ним, а его сын Юй побеждает воды, расчищая и направляя русла, и восстанавливает пригодный для жизни порядок.",
      "date": "Сохранившиеся письменные формы встречаются главным образом в текстах эпохи Сражающихся царств и ранней империи. Глава Юй гун в Книге документов часто датируется современной наукой V веком до н. э. или позже, хотя сам сюжет представляет Юя как гораздо более древнего героя.",
      "details": {
        "classification": "Ранняя китайская традиция.",
        "geographicLocation": "Мир Хуанхэ в Северном Китае. Полезной точкой служит ущелье Цзиши в верховьях Хуанхэ, близ современной границы Цинхая и Ганьсу, поскольку оно занимает центральное место в важной геологической гипотезе об этой традиции.",
        "mapPlacement": "Ок. 35.80 с. ш., 102.75 в. д.",
        "narrative": "Огромный потоп опустошает мир. Гунь терпит неудачу, пытаясь его сдержать, а его сын Юй добивается успеха, расчищая и канализируя воды, восстанавливая пригодный для жизни порядок и возможность цивилизованного правления. Этот сюжет менее похож на Ноев ковчег, чем многие другие рассказы о потопе, потому что в центре находится не выживание семьи на судне, а управление наводнением. Главные параллели - водная катастрофа, избранный культурный герой, сохранение общества и обновление после бедствия.",
        "chronology": "Сохранившиеся письменные формы встречаются главным образом в текстах эпохи Сражающихся царств и ранней империи. Глава Юй гун в Книге документов часто датируется современной наукой V веком до н. э. или позже, хотя сам сюжет представляет Юя как гораздо более древнего героя.",
        "evidence": "Статья в Science 2016 года предложила гипотезу, что около 1920 года до н. э. в ущелье Цзиши произошел вызванный землетрясением прорывной паводок после оползневой плотины, который мог стать историческим ядром преданий о Великом потопе и основании Ся. Это толкование оспаривается; критики считают, что текстовая традиция и физические данные не сводятся надежно к одному событию."
      }
    }
  },
  "myth-005-nuu-and-the-flood-of-kai-a-ka-hinalii": {
    "es": {
      "title": "5. Nuu y el diluvio de Kai-a-ka-hinalii",
      "subtitle": "Hawaiano",
      "text": "En la versión registrada más conocida, Nuu construye una gran embarcación con una superestructura semejante a una casa y sobrevive a una gran inundación con su familia.",
      "date": "La noticia escrita más antigua conocida está vinculada a la visita de William Ellis en 1823, después de que los hawaianos escucharan un sermón que mencionaba a Noé. Versiones posteriores del siglo XIX ampliaron la forma de canoa o casa flotante.",
      "details": {
        "classification": "Hawaiano.",
        "geographicLocation": "Isla de Hawái, en Polinesia, especialmente Mauna Kea como lugar de reposo o refugio en las versiones registradas; actual estado de Hawái, Estados Unidos.",
        "mapPlacement": "Aprox. 19.82 N, 155.47 O.",
        "narrative": "En la versión registrada más conocida, Nuu construye una gran embarcación con una superestructura semejante a una casa y sobrevive a una gran inundación con su familia. Las aguas descienden, la embarcación se posa en Mauna Kea, Nuu ofrece sacrificio y Kane corrige su culto equivocado, a veces apareciendo con un arcoíris. El relato se parece mucho a Noé por la embarcación, el superviviente escogido, la supervivencia familiar, el descanso en una montaña, el sacrificio y la reconciliación posterior.",
        "chronology": "La noticia escrita más antigua conocida está vinculada a la visita de William Ellis en 1823, después de que los hawaianos escucharan un sermón que mencionaba a Noé. Versiones posteriores del siglo XIX ampliaron la forma de canoa o casa flotante.",
        "evidence": "Este caso exige cautela, porque estudiosos como Beckwith subrayaron la fuerte analogía bíblica en las formas del relato registradas en época misionera. De manera independiente, investigaciones paleotsunámicas en Nuu Refuge, Maui, han identificado depósitos marinos de inundación de alta energía, lo que muestra que las tradiciones orales hawaianas pueden cruzarse con peligros marinos reales. Eso no demuestra que esta historia concreta de Nuu conserve la memoria directa de ese evento."
      }
    },
    "pt-BR": {
      "title": "5. Nuu e o dilúvio de Kai-a-ka-hinalii",
      "subtitle": "Havaiano",
      "text": "Na versão registrada mais conhecida, Nuu constrói uma grande embarcação com uma superestrutura semelhante a uma casa e sobrevive a uma grande inundação com sua família.",
      "date": "O registro escrito mais antigo conhecido está ligado à visita de William Ellis em 1823, depois de os havaianos terem ouvido um sermão que mencionava Noé. Versões posteriores do século XIX ampliaram a forma de canoa ou casa flutuante.",
      "details": {
        "classification": "Havaiano.",
        "geographicLocation": "Ilha do Havaí, na Polinésia, especialmente Mauna Kea como local de pouso ou refúgio nas versões registradas; atual estado do Havaí, Estados Unidos.",
        "mapPlacement": "Aprox. 19.82 N, 155.47 O.",
        "narrative": "Na versão registrada mais conhecida, Nuu constrói uma grande embarcação com uma superestrutura semelhante a uma casa e sobrevive a uma grande inundação com sua família. As águas baixam, a embarcação repousa em Mauna Kea, Nuu oferece sacrifício e Kane corrige sua adoração equivocada, às vezes aparecendo com um arco-íris. A narrativa é muito parecida com a de Noé em termos de embarcação, sobrevivente escolhido, salvação da família, repouso numa montanha, sacrifício e reconciliação posterior.",
        "chronology": "O registro escrito mais antigo conhecido está ligado à visita de William Ellis em 1823, depois de os havaianos terem ouvido um sermão que mencionava Noé. Versões posteriores do século XIX ampliaram a forma de canoa ou casa flutuante.",
        "evidence": "Este caso exige cautela, porque estudiosos como Beckwith observaram forte analogia bíblica nas formas da narrativa registradas no período missionário. Independentemente disso, pesquisas paleotsunâmicas em Nuu Refuge, em Maui, identificaram depósitos marinhos de inundação de alta energia, mostrando que tradições orais havaianas podem se cruzar com perigos marinhos reais. Isso não prova que a história específica de Nuu preserve diretamente a memória desse evento."
      }
    },
    "it": {
      "title": "5. Nuu e il diluvio di Kai-a-ka-hinalii",
      "subtitle": "Hawaiano",
      "text": "Nella versione registrata più nota, Nuu costruisce una grande imbarcazione con una sovrastruttura simile a una casa e sopravvive con la sua famiglia a una grande inondazione.",
      "date": "La più antica attestazione scritta nota è legata alla visita di William Ellis nel 1823, dopo che gli hawaiani avevano ascoltato un sermone che menzionava Noè. Versioni successive del XIX secolo ampliarono la forma della canoa o della casa galleggiante.",
      "details": {
        "classification": "Hawaiano.",
        "geographicLocation": "Isola di Hawaii in Polinesia, soprattutto Mauna Kea come luogo di approdo o rifugio nelle versioni registrate; attuale Stato delle Hawaii, Stati Uniti.",
        "mapPlacement": "Circa 19.82 N, 155.47 O.",
        "narrative": "Nella versione registrata più nota, Nuu costruisce una grande imbarcazione con una sovrastruttura simile a una casa e sopravvive con la sua famiglia a una grande inondazione. Le acque si ritirano, l'imbarcazione si posa sul Mauna Kea, Nuu offre un sacrificio e Kane corregge il suo culto erroneo, talvolta apparendo con un arcobaleno. Il racconto è molto simile a quello di Noè per imbarcazione, sopravvissuto scelto, salvezza familiare, approdo montano, sacrificio e riconciliazione finale.",
        "chronology": "La più antica attestazione scritta nota è legata alla visita di William Ellis nel 1823, dopo che gli hawaiani avevano ascoltato un sermone che menzionava Noè. Versioni successive del XIX secolo ampliarono la forma della canoa o della casa galleggiante.",
        "evidence": "Questo caso richiede cautela, perché studiosi come Beckwith hanno sottolineato la forte analogia biblica nelle forme del racconto registrate in età missionaria. Indipendentemente da ciò, ricerche paleotsunami a Nuu Refuge, a Maui, hanno identificato depositi marini di inondazione ad alta energia, mostrando che le tradizioni orali hawaiane possono intersecare reali rischi marini. Ciò non dimostra che questo specifico racconto di Nuu conservi direttamente la memoria di quell'evento."
      }
    },
    "fr": {
      "title": "5. Nuu et le déluge de Kai-a-ka-hinalii",
      "subtitle": "Hawaïen",
      "text": "Dans la version enregistrée la plus connue, Nuu construit une grande embarcation dotée d'une superstructure en forme de maison et survit à une grande inondation avec sa famille.",
      "date": "Le plus ancien témoignage écrit connu est lié à la visite de William Ellis en 1823, après que des Hawaïens eurent entendu un sermon mentionnant Noé. Des versions ultérieures du XIXe siècle développèrent davantage la forme de la pirogue ou de la maison flottante.",
      "details": {
        "classification": "Hawaïen.",
        "geographicLocation": "Île d'Hawaï en Polynésie, en particulier le Mauna Kea comme lieu d'échouage ou de refuge dans les versions enregistrées ; actuel État d'Hawaï, États-Unis.",
        "mapPlacement": "Env. 19.82 N, 155.47 O.",
        "narrative": "Dans la version enregistrée la plus connue, Nuu construit une grande embarcation dotée d'une superstructure en forme de maison et survit à une grande inondation avec sa famille. Les eaux se retirent, l'embarcation repose sur le Mauna Kea, Nuu offre un sacrifice et Kane corrige son culte erroné, apparaissant parfois avec un arc-en-ciel. Le récit est très proche de Noé par l'embarcation, le survivant choisi, la survie familiale, l'arrêt sur une montagne, le sacrifice et la réconciliation finale.",
        "chronology": "Le plus ancien témoignage écrit connu est lié à la visite de William Ellis en 1823, après que des Hawaïens eurent entendu un sermon mentionnant Noé. Des versions ultérieures du XIXe siècle développèrent davantage la forme de la pirogue ou de la maison flottante.",
        "evidence": "Ce cas demande de la prudence, car des chercheurs comme Beckwith ont souligné la forte analogie biblique des formes du récit enregistrées à l'époque missionnaire. Indépendamment de cela, des recherches paléotsunamis à Nuu Refuge, sur Maui, ont identifié des dépôts marins de submersion à haute énergie, montrant que les traditions orales hawaïennes peuvent croiser de véritables aléas marins. Cela ne prouve pas que ce récit précis de Nuu conserve directement la mémoire de cet événement."
      }
    },
    "nl": {
      "title": "5. Nuu en de vloed van Kai-a-ka-hinalii",
      "subtitle": "Hawaïaans",
      "text": "In de bekendste opgetekende versie bouwt Nuu een groot vaartuig met een huisachtige bovenbouw en overleeft hij samen met zijn familie een grote overstroming.",
      "date": "De vroegst bekende schriftelijke vermelding hangt samen met William Ellis' bezoek in 1823, nadat Hawaïanen een preek hadden gehoord waarin Noach werd genoemd. Latere negentiende-eeuwse versies werkten de kano- of woonbootvorm verder uit.",
      "details": {
        "classification": "Hawaïaans.",
        "geographicLocation": "Het eiland Hawaï in Polynesië, vooral Mauna Kea als landings- of toevluchtsoord in de opgetekende versies; huidige staat Hawaï, Verenigde Staten.",
        "mapPlacement": "Ca. 19.82 N, 155.47 W.",
        "narrative": "In de bekendste opgetekende versie bouwt Nuu een groot vaartuig met een huisachtige bovenbouw en overleeft hij samen met zijn familie een grote overstroming. Het water zakt, het vaartuig komt op Mauna Kea tot rust, Nuu brengt een offer en Kane corrigeert zijn verkeerde verering, soms terwijl hij met een regenboog verschijnt. Het verhaal lijkt sterk op Noach door het vaartuig, de uitverkoren overlevende, het overleven van het gezin, de berglanding, het offer en de latere verzoening.",
        "chronology": "De vroegst bekende schriftelijke vermelding hangt samen met William Ellis' bezoek in 1823, nadat Hawaïanen een preek hadden gehoord waarin Noach werd genoemd. Latere negentiende-eeuwse versies werkten de kano- of woonbootvorm verder uit.",
        "evidence": "Deze casus vraagt om voorzichtigheid, omdat onderzoekers als Beckwith hebben gewezen op sterke bijbelse analogieën in de tijdens de zendingsperiode opgetekende vormen van het verhaal. Onafhankelijk daarvan hebben paleotsunami-onderzoeken bij Nuu Refuge op Maui mariene afzettingen van hoog-energetische overstroming aangetoond, wat laat zien dat Hawaïaanse mondelinge tradities echte mariene gevaren kunnen weerspiegelen. Dat bewijst nog niet dat juist dit Nuu-verhaal rechtstreeks dat specifieke voorval herinnert."
      }
    },
    "de": {
      "title": "5. Nuu und die Flut von Kai-a-ka-hinalii",
      "subtitle": "Hawaiisch",
      "text": "In der bekanntesten aufgezeichneten Version baut Nuu ein großes Fahrzeug mit hausartigem Aufbau und überlebt mit seiner Familie eine große Überschwemmung.",
      "date": "Die früheste bekannte schriftliche Notiz hängt mit William Ellis' Besuch im Jahr 1823 zusammen, nachdem Hawaiianer eine Predigt gehört hatten, in der Noah erwähnt wurde. Spätere Fassungen des 19. Jahrhunderts bauten die Form von Kanu oder Hausboot weiter aus.",
      "details": {
        "classification": "Hawaiisch.",
        "geographicLocation": "Die Insel Hawaiʻi in Polynesien, besonders Mauna Kea als Lande- oder Zufluchtsort in den aufgezeichneten Versionen; heutiger Bundesstaat Hawaiʻi, USA.",
        "mapPlacement": "Ca. 19.82 N, 155.47 W.",
        "narrative": "In der bekanntesten aufgezeichneten Version baut Nuu ein großes Fahrzeug mit hausartigem Aufbau und überlebt mit seiner Familie eine große Überschwemmung. Die Wasser gehen zurück, das Fahrzeug kommt auf Mauna Kea zur Ruhe, Nuu bringt ein Opfer dar, und Kane korrigiert seine fehlgeleitete Verehrung, manchmal unter einem Regenbogen. Die Erzählung ist sehr noahähnlich in Bezug auf Fahrzeug, ausgewählten Überlebenden, Familienschutz, Berglandung, Opfer und spätere Versöhnung.",
        "chronology": "Die früheste bekannte schriftliche Notiz hängt mit William Ellis' Besuch im Jahr 1823 zusammen, nachdem Hawaiianer eine Predigt gehört hatten, in der Noah erwähnt wurde. Spätere Fassungen des 19. Jahrhunderts bauten die Form von Kanu oder Hausboot weiter aus.",
        "evidence": "Dieser Fall erfordert Vorsicht, weil Forschende wie Beckwith auf starke biblische Analogien in den missionarszeitlich aufgezeichneten Formen der Erzählung hingewiesen haben. Unabhängig davon haben paläotsunamische Untersuchungen im Nuu Refuge auf Maui hochenergetische marine Überschwemmungsablagerungen nachgewiesen, was zeigt, dass hawaiische mündliche Traditionen reale Meeresgefahren berühren können. Das beweist jedoch nicht, dass gerade diese Nuu-Erzählung jenes Ereignis direkt erinnert."
      }
    },
    "ja": {
      "title": "5. ヌウとカイ・ア・カ・ヒナリイの洪水",
      "subtitle": "ハワイ伝承",
      "text": "もっともよく知られた記録版では、ヌウは家のような上部構造を持つ大きな船を造り、家族とともに大洪水を生き延びる。",
      "date": "最古の既知の文書記録は1823年のウィリアム・エリスの訪問に結び付けられており、その前にハワイの人々はノアに言及する説教を聞いていた。19世紀後半の版では、カヌーあるいは家船としての形態がさらに発達した。",
      "details": {
        "classification": "ハワイ伝承。",
        "geographicLocation": "ポリネシアのハワイ島、とくに記録された版では着地地点または避難地点としてのマウナ・ケア。現在のアメリカ合衆国ハワイ州。",
        "mapPlacement": "北緯19.82度、西経155.47度付近。",
        "narrative": "もっともよく知られた記録版では、ヌウは家のような上部構造を持つ大きな船を造り、家族とともに大洪水を生き延びる。水が引くと船はマウナ・ケアにとどまり、ヌウは供犠を捧げ、カネがときに虹とともに現れて彼の誤った礼拝を正す。この物語は、船、選ばれた生存者、家族の生存、山への着地、供犠、和解という点でノアに非常によく似ている。",
        "chronology": "最古の既知の文書記録は1823年のウィリアム・エリスの訪問に結び付けられており、その前にハワイの人々はノアに言及する説教を聞いていた。19世紀後半の版では、カヌーあるいは家船としての形態がさらに発達した。",
        "evidence": "この事例には注意が必要である。ベックウィズのような研究者は、宣教師時代に記録された形態に強い聖書的類似があると指摘している。一方で、マウイ島のヌウ・レフュージにおける古津波研究は、高エネルギーの海成浸水堆積物を確認しており、ハワイの口承伝統が実際の海洋災害と交差し得ることを示している。ただし、それはこのヌウ伝承がその出来事を直接記憶していることの証明ではない。"
      }
    },
    "zh-CN": {
      "title": "5. 努乌与凯阿卡希纳利伊洪水",
      "subtitle": "夏威夷传统",
      "text": "在最著名的成文版本中，努乌建造了一艘带有房屋式上层结构的大船，并与家人一起在大洪水中幸存。",
      "date": "已知最早的书面记载与威廉·埃利斯1823年的访问有关，当时夏威夷人刚听过一篇提到诺亚的讲道。19世纪后来的版本进一步扩展了独木舟或船屋的形式。",
      "details": {
        "classification": "夏威夷传统。",
        "geographicLocation": "波利尼西亚的夏威夷岛，尤其是成文版本中作为停泊或避难地点的莫纳克亚山；今美国夏威夷州。",
        "mapPlacement": "约北纬19.82度，西经155.47度。",
        "narrative": "在最著名的成文版本中，努乌建造了一艘带有房屋式上层结构的大船，并与家人一起在大洪水中幸存。洪水退去后，船停在莫纳克亚山上，努乌献祭，而卡内纠正了他错误的崇拜，有时还伴随着彩虹出现。这个故事在船只、被拣选的幸存者、家庭幸存、山上停泊、献祭和事后和解等方面都非常接近诺亚故事。",
        "chronology": "已知最早的书面记载与威廉·埃利斯1823年的访问有关，当时夏威夷人刚听过一篇提到诺亚的讲道。19世纪后来的版本进一步扩展了独木舟或船屋的形式。",
        "evidence": "这个案例需要谨慎对待，因为贝克威思等学者指出，传教士时期记录下来的版本与《圣经》之间存在强烈类比。另一方面，毛伊岛 Nuu Refuge 的古海啸研究发现了高能海洋淹没沉积，这说明夏威夷口述传统确实可能与真实海洋灾害相交汇。但这并不能证明这则努乌故事本身就直接保存了那次事件的记忆。"
      }
    },
    "hi": {
      "title": "5. नुउ और काइ-आ-का-हिनालिई की बाढ़",
      "subtitle": "हवाईयन",
      "text": "सबसे प्रसिद्ध दर्ज संस्करण में नुउ एक बड़े पात्र का निर्माण करता है, जिसकी ऊपरी संरचना घर जैसी है, और अपने परिवार के साथ एक महान बाढ़ से बच निकलता है।",
      "date": "सबसे प्रारंभिक ज्ञात लिखित उल्लेख 1823 में विलियम एलिस की यात्रा से जुड़ा है, जब हवाई निवासियों ने नूह का उल्लेख करने वाला एक उपदेश सुना था। उन्नीसवीं शताब्दी के बाद के संस्करणों ने डोंगी या तैरते घर के रूप को और विस्तृत किया।",
      "details": {
        "classification": "हवाईयन।",
        "geographicLocation": "पोलीनेशिया का हवाई द्वीप, विशेष रूप से दर्ज संस्करणों में अवतरण या शरण-स्थान के रूप में मौना केआ; वर्तमान हवाई राज्य, संयुक्त राज्य अमेरिका।",
        "mapPlacement": "लगभग 19.82 उ., 155.47 प.",
        "narrative": "सबसे प्रसिद्ध दर्ज संस्करण में नुउ एक बड़े पात्र का निर्माण करता है, जिसकी ऊपरी संरचना घर जैसी है, और अपने परिवार के साथ एक महान बाढ़ से बच निकलता है। जल उतरता है, वह पात्र मौना केआ पर ठहरता है, नुउ बलि चढ़ाता है, और काने उसकी गलत पूजा को सुधारता है, कभी-कभी इंद्रधनुष के साथ प्रकट होकर। नौका, चुने हुए जीवित बचे व्यक्ति, परिवार की रक्षा, पर्वत पर ठहरना, बलि और बाद की मेल-मिलाप की दृष्टि से यह कथा नूह से बहुत मिलती-जुलती है।",
        "chronology": "सबसे प्रारंभिक ज्ञात लिखित उल्लेख 1823 में विलियम एलिस की यात्रा से जुड़ा है, जब हवाई निवासियों ने नूह का उल्लेख करने वाला एक उपदेश सुना था। उन्नीसवीं शताब्दी के बाद के संस्करणों ने डोंगी या तैरते घर के रूप को और विस्तृत किया।",
        "evidence": "इस मामले में सावधानी आवश्यक है, क्योंकि बेकेविथ जैसे विद्वानों ने मिशनरी-युग में दर्ज रूपों में मजबूत बाइबिलीय समानता की ओर ध्यान दिलाया है। स्वतंत्र रूप से, माउई के नुउ रिफ्यूज में पालीयो-सुनामी अनुसंधान ने उच्च-ऊर्जा समुद्री जलप्रवेश-निक्षेप पहचाने हैं, जिससे पता चलता है कि हवाईयन मौखिक परंपराएँ वास्तविक समुद्री खतरों से जुड़ सकती हैं। इससे यह सिद्ध नहीं होता कि नुउ की यह विशेष कथा उसी घटना की सीधी स्मृति है।"
      }
    },
    "ru": {
      "title": "5. Нуу и потоп Кай-а-ка-Хиналии",
      "subtitle": "Гавайская традиция",
      "text": "В наиболее известной записанной версии Нуу строит большое судно с надстройкой, похожей на дом, и вместе с семьей переживает великое наводнение.",
      "date": "Самое раннее известное письменное упоминание связано с визитом Уильяма Эллиса в 1823 году, после того как гавайцы услышали проповедь, где упоминался Ной. Более поздние версии XIX века развили образ каноэ или лодки-дома.",
      "details": {
        "classification": "Гавайская традиция.",
        "geographicLocation": "Остров Гавайи в Полинезии, особенно Мауна-Кеа как место остановки или убежища в записанных версиях; современный штат Гавайи, США.",
        "mapPlacement": "Ок. 19.82 с. ш., 155.47 з. д.",
        "narrative": "В наиболее известной записанной версии Нуу строит большое судно с надстройкой, похожей на дом, и вместе с семьей переживает великое наводнение. Воды спадают, судно останавливается на Мауна-Кеа, Нуу приносит жертву, а Кане исправляет его ошибочное поклонение, иногда являясь с радугой. Рассказ очень близок к истории Ноя по мотивам судна, избранного выжившего, спасения семьи, горной посадки, жертвы и последующего примирения.",
        "chronology": "Самое раннее известное письменное упоминание связано с визитом Уильяма Эллиса в 1823 году, после того как гавайцы услышали проповедь, где упоминался Ной. Более поздние версии XIX века развили образ каноэ или лодки-дома.",
        "evidence": "Здесь необходима осторожность, потому что такие исследователи, как Беквит, подчеркивали сильную библейскую аналогию в формах рассказа, записанных в миссионерскую эпоху. Независимо от этого, палеоцунамические исследования в Nuu Refuge на Мауи выявили высокоэнергетические морские отложения затопления, показывая, что гавайские устные традиции могут соприкасаться с реальными морскими опасностями. Однако это не доказывает, что именно история Нуу напрямую хранит память об этом событии."
      }
    }
  },
  "myth-006-qat-and-the-banks-islands-deluge": {
    "es": {
      "title": "6. Qat y el diluvio de las islas Banks",
      "subtitle": "Islas Banks",
      "text": "Qat construye una gran canoa en tierra seca mientras los demás se burlan de él.",
      "date": "Quedó documentado de forma segura por primera vez en la etnografía de finales del siglo XIX, especialmente en la obra de R. H. Codrington sobre Melanesia de 1891, aunque la tradición oral es anterior.",
      "details": {
        "classification": "Islas Banks / norte de Vanuatu, tradición oral melanesia.",
        "geographicLocation": "Islas Banks, especialmente Gaua, en el actual Vanuatu.",
        "mapPlacement": "Aprox. 14.25 S, 167.59 E.",
        "narrative": "Qat construye una gran canoa en tierra seca mientras los demás se burlan de él. Embarca a su familia y a los seres vivos de la isla, incluidos animales muy pequeños, se encierra y ruega por lluvia. Sigue un diluvio que abre un canal hacia el mar y deja un lago donde antes había una llanura. Los motivos incluyen conocimiento previo, burla, gran embarcación, preservación de la familia y de los animales, inundación catastrófica y renovación del paisaje.",
        "chronology": "Quedó documentado de forma segura por primera vez en la etnografía de finales del siglo XIX, especialmente en la obra de R. H. Codrington sobre Melanesia de 1891, aunque la tradición oral es anterior.",
        "evidence": "La historia está vinculada a la topografía local y funciona en parte como explicación etiológica de un canal y de un lago. No hallé un estudio geológico firmemente datado que relacione este relato concreto con un solo acontecimiento, de modo que la conexión histórica sigue sin demostrarse."
      }
    },
    "pt-BR": {
      "title": "6. Qat e o dilúvio das ilhas Banks",
      "subtitle": "Ilhas Banks",
      "text": "Qat constrói uma grande canoa em terra seca enquanto os outros zombam dele.",
      "date": "Foi documentado com segurança pela primeira vez na etnografia do fim do século XIX, especialmente na obra de R. H. Codrington sobre a Melanésia, de 1891, embora a tradição oral seja mais antiga.",
      "details": {
        "classification": "Ilhas Banks / norte de Vanuatu, tradição oral melanésia.",
        "geographicLocation": "Ilhas Banks, especialmente Gaua, no atual Vanuatu.",
        "mapPlacement": "Aprox. 14.25 S, 167.59 E.",
        "narrative": "Qat constrói uma grande canoa em terra seca enquanto os outros zombam dele. Ele leva a bordo sua família e os seres vivos da ilha, inclusive animais muito pequenos, fecha-se dentro e reza por chuva. Segue-se um dilúvio que abre um canal até o mar e deixa um lago onde antes havia uma planície. Os motivos incluem conhecimento prévio, zombaria, grande embarcação, preservação da família e dos animais, inundação catastrófica e renovação da paisagem.",
        "chronology": "Foi documentado com segurança pela primeira vez na etnografia do fim do século XIX, especialmente na obra de R. H. Codrington sobre a Melanésia, de 1891, embora a tradição oral seja mais antiga.",
        "evidence": "A história está ligada à topografia local e funciona em parte como explicação etiológica de um canal e de um lago. Não encontrei estudo geológico seguramente datado que vincule esse relato específico a um único evento, de modo que a conexão histórica permanece não comprovada."
      }
    },
    "it": {
      "title": "6. Qat e il diluvio delle isole Banks",
      "subtitle": "Isole Banks",
      "text": "Qat costruisce una grande canoa sulla terraferma mentre gli altri lo deridono.",
      "date": "È attestato con sicurezza per la prima volta nell'etnografia di fine Ottocento, soprattutto nell'opera di R. H. Codrington del 1891 sulla Melanesia, anche se la tradizione orale è più antica.",
      "details": {
        "classification": "Isole Banks / Vanuatu settentrionale, tradizione orale melanesiana.",
        "geographicLocation": "Isole Banks, soprattutto Gaua, nell'attuale Vanuatu.",
        "mapPlacement": "Circa 14.25 S, 167.59 E.",
        "narrative": "Qat costruisce una grande canoa sulla terraferma mentre gli altri lo deridono. Porta a bordo la sua famiglia e gli esseri viventi dell'isola, compresi animali piccolissimi, si chiude dentro e prega per la pioggia. Segue un diluvio che apre un canale verso il mare e lascia un lago dove prima c'era una pianura. I motivi comprendono preconoscenza, scherno, grande imbarcazione, preservazione di famiglia e animali, inondazione catastrofica e rinnovamento del paesaggio.",
        "chronology": "È attestato con sicurezza per la prima volta nell'etnografia di fine Ottocento, soprattutto nell'opera di R. H. Codrington del 1891 sulla Melanesia, anche se la tradizione orale è più antica.",
        "evidence": "Il racconto è legato alla topografia locale e funziona in parte come spiegazione eziologica di un canale e di un lago. Non ho trovato uno studio geologico datato con sicurezza che colleghi questo specifico racconto a un singolo evento, quindi il legame storico resta non dimostrato."
      }
    },
    "fr": {
      "title": "6. Qat et le déluge des îles Banks",
      "subtitle": "Îles Banks",
      "text": "Qat construit une grande pirogue sur la terre sèche pendant que les autres se moquent de lui.",
      "date": "Le récit est attesté de façon sûre pour la première fois dans l'ethnographie de la fin du XIXe siècle, surtout dans l'ouvrage de R. H. Codrington sur la Mélanésie publié en 1891, même si la tradition orale est plus ancienne.",
      "details": {
        "classification": "Îles Banks / nord du Vanuatu, tradition orale mélanésienne.",
        "geographicLocation": "Îles Banks, en particulier Gaua, dans l'actuel Vanuatu.",
        "mapPlacement": "Env. 14.25 S, 167.59 E.",
        "narrative": "Qat construit une grande pirogue sur la terre sèche pendant que les autres se moquent de lui. Il fait embarquer sa famille et les êtres vivants de l'île, y compris de très petits animaux, s'enferme à l'intérieur et prie pour la pluie. Un déluge s'ensuit, ouvrant un chenal vers la mer et laissant un lac là où se trouvait une plaine. Les motifs sont la prescience, la moquerie, le grand bateau, la préservation de la famille et des animaux, l'inondation catastrophique et le renouvellement du paysage.",
        "chronology": "Le récit est attesté de façon sûre pour la première fois dans l'ethnographie de la fin du XIXe siècle, surtout dans l'ouvrage de R. H. Codrington sur la Mélanésie publié en 1891, même si la tradition orale est plus ancienne.",
        "evidence": "L'histoire est rattachée à la topographie locale et fonctionne en partie comme explication étiologique d'un chenal et d'un lac. Je n'ai trouvé aucune étude géologique solidement datée reliant ce récit précis à un événement unique ; le lien historique reste donc non démontré."
      }
    },
    "nl": {
      "title": "6. Qat en de vloed van de Banks-eilanden",
      "subtitle": "Banks-eilanden",
      "text": "Qat bouwt een grote kano op droog land terwijl de anderen hem uitlachen.",
      "date": "Het verhaal is voor het eerst betrouwbaar gedocumenteerd in de etnografie van de late negentiende eeuw, vooral in R. H. Codringtons werk over Melanesië uit 1891, al is de mondelinge traditie ouder.",
      "details": {
        "classification": "Banks-eilanden / noordelijk Vanuatu, Melanesische mondelinge traditie.",
        "geographicLocation": "Banks-eilanden, vooral Gaua, in het huidige Vanuatu.",
        "mapPlacement": "Ca. 14.25 Z, 167.59 O.",
        "narrative": "Qat bouwt een grote kano op droog land terwijl de anderen hem uitlachen. Hij neemt zijn familie en de levende wezens van het eiland aan boord, inclusief heel kleine dieren, sluit zich op en bidt om regen. Dan volgt een vloed die een kanaal naar zee uitsnijdt en een meer achterlaat waar eerder een vlakte lag. De motieven omvatten voorkennis, spot, een groot vaartuig, behoud van familie en dieren, een catastrofale overstroming en vernieuwing van het landschap.",
        "chronology": "Het verhaal is voor het eerst betrouwbaar gedocumenteerd in de etnografie van de late negentiende eeuw, vooral in R. H. Codringtons werk over Melanesië uit 1891, al is de mondelinge traditie ouder.",
        "evidence": "Het verhaal is verbonden met de lokale topografie en functioneert deels als etiologische verklaring voor een kanaal en een meer. Ik vond geen degelijk gedateerde geologische studie die dit specifieke verhaal aan één gebeurtenis koppelt, zodat een historische relatie onbewezen blijft."
      }
    },
    "de": {
      "title": "6. Qat und die Flut der Banks-Inseln",
      "subtitle": "Banks-Inseln",
      "text": "Qat baut auf trockenem Land ein großes Kanu, während die anderen ihn verspotten.",
      "date": "Erstmals sicher dokumentiert ist die Erzählung in der Ethnographie des späten 19. Jahrhunderts, besonders in R. H. Codringtons Werk über Melanesien von 1891, auch wenn die mündliche Tradition älter ist.",
      "details": {
        "classification": "Banks-Inseln / nördliches Vanuatu, melanesische mündliche Tradition.",
        "geographicLocation": "Banks-Inseln, besonders Gaua, im heutigen Vanuatu.",
        "mapPlacement": "Ca. 14.25 S, 167.59 E.",
        "narrative": "Qat baut auf trockenem Land ein großes Kanu, während die anderen ihn verspotten. Er nimmt seine Familie und die Lebewesen der Insel an Bord, einschließlich sehr kleiner Tiere, schließt sich ein und betet um Regen. Darauf folgt eine Flut, die einen Kanal zum Meer aufreißt und einen See hinterlässt, wo zuvor eine Ebene lag. Die Motive umfassen Vorwissen, Spott, ein großes Fahrzeug, Bewahrung von Familie und Tieren, katastrophale Überschwemmung und landschaftliche Erneuerung.",
        "chronology": "Erstmals sicher dokumentiert ist die Erzählung in der Ethnographie des späten 19. Jahrhunderts, besonders in R. H. Codringtons Werk über Melanesien von 1891, auch wenn die mündliche Tradition älter ist.",
        "evidence": "Die Geschichte ist mit der lokalen Topographie verbunden und dient teilweise als ätiologische Erklärung für einen Kanal und einen See. Ich fand keine sicher datierte geologische Studie, die diese konkrete Erzählung mit einem einzelnen Ereignis verbindet; ein historischer Zusammenhang bleibt daher unbewiesen."
      }
    },
    "ja": {
      "title": "6. カトとバンクス諸島の大洪水",
      "subtitle": "バンクス諸島",
      "text": "カトは乾いた地面の上に大きなカヌーを造り、周囲の人々は彼を嘲笑する。",
      "date": "この伝承が確実に記録されるのは19世紀末の民族誌、特に1891年のR・H・コドリントンによるメラネシア研究においてであるが、口承自体はそれ以前から存在していた。",
      "details": {
        "classification": "バンクス諸島 / バヌアツ北部、メラネシアの口承伝承。",
        "geographicLocation": "現在のバヌアツにあるバンクス諸島、とくにガウア島。",
        "mapPlacement": "南緯14.25度、東経167.59度付近。",
        "narrative": "カトは乾いた地面の上に大きなカヌーを造り、周囲の人々は彼を嘲笑する。彼は家族と島の生き物たち、さらにはごく小さな動物まで乗せ、自らは中に閉じこもって雨を祈る。すると大洪水が起こり、海へ通じる水路が開き、かつて平地だった場所に湖が残される。ここには予知、嘲笑、大きな船、家族と動物の保存、破局的洪水、景観の更新という主題が含まれる。",
        "chronology": "この伝承が確実に記録されるのは19世紀末の民族誌、特に1891年のR・H・コドリントンによるメラネシア研究においてであるが、口承自体はそれ以前から存在していた。",
        "evidence": "この物語は地域の地形と結びついており、一部では水路と湖の成因を説明する物語として機能している。この特定の伝承を単一の地質学的出来事に結びつける確実な年代資料付き研究は見当たらず、歴史的対応関係は未証明のままである。"
      }
    },
    "zh-CN": {
      "title": "6. 卡特与班克斯群岛大洪水",
      "subtitle": "班克斯群岛",
      "text": "卡特在干地上建造一艘大独木舟，而其他人都在嘲笑他。",
      "date": "这一传统首次得到可靠记录是在19世纪晚期的民族志文献中，尤其是R. H. 科德灵顿1891年关于美拉尼西亚的著作中，不过这一口传传统本身更早。",
      "details": {
        "classification": "班克斯群岛 / 瓦努阿图北部，美拉尼西亚口述传统。",
        "geographicLocation": "班克斯群岛，尤其是今瓦努阿图的高阿岛。",
        "mapPlacement": "约南纬14.25度，东经167.59度。",
        "narrative": "卡特在干地上建造一艘大独木舟，而其他人都在嘲笑他。他把家人和岛上的生灵带上船，甚至包括很小的动物，然后把自己关在里面，祈求降雨。随后洪水到来，切开通往大海的水道，并在原本的平原上留下一个湖泊。其核心母题包括预知、嘲笑、大船、家人与动物的保存、灾难性洪水以及景观更新。",
        "chronology": "这一传统首次得到可靠记录是在19世纪晚期的民族志文献中，尤其是R. H. 科德灵顿1891年关于美拉尼西亚的著作中，不过这一口传传统本身更早。",
        "evidence": "这个故事与当地地形密切相关，部分上起到解释一条水道和一个湖泊成因的作用。我没有找到任何可靠定年的地质研究能够把这一特定传说与单一事件对应起来，因此其历史关联仍未得到证明。"
      }
    },
    "hi": {
      "title": "6. कात और बैंक्स द्वीपसमूह का जलप्रलय",
      "subtitle": "बैंक्स द्वीपसमूह",
      "text": "कात सूखी ज़मीन पर एक बड़ी डोंगी बनाता है जबकि बाकी लोग उसका मज़ाक उड़ाते हैं।",
      "date": "यह कथा पहली बार उन्नीसवीं शताब्दी के उत्तरार्ध की नृवंशविज्ञान सामग्री में सुरक्षित रूप से दर्ज मिलती है, विशेषकर R. H. Codrington की 1891 की मेलानेशिया विषयक कृति में, हालांकि मौखिक परंपरा इससे पुरानी है।",
      "details": {
        "classification": "बैंक्स द्वीपसमूह / उत्तरी वनुआतु, मेलानेशियाई मौखिक परंपरा।",
        "geographicLocation": "बैंक्स द्वीपसमूह, विशेषकर आधुनिक वनुआतु का गौआ द्वीप।",
        "mapPlacement": "लगभग 14.25 द., 167.59 पू.",
        "narrative": "कात सूखी ज़मीन पर एक बड़ी डोंगी बनाता है जबकि बाकी लोग उसका मज़ाक उड़ाते हैं। वह अपने परिवार और द्वीप के जीवित प्राणियों, यहाँ तक कि बहुत छोटे जीवों को भी उसमें चढ़ाता है, स्वयं को भीतर बंद कर लेता है और वर्षा के लिए प्रार्थना करता है। फिर ऐसा जलप्रलय आता है जो समुद्र तक एक चैनल काट देता है और जहाँ पहले मैदान था वहाँ एक झील छोड़ जाता है। इस कथा में पूर्वज्ञान, उपहास, बड़ा जलयान, परिवार और पशुओं की रक्षा, विनाशकारी बाढ़ और भू-दृश्य का नवीनीकरण जैसे तत्व हैं।",
        "chronology": "यह कथा पहली बार उन्नीसवीं शताब्दी के उत्तरार्ध की नृवंशविज्ञान सामग्री में सुरक्षित रूप से दर्ज मिलती है, विशेषकर R. H. Codrington की 1891 की मेलानेशिया विषयक कृति में, हालांकि मौखिक परंपरा इससे पुरानी है।",
        "evidence": "यह कहानी स्थानीय भू-आकृति से जुड़ी है और आंशिक रूप से एक चैनल और झील की उत्पत्ति की व्याख्या करती है। मुझे कोई ऐसी निश्चित-तिथि वाली भूवैज्ञानिक अध्ययन सामग्री नहीं मिली जो इस विशेष कथा को किसी एक घटना से जोड़े, इसलिए ऐतिहासिक संबंध अब भी अप्रमाणित है।"
      }
    },
    "ru": {
      "title": "6. Кат и потоп на островах Бэнкс",
      "subtitle": "Острова Бэнкс",
      "text": "Кат строит большую лодку на сухой земле, пока остальные насмехаются над ним.",
      "date": "Впервые надежно зафиксировано в этнографии конца XIX века, особенно в труде Р. Х. Кодрингтона о Меланезии 1891 года, хотя устная традиция значительно старше.",
      "details": {
        "classification": "Острова Бэнкс / север Вануату, меланезийская устная традиция.",
        "geographicLocation": "Острова Бэнкс, особенно Гауа, в современном Вануату.",
        "mapPlacement": "Ок. 14.25 ю. ш., 167.59 в. д.",
        "narrative": "Кат строит большую лодку на сухой земле, пока остальные насмехаются над ним. Он берет на борт свою семью и живых существ острова, включая совсем мелких животных, запирается внутри и молится о дожде. Затем приходит потоп, прорезает канал к морю и оставляет озеро там, где прежде была равнина. Сюжет включает предвидение, насмешку, большое судно, сохранение семьи и животных, катастрофическое наводнение и обновление ландшафта.",
        "chronology": "Впервые надежно зафиксировано в этнографии конца XIX века, особенно в труде Р. Х. Кодрингтона о Меланезии 1891 года, хотя устная традиция значительно старше.",
        "evidence": "История связана с местной топографией и частично служит этиологическим объяснением происхождения канала и озера. Мне не удалось найти надежно датированного геологического исследования, которое связывало бы именно этот рассказ с одним конкретным событием, поэтому историческая связь остается недоказанной."
      }
    }
  },
  "myth-007-nanabozho-and-the-anishinaabe-great-flood": {
    "es": {
      "title": "7. Nanabozho y el gran diluvio anishinaabe",
      "subtitle": "Anishinaabe",
      "text": "El Creador envía un gran diluvio tras el desorden moral.",
      "date": "Tradición oral viva; un testimonio importante documentado es la colección de relatos ojibwa registrados entre 1893 y 1895 a partir de Charles y Charlotte Kawbawgam y Jacques LePique.",
      "details": {
        "classification": "Tradiciones anishinaabe / ojibwe y afines de los Grandes Lagos.",
        "geographicLocation": "Región de los Grandes Lagos superiores de América del Norte, que abarca partes de Ontario, Michigan, Wisconsin y Minnesota.",
        "mapPlacement": "Aprox. 47.50 N, 87.50 O. Es un marcador amplio del lago Superior, no el sitio de un solo acontecimiento.",
        "narrative": "El Creador envía un gran diluvio tras un desorden moral. Nanabozho sobrevive sobre un tronco flotante o una balsa junto con animales y aves. Animales buceadores intentan recuperar tierra del fondo de las aguas; la rata almizclera lo consigue, y el barro se extiende sobre el lomo de la Tortuga para renovar la tierra. El relato combina causalidad moral, supervivencia escogida con animales, preservación de la vida y renovación posterior al diluvio, aunque pertenece al tipo del buceador de tierra y no al del arca.",
        "chronology": "Tradición oral viva; un testimonio importante documentado es la colección de relatos ojibwa registrados entre 1893 y 1895 a partir de Charles y Charlotte Kawbawgam y Jacques LePique.",
        "evidence": "La investigación sobre los Grandes Lagos documenta grandes cambios posglaciales del nivel del agua y paisajes culturales inundados. Algunos estudiosos sostienen que las tradiciones orales anishinaabe conservan una memoria ambiental profunda, pero no se ha demostrado con seguridad que un solo acontecimiento origine este mito específico."
      }
    },
    "pt-BR": {
      "title": "7. Nanabozho e o grande dilúvio anishinaabe",
      "subtitle": "Anishinaabe",
      "text": "O Criador envia um grande dilúvio após a desordem moral.",
      "date": "Tradição oral viva; um testemunho documentado importante é a coletânea de narrativas ojibwa registradas entre 1893 e 1895 a partir de Charles e Charlotte Kawbawgam e Jacques LePique.",
      "details": {
        "classification": "Tradições anishinaabe / ojíbua e correlatas dos Grandes Lagos.",
        "geographicLocation": "Região dos Grandes Lagos superiores na América do Norte, abrangendo partes de Ontário, Michigan, Wisconsin e Minnesota.",
        "mapPlacement": "Aprox. 47.50 N, 87.50 O. Trata-se de um marcador amplo do lago Superior, não de um único local de evento.",
        "narrative": "O Criador envia um grande dilúvio após desordem moral. Nanabozho sobrevive sobre um tronco flutuante ou uma jangada com animais e aves. Animais mergulhadores tentam recuperar terra do fundo das águas; o rato-almiscarado consegue, e a lama é espalhada sobre o dorso da Tartaruga para renovar a terra. A narrativa combina causa moral, sobrevivência escolhida com animais, preservação da vida e renovação pós-diluviana, embora pertença ao tipo do mergulhador da terra, não ao tipo da arca.",
        "chronology": "Tradição oral viva; um testemunho documentado importante é a coletânea de narrativas ojibwa registradas entre 1893 e 1895 a partir de Charles e Charlotte Kawbawgam e Jacques LePique.",
        "evidence": "A pesquisa sobre os Grandes Lagos documenta grandes mudanças pós-glaciais do nível da água e paisagens culturais inundadas. Alguns estudiosos argumentam que as tradições orais anishinaabe preservam memória ambiental profunda, mas nenhum único evento foi demonstrado com segurança como origem deste mito específico."
      }
    },
    "it": {
      "title": "7. Nanabozho e il grande diluvio anishinaabe",
      "subtitle": "Anishinaabe",
      "text": "Il Creatore invia un grande diluvio dopo un disordine morale.",
      "date": "Tradizione orale vivente; una testimonianza documentata importante è la raccolta di narrazioni ojibwa registrate tra il 1893 e il 1895 da Charles e Charlotte Kawbawgam e Jacques LePique.",
      "details": {
        "classification": "Tradizioni anishinaabe / ojibwe e affini dei Grandi Laghi.",
        "geographicLocation": "Regione degli alti Grandi Laghi nel Nord America, comprendente parti di Ontario, Michigan, Wisconsin e Minnesota.",
        "mapPlacement": "Circa 47.50 N, 87.50 O. È un marcatore ampio del Lago Superiore, non il sito di un singolo evento.",
        "narrative": "Il Creatore invia un grande diluvio dopo un disordine morale. Nanabozho sopravvive su un tronco galleggiante o una zattera insieme ad animali e uccelli. Animali tuffatori tentano di recuperare terra dal fondo delle acque; il topo muschiato riesce, e il fango viene steso sul dorso della Tartaruga per rinnovare la terra. Il racconto unisce causalità morale, sopravvivenza prescelta con animali, conservazione della vita e rinnovamento post-diluviano, ma appartiene al tipo del \"diver\" terrestre piuttosto che a quello dell'arca.",
        "chronology": "Tradizione orale vivente; una testimonianza documentata importante è la raccolta di narrazioni ojibwa registrate tra il 1893 e il 1895 da Charles e Charlotte Kawbawgam e Jacques LePique.",
        "evidence": "Gli studi sui Grandi Laghi documentano grandi variazioni postglaciali del livello dell'acqua e paesaggi culturali sommersi. Alcuni studiosi sostengono che le tradizioni orali anishinaabe conservino una profonda memoria ambientale, ma nessun singolo evento è stato dimostrato con sicurezza come origine di questo mito specifico."
      }
    },
    "fr": {
      "title": "7. Nanabozho et le grand déluge anishinaabe",
      "subtitle": "Anishinaabe",
      "text": "Le Créateur envoie un grand déluge après un désordre moral.",
      "date": "Tradition orale vivante ; un témoin documenté majeur est la collection de récits ojibwa enregistrés entre 1893 et 1895 auprès de Charles et Charlotte Kawbawgam et de Jacques LePique.",
      "details": {
        "classification": "Traditions anishinaabe / ojibwa et apparentées des Grands Lacs.",
        "geographicLocation": "Région des hauts Grands Lacs en Amérique du Nord, couvrant des parties de l'Ontario, du Michigan, du Wisconsin et du Minnesota.",
        "mapPlacement": "Env. 47.50 N, 87.50 O. Il s'agit d'un marqueur large du lac Supérieur, et non d'un site d'événement unique.",
        "narrative": "Le Créateur envoie un grand déluge après un désordre moral. Nanabozho survit sur un tronc flottant ou un radeau avec des animaux et des oiseaux. Des animaux plongeurs tentent de rapporter de la terre du fond des eaux ; le rat musqué y parvient, et la boue est étendue sur le dos de la Tortue pour renouveler la terre. Le récit combine causalité morale, survie choisie avec les animaux, préservation de la vie et renouveau après le déluge, mais il relève du type du plongeur terrestre plutôt que de celui de l'arche.",
        "chronology": "Tradition orale vivante ; un témoin documenté majeur est la collection de récits ojibwa enregistrés entre 1893 et 1895 auprès de Charles et Charlotte Kawbawgam et de Jacques LePique.",
        "evidence": "La recherche sur les Grands Lacs documente d'importantes variations postglaciaires du niveau de l'eau et des paysages culturels submergés. Certains chercheurs estiment que les traditions orales anishinaabe conservent une mémoire environnementale profonde, mais aucun événement unique n'a été démontré de façon sûre comme origine de ce mythe précis."
      }
    },
    "nl": {
      "title": "7. Nanabozho en de grote Anishinaabe-vloed",
      "subtitle": "Anishinaabe",
      "text": "De Schepper zendt een grote vloed na morele wanorde.",
      "date": "Levende mondelinge traditie; een belangrijke gedocumenteerde getuigenis is de verzameling Ojibwa-verhalen die tussen 1893 en 1895 werd opgetekend van Charles en Charlotte Kawbawgam en Jacques LePique.",
      "details": {
        "classification": "Anishinaabe / Ojibwe en verwante Grote-Meren-tradities.",
        "geographicLocation": "Het gebied van de bovenste Grote Meren in Noord-Amerika, verspreid over delen van Ontario, Michigan, Wisconsin en Minnesota.",
        "mapPlacement": "Ca. 47.50 N, 87.50 W. Dit is een brede marker voor het Bovenmeer, geen locatie van één enkel voorval.",
        "narrative": "De Schepper zendt een grote vloed na morele wanorde. Nanabozho overleeft op een drijvende boomstam of vlot samen met dieren en vogels. Duikende dieren proberen aarde van onder het water op te halen; de muskusrat slaagt daarin, en de modder wordt op de rug van de Schildpad uitgespreid om het land te vernieuwen. Het verhaal bevat morele oorzakelijkheid, uitverkoren overleving met dieren, behoud van leven en vernieuwing na de vloed, maar het is een aarde-duiker-verhaal en geen arkverhaal.",
        "chronology": "Levende mondelinge traditie; een belangrijke gedocumenteerde getuigenis is de verzameling Ojibwa-verhalen die tussen 1893 en 1895 werd opgetekend van Charles en Charlotte Kawbawgam en Jacques LePique.",
        "evidence": "Onderzoek naar de Grote Meren documenteert grote postglaciale waterstandsveranderingen en overstroomde culturele landschappen. Sommige onderzoekers menen dat Anishinaabe-mondelinge tradities diepe milieugeheugens bewaren, maar geen enkele gebeurtenis is overtuigend aangewezen als oorsprong van juist deze mythe."
      }
    },
    "de": {
      "title": "7. Nanabozho und die große anishinaabeische Flut",
      "subtitle": "Anishinaabe",
      "text": "Der Schöpfer sendet nach moralischer Unordnung eine große Flut.",
      "date": "Lebendige mündliche Tradition; ein wichtiges dokumentiertes Zeugnis ist die Sammlung von Ojibwa-Erzählungen, die 1893-1895 von Charles und Charlotte Kawbawgam sowie Jacques LePique aufgezeichnet wurden.",
      "details": {
        "classification": "Anishinaabe- / Ojibwe- und verwandte Traditionen der Großen Seen.",
        "geographicLocation": "Region der oberen Großen Seen in Nordamerika, über Teile von Ontario, Michigan, Wisconsin und Minnesota.",
        "mapPlacement": "Ca. 47.50 N, 87.50 W. Dies ist ein breiter Lake-Superior-Marker, kein einzelner Ereignisort.",
        "narrative": "Der Schöpfer sendet nach moralischer Unordnung eine große Flut. Nanabozho überlebt auf einem treibenden Baumstamm oder Floß zusammen mit Tieren und Vögeln. Tauchende Tiere versuchen, Erde vom Grund der Wasser heraufzuholen; die Bisamratte gelingt es, und der Schlamm wird auf dem Rücken der Schildkröte ausgebreitet, um das Land zu erneuern. Die Erzählung verbindet moralische Ursache, auserwähltes Überleben mit Tieren, Bewahrung des Lebens und Erneuerung nach der Flut, gehört aber zum Erdtaucher-Typ und nicht zum Arche-Typ.",
        "chronology": "Lebendige mündliche Tradition; ein wichtiges dokumentiertes Zeugnis ist die Sammlung von Ojibwa-Erzählungen, die 1893-1895 von Charles und Charlotte Kawbawgam sowie Jacques LePique aufgezeichnet wurden.",
        "evidence": "Die Forschung zu den Großen Seen dokumentiert große postglaziale Wasserstandsschwankungen und überflutete Kulturlandschaften. Einige Forschende argumentieren, dass anishinaabeische mündliche Traditionen tiefe Umweltgedächtnisse bewahren, doch kein einzelnes Ereignis ist sicher als Ursprung dieses spezifischen Mythos nachgewiesen."
      }
    },
    "ja": {
      "title": "7. ナナボジョとアニシナーベの大洪水",
      "subtitle": "アニシナーベ",
      "text": "創造主は道徳的秩序の乱れの後に大洪水を送る。",
      "date": "現在も生きている口承伝統であり、主要な記録例としては、1893年から1895年にチャールズとシャーロット・カウボーガム、ジャック・ルピックから採録されたオジブワ語りの集成がある。",
      "details": {
        "classification": "アニシナーベ / オジブウェおよび関連する五大湖伝承。",
        "geographicLocation": "北米上部五大湖地域。現在のオンタリオ、ミシガン、ウィスコンシン、ミネソタの一部にまたがる。",
        "mapPlacement": "北緯47.50度、西経87.50度付近。これはスペリオル湖一帯を示す広域マーカーで、単一の出来事の地点ではない。",
        "narrative": "創造主は道徳的秩序の乱れの後に大洪水を送る。ナナボジョは動物や鳥たちとともに浮かぶ丸太や筏の上で生き延びる。潜水する動物たちが水底から土を持ち帰ろうとし、マスクラットが成功し、その泥は亀の背に広げられて大地が再生される。この物語は道徳的原因、動物とともに選ばれた生存、生命の保存、洪水後の更新を含むが、箱舟型ではなく「大地を引き上げる潜水者」型の伝承である。",
        "chronology": "現在も生きている口承伝統であり、主要な記録例としては、1893年から1895年にチャールズとシャーロット・カウボーガム、ジャック・ルピックから採録されたオジブワ語りの集成がある。",
        "evidence": "五大湖研究は、後氷期の大規模な水位変動と水没した文化景観を記録している。アニシナーベの口承が深い環境記憶を保存しているとみる研究者もいるが、この特定の神話の起源として単一の出来事が確実に示されたわけではない。"
      }
    },
    "zh-CN": {
      "title": "7. 纳纳博佐与阿尼希纳贝大洪水",
      "subtitle": "阿尼希纳贝",
      "text": "在道德失序之后，造物主降下了一场大洪水。",
      "date": "这是仍然存续的口述传统；一个重要的成文见证是1893至1895年间根据查尔斯与夏洛特·考鲍甘以及雅克·勒皮克记录下来的奥吉布瓦叙事集。",
      "details": {
        "classification": "阿尼希纳贝 / 奥吉布瓦及相关五大湖传统。",
        "geographicLocation": "北美上大湖地区，涵盖今安大略、密歇根、威斯康星和明尼苏达的部分区域。",
        "mapPlacement": "约北纬47.50度，西经87.50度。这是一个宽泛的苏必利尔湖标记，而不是某一单独事件地点。",
        "narrative": "在道德失序之后，造物主降下了一场大洪水。纳纳博佐与动物和鸟类一起，在漂浮的木头或木筏上幸存。潜水动物尝试从水下取回泥土；麝鼠成功了，泥土被铺在乌龟背上，大地由此重新生成。这个故事包含道德因果、与动物共同幸存、生命保存以及洪水后的更新，但它属于“潜水取土”类型，而不是方舟类型。",
        "chronology": "这是仍然存续的口述传统；一个重要的成文见证是1893至1895年间根据查尔斯与夏洛特·考鲍甘以及雅克·勒皮克记录下来的奥吉布瓦叙事集。",
        "evidence": "五大湖研究记录了冰后时期显著的水位变化和被淹没的文化景观。一些学者认为阿尼希纳贝口述传统保留了深层环境记忆，但目前并没有哪一次单一事件被可靠证明就是这一特定神话的起源。"
      }
    },
    "hi": {
      "title": "7. नानाबोज़ो और अनीशिनाबे का महान जलप्रलय",
      "subtitle": "अनीशिनाबे",
      "text": "नैतिक अव्यवस्था के बाद सृष्टिकर्ता एक महान जलप्रलय भेजता है।",
      "date": "यह जीवित मौखिक परंपरा है; इसका एक प्रमुख प्रलेखित साक्ष्य 1893-1895 के बीच चार्ल्स और शार्लट कावबावगम तथा जैक्स लेपिक से दर्ज की गई ओजिब्वा कथाओं का संग्रह है।",
      "details": {
        "classification": "अनीशिनाबे / ओजिब्वे और संबंधित ग्रेट लेक्स परंपराएँ।",
        "geographicLocation": "उत्तरी अमेरिका का अपर ग्रेट लेक्स क्षेत्र, जिसमें आधुनिक ओंटारियो, मिशिगन, विस्कॉन्सिन और मिनेसोटा के हिस्से शामिल हैं।",
        "mapPlacement": "लगभग 47.50 उ., 87.50 प. यह लेक सुपीरियर का व्यापक संकेतक है, किसी एक घटना-स्थल का नहीं।",
        "narrative": "नैतिक अव्यवस्था के बाद सृष्टिकर्ता एक महान जलप्रलय भेजता है। नानाबोज़ो तैरते हुए लट्ठे या बेड़े पर पशुओं और पक्षियों के साथ जीवित रहता है। गोताखोर पशु जल के नीचे से मिट्टी लाने की कोशिश करते हैं; मस्क्रैट सफल होता है, और वह कीचड़ कछुए की पीठ पर फैलाकर भूमि को पुनर्नवा करता है। इस कथा में नैतिक कारण, पशुओं के साथ चुनी हुई जीवित बचत, जीवन का संरक्षण और जलप्रलय के बाद नवीनीकरण है, हालांकि यह पृथ्वी-उत्खनन कथा है, नाव-कथा नहीं।",
        "chronology": "यह जीवित मौखिक परंपरा है; इसका एक प्रमुख प्रलेखित साक्ष्य 1893-1895 के बीच चार्ल्स और शार्लट कावबावगम तथा जैक्स लेपिक से दर्ज की गई ओजिब्वा कथाओं का संग्रह है।",
        "evidence": "ग्रेट लेक्स संबंधी शोध बड़े उत्तर-हिमानी जलस्तर परिवर्तनों और डूबी हुई सांस्कृतिक भू-दृश्यों का दस्तावेजीकरण करता है। कुछ विद्वान मानते हैं कि अनीशिनाबे मौखिक परंपराएँ गहरी पर्यावरणीय स्मृति को संरक्षित करती हैं, लेकिन किसी एक घटना को इस विशिष्ट मिथक का निश्चित स्रोत सिद्ध नहीं किया गया है।"
      }
    },
    "ru": {
      "title": "7. Нанабожо и великий потоп анишинаабе",
      "subtitle": "Анишинаабе",
      "text": "После нравственного разлада Творец посылает великий потоп.",
      "date": "Это живая устная традиция; важным документированным свидетельством является собрание оджибвейских рассказов, записанных в 1893-1895 годах от Чарльза и Шарлотты Кавбовгам и Жака ЛеПика.",
      "details": {
        "classification": "Традиции анишинаабе / оджибве и родственные традиции Великих озер.",
        "geographicLocation": "Регион верхних Великих озер Северной Америки, охватывающий части современного Онтарио, Мичигана, Висконсина и Миннесоты.",
        "mapPlacement": "Ок. 47.50 с. ш., 87.50 з. д. Это широкий маркер озера Верхнего, а не место одного конкретного события.",
        "narrative": "После нравственного разлада Творец посылает великий потоп. Нанабожо выживает на плавающем бревне или плоту вместе с животными и птицами. Ныряющие животные пытаются достать землю со дна вод; ондатра преуспевает, и ил разносится по спине Черепахи, чтобы обновить сушу. В рассказе сочетаются моральная причина, избранное выживание вместе с животными, сохранение жизни и обновление после потопа, но это сюжет типа \"ныряльщик за землей\", а не сюжет ковчега.",
        "chronology": "Это живая устная традиция; важным документированным свидетельством является собрание оджибвейских рассказов, записанных в 1893-1895 годах от Чарльза и Шарлотты Кавбовгам и Жака ЛеПика.",
        "evidence": "Исследования Великих озер фиксируют крупные послеледниковые изменения уровня воды и затопленные культурные ландшафты. Некоторые исследователи считают, что устные традиции анишинаабе сохраняют глубокую экологическую память, но ни одно отдельное событие не было надежно доказано как источник именно этого мифа."
      }
    }
  },
  "myth-008-tata-and-nene-in-the-leyenda-de-los-soles": {
    "es": {
      "title": "8. Tata y Nene en la Leyenda de los Soles",
      "subtitle": "Nahua del México central",
      "text": "El Sol de Cuatro Agua termina en una inundación catastrófica.",
      "date": "El texto náhuatl conservado abre con la fecha del 22 de mayo de 1558 y se preserva a través de la tradición del Códice Chimalpopoca, basada en materiales indígenas más antiguos.",
      "details": {
        "classification": "Nahua del México central, preservado en tradición textual mexica/azteca de época colonial.",
        "geographicLocation": "Tierras altas del centro de México y Valle de México; actual región de Ciudad de México, México.",
        "mapPlacement": "Aprox. 19.43 N, 99.13 O.",
        "narrative": "El Sol de Cuatro Agua termina en una inundación catastrófica. Titlacahuan/Tezcatlipoca advierte a Tata y a su esposa Nene, diciéndoles que huequen un gran tronco de ahuehuete y entren en él con una sola mazorca de maíz cada uno. Cuando las aguas bajan, salen, cocinan pescado y son castigados por los dioses, que los transforman en perros. Los paralelos son advertencia divina, pareja escogida, embarcación, supervivencia en un diluvio cósmico, restricciones alimentarias y un desenlace moralmente cargado; a diferencia de Noé, en esta versión no repueblan directamente a la humanidad.",
        "chronology": "El texto náhuatl conservado abre con la fecha del 22 de mayo de 1558 y se preserva a través de la tradición del Códice Chimalpopoca, basada en materiales indígenas más antiguos.",
        "evidence": "No existe una identificación aceptada con un solo acontecimiento. El Valle de México era un entorno lacustre con inundaciones recurrentes, lo que da un fuerte contexto ambiental a estas tradiciones del diluvio. La transmisión colonial complica además la historia textual."
      }
    },
    "pt-BR": {
      "title": "8. Tata e Nene na Leyenda de los Soles",
      "subtitle": "Nahua do México central",
      "text": "O Sol de Quatro Água termina em uma inundação catastrófica.",
      "date": "O texto nahuatl preservado abre com a data de 22 de maio de 1558 e foi conservado pela tradição do Códice Chimalpopoca, baseada em materiais indígenas mais antigos.",
      "details": {
        "classification": "Nahua do México central, preservado em tradição textual mexica/asteca da era colonial.",
        "geographicLocation": "Planaltos do centro do México e Vale do México; atual região da Cidade do México, México.",
        "mapPlacement": "Aprox. 19.43 N, 99.13 O.",
        "narrative": "O Sol de Quatro Água termina em uma inundação catastrófica. Titlacahuan/Tezcatlipoca avisa Tata e sua esposa Nene, dizendo-lhes para escavar um grande tronco de ahuehuete e entrar nele com uma única espiga de milho cada um. Quando as águas diminuem, eles saem, cozinham peixe e são punidos pelos deuses, que os transformam em cães. Os paralelos incluem aviso divino, casal escolhido, embarcação, sobrevivência a um dilúvio cósmico, restrições alimentares e um desfecho moralmente carregado; diferentemente de Noé, eles não repovoam diretamente a humanidade nesta versão.",
        "chronology": "O texto nahuatl preservado abre com a data de 22 de maio de 1558 e foi conservado pela tradição do Códice Chimalpopoca, baseada em materiais indígenas mais antigos.",
        "evidence": "Não existe identificação aceita com um único evento. O Vale do México era um ambiente lacustre com inundações recorrentes, o que fornece forte contexto ambiental para tradições de dilúvio. A transmissão colonial também complica a história textual."
      }
    },
    "it": {
      "title": "8. Tata e Nene nella Leyenda de los Soles",
      "subtitle": "Nahua del Messico centrale",
      "text": "Il Sole di Quattro Acqua termina in una catastrofica inondazione.",
      "date": "Il testo nahuatl conservato si apre con la data del 22 maggio 1558 ed è tramandato attraverso la tradizione del Codice Chimalpopoca, fondata su materiali indigeni più antichi.",
      "details": {
        "classification": "Nahua del Messico centrale, conservato nella tradizione testuale mexica/azteca di età coloniale.",
        "geographicLocation": "Altipiani del Messico centrale e Valle del Messico; attuale regione di Città del Messico, Messico.",
        "mapPlacement": "Circa 19.43 N, 99.13 O.",
        "narrative": "Il Sole di Quattro Acqua termina in una catastrofica inondazione. Titlacahuan/Tezcatlipoca avverte Tata e sua moglie Nene, dicendo loro di scavare un grande tronco di ahuehuete e di entrarvi con una sola spiga di mais ciascuno. Quando le acque si abbassano, escono, cuociono del pesce e vengono puniti dagli dèi, che li trasformano in cani. I paralleli sono l'avvertimento divino, la coppia prescelta, il veicolo, la sopravvivenza a un diluvio cosmico, le restrizioni alimentari e un esito moralmente carico; diversamente da Noè, in questa versione non ripopolano direttamente l'umanità.",
        "chronology": "Il testo nahuatl conservato si apre con la data del 22 maggio 1558 ed è tramandato attraverso la tradizione del Codice Chimalpopoca, fondata su materiali indigeni più antichi.",
        "evidence": "Non esiste un'identificazione accettata con un singolo evento. La Valle del Messico era un ambiente lacustre soggetto a inondazioni ricorrenti, cosa che fornisce un forte contesto ambientale per tradizioni di diluvio. La trasmissione coloniale complica inoltre la storia testuale."
      }
    },
    "fr": {
      "title": "8. Tata et Nene dans la Leyenda de los Soles",
      "subtitle": "Nahua du Mexique central",
      "text": "Le Soleil de Quatre Eau s'achève dans une inondation catastrophique.",
      "date": "Le texte nahuatl conservé s'ouvre sur la date du 22 mai 1558 et nous est parvenu par la tradition du Codex Chimalpopoca, qui repose sur des matériaux indigènes plus anciens.",
      "details": {
        "classification": "Nahua du Mexique central, conservé dans la tradition textuelle mexica/aztèque de l'époque coloniale.",
        "geographicLocation": "Hautes terres du centre du Mexique et vallée de Mexico ; actuelle région de Mexico, Mexique.",
        "mapPlacement": "Env. 19.43 N, 99.13 O.",
        "narrative": "Le Soleil de Quatre Eau s'achève dans une inondation catastrophique. Titlacahuan/Tezcatlipoca avertit Tata et son épouse Nene, leur disant d'évider un grand tronc d'ahuehuete et d'y entrer avec un seul épi de maïs chacun. Quand les eaux baissent, ils en sortent, font cuire du poisson et sont punis par les dieux, qui les transforment en chiens. Les parallèles sont l'avertissement divin, le couple choisi, l'embarcation, la survie à un déluge cosmique, les restrictions alimentaires et une issue moralement chargée ; contrairement à Noé, ils ne repeuplent pas directement l'humanité dans cette version.",
        "chronology": "Le texte nahuatl conservé s'ouvre sur la date du 22 mai 1558 et nous est parvenu par la tradition du Codex Chimalpopoca, qui repose sur des matériaux indigènes plus anciens.",
        "evidence": "Aucune identification à un événement unique n'est admise. La vallée de Mexico était un environnement lacustre soumis à des inondations récurrentes, ce qui fournit un contexte environnemental fort à ces traditions de déluge. La transmission coloniale complique en outre l'histoire textuelle."
      }
    },
    "nl": {
      "title": "8. Tata en Nene in de Leyenda de los Soles",
      "subtitle": "Nahua van Centraal-Mexico",
      "text": "De Zon van Vier Water eindigt in een catastrofale overstroming.",
      "date": "De bewaarde Nahuatl-tekst opent met de datum 22 mei 1558 en is overgeleverd via de traditie van de Codex Chimalpopoca, die teruggaat op ouder inheems materiaal.",
      "details": {
        "classification": "Nahua van Centraal-Mexico, bewaard in koloniale Mexica/Azteekse teksttraditie.",
        "geographicLocation": "Centrale Mexicaanse hooglanden en de Vallei van Mexico; huidige regio van Mexico-Stad, Mexico.",
        "mapPlacement": "Ca. 19.43 N, 99.13 W.",
        "narrative": "De Zon van Vier Water eindigt in een catastrofale overstroming. Titlacahuan/Tezcatlipoca waarschuwt Tata en zijn vrouw Nene en zegt hun een grote ahuehuete-stam uit te hollen en daarin te gaan met elk één maïskolf. Wanneer het water zakt, komen zij naar buiten, koken vis en worden door de goden gestraft, die hen in honden veranderen. De parallellen zijn goddelijke waarschuwing, uitverkoren paar, vaartuig, overleving door een kosmische vloed, voedselrestricties en een moreel geladen naspel; anders dan bij Noach bevolken zij in deze versie de mensheid niet rechtstreeks opnieuw.",
        "chronology": "De bewaarde Nahuatl-tekst opent met de datum 22 mei 1558 en is overgeleverd via de traditie van de Codex Chimalpopoca, die teruggaat op ouder inheems materiaal.",
        "evidence": "Er bestaat geen algemeen aanvaarde koppeling aan één enkel voorval. De Vallei van Mexico was een merenbekken met terugkerende overstromingen, wat een sterke milieucontext voor vloedtradities biedt. De koloniale overlevering maakt de tekstgeschiedenis bovendien complexer."
      }
    },
    "de": {
      "title": "8. Tata und Nene in der Leyenda de los Soles",
      "subtitle": "Nahua aus Zentralmexiko",
      "text": "Die Sonne der Vier Wasser endet in einer katastrophalen Überschwemmung.",
      "date": "Der erhaltene Nahuatl-Text beginnt mit dem Datum 22. Mai 1558 und ist über die Tradition des Codex Chimalpopoca überliefert, die auf älteres indigenes Material zurückgeht.",
      "details": {
        "classification": "Nahua aus Zentralmexiko, bewahrt in kolonialzeitlicher mexica/aztekischer Texttradition.",
        "geographicLocation": "Zentralmexikanisches Hochland und Tal von Mexiko; heutige Region von Mexiko-Stadt, Mexiko.",
        "mapPlacement": "Ca. 19.43 N, 99.13 W.",
        "narrative": "Die Sonne der Vier Wasser endet in einer katastrophalen Überschwemmung. Titlacahuan/Tezcatlipoca warnt Tata und seine Frau Nene und sagt ihnen, sie sollten einen großen Ahuehuete-Stamm aushöhlen und mit je einer Maisähre hineingehen. Als das Wasser sinkt, kommen sie heraus, kochen Fisch und werden von den Göttern bestraft, die sie in Hunde verwandeln. Die Parallelen sind göttliche Warnung, auserwähltes Paar, Fahrzeug, Überleben in einer kosmischen Flut, Nahrungsvorschriften und ein moralisch aufgeladenes Nachspiel; anders als Noah bevölkern sie in dieser Version die Menschheit nicht direkt neu.",
        "chronology": "Der erhaltene Nahuatl-Text beginnt mit dem Datum 22. Mai 1558 und ist über die Tradition des Codex Chimalpopoca überliefert, die auf älteres indigenes Material zurückgeht.",
        "evidence": "Es gibt keine anerkannte Identifikation mit einem einzelnen Ereignis. Das Tal von Mexiko war eine Seenlandschaft mit wiederkehrenden Überschwemmungen, was einen starken Umweltkontext für Fluttraditionen bietet. Die koloniale Überlieferung verkompliziert zudem die Textgeschichte."
      }
    },
    "ja": {
      "title": "8. 『太陽の伝説』におけるタタとネネ",
      "subtitle": "メキシコ中央部のナワ伝承",
      "text": "「四つの水の太陽」は破局的な洪水によって終わる。",
      "date": "現存するナワトル語本文は1558年5月22日の日付で始まり、より古い先住民資料に基づくチマルポポカ写本伝承を通じて保存されている。",
      "details": {
        "classification": "メキシコ中央部のナワ伝承。植民地期のメシカ／アステカ文書伝承に保存された形。",
        "geographicLocation": "中央メキシコ高地とメキシコ盆地。現在のメキシコ市周辺。",
        "mapPlacement": "北緯19.43度、西経99.13度付近。",
        "narrative": "「四つの水の太陽」は破局的な洪水によって終わる。ティトラカワン／テスカトリポカはタタとその妻ネネに警告し、大きなアウエウエテの幹をくり抜いて、その中に一人一本ずつトウモロコシの穂を持って入るよう命じる。水が引いた後、二人は出てきて魚を焼き、神々によって犬へと変えられる。ここには神の警告、選ばれた一組、容器、宇宙的洪水からの生存、食物制限、そして道徳的に重い結末が含まれる。ノアと異なり、この版では彼らが直接人類を再人口化するわけではない。",
        "chronology": "現存するナワトル語本文は1558年5月22日の日付で始まり、より古い先住民資料に基づくチマルポポカ写本伝承を通じて保存されている。",
        "evidence": "単一の出来事と結び付ける広く受け入れられた同定は存在しない。メキシコ盆地は反復的な洪水を伴う湖沼環境であり、洪水伝承に強い環境的背景を与える。一方で植民地期の伝承過程は本文史を複雑にしている。"
      }
    },
    "zh-CN": {
      "title": "8.《太阳传说》中的塔塔与内内",
      "subtitle": "墨西哥中部纳瓦传统",
      "text": "“四水之太阳”以灾难性的洪水结束。",
      "date": "现存纳瓦特尔语文本以1558年5月22日这一日期开头，并通过《奇马尔波波卡抄本》传统保存下来，其背后依托更早的本土材料。",
      "details": {
        "classification": "墨西哥中部纳瓦传统，保存在殖民时期墨西加／阿兹特克文献传统之中。",
        "geographicLocation": "墨西哥中部高地与墨西哥谷地；今墨西哥城地区。",
        "mapPlacement": "约北纬19.43度，西经99.13度。",
        "narrative": "“四水之太阳”以灾难性的洪水结束。提特拉卡瓦恩／特斯卡特利波卡警告塔塔和他的妻子内内，要他们掏空一根巨大的落羽杉树干，并各带一穗玉米进入其中。洪水退去后，他们出来煮鱼，却因违命而受到诸神惩罚，被变成狗。其平行母题包括神圣预警、被拣选的一对、容器、在宇宙性洪水中幸存、饮食限制以及道德意味浓重的后果；与诺亚不同，这一版本中他们并不直接重新繁衍人类。",
        "chronology": "现存纳瓦特尔语文本以1558年5月22日这一日期开头，并通过《奇马尔波波卡抄本》传统保存下来，其背后依托更早的本土材料。",
        "evidence": "目前没有被普遍接受的单一事件对应。墨西哥谷地原本就是湖盆环境，反复洪灾为洪水传统提供了强烈的环境背景。殖民时期的传抄过程也使文本历史更加复杂。"
      }
    },
    "hi": {
      "title": "8. लेयेंदा दे लोस सोलेस में ताता और नेने",
      "subtitle": "केंद्रीय मेक्सिको की नाहुआ परंपरा",
      "text": "चार-जल का सूर्य एक विनाशकारी प्रलय में समाप्त होता है।",
      "date": "संरक्षित नाहुआत्ल पाठ 22 मई 1558 की तिथि से आरंभ होता है और कोडेक्स चिमालपोपोका परंपरा के माध्यम से सुरक्षित है, जो अधिक पुराने स्वदेशी स्रोतों पर आधारित है।",
      "details": {
        "classification": "केंद्रीय मेक्सिको की नाहुआ परंपरा, औपनिवेशिक युग की मेक्सिका/एज़्टेक पाठ-परंपरा में संरक्षित।",
        "geographicLocation": "मध्य मेक्सिकी उच्चभूमि और मेक्सिको घाटी; आधुनिक मेक्सिको सिटी क्षेत्र, मेक्सिको।",
        "mapPlacement": "लगभग 19.43 उ., 99.13 प.",
        "narrative": "चार-जल का सूर्य एक विनाशकारी प्रलय में समाप्त होता है। तित्लाकाहुआन/तेज़्कात्लीपोका ताता और उसकी पत्नी नेने को चेतावनी देता है कि वे एक बड़े आहुएहुएते तने को खोखला करें और उसमें एक-एक मक्के की बाल लेकर प्रवेश करें। जब जल घटता है, वे बाहर आते हैं, मछली पकाते हैं और देवताओं द्वारा दंडस्वरूप कुत्तों में बदल दिए जाते हैं। इसके मुख्य समानांतर हैं दैवी चेतावनी, चुना हुआ युगल, पात्र, ब्रह्मांडीय बाढ़ से बचना, खाद्य-निषेध और नैतिक रूप से भारित परिणाम; नूह से भिन्न, इस रूप में वे मानवता को सीधे पुनः आबाद नहीं करते।",
        "chronology": "संरक्षित नाहुआत्ल पाठ 22 मई 1558 की तिथि से आरंभ होता है और कोडेक्स चिमालपोपोका परंपरा के माध्यम से सुरक्षित है, जो अधिक पुराने स्वदेशी स्रोतों पर आधारित है।",
        "evidence": "किसी एक घटना से इसकी सर्वमान्य पहचान नहीं है। मेक्सिको घाटी झील-आधारित पर्यावरण थी जहाँ बाढ़ बार-बार आती थी, इसलिए यह प्रलय-परंपराओं के लिए मजबूत पर्यावरणीय संदर्भ देती है। औपनिवेशिक प्रसारण इसकी पाठ-इतिहास को और जटिल बनाता है।"
      }
    },
    "ru": {
      "title": "8. Тата и Нене в Leyenda de los Soles",
      "subtitle": "Нахуа Центральной Мексики",
      "text": "Солнце Четырех Вод завершается катастрофическим потопом.",
      "date": "Сохранившийся текст на науатле начинается датой 22 мая 1558 года и дошел через традицию Кодекса Чимальпопоки, опирающуюся на более древние местные материалы.",
      "details": {
        "classification": "Нахуа Центральной Мексики, сохранено в колониальной текстовой традиции мешика/ацтеков.",
        "geographicLocation": "Центральномексиканское нагорье и долина Мехико; современный регион Мехико, Мексика.",
        "mapPlacement": "Ок. 19.43 с. ш., 99.13 з. д.",
        "narrative": "Солнце Четырех Вод завершается катастрофическим потопом. Титлакахуан/Тескатлипока предупреждает Тату и его жену Нене, велит им выдолбить большой ствол ахуэхуэте и войти в него, взяв по одному початку кукурузы. Когда воды спадают, они выходят, жарят рыбу и за это наказываются богами, которые превращают их в собак. Параллели здесь - божественное предупреждение, избранная пара, судно, выживание в космическом потопе, пищевые ограничения и нравственно нагруженное последствие; в отличие от Ноя, в этой версии они напрямую не заселяют человечество заново.",
        "chronology": "Сохранившийся текст на науатле начинается датой 22 мая 1558 года и дошел через традицию Кодекса Чимальпопоки, опирающуюся на более древние местные материалы.",
        "evidence": "Принятой идентификации с одним событием не существует. Долина Мехико была озерной средой с повторяющимися наводнениями, что создает сильный природный фон для традиций о потопе. Колониальная передача дополнительно усложняет текстовую историю."
      }
    }
  },
  "myth-009-the-huarochiri-flood": {
    "es": {
      "title": "9. El diluvio de Huarochirí",
      "subtitle": "Tradición quechuahablante de Huarochirí",
      "text": "Una llama percibe que el océano está a punto de desbordarse y advierte a su dueño humano de que el mundo acabará en cinco días.",
      "date": "El manuscrito conservado fue compilado en quechua alrededor de 1598-1608, registrando tradiciones orales más antiguas de Huarochirí.",
      "details": {
        "classification": "Tradición quechuahablante de Huarochirí, en los Andes centrales.",
        "geographicLocation": "Provincia de Huarochirí, en los Andes centrales al este de Lima, Perú. En el relato, el refugio frente al diluvio es la montaña Huillcacoto / Villca Coto, aunque su identificación moderna exacta no siempre es consistente.",
        "mapPlacement": "Aprox. 11.82 S, 76.39 O, usado como marcador regional de Huarochirí.",
        "narrative": "Una llama percibe que el océano está a punto de desbordarse y advierte a su dueño humano de que el mundo acabará en cinco días. El hombre lleva provisiones y a la llama a un refugio de montaña, donde ya se han reunido animales. El mar sube y cubre el mundo salvo la cumbre. Después de que las aguas retroceden, los supervivientes descienden a un mundo renovado. El mito incluye advertencia previa, supervivencia seleccionada, vida animal, inundación total y renovación posterior, pero el refugio es una montaña y no un arca.",
        "chronology": "El manuscrito conservado fue compilado en quechua alrededor de 1598-1608, registrando tradiciones orales más antiguas de Huarochirí.",
        "evidence": "La investigación sobre los Andes centrales documenta inundaciones catastróficas repetidas durante los dos últimos milenios, a menudo vinculadas con episodios severos de El Niño, tormentas y quizá tsunamis. Eso proporciona contexto ambiental, pero el marco cristiano colonial del manuscrito y sus resonancias bíblicas hacen incierta cualquier identificación histórica directa."
      }
    },
    "pt-BR": {
      "title": "9. O dilúvio de Huarochirí",
      "subtitle": "Tradição de Huarochirí em língua quéchua",
      "text": "Uma lhama percebe que o oceano está prestes a transbordar e avisa seu dono humano de que o mundo acabará em cinco dias.",
      "date": "O manuscrito preservado foi compilado em quéchua por volta de 1598-1608, registrando tradições orais mais antigas de Huarochirí.",
      "details": {
        "classification": "Tradição de Huarochirí em língua quéchua, nos Andes centrais.",
        "geographicLocation": "Província de Huarochirí, nos Andes centrais a leste de Lima, Peru. No relato, o refúgio contra o dilúvio é a montanha Huillcacoto / Villca Coto, embora sua identificação moderna exata nem sempre seja consistente.",
        "mapPlacement": "Aprox. 11.82 S, 76.39 O, usado como marcador regional de Huarochirí.",
        "narrative": "Uma lhama percebe que o oceano está prestes a transbordar e avisa seu dono humano de que o mundo acabará em cinco dias. O homem leva provisões e a lhama para um refúgio montanhoso, onde os animais já se reuniram. O mar sobe e cobre o mundo, exceto o cume. Depois que as águas recuam, os sobreviventes descem para um mundo renovado. O mito inclui aviso prévio, sobrevivência selecionada, vida animal, inundação total e renovação após o dilúvio, mas o refúgio é uma montanha, não uma arca.",
        "chronology": "O manuscrito preservado foi compilado em quéchua por volta de 1598-1608, registrando tradições orais mais antigas de Huarochirí.",
        "evidence": "A pesquisa sobre os Andes centrais documenta inundações catastróficas repetidas ao longo dos últimos dois milênios, muitas vezes ligadas a eventos severos de El Niño, tempestades e possivelmente tsunamis. Isso fornece contexto ambiental, mas o enquadramento cristão colonial do manuscrito e suas ressonâncias bíblicas tornam incerta qualquer identificação histórica direta."
      }
    },
    "it": {
      "title": "9. Il diluvio di Huarochirí",
      "subtitle": "Tradizione quechuafona di Huarochirí",
      "text": "Un lama percepisce che l'oceano sta per tracimare e avverte il suo padrone umano che il mondo finirà entro cinque giorni.",
      "date": "Il manoscritto conservato fu compilato in quechua intorno al 1598-1608, registrando tradizioni orali più antiche di Huarochirí.",
      "details": {
        "classification": "Tradizione quechuafona di Huarochirí, nelle Ande centrali.",
        "geographicLocation": "Provincia di Huarochirí nelle Ande centrali a est di Lima, Perù. Nel racconto il rifugio dal diluvio è il monte Huillcacoto / Villca Coto, ma la sua identificazione moderna esatta non è sempre coerente.",
        "mapPlacement": "Circa 11.82 S, 76.39 O, usato come marcatore regionale di Huarochirí.",
        "narrative": "Un lama percepisce che l'oceano sta per tracimare e avverte il suo padrone umano che il mondo finirà entro cinque giorni. L'uomo porta provviste e il lama in un rifugio montano, dove gli animali si sono già radunati. Il mare sale e copre il mondo tranne la cima. Dopo il ritiro delle acque, i sopravvissuti scendono in un mondo rinnovato. Il mito comprende avvertimento preventivo, sopravvivenza selezionata, vita animale, inondazione totale e rinnovamento post-diluviano, ma il rifugio è una montagna, non un'arca.",
        "chronology": "Il manoscritto conservato fu compilato in quechua intorno al 1598-1608, registrando tradizioni orali più antiche di Huarochirí.",
        "evidence": "La ricerca sulle Ande centrali documenta ripetute inondazioni catastrofiche negli ultimi due millenni, spesso collegate a forti eventi di El Niño, tempeste e forse tsunami. Questo fornisce contesto ambientale, ma l'inquadramento cristiano coloniale del manoscritto e le sue risonanze bibliche rendono incerta qualunque identificazione storica diretta."
      }
    },
    "fr": {
      "title": "9. Le déluge de Huarochirí",
      "subtitle": "Tradition quechuaphone de Huarochirí",
      "text": "Un lama sent que l'océan est sur le point de déborder et avertit son maître humain que le monde prendra fin dans cinq jours.",
      "date": "Le manuscrit conservé a été compilé en quechua vers 1598-1608, en enregistrant des traditions orales plus anciennes de Huarochirí.",
      "details": {
        "classification": "Tradition quechuaphone de Huarochirí dans les Andes centrales.",
        "geographicLocation": "Province de Huarochirí dans les Andes centrales à l'est de Lima, Pérou. Dans le récit, le refuge face au déluge est le mont Huillcacoto / Villca Coto, bien que son identification moderne exacte ne soit pas toujours cohérente.",
        "mapPlacement": "Env. 11.82 S, 76.39 O, utilisé comme marqueur régional de Huarochirí.",
        "narrative": "Un lama sent que l'océan est sur le point de déborder et avertit son maître humain que le monde prendra fin dans cinq jours. L'homme emporte des provisions et le lama vers un refuge de montagne où les animaux se sont déjà rassemblés. La mer monte et couvre le monde sauf le sommet. Après le retrait des eaux, les survivants redescendent dans un monde renouvelé. Le mythe comprend avertissement préalable, survie choisie, vie animale, submersion totale et renouveau après le déluge, mais le refuge est une montagne et non une arche.",
        "chronology": "Le manuscrit conservé a été compilé en quechua vers 1598-1608, en enregistrant des traditions orales plus anciennes de Huarochirí.",
        "evidence": "La recherche sur les Andes centrales documente des inondations catastrophiques répétées au cours des deux derniers millénaires, souvent liées à de forts épisodes El Niño, à des tempêtes et peut-être à des tsunamis. Cela fournit un contexte environnemental, mais le cadre chrétien colonial du manuscrit et ses résonances bibliques rendent incertaine toute identification historique directe."
      }
    },
    "nl": {
      "title": "9. De vloed van Huarochirí",
      "subtitle": "Quechuasprekende Huarochirí-traditie",
      "text": "Een lama voelt aan dat de oceaan op het punt staat over te stromen en waarschuwt zijn menselijke eigenaar dat de wereld over vijf dagen ten einde zal komen.",
      "date": "Het bewaarde manuscript werd rond 1598-1608 in het Quechua samengesteld en legde oudere mondelinge tradities uit Huarochirí vast.",
      "details": {
        "classification": "Quechuasprekende traditie van Huarochirí in de centrale Andes.",
        "geographicLocation": "Provincie Huarochirí in de centrale Andes ten oosten van Lima, Peru. In het verhaal is de toevluchtsberg Huillcacoto / Villca Coto, al is de exacte moderne identificatie niet altijd consistent.",
        "mapPlacement": "Ca. 11.82 Z, 76.39 W, gebruikt als regionale marker voor Huarochirí.",
        "narrative": "Een lama voelt aan dat de oceaan op het punt staat over te stromen en waarschuwt zijn menselijke eigenaar dat de wereld over vijf dagen ten einde zal komen. De man neemt voorraden en de lama mee naar een bergoord, waar dieren zich al hebben verzameld. De zee stijgt en bedekt de wereld behalve de top. Nadat het water is gezakt, dalen de overlevenden af naar een vernieuwde wereld. De mythe omvat voorafgaande waarschuwing, geselecteerde overleving, dierenleven, allesoverspoelende vloed en vernieuwing nadien, maar de toevlucht is een berg, geen ark.",
        "chronology": "Het bewaarde manuscript werd rond 1598-1608 in het Quechua samengesteld en legde oudere mondelinge tradities uit Huarochirí vast.",
        "evidence": "Onderzoek naar de centrale Andes documenteert herhaalde catastrofale overstromingen in de afgelopen twee millennia, vaak in verband met zware El Niño-gebeurtenissen, stormen en mogelijk tsunami's. Dat biedt milieuhistorische context, maar de koloniale christelijke inkadering van het manuscript en de bijbelse resonanties maken een directe historische identificatie onzeker."
      }
    },
    "de": {
      "title": "9. Die Flut von Huarochirí",
      "subtitle": "Quechuasprachige Huarochirí-Tradition",
      "text": "Ein Lama spürt, dass der Ozean gleich überströmen wird, und warnt seinen menschlichen Besitzer, dass die Welt in fünf Tagen enden werde.",
      "date": "Das erhaltene Manuskript wurde etwa 1598-1608 auf Quechua zusammengestellt und zeichnet ältere mündliche Traditionen aus Huarochirí auf.",
      "details": {
        "classification": "Quechuasprachige Huarochirí-Tradition der Zentralanden.",
        "geographicLocation": "Provinz Huarochirí in den Zentralanden östlich von Lima, Peru. Im Mythos ist der Zufluchtsberg Huillcacoto / Villca Coto, doch seine genaue moderne Identifikation ist nicht immer eindeutig.",
        "mapPlacement": "Ca. 11.82 S, 76.39 W, als regionaler Huarochirí-Marker verwendet.",
        "narrative": "Ein Lama spürt, dass der Ozean gleich überströmen wird, und warnt seinen menschlichen Besitzer, dass die Welt in fünf Tagen enden werde. Der Mann bringt Vorräte und das Lama zu einem Bergrefugium, wo sich Tiere bereits versammelt haben. Das Meer steigt und bedeckt die Welt bis auf den Gipfel. Nachdem das Wasser zurückgeht, steigen die Überlebenden in eine erneuerte Welt hinab. Der Mythos enthält Vorwarnung, ausgewählte Rettung, Tierleben, alles verschlingende Flut und Erneuerung danach, doch der Zufluchtsort ist ein Berg und keine Arche.",
        "chronology": "Das erhaltene Manuskript wurde etwa 1598-1608 auf Quechua zusammengestellt und zeichnet ältere mündliche Traditionen aus Huarochirí auf.",
        "evidence": "Die Forschung zu den Zentralanden dokumentiert wiederholte katastrophale Überschwemmungen in den letzten zwei Jahrtausenden, oft im Zusammenhang mit schweren El-Niño-Ereignissen, Stürmen und möglicherweise Tsunamis. Das liefert Umweltkontext, doch der kolonialchristliche Rahmen des Manuskripts und seine biblischen Resonanzen machen eine direkte historische Identifikation unsicher."
      }
    },
    "ja": {
      "title": "9. ワロチリの大洪水",
      "subtitle": "ケチュア語系ワロチリ伝承",
      "text": "一頭のリャマが海があふれようとしていることを察知し、人間の持ち主に世界が五日後に終わると警告する。",
      "date": "現存写本は1598年から1608年ごろにケチュア語で編纂され、ワロチリのより古い口承伝統を記録している。",
      "details": {
        "classification": "中央アンデスのケチュア語系ワロチリ伝承。",
        "geographicLocation": "ペルー、リマの東にある中央アンデスのワロチリ州。物語では洪水からの避難所はウィリャカコト／ビリャ・コトの山だが、現代における正確な同定は必ずしも一致しない。",
        "mapPlacement": "南緯11.82度、西経76.39度付近。ワロチリ地域を示すマーカーとして用いる。",
        "narrative": "一頭のリャマが海があふれようとしていることを察知し、人間の持ち主に世界が五日後に終わると警告する。男は食糧とリャマを山の避難所へ連れて行き、そこにはすでに動物たちが集まっている。海は上昇して頂上以外の世界を覆い尽くす。水が引いた後、生存者たちは新しくなった世界へ下りていく。この神話には事前警告、選ばれた生存、動物の生命、世界を覆う洪水、そして洪水後の更新が含まれるが、避難場所は箱舟ではなく山である。",
        "chronology": "現存写本は1598年から1608年ごろにケチュア語で編纂され、ワロチリのより古い口承伝統を記録している。",
        "evidence": "中央アンデス研究は、過去二千年のあいだに、しばしば強いエルニーニョ、暴風雨、そしておそらく津波とも結びつく破局的洪水が繰り返されたことを示している。これは環境的背景を与えるが、写本の植民地期キリスト教的枠組みと聖書的共鳴のため、直接的な歴史的同定は不確実である。"
      }
    },
    "zh-CN": {
      "title": "9. 瓦罗奇里洪水",
      "subtitle": "讲克丘亚语的瓦罗奇里传统",
      "text": "一头骆马察觉海洋即将漫溢，并警告它的人类主人：五天后世界将终结。",
      "date": "现存手稿约编成于1598至1608年之间，使用克丘亚语，记录了更早的瓦罗奇里口述传统。",
      "details": {
        "classification": "安第斯中部讲克丘亚语的瓦罗奇里传统。",
        "geographicLocation": "秘鲁利马以东的中部安第斯瓦罗奇里省。故事中的洪水避难所是惠利卡科托 / 维尔卡科托山，但其现代准确对应并不总是一致。",
        "mapPlacement": "约南纬11.82度，西经76.39度，用作瓦罗奇里地区性标记。",
        "narrative": "一头骆马察觉海洋即将漫溢，并警告它的人类主人：五天后世界将终结。那人带着补给和骆马前往山中避难所，那里动物们已经聚集。海水上涨，除山顶外覆盖整个世界。洪水退去后，幸存者下山进入一个更新后的世界。这个神话包含预先警告、被选中的幸存者、动物生命、吞没一切的洪水以及洪水后的更新，但避难所是一座山，而不是方舟。",
        "chronology": "现存手稿约编成于1598至1608年之间，使用克丘亚语，记录了更早的瓦罗奇里口述传统。",
        "evidence": "安第斯中部研究记录了过去两千年间反复出现的灾难性洪水，常与强烈厄尔尼诺、风暴甚至可能的海啸相关。这为神话提供了环境背景，但手稿本身的殖民时期基督教框架及其圣经共鸣，使任何直接历史对应都充满不确定性。"
      }
    },
    "hi": {
      "title": "9. हुआरोचिरी का जलप्रलय",
      "subtitle": "केचुआ-भाषी हुआरोचिरी परंपरा",
      "text": "एक लामा महसूस करता है कि समुद्र उमड़ने वाला है और अपने मानव स्वामी को चेतावनी देता है कि पाँच दिनों में संसार समाप्त हो जाएगा।",
      "date": "संरक्षित पांडुलिपि लगभग 1598-1608 के बीच केचुआ में संकलित की गई, जिसमें हुआरोचिरी की अधिक पुरानी मौखिक परंपराएँ दर्ज हैं।",
      "details": {
        "classification": "मध्य एंडीज़ की केचुआ-भाषी हुआरोचिरी परंपरा।",
        "geographicLocation": "पेरू के लीमा के पूर्व स्थित मध्य एंडीज़ का हुआरोचिरी प्रांत। कथा में जलप्रलय-शरण पर्वत ह्युइल्काकोटो / विल्का कोटो है, हालांकि उसका सटीक आधुनिक स्थान-निर्धारण हमेशा एक जैसा नहीं है।",
        "mapPlacement": "लगभग 11.82 द., 76.39 प., हुआरोचिरी के क्षेत्रीय संकेतक के रूप में प्रयुक्त।",
        "narrative": "एक लामा महसूस करता है कि समुद्र उमड़ने वाला है और अपने मानव स्वामी को चेतावनी देता है कि पाँच दिनों में संसार समाप्त हो जाएगा। वह मनुष्य सामान और लामा को एक पर्वतीय शरणस्थल तक ले जाता है, जहाँ जानवर पहले से इकट्ठा हैं। समुद्र उठता है और शिखर को छोड़कर संसार को ढक लेता है। जल घटने के बाद जीवित बचे लोग एक नवीकृत संसार में उतरते हैं। इस मिथक में पूर्व चेतावनी, चुना हुआ बचाव, पशु-जीवन, सब कुछ ढक लेने वाली बाढ़ और बाद की पुनर्नवता है, लेकिन शरण एक पर्वत है, नाव नहीं।",
        "chronology": "संरक्षित पांडुलिपि लगभग 1598-1608 के बीच केचुआ में संकलित की गई, जिसमें हुआरोचिरी की अधिक पुरानी मौखिक परंपराएँ दर्ज हैं।",
        "evidence": "मध्य एंडीज़ पर शोध पिछले दो सहस्राब्दियों में बार-बार आई विनाशकारी बाढ़ों को दर्ज करता है, जो अक्सर तीव्र एल नीन्यो, तूफानों और संभवतः सुनामी से जुड़ी थीं। इससे पर्यावरणीय संदर्भ मिलता है, लेकिन पांडुलिपि का औपनिवेशिक ईसाई ढाँचा और बाइबिलीय समानताएँ प्रत्यक्ष ऐतिहासिक पहचान को अनिश्चित बनाती हैं।"
      }
    },
    "ru": {
      "title": "9. Потоп Уарочири",
      "subtitle": "Кечуаязычная традиция Уарочири",
      "text": "Лама чувствует, что океан вот-вот переполнится, и предупреждает своего человеческого хозяина, что через пять дней мир погибнет.",
      "date": "Сохранившаяся рукопись была составлена на кечуа около 1598-1608 годов и зафиксировала более древние устные традиции Уарочири.",
      "details": {
        "classification": "Кечуаязычная традиция Уарочири в центральных Андах.",
        "geographicLocation": "Провинция Уарочири в центральных Андах к востоку от Лимы, Перу. В рассказе убежищем от потопа служит гора Уилькакото / Вилька Кото, хотя ее точная современная идентификация не всегда единообразна.",
        "mapPlacement": "Ок. 11.82 ю. ш., 76.39 з. д., используется как региональный маркер Уарочири.",
        "narrative": "Лама чувствует, что океан вот-вот переполнится, и предупреждает своего человеческого хозяина, что через пять дней мир погибнет. Человек берет припасы и ламу и уходит к горному убежищу, где животные уже собрались. Море поднимается и покрывает мир, кроме вершины. После отступления вод выжившие спускаются в обновленный мир. В мифе присутствуют предварительное предупреждение, избранное спасение, животная жизнь, всеохватывающий потоп и обновление после него, но убежищем служит гора, а не ковчег.",
        "chronology": "Сохранившаяся рукопись была составлена на кечуа около 1598-1608 годов и зафиксировала более древние устные традиции Уарочири.",
        "evidence": "Исследования центральных Анд документируют повторяющиеся катастрофические наводнения на протяжении последних двух тысячелетий, часто связанные с сильными эпизодами Эль-Ниньо, штормами и, возможно, цунами. Это дает природный контекст, но колониально-христианская рамка рукописи и ее библейские созвучия делают прямую историческую идентификацию неопределенной."
      }
    }
  },
  "myth-010-deucalion-and-pyrrha": {
    "es": {
      "title": "10. Deucalión y Pirra",
      "subtitle": "Griego antiguo",
      "text": "Zeus decide destruir mediante un diluvio a una humanidad corrompida.",
      "date": "Aparece por primera vez en la literatura griega del siglo V a. C., incluidos Epicarmo y Píndaro; más tarde fue narrado con mayor amplitud por Ovidio, Apolodoro y otros.",
      "details": {
        "classification": "Griego antiguo.",
        "geographicLocation": "Grecia continental, especialmente Tesalia y, en las principales versiones tardías, el monte Parnaso, donde la embarcación se posa; actual Grecia.",
        "mapPlacement": "Aprox. 38.53 N, 22.62 E para el monte Parnaso. Las fuentes antiguas mencionan también otros lugares de llegada.",
        "narrative": "Zeus decide destruir mediante un diluvio a una humanidad corrompida. Prometeo advierte a su hijo Deucalión, que construye un cofre o embarcación semejante a un arca y sobrevive con su esposa Pirra. Cuando las aguas bajan y la pareja llega a una montaña, repueblan la tierra arrojando piedras por encima de sus hombros, que se convierten en hombres y mujeres. Los paralelos incluyen advertencia divina, resto escogido, embarcación de supervivencia, refugio en montaña y renovación de la humanidad. La preservación de animales no es central.",
        "chronology": "Aparece por primera vez en la literatura griega del siglo V a. C., incluidos Epicarmo y Píndaro; más tarde fue narrado con mayor amplitud por Ovidio, Apolodoro y otros.",
        "evidence": "No existe consenso revisado por pares que vincule el mito con un único acontecimiento concreto. Grecia es una región tectónicamente activa y propensa a tsunamis, y el registro paleotsunámico es considerable, pero los intentos de identificar el mito con un solo evento, como Thera, siguen siendo especulativos."
      }
    },
    "pt-BR": {
      "title": "10. Deucalião e Pirra",
      "subtitle": "Grego antigo",
      "text": "Zeus decide destruir por meio de um dilúvio uma humanidade corrompida.",
      "date": "É atestado pela primeira vez na literatura grega do século V a.C., incluindo Epicarmo e Píndaro; mais tarde foi narrado de forma mais completa por Ovídio, Apolodoro e outros.",
      "details": {
        "classification": "Grego antigo.",
        "geographicLocation": "Grécia continental, especialmente Tessália e, nas principais versões tardias, o monte Parnaso, onde a embarcação repousa; atual Grécia.",
        "mapPlacement": "Aprox. 38.53 N, 22.62 E para o monte Parnaso. As fontes antigas também mencionam outros locais de pouso.",
        "narrative": "Zeus decide destruir por meio de um dilúvio uma humanidade corrompida. Prometeu avisa seu filho Deucalião, que constrói um cofre ou embarcação semelhante a uma arca e sobrevive com sua esposa Pirra. Depois que as águas baixam e o casal chega a uma montanha, eles repovoam a terra lançando pedras por cima dos ombros, que se transformam em homens e mulheres. Os paralelos incluem aviso divino, remanescente escolhido, embarcação de sobrevivência, refúgio montanhoso e renovação da humanidade. A preservação de animais não é central.",
        "chronology": "É atestado pela primeira vez na literatura grega do século V a.C., incluindo Epicarmo e Píndaro; mais tarde foi narrado de forma mais completa por Ovídio, Apolodoro e outros.",
        "evidence": "Não há consenso revisado por pares ligando o mito a um único evento específico. A Grécia é tectonicamente ativa e propensa a tsunamis, e o registro paleotsunâmico é substancial, mas tentativas de identificar o mito com um único evento, como Tera, continuam especulativas."
      }
    },
    "it": {
      "title": "10. Deucalione e Pirra",
      "subtitle": "Greco antico",
      "text": "Zeus decide di distruggere con un diluvio un'umanità corrotta.",
      "date": "È attestato per la prima volta nella letteratura greca del V secolo a.C., compresi Epicarmo e Pindaro; più tardi fu narrato più ampiamente da Ovidio, Apollodoro e altri.",
      "details": {
        "classification": "Greco antico.",
        "geographicLocation": "Grecia continentale, soprattutto Tessaglia e, nelle principali versioni tarde, il monte Parnaso, dove l'imbarcazione si arresta; Grecia attuale.",
        "mapPlacement": "Circa 38.53 N, 22.62 E per il monte Parnaso. Le fonti antiche ricordano anche altri luoghi di approdo.",
        "narrative": "Zeus decide di distruggere con un diluvio un'umanità corrotta. Prometeo avverte il figlio Deucalione, che costruisce una cassa o un'imbarcazione simile a un'arca e sopravvive con la moglie Pirra. Quando le acque si ritirano e la coppia approda su un monte, ripopolano la terra gettando pietre sopra le spalle, che diventano uomini e donne. I paralleli sono preavviso divino, resto prescelto, imbarcazione di salvezza, rifugio montano e rinnovamento dell'umanità. La conservazione degli animali non è centrale.",
        "chronology": "È attestato per la prima volta nella letteratura greca del V secolo a.C., compresi Epicarmo e Pindaro; più tardi fu narrato più ampiamente da Ovidio, Apollodoro e altri.",
        "evidence": "Non esiste un consenso peer-reviewed che colleghi il mito a un unico evento specifico. La Grecia è sismicamente attiva e soggetta a tsunami, e il record paleotsunami è notevole, ma i tentativi di identificare il mito con un solo evento, come Thera, restano speculativi."
      }
    },
    "fr": {
      "title": "10. Deucalion et Pyrrha",
      "subtitle": "Grec ancien",
      "text": "Zeus décide de détruire par un déluge une humanité corrompue.",
      "date": "Le mythe est d'abord attesté dans la littérature grecque du Ve siècle av. J.-C., notamment chez Épicharme et Pindare ; il fut ensuite raconté plus complètement par Ovide, Apollodore et d'autres.",
      "details": {
        "classification": "Grec ancien.",
        "geographicLocation": "Grèce continentale, surtout la Thessalie et, dans les principales versions tardives, le mont Parnasse, où l'embarcation s'arrête ; Grèce actuelle.",
        "mapPlacement": "Env. 38.53 N, 22.62 E pour le mont Parnasse. Les sources antiques mentionnent aussi d'autres lieux d'atterrissage.",
        "narrative": "Zeus décide de détruire par un déluge une humanité corrompue. Prométhée avertit son fils Deucalion, qui construit un coffre ou une embarcation proche d'une arche et survit avec son épouse Pyrrha. Après la décrue et l'arrivée du couple sur une montagne, ils repeuplent la terre en jetant des pierres par-dessus leurs épaules, lesquelles deviennent des hommes et des femmes. Les parallèles incluent l'avertissement divin, le reste choisi, l'embarcation de survie, le refuge montagneux et le renouveau de l'humanité. La préservation des animaux n'est pas centrale.",
        "chronology": "Le mythe est d'abord attesté dans la littérature grecque du Ve siècle av. J.-C., notamment chez Épicharme et Pindare ; il fut ensuite raconté plus complètement par Ovide, Apollodore et d'autres.",
        "evidence": "Aucun consensus évalué par les pairs ne relie ce mythe à un événement unique. La Grèce est tectoniquement active et exposée aux tsunamis, et le registre paléotsunami y est important, mais les tentatives d'identifier le mythe à un seul événement, tel que Théra, restent spéculatives."
      }
    },
    "nl": {
      "title": "10. Deukalion en Pyrrha",
      "subtitle": "Oudgrieks",
      "text": "Zeus besluit een verdorven mensheid door een vloed te vernietigen.",
      "date": "Het verhaal is voor het eerst aantoonbaar in de Griekse literatuur van de vijfde eeuw v.Chr., onder meer bij Epicharmos en Pindaros; later werd het uitvoeriger verteld door Ovidius, Apollodorus en anderen.",
      "details": {
        "classification": "Oudgrieks.",
        "geographicLocation": "Het Griekse vasteland, vooral Thessalië en in latere hoofdversies de berg Parnassus, waar het vaartuig tot rust komt; huidig Griekenland.",
        "mapPlacement": "Ca. 38.53 N, 22.62 E voor de berg Parnassus. Antieke bronnen noemen ook andere landingsplaatsen.",
        "narrative": "Zeus besluit een verdorven mensheid door een vloed te vernietigen. Prometheus waarschuwt zijn zoon Deukalion, die een kist of arkachtig vaartuig bouwt en samen met zijn vrouw Pyrrha overleeft. Wanneer het water zakt en het paar op een berg landt, bevolken zij de aarde opnieuw door stenen over hun schouders te werpen, die in mannen en vrouwen veranderen. De parallellen zijn goddelijke waarschuwing, uitverkoren overblijfsel, overlevingsvaartuig, bergoord en vernieuwing van de mensheid. Dierenbehoud speelt geen centrale rol.",
        "chronology": "Het verhaal is voor het eerst aantoonbaar in de Griekse literatuur van de vijfde eeuw v.Chr., onder meer bij Epicharmos en Pindaros; later werd het uitvoeriger verteld door Ovidius, Apollodorus en anderen.",
        "evidence": "Er is geen peer-reviewed consensus die de mythe aan één specifieke gebeurtenis koppelt. Griekenland is tektonisch actief en tsunami-gevoelig, en het paleotsunami-archief is aanzienlijk, maar pogingen om de mythe met één enkele gebeurtenis zoals Thera te identificeren blijven speculatief."
      }
    },
    "de": {
      "title": "10. Deukalion und Pyrrha",
      "subtitle": "Altgriechisch",
      "text": "Zeus beschließt, eine verdorbene Menschheit durch eine Flut zu vernichten.",
      "date": "Erstmals bezeugt ist der Stoff in der griechischen Literatur des 5. Jahrhunderts v. Chr., unter anderem bei Epicharmos und Pindar; später wurde er ausführlicher von Ovid, Apollodor und anderen erzählt.",
      "details": {
        "classification": "Altgriechisch.",
        "geographicLocation": "Griechisches Festland, besonders Thessalien und in den wichtigsten späteren Fassungen der Parnass, wo das Fahrzeug landet; heutiges Griechenland.",
        "mapPlacement": "Ca. 38.53 N, 22.62 E für den Parnass. Antike Quellen nennen auch andere Landeplätze.",
        "narrative": "Zeus beschließt, eine verdorbene Menschheit durch eine Flut zu vernichten. Prometheus warnt seinen Sohn Deukalion, der eine Truhe oder ein archeähnliches Fahrzeug baut und mit seiner Frau Pyrrha überlebt. Nachdem die Wasser fallen und das Paar einen Berg erreicht, bevölkern sie die Erde neu, indem sie Steine über ihre Schultern werfen, die sich in Männer und Frauen verwandeln. Die Parallelen umfassen göttliche Vorwarnung, ausgewählten Rest, Überlebensgefäß, Bergzuflucht und Erneuerung der Menschheit. Die Bewahrung von Tieren ist nicht zentral.",
        "chronology": "Erstmals bezeugt ist der Stoff in der griechischen Literatur des 5. Jahrhunderts v. Chr., unter anderem bei Epicharmos und Pindar; später wurde er ausführlicher von Ovid, Apollodor und anderen erzählt.",
        "evidence": "Es gibt keinen peer-reviewten Konsens, der den Mythos mit einem einzigen konkreten Ereignis verbindet. Griechenland ist tektonisch aktiv und tsunamigefährdet, und der Paläotsunami-Befund ist umfangreich, doch Versuche, den Mythos mit einem Einzelereignis wie Thera gleichzusetzen, bleiben spekulativ."
      }
    },
    "ja": {
      "title": "10. デウカリオンとピュラ",
      "subtitle": "古代ギリシア",
      "text": "ゼウスは堕落した人類を洪水で滅ぼすことを決める。",
      "date": "この神話がギリシア文学に初めて確実に現れるのは紀元前5世紀で、エピカルモスやピンダロスに見られ、その後オウィディウス、アポロドロスらによってより詳しく語られた。",
      "details": {
        "classification": "古代ギリシア。",
        "geographicLocation": "ギリシア本土、とくにテッサリア、そして主要な後代版では船が着くパルナッソス山。現在のギリシア。",
        "mapPlacement": "パルナッソス山については北緯38.53度、東経22.62度付近。古代資料はほかの着地点も挙げている。",
        "narrative": "ゼウスは堕落した人類を洪水で滅ぼすことを決める。プロメテウスは息子デウカリオンに警告し、デウカリオンは箱あるいは方舟のような乗り物を作って妻ピュラとともに生き延びる。水が引いて山にたどり着いたあと、二人は肩越しに石を投げ、それが男と女になって大地を再び人で満たす。ここには神の警告、選ばれた残りの者、救命の乗り物、山上の避難、そして人類の更新が含まれる。動物の保存は中心的要素ではない。",
        "chronology": "この神話がギリシア文学に初めて確実に現れるのは紀元前5世紀で、エピカルモスやピンダロスに見られ、その後オウィディウス、アポロドロスらによってより詳しく語られた。",
        "evidence": "査読研究において、この神話を一つの特定の出来事に結びつける合意は存在しない。ギリシアは地殻活動が活発で津波にも脆弱であり、古津波記録も豊富だが、テラ火山など単一の出来事にこの神話を帰す試みは依然として推測的である。"
      }
    },
    "zh-CN": {
      "title": "10. 丢卡利翁与皮拉",
      "subtitle": "古希腊",
      "text": "宙斯决定用洪水毁灭堕落的人类。",
      "date": "这一神话最早见于公元前5世纪的希腊文学，包括埃庇卡耳摩斯和品达；后来又被奥维德、阿波罗多洛斯等更完整地讲述。",
      "details": {
        "classification": "古希腊。",
        "geographicLocation": "希腊本土，尤其是色萨利，以及在主要晚期版本中作为船只停靠地的帕那索斯山；今希腊。",
        "mapPlacement": "帕那索斯山约北纬38.53度，东经22.62度。古代文献也提到其他着陆地点。",
        "narrative": "宙斯决定用洪水毁灭堕落的人类。普罗米修斯警告他的儿子丢卡利翁，后者造出一个箱状或类似方舟的器具，并与妻子皮拉一同幸存。洪水退去、二人登上山后，他们把石头从肩后抛出，这些石头化为男人和女人，从而重新繁衍人类。其平行母题包括神的预警、被拣选的余民、求生之船、山中避难以及人类更新。保存动物并不是核心主题。",
        "chronology": "这一神话最早见于公元前5世纪的希腊文学，包括埃庇卡耳摩斯和品达；后来又被奥维德、阿波罗多洛斯等更完整地讲述。",
        "evidence": "目前没有经同行评议的共识将这一神话对应到某一单独事件。希腊地质活动频繁，也易受海啸影响，古海啸记录相当丰富，但试图把神话归结为诸如圣托里尼这样的单一事件，仍然属于推测。"
      }
    },
    "hi": {
      "title": "10. ड्यूकैलियन और पिर्रा",
      "subtitle": "प्राचीन यूनानी",
      "text": "ज़ीउस एक भ्रष्ट मानवता को बाढ़ द्वारा नष्ट करने का निश्चय करता है।",
      "date": "यह कथा पहली बार पाँचवीं शताब्दी ईसा पूर्व के यूनानी साहित्य में मिलती है, जिनमें एपिकार्मस और पिंडार शामिल हैं; बाद में ओविड, अपोलोडोरस और अन्य लेखकों ने इसे अधिक विस्तार से सुनाया।",
      "details": {
        "classification": "प्राचीन यूनानी।",
        "geographicLocation": "यूनानी मुख्यभूमि, विशेषकर थेसाली और प्रमुख उत्तरकालीन रूपों में पार्नासस पर्वत, जहाँ नौका ठहरती है; आधुनिक ग्रीस।",
        "mapPlacement": "पार्नासस पर्वत के लिए लगभग 38.53 उ., 22.62 पू. प्राचीन स्रोत अन्य अवतरण-स्थलों का भी उल्लेख करते हैं।",
        "narrative": "ज़ीउस एक भ्रष्ट मानवता को बाढ़ द्वारा नष्ट करने का निश्चय करता है। प्रोमेथियस अपने पुत्र ड्यूकैलियन को चेतावनी देता है, जो एक संदूक या नाव जैसी पात्र-रचना बनाता है और अपनी पत्नी पिर्रा के साथ जीवित बचता है। जब जल उतरता है और यह युगल पर्वत पर पहुँचता है, तो वे अपने कंधों के ऊपर से पत्थर फेंककर पृथ्वी को फिर से आबाद करते हैं; वे पत्थर पुरुषों और स्त्रियों में बदल जाते हैं। इसके मुख्य समानांतर हैं दैवी पूर्वचेतावनी, चुना हुआ अवशेष, जीवित रहने का पात्र, पर्वतीय शरण और मानवता का नवीनीकरण। पशु-संरक्षण यहाँ केंद्रीय नहीं है।",
        "chronology": "यह कथा पहली बार पाँचवीं शताब्दी ईसा पूर्व के यूनानी साहित्य में मिलती है, जिनमें एपिकार्मस और पिंडार शामिल हैं; बाद में ओविड, अपोलोडोरस और अन्य लेखकों ने इसे अधिक विस्तार से सुनाया।",
        "evidence": "ऐसा कोई समकक्ष-समीक्षित सर्वसम्मति नहीं है जो इस मिथक को किसी एक विशिष्ट घटना से जोड़े। ग्रीस भूकंपीय रूप से सक्रिय है और सुनामी की दृष्टि से भी संवेदनशील है, तथा पालीयो-सुनामी अभिलेख पर्याप्त है, लेकिन इस मिथक को थेरा जैसी किसी एक घटना से जोड़ने के प्रयास अभी भी अनुमानात्मक हैं।"
      }
    },
    "ru": {
      "title": "10. Девкалион и Пирра",
      "subtitle": "Древнегреческий",
      "text": "Зевс решает уничтожить развращенное человечество потопом.",
      "date": "Впервые сюжет засвидетельствован в греческой литературе V века до н. э., в том числе у Эпихарма и Пиндара; позднее он был подробнее изложен у Овидия, Аполлодора и других авторов.",
      "details": {
        "classification": "Древнегреческий.",
        "geographicLocation": "Материковая Греция, особенно Фессалия и, в основных поздних версиях, гора Парнас, где останавливается судно; современная Греция.",
        "mapPlacement": "Ок. 38.53 с. ш., 22.62 в. д. для Парнаса. Античные источники называют и другие места высадки.",
        "narrative": "Зевс решает уничтожить развращенное человечество потопом. Прометей предупреждает своего сына Девкалиона, который строит ларь или ковчегообразное судно и выживает вместе с женой Пиррой. После спада вод и прибытия пары на гору они заново заселяют землю, бросая камни через плечо, и те превращаются в мужчин и женщин. Параллели включают божественное предупреждение, избранный остаток, спасительное судно, горное убежище и обновление человечества. Сохранение животных здесь не является центральным мотивом.",
        "chronology": "Впервые сюжет засвидетельствован в греческой литературе V века до н. э., в том числе у Эпихарма и Пиндара; позднее он был подробнее изложен у Овидия, Аполлодора и других авторов.",
        "evidence": "Нет рецензируемого консенсуса, связывающего миф с одним конкретным событием. Греция тектонически активна и подвержена цунами, а палеоцунамическая летопись здесь значительна, но попытки свести миф к одному событию, например к Тере, остаются спекулятивными."
      }
    }
  }
}, batch02DetailTranslations, batch03DetailTranslations, batch04DetailTranslations, batch05DetailTranslations);

export const globeEntries: GlobeEntry[] = [
  {
    "id": "myth-001-atrahasis",
    "title": "1. Atrahasis",
    "subtitle": "Old Babylonian Akkadian Mesopotamia",
    "text": "The gods decide to destroy humankind because human noise disturbs the divine world.",
    "date": "The fullest Old Babylonian recension is usually dated to the reign of Ammi-saduqa, roughly the seventeenth century BCE; surviving fragments belong to the Old Babylonian period.",
    "latitude": 31.78,
    "longitude": 45.5,
    "region": "Mesopotamia / Ancient Near East",
    "details": {
      "classification": "Old Babylonian Akkadian Mesopotamia.",
      "geographicLocation": "Ancient southern Mesopotamia in the Tigris-Euphrates alluvium; modern Iraq. The most useful marker is Tell Fara / ancient Shuruppak, because that city is closely associated with Mesopotamian flood-hero traditions, even though the Atrahasis text circulated more broadly in Babylonia.",
      "mapPlacement": "Approx. 31.78 N, 45.50 E.",
      "narrative": "The gods decide to destroy humankind because human noise disturbs the divine world. Enki/Ea covertly warns Atrahasis and instructs him to build a boat. Atrahasis boards with his household and provisions, the flood comes, and he survives. Afterward, the gods regret the extermination because they lack human offerings and labor. The narrative includes divine warning, a specially built vessel, chosen survivors, preservation of life, catastrophic inundation, and post-flood reordering.",
      "chronology": "The fullest Old Babylonian recension is usually dated to the reign of Ammi-saduqa, roughly the seventeenth century BCE; surviving fragments belong to the Old Babylonian period.",
      "evidence": "Archaeological discussions often compare the story with flood deposits at southern Mesopotamian sites such as Ur, Kish, and Shuruppak. The evidence does not show one single synchronous Mesopotamian or global flood. Some scholars see a serious regional river flood around the early third millennium BCE, especially around Kish and Shuruppak, as a plausible background for later literary memory, but that remains a debated historical inference.",
      "references": [
        {
          "label": "livius.org - 104 106 the epic of atrahasis",
          "url": "https://www.livius.org/sources/content/anet/104-106-the-epic-of-atrahasis/"
        },
        {
          "label": "cdli.earth - 187",
          "url": "https://cdli.earth/postings/187"
        },
        {
          "label": "themorgan.org - tablet",
          "url": "https://www.themorgan.org/morganmobile/telling-fragments/tablet"
        },
        {
          "label": "britishmuseum.org - W 1891 0509 524",
          "url": "https://www.britishmuseum.org/collection/object/W_1891-0509-524"
        },
        {
          "label": "ncse.ngo - flood mesopotamian archaeological evidence",
          "url": "https://ncse.ngo/flood-mesopotamian-archaeological-evidence"
        }
      ]
    },
    "links": [
      {
        "label": "livius.org - 104 106 the epic of atrahasis",
        "url": "https://www.livius.org/sources/content/anet/104-106-the-epic-of-atrahasis/"
      },
      {
        "label": "cdli.earth - 187",
        "url": "https://cdli.earth/postings/187"
      },
      {
        "label": "themorgan.org - tablet",
        "url": "https://www.themorgan.org/morganmobile/telling-fragments/tablet"
      }
    ],
    "translations": entryTranslations["myth-001-atrahasis"]
  },
  {
    "id": "myth-002-ziusudra-in-the-sumerian-flood-story",
    "title": "2. Ziusudra in the Sumerian Flood Story",
    "subtitle": "Sumerian Mesopotamia",
    "text": "In the Sumerian flood story often called the Eridu Genesis, the gods resolve to send a flood.",
    "date": "The main surviving tablet from Nippur is an Old Babylonian copy, generally dated by script to the seventeenth century BCE, though the tradition is older.",
    "latitude": 31.78,
    "longitude": 45.5,
    "region": "Mesopotamia / Ancient Near East",
    "details": {
      "classification": "Sumerian Mesopotamia.",
      "geographicLocation": "Ancient Shuruppak in southern Sumer; modern Tell Fara, Iraq. The text identifies the flood hero with Shuruppak, making Tell Fara the best map placement.",
      "mapPlacement": "Approx. 31.78 N, 45.50 E.",
      "narrative": "In the Sumerian flood story often called the Eridu Genesis, the gods resolve to send a flood. Enki warns Ziusudra, who builds a large boat and survives seven days and nights of storm and inundation. After the flood, he opens the vessel, offers sacrifice, and receives an extraordinary blessed status in Dilmun. The story parallels Noah in divine warning, boat survival, sacrifice after landing, and renewal of human order. The tablet is fragmentary, so some details such as animal cargo are less explicit than in Atrahasis and Gilgamesh.",
      "chronology": "The main surviving tablet from Nippur is an Old Babylonian copy, generally dated by script to the seventeenth century BCE, though the tradition is older.",
      "evidence": "Shuruppak itself produced a notable flood deposit, and some scholarship has connected flood strata around Shuruppak and Kish, roughly 3000-2900 BCE, with possible historical memories behind the Sumerian flood tradition. This supports serious local or regional flooding, not a demonstrated universal flood or direct proof of the myth.",
      "references": [
        {
          "label": "penn.museum - 97591",
          "url": "https://www.penn.museum/collections/object/97591"
        },
        {
          "label": "penn.museum - reflections on the mesopotamian flood",
          "url": "https://www.penn.museum/sites/expedition/reflections-on-the-mesopotamian-flood/"
        },
        {
          "label": "penn.museum - 761",
          "url": "https://www.penn.museum/sites/bulletin/761/"
        },
        {
          "label": "ncse.ngo - flood mesopotamian archaeological evidence",
          "url": "https://ncse.ngo/flood-mesopotamian-archaeological-evidence"
        }
      ]
    },
    "links": [
      {
        "label": "penn.museum - 97591",
        "url": "https://www.penn.museum/collections/object/97591"
      },
      {
        "label": "penn.museum - reflections on the mesopotamian flood",
        "url": "https://www.penn.museum/sites/expedition/reflections-on-the-mesopotamian-flood/"
      },
      {
        "label": "penn.museum - 761",
        "url": "https://www.penn.museum/sites/bulletin/761/"
      }
    ],
    "translations": entryTranslations["myth-002-ziusudra-in-the-sumerian-flood-story"]
  },
  {
    "id": "myth-003-manu-and-the-fish",
    "title": "3. Manu and the Fish",
    "subtitle": "Vedic India / Hindu Matsya trad.",
    "text": "Manu rescues a small talking fish, which grows and warns him that a flood will destroy all creatures.",
    "date": "Earliest extant textual witness: Shatapatha Brahmana, commonly placed around the eighth to sixth centuries BCE, with older oral transmission behind the text.",
    "latitude": 30.74,
    "longitude": 79.49,
    "region": "Asia",
    "details": {
      "classification": "Vedic India; later Hindu Matsya tradition.",
      "geographicLocation": "Northern South Asia. The earliest text says the ship is taken to a northern mountain, so the marker is approximate. A practical placement is the central Himalaya in modern Uttarakhand, India.",
      "mapPlacement": "Approx. 30.74 N, 79.49 E.",
      "narrative": "Manu rescues a small talking fish, which grows and warns him that a flood will destroy all creatures. Manu prepares a ship, enters it when the waters rise, and ties it to the fishs horn. The fish tows the vessel to a northern mountain. When the waters recede, Manu performs sacrifice; a woman generated from the sacrificial waters appears, and humanity is renewed through her. The tradition includes divine warning, a righteous survivor, a boat, mountain landing, sacrifice, and repopulation.",
      "chronology": "Earliest extant textual witness: Shatapatha Brahmana, commonly placed around the eighth to sixth centuries BCE, with older oral transmission behind the text.",
      "evidence": "No scholarly consensus identifies Manu with one specific flood event. Holocene and late Pleistocene paleoflood studies show repeated large floods in Himalayan and monsoon-fed river systems, making a deluge myth environmentally plausible, but specific correlations remain speculative.",
      "references": [
        {
          "label": "sacred-texts.com - sbe1234",
          "url": "https://sacred-texts.com/hin/sbr/sbe12/sbe1234.htm"
        },
        {
          "label": "britannica.com - Manu",
          "url": "https://www.britannica.com/topic/Manu"
        },
        {
          "label": "britannica.com - Matsya Hinduism",
          "url": "https://www.britannica.com/topic/Matsya-Hinduism"
        },
        {
          "label": "pubs.geoscienceworld.org - Late Pleistocene Holocene flood history flood",
          "url": "https://pubs.geoscienceworld.org/gsa/gsabulletin/article-abstract/134/1-2/275/597002/Late-Pleistocene-Holocene-flood-history-flood"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - sbe1234",
        "url": "https://sacred-texts.com/hin/sbr/sbe12/sbe1234.htm"
      },
      {
        "label": "britannica.com - Manu",
        "url": "https://www.britannica.com/topic/Manu"
      },
      {
        "label": "britannica.com - Matsya Hinduism",
        "url": "https://www.britannica.com/topic/Matsya-Hinduism"
      }
    ],
    "translations": entryTranslations["myth-003-manu-and-the-fish"]
  },
  {
    "id": "myth-004-the-great-flood-of-gun-and-yu",
    "title": "4. The Great Flood of Gun and Yu",
    "subtitle": "Early Chinese tradition",
    "text": "A vast flood devastates the world. Gun fails to control it, and his son Yu succeeds by dredging and channeling the waters, restoring habitable order…",
    "date": "Extant written forms occur mainly in Warring States and early imperial texts. The Yu Gong chapter of the Book of Documents is often dated by modern scholarship to the fifth century BCE or later, though the story presents Yu as much earlier.",
    "latitude": 35.8,
    "longitude": 102.75,
    "region": "Asia",
    "details": {
      "classification": "Early Chinese tradition.",
      "geographicLocation": "Yellow River world of north China. A useful marker is Jishi Gorge on the upper Yellow River, near the modern Qinghai-Gansu border, because that is central to a major geological hypothesis about the tradition.",
      "mapPlacement": "Approx. 35.80 N, 102.75 E.",
      "narrative": "A vast flood devastates the world. Gun fails to control it, and his son Yu succeeds by dredging and channeling the waters, restoring habitable order and enabling civilized rule. This is less ark-like than Noah: it centers on flood control rather than a family riding out a deluge in a vessel. The parallels are catastrophic flood, chosen culture hero, preservation of society, and post-flood renewal.",
      "chronology": "Extant written forms occur mainly in Warring States and early imperial texts. The Yu Gong chapter of the Book of Documents is often dated by modern scholarship to the fifth century BCE or later, though the story presents Yu as much earlier.",
      "evidence": "A 2016 Science paper proposed an earthquake-triggered landslide-dam outburst flood at Jishi Gorge around 1920 BCE as a possible historical core for the Great Flood and Xia foundation traditions. This interpretation is debated; critics argue the textual tradition and physical evidence do not securely reduce to one event.",
      "references": [
        {
          "label": "britannica.com - Da Yu",
          "url": "https://www.britannica.com/topic/Da-Yu"
        },
        {
          "label": "pubmed.ncbi.nlm.nih.gov - 27493183",
          "url": "https://pubmed.ncbi.nlm.nih.gov/27493183/"
        },
        {
          "label": "science.org - science.aak9657",
          "url": "https://www.science.org/doi/pdf/10.1126/science.aak9657"
        },
        {
          "label": "brill.com - article p23 2",
          "url": "https://brill.com/view/journals/joch/3/1/article-p23_2.xml"
        },
        {
          "label": "history.stanford.edu - flood myths early china",
          "url": "https://history.stanford.edu/publications/flood-myths-early-china"
        }
      ]
    },
    "links": [
      {
        "label": "britannica.com - Da Yu",
        "url": "https://www.britannica.com/topic/Da-Yu"
      },
      {
        "label": "pubmed.ncbi.nlm.nih.gov - 27493183",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27493183/"
      },
      {
        "label": "science.org - science.aak9657",
        "url": "https://www.science.org/doi/pdf/10.1126/science.aak9657"
      }
    ],
    "translations": entryTranslations["myth-004-the-great-flood-of-gun-and-yu"]
  },
  {
    "id": "myth-005-nuu-and-the-flood-of-kai-a-ka-hinalii",
    "title": "5. Nuu and the Flood of Kai-a-ka-hinalii",
    "subtitle": "Hawaiian",
    "text": "In the best-known recorded version, Nuu builds a large vessel with a house-like superstructure and survives a great inundation with his family.",
    "date": "Earliest known written notice is tied to William Elliss 1823 visit, after Hawaiians heard a sermon mentioning Noah. Later nineteenth-century versions expanded the canoe/houseboat form.",
    "latitude": 19.82,
    "longitude": -155.47,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "Hawaiian.",
      "geographicLocation": "Hawaii Island in Polynesia, especially Mauna Kea as a mountain landing/refuge in recorded versions; modern State of Hawaii, United States.",
      "mapPlacement": "Approx. 19.82 N, 155.47 W.",
      "narrative": "In the best-known recorded version, Nuu builds a large vessel with a house-like superstructure and survives a great inundation with his family. The waters subside, the vessel rests on Mauna Kea, Nuu offers sacrifice, and Kane corrects his mistaken worship, sometimes appearing with a rainbow. The story is very Noah-like in vessel, chosen survivor, family survival, mountain landing, sacrifice, and reconciliation motif.",
      "chronology": "Earliest known written notice is tied to William Elliss 1823 visit, after Hawaiians heard a sermon mentioning Noah. Later nineteenth-century versions expanded the canoe/houseboat form.",
      "evidence": "This case requires caution because scholars such as Beckwith note strong biblical analogy in missionary-era forms of the story. Independently, paleotsunami research at Nuu Refuge, Maui, has identified high-energy marine inundation deposits, showing that Hawaiian oral traditions can intersect with real marine hazards. That does not prove this specific Nuu story records that event.",
      "references": [
        {
          "label": "sacred-texts.com - hm24",
          "url": "https://sacred-texts.com/pac/hm/hm24.htm"
        },
        {
          "label": "mkea.info - kai a ka hinalii an account of the ocean flood of ka hina li",
          "url": "https://www.mkea.info/mauna-kea-moolelo/2021/9/14/kai-a-ka-hinalii-an-account-of-the-ocean-flood-of-ka-hina-lii-and-mauna-kea"
        },
        {
          "label": "puke.ulukau.org - ulukau books",
          "url": "https://puke.ulukau.org/ulukau-books/?a=d&d=EBOOK-MAUNA.2.5.1"
        },
        {
          "label": "sciencedirect.com - S0025322724001920",
          "url": "https://www.sciencedirect.com/science/article/pii/S0025322724001920"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - hm24",
        "url": "https://sacred-texts.com/pac/hm/hm24.htm"
      },
      {
        "label": "mkea.info - kai a ka hinalii an account of the ocean flood of ka hina li",
        "url": "https://www.mkea.info/mauna-kea-moolelo/2021/9/14/kai-a-ka-hinalii-an-account-of-the-ocean-flood-of-ka-hina-lii-and-mauna-kea"
      },
      {
        "label": "puke.ulukau.org - ulukau books",
        "url": "https://puke.ulukau.org/ulukau-books/?a=d&d=EBOOK-MAUNA.2.5.1"
      }
    ],
    "translations": entryTranslations["myth-005-nuu-and-the-flood-of-kai-a-ka-hinalii"]
  },
  {
    "id": "myth-006-qat-and-the-banks-islands-deluge",
    "title": "6. Qat and the Banks Islands Deluge",
    "subtitle": "Banks Islands",
    "text": "Qat builds a large canoe on dry land while others mock him.",
    "date": "First securely documented in late nineteenth-century ethnography, especially R. H. Codringtons 1891 work on Melanesia, though the tradition is older orally.",
    "latitude": -14.25,
    "longitude": 167.59,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "Banks Islands / northern Vanuatu, Melanesian oral tradition.",
      "geographicLocation": "Banks Islands, especially Gaua, in modern Vanuatu.",
      "mapPlacement": "Approx. 14.25 S, 167.59 E.",
      "narrative": "Qat builds a large canoe on dry land while others mock him. He takes aboard his family and the living creatures of the island, including very small animals, shuts himself in, and prays for rain. A deluge follows, cuts a channel to the sea, and leaves a lake where a plain had been. The motifs include foreknowledge, mockery, a large vessel, preservation of family and animals, catastrophic flooding, and landscape renewal.",
      "chronology": "First securely documented in late nineteenth-century ethnography, especially R. H. Codringtons 1891 work on Melanesia, though the tradition is older orally.",
      "evidence": "The story is attached to local topography and functions partly as an etiological explanation of a channel and lake. I found no securely dated geological study tying this specific tale to one event, so a historical connection remains unproven.",
      "references": [
        {
          "label": "en.wikisource.org - The Melanesians: Studies in their Anthropology and Folklore",
          "url": "https://en.wikisource.org/wiki/The_Melanesians%3A_Studies_in_their_Anthropology_and_Folklore"
        },
        {
          "label": "sacred-texts.com - hm24",
          "url": "https://sacred-texts.com/pac/hm/hm24.htm"
        },
        {
          "label": "curioustaxonomy.net - vanuatu",
          "url": "https://www.curioustaxonomy.net/home/FloodMyths/11Paci/vanuatu.html"
        }
      ]
    },
    "links": [
      {
        "label": "en.wikisource.org - The Melanesians: Studies in their Anthropology and Folklore",
        "url": "https://en.wikisource.org/wiki/The_Melanesians%3A_Studies_in_their_Anthropology_and_Folklore"
      },
      {
        "label": "sacred-texts.com - hm24",
        "url": "https://sacred-texts.com/pac/hm/hm24.htm"
      },
      {
        "label": "curioustaxonomy.net - vanuatu",
        "url": "https://www.curioustaxonomy.net/home/FloodMyths/11Paci/vanuatu.html"
      }
    ],
    "translations": entryTranslations["myth-006-qat-and-the-banks-islands-deluge"]
  },
  {
    "id": "myth-007-nanabozho-and-the-anishinaabe-great-flood",
    "title": "7. Nanabozho and the Anishinaabe Great Flood",
    "subtitle": "Anishinaabe",
    "text": "The Creator sends a great flood after moral disorder.",
    "date": "Living oral tradition; one major documented witness is the collection of Ojibwa narratives recorded in 1893-1895 from Charles and Charlotte Kawbawgam and Jacques LePique.",
    "latitude": 47.5,
    "longitude": -87.5,
    "region": "North America",
    "details": {
      "classification": "Anishinaabe / Ojibwe and related Great Lakes traditions.",
      "geographicLocation": "Upper Great Lakes region of North America, spanning parts of modern Ontario, Michigan, Wisconsin, and Minnesota.",
      "mapPlacement": "Approx. 47.50 N, 87.50 W. This is a broad Lake Superior marker, not a single event site.",
      "narrative": "The Creator sends a great flood after moral disorder. Nanabozho survives on a floating log or raft with animals and birds. Diving animals attempt to retrieve earth from below the waters; muskrat succeeds, and the mud is spread on Turtles back to renew land. The story has moral causation, selected survival with animals, preservation of life, and post-flood renewal, though it is an earth-diver narrative rather than an ark narrative.",
      "chronology": "Living oral tradition; one major documented witness is the collection of Ojibwa narratives recorded in 1893-1895 from Charles and Charlotte Kawbawgam and Jacques LePique.",
      "evidence": "Great Lakes research documents major postglacial water-level shifts and inundated cultural landscapes. Some scholars argue that Anishinaabe oral traditions preserve deep environmental memory, but no single event has been securely demonstrated as the origin of this specific myth.",
      "references": [
        {
          "label": "pipekeepers.org - the ojibwe creation story",
          "url": "https://www.pipekeepers.org/uploads/3/1/3/0/31306445/the_ojibwe_creation_story.pdf"
        },
        {
          "label": "saulttribe.com - Anishinaabe Teachings of the Turtle Mikinaak",
          "url": "https://saulttribe.com/images/Anishinaabe_Teachings_of_the_Turtle_Mikinaak.pdf"
        },
        {
          "label": "archive.org - ojibwanarratives0000kawb",
          "url": "https://archive.org/details/ojibwanarratives0000kawb"
        },
        {
          "label": "mdpi.com - 246",
          "url": "https://www.mdpi.com/2571-9408/8/7/246"
        }
      ]
    },
    "links": [
      {
        "label": "pipekeepers.org - the ojibwe creation story",
        "url": "https://www.pipekeepers.org/uploads/3/1/3/0/31306445/the_ojibwe_creation_story.pdf"
      },
      {
        "label": "saulttribe.com - Anishinaabe Teachings of the Turtle Mikinaak",
        "url": "https://saulttribe.com/images/Anishinaabe_Teachings_of_the_Turtle_Mikinaak.pdf"
      },
      {
        "label": "archive.org - ojibwanarratives0000kawb",
        "url": "https://archive.org/details/ojibwanarratives0000kawb"
      }
    ],
    "translations": entryTranslations["myth-007-nanabozho-and-the-anishinaabe-great-flood"]
  },
  {
    "id": "myth-008-tata-and-nene-in-the-leyenda-de-los-soles",
    "title": "8. Tata and Nene in the Leyenda de los Soles",
    "subtitle": "Nahua central Mexico",
    "text": "The Sun of Four Water ends in catastrophic inundation.",
    "date": "The surviving Nahuatl text opens with the date 22 May 1558 and is preserved through the Codex Chimalpopoca tradition, drawing on older Indigenous materials.",
    "latitude": 19.43,
    "longitude": -99.13,
    "region": "Mesoamerica / Central America",
    "details": {
      "classification": "Nahua central Mexico, preserved in colonial-era Mexica/Aztec textual tradition.",
      "geographicLocation": "Central Mexican highlands and the Valley of Mexico; modern Mexico City region, Mexico.",
      "mapPlacement": "Approx. 19.43 N, 99.13 W.",
      "narrative": "The Sun of Four Water ends in catastrophic inundation. Titlacahuan/Tezcatlipoca warns Tata and his wife Nene, telling them to hollow out a great ahuehuetl trunk and enter it with a single ear of maize each. After the waters diminish they emerge, cook fish, and are punished by the gods, who transform them into dogs. The parallels are divine warning, chosen pair, vessel, survival through cosmic flood, food restrictions, and morally charged aftermath; unlike Noah, they do not directly repopulate humanity in this version.",
      "chronology": "The surviving Nahuatl text opens with the date 22 May 1558 and is preserved through the Codex Chimalpopoca tradition, drawing on older Indigenous materials.",
      "evidence": "No accepted one-event identification exists. The Valley of Mexico was a lake-basin environment with recurrent flooding, which gives strong environmental context for flood traditions. Colonial transmission also complicates the textual history.",
      "references": [
        {
          "label": "historicas.unam.mx - 000 04 03 LeyendaSoles",
          "url": "https://historicas.unam.mx/publicaciones/publicadigital/libros/000/000_04_03_LeyendaSoles.pdf"
        },
        {
          "label": "wiki.ethnopoetics.org - doku",
          "url": "https://www.wiki.ethnopoetics.org/doku.php?id=history_and_mythology_of_the_aztecs%3Athe_codex_chimalpopoca"
        },
        {
          "label": "ebsco.com - draining lake texcoco",
          "url": "https://www.ebsco.com/research-starters/history/draining-lake-texcoco"
        }
      ]
    },
    "links": [
      {
        "label": "historicas.unam.mx - 000 04 03 LeyendaSoles",
        "url": "https://historicas.unam.mx/publicaciones/publicadigital/libros/000/000_04_03_LeyendaSoles.pdf"
      },
      {
        "label": "wiki.ethnopoetics.org - doku",
        "url": "https://www.wiki.ethnopoetics.org/doku.php?id=history_and_mythology_of_the_aztecs%3Athe_codex_chimalpopoca"
      },
      {
        "label": "ebsco.com - draining lake texcoco",
        "url": "https://www.ebsco.com/research-starters/history/draining-lake-texcoco"
      }
    ],
    "translations": entryTranslations["myth-008-tata-and-nene-in-the-leyenda-de-los-soles"]
  },
  {
    "id": "myth-009-the-huarochiri-flood",
    "title": "9. The Huarochiri Flood",
    "subtitle": "Quechua-speaking Huarochiri trad.",
    "text": "A llama senses that the ocean is about to overflow and warns its human owner that the world will end in five days.",
    "date": "The surviving manuscript was compiled in Quechua around 1598-1608, recording older oral traditions from Huarochiri.",
    "latitude": -11.82,
    "longitude": -76.39,
    "region": "South America",
    "details": {
      "classification": "Quechua-speaking Huarochiri tradition of the central Andes.",
      "geographicLocation": "Huarochiri Province in the central Andes east of Lima, Peru. The flood refuge is the mountain Huillcacoto / Villca Coto in the story, but the exact modern identification is not always consistent.",
      "mapPlacement": "Approx. 11.82 S, 76.39 W, used as a regional Huarochiri marker.",
      "narrative": "A llama senses that the ocean is about to overflow and warns its human owner that the world will end in five days. The man carries provisions and the llama to a mountain refuge, where animals have already gathered. The sea rises and covers the world except the summit. After the waters recede, the survivors descend into a renewed world. The myth includes advance warning, selected survival, animal life, engulfing flood, and post-flood renewal, but the refuge is a mountain, not an ark.",
      "chronology": "The surviving manuscript was compiled in Quechua around 1598-1608, recording older oral traditions from Huarochiri.",
      "evidence": "Central Andean research documents repeated catastrophic flooding over the last two millennia, often linked with severe El Nino events, storms, and possibly tsunamis. This provides environmental context, but the colonial Christian setting of the manuscript and its biblical resonances mean direct historical identification is uncertain.",
      "references": [
        {
          "label": "vistas.ace.fordham.edu - flood",
          "url": "https://vistas.ace.fordham.edu/lib/17th/flood/"
        },
        {
          "label": "vistas.ace.fordham.edu - history visual culture",
          "url": "https://vistas.ace.fordham.edu/lib/17th/flood/history-visual-culture/"
        },
        {
          "label": "archive.org - huarochirimanusc0000unse",
          "url": "https://archive.org/details/huarochirimanusc0000unse"
        },
        {
          "label": "utpress.utexas.edu - 9780292730533",
          "url": "https://utpress.utexas.edu/9780292730533/"
        },
        {
          "label": "sciencedirect.com - S0305440311003852",
          "url": "https://www.sciencedirect.com/science/article/pii/S0305440311003852"
        }
      ]
    },
    "links": [
      {
        "label": "vistas.ace.fordham.edu - flood",
        "url": "https://vistas.ace.fordham.edu/lib/17th/flood/"
      },
      {
        "label": "vistas.ace.fordham.edu - history visual culture",
        "url": "https://vistas.ace.fordham.edu/lib/17th/flood/history-visual-culture/"
      },
      {
        "label": "archive.org - huarochirimanusc0000unse",
        "url": "https://archive.org/details/huarochirimanusc0000unse"
      }
    ],
    "translations": entryTranslations["myth-009-the-huarochiri-flood"]
  },
  {
    "id": "myth-010-deucalion-and-pyrrha",
    "title": "10. Deucalion and Pyrrha",
    "subtitle": "Ancient Greek",
    "text": "Zeus decides to destroy corrupt humanity by flood.",
    "date": "First attested in Greek literature in the fifth century BCE, including Epicharmus and Pindar; later narrated more fully by Ovid, Apollodorus, and others.",
    "latitude": 38.53,
    "longitude": 22.62,
    "region": "Europe",
    "details": {
      "classification": "Ancient Greek.",
      "geographicLocation": "Greek mainland, especially Thessaly and, in major later versions, Mount Parnassus, where the vessel comes to rest; modern Greece.",
      "mapPlacement": "Approx. 38.53 N, 22.62 E for Mount Parnassus. Ancient sources name other landing places too.",
      "narrative": "Zeus decides to destroy corrupt humanity by flood. Prometheus warns his son Deucalion, who builds a chest or ark-like vessel and survives with his wife Pyrrha. After the waters fall and the couple land on a mountain, they repopulate the earth by throwing stones over their shoulders, which become men and women. The parallels are divine forewarning, chosen remnant, survival vessel, mountain refuge, and renewal of humankind. Animal preservation is not central.",
      "chronology": "First attested in Greek literature in the fifth century BCE, including Epicharmus and Pindar; later narrated more fully by Ovid, Apollodorus, and others.",
      "evidence": "No peer-reviewed consensus links the myth to one specific event. Greece is tectonically and tsunami-prone, and the palaeotsunami record is substantial, but attempts to identify the myth with a single event such as Thera remain speculative.",
      "references": [
        {
          "label": "britannica.com - Deucalion",
          "url": "https://www.britannica.com/topic/Deucalion"
        },
        {
          "label": "melammu-project.eu - a0001298",
          "url": "https://www.melammu-project.eu/database/gen_html/a0001298.html"
        },
        {
          "label": "mdpi.com - 4",
          "url": "https://www.mdpi.com/2076-3263/12/1/4"
        }
      ]
    },
    "links": [
      {
        "label": "britannica.com - Deucalion",
        "url": "https://www.britannica.com/topic/Deucalion"
      },
      {
        "label": "melammu-project.eu - a0001298",
        "url": "https://www.melammu-project.eu/database/gen_html/a0001298.html"
      },
      {
        "label": "mdpi.com - 4",
        "url": "https://www.mdpi.com/2076-3263/12/1/4"
      }
    ],
    "translations": entryTranslations["myth-010-deucalion-and-pyrrha"]
  },
  {
    "id": "myth-011-miao-brother-sister-flood-and-gourd-refuge",
    "title": "11. Miao Brother-Sister Flood and Gourd Refuge",
    "subtitle": "Miao",
    "text": "Many Miao variants tell of Heaven or a high deity sending a catastrophic flood that destroys nearly all people.",
    "date": "Orally older; surviving scholarly records are mainly late nineteenth- and twentieth-century folklore and ethnographic collections rather than ancient inscriptions.",
    "latitude": 26.5,
    "longitude": 107.5,
    "region": "Asia",
    "details": {
      "classification": "Miao / Hmong-related traditions of southwest China.",
      "geographicLocation": "Ancient uplands of southwest China; modern Guizhou, eastern Yunnan, western Hunan, and northern Guangxi, especially mountainous karst and river-valley zones where Miao flood traditions were recorded.",
      "mapPlacement": "Approx. 26.50 N, 107.50 E. This is a broad homeland marker; the story circulates in multiple communities and is not fixed to one universally agreed flood site.",
      "narrative": "Many Miao variants tell of Heaven or a high deity sending a catastrophic flood that destroys nearly all people. A brother and sister receive warning directly or indirectly and survive inside a gourd, drum, chest, or similar enclosed refuge. After the waters recede, they test whether they may marry, and humanity is renewed from them. The motif parallels Noah in divine catastrophe, chosen survivors, enclosed vessel/refuge, and post-flood repopulation, though animal preservation is usually secondary or absent.",
      "chronology": "Orally older; surviving scholarly records are mainly late nineteenth- and twentieth-century folklore and ethnographic collections rather than ancient inscriptions.",
      "evidence": "The evidence is ethnographic and mythological, not archaeological. No excavated flood layer or dated paleoflood is securely tied to this story. Southwest Chinas history of destructive river floods, landslides, and karst landscapes makes flood memory plausible, but a specific event correlation remains speculative.",
      "references": [
        {
          "label": "bloomsbury.com - handbook of chinese mythology 9781576078068",
          "url": "https://www.bloomsbury.com/us/handbook-of-chinese-mythology-9781576078068/"
        },
        {
          "label": "openlibrary.org - Handbook of Chinese mythology",
          "url": "https://openlibrary.org/works/OL5823359W/Handbook_of_Chinese_mythology"
        }
      ]
    },
    "links": [
      {
        "label": "bloomsbury.com - handbook of chinese mythology 9781576078068",
        "url": "https://www.bloomsbury.com/us/handbook-of-chinese-mythology-9781576078068/"
      },
      {
        "label": "openlibrary.org - Handbook of Chinese mythology",
        "url": "https://openlibrary.org/works/OL5823359W/Handbook_of_Chinese_mythology"
      }
    ],
    "translations": entryTranslations["myth-011-miao-brother-sister-flood-and-gourd-refuge"]
  },
  {
    "id": "myth-012-ifugao-flood-of-wigan-bugan-and-kabigat",
    "title": "12. Ifugao Flood of Wigan, Bugan, and Kabigat",
    "subtitle": "Ifugao of northern Luzon",
    "text": "Ifugao traditions preserve an ancestral flood in which a great inundation destroys almost everyone.",
    "date": "Orally older; major records come from early twentieth-century ethnography and later provincial and scholarly syntheses.",
    "latitude": 16.9,
    "longitude": 121.1,
    "region": "Asia",
    "details": {
      "classification": "Ifugao of northern Luzon.",
      "geographicLocation": "Ancient Ifugao highlands in the Cordillera of northern Luzon; modern Ifugao Province, Philippines, especially the mountain-rice-terrace region around Kiangan and Banaue.",
      "mapPlacement": "Approx. 16.90 N, 121.10 E. This is a homeland marker, not a single flood site.",
      "narrative": "Ifugao traditions preserve an ancestral flood in which a great inundation destroys almost everyone. In some accounts only Kabigat and his sister Bugan survive; related ancestral cycles also associate Wigan and Bugan with Ifugao origins. The surviving pair endures the disaster from a place of refuge, often a mountain or elevated sanctuary rather than a large ark, and afterward human society is renewed. The Noah-like elements are catastrophic flood, chosen remnant, survival refuge, and repopulation; animal loading is not central.",
      "chronology": "Orally older; major records come from early twentieth-century ethnography and later provincial and scholarly syntheses.",
      "evidence": "The evidence is historical-ethnographic. Northern Luzon is highly exposed to typhoon rainfall, flash flooding, and slope failure, giving environmental plausibility, but no specific geological event has been securely shown to be the origin of the story.",
      "references": [
        {
          "label": "ifugao.gov.ph - the people of ifugao",
          "url": "https://ifugao.gov.ph/the-people-of-ifugao/"
        },
        {
          "label": "pantheon.org - wigan",
          "url": "https://pantheon.org/articles/w/wigan.html"
        }
      ]
    },
    "links": [
      {
        "label": "ifugao.gov.ph - the people of ifugao",
        "url": "https://ifugao.gov.ph/the-people-of-ifugao/"
      },
      {
        "label": "pantheon.org - wigan",
        "url": "https://pantheon.org/articles/w/wigan.html"
      }
    ],
    "translations": entryTranslations["myth-012-ifugao-flood-of-wigan-bugan-and-kabigat"]
  },
  {
    "id": "myth-013-hopi-flood-of-the-third-world",
    "title": "13. Hopi Flood of the Third World",
    "subtitle": "Hopi",
    "text": "In classic Hopi world-age narratives, people in an earlier world become corrupt or ritually disordered.",
    "date": "Written record mainly late nineteenth- and early twentieth-century ethnography, especially Voths 1905 collection, preserving older oral tradition.",
    "latitude": 35.8,
    "longitude": -110.5,
    "region": "North America",
    "details": {
      "classification": "Hopi.",
      "geographicLocation": "Ancient Puebloan-Hopi homeland; modern northeastern Arizona, United States, especially the Hopi mesas and surrounding desert plateau.",
      "mapPlacement": "Approx. 35.80 N, 110.50 W.",
      "narrative": "In classic Hopi world-age narratives, people in an earlier world become corrupt or ritually disordered. The old world is destroyed by flood. Through divine instruction, often mediated by Spider Woman, selected people are sealed in hollow reeds or reed-like floating refuges with food and water until the waters subside. The survivors emerge into a renewed world age and begin migration. The parallels are moral disorder, divinely managed flood, chosen survivors, flotation/refuge, and post-flood renewal; animal cargo is not a main feature.",
      "chronology": "Written record mainly late nineteenth- and early twentieth-century ethnography, especially Voths 1905 collection, preserving older oral tradition.",
      "evidence": "The evidence is oral-traditional and ethnographic. The sources do not identify a specific flood layer, lake outburst, or paleohydrological event behind the Hopi story. It is usually treated primarily as a world-age cosmological myth.",
      "references": [
        {
          "label": "openlibrary.org - The traditions of the Hopi",
          "url": "https://openlibrary.org/works/OL240931W/The_traditions_of_the_Hopi"
        },
        {
          "label": "commons.wikimedia.org - File:The traditions of the Hopi (IA traditionshopi00vothrich",
          "url": "https://commons.wikimedia.org/wiki/File%3AThe_traditions_of_the_Hopi_%28IA_traditionshopi00vothrich%29.pdf"
        },
        {
          "label": "curioustaxonomy.net - hopi",
          "url": "https://www.curioustaxonomy.net/home/FloodMyths/21NASW/hopi.html"
        }
      ]
    },
    "links": [
      {
        "label": "openlibrary.org - The traditions of the Hopi",
        "url": "https://openlibrary.org/works/OL240931W/The_traditions_of_the_Hopi"
      },
      {
        "label": "commons.wikimedia.org - File:The traditions of the Hopi (IA traditionshopi00vothrich",
        "url": "https://commons.wikimedia.org/wiki/File%3AThe_traditions_of_the_Hopi_%28IA_traditionshopi00vothrich%29.pdf"
      },
      {
        "label": "curioustaxonomy.net - hopi",
        "url": "https://www.curioustaxonomy.net/home/FloodMyths/21NASW/hopi.html"
      }
    ],
    "translations": entryTranslations["myth-013-hopi-flood-of-the-third-world"]
  },
  {
    "id": "myth-014-wisakedjak-flood",
    "title": "14. Wisakedjak Flood",
    "subtitle": "Cree & northern Algonquian traditions",
    "text": "In Cree deluge variants, the transformer Wisakedjak survives a world-covering flood with animals on a raft or floating refuge.",
    "date": "Older oral tradition; a major textual witness is Leonard Bloomfields Sacred Stories of the Sweet Grass Cree, recorded in Cree in 1925 and published in 1930.",
    "latitude": 54,
    "longitude": -102,
    "region": "North America",
    "details": {
      "classification": "Cree and related northern Algonquian traditions.",
      "geographicLocation": "Boreal and subarctic Cree world; modern Manitoba, Saskatchewan, Alberta, northern Ontario, and adjacent Canadian regions.",
      "mapPlacement": "Approx. 54.00 N, 102.00 W. This is a broad central-boreal homeland marker; the story is not tied to one fixed locality.",
      "narrative": "In Cree deluge variants, the transformer Wisakedjak survives a world-covering flood with animals on a raft or floating refuge. Diving animals try to retrieve mud from under the waters; eventually earth is recovered and land is remade. The myth has catastrophic flood, selected remnant, preservation of animals, and renewal after the waters, though it follows the North American earth-diver pattern rather than a Near Eastern ark pattern.",
      "chronology": "Older oral tradition; a major textual witness is Leonard Bloomfields Sacred Stories of the Sweet Grass Cree, recorded in Cree in 1925 and published in 1930.",
      "evidence": "The evidence is textual and ethnographic. Northern North America experienced dramatic postglacial water-level changes, but no one glacial-lake outburst or flood deposit has been securely linked to the Wisakedjak flood in the cited sources.",
      "references": [
        {
          "label": "publications.gc.ca - publication",
          "url": "https://publications.gc.ca/site/eng/9.908348/publication.html"
        },
        {
          "label": "openlibrary.org - Sacred stories of the Sweet Grass Cree",
          "url": "https://openlibrary.org/books/OL5047360M/Sacred_stories_of_the_Sweet_Grass_Cree"
        },
        {
          "label": "epe.lac-bac.gc.ca - sacred",
          "url": "https://epe.lac-bac.gc.ca/100/201/300/cm/html/2008/v14n19/outreach/cm/cmarchive/vol22no3/sacred.html?nodisclaimer=1"
        }
      ]
    },
    "links": [
      {
        "label": "publications.gc.ca - publication",
        "url": "https://publications.gc.ca/site/eng/9.908348/publication.html"
      },
      {
        "label": "openlibrary.org - Sacred stories of the Sweet Grass Cree",
        "url": "https://openlibrary.org/books/OL5047360M/Sacred_stories_of_the_Sweet_Grass_Cree"
      },
      {
        "label": "epe.lac-bac.gc.ca - sacred",
        "url": "https://epe.lac-bac.gc.ca/100/201/300/cm/html/2008/v14n19/outreach/cm/cmarchive/vol22no3/sacred.html?nodisclaimer=1"
      }
    ],
    "translations": entryTranslations["myth-014-wisakedjak-flood"]
  },
  {
    "id": "myth-015-canari-flood-of-huacayanan",
    "title": "15. Canari Flood of Huacayanan",
    "subtitle": "Canari of the southern Ecuadorian Andes",
    "text": "A great flood destroys nearly all people.",
    "date": "Earliest surviving written record is sixteenth-century Spanish colonial historiography, especially Cieza de Leons reports of older Indigenous tradition.",
    "latitude": -2.9,
    "longitude": -79,
    "region": "South America",
    "details": {
      "classification": "Canari of the southern Ecuadorian Andes.",
      "geographicLocation": "Ancient southern Ecuadorian Andes; modern Azuay and Canar provinces, Ecuador, especially the highland zone associated with the Canari people.",
      "mapPlacement": "Approx. 2.90 S, 79.00 W.",
      "narrative": "A great flood destroys nearly all people. Two brothers survive by taking refuge on the mountain Huacayanan. After the flood, they find food mysteriously prepared for them; the providers are macaws who, in later retellings, become women and enable repopulation. The tradition lacks a formal ark, but includes world-destroying flood, small remnant, mountain refuge, and renewal of human life.",
      "chronology": "Earliest surviving written record is sixteenth-century Spanish colonial historiography, especially Cieza de Leons reports of older Indigenous tradition.",
      "evidence": "The evidence is historical, not geological. Andean societies lived with severe flooding, landslides, volcanic hazards, and El Nino variability, but no specific paleoflood has been securely tied to this tale.",
      "references": [
        {
          "label": "archive.org - search",
          "url": "https://archive.org/search?query=Cieza%20de%20Leon%20Cronica%20del%20Peru"
        }
      ]
    },
    "links": [
      {
        "label": "archive.org - search",
        "url": "https://archive.org/search?query=Cieza%20de%20Leon%20Cronica%20del%20Peru"
      }
    ],
    "translations": entryTranslations["myth-015-canari-flood-of-huacayanan"]
  },
  {
    "id": "myth-016-tamanduare-flood",
    "title": "16. Tamanduare Flood",
    "subtitle": "Guarani",
    "text": "Guarani materials record a catastrophic flood that destroys the world or nearly all humans.",
    "date": "Main scholarly record is early twentieth-century ethnography based on older Guarani oral tradition; Nimuendaju originally published his Apapocuva-Guarani study in 1914.",
    "latitude": -24.5,
    "longitude": -54.5,
    "region": "South America",
    "details": {
      "classification": "Guarani.",
      "geographicLocation": "Ancient Guarani world of the Upper Parana-Paraguay region; modern Paraguay, southern Brazil, and adjacent northern Argentina.",
      "mapPlacement": "Approx. 24.50 S, 54.50 W. This is a broad Upper Parana marker, not a single agreed flood site.",
      "narrative": "Guarani materials record a catastrophic flood that destroys the world or nearly all humans. The survivor Tamanduare and his wife escape by climbing a palm tree or using a comparable refuge above the waters. After the flood, human life continues from the survivors. The parallels are total inundation, chosen survival, and renewal, while the refuge is a tree rather than an ark and animal preservation is not central.",
      "chronology": "Main scholarly record is early twentieth-century ethnography based on older Guarani oral tradition; Nimuendaju originally published his Apapocuva-Guarani study in 1914.",
      "evidence": "The Upper Parana-Paraguay basin has immense flood regimes, so an environmental background is plausible. The cited ethnographic literature does not demonstrate one specific event as the source of the myth.",
      "references": [
        {
          "label": "periodicos.unb.br - 6404",
          "url": "https://periodicos.unb.br/index.php/anuarioantropologico/article/view/6404"
        }
      ]
    },
    "links": [
      {
        "label": "periodicos.unb.br - 6404",
        "url": "https://periodicos.unb.br/index.php/anuarioantropologico/article/view/6404"
      }
    ],
    "translations": entryTranslations["myth-016-tamanduare-flood"]
  },
  {
    "id": "myth-017-trentren-vilu-and-caicai-vilu",
    "title": "17. Trentren Vilu and Caicai Vilu",
    "subtitle": "Mapuche",
    "text": "The water-being Caicai Vilu raises the sea to destroy humans and animals.",
    "date": "Recorded in colonial-era and later sources, especially seventeenth- and eighteenth-century Chilean traditions, while the oral tradition is older.",
    "latitude": -38.7,
    "longitude": -72.6,
    "region": "South America",
    "details": {
      "classification": "Mapuche.",
      "geographicLocation": "South-central Chile; modern Araucania, Los Rios, Los Lagos, and adjacent coastal and inland regions.",
      "mapPlacement": "Approx. 38.70 S, 72.60 W.",
      "narrative": "The water-being Caicai Vilu raises the sea to destroy humans and animals. Trentren Vilu, associated with land, warns people, raises the land, or guides them to high ground. Some versions include improvised flotation, while others emphasize a rising hill. Those who fail to escape drown or transform. Afterward, survivors continue life in an altered landscape. The motifs include warning, catastrophic inundation, survival of people and animals, and post-flood renewal.",
      "chronology": "Recorded in colonial-era and later sources, especially seventeenth- and eighteenth-century Chilean traditions, while the oral tradition is older.",
      "evidence": "This is one of the stronger hazard-memory candidates because the Mapuche homeland lies along a coast repeatedly affected by great earthquakes, tsunamis, coastal subsidence/uplift, volcanic eruptions, and lahars. Modern geomythological discussions often connect the myth with these geological processes. However, it is uncertain whether the story encodes one event, many events, or general hazard knowledge.",
      "references": [
        {
          "label": "en.wikipedia.org - Legend of Trentren Vilu and Caicai Vilu",
          "url": "https://en.wikipedia.org/wiki/Legend_of_Trentren_Vilu_and_Caicai_Vilu"
        }
      ]
    },
    "links": [
      {
        "label": "en.wikipedia.org - Legend of Trentren Vilu and Caicai Vilu",
        "url": "https://en.wikipedia.org/wiki/Legend_of_Trentren_Vilu_and_Caicai_Vilu"
      }
    ],
    "translations": entryTranslations["myth-017-trentren-vilu-and-caicai-vilu"]
  },
  {
    "id": "myth-018-ruahatu-flood",
    "title": "18. Ruahatu Flood",
    "subtitle": "Society Islands / Tahitian",
    "text": "In Society Islands versions, the sea deity Ruahatu warns a favored human or small group that the sea will rise and overwhelm the land.",
    "date": "Nineteenth-century missionary and antiquarian literature, especially William Ellis and Teuira Henry, recording older Polynesian oral tradition.",
    "latitude": -16.8,
    "longitude": -151.4,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "Society Islands / Tahitian.",
      "geographicLocation": "Central East Polynesia, especially Raiatea and Tahiti in modern French Polynesia.",
      "mapPlacement": "Approx. 16.80 S, 151.40 W. This is a Society Islands marker rather than a single agreed landing site.",
      "narrative": "In Society Islands versions, the sea deity Ruahatu warns a favored human or small group that the sea will rise and overwhelm the land. Survivors prepare a canoe or protected refuge, take food and sometimes useful living things, endure the inundation, and re-establish life afterward. The structure includes warning, vessel/refuge, selected survivors, and post-flood continuity; exact cargo and landing details vary by version.",
      "chronology": "Nineteenth-century missionary and antiquarian literature, especially William Ellis and Teuira Henry, recording older Polynesian oral tradition.",
      "evidence": "Polynesian oral traditions are often discussed in relation to storm surge, cyclone flooding, and tsunami memory. The marine-hazard link is plausible for island societies, but no single dated tsunami or sea-flood has been proven as the definitive source of the Ruahatu story.",
      "references": [
        {
          "label": "researchgate.net - 309335913 Extreme floods regionalisation in the tropical isl",
          "url": "https://www.researchgate.net/publication/309335913_Extreme_floods_regionalisation_in_the_tropical_island_of_Tahiti_French_Polynesia"
        }
      ]
    },
    "links": [
      {
        "label": "researchgate.net - 309335913 Extreme floods regionalisation in the tropical isl",
        "url": "https://www.researchgate.net/publication/309335913_Extreme_floods_regionalisation_in_the_tropical_island_of_Tahiti_French_Polynesia"
      }
    ],
    "translations": entryTranslations["myth-018-ruahatu-flood"]
  },
  {
    "id": "myth-019-ndengei-flood",
    "title": "19. Ndengei Flood",
    "subtitle": "Fijian",
    "text": "In Fijian myth, the powerful being Ndengei sends a flood in response to offense, irreverence, or social disorder.",
    "date": "Older oral tradition; major written descriptions appear in nineteenth-century missionary and ethnographic accounts, followed by early twentieth-century ethnology.",
    "latitude": -17.8,
    "longitude": 178,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "Fijian.",
      "geographicLocation": "Ancient Fiji; modern Viti Levu and the wider Fijian archipelago.",
      "mapPlacement": "Approx. 17.80 S, 178.00 E. This is a Fiji homeland marker, not one fixed myth site.",
      "narrative": "In Fijian myth, the powerful being Ndengei sends a flood in response to offense, irreverence, or social disorder. Selected survivors escape by canoe, raft, or elevated refuge depending on version. When the waters subside, settlement and social order resume. The tradition varies but includes wrongdoing, divinely sent flood, preserved remnant, and renewed order. Animal preservation is less formalized than in Noah or Gilgamesh.",
      "chronology": "Older oral tradition; major written descriptions appear in nineteenth-century missionary and ethnographic accounts, followed by early twentieth-century ethnology.",
      "evidence": "Fiji is exposed to cyclones, storm surge, river floods, and tsunamis, giving strong environmental plausibility for flood traditions. The cited literature does not securely identify one historical event as the source of Ndengeis flood.",
      "references": [
        {
          "label": "archive.org - search",
          "url": "https://archive.org/search?query=Fiji%20and%20the%20Fijians%20Williams"
        }
      ]
    },
    "links": [
      {
        "label": "archive.org - search",
        "url": "https://archive.org/search?query=Fiji%20and%20the%20Fijians%20Williams"
      }
    ],
    "translations": entryTranslations["myth-019-ndengei-flood"]
  },
  {
    "id": "myth-020-bergelmir-and-the-blood-flood-of-ymir",
    "title": "20. Bergelmir and the Blood Flood of Ymir",
    "subtitle": "Old Norse / Icelandic literary tradition",
    "text": "When Odin, Vili, and Ve kill the primordial giant Ymir, his blood floods the world of the frost giants.",
    "date": "The poetic witness Vafthrudnismal belongs to the Poetic Edda manuscript tradition, written down in the thirteenth century but preserving older poetry. Snorri Sturlusons Prose Edda, around 1220 CE, expands the flood-survival interpretation.",
    "latitude": 64.15,
    "longitude": -21.94,
    "region": "Europe",
    "details": {
      "classification": "Old Norse / Icelandic literary tradition.",
      "geographicLocation": "Mythic Scandinavia as preserved in medieval Icelandic texts; practical marker: Iceland, where the Eddic manuscript tradition was recorded, though the myth belongs to wider Norse tradition.",
      "mapPlacement": "Approx. 64.15 N, 21.94 W for Reykjavik/Icelandic manuscript context. This is not a flood site; it marks the medieval textual homeland of the preserved account.",
      "narrative": "When Odin, Vili, and Ve kill the primordial giant Ymir, his blood floods the world of the frost giants. Nearly all giants drown, but Bergelmir and his wife survive in or on a ludr, a term interpreted as a chest, cradle, coffin, mill-trough, or floating wooden vessel in later discussion. From them the frost giants are renewed. The parallels to Noah are a catastrophic flood, a survivor couple, a vessel-like object, and post-flood repopulation. Differences are major: the flood is blood, there is no moral judgment on humankind, no divine warning, and no animal preservation.",
      "chronology": "The poetic witness Vafthrudnismal belongs to the Poetic Edda manuscript tradition, written down in the thirteenth century but preserving older poetry. Snorri Sturlusons Prose Edda, around 1220 CE, expands the flood-survival interpretation.",
      "evidence": "This is a textual-mythological case, not an archaeological flood-memory case. No accepted geological event is associated with Bergelmirs flood. Scholars also note that Snorris prose version may have shaped or amplified the Noah-like reading of the older poetic line, so the parallel should be treated cautiously.",
      "references": [
        {
          "label": "britannica.com - Aurgelmir",
          "url": "https://www.britannica.com/topic/Aurgelmir"
        },
        {
          "label": "pantheon.org - bergelmir",
          "url": "https://pantheon.org/articles/b/bergelmir.html"
        },
        {
          "label": "worldhistory.org - Ymir",
          "url": "https://www.worldhistory.org/Ymir/"
        },
        {
          "label": "curioustaxonomy.net - norse",
          "url": "https://www.curioustaxonomy.net/home/FloodMyths/01Euro/norse.html"
        }
      ]
    },
    "links": [
      {
        "label": "britannica.com - Aurgelmir",
        "url": "https://www.britannica.com/topic/Aurgelmir"
      },
      {
        "label": "pantheon.org - bergelmir",
        "url": "https://pantheon.org/articles/b/bergelmir.html"
      },
      {
        "label": "worldhistory.org - Ymir",
        "url": "https://www.worldhistory.org/Ymir/"
      }
    ],
    "translations": entryTranslations["myth-020-bergelmir-and-the-blood-flood-of-ymir"]
  },
  {
    "id": "myth-021-mokdoryeong-and-the-great-flood",
    "title": "21. Mokdoryeong and the Great Flood",
    "subtitle": "Korean oral tradition",
    "text": "A heavenly maiden conceives a son through the spirit of a tree.",
    "date": "Earliest known recording is the 1920s, with publication in 1930 in Son Jintae's Joseon Folk Tale Collection according to the Academy of Korean Studies entry. The tradition is older as oral lore, but that is the earliest recording horizon explicitly identified in the accessible source base.",
    "latitude": 36.3,
    "longitude": 127.9,
    "region": "Asia",
    "details": {
      "classification": "Korean oral tradition.",
      "geographicLocation": "Ancient region: the Korean Peninsula. Modern-day equivalent: South Korea and North Korea. This is a widely diffused Korean oral tale collected in multiple local traditions, not a single shrine-anchored myth.",
      "mapPlacement": "Approx. 36.3, 127.9. This coordinate marks the central Korean Peninsula because the tale circulated nationwide and no single original flood site is securely attested. It is a mapping convenience, not a claim about one fixed origin place.",
      "narrative": "A heavenly maiden conceives a son through the spirit of a tree. The tree later warns the boy, Mokdoryeong, that a devastating flood is coming and tells him to ride the fallen trunk. During the inundation he rescues small animals and, despite the tree's warning, also saves a human boy. After the waters recede on high ground, that rescued boy betrays him, but the animals repay Mokdoryeong by helping him survive trials imposed by an old woman. He marries, and the surviving couples become ancestors of renewed humanity. Cause of flood: overwhelming rain / cataclysmic deluge. Warning: yes, from the tree-father. Survivors: Mokdoryeong, a rescued boy, and later surviving couples. Vessel/refuge: the fallen tree as floating refuge. Animals: rescued animals later repay him. Aftermath: marriage and repopulation. Approximate date /",
      "chronology": "Earliest known recording is the 1920s, with publication in 1930 in Son Jintae's Joseon Folk Tale Collection according to the Academy of Korean Studies entry. The tradition is older as oral lore, but that is the earliest recording horizon explicitly identified in the accessible source base.",
      "evidence": "Evidence: the tale is a well-documented Korean flood tradition with multiple variants, and Korean scholarship treats it as part of a broader Eurasian and East Asian flood-myth field. Speculation/debate: there is no securely identified archaeological layer, paleoflood deposit, or single historical event that scholars can confidently match to this story alone; comparisons with Indian and Chinese flood traditions show motif diffusion, not proof of one common event.",
      "references": [
        {
          "label": "encykorea.aks.ac.kr - E0011344",
          "url": "https://encykorea.aks.ac.kr/Article/E0011344"
        }
      ]
    },
    "links": [
      {
        "label": "encykorea.aks.ac.kr - E0011344",
        "url": "https://encykorea.aks.ac.kr/Article/E0011344"
      }
    ],
    "translations": entryTranslations["myth-021-mokdoryeong-and-the-great-flood"]
  },
  {
    "id": "myth-022-story-of-the-flood",
    "title": "22. Story of the Flood",
    "subtitle": "Yi",
    "text": "In one classic Yi recension, Heaven determines to destroy the world by flood.",
    "date": "The exact earliest recording of the modern Yi recension is uncertain. Accessible versions are preserved through modern ethnographic and encyclopedic work, while comparative scholarship places the broader southwest Chinese sibling-flood complex in literature as early as the late Warring States through the Tang period. That broader chronology should not be overextended into a firm date for the exact Yi recension cited here.",
    "latitude": 27.9,
    "longitude": 102.3,
    "region": "Asia",
    "details": {
      "classification": "Yi, especially southwest Chinese Yi / Nosu traditions.",
      "geographicLocation": "Ancient region: the southwest China uplands. Modern-day equivalent: Yi areas of Sichuan, Yunnan, Guizhou, and Guangxi, China. The tradition belongs to the dispersed Yi highland belt, with Liangshan standing as one major homeland center.",
      "mapPlacement": "Approx. 27.9, 102.3. This point centers the marker on the Liangshan Yi region, one of the best-known Yi cultural heartlands, while recognizing that flood variants occur more widely across southwest China.",
      "narrative": "In one classic Yi recension, Heaven determines to destroy the world by flood. An old man warns three brothers to build three different boats; only the youngest survives. In the Encyclopedia.com recension, the survivor is Wuwu, and animals rescued from the flood later help him reach Heaven, where he marries a heavenly daughter. In other Yi variants, a brother and sister survive inside a gourd or calabash and become the source of renewed humanity. Cause of flood: divine decision from Heaven. Warning: yes. Survivors: typically one youngest brother, or in alternate variants a brother-sister pair. Vessel/refuge: prepared boats or a gourd/calabash. Animals: preserved or helpful. Aftermath: marriage and ethnogenesis, often of several peoples. Approximate date /",
      "chronology": "The exact earliest recording of the modern Yi recension is uncertain. Accessible versions are preserved through modern ethnographic and encyclopedic work, while comparative scholarship places the broader southwest Chinese sibling-flood complex in literature as early as the late Warring States through the Tang period. That broader chronology should not be overextended into a firm date for the exact Yi recension cited here.",
      "evidence": "Evidence: the Yi homeland is a mountainous, river-cut region where severe floods are environmentally plausible, and recent scholarship on Yi religious symbolism confirms that flood survival and renewed humanity are central to Yi gourd symbolism. Speculation/debate: no excavated flood deposit or archaeological horizon has been securely tied to this myth specifically; linking it to a single historic flood remains speculative.",
      "references": [
        {
          "label": "encyclopedia.com - yi",
          "url": "https://www.encyclopedia.com/places/asia/chinese-political-geography/yi"
        },
        {
          "label": "mdpi.com - 1488",
          "url": "https://www.mdpi.com/2077-1444/15/12/1488"
        }
      ]
    },
    "links": [
      {
        "label": "encyclopedia.com - yi",
        "url": "https://www.encyclopedia.com/places/asia/chinese-political-geography/yi"
      },
      {
        "label": "mdpi.com - 1488",
        "url": "https://www.mdpi.com/2077-1444/15/12/1488"
      }
    ],
    "translations": entryTranslations["myth-022-story-of-the-flood"]
  },
  {
    "id": "myth-023-flood-of-jiangliang-and-jiangmei",
    "title": "23. Flood of Jiangliang and Jiangmei",
    "subtitle": "Dong, also called Kam",
    "text": "The flood story is embedded in the Dong epic of the goddess Sassui.",
    "date": "The exact earliest recording of this precise Dong recension is uncertain because the story is known through oral transmission and later ethnographic summary. Comparative scholarship places the broader East Asian flood-sibling complex in literature from the late Warring States to the Tang, but that is a regional background rather than a firm textual date for the Jiangliang-Jiangmei version itself.",
    "latitude": 26,
    "longitude": 109.1,
    "region": "Asia",
    "details": {
      "classification": "Dong, also called Kam.",
      "geographicLocation": "Ancient region: the Kam-speaking highlands of south-central China. Modern-day equivalent: southeastern Guizhou and neighboring parts of Guangxi and Hunan, China. The myth belongs to the Dong / Kam homeland in humid upland river valleys and rice-growing districts.",
      "mapPlacement": "Approx. 26.0, 109.1. This point places the marker in the southeastern Guizhou Kam heartland near major Dong settlements; the exact myth-origin site is uncertain.",
      "narrative": "The flood story is embedded in the Dong epic of the goddess Sassui. An old woman or an ant warns a brother and sister, Jiangliang and Jiangmei, that a flood is coming. They survive by sheltering in a melon or gourd. After the waters recede, the pair perform divinatory tests with millstones or other signs to determine whether sibling marriage is permitted so that humanity can continue. Cause of flood: catastrophic inundation tied to divine or cosmic disorder. Warning: yes. Survivors: brother and sister. Vessel/refuge: melon or gourd. Animals: the warning motif may come through a small creature in some recensions. Aftermath: sanctioned sibling union and repopulation. Approximate date /",
      "chronology": "The exact earliest recording of this precise Dong recension is uncertain because the story is known through oral transmission and later ethnographic summary. Comparative scholarship places the broader East Asian flood-sibling complex in literature from the late Warring States to the Tang, but that is a regional background rather than a firm textual date for the Jiangliang-Jiangmei version itself.",
      "evidence": "Evidence: the myth is securely associated with Dong oral epic and with a region prone to river flooding in monsoonal southwest China. Speculation/debate: no archaeological or geological study has securely tied this particular Dong myth to one datable flood event, and the strongest scholarly claims concern motif history rather than event reconstruction.",
      "references": [
        {
          "label": "britannica.com - Dong",
          "url": "https://www.britannica.com/topic/Dong"
        },
        {
          "label": "encyclopedia.com - dong",
          "url": "https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/dong"
        }
      ]
    },
    "links": [
      {
        "label": "britannica.com - Dong",
        "url": "https://www.britannica.com/topic/Dong"
      },
      {
        "label": "encyclopedia.com - dong",
        "url": "https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/dong"
      }
    ],
    "translations": entryTranslations["myth-023-flood-of-jiangliang-and-jiangmei"]
  },
  {
    "id": "myth-024-ji-ya-ya-he-flood-myth",
    "title": "24. Ji-ya-ya-he flood myth",
    "subtitle": "Saisiyat",
    "text": "A great flood turns the world into sea. A brother and sister survive by floating away on a weaving machine and reaching a mountain, but the sister…",
    "date": "The exact first recording of this village recension is uncertain. The accessible English version is Chen's translation of Pu 1996, while comparative scholarship notes that many Taiwan Indigenous flood myths were already being written down in the Japanese colonial period in the early 20th century.",
    "latitude": 24.57,
    "longitude": 121.08,
    "region": "Asia",
    "details": {
      "classification": "Saisiyat.",
      "geographicLocation": "Ancient region: northwestern Taiwan uplands. Modern-day equivalent: the mountain zone of Hsinchu and Miaoli counties, Taiwan. The Saisiyat homeland lies between northern and southern Saisiyat clusters divided by mountain ridges and drainage basins.",
      "mapPlacement": "Approx. 24.57, 121.08. This point marks the northwestern Saisiyat uplands rather than one proven flood mountain.",
      "narrative": "A great flood turns the world into sea. A brother and sister survive by floating away on a weaving machine and reaching a mountain, but the sister dies soon after. The surviving brother transforms pieces of her body - wrapped and deposited in water - into new humans and clan ancestors, and later finds another human survivor as well. Cause of flood: unspecified cataclysmic inundation. Warning: none stated. Survivors: brother and sister, and then another survivor. Vessel/refuge: weaving machine and mountain. Animals: not central. Aftermath: regeneration of human groups and clan ancestors. Approximate date /",
      "chronology": "The exact first recording of this village recension is uncertain. The accessible English version is Chen's translation of Pu 1996, while comparative scholarship notes that many Taiwan Indigenous flood myths were already being written down in the Japanese colonial period in the early 20th century.",
      "evidence": "Evidence: this is a documented Saisiyat oral tradition preserved in an academic translation and situated within comparative scholarship on Formosan flood myths. Speculation/debate: no archaeological or geological event has been securely matched to this exact myth; any connection to typhoon flooding, slope failure, or older inundation memory remains hypothetical.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/733B28E29AD8C492D0636733C6861689/info.html?cumid=D0636733C6861689"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/733B28E29AD8C492D0636733C6861689/info.html?cumid=D0636733C6861689"
      }
    ],
    "translations": entryTranslations["myth-024-ji-ya-ya-he-flood-myth"]
  },
  {
    "id": "myth-025-taoyuan-flood-myth",
    "title": "25. Taoyuan flood myth",
    "subtitle": "Bunun",
    "text": "A giant snake blocks the rivers and floods the world.",
    "date": "The exact first recording of the Taoyuan recension is uncertain. The accessible version comes via Pu 1996 and later English translation, while comparative scholarship indicates that such Taiwan Indigenous recensions had already entered written ethnographic literature by the early 20th century.",
    "latitude": 23.47,
    "longitude": 120.96,
    "region": "Asia",
    "details": {
      "classification": "Bunun.",
      "geographicLocation": "Ancient region: the central mountain spine of Taiwan. Modern-day equivalent: Jade Mountain and surrounding Bunun territories in Nantou, Kaohsiung, Hualien, and Taitung, Taiwan. The cited recension is specifically linked to Taoyuan Township and to Jade Mountain as refuge.",
      "mapPlacement": "Approx. 23.47, 120.96. This marker is placed at Jade Mountain, the mountain explicitly named in the flood narrative.",
      "narrative": "A giant snake blocks the rivers and floods the world. People gather one male and one female of every animal species and retreat to Jade Mountain. A crab destroys the snake and allows the waters to drain. The survivors then send a raven to scout the new landscape, but it fails to return; a dove succeeds and reports where land, grasses, and wood are found. Fire is later fetched by a bird, and humans and animals settle again in habitable places. Cause of flood: river blockage by a giant serpent. Warning: no explicit prior warning. Survivors: mountain refugees. Vessel/refuge: mountain refuge. Animals: paired animals preserved, raven and dove scouts, bird brings fire. Aftermath: resettlement of people and animals. Approximate date /",
      "chronology": "The exact first recording of the Taoyuan recension is uncertain. The accessible version comes via Pu 1996 and later English translation, while comparative scholarship indicates that such Taiwan Indigenous recensions had already entered written ethnographic literature by the early 20th century.",
      "evidence": "Evidence: this is one of the closest Noah parallels in the wider corpus because it explicitly preserves male-female animal pairs and bird dispatch after the flood. Speculation/debate: despite those parallels, no specific geological flood or landslide-dam event has been securely demonstrated as the source of the story.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/7F4BACB58C965B51D0636733C6861689/info.html?cumid=D0636733C6861689"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/7F4BACB58C965B51D0636733C6861689/info.html?cumid=D0636733C6861689"
      }
    ],
    "translations": entryTranslations["myth-025-taoyuan-flood-myth"]
  },
  {
    "id": "myth-026-tsou-flood-myth",
    "title": "26. Tsou flood myth",
    "subtitle": "Tsou",
    "text": "A giant eel blocks a river, turning the land into sea and driving people to Jade Mountain.",
    "date": "The exact first transcription of this recension is uncertain; the accessible text comes through Pu 1996 in Chen's translation. Comparative scholarship indicates that many Taiwan Indigenous flood myths were already being recorded in the Japanese colonial era.",
    "latitude": 23.51,
    "longitude": 120.8,
    "region": "Asia",
    "details": {
      "classification": "Tsou.",
      "geographicLocation": "Ancient region: the Alishan and Jade Mountain uplands of central-southern Taiwan. Modern-day equivalent: mainly Alishan Township in Chiayi County and nearby uplands in Nantou, Taiwan. The Tsou homeland is a mountain society centered on the Alishan massif.",
      "mapPlacement": "Approx. 23.51, 120.80. This coordinate represents the Alishan-Tsou highlands and is an approximate placement marker rather than a securely identified flood peak.",
      "narrative": "A giant eel blocks a river, turning the land into sea and driving people to Jade Mountain. A crab bargains for its reward, attacks the eel, and releases the floodwaters. The stranded survivors also need fire, so birds are sent to carry kindling back to the mountain refuge. After the waters recede, the survivors descend and disperse into distinct peoples, dividing an arrow as a token of shared origin. Cause of flood: eel-blocked river. Warning: none stated. Survivors: mountain refugees. Vessel/refuge: mountain refuge. Animals: crab as flood-breaker, birds as fire-bringers. Aftermath: post-flood dispersal into named human groups. Approximate date /",
      "chronology": "The exact first transcription of this recension is uncertain; the accessible text comes through Pu 1996 in Chen's translation. Comparative scholarship indicates that many Taiwan Indigenous flood myths were already being recorded in the Japanese colonial era.",
      "evidence": "Evidence: a clearly localized mountain flood-and-dispersal tradition preserved in modern scholarship and attached to a real upland homeland. Speculation/debate: the eel and crab are mythic agents, and there is no specific dated flood event that scholarship has securely connected to this recension.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909"
        },
        {
          "label": "cip.gov.tw - 2D9680BFECBE80B6BB8A9BE96F98F55E info",
          "url": "https://www.cip.gov.tw/en/news/data-list/200161A7D09A7FEC/2D9680BFECBE80B6BB8A9BE96F98F55E-info.html"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909"
      },
      {
        "label": "cip.gov.tw - 2D9680BFECBE80B6BB8A9BE96F98F55E info",
        "url": "https://www.cip.gov.tw/en/news/data-list/200161A7D09A7FEC/2D9680BFECBE80B6BB8A9BE96F98F55E-info.html"
      }
    ],
    "translations": entryTranslations["myth-026-tsou-flood-myth"]
  },
  {
    "id": "myth-027-da-niao-wan-flood-myth",
    "title": "27. Da-niao-wan flood myth",
    "subtitle": "Paiwan",
    "text": "A vast flood covers the world. A brother and sister survive by grasping grass in the rushing water until an earthworm creates an elevated mound of…",
    "date": "The exact first recording of this village version is uncertain. The accessible version is through Pu 1996 and Chen's translation, while the broader literature indicates that many Formosan deluge myths had already entered written record by the early 20th century.",
    "latitude": 22.35,
    "longitude": 120.89,
    "region": "Asia",
    "details": {
      "classification": "Paiwan.",
      "geographicLocation": "Ancient region: southern Taiwan mountain foothills and coastal ranges. Modern-day equivalent: Paiwan areas spanning Pingtung and Taitung counties, Taiwan. The cited Da-niao-wan recension belongs to the southern Paiwan culture area around the Dawu mountain system and adjacent settlements.",
      "mapPlacement": "Approx. 22.35, 120.89. This marker is placed in the southern Paiwan zone near the Dawu mountain belt; the exact village location in the translated recension remains uncertain.",
      "narrative": "A vast flood covers the world. A brother and sister survive by grasping grass in the rushing water until an earthworm creates an elevated mound of earth above the flood. A beetle later brings living fire. Finding no other humans, the siblings eventually marry; their first generations are marked by deformity, but later descendants become normal, and humanity continues. Cause of flood: catastrophic inundation. Warning: none stated. Survivors: brother and sister. Vessel/refuge: grass in the flood and a newly formed earthen mound. Animals: earthworm creates land, beetle brings fire. Aftermath: sibling union and gradual restoration of normal humanity. Approximate date /",
      "chronology": "The exact first recording of this village version is uncertain. The accessible version is through Pu 1996 and Chen's translation, while the broader literature indicates that many Formosan deluge myths had already entered written record by the early 20th century.",
      "evidence": "Evidence: a securely attested Paiwan flood-survival-and-repopulation tradition within the academic translation corpus. Speculation/debate: the earthworm-created refuge is plainly mythic, and no archaeological evidence ties the narrative to one datable inundation.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/E8D1B17F6A81D678D0636733C6861689/info.html?cumid=5DD9C4959C302B9FD0636733C6861689"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/E8D1B17F6A81D678D0636733C6861689/info.html?cumid=5DD9C4959C302B9FD0636733C6861689"
      }
    ],
    "translations": entryTranslations["myth-027-da-niao-wan-flood-myth"]
  },
  {
    "id": "myth-028-ma-lan-flood-myth",
    "title": "28. Ma-lan flood myth",
    "subtitle": "Amis",
    "text": "A hot-water outbreak or earth rupture floods the land and nearly annihilates life.",
    "date": "The exact earliest recording of this recension is uncertain. The accessible text comes through Pu 1996 and later English translation, while comparative scholarship indicates broader early-20th-century documentation of Taiwan Indigenous flood myths.",
    "latitude": 23.98,
    "longitude": 121.62,
    "region": "Asia",
    "details": {
      "classification": "Amis.",
      "geographicLocation": "Ancient region: eastern Taiwan coast. Modern-day equivalent: the Hualien-Taitung coastal belt, Taiwan. The translated recension explicitly places the ancestral setting near a mountain by what it identifies as today's Hualien port, though \"Malan\" also has later associations in eastern Taiwan and the exact setting is not fully resolved.",
      "mapPlacement": "Approx. 23.98, 121.62. This marker follows the translated text's Hualien-port setting; it should be read as provisional because the ethnonym and narrative geography do not map perfectly onto one modern locality.",
      "narrative": "A hot-water outbreak or earth rupture floods the land and nearly annihilates life. Three siblings survive by riding a square mortar along the coast to a mountain refuge. One sister becomes stone; the remaining brother and sister later survive renewed flooding near a hot spring. With humanity otherwise gone, they ask cosmic powers whether siblings may marry. Their first offspring are monstrous and become associated with aquatic life, but later guidance from the moon and the safeguarding of a white stone lead to the birth of normal children, renewing humankind. Cause of flood: eruptive hot water / catastrophic inundation. Warning: none explicit. Survivors: three siblings, later effectively a brother-sister pair. Vessel/refuge: square mortar and mountain. Animals: aquatic creatures appear through failed reproduction rather than species-preservation. Aftermath: difficult but eventually successful renewal of humanity. Approximate date /",
      "chronology": "The exact earliest recording of this recension is uncertain. The accessible text comes through Pu 1996 and later English translation, while comparative scholarship indicates broader early-20th-century documentation of Taiwan Indigenous flood myths.",
      "evidence": "Evidence: unlike many flood myths, this recension embeds its deluge in a landscape of hot water, springs, and topographic change, giving it unusually strong environmental specificity. Speculation/debate: whether that specificity preserves memory of a real hydrothermal, seismic, or flood event is unproven; scholarship does not securely identify a correlating geological episode.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/50AABE9D1284F664D0636733C6861689/info.html?cumid=B54B5C7E1E0F994092EDA9D0B7048931"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/50AABE9D1284F664D0636733C6861689/info.html?cumid=B54B5C7E1E0F994092EDA9D0B7048931"
      }
    ],
    "translations": entryTranslations["myth-028-ma-lan-flood-myth"]
  },
  {
    "id": "myth-029-tlingit-flood-myth",
    "title": "29. Tlingit flood myth",
    "subtitle": "Tlingit",
    "text": "In classic recorded versions, grave wrongdoing leads to a devastating flood.",
    "date": "One major version is reported as recorded by 1835 or earlier; a classic primary publication is Swanton's 1909 Tlingit Myths and Texts. This gives the tradition an unusually early ethnographic documentation horizon for a North American oral flood myth.",
    "latitude": 57.05,
    "longitude": -135.33,
    "region": "North America",
    "details": {
      "classification": "Tlingit.",
      "geographicLocation": "Ancient region: the Northwest Coast. Modern-day equivalent: southern and southeastern Alaska from Yakutat Bay to Cape Fox, with related coastal connections into British Columbia. The Tlingit are a maritime people of islands, fjords, coastal inlets, and mountain-backed shorelines.",
      "mapPlacement": "Approx. 57.05, -135.33. This marker is centered on the southeast Alaska Tlingit coast near Sitka; individual flood recensions vary in place-setting.",
      "narrative": "In classic recorded versions, grave wrongdoing leads to a devastating flood. Some tellings say shamans predicted it and those who prepared food survived; others say people saved themselves in boats fastened to mountaintops. A Raven figure survives and remains central to post-flood humanity or clan origin. The tradition also localizes traces of boats and fastenings in the landscape. Cause of flood: punishment for wrongdoing or supernatural command. Warning: yes in some versions, via shamans. Survivors: Raven and prepared boat-borne people. Vessel/refuge: boats tied to mountaintops. Animals: Raven is central. Aftermath: survival of lineages and continuation of human society. Approximate date /",
      "chronology": "One major version is reported as recorded by 1835 or earlier; a classic primary publication is Swanton's 1909 Tlingit Myths and Texts. This gives the tradition an unusually early ethnographic documentation horizon for a North American oral flood myth.",
      "evidence": "Evidence: the tradition is well documented in primary ethnographic literature and tied to specific mountain-and-coast landscapes. Speculation/debate: reports that one could still see remains of boats or mooring ropes belong to the mythic landscape tradition and are not verified archaeological finds; no single tsunami, storm surge, or prehistoric flood has been securely identified as the story's source event.",
      "references": [
        {
          "label": "en.wikisource.org - Tlingit Myths and Texts",
          "url": "https://en.wikisource.org/wiki/Tlingit_Myths_and_Texts"
        },
        {
          "label": "britannica.com - Tlingit",
          "url": "https://www.britannica.com/topic/Tlingit"
        },
        {
          "label": "home.curioustaxonomy.net - tlingit",
          "url": "https://home.curioustaxonomy.net/FloodMyths/15NANW/tlingit.html"
        }
      ]
    },
    "links": [
      {
        "label": "en.wikisource.org - Tlingit Myths and Texts",
        "url": "https://en.wikisource.org/wiki/Tlingit_Myths_and_Texts"
      },
      {
        "label": "britannica.com - Tlingit",
        "url": "https://www.britannica.com/topic/Tlingit"
      },
      {
        "label": "home.curioustaxonomy.net - tlingit",
        "url": "https://home.curioustaxonomy.net/FloodMyths/15NANW/tlingit.html"
      }
    ],
    "translations": entryTranslations["myth-029-tlingit-flood-myth"]
  },
  {
    "id": "myth-030-nu-mohk-muck-a-nah-flood-myth",
    "title": "30. Nu-mohk-muck-a-nah flood myth",
    "subtitle": "Mandan",
    "text": "After a primordial disturbance involving the earth-tortoise, water rises and covers the world.",
    "date": "The flood-associated ritual complex was documented by George Catlin in 1832, later published in 1841. The myth itself is therefore not merely a late hearsay summary; part of its ceremonial memory was observed directly in the early nineteenth century.",
    "latitude": 47.47,
    "longitude": -101.39,
    "region": "North America",
    "details": {
      "classification": "Mandan.",
      "geographicLocation": "Ancient region: the Upper Missouri Plains. Modern-day equivalent: villages along the Missouri River in present-day North Dakota, United States. The Mandan historically lived in semipermanent earth-lodge villages on the Missouri.",
      "mapPlacement": "Approx. 47.47, -101.39. This marker places the tradition near the historic Mandan village zone around the Knife River and upper Missouri corridor rather than at the mythic western mountain where the survivor lands.",
      "narrative": "After a primordial disturbance involving the earth-tortoise, water rises and covers the world. One man, Nu-mohk-muck-a-nah, survives in a large canoe and reaches a mountain in the west. A bird later returns with a twig, marking the subsidence of the waters. The Mandan preserve this flood memory in ritual form through the sacred Big Canoe used in the O-kee-pa ceremonial complex. Cause of flood: primordial rupture and rising waters. Warning: not emphasized in the common summary. Survivors: one man. Vessel/refuge: large canoe and western mountain. Animals: bird returns a twig. Aftermath: ritual remembrance and continuity of Mandan sacred history. Approximate date /",
      "chronology": "The flood-associated ritual complex was documented by George Catlin in 1832, later published in 1841. The myth itself is therefore not merely a late hearsay summary; part of its ceremonial memory was observed directly in the early nineteenth century.",
      "evidence": "Evidence: Catlin and the Smithsonian document the Big Canoe as a real ritual object at the center of O-kee-pa ceremonial life, and Britannica notes that Okipa commemorated divine salvation from a primordial flood. Speculation/debate: this is evidence for an enduring flood-memory ritual, not proof of one identifiable historical flood on the Upper Missouri.",
      "references": [
        {
          "label": "americanart.si.edu - bull dance mandan o kee pa ceremony 3975",
          "url": "https://americanart.si.edu/artwork/bull-dance-mandan-o-kee-pa-ceremony-3975"
        },
        {
          "label": "americanart.si.edu - last race mandan o kee pa ceremony 4204",
          "url": "https://americanart.si.edu/artwork/last-race-mandan-o-kee-pa-ceremony-4204"
        },
        {
          "label": "britannica.com - Mandan people",
          "url": "https://www.britannica.com/topic/Mandan-people"
        },
        {
          "label": "curioustaxonomy.net - mandan",
          "url": "https://www.curioustaxonomy.net/home/FloodMyths/17NAPl/mandan.html"
        }
      ]
    },
    "links": [
      {
        "label": "americanart.si.edu - bull dance mandan o kee pa ceremony 3975",
        "url": "https://americanart.si.edu/artwork/bull-dance-mandan-o-kee-pa-ceremony-3975"
      },
      {
        "label": "americanart.si.edu - last race mandan o kee pa ceremony 4204",
        "url": "https://americanart.si.edu/artwork/last-race-mandan-o-kee-pa-ceremony-4204"
      },
      {
        "label": "britannica.com - Mandan people",
        "url": "https://www.britannica.com/topic/Mandan-people"
      }
    ],
    "translations": entryTranslations["myth-030-nu-mohk-muck-a-nah-flood-myth"]
  },
  {
    "id": "myth-031-atayal-flood-of-dabajian-mountain",
    "title": "31. Atayal flood of Dabajian Mountain",
    "subtitle": "Atayal",
    "text": "A great flood drives people, beasts, and snakes to the highest mountain.",
    "date": "Accessible English text: Fanfan Chen 2024 translation of a Pu 1996 collection. The narrative is presented as older Atayal oral tradition.",
    "latitude": 24.46,
    "longitude": 121.26,
    "region": "Asia",
    "details": {
      "classification": "Atayal.",
      "geographicLocation": "Ancient Atayal mountain territory in northern and central Taiwan; modern Hsinchu, Miaoli, Taichung, and adjacent uplands. This recension is centered on Dabajian Mountain, with a related Nan-ao variant in Yilan.",
      "mapPlacement": "24.46, 121.26, approximate, based on the Dabajian massif. The exact flood site varies by recension.",
      "narrative": "A great flood drives people, beasts, and snakes to the highest mountain. In one version, people attempt to stop the flood by sacrificing a dog and then human victims; in another, survivors remain on a high mountain until the waters fall and a newly eroded landscape of valleys, fish, and shrimp appears.",
      "chronology": "Accessible English text: Fanfan Chen 2024 translation of a Pu 1996 collection. The narrative is presented as older Atayal oral tradition.",
      "evidence": "Evidence: The account is anchored in a real high-mountain homeland and in an island environment where typhoon flooding, slope failure, and river incision are recurrent hazards. Speculation/debate: No specific prehistoric or historic flood deposit has been securely linked to this recension.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/A7F31083995F0E60D0636733C6861689/info.html"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/A7F31083995F0E60D0636733C6861689/info.html"
      }
    ],
    "translations": entryTranslations["myth-031-atayal-flood-of-dabajian-mountain"]
  },
  {
    "id": "myth-032-saisiyat-a-la-wan-deluge",
    "title": "32. Saisiyat A-la-wan deluge",
    "subtitle": "Saisiyat",
    "text": "A primordial flood scatters humanity. One man survives on a weaving machine and reaches a mountain where a god captures him.",
    "date": "Specific recension in Pu 1996, translated by Chen in 2024; the Saisiyat flood complex is also summarized as older tribal tradition.",
    "latitude": 24.58,
    "longitude": 121.05,
    "region": "Asia",
    "details": {
      "classification": "Saisiyat.",
      "geographicLocation": "Northwestern Taiwan uplands; modern Hsinchu-Miaoli frontier.",
      "mapPlacement": "24.58, 121.05, approximate, based on the Saisiyat homeland. The named mountain Ji-lu-bi-ya in the recension is not securely identified in modern mapping.",
      "narrative": "A primordial flood scatters humanity. One man survives on a weaving machine and reaches a mountain where a god captures him. The god dismembers the survivor and transforms his flesh, entrails, and bones into new human populations, recreating humanity from a single remnant.",
      "chronology": "Specific recension in Pu 1996, translated by Chen in 2024; the Saisiyat flood complex is also summarized as older tribal tradition.",
      "evidence": "Evidence: The story belongs to a broader Saisiyat deluge complex preserved in tribal historical memory. Speculation/debate: The version is overtly mythic and is not tied by scholars to one datable flood event.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/733B28E29AD8C492D0636733C6861689/info.html?cumid=D0636733C6861689"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/733B28E29AD8C492D0636733C6861689/info.html?cumid=D0636733C6861689"
      }
    ],
    "translations": entryTranslations["myth-032-saisiyat-a-la-wan-deluge"]
  },
  {
    "id": "myth-033-bunun-da-ma-luo-wang-flood",
    "title": "33. Bunun Da-ma-luo-wang flood",
    "subtitle": "Bunun",
    "text": "After ancestral emergence from a cleft rock, a great flood turns the land into sea.",
    "date": "Specific recension in Pu 1996, translated by Chen in 2024; the oral tradition is older.",
    "latitude": 23.47,
    "longitude": 120.96,
    "region": "Asia",
    "details": {
      "classification": "Bunun.",
      "geographicLocation": "Central Taiwan high mountains; modern Central Mountain Range, especially around Jade Mountain.",
      "mapPlacement": "23.47, 120.96, approximate, based on Jade Mountain.",
      "narrative": "After ancestral emergence from a cleft rock, a great flood turns the land into sea. People flee to Jade Mountain and survive there until a giant crab defeats a giant snake. After the waters recede, survivors descend, disperse, and become ancestors of later tribes.",
      "chronology": "Specific recension in Pu 1996, translated by Chen in 2024; the oral tradition is older.",
      "evidence": "Evidence: The myth is strongly localized to Jade Mountain, a real and symbolically central refuge landscape in Bunun territory. Speculation/debate: No securely identified geological event has been matched to the story.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/7F4BACB58C965B51D0636733C6861689/info.html?cumid=D0636733C6861689"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/7F4BACB58C965B51D0636733C6861689/info.html?cumid=D0636733C6861689"
      }
    ],
    "translations": entryTranslations["myth-033-bunun-da-ma-luo-wang-flood"]
  },
  {
    "id": "myth-034-bunun-ren-lun-flood",
    "title": "34. Bunun Ren-lun flood",
    "subtitle": "Bunun",
    "text": "A giant snake blocks the rivers and causes a deluge.",
    "date": "Specific recension in Pu 1996, translated by Chen in 2024.",
    "latitude": 23.47,
    "longitude": 120.96,
    "region": "Asia",
    "details": {
      "classification": "Bunun.",
      "geographicLocation": "Central Taiwan highlands; modern Nantou and adjacent Central Mountain Range, with Jade Mountain and Binugantun named in the story.",
      "mapPlacement": "23.47, 120.96, approximate, based on Jade Mountain. Binugantun is not securely fixed here.",
      "narrative": "A giant snake blocks the rivers and causes a deluge. People flee to high refuges, but one refuge lacks fire, so animals and then birds are sent to fetch it. Eventually a crab cuts apart the flood-causing snake and the waters fall.",
      "chronology": "Specific recension in Pu 1996, translated by Chen in 2024.",
      "evidence": "Evidence: The blocked-river motif is a concrete hydrological image, and the refuge sequence is tied to named mountain country. Speculation/debate: Reading the tale as memory of a landslide-dam flood is plausible but unproven.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/7F4BACB58C965B51D0636733C6861689/info.html?cumid=D0636733C6861689"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/7F4BACB58C965B51D0636733C6861689/info.html?cumid=D0636733C6861689"
      }
    ],
    "translations": entryTranslations["myth-034-bunun-ren-lun-flood"]
  },
  {
    "id": "myth-035-paiwan-southern-tribe-flood-of-da-luo-fan",
    "title": "35. Paiwan southern-tribe flood of Da-luo-fan",
    "subtitle": "Paiwan",
    "text": "The monster Da-luo-fan disrupts river flow and causes a destructive flood.",
    "date": "Specific recension in Pu 1996, translated by Chen in 2024.",
    "latitude": 22.35,
    "longitude": 120.89,
    "region": "Asia",
    "details": {
      "classification": "Paiwan.",
      "geographicLocation": "Southern Taiwan mountain country; modern Pingtung-Taitung sector of the southern Central Mountain Range.",
      "mapPlacement": "22.35, 120.89, approximate, based on Paiwan southern homeland. The exact mountains in this recension remain uncertain.",
      "narrative": "The monster Da-luo-fan disrupts river flow and causes a destructive flood. People flee to separate mountains; one group must send a deer to another refuge to obtain fire. Once the monster opens its mouth again, the waters recede, and an earthworm's excrement becomes new land on which people can farm.",
      "chronology": "Specific recension in Pu 1996, translated by Chen in 2024.",
      "evidence": "Evidence: The myth preserves post-flood renewal motifs including fire transfer, re-emergent land, and agriculture. Speculation/debate: No specific flood episode has been securely identified behind the narrative.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/E8D1B17F6A81D678D0636733C6861689/info.html?cumid=D0636733C6861689"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/E8D1B17F6A81D678D0636733C6861689/info.html?cumid=D0636733C6861689"
      }
    ],
    "translations": entryTranslations["myth-035-paiwan-southern-tribe-flood-of-da-luo-fan"]
  },
  {
    "id": "myth-036-rukai-ma-ka-deluge",
    "title": "36. Rukai Ma-ka deluge",
    "subtitle": "Rukai",
    "text": "A deluge forces the people into the mountains for five days.",
    "date": "Specific recension in Pu 1996, translated by Chen in 2024; wider Rukai oral geography is preserved in present-day tribal accounts.",
    "latitude": 22.83,
    "longitude": 120.73,
    "region": "Asia",
    "details": {
      "classification": "Rukai.",
      "geographicLocation": "Southern Central Mountain Range of Taiwan; modern Kaohsiung, Pingtung, and Taitung Rukai uplands.",
      "mapPlacement": "22.83, 120.73, approximate, based on the Rukai highland homeland.",
      "narrative": "A deluge forces the people into the mountains for five days. Their ancestor Sha-bu-lai eventually causes the seawater to recede, and two dogs, one male and one female, drink up the remaining water until the earth is restored.",
      "chronology": "Specific recension in Pu 1996, translated by Chen in 2024; wider Rukai oral geography is preserved in present-day tribal accounts.",
      "evidence": "Evidence: The tale is part of a documented Rukai mountain tradition and has a clear flood-retreat sequence. Speculation/debate: No specific geological correlate is known.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/A1076DE2F8CB0091D0636733C6861689/info.html?cumid=D0636733C6861689"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/A1076DE2F8CB0091D0636733C6861689/info.html?cumid=D0636733C6861689"
      }
    ],
    "translations": entryTranslations["myth-036-rukai-ma-ka-deluge"]
  },
  {
    "id": "myth-037-rukai-dona-mandaulan-great-flood",
    "title": "37. Rukai Dona-Mandaulan great flood",
    "subtitle": "Rukai lower three branches",
    "text": "During the great flood, all people run to a mountain refuge but lack fire.",
    "date": "Specific recension in Pu 1996, translated by Chen in 2024.",
    "latitude": 22.91,
    "longitude": 120.67,
    "region": "Asia",
    "details": {
      "classification": "Rukai lower three branches.",
      "geographicLocation": "Maolin sector of southern Taiwan; modern Kaohsiung uplands associated with Dona and Wanshan/Mandaulan.",
      "mapPlacement": "22.91, 120.67, approximate, based on the Dona-Maolin area. The named flood mountain Tie-ba-da-lan is not securely identified here.",
      "narrative": "During the great flood, all people run to a mountain refuge but lack fire. A muntjac tries and fails to return with fire on its horns; people later learn to make fire by friction after observing a fly rubbing its feet together. The story preserves high-ground survival and post-flood cultural renewal rather than a boat motif.",
      "chronology": "Specific recension in Pu 1996, translated by Chen in 2024.",
      "evidence": "Evidence: The recension aligns with the documented lower-three-branch Rukai homeland in Maolin. Speculation/debate: Exact flood topography and any event-memory remain uncertain.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/A1076DE2F8CB0091D0636733C6861689/info.html?cumid=D0636733C6861689"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/A1076DE2F8CB0091D0636733C6861689/info.html?cumid=D0636733C6861689"
      }
    ],
    "translations": entryTranslations["myth-037-rukai-dona-mandaulan-great-flood"]
  },
  {
    "id": "myth-038-amis-da-ba-lang-rectangular-mortar-flood",
    "title": "38. Amis Da-ba-lang rectangular-mortar flood",
    "subtitle": "Amis",
    "text": "A flood leaves only one brother and one sister alive.",
    "date": "Specific recension in Pu 1996, translated by Chen in 2024; Amis distribution and origin traditions are older.",
    "latitude": 22.76,
    "longitude": 121.14,
    "region": "Asia",
    "details": {
      "classification": "Amis.",
      "geographicLocation": "Eastern Taiwan coastal plain and foothills; probably in the southern/eastern Amis sphere around modern Taitung.",
      "mapPlacement": "22.76, 121.14, approximate, based on southern Amis/Taitung homeland. Exact mountain identity is uncertain.",
      "narrative": "A flood leaves only one brother and one sister alive. They escape in a rectangular wooden mortar to a mountain, later marry, and after initial abnormal offspring receive divine assistance so healthy descendants can populate the Amis clans.",
      "chronology": "Specific recension in Pu 1996, translated by Chen in 2024; Amis distribution and origin traditions are older.",
      "evidence": "Evidence: The story preserves a strong survival-craft and repopulation structure plus named regional geography. Speculation/debate: Exact flood locality remains uncertain.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/50AABE9D1284F664D0636733C6861689/info.html?cumid=B54B5C7E1E0F994092EDA9D0B7048931"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/50AABE9D1284F664D0636733C6861689/info.html?cumid=B54B5C7E1E0F994092EDA9D0B7048931"
      }
    ],
    "translations": entryTranslations["myth-038-amis-da-ba-lang-rectangular-mortar-flood"]
  },
  {
    "id": "myth-039-amis-dou-lan-mortar-flood",
    "title": "39. Amis Dou-lan mortar flood",
    "subtitle": "Amis",
    "text": "Heavy rain causes a great flood that drowns nearly everyone except a brother and sister.",
    "date": "Specific recension in Pu 1996, translated by Chen in 2024.",
    "latitude": 22.87,
    "longitude": 121.23,
    "region": "Asia",
    "details": {
      "classification": "Amis.",
      "geographicLocation": "Dou-lan/Dulan area on Taiwan's southeast coast, modern Taitung County.",
      "mapPlacement": "22.87, 121.23, approximate, based on Dulan/Dou-lan.",
      "narrative": "Heavy rain causes a great flood that drowns nearly everyone except a brother and sister. They float in a wooden mortar to Ge-gan mountain, find new seed stocks after the waters recede, and remarry for lack of other humans, becoming ancestors of the Dou-lan community.",
      "chronology": "Specific recension in Pu 1996, translated by Chen in 2024.",
      "evidence": "Evidence: This is one of the more locatable Taiwan recensions because both settlement and mountain are regionally specific. Speculation/debate: No single datable flood has been demonstrated behind it.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/50AABE9D1284F664D0636733C6861689/info.html?cumid=B54B5C7E1E0F994092EDA9D0B7048931"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/50AABE9D1284F664D0636733C6861689/info.html?cumid=B54B5C7E1E0F994092EDA9D0B7048931"
      }
    ],
    "translations": entryTranslations["myth-039-amis-dou-lan-mortar-flood"]
  },
  {
    "id": "myth-040-yami-yi-mo-lu-de-island-flood",
    "title": "40. Yami Yi-mo-lu-de island flood",
    "subtitle": "Yami/Tao",
    "text": "A sudden sea rise overwhelms villages and mountaintops; pigs, sheep, chickens, and rats die, and after years of high water only two humans remain.",
    "date": "Specific recension in Pu 1996, translated by Chen in 2024; the oral tradition is older and deeply tied to Lanyu.",
    "latitude": 22.04,
    "longitude": 121.55,
    "region": "Asia",
    "details": {
      "classification": "Yami/Tao.",
      "geographicLocation": "Lanyu, also called Orchid Island, off southeastern Taiwan in modern Taitung County.",
      "mapPlacement": "22.04, 121.55, approximate, based on Lanyu.",
      "narrative": "A sudden sea rise overwhelms villages and mountaintops; pigs, sheep, chickens, and rats die, and after years of high water only two humans remain. As water slowly recedes, the island is repopulated through miraculous emergence from stone and bamboo; shipbuilding, hunting, and animal husbandry resume.",
      "chronology": "Specific recension in Pu 1996, translated by Chen in 2024; the oral tradition is older and deeply tied to Lanyu.",
      "evidence": "Evidence: The tale is geographically tight, insular, and maritime, and preserves a striking memory of island-wide inundation. Speculation/debate: Its long chronology and miraculous anthropogony are clearly mythic, and no event correlation is secure.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
        },
        {
          "label": "cip.gov.tw - info",
          "url": "https://www.cip.gov.tw/en/tribe/grid-list/6521E76602C72C42D0636733C6861689/info.html?cumid=B54B5C7E1E0F994092EDA9D0B7048931"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
      },
      {
        "label": "cip.gov.tw - info",
        "url": "https://www.cip.gov.tw/en/tribe/grid-list/6521E76602C72C42D0636733C6861689/info.html?cumid=B54B5C7E1E0F994092EDA9D0B7048931"
      }
    ],
    "translations": entryTranslations["myth-040-yami-yi-mo-lu-de-island-flood"]
  },
  {
    "id": "myth-041-pingpu-ba-ze-hai-sibling-flood",
    "title": "41. Pingpu Ba-ze-hai sibling flood",
    "subtitle": "Pingpu/Pazeh-Ba-ze-hai tradition",
    "text": "A flood destroys people, beasts, and vegetation.",
    "date": "Specific recension in Pu 1996, translated by Chen in 2024; broader Pingpu traditions were documented earlier, but the precise recording history of this version is uncertain.",
    "latitude": 24.25,
    "longitude": 120.82,
    "region": "Asia",
    "details": {
      "classification": "Pingpu/Pazeh-Ba-ze-hai tradition.",
      "geographicLocation": "Central-western Taiwan lowlands; modern Taichung plain and adjacent areas.",
      "mapPlacement": "24.25, 120.82, approximate, based on central Taiwan Pazeh/Ba-ze-hai homeland.",
      "narrative": "A flood destroys people, beasts, and vegetation. Only a brother and sister survive on a mountaintop; after the waters subside they descend, marry, and create a larger human population by cutting and transforming their children into many young men who become ancestors of later communities.",
      "chronology": "Specific recension in Pu 1996, translated by Chen in 2024; broader Pingpu traditions were documented earlier, but the precise recording history of this version is uncertain.",
      "evidence": "Evidence: The story is tied to the historically documented Pingpu/Pazeh lowland distribution. Speculation/debate: No specific flood event has been securely matched to the narrative.",
      "references": [
        {
          "label": "publications-prairial.fr - index",
          "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
        },
        {
          "label": "cip.gov.tw - 2D9680BFECBE80B6BBF25877E2AD4731 info",
          "url": "https://www.cip.gov.tw/en/news/data-list/355818E93AC06C53/2D9680BFECBE80B6BBF25877E2AD4731-info.html"
        }
      ]
    },
    "links": [
      {
        "label": "publications-prairial.fr - index",
        "url": "https://publications-prairial.fr/iris/index.php?id=1909&lang=en"
      },
      {
        "label": "cip.gov.tw - 2D9680BFECBE80B6BBF25877E2AD4731 info",
        "url": "https://www.cip.gov.tw/en/news/data-list/355818E93AC06C53/2D9680BFECBE80B6BBF25877E2AD4731-info.html"
      }
    ],
    "translations": entryTranslations["myth-041-pingpu-ba-ze-hai-sibling-flood"]
  },
  {
    "id": "myth-042-nu-flood-eight",
    "title": "42. Nu Flood Eight",
    "subtitle": "Nu",
    "text": "The gods send a flood to punish evil spirits and bad people.",
    "date": "Accessible synthesis: Huang, Yang, and Chen 2024, drawing together named Nu material and earlier Chinese ethnographic sources; oral tradition older.",
    "latitude": 27.73,
    "longitude": 98.35,
    "region": "Asia",
    "details": {
      "classification": "Nu.",
      "geographicLocation": "Western Yunnan and the eastern Himalayan margin, especially Gongshan-Fugong in the Nujiang/Salween region of modern China.",
      "mapPlacement": "27.73, 98.35, approximate, based on the Gongshan-Kvwakarpu area. The specific mountain Neyamensilong is uncertain in modern cartography.",
      "narrative": "The gods send a flood to punish evil spirits and bad people. A brother and sister survive because they had climbed a high mountain to gather mushrooms and then entered a cave on the summit; after the flood, they emerge and generate new sibling pairs from whom human society begins again.",
      "chronology": "Accessible synthesis: Huang, Yang, and Chen 2024, drawing together named Nu material and earlier Chinese ethnographic sources; oral tradition older.",
      "evidence": "Evidence: The tradition is linked to named sacred mountains and cave refuge in a real high-relief landscape. Speculation/debate: The exact mountain identity is unclear and no single flood event has been demonstrated.",
      "references": [
        {
          "label": "researchgate.net - 379176886 Spatial Imagination in Sacred Narratives of Mounta",
          "url": "https://www.researchgate.net/publication/379176886_Spatial_Imagination_in_Sacred_Narratives_of_Mountain_Communities_in_Western_Yunnan_China"
        }
      ]
    },
    "links": [
      {
        "label": "researchgate.net - 379176886 Spatial Imagination in Sacred Narratives of Mounta",
        "url": "https://www.researchgate.net/publication/379176886_Spatial_Imagination_in_Sacred_Narratives_of_Mountain_Communities_in_Western_Yunnan_China"
      }
    ],
    "translations": entryTranslations["myth-042-nu-flood-eight"]
  },
  {
    "id": "myth-043-drung-flood-nine",
    "title": "43. Drung Flood Nine",
    "subtitle": "Drung/Dulong",
    "text": "Humans and ghosts once lived together until the gods sent a flood to separate them.",
    "date": "Modern synthesis in Huang, Yang, and Chen 2024 from older regional sourcebooks; oral tradition older.",
    "latitude": 27.73,
    "longitude": 98.35,
    "region": "Asia",
    "details": {
      "classification": "Drung/Dulong.",
      "geographicLocation": "Drung River basin and adjacent Gaoligong ranges in northwestern Yunnan, near modern Gongshan.",
      "mapPlacement": "27.73, 98.35, approximate, based on Kvwakarpu/Gaoligong.",
      "narrative": "Humans and ghosts once lived together until the gods sent a flood to separate them. A brother and sister survive in a cave atop the sacred mountain Kvwakarpu; after the flood they emerge as ancestors and, in some interpretations, become mountain divinities.",
      "chronology": "Modern synthesis in Huang, Yang, and Chen 2024 from older regional sourcebooks; oral tradition older.",
      "evidence": "Evidence: Kvwakarpu is a real, prominent sacred mountain identified in scholarship as a refuge landscape. Speculation/debate: The authors note unresolved questions about how related snow-water and flood variants should be interpreted.",
      "references": [
        {
          "label": "researchgate.net - 379176886 Spatial Imagination in Sacred Narratives of Mounta",
          "url": "https://www.researchgate.net/publication/379176886_Spatial_Imagination_in_Sacred_Narratives_of_Mountain_Communities_in_Western_Yunnan_China"
        }
      ]
    },
    "links": [
      {
        "label": "researchgate.net - 379176886 Spatial Imagination in Sacred Narratives of Mounta",
        "url": "https://www.researchgate.net/publication/379176886_Spatial_Imagination_in_Sacred_Narratives_of_Mountain_Communities_in_Western_Yunnan_China"
      }
    ],
    "translations": entryTranslations["myth-043-drung-flood-nine"]
  },
  {
    "id": "myth-044-pamichali-flood",
    "title": "44. Pamichali flood",
    "subtitle": "Pumi/Primi",
    "text": "Demons ruin human labor, so a god sends a flood as punishment.",
    "date": "Accessible through Huang, Yang, and Chen 2024, synthesizing earlier materials; oral tradition older.",
    "latitude": 26.8,
    "longitude": 99.6,
    "region": "Asia",
    "details": {
      "classification": "Pumi/Primi.",
      "geographicLocation": "Northwestern Yunnan Hengduan uplands. Exact myth-site uncertain, so the marker is placed in the Pumi highland homeland.",
      "mapPlacement": "26.80, 99.60, approximate; exact flood site unknown.",
      "narrative": "Demons ruin human labor, so a god sends a flood as punishment. Three brothers are aided by a white-haired old man; tied to different points on a sacred tree, only the highest survives. After the flood, mountains and canyons arise, and the survivor later marries a mountain fairy, renewing the human line.",
      "chronology": "Accessible through Huang, Yang, and Chen 2024, synthesizing earlier materials; oral tradition older.",
      "evidence": "Evidence: The story is tied to highland sacred-tree and mountain imagery and to the emergence of post-flood topography. Speculation/debate: The exact place and any geological correlate remain uncertain.",
      "references": [
        {
          "label": "researchgate.net - 379176886 Spatial Imagination in Sacred Narratives of Mounta",
          "url": "https://www.researchgate.net/publication/379176886_Spatial_Imagination_in_Sacred_Narratives_of_Mountain_Communities_in_Western_Yunnan_China"
        }
      ]
    },
    "links": [
      {
        "label": "researchgate.net - 379176886 Spatial Imagination in Sacred Narratives of Mounta",
        "url": "https://www.researchgate.net/publication/379176886_Spatial_Imagination_in_Sacred_Narratives_of_Mountain_Communities_in_Western_Yunnan_China"
      }
    ],
    "translations": entryTranslations["myth-044-pamichali-flood"]
  },
  {
    "id": "myth-045-makah-deluge-legend",
    "title": "45. Makah deluge legend",
    "subtitle": "Makah",
    "text": "The sea first drains away and then rises back, warm and without breakers, until only mountain tops remain.",
    "date": "Written down by James G. Swan in 1868 from Makah informants; the tradition itself is older.",
    "latitude": 48.37,
    "longitude": -124.62,
    "region": "North America",
    "details": {
      "classification": "Makah.",
      "geographicLocation": "Cape Flattery and Neah Bay, northwestern Olympic Peninsula, Washington, United States.",
      "mapPlacement": "48.37, -124.62, approximate, based on Neah Bay/Cape Flattery.",
      "narrative": "The sea first drains away and then rises back, warm and without breakers, until only mountain tops remain. People with canoes load their possessions and drift with the current; many die, but survivors strand in different places, explaining later dispersal.",
      "chronology": "Written down by James G. Swan in 1868 from Makah informants; the tradition itself is older.",
      "evidence": "Evidence: PNSN highlights the sudden retreat, renewed rise, warm seawater, and drift dispersal as potentially tsunami-like, placing it in broader Cascadia oral-history discussions. Speculation/debate: PNSN explicitly warns that some Native flood stories may reflect ordinary floods, later retellings, or post-contact influence rather than one submarine-earthquake event.",
      "references": [
        {
          "label": "pnsn.org - makah legend",
          "url": "https://www.pnsn.org/outreach/native-american-stories/other-stories/makah-legend"
        },
        {
          "label": "pnsn.org - native american stories overview",
          "url": "https://pnsn.org/outreach/native-american-stories/native-american-stories-overview"
        }
      ]
    },
    "links": [
      {
        "label": "pnsn.org - makah legend",
        "url": "https://www.pnsn.org/outreach/native-american-stories/other-stories/makah-legend"
      },
      {
        "label": "pnsn.org - native american stories overview",
        "url": "https://pnsn.org/outreach/native-american-stories/native-american-stories-overview"
      }
    ],
    "translations": entryTranslations["myth-045-makah-deluge-legend"]
  },
  {
    "id": "myth-046-quilliute-fragmentary-deluge-myth",
    "title": "46. Quilliute fragmentary deluge myth",
    "subtitle": "Quileute",
    "text": "People see a wall of water moving in from the sea.",
    "date": "Published by Edward S. Curtis in 1913; oral tradition older.",
    "latitude": 47.91,
    "longitude": -124.64,
    "region": "North America",
    "details": {
      "classification": "Quileute.",
      "geographicLocation": "La Push at the mouth of the Quillayute River on the Pacific coast of Washington, United States.",
      "mapPlacement": "47.91, -124.64, approximate, based on La Push.",
      "narrative": "People see a wall of water moving in from the sea. They enter canoes with possessions, lash the craft together, and fasten the lead canoe to a tall tree while the land is submerged. When the waters fall, one group returns to the Quillayute and another settles elsewhere, producing tribal separation.",
      "chronology": "Published by Edward S. Curtis in 1913; oral tradition older.",
      "evidence": "Evidence: The account contains an explicit sea-wall flood and tied-canoe survival motif. Speculation/debate: PNSN remarks that this Quileute version may have been transmitted from Makah tradition and does not treat it as secure proof of a single real event.",
      "references": [
        {
          "label": "pnsn.org - quilliute myth",
          "url": "https://pnsn.org/outreach/native-american-stories/other-stories/quilliute-myth"
        },
        {
          "label": "pnsn.org - native american stories overview",
          "url": "https://pnsn.org/outreach/native-american-stories/native-american-stories-overview"
        }
      ]
    },
    "links": [
      {
        "label": "pnsn.org - quilliute myth",
        "url": "https://pnsn.org/outreach/native-american-stories/other-stories/quilliute-myth"
      },
      {
        "label": "pnsn.org - native american stories overview",
        "url": "https://pnsn.org/outreach/native-american-stories/native-american-stories-overview"
      }
    ],
    "translations": entryTranslations["myth-046-quilliute-fragmentary-deluge-myth"]
  },
  {
    "id": "myth-047-hoh-quileute-a-story-of-the-flood",
    "title": "47. Hoh-Quileute A Story of the Flood",
    "subtitle": "Hoh and Quileute",
    "text": "In mythic time, Kwattee battles Thunderbird and the waters repeatedly rise until the whole country is submerged.",
    "date": "Published by Albert B. Reagan in 1934 from Hoh/Quileute informants.",
    "latitude": 47.75,
    "longitude": -124.42,
    "region": "North America",
    "details": {
      "classification": "Hoh and Quileute.",
      "geographicLocation": "Pacific coast and river prairies around La Push, Forks, and the Hoh River, western Washington, United States.",
      "mapPlacement": "47.75, -124.42, approximate, based on the Hoh River mouth and western Olympic coast.",
      "narrative": "In mythic time, Kwattee battles Thunderbird and the waters repeatedly rise until the whole country is submerged. People escape in canoes and drift without sun or land for guidance; many die, but survivors are scattered to Hoh, Chemakum, and back to Quileute country, creating post-flood redistribution of peoples.",
      "chronology": "Published by Albert B. Reagan in 1934 from Hoh/Quileute informants.",
      "evidence": "Evidence: PNSN emphasizes the strong similarity between this story and the Swan Makah account, including widespread inundation and canoe dispersal. Speculation/debate: The story is heavily mythologized through the Thunderbird battle and cannot be read straightforwardly as literal testimony.",
      "references": [
        {
          "label": "pnsn.org - a story of the flood",
          "url": "https://pnsn.org/outreach/native-american-stories/thunderbird-and-whale/thunderbird-and-whale-stories/a-story-of-the-flood"
        },
        {
          "label": "pnsn.org - native american stories overview",
          "url": "https://pnsn.org/outreach/native-american-stories/native-american-stories-overview"
        }
      ]
    },
    "links": [
      {
        "label": "pnsn.org - a story of the flood",
        "url": "https://pnsn.org/outreach/native-american-stories/thunderbird-and-whale/thunderbird-and-whale-stories/a-story-of-the-flood"
      },
      {
        "label": "pnsn.org - native american stories overview",
        "url": "https://pnsn.org/outreach/native-american-stories/native-american-stories-overview"
      }
    ],
    "translations": entryTranslations["myth-047-hoh-quileute-a-story-of-the-flood"]
  },
  {
    "id": "myth-048-klallam-the-flood",
    "title": "48. Klallam The Flood",
    "subtitle": "Klallam",
    "text": "One man warns the people to build large, strong canoes because a flood is coming.",
    "date": "Recorded by Erna Gunther in 1925 from Klallam informants; parallel variants were noted in later ethnography.",
    "latitude": 48.15,
    "longitude": -123.57,
    "region": "North America",
    "details": {
      "classification": "Klallam.",
      "geographicLocation": "North coast of the Olympic Peninsula, especially the Lower Elwha and Strait of Juan de Fuca region, Washington, United States.",
      "mapPlacement": "48.15, -123.57, approximate, based on Lower Elwha homeland near Port Angeles.",
      "narrative": "One man warns the people to build large, strong canoes because a flood is coming. Some ignore him and flee on foot; valleys fill, rivers become salt, children die of cold, and many perish. Those with canoes, food, and water survive by tying canoes to trees or mountains until the waters subside.",
      "chronology": "Recorded by Erna Gunther in 1925 from Klallam informants; parallel variants were noted in later ethnography.",
      "evidence": "Evidence: PNSN identifies this as one of the strongest Noah-like Cascadia stories because it includes advance warning, preparation, survival craft, saltwater intrusion, and tied-canoe refuge. Speculation/debate: PNSN also notes possible missionary-era influence on some Pacific Northwest flood narratives and does not treat the story as unambiguous event memory.",
      "references": [
        {
          "label": "pnsn.org - the flood",
          "url": "https://www.pnsn.org/outreach/native-american-stories/other-stories/the-flood"
        },
        {
          "label": "pnsn.org - native american stories overview",
          "url": "https://pnsn.org/outreach/native-american-stories/native-american-stories-overview"
        }
      ]
    },
    "links": [
      {
        "label": "pnsn.org - the flood",
        "url": "https://www.pnsn.org/outreach/native-american-stories/other-stories/the-flood"
      },
      {
        "label": "pnsn.org - native american stories overview",
        "url": "https://pnsn.org/outreach/native-american-stories/native-american-stories-overview"
      }
    ],
    "translations": entryTranslations["myth-048-klallam-the-flood"]
  },
  {
    "id": "myth-049-viracocha-flood-unu-pachakuti",
    "title": "49. Viracocha flood / Unu Pachakuti",
    "subtitle": "Inca and earlier Andean tradition",
    "text": "Viracocha creates an earlier humanity that becomes disobedient and is destroyed by a flood.",
    "date": "Earliest surviving written witnesses are 16th-century colonial chronicles, especially Pedro Sarmiento de Gamboa and Cristobal de Molina, based on post-conquest testimony.",
    "latitude": -16.56,
    "longitude": -68.67,
    "region": "South America",
    "details": {
      "classification": "Inca and earlier Andean tradition.",
      "geographicLocation": "Lake Titicaca-Tiwanaku ritual zone and the south-central Andes of modern Peru and Bolivia.",
      "mapPlacement": "-16.56, -68.67, approximate, based on Tiwanaku and the southern Lake Titicaca ritual core.",
      "narrative": "Viracocha creates an earlier humanity that becomes disobedient and is destroyed by a flood. In some versions a man and woman survive, while in others humanity is remade after the deluge. The flood functions as a moral reset followed by re-creation and renewed ordering of peoples and landscapes.",
      "chronology": "Earliest surviving written witnesses are 16th-century colonial chronicles, especially Pedro Sarmiento de Gamboa and Cristobal de Molina, based on post-conquest testimony.",
      "evidence": "Evidence: The flood tradition appears early in colonial records and is attached to real sacred centers such as Tiwanaku and Lake Titicaca. Speculation/debate: Attempts to tie it to a single paleolake episode, collapse, or one geological catastrophe remain debated and unproven.",
      "references": [
        {
          "label": "sacred-texts.com - inca01",
          "url": "https://sacred-texts.com/nam/inca/inca01.htm"
        },
        {
          "label": "utpress.utexas.edu - account of the fables and rites of the incas",
          "url": "https://utpress.utexas.edu/9780292748446/account-of-the-fables-and-rites-of-the-incas/"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - inca01",
        "url": "https://sacred-texts.com/nam/inca/inca01.htm"
      },
      {
        "label": "utpress.utexas.edu - account of the fables and rites of the incas",
        "url": "https://utpress.utexas.edu/9780292748446/account-of-the-fables-and-rites-of-the-incas/"
      }
    ],
    "translations": entryTranslations["myth-049-viracocha-flood-unu-pachakuti"]
  },
  {
    "id": "myth-050-muisca-flood-of-chibchacum-and-bochica",
    "title": "50. Muisca flood of Chibchacum and Bochica",
    "subtitle": "Muisca/Chibcha",
    "text": "Chibchacum, or the disorder associated with Huitaca in related tellings, brings a devastating inundation over the Bogota savanna.",
    "date": "Known from early colonial chroniclers discussed in modern scholarship, especially 16th- and early 17th-century Spanish accounts summarized by Francois Correa.",
    "latitude": 4.58,
    "longitude": -74.3,
    "region": "South America",
    "details": {
      "classification": "Muisca/Chibcha.",
      "geographicLocation": "Bogota savanna and Tequendama Falls in the Eastern Cordillera of modern Cundinamarca, Colombia.",
      "mapPlacement": "4.58, -74.30, approximate, based on Tequendama Falls.",
      "narrative": "Chibchacum, or the disorder associated with Huitaca in related tellings, brings a devastating inundation over the Bogota savanna. The people appeal to Bochica, who strikes or opens the rocks at Tequendama so the floodwaters can drain away, restoring cultivable land and social order.",
      "chronology": "Known from early colonial chroniclers discussed in modern scholarship, especially 16th- and early 17th-century Spanish accounts summarized by Francois Correa.",
      "evidence": "Evidence: The tradition is embedded in Muisca sacred geography at Tequendama, which UNESCO also notes as a site where Bochica is said to have opened the rock. Speculation/debate: Reading the myth as memory of a specific geologic drainage episode on the Bogota savanna remains unproven.",
      "references": [
        {
          "label": "researchgate.net - 26476102 Sociedad y naturaleza en la mitologia Muisca",
          "url": "https://www.researchgate.net/publication/26476102_Sociedad_y_naturaleza_en_la_mitologia_Muisca"
        },
        {
          "label": "culturarecreacionydeporte.gov.co - leyenda de bochica",
          "url": "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/leyenda-de-bochica"
        },
        {
          "label": "culturarecreacionydeporte.gov.co - chibchacum las iras del patrono de bacata",
          "url": "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/chibchacum-las-iras-del-patrono-de-bacata"
        },
        {
          "label": "UNESCO - Tequendama cloud forest note",
          "url": "https://www.unesco.org/en/articles/sustainable-education-takes-place-cloud-forest-emblematic-colombian-site"
        },
        {
          "label": "ResearchGate - Sociedad y naturaleza en la mitologia Muisca",
          "url": "https://www.researchgate.net/publication/26476102_Sociedad_y_naturaleza_en_la_mitologia_Muisca"
        }
      ]
    },
    "links": [
      {
        "label": "researchgate.net - 26476102 Sociedad y naturaleza en la mitologia Muisca",
        "url": "https://www.researchgate.net/publication/26476102_Sociedad_y_naturaleza_en_la_mitologia_Muisca"
      },
      {
        "label": "culturarecreacionydeporte.gov.co - leyenda de bochica",
        "url": "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/leyenda-de-bochica"
      },
      {
        "label": "culturarecreacionydeporte.gov.co - chibchacum las iras del patrono de bacata",
        "url": "https://www.culturarecreacionydeporte.gov.co/es/bogotanitos/cuenta-la-leyenda/chibchacum-las-iras-del-patrono-de-bacata"
      }
    ],
    "translations": entryTranslations["myth-050-muisca-flood-of-chibchacum-and-bochica"]
  },
  {
    "id": "myth-051-story-of-the-deluge",
    "title": "51. Story of the Deluge",
    "subtitle": "Tsimshian",
    "text": "In Boas's recorded Tsimshian text, the people of Prairie Town become morally corrupt, rain continues for twenty days, the town is submerged, and the…",
    "date": "Franz Boas's early twentieth-century publication of Tsimshian materials, issued in 1915-1916, based on earlier fieldwork and Henry Tate's narration. The tradition itself is oral and older than publication.",
    "latitude": 54.52,
    "longitude": -128.6,
    "region": "North America",
    "details": {
      "classification": "Tsimshian",
      "geographicLocation": "Ancient Tsimshian territory on the Skeena River and north coast; modern northwestern British Columbia, Canada, especially the upper Skeena/Prairie Town setting in the recorded text.",
      "mapPlacement": "Approx. 54.52, -128.60. This is an inferred homeland marker, not a precise flood site.",
      "narrative": "In Boas's recorded Tsimshian text, the people of Prairie Town become morally corrupt, rain continues for twenty days, the town is submerged, and the people launch canoes with elk-skin shelters. The water rises above hills, anchor-lines break, many drift away, and many perish. After the waters recede, survivors are scattered and their languages become mixed, while clan crests still mark remembered kinship. The story is Noah-like in divine punishment, catastrophic flood, surviving remnant in watercraft, and post-flood reordering of human society, though it lacks a single ark-builder hero.",
      "chronology": "Franz Boas's early twentieth-century publication of Tsimshian materials, issued in 1915-1916, based on earlier fieldwork and Henry Tate's narration. The tradition itself is oral and older than publication.",
      "evidence": "Evidence: Pacific Northwest scholarship notes that Indigenous flood and tsunami traditions may preserve memory of real coastal inundations, including Cascadia-related events and other earthquake-driven flooding hazards. Speculation/Debate: no specific Tsimshian text-to-event correlation is demonstrated in Boas; connecting this story to a discrete palaeotsunami or flood episode remains interpretive rather than proven.",
      "references": [
        {
          "label": "sacred-texts.com - tst07",
          "url": "https://sacred-texts.com/nam/nw/tst/tst07.htm"
        },
        {
          "label": "repository.si.edu - 9a9672c4 5565 4549 b124 5ba5413acdcd",
          "url": "https://repository.si.edu/items/9a9672c4-5565-4549-b124-5ba5413acdcd"
        },
        {
          "label": "pnsn.org - flooding",
          "url": "https://pnsn.org/education/earthquake-hazards/flooding"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - tst07",
        "url": "https://sacred-texts.com/nam/nw/tst/tst07.htm"
      },
      {
        "label": "repository.si.edu - 9a9672c4 5565 4549 b124 5ba5413acdcd",
        "url": "https://repository.si.edu/items/9a9672c4-5565-4549-b124-5ba5413acdcd"
      },
      {
        "label": "pnsn.org - flooding",
        "url": "https://pnsn.org/education/earthquake-hazards/flooding"
      }
    ],
    "translations": entryTranslations["myth-051-story-of-the-deluge"]
  },
  {
    "id": "myth-052-the-flood",
    "title": "52. The Flood",
    "subtitle": "Coos",
    "text": "A flood-tide comes without ebb-tide until the earth is filled with water.",
    "date": "Early ethnographic translation preserved in the Coos texts; the oral tradition predates publication, but the exact field date is not stated in the available excerpt.",
    "latitude": 43.41,
    "longitude": -124.22,
    "region": "North America",
    "details": {
      "classification": "Coos",
      "geographicLocation": "Ancient Coos territory on the south Oregon coast; modern Coos Bay/North Bend, Oregon, United States; the textual footnote points to a location across modern North Bend.",
      "mapPlacement": "Approx. 43.41, -124.22. Marker reflects the traditional homeland and the location noted in the translated text.",
      "narrative": "A flood-tide comes without ebb-tide until the earth is filled with water. People rush into canoes, fasten them with braided ropes to protruding fir-tops, and gather where small pieces of land still stick out. Animals and birds come in pairs and mix with the people. When the earth dries again, people and animals disperse across the land. The parallel with Noah is strong in widespread inundation, refuge in watercraft, animals in pairs, survival of a remnant, and post-flood resettlement.",
      "chronology": "Early ethnographic translation preserved in the Coos texts; the oral tradition predates publication, but the exact field date is not stated in the available excerpt.",
      "evidence": "Evidence: the Oregon coast is vulnerable to tsunami inundation from Cascadia subduction-zone earthquakes, and regional Indigenous traditions are often used in reconstructing hazard memory. Speculation/Debate: this Coos story has not been securely tied to one dated tsunami or flood episode.",
      "references": [
        {
          "label": "sacred-texts.com - ct09",
          "url": "https://sacred-texts.com/nam/nw/coos/ct09.htm"
        },
        {
          "label": "pnsn.org - flooding",
          "url": "https://pnsn.org/education/earthquake-hazards/flooding"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - ct09",
        "url": "https://sacred-texts.com/nam/nw/coos/ct09.htm"
      },
      {
        "label": "pnsn.org - flooding",
        "url": "https://pnsn.org/education/earthquake-hazards/flooding"
      }
    ],
    "translations": entryTranslations["myth-052-the-flood"]
  },
  {
    "id": "myth-053-the-flood",
    "title": "53. The Flood",
    "subtitle": "Cochiti Pueblo",
    "text": "In Ruth Benedict's Cochiti record, people in an earlier world know a great flood is coming and build a great boat in the northern high mountains.",
    "date": "Published in Benedict's Tales of the Cochiti Indians in 1932, based on fieldwork in the early 1920s. Benedict notes that the recorded flood story includes European elements.",
    "latitude": 35.61,
    "longitude": -106.35,
    "region": "Mesoamerica / Central America",
    "details": {
      "classification": "Cochiti Pueblo",
      "geographicLocation": "Ancient Pueblo world of the middle Rio Grande; modern Cochiti Pueblo area, New Mexico, United States.",
      "mapPlacement": "Approx. 35.61, -106.35. Inferred marker for Cochiti Pueblo.",
      "narrative": "In Ruth Benedict's Cochiti record, people in an earlier world know a great flood is coming and build a great boat in the northern high mountains. They load it with corn, animals, and a white pigeon, seal the cracks with pitch, and ride out the flood while others are drowned or turned to stone on mountains. The text is one of the clearest Noah parallels in the Americas: advance warning, deliberate boat construction, animal preservation, bird release, and destruction of those outside the refuge.",
      "chronology": "Published in Benedict's Tales of the Cochiti Indians in 1932, based on fieldwork in the early 1920s. Benedict notes that the recorded flood story includes European elements.",
      "evidence": "Evidence: Pueblo communities have long histories of episodic river flooding, arroyo cutting, and landscape instability in the Rio Grande region. Speculation/Debate: Benedict considered the recorded tale heavily shaped by European influence, so it is uncertain as independent prehistoric flood memory.",
      "references": [
        {
          "label": "sacred-texts.com - index",
          "url": "https://sacred-texts.com/nam/sw/tci/index.htm"
        },
        {
          "label": "sacred-texts.com - tci004",
          "url": "https://sacred-texts.com/nam/sw/tci/tci004.htm"
        },
        {
          "label": "sacred-texts.com - tci123",
          "url": "https://sacred-texts.com/nam/sw/tci/tci123.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - index",
        "url": "https://sacred-texts.com/nam/sw/tci/index.htm"
      },
      {
        "label": "sacred-texts.com - tci004",
        "url": "https://sacred-texts.com/nam/sw/tci/tci004.htm"
      },
      {
        "label": "sacred-texts.com - tci123",
        "url": "https://sacred-texts.com/nam/sw/tci/tci123.htm"
      }
    ],
    "translations": entryTranslations["myth-053-the-flood"]
  },
  {
    "id": "myth-054-noah-s-flood",
    "title": "54. Noah's Flood",
    "subtitle": "Thompson / Nlaka'pamux",
    "text": "The Thompson version explicitly says God found the earth dirty and full of bad things, decided to flood it, and only one man and his two daughters…",
    "date": "Published in a comparative anthology using Teit's Thompson materials from the Jesup North Pacific Expedition, early twentieth century.",
    "latitude": 50.23,
    "longitude": -121.58,
    "region": "North America",
    "details": {
      "classification": "Thompson / Nlaka'pamux",
      "geographicLocation": "Ancient Interior Salish / Thompson River region; modern interior British Columbia, Canada.",
      "mapPlacement": "Approx. 50.23, -121.58. Inferred homeland marker based on the Thompson / Nlaka'pamux region.",
      "narrative": "The Thompson version explicitly says God found the earth dirty and full of bad things, decided to flood it, and only one man and his two daughters survived in a canoe. After the waters receded, they struggled to find food and eventually repopulated the world. The structure resembles Genesis strongly, but the title and monotheistic framing signal probable biblical overlay.",
      "chronology": "Published in a comparative anthology using Teit's Thompson materials from the Jesup North Pacific Expedition, early twentieth century.",
      "evidence": "Evidence: interior British Columbia has a long history of riverine flooding, glacial-lake outburst legacies, and geomorphic instability. Speculation/Debate: the explicit biblical framing makes this weak evidence for an independent pre-contact flood tradition.",
      "references": [
        {
          "label": "sacred-texts.com - tnai09",
          "url": "https://sacred-texts.com/nam/tnai/tnai09.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - tnai09",
        "url": "https://sacred-texts.com/nam/tnai/tnai09.htm"
      }
    ],
    "translations": entryTranslations["myth-054-noah-s-flood"]
  },
  {
    "id": "myth-055-m-l-leqala-deluge",
    "title": "55. Mâ'lâleqala Deluge",
    "subtitle": "Kwakwaka'wakw",
    "text": "In the Ma'mâlâleqala tradition recorded by Boas, Mâ'lâleqala knows that a deluge sent by the Chief in Heaven is coming.",
    "date": "Published in Boas's Kwakiutl Tales in 1910, based on late nineteenth- and early twentieth-century collection.",
    "latitude": 50.72,
    "longitude": -127.49,
    "region": "North America",
    "details": {
      "classification": "Kwakwaka'wakw",
      "geographicLocation": "Ancient northern Vancouver Island / Fort Rupert area; modern northeastern Vancouver Island, British Columbia, Canada.",
      "mapPlacement": "Approx. 50.72, -127.49. Inferred marker near Fort Rupert.",
      "narrative": "In the Ma'mâlâleqala tradition recorded by Boas, Mâ'lâleqala knows that a deluge sent by the Chief in Heaven is coming. He builds a log-cabin-like refuge and caulks it with clay. When the deluge comes, it covers the house but does not destroy those inside. After the country dries, driftwood carrying people is hauled ashore, and those rescued become the tribe. This is one of the stronger ark/refuge narratives in the Northwest Coast corpus.",
      "chronology": "Published in Boas's Kwakiutl Tales in 1910, based on late nineteenth- and early twentieth-century collection.",
      "evidence": "Evidence: Northwest Coast oral traditions are often examined alongside tsunami and coastal flooding hazard models; the region is exposed to earthquake-driven inundation and storm surges. Speculation/Debate: the text does not link the story to one dated geologic event.",
      "references": [
        {
          "label": "sacred-texts.com - kt86",
          "url": "https://sacred-texts.com/nam/nw/kt/kt86.htm"
        },
        {
          "label": "sacred-texts.com - index",
          "url": "https://www.sacred-texts.com/nam/nw/kt/index.htm"
        },
        {
          "label": "pnsn.org - flooding",
          "url": "https://pnsn.org/education/earthquake-hazards/flooding"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - kt86",
        "url": "https://sacred-texts.com/nam/nw/kt/kt86.htm"
      },
      {
        "label": "sacred-texts.com - index",
        "url": "https://www.sacred-texts.com/nam/nw/kt/index.htm"
      },
      {
        "label": "pnsn.org - flooding",
        "url": "https://pnsn.org/education/earthquake-hazards/flooding"
      }
    ],
    "translations": entryTranslations["myth-055-m-l-leqala-deluge"]
  },
  {
    "id": "myth-056-m-l-flood-transformation",
    "title": "56. Ô'?mâl Flood Transformation",
    "subtitle": "Kwakwaka'wakw",
    "text": "In this Kwakiutl text, Ô'?mâl paints birds and animals, then a sudden flood comes.",
    "date": "Published in Boas's 1910 Kwakiutl Tales from earlier field collection.",
    "latitude": 50.72,
    "longitude": -127.49,
    "region": "North America",
    "details": {
      "classification": "Kwakwaka'wakw",
      "geographicLocation": "Ancient northern Vancouver Island / Kwakwaka'wakw area; modern British Columbia, Canada.",
      "mapPlacement": "Approx. 50.72, -127.49. Inferred homeland marker.",
      "narrative": "In this Kwakiutl text, Ô'?mâl paints birds and animals, then a sudden flood comes. Some of his people dive on islands and those overtaken by the sea become land-birds. This is not a close Noah analogue because it lacks a preserved human remnant in an ark-like refuge, but it remains a rooted flood-transformation myth in which inundation reshapes landscape and living beings.",
      "chronology": "Published in Boas's 1910 Kwakiutl Tales from earlier field collection.",
      "evidence": "Evidence: broader Pacific Northwest tsunami and flood context makes environmental memory plausible. Speculation/Debate: the myth is primarily etiological and transformational, not clearly a record of one historic flood episode.",
      "references": [
        {
          "label": "sacred-texts.com - kt56",
          "url": "https://sacred-texts.com/nam/nw/kt/kt56.htm"
        },
        {
          "label": "sacred-texts.com - index",
          "url": "https://www.sacred-texts.com/nam/nw/kt/index.htm"
        },
        {
          "label": "pnsn.org - flooding",
          "url": "https://pnsn.org/education/earthquake-hazards/flooding"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - kt56",
        "url": "https://sacred-texts.com/nam/nw/kt/kt56.htm"
      },
      {
        "label": "sacred-texts.com - index",
        "url": "https://www.sacred-texts.com/nam/nw/kt/index.htm"
      },
      {
        "label": "pnsn.org - flooding",
        "url": "https://pnsn.org/education/earthquake-hazards/flooding"
      }
    ],
    "translations": entryTranslations["myth-056-m-l-flood-transformation"]
  },
  {
    "id": "myth-057-the-flood",
    "title": "57. The Flood",
    "subtitle": "Natchez",
    "text": "A man's dog howls a warning that all things will soon be overflowed by water and instructs him to build a raft, gather wood, keep fire burning, and…",
    "date": "Published in John R. Swanton's Myths and Tales of the Southeastern Indians (1929), based on earlier field collection.",
    "latitude": 31.56,
    "longitude": -91.4,
    "region": "North America",
    "details": {
      "classification": "Natchez",
      "geographicLocation": "Ancient lower Mississippi Valley; modern Mississippi/Louisiana borderlands, United States.",
      "mapPlacement": "Approx. 31.56, -91.40. Marker near the Natchez Bluffs.",
      "narrative": "A man's dog howls a warning that all things will soon be overflowed by water and instructs him to build a raft, gather wood, keep fire burning, and tether the raft so it will not drift away. Mountains burst open, floodwaters rise, monsters appear, and only the man survives on the raft with his dog. After the waters fall, people come to receive fire and the world resumes. This closely parallels Noah in warning, raft construction, survival of a chosen remnant, and post-flood renewal.",
      "chronology": "Published in John R. Swanton's Myths and Tales of the Southeastern Indians (1929), based on earlier field collection.",
      "evidence": "Evidence: Mississippi Valley peoples historically experienced major river floods and avulsions. Speculation/Debate: the source does not tie the story to a specific flood episode, and supernatural elements make historical reading tentative.",
      "references": [
        {
          "label": "sacred-texts.com - mtsi",
          "url": "https://www.sacred-texts.com/nam/se/mtsi/"
        },
        {
          "label": "sacred-texts.com - mtsi266",
          "url": "https://sacred-texts.com/nam/se/mtsi/mtsi266.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - mtsi",
        "url": "https://www.sacred-texts.com/nam/se/mtsi/"
      },
      {
        "label": "sacred-texts.com - mtsi266",
        "url": "https://sacred-texts.com/nam/se/mtsi/mtsi266.htm"
      }
    ],
    "translations": entryTranslations["myth-057-the-flood"]
  },
  {
    "id": "myth-058-the-flood",
    "title": "58. The Flood",
    "subtitle": "Alabama",
    "text": "A frog predicts that the land will nearly disappear under the waters.",
    "date": "Recorded in Swanton's 1929 compilation from southeastern Tribal materials; the tradition itself is older and oral.",
    "latitude": 32.63,
    "longitude": -87.32,
    "region": "North America",
    "details": {
      "classification": "Alabama",
      "geographicLocation": "Ancient Alabama River region; modern Alabama, southeastern United States.",
      "mapPlacement": "Approx. 32.63, -87.32. Inferred marker for the Alabama homeland region.",
      "narrative": "A frog predicts that the land will nearly disappear under the waters. One compassionate man saves the frog, which instructs him to build a raft protected with grass so beavers cannot gnaw through it. The flood comes, scoffers drown, and the man and his family survive aboard the raft with the frog. This is a strong Noah-like pattern: warning, selected survivor, deliberate vessel preparation, near-universal inundation, and survival of a favored household.",
      "chronology": "Recorded in Swanton's 1929 compilation from southeastern Tribal materials; the tradition itself is older and oral.",
      "evidence": "Evidence: southeastern woodland societies lived in flood-prone river systems subject to large seasonal and episodic inundations. Speculation/Debate: no demonstrated tie to a single historical flood.",
      "references": [
        {
          "label": "sacred-texts.com - mtsi",
          "url": "https://www.sacred-texts.com/nam/se/mtsi/"
        },
        {
          "label": "sacred-texts.com - mtsi139",
          "url": "https://sacred-texts.com/nam/se/mtsi/mtsi139.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - mtsi",
        "url": "https://www.sacred-texts.com/nam/se/mtsi/"
      },
      {
        "label": "sacred-texts.com - mtsi139",
        "url": "https://sacred-texts.com/nam/se/mtsi/mtsi139.htm"
      }
    ],
    "translations": entryTranslations["myth-058-the-flood"]
  },
  {
    "id": "myth-059-lizard-variant-of-the-flood",
    "title": "59. Lizard Variant of the Flood",
    "subtitle": "Koasati",
    "text": "Swanton notes that in the Koasati variant, a lizard rather than a frog survives a fire, warns a man that a flood will come, and the rest is largely…",
    "date": "Published in Swanton's 1929 compilation as a variant notice within the Alabama flood account.",
    "latitude": 31,
    "longitude": -87.5,
    "region": "North America",
    "details": {
      "classification": "Koasati",
      "geographicLocation": "Ancient Mobile-Alabama river region; modern Alabama and adjacent Gulf South, United States.",
      "mapPlacement": "Approx. 31.00, -87.50. Inferred regional marker; exact flood locale is not specified in the brief notice.",
      "narrative": "Swanton notes that in the Koasati variant, a lizard rather than a frog survives a fire, warns a man that a flood will come, and the rest is largely the same as the Alabama version: raft-building, catastrophic inundation, selective survival, and destruction of everyone else. Because the summary is brief, details about animals and aftermath are less complete than in the Alabama text.",
      "chronology": "Published in Swanton's 1929 compilation as a variant notice within the Alabama flood account.",
      "evidence": "Evidence: same riverine floodplain context as neighboring southeastern traditions. Speculation/Debate: the cited source preserves only a compressed variant notice, limiting",
      "references": [
        {
          "label": "sacred-texts.com - index",
          "url": "https://sacred-texts.com/nam/se/mtsi/index.htm"
        },
        {
          "label": "sacred-texts.com - mtsi139",
          "url": "https://sacred-texts.com/nam/se/mtsi/mtsi139.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - index",
        "url": "https://sacred-texts.com/nam/se/mtsi/index.htm"
      },
      {
        "label": "sacred-texts.com - mtsi139",
        "url": "https://sacred-texts.com/nam/se/mtsi/mtsi139.htm"
      }
    ],
    "translations": entryTranslations["myth-059-lizard-variant-of-the-flood"]
  },
  {
    "id": "myth-060-the-making-of-the-earth",
    "title": "60. The Making of the Earth",
    "subtitle": "Blackfoot",
    "text": "During a flood, Old Man sits on the highest mountain with all the beasts.",
    "date": "Clark Wissler and D. C. Duvall collected materials between 1903 and 1907 and published them in 1908.",
    "latitude": 48.99,
    "longitude": -113.63,
    "region": "North America",
    "details": {
      "classification": "Blackfoot",
      "geographicLocation": "Ancient northern Plains / Rocky Mountain Front; modern Montana-Alberta borderlands centered on Chief Mountain.",
      "mapPlacement": "Approx. 48.99, -113.63. Inferred marker near Chief Mountain.",
      "narrative": "During a flood, Old Man sits on the highest mountain with all the beasts. Diving animals are sent below the waters to fetch earth; only the last returns with a little mud, with which Old Man recreates the earth. The story lacks an ark but preserves a world-covering flood, survival on a summit, animals gathered around the surviving culture being, and post-flood re-creation.",
      "chronology": "Clark Wissler and D. C. Duvall collected materials between 1903 and 1907 and published them in 1908.",
      "evidence": "Evidence: scholars of Blackfoot landscape memory connect Napi traditions to prominent Rocky Mountain Front topography. Speculation/Debate: the story is usually treated as a cosmogonic deluge and earth-diver type narrative, not a securely historical flood memory.",
      "references": [
        {
          "label": "sites.pitt.edu - blkftcreation",
          "url": "https://sites.pitt.edu/~dash/blkftcreation.html"
        },
        {
          "label": "ehrafworldcultures.yale.edu - 022",
          "url": "https://ehrafworldcultures.yale.edu/cultures/nf06/documents/022"
        },
        {
          "label": "journals.sagepub.com - 14696053211019837",
          "url": "https://journals.sagepub.com/doi/abs/10.1177/14696053211019837"
        }
      ]
    },
    "links": [
      {
        "label": "sites.pitt.edu - blkftcreation",
        "url": "https://sites.pitt.edu/~dash/blkftcreation.html"
      },
      {
        "label": "ehrafworldcultures.yale.edu - 022",
        "url": "https://ehrafworldcultures.yale.edu/cultures/nf06/documents/022"
      },
      {
        "label": "journals.sagepub.com - 14696053211019837",
        "url": "https://journals.sagepub.com/doi/abs/10.1177/14696053211019837"
      }
    ],
    "translations": entryTranslations["myth-060-the-making-of-the-earth"]
  },
  {
    "id": "myth-061-languages-confused-on-a-mountain",
    "title": "61. Languages Confused on a Mountain",
    "subtitle": "Blackfoot",
    "text": "After the flood, Old Man gathers people on a high mountain, gives them differently colored waters to drink, and their languages diverge.",
    "date": "Same 1903-1907 field collection and 1908 publication context as the preceding Blackfoot text.",
    "latitude": 48.99,
    "longitude": -113.63,
    "region": "North America",
    "details": {
      "classification": "Blackfoot",
      "geographicLocation": "Chief Mountain region in the northern Plains / Rocky Mountain Front; modern Montana-Alberta borderlands.",
      "mapPlacement": "Approx. 48.99, -113.63. Marker inferred from the source's Chief Mountain reference.",
      "narrative": "After the flood, Old Man gathers people on a high mountain, gives them differently colored waters to drink, and their languages diverge. The Blackfoot, Piegan, and Blood speak the same language because they received black water. This is a post-deluge renewal and differentiation narrative, parallel less to Noah's boat-building episode than to social reordering after a flood.",
      "chronology": "Same 1903-1907 field collection and 1908 publication context as the preceding Blackfoot text.",
      "evidence": "Evidence: the story is anchored to notable mountain geography. Speculation/Debate: best understood as a post-flood ethnogenetic explanation rather than evidence for a dated inundation.",
      "references": [
        {
          "label": "sites.pitt.edu - blkftcreation",
          "url": "https://sites.pitt.edu/~dash/blkftcreation.html"
        },
        {
          "label": "ehrafworldcultures.yale.edu - 022",
          "url": "https://ehrafworldcultures.yale.edu/cultures/nf06/documents/022"
        }
      ]
    },
    "links": [
      {
        "label": "sites.pitt.edu - blkftcreation",
        "url": "https://sites.pitt.edu/~dash/blkftcreation.html"
      },
      {
        "label": "ehrafworldcultures.yale.edu - 022",
        "url": "https://ehrafworldcultures.yale.edu/cultures/nf06/documents/022"
      }
    ],
    "translations": entryTranslations["myth-061-languages-confused-on-a-mountain"]
  },
  {
    "id": "myth-062-reed-refuge-flood",
    "title": "62. Reed Refuge Flood",
    "subtitle": "Caddo / Wichita-related tradition",
    "text": "Four monsters grow into one sky-touching being.",
    "date": "The synopsis cites Erdoes and Ortiz's 1984 anthology and identifies the version as a Caddo variant of a Wichita myth; the earliest primary textual recording remains unresolved in the accessible record.",
    "latitude": 34.8,
    "longitude": -98.5,
    "region": "North America",
    "details": {
      "classification": "Caddo / Wichita-related tradition",
      "geographicLocation": "Ancient southern Plains; modern Oklahoma-Texas Red River region, with the cited synopsis noting Caddo preservation of a Wichita-related variant.",
      "mapPlacement": "Approx. 34.80, -98.50. Inferred regional marker rather than site-specific coordinate.",
      "narrative": "Four monsters grow into one sky-touching being. A prophetic man hears a voice telling him to plant a hollow reed; he and his wife enter it with pairs of good animals when they see the birds all flying south. Rain comes, the waters rise, the monsters are destroyed, and after the flood the man and woman emerge onto a barren earth that is gradually renewed, with corn given as holy food. The ark/refuge, warning, animals, and renewal motifs are strong, though the cited form is secondary.",
      "chronology": "The synopsis cites Erdoes and Ortiz's 1984 anthology and identifies the version as a Caddo variant of a Wichita myth; the earliest primary textual recording remains unresolved in the accessible record.",
      "evidence": "Evidence: Caddo archaeology documents long settlement in riverine and floodplain landscapes. Speculation/Debate: because the accessible summary does not identify the earliest primary source, this entry is methodologically weaker than most.",
      "references": [
        {
          "label": "curioustaxonomy.net - caddo",
          "url": "https://www.curioustaxonomy.net/home/FloodMyths/18NASE/caddo.html"
        },
        {
          "label": "researchgate.net - 301323169 The Archaeology of the Caddo",
          "url": "https://www.researchgate.net/publication/301323169_The_Archaeology_of_the_Caddo"
        }
      ]
    },
    "links": [
      {
        "label": "curioustaxonomy.net - caddo",
        "url": "https://www.curioustaxonomy.net/home/FloodMyths/18NASE/caddo.html"
      },
      {
        "label": "researchgate.net - 301323169 The Archaeology of the Caddo",
        "url": "https://www.researchgate.net/publication/301323169_The_Archaeology_of_the_Caddo"
      }
    ],
    "translations": entryTranslations["myth-062-reed-refuge-flood"]
  },
  {
    "id": "myth-063-haida-deluge-and-raven-renewal",
    "title": "63. Haida Deluge and Raven Renewal",
    "subtitle": "Haida",
    "text": "A modern synopsis of early ethnographic material recounts a Haida deluge after which one survivor finds no mate, marries a cockle from the shore, and…",
    "date": "Primary ethnographic collection identified in metadata is Swanton's Haida Texts and Myths (1905). The accessible summary is later and secondary.",
    "latitude": 53.25,
    "longitude": -132.08,
    "region": "North America",
    "details": {
      "classification": "Haida",
      "geographicLocation": "Ancient Haida Gwaii; modern Haida Gwaii, British Columbia, Canada.",
      "mapPlacement": "Approx. 53.25, -132.08. Marker inferred from Haida homeland.",
      "narrative": "A modern synopsis of early ethnographic material recounts a Haida deluge after which one survivor finds no mate, marries a cockle from the shore, and through their offspring humanity is renewed. The post-flood recreation motif is clear, but warning, ark, and animal-preservation elements are absent or poorly preserved in the accessible synopsis. It is a historically rooted deluge tradition, but not a strong Noah parallel.",
      "chronology": "Primary ethnographic collection identified in metadata is Swanton's Haida Texts and Myths (1905). The accessible summary is later and secondary.",
      "evidence": "Evidence: Haida Gwaii coastal communities have long been exposed to storm surge, tsunami, and sea-level change. Speculation/Debate: the exact primary deluge text is not fully displayed in the accessible materials, so details remain less secure.",
      "references": [
        {
          "label": "repository.si.edu - d6c9f2a9 7aa6 4303 b5e5 e11b3546b904",
          "url": "https://repository.si.edu/items/d6c9f2a9-7aa6-4303-b5e5-e11b3546b904"
        },
        {
          "label": "Flood Folklore - Haida",
          "url": "https://www.curioustaxonomy.net/home/FloodMyths/15NANW/haida.html"
        }
      ]
    },
    "links": [
      {
        "label": "repository.si.edu - d6c9f2a9 7aa6 4303 b5e5 e11b3546b904",
        "url": "https://repository.si.edu/items/d6c9f2a9-7aa6-4303-b5e5-e11b3546b904"
      },
      {
        "label": "Flood Folklore - Haida",
        "url": "https://www.curioustaxonomy.net/home/FloodMyths/15NANW/haida.html"
      }
    ],
    "translations": entryTranslations["myth-063-haida-deluge-and-raven-renewal"]
  },
  {
    "id": "myth-064-the-flood-story",
    "title": "64. The Flood Story",
    "subtitle": "Igorot",
    "text": "Two sons of Lumawig decide to flood the world so mountains will rise.",
    "date": "Published in Mabel Cook Cole's Philippine Folk Tales in 1916, based on early twentieth-century collection among Philippine peoples.",
    "latitude": 16.99,
    "longitude": 120.9,
    "region": "Asia",
    "details": {
      "classification": "Igorot",
      "geographicLocation": "Ancient Cordillera highlands; modern mountain provinces of northern Luzon, Philippines.",
      "mapPlacement": "Approx. 16.99, 120.90. Marker inferred from the Cordillera homeland.",
      "narrative": "Two sons of Lumawig decide to flood the world so mountains will rise. Lumawig sees that only one brother and sister at Pokis survive; he helps them obtain fire after the flood, and the pair marry and repopulate the earth. There is no ark, but the story includes world-destroying water, a chosen surviving pair, divine oversight, and post-flood renewal of humankind.",
      "chronology": "Published in Mabel Cook Cole's Philippine Folk Tales in 1916, based on early twentieth-century collection among Philippine peoples.",
      "evidence": "Evidence: northern Luzon is tectonically active and typhoon-prone, with severe flood and landslide exposure. Speculation/Debate: the source presents the story as indigenous folklore but does not demonstrate correlation with a single dated geologic event.",
      "references": [
        {
          "label": "sites.pitt.edu - flood phil",
          "url": "https://sites.pitt.edu/~dash/flood-phil.html"
        },
        {
          "label": "sites.pitt.edu - philippines",
          "url": "https://sites.pitt.edu/~dash/philippines.html"
        }
      ]
    },
    "links": [
      {
        "label": "sites.pitt.edu - flood phil",
        "url": "https://sites.pitt.edu/~dash/flood-phil.html"
      },
      {
        "label": "sites.pitt.edu - philippines",
        "url": "https://sites.pitt.edu/~dash/philippines.html"
      }
    ],
    "translations": entryTranslations["myth-064-the-flood-story"]
  },
  {
    "id": "myth-065-the-flood-story",
    "title": "65. The Flood Story",
    "subtitle": "Bukidnon",
    "text": "A giant crab enters the sea and crowds the water onto the land.",
    "date": "Published in 1916 in Mabel Cook Cole's collection. Cole noted that this Bukidnon version might have been influenced by neighboring Christian or Muslim traditions.",
    "latitude": 8.1,
    "longitude": 125.13,
    "region": "Asia",
    "details": {
      "classification": "Bukidnon",
      "geographicLocation": "Ancient central Mindanao uplands; modern Bukidnon / central Mindanao, Philippines.",
      "mapPlacement": "Approx. 8.10, 125.13. Marker inferred from Bukidnon homeland.",
      "narrative": "A giant crab enters the sea and crowds the water onto the land. About a month before the event, a wise man warns the people to build a large three-layer raft and tie it with rattan to a big pole. The flood covers even the highest mountains; people and animals on the raft survive while all others drown. This is one of the clearest Noah parallels in Island Southeast Asia.",
      "chronology": "Published in 1916 in Mabel Cook Cole's collection. Cole noted that this Bukidnon version might have been influenced by neighboring Christian or Muslim traditions.",
      "evidence": "Evidence: Mindanao experiences severe monsoon flooding, coastal storm surges, and riverine inundation. Speculation/Debate: Cole's warning about possible biblical influence means it should not be treated as wholly independent evidence of ancient local memory.",
      "references": [
        {
          "label": "sites.pitt.edu - flood phil",
          "url": "https://sites.pitt.edu/~dash/flood-phil.html"
        },
        {
          "label": "sacred-texts.com - pft35",
          "url": "https://sacred-texts.com/asia/pft/pft35.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sites.pitt.edu - flood phil",
        "url": "https://sites.pitt.edu/~dash/flood-phil.html"
      },
      {
        "label": "sacred-texts.com - pft35",
        "url": "https://sacred-texts.com/asia/pft/pft35.htm"
      }
    ],
    "translations": entryTranslations["myth-065-the-flood-story"]
  },
  {
    "id": "myth-066-ata-flood",
    "title": "66. Ata Flood",
    "subtitle": "Ata",
    "text": "Roland Dixon's summary states that in very early times the earth was covered with water and all people drowned except two men and a woman.",
    "date": "Preserved in Dixon's 1916 Oceanic Mythology, which synthesizes earlier ethnographic reports; the oral tradition is older.",
    "latitude": 7.2,
    "longitude": 125.5,
    "region": "Asia",
    "details": {
      "classification": "Ata",
      "geographicLocation": "Ancient Mindanao uplands; modern Mindanao, Philippines.",
      "mapPlacement": "Approx. 7.20, 125.50. Exact locale is uncertain; this is a regional homeland marker.",
      "narrative": "Roland Dixon's summary states that in very early times the earth was covered with water and all people drowned except two men and a woman. An eagle rescued one man and the woman and carried them home. The surviving pair then became the basis for renewed humanity. The story lacks a boat but preserves near-total destruction and survival of a selected reproductive remnant.",
      "chronology": "Preserved in Dixon's 1916 Oceanic Mythology, which synthesizes earlier ethnographic reports; the oral tradition is older.",
      "evidence": "Evidence: Mindanao's topography and hydrology make destructive floods recurrently plausible. Speculation/Debate: available synopsis does not show the original collector and source area, so the case is moderately uncertain.",
      "references": [
        {
          "label": "sacred-texts.com - om16",
          "url": "https://sacred-texts.com/pac/om/om16.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - om16",
        "url": "https://sacred-texts.com/pac/om/om16.htm"
      }
    ],
    "translations": entryTranslations["myth-066-ata-flood"]
  },
  {
    "id": "myth-067-mandaya-flood",
    "title": "67. Mandaya Flood",
    "subtitle": "Mandaya",
    "text": "Dixon summarizes a Mandaya tradition in which all inhabitants of the world are destroyed by flood except one woman.",
    "date": "Preserved in Dixon's 1916 synthesis from earlier ethnographic materials.",
    "latitude": 7.5,
    "longitude": 126.5,
    "region": "Asia",
    "details": {
      "classification": "Mandaya",
      "geographicLocation": "Ancient eastern Mindanao; modern eastern Mindanao, Philippines.",
      "mapPlacement": "Approx. 7.50, 126.50. Inferred regional marker.",
      "narrative": "Dixon summarizes a Mandaya tradition in which all inhabitants of the world are destroyed by flood except one woman. After the waters subside, she gives birth to a son who later marries her, thereby repopulating the earth. This is a stripped-down Noah parallel focused on selective survival and re-creation of humankind after total inundation, without an ark motif.",
      "chronology": "Preserved in Dixon's 1916 synthesis from earlier ethnographic materials.",
      "evidence": "Evidence: eastern Mindanao is vulnerable to major rainfall-driven flooding and landslides. Speculation/Debate: the available citation is brief and does not identify the full primary ethnographic chain in the displayed excerpt.",
      "references": [
        {
          "label": "sacred-texts.com - om16",
          "url": "https://sacred-texts.com/pac/om/om16.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - om16",
        "url": "https://sacred-texts.com/pac/om/om16.htm"
      }
    ],
    "translations": entryTranslations["myth-067-mandaya-flood"]
  },
  {
    "id": "myth-068-kabigat-deluge-variant",
    "title": "68. Kabigat Deluge Variant",
    "subtitle": "Ifugao of Kiangan",
    "text": "Dixon notes a Kiangan Ifugao flood account in which Kabigat, first son of Wigan, goes hunting and complains that the earth is too level because he…",
    "date": "Summarized in Dixon's 1916 review from older ethnographic sources.",
    "latitude": 16.78,
    "longitude": 121.08,
    "region": "Asia",
    "details": {
      "classification": "Ifugao of Kiangan",
      "geographicLocation": "Ancient Ifugao highlands; modern Kiangan / Ifugao, northern Luzon, Philippines.",
      "mapPlacement": "Approx. 16.78, 121.08. Marker inferred from Kiangan.",
      "narrative": "Dixon notes a Kiangan Ifugao flood account in which Kabigat, first son of Wigan, goes hunting and complains that the earth is too level because he cannot hear his dogs. The father causes great changes linked to flood and topographic re-formation. This is treated as a separate variant from previously included Wigan-Bugan material, but the accessible summary is brief.",
      "chronology": "Summarized in Dixon's 1916 review from older ethnographic sources.",
      "evidence": "Evidence: Ifugao lands are steep, landslide-prone, and shaped by intense monsoon hydrology. Speculation/Debate: because the citation is a synthesis, not the full original field text, this variant should be used cautiously.",
      "references": [
        {
          "label": "sacred-texts.com - om16",
          "url": "https://sacred-texts.com/pac/om/om16.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - om16",
        "url": "https://sacred-texts.com/pac/om/om16.htm"
      }
    ],
    "translations": entryTranslations["myth-068-kabigat-deluge-variant"]
  },
  {
    "id": "myth-069-tinguian-kaboniyan-flood",
    "title": "69. Tinguian Kaboniyan Flood",
    "subtitle": "Tinguian",
    "text": "In a note attached to the Igorot flood story, Cole states that Tinguian tradition told of Kaboniyan sending a flood that covered all the land, after…",
    "date": "Published in Cole's 1916 volume.",
    "latitude": 17.57,
    "longitude": 120.73,
    "region": "Asia",
    "details": {
      "classification": "Tinguian",
      "geographicLocation": "Ancient northwestern Luzon; modern Abra and adjacent areas of Luzon, Philippines.",
      "mapPlacement": "Approx. 17.57, 120.73. Marker inferred from the Tinguian homeland.",
      "narrative": "In a note attached to the Igorot flood story, Cole states that Tinguian tradition told of Kaboniyan sending a flood that covered all the land, after which fire had to be recovered from bamboo, stones, and iron because it had nowhere to stay. The surviving-remnant motif is not preserved in the accessible note, so this is a weaker Noah parallel but still a rooted deluge tradition.",
      "chronology": "Published in Cole's 1916 volume.",
      "evidence": "Evidence: northwestern Luzon is a region of typhoon and river-flood hazards. Speculation/Debate: the accessible form is only a note, not a full narrative, so structure is incompletely recoverable.",
      "references": [
        {
          "label": "sites.pitt.edu - flood phil",
          "url": "https://sites.pitt.edu/~dash/flood-phil.html"
        },
        {
          "label": "sites.pitt.edu - philippines",
          "url": "https://sites.pitt.edu/~dash/philippines.html"
        }
      ]
    },
    "links": [
      {
        "label": "sites.pitt.edu - flood phil",
        "url": "https://sites.pitt.edu/~dash/flood-phil.html"
      },
      {
        "label": "sites.pitt.edu - philippines",
        "url": "https://sites.pitt.edu/~dash/philippines.html"
      }
    ],
    "translations": entryTranslations["myth-069-tinguian-kaboniyan-flood"]
  },
  {
    "id": "myth-070-great-storm-and-seven-storey-house",
    "title": "70. Great Storm and Seven-Storey House",
    "subtitle": "Yapese",
    "text": "In Dixon's Yapese summary, Magigi warns Kitimil that a great storm and sea flood will drown all the people of Yap.",
    "date": "Accessible English synthesis in Dixon 1916, drawing on earlier Micronesian material.",
    "latitude": 9.54,
    "longitude": 138.12,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "Yapese",
      "geographicLocation": "Ancient Yap; modern Yap State, Federated States of Micronesia.",
      "mapPlacement": "Approx. 9.54, 138.12. Marker inferred from Yap.",
      "narrative": "In Dixon's Yapese summary, Magigi warns Kitimil that a great storm and sea flood will drown all the people of Yap. They climb the highest mountain and build a pile-dwelling seven storeys high. As floodwaters rise, they ascend through the structure; when the waters continue upward, Magigi lays oil on a leaf on the water and the deluge abates. Another man survives by lashing himself to a canoe outrigger anchored to a great stone. Afterwards the surviving family repopulates the land. This is an exceptionally strong Noah-like pattern.",
      "chronology": "Accessible English synthesis in Dixon 1916, drawing on earlier Micronesian material.",
      "evidence": "Evidence: low islands and nearshore communities in Micronesia are highly exposed to storm surge and extreme wave events. Speculation/Debate: the source does not identify a specific datable event behind the story.",
      "references": [
        {
          "label": "sacred-texts.com - om21",
          "url": "https://sacred-texts.com/pac/om/om21.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - om21",
        "url": "https://sacred-texts.com/pac/om/om21.htm"
      }
    ],
    "translations": entryTranslations["myth-070-great-storm-and-seven-storey-house"]
  },
  {
    "id": "myth-071-old-woman-on-a-raft",
    "title": "71. Old Woman on a Raft",
    "subtitle": "Palauan",
    "text": "In the Pelew version summarized by Dixon, a flood is unleashed in revenge by the allies of a slain minor deity.",
    "date": "Preserved in Dixon's 1916 synthesis from earlier Micronesian reports.",
    "latitude": 7.34,
    "longitude": 134.48,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "Palauan",
      "geographicLocation": "Ancient Palau / Pelew Group; modern Palau, western Micronesia.",
      "mapPlacement": "Approx. 7.34, 134.48. Marker inferred from Koror-Palau.",
      "narrative": "In the Pelew version summarized by Dixon, a flood is unleashed in revenge by the allies of a slain minor deity. Only one old woman is warned and told to take refuge on a raft. She does so, but the rope anchoring it is too short; the waters cover the raft and she dies, later becoming stone when her hair catches in a tree. This differs from Noah because the warned survivor fails to endure, but it preserves divine warning, raft refuge, overwhelming flood, and a landscape-etymology aftermath.",
      "chronology": "Preserved in Dixon's 1916 synthesis from earlier Micronesian reports.",
      "evidence": "Evidence: Palau's islands are vulnerable to storm surges and extreme marine inundation. Speculation/Debate: the moral and etiological framing makes one-to-one event correlation uncertain.",
      "references": [
        {
          "label": "sacred-texts.com - om21",
          "url": "https://sacred-texts.com/pac/om/om21.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - om21",
        "url": "https://sacred-texts.com/pac/om/om21.htm"
      }
    ],
    "translations": entryTranslations["myth-071-old-woman-on-a-raft"]
  },
  {
    "id": "myth-072-bigiri-bunari-flood-of-burning-oil",
    "title": "72. Bigiri-Bunari Flood of Burning Oil",
    "subtitle": "Hateruma Ryukyuan",
    "text": "Suzuki's study of Hateruma mythology describes a brother-sister founder myth in which the pair survive a flood that takes the form of a downpour of…",
    "date": "English-accessible scholarly article from 1977, studying oral tradition on Hateruma.",
    "latitude": 24.06,
    "longitude": 123.8,
    "region": "Asia",
    "details": {
      "classification": "Hateruma Ryukyuan",
      "geographicLocation": "Southern Ryukyu archipelago; modern Hateruma Island, Okinawa Prefecture, Japan.",
      "mapPlacement": "Approx. 24.06, 123.80. Marker placed on Hateruma Island.",
      "narrative": "Suzuki's study of Hateruma mythology describes a brother-sister founder myth in which the pair survive a flood that takes the form of a downpour of burning oil by sheltering in a cave, after which they become ancestor figures. This is not an ark story, but it clearly preserves catastrophic inundation, selected sibling survivors, refuge, and re-foundation of humanity.",
      "chronology": "English-accessible scholarly article from 1977, studying oral tradition on Hateruma.",
      "evidence": "Evidence: southern Ryukyu islands have a documented history of large historical and prehistoric tsunamis, including the 1771 Meiwa tsunami and older Holocene events. Speculation/Debate: the burning-oil feature may be symbolic; linking it directly to tsunami or fire phenomena remains speculative.",
      "references": [
        {
          "label": "jstage.jst.go.jp - en",
          "url": "https://www.jstage.jst.go.jp/article/minkennewseries/42/1/42_KJ00002403121/_article/-char/en"
        },
        {
          "label": "jstage.jst.go.jp - article",
          "url": "https://www.jstage.jst.go.jp/article/jgeography1889/103/4/103_4_352/_article"
        },
        {
          "label": "link.springer.com - s40645 020 00365 9",
          "url": "https://link.springer.com/article/10.1186/s40645-020-00365-9"
        }
      ]
    },
    "links": [
      {
        "label": "jstage.jst.go.jp - en",
        "url": "https://www.jstage.jst.go.jp/article/minkennewseries/42/1/42_KJ00002403121/_article/-char/en"
      },
      {
        "label": "jstage.jst.go.jp - article",
        "url": "https://www.jstage.jst.go.jp/article/jgeography1889/103/4/103_4_352/_article"
      },
      {
        "label": "link.springer.com - s40645 020 00365 9",
        "url": "https://link.springer.com/article/10.1186/s40645-020-00365-9"
      }
    ],
    "translations": entryTranslations["myth-072-bigiri-bunari-flood-of-burning-oil"]
  },
  {
    "id": "myth-073-parawhenuamea",
    "title": "73. Parawhenuamea",
    "subtitle": "Māori",
    "text": "In Te Rangi Hiroa's summary of the flood known as Parawhenuamea, wickedness spreads, faithful adherents of Tane build a raft, the rains come, water…",
    "date": "Extant published form highlighted here derives from nineteenth-century Māori literary recording and was discussed by Te Rangi Hiroa in 1949.",
    "latitude": -39,
    "longitude": 175,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "Māori",
      "geographicLocation": "Aotearoa New Zealand; the nineteenth-century literary version circulated broadly and is associated with Māori traditional history rather than one fixed flood site.",
      "mapPlacement": "Approx. -39.00, 175.00. Central New Zealand marker because the tradition is literary and geographically diffuse in surviving publication.",
      "narrative": "In Te Rangi Hiroa's summary of the flood known as Parawhenuamea, wickedness spreads, faithful adherents of Tane build a raft, the rains come, water rises, and the raft drifts until the flood subsides; the survivors give thanks and the land is repopulated. This is one of the strongest formal Noah parallels in Polynesia.",
      "chronology": "Extant published form highlighted here derives from nineteenth-century Māori literary recording and was discussed by Te Rangi Hiroa in 1949.",
      "evidence": "Evidence: New Zealand traditions preserve memories of floods and water catastrophes in many local contexts. Speculation/Debate: modern scholarship has long noted probable missionary reshaping in the nineteenth-century form of Parawhenuamea.",
      "references": [
        {
          "label": "digitalnz.org - the flood the coming of the maori",
          "url": "https://digitalnz.org/records/32164141/the-flood-the-coming-of-the-maori"
        },
        {
          "label": "researchgate.net - 315918826 Discovery Myths of New Zealand Some Cultural Histo",
          "url": "https://www.researchgate.net/publication/315918826_Discovery_Myths_of_New_Zealand_Some_Cultural_Historical_and_Philosophical_Perspectives"
        },
        {
          "label": "tandfonline.com - 0015587X.1971.9716717",
          "url": "https://www.tandfonline.com/doi/abs/10.1080/0015587X.1971.9716717"
        }
      ]
    },
    "links": [
      {
        "label": "digitalnz.org - the flood the coming of the maori",
        "url": "https://digitalnz.org/records/32164141/the-flood-the-coming-of-the-maori"
      },
      {
        "label": "researchgate.net - 315918826 Discovery Myths of New Zealand Some Cultural Histo",
        "url": "https://www.researchgate.net/publication/315918826_Discovery_Myths_of_New_Zealand_Some_Cultural_Historical_and_Philosophical_Perspectives"
      },
      {
        "label": "tandfonline.com - 0015587X.1971.9716717",
        "url": "https://www.tandfonline.com/doi/abs/10.1080/0015587X.1971.9716717"
      }
    ],
    "translations": entryTranslations["myth-073-parawhenuamea"]
  },
  {
    "id": "myth-074-tohe-tika-flood-tree-myth",
    "title": "74. Tohe-tika Flood-Tree Myth",
    "subtitle": "Marquesan",
    "text": "Beckwith notes a Marquesan flood-tree myth in which Tohe-tika causes rain, washes away a restraining tree, and drowns all the people.",
    "date": "Literary summary appears in Beckwith's Hawaiian Mythology and later comparative discussion; the tradition is Polynesian and orally older.",
    "latitude": -9.78,
    "longitude": -139.03,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "Marquesan",
      "geographicLocation": "Ancient Marquesas Islands; modern French Polynesia.",
      "mapPlacement": "Approx. -9.78, -139.03. Marker placed in the Marquesas.",
      "narrative": "Beckwith notes a Marquesan flood-tree myth in which Tohe-tika causes rain, washes away a restraining tree, and drowns all the people. The myth is less detailed in extant one-paragraph summaries than many others in this batch, but it clearly frames flood as divine or supernatural vengeance destroying humankind.",
      "chronology": "Literary summary appears in Beckwith's Hawaiian Mythology and later comparative discussion; the tradition is Polynesian and orally older.",
      "evidence": "Evidence: Marquesan paleoenvironmental and climatic records show pronounced hydroclimatic variability affecting settlement and subsistence. Speculation/Debate: the accessible summary is too brief to support strong claims about direct memory of one event.",
      "references": [
        {
          "label": "sacred-texts.com - hm24",
          "url": "https://sacred-texts.com/pac/hm/hm24.htm"
        },
        {
          "label": "cambridge.org - 95372F2DA210C9DE8592A272E864B1B1",
          "url": "https://www.cambridge.org/core/journals/antiquity/article/oscillating-climate-and-sociopolitical-process-the-case-of-the-marquesan-chiefdom-polynesia/95372F2DA210C9DE8592A272E864B1B1"
        },
        {
          "label": "journals.sagepub.com - 0959683610385726",
          "url": "https://journals.sagepub.com/doi/10.1177/0959683610385726"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - hm24",
        "url": "https://sacred-texts.com/pac/hm/hm24.htm"
      },
      {
        "label": "cambridge.org - 95372F2DA210C9DE8592A272E864B1B1",
        "url": "https://www.cambridge.org/core/journals/antiquity/article/oscillating-climate-and-sociopolitical-process-the-case-of-the-marquesan-chiefdom-polynesia/95372F2DA210C9DE8592A272E864B1B1"
      },
      {
        "label": "journals.sagepub.com - 0959683610385726",
        "url": "https://journals.sagepub.com/doi/10.1177/0959683610385726"
      }
    ],
    "translations": entryTranslations["myth-074-tohe-tika-flood-tree-myth"]
  },
  {
    "id": "myth-075-murray-hume-deluge",
    "title": "75. Murray-Hume Deluge",
    "subtitle": "Southeastern Aboriginal tradition",
    "text": "Peck reports a southeastern Aboriginal deluge tradition in which a very large extent of country is covered by water and all are drowned except two…",
    "date": "Published in the early twentieth-century collection Australian Legends, based on older oral material as reported by the collector.",
    "latitude": -36.95,
    "longitude": 147.2,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "Southeastern Aboriginal tradition",
      "geographicLocation": "Headwaters of the Murray / Hume River; modern Australian Alps region of southeastern Australia.",
      "mapPlacement": "Approx. -36.95, 147.20. Marker placed near the upper Murray basin named in the source.",
      "narrative": "Peck reports a southeastern Aboriginal deluge tradition in which a very large extent of country is covered by water and all are drowned except two people, from whom a separate human race later descends. The source explicitly notes that Indigenous narrators did not describe a world-covering event on biblical scale, only a huge regional submergence. This is a survivor-and-renewal deluge tradition, but the printed presentation openly compares it to Noah, requiring caution about contamination.",
      "chronology": "Published in the early twentieth-century collection Australian Legends, based on older oral material as reported by the collector.",
      "evidence": "Evidence: southeastern Australia experienced major Holocene coastal and riverine change, and Aboriginal traditions elsewhere have been compared with deep-time sea-level memory. Speculation/Debate: the text is mediated through a non-Indigenous collector and framed in explicit comparison with Noah.",
      "references": [
        {
          "label": "sacred-texts.com - peck07",
          "url": "https://sacred-texts.com/aus/peck/peck07.htm"
        },
        {
          "label": "sacred-texts.com - index",
          "url": "https://sacred-texts.com/aus/index.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - peck07",
        "url": "https://sacred-texts.com/aus/peck/peck07.htm"
      },
      {
        "label": "sacred-texts.com - index",
        "url": "https://sacred-texts.com/aus/index.htm"
      }
    ],
    "translations": entryTranslations["myth-075-murray-hume-deluge"]
  },
  {
    "id": "myth-076-a-legend-of-the-great-flood",
    "title": "76. A Legend of the Great Flood",
    "subtitle": "Southeastern Aboriginal tradition",
    "text": "This narrative begins with drought, then a dramatic release of waters that produces a great flood.",
    "date": "Printed in W. J. Thomas's 1923 collection. Sacred Texts warns that some early Australian publications are vague, mediated, or partly unreliable and should be treated as starting points rather than definitive ethnography.",
    "latitude": -34.5,
    "longitude": 149.5,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "Southeastern Aboriginal tradition",
      "geographicLocation": "Southeastern Australia; the accessible source does not identify the exact community in the excerpt.",
      "mapPlacement": "Approx. -34.50, 149.50. Coordinate is uncertain because the source excerpt is geographically nonspecific.",
      "narrative": "This narrative begins with drought, then a dramatic release of waters that produces a great flood. The accessible excerpt emphasizes collective catastrophe and creature agency more than a Noah-like chosen family in a vessel. It is included as a lower-confidence parallel because it is plainly a deluge tradition but not among the strongest Noah analogues.",
      "chronology": "Printed in W. J. Thomas's 1923 collection. Sacred Texts warns that some early Australian publications are vague, mediated, or partly unreliable and should be treated as starting points rather than definitive ethnography.",
      "evidence": "Evidence: southeastern Australia has long histories of drought-flood oscillation and landscape change. Speculation/Debate: because the publication context is weak and exact community unclear, this entry is notably tentative.",
      "references": [
        {
          "label": "sacred-texts.com - index",
          "url": "https://sacred-texts.com/aus/mla/index.htm"
        },
        {
          "label": "sacred-texts.com - mla09",
          "url": "https://sacred-texts.com/aus/mla/mla09.htm"
        },
        {
          "label": "sacred-texts.com - index",
          "url": "https://sacred-texts.com/aus/index.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - index",
        "url": "https://sacred-texts.com/aus/mla/index.htm"
      },
      {
        "label": "sacred-texts.com - mla09",
        "url": "https://sacred-texts.com/aus/mla/mla09.htm"
      },
      {
        "label": "sacred-texts.com - index",
        "url": "https://sacred-texts.com/aus/index.htm"
      }
    ],
    "translations": entryTranslations["myth-076-a-legend-of-the-great-flood"]
  },
  {
    "id": "myth-077-raudalo-stops-the-flood",
    "title": "77. Raudalo Stops the Flood",
    "subtitle": "British New Guinea tradition",
    "text": "A great flood rises, people and animals flee to the top of Tauaga, the highest mountain, and fear they will all be covered.",
    "date": "Preserved in Dixon's 1916 synthesis of Melanesian mythology from earlier reports.",
    "latitude": -9.75,
    "longitude": 150.82,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "British New Guinea tradition",
      "geographicLocation": "Papua region; precise community is not given in the accessible excerpt, but the story is placed in British New Guinea and centers on Mount Tauaga.",
      "mapPlacement": "Approx. -9.75, 150.82. Uncertain southeast Papua marker rather than a fixed site.",
      "narrative": "A great flood rises, people and animals flee to the top of Tauaga, the highest mountain, and fear they will all be covered. The snake king Raudalo does not fear; when the waters finally reach him, he touches them with his tongue and drives the flood back down the mountain to the sea. The story lacks an ark but strongly preserves catastrophic flood, mountain refuge, survival of a remnant, and restoration of ordinary order.",
      "chronology": "Preserved in Dixon's 1916 synthesis of Melanesian mythology from earlier reports.",
      "evidence": "Evidence: Papua New Guinea is exposed to extreme rainfall, flash flooding, landslides, and tectonic disturbance. Speculation/Debate: the synopsis does not identify one datable flood event or exact original ethnographic source in the displayed excerpt.",
      "references": [
        {
          "label": "sacred-texts.com - om11",
          "url": "https://sacred-texts.com/pac/om/om11.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - om11",
        "url": "https://sacred-texts.com/pac/om/om11.htm"
      }
    ],
    "translations": entryTranslations["myth-077-raudalo-stops-the-flood"]
  },
  {
    "id": "myth-078-abaia-eel-flood",
    "title": "78. Abaia Eel Flood",
    "subtitle": "British New Guinea tradition",
    "text": "A man discovers a fish-filled lake, and villagers catch many fish despite the presence of the magical eel Abaia at the bottom.",
    "date": "Preserved in Dixon's 1916 summary of earlier Papuan materials.",
    "latitude": -9.75,
    "longitude": 150.82,
    "region": "Oceania / Pacific",
    "details": {
      "classification": "British New Guinea tradition",
      "geographicLocation": "Papua region; exact local attribution is uncertain in the displayed summary.",
      "mapPlacement": "Approx. -9.75, 150.82. Uncertain regional marker.",
      "narrative": "A man discovers a fish-filled lake, and villagers catch many fish despite the presence of the magical eel Abaia at the bottom. Abaia becomes angry, sends a great rain, and the waters rise until everyone is drowned except an old woman who had not eaten the fish and saves herself in a tree. This is a destruction-and-selected-survivor flood myth with moral logic, though it lacks a Noah-like vessel.",
      "chronology": "Preserved in Dixon's 1916 summary of earlier Papuan materials.",
      "evidence": "Evidence: Papua New Guinea's environment makes flood catastrophe a realistic repeated experience. Speculation/Debate: the old-woman-in-tree motif is not an ark motif; inclusion rests on catastrophic flood and sole-survivor structure.",
      "references": [
        {
          "label": "Sacred Texts - Oceanic Mythology, British New Guinea",
          "url": "https://sacred-texts.com/pac/om/om11.htm"
        }
      ]
    },
    "links": [
      {
        "label": "Sacred Texts - Oceanic Mythology, British New Guinea",
        "url": "https://sacred-texts.com/pac/om/om11.htm"
      }
    ],
    "translations": entryTranslations["myth-078-abaia-eel-flood"]
  },
  {
    "id": "myth-079-probable-creation-and-flood-myth",
    "title": "79. Probable Creation- and Flood-Myth",
    "subtitle": "Portuguese East Africa tradition",
    "text": "The accessible Brill record confirms a scholarly article devoted specifically to a probable creation-and-flood myth from Portuguese East Africa.",
    "date": "Article published in Numen in 1957; the oral tradition it analyzes is older, but exact date and field context are not recoverable from brief metadata alone.",
    "latitude": -24,
    "longitude": 35,
    "region": "Africa",
    "details": {
      "classification": "Portuguese East Africa tradition",
      "geographicLocation": "Mozambique region under Portuguese East Africa; the brief metadata visible in the cited source does not identify the group in the accessible excerpt.",
      "mapPlacement": "Approx. -24.00, 35.00. Broad regional marker because available metadata are imprecise.",
      "narrative": "The accessible Brill record confirms a scholarly article devoted specifically to a probable creation-and-flood myth from Portuguese East Africa. Because only metadata, not the article text, was available in the research record, narrative details cannot be responsibly reconstructed beyond that scope. It is included because it is a clearly identified African flood-myth case in peer-reviewed literature, but it is one of the least complete entries.",
      "chronology": "Article published in Numen in 1957; the oral tradition it analyzes is older, but exact date and field context are not recoverable from brief metadata alone.",
      "evidence": "Evidence: the article title itself indicates scholarly treatment as a creation-flood myth. Speculation/Debate: without article text, direct evidence and speculation cannot be distinguished further; use cautiously until the full article is checked.",
      "references": [
        {
          "label": "brill.com - article p232 15",
          "url": "https://brill.com/view/journals/nu/4/1/article-p232_15.pdf"
        }
      ]
    },
    "links": [
      {
        "label": "brill.com - article p232 15",
        "url": "https://brill.com/view/journals/nu/4/1/article-p232_15.pdf"
      }
    ],
    "translations": entryTranslations["myth-079-probable-creation-and-flood-myth"]
  },
  {
    "id": "myth-080-sea-dyak-serpent-flood",
    "title": "80. Sea Dyak Serpent Flood",
    "subtitle": "Iban / Sea Dyak",
    "text": "Dixon notes an Iban / Sea Dyak flood tale in which, near harvest time, fields are mysteriously despoiled and a huge serpent becomes central to the…",
    "date": "Summarized in Dixon 1916 from earlier Indonesian and Bornean ethnographic reports.",
    "latitude": 1.55,
    "longitude": 110.34,
    "region": "Asia",
    "details": {
      "classification": "Iban / Sea Dyak",
      "geographicLocation": "Ancient Sarawak riverine Borneo; modern Sarawak, Malaysia.",
      "mapPlacement": "Approx. 1.55, 110.34. Marker inferred from Sarawak Iban homeland.",
      "narrative": "Dixon notes an Iban / Sea Dyak flood tale in which, near harvest time, fields are mysteriously despoiled and a huge serpent becomes central to the ensuing catastrophe. The web-accessible excerpt truncates the full story before the end of the flood episode, so the complete vessel/survivor structure is not recoverable here. It is included as a historically rooted deluge tradition from Borneo, with strong caution about incomplete detail.",
      "chronology": "Summarized in Dixon 1916 from earlier Indonesian and Bornean ethnographic reports.",
      "evidence": "Evidence: Borneo's great river systems and monsoon climate make major inundations frequent environmental realities. Speculation/Debate: because the accessible excerpt truncates the end of the account, this is one of the least complete entries in the current batch.",
      "references": [
        {
          "label": "sacred-texts.com - om16",
          "url": "https://sacred-texts.com/pac/om/om16.htm"
        }
      ]
    },
    "links": [
      {
        "label": "sacred-texts.com - om16",
        "url": "https://sacred-texts.com/pac/om/om16.htm"
      }
    ],
    "translations": entryTranslations["myth-080-sea-dyak-serpent-flood"]
  },
  {
    "id": "myth-081-cherokee-deluge",
    "title": "81. Cherokee deluge",
    "subtitle": "Cherokee",
    "text": "A man's dog repeatedly watches the river and howls.",
    "date": "Earliest reviewed print witness: 1900, in James Mooney's Myths of the Cherokee, based on late-19th-century Bureau of American Ethnology work. The tradition is older and oral; 1900 is the earliest clearly identifiable recording in the reviewed evidence.",
    "latitude": 35.6,
    "longitude": -83.5,
    "region": "North America",
    "details": {
      "classification": "Cherokee",
      "geographicLocation": "Ancient region: southern Appalachian Cherokee country. Modern-day equivalent: eastern Tennessee, western North Carolina, and adjacent Georgia and South Carolina, United States. Brief description: a mountain-and-river homeland in the southern Appalachians.",
      "mapPlacement": "Approximate marker: 35.6, -83.5. This is a homeland marker in the traditional southern Appalachian Cherokee zone, not a claimed flood-landing site.",
      "narrative": "A man's dog repeatedly watches the river and howls. When the man finally asks why, the dog warns that a vast freshet is coming and tells him to build a raft. The man takes his family and provisions aboard. Long rain follows, the waters cover the mountains, and all other people drown. When the water falls, the family disembarks; later the man hears the ghosts of the drowned dancing among their bones. The story preserves warning, chosen survivors, raft survival, and post-flood continuation of life, though not animal preservation in Noah's sense.",
      "chronology": "Earliest reviewed print witness: 1900, in James Mooney's Myths of the Cherokee, based on late-19th-century Bureau of American Ethnology work. The tradition is older and oral; 1900 is the earliest clearly identifiable recording in the reviewed evidence.",
      "evidence": "Evidence: A primary ethnographic recording exists in Mooney's 1900 collection, and the myth belongs to a people whose historical homeland lay in flood-prone Appalachian river systems. Speculation/Debate: No reviewed peer-reviewed study was located that securely ties this Cherokee story to one specific prehistoric flood event; treating it as memory of a single datable catastrophe would therefore be speculative.",
      "references": [
        {
          "label": "Sacred Texts - The Deluge, Myths of the Cherokee",
          "url": "https://sacred-texts.com/nam/cher/motc/motc014.htm"
        },
        {
          "label": "Sacred Texts - Myths of the Cherokee index",
          "url": "https://www.sacred-texts.com/nam/cher/motc/index.htm"
        },
        {
          "label": "britannica.com - Cherokee people",
          "url": "https://www.britannica.com/topic/Cherokee-people"
        }
      ]
    },
    "links": [
      {
        "label": "Sacred Texts - The Deluge, Myths of the Cherokee",
        "url": "https://sacred-texts.com/nam/cher/motc/motc014.htm"
      },
      {
        "label": "Sacred Texts - Myths of the Cherokee index",
        "url": "https://www.sacred-texts.com/nam/cher/motc/index.htm"
      },
      {
        "label": "britannica.com - Cherokee people",
        "url": "https://www.britannica.com/topic/Cherokee-people"
      }
    ],
    "translations": entryTranslations["myth-081-cherokee-deluge"]
  },
  {
    "id": "myth-082-marerewana-and-the-flood",
    "title": "82. Marerewana and the flood",
    "subtitle": "Lokono Arawak",
    "text": "Aiomun Kondi, disgusted by human wickedness, destroys an earlier world by fire and then sends a flood against the next.",
    "date": "Earliest clearly identifiable reviewed witnesses: W. H. Brett's 1868 and 1880 Guiana works. Frazer's 1919 treatment is later. This gives the story a firm 19th-century ethnographic print presence, though the tradition itself is oral and older.",
    "latitude": 7,
    "longitude": -58.7,
    "region": "South America",
    "details": {
      "classification": "Lokono Arawak",
      "geographicLocation": "Ancient region: Arawak/Lokono riverine and coastal Guiana. Modern-day equivalent: chiefly coastal and riverine Guyana, with related populations in Suriname, French Guiana, and Venezuela. Brief description: lowland tropical river country on the northern shoulder of South America.",
      "mapPlacement": "Approximate marker: 7.0, -58.7. This marks the Arawak/Lokono zone of coastal-riverine Guyana; the exact myth locality is uncertain in the reviewed summaries.",
      "narrative": "Aiomun Kondi, disgusted by human wickedness, destroys an earlier world by fire and then sends a flood against the next. The wise chief Marerewana receives warning, saves himself and his family in a large canoe, and moors it with bush-rope to a great tree so that they will not drift far from home. After the waters recede, they survive into a renewed human world. The overlap with Noah is strong in divine judgment, warning, chosen family survivors, vessel, and post-flood continuation, though animals are not central in the reviewed version.",
      "chronology": "Earliest clearly identifiable reviewed witnesses: W. H. Brett's 1868 and 1880 Guiana works. Frazer's 1919 treatment is later. This gives the story a firm 19th-century ethnographic print presence, though the tradition itself is oral and older.",
      "evidence": "Evidence: The story is preserved in 19th-century missionary-ethnographic literature among the Arawaks of Guiana, a region deeply defined by rivers and recurrent flooding. Speculation/Debate: No reviewed archaeological or geological study was found that securely links Marerewana's flood to one specific event. Later retellings sometimes sharpen the resemblance to Noah, so one-to-one historical claims should be treated cautiously.",
      "references": [
        {
          "label": "Open Library - The Indian Tribes of Guiana",
          "url": "https://openlibrary.org/books/OL23523729M/The_Indian_tribes_of_Guiana"
        },
        {
          "label": "Google Books - Legends and Myths of the Aboriginal Indians",
          "url": "https://books.google.com/books/about/Legends_and_Myths_of_the_Aboriginal_Indi.html?id=Q-EdAAAAMAAJ"
        },
        {
          "label": "Flood Folklore - Arawak",
          "url": "https://www.curioustaxonomy.net/home/FloodMyths/24SANo/arawak.html"
        },
        {
          "label": "Britannica - Arawak",
          "url": "https://www.britannica.com/topic/Arawak"
        },
        {
          "label": "britannica.com - People",
          "url": "https://www.britannica.com/place/Guyana/People"
        }
      ]
    },
    "links": [
      {
        "label": "Open Library - The Indian Tribes of Guiana",
        "url": "https://openlibrary.org/books/OL23523729M/The_Indian_tribes_of_Guiana"
      },
      {
        "label": "Google Books - Legends and Myths of the Aboriginal Indians",
        "url": "https://books.google.com/books/about/Legends_and_Myths_of_the_Aboriginal_Indi.html?id=Q-EdAAAAMAAJ"
      },
      {
        "label": "Flood Folklore - Arawak",
        "url": "https://www.curioustaxonomy.net/home/FloodMyths/24SANo/arawak.html"
      }
    ],
    "translations": entryTranslations["myth-082-marerewana-and-the-flood"]
  },
  {
    "id": "myth-083-lisu-gourd-flood",
    "title": "83. Lisu gourd flood",
    "subtitle": "Lisu",
    "text": "A pair of golden birds warns an orphaned brother and sister that a gigantic wave and destroying flood are coming.",
    "date": "The exact first collection remains uncertain in the reviewed online evidence, but the story is clearly in comparative print by the early 20th century and remains embedded in recent Lisu ritual studies. Cautious dating: at least by the early 1900s in print, and still active in ritual narrative today.",
    "latitude": 26.6,
    "longitude": 99.2,
    "region": "Asia",
    "details": {
      "classification": "Lisu",
      "geographicLocation": "Ancient region: the upper Salween-Nujiang and neighboring highlands. Modern-day equivalent: northwestern Yunnan in China, with related Lisu populations in Myanmar and northern Thailand. Brief description: steep mountain valleys on the eastern Himalayan margin.",
      "mapPlacement": "Approximate marker: 26.6, 99.2. This is a homeland marker in Nujiang/Lisu country, not a claimed landing point of the gourd.",
      "narrative": "A pair of golden birds warns an orphaned brother and sister that a gigantic wave and destroying flood are coming. They take refuge inside a great gourd. Torrential rain then washes away the world. After a long interval they hear the birds again, emerge on a mountain, and become the surviving ancestors of renewed humanity. The Noah-like overlap is unusually strong: warning, selected survivors, a vessel-like refuge, destruction of others, and post-flood renewal.",
      "chronology": "The exact first collection remains uncertain in the reviewed online evidence, but the story is clearly in comparative print by the early 20th century and remains embedded in recent Lisu ritual studies. Cautious dating: at least by the early 1900s in print, and still active in ritual narrative today.",
      "evidence": "Evidence: Recent scholarship treats the sibling-in-gourd flood as a significant Lisu origin narrative, showing that it is part of ritual and mythic structure rather than a casual anecdote. Regional geological research also documents repeated ancient mega-floods in western Yunnan. Speculation/Debate: The existence of mega-floods in western Yunnan does not by itself prove that this myth records one particular event; no reviewed study was found making that specific identification.",
      "references": [
        {
          "label": "Britannica - Lisu",
          "url": "https://www.britannica.com/topic/Lisu"
        },
        {
          "label": "ResearchGate - Lisu Ni ED i ritual study",
          "url": "https://www.researchgate.net/publication/394156054_Exploring_oral_traditions_and_divine_spatial_narratives_The_Ni%27EDi_ritual_among_the_Lisu_ethnic_group_in_Lijiang_China"
        },
        {
          "label": "MDPI Religions - Western Yunnan sacred narratives",
          "url": "https://www.mdpi.com/2077-1444/15/3/382"
        },
        {
          "label": "nature.com - s41598 026 46783 5",
          "url": "https://www.nature.com/articles/s41598-026-46783-5"
        }
      ]
    },
    "links": [
      {
        "label": "Britannica - Lisu",
        "url": "https://www.britannica.com/topic/Lisu"
      },
      {
        "label": "ResearchGate - Lisu Ni ED i ritual study",
        "url": "https://www.researchgate.net/publication/394156054_Exploring_oral_traditions_and_divine_spatial_narratives_The_Ni%27EDi_ritual_among_the_Lisu_ethnic_group_in_Lijiang_China"
      },
      {
        "label": "MDPI Religions - Western Yunnan sacred narratives",
        "url": "https://www.mdpi.com/2077-1444/15/3/382"
      }
    ],
    "translations": entryTranslations["myth-083-lisu-gourd-flood"]
  },
  {
    "id": "myth-084-pawpaw-nan-chaung-and-chang-hko",
    "title": "84. Pawpaw Nan-chaung and Chang-hko",
    "subtitle": "Singpho",
    "text": "When the deluge comes, brother and sister survivors - Pawpaw Nan-chaung and Chang-hko - escape in a large boat.",
    "date": "Earliest directly reviewable witness: presence in Frazer's 1919 comparative material. That does not date the oral tradition itself; it only provides a secure at-least-by-1919 print anchor.",
    "latitude": 27.5,
    "longitude": 96.3,
    "region": "Asia",
    "details": {
      "classification": "Singpho / Chingpaw, within the wider Jinghpaw-Kachin sphere",
      "geographicLocation": "Ancient region: upper Burma and the Assam-Arunachal-Kachin frontier. Modern-day equivalent: Kachin State in Myanmar and neighboring parts of Arunachal Pradesh and Assam in India. Brief description: upland river systems along the upper Irrawaddy and adjoining frontier hills.",
      "mapPlacement": "Approximate marker: 27.5, 96.3. This is an inferred marker in the Upper Burma/Kachin-Singpho zone; the reviewed flood summary does not provide a more exact site.",
      "narrative": "When the deluge comes, brother and sister survivors - Pawpaw Nan-chaung and Chang-hko - escape in a large boat. They carry nine cocks and nine needles, throwing out one of each each day to test whether the water has fallen; on the ninth day the cock crows and the needle strikes bottom. They later reach a cave and, through an etiological sequel, become ancestors of later peoples. This is one of the closest Noah parallels in the batch because it includes catastrophic flood, tiny chosen remnant, boat, a repeated test for dry land, and ethnogenic aftermath.",
      "chronology": "Earliest directly reviewable witness: presence in Frazer's 1919 comparative material. That does not date the oral tradition itself; it only provides a secure at-least-by-1919 print anchor.",
      "evidence": "Evidence: The narrative belongs to a historically well-documented Singpho/Jinghpaw cultural sphere extending across today's Myanmar-India frontier. Speculation/Debate: The exact source chain behind the 1919 comparative form was not fully recoverable in the reviewed online material, and no reviewed geological study was found linking this myth to one dated flood.",
      "references": [
        {
          "label": "Flood Folklore - Singpho/Chingpaw",
          "url": "https://www.curioustaxonomy.net/home/FloodMyths/07EaAs/singpho.html"
        },
        {
          "label": "Flood Folklore - Singpho alternate host",
          "url": "https://home.curioustaxonomy.net/FloodMyths/06CeAs/singpho.html"
        },
        {
          "label": "britannica.com - Kachin",
          "url": "https://www.britannica.com/topic/Kachin"
        }
      ]
    },
    "links": [
      {
        "label": "Flood Folklore - Singpho/Chingpaw",
        "url": "https://www.curioustaxonomy.net/home/FloodMyths/07EaAs/singpho.html"
      },
      {
        "label": "Flood Folklore - Singpho alternate host",
        "url": "https://home.curioustaxonomy.net/FloodMyths/06CeAs/singpho.html"
      },
      {
        "label": "britannica.com - Kachin",
        "url": "https://www.britannica.com/topic/Kachin"
      }
    ],
    "translations": entryTranslations["myth-084-pawpaw-nan-chaung-and-chang-hko"]
  },
  {
    "id": "myth-085-bhil-fish-box-deluge",
    "title": "85. Bhil fish-box deluge",
    "subtitle": "Bhil",
    "text": "A fish rewards a pious washerman by warning him that a great deluge is coming.",
    "date": "The exact first publication in the source chain remains uncertain in the reviewed online set, but the story is clearly in early-20th-century comparative circulation and is still discussed in recent folklore and anthropological writing.",
    "latitude": 22.9,
    "longitude": 74.6,
    "region": "Asia",
    "details": {
      "classification": "Bhil",
      "geographicLocation": "Ancient region: western-central Indian uplands. Modern-day equivalent: upland zones of Rajasthan, Gujarat, western Madhya Pradesh, and northern Maharashtra, India. Brief description: rugged hill country and forest margins across western India.",
      "mapPlacement": "Approximate marker: 22.9, 74.6. This is a representative marker in the Bhil belt of western Madhya Pradesh.",
      "narrative": "A fish rewards a pious washerman by warning him that a great deluge is coming. He enters a large box with his sister and a cock. After the flood, a messenger of Rama locates the box by the cock's crowing. The washerman is then compelled to repopulate the world with the woman who had been his sister; seven sons and seven daughters follow, and the first son becomes ancestor of the Bhils. Warning, chosen survivors, vessel, a bird-like signaling role for the cock, and post-flood repopulation are all explicit.",
      "chronology": "The exact first publication in the source chain remains uncertain in the reviewed online set, but the story is clearly in early-20th-century comparative circulation and is still discussed in recent folklore and anthropological writing.",
      "evidence": "Evidence: Recent folklore presentation and anthropological comparison treat the Bhil deluge as a meaningful tribal flood tradition rather than a modern invention. Speculation/Debate: Recent analysis argues that the Bhil version likely interacted with wider Hindu flood motifs. That makes the story historically rooted but textually entangled with broader South Asian deluge traditions. No reviewed geological study securely ties it to a specific physical flood.",
      "references": [
        {
          "label": "Britannica - Bhil",
          "url": "https://www.britannica.com/topic/Bhil"
        },
        {
          "label": "Centre for Contemporary Folklore - The Deluge, Madhya Pradesh",
          "url": "https://centreforcontemporaryfolklore.org/2024/08/14/the-deluge-madhya-pradesh/"
        },
        {
          "label": "ResearchGate - Analysis of Flood Myths",
          "url": "https://www.researchgate.net/publication/400479055_Yash_Goswami_ANALYSIS_OF_FLOOD_MYTHS_AMONG_GREAT_AND_LITTLE_TRADITIONS"
        },
        {
          "label": "talkorigins.org - flood myths",
          "url": "https://www.talkorigins.org/faqs/flood-myths.html"
        }
      ]
    },
    "links": [
      {
        "label": "Britannica - Bhil",
        "url": "https://www.britannica.com/topic/Bhil"
      },
      {
        "label": "Centre for Contemporary Folklore - The Deluge, Madhya Pradesh",
        "url": "https://centreforcontemporaryfolklore.org/2024/08/14/the-deluge-madhya-pradesh/"
      },
      {
        "label": "ResearchGate - Analysis of Flood Myths",
        "url": "https://www.researchgate.net/publication/400479055_Yash_Goswami_ANALYSIS_OF_FLOOD_MYTHS_AMONG_GREAT_AND_LITTLE_TRADITIONS"
      }
    ],
    "translations": entryTranslations["myth-085-bhil-fish-box-deluge"]
  },
  {
    "id": "myth-086-kamar-bamboo-box-deluge",
    "title": "86. Kamar bamboo-box deluge",
    "subtitle": "Kamar",
    "text": "In one Kamar form, a talking deer warns that long rain and a deluge are coming;",
    "date": "Earliest clearly identifiable reviewed scholarly witness: S. C. Dube's 1951 ethnography The Kamar.",
    "latitude": 20.65,
    "longitude": 82.14,
    "region": "Asia",
    "details": {
      "classification": "Kamar",
      "geographicLocation": "Ancient region: southeastern districts of the former Central Provinces. Modern-day equivalent: chiefly Chhattisgarh, India, especially forested hilly districts such as Dhamtari, Gariyaband, and nearby areas. Brief description: forest-hill interior of central India.",
      "mapPlacement": "Approximate marker: 20.65, 82.14. This is a representative marker in central Chhattisgarh for the Kamar homeland zone.",
      "narrative": "In one Kamar form, a talking deer warns that long rain and a deluge are coming; in another comparative summary, God sends the flood to destroy a jackal. Parents place a boy and girl with provisions inside a bamboo box or hollow wooden refuge. The flood destroys the world. After a long interval, divine birds or a crow discover the floating container, and the saved children become the stock from which later humanity - or specifically the Kamar and other social groups - develops. This is a strong Noah-like parallel because it combines warning, enclosed vessel, remnant survival, search by birds, and repopulation.",
      "chronology": "Earliest clearly identifiable reviewed scholarly witness: S. C. Dube's 1951 ethnography The Kamar.",
      "evidence": "Evidence: The myth is attested in a classic ethnographic monograph and in later oral-epic discussion from central India. Speculation/Debate: Recent discussions emphasize syncretism with wider Hindu motifs such as Mahadeo, cosmic destruction, and caste-origin narratives; no reviewed geological study securely connects the story to one datable flood event.",
      "references": [
        {
          "label": "Oxford Academic - The Kamar",
          "url": "https://academic.oup.com/book/7647"
        },
        {
          "label": "Oxford Academic - The Kamar, Introduction",
          "url": "https://academic.oup.com/book/7647/chapter/152681351"
        },
        {
          "label": "Glottolog - Dube 1951, The Kamar",
          "url": "https://glottolog.org/resource/reference/id/22151"
        },
        {
          "label": "researchgate.net - 363693392 Oral Epics of Kalahandi",
          "url": "https://www.researchgate.net/publication/363693392_Oral_Epics_of_Kalahandi"
        }
      ]
    },
    "links": [
      {
        "label": "Oxford Academic - The Kamar",
        "url": "https://academic.oup.com/book/7647"
      },
      {
        "label": "Oxford Academic - The Kamar, Introduction",
        "url": "https://academic.oup.com/book/7647/chapter/152681351"
      },
      {
        "label": "Glottolog - Dube 1951, The Kamar",
        "url": "https://glottolog.org/resource/reference/id/22151"
      }
    ],
    "translations": entryTranslations["myth-086-kamar-bamboo-box-deluge"]
  }
];
