// 頂点。中身は最短のコスト
var a = {
	num: 0,
	name: "a",
	weight: null,
	root: "a"
};
var b = {
	num: 1,
	name: "b",
	weight: null,
	root: ""
};
var c = {
	num: 2,
	name: "c",
	weight: null,
	root: ""
};
var d = {
	num: 3,
	name: "d",
	weight: null,
	root: ""
};
var e = {
	num: 4,
	name: "e",
	weight: null,
	root: ""
};
var f = {
	num: 5,
	name: "f",
	weight: null,
	root: ""
};
var g = {
	num: 6,
	name: "g",
	weight: null,
	root: ""
};
var h = {
	num: 7,
	name: "h",
	weight: null,
	root: ""
};

// 頂点を全部入れた配列
var vertexes = [a,b,c,d,e,f,g,h];


// 00
var ab;
var ac;
var ad;
var bd;
var bh;
var cd;
var ce;
var de;
var df;
var dg;
var dh;
var eg;
var fg;
var fh;
var hg;

// インデックスを合わせるための変数
var aa = null;
var ae = null;
var af = null;
var ag = null;
var ah = null;
var ba = null;
var bb = null;
var bc = null;
var be = null;
var bf = null;
var bg = null;
var ca = null;
var cb = null;
var cc = null;
var cf = null;
var cg = null;
var ch = null;
var da = null;
var db = null;
var dc = null;
var dd = null;
var ea = null;
var eb = null;
var ec = null;
var ed = null;
var ee = null;
var ef = null;
var eh = null;
var fa = null;
var fb = null;
var fc = null;
var fd = null;
var fe = null;
var ff = null;
var ga = null;
var gb = null;
var gc = null;
var gd = null;
var ge = null;
var gf = null;
var gg = null;
var ha = null;
var hb = null;
var hc = null;
var hd = null;
var he = null;
var hf = null;
var gh = null;
var hh = null;

// 各辺の重み
var distances = [];

// 無限と仮定。すべての辺の長さの合計より大きければ良い
var infinity = 999999999999;
// 未使用の頂点
var yet_vertexes = [];
// 使用済みの頂点
var used_vertexes = [];
// 最小コストの頂点
var min_vertex;

// 初期化する
function initialize() {
	for(var i = 0; i < vertexes.length; i++) {
		vertexes[i].weight = infinity;
		yet_vertexes.push(vertexes[i]);
	}
	a.weight = 0;
}

// 最小値を検索する
function search() {
	for(var i = 0; i < yet_vertexes.length; i++) {
		if(min_vertex == null || yet_vertexes[i].weight < min_vertex.weight) {
			min_vertex = yet_vertexes[i];
		}
	}
}

// 更新する
function renew() {
	for(var i = 0; i < min_vertex.connection.length; i++) {
		// (xの現在のコスト) > (x → yの距離)　＋ (yのコスト)なら更新
		if(Number(min_vertex.connection[i].weight) > Number(distances[min_vertex.num][min_vertex.connection[i].num]) + Number(min_vertex.weight)) {
			// alert(distances[min_vertex.num][min_vertex.connection[i].num]);
			// alert(min_vertex.weight);
			// alert(Number(distances[min_vertex.num][min_vertex.connection[i].num]) + Number(min_vertex.weight));
			min_vertex.connection[i].weight = (Number(distances[min_vertex.num][min_vertex.connection[i].num]) + Number(min_vertex.weight));
			// for(var j = 0; j < min_vertex.root.length; j++) {
			// 	min_vertex.connection[i].root.push(min_vertex.root[j]);
			// }
			min_vertex.connection[i].root = "";
			min_vertex.connection[i].root += min_vertex.root;
			min_vertex.connection[i].root += min_vertex.connection[i].name;
			// alert((distances[min_vertex.num][min_vertex.connection[i].num] + min_vertex.weight));
			// alert("もと" + min_vertex.name + "本の重み" + min_vertex.weight + "名前" + min_vertex.connection[i].name + "重み" + min_vertex.connection[i].weight);
			// alert(c.weight);
		}
	}
	used_vertexes.push(min_vertex);
	// 配列から特定の要素を削除する(quitaの記事を参考にした)
	var target = min_vertex;
	yet_vertexes.some(function(v, i) {
		if(v==target) yet_vertexes.splice(i,1);
	});
	min_vertex = yet_vertexes[0];
}

// ダイクストラ法を用いて最短距離問題を解く
function solve() {
	setting();
	initialize();
	while(yet_vertexes.length > 0) {
		search();
		renew();
	}
	document.getElementById('a2').value = a.weight;
	document.getElementById('b2').value = b.weight;
	document.getElementById('c2').value = c.weight;
	document.getElementById('d2').value = d.weight;
	document.getElementById('e2').value = e.weight;
	document.getElementById('f2').value = f.weight;
	document.getElementById('g2').value = g.weight;
	document.getElementById('h2').value = h.weight;
	document.getElementById('a1').value = a.root;
	document.getElementById('b1').value = b.root;
	document.getElementById('c1').value = c.root;
	document.getElementById('d1').value = d.root;
	document.getElementById('e1').value = e.root;
	document.getElementById('f1').value = f.root;
	document.getElementById('g1').value = g.root;
	document.getElementById('h1').value = h.root;
}

// javascriptの都合上この位置に書きたかった初期設定
function setting() {
	a.connection = [b,c,d];
	b.connection = [a,d,h];
	c.connection = [a,d,e];
	d.connection = [a,b,c,e,f,g,h];
	e.connection = [c,d,g];
	f.connection = [d,g,h];
	g.connection = [d,e,f,h];
	h.connection = [b,d,f,g];
	ab = document.getElementById('ab1').value;
	ac = document.getElementById('ac1').value;
	ad = document.getElementById('ad1').value;
	bd = document.getElementById('bd1').value;
	bh = document.getElementById('bh1').value;
	cd = document.getElementById('cd1').value;
	ce = document.getElementById('ce1').value;
	de = document.getElementById('de1').value;
	df = document.getElementById('df1').value;
	dg = document.getElementById('dg1').value;
	dh = document.getElementById('dh1').value;
	eg = document.getElementById('eg1').value;
	fg = document.getElementById('fg1').value;
	fh = document.getElementById('fh1').value;
	hg = document.getElementById('gh1').value;
	distances.push([aa,ab,ac,ad,ae,af,ag,ah]);		//0-1,2,3
	distances.push([ba,bb,bc,bd,be,bf,bg,bh]);	//2
	distances.push([ca,cb,cc,cd,ce,cf,cg,ch]);	//3
	distances.push([da,db,dc,dd,de,df,dg,dh]);	//4
	distances.push([ea,eb,ec,ed,ee,ef,eg,eh]);	//5
	distances.push([fa,fb,fc,fd,fe,ff,fg,fh]);	//6
	distances.push([ga,gb,gc,gd,ge,gf,gg,gh]);	//7
	distances.push([ha,hb,hc,hd,he,hf,hg,hh]);
}

function reset() {
	location.reload();
}

// //  よく使うテスト
// for(var j = 0; j < yet_vertexes.length; j++) {
// 		alert(yet_vertexes[j].name);
// 	}