dataSetVersion = "2025-05-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Location",
    key: "home",
    tooltip: "Check this to restrict to certain locations.",
    checked: false,
    sub: [
      { name: "Erisyon", key: "erisyon" },
      { name: "Kunaria", key: "kunaria" },
      { name: "Namaian Isle", tooltip: "Island where Namaia resides", key: "namaian" },
      { name: "Tech Planet", tooltip: "Planet located opposite of the orbit of the Kunarisyon planet", key: "tech" },
      { name: "Undefined", tooltip: "Any character with an undefined location", key: "other" }
    ]
  },
  {
    name: "Filter by Characer Owner",
    key: "owner",
    tooltip: "Check this to restrict to characters that belong to specific people.",
    checked: false,
    sub: [
      { name: "Azuriu", key: "azuriu" },
      { name: "Raiku", key: "raiku" },
      { name: "Fulminis", key: "fulminis" },
      { name: "Artanisia", key: "arty" }
    ]
  },
  {
    name: "Remove Gods/Deities",
    key: "deity",
    tooltip: "Check this to remove characters who are gods/deities.",
	checked: false
  },
  {
    name: "Remove Variants",
    key: "variant",
    tooltip: "Check this to remove characters who are variants of another listed character.",
	checked: false
  },
  {
    name: "Remove Fusions",
    key: "fusion",
    tooltip: "Check this to remove characters who are variants of another listed character.",
	checked: false
  },
  {
    name: "Remove artless characters",
    key: "artless",
    tooltip: "Check this to remove characters with no art.",
    checked: true
  },
  {
    name: "Remove Boys",
    key: "boy",
    tooltip: "Check this to remove characters who are male-identifying..",
	checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Erisyon",
    img: "FomaVEl.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], deity: true }
  },
  {
    name: "Reina Fuyulin",
    img: "U3R26yY.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Hakuno Hayasaka",
    img: "rAiPytj.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Kinuye Hayasaka",
    img: "n9XXria.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Cecilia Fuyulin",
    img: "yJzSkfy.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Namaia",
    img: "u5JZNEj.png",
    opts: { home: ["namaian"], owner: ["azuriu"] }
  },
  {
    name: "Aneko Tetsuyo",
    img: "gU0BDDs.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Eupheilla",
    img: "eMOTurj.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Izanami Hayasaka",
    img: "evxfXxh.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Lylica",
    img: "Ussk6y6.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Vyssini",
    img: "3RIbuio.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Hyuna",
    img: "7jC2c2u.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Ryrviantas",
    img: "V0yREMn.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], boy: true, artless: true }
  },
  {
    name: "Deulara",
    img: "6EqXxqv.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Iernath",
    img: "NDEW7Xg.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Adara Magnilda",
    img: "M8vIjT9.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Celece Hayasaka",
    img: "XH9Oqtg.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Anzai Tetsuyo",
    img: "TKiJCrY.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Azuriu",
    img: "QDv2DsK.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Enri",
    img: "TCLA8VD.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], artless: true }
  },
  {
    name: "Halyna Hayasaka",
    img: "0kyI16y.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Audra Hayasaka",
    img: "7A9wvyI.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Koriko Yukihana",
    img: "upcPPX8.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Mariko",
    img: "iwJpb1d.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Nilama",
    img: "SRrCOnz.png",
    opts: { home: ["other"], owner: ["azuriu"], artless: true }
  },
  {
    name: "Nomula Fuyulin",
    img: "ppzXMme.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Peraytia Curat",
    img: "Ok9DwKY.png",
    opts: { home: ["other"], owner: ["azuriu"], variant: true }
  },
  {
    name: "Peraytia Viciat",
    img: "SMgo8sT.png",
    opts: { home: ["other"], owner: ["azuriu"] }
  },
  {
    name: "Rakosen",
    img: "mfPfPxf.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Serin Fuyulin",
    img: "IcC22Xe.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Zilve",
    img: "Eilo1kO.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Chifuyu",
    img: "5LMcSRo.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Eilyna",
    img: "zGkdnfw.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Ekaterina",
    img: "5k7z8Il.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Kagiroi",
    img: "7gbuBuI.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Kayoma Hayasaka",
    img: "Gq4JH9g.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Artos Beetle",
    img: "F5vTxgl.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Aunriel",
    img: "auzbaxC.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Erien Fuyulin",
    img: "HzLfw9M.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], boy: true }
  },
  {
    name: "Gracia",
    img: "YTLwRid.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Koyama",
    img: "tvdDKnt.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Nivralde",
    img: "mTCgK5x.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Nyvimra",
    img: "I8KOZCI.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Saiki",
    img: "SMhVDDg.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], boy: true }
  },
  {
    name: "Cerika",
    img: "Tkou6tq.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Eri",
    img: "NWMUDOh.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Kudre",
    img: "haeyZzJ.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Naoko Hayasaka",
    img: "t84UOy7.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Olesya",
    img: "LFn09SE.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Matsuri Hayasaka",
    img: "RL5DW8e.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Elysia",
    img: "3m9KB9Y.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Saito",
    img: "NxNEZys.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], boy: true }
  },
  {
    name: "Irdwyn",
    img: "CJzZLYi.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], boy: true }
  },
  {
    name: "Thunder Beetle (Type-2)",
    img: "E5pMkLB.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Thunder Beetle (Type-1)",
    img: "n6DCHAB.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], variant: true }
  },
  {
    name: "Ophida",
    img: "Ld3dzkJ.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Isenith",
    img: "bGrlfov.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Aurielle",
    img: "h42Fd3I.png",
    opts: { home: ["namaian"], owner: ["azuriu"] }
  },
  {
    name: "Fumeko",
    img: "ex7gFZ4.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Galina",
    img: "D6Ieukp.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Airu",
    img: "3v0nbQu.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Yvenne",
    img: "kz0ipTF.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Ranesia Fuyulin",
    img: "vHNrN32.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Saika Mizukaguya",
    img: "jXheKfs.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Xalyth",
    img: "puGtw4k.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Dianthus",
    img: "JumzZ7K.png",
    opts: { home: ["other"], owner: ["azuriu"] }
  },
  {
    name: "Nidrem",
    img: "3E6O20j.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Tsukiga",
    img: "76aUdqI.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Dahlia",
    img: "MqnTx1y.png",
    opts: { home: ["other"], owner: ["azuriu"] }
  },
  {
    name: "Serea Trinier",
    img: "1lr8pZE.png",
    opts: { home: ["tech"], owner: ["azuriu"] }
  },
  {
    name: "Eilen Trinier",
    img: "XcxydYy.png",
    opts: { home: ["tech"], owner: ["azuriu"] }
  },
  {
    name: "Ice Slime",
    img: "C5bR8x8.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Aerona",
    img: "Qsqo3bm.png",
    opts: { home: ["kunaria"], owner: ["raiku"], deity: true }
  },
  {
    name: "Airo",
    img: "8X7Qdnx.png",
    opts: { home: ["erisyon"], owner: ["raiku"] }
  },
  {
    name: "Eneida",
    img: "fZ2kGTQ.png",
    opts: { home: ["kunaria"], owner: ["raiku"], deity: true }
  },
  {
    name: "Kousa",
    img: "6yGwiG8.png",
    opts: { home: ["kunaria"], owner: ["raiku"] }
  },
  {
    name: "Levynia",
    img: "LysmICQ.png",
    opts: { home: ["erisyon"], owner: ["raiku"] }
  },
  {
    name: "Meira Iarhan",
    img: "zrE2VFJ.png",
    opts: { home: ["erisyon"], owner: ["raiku"], variant: true }
  },
  {
    name: "Meira Iarhan (Lich)",
    img: "iGkU6v6.png",
    opts: { home: ["erisyon"], owner: ["raiku"] }
  },
  {
    name: "Maddison Kurohane",
    img: "zzphg7y.png",
    opts: { home: ["kunaria"], owner: ["raiku"] }
  },
  {
    name: "Resshinu",
    img: "OhDaU4m.png",
    opts: { home: ["kunaria"], owner: ["raiku"], deity: true }
  },
  {
    name: "Selina Hayasaka",
    img: "Pwlr42F.png",
    opts: { home: ["kunaria"], owner: ["raiku"] }
  },
  {
    name: "Virasari",
    img: "2SJbT2t.png",
    opts: { home: ["kunaria"], owner: ["raiku"] }
  },
  {
    name: "Miyako Shigai",
    img: "TCIh6lw.png",
    opts: { home: ["kunaria"], owner: ["raiku"], artless: true }
  },
  {
    name: "Kaoru",
    img: "Ew6iJ6d.png",
    opts: { home: ["kunaria"], owner: ["fulminis"] }
  },
  {
    name: "Nivralieze Rianta",
    img: "i3Tmcb9.png",
    opts: { home: ["erisyon"], owner: ["arty"] }
  },
  {
    name: "Saru",
    img: "COpQGPy.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Hotaru",
    img: "kPLe6LU.png",
    opts: { home: ["kunaria"], owner: ["arty"] }
  },
  {
    name: "Yukimi",
    img: "GtOaZWR.png",
    opts: { home: ["kunaria"], owner: ["raiku"] }
  },
  {
    name: "Princess Slime",
    img: "E6xgs70.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Princess Slime (Knight)",
    img: "mIVsV1t.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], variant: true }
  },
  {
    name: "Princess Slime (Mage)",
    img: "up9w8oU.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], variant: true }
  },
  {
    name: "Nakami",
    img: "wVhqBd6.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Naokomom",
    img: "TCIh6lw.png",
    opts: { home: ["kunaria"], owner: ["azuriu"], artless: true }
  },
  {
    name: "Orthia",
    img: "gmsfuH0.png",
    opts: { home: ["other"], owner: ["azuriu"] }
  },
  {
    name: "Suishou",
    img: "goybjIC.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "CyberFairy",
    img: "jfRRhZa.png",
    opts: { home: ["tech"], owner: ["azuriu"] }
  },
  {
    name: "Katsuri Hayasaka",
    img: "D8pmGwg.png",
    opts: { home: ["kunaria"], owner: ["azuriu"], fusion: true }
  },
  {
    name: "Seirios",
    img: "MkfoK4I.png",
    opts: { home: ["kunaria"], owner: ["azuriu"], fusion: true }
  },
  {
    name: "Tulesa",
    img: "o9sZd6O.png",
    opts: { home: ["kunaria"], owner: ["azuriu"] }
  },
  {
    name: "Lunaria",
    img: "om6NRey.png",
    opts: { home: ["other"], owner: ["azuriu"] }
  },
  {
    name: "Chiyome",
    img: "uajKiuD.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Nelié",
    img: "O33JRjL.png",
    opts: { home: ["tech"], owner: ["azuriu"] }
  },
  {
    name: "Zevrolaina",
    img: "vdQzqSP.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Solaria",
    img: "4gdcx56kjx4.png",
    opts: { home: ["other"], owner: ["azuriu"], artless: true }
  },
  {
    name: "Elinas",
    img: "9cSt6qv.png",
    opts: { home: ["erisyon"], owner: ["raiku"] }
  },
  {
    name: "Airi",
    img: "gmnX0Lr.png",
    opts: { home: ["erisyon"], owner: ["arty"] }
  },
  {
    name: "Ice Slime 2",
    img: "YDIYQGw.png",
    opts: { home: ["other"], owner: ["azuriu"] }
  },
  {
    name: "Fire Slime",
    img: "cRBrJiY.png",
    opts: { home: ["other"], owner: ["azuriu"] }
  },
  {
    name: "Corrosion Lindwurm",
    img: "uBdpwh2.png",
    opts: { home: ["erisyon"], owner: ["azuriu"] }
  },
  {
    name: "Nerissa",
    img: "TCIh6lw.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], artless: true }
  },
  {
    name: "Laina",
    img: "TCIh6lw.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], artless: true }
  },
  {
    name: "Blazing Sentinel",
    img: "QFbFDZf.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], artless: true }
  },
  {
    name: "Reina's Familiar",
    img: "TCIh6lw.png",
    opts: { home: ["erisyon"], owner: ["azuriu"], artless: true }
  },
];
