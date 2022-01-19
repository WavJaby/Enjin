class RaspberryJamMod {
	blockList = [
		{value:"0",text:"空氣"},{value:"1",text:"石頭"},{value:"1:1",text:"花崗岩"},{value:"1:2",text:"拋光花崗岩"},{value:"1:3",text:"閃長岩"},{value:"1:4",text:"拋光閃長岩"},{value:"1:5",text:"安山岩"},{value:"1:6",text:"拋光安山岩"},{value:"Deepslate",text:"深板岩"},{value:"Cobbled Deepslate",text:"深板岩碎石"},{value:"Polished Deepslate",text:"拋光深板岩"},{value:"Calcite",text:"方解石"},{value:"Tuff",text:"凝灰岩"},{value:"Dripstone Block",text:"鐘乳石方塊"},{value:"2",text:"草地"},{value:"3",text:"泥土"},{value:"3:1",text:"粗泥"},{value:"3:2",text:"灰壤"},{value:"Rooted Dirt",text:"扎根土"},{value:"Crimson Nylium",text:"緋紅菌絲石"},{value:"Warped Nylium",text:"扭曲菌絲石"},{value:"4",text:"鵝卵石"},{value:"5",text:"橡木材"},{value:"5:1",text:"杉木材"},{value:"5:2",text:"樺木材"},{value:"5:3",text:"叢林木材"},{value:"5:4",text:"相思木材"},{value:"5:5",text:"黑橡木材"},{value:"Crimson Planks",text:"緋紅蕈木材"},{value:"Warped Planks",text:"扭曲蕈木材"},{value:"6",text:"橡木樹苗"},{value:"6:1",text:"杉木樹苗"},{value:"6:2",text:"樺木樹苗"},{value:"6:3",text:"叢林木樹苗"},{value:"6:4",text:"相思木樹苗"},{value:"6:5",text:"黑橡木樹苗"},{value:"7",text:"基岩"},{value:"12",text:"沙"},{value:"12:1",text:"紅沙"},{value:"13",text:"礫石"},{value:"16",text:"煤礦"},{value:"Deepslate Coal Ore",text:"深板岩煤礦"},{value:"15",text:"鐵礦"},{value:"Deepslate Iron Ore",text:"深板岩鐵礦"},{value:"Copper Ore",text:"銅礦"},{value:"Deepslate Copper Ore",text:"深板岩銅礦"},{value:"14",text:"金礦"},{value:"Deepslate Gold Ore",text:"深板岩金礦"},{value:"73",text:"紅石礦"},{value:"Deepslate Redstone Ore",text:"深板岩紅石礦"},{value:"129",text:"綠寶石礦"},{value:"Deepslate Emerald Ore",text:"深板岩綠寶石礦"},{value:"21",text:"青金石礦"},{value:"Deepslate Lapis Ore",text:"深板岩青金石礦"},{value:"56",text:"鑽石礦"},{value:"Deepslate Diamond Ore",text:"深板岩鑽石礦"},{value:"Nether Gold Ore",text:"地獄金礦"},{value:"153",text:"地獄石英礦"},{value:"Ancient Debris",text:"遠古遺骸"},{value:"173",text:"煤炭方塊"},{value:"Raw Iron Block",text:"鐵原礦方塊"},{value:"Raw Copper Block",text:"銅原礦方塊"},{value:"Raw Gold Block",text:"金原礦方塊"},{value:"Amethyst Block",text:"紫水晶方塊"},{value:"Budding Amethyst",text:"紫水晶芽床"},{value:"42",text:"鐵方塊"},{value:"Copper Block",text:"銅方塊"},{value:"41",text:"黃金方塊"},{value:"57",text:"鑽石方塊"},{value:"Netherite Block",text:"獄髓方塊"},{value:"Exposed Copper",text:"斑駁 的銅方塊"},{value:"Weathered Copper",text:"風化的銅方塊"},{value:"Oxidized Copper",text:"氧化的銅方塊"},{value:"Cut Copper",text:"切製銅方塊"},{value:"Exposed Cut Copper",text:"斑駁的切製銅方塊"},{value:"Weathered Cut Copper",text:"風化的切製銅方塊"},{value:"Oxidized Cut Copper",text:"氧化的切製銅方塊"},{value:"Cut Copper Stairs",text:"切製銅階梯"},{value:"Exposed Cut Copper Stairs",text:"斑駁的切製銅階梯"},{value:"Weathered Cut Copper Stairs",text:"風化的切製銅階梯"},{value:"Oxidized Cut Copper Stairs",text:"氧化的切製銅階梯"},{value:"Cut Copper Slab",text:"切製銅半磚"},{value:"Exposed Cut Copper Slab",text:"斑駁的切製銅半磚"},{value:"Weathered Cut Copper Slab",text:"風化的切製銅半磚"},{value:"Oxidized Cut Copper Slab",text:"氧化的切製銅半磚"},{value:"Waxed Copper Block",text:"上蠟的銅方塊"},{value:"Waxed Exposed Copper",text:"上蠟的斑駁銅方塊"},{value:"Waxed Weathered Copper",text:"上蠟的風化銅方塊"},{value:"Waxed Oxidized Copper",text:"上蠟的氧化銅方塊"},{value:"Waxed Cut Copper",text:"上蠟的切製銅方塊"},{value:"Waxed Exposed Cut Copper",text:"上蠟的斑駁切製銅方塊"},{value:"Waxed Weathered Cut Copper",text:"上蠟的風化切製銅方塊"},{value:"Waxed Oxidized Cut Copper",text:"上蠟的氧化切製銅方塊"},{value:"Waxed Cut Copper Stairs",text:"上蠟的切製銅階梯"},{value:"Waxed Exposed Cut Copper Stairs",text:"上蠟的斑駁切製銅階梯"},{value:"Waxed Weathered Cut Copper Stairs",text:"上蠟的風化切製銅階梯"},{value:"Waxed Oxidized Cut Copper Stairs",text:"上蠟的氧化切製銅階梯"},{value:"Waxed Cut Copper Slab",text:"上蠟的切製銅半磚"},{value:"Waxed Exposed Cut Copper Slab",text:"上蠟的斑駁切製銅半磚"},{value:"Waxed Weathered Cut Copper Slab",text:"上蠟的風化切製銅半磚"},{value:"Waxed Oxidized Cut Copper Slab",text:"上蠟的氧化切製銅半磚"},{value:"17",text:"橡木原木"},{value:"17:1",text:"杉木原木"},{value:"17:2",text:"樺木原木"},{value:"17:3",text:"叢林木原木"},{value:"162",text:"相思木原木"},{value:"162:1",text:"黑橡木原木"},{value:"Crimson Stem",text:"緋紅蕈柄"},{value:"Warped Stem",text:"扭曲蕈柄"},{value:"Stripped Oak Log",text:"剝皮橡木原木"},{value:"Stripped Spruce Log",text:"剝皮杉木原木"},{value:"Stripped Birch Log",text:"剝皮樺木原木"},{value:"Stripped Jungle Log",text:"剝皮叢林木原木"},{value:"Stripped Acacia Log",text:"剝皮相思木原木"},{value:"Stripped Dark Oak Log",text:"剝皮黑橡木原 木"},{value:"Stripped Crimson Stem",text:"剝皮緋紅蕈柄"},{value:"Stripped Warped Stem",text:"剝皮扭曲蕈柄"},{value:"Stripped Oak Wood",text:"剝皮橡木塊"},{value:"Stripped Spruce Wood",text:"剝皮杉木塊"},{value:"Stripped Birch Wood",text:"剝皮樺木塊"},{value:"Stripped Jungle Wood",text:"剝皮叢林木塊"},{value:"Stripped Acacia Wood",text:"剝皮相思木塊"},{value:"Stripped Dark Oak Wood",text:"剝皮黑橡木塊"},{value:"Stripped Crimson Hyphae",text:"剝皮緋紅菌絲體"},{value:"Stripped Warped Hyphae",text:"剝皮扭曲菌絲體"},{value:"Oak Wood",text:"橡木"},{value:"Spruce Wood",text:"杉木"},{value:"Birch Wood",text:"樺木"},{value:"Jungle Wood",text:"叢林木"},{value:"Acacia Wood",text:"相思木"},{value:"Dark Oak Wood",text:"黑橡木"},{value:"Crimson Hyphae",text:"緋紅菌絲體"},{value:"Warped Hyphae",text:"扭曲菌絲體"},{value:"18",text:"橡木樹葉"},{value:"18:1",text:"杉木樹葉"},{value:"18:2",text:"樺木樹葉"},{value:"18:3",text:"叢林木樹葉"},{value:"161",text:"相思木樹葉"},{value:"161:1",text:"黑橡木樹葉"},{value:"Azalea Leaves",text:"杜鵑葉"},{value:"Flowering Azalea Leaves",text:"開花的杜鵑葉"},{value:"19",text:"海綿"},{value:"19:1",text:"濕海綿"},{value:"20",text:"玻璃"},{value:"Tinted Glass",text:"遮光玻璃"},{value:"22",text:"青金石方塊"},{value:"24",text:"砂岩"},{value:"24:1",text:"浮雕砂岩"},{value:"24:2",text:"切製砂岩"},{value:"30",text:"蜘蛛網"},{value:"Grass",text:"草"},{value:"31:2",text:"蕨"},{value:"Azalea",text:"杜鵑叢"},{value:"Flowering Azalea",text:"開花的杜鵑叢"},{value:"32",text:"枯灌木"},{value:"Seagrass",text:"海草"},{value:"Sea Pickle",text:"海鞘"},{value:"35",text:"白色羊毛"},{value:"35:1",text:"橘色羊毛"},{value:"35:2",text:"洋紅色羊毛"},{value:"35:3",text:"淺藍色羊毛"},{value:"35:4",text:"黃色羊毛"},{value:"35:5",text:"淺綠色羊毛"},{value:"35:6",text:"粉紅色羊毛"},{value:"35:7",text:"灰色羊毛"},{value:"35:8",text:"淺灰色羊毛"},{value:"35:9",text:"青色羊毛"},{value:"35:10",text:"紫色羊毛"},{value:"35:11",text:"藍色羊毛"},{value:"35:12",text:"咖啡色羊毛"},{value:"35:13",text:"綠色羊毛"},{value:"35:14",text:"紅色羊毛"},{value:"35:15",text:"黑色羊毛"},{value:"37",text:"蒲公英"},{value:"38",text:"罌粟"},{value:"38:1",text:"藍色蝴蝶蘭"},{value:"38:2",text:"紫紅球花"},{value:"38:3",text:"雛草"},{value:"38:4",text:"紅色鬱金香"},{value:"38:5",text:"橙色鬱金香"},{value:"38:6",text:"白色鬱金香"},{value:"38:7",text:"粉紅色鬱金香"},{value:"38:8",text:"雛菊"},{value:"Cornflower",text:"矢車菊"},{value:"Lily of the Valley",text:"鈴蘭"},{value:"Wither Rose",text:"凋零玫瑰"},{value:"Spore Blossom",text:"孢子花"},{value:"39",text:"棕色蘑菇"},{value:"40",text:"紅色蘑菇"},{value:"Crimson Fungus",text:"緋紅蕈菇"},{value:"Warped Fungus",text:"扭曲蕈菇"},{value:"Crimson Roots",text:"緋紅蕈根"},{value:"Warped Roots",text:"扭曲蕈根"},{value:"Nether Sprouts",text:"地獄芽"},{value:"Weeping Vines",text:"垂 泣藤"},{value:"Twisting Vines",text:"扭曲藤"},{value:"338",text:"甘蔗"},{value:"Kelp",text:"海帶"},{value:"Moss Carpet",text:"覆地苔蘚"},{value:"Moss Block",text:"苔蘚方塊"},{value:"Hanging Roots",text:"懸根"},{value:"Big Dripleaf",text:"大懸葉草"},{value:"Small Dripleaf",text:"小懸葉草"},{value:"Bamboo",text:"竹子"},{value:"126",text:"橡木半磚"},{value:"126:1",text:"杉木半磚"},{value:"126:2",text:"樺木半磚"},{value:"126:3",text:"叢林木半磚"},{value:"126:4",text:"相思木半磚"},{value:"126:5",text:"黑橡木半磚"},{value:"Crimson Slab",text:"緋紅蕈木半磚"},{value:"Warped Slab",text:"扭曲蕈木半磚"},{value:"44:2",text:"石頭半磚"},{value:"Smooth Stone Slab",text:"平滑石頭半磚"},{value:"44:1",text:"砂岩半磚"},{value:"Cut Sandstone Slab",text:"切製砂岩半磚"},{value:"Petrified Oak Slab",text:"石化橡木半磚"},{value:"44:3",text:"鵝卵石半磚"},{value:"44:4",text:"紅磚半磚"},{value:"44:5",text:"石磚半磚"},{value:"44:6",text:"地獄磚半磚"},{value:"44:7",text:"石英半磚"},{value:"182",text:"紅砂岩半磚"},{value:"Cut Red Sandstone Slab",text:"切製紅砂岩半磚"},{value:"205",text:"紫珀磚半磚"},{value:"Prismarine Slab",text:"海磷石半磚"},{value:"Prismarine Brick Slab",text:"海磷石磚半磚"},{value:"Dark Prismarine Slab",text:"暗海磷石半磚"},{value:"43:7",text:"平滑石英方塊"},{value:"Smooth Red Sandstone",text:"平滑紅砂岩"},{value:"Smooth Sandstone",text:"平滑砂岩"},{value:"43:8",text:"平滑石頭"},{value:"45",text:"紅磚"},{value:"47",text:"書櫃"},{value:"48",text:"青苔鵝卵石"},{value:"49",text:"黑曜石"},{value:"50",text:"火把"},{value:"198",text:"終界燭"},{value:"199",text:"歌萊植株"},{value:"200",text:"歌萊花"},{value:"201",text:"紫珀方塊"},{value:"202",text:"紫珀柱"},{value:"203",text:"紫珀磚階梯"},{value:"52",text:"生怪磚"},{value:"53",text:"橡木階梯"},{value:"54",text:"儲物箱"},{value:"58",text:"工作台"},{value:"60",text:"耕地"},{value:"61",text:"熔爐"},{value:"65",text:"梯子"},{value:"67",text:"鵝卵石階梯"},{value:"78",text:"雪"},{value:"79",text:"冰"},{value:"80",text:"雪塊"},{value:"81",text:"仙人掌"},{value:"337",text:"黏土"},{value:"84",text:"唱片機"},{value:"85",text:"橡 木柵欄"},{value:"188",text:"杉木柵欄"},{value:"189",text:"樺木柵欄"},{value:"190",text:"叢林木柵欄"},{value:"192",text:"相思木柵欄"},{value:"191",text:"黑橡木柵欄"},{value:"Crimson Fence",text:"緋紅蕈木柵欄"},{value:"Warped Fence",text:"扭曲蕈木柵欄"},{value:"86",text:"南瓜"},{value:"Carved Pumpkin",text:"雕刻過的南瓜"},{value:"91",text:"南瓜燈"},{value:"87",text:"地獄石"},{value:"88",text:"靈魂砂"},{value:"Soul Soil",text:"靈魂土"},{value:"Basalt",text:"玄武岩"},{value:"Polished Basalt",text:"拋光玄武岩"},{value:"Smooth Basalt",text:"平滑玄武岩"},{value:"Soul Torch",text:"靈魂火把"},{value:"89",text:"螢光石"},{value:"97",text:"蛀蝕的石頭"},{value:"97:1",text:"蛀蝕的鵝卵石"},{value:"97:2",text:"蛀蝕的石磚"},{value:"97:3",text:"蛀蝕的青苔石磚"},{value:"97:4",text:"蛀蝕的裂紋石磚"},{value:"97:5",text:"蛀蝕的浮雕石磚"},{value:"Infested Deepslate",text:"蛀蝕的深板岩"},{value:"98",text:"石磚"},{value:"98:1",text:"青苔石磚"},{value:"98:2",text:"裂紋石磚"},{value:"98:3",text:"浮雕石磚"},{value:"Deepslate Bricks",text:"深板岩磚"},{value:"Cracked Deepslate Bricks",text:"裂紋深板岩磚"},{value:"Deepslate Tiles",text:"深板岩磚瓦"},{value:"Cracked Deepslate Tiles",text:"裂紋深板岩磚瓦"},{value:"Chiseled Deepslate",text:"浮雕深板岩"},{value:"99",text:"棕色蘑菇方塊"},{value:"100",text:"紅色蘑菇方塊"},{value:"Mushroom Stem",text:"蘑菇柄"},{value:"101",text:"鐵柵欄"},{value:"Chain",text:"鎖鏈"},{value:"102",text:"玻璃片"},{value:"103",text:"西瓜"},{value:"106",text:"藤蔓"},{value:"Glow Lichen",text:"發光地衣"},{value:"108",text:"紅磚樓梯"},{value:"109",text:"石磚階梯"},{value:"110",text:"菌絲土"},{value:"111",text:"荷葉"},{value:"112",text:"地獄磚"},{value:"Cracked Nether Bricks",text:"裂紋地獄磚"},{value:"Chiseled Nether Bricks",text:"浮雕地獄磚"},{value:"113",text:"地獄磚柵欄"},{value:"114",text:"地獄磚階梯"},{value:"116",text:"附魔台"},{value:"120",text:"終界傳送門框架"},{value:"121",text:"終界石"},{value:"206",text:"終界石磚"},{value:"122",text:"龍蛋"},{value:"128",text:"砂岩階梯"},{value:"130",text:"終界箱"},{value:"133",text:"綠寶石方塊"},{value:"134",text:"杉木階梯"},{value:"135",text:"樺木階梯"},{value:"136",text:"叢林木階梯"},{value:"Crimson Stairs",text:"緋紅蕈木階梯"},{value:"Warped Stairs",text:"扭曲蕈木階梯"},{value:"137",text:"指令方塊"},{value:"138",text:"烽火台"},{value:"139",text:"鵝卵石牆"},{value:"139:1",text:"青苔鵝卵石牆"},{value:"Brick Wall",text:"紅磚牆"},{value:"Prismarine Wall",text:"海磷石牆"},{value:"Red Sandstone Wall",text:"紅砂岩牆"},{value:"Mossy Stone Brick Wall",text:"青苔石磚牆"},{value:"Granite Wall",text:"花崗岩牆"},{value:"Stone Brick Wall",text:"石磚牆"},{value:"Nether Brick Wall",text:"地獄磚牆"},{value:"Andesite Wall",text:"安山岩牆"},{value:"Red Nether Brick Wall",text:"紅地獄磚牆"},{value:"Sandstone Wall",text:"砂岩牆"},{value:"End Stone Brick Wall",text:" 終界石磚牆"},{value:"Diorite Wall",text:"閃長岩牆"},{value:"Blackstone Wall",text:"黑石牆"},{value:"Polished Blackstone Wall",text:"拋光黑石牆"},{value:"Polished Blackstone Brick Wall",text:"拋光黑石磚牆"},{value:"Cobbled Deepslate Wall",text:"碎深板岩牆"},{value:"Polished Deepslate Wall",text:"拋光深板岩牆"},{value:"Deepslate Brick Wall",text:"深板岩磚牆"},{value:"Deepslate Tile Wall",text:"深板岩磚瓦牆"},{value:"145",text:"鐵砧"},{value:"145:1",text:"微損的鐵砧"},{value:"145:2",text:"耗損的鐵砧"},{value:"155:1",text:"浮雕石英方塊"},{value:"155",text:"石英方塊"},{value:"Quartz Bricks",text:"石英磚"},{value:"155:2",text:"石英柱"},{value:"156",text:"石英階梯"},{value:"159",text:"白色陶土"},{value:"159:1",text:"橘色陶土"},{value:"159:2",text:"洋紅色陶土"},{value:"159:3",text:"淺藍色陶土"},{value:"159:4",text:"黃色陶土"},{value:"159:5",text:"淺綠色陶土"},{value:"159:6",text:"粉紅色陶土"},{value:"159:7",text:"灰色陶土"},{value:"159:8",text:"淺灰色陶土"},{value:"159:9",text:"青色陶土"},{value:"159:10",text:"紫色陶土"},{value:"159:11",text:"藍色陶土"},{value:"159:12",text:"咖啡色陶土"},{value:"159:13",text:"綠色陶土"},{value:"159:14",text:"紅色陶土"},{value:"159:15",text:"黑色陶土"},{value:"166",text:"屏障"},{value:"Light",text:"光源"},{value:"170",text:"乾草捆"},{value:"171",text:"白色地毯"},{value:"171:1",text:"橘色地毯"},{value:"171:2",text:"洋紅色地毯"},{value:"171:3",text:"淺藍色地毯"},{value:"171:4",text:"黃色地毯"},{value:"171:5",text:"淺綠色地毯"},{value:"171:6",text:"粉紅色地毯"},{value:"171:7",text:"灰色地毯"},{value:"171:8",text:"淺灰色地毯"},{value:"171:9",text:"青色地毯"},{value:"171:10",text:"紫色地毯"},{value:"171:11",text:"藍色地毯"},{value:"171:12",text:"咖啡色地毯"},{value:"171:13",text:"綠色地毯"},{value:"171:14",text:"紅色地毯"},{value:"171:15",text:"黑色地毯"},{value:"172",text:"陶土"},{value:"174",text:"冰磚"},{value:"163",text:"相思木階梯"},{value:"164",text:"黑橡木階梯"},{value:"Dirt Path",text:"土徑"},{value:"175",text:"向日葵"},{value:"175:1",text:"紫丁香"},{value:"175:4",text:"玫瑰叢"},{value:"175:5",text:"牡丹花"},{value:"175:2",text:"芒草"},{value:"175:3",text:"大型蕨類"},{value:"95",text:"白色玻璃"},{value:"95:1",text:"橘色玻璃"},{value:"95:2",text:"洋紅色玻璃"},{value:"95:3",text:"淺藍色玻璃"},{value:"95:4",text:"黃色玻璃"},{value:"95:5",text:"淺綠色玻璃"},{value:"95:6",text:"粉紅色玻璃"},{value:"95:7",text:"灰色玻璃"},{value:"95:8",text:"淺灰色玻璃"},{value:"95:9",text:"青色玻璃"},{value:"95:10",text:"紫色玻璃"},{value:"95:11",text:"藍色玻璃"},{value:"95:12",text:"咖啡色玻璃"},{value:"95:13",text:"綠色玻璃"},{value:"95:14",text:"紅色玻璃"},{value:"95:15",text:"黑色玻璃"},{value:"160",text:"白色玻璃片"},{value:"160:1",text:"橘色玻璃"},{value:"160:2",text:"洋紅色玻璃"},{value:"160:3",text:"淺藍色玻璃"},{value:"160:4",text:"黃色玻璃"},{value:"160:5",text:"淺綠色玻璃片"},{value:"160:6",text:"粉紅色玻璃片"},{value:"160:7",text:"灰色玻璃片"},{value:"160:8",text:"淺灰色玻璃"},{value:"160:9",text:"青色玻璃片"},{value:"160:10",text:"紫色玻璃"},{value:"160:11",text:"藍色玻璃片"},{value:"160:12",text:"咖啡色玻璃片"},{value:"160:13",text:"綠色玻璃片"},{value:"160:14",text:"紅色玻璃片"},{value:"160:15",text:"黑色玻璃片"},{value:"168",text:"海磷石"},{value:"168:1",text:"海磷石磚"},{value:"168:2",text:"暗海磷石"},{value:"Prismarine Stairs",text:"海磷石階梯"},{value:"Prismarine Brick Stairs",text:"海磷石磚階梯"},{value:"Dark Prismarine Stairs",text:"暗海磷石階梯"},{value:"169",text:"海燈籠"},{value:"179",text:"紅砂岩"},{value:"179:1",text:"浮雕紅砂岩"},{value:"179:2",text:"切製紅砂岩"},{value:"180",text:"紅砂岩階梯"},{value:"210",text:"重複型指令方塊"},{value:"211",text:"連鎖式指令方塊"},{value:"213",text:"岩漿塊"},{value:"214",text:"地獄疙瘩塊"},{value:"Warped Wart Block",text:"扭曲疙瘩塊"},{value:"215",text:"紅地獄磚"},{value:"216",text:"骨塊"},{value:"217",text:"結構空位"},{value:"Shulker Box",text:"界伏盒"},{value:"219",text:"白色界伏蚌"},{value:"220",text:"橘色界伏蚌"},{value:"221",text:"洋紅色界伏蚌"},{value:"222",text:"淺藍色界伏蚌"},{value:"223",text:"黃色界伏蚌"},{value:"224",text:"淺綠色界伏蚌"},{value:"225",text:"粉紅色界伏蚌"},{value:"226",text:"灰色界伏蚌"},{value:"227",text:"淺灰色界伏蚌"},{value:"228",text:"青色界伏蚌"},{value:"229",text:"紫色界伏蚌"},{value:"230",text:"藍色界伏蚌"},{value:"231",text:"咖啡色界伏蚌"},{value:"232",text:"綠色界伏蚌"},{value:"233",text:"紅色 界伏蚌"},{value:"234",text:"黑色界伏蚌"},{value:"235",text:"白色釉陶"},{value:"236",text:"橘色釉陶"},{value:"237",text:"洋紅色釉陶"},{value:"238",text:"淺藍色釉陶"},{value:"239",text:"黃色釉陶"},{value:"240",text:"淺綠色釉陶"},{value:"241",text:"粉紅色釉陶"},{value:"242",text:"灰色釉陶"},{value:"243",text:"淺灰色釉陶"},{value:"244",text:"青色釉陶"},{value:"245",text:"紫色釉陶"},{value:"246",text:"藍色釉陶"},{value:"247",text:"咖啡色釉陶"},{value:"248",text:"綠色釉陶"},{value:"249",text:"紅色釉陶"},{value:"250",text:"黑色釉陶"},{value:"251",text:"白色混凝土"},{value:"251:1",text:"橘色混凝土"},{value:"251:2",text:"洋紅色混凝土"},{value:"251:3",text:"淺藍色混凝土"},{value:"251:4",text:"黃色混凝土"},{value:"251:5",text:"淺綠色混凝土"},{value:"251:6",text:"粉紅色混凝土"},{value:"251:7",text:"灰色混凝土"},{value:"251:8",text:"淺灰色混凝土"},{value:"251:9",text:"青色混凝土"},{value:"251:10",text:"紫色混凝土"},{value:"251:11",text:"藍色混凝土"},{value:"251:12",text:"咖啡色混凝土"},{value:"251:13",text:"綠色混凝土"},{value:"251:14",text:"紅色混凝土"},{value:"251:15",text:"黑色混凝土"},{value:"252",text:"白色混凝土粉末"},{value:"252:1",text:"橘色混凝土粉末"},{value:"252:2",text:"洋紅色混凝土粉末"},{value:"252:3",text:"淺藍色混凝土粉末"},{value:"252:4",text:"黃色混凝土粉末"},{value:"252:5",text:"淺綠色混凝土粉末"},{value:"252:6",text:"粉紅色混凝土粉末"},{value:"252:7",text:"灰色混凝土粉末"},{value:"252:8",text:"淺灰色混凝土粉末"},{value:"252:9",text:"青色混凝土粉末"},{value:"252:10",text:"紫色混凝土粉末"},{value:"252:11",text:"藍色混凝土粉末"},{value:"252:12",text:"咖啡色混凝土粉末"},{value:"252:13",text:"綠色混凝土粉末"},{value:"252:14",text:"紅色混凝土粉末"},{value:"252:15",text:"黑色混凝土粉末"},{value:"Turtle Egg",text:"海龜蛋"},{value:"Dead Tube Coral Block",text:"死亡的管珊瑚方塊"},{value:"Dead Brain Coral Block",text:"死亡的腦珊瑚方塊"},{value:"Dead Bubble Coral Block",text:"死亡的氣泡珊瑚方塊"},{value:"Dead Fire Coral Block",text:"死亡的火珊瑚方塊"},{value:"Dead Horn Coral Block",text:"死亡的角珊瑚方塊"},{value:"Tube Coral Block",text:"管珊瑚方塊"},{value:"Brain Coral Block",text:"腦珊瑚方塊"},{value:"Bubble Coral Block",text:"氣泡珊瑚方塊"},{value:"Fire Coral Block",text:"火珊瑚方塊"},{value:"Horn Coral Block",text:"角珊瑚方塊"},{value:"Tube Coral",text:"管珊瑚"},{value:"Brain Coral",text:"腦珊瑚"},{value:"Bubble Coral",text:"氣泡珊瑚"},{value:"Fire Coral",text:"火珊瑚"},{value:"Horn Coral",text:"角珊瑚"},{value:"Dead Brain Coral",text:"死亡的腦珊瑚"},{value:"Dead Bubble Coral",text:"死亡的氣泡珊瑚"},{value:"Dead Fire Coral",text:"死亡的火珊瑚"},{value:"Dead Horn Coral",text:"死亡的角珊瑚"},{value:"Dead Tube Coral",text:"死亡的管珊瑚"},{value:"Tube Coral Fan",text:"扇狀管珊瑚"},{value:"Brain Coral Fan",text:"扇狀腦珊瑚"},{value:"Bubble Coral Fan",text:"扇狀氣泡珊瑚"},{value:"Fire Coral Fan",text:"扇狀火珊瑚"},{value:"Horn Coral Fan",text:"扇 狀角珊瑚"},{value:"Dead Tube Coral Fan",text:"死亡的扇狀管珊瑚"},{value:"Dead Brain Coral Fan",text:"死亡的扇狀腦珊瑚"},{value:"Dead Bubble Coral Fan",text:"死亡的扇狀氣泡珊瑚"},{value:"Dead Fire Coral Fan",text:"死亡的扇狀火珊瑚"},{value:"Dead Horn Coral Fan",text:"死亡的扇狀角珊瑚"},{value:"Blue Ice",text:"藍冰"},{value:"Conduit",text:"海靈核心"},{value:"Polished Granite Stairs",text:"拋光花崗岩階梯"},{value:"Smooth Red Sandstone Stairs",text:"平滑紅砂岩階梯"},{value:"Mossy Stone Brick Stairs",text:"青苔石磚階梯"},{value:"Polished Diorite Stairs",text:"拋光閃長岩階梯"},{value:"Mossy Cobblestone Stairs",text:"青苔鵝卵石階梯"},{value:"End Stone Brick Stairs",text:"終界石磚階梯"},{value:"Stone Stairs",text:"石頭階梯"},{value:"Smooth Sandstone Stairs",text:"平滑砂岩階梯"},{value:"Smooth Quartz Stairs",text:"平滑石英階梯"},{value:"Granite Stairs",text:"花崗岩階梯"},{value:"Andesite Stairs",text:"安山岩階梯"},{value:"Red Nether Brick Stairs",text:"紅色地獄磚階梯"},{value:"Polished Andesite Stairs",text:"拋光安山岩階梯"},{value:"Diorite Stairs",text:"閃長岩階梯"},{value:"Cobbled Deepslate Stairs",text:"碎深板岩階梯"},{value:"Polished Deepslate Stairs",text:"拋光深板岩階梯"},{value:"Deepslate Brick Stairs",text:"深板岩紅磚樓梯"},{value:"Deepslate Tile Stairs",text:"深板岩磚瓦階梯"},{value:"Polished Granite Slab",text:"拋光花崗岩半 磚"},{value:"Smooth Red Sandstone Slab",text:"平滑紅砂岩半磚"},{value:"Mossy Stone Brick Slab",text:"青苔石磚半磚"},{value:"Polished Diorite Slab",text:"拋光閃長岩半磚"},{value:"Mossy Cobblestone Slab",text:"青苔鵝卵石半磚"},{value:"End Stone Brick Slab",text:"終界石磚半磚"},{value:"Smooth Sandstone Slab",text:"平滑砂岩半磚"},{value:"Smooth Quartz Slab",text:"平滑石英半磚"},{value:"Granite Slab",text:"花崗岩半磚"},{value:"Andesite Slab",text:"安山岩半磚"},{value:"Red Nether Brick Slab",text:"紅地獄磚半磚"},{value:"Polished Andesite Slab",text:"拋光安山岩半磚"},{value:"Diorite Slab",text:"閃長岩半磚"},{value:"Cobbled Deepslate Slab",text:"碎深板岩半磚"},{value:"Polished Deepslate Slab",text:"拋光深板岩半磚"},{value:"Deepslate Brick Slab",text:"深板岩紅磚半磚"},{value:"Deepslate Tile Slab",text:"深板岩磚瓦半磚"},{value:"Scaffolding",text:"鷹架"},{value:"76",text:"紅石火把"},{value:"152",text:"紅石方塊"},{value:"356",text:"紅石中繼器"},{value:"404",text:"紅石比較器"},{value:"33",text:"活塞"},{value:"29",text:"黏性活塞"},{value:"165",text:"史萊姆方塊"},{value:"Honey Block",text:"蜂蜜塊"},{value:"218",text:"偵測器"},{value:"154",text:"漏斗"},{value:"23",text:"發射器"},{value:"158",text:"投擲器"},{value:"Lectern",text:"講台"},{value:"Target",text:"標靶"},{value:"69",text:"控制桿"},{value:"Lightning Rod",text:"避雷針"},{value:"151",text:"日光感測器"},{value:"Sculk Sensor",text:"伏聆振測器"},{value:"131",text:"絆線鉤"},{value:"146",text:"陷阱儲物箱"},{value:"46",text:"TNT"},{value:"123",text:"紅石燈"},{value:"25",text:"音階盒"},{value:"77",text:"石製按鈕"},{value:"Polished Blackstone Button",text:"拋光黑石按鈕"},{value:"143",text:"橡木按鈕"},{value:"Spruce Button",text:"杉木按鈕"},{value:"Birch Button",text:"樺木按鈕"},{value:"Jungle Button",text:"叢林木按鈕"},{value:"Acacia Button",text:"相思木按鈕"},{value:"Dark Oak Button",text:"黑橡木按鈕"},{value:"Crimson Button",text:"緋紅蕈木按鈕"},{value:"Warped Button",text:"扭曲蕈木按鈕"},{value:"70",text:"石製壓力板"},{value:"Polished Blackstone Pressure Plate",text:"拋光黑石壓力板"},{value:"147",text:"輕質測重壓力板"},{value:"148",text:"重質測重壓力板"},{value:"72",text:"橡木壓力板"},{value:"Spruce Pressure Plate",text:"杉木壓力板"},{value:"Birch Pressure Plate",text:"樺木壓力板"},{value:"Jungle Pressure Plate",text:"叢林木壓力板"},{value:"Acacia Pressure Plate",text:"相思木壓力板"},{value:"Dark Oak Pressure Plate",text:"黑橡木壓力板"},{value:"Crimson Pressure Plate",text:"緋紅蕈木壓力板"},{value:"Warped Pressure Plate",text:"扭曲蕈木壓力板"},{value:"330",text:"鐵門"},{value:"324",text:"橡木門"},{value:"427",text:"杉木門"},{value:"428",text:"樺木門"},{value:"429",text:"叢林木門"},{value:"430",text:"相思木門"},{value:"431",text:"黑橡木門"},{value:"Crimson Door",text:"緋紅蕈木門"},{value:"Warped Door",text:"扭曲蕈木門"},{value:"167",text:"鐵製地板門"},{value:"96",text:"橡木地板門"},{value:"Spruce Trapdoor",text:"杉木地板門"},{value:"Birch Trapdoor",text:"樺木地板門"},{value:"Jungle Trapdoor",text:"叢林木地板門"},{value:"Acacia Trapdoor",text:"相思木地板門"},{value:"Dark Oak Trapdoor",text:"黑橡木地板門"},{value:"Crimson Trapdoor",text:"緋紅蕈木地板門"},{value:"Warped Trapdoor",text:"扭曲蕈木地板門"},{value:"107",text:"橡木柵欄門"},{value:"183",text:"杉木柵欄門"},{value:"184",text:"樺木柵欄門"},{value:"185",text:"叢林木柵欄門"},{value:"187",text:"相思木柵欄門"},{value:"186",text:"黑橡木柵欄門"},{value:"Crimson Fence Gate",text:"緋紅蕈木柵欄門"},{value:"Warped Fence Gate",text:"扭曲蕈木柵欄門"},{value:"27",text:"動力鐵軌"},{value:"28",text:"感測鐵軌"},{value:"66",text:"鐵軌"},{value:"157",text:"觸發鐵軌"},{value:"255",text:"結構方塊"},{value:"Jigsaw",text:"拼圖方塊"},{value:"296",text:"小麥"},{value:"Oak Sign",text:"橡木告示牌"},{value:"Spruce Sign",text:"杉木告示牌"},{value:"Birch Sign",text:"樺木告示牌"},{value:"Jungle Sign",text:"叢林木告示牌"},{value:"Acacia Sign",text:"相思木告示牌"},{value:"Dark Oak Sign",text:"黑橡木告示牌"},{value:"Crimson Sign",text:"緋紅蕈木告示牌"},{value:"Warped Sign",text:"扭曲蕈木告示牌"},{value:"Dried Kelp Block",text:"海帶乾塊"},{value:"354",text:"蛋糕"},{value:"355",text:"白色床"},{value:"355:1",text:"橘色床"},{value:"355:2",text:"洋紅色床"},{value:"355:3",text:"淺藍色床"},{value:"355:4",text:"黃色床"},{value:"355:5",text:"淺綠色床"},{value:"355:6",text:"粉紅色床"},{value:"355:7",text:"灰色床"},{value:"355:8",text:"淺灰色床"},{value:"355:9",text:"青色床"},{value:"355:10",text:"紫色床"},{value:"355:11",text:"藍色床"},{value:"355:12",text:"咖啡色床"},{value:"355:13",text:"綠色床"},{value:"355:14",text:"紅色床"},{value:"355:15",text:"黑色床"},{value:"372",text:"地獄疙瘩"},{value:"379",text:"釀造台"},{value:"380",text:"鍋釜"},{value:"390",text:"花盆"},{value:"397",text:"骷髏頭顱"},{value:"397:1",text:"凋零骷髏頭顱"},{value:"397:3",text:"玩家頭顱"},{value:"397:2",text:"殭屍頭顱"},{value:"397:4",text:"苦力怕頭顱"},{value:"397:5",text:"龍首"},{value:"425:15",text:"白色旗幟"},{value:"425:14",text:"橘色旗幟"},{value:"425:13",text:"洋紅色旗幟"},{value:"425:12",text:"淺藍色旗幟"},{value:"425:11",text:"黃色旗幟"},{value:"425:10",text:"淺綠色旗幟"},{value:"425:9",text:"粉紅色旗幟"},{value:"425:8",text:"灰色旗幟"},{value:"425:7",text:"淺灰色旗幟"},{value:"425:6",text:"青色旗幟"},{value:"425:5",text:"紫色旗幟"},{value:"425:4",text:"藍色旗幟"},{value:"425:3",text:"咖啡色旗幟"},{value:"425:2",text:"綠色旗幟"},{value:"425:1",text:"紅色旗幟"},{value:"425",text:"黑色旗幟"},{value:"Loom",text:"紡織機"},{value:"Composter",text:"堆肥桶"},{value:"Barrel",text:"木桶"},{value:"Smoker",text:"煙燻爐"},{value:"Blast Furnace",text:"高爐"},{value:"Cartography Table",text:"製圖台"},{value:"Fletching Table",text:"製箭台"},{value:"Grindstone",text:"砂輪"},{value:"Smithing Table",text:"鍛造台"},{value:"Stonecutter",text:"切石機"},{value:"Bell",text:"鐘"},{value:"Lantern",text:"燈籠"},{value:"Soul Lantern",text:"靈魂燈籠"},{value:"Campfire",text:"營火"},{value:"Soul Campfire",text:"靈魂營火"},{value:"Shroomlight",text:"蕈光體"},{value:"Bee Nest",text:"蜂窩"},{value:"Beehive",text:"蜂箱"},{value:"Honeycomb Block",text:"蜂巢塊"},{value:"Lodestone",text:"磁石"},{value:"Crying Obsidian",text:"哭泣的黑曜石"},{value:"Blackstone",text:"黑石"},{value:"Blackstone Slab",text:"黑石半磚"},{value:"Blackstone Stairs",text:"黑石階梯"},{value:"Gilded Blackstone",text:"鑲金黑石"},{value:"Polished Blackstone",text:"拋光黑石"},{value:"Polished Blackstone Slab",text:"拋光黑石半磚"},{value:"Polished Blackstone Stairs",text:"拋光黑石階梯"},{value:"Chiseled Polished Blackstone",text:"浮雕拋光黑石"},{value:"Polished Blackstone Bricks",text:"拋光黑石磚"},{value:"Polished Blackstone Brick Slab",text:" 拋光黑石磚半磚"},{value:"Polished Blackstone Brick Stairs",text:"拋光黑石磚階梯"},{value:"Cracked Polished Blackstone Bricks",text:"裂紋拋光黑石磚"},{value:"Respawn Anchor",text:"重生錨"},{value:"Candle",text:"蠟燭"},{value:"White Candle",text:"白色蠟燭"},{value:"Orange Candle",text:"橘色蠟燭"},{value:"Magenta Candle",text:"洋紅色蠟燭"},{value:"Light Blue Candle",text:"淺藍色蠟燭"},{value:"Yellow Candle",text:"黃色蠟燭"},{value:"Lime Candle",text:"淺綠色蠟燭"},{value:"Pink Candle",text:"粉紅色蠟燭"},{value:"Gray Candle",text:"灰色蠟燭"},{value:"Light Gray Candle",text:"淺灰色蠟燭"},{value:"Cyan Candle",text:"青色蠟燭"},{value:"Purple Candle",text:"紫色蠟燭"},{value:"Blue Candle",text:"藍色蠟燭"},{value:"Brown Candle",text:"咖啡色蠟燭"},{value:"Green Candle",text:"綠色蠟燭"},{value:"Red Candle",text:"紅色蠟燭"},{value:"Black Candle",text:"黑色蠟燭"},{value:"Small Amethyst Bud",text:"小型紫水晶芽"},{value:"Medium Amethyst Bud",text:"中型紫水晶芽"},{value:"Large Amethyst Bud",text:"大型紫水晶芽"},{value:"Amethyst Cluster",text:"紫水晶晶簇"},{value:"Pointed Dripstone",text:"鐘乳石"},{value:"9",text:"水"},{value:"11",text:"熔岩"},{value:"Tall Seagrass",text:"高海草"},{value:"34",text:"活塞頭"},{value:"Moving Piston",text:"移動中的活塞"},{value:"Wall Torch",text:"牆上的火 把"},{value:"51",text:"火"},{value:"Soul Fire",text:"靈魂火"},{value:"55",text:"紅石線"},{value:"Oak Wall Sign",text:"牆上的橡木告示牌"},{value:"Spruce Wall Sign",text:"牆上的杉木告示牌"},{value:"Birch Wall Sign",text:"牆上的樺木告示牌"},{value:"Acacia Wall Sign",text:"牆上的相思木告示牌"},{value:"Jungle Wall Sign",text:"牆上的叢林木告示牌"},{value:"Dark Oak Wall Sign",text:"牆上的黑橡木告示牌"},{value:"Redstone Wall Torch",text:"牆上的紅石火把"},{value:"Soul Wall Torch",text:"牆上的靈魂火把"},{value:"90",text:"地獄傳送門"},{value:"Attached Pumpkin Stem",text:"連接的南瓜梗"},{value:"Attached Melon Stem",text:"連接的西瓜梗"},{value:"104",text:"南瓜梗"},{value:"105",text:"西瓜梗"},{value:"Water Cauldron",text:"裝水的鍋釜"},{value:"Lava Cauldron",text:"裝岩漿的鍋釜"},{value:"Powder Snow Cauldron",text:"裝雪的鍋釜"},{value:"119",text:"終界傳送門"},{value:"127",text:"可可豆"},{value:"132",text:"絆線"},{value:"Potted Oak Sapling",text:"橡木樹苗盆栽"},{value:"Potted Spruce Sapling",text:"杉木樹苗盆栽"},{value:"Potted Birch Sapling",text:"樺木樹苗盆栽"},{value:"Potted Jungle Sapling",text:"叢林木樹苗 盆栽"},{value:"Potted Acacia Sapling",text:"相思木樹苗盆栽"},{value:"Potted Dark Oak Sapling",text:"黑橡木樹苗盆栽"},{value:"Potted Fern",text:"蕨盆栽"},{value:"Potted Dandelion",text:"蒲公英盆栽"},{value:"Potted Poppy",text:"罌粟盆栽"},{value:"Potted Blue Orchid",text:"藍色蝴蝶蘭盆栽"},{value:"Potted Allium",text:"紫紅球花盆栽"},{value:"Potted Azure Bluet",text:"雛草盆栽"},{value:"Potted Red Tulip",text:"紅色鬱金香盆栽"},{value:"Potted Orange Tulip",text:"橙色鬱金香盆栽"},{value:"Potted White Tulip",text:"白色鬱金香盆栽"},{value:"Potted Pink Tulip",text:"粉紅 色鬱金香盆栽"},{value:"Potted Oxeye Daisy",text:"雛菊盆栽"},{value:"Potted Cornflower",text:"矢車菊盆栽"},{value:"Potted Lily of the Valley",text:"鈴蘭盆栽"},{value:"Potted Wither Rose",text:"凋零玫瑰盆栽"},{value:"Potted Red Mushroom",text:"紅色蘑菇盆栽"},{value:"Potted Brown Mushroom",text:"棕色蘑菇盆栽"},{value:"Potted Dead Bush",text:"枯灌木盆栽"},{value:"Potted Cactus",text:"仙人掌盆栽"},{value:"141",text:"胡蘿蔔"},{value:"142",text:"馬鈴薯"},{value:"Skeleton Wall Skull",text:"牆上的骷髏頭顱"},{value:"Wither Skeleton Wall Skull",text:"牆上的凋零骷髏頭顱"},{value:"Zombie Wall Head",text:"牆上的殭屍頭顱"},{value:"Player Wall Head",text:"牆上的玩家頭顱"},{value:"Creeper Wall Head",text:"牆上的苦力怕頭顱"},{value:"Dragon Wall Head",text:"牆上的 龍首"},{value:"White wall banner",text:"牆上的白色旗幟"},{value:"Orange wall banner",text:"牆上的橘色旗幟"},{value:"Magenta wall banner",text:"牆上的洋紅色旗幟"},{value:"Light blue wall banner",text:"牆上的淺藍色旗幟"},{value:"Yellow wall banner",text:"牆上的黃色旗幟"},{value:"Lime wall banner",text:"牆上的淺綠色旗幟"},{value:"Pink wall banner",text:"牆上的粉紅色旗幟"},{value:"Gray wall banner",text:"牆上的灰色旗幟"},{value:"Light gray wall banner",text:"牆上的淺灰色旗幟"},{value:"Cyan wall banner",text:"牆上的青色旗幟"},{value:"Purple wall banner",text:"牆上的紫色旗幟"},{value:"Blue wall banner",text:"牆上的藍色旗幟"},{value:"Brown wall banner",text:"牆上的咖啡色旗幟"},{value:"Green wall banner",text:"牆上的綠色旗幟"},{value:"Red wall banner",text:"牆上的紅色旗幟"},{value:"Black wall banner",text:"牆上的黑色旗幟"},{value:"207",text:"甜菜根"},{value:"209",text:"終界折躍門"},{value:"212",text:"霜冰"},{value:"Kelp Plant",text:"海帶植株"},{value:"Dead Tube Coral Wall Fan",text:"牆上死亡的扇狀管珊瑚"},{value:"Dead Brain Coral Wall Fan",text:"牆上死亡的扇狀腦珊瑚"},{value:"Dead Bubble Coral Wall Fan",text:"牆上死亡的扇狀氣泡珊瑚"},{value:"Dead Fire Coral Wall Fan",text:"牆上死亡的扇狀火珊瑚"},{value:"Dead Horn Coral Wall Fan",text:"牆上死亡的扇狀角珊瑚"},{value:"Tube Coral Wall Fan",text:"牆上的扇狀管珊瑚"},{value:"Brain Coral Wall Fan",text:"牆上的扇狀腦珊瑚"},{value:"Bubble Coral Wall Fan",text:"牆上的扇狀氣泡珊瑚"},{value:"Fire Coral Wall Fan",text:"牆上的扇狀火珊瑚"},{value:"Horn Coral Wall Fan",text:"牆上的扇狀角珊瑚"},{value:"Bamboo Sapling",text:"竹荀"},{value:"Potted Bamboo",text:"竹子盆栽"},{value:"Void Air",text:"虛空空氣"},{value:"Cave Air",text:"洞穴空氣"},{value:"Bubble Column",text:"氣泡柱"},{value:"Sweet Berry Bush",text:"甜莓灌木叢"},{value:"Weeping Vines Plant",text:"垂泣藤植株"},{value:"Twisting Vines Plant",text:"扭曲藤植株"},{value:"Crimson Wall Sign",text:"牆上的緋紅蕈木告示牌"},{value:"Warped Wall Sign",text:"牆上的扭曲蕈木告示牌"},{value:"Potted Crimson Fungus",text:"緋紅蕈菇盆栽"},{value:"Potted Warped Fungus",text:"扭曲蕈菇盆栽"},{value:"Potted Crimson Roots",text:"緋紅蕈根盆栽"},{value:"Potted Warped Roots",text:"扭曲蕈根盆栽"},{value:"Candle Cake",text:"蠟燭蛋糕"},{value:"White Candle Cake",text:"插上白色蠟燭的蛋糕"},{value:"Orange Candle Cake",text:"插上橘色蠟燭的蛋糕"},{value:"Magenta Candle Cake",text:"插上洋紅色蠟燭的蛋糕"},{value:"Light Blue Candle Cake",text:"插上淺藍色蠟燭的蛋糕"},{value:"Yellow Candle Cake",text:"插上黃色蠟燭的蛋糕"},{value:"Lime Candle Cake",text:"插上淺綠色蠟燭的蛋糕"},{value:"Pink Candle Cake",text:"插上粉紅色蠟燭的蛋糕"},{value:"Gray Candle Cake",text:"插上灰色蠟燭的蛋糕"},{value:"Light gray Candle Cake",text:"插上淺灰色蠟燭的蛋糕"},{value:"Cyan Candle Cake",text:"插上青色蠟燭的蛋糕"},{value:"Purple Candle Cake",text:"插上紫色蠟燭的蛋糕"},{value:"Blue Candle Cake",text:"插上藍色蠟燭的蛋糕"},{value:"Brown Candle Cake",text:"插上咖啡色色蠟燭的蛋糕"},{value:"Green Candle Cake",text:"插上綠色蠟燭的蛋糕"},{value:"Red Candle Cake",text:"插上紅色蠟燭的蛋糕"},{value:"Black Candle Cake",text:"插上黑色蠟燭的蛋糕"},{value:"Powder Snow",text:"粉雪方塊"},{value:"Cave Vines",text:"洞穴藤蔓"},{value:"Cave Vines Plant",text:"洞穴藤蔓植株"},{value:"Big Dripleaf Stem",text:"大懸葉草"},{value:"Potted Azalea Bush",text:"杜鵑叢盆栽"},{value:"Potted Flowering Azalea Bush",text:"開花的杜鵑叢盆栽"}
	];
	socket = null;
	constructor(runtime) {
	}

    getInfo() {
        return {
            'id': 'RaspberryJamMod',
            'name': 'Minecraft',

            'blocks': [{
				'opcode': 'connect_p',
				'blockType': 'command',
				'text': '登入伺服器 ID [name] password [password]',
				'arguments': {
					'name': {
						'type': 'string',
						'defaultValue': 'PlayerName'
					},
					'password': {
						'type': 'string',
						'defaultValue': 'Password'
					},
				}
            },
            {
				'opcode': 'chat',
				'blockType': 'command',
				'text': '傳送訊息 [msg]',
				'arguments': {
					'msg': {
						'type': 'string',
						'defaultValue': 'Hello, World!'
					},
				}
            },
            {
				'opcode': 'blockByName',
				'blockType': 'reporter',
				'text': '[name]',
				'arguments': {
					'name': {
						'type': 'string',
						'defaultValue': '石頭',
					}
				}
            },
            {
				'opcode': 'getBlock',
				'blockType': 'reporter',
				'text': '在 ([x],[y],[z]) 的方塊ID',
				'arguments': {
					'x': {
						'type': 'number',
						'defaultValue': '0'
					},
					'y': {
						'type': 'number',
						'defaultValue': '0'
					},
					'z': {
						'type': 'number',
						'defaultValue': '0'
					},
				}
            },
/*            {
				'opcode': 'haveBlock',
				'blockType': 'Boolean',
				'text': 'have [b] at ([x],[y],[z])',
				'arguments': {
					'b': {
						'type': 'string',
						'defaultValue': '1,0',
						'menu': 'blockMenu'
					},
					'x': {
						'type': 'number',
						'defaultValue': '0'
					},
					'y': {
						'type': 'number',
						'defaultValue': '0'
					},
					'z': {
						'type': 'number',
						'defaultValue': '0'
					},
				}
            },             */
            /* {
				'opcode': 'onBlock',
				'blockType': 'Boolean',
				'text': 'player on [b]',
				'arguments': {
					'b': {
						'type': 'string',
						'defaultValue': '0,0',
						'menu': 'blockMenu'
					},
				}
            }, */
            {
				'opcode': 'getPlayerX',
				'blockType': 'reporter',
				'text': '玩家的X [mode]',
				'arguments': {
					'mode': {
						'type': 'number',
						'defaultValue': 0,
						'menu': 'modeMenu'
					},
				}
            },
            {
				'opcode': 'getPlayerY',
				'blockType': 'reporter',
				'text': '玩家的Y [mode]',
				'arguments': {
					'mode': {
						'type': 'number',
						'defaultValue': 0,
						'menu': 'modeMenu'
					},
				}
            },
            {
				'opcode': 'getPlayerZ',
				'blockType': 'reporter',
				'text': '玩家的Z [mode]',
				'arguments': {
					'mode': {
						'type': 'number',
						'defaultValue': 0,
						'menu': 'modeMenu'
					},
				}
            },
            {
				'opcode': 'getPlayerVector',
				'blockType': 'reporter',
				'text': '玩家的位置 [mode]',
				'arguments': {
					'mode': {
						'type': 'number',
						'defaultValue': 0,
						'menu': 'modeMenu'
					},
				}
            },
            {
				'opcode': 'getTurtleVector',
				'blockType': 'reporter',
				'text': '烏龜的位置',
				'arguments': {
				}
            },
            {
				'opcode': 'getHit',
				'blockType': 'reporter',
				'text': 'sword hit vector position',
				'arguments': {
				}
            },
            {
				'opcode': 'extractFromVector',
				'blockType': 'reporter',
				'text': 'vector [vector] 的 [coordinate]',
				'arguments': {
					'coordinate': {
						'type': 'number',
						'defaultValue': 0,
						'menu': 'coordinateMenu'
					},
					'vector': {
						'type': 'string',
						'defaultValue': '0,0,0',
					},
				}
            },
            {
				'opcode': 'makeVector',
				'blockType': 'reporter',
				'text': 'vector ([x],[y],[z])',
				'arguments': {
					'x': {
						'type': 'number',
						'defaultValue': 0,
					},
					'y': {
						'type': 'number',
						'defaultValue': 0,
					},
					'z': {
						'type': 'number',
						'defaultValue': 0,
					},
				}
            },
            {
				'opcode': 'setBlock',
				'blockType': 'command',
				'text': '放置 [b] 在 ([x],[y],[z])',
				'arguments': {
					'x': {
						'type': 'number',
						'defaultValue': '0'
					},
					'y': {
						'type': 'number',
						'defaultValue': '0'
					},
					'z': {
						'type': 'number',
						'defaultValue': '0'
					},
					'b': {
						'type': 'string',
						'defaultValue': '1',
						'menu': 'blockMenu'
					},
				}
            },
            {
				'opcode': 'setPlayerPos',
				'blockType': 'command',
				'text': '移動玩家到 ([x],[y],[z])',
				'arguments': {
					'x': {
						'type': 'number',
						'defaultValue': 0
					},
					'y': {
						'type': 'number',
						'defaultValue': 0
					},
					'z': {
						'type': 'number',
						'defaultValue': 0
					},
				}
            },
            {
				'opcode': 'movePlayer',
				'blockType': 'command',
				'text': '移動玩家 ([dx],[dy],[dz])',
				'arguments': {
					'dx': {
						'type': 'number',
						'defaultValue': 0
					},
					'dy': {
						'type': 'number',
						'defaultValue': 0
					},
					'dz': {
						'type': 'number',
						'defaultValue': 0
					},
				}
            },
            {
				'opcode': 'movePlayerTop',
				'blockType': 'command',
				'text': '移動玩家到地表',
				'arguments': {
				}
            },
            {
				'opcode': 'spawnEntity',
				'blockType': 'command',
				'text': '生成 [entity] 到 ([x],[y],[z])',
				'arguments': {
					'entity': {
						'type': 'string',
						'defaultValue': 'Villager',
						'menu': 'entityMenu'
					},
					'x': {
						'type': 'number',
						'defaultValue': 0
					},
					'y': {
						'type': 'number',
						'defaultValue': 0
					},
					'z': {
						'type': 'number',
						'defaultValue': 0
					},
				}
            },
            {
				'opcode': 'moveTurtle',
				'blockType': 'command',
				'text': '向 [dir] 移動烏龜 [n] 格',
				'arguments': {
					'dir': {
						'type': 'number',
						'menu': 'moveMenu',
						'defaultValue': 1
					},
					'n': {
						'type': 'number',
						'defaultValue': '1'
					},
				}
            },
            {
				'opcode': 'leftTurtle',
				'blockType': 'command',
				'text': '將烏龜向左轉 [n] 度',
				'arguments': {
					'n': {
						'type': 'number',
						'defaultValue': '15'
					},
				}
            },
            {
				'opcode': 'rightTurtle',
				'blockType': 'command',
				'text': '將烏龜向右轉 [n] 度',
				'arguments': {
					'n': {
						'type': 'number',
						'defaultValue': '15'
					},
				}
            },
            {
				'opcode': 'turnTurtle',
				'blockType': 'command',
				'text': '將烏龜 [dir] [n] 度',
				'arguments': {
					'dir': {
						'type': 'number',
						'defaultValue': 1,
						'menu': 'turnMenu'
					},
					'n': {
						'type': 'number',
						'defaultValue': '15'
					},
				}
            },
            {
				'opcode': 'pen',
				'blockType': 'command',
				'text': '烏龜 [state]',
				'arguments': {
					'state': {
						'type': 'number',
						'defaultValue': 1,
						'menu': 'penMenu'
					}
				}
            },
            {
				'opcode': 'turtleBlock',
				'blockType': 'command',
				'text': '設定烏龜筆刷材質為 [b]',
				'arguments': {
					'b': {
						'type': 'string',
						'defaultValue': '1',
						'menu': 'blockMenu'
					}
				}
            },
            {
				'opcode': 'turtleThickness',
				'blockType': 'command',
				'text': '設定烏龜筆刷寬度為 [n]',
				'arguments': {
					'n': {
						'type': 'number',
						'defaultValue': 1,
					}
				}
            },
            {
				'opcode': 'setTurtlePosition',
				'blockType': 'command',
				'text': '移動烏龜到 ([x],[y],[z])',
				'arguments': {
					'x': {
						'type': 'number',
						'defaultValue': 0
					},
					'y': {
						'type': 'number',
						'defaultValue': 0
					},
					'z': {
						'type': 'number',
						'defaultValue': 0
					},
				}
            },
            {
				'opcode': 'resetTurtleAngle',
				'blockType': 'command',
				'text': '重設烏龜角度為 [n] 度',
				'arguments': {
					'n': {
						'type': 'number',
						'defaultValue': '0'
					},
				}
            },
            {
				'opcode': 'saveTurtle',
				'blockType': 'command',
				'text': 'turtle save',
				'arguments': {
				}
            },
            {
				'opcode': 'restoreTurtle',
				'blockType': 'command',
				'text': 'turtle restore',
				'arguments': {
				}
            },
            {
				'opcode': 'suspend',
				'blockType': 'command',
				'text': 'suspend drawing',
				'arguments': {
				}
            },
            {
				'opcode': 'resume',
				'blockType': 'command',
				'text': 'resume drawing',
				'arguments': {
				}
            },
		],
			'menus': {
				moveMenu: [{text:'前',value:1}, {text:'後',value:-1}],
				penMenu: [{text:'下筆',value:1}, {text:'停筆',value:0}],
				coordinateMenu: [{text:'x',value:0}, {text:'y',value:1}, {text:'z',value:2}],
				turnMenu: [{text:'左右旋轉',value:0}, {text:'前後傾斜',value:1}, {text:'左右傾斜',value:2}],
				modeMenu: [{text:'完整',value:1},{text:'方塊',value:0}],
				entityMenu: [
					'Item',
					'XPOrb',
					'LeashKnot',
					'Painting',
					'Arrow',
					'Snowball',
					'Fireball',
					'SmallFireball',
					'ThrownEnderpearl',
					'EyeOfEnderSignal',
					'ThrownPotion',
					'ThrownExpBottle',
					'ItemFrame',
					'WitherSkull',
					'PrimedTnt',
					'FallingSand',
					'FireworksRocketEntity',
					'ArmorStand',
					'Boat',
					'MinecartRideable',
					'MinecartChest',
					'MinecartFurnace',
					'MinecartTNT',
					'MinecartHopper',
					'MinecartSpawner',
					'MinecartCommandBlock',
					'Mob',
					'Monster',
					'Creeper',
					'Skeleton',
					'Spider',
					'Giant',
					'Zombie',
					'Slime',
					'Ghast',
					'PigZombie',
					'Enderman',
					'CaveSpider',
					'Silverfish',
					'Blaze',
					'LavaSlime',
					'EnderDragon',
					'WitherBoss',
					'Bat',
					'Witch',
					'Endermite',
					'Guardian',
					'Pig',
					'Sheep',
					'Cow',
					'Chicken',
					'Squid',
					'Wolf',
					'MushroomCow',
					'SnowMan',
					'Ozelot',
					'VillagerGolem',
					'EntityHorse',
					'Rabbit',
					'Villager',
					'EnderCrystal',
					],
				blockMenu: {
					acceptReporters: true,
					items: this.blockList
				}
            }
        };
    };

    connect_p({name, password}) {
		console.log('player login: ', name, password);
        var rjm = this;
        return new Promise(function(resolve, reject) {
            if (rjm.socket !== null)
                rjm.socket.close();
            rjm.socket = new WebSocket('ws://localhost:14712');
            rjm.socket.onopen = function() {
                resolve();
            };
            rjm.socket.onerror = function(err) {
                reject(err);
            };
		})
		.then(result => rjm.playerLogin(name, password).then(result => {
			result = JSON.parse(result);
			if (!result.success) {
				alert('登入失敗\n原因: ' + result.message);
				reject();
			}
        }));
    };
	
	sendAndReceive(msg) {
        var rjm = this;
        return new Promise(function(resolve, reject) {
            rjm.socket.onmessage = function(event) {
                resolve(event.data.trim());
            };
            rjm.socket.onerror = function(err) {
                reject(err);
            };
            rjm.socket.send(msg);
        });
    };
	
	sendMessage(msg) {
		if (this.socket !== null)
			this.socket.send(msg);
    };
	
	sendAndPrintError(msg) {
		return this.sendAndReceive(msg)
            .then(status => {
				status = status.split(' ');
				if (status[0] === 'err') {
					alert(status[1]);
					reject();
				}
            });
	}
	
	playerLogin(name, pass) {
        return this.sendAndReceive('p login ' + name + ' ' + pass)
            .then(result => {
                return result;
            });
	}
	
    parseXYZ(x,y,z) {
        var coords = [];
        if (typeof(x)=='string' && x.indexOf(',') >= 0) {
            return x.split(',').map(parseFloat);
        }
        else {
            return [parseFloat(x),parseFloat(y),parseFloat(z)];
        }
    }

    turnTurtle({dir,n}) {
		this.sendMessage('t rot ' + dir + ' ' + n);
    }

    leftTurtle({n}) {
		this.sendMessage('t rot 0 ' + (-n));
    }

    rightTurtle({n}) {
		this.sendMessage('t rot 0 ' + n);
    }

    resetTurtleAngle({n}) {
		this.sendMessage('t rst ' + n);
    }

    pen({state}) {
		this.sendMessage('t pen ' + state);
    }

    turtleBlock({b}) {
		return this.sendAndPrintError('t setB ' + b);
    }

    setTurtlePosition({x,y,z}) {
		return this.sendAndPrintError('t setP '+x+' '+y+' '+z);
    }

    turtleThickness({n}) {
		return this.sendAndPrintError('t setT ' + n);
    }
	
    drawPoint({x,y,z}) {
		this.sendMessage('t move 0');
    }

    moveTurtle({dir,n}) {
		this.sendMessage('t move ' + (dir * n));
    }

    spawnEntity({entity,x,y,z}) {
        var [x,y,z] = this.parseXYZ(x,y,z);
        return this.sendAndReceive('world.spawnEntity('+entity+','+x+','+y+','+z+')'); // TODO: do something with entity ID?
    }

    movePlayer({dx,dy,dz}) {
		this.sendMessage('p pos add ' + dx+' '+dy+' '+dz);
    }

    movePlayerTop() {
        return this.getPlayerPosition().then(pos =>
            this.sendAndReceive('world.getHeight('+Math.floor(pos[0])+','+Math.floor(pos[2])+')').then(
                height => this.setPlayerPos({x:pos[0],y:height,z:pos[2]})));
    }

    onBlock({b}) {
        return this.getPlayerPosition().then(pos =>
			this.sendAndReceive('world.getBlockWithData('+Math.floor(pos[0])+','+Math.floor(pos[1]-1)+','+Math.floor(pos[2])+')')
			.then(block => block == b));
    }

    haveBlock({b,x,y,z}) {
        var [x,y,z] = this.parseXYZ(x,y,z).map(Math.floor);
        return this.sendAndReceive('world.getBlockWithData('+x+','+y+','+z+')')
            .then(block => {
                return block == b;
            });
    }

    makeVector({x,y,z}) {
        return ''+x+','+y+','+z
    }

    getHit() {
        if (this.hits.length>0)
            return ''+this.hits.shift().slice(0,3);
        var rjm = this;
        return this.sendAndReceive('events.block.hits()')
            .then(result => {
                if (result.indexOf(',') < 0)
                    return '';

                else {
                    var hits = result.split('|');
                    for(var i=0;i<hits.length;i++)
                        rjm.hits.push(hits[i].split(',').map(parseFloat));
                }
                return ''+this.shift.pop().slice(0,3);
            });
    }

    extractFromVector({vector,coordinate}) {
        var v = vector.split(',');
        if (v.length <= coordinate) {
            return 0.;
        }
        else {
            return parseFloat(v[coordinate]);
        }
    }

    chat({msg}) {
        this.sendMessage('c send ' + msg);
    }

    setBlock({x,y,z,b}) {
        this.sendMessage('w setB '+x+' '+y+' '+z+' '+b);
    }

    setPlayerPos({x,y,z}) {
		this.sendMessage('p pos set '+x+' '+y+' '+z);
    }
	
    blockByName({name}) {
		for(const i of this.blockList)
			if (i.text === name) return i.value;
        return -1;
    }

    getBlock({x,y,z}) {
        var pos = ''+this.parseXYZ(x,y,z).map(Math.floor);
        if (this.savedBlocks != null) {
            if (this.savedBlocks.has(pos)) {
                var b = this.savedBlocks.get(pos);
                if (b.indexOf(',')<0)
                    return ''+b+',0';
                else
                    return b;
            }
        }
        return this.sendAndReceive('world.getBlockWithData('+pos+')')
            .then(b => {
                return b;
            });
    }
	
    getPlayerPosition() {
        return this.sendAndReceive('p pos get')
            .then(pos => {
                var p = pos.split(',');
                return [parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])];
            });
    }

    getPlayerRotation() {
        return this.sendAndReceive('p rot get')
            .then(r => {
                return parseFloat(r);
            });
    }

    getTurtleVector() {
        return this.sendAndReceive('t getP')
            .then(pos => {
                return pos;
            });
    }
	
    getPlayerVector({mode}) {
        return this.getPlayerPosition()
            .then(pos => mode != 0 ? ''+pos[0]+','+pos[1]+','+pos[2] : ''+Math.floor(pos[0])+','+Math.floor(pos[1]-1)+','+Math.floor(pos[2]));
    }

    getPlayerX({mode}) {
        return this.getPlayerPosition()
            .then(pos => mode != 0 ? pos[0] : Math.floor(pos[0]));
    }

    getPlayerY({mode}) {
        return this.getPlayerPosition()
            .then(pos => mode != 0 ? pos[1]: Math.floor(pos[1]-1));
    }

    getPlayerZ({mode}) {
        return this.getPlayerPosition()
            .then(pos => mode != 0 ? pos[2] : Math.floor(pos[2]));
    }
	
    resume() {
        if (this.savedBlocks != null) {
            for (var [key, value] of this.savedBlocks)
                this.sendMessage('w setb '+key+' '+value);
            this.savedBlocks = null;
        }
    }

    suspend() {
        if (this.savedBlocks == null) {
            this.savedBlocks = new Map();
        }
    }
	
    saveTurtle() {
        var t = this.turtle.clone();
        this.turtleHistory.push(t);
    }

    restoreTurtle() {
        if (this.turtleHistory.length > 0) {
            this.turtle = this.turtleHistory.pop();
        }
    }
}

(function() {
    var extensionClass = RaspberryJamMod
    if (typeof window === 'undefined' || !window.vm) {
        Scratch.extensions.register(new extensionClass())
    }
    else {
        var extensionInstance = new extensionClass(window.vm.extensionManager.runtime)
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
        window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
    }
})()
