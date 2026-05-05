import { GlobeEntry } from "@/types/globe";

function buildMockDetails(details: NonNullable<GlobeEntry["details"]>) {
  return details;
}

// Replace this mock dataset with your real source later.
// The globe reads any array that matches the GlobeEntry type below.
export const globeEntries: GlobeEntry[] = [
  {
    id: "new-york-relay",
    title: "Atlantic Relay Node",
    subtitle: "Transatlantic Signal Operations",
    text: "A high-density signal relay coordinating transatlantic traffic bursts and anomaly triage for the North Atlantic mesh.",
    date: "2026-03-14",
    latitude: 40.7128,
    longitude: -74.006,
    region: "North America",
    details: buildMockDetails({
      classification: "Urban relay complex and maritime data gateway.",
      geographicLocation:
        "Positioned in the northeastern United States, serving Atlantic shipping lanes, financial traffic corridors, and dense civic infrastructure networks.",
      mapPlacement:
        "Approximate marker: 40.7128, -74.0060. Visualized as a coastal signal hub on the eastern seaboard.",
      narrative:
        "Operators use this node as a fictional aggregation point for transatlantic signal bursts, anomaly routing, and rapid-response data exchange between civic and commercial systems.",
      chronology:
        "Mock record dated 2026-03-14. Intended as placeholder content for a modern infrastructure event or knowledge entry.",
      evidence:
        "Current text is illustrative only. Replace with project-specific operational logs, research summaries, or historical references as needed.",
      references: [
        { label: "Atlantic Relay Brief", url: "https://example.com/atlantic-relay-brief" },
        { label: "Port Network Survey", url: "https://example.com/port-network-survey" },
      ],
    }),
    links: [{ label: "Node Brief", url: "https://example.com/atlantic-relay-node" }],
  },
  {
    id: "san-francisco-orbit",
    title: "Pacific Interface Deck",
    subtitle: "Coastal Telemetry Exchange",
    text: "A west-coast observability hub aggregating maritime telemetry, low-latency uplinks, and coastal resilience reports.",
    date: "2026-01-22",
    latitude: 37.7749,
    longitude: -122.4194,
    region: "North America",
    details: buildMockDetails({
      classification: "Pacific edge observability and resilience node.",
      geographicLocation:
        "Located on the northern California coast, oriented toward maritime telemetry, earthquake-aware infrastructure, and high-bandwidth west-coast exchange routes.",
      mapPlacement:
        "Approximate marker: 37.7749, -122.4194. Placed on the Pacific rim as a coastal systems interface.",
      narrative:
        "This mock entry imagines a monitoring deck linking harbor movement, low-latency traffic, and regional resilience signals into a single west-coast command stream.",
      chronology:
        "Mock record dated 2026-01-22, representing a contemporary infrastructure snapshot.",
      evidence:
        "Placeholder descriptive material only. Replace with real datasets, archival references, or source-backed operational context.",
      references: [
        { label: "Pacific Interface Notes", url: "https://example.com/pacific-interface-notes" },
      ],
    }),
  },
  {
    id: "mexico-city-signal",
    title: "Meso Grid Exchange",
    subtitle: "Cross-Hemisphere Data Routing",
    text: "A cross-hemisphere data exchange serving civic monitoring, rapid-response coordination, and urban power forecasts.",
    date: "2026-02-11",
    latitude: 19.4326,
    longitude: -99.1332,
    region: "North America",
    details: buildMockDetails({
      classification: "High-altitude metropolitan exchange and coordination layer.",
      geographicLocation:
        "Anchored in central Mexico, within a major inland basin that connects civic systems, power usage monitoring, and regional transport corridors.",
      mapPlacement:
        "Approximate marker: 19.4326, -99.1332. Shown as an inland command node for the southern portion of North America.",
      narrative:
        "The entry stands in for a fictional urban exchange that watches mobility demand, grid stress, and interregional communications across a dense megacity environment.",
      chronology:
        "Mock record dated 2026-02-11. Useful as placeholder content until your real event chronology is ready.",
      evidence:
        "This filler summary is not source-backed and should later be replaced by project-specific evidence or curated citations.",
      references: [
        { label: "Meso Exchange Memo", url: "https://example.com/meso-exchange-memo" },
      ],
    }),
  },
  {
    id: "guatemala-city-link",
    title: "Isthmus Link Array",
    subtitle: "Volcanic Corridor Monitoring",
    text: "A regional coordination layer tracking volcanic activity, logistics corridors, and civic communications across the Central American isthmus.",
    date: "2026-02-18",
    latitude: 14.6349,
    longitude: -90.5069,
    region: "Central America",
    details: buildMockDetails({
      classification: "Central American volcanic corridor monitoring array.",
      geographicLocation:
        "Situated in the Guatemalan highlands, near major volcanic systems and overland logistics routes crossing the northern isthmus.",
      mapPlacement:
        "Approximate marker: 14.6349, -90.5069. Used as a regional anchor for the northern Central American corridor.",
      narrative:
        "This placeholder record imagines a signal array tasked with correlating volcanic alerts, freight movement, and civic communications through a mountainous landscape.",
      chronology:
        "Mock record dated 2026-02-18, written as a stand-in for a modern regional monitoring entry.",
      evidence:
        "The content is synthetic and intended only to populate the panel layout. Replace it with domain-specific notes when available.",
      references: [
        { label: "Isthmus Link Survey", url: "https://example.com/isthmus-link-survey" },
      ],
    }),
  },
  {
    id: "san-jose-signal",
    title: "Rainforest Signal Vault",
    subtitle: "Biodiversity and Grid Resilience",
    text: "A distributed observability node balancing biodiversity telemetry, grid resilience signals, and highland weather routing.",
    date: "2026-03-27",
    latitude: 9.9281,
    longitude: -84.0907,
    region: "Central America",
    details: buildMockDetails({
      classification: "Ecology-linked resilience and communications vault.",
      geographicLocation:
        "Centered in Costa Rica's central valley, bridging cloud-forest observation, hydroelectric infrastructure, and urban communications networks.",
      mapPlacement:
        "Approximate marker: 9.9281, -84.0907. Mapped within the southern stretch of Central America.",
      narrative:
        "In this mock scenario, the vault merges biodiversity telemetry, weather awareness, and civic continuity systems into a single protected archive-and-routing point.",
      chronology:
        "Mock record dated 2026-03-27. The date simply marks a placeholder update in the fictional dataset.",
      evidence:
        "No real source base is attached yet. Replace with environmental reporting, archival material, or curated references later.",
      references: [
        { label: "Rainforest Vault Report", url: "https://example.com/rainforest-vault-report" },
      ],
    }),
    links: [{ label: "Vault Report", url: "https://example.com/rainforest-signal-vault" }],
  },
  {
    id: "panama-canal-grid",
    title: "Canal Transit Grid",
    subtitle: "Interoceanic Logistics Intelligence",
    text: "A maritime intelligence mesh monitoring canal throughput, port synchronization, and interoceanic logistics pressure.",
    date: "2026-04-08",
    latitude: 8.9824,
    longitude: -79.5199,
    region: "Central America",
    details: buildMockDetails({
      classification: "Maritime throughput grid and canal logistics monitor.",
      geographicLocation:
        "Placed at the interoceanic canal zone, where Atlantic-Pacific shipping, customs timing, and port synchronisation converge.",
      mapPlacement:
        "Approximate marker: 8.9824, -79.5199. Shown near the canal as a strategic maritime chokepoint.",
      narrative:
        "The grid serves as a fictional panel-ready example of vessel flow analysis, timing pressure, and port-network coordination at a globally significant transit corridor.",
      chronology:
        "Mock record dated 2026-04-08 and intended as placeholder maritime intelligence content.",
      evidence:
        "Structured filler only. Replace with trade data, maritime studies, or archival notes relevant to your real project.",
      references: [
        { label: "Canal Transit Grid Dossier", url: "https://example.com/canal-transit-grid-dossier" },
      ],
    }),
  },
  {
    id: "bogota-spectrum",
    title: "Andean Spectrum Layer",
    subtitle: "Mountain Corridor Diagnostics",
    text: "A regional intelligence cluster synchronizing mountain weather feeds, air corridors, and infrastructure diagnostics.",
    date: "2026-04-03",
    latitude: 4.711,
    longitude: -74.0721,
    region: "South America",
    details: buildMockDetails({
      classification: "Highland spectrum layer for mountainous routing intelligence.",
      geographicLocation:
        "Located in the northern Andes, linking elevated air corridors, mountain weather forecasting, and urban-regional exchange systems.",
      mapPlacement:
        "Approximate marker: 4.7110, -74.0721. Rendered along the Andean corridor in northern South America.",
      narrative:
        "This filler record describes a synthetic high-altitude node coordinating topographic weather effects, transportation data, and regional infrastructure diagnostics.",
      chronology:
        "Mock record dated 2026-04-03.",
      evidence:
        "The current text is sample content for layout and interaction testing and should be replaced with real supporting information.",
      references: [
        { label: "Andean Spectrum Note", url: "https://example.com/andean-spectrum-note" },
      ],
    }),
  },
  {
    id: "sao-paulo-array",
    title: "Southern Array Core",
    subtitle: "Urban Systems Analytics",
    text: "A dense urban array visualizing energy consumption, shipping demand, and distributed systems health.",
    date: "2026-03-29",
    latitude: -23.5505,
    longitude: -46.6333,
    region: "South America",
    details: buildMockDetails({
      classification: "Dense metropolitan analytics array.",
      geographicLocation:
        "Set within southeastern Brazil, where population density, shipping demand, and industrial energy usage create layered urban signals.",
      mapPlacement:
        "Approximate marker: -23.5505, -46.6333. Displayed in southeastern South America as a megacity core.",
      narrative:
        "The mock array stands in for a heavy urban monitoring system combining freight demand, power analytics, and distributed-service health checks.",
      chronology:
        "Mock record dated 2026-03-29.",
      evidence:
        "This content is fictive filler and should later be replaced with real urban studies, datasets, or event documentation.",
      references: [
        { label: "Southern Array Metrics", url: "https://example.com/southern-array-metrics" },
      ],
    }),
    links: [{ label: "Array Metrics", url: "https://example.com/southern-array-core" }],
  },
  {
    id: "buenos-aires-channel",
    title: "Patagonian Channel",
    subtitle: "Southern Logistics Routing",
    text: "A long-range routing corridor for southern logistics flows, atmospheric sensing, and polar transfer windows.",
    date: "2026-01-18",
    latitude: -34.6037,
    longitude: -58.3816,
    region: "South America",
    details: buildMockDetails({
      classification: "Southern routing and atmospheric channel node.",
      geographicLocation:
        "Positioned near the Rio de la Plata gateway, linking southern shipping access, inland logistics, and weather-aware route planning.",
      mapPlacement:
        "Approximate marker: -34.6037, -58.3816. Used as a southern cone access point on the map.",
      narrative:
        "This placeholder entry imagines a long-range corridor model watching freight movement, atmospheric shifts, and southern transfer windows.",
      chronology:
        "Mock record dated 2026-01-18.",
      evidence:
        "Placeholder only. Swap with real historical, logistic, or geographic context when the production dataset is introduced.",
      references: [
        { label: "Patagonian Routing Brief", url: "https://example.com/patagonian-routing-brief" },
      ],
    }),
  },
  {
    id: "lagos-mesh",
    title: "Niger Delta Mesh",
    subtitle: "Port and Mobility Resilience",
    text: "A resilient urban mesh tracking port throughput, grid resilience, and fast-changing mobility demand.",
    date: "2026-02-27",
    latitude: 6.5244,
    longitude: 3.3792,
    region: "Africa",
    details: buildMockDetails({
      classification: "Port-centered mobility and resilience mesh.",
      geographicLocation:
        "Located on the Gulf of Guinea, within a dense coastal metropolis tied to port activity, urban growth, and power demand.",
      mapPlacement:
        "Approximate marker: 6.5244, 3.3792. Shown on the West African coast.",
      narrative:
        "The mesh functions as sample content for a fictional urban network watching shipping throughput, mobility shifts, and grid resilience under heavy demand.",
      chronology:
        "Mock record dated 2026-02-27.",
      evidence:
        "Illustrative filler only. Replace with evidence-backed city, port, or infrastructure notes in the real dataset.",
      references: [
        { label: "Delta Mesh Snapshot", url: "https://example.com/delta-mesh-snapshot" },
      ],
    }),
  },
  {
    id: "nairobi-vector",
    title: "Equatorial Vector Port",
    subtitle: "Continental Routing Signals",
    text: "A continental routing node for east-african climate feeds, wildlife corridor signals, and mobility intelligence.",
    date: "2026-04-09",
    latitude: -1.2921,
    longitude: 36.8219,
    region: "Africa",
    details: buildMockDetails({
      classification: "Equatorial routing and climate coordination node.",
      geographicLocation:
        "Placed in East Africa near key upland corridors connecting climate-sensitive regions, transport routes, and wildlife landscapes.",
      mapPlacement:
        "Approximate marker: -1.2921, 36.8219. Positioned along the eastern African interior corridor.",
      narrative:
        "This fictional vector port links environmental signals, transport coordination, and regional communications into one adaptable control layer.",
      chronology:
        "Mock record dated 2026-04-09.",
      evidence:
        "Synthetic descriptive content used for interface testing. Replace with sourced regional material later.",
      references: [
        { label: "Equatorial Vector Summary", url: "https://example.com/equatorial-vector-summary" },
      ],
    }),
  },
  {
    id: "cape-town-bloom",
    title: "Southern Bloom Beacon",
    subtitle: "Coastal Renewable Observability",
    text: "A coastal monitoring beacon linking oceanic conditions, renewable generation, and shipping density forecasts.",
    date: "2026-01-31",
    latitude: -33.9249,
    longitude: 18.4241,
    region: "Africa",
    details: buildMockDetails({
      classification: "Southern coastal beacon for maritime and renewable signals.",
      geographicLocation:
        "Situated at the southwestern tip of Africa, where ocean conditions, shipping routes, and renewable generation intersect.",
      mapPlacement:
        "Approximate marker: -33.9249, 18.4241. Shown at a major southern coastal gateway.",
      narrative:
        "The beacon is presented as a fictional observational post merging sea-state awareness, port density, and energy infrastructure reporting.",
      chronology:
        "Mock record dated 2026-01-31.",
      evidence:
        "Placeholder panel content intended for future replacement with real maritime or environmental references.",
      references: [
        { label: "Southern Beacon Log", url: "https://example.com/southern-beacon-log" },
      ],
    }),
    links: [{ label: "Beacon Log", url: "https://example.com/southern-bloom-beacon" }],
  },
  {
    id: "london-hud",
    title: "North Sea Command Layer",
    subtitle: "Cross-Border Infrastructure View",
    text: "A European command view combining port activity, airspace telemetry, and cross-border systems monitoring.",
    date: "2026-03-05",
    latitude: 51.5072,
    longitude: -0.1276,
    region: "Europe",
    details: buildMockDetails({
      classification: "Cross-border command layer for maritime and airspace systems.",
      geographicLocation:
        "Centered in southern Britain, interfacing with North Sea shipping, continental logistics, and dense financial communications infrastructure.",
      mapPlacement:
        "Approximate marker: 51.5072, -0.1276. Placed on the western edge of continental Europe.",
      narrative:
        "This placeholder describes a synthetic command view consolidating port activity, airspace telemetry, and infrastructure events into a single regional surface.",
      chronology:
        "Mock record dated 2026-03-05.",
      evidence:
        "Illustrative content only. Replace with actual historical, economic, or transport material as needed.",
      references: [
        { label: "North Sea Layer Brief", url: "https://example.com/north-sea-layer-brief" },
      ],
    }),
  },
  {
    id: "berlin-lattice",
    title: "Central Lattice Node",
    subtitle: "Continental Rail and Research Mesh",
    text: "A dense interconnect for continental rail analytics, research exchange, and critical infrastructure state changes.",
    date: "2026-04-15",
    latitude: 52.52,
    longitude: 13.405,
    region: "Europe",
    details: buildMockDetails({
      classification: "Continental research and transport lattice node.",
      geographicLocation:
        "Located in central Europe with access to dense rail corridors, research institutions, and high-connectivity infrastructure.",
      mapPlacement:
        "Approximate marker: 52.5200, 13.4050. Rendered within the continental core of Europe.",
      narrative:
        "The lattice node serves as sample content for a fictional coordination point watching rail analytics, institutional exchange, and infrastructure state changes.",
      chronology:
        "Mock record dated 2026-04-15.",
      evidence:
        "Current text is filler only and should later be backed by real sources or project-specific notes.",
      references: [
        { label: "Central Lattice Dossier", url: "https://example.com/central-lattice-dossier" },
      ],
    }),
  },
  {
    id: "reykjavik-aurora",
    title: "Aurora Telemetry Ring",
    subtitle: "Arctic Routing Observatory",
    text: "A northern-edge observatory tracking magnetosphere patterns, subsea cables, and Arctic routing windows.",
    date: "2026-02-03",
    latitude: 64.1466,
    longitude: -21.9426,
    region: "Europe",
    details: buildMockDetails({
      classification: "Northern telemetry ring and Arctic access observatory.",
      geographicLocation:
        "Positioned in Iceland to monitor northern magnetosphere conditions, subsea cables, and Atlantic-Arctic routing transitions.",
      mapPlacement:
        "Approximate marker: 64.1466, -21.9426. Placed at the high-latitude North Atlantic edge of Europe.",
      narrative:
        "This record acts as a fictional observatory entry correlating environmental phenomena with infrastructure continuity and Arctic routing awareness.",
      chronology:
        "Mock record dated 2026-02-03.",
      evidence:
        "Placeholder material for interface filling. Replace with scientific, logistical, or historical sources when ready.",
      references: [
        { label: "Aurora Ring Notes", url: "https://example.com/aurora-ring-notes" },
      ],
    }),
  },
  {
    id: "dubai-switchyard",
    title: "Desert Switchyard",
    subtitle: "Trade Corridor Balancing",
    text: "A transregional switching layer balancing desert logistics, trade corridors, and high-availability compute loads.",
    date: "2026-01-09",
    latitude: 25.2048,
    longitude: 55.2708,
    region: "Asia",
    details: buildMockDetails({
      classification: "Trade corridor switchyard and compute balancing hub.",
      geographicLocation:
        "Set in the eastern Arabian Peninsula, linking desert logistics, gulf shipping, and high-availability commercial networks.",
      mapPlacement:
        "Approximate marker: 25.2048, 55.2708. Rendered near the Persian Gulf as a transregional connector.",
      narrative:
        "The switchyard is presented as a synthetic balancing layer that mediates freight timing, compute demand, and trade-corridor fluctuations.",
      chronology:
        "Mock record dated 2026-01-09.",
      evidence:
        "No source-backed dossier is attached yet. Replace with real trade, infrastructure, or historical materials later.",
      references: [
        { label: "Desert Switchyard Overview", url: "https://example.com/desert-switchyard-overview" },
      ],
    }),
  },
  {
    id: "bengaluru-lab",
    title: "Monsoon Lab Network",
    subtitle: "Climate and Software Telemetry",
    text: "A software-intensive observability cluster modeling monsoon shifts, mobility demand, and digital infrastructure throughput.",
    date: "2026-04-20",
    latitude: 12.9716,
    longitude: 77.5946,
    region: "Asia",
    details: buildMockDetails({
      classification: "Software-intensive climate and infrastructure lab network.",
      geographicLocation:
        "Based in southern India, where monsoon-sensitive systems, digital infrastructure, and metropolitan growth form a dense monitoring environment.",
      mapPlacement:
        "Approximate marker: 12.9716, 77.5946. Shown in peninsular South Asia.",
      narrative:
        "This placeholder imagines a network that fuses mobility demand, seasonal climate modeling, and software observability into one regional node.",
      chronology:
        "Mock record dated 2026-04-20.",
      evidence:
        "This is representative filler content only and should be replaced by real references, reports, or archival notes.",
      references: [
        { label: "Monsoon Lab Research Stream", url: "https://example.com/monsoon-lab-research-stream" },
      ],
    }),
    links: [{ label: "Research Stream", url: "https://example.com/monsoon-lab-network" }],
  },
  {
    id: "singapore-strand",
    title: "Strait Data Strand",
    subtitle: "Maritime Market Pulse",
    text: "A maritime data corridor linking port density, customs timing, and regional market pulse indicators.",
    date: "2026-03-07",
    latitude: 1.3521,
    longitude: 103.8198,
    region: "Asia",
    details: buildMockDetails({
      classification: "Maritime trade strand and customs timing corridor.",
      geographicLocation:
        "Positioned at a major chokepoint between the Indian and Pacific maritime systems, linking port density and commercial timing data.",
      mapPlacement:
        "Approximate marker: 1.3521, 103.8198. Displayed at the strait gateway in Southeast Asia.",
      narrative:
        "The fictional strand aggregates shipping flow, customs timing, and market pulse indicators into a narrow but globally significant maritime intelligence layer.",
      chronology:
        "Mock record dated 2026-03-07.",
      evidence:
        "Synthetic filler only. Replace with port studies, trade metrics, or historical source material if needed.",
      references: [
        { label: "Strait Data Brief", url: "https://example.com/strait-data-brief" },
      ],
    }),
  },
  {
    id: "tokyo-prism",
    title: "Pacific Prism Core",
    subtitle: "Metropolitan Seismic Intelligence",
    text: "A multi-layer metropolitan prism monitoring supply continuity, seismic feeds, and edge-compute demand spikes.",
    date: "2026-04-26",
    latitude: 35.6762,
    longitude: 139.6503,
    region: "Asia",
    details: buildMockDetails({
      classification: "Metropolitan resilience prism and seismic awareness core.",
      geographicLocation:
        "Located in the Tokyo urban region, tying together supply continuity, seismic feeds, and large-scale edge compute demand.",
      mapPlacement:
        "Approximate marker: 35.6762, 139.6503. Placed in the Japanese archipelago on the northwest Pacific rim.",
      narrative:
        "This mock core is framed as a high-density metropolitan intelligence layer tracking seismic conditions and infrastructure continuity under intense demand.",
      chronology:
        "Mock record dated 2026-04-26.",
      evidence:
        "The panel text is illustrative placeholder content and should later be replaced with source-based documentation.",
      references: [
        { label: "Pacific Prism Summary", url: "https://example.com/pacific-prism-summary" },
      ],
    }),
  },
  {
    id: "sydney-harbor-grid",
    title: "Harbor Grid Halo",
    subtitle: "Southern Hemisphere Civic Flow",
    text: "A southern hemisphere grid halo fusing harbor telemetry, climate adaptation models, and civic flow sensing.",
    date: "2026-02-19",
    latitude: -33.8688,
    longitude: 151.2093,
    region: "Oceania",
    details: buildMockDetails({
      classification: "Harbor-centered civic flow and adaptation grid.",
      geographicLocation:
        "Positioned on Australia's southeastern coast, where port logistics, urban circulation, and climate adaptation planning intersect.",
      mapPlacement:
        "Approximate marker: -33.8688, 151.2093. Rendered on the eastern Australian seaboard.",
      narrative:
        "The halo is a fictional planning layer connecting harbor telemetry, adaptation scenarios, and urban movement through a southern hemisphere metropolitan lens.",
      chronology:
        "Mock record dated 2026-02-19.",
      evidence:
        "Placeholder descriptive content only. Replace with official reports, local histories, or technical datasets later.",
      references: [
        { label: "Harbor Grid Halo Notes", url: "https://example.com/harbor-grid-halo-notes" },
      ],
    }),
  },
  {
    id: "auckland-arc",
    title: "Tasman Arc Hub",
    subtitle: "Ocean-Edge Resilience Node",
    text: "A resilient ocean-edge node coordinating volcanic monitoring, logistics routing, and energy transfer analytics.",
    date: "2026-03-12",
    latitude: -36.8509,
    longitude: 174.7645,
    region: "Oceania",
    details: buildMockDetails({
      classification: "Ocean-edge resilience hub and volcanic watchpoint.",
      geographicLocation:
        "Set in northern New Zealand, linking island logistics, seismic awareness, and energy transfer across the Tasman sphere.",
      mapPlacement:
        "Approximate marker: -36.8509, 174.7645. Placed in the southwest Pacific island corridor.",
      narrative:
        "This sample hub combines marine route awareness, volcanic monitoring, and distributed energy signals into one resilient edge node.",
      chronology:
        "Mock record dated 2026-03-12.",
      evidence:
        "Synthetic placeholder content. Replace with evidence-backed regional information in the final dataset.",
      references: [
        { label: "Tasman Arc Hub Report", url: "https://example.com/tasman-arc-hub-report" },
      ],
    }),
  },
  {
    id: "suva-lagoon",
    title: "Lagoon Signal Deck",
    subtitle: "Cyclone and Marine Alerts",
    text: "A distributed island network handling cyclone alerts, marine biodiversity scans, and regional communications backhaul.",
    date: "2026-01-28",
    latitude: -18.1248,
    longitude: 178.4501,
    region: "Oceania",
    details: buildMockDetails({
      classification: "Island alert deck for cyclone and marine communications.",
      geographicLocation:
        "Located in the Fiji island network, where marine routes, weather exposure, and distributed communications require constant coordination.",
      mapPlacement:
        "Approximate marker: -18.1248, 178.4501. Displayed in the central South Pacific island region.",
      narrative:
        "The signal deck serves as a fictional example of an island observability network handling cyclone alerts, marine scans, and regional relay continuity.",
      chronology:
        "Mock record dated 2026-01-28.",
      evidence:
        "Current text is panel filler only and should later be replaced with sourced regional material.",
      references: [
        { label: "Lagoon Signal Deck Summary", url: "https://example.com/lagoon-signal-deck-summary" },
      ],
    }),
  },
  {
    id: "baghdad-corridor",
    title: "Twin Rivers Corridor",
    subtitle: "River Basin Infrastructure Signals",
    text: "A historical-region signal corridor tracing river-basin logistics, archaeological overlays, and water infrastructure alerts.",
    date: "2026-04-01",
    latitude: 33.3152,
    longitude: 44.3661,
    region: "Mesopotamia",
    details: buildMockDetails({
      classification: "Historical-region river corridor and infrastructure signal zone.",
      geographicLocation:
        "Centered in the lower Tigris-Euphrates basin, within a long-settled river landscape tied to movement, irrigation, and layered historical memory.",
      mapPlacement:
        "Approximate marker: 33.3152, 44.3661. Shown in the central Mesopotamian alluvial plain.",
      narrative:
        "This placeholder entry frames the corridor as a hybrid of modern infrastructure awareness and deep regional memory associated with river-basin life.",
      chronology:
        "Mock record dated 2026-04-01. For a historical dataset, replace with earliest attested chronology and transmission history.",
      evidence:
        "Current text is illustrative only and should later be replaced by source-backed references, archaeological notes, or curated bibliographic material.",
      references: [
        { label: "Twin Rivers Corridor Dossier", url: "https://example.com/twin-rivers-corridor-dossier" },
      ],
    }),
  },
  {
    id: "mosul-archive",
    title: "Upper Basin Archive",
    subtitle: "Hydrology and Heritage Cluster",
    text: "A northern basin archive clustering hydrology reports, heritage preservation scans, and route continuity assessments.",
    date: "2026-01-15",
    latitude: 36.34,
    longitude: 43.13,
    region: "Mesopotamia",
    details: buildMockDetails({
      classification: "Upper basin archive for hydrology and heritage records.",
      geographicLocation:
        "Positioned in northern Mesopotamia, close to upland-river transition zones where water, settlement history, and route continuity intersect.",
      mapPlacement:
        "Approximate marker: 36.3400, 43.1300. Mapped in the northern basin zone.",
      narrative:
        "The archive is presented as a fictional collection point for hydrology observations, preservation scans, and route continuity assessments.",
      chronology:
        "Mock record dated 2026-01-15.",
      evidence:
        "Placeholder content only. Replace with real textual, archaeological, or hydrological evidence later.",
      references: [
        { label: "Upper Basin Archive Note", url: "https://example.com/upper-basin-archive-note" },
      ],
    }),
  },
  {
    id: "aleppo-bridge",
    title: "Levant Bridge Relay",
    subtitle: "Reconstruction Corridor Metadata",
    text: "A western-edge relay capturing corridor resilience, reconstruction planning, and historical trade-route metadata.",
    date: "2026-03-23",
    latitude: 36.2021,
    longitude: 37.1343,
    region: "Mesopotamia",
    details: buildMockDetails({
      classification: "Western relay for corridor resilience and historical route metadata.",
      geographicLocation:
        "Placed at the western edge of the broader Mesopotamian historical sphere, where Levantine and inland routes overlap.",
      mapPlacement:
        "Approximate marker: 36.2021, 37.1343. Used as a western bridge point into the historical corridor.",
      narrative:
        "This filler record imagines a relay that tracks reconstruction pressure, route resilience, and long-duration trade-link memory across a contested region.",
      chronology:
        "Mock record dated 2026-03-23.",
      evidence:
        "Structured placeholder only. Replace later with historical or contemporary references relevant to your final content.",
      references: [
        { label: "Levant Bridge Relay Summary", url: "https://example.com/levant-bridge-relay-summary" },
      ],
    }),
  },
  {
    id: "diyarbakir-orbit",
    title: "Northern Crescent Orbit",
    subtitle: "Plateau Weather Dependency Watch",
    text: "A boundary observatory tracking plateau weather, river systems, and cross-border infrastructure dependencies.",
    date: "2026-04-11",
    latitude: 37.9144,
    longitude: 40.2306,
    region: "Mesopotamia",
    details: buildMockDetails({
      classification: "Boundary observatory for plateau weather and river dependencies.",
      geographicLocation:
        "Located near the northern crescent boundary between plateau systems and river-linked lowlands in the upper Mesopotamian sphere.",
      mapPlacement:
        "Approximate marker: 37.9144, 40.2306. Displayed on the northern edge of the historical region.",
      narrative:
        "The orbit serves as a fictional watchpoint observing weather shifts, river-system continuity, and cross-border infrastructure dependency chains.",
      chronology:
        "Mock record dated 2026-04-11.",
      evidence:
        "This is interface filler text only. Replace with domain-specific evidence, references, and chronology once the real dataset is available.",
      references: [
        { label: "Northern Crescent Orbit Brief", url: "https://example.com/northern-crescent-orbit-brief" },
      ],
    }),
  },
];
