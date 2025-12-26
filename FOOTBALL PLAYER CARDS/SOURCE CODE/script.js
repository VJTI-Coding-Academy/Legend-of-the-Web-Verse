function getPlayerInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function getPlayerImageUrl(player) {
  if (player && player.image) {
    return player.image;
  }
  const name = player && player.name ? player.name : (player || "");
  const encoded = encodeURIComponent(name);
  return `https://ui-avatars.com/api/?name=${encoded}&size=400&background=0c1524&color=63b3ff&rounded=false`;
}

const playerImageCache = new Map();

async function fetchPlayerThumbnail(name) {
  try {
    const encoded = encodeURIComponent(name);
    const api = `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&titles=${encoded}&pithumbsize=500&origin=*`;
    const res = await fetch(api);
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data.query && data.query.pages && data.query.pages.length) {
      const page = data.query.pages[0];
      if (page && page.thumbnail && page.thumbnail.source) {
        return page.thumbnail.source;
      }
    }
  } catch (e) {
    console.warn("fetchPlayerThumbnail error:", e);
  }
  return null;
}

function applyPlayerImage(imgEl, placeholderEl, player) {
  if (!imgEl) return;
  if (player && player.image) {
    imgEl.src = player.image;
    return;
  }
  if (playerImageCache.has(player.name)) {
    imgEl.src = playerImageCache.get(player.name);
    return;
  }
  fetchPlayerThumbnail(player.name).then((url) => {
    if (url) {
      playerImageCache.set(player.name, url);
      imgEl.src = url;
    }
  });
}

function getCountryFlag(countryName) {
  const countryCodes = {
    "Brazil": "br",
    "Belgium": "be",
    "Slovenia": "si",
    "Germany": "de",
    "France": "fr",
    "Italy": "it",
    "England": "gb",
    "Argentina": "ar",
    "Portugal": "pt",
    "Cameroon": "cm",
    "Netherlands": "nl",
    "Croatia": "hr",
    "Morocco": "ma",
    "Canada": "ca",
    "Spain": "es",
    "Uruguay": "uy",
    "Norway": "no",
    "Poland": "pl",
    "South Korea": "kr",
    "Egypt": "eg"
  };
  const code = countryCodes[countryName] || "un";
  return `https://flagcdn.com/w40/${code}.png`;
}

const players = [
  {
    name: "Alisson Becker",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "Liverpool",
    nation: "Brazil",
    age: 31,
    stats: {
      saves: 132,
      savePct: 0.75,
      cleanSheets: 18,
      goalsAgainstPer90: 0.8,
      psxgPlusMinus: 5.1,
    },
  },
  {
    name: "Ederson Moraes",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "Manchester City",
    nation: "Brazil",
    age: 30,
    stats: {
      saves: 105,
      savePct: 0.73,
      cleanSheets: 17,
      goalsAgainstPer90: 0.78,
      psxgPlusMinus: 3.4,
    },
  },
  {
    name: "Jan Oblak",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "Atletico Madrid",
    nation: "Slovenia",
    age: 30,
    stats: {
      saves: 128,
      savePct: 0.77,
      cleanSheets: 19,
      goalsAgainstPer90: 0.74,
      psxgPlusMinus: 6.2,
    },
  },
  {
    name: "Thibaut Courtois",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "Real Madrid",
    nation: "Belgium",
    age: 31,
    stats: {
      saves: 121,
      savePct: 0.78,
      cleanSheets: 18,
      goalsAgainstPer90: 0.76,
      psxgPlusMinus: 5.9,
    },
  },
  {
    name: "Marc-Andre ter Stegen",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "FC Barcelona",
    nation: "Germany",
    age: 31,
    stats: {
      saves: 118,
      savePct: 0.79,
      cleanSheets: 20,
      goalsAgainstPer90: 0.7,
      psxgPlusMinus: 7.1,
    },
  },
  {
    name: "Mike Maignan",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "AC Milan",
    nation: "France",
    age: 28,
    stats: {
      saves: 115,
      savePct: 0.76,
      cleanSheets: 17,
      goalsAgainstPer90: 0.82,
      psxgPlusMinus: 4.4,
    },
  },
  {
    name: "Gianluigi Donnarumma",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "Paris Saint-Germain",
    nation: "Italy",
    age: 25,
    stats: {
      saves: 130,
      savePct: 0.74,
      cleanSheets: 16,
      goalsAgainstPer90: 0.86,
      psxgPlusMinus: 2.8,
    },
  },
  {
    name: "Manuel Neuer",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "Bayern Munich",
    nation: "Germany",
    age: 37,
    stats: {
      saves: 110,
      savePct: 0.75,
      cleanSheets: 15,
      goalsAgainstPer90: 0.88,
      psxgPlusMinus: 3.1,
    },
  },
  {
    name: "Aaron Ramsdale",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "Arsenal",
    nation: "England",
    age: 25,
    stats: {
      saves: 112,
      savePct: 0.71,
      cleanSheets: 14,
      goalsAgainstPer90: 0.95,
      psxgPlusMinus: 1.7,
    },
  },
  {
    name: "Emiliano Martinez",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "Aston Villa",
    nation: "Argentina",
    age: 31,
    stats: {
      saves: 125,
      savePct: 0.73,
      cleanSheets: 16,
      goalsAgainstPer90: 0.9,
      psxgPlusMinus: 2.5,
    },
  },
  {
    name: "Diogo Costa",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "FC Porto",
    nation: "Portugal",
    age: 24,
    stats: {
      saves: 120,
      savePct: 0.77,
      cleanSheets: 18,
      goalsAgainstPer90: 0.81,
      psxgPlusMinus: 4.2,
    },
  },
  {
    name: "Andre Onana",
    positionGroup: "Goalkeeper",
    positions: ["GK"],
    club: "Manchester United",
    nation: "Cameroon",
    age: 27,
    stats: {
      saves: 126,
      savePct: 0.72,
      cleanSheets: 15,
      goalsAgainstPer90: 0.96,
      psxgPlusMinus: 1.5,
    },
  },

  {
    name: "Virgil van Dijk",
    positionGroup: "Defender",
    positions: ["CB"],
    club: "Liverpool",
    nation: "Netherlands",
    age: 32,
    stats: {
      tackles: 1.2,
      interceptions: 1.0,
      clearances: 4.5,
      blocks: 0.7,
      passAccuracy: 0.91,
      aerialWinPct: 0.75,
      goals: 4,
      assists: 2,
    },
  },
  {
    name: "Ruben Dias",
    positionGroup: "Defender",
    positions: ["CB"],
    club: "Manchester City",
    nation: "Portugal",
    age: 26,
    stats: {
      tackles: 1.6,
      interceptions: 1.2,
      clearances: 3.8,
      blocks: 0.9,
      passAccuracy: 0.93,
      aerialWinPct: 0.71,
      goals: 2,
      assists: 1,
    },
  },
  {
    name: "Marquinhos",
    positionGroup: "Defender",
    positions: ["CB"],
    club: "Paris Saint-Germain",
    nation: "Brazil",
    age: 29,
    stats: {
      tackles: 2.1,
      interceptions: 1.5,
      clearances: 4.1,
      blocks: 1.1,
      passAccuracy: 0.92,
      aerialWinPct: 0.69,
      goals: 3,
      assists: 1,
    },
  },
  {
    name: "Josko Gvardiol",
    positionGroup: "Defender",
    positions: ["CB", "LB"],
    club: "Manchester City",
    nation: "Croatia",
    age: 21,
    stats: {
      tackles: 1.9,
      interceptions: 1.4,
      clearances: 3.5,
      blocks: 0.8,
      passAccuracy: 0.9,
      aerialWinPct: 0.66,
      goals: 2,
      assists: 2,
    },
  },
  {
    name: "Eder Militao",
    positionGroup: "Defender",
    positions: ["CB"],
    club: "Real Madrid",
    nation: "Brazil",
    age: 26,
    stats: {
      tackles: 2.0,
      interceptions: 1.5,
      clearances: 4.0,
      blocks: 1.0,
      passAccuracy: 0.89,
      aerialWinPct: 0.72,
      goals: 4,
      assists: 1,
    },
  },
  {
    name: "John Stones",
    positionGroup: "Defender",
    positions: ["CB", "DM"],
    club: "Manchester City",
    nation: "England",
    age: 29,
    stats: {
      tackles: 1.5,
      interceptions: 1.3,
      clearances: 3.2,
      blocks: 0.7,
      passAccuracy: 0.94,
      aerialWinPct: 0.68,
      goals: 2,
      assists: 2,
    },
  },
  {
    name: "Achraf Hakimi",
    positionGroup: "Defender",
    positions: ["RB", "RWB"],
    club: "Paris Saint-Germain",
    nation: "Morocco",
    age: 25,
    stats: {
      tackles: 2.3,
      interceptions: 1.8,
      clearances: 2.4,
      blocks: 0.7,
      passAccuracy: 0.88,
      aerialWinPct: 0.52,
      goals: 5,
      assists: 10,
    },
  },
  {
    name: "Trent Alexander-Arnold",
    positionGroup: "Defender",
    positions: ["RB"],
    club: "Liverpool",
    nation: "England",
    age: 25,
    stats: {
      tackles: 1.5,
      interceptions: 1.1,
      clearances: 2.6,
      blocks: 0.6,
      passAccuracy: 0.86,
      aerialWinPct: 0.5,
      goals: 4,
      assists: 14,
    },
  },
  {
    name: "Alphonso Davies",
    positionGroup: "Defender",
    positions: ["LB", "LWB"],
    club: "Bayern Munich",
    nation: "Canada",
    age: 23,
    stats: {
      tackles: 2.2,
      interceptions: 1.7,
      clearances: 2.8,
      blocks: 0.7,
      passAccuracy: 0.87,
      aerialWinPct: 0.55,
      goals: 3,
      assists: 8,
    },
  },
  {
    name: "Theo Hernandez",
    positionGroup: "Defender",
    positions: ["LB"],
    club: "AC Milan",
    nation: "France",
    age: 26,
    stats: {
      tackles: 2.0,
      interceptions: 1.5,
      clearances: 3.0,
      blocks: 0.8,
      passAccuracy: 0.86,
      aerialWinPct: 0.57,
      goals: 5,
      assists: 7,
    },
  },
  {
    name: "William Saliba",
    positionGroup: "Defender",
    positions: ["CB"],
    club: "Arsenal",
    nation: "France",
    age: 22,
    stats: {
      tackles: 1.8,
      interceptions: 1.6,
      clearances: 4.2,
      blocks: 0.8,
      passAccuracy: 0.92,
      aerialWinPct: 0.73,
      goals: 1,
      assists: 1,
    },
  },
  {
    name: "Jules Kounde",
    positionGroup: "Defender",
    positions: ["CB", "RB"],
    club: "FC Barcelona",
    nation: "France",
    age: 25,
    stats: {
      tackles: 2.1,
      interceptions: 1.7,
      clearances: 3.6,
      blocks: 0.9,
      passAccuracy: 0.9,
      aerialWinPct: 0.69,
      goals: 2,
      assists: 3,
    },
  },

  {
    name: "Kevin De Bruyne",
    positionGroup: "Midfielder",
    positions: ["CM", "CAM"],
    club: "Manchester City",
    nation: "Belgium",
    age: 32,
    stats: {
      goals: 10,
      assists: 22,
      chancesCreated: 115,
      progressivePasses: 9.8,
      tackles: 1.4,
      passAccuracy: 0.83,
    },
  },
  {
    name: "Luka Modric",
    positionGroup: "Midfielder",
    positions: ["CM"],
    club: "Real Madrid",
    nation: "Croatia",
    age: 38,
    stats: {
      goals: 5,
      assists: 12,
      chancesCreated: 85,
      progressivePasses: 8.1,
      tackles: 1.6,
      passAccuracy: 0.9,
    },
  },
  {
    name: "Pedri",
    positionGroup: "Midfielder",
    positions: ["CM", "CAM"],
    club: "FC Barcelona",
    nation: "Spain",
    age: 21,
    stats: {
      goals: 7,
      assists: 9,
      chancesCreated: 74,
      progressivePasses: 6.7,
      tackles: 1.5,
      passAccuracy: 0.91,
    },
  },
  {
    name: "Rodri",
    positionGroup: "Midfielder",
    positions: ["CDM"],
    club: "Manchester City",
    nation: "Spain",
    age: 27,
    stats: {
      goals: 6,
      assists: 8,
      chancesCreated: 62,
      progressivePasses: 9.1,
      tackles: 2.6,
      passAccuracy: 0.93,
    },
  },
  {
    name: "Joshua Kimmich",
    positionGroup: "Midfielder",
    positions: ["CDM", "CM"],
    club: "Bayern Munich",
    nation: "Germany",
    age: 28,
    stats: {
      goals: 4,
      assists: 14,
      chancesCreated: 92,
      progressivePasses: 8.9,
      tackles: 2.1,
      passAccuracy: 0.89,
    },
  },
  {
    name: "Declan Rice",
    positionGroup: "Midfielder",
    positions: ["CDM"],
    club: "Arsenal",
    nation: "England",
    age: 25,
    stats: {
      goals: 6,
      assists: 7,
      chancesCreated: 60,
      progressivePasses: 7.4,
      tackles: 2.8,
      passAccuracy: 0.91,
    },
  },
  {
    name: "Federico Valverde",
    positionGroup: "Midfielder",
    positions: ["CM", "RW"],
    club: "Real Madrid",
    nation: "Uruguay",
    age: 25,
    stats: {
      goals: 8,
      assists: 10,
      chancesCreated: 65,
      progressivePasses: 6.2,
      tackles: 2.3,
      passAccuracy: 0.88,
    },
  },
  {
    name: "Martin Odegaard",
    positionGroup: "Midfielder",
    positions: ["CAM"],
    club: "Arsenal",
    nation: "Norway",
    age: 25,
    stats: {
      goals: 15,
      assists: 9,
      chancesCreated: 102,
      progressivePasses: 7.8,
      tackles: 1.7,
      passAccuracy: 0.88,
    },
  },
  {
    name: "Jude Bellingham",
    positionGroup: "Midfielder",
    positions: ["CM", "CAM"],
    club: "Real Madrid",
    nation: "England",
    age: 20,
    stats: {
      goals: 18,
      assists: 7,
      chancesCreated: 69,
      progressivePasses: 5.9,
      tackles: 2.2,
      passAccuracy: 0.86,
    },
  },
  {
    name: "Bruno Fernandes",
    positionGroup: "Midfielder",
    positions: ["CAM"],
    club: "Manchester United",
    nation: "Portugal",
    age: 29,
    stats: {
      goals: 14,
      assists: 13,
      chancesCreated: 108,
      progressivePasses: 7.1,
      tackles: 1.9,
      passAccuracy: 0.82,
    },
  },
  {
    name: "Bernardo Silva",
    positionGroup: "Midfielder",
    positions: ["CM", "RW"],
    club: "Manchester City",
    nation: "Portugal",
    age: 29,
    stats: {
      goals: 10,
      assists: 9,
      chancesCreated: 76,
      progressivePasses: 6.4,
      tackles: 1.8,
      passAccuracy: 0.9,
    },
  },
  {
    name: "Frenkie de Jong",
    positionGroup: "Midfielder",
    positions: ["CM", "CDM"],
    club: "FC Barcelona",
    nation: "Netherlands",
    age: 26,
    stats: {
      goals: 3,
      assists: 6,
      chancesCreated: 58,
      progressivePasses: 8.5,
      tackles: 2.0,
      passAccuracy: 0.92,
    },
  },

  {
    name: "Lionel Messi",
    positionGroup: "Forward",
    positions: ["RW", "CF"],
    club: "Inter Miami",
    nation: "Argentina",
    age: 36,
    stats: {
      goals: 27,
      assists: 24,
      shotsPer90: 4.3,
      xg: 24.1,
      chancesCreated: 95,
    },
  },
  {
    name: "Kylian Mbappe",
    positionGroup: "Forward",
    positions: ["LW", "ST"],
    club: "Paris Saint-Germain",
    nation: "France",
    age: 25,
    stats: {
      goals: 44,
      assists: 12,
      shotsPer90: 5.4,
      xg: 39.8,
      chancesCreated: 60,
    },
  },
  {
    name: "Erling Haaland",
    positionGroup: "Forward",
    positions: ["ST"],
    club: "Manchester City",
    nation: "Norway",
    age: 23,
    stats: {
      goals: 52,
      assists: 9,
      shotsPer90: 5.8,
      xg: 45.2,
      chancesCreated: 38,
    },
  },
  {
    name: "Harry Kane",
    positionGroup: "Forward",
    positions: ["ST"],
    club: "Bayern Munich",
    nation: "England",
    age: 30,
    stats: {
      goals: 42,
      assists: 11,
      shotsPer90: 4.9,
      xg: 37.5,
      chancesCreated: 52,
    },
  },
  {
    name: "Mohamed Salah",
    positionGroup: "Forward",
    positions: ["RW"],
    club: "Liverpool",
    nation: "Egypt",
    age: 31,
    stats: {
      goals: 32,
      assists: 18,
      shotsPer90: 4.6,
      xg: 28.7,
      chancesCreated: 78,
    },
  },
  {
    name: "Vinicius Junior",
    positionGroup: "Forward",
    positions: ["LW"],
    club: "Real Madrid",
    nation: "Brazil",
    age: 23,
    stats: {
      goals: 25,
      assists: 19,
      shotsPer90: 4.2,
      xg: 21.6,
      chancesCreated: 72,
    },
  },
  {
    name: "Robert Lewandowski",
    positionGroup: "Forward",
    positions: ["ST"],
    club: "FC Barcelona",
    nation: "Poland",
    age: 35,
    stats: {
      goals: 34,
      assists: 8,
      shotsPer90: 4.7,
      xg: 30.1,
      chancesCreated: 41,
    },
  },
  {
    name: "Lautaro Martinez",
    positionGroup: "Forward",
    positions: ["ST"],
    club: "Inter Milan",
    nation: "Argentina",
    age: 26,
    stats: {
      goals: 30,
      assists: 7,
      shotsPer90: 4.1,
      xg: 26.9,
      chancesCreated: 36,
    },
  },
  {
    name: "Neymar Jr",
    positionGroup: "Forward",
    positions: ["LW", "CF"],
    club: "Al Hilal",
    nation: "Brazil",
    age: 31,
    stats: {
      goals: 22,
      assists: 17,
      shotsPer90: 4.4,
      xg: 20.5,
      chancesCreated: 88,
    },
  },
  {
    name: "Bukayo Saka",
    positionGroup: "Forward",
    positions: ["RW", "LW"],
    club: "Arsenal",
    nation: "England",
    age: 22,
    stats: {
      goals: 21,
      assists: 14,
      shotsPer90: 3.8,
      xg: 18.3,
      chancesCreated: 70,
    },
  },
  {
    name: "Antoine Griezmann",
    positionGroup: "Forward",
    positions: ["CF", "ST"],
    club: "Atletico Madrid",
    nation: "France",
    age: 32,
    stats: {
      goals: 23,
      assists: 15,
      shotsPer90: 3.6,
      xg: 19.4,
      chancesCreated: 84,
    },
  },
  {
    name: "Son Heung-min",
    positionGroup: "Forward",
    positions: ["LW", "ST"],
    club: "Tottenham Hotspur",
    nation: "South Korea",
    age: 31,
    stats: {
      goals: 24,
      assists: 10,
      shotsPer90: 3.9,
      xg: 20.7,
      chancesCreated: 55,
    },
  },
];

const form = document.getElementById("search-form");
const input = document.getElementById("player-input");
const cardSlot = document.getElementById("card-slot");
const errorBox = document.getElementById("error");
const positionGrid = document.getElementById("position-grid");

const groupedPlayers = players.reduce((acc, player) => {
  acc[player.positionGroup] = acc[player.positionGroup] || [];
  acc[player.positionGroup].push(player);
  return acc;
}, {});

function levenshtein(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[a.length][b.length];
}

function findSuggestion(query) {
  const lowered = query.toLowerCase();
  let best = { name: null, score: Infinity };
  players.forEach((player) => {
    const name = player.name.toLowerCase();
    if (name.includes(lowered) || lowered.includes(name)) {
      best = { name: player.name, score: 0 };
      return;
    }
    const distance = levenshtein(lowered, name);
    if (distance < best.score) {
      best = { name: player.name, score: distance };
    }
  });
  const threshold = lowered.length > 8 ? 3 : 2;
  return best.score <= threshold ? best.name : null;
}

function formatStat(value, type) {
  if (value === undefined || value === null) return "-";
  if (type === "pct") return `${Math.round(value * 100)}%`;
  if (typeof value === "number") {
    return Number.isInteger(value) ? value : value.toFixed(1);
  }
  return value;
}

function buildStats(player) {
  const s = player.stats || {};
  switch (player.positionGroup) {
    case "Goalkeeper":
      return [
        { label: "Saves", value: s.saves },
        { label: "Save %", value: s.savePct, type: "pct" },
        { label: "Clean sheets", value: s.cleanSheets },
        { label: "GA/90", value: s.goalsAgainstPer90 },
        { label: "+/- PSxG", value: s.psxgPlusMinus },
      ];
    case "Defender":
      return [
        { label: "Tackles/90", value: s.tackles },
        { label: "Interceptions", value: s.interceptions },
        { label: "Clearances", value: s.clearances },
        { label: "Blocks", value: s.blocks },
        { label: "Pass accuracy", value: s.passAccuracy, type: "pct" },
      ];
    case "Midfielder":
      return [
        { label: "Assists", value: s.assists },
        { label: "Chances created", value: s.chancesCreated },
        { label: "Prog. passes/90", value: s.progressivePasses },
        { label: "Tackles/90", value: s.tackles },
        { label: "Pass accuracy", value: s.passAccuracy, type: "pct" },
      ];
    case "Forward":
      return [
        { label: "Goals", value: s.goals },
        { label: "Assists", value: s.assists },
        { label: "Shots/90", value: s.shotsPer90 },
        { label: "xG", value: s.xg },
        { label: "Chances created", value: s.chancesCreated },
      ];
    default:
      return [];
  }
}

function renderCard(player) {
  const stats = buildStats(player);
  const statMarkup = stats
    .map(
      (stat) => `
        <div class="stat">
          <label>${stat.label}</label>
          <strong>${formatStat(stat.value, stat.type)}</strong>
        </div>
      `
    )
    .join("");

  const positions = player.positions.join(" • ");
  const flagUrl = getCountryFlag(player.nation);
  const initials = getPlayerInitials(player.name);
  const imageUrl = getPlayerImageUrl(player);
  cardSlot.classList.remove("empty");
  cardSlot.innerHTML = `
    <div class="player-card fifa-card">
      <div class="fifa-card__top">
        <div class="fifa-card__image-container">
          <img src="${imageUrl}" alt="${player.name}" class="fifa-card__image" onload="this.nextElementSibling.style.display='none';" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" loading="lazy" />
          <div class="fifa-card__image-placeholder" data-initials="${initials}">
            ${initials}
          </div>
        </div>
        <div class="fifa-card__overlay">
          <div class="fifa-card__position-badge">${positions}</div>
        </div>
      </div>
      <div class="fifa-card__content">
        <div class="fifa-card__header">
          <h2 class="fifa-card__name">${player.name}</h2>
          <div class="fifa-card__age">${player.age}</div>
        </div>
        <div class="fifa-card__club-nation">
          <div class="fifa-card__club">
            <span>${player.club}</span>
          </div>
          <div class="fifa-card__nation">
            <img src="${flagUrl}" alt="${player.nation}" class="country-flag" onerror="this.style.display='none'" />
            <span>${player.nation}</span>
          </div>
        </div>
        <div class="fifa-card__position-group">
          <span class="position-badge position-badge--${player.positionGroup.toLowerCase()}">${player.positionGroup}</span>
        </div>
        <div class="fifa-card__stats">
          ${statMarkup}
        </div>
      </div>
    </div>
  `;

  const imgEl = cardSlot.querySelector('.fifa-card__image');
  const placeholderEl = cardSlot.querySelector('.fifa-card__image-placeholder');
  if (placeholderEl) placeholderEl.style.display = 'flex';
  applyPlayerImage(imgEl, placeholderEl, player);
}

function setError(message) {
  errorBox.textContent = message || "";
}

function handleSearch(event) {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    setError("Enter a player name to continue.");
    cardSlot.classList.add("empty");
    cardSlot.innerHTML =
      "<p class='placeholder-title'>Waiting for input...</p>";
    return;
  }
  const lowered = query.toLowerCase();
  const directMatch =
    players.find((p) => p.name.toLowerCase() === lowered) ||
    players.find((p) => p.name.toLowerCase().includes(lowered));

  if (directMatch) {
    renderCard(directMatch);
    setError("");
    return;
  }

  const suggestion = findSuggestion(query);
  if (suggestion) {
    alert(`Hey did you mean to type ${suggestion}?`);
    const suggestedPlayer = players.find(
      (p) => p.name.toLowerCase() === suggestion.toLowerCase()
    );
    if (suggestedPlayer) {
      input.value = suggestedPlayer.name;
      renderCard(suggestedPlayer);
      setError("");
      return;
    }
  }

  setError("No player found. Try a different spelling.");
  cardSlot.classList.add("empty");
  cardSlot.innerHTML = `
    <p class="placeholder-title">Player not found</p>
    <p class="placeholder-copy">Check the roster below for supported names.</p>
  `;
}

function renderRosterSummary() {
  const groups = ["Goalkeeper", "Defender", "Midfielder", "Forward"];
  positionGrid.innerHTML = groups
    .map((group) => {
      const names = groupedPlayers[group] || [];
      const chips = names
        .map((p) => `<li>${p.name}</li>`)
        .join("");
      return `
        <div class="position-card">
          <h3>${group}s (${names.length})</h3>
          <ul>${chips}</ul>
        </div>
      `;
    })
    .join("");
}

function init() {
  renderRosterSummary();
  form.addEventListener("submit", handleSearch);
  input.addEventListener("input", () => setError(""));
}

init();

