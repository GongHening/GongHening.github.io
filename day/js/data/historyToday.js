/**
 * History Today Data
 * Historical events indexed by month-day (MM-DD).
 * Each date contains 3-6 events with year, description, and category.
 * Categories: 科技, 文化, 政治, 体育, 科学, 航天, AI, 社会
 */

const HistoryTodayData = {

    "01-01": [
        { year: 1983, text: "ARPANET 正式转换为 TCP/IP 协议，互联网的雏形由此诞生。", category: "科技" },
        { year: 1999, text: "欧元作为电子货币在 11 个欧盟国家正式启用。", category: "政治" },
        { year: 2002, text: "欧元纸币和硬币正式进入流通，成为欧洲统一货币。", category: "政治" },
        { year: 1801, text: "矮行星谷神星被意大利天文学家朱塞佩·皮亚齐发现。", category: "科学" },
    ],

    "01-15": [
        { year: 2001, text: "维基百科正式上线，开创了互联网协作编辑知识的先河。", category: "科技" },
        { year: 1919, text: "波士顿糖蜜洪灾，21人遇难，成为工业安全的警示事件。", category: "社会" },
        { year: 1929, text: "马丁·路德·金出生，后来成为美国民权运动领袖。", category: "社会" },
        { year: 2023, text: "ChatGPT 月活跃用户突破1亿，成为史上增长最快的消费应用。", category: "AI" },
    ],

    "02-04": [
        { year: 2004, text: "马克·扎克伯格在哈佛宿舍创立 Facebook，社交媒体时代开启。", category: "科技" },
        { year: 2020, text: "特斯拉股价单日涨幅达20%，市值突破 1500 亿美元。", category: "科技" },
        { year: 1789, text: "乔治·华盛顿当选美国首任总统，开创了民主选举先例。", category: "政治" },
    ],

    "02-14": [
        { year: 1946, text: "世界上第一台电子计算机 ENIAC 在宾夕法尼亚大学诞生。", category: "科技" },
        { year: 2005, text: "YouTube 由陈士骏等三人创立，视频分享时代到来。", category: "科技" },
        { year: 1876, text: "亚历山大·格雷厄姆·贝尔申请了电话专利。", category: "科学" },
    ],

    "02-24": [
        { year: 2011, text: "IBM 沃森在《Jeopardy!》节目中击败人类冠军，AI 进入公众视野。", category: "AI" },
        { year: 1955, text: "史蒂夫·乔布斯出生，后来创立苹果公司改变了科技行业。", category: "科技" },
        { year: 2022, text: "俄罗斯入侵乌克兰，引发冷战以来欧洲最大规模军事冲突。", category: "政治" },
    ],

    "03-12": [
        { year: 1989, text: "蒂姆·伯纳斯-李提出万维网（WWW）方案，改变了人类信息获取方式。", category: "科技" },
        { year: 1947, text: "杜鲁门主义宣布，冷战正式开始。", category: "政治" },
        { year: 2020, text: "世界卫生组织宣布新冠疫情为全球大流行。", category: "社会" },
        { year: 1926, text: "罗伯特·戈达德发射世界上第一枚液体燃料火箭。", category: "航天" },
    ],

    "03-14": [
        { year: 1879, text: "阿尔伯特·爱因斯坦出生，后来提出了相对论等革命性理论。", category: "科学" },
        { year: 2018, text: "斯蒂芬·霍金逝世，享年 76 岁，他是当代最伟大的理论物理学家之一。", category: "科学" },
        { year: 2020, text: "OpenAI 发布 GPT-3，拥有 1750 亿参数，震动整个 AI 界。", category: "AI" },
        { year: 1883, text: "卡尔·马克思逝世，他的思想深刻影响了 20 世纪历史进程。", category: "社会" },
    ],

    "04-01": [
        { year: 1976, text: "史蒂夫·乔布斯、沃兹尼亚克和韦恩创立苹果公司。", category: "科技" },
        { year: 2004, text: "谷歌推出 Gmail，提供 1GB 存储空间，颠覆了电子邮件行业。", category: "科技" },
        { year: 1979, text: "伊朗伊斯兰共和国正式成立。", category: "政治" },
    ],

    "04-12": [
        { year: 1961, text: "尤里·加加林成为第一个进入太空的人类，太空时代开启。", category: "航天" },
        { year: 1981, text: "美国哥伦比亚号航天飞机首次发射，可重复使用航天器时代来临。", category: "航天" },
        { year: 1861, text: "美国南北战争爆发，这是美国历史上最惨烈的战争。", category: "政治" },
        { year: 2023, text: "SpaceX 星舰首次试飞，这是人类历史上最大的运载火箭。", category: "航天" },
    ],

    "04-22": [
        { year: 1970, text: "第一个世界地球日举行，2000万人参与，环保运动由此兴起。", category: "社会" },
        { year: 1992, text: "联合国环境与发展大会在里约热内卢召开，通过《21世纪议程》。", category: "社会" },
        { year: 1500, text: "葡萄牙航海家佩德罗·卡布拉尔到达巴西。", category: "文化" },
    ],

    "05-01": [
        { year: 1931, text: "纽约帝国大厦正式落成，成为当时世界最高建筑。", category: "文化" },
        { year: 1994, text: "F1 赛车传奇车手艾尔顿·塞纳在伊莫拉赛道不幸遇难。", category: "体育" },
        { year: 2011, text: "美国总统奥巴马宣布基地组织头目本·拉登被击毙。", category: "政治" },
    ],

    "05-11": [
        { year: 1997, text: "IBM 深蓝计算机在国际象棋比赛中击败世界冠军卡斯帕罗夫。", category: "AI" },
        { year: 1812, text: "英国首相斯宾塞·珀西瓦尔在下议院被暗杀。", category: "政治" },
        { year: 2000, text: "印度人口突破 10 亿，成为世界第二个人口超过 10 亿的国家。", category: "社会" },
    ],

    "06-01": [
        { year: 1980, text: "CNN（有线电视新闻网）开播，开创 24 小时新闻直播模式。", category: "文化" },
        { year: 1967, text: "披头士乐队发行专辑《Sgt. Pepper's Lonely Hearts Club Band》。", category: "文化" },
        { year: 2001, text: "尼泊尔国王比兰德拉在王室宴会中被王储枪杀。", category: "政治" },
    ],

    "06-08": [
        { year: 2004, text: "NASA 的勇气号火星车在火星上发现水曾经存在的证据。", category: "航天" },
        { year: 1867, text: "弗兰克·劳埃德·赖特出生，后来成为美国最著名的建筑师。", category: "文化" },
        { year: 1949, text: "乔治·奥威尔的《1984》出版，成为反乌托邦文学经典。", category: "文化" },
    ],

    "06-10": [
        { year: 1967, text: "六日战争结束，以色列占领西奈半岛、约旦河西岸和戈兰高地。", category: "政治" },
        { year: 2003, text: "NASA 的勇气号火星车发射升空，开启火星探测新旅程。", category: "航天" },
        { year: 1935, text: "酒精匿名会（AA）成立，开创了互助戒瘾的新模式。", category: "社会" },
        { year: 2024, text: "苹果在 WWDC24 发布 Apple Intelligence，全面拥抱生成式 AI。", category: "AI" },
        { year: 1854, text: "德国细菌学家罗伯特·科赫出生，他发现了结核杆菌和霍乱弧菌。", category: "科学" },
    ],

    "06-15": [
        { year: 1215, text: "英国《大宪章》签署，奠定了现代法治社会的基础。", category: "政治" },
        { year: 1844, text: "查尔斯·古德伊尔获得硫化橡胶专利，推动了工业革命。", category: "科学" },
        { year: 1978, text: "中国恢复高考制度后的首批大学生入学。", category: "社会" },
    ],

    "07-04": [
        { year: 1776, text: "美国《独立宣言》通过，宣告美国独立。", category: "政治" },
        { year: 2012, text: "欧洲核子研究中心宣布发现希格斯玻色子（上帝粒子）。", category: "科学" },
        { year: 2005, text: "NASA 深度撞击号探测器成功撞击坦普尔1号彗星。", category: "航天" },
        { year: 1862, text: "路易斯·卡罗尔首次讲述爱丽丝梦游仙境的故事。", category: "文化" },
    ],

    "07-20": [
        { year: 1969, text: "阿波罗11号登月成功，尼尔·阿姆斯特朗成为第一个踏上月球的人。", category: "航天" },
        { year: 1976, text: "海盗1号探测器成功登陆火星，发回火星表面首批照片。", category: "航天" },
        { year: 2023, text: "中国神舟十六号航天员圆满完成首次出舱活动。", category: "航天" },
    ],

    "08-06": [
        { year: 1945, text: "美国在广岛投下第一颗原子弹，核武器时代开始。", category: "政治" },
        { year: 1991, text: "蒂姆·伯纳斯-李发布了世界上第一个网页。", category: "科技" },
        { year: 2012, text: "NASA 好奇号火星车成功登陆火星。", category: "航天" },
    ],

    "08-12": [
        { year: 1981, text: "IBM 推出第一台个人电脑 IBM PC，开启了个人电脑普及时代。", category: "科技" },
        { year: 2000, text: "俄罗斯库尔斯克号核潜艇在巴伦支海沉没，118名船员遇难。", category: "政治" },
        { year: 1990, text: "苏联动植物化石研究者首次在西伯利亚发现保存完好的猛犸象。", category: "科学" },
    ],

    "09-01": [
        { year: 1939, text: "纳粹德国入侵波兰，第二次世界大战全面爆发。", category: "政治" },
        { year: 1983, text: "苏联战斗机击落韩国客机 KAL007，269人遇难，冷战紧张升级。", category: "政治" },
        { year: 2004, text: "别斯兰人质事件发生，超过 330 人遇难，震惊世界。", category: "社会" },
    ],

    "09-11": [
        { year: 2001, text: "美国9·11恐怖袭击事件发生，近3000人遇难，世界格局剧变。", category: "政治" },
        { year: 1973, text: "智利发生军事政变，阿连德总统殉职，皮诺切特上台。", category: "政治" },
        { year: 1997, text: "苏格兰独立公投通过，苏格兰议会得以重建。", category: "政治" },
    ],

    "09-15": [
        { year: 1928, text: "亚历山大·弗莱明发现青霉素，开启了抗生素时代。", category: "科学" },
        { year: 1947, text: " RCA 展示了第一台电子彩色电视机。", category: "科技" },
        { year: 2008, text: "雷曼兄弟宣布破产，全球金融危机爆发。", category: "社会" },
        { year: 1821, text: "中美洲各国宣布从西班牙独立。", category: "政治" },
    ],

    "09-21": [
        { year: 1937, text: "《霍比特人》由 J.R.R. 托尔金出版，奇幻文学里程碑。", category: "文化" },
        { year: 1980, text: "鲍勃·迪伦首次公开谈论他的基督教信仰。", category: "文化" },
        { year: 2003, text: "伽利略号探测器按计划坠入木星大气层，结束 14 年任务。", category: "航天" },
    ],

    "10-01": [
        { year: 1949, text: "中华人民共和国成立，毛泽东在天安门城楼宣布。", category: "政治" },
        { year: 1958, text: "NASA 正式成立，美国太空探索进入新纪元。", category: "航天" },
        { year: 1971, text: "迪士尼乐园在佛罗里达州正式开放。", category: "文化" },
        { year: 2017, text: "拉斯维加斯发生美国历史上最严重的大规模枪击事件。", category: "社会" },
    ],

    "10-14": [
        { year: 1947, text: "查克·耶格尔驾驶 X-1 突破音障，超音速飞行时代开启。", category: "航天" },
        { year: 1066, text: "黑斯廷斯战役，诺曼征服改变了英格兰的历史走向。", category: "政治" },
        { year: 1926, text: "《小熊维尼》首次出版，成为世界经典儿童文学。", category: "文化" },
    ],

    "10-24": [
        { year: 1945, text: "联合国正式成立，51个创始会员国签署《联合国宪章》。", category: "政治" },
        { year: 2003, text: "协和式超音速客机完成最后一次商业飞行。", category: "科技" },
        { year: 1632, text: "安东尼·范·列文虎克出生，他用显微镜首次观察到微生物。", category: "科学" },
    ],

    "11-01": [
        { year: 1952, text: "美国在马绍尔群岛试爆第一颗氢弹，核武器威力达到新量级。", category: "政治" },
        { year: 1993, text: "欧盟正式成立，《马斯特里赫特条约》生效。", category: "政治" },
        { year: 2012, text: "好奇号火星车首次在火星上检测到有机分子。", category: "航天" },
    ],

    "11-09": [
        { year: 1989, text: "柏林墙倒塌，冷战走向终结，东西德统一进程开始。", category: "政治" },
        { year: 2023, text: "OpenAI 首届开发者大会发布 GPT-4 Turbo 和自定义 GPTs。", category: "AI" },
        { year: 1967, text: "第一期《滚石》杂志出版，成为流行文化的标志性刊物。", category: "文化" },
    ],

    "11-15": [
        { year: 1889, text: "巴西废除奴隶制，成为西半球最后一个废除奴隶制的国家。", category: "政治" },
        { year: 1971, text: "英特尔推出世界上第一款商用微处理器 Intel 4004。", category: "科技" },
        { year: 2020, text: "SpaceX Crew-1 将4名宇航员送往国际空间站，商业载人航天常态化。", category: "航天" },
        { year: 1738, text: "威廉·赫歇尔出生，后来发现了天王星。", category: "科学" },
    ],

    "11-24": [
        { year: 1859, text: "查尔斯·达尔文发表《物种起源》，进化论由此改变生物学。", category: "科学" },
        { year: 1971, text: "一个身份不明的男子劫持飞机并索要赎金后跳伞消失（DB Cooper）。", category: "社会" },
        { year: 2021, text: "詹姆斯·韦伯太空望远镜从法属圭亚那发射升空。", category: "航天" },
    ],

    "12-01": [
        { year: 1955, text: "罗莎·帕克斯拒绝在公交车上让座，引发蒙哥马利公交抵制运动。", category: "社会" },
        { year: 1990, text: "英法海底隧道正式贯通，连接英国和法国。", category: "科技" },
        { year: 2022, text: "OpenAI 发布 ChatGPT，两个月内用户破亿，AI 大众化时代开启。", category: "AI" },
    ],

    "12-08": [
        { year: 1980, text: "约翰·列侬在纽约寓所前被枪杀，摇滚乐坛痛失巨匠。", category: "文化" },
        { year: 1941, text: "日本偷袭珍珠港，美国正式加入第二次世界大战。", category: "政治" },
        { year: 1993, text: "北美自由贸易协定（NAFTA）正式签署。", category: "政治" },
    ],

    "12-14": [
        { year: 1911, text: "挪威探险家阿蒙森成为第一个到达南极点的人。", category: "科学" },
        { year: 2020, text: "谷歌 DeepMind 的 AlphaFold 2 在蛋白质结构预测中取得突破性进展。", category: "AI" },
        { year: 1546, text: "第谷·布拉赫出生，后来成为最精确的肉眼天文观测者。", category: "科学" },
    ],

    "12-25": [
        { year: 1991, text: "米哈伊尔·戈尔巴乔夫辞职，苏联正式解体。", category: "政治" },
        { year: 1642, text: "艾萨克·牛顿出生，后来发现了万有引力定律和微积分。", category: "科学" },
        { year: 2021, text: "詹姆斯·韦伯太空望远镜成功发射，人类探索宇宙新纪元。", category: "航天" },
    ],
};
