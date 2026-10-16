/* =========================== */
/* ===== 調査記録のデータ定義 ===== */
/* =========================== */

/* ===== ページ一覧 ===== */
const archiveData = [
	// 見本
	// no: 2,
	// title: "『バス』の記憶",
	// url: "/re_nameisasleep/2_Bus_LPHKDS.html",
	// visited: localStorage.getItem("visited_2_Bus") === "true",
	// related: "<details><summary></summary>1</details>"
	// words [検索のデータ定義]
	{
		no: 1,
		title: "調査方法",
		url: "/re_nameisasleep/1_second.html",
		visited: true,
		related: "-"
	}, {
		no: 2,
		title: "『バス』の記憶",
		url: "/re_nameisasleep/2_Bus_LPHKDS.html",
		key: "visited_2_Bus",
		visited: localStorage.getItem("visited_2_Bus") === "true",
		related: "<details><summary></summary>1</details>",
		words: ["バス"],
	}, {
		no: 3,
		title: "『岩』の記憶",
		url: "/re_nameisasleep/3_Rock_VJXWEN.html",
		key: "visited_3_Rock",
		visited: localStorage.getItem("visited_3_Rock") === "true",
		related: "<details><summary></summary>4</details>",
		words: ["岩"],
	}, {
		no: 4,
		title: "『鼻水』の記憶",
		url: "/re_nameisasleep/4_Snot_BRCYUF.html",
		key: "visited_4_Snot",
		visited: localStorage.getItem("visited_4_Snot") === "true",
		related: "<details><summary></summary>10</details>",
		words: ["鼻水"],
	}, {
		no: 5,
		title: "『館』の記憶",
		url: "/re_nameisasleep/5_Mansion_TNDKLA.html",
		key: "visited_5_Mansion",
		visited: localStorage.getItem("visited_5_Mansion") === "true",
		related: "<details><summary></summary>2</details>",
		words: ["館"],
	}, {
		no: 6,
		title: "『皿の破片』の記憶",
		url: "/re_nameisasleep/6_PlateShards_AXQJMP.html",
		key: "visited_6_PlateShards",
		visited: localStorage.getItem("visited_6_PlateShards") === "true",
		related: "<details><summary></summary>7</details>",
		words: ["皿の破片"],
	}, {
		no: 7,
		title: "『キッチン』の記憶",
		url: "/re_nameisasleep/7_Kitchen_SFWZHC.html",
		key: "visited_7_Kitchen",
		visited: localStorage.getItem("visited_7_Kitchen") === "true",
		related: "<details><summary></summary>5</details>",
		words: ["キッチン"],
	}, {
		no: 8,
		title: "『時計』の記憶",
		url: "/re_nameisasleep/8_Clock_RYVTKE.html",
		key: "visited_8_Clock",
		visited: localStorage.getItem("visited_8_Clock") === "true",
		related: "<details><summary></summary>7</details>",
		words: ["時計"],
	}, {
		no: 9,
		title: "『リビング』の記憶",
		url: "/re_nameisasleep/9_LivingRoom_GDMXPN.html",
		key: "visited_9_LivingRoom",
		visited: localStorage.getItem("visited_9_LivingRoom") === "true",
		related: "<details><summary></summary>8</details>",
		words: ["リビング", "リビングルーム"],
	}, {
		no: 10,
		title: "『テロリスト塾』の記憶",
		url: "/re_nameisasleep/10_TerroristSchool_HULZQW.html",
		key: "visited_10_TerroristSchool",
		visited: localStorage.getItem("visited_10_TerroristSchool") === "true",
		related: "<details><summary></summary>1</details>",
		words: ["テロリスト塾", "塾", "テロ塾", "テロリストスクール"],
	}, {
		no: 11,
		title: "『人間ぶっ殺しゾーン』の記憶",
		url: "/re_nameisasleep/11_Human-KillingZone_CJKTRB.html",
		key: "visited_11_Human-KillingZone",
		visited: localStorage.getItem("visited_11_Human-KillingZone") === "true",
		related: "<details><summary></summary>10</details>",
		words: ["人間ぶっ殺しゾーン", "犯罪ゾーン", "良くないゾーン"],
	}, {
		no: 12,
		title: "『寝室』の記憶",
		url: "/re_nameisasleep/12_Bedroom_EPMVYA.html",
		key: "visited_12_Bedroom",
		visited: localStorage.getItem("visited_12_Bedroom") === "true",
		related: "<details><summary></summary>11</details>",
		words: ["寝室"],
	}, {
		no: 13,
		title: "『固定カメラ』の記憶",
		url: "/re_nameisasleep/13_FixedCamera_ZNWFQS.html",
		key: "visited_13_FixedCamera",
		visited: localStorage.getItem("visited_13_FixedCamera") === "true",
		related: "<details><summary></summary>12</details>",
		words: ["固定カメラ", "カメラ", "監視カメラ"],
	}, {
		no: 14,
		title: "『冷凍庫』の記憶",
		url: "/re_nameisasleep/14_Freezer_ARQZHV.html",
		key: "visited_14_FixedCamera",
		visited: localStorage.getItem("visited_14_FixedCamera") === "true",
		related: "<details><summary></summary>12</details>",
		words: ["冷凍庫"],
	}, {
		no: 15,
		title: "『黄色のリボン』の記憶",
		url: "/re_nameisasleep/15_YellowRibbon_PVSQEH.html",
		key: "visited_15_YellowRibbon",
		visited: localStorage.getItem("visited_15_YellowRibbon") === "true",
		related: "<details><summary></summary>14</details>",
		words: ["黄色のリボン", "黄色いリボン", "マミカラーのリボン"],
	}, {
		no: 16,
		title: "『ロビー』の記憶",
		url: "/re_nameisasleep/16_Lobby_KRXDUL.html",
		key: "visited_16_Lobby",
		visited: localStorage.getItem("visited_16_Lobby") === "true",
		related: "<details><summary></summary>13</details>",
		words: ["ロビー"],
	}, {
		no: 17,
		title: "『手塚ゾーン』の記憶",
		url: "/re_nameisasleep/17_Tezuka-Zone_MTAJCG.html",
		key: "visited_17_Tezuka-Zone",
		visited: localStorage.getItem("visited_17_Tezuka-Zone") === "true",
		related: "<details><summary></summary>15</details>",
		words: ["手塚ゾーン"],
	}, {
		no: 18,
		title: "『ヘッドホン』の記憶",
		url: "/re_nameisasleep/18_Headphones_WJADXF.html",
		key: "visited_18_Headphones",
		visited: localStorage.getItem("visited_18_Headphones") === "true",
		related: "<details><summary></summary>27</details>",
		words: ["ヘッドホン", "ヘッドフォン", "ヘッドセット", "イヤフォン", "イヤホン"],
	}, {
		no: 19,
		title: "『けっとうじょう』の記憶",
		url: "/re_nameisasleep/19_Battlefield_LQHPMC.html",
		key: "visited_19_Battlefield",
		visited: localStorage.getItem("visited_19_Battlefield") === "true",
		related: "<details><summary></summary>27</details>",
		words: ["けっとうじょう", "決闘場", "バトルフィールド"],
	}, {
		no: 20,
		title: "『スリング』の記憶",
		url: "/re_nameisasleep/20_Sling_FZVTRS.html",
		key: "visited_20_Sling",
		visited: localStorage.getItem("visited_20_Sling") === "true",
		related: "<details><summary></summary>27</details>",
		words: ["スリング", "投石紐"],
	}, {
		no: 21,
		title: "『きあいのタスキ』の記憶",
		url: "/re_nameisasleep/21_FocusSash_YKBRZN.html",
		key: "visited_21_FocusSash",
		visited: localStorage.getItem("visited_21_FocusSash") === "true",
		related: "<details><summary></summary>27</details>",
		words: ["きあいのタスキ"],
	}, {
		no: 22,
		title: "『書斎』の記憶",
		url: "/re_nameisasleep/22_StudyRoom_BZLQKF.html",
		key: "visited_22_StudyRoom",
		visited: localStorage.getItem("visited_22_StudyRoom") === "true",
		related: "<details><summary></summary>27</details>",
		words: ["書斎"],
	}, {
		no: 23,
		title: "『子供部屋』の記憶",
		url: "/re_nameisasleep/23_Children'sRoom_TEGMVP.html",
		key: "visited_23_Children'sRoom",
		visited: localStorage.getItem("visited_23_Children'sRoom") === "true",
		related: "<details><summary></summary>27</details>",
		words: ["子供部屋", "キッズルーム", "子ども部屋", "チャイルドルーム", "こども部屋"],
	}, {
		no: 24,
		title: "END 1",
		url: "/re_nameisasleep/24_END1_QWUPKC.html",
		key: "visited_24_END1",
		visited: localStorage.getItem("visited_24_END1") === "true",
		related: "<details><summary></summary>名簿作成に一部誤りがある</details>"
	}, {
		no: 25,
		title: "END 2",
		url: "/re_nameisasleep/25_END2_VCFHNY.html",
		key: "visited_25_END2",
		visited: localStorage.getItem("visited_25_END2") === "true",
		related: "<details><summary></summary>名簿作成が全て正しい</details>"
	},
	// {
	// 	no: 25,
	// 	title: "報告前",
	// 	url: "/re_nameisasleep/32_BeforeReporting_VCFHNY.html",
	// 	key: "visited_32_BeforeReporting",
	// 	visited: localStorage.getItem("visited_32_BeforeReporting") === "true",
	// 	related: "-"
	// }, {
	// 	no: 26,
	// 	title: "END3",
	// 	url: "/re_nameisasleep/33_END3_DPRJXK.html",
	// 	key: "visited_33_END3",
	// 	visited: localStorage.getItem("visited_33_END3") === "true",
	// 	related: "<details><summary></summary>名簿作成が全て正しい</details>"
	// }
];



/* =========================== */
/* ===== 名簿作成のデータ定義 ===== */
/* =========================== */

/* ===== 正解データ（必ず24要素） ===== */
const correctData = [
	{ lastName: "アンドウ", firstName: "マコト", deathFactor: "土砂崩れ", cause: "転落死" },
	{ lastName: "ニャン", firstName: "チュウ", deathFactor: "川", cause: "溺死" },
	{ lastName: "ボー", firstName: "チャン", deathFactor: "川", cause: "溺死" },
	{ lastName: "ナチョ", firstName: "ネコ", deathFactor: "生存", cause: "生存" },
	{ lastName: "トモエ", firstName: "マミ", deathFactor: "生存", cause: "生存" },
	{ lastName: "カニ", firstName: "モニカ", deathFactor: "怪異", cause: "凍死" },
	{ lastName: "ヨネムラ", firstName: "デンジロウ", deathFactor: "声No7", cause: "銃殺" },
	{ lastName: "ノンデリ", firstName: "ロボ", deathFactor: "声No5", cause: "銃殺" },
	{ lastName: "イワマ", firstName: "ムテキ", deathFactor: "生存", cause: "生存" },
	{ lastName: "コンドウ", firstName: "カイト", deathFactor: "声No21", cause: "毒死" },
	{ lastName: "ヒノ", firstName: "ケント", deathFactor: "生存", cause: "生存" },
	{ lastName: "ハイタニ", firstName: "タケシ", deathFactor: "声No5", cause: "銃殺" },
	{ lastName: "アン", firstName: "ミカ", deathFactor: "怪異", cause: "凍死" },
	{ lastName: "オトハラ", firstName: "タクロウ", deathFactor: "声No21", cause: "毒死" },
	{ lastName: "ミズノ", firstName: "ユウト", deathFactor: "生存", cause: "生存" },
	{ lastName: "ウサダ", firstName: "ペコラ", deathFactor: "声No16", cause: "圧死" },
	{ lastName: "クサノ", firstName: "ハヤト", deathFactor: "生存", cause: "生存" },
	{ lastName: "ガブ", firstName: "リアス", deathFactor: "声No21", cause: "呪殺" },
	{ lastName: "レインホール", firstName: "アニ", deathFactor: "生存", cause: "生存" },
	{ lastName: "カツラギ", firstName: "リーリヤ", deathFactor: "生存", cause: "生存" },
	{ lastName: "ヨイザキ", firstName: "アイリス", deathFactor: "生存", cause: "生存" },
	{ lastName: "ヒカ", firstName: "キン", deathFactor: "声No21", cause: "呪殺" },
	{ lastName: "ミル", firstName: "ホッグ", deathFactor: "声No21", cause: "呪殺" },
	{ lastName: "カネキ", firstName: "ケン", deathFactor: "声No20", cause: "銃殺" }
];

//2周目用
const correctData2 = [
	{ lastName: "ハセガワ", firstName: "マコト", deathFactor: "土砂崩れ", cause: "転落死" },
	{ lastName: "ヤマダ", firstName: "タクミ", deathFactor: "土砂崩れ", cause: "圧死" },
	{ lastName: "スズキ", firstName: "ソウタ", deathFactor: "声No25", cause: "溺死" },
	{ lastName: "シライシ", firstName: "ホノカ", deathFactor: "声No4", cause: "焼死" },
	{ lastName: "ミヤモト", firstName: "アユミ", deathFactor: "声No5", cause: "失血死(刺傷)" },
	{ lastName: "ヒラノ", firstName: "リサ", deathFactor: "声No7", cause: "凍死" },
	{ lastName: "サトウ", firstName: "リク", deathFactor: "生存", cause: "生存" },
	{ lastName: "ミウラ", firstName: "ミク", deathFactor: "声No7", cause: "転落死" },
	{ lastName: "クロキ", firstName: "ユイカ", deathFactor: "声No7", cause: "失血死(打撲)" },
	{ lastName: "コンドウ", firstName: "カイト", deathFactor: "声No25", cause: "中毒死" },
	{ lastName: "オオキ", firstName: "ケント", deathFactor: "声No11", cause: "転落死" },
	{ lastName: "ヤマグチ", firstName: "ハルミ", deathFactor: "土砂崩れ", cause: "病死" },
	{ lastName: "タケダ", firstName: "コトハ", deathFactor: "雨", cause: "溺死" },
	{ lastName: "アンドウ", firstName: "ユウナ", deathFactor: "声No25", cause: "失血死(刺傷)" },
	{ lastName: "オオモリ", firstName: "ユウト", deathFactor: "雨", cause: "溺死" },
	{ lastName: "オガワ", firstName: "チサト", deathFactor: "声No25", cause: "失血死(刺傷)" },
	{ lastName: "オオバヤシ", firstName: "ハヤト", deathFactor: "声No25", cause: "転落死" },
	{ lastName: "サイトウ", firstName: "レン", deathFactor: "声No18", cause: "圧死" },
	{ lastName: "イノウエ", firstName: "シュウト", deathFactor: "声No25", cause: "中毒死" },
	{ lastName: "キノシタ", firstName: "モモ", deathFactor: "声No25", cause: "失血死(刺傷)" },
	{ lastName: "ウチダ", firstName: "レイナ", deathFactor: "声No25", cause: "中毒死" },
	{ lastName: "シミズ", firstName: "ダイチ", deathFactor: "声No23", cause: "失血死(刺傷)" },
	{ lastName: "ナカムラ", firstName: "ハルト", deathFactor: "声No25", cause: "転落死" },
	{ lastName: "カトウ", firstName: "シュウ", deathFactor: "声No25", cause: "感電死" },
	{
		lastName: "ヨイザキ",
		firstName: "__ANY__",   // ← 空欄でなければOK
		deathFactor: "両親",
		cause: "溺死"
	}
];


// 行ごとのヒント（ここを自由に直書き）
const hints = [
	"<details><summary></summary>2 / 2 / 2 / 2</details>",
	"<details><summary></summary>10 / 2 / 4 / 4</details>",
	"<details><summary></summary>10 / 2 / 4 / 4</details>",
	"<details><summary></summary>17 / 11 / 17 / 17</details>",
	"<details><summary></summary>12 / 2 / 13 / 13</details>",
	"<details><summary></summary>23 / 22 / 2,23 / 23</details>",
	"<details><summary></summary>12 / 23 / - / -</details>",
	"<details><summary></summary>9,25 / 9 / 25 / 25</details>",
	"<details><summary></summary>9 / 24 / 25,26 / 25,26</details>",
	"<details><summary></summary>2,7 / 6 / 6 / 7</details>",
	"<details><summary></summary>8,10 / 22 / 26 / 26</details>",
	"<details><summary></summary>8 / 7,8,17 / 11 / 11</details>",
	"<details><summary></summary>12 / 9 / 29 / 29</details>",
	"<details><summary></summary>5 / 18,19 / 19,20 / 20</details>",
	"<details><summary></summary>12 / 10 / 29 / 29</details>",
	"<details><summary></summary>14 / 17 / 18 / 19</details>",
	"<details><summary></summary>8,10 / 10 / 26 / 26</details>",
	"<details><summary></summary>8 / 8 / 8 / 8</details>",
	"<details><summary></summary>8 / 6 / 6 / 7</details>",
	"<details><summary></summary>14 / 14 / 19 / 19</details>",
	"<details><summary></summary>6 / 5 / 6 / 7</details>",
	"<details><summary></summary>22 / 16 / 26 / 16</details>",
	"<details><summary></summary>14 / 26 / 26 / 26</details>",
	"<details><summary></summary>6 / 6 / 21 / 22</details>"
];

// 死亡要因（声No1〜24を自動生成）
const deathFactors = [
	"生存", "土砂崩れ", "川", "雨", "落雷", "怪異",
	...Array.from({ length: 24 }, (_, i) => `声No${i + 1}`)
];

// 死亡要因（声No1〜24を自動生成）2周目のみ
const deathFactors2 = [
	"生存", "土砂崩れ", "川", "雨", "落雷", "両親",
	...Array.from({ length: 24 }, (_, i) => `声No${i + 1}`), "声No25"
];

// 死因
const causesOfDeath = [
	"生存", "凍死", "失血死(刺傷)", "射殺", "圧死", "呪殺", "失血死(打撲)", "中毒死", "毒殺",
	"溺死", "焼死", "病死", "転落死", "感電死", "反動死"
];

// 自動保存
function autoSave() {
	const data = [];
	const rows = table.querySelectorAll("tr");

	rows.forEach(row => {
		data.push({
			lastName: row.querySelector(".lastName").value,
			firstName: row.querySelector(".firstName").value,
			deathFactor: row.querySelector(".deathFactor").value,
			cause: row.querySelector(".cause").value,
			memo: row.querySelector(".memo").value
		});
	});

	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// 自動読込
function autoLoad() {
	const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
	if (!data) return;

	// ===== 旧→新 変換マップ =====
	const causeMap = {
		"圧殺": "圧死",
		"刺殺": "失血死(刺傷)",
		"撲殺": "失血死(打撲)",
		"毒殺": "中毒死"
	};

	const rows = table.querySelectorAll("tr");
	rows.forEach((row, index) => {

		const rowData = data[index];
		if (!data[index]) return;

		// 姓
		row.querySelector(".lastName").value =
			rowData.lastName || "";

		// 名
		row.querySelector(".firstName").value =
			rowData.firstName || "";

		// 死亡要因
		row.querySelector(".deathFactor").value =
			rowData.deathFactor || "";

		// 死因（変更前の文字列だった場合、変換してからセット）
		const normalizedCause =
			causeMap[rowData.cause] || rowData.cause || "";

		row.querySelector(".cause").value =
			normalizedCause;

		//自由入力欄
		row.querySelector(".memo").value =
			rowData.memo || "";

	});
}

/* =========================== */
/* ===== 会話ページのデータ定義 ===== */
/* =========================== */

/* ===== キャラクター設定 ===== */
// 名簿データを取得
const deathData = JSON.parse(localStorage.getItem("deathData")) || [];

// Person1〜Person25 を自動生成
const characters = {};

// 固定キャラ
characters.parallel = {
	name: "パラレルワールド",
	img: "/re_nameisasleep/img/person_ParallelWorld.png"
};

characters.psychometry = {
	name: "サイコメトリー",
	img: "/re_nameisasleep/img/person_Psychometry.png"
};

// 名簿キャラ（共通化）
for (let i = 1; i <= 26; i++) {
	const data = deathData[i - 1] || {};
	const last = (data.lastName || "").trim();
	const first = (data.firstName || "").trim();

	let displayName;

	if (last && first) {
		//    displayName = `${last} ${first}`;
		displayName = `${i}.${last} ${first}`.trim();
	} else if (last || first) {
		//    displayName = last || first;
		displayName = `${i}.${last} ${first}`.trim();
	} else if (i == 25 || i == 26) {
		displayName = '？？？';
	} else {
		displayName = `名簿No.${i}`;
	}

	characters[`Person${i}`] = {
		name: displayName,
		img: `/re_nameisasleep/img/person_${String(i).padStart(2, "0")}.png`
	};
}

/* =========================== */
/* ===== ローカルストレージ初期化 ===== */
/* =========================== */

const STORAGE_KEYS = [
	"deathData",
	"deathErrors",
	"signFirstName",
	"signLastName",
];

function clearSiteStorage() {
	STORAGE_KEYS.forEach(key => {
		localStorage.removeItem(key);
	});

	archiveData.forEach(item => {
		if (item.key) {
			localStorage.removeItem(item.key);
		}
	});
}

document.getElementById("clearStorageBtn")
	?.addEventListener("click", () => {

		const ok = confirm(
			"すべての調査記録と名簿情報を消去します。\n本当によろしいですか？"
		);

		if (!ok) return;

		clearSiteStorage();
		alert("消去しました。");
	});

/* =========================== */
/* ===== 処理系 ===== */
/* =========================== */

/* ===== ヘッダー読み込み ===== */
const headerEl = document.getElementById("header");

if (headerEl) {
	fetch("/re_nameisasleep/header.html")
		.then(response => response.text())
		.then(data => {
			headerEl.innerHTML = data;

			if (typeof initHeaderSearch === "function") {
				initHeaderSearch();
			}
		});
}

/* ===== フッター読み込み ===== */
fetch("/re_nameisasleep/footer.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("footer").innerHTML = data;
	});


/* ===== ページ要素読み取り系の処理 ===== */
function initHeaderSearch() {

	/* ===== 検索 ===== */
	const input = document.getElementById("searchInput");
	const btn = document.getElementById("searchBtn");
	const popup = document.getElementById("searchPopup");

	if (!btn) return; // 保険

	btn.addEventListener("click", () => executeSearch(input, popup));

	input.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			e.preventDefault(); // フォーム送信を防ぐ
			executeSearch(input, popup);
		}
	});

	//検索ポップアップを閉じる
	document.addEventListener("click", function (e) {

		const popup = document.getElementById("searchPopup");
		const searchBox = document.getElementById("searchInput"); // 検索入力欄

		if (!popup || popup.style.display !== "block") return;

		// ポップアップ内でも検索欄でもない場所をクリックしたら閉じる
		if (!popup.contains(e.target) && !searchBox.contains(e.target)) {
			closeSearchPopup();
		}

	});

	//検索ボタン側で伝播を止める
	document.getElementById("searchBtn")
		.addEventListener("click", function (e) {
			e.stopPropagation();
			executeSearch();
		});


	/* ===== 会話書き出し ===== */
	if (typeof talks !== "undefined") {
		const container = document.getElementById("talk");

		talks.forEach(t => {

			// 水平線
			if (t.type === "hr") {
				const hr = document.createElement("hr");
				hr.className = "talk-separator";
				container.appendChild(hr);
				return;
			}

			// 条件付き表示チェック 2周目表示用
			if (t.condition) {
				const flag = localStorage.getItem(t.condition);
				if (flag !== "true") return;
			}

			// 注釈（地の文）
			if (t.type === "narration") {
				const p = document.createElement("p");
				p.className = "narration";
				p.textContent = t.text;
				container.appendChild(p);
				return;
			}

			// 通常会話
			if (t.type === "message") {
				const chara = characters[t.speaker];

				const message = document.createElement("div");
				message.className = "message";


				// 背景色指定があれば適用 2周目表示用
				if (t.bgColor) {
					message.style.backgroundColor = t.bgColor;
				}

				message.innerHTML = `
        			<div class="message_layout">

          				<div class="left_column">
            				<div class="face_area">
              					<img src="${chara.img}" class="face">
            				</div>
            			<div class="name_area">
              			<p>${chara.name}</p>
            		</div>
         			 </div>

          			<div class="content">
           				<p class="says">${t.text.replace(/\n/g, "<br>")}</p>
          			</div>

        			</div><br>
        		`;

				container.appendChild(message);
			}
		});
	}
}

/* ===== 検索ポップアップを閉じる ===== */
function closeSearchPopup() {
	const popup = document.getElementById("searchPopup");
	if (popup) {
		popup.style.display = "none";
	}
}

/* ===== クリックとEnterで 同じ処理を使い回す ===== */
function executeSearch(input, popup) {
	const word = input.value.trim();

	popup.innerHTML = "";
	popup.classList.remove("error");
	popup.style.display = "block";

	if (!word) {
		popup.style.display = "none";
		return;
	}

	// スペース（半角・全角）チェック
	if (/\s|　/.test(word)) {
		popup.classList.add("error");
		popup.innerHTML = `
      		調査対象：【${word}】<br>
      		記憶情報が存在しません。<br>
      		※スペース（空白）は入れないでください。
      	`;
		return;
	}

	// 共通ヘッダ
	const headerText = `調査対象：【${word}】<br>`;

	// ヒットした場合
	archiveData.forEach(item => {
		if (item.words && item.words.indexOf(word) !== -1) {
			popup.innerHTML = `
				${headerText}
				記憶情報を読み取ります。<br><br>
				<a href="${item.url}" target="_blank">
					${item.title}
				</a>
			`;
			return;
		}
	});

	// ヒットしない場合
	if (popup.innerHTML === "") {
		popup.classList.add("error");
		popup.innerHTML = `
		${headerText}
		有用な記憶情報が存在しません。
	`;
	}
}
