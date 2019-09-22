// 宋体 SimSun
// 黑体 SimHei
// 微软雅黑 Microsoft YaHei
// 微软正黑体 Microsoft JhengHei
// 新宋体 NSimSun
// 新细明体 PMingLiU
// 细明体 MingLiU
// 标楷体 DFKai-SB
// 仿宋 FangSong
// 楷体 KaiTi
// 仿宋_GB2312 FangSong_GB2312
// 楷体_GB2312 KaiTi_GB2312

const fontNameOptions = [
	{
		val: 0,
		name: "Arial"
	},
	{
		val: 1,
		name: "KaiTi"
	},
	{
		val: 2,
		name: "NSimSun"
	},
	{
		val: 3,
		name: "MingLiU"
	},
	{
		val: 4,
		name: "FangSong"
	},
	{
		val: 5,
		name: "SimSun"
	},
	{
		val: 6,
		name: "SimHei"
	}
];

const fontSizeOptions = [
	{
		val: 0,
		name: "1"
	},
	{
		val: 1,
		name: "2"
	},
	{
		val: 2,
		name: "3"
	},
	{
		val: 3,
		name: "4"
	},
	{
		val: 4,
		name: "5"
	},
	{
		val: 5,
		name: "6"
	},
	{
		val: 6,
		name: "7"
	}
];

function getValFromName(scmd, name) {
	let searchArr;
	if (scmd == "fontname") {
		searchArr = fontNameOptions;
	} else {
		searchArr = fontSizeOptions;
	}
	const item = searchArr.filter(item => (item.name == name ? true : false));
	try {
		return item[0].val;
	} catch (error) {
		return "";
	}
}

function getNameFromVal(scmd,val) {
    let searchArr;
	if (scmd == "fontname") {
		searchArr = fontNameOptions;
	} else {
		searchArr = fontSizeOptions;
	}
	const item = searchArr.filter(item => (item.val == val ? true : false));
	try {
		return item[0].name;
	} catch (error) {
		return "";
	}
}

export { fontNameOptions, fontSizeOptions, getValFromName,getNameFromVal };
