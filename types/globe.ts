export type GlobeRegion = 
  | "Africa"
  | "Asia"
  | "Central America"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania"
  | "Mesopotamia";

export type SupportedLocale =
  | "es"
  | "pt-BR"
  | "it"
  | "fr"
  | "nl"
  | "de"
  | "ja"
  | "zh-CN"
  | "hi"
  | "ru";

export type AppLocale = "en" | SupportedLocale;

export type GlobeEntryTranslation = {
  title: string;
  subtitle: string;
  text: string;
  date: string;
  details?: {
    classification?: string;
    geographicLocation?: string;
    mapPlacement?: string;
    narrative?: string;
    chronology?: string;
    evidence?: string;
  };
};

export type GlobeEntry = {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  date: string;
  latitude: number;
  longitude: number;
  region: string;
  details?: {
    classification?: string;
    geographicLocation?: string;
    mapPlacement?: string;
    narrative?: string;
    chronology?: string;
    evidence?: string;
    references?: {
      label: string;
      url: string;
    }[];
  };
  links?: {
    label: string;
    url: string;
  }[];
  translations?: Partial<Record<SupportedLocale, Partial<GlobeEntryTranslation>>>;
};

export type LocalizedGlobeEntry = Omit<GlobeEntry, "translations">;

export const LOCALE_OPTIONS: Array<{ value: AppLocale; label: string }> = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "pt-BR", label: "Português (Brasil)" },
  { value: "it", label: "Italiano" },
  { value: "fr", label: "Français" },
  { value: "nl", label: "Nederlands" },
  { value: "de", label: "Deutsch" },
  { value: "ja", label: "日本語" },
  { value: "zh-CN", label: "中文（简体）" },
  { value: "hi", label: "हिन्दी" },
  { value: "ru", label: "Русский" },
];

export function localizeEntry(
  entry: GlobeEntry,
  locale: AppLocale,
): LocalizedGlobeEntry {
  const translation =
    locale === "en" ? undefined : entry.translations?.[locale];

  return {
    ...entry,
    title: translation?.title ?? entry.title,
    subtitle: translation?.subtitle ?? entry.subtitle,
    text: translation?.text ?? entry.text,
    date: translation?.date ?? entry.date,
    details: entry.details
      ? {
          ...entry.details,
          ...translation?.details,
          references: entry.details.references,
        }
      : translation?.details
        ? {
            ...translation.details,
          }
        : undefined,
  };
}

type LocalizedDetailLabels = {
  node: string;
  regionalMarker: string;
  markerNote: string;
  chronologyNote: string;
  evidenceNote: string;
};

const DETAIL_FALLBACK_LABELS: Record<AppLocale, LocalizedDetailLabels> = {
  en: {
    node: "knowledge node",
    regionalMarker: "Regional marker within",
    markerNote: "Approximate marker",
    chronologyNote:
      "Translated summary available; full research chronology has not been curated in this language yet.",
    evidenceNote:
      "This locale currently uses a localized summary fallback for the extended research notes. A fully curated detail translation can be added in a later batch.",
  },
  es: {
    node: "nodo de conocimiento",
    regionalMarker: "Marcador regional dentro de",
    markerNote: "Marcador aproximado",
    chronologyNote:
      "Hay un resumen traducido, pero la cronología completa de investigación aún no ha sido curada en este idioma.",
    evidenceNote:
      "Este idioma usa por ahora un resumen localizado para las notas ampliadas. Una traducción curada completa puede añadirse en un lote posterior.",
  },
  "pt-BR": {
    node: "nó de conhecimento",
    regionalMarker: "Marcador regional dentro de",
    markerNote: "Marcador aproximado",
    chronologyNote:
      "Há um resumo traduzido, mas a cronologia completa de pesquisa ainda não foi curada neste idioma.",
    evidenceNote:
      "Este idioma usa por enquanto um resumo localizado para as notas ampliadas. Uma tradução curada completa pode ser adicionada em um lote posterior.",
  },
  it: {
    node: "nodo di conoscenza",
    regionalMarker: "Marcatore regionale in",
    markerNote: "Marcatore approssimativo",
    chronologyNote:
      "È disponibile un riassunto tradotto, ma la cronologia di ricerca completa non è ancora stata curata in questa lingua.",
    evidenceNote:
      "Questa lingua usa per ora un riassunto localizzato per le note estese. Una traduzione completa e curata potrà essere aggiunta in un lotto successivo.",
  },
  fr: {
    node: "nœud de connaissance",
    regionalMarker: "Marqueur régional dans",
    markerNote: "Marqueur approximatif",
    chronologyNote:
      "Un résumé traduit est disponible, mais la chronologie de recherche complète n'a pas encore été préparée dans cette langue.",
    evidenceNote:
      "Cette langue utilise pour l'instant un résumé localisé pour les notes détaillées. Une traduction complète et éditée pourra être ajoutée dans un lot ultérieur.",
  },
  nl: {
    node: "kennisnode",
    regionalMarker: "Regionale marker binnen",
    markerNote: "Benaderende marker",
    chronologyNote:
      "Er is een vertaalde samenvatting beschikbaar, maar de volledige onderzoekschronologie is in deze taal nog niet uitgewerkt.",
    evidenceNote:
      "Deze taal gebruikt voorlopig een gelokaliseerde samenvatting voor de uitgebreide notities. Een volledig uitgewerkte detailvertaling kan in een latere batch worden toegevoegd.",
  },
  de: {
    node: "Wissensknoten",
    regionalMarker: "Regionaler Marker in",
    markerNote: "Ungefährer Marker",
    chronologyNote:
      "Eine übersetzte Zusammenfassung ist vorhanden, aber die vollständige Forschungschronologie wurde in dieser Sprache noch nicht ausgearbeitet.",
    evidenceNote:
      "Diese Sprache nutzt derzeit eine lokalisierte Zusammenfassung für die erweiterten Notizen. Eine vollständig kuratierte Detailübersetzung kann in einem späteren Batch ergänzt werden.",
  },
  ja: {
    node: "知識ノード",
    regionalMarker: "次の地域内の地域マーカー",
    markerNote: "概略位置",
    chronologyNote:
      "要約は翻訳済みですが、この言語向けの完全な研究年表はまだ整備されていません。",
    evidenceNote:
      "この言語では現在、拡張研究ノートにローカライズされた要約フォールバックを使用しています。完全な詳細翻訳は後続バッチで追加できます。",
  },
  "zh-CN": {
    node: "知识节点",
    regionalMarker: "位于以下区域内的区域标记",
    markerNote: "大致标记点",
    chronologyNote:
      "当前已有翻译摘要，但该语言的完整研究年表尚未整理完成。",
    evidenceNote:
      "该语言目前对扩展研究说明使用本地化摘要回退。完整的精校细节翻译可在后续批次中补充。",
  },
  hi: {
    node: "ज्ञान नोड",
    regionalMarker: "निम्न क्षेत्र के भीतर क्षेत्रीय चिह्न",
    markerNote: "अनुमानित चिह्न",
    chronologyNote:
      "अनूदित सार उपलब्ध है, लेकिन इस भाषा में पूर्ण शोध-कालक्रम अभी तैयार नहीं किया गया है।",
    evidenceNote:
      "इस भाषा में विस्तृत शोध-टिप्पणियों के लिए फिलहाल स्थानीयकृत सार-आधारित विकल्प उपयोग हो रहा है। पूर्ण संपादित विवरण-अनुवाद बाद की बैच में जोड़ा जा सकता है।",
  },
  ru: {
    node: "узел знаний",
    regionalMarker: "Региональная отметка в пределах",
    markerNote: "Приблизительная отметка",
    chronologyNote:
      "Переведённое краткое изложение уже доступно, но полная исследовательская хронология на этом языке пока не подготовлена.",
    evidenceNote:
      "Для этого языка пока используется локализованное краткое резюме расширенных примечаний. Полный выверенный перевод деталей можно добавить в следующем пакете.",
  },
};

export function buildLocalizedDetailFallback(
  entry: LocalizedGlobeEntry,
  locale: AppLocale,
) {
  const displayRegion = normalizeRegion(entry.region) ?? entry.region;
  const labels = DETAIL_FALLBACK_LABELS[locale];
  const latSuffix = entry.latitude >= 0 ? "N" : "S";
  const lonSuffix = entry.longitude >= 0 ? "E" : "W";

  return {
    classification: `${entry.subtitle} ${labels.node}`.trim(),
    geographicLocation: `${labels.regionalMarker} ${displayRegion}, near ${Math.abs(entry.latitude).toFixed(4)}° ${latSuffix} and ${Math.abs(entry.longitude).toFixed(4)}° ${lonSuffix}.`,
    mapPlacement: `${labels.markerNote}: ${entry.latitude.toFixed(4)}, ${entry.longitude.toFixed(4)}.`,
    narrative: entry.text,
    chronology: `${entry.date} ${labels.chronologyNote}`,
    evidence: labels.evidenceNote,
  };
}

export const REGIONS: Array<"All" | GlobeRegion> = [
  "All",
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "Central America",
  "South America",
  "Oceania",
  "Mesopotamia",
];

const REGION_ALIASES: Record<string, GlobeRegion> = {
  Africa: "Africa",
  Asia: "Asia",
  "Central America": "Central America",
  Europe: "Europe",
  Mesopotamia: "Mesopotamia",
  "Mesopotamia / Ancient Near East": "Mesopotamia",
  "Mesoamerica / Central America": "Central America",
  "North America": "North America",
  Oceania: "Oceania",
  "Oceania / Pacific": "Oceania",
  "South America": "South America",
};

export function normalizeRegion(region: string): GlobeRegion | null {
  return REGION_ALIASES[region] ?? null;
}
