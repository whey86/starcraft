var boardImg = '<img src="img/sc2board.jpg" id="playboard" alt=""usemap="#Map">';
var map = '<map name="Map" id="Map"></map>';
var area1= [ 
//374,143
'<area  alt="Augustgrad" title="1 2" href="#" shape="poly" coords="355,88,361,92,362,96,369,103,371,108,409,108,417,91,440,90,443,94,440,95,444,101,444,110,435,115,428,113,423,120,423,124,419,132,425,138,421,139,425,146,430,147,433,148,432,141,437,139,440,154,459,166,465,164,469,170,463,173,459,171,458,175,466,198,477,199,478,202,470,207,466,211,462,218,433,215,426,206,422,204,413,199,397,198,390,194,384,182,382,178,370,180,366,180,357,173,353,170,346,139,350,134,345,126,341,125,336,121,339,117,342,109,347,95,350,88" />'
//319,158
,'<area alt="Radiated wastes" title="1 3" href="#" shape="poly" coords="365,237,346,226,334,213,324,202,314,182,307,162,305,139,310,110,317,92,328,74,343,58,357,48,351,66,347,79,352,87,346,91,340,115,335,119,342,127,348,131,348,136,346,136,354,172,366,182,365,189,360,192,357,195" />'
//386,219
,'<area alt="Ruins of styrling" title="1 4" href="#" shape="poly" coords="461,220,459,230,460,238,446,242,434,245,411,248,390,245,367,238,360,215,358,206,358,193,368,190,367,185,368,181,384,178,385,186,387,189,393,196,411,200,416,200,418,201,419,205,424,204,430,211,430,215" />'
//343,264
,'<area alt="ATE" title="0 11" href="#" shape="poly" coords="343,224,358,234,376,242,394,247,399,255,400,266,399,276,395,286,390,295,381,297,371,302,361,306,350,314,339,311,323,299,314,287,310,279,309,270,310,261,311,255,315,245,321,236,327,231,338,227" />'
//193,318
,'<area alt="Eris" title="0 10" href="#" shape="poly" coords="201,358,217,354,228,346,235,332,236,326,236,318,233,309,226,299,217,292,207,289,198,289,189,290,182,294,169,311,166,325,171,338,178,349,188,356,195,359" />'
//285,215
,'<area alt="Dauntless plateau" title="0 5" href="#" shape="poly" coords="316,189,323,200,334,213,330,229,323,234,318,242,313,249,308,249,306,250,302,248,299,251,295,254,291,252,287,255,282,254,280,252,278,254,276,253,273,252,272,248,266,249,264,246,259,243,255,243,250,240,247,234,247,230,249,223,249,217,253,210,247,201,250,194,254,190,259,185,262,184,265,179,272,181,279,183,283,180,289,181,294,186,298,190,302,190" />'
//395,58
,'<area title="1 0" href="#" alt="Wolfrec province" shape="poly" coords="351,85,348,81,348,75,353,61,358,52,360,47,383,37,408,33,434,34,457,42,479,54,494,69,502,79,476,80,453,99,446,101,442,98,442,92,440,88,419,89,411,105,407,108,373,109,369,105,368,100,359,90" />'
//511,64
,'<area alt="Canis" title="1 6" href="#" shape="poly" coords="514,102,528,101,535,97,543,90,549,76,548,59,542,47,528,39,515,36,500,41,494,47,485,58,492,67,498,74,507,86" />'
//465,125
,'<area alt="Keresh province" title="1 1" href="#" shape="poly" coords="503,199,513,182,519,161,521,136,516,108,510,93,503,81,498,80,479,80,473,82,454,97,448,100,442,101,445,108,441,113,433,116,427,115,421,130,425,140,421,141,427,146,432,146,430,142,436,137,439,144,442,154,461,165,464,162,470,172,464,175,460,173,467,196,474,199,482,200,486,200" />'
//487,233
,'<area alt="Ursa" title="1 5" href="#" shape="poly" coords="506,266,518,258,527,239,526,224,521,212,508,202,494,199,480,201,468,209,461,224,461,243,469,258,484,267" />'
//484,346
,'<area alt="Pyramus" title="4 5" href="#" shape="poly" coords="481,383,494,385,507,383,520,374,525,367,530,355,529,337,520,322,507,313,494,310,476,313,465,320,459,329,455,340,454,354,458,365,469,378" />'
//404,314
,'<area alt="Jacobs installation" title="4 4" href="#" shape="poly" coords="467,318,445,304,428,298,409,296,385,298,371,302,369,305,368,311,367,317,367,320,367,325,383,350,392,349,401,349,406,345,409,339,414,339,420,335,424,338,431,345,433,350,437,352,443,356,449,353,454,351,454,345,456,334,462,325" />'
//350,366
, '<area alt="Diamondback wastelands" title="4 2" href="#" shape="poly" coords="337,448,350,446,353,441,353,417,357,414,368,410,385,406,418,414,421,413,416,404,434,388,438,385,447,387,473,381,465,374,457,362,453,349,445,356,434,352,432,348,422,335,411,338,404,348,398,349,395,347,386,351,366,323,369,318,367,313,369,302,347,316,328,339,318,361,314,380,315,400,320,420,324,430" />'
//387,445
, '<area alt="Backwater station" title="4 1" href="#" shape="poly" coords="339,449,352,445,353,414,360,413,367,412,370,408,372,410,377,407,378,409,383,406,420,415,419,430,439,433,449,441,453,439,463,443,469,440,474,443,488,431,477,449,468,459,460,460,454,464,454,469,436,476,405,481,383,477,368,472,356,465,343,456" />'
//452,411
, '<area alt="Riksville" title="4 3" href="#" shape="poly" coords="489,429,497,411,499,397,499,386,488,385,476,382,470,381,449,386,441,385,436,386,419,402,419,409,420,418,419,428,419,432,437,434,443,438,451,440,459,441,461,442,466,441,472,440,476,442" />'
//581,408
,    '<area alt="Katuul province" title="5 1" href="#" shape="poly" coords="642,411,622,411,604,361,593,353,578,363,564,383,560,394,556,411,560,441,567,457,578,469,582,473,587,452,592,450,621,448,624,446,643,413" />'
//559,483
,  '<area alt="Rajal" title="5 0" href="#" shape="poly" coords="564,453,576,467,595,482,600,485,600,494,592,505,579,514,563,515,550,509,540,497,537,482,540,467,552,457" />'
//640,372
,   '<area alt="Talematros" title="5 2" href="#" shape="poly" coords="621,409,612,389,605,364,601,358,595,355,596,351,620,343,644,344,664,351,680,363,693,380,701,398,703,410,702,424,700,425,697,417,647,410,639,411,625,412" />'
//639,446
,  '<area alt="Xelnaga temple grounds" title="5 3" href="#" shape="poly" coords="580,470,589,449,623,448,644,411,697,419,702,426,699,442,685,465,668,479,653,487,627,490,610,487,598,484" />'
//655,300
,   '<area alt="Antioch province" title="2 3" href="#" shape="poly" coords="683,320,665,326,630,326,607,319,591,310,609,298,633,285,664,278,689,276,722,292,716,300,699,313" />'
//671,254
,   ' <area alt="Scion province" title="2 4" href="#" shape="poly" coords="642,283,661,280,687,276,720,291,724,291,734,274,724,261,705,245,678,233,666,229,638,227" />'
//602,266
,   '<area alt="The great forum" title="2 2" href="#" shape="poly" coords="589,308,568,284,579,264,594,243,605,230,636,227,639,282" />'
//572,224
, '<area alt="Temple of the preservers" title="2 1" href="#" shape="poly" coords="564,281,556,262,553,250,552,230,554,208,560,191,570,174,579,164,584,173,594,194,600,215,603,229,601,236,583,259,569,281" />'
//662,228,640,227,608,230,600,219,595,196,585,175,580,166,597,150,602,151,617,156,632,164,638,168,643,176,652,195,664,224,664,228
,   '<area alt="Velari province" title="2 7" href="#" shape="poly" coords="660,227,643,227,610,230,603,231,602,225,598,208,593,192,586,177,581,164,595,151,601,149,615,155,630,163,636,166,640,172,648,185,655,202,663,222,663,226" />'
//
,   '<area alt="Saalok" title="2 0" href="#" shape="poly" coords="618,140,607,125,591,115,574,115,566,118,558,124,550,134,547,156,555,173,564,181,576,167,586,157,605,146" />'
//643,159
, '<area alt="Citadel of the executor" title="2 8" href="#" shape="poly" coords="683,189,657,199,654,198,648,187,639,170,634,165,618,158,599,149,616,142,638,136,651,142,661,149,673,162,680,176,687,188" />'
//695,170
,    '<area alt="Feral hives" title="2 6" href="#" shape="poly" coords="745,231,739,202,730,182,720,170,705,155,682,143,657,136,640,136,655,144,667,155,677,169,685,185,689,190,710,198,728,212" />'
//696,217
,   '<area alt="Remains of the overmind" title="2 5" href="#" shape="poly" coords="735,272,742,251,744,233,734,218,719,205,685,187,654,200,665,226,670,230,685,235,703,244,716,254" />'
//313,465
,   '<area alt="Thisby" title="4 0" href="#" shape="poly" coords="320,424,307,428,298,435,289,446,285,461,288,475,297,489,311,499,329,500,350,491,359,477,362,469,349,461,338,451,327,436" />'
//187,393
,  '<area alt="The eternal scar" title="3 0" href="#" shape="poly" coords="177,377,162,382,155,387,137,404,134,411,135,412,140,414,140,408,142,405,152,400,153,402,158,398,162,400,164,398,169,402,174,410,178,408,183,412,182,420,192,420,195,424,201,424,204,423,209,414,211,412,219,414,224,413,231,409,233,406,229,402,228,399,226,392,221,384,220,380,210,376,193,374,184,375" />'
//144,438
,    '<area alt="Fulmic highlands" title="3 2" href="#" shape="poly" coords="191,424,188,429,179,430,174,434,175,439,179,443,180,447,186,448,192,453,190,459,187,464,181,465,178,468,180,476,177,479,174,478,170,481,164,475,161,474,157,473,156,481,154,488,157,492,157,498,150,495,141,484,131,469,126,456,125,439,128,421,132,413,138,413,140,411,144,405,150,400,154,400,160,397,167,401,171,406,180,410,181,415,184,420,190,420" />'
//193,484
,   '<area alt="Volatile cleft" title="3 3" href="#" shape="poly" coords="260,453,257,463,252,473,246,484,238,492,229,498,217,505,205,508,186,508,170,505,159,500,158,496,155,491,155,486,156,478,156,475,166,477,167,480,172,480,179,478,179,474,176,471,179,466,184,465,189,462,191,456,196,452,201,454,202,458,207,459,213,461,218,459,221,463,224,467,230,470,239,470,242,465,248,459,255,447" />'
//215,434
,   '<area alt="Sundered valley" title="3 1" href="#" shape="poly" coords="232,386,245,398,255,416,261,432,260,451,256,449,253,450,254,453,252,455,247,463,244,461,241,469,233,469,225,465,221,465,220,460,211,461,209,459,204,459,198,452,194,453,190,453,188,449,183,448,179,445,178,441,173,437,176,431,185,430,190,426,197,425,199,425,206,424,203,421,208,417,216,412,221,416,226,410,229,410,235,407,231,404,229,397,226,390" />'
// 89,103
, '<area alt="Char aleph" title="0 0" href="#" shape="poly" coords="94,116,99,126,103,128,107,129,109,130,114,121,116,123,120,121,124,128,128,121,132,124,136,116,137,107,136,105,131,102,130,98,122,95,124,91,124,86,122,83,115,78,110,83,102,84,99,85,100,90,95,89,95,83,82,76,68,80,61,82,56,84,56,88,58,92,53,94,52,99,40,104,42,116,45,119,47,122,49,122,52,128,56,125,59,130,63,136,67,125,72,128,75,125,78,128,77,131,80,133,83,128,86,127,86,119,90,122" />'

, '<area alt="Glass flats" title="0 1" href="#" shape="poly" coords="126,96,131,99,130,102,134,105,140,104,143,108,149,111,151,115,156,116,164,108,168,108,171,111,173,111,174,114,175,111,177,112,180,109,184,109,187,106,191,105,201,108,209,109,216,104,215,102,217,100,218,96,221,94,223,95,226,92,235,87,235,85,238,79,242,76,228,71,213,70,200,69,188,71,176,73,163,76,147,83" />'
//243,111
, '<area alt="Death valley" title="0 3" href="#" shape="poly" coords="244,76,252,79,270,88,284,98,293,106,292,111,291,117,288,118,289,124,283,125,279,128,277,128,271,133,270,131,267,133,263,130,260,131,256,133,253,138,250,139,247,144,245,149,242,153,241,157,239,156,235,160,231,162,226,162,220,161,212,157,207,153,199,147,198,144,201,141,205,139,209,140,215,136,220,131,220,126,220,119,212,116,208,113,211,107,215,106,217,98,221,96,225,94,229,91,233,89,236,82" />'

,  '<area alt="Burning rift" title="0 2" href="#" shape="poly" coords="134,107,136,111,135,118,131,123,129,122,127,122,125,127,128,130,131,131,130,133,133,137,134,140,132,147,133,150,132,154,135,154,137,166,140,169,139,175,145,177,145,179,149,178,149,184,152,184,154,183,157,185,160,185,166,179,171,179,172,173,176,167,173,165,179,162,182,162,185,156,187,155,186,147,190,147,193,144,197,146,202,139,207,141,211,139,213,140,214,138,219,134,221,128,219,124,220,121,218,118,210,116,210,114,209,111,201,110,194,106,186,108,182,110,179,112,176,114,172,113,168,110,163,110,160,112,158,116,154,116,149,113,146,110,141,106,137,104" />'
//93,195
,  '<area alt="Acid marsh" title="0 9" href="#" shape="poly" coords="105,131,103,128,100,125,96,126,93,132,87,141,83,152,77,168,75,181,74,198,74,209,76,222,80,237,83,246,87,251,90,256,91,263,99,264,102,263,107,259,109,255,108,250,109,244,111,239,113,235,108,230,109,224,112,222,113,218,110,214,113,200,115,191,111,183,113,175,110,171,106,163,108,158,110,153,108,148,105,143" />'
//268,154
, '<area alt="Primary hive cluster" title="0 8" href="#" shape="poly" coords="124,129,119,122,118,124,116,122,113,122,111,127,109,130,107,131,106,137,105,141,106,146,110,150,110,156,106,161,109,168,113,177,110,181,113,183,113,186,115,188,115,195,113,197,111,211,113,220,111,224,107,225,107,228,113,237,111,241,108,247,110,253,110,257,105,262,101,265,94,265,98,274,106,284,114,293,125,302,130,305,129,298,127,293,125,289,127,286,125,283,128,280,131,278,132,276,139,276,142,271,155,269,161,259,158,254,161,252,161,249,170,237,177,238,181,235,186,230,185,225,186,222,185,220,192,212,196,211,204,203,207,201,210,192,214,190,218,177,217,174,220,170,223,161,210,154,207,155,205,151,202,148,195,145,192,147,188,147,187,153,184,160,177,163,175,164,175,169,172,177,169,180,162,183,155,185,149,181,147,179,141,176,139,171,139,166,135,164,135,157,131,152,133,143,131,136,128,132,126,130" />'
//204,236
, '<area alt="Nydus network" title="0 7" href="#" shape="poly" coords="224,163,233,162,238,167,243,176,244,181,247,183,246,189,247,199,249,201,249,204,252,208,252,213,248,219,249,226,246,227,248,238,252,242,261,244,264,248,259,253,255,253,253,256,244,257,237,260,234,257,223,266,219,265,217,269,214,271,211,276,205,275,203,279,200,280,203,285,201,286,202,289,195,289,187,291,178,297,171,306,168,314,166,322,154,318,144,314,132,306,130,300,128,296,126,291,127,284,126,281,134,276,140,274,144,270,153,270,157,267,160,262,161,257,159,256,159,252,162,246,169,239,172,236,175,237,179,237,184,233,186,228,186,218,190,213,194,212,198,210,202,205,208,199,209,194,212,191,215,187,217,179" />'
//
,'<area alt="Bone trench" title="0 4" href="#" shape="poly" coords="295,107,307,120,305,134,305,148,307,161,315,187,311,189,306,188,300,191,296,189,294,183,286,180,281,184,275,181,267,179,264,181,258,188,255,188,248,196,247,186,243,178,240,169,235,164,237,157,243,151,246,146,249,142,255,136,258,131,264,132,273,132,281,127,286,123,289,126,289,121,292,114,293,108" />'
//252,282
, '<area alt="Hells gates" title="0 6" class="noborder icolor00ff00" href="#" shape="poly" coords="312,251,310,258,309,267,310,275,305,279,296,290,284,300,268,311,252,319,236,324,235,314,231,303,224,297,215,290,205,289,202,283,203,277,208,275,212,278,214,274,215,269,217,267,221,265,225,266,232,259,240,259,246,256,257,253,262,249,269,248,272,250,280,255,298,249,252"/>'];

// var boardImg = '<img src="img/sc2board.jpg" id="playboard" alt=""usemap="#Map">';
// var map = '<map name="Map" id="Map"></map>';
// var area1= [ 
// '<area  alt="Augustgrad" title="1 2" href="#" shape="poly" coords="665,164,648,187,641,211,629,225,652,241,658,253,650,259,666,317,690,338,714,334,724,347,735,365,780,372,789,381,809,402,865,408,878,392,904,379,876,370,859,336,861,324,867,326,880,324,871,309,859,310,829,294,820,265,810,264,810,277,799,276,788,268,798,261,785,255,792,230,799,216,813,218,832,207,826,183,828,169,785,172,771,203,694,202,685,185,673,174" />'
// ,'<area  alt="Radiated wastes" title="1 3" href="#" shape="poly" coords="670,395,673,363,685,351,688,340,665,324,647,262,656,250,624,228,636,219,649,176,662,163,652,151,662,110,643,110,622,126,611,146,596,167,587,191,577,222,573,255,571,293,584,332,599,367,620,393,648,419,681,443,684,443" />'
// ,'<area alt="Ruins of styrling" title="1 4" href="#" shape="poly" coords="687,444,671,388,671,367,688,357,689,344,718,335,721,349,726,350,732,366,780,375,783,384,798,386,808,406,861,411,859,446,812,461,759,465,714,455" />'
// ,'<area alt="ATE" title="0 11" href="#" shape="poly" coords="618,431,591,459,580,490,587,528,605,561,642,583,658,586,687,567,738,555,748,516,742,465,686,447,656,430,644,421" />'
// ,'<area alt="Eris" title="0 10" href="#" shape="poly" coords="377,544,356,545,339,555,328,565,317,586,314,609,317,631,332,656,351,670,373,675,398,671,423,658,436,637,445,616,440,588,426,562,404,547" />'
// ,'<area alt="Dauntless plateau" title="0 5" href="#" shape="poly" coords="591,352,604,376,622,398,616,430,598,440,583,464,573,467,565,466,558,469,550,473,531,476,522,472,511,472,507,463,495,463,490,455,469,448,462,442,465,428,466,418,465,410,472,400,474,389,465,380,465,371,478,353,495,337,534,338,547,352,558,358" />'
// ,'<area title="1 0" href="#" shape="poly" coords="651,149,665,114,675,89,696,81,736,65,779,64,822,67,868,85,904,107,932,138,939,149,891,150,846,186,834,189,828,167,787,167,768,199,699,201,681,177" />'
// ,'<area alt="Canis" title="1 6" href="#" shape="poly" coords="911,112,934,78,970,69,999,76,1020,97,1031,130,1021,164,1006,175,981,190,967,191,944,148" />'
// ,'<area alt="Keresh province" title="1 1" href="#" shape="poly" coords="942,149,964,190,975,230,978,257,970,312,946,370,908,373,875,368,861,333,880,322,875,309,861,307,831,293,822,261,819,255,806,260,808,271,796,267,801,261,791,253,803,218,818,226,837,209,832,193,889,153" />'
// ,'<area alt="Ursa" title="1 5" href="#" shape="poly" coords="906,377,876,396,864,419,861,443,870,476,898,496,940,502,961,492,979,469,989,429,981,409,953,378" />'
// ,'<area alt="Pyramus" title="4 5" href="#" shape="poly" coords="910,581,866,610,853,636,857,679,884,710,920,720,961,714,988,686,995,639,974,602,943,584" />'
// ,'<area alt="Jacobs installation" title="4 4" href="#" shape="poly" coords="873,593,822,565,765,555,693,565,689,590,693,597,688,605,723,658,742,655,756,654,764,633,794,631,814,657,833,671,850,655,854,628,879,601" />'
// , '<area alt="Diamondback wastelands" title="4 2" href="#" shape="poly" coords="692,568,660,587,632,612,607,649,592,686,590,720,591,756,596,780,615,821,633,841,662,834,661,780,692,770,715,762,788,778,779,761,818,722,885,716,860,691,850,661,830,669,807,663,795,637,768,639,757,658,723,661,685,613" />'
// , '<area alt="Backwater station" title="4 1" href="#" shape="poly" coords="787,780,785,807,818,813,828,823,843,830,852,826,863,830,876,828,889,830,916,810,873,862,840,884,797,898,733,898,699,888,660,870,637,847,660,837,665,785,690,772,722,763" />'
// , '<area alt="Riksville" title="4 3" href="#" shape="poly" coords="889,716,934,726,934,756,927,780,918,804,889,828,878,822,865,826,851,823,840,826,830,822,824,811,785,805,791,781,781,762,822,724" />'
// ,    '<area alt="Katuul province" title="5 1" href="#" shape="poly" coords="1042,747,1040,790,1054,837,1087,880,1103,845,1169,839,1206,773,1167,773,1130,675,1112,661,1067,692" />'
// ,  '<area alt="Rajal" title="5 0" href="#" shape="poly" coords="1054,848,1028,861,1011,887,1009,922,1020,947,1046,966,1091,963,1113,948,1124,922,1124,910,1085,887" />'
// ,   '<area alt="Talematros" title="5 2" href="#" shape="poly" coords="1315,804,1304,782,1168,770,1134,677,1110,658,1165,646,1195,646,1232,655,1251,664,1291,694,1307,732,1316,763" />'
// ,  '<area alt="Xelnaga temple grounds" title="5 3" href="#" shape="poly" coords="1208,776,1170,843,1106,846,1089,888,1157,920,1195,920,1234,910,1283,875,1309,828,1313,806,1304,786" />'
// ,   '<area alt="Antioch province" title="2 3" href="#" shape="poly" coords="1280,602,1221,614,1187,614,1153,605,1112,583,1107,579,1151,552,1199,532,1291,519,1354,548,1322,577" />'
// ,   ' <area alt="Scion province" title="2 4" href="#" shape="poly" coords="1353,545,1377,514,1347,480,1318,459,1293,445,1246,427,1194,428,1199,529,1291,514" />'
// ,   '<area alt="The great forum" title="2 2" href="#" shape="poly" coords="1197,533,1146,549,1106,577,1076,553,1062,534,1132,431,1192,429" />'
// , '<area alt="Temple of the preservers" title="2 1" href="#" shape="poly" coords="1061,532,1036,468,1034,421,1042,373,1055,350,1085,307,1106,347,1119,385,1129,429" />'
// ,   '<area alt="Velari province" title="2 7" href="#" shape="poly" coords="1134,430,1191,426,1244,425,1225,377,1198,319,1177,303,1122,281,1085,305" />'
// ,   '<area alt="Saalok" title="2 0" href="#" shape="poly" coords="1058,340,1023,291,1026,266,1042,236,1071,217,1110,216,1139,232,1153,260,1101,286" />'
// , '<area alt="Citadel of the executor" title="2 8" href="#" shape="poly" coords="1125,279,1167,260,1193,256,1234,276,1267,313,1284,350,1228,374,1202,319" />'
// ,    '<area alt="Feral hives" title="2 6" href="#" shape="poly" coords="1197,254,1261,261,1302,278,1343,307,1366,338,1381,371,1388,396,1391,432,1359,397,1332,374,1283,353,1269,313,1250,288,1232,275" />'
// ,   '<area alt="Remains of the overmind" title="2 5" href="#" shape="poly" coords="1375,511,1391,469,1393,436,1352,392,1308,366,1283,356,1228,379,1248,426,1318,456" />'
// ,   '<area alt="Thisby" title="4 0" href="#" shape="poly" coords="676,881,659,914,623,935,594,937,559,920,540,894,538,851,551,822,584,802,602,799,625,843" />'
// ,  '<area alt="The eternal scar" title="3 0" href="#" shape="poly" coords="414,713,424,730,427,747,436,764,416,775,396,773,381,787,382,795,365,792,344,784,337,767,327,765,303,747,284,750,263,758,262,771,249,771,263,750,278,731,311,711,354,701,384,702" />'
// ,    '<area alt="Fulmic highlands" title="3 2" href="#" shape="poly" coords="246,777,235,818,240,861,259,903,284,928,296,934,295,926,286,918,290,914,294,906,291,901,293,885,307,888,313,899,327,896,338,895,331,883,335,874,345,871,352,867,358,849,350,842,339,842,335,828,324,824,322,815,337,805,351,807,358,791,341,787,340,775,327,769,317,758,305,752,297,745,270,758,264,774" />'
// ,   '<area alt="Volatile cleft" title="3 3" href="#" shape="poly" coords="299,936,331,948,359,954,393,950,413,943,441,926,462,905,474,887,482,867,487,844,477,843,466,869,450,882,414,876,411,866,395,865,377,858,372,850,360,851,357,868,351,873,338,873,336,884,342,895,314,901,307,891,295,886,296,912,289,917" />'
// ,   '<area alt="Sundered valley" title="3 1" href="#" shape="poly" coords="417,713,446,735,468,758,482,788,489,824,489,842,475,839,463,865,456,864,450,878,418,870,411,862,396,859,373,847,360,848,352,840,340,837,335,825,329,822,334,809,354,807,360,797,372,800,386,796,387,786,413,780,438,766" />'
// , '<area alt="Char aleph" title="0 0" href="#" shape="poly" coords="231,174,234,162,227,156,230,152,219,149,217,148,207,150,206,155,190,159,185,158,183,160,183,169,175,167,178,158,152,144,130,150,105,158,103,169,107,173,100,175,98,185,97,190,74,197,84,225,87,221,89,229,98,241,104,233,118,255,127,236,142,238,149,251,156,240,160,240,164,226,168,230,174,220,183,238,197,246,205,246,216,229,224,231,232,243,239,230,246,231,255,208,252,198,244,195,245,187,227,177" />'

// , '<area alt="Glass flats" title="0 1" href="#" shape="poly" coords="236,179,266,161,286,151,329,136,370,130,399,131,426,134,455,142,449,150,439,159,438,165,426,173,417,177,411,174,405,190,404,196,394,204,360,194,345,203,336,203,333,212,325,214,324,208,312,205,311,200,292,218,285,217,278,207,269,205,263,196,252,196,245,194,245,186" />'

// , '<area alt="Death valley" title="0 3" href="#" shape="poly" coords="453,140,488,155,504,163,519,175,547,196,543,219,539,221,540,232,528,235,521,240,509,247,499,248,485,244,480,248,473,256,465,261,451,288,448,292,444,295,435,303,416,301,392,291,388,291,383,284,379,276,371,272,376,261,385,261,392,260,396,263,399,259,408,249,413,239,411,233,411,223,393,217,392,205,411,176,416,176,424,172,439,164" />'

// ,  '<area alt="Burning rift" title="0 2" href="#" shape="poly" coords="309,203,321,207,324,212,328,208,331,211,337,201,344,203,359,195,377,201,407,221,412,228,408,245,403,256,396,260,388,260,373,259,368,269,367,272,355,273,348,273,349,279,349,291,340,304,333,305,324,309,329,313,324,323,320,337,312,336,296,348,288,344,279,345,279,335,273,336,260,329,261,319,256,309,251,289,249,292,248,281,248,275,252,268,249,259,243,253,247,247,237,243,236,232,244,232,248,228,255,204,261,199,267,204,283,215,291,217" />'

// ,  '<area alt="Acid marsh" title="0 9" href="#" shape="poly" coords="179,236,167,260,157,275,152,290,147,312,141,338,137,356,137,380,140,403,144,422,155,463,163,467,167,475,169,486,172,496,188,496,195,491,205,482,204,478,204,472,200,462,209,446,199,426,196,420,207,420,211,412,205,398,209,367,216,366,215,350,212,334,205,319,208,318,201,315,196,303,204,292,205,282,196,275,195,263,201,246" />'

// , '<area alt="Primary hive cluster" title="0 8" href="#" shape="poly" coords="215,231,203,247,196,260,207,281,205,296,197,301,200,313,205,317,213,331,211,339,217,349,215,364,212,372,208,397,213,411,211,419,197,423,212,445,203,464,207,480,199,493,192,496,172,500,188,521,205,540,221,556,243,572,241,564,240,553,237,553,237,535,244,521,259,517,265,509,289,507,299,493,300,484,295,477,301,471,299,468,319,444,332,448,335,443,340,441,348,431,348,417,345,412,357,397,364,397,372,392,381,380,385,380,393,359,400,357,407,331,403,328,412,319,409,315,415,303,387,293,377,280,372,275,364,273,355,276,349,276,351,292,343,304,329,308,332,315,327,325,321,340,308,340,296,351,285,347,276,347,276,340,257,332,259,321,249,295,243,288,244,281,248,269,241,256,243,248" />'

// , '<area alt="Nydus network" title="0 7" href="#" shape="poly" coords="244,575,311,605,321,573,332,559,351,547,377,540,380,535,376,527,381,517,391,517,395,520,401,508,405,503,407,497,416,497,420,499,433,487,445,488,449,483,471,481,477,477,484,476,493,467,491,459,480,455,471,455,468,451,460,447,459,436,463,435,461,428,465,427,464,415,463,411,471,399,471,389,465,383,463,376,461,353,461,344,456,340,453,332,449,321,436,305,419,303,411,316,407,327,403,357,395,361,387,379,371,396,357,399,349,428,329,449,321,447,307,461,299,477,300,481,303,485,293,505,284,509,267,509,261,517,245,523,240,527,236,543" />'

// ,'<area alt="Bone trench" title="0 4" href="#" shape="poly" coords="549,198,550,200,574,224,570,266,576,311,589,352,573,353,561,358,553,353,550,344,537,337,526,343,505,340,495,335,483,352,465,368,462,344,448,317,438,305,450,292,466,262,492,245,496,249,508,249,523,240,540,233,543,221" />'
// , '<area alt="Hells gates" title="0 6" class="noborder icolor00ff00" href="#" shape="poly" coords="382,540,413,549,433,570,447,594,449,604,477,595,505,577,539,558,565,532,577,519,577,491,581,472,523,479,505,474,471,478,445,487,423,495,414,499,386,519">< /area>'];

var dice = {
	sides : 6,
	rollDice : function(){
		return Math.floor((Math.random() * dice.sides) + 1);
	},
	//Rolls muliple dices and returns array with result
	rollMulti : function(number){
		var array = new Array(number);

		for (var i = 0; i < number; i++) {
			array[i] = dice.rollDice();
		};
		return array;
	}
}


function gameControl (d,m){
	var self = this
	var map = m;
	var data = d;
	var ui;

	/****************Set variables*********************/
	this.setGameData = function(model){
		data = model;
	};
	this.setMap = function(model){
		map = model;
	};
	this.setUIControl= function  (uic) {
		ui = uic;
	}
	/******************Game states***************************/

	this.getStartPhase = function(){
		return data.startPhases[data.startPhase];
	};
	this.nextStartPhase = function(){
		return data.startPhase++;
	};

	this.getTurn = function(){
		return data.turn;
	};
	this.turnComplete =  function(){
		data.turn = (data.turn + 1)%data.playerSize;
	};

	this.getGamePhase =  function(){
		return data.gamePhases[data.phase];
	};

	this.getCurrentPhase =  function(){
		if(data.startPhase<3){
			return data.startPhases[data.startPhase];
		}
		return data.gamePhases[data.gamePhase];
	};
	this.getGameData =  function(){
		return data;
	};
	this.nextGamePhase = function(){
		return data.gamePhase = (data.gamePhase+1) % (data.gamePhases.length);
	};

	this.isStartPhase = function(){
		if(data.startPhase<3)
		{
			return true;
		}
		else
		{
			return false;
		};
	};

	//Number of players (sets startunits at the same time)
	this.setPlayerSize = function(size){
		for (var i = 0; i < size; i++) {
			data.unitCount[i] = data.startUnits[size-2];
		};
		data.playerSize = size;
	}
	this.getPlayerSize = function(){
		return data.playerSize;
	}

	//Set continer of players
	this.setPlayers = function(players){
		data.players= players;
	}
	this.getCurrentPlayer = function(){
		return data.players[data.turn];
	}
	//Set player race
	this.setPlayerRace = function(index, race){
		data.players[index].race = race;
	}
	this.getPlayerRace = function(index){
		return data.players[index].race;
	}
	this.getPlayerColor = function(index){
		return data.players[index].color;
	}
	//Set player race
	this.setPlayerName = function(index, name){
		data.players[index].name = name;
	}

	//Territories api
	//int of area, int territory, int number of units added
	this.addUnits = function(area, territory, units){
		map.area[area].territories[territory].units += units;
		self.updateTerritoryUI(area, territory);
	};
	//int of area, int territory, int number of units removed
	this.removeUnits = function(area, territory, units){
		map.area[area].territories[territory].units -= units;
		ui.drawTerritoryStats(area, territory, map.area[area].territories[territory].units);
	};
	//int of area, int territory, colorcode of owner
	this.changeControl = function(area, territory, color){
		map.area[area].territories[territory].color = color;
	};
	//int of area, int territory, boolean if base
	this.setBase = function(area, territory, base){
		map.area[area].territories[territory].base = base;
	};
	//int of area, int territory, boolean if extra value of territoium
	this.setExtra = function(area, territory, extra){
		map.area[area].territories[territory].extra = extra;
	};
	//int of area, int territory
	this.getUnits = function(area, territory){
		return map.area[area].territories[territory].units;
	};
	//int of area, int territory, int number of units added
	this.getColor = function(area, territory){
		return map.area[area].territories[territory].color;
	};
	//int of area, int territory, int number of units added
	this.hasHero = function(area, territory){
		return map.area[area].territories[territory].hero;
	};
	this.getAdjacent = function(area, territory){
		return map.area[area].territories[territory].adjacent;
	};
	//move units from one area to another
	this.moveUnits = function(area1, territory1, area2, territory2, units){
		//Reduce from current territory
		map.area[area1].territories[territory1].units -= units;
		//Add to new territory
		map.area[area2].territories[territory2].units += units;
	},
	this.isDefeated = function(area, territory){
		if(map.area[area1].territories[territory1].units<=0){ return true;}
		else{return false;}
	};
	this.isFree = function(area, territory){
		console.log(map);
		var color = map.area[area].territories[territory].color;
		if( color == null || color == ""){return true;} else{return false;} 
	}
	this.getMiddle = function(area, territory){
		return map.area[area].territories[territory].middle;
	}

	/*************** STARTPHASE ************************/

	this.addHero= function(area, territory){
		if(map.area[area].territories[territory].color == data.players[data.turn].color){
			map.area[area].territories[territory].hero = true;
			return true;
		}else{
			return false;
		}
		
	}
	this.addBase= function(area, territory){
		if(self.isFree(area, territory)){
			map.area[area].territories[territory].color = data.players[data.turn].color;
			map.area[area].territories[territory].base = true;
			return true;
		}else{
			return false;
		}
		
	}
	this.addReinforcement = function(){
		if(self.isFree(area, territory)){
			console.log("is free");
			map.area[area].territories[territory].color = data.players[data.turn].color;
			map.area[area].territories[territory].units++;
			self.this.updateTerritoryUI(area, territory);
			return true;
		}else{
			return false;
		}
	};
	this.getStartSum = function(){
		var sum = 0;
		for (var i = 0; i < data.startUnitCount.length; i++) {
			sum += data.unitCount[i];
		};
		return;
	}
	//Attack an other territory
	//int of area, int territory, int number of units to attack with, array with dices, defender area and territory
	// returns true if opponent was defeated
	this.attack = function(area1, territory1,units, attackroll, area2, territory2, defroll){
		//Wrong input
		if(attackroll.length > units){
			//Do alert before
			alert("Not enough units to attack");
			return false;
		}
		//is adjacent
		if(!gameControl.isAdjacent(area1, territory1, area2, territory2)){
			//Do alert beforil
			alert("terriories not adjacent");
			return false;
		};

		var a = attackroll.sort(function(a, b){return b-a});
		var b = defroll.sort(function(a, b){return b-a});
		if(gameControl.hasHero(area1, territory1)){
			a[0]++;
		}
		if(gameControl.hasHero(area2, territory2)){
			b[0]++;
		}
		for (var i = 0; i < Math.min(a.length,b.length); i++) {
			console.log("attack : " + a[i]);
			console.log("defend : " + b[i]);
			//If attacker wins
			if(a[i]>b[i]){
				gameControl.removeUnits(area2,territory2,1);
				self.updateTerritoryUI(area2, territory2);
				if(gameControl.isDefeated(area2, territory2)){return true;}
			//Defender wins
			}else{
				gameControl.removeUnits(area1,territory1,1);
				self.updateTerritoryUI(area1, territory1);
			}
		};
		return false;

	};
	//Same as attack but autorolls dices
	this.attackandroll = function(area1, territory1,units, area2, territory2){
		if(gameControl.getUnits(area1, territory1)<units || gameControl.getUnits(area1, territory1)==1){
			//no enough units
			return;
		}
		var defcount = 1;
		if(gameControl.getUnits(area1, territory1)>1){
			defcount = 2;
		}
		gameControl.attack(area1, territory1,units, dice.rollMulti(units), area2, territory2, dice.rollMulti(defcount));
	};
	//Returns boolean if 2 territories is adjacent
	this.isAdjacent = function(area1, territory1, area2, territory2){
		var adjacent = gameControl.getAdjacent(area1, territory1);
		console.log(adjacent);
		for (var i = 0; i < adjacent.length; i++) {
			if(adjacent[i].area == area2 && adjacent[i].territory == territory2){
				return true;
			}
		};
		return false;
	}
		//Set how a territory should react on click depending on phase
		var startPhaseFunctions = [
				//Startphase 1´0
    			//Bases left to deploy
    			function (con, area,territory) {

    				console.log("click 1");
    				console.log(data.baseCount);
    				console.log(data.playerSize);
    				if(con.addBase(area,territory)){
    					console.log("Base placed");
    					data.baseCount++;
    					con.turnComplete();
    				}
    				if(data.baseCount >= data.playerSize){
    				//Place base if territory dont have a base and finish turn
    				con.nextStartPhase();
    			}	},
    			function (con,area,territory) {
    				console.log("click 2");
    				//Player has units left 
    				if(data.unitCount[data.turn] > 0 ){
    					//can place on busy area
    					if(data.unitsOut>=map.mapSize){

    						if(con.addReinforcement){
    							data.unitCount[data.turn]-1;
    							data.unitsOut++;
    							console.log("unit placed");
    							con.turnComplete();
    							return;
    						}
    						return;
    			
    					}
    					//all areas are taken, can place on busy area
    					else{
    						if(con.isFree(area,territory)){
    							con.addUnits(area,territory,1);
    							data.unitsOut++;
    							data.unitCount[data.turn]-1;
    							console.log("unit placed");
    							con.turnComplete();
    							return;
    						}
    						return;
    					}
    				}
    				else{
    					con.turnComplete();
    					return
    				}
    				con.nextStartPhase();

    			}
    			,
    			function (area,territory) {
    				console.log("click 3");
    				if(data.heroCount < data.playerSize){
    					if(con.addHero(area, territory)){
    						data.heroCount++;
    						console.log("hero placed");
    						return;
    					}
    					return;

    				}
    				con.nextStartPhase();
    			}

    			];
    			this.territoryClick = function(obj){
    				console.log("Phase : " + data.startPhase);
    				console.log("Turn : " + data.turn);
    				var pos = $(obj[0]).attr('title').split(" ");
    				var area = parseInt(pos[0]);
    				var territory = parseInt(pos[1]);
    				if(self.isStartPhase){
    					
    					startPhaseFunctions[data.startPhase](self,area,territory);
    					self.updateScorePanel();
    					console.log("data");
    					console.log(data);
    				}
    			}
    			this.updateScorePanel = function(){
    				ui.setTurn(self.getCurrentPlayer());
    				ui.setPhase(self.getCurrentPhase());
    			}
    			this.updateTerritoryUI = function(area,territory){
    				var middle = self.getMiddle(area,territory);
    				ui.drawTerritoryStats(middle[0],middle[1],map.area[area].territories[territory].units);
    			}

}
    		


var gameData = {
	//Number of players
	playerSize : null,
	//Array with player data
	players: null,
	//Startphases
	startPhases : ["Place your base", "Add reinforcement", "Add hero on friendly territory"],
	//Current startphase, if over 2, startphase is over
	startPhase : 0,
	//Diffrent phases of the game
	gamePhases : ["Deployment", "Attack", "Achievment", "Movement"],
	//Currrent gamephase
	gamePhase : 0,
	turn : 0,
	baseCount : 0,
	heroCount : 0,
	unitCount : [],
	map : null,
	//Starting units for number of players -> 3, 4 ,5 , 6
	startUnits : [30,25,20,15],
	unitsOut :0



}
var players = [
{color: "AA00FF", race : "zerg", name: "", taken: false},
{color: "FF6D00", race : "protoss", name: "", taken: false},
{color: "2962FF", race : "terran", name: "", taken: false},
{color: "D50000", race : "terran", name: "", taken: false},
{color: "FFEB3B", race : "protoss", name: "", taken: false},
{color: "795548", race : "zerg", name: "", taken: false}
]
var player = {
	name : null,
	faction : null,
}
var mapskelleton = {
	size: null,
	premade: false,
	area : new Array(),
}
var territorySkelleton = {
	name : null, color : null, hero : false, units : 0, adjacent : [{area : 0, territory : 0}] 
}
var freemap = {
		order : null,
		size : null,
		premade: false,
		mapSize : 42,
		area : [
		{
			name : "Char",
			bonus : 7,
			territories : [
			{ name : "Char aleph", color : "", hero : false, units : 0, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Glass flats", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Burning rift", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Death valley", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Bone trench", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Dauntless plateau", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Hells gates", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Nydus network", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Primary hive cluster", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Acid marsh", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Eris", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Ate", color : "", hero : false, units : 0, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] }
			]
		},
		{
			name : "Korhal",
			bonus : 5,
			territories : [
			{ name : "Wolfrec province", color : "", hero : false, units : 0, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Keresh province", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Augustgrad", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Radiated wastes", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Ruins of styrling", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Ursa", color : "", hero : false, units : 0, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Canis", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			]

		},
		{
			name : "Aiur",
			bonus : 5,
			territories : [
			{ name : "Saalok", color : "", hero : false, units : 0, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Temple of the preservers", color : "", hero : false, units :0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "The great forum", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Antioch province", color : "", hero : false, units : 0, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Scion province", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Remains of the overmind", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Feral hives", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},

			{ name : "Velari province", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Citadel of the executor", color : "", hero : false, units : 0 , base : false, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},

			]
		},
		//3
		{
			name : "Zerus",
			bonus : 2,
			territories : [
			{ name : "The eternal scar", color : "", hero : false, units : 0, base : false, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "SundeD50000 valley", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Fulmic highlands", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Volatile cleft", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]}
			]
		},
		//4
		{
			name : "Mar sara",
			bonus : 3,
			territories : [
			{ name : "Thisby", color : "", hero : false, units : 0, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Backwater station", color : "", hero : false, units : 0, base : false , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Diamondback wastelands", color : "", hero : false, units : 0, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Riksville", color : "", hero : false, units : 0, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Jacobs installation", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Pyramus", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			]
		},
		{
			name : "Shakuras",
			bonus : 2,
			territories : [
			{ name : "Rajal", color : "", hero : false, units : 0, base : false, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Katuul province", color : "", hero : false, units : 0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Talematros", color : "", hero : false, units :0 , middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Xelnaga temple grounds", color : "", hero : false, units : 0, middle:[80,110], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] }
			]
		}
		]


	};


var maps = [
	// Three players
	{},
	//Four players
	{
		order : [3,4,0,2],
		size : 4,
		premade: false,
		mapSize : 42,
		area : [
		{
			name : "Char",
			bonus : 7,
			territories : [
			{ name : "Char aleph", color : "AA00FF", hero : false, units : 2, adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Glass flats", color : "AA00FF", hero : false, units : 2 },
			{ name : "Burning rift", color : "AA00FF", hero : false, units : 2 },
			{ name : "Death valley", color : "2962FF", hero : false, units : 5 },
			{ name : "Bone trench", color : "FFEB3B", hero : false, units : 1 },
			{ name : "Dauntless plateau", color : "2962FF", hero : false, units : 1 },
			{ name : "Hells gates", color : "2962FF", hero : false, units : 2 },
			{ name : "Nydus network", color : "FFEB3B", hero : false, units : 2 },
			{ name : "Primary hive cluster", color : "2962FF", hero : false, units : 1 },
			{ name : "Acid marsh", color : "2962FF", hero : false, units : 1 },
			{ name : "Eris", color : "FFEB3B", hero : false, units : 2 },
			{ name : "Ate", color : "2962FF", hero : false, units : 1 }
			]
		},
		{
			name : "Korhal",
			bonus : 5,
			territories : [
			{ name : "Wolfrec province", color : "AA00FF", hero : false, units : 2 },
			{ name : "Keresh province", color : "FFEB3B", hero : false, units : 3 },
			{ name : "Augustgrad", color : "D50000", hero : false, units : 3 },
			{ name : "Radiated wastes", color : "FFEB3B", hero : false, units : 3 },
			{ name : "Ruins of styrling", color : "D50000", hero : false, units : 3 },
			{ name : "Ursa", color : "D50000", hero : false, units : 3},
			{ name : "Canis", color : "AA00FF", hero : false, units : 2 },
			]

		},
		{
			name : "Aiur",
			bonus : 5,
			territories : [
			{ name : "Saalok", color : "FFEB3B", hero : false, units : 2 },
			{ name : "Temple of the preservers", color : "FFEB3B", hero : false, units : 2 },
			{ name : "The great forum", color : "AA00FF", hero : false, units : 3 },
			{ name : "Antioch province", color : "D50000", hero : false, units : 2 },
			{ name : "Scion province", color : "AA00FF", hero : false, units : 2 },
			{ name : "Remains of the overmind", color : "AA00FF", hero : false, units : 2 },
			{ name : "Feral hives", color : "D50000", hero : false, units : 1 },

			{ name : "Velari province", color : "AA00FF", hero : false, units : 2 },
			{ name : "Citadel of the executor", color : "AA00FF", hero : false, units : 3 , base : true},

			]
		},
		//3
		{
			name : "Zerus",
			bonus : 2,
			territories : [
			{ name : "The eternal scar", color : "2962FF", hero : false, units : 4, base : true },
			{ name : "SundeD50000 valley", color : "2962FF", hero : false, units : 4 },
			{ name : "Fulmic highlands", color : "2962FF", hero : false, units : 1 },
			{ name : "Volatile cleft", color : "D50000", hero : false, units : 2 }
			]
		},
		//4
		{
			name : "Mar sara",
			bonus : 3,
			territories : [
			{ name : "Thisby", color : "D50000", hero : false, units : 1 },
			{ name : "Backwater station", color : "D50000", hero : false, units : 2, base : true },
			{ name : "Diamondback wastelands", color : "D50000", hero : false, units : 3 },
			{ name : "Riksville", color : "D50000", hero : false, units : 5 },
			{ name : "Jacobs installation", color : "2962FF", hero : false, units : 3 },
			{ name : "Pyramus", color : "FFEB3B", hero : false, units : 2 },
			]
		},
		{
			name : "Shakuras",
			bonus : 2,
			territories : [
			{ name : "Rajal", color : "FFEB3B", hero : false, units : 4, base : true },
			{ name : "Katuul province", color : "FFEB3B", hero : false, units : 4 },
			{ name : "Talematros", color : "AA00FF", hero : false, units : 2 },
			{ name : "Xelnaga temple grounds", color : "2962FF", hero : false, units : 2 }
			]
		}
		]


	}
	
	]

var gameLoop = function(control){
	var isRunning = true;
	var uicontrol = new UIControl(control);
	control.setUIControl(uicontrol);
	uicontrol.setupBoard();
	bindTerritoryClick(control);
	control.updateScorePanel();
	// bindTerritoryClick(control);

};

var setClickFunction = function(control){
		$("#Map area").bind('click',function(){
    		alert('unit placed');
    		var pos = $(this).attr('title').split[" "];
    		var area = parseInt(pos[0]);
    		var territory = parseInt(pos[1]);
    	});

}


    var areaClick = function(area,id){
    	panel.territoriumPanel(area,id);
    }
    var bindTerritoryClick = function(control){
    	$("#Map area").bind('click',function(){

    		control.territoryClick($(this));
    	});
    }


var highlighting = {

	alwaysOn : true,
	setTerritoriumColor : function(id,color){
		var data = $(id).data('maphilight')  || {};
		data.fillColor = color;
		data.alwaysOn = highlighting.alwaysOn;
		data.stroke = false;
		data.fillOpacity  = 0.35;
		$(id).data('maphilight', data);
	},


}
var getTerrColor= function(id){

	var pos = $(id).attr('title');
	var pos2 = pos.split(" ");
	return maps[gameData.playerSize-3].area[parseInt(pos2[0])].territories[parseInt(pos2[1])].color;
}
/* ImageMapster
   Version: 1.2.8 (12/30/2012)

Copyright 2011-2012 James Treworgy

http://www.outsharked.com/imagemapster
https://github.com/jamietre/ImageMapster

A jQuery plugin to enhance image maps.

*/

;

/// LICENSE (MIT License)
///
/// Permission is hereby granted, free of charge, to any person obtaining
/// a copy of this software and associated documentation files (the
/// "Software"), to deal in the Software without restriction, including
/// without limitation the rights to use, copy, modify, merge, publish,
/// distribute, sublicense, and/or sell copies of the Software, and to
/// permit persons to whom the Software is furnished to do so, subject to
/// the following conditions:
///
/// The above copyright notice and this permission notice shall be
/// included in all copies or substantial portions of the Software.
///
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
/// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
/// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
/// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
/// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
/// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
/// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///
/// January 19, 2011

/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
* when
* A lightweight CommonJS Promises/A and when() implementation
*
* when is part of the cujo.js family of libraries (http://cujojs.com/)
*
* Licensed under the MIT License at:
* http://www.opensource.org/licenses/mit-license.php
*
* @version 1.2.0
*/

/*lint-ignore-start*/

(function (define) {
    define(function () {
        var freeze, reduceArray, slice, undef;

        //
        // Public API
        //

        when.defer = defer;
        when.reject = reject;
        when.isPromise = isPromise;

        when.all = all;
        when.some = some;
        when.any = any;

        when.map = map;
        when.reduce = reduce;

        when.chain = chain;

        /** Object.freeze */
        freeze = Object.freeze || function (o) { return o; };

        /**
        * Trusted Promise constructor.  A Promise created from this constructor is
        * a trusted when.js promise.  Any other duck-typed promise is considered
        * untrusted.
        *
        * @constructor
        */
        function Promise() { }

        Promise.prototype = freeze({
            always: function (alwaysback, progback) {
                return this.then(alwaysback, alwaysback, progback);
            },

            otherwise: function (errback) {
                return this.then(undef, errback);
            }
        });

        /**
        * Create an already-resolved promise for the supplied value
        * @private
        *
        * @param value anything
        * @return {Promise}
        */
        function resolved(value) {

            var p = new Promise();

            p.then = function (callback) {
                var nextValue;
                try {
                    if (callback) nextValue = callback(value);
                    return promise(nextValue === undef ? value : nextValue);
                } catch (e) {
                    return rejected(e);
                }
            };

            return freeze(p);
        }

        /**
        * Create an already-rejected {@link Promise} with the supplied
        * rejection reason.
        * @private
        *
        * @param reason rejection reason
        * @return {Promise}
        */
        function rejected(reason) {

            var p = new Promise();

            p.then = function (callback, errback) {
                var nextValue;
                try {
                    if (errback) {
                        nextValue = errback(reason);
                        return promise(nextValue === undef ? reason : nextValue)
                    }

                    return rejected(reason);

                } catch (e) {
                    return rejected(e);
                }
            };

            return freeze(p);
        }

        /**
        * Returns a rejected promise for the supplied promiseOrValue. If
        * promiseOrValue is a value, it will be the rejection value of the
        * returned promise.  If promiseOrValue is a promise, its
        * completion value will be the rejected value of the returned promise
        *
        * @param promiseOrValue {*} the rejected value of the returned {@link Promise}
        *
        * @return {Promise} rejected {@link Promise}
        */
        function reject(promiseOrValue) {
            return when(promiseOrValue, function (value) {
                return rejected(value);
            });
        }

        /**
        * Creates a new, CommonJS compliant, Deferred with fully isolated
        * resolver and promise parts, either or both of which may be given out
        * safely to consumers.
        * The Deferred itself has the full API: resolve, reject, progress, and
        * then. The resolver has resolve, reject, and progress.  The promise
        * only has then.
        *
        * @memberOf when
        * @function
        *
        * @returns {Deferred}
        */
        function defer() {
            var deferred, promise, listeners, progressHandlers, _then, _progress, complete;

            listeners = [];
            progressHandlers = [];

            /**
            * Pre-resolution then() that adds the supplied callback, errback, and progback
            * functions to the registered listeners
            *
            * @private
            *
            * @param [callback] {Function} resolution handler
            * @param [errback] {Function} rejection handler
            * @param [progback] {Function} progress handler
            *
            * @throws {Error} if any argument is not null, undefined, or a Function
            */
            _then = function unresolvedThen(callback, errback, progback) {
                var deferred = defer();

                listeners.push(function (promise) {
                    promise.then(callback, errback)
					.then(deferred.resolve, deferred.reject, deferred.progress);
                });

                progback && progressHandlers.push(progback);

                return deferred.promise;
            };

            /**
            * Registers a handler for this {@link Deferred}'s {@link Promise}.  Even though all arguments
            * are optional, each argument that *is* supplied must be null, undefined, or a Function.
            * Any other value will cause an Error to be thrown.
            *
            * @memberOf Promise
            *
            * @param [callback] {Function} resolution handler
            * @param [errback] {Function} rejection handler
            * @param [progback] {Function} progress handler
            *
            * @throws {Error} if any argument is not null, undefined, or a Function
            */
            function then(callback, errback, progback) {
                return _then(callback, errback, progback);
            }

            /**
            * Resolves this {@link Deferred}'s {@link Promise} with val as the
            * resolution value.
            *
            * @memberOf Resolver
            *
            * @param val anything
            */
            function resolve(val) {
                complete(resolved(val));
            }

            /**
            * Rejects this {@link Deferred}'s {@link Promise} with err as the
            * reason.
            *
            * @memberOf Resolver
            *
            * @param err anything
            */
            function reject(err) {
                complete(rejected(err));
            }

            /**
            * @private
            * @param update
            */
            _progress = function (update) {
                var progress, i = 0;
                while (progress = progressHandlers[i++]) progress(update);
            };

            /**
            * Emits a progress update to all progress observers registered with
            * this {@link Deferred}'s {@link Promise}
            *
            * @memberOf Resolver
            *
            * @param update anything
            */
            function progress(update) {
                _progress(update);
            }

            /**
            * Transition from pre-resolution state to post-resolution state, notifying
            * all listeners of the resolution or rejection
            *
            * @private
            *
            * @param completed {Promise} the completed value of this deferred
            */
            complete = function (completed) {
                var listener, i = 0;

                // Replace _then with one that directly notifies with the result.
                _then = completed.then;

                // Replace complete so that this Deferred can only be completed
                // once. Also Replace _progress, so that subsequent attempts to issue
                // progress throw.
                complete = _progress = function alreadyCompleted() {
                    // TODO: Consider silently returning here so that parties who
                    // have a reference to the resolver cannot tell that the promise
                    // has been resolved using try/catch
                    throw new Error("already completed");
                };

                // Free progressHandlers array since we'll never issue progress events
                // for this promise again now that it's completed
                progressHandlers = undef;

                // Notify listeners
                // Traverse all listeners registered directly with this Deferred

                while (listener = listeners[i++]) {
                    listener(completed);
                }

                listeners = [];
            };

            /**
            * The full Deferred object, with both {@link Promise} and {@link Resolver}
            * parts
            * @class Deferred
            * @name Deferred
            */
            deferred = {};

            // Promise and Resolver parts
            // Freeze Promise and Resolver APIs

            promise = new Promise();
            promise.then = deferred.then = then;

            /**
            * The {@link Promise} for this {@link Deferred}
            * @memberOf Deferred
            * @name promise
            * @type {Promise}
            */
            deferred.promise = freeze(promise);

            /**
            * The {@link Resolver} for this {@link Deferred}
            * @memberOf Deferred
            * @name resolver
            * @class Resolver
            */
            deferred.resolver = freeze({
                resolve: (deferred.resolve = resolve),
                reject: (deferred.reject = reject),
                progress: (deferred.progress = progress)
            });

            return deferred;
        }

        /**
        * Determines if promiseOrValue is a promise or not.  Uses the feature
        * test from http://wiki.commonjs.org/wiki/Promises/A to determine if
        * promiseOrValue is a promise.
        *
        * @param promiseOrValue anything
        *
        * @returns {Boolean} true if promiseOrValue is a {@link Promise}
        */
        function isPromise(promiseOrValue) {
            return promiseOrValue && typeof promiseOrValue.then === 'function';
        }

        /**
        * Register an observer for a promise or immediate value.
        *
        * @function
        * @name when
        * @namespace
        *
        * @param promiseOrValue anything
        * @param {Function} [callback] callback to be called when promiseOrValue is
        *   successfully resolved.  If promiseOrValue is an immediate value, callback
        *   will be invoked immediately.
        * @param {Function} [errback] callback to be called when promiseOrValue is
        *   rejected.
        * @param {Function} [progressHandler] callback to be called when progress updates
        *   are issued for promiseOrValue.
        *
        * @returns {Promise} a new {@link Promise} that will complete with the return
        *   value of callback or errback or the completion value of promiseOrValue if
        *   callback and/or errback is not supplied.
        */
        function when(promiseOrValue, callback, errback, progressHandler) {
            // Get a promise for the input promiseOrValue
            // See promise()
            var trustedPromise = promise(promiseOrValue);

            // Register promise handlers
            return trustedPromise.then(callback, errback, progressHandler);
        }

        /**
        * Returns promiseOrValue if promiseOrValue is a {@link Promise}, a new Promise if
        * promiseOrValue is a foreign promise, or a new, already-resolved {@link Promise}
        * whose resolution value is promiseOrValue if promiseOrValue is an immediate value.
        *
        * Note that this function is not safe to export since it will return its
        * input when promiseOrValue is a {@link Promise}
        *
        * @private
        *
        * @param promiseOrValue anything
        *
        * @returns Guaranteed to return a trusted Promise.  If promiseOrValue is a when.js {@link Promise}
        *   returns promiseOrValue, otherwise, returns a new, already-resolved, when.js {@link Promise}
        *   whose resolution value is:
        *   * the resolution value of promiseOrValue if it's a foreign promise, or
        *   * promiseOrValue if it's a value
        */
        function promise(promiseOrValue) {
            var promise, deferred;

            if (promiseOrValue instanceof Promise) {
                // It's a when.js promise, so we trust it
                promise = promiseOrValue;

            } else {
                // It's not a when.js promise.  Check to see if it's a foreign promise
                // or a value.

                deferred = defer();
                if (isPromise(promiseOrValue)) {
                    // It's a compliant promise, but we don't know where it came from,
                    // so we don't trust its implementation entirely.  Introduce a trusted
                    // middleman when.js promise

                    // IMPORTANT: This is the only place when.js should ever call .then() on
                    // an untrusted promise.
                    promiseOrValue.then(deferred.resolve, deferred.reject, deferred.progress);
                    promise = deferred.promise;

                } else {
                    // It's a value, not a promise.  Create an already-resolved promise
                    // for it.
                    deferred.resolve(promiseOrValue);
                    promise = deferred.promise;
                }
            }

            return promise;
        }

        /**
        * Return a promise that will resolve when howMany of the supplied promisesOrValues
        * have resolved. The resolution value of the returned promise will be an array of
        * length howMany containing the resolutions values of the triggering promisesOrValues.
        *
        * @memberOf when
        *
        * @param promisesOrValues {Array} array of anything, may contain a mix
        *      of {@link Promise}s and values
        * @param howMany
        * @param [callback]
        * @param [errback]
        * @param [progressHandler]
        *
        * @returns {Promise}
        */
        function some(promisesOrValues, howMany, callback, errback, progressHandler) {

            checkCallbacks(2, arguments);

            return when(promisesOrValues, function (promisesOrValues) {

                var toResolve, results, ret, deferred, resolver, rejecter, handleProgress, len, i;

                len = promisesOrValues.length >>> 0;

                toResolve = Math.max(0, Math.min(howMany, len));
                results = [];
                deferred = defer();
                ret = when(deferred, callback, errback, progressHandler);

                // Wrapper so that resolver can be replaced
                function resolve(val) {
                    resolver(val);
                }

                // Wrapper so that rejecter can be replaced
                function reject(err) {
                    rejecter(err);
                }

                // Wrapper so that progress can be replaced
                function progress(update) {
                    handleProgress(update);
                }

                function complete() {
                    resolver = rejecter = handleProgress = noop;
                }

                // No items in the input, resolve immediately
                if (!toResolve) {
                    deferred.resolve(results);

                } else {
                    // Resolver for promises.  Captures the value and resolves
                    // the returned promise when toResolve reaches zero.
                    // Overwrites resolver var with a noop once promise has
                    // be resolved to cover case where n < promises.length
                    resolver = function (val) {
                        // This orders the values based on promise resolution order
                        // Another strategy would be to use the original position of
                        // the corresponding promise.
                        results.push(val);

                        if (! --toResolve) {
                            complete();
                            deferred.resolve(results);
                        }
                    };

                    // Rejecter for promises.  Rejects returned promise
                    // immediately, and overwrites rejecter var with a noop
                    // once promise to cover case where n < promises.length.
                    // TODO: Consider rejecting only when N (or promises.length - N?)
                    // promises have been rejected instead of only one?
                    rejecter = function (err) {
                        complete();
                        deferred.reject(err);
                    };

                    handleProgress = deferred.progress;

                    // TODO: Replace while with forEach
                    for (i = 0; i < len; ++i) {
                        if (i in promisesOrValues) {
                            when(promisesOrValues[i], resolve, reject, progress);
                        }
                    }
                }

                return ret;
            });
        }

        /**
        * Return a promise that will resolve only once all the supplied promisesOrValues
        * have resolved. The resolution value of the returned promise will be an array
        * containing the resolution values of each of the promisesOrValues.
        *
        * @memberOf when
        *
        * @param promisesOrValues {Array|Promise} array of anything, may contain a mix
        *      of {@link Promise}s and values
        * @param [callback] {Function}
        * @param [errback] {Function}
        * @param [progressHandler] {Function}
        *
        * @returns {Promise}
        */
        function all(promisesOrValues, callback, errback, progressHandler) {

            checkCallbacks(1, arguments);

            return when(promisesOrValues, function (promisesOrValues) {
                return _reduce(promisesOrValues, reduceIntoArray, []);
            }).then(callback, errback, progressHandler);
        }

        function reduceIntoArray(current, val, i) {
            current[i] = val;
            return current;
        }

        /**
        * Return a promise that will resolve when any one of the supplied promisesOrValues
        * has resolved. The resolution value of the returned promise will be the resolution
        * value of the triggering promiseOrValue.
        *
        * @memberOf when
        *
        * @param promisesOrValues {Array|Promise} array of anything, may contain a mix
        *      of {@link Promise}s and values
        * @param [callback] {Function}
        * @param [errback] {Function}
        * @param [progressHandler] {Function}
        *
        * @returns {Promise}
        */
        function any(promisesOrValues, callback, errback, progressHandler) {

            function unwrapSingleResult(val) {
                return callback ? callback(val[0]) : val[0];
            }

            return some(promisesOrValues, 1, unwrapSingleResult, errback, progressHandler);
        }

        /**
        * Traditional map function, similar to `Array.prototype.map()`, but allows
        * input to contain {@link Promise}s and/or values, and mapFunc may return
        * either a value or a {@link Promise}
        *
        * @memberOf when
        *
        * @param promise {Array|Promise} array of anything, may contain a mix
        *      of {@link Promise}s and values
        * @param mapFunc {Function} mapping function mapFunc(value) which may return
        *      either a {@link Promise} or value
        *
        * @returns {Promise} a {@link Promise} that will resolve to an array containing
        *      the mapped output values.
        */
        function map(promise, mapFunc) {
            return when(promise, function (array) {
                return _map(array, mapFunc);
            });
        }

        /**
        * Private map helper to map an array of promises
        * @private
        *
        * @param promisesOrValues {Array}
        * @param mapFunc {Function}
        * @return {Promise}
        */
        function _map(promisesOrValues, mapFunc) {

            var results, len, i;

            // Since we know the resulting length, we can preallocate the results
            // array to avoid array expansions.
            len = promisesOrValues.length >>> 0;
            results = new Array(len);

            // Since mapFunc may be async, get all invocations of it into flight
            // asap, and then use reduce() to collect all the results
            for (i = 0; i < len; i++) {
                if (i in promisesOrValues)
                    results[i] = when(promisesOrValues[i], mapFunc);
            }

            // Could use all() here, but that would result in another array
            // being allocated, i.e. map() would end up allocating 2 arrays
            // of size len instead of just 1.  Since all() uses reduce()
            // anyway, avoid the additional allocation by calling reduce
            // directly.
            return _reduce(results, reduceIntoArray, results);
        }

        /**
        * Traditional reduce function, similar to `Array.prototype.reduce()`, but
        * input may contain {@link Promise}s and/or values, and reduceFunc
        * may return either a value or a {@link Promise}, *and* initialValue may
        * be a {@link Promise} for the starting value.
        *
        * @memberOf when
        *
        * @param promise {Array|Promise} array of anything, may contain a mix
        *      of {@link Promise}s and values.  May also be a {@link Promise} for
        *      an array.
        * @param reduceFunc {Function} reduce function reduce(currentValue, nextValue, index, total),
        *      where total is the total number of items being reduced, and will be the same
        *      in each call to reduceFunc.
        * @param initialValue starting value, or a {@link Promise} for the starting value
        *
        * @returns {Promise} that will resolve to the final reduced value
        */
        function reduce(promise, reduceFunc, initialValue) {
            var args = slice.call(arguments, 1);
            return when(promise, function (array) {
                return _reduce.apply(undef, [array].concat(args));
            });
        }

        /**
        * Private reduce to reduce an array of promises
        * @private
        *
        * @param promisesOrValues {Array}
        * @param reduceFunc {Function}
        * @param initialValue {*}
        * @return {Promise}
        */
        function _reduce(promisesOrValues, reduceFunc, initialValue) {

            var total, args;

            total = promisesOrValues.length;

            // Skip promisesOrValues, since it will be used as 'this' in the call
            // to the actual reduce engine below.

            // Wrap the supplied reduceFunc with one that handles promises and then
            // delegates to the supplied.

            args = [
			function (current, val, i) {
			    return when(current, function (c) {
			        return when(val, function (value) {
			            return reduceFunc(c, value, i, total);
			        });
			    });
			}
		];

            if (arguments.length > 2) args.push(initialValue);

            return reduceArray.apply(promisesOrValues, args);
        }

        /**
        * Ensure that resolution of promiseOrValue will complete resolver with the completion
        * value of promiseOrValue, or instead with resolveValue if it is provided.
        *
        * @memberOf when
        *
        * @param promiseOrValue
        * @param resolver {Resolver}
        * @param [resolveValue] anything
        *
        * @returns {Promise}
        */
        function chain(promiseOrValue, resolver, resolveValue) {
            var useResolveValue = arguments.length > 2;

            return when(promiseOrValue,
			function (val) {
			    if (useResolveValue) val = resolveValue;
			    resolver.resolve(val);
			    return val;
			},
			function (e) {
			    resolver.reject(e);
			    return rejected(e);
			},
			resolver.progress
		);
        }

        //
        // Utility functions
        //

        /**
        * Helper that checks arrayOfCallbacks to ensure that each element is either
        * a function, or null or undefined.
        *
        * @private
        *
        * @param arrayOfCallbacks {Array} array to check
        * @throws {Error} if any element of arrayOfCallbacks is something other than
        * a Functions, null, or undefined.
        */
        function checkCallbacks(start, arrayOfCallbacks) {
            var arg, i = arrayOfCallbacks.length;
            while (i > start) {
                arg = arrayOfCallbacks[--i];
                if (arg != null && typeof arg != 'function') throw new Error('callback is not a function');
            }
        }

        /**
        * No-Op function used in method replacement
        * @private
        */
        function noop() { }

        slice = [].slice;

        // ES5 reduce implementation if native not available
        // See: http://es5.github.com/#x15.4.4.21 as there are many
        // specifics and edge cases.
        reduceArray = [].reduce ||
		function (reduceFunc /*, initialValue */) {
		    // ES5 dictates that reduce.length === 1

		    // This implementation deviates from ES5 spec in the following ways:
		    // 1. It does not check if reduceFunc is a Callable

		    var arr, args, reduced, len, i;

		    i = 0;
		    arr = Object(this);
		    len = arr.length >>> 0;
		    args = arguments;

		    // If no initialValue, use first item of array (we know length !== 0 here)
		    // and adjust i to start at second item
		    if (args.length <= 1) {
		        // Skip to the first real element in the array
		        for (; ; ) {
		            if (i in arr) {
		                reduced = arr[i++];
		                break;
		            }

		            // If we reached the end of the array without finding any real
		            // elements, it's a TypeError
		            if (++i >= len) {
		                throw new TypeError();
		            }
		        }
		    } else {
		        // If initialValue provided, use it
		        reduced = args[1];
		    }

		    // Do the actual reduce
		    for (; i < len; ++i) {
		        // Skip holes
		        if (i in arr)
		            reduced = reduceFunc(reduced, arr[i], i, arr);
		    }

		    return reduced;
		};

        return when;
    });
})(typeof define == 'function'
	? define
	: function (factory) {
	    typeof module != 'undefined'
		? (module.exports = factory())
		: (jQuery.mapster_when = factory());
	}
// Boilerplate for AMD, Node, and browser global
);
/*lint-ignore-end*/
/* ImageMapster core */

/*jslint laxbreak: true, evil: true, unparam: true */

/*global jQuery: true, Zepto: true */


(function ($) {
    // all public functions in $.mapster.impl are methods
    $.fn.mapster = function (method) {
        var m = $.mapster.impl;
        if ($.isFunction(m[method])) {
            return m[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return m.bind.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.mapster');
        }
    };

    $.mapster = {
        version: "1.2.8",
        render_defaults: {
            isSelectable: true,
            isDeselectable: true,
            fade: false,
            fadeDuration: 150,
            fill: true,
            fillColor: '000000',
            fillColorMask: 'FFFFFF',
            fillOpacity: 0.7,
            highlight: true,
            stroke: false,
            strokeColor: 'ff0000',
            strokeOpacity: 1,
            strokeWidth: 1,
            includeKeys: '',
            altImage: null,
            altImageId: null, // used internally            
            altImages: {} 
        },
        defaults: {
            clickNavigate: false,
            wrapClass: null,
            wrapCss: null,
            onGetList: null,
            sortList: false,
            listenToList: false,
            mapKey: '',
            mapValue: '',
            singleSelect: false,
            listKey: 'value',
            listSelectedAttribute: 'selected',
            listSelectedClass: null,
            onClick: null,
            onMouseover: null,
            onMouseout: null,
            mouseoutDelay: 0,
            onStateChange: null,
            boundList: null,
            onConfigured: null,
            configTimeout: 30000,
            noHrefIsMask: true,
            scaleMap: true,
            safeLoad: false,
            areas: []
        },
        shared_defaults: {
            render_highlight: { fade: true },
            render_select: { fade: false },
            staticState: null,
            selected: null
        },
        area_defaults:
        {
            includeKeys: '',
            isMask: false
        },
        canvas_style: {
            position: 'absolute',
            left: 0,
            top: 0,
            padding: 0,
            border: 0
        },
        hasCanvas: null,
        isTouch: null,
        windowLoaded: false,
        map_cache: [],
        hooks: {},
        addHook: function(name,callback) {
            this.hooks[name]=(this.hooks[name]||[]).push(callback);
        },
        callHooks: function(name,context) {
            $.each(this.hooks[name]||[],function(i,e) {
                e.apply(context);
            });
        },
        utils: {
            when: $.mapster_when,
            defer: $.mapster_when.defer,

            // extends the constructor, returns a new object prototype. Does not refer to the
            // original constructor so is protected if the original object is altered. This way you
            // can "extend" an object by replacing it with its subclass.
            subclass: function(BaseClass, constr) {
                var Subclass=function() {
                    var me=this, 
                        args=Array.prototype.slice.call(arguments,0);
                    me.base = BaseClass.prototype;
                    me.base.init = function() {
                        BaseClass.prototype.constructor.apply(me,args);
                    };
                    constr.apply(me,args);
                };
                Subclass.prototype = new BaseClass();
                Subclass.prototype.constructor=Subclass;
                return Subclass;
            },
            asArray: function (obj) {
                return obj.constructor === Array ?
                    obj : this.split(obj);
            },
            // clean split: no padding or empty elements
            split: function (text,cb) {
                var i,el, arr = text.split(',');
                for (i = 0; i < arr.length; i++) {
                    el = $.trim(arr[i]);
                    if (el==='') {
                        arr.splice(i,1);
                    } else {
                        arr[i] = cb ? cb(el):el;
                    }
                }
                return arr;
            },
            // similar to $.extend but does not add properties (only updates), unless the
            // first argument is an empty object, then all properties will be copied
            updateProps: function (_target, _template) {
                var onlyProps,
                    target = _target || {},
                    template = $.isEmptyObject(target) ? _template : _target;

                //if (template) {
                onlyProps = [];
                $.each(template, function (prop) {
                    onlyProps.push(prop);
                });
                //}

                $.each(Array.prototype.slice.call(arguments, 1), function (i, src) {
                    $.each(src || {}, function (prop) {
                        if (!onlyProps || $.inArray(prop, onlyProps) >= 0) {
                            var p = src[prop];

                            if ($.isPlainObject(p)) {
                                // not recursive - only copies 1 level of subobjects, and always merges
                                target[prop] = $.extend(target[prop] || {}, p);
                            } else if (p && p.constructor === Array) {
                                target[prop] = p.slice(0);
                            } else if (typeof p !== 'undefined') {
                                target[prop] = src[prop];
                            }

                        }
                    });
                });
                return target;
            },
            isElement: function (o) {
                return (typeof HTMLElement === "object" ? o instanceof HTMLElement :
                        o && typeof o === "object" && o.nodeType === 1 && typeof o.nodeName === "string");
            },
            // finds element of array or object with a property "prop" having value "val"
            // if prop is not defined, then just looks for property with value "val"
            indexOfProp: function (obj, prop, val) {
                var result = obj.constructor === Array ? -1 : null;
                $.each(obj, function (i, e) {
                    if (e && (prop ? e[prop] : e) === val) {
                        result = i;
                        return false;
                    }
                });
                return result;
            },
            // returns "obj" if true or false, or "def" if not true/false
            boolOrDefault: function (obj, def) {
                return this.isBool(obj) ?
                        obj : def || false;
            },
            isBool: function (obj) {
                return typeof obj === "boolean";
            },
            isUndef: function(obj) {
                return typeof obj === "undefined";
            },
            // evaluates "obj", if function, calls it with args
            // (todo - update this to handle variable lenght/more than one arg)
            ifFunction: function (obj, that, args) {
                if ($.isFunction(obj)) {
                    obj.call(that, args);
                }
            },
            size: function(image, raw) {
                var u=$.mapster.utils;
                return { 
                    width: raw ? (image.width || image.naturalWidth) : u.imgWidth(image,true) ,
                    height: raw ? (image.height || image.naturalHeight) : u.imgHeight(image,true),
                    complete: function() { return !!this.height && !!this.width;}
                };
            },

            // basic function to set the opacity of an element. 
            // this gets monkey patched by the graphics module when running in IE6-8

            setOpacity: function (el, opacity) {
                el.style.opacity = opacity;
            },

            // fade "el" from opacity "op" to "endOp" over a period of time "duration"
            
            fader: (function () {
                var elements = {},
                        lastKey = 0,
                        fade_func = function (el, op, endOp, duration) {
                            var index, 
                                cbIntervals = duration/15,
                                obj, u = $.mapster.utils;

                            if (typeof el === 'number') {
                                obj = elements[el];
                                if (!obj) {
                                    return;
                                }
                            } else {
                                index = u.indexOfProp(elements, null, el);
                                if (index) {
                                    delete elements[index];
                                }
                                elements[++lastKey] = obj = el;
                                el = lastKey;
                            }

                            endOp = endOp || 1;

                            op = (op + (endOp / cbIntervals) > endOp - 0.01) ? endOp : op + (endOp / cbIntervals);

                            u.setOpacity(obj, op);
                            if (op < endOp) {
                                setTimeout(function () {
                                    fade_func(el, op, endOp, duration);
                                }, 15);
                            }
                        };
                return fade_func;
            } ())
        },
        getBoundList: function (opts, key_list) {
            if (!opts.boundList) {
                return null;
            }
            var index, key, result = $(), list = $.mapster.utils.split(key_list);
            opts.boundList.each(function (i,e) {
                for (index = 0; index < list.length; index++) {
                    key = list[index];
                    if ($(e).is('[' + opts.listKey + '="' + key + '"]')) {
                        result = result.add(e);
                    }
                }
            });
            return result;
        },
        // Causes changes to the bound list based on the user action (select or deselect)
        // area: the jQuery area object
        // returns the matching elements from the bound list for the first area passed (normally only one should be passed, but
        // a list can be passed
        setBoundListProperties: function (opts, target, selected) {
            target.each(function (i,e) {
                if (opts.listSelectedClass) {
                    if (selected) {
                        $(e).addClass(opts.listSelectedClass);
                    } else {
                        $(e).removeClass(opts.listSelectedClass);
                    }
                }
                if (opts.listSelectedAttribute) {
                    $(e).attr(opts.listSelectedAttribute, selected);
                }
            });
        },
        getMapDataIndex: function (obj) {
            var img, id;
            switch (obj.tagName && obj.tagName.toLowerCase()) {
                case 'area':
                    id = $(obj).parent().attr('name');
                    img = $("img[usemap='#" + id + "']")[0];
                    break;
                case 'img':
                    img = obj;
                    break;
            }
            return img ?
                this.utils.indexOfProp(this.map_cache, 'image', img) : -1;
        },
        getMapData: function (obj) {
            var index = this.getMapDataIndex(obj.length ? obj[0]:obj);
            if (index >= 0) {
                return index >= 0 ? this.map_cache[index] : null;
            }
        },
        queueCommand: function (map_data, that, command, args) {
            if (!map_data) {
                return false;
            }
            if (!map_data.complete || map_data.currentAction) {
                map_data.commands.push(
                {
                    that: that,
                    command: command,
                    args: args
                });
                return true;
            }
            return false;
        },
        unload: function () {
            this.impl.unload();
            this.utils = null;
            this.impl = null;
            $.fn.mapster = null;
            $.mapster = null;
            $('*').unbind();
        }
    };

    // Config for object prototypes
    // first: use only first object (for things that should not apply to lists)
    /// calls back one of two fuinctions, depending on whether an area was obtained.
    // opts: {
    //    name: 'method name',
    //    key: 'key,
    //    args: 'args'
    //
    //}
    // name: name of method (required)
    // args: arguments to re-call with
    // Iterates through all the objects passed, and determines whether it's an area or an image, and calls the appropriate
    // callback for each. If anything is returned from that callback, the process is stopped and that data return. Otherwise,
    // the object itself is returned.
    
    var m = $.mapster, 
        u = m.utils,
        ap = Array.prototype;


    // jQuery's width() and height() are broken on IE9 in some situations. This tries everything. 
    $.each(["width","height"],function(i,e) {
        var capProp = e.substr(0,1).toUpperCase() + e.substr(1);
        // when jqwidth parm is passed, it also checks the jQuery width()/height() property
        // the issue is that jQUery width() can report a valid size before the image is loaded in some browsers
        // without it, we can read zero even when image is loaded in other browsers if its not visible
        // we must still check because stuff like adblock can temporarily block it
        // what a goddamn headache
        u["img"+capProp]=function(img,jqwidth) {
                return (jqwidth ? $(img)[e]() : 0) || 
                    img[e] || img["natural"+capProp] || img["client"+capProp] || img["offset"+capProp];
        };
     
    });    

    m.Method = function (that, func_map, func_area, opts) {
        var me = this;
        me.name = opts.name;
        me.output = that;
        me.input = that;
        me.first = opts.first || false;
        me.args = opts.args ? ap.slice.call(opts.args, 0) : [];
        me.key = opts.key;
        me.func_map = func_map;
        me.func_area = func_area;
        //$.extend(me, opts);
        me.name = opts.name;
        me.allowAsync = opts.allowAsync || false;
    };
    m.Method.prototype.go = function () {
        var i,  data, ar, len, result, src = this.input,
                area_list = [],
                me = this;

        len = src.length;
        for (i = 0; i < len; i++) {
            data = $.mapster.getMapData(src[i]);
            if (data) {
                if (!me.allowAsync && m.queueCommand(data, me.input, me.name, me.args)) {
                    if (this.first) {
                        result = '';
                    }
                    continue;
                }
                
                ar = data.getData(src[i].nodeName === 'AREA' ? src[i] : this.key);
                if (ar) {
                    if ($.inArray(ar, area_list) < 0) {
                        area_list.push(ar);
                    }
                } else {
                    result = this.func_map.apply(data, me.args);
                }
                if (this.first || typeof result !== 'undefined') {
                    break;
                }
            }
        }
        // if there were areas, call the area function for each unique group
        $(area_list).each(function (i,e) {
            result = me.func_area.apply(e, me.args);
        });

        if (typeof result !== 'undefined') {
            return result;
        } else {
            return this.output;
        }
    };


    $.mapster.impl = (function () {
        var me = {},
            removeMap, addMap;

        addMap = function (map_data) {
            return m.map_cache.push(map_data) - 1;
        };
        removeMap = function (map_data) {
            m.map_cache.splice(map_data.index, 1);
            for (var i = m.map_cache.length - 1; i >= this.index; i--) {
                m.map_cache[i].index--;
            }
        };
        /// return current map_data for an image or area

        // merge new area data into existing area options. used for rebinding.
        function merge_areas(map_data, areas) {
            var ar, index,
                map_areas = map_data.options.areas;
            if (areas) {
                $.each(areas, function (i, e) {
                    
                    // Issue #68 - ignore invalid data in areas array
                    
                    if (!e || !e.key) { 
                        return;
                    }

                    index = u.indexOfProp(map_areas, "key", e.key);
                    if (index >= 0) {
                        $.extend(map_areas[index], e);
                    }
                    else {
                        map_areas.push(e);
                    }
                    ar = map_data.getDataForKey(e.key);
                    if (ar) {
                        $.extend(ar.options, e);
                    }
                });
            }
        }
        function merge_options(map_data, options) {
            var temp_opts = u.updateProps({}, options);
            delete temp_opts.areas;

            u.updateProps(map_data.options, temp_opts);

            merge_areas(map_data, options.areas);
            // refresh the area_option template
            u.updateProps(map_data.area_options, map_data.options);
        }
        // Most methods use the "Method" object which handles figuring out whether it's an image or area called and
        // parsing key parameters. The constructor wants:
        // this, the jQuery object
        // a function that is called when an image was passed (with a this context of the MapData)
        // a function that is called when an area was passed (with a this context of the AreaData)
        // options: first = true means only the first member of a jQuery object is handled
        //          key = the key parameters passed
        //          defaultReturn: a value to return other than the jQuery object (if its not chainable)
        //          args: the arguments
        // Returns a comma-separated list of user-selected areas. "staticState" areas are not considered selected for the purposes of this method.
        me.get = function (key) {
            var md = m.getMapData(this);
            if (!(md && md.complete)) {
                throw("Can't access data until binding complete.");
            }

            return (new m.Method(this,
                function () {
                    // map_data return
                    return this.getSelected();
                },
                function () {
                    return this.isSelected();
                },
                { name: 'get',
                    args: arguments,
                    key: key,
                    first: true,
                    allowAsync: true,
                    defaultReturn: ''
                }
            )).go();
        };
        me.data = function (key) {
            return (new m.Method(this,
                null,
                function () {
                    return this;
                },
                { name: 'data',
                    args: arguments,
                    key: key
                }
            )).go();
        };


        // Set or return highlight state.
        //  $(img).mapster('highlight') -- return highlighted area key, or null if none
        //  $(area).mapster('highlight') -- highlight an area
        //  $(img).mapster('highlight','area_key') -- highlight an area
        //  $(img).mapster('highlight',false) -- remove highlight
        me.highlight = function (key) {
            return (new m.Method(this,
                function () {
                    if (key === false) {
                        this.ensureNoHighlight();
                    } else {
                        var id = this.highlightId;
                        return id >= 0 ? this.data[id].key : null;
                    }
                },
                function () {
                    this.highlight();
                },
                { name: 'highlight',
                    args: arguments,
                    key: key,
                    first: true
                }
            )).go();
        };
        // Return the primary keys for an area or group key.
        // $(area).mapster('key')
        // includes all keys (not just primary keys)
        // $(area).mapster('key',true)
        // $(img).mapster('key','group-key')

        // $(img).mapster('key','group-key', true)
        me.keys = function(key,all) {
            var keyList=[], 
                md = m.getMapData(this);

            if (!(md && md.complete)) {
                throw("Can't access data until binding complete.");
            }


            function addUniqueKeys(ad) {
                var areas,keys=[];
                if (!all) {
                    keys.push(ad.key);
                } else {
                    areas=ad.areas();
                    $.each(areas,function(i,e) {
                        keys=keys.concat(e.keys);
                    });
                }
                $.each(keys,function(i,e) {
                    if ($.inArray(e,keyList)<0) {
                        keyList.push(e);                         
                    }
                });
            }

            if (!(md  && md.complete)) {
                return '';
            }
            if (typeof key === 'string') {
                if (all) {
                    addUniqueKeys(md.getDataForKey(key));
                } else {
                    keyList=[md.getKeysForGroup(key)];
                }
            } else {
                all = key;
                this.each(function(i,e) {
                    if (e.nodeName==='AREA') {
                        addUniqueKeys(md.getDataForArea(e));
                    }
                });
            }
            return keyList.join(',');
        

        };
        me.select = function () {
            me.set.call(this, true);
        };
        me.deselect = function () {
            me.set.call(this, false);
        };
        
        /**
         * Select or unselect areas. Areas can be identified by a single string key, a comma-separated list of keys, 
         * or an array of strings.
         * 
         * 
         * @param {boolean} selected Determines whether areas are selected or deselected
         * @param {string|string[]} key A string, comma-separated string, or array of strings indicating 
         *                              the areas to select or deselect
         * @param {object} options Rendering options to apply when selecting an area
         */ 

        me.set = function (selected, key, options) {
            var lastMap, map_data, opts=options,
                key_list, area_list; // array of unique areas passed

            function setSelection(ar) {
                if (ar) {
                    switch (selected) {
                        case true:
                            ar.select(opts); break;
                        case false:
                            ar.deselect(true); break;
                        default:
                            ar.toggle(opts); break;
                    }
                }
            }
            function addArea(ar) {
               if (ar && $.inArray(ar, area_list) < 0) {
                    area_list.push(ar);
                    key_list+=(key_list===''?'':',')+ar.key;
                }
            }
            // Clean up after a group that applied to the same map
            function finishSetForMap(map_data) {
                $.each(area_list, function (i, el) {
                    setSelection(el);
                });
                if (!selected) {
                    map_data.removeSelectionFinish();
                }
                if (map_data.options.boundList) {
                    m.setBoundListProperties(map_data.options, m.getBoundList(map_data.options, key_list), selected);
                }            
            }

            this.filter('img,area').each(function (i,e) {
                var keys;
                map_data = m.getMapData(e);

                if (map_data !== lastMap) {
                    if (lastMap) {
                       finishSetForMap(lastMap);
                    }

                    area_list = [];
                    key_list='';
                }
                
               if (map_data) {
                    
                    keys = '';
                    if (e.nodeName.toUpperCase()==='IMG') {
                        if (!m.queueCommand(map_data, $(e), 'set', [selected, key, opts])) {
                            if (key instanceof Array) {
                                if (key.length) {
                                    keys = key.join(",");
                                }
                            }
                            else {
                                keys = key;
                            }

                            if (keys) {
                                $.each(u.split(keys), function (i,key) {
                                    addArea(map_data.getDataForKey(key.toString()));
                                    lastMap = map_data;
                                });
                            }
                        }
                    } else {
                        opts=key;
                        if (!m.queueCommand(map_data, $(e), 'set', [selected, opts])) {
                            addArea(map_data.getDataForArea(e));
                            lastMap = map_data;
                        }
                    
                    }
                }
            });
            
            if (map_data) {
               finishSetForMap(map_data);
            }

           
            return this;
        };
        me.unbind = function (preserveState) {
            return (new m.Method(this,
                function () {
                    this.clearEvents();
                    this.clearMapData(preserveState);
                    removeMap(this);
                },
                null,
                { name: 'unbind',
                    args: arguments
                }
            )).go();
        };


        // refresh options and update selection information.
        me.rebind = function (options) {
            return (new m.Method(this,
                function () {
                    var me=this;

                    me.complete=false;
                    me.configureOptions(options);
                    me.bindImages().then(function() {
                        me.buildDataset(true);
                        me.complete=true;
                    });
                    //this.redrawSelections();
                },
                null,
                {
                    name: 'rebind',
                    args: arguments
                }
            )).go();
        };
        // get options. nothing or false to get, or "true" to get effective options (versus passed options)
        me.get_options = function (key, effective) {
            var eff = u.isBool(key) ? key : effective; // allow 2nd parm as "effective" when no key
            return (new m.Method(this,
                function () {
                    var opts = $.extend({}, this.options);
                    if (eff) {
                        opts.render_select = u.updateProps(
                            {},
                            m.render_defaults,
                            opts,
                            opts.render_select);

                        opts.render_highlight = u.updateProps(
                            {},
                            m.render_defaults,
                            opts,
                            opts.render_highlight);
                    }
                    return opts;
                },
                function () {
                    return eff ? this.effectiveOptions() : this.options;
                },
                {
                    name: 'get_options',
                    args: arguments,
                    first: true,
                    allowAsync: true,
                    key: key
                }
            )).go();
        };

        // set options - pass an object with options to set,
        me.set_options = function (options) {
            return (new m.Method(this,
                function () {
                    merge_options(this, options);
                },
                null,
                {
                    name: 'set_options',
                    args: arguments
                }
            )).go();
        };
        me.unload = function () {
            var i;
            for (i = m.map_cache.length - 1; i >= 0; i--) {
                if (m.map_cache[i]) {
                    me.unbind.call($(m.map_cache[i].image));
                }
            }
            me.graphics = null;
        };

        me.snapshot = function () {
            return (new m.Method(this,
                function () {
                    $.each(this.data, function (i, e) {
                        e.selected = false;
                    });

                    this.base_canvas = this.graphics.createVisibleCanvas(this);
                    $(this.image).before(this.base_canvas);
                },
                null,
                { name: 'snapshot' }
            )).go();
        };
        
        // do not queue this function
        
        me.state = function () {
            var md, result = null;
            $(this).each(function (i,e) {
                if (e.nodeName === 'IMG') {
                    md = m.getMapData(e);
                    if (md) {
                        result = md.state();
                    }
                    return false;
                }
            });
            return result;
        };

        me.bind = function (options) {

            return this.each(function (i,e) {
                var img, map, usemap, md;

                // save ref to this image even if we can't access it yet. commands will be queued
                img = $(e);

                md = m.getMapData(e);

                // if already bound completely, do a total rebind
                
                if (md) {
                    me.unbind.apply(img);
                    if (!md.complete) {
                        // will be queued
                        img.bind();
                        return true;
                    }
                    md = null;
                }

                // ensure it's a valid image
                // jQuery bug with Opera, results in full-url#usemap being returned from jQuery's attr.
                // So use raw getAttribute instead.
                
                usemap = this.getAttribute('usemap');
                map = usemap && $('map[name="' + usemap.substr(1) + '"]');
                if (!(img.is('img') && usemap && map.size() > 0)) {
                    return true;
                }

                // sorry - your image must have border:0, things are too unpredictable otherwise.
                img.css('border', 0);

                if (!md) {
                    md = new m.MapData(this, options);

                    md.index = addMap(md);
                    md.map = map;
                    md.bindImages().then(function() {
                        md.initialize();
                    });
                }
            });
        };

        me.init = function (useCanvas) {
            var style, shapes;


            // check for excanvas explicitly - don't be fooled
            m.hasCanvas = (document.namespaces && document.namespaces.g_vml_) ? false :
                $('<canvas></canvas>')[0].getContext ? true : false;

            m.isTouch = 'ontouchstart' in document.documentElement;

            if (!(m.hasCanvas || document.namespaces)) {
                $.fn.mapster = function () {
                    return this;
                };
                return;
            }

            $.extend(m.defaults, m.render_defaults,m.shared_defaults);
            $.extend(m.area_defaults, m.render_defaults,m.shared_defaults);

            // for testing/debugging, use of canvas can be forced by initializing manually with "true" or "false"
            if (u.isBool(useCanvas)) {
                m.hasCanvas = useCanvas;
            }
       /*     if ($.browser.msie && !m.hasCanvas && !document.namespaces.v) {
                document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
                style = document.createStyleSheet();
                shapes = ['shape', 'rect', 'oval', 'circ', 'fill', 'stroke', 'imagedata', 'group', 'textbox'];
                $.each(shapes,
                function (i, el) {
                    style.addRule('v\\:' + el, "behavior: url(#default#VML); antialias:true");
                });
            }*/
        };
        me.test = function (obj) {
            return eval(obj);
        };
        return me;
    } ());

    $.mapster.impl.init();
} (jQuery));
/* graphics.js
   Graphics object handles all rendering.
*/
(function ($) {
    var p, m=$.mapster,
        u=m.utils;
    
    /**
     * Implemenation to add each area in an AreaData object to the canvas
     * @param {Graphics} graphics The target graphics object
     * @param {AreaData} areaData The AreaData object (a collection of area elements and metadata)
     * @param {object} options Rendering options to apply when rendering this group of areas
     */
    function addShapeGroupImpl(graphics, areaData, options) {
        var me = graphics,
            md = me.map_data,
            isMask = options.isMask;

        // first get area options. Then override fade for selecting, and finally merge in the 
        // "select" effect options.

        $.each(areaData.areas(), function (i,e) {
            options.isMask = isMask || (e.nohref && md.options.noHrefIsMask);
            me.addShape(e, options);
        });

        // it's faster just to manipulate the passed options isMask property and restore it, than to 
        // copy the object each time
        
        options.isMask=isMask;

    }


    /**
     * An object associated with a particular map_data instance to manage renderin.
     * @param {MapData} map_data The MapData object bound to this instance
     */
    
    m.Graphics = function (map_data) {
        //$(window).unload($.mapster.unload);
        // create graphics functions for canvas and vml browsers. usage:
        // 1) init with map_data, 2) call begin with canvas to be used (these are separate b/c may not require canvas to be specified
        // 3) call add_shape_to for each shape or mask, 4) call render() to finish

        var me = this;
        me.active = false;
        me.canvas = null;
        me.width = 0;
        me.height = 0;
        me.shapes = [];
        me.masks = [];
        me.map_data = map_data;
    };
    
    p = m.Graphics.prototype= {
        constructor: m.Graphics,

        /**
         * Initiate a graphics request for a canvas
         * @param  {Element} canvas The canvas element that is the target of this operation
         * @param  {string} [elementName] The name to assign to the element (VML only)
         */
        
        begin: function(canvas, elementName) {
            var c = $(canvas);

            this.elementName = elementName;
            this.canvas = canvas;

            this.width = c.width();
            this.height = c.height();
            this.shapes = [];
            this.masks = [];
            this.active = true;

        },
        
        /**
         * Add an area to be rendered to this canvas. 
         * @param {MapArea} mapArea The MapArea object to render
         * @param {object} options An object containing any rendering options that should override the
         *                         defaults for the area
         */
        
        addShape: function(mapArea, options) {
            var addto = options.isMask ? this.masks : this.shapes;
            addto.push({ mapArea: mapArea, options: options });
        },

        /**
         * Create a canvas that is sized and styled for the MapData object
         * @param  {MapData} mapData The MapData object that will receive this new canvas
         * @return {Element} A canvas element
         */
        
        createVisibleCanvas: function (mapData) {
            return $(this.createCanvasFor(mapData))
                .addClass('mapster_el')
                .css(m.canvas_style)[0];
        },

        /**
         * Add a group of shapes from an AreaData object to the canvas
         * 
         * @param {AreaData} areaData An AreaData object (a set of area elements)
         * @param {string} mode     The rendering mode, "select" or "highlight". This determines the target 
         *                          canvas and which default options to use.
         * @param {striong} options  Rendering options
         */
        
        addShapeGroup: function (areaData, mode,options) {
            // render includeKeys first - because they could be masks
            var me = this,
                list, name, canvas,
                map_data = this.map_data,
                opts = areaData.effectiveRenderOptions(mode);

            if (options) {
                 $.extend(opts,options);
            }

            if (mode === 'select') {
                name = "static_" + areaData.areaId.toString();
                canvas = map_data.base_canvas;
            } else {
                canvas = map_data.overlay_canvas;
            }

            me.begin(canvas, name);

            if (opts.includeKeys) {
                list = u.split(opts.includeKeys);
                $.each(list, function (i,e) {
                    var areaData = map_data.getDataForKey(e.toString());
                    addShapeGroupImpl(me,areaData, areaData.effectiveRenderOptions(mode));
                });
            }

            addShapeGroupImpl(me,areaData, opts);
            me.render();
            if (opts.fade) {
                
                // fading requires special handling for IE. We must access the fill elements directly. The fader also has to deal with 
                // the "opacity" attribute (not css)

                u.fader(m.hasCanvas ? 
                    canvas : 
                    $(canvas).find('._fill').not('.mapster_mask'),
                0,
                m.hasCanvas ? 
                    1 : 
                    opts.fillOpacity,
                opts.fadeDuration); 
               
            }

        }
    };

    // configure remaining prototype methods for ie or canvas-supporting browser

    if (m.hasCanvas) {

        /**
         * Convert a hex value to decimal
         * @param  {string} hex A hexadecimal string
         * @return {int} Integer represenation of the hex string
         */
        
        p.hex_to_decimal = function (hex) {
            return Math.max(0, Math.min(parseInt(hex, 16), 255));
        };

        p.css3color = function (color, opacity) {
            return 'rgba(' + this.hex_to_decimal(color.substr(0, 2)) + ','
                    + this.hex_to_decimal(color.substr(2, 2)) + ','
                    + this.hex_to_decimal(color.substr(4, 2)) + ',' + opacity + ')';
        };

        p.renderShape = function (context, mapArea, offset) {
            var i,
                c = mapArea.coords(null,offset);

            switch (mapArea.shape) {
                case 'rect':
                    context.rect(c[0], c[1], c[2] - c[0], c[3] - c[1]);
                    break;
                case 'poly':
                    context.moveTo(c[0], c[1]);

                    for (i = 2; i < mapArea.length; i += 2) {
                        context.lineTo(c[i], c[i + 1]);
                    }
                    context.lineTo(c[0], c[1]);
                    break;
                case 'circ':
                case 'circle':
                    context.arc(c[0], c[1], c[2], 0, Math.PI * 2, false);
                    break;
            }
        };

        p.addAltImage = function (context, image, mapArea, options) {
            context.beginPath();

            this.renderShape(context, mapArea);
            context.closePath();
            context.clip();

            context.globalAlpha = options.altImageOpacity || options.fillOpacity;

            context.drawImage(image, 0, 0, mapArea.owner.scaleInfo.width, mapArea.owner.scaleInfo.height);
        };

        p.render = function () {
            // firefox 6.0 context.save() seems to be broken. to work around,  we have to draw the contents on one temp canvas,
            // the mask on another, and merge everything. ugh. fixed in 1.2.2. unfortunately this is a lot more code for masks,
            // but no other way around it that i can see.

            var maskCanvas, maskContext,
                        me = this,
                        md = me.map_data,
                        hasMasks = me.masks.length,
                        shapeCanvas = me.createCanvasFor(md),
                        shapeContext = shapeCanvas.getContext('2d'),
                        context = me.canvas.getContext('2d');

            if (hasMasks) {
                maskCanvas = me.createCanvasFor(md);
                maskContext = maskCanvas.getContext('2d');
                maskContext.clearRect(0, 0, maskCanvas.width, maskCanvas.height);

                $.each(me.masks, function (i,e) {
                    maskContext.save();
                    maskContext.beginPath();
                    me.renderShape(maskContext, e.mapArea);
                    maskContext.closePath();
                    maskContext.clip();
                    maskContext.lineWidth = 0;
                    maskContext.fillStyle = '#000';
                    maskContext.fill();
                    maskContext.restore();
                });

            }

            $.each(me.shapes, function (i,s) {
                shapeContext.save();
                if (s.options.fill) {
                    if (s.options.altImageId) {
                        me.addAltImage(shapeContext, md.images[s.options.altImageId], s.mapArea, s.options);
                    } else {
                        shapeContext.beginPath();
                        me.renderShape(shapeContext, s.mapArea);
                        shapeContext.closePath();
                        //shapeContext.clip();
                        shapeContext.fillStyle = me.css3color(s.options.fillColor, s.options.fillOpacity);
                        shapeContext.fill();
                    }
                }
                shapeContext.restore();
            });


            // render strokes at end since masks get stroked too

            $.each(me.shapes.concat(me.masks), function (i,s) {
                var offset = s.options.strokeWidth === 1 ? 0.5 : 0;
                // offset applies only when stroke width is 1 and stroke would render between pixels.

                if (s.options.stroke) {
                    shapeContext.save();
                    shapeContext.strokeStyle = me.css3color(s.options.strokeColor, s.options.strokeOpacity);
                    shapeContext.lineWidth = s.options.strokeWidth;

                    shapeContext.beginPath();

                    me.renderShape(shapeContext, s.mapArea, offset);
                    shapeContext.closePath();
                    shapeContext.stroke();
                    shapeContext.restore();
                }
            });

            if (hasMasks) {
                // render the new shapes against the mask

                maskContext.globalCompositeOperation = "source-out";
                maskContext.drawImage(shapeCanvas, 0, 0);

                // flatten into the main canvas
                context.drawImage(maskCanvas, 0, 0);
            } else {
                context.drawImage(shapeCanvas, 0, 0);
            }

            me.active = false;
            return me.canvas;
        };

        // create a canvas mimicing dimensions of an existing element
        p.createCanvasFor = function (md) {
            return $('<canvas width="' + md.scaleInfo.width + '" height="' +md.scaleInfo.height + '"></canvas>')[0];
        };
        p.clearHighlight = function () {
            var c = this.map_data.overlay_canvas;
            c.getContext('2d').clearRect(0, 0, c.width, c.height);
        };
        p.removeSelections = function () {

        };
        // Draw all items from selected_list to a new canvas, then swap with the old one. This is used to delete items when using canvases.
        p.refreshSelections = function () {
            var canvas_temp, map_data = this.map_data;
            // draw new base canvas, then swap with the old one to avoid flickering
            canvas_temp = map_data.base_canvas;

            map_data.base_canvas = this.createVisibleCanvas(map_data);
            $(map_data.base_canvas).hide();
            $(canvas_temp).before(map_data.base_canvas);

            map_data.redrawSelections();

            $(map_data.base_canvas).show();
            $(canvas_temp).remove();
        };

    } else {

        /**
         * Set the opacity of the element. This is an IE<8 specific function for handling VML.
         * When using VML we must override the "setOpacity" utility function (monkey patch ourselves).
         * jQuery does not deal with opacity correctly for VML elements. This deals with that.
         * 
         * @param {Element} el The DOM element
         * @param {double} opacity A value between 0 and 1 inclusive.
         */
        
        u.setOpacity = function(el,opacity) {         
            $(el).each(function(i,e) {
                if (typeof e.opacity !=='undefined') {
                   e.opacity=opacity;
                } else {
                    $(e).css("opacity",opacity);
                }
            });
        };

        p.renderShape = function (mapArea, options, cssclass) {
            var me = this, fill,stroke, e, t_fill, el_name, el_class, template, c = mapArea.coords();
            el_name = me.elementName ? 'name="' + me.elementName + '" ' : '';
            el_class = cssclass ? 'class="' + cssclass + '" ' : '';

            t_fill = '<v:fill color="#' + options.fillColor + '" class="_fill" opacity="' + 
                (options.fill ? 
                    options.fillOpacity :
                    0) + 
                '" /><v:stroke class="_fill" opacity="' + 
                options.strokeOpacity + '"/>';


            stroke = options.stroke ?
                ' strokeweight=' + options.strokeWidth + ' stroked="t" strokecolor="#' + 
                    options.strokeColor + '"' :
                ' stroked="f"';
            
            fill = options.fill ? 
                ' filled="t"' :
                ' filled="f"';

            switch (mapArea.shape) {
                case 'rect':
                    template = '<v:rect ' + el_class + el_name + fill + stroke + 
                        ' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:' + 
                          c[0] + 'px;top:' + c[1]  + 'px;width:' + (c[2] - c[0]) + 
                          'px;height:' + (c[3] - c[1]) + 'px;">' + t_fill + '</v:rect>';
                    break;
                case 'poly':
                    template = '<v:shape ' + el_class + el_name + fill + stroke + ' coordorigin="0,0" coordsize="' + me.width + ',' + me.height
                                + '" path="m ' + c[0] + ',' + c[1] + ' l ' + c.slice(2).join(',')
                                + ' x e" style="zoom:1;margin:0;padding:0;display:block;position:absolute;top:0px;left:0px;width:' + me.width + 'px;height:' + me.height + 'px;">' + t_fill + '</v:shape>';
                    break;
                case 'circ':
                case 'circle':
                    template = '<v:oval ' + el_class + el_name + fill + stroke
                                + ' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:' + (c[0] - c[2]) + 'px;top:' + (c[1] - c[2])
                                + 'px;width:' + (c[2] * 2) + 'px;height:' + (c[2] * 2) + 'px;">' + t_fill + '</v:oval>';
                    break;
            }
            e = $(template);
            $(me.canvas).append(e);

            return e;
        };
        p.render = function () {
            var opts, me = this;

            $.each(this.shapes, function (i,e) {
                me.renderShape(e.mapArea, e.options);
            });

            if (this.masks.length) {
                $.each(this.masks, function (i,e) {
                    opts = u.updateProps({},
                        e.options, {
                            fillOpacity: 1,
                            fillColor: e.options.fillColorMask
                        });
                    me.renderShape(e.mapArea, opts, 'mapster_mask');
                });
            }

            this.active = false;
            return this.canvas;
        };

        p.createCanvasFor = function (md) {
            var w = md.scaleInfo.width,
                h = md.scaleInfo.height;
            return $('<var width="' + w + '" height="' + h 
                + '" style="zoom:1;overflow:hidden;display:block;width:' 
                + w + 'px;height:' + h + 'px;"></var>')[0];
        };

        p.clearHighlight = function () {
            $(this.map_data.overlay_canvas).children().remove();
        };
        // remove single or all selections
        p.removeSelections = function (area_id) {
            if (area_id >= 0) {
                $(this.map_data.base_canvas).find('[name="static_' + area_id.toString() + '"]').remove();
            }
            else {
                $(this.map_data.base_canvas).children().remove();
            }
        };
        p.refreshSelections = function () {
            return null;
        };

    }

} (jQuery));
/* mapimage.js
   the MapImage object, repesents an instance of a single bound imagemap
*/

(function ($) {

    var m = $.mapster, 
        u = m.utils,
        ap=[];
    /**
     * An object encapsulating all the images used by a MapData.
     */
    
    m.MapImages = function(owner) {
        this.owner = owner;
        this.clear();
    };

    
    m.MapImages.prototype = {
        constructor: m.MapImages,

        /* interface to make this array-like */

        slice: function() {
            return ap.slice.apply(this,arguments);
        },
        splice: function() {
            ap.slice.apply(this.status,arguments);
            var result= ap.slice.apply(this,arguments);
            return result;
        },
     
        /** 
         * a boolean value indicates whether all images are done loading 
         * @return {bool} true when all are done
         */
        complete: function() {
            return $.inArray(false, this.status) < 0;
        },
        
        /**
         * Save an image in the images array and return its index 
         * @param  {Image} image An Image object
         * @return {int} the index of the image
         */
        
        _add: function(image) {
            var index = ap.push.call(this,image)-1;
            this.status[index] = false;
            return index;
        },

        /**
         * Return the index of an Image within the images array
         * @param  {Image} img An Image
         * @return {int} the index within the array, or -1 if it was not found
         */
        
        indexOf: function(image) {
            return $.inArray(image, this);
        },
        
        /**
         * Clear this object and reset it to its initial state after binding.
         */
        
        clear: function() {
            var me=this;

            if (me.ids && me.ids.length>0) {
                $.each(me.ids,function(i,e) {
                    delete me[e];
                });
            }
            
            /**
             * A list of the cross-reference IDs bound to this object
             * @type {string[]}
             */
            
            me.ids=[];

            /**
             * Length property for array-like behavior, set to zero when initializing. Array prototype
             * methods will update it after that.
             * 
             * @type {int}
             */
            
            me.length=0;

            /**
             * the loaded status of the corresponding image
             * @type {boolean[]}
             */
            
            me.status=[];
            
            
            // actually erase the images
            
            me.splice(0);
            
        },

        /**
         * Bind an image to the map and add it to the queue to be loaded; return an ID that
         * can be used to reference the
         * 
         * @param {Image|string} image An Image object or a URL to an image
         * @param {string} [id] An id to refer to this image
         * @returns {int} an ID referencing the index of the image object in 
         *                map_data.images
         */
     
        add: function(image,id) {
            var index,src,me = this;

            if (!image) { return; }

            if (typeof image === 'string') {
                src = image;
                image = me[src];
                if (typeof image==='object') {
                    return me.indexOf(image);
                }

                image = $('<img />')
                    .addClass('mapster_el')
                    .hide();

                index=me._add(image[0]);
                
                image
                    .bind('load',function(e) {
                        me.imageLoaded.call(me,e);
                    })
                    .bind('error',function(e) {
                        me.imageLoadError.call(me,e);
                    });
                
                image.attr('src', src);
            } else {

                // use attr because we want the actual source, not the resolved path the browser will return directly calling image.src
                
                index=me._add($(image)[0]);
            }
            if (id) {
                if (this[id]) {
                    throw(id+" is already used or is not available as an altImage alias.");
                }
                me.ids.push(id);
                me[id]=me[index];
            }
            return index;
        },

        /**
         * Bind the images in this object, 
         * @param  {boolean} retry when true, indicates that the function is calling itself after failure 
         * @return {Promise} a promise that resolves when the images have finished loading
         */
        
        bind: function(retry) {
            var me = this,
                promise,
                triesLeft = me.owner.options.configTimeout / 200,

            /* A recursive function to continue checking that the images have been 
               loaded until a timeout has elapsed */

            check=function() {
                var i;

                // refresh status of images
                
                i=me.length;

                while (i-->0) {
                    if (!me.isLoaded(i)) {
                        break;
                    }
                }

                // check to see if every image has already been loaded
                
                if (me.complete()) {
                    me.resolve();
                } else {
                    // to account for failure of onLoad to fire in rare situations
                    if (triesLeft-- > 0) {
                        me.imgTimeout=window.setTimeout(function() {
                            check.call(me,true);
                        }, 50);
                    } else {
                        me.imageLoadError.call(me);
                    }
                }
            
            };

            promise = me.deferred=u.defer();
            
            check();
            return promise;
        },
   
        resolve: function() {
            var me=this,
                resolver=me.deferred;
                
            if (resolver) {
                // Make a copy of the resolver before calling & removing it to ensure
                // it is not called twice
                me.deferred=null;
                resolver.resolve();
            }
        },

        /**
         * Event handler for image onload
         * @param  {object} e jQuery event data
         */
        
        imageLoaded: function(e) {
            var me=this,
                index = me.indexOf(e.target);

            if (index>=0) {

                me.status[index] = true;
                if ($.inArray(false, me.status) < 0) {
                    me.resolve();
                }
            }
        },
        
        /**
         * Event handler for onload error
         * @param  {object} e jQuery event data
         */
        
        imageLoadError: function(e) {
            clearTimeout(this.imgTimeout);
            this.triesLeft=0;
            var err = e ? 'The image ' + e.target.src + ' failed to load.' : 
                'The images never seemed to finish loading. You may just need to increase the configTimeout if images could take a long time to load.';
            throw err;
        },
        /**
         * Test if the image at specificed index has finished loading
         * @param  {int}  index The image index
         * @return {boolean} true if loaded, false if not
         */
        
        isLoaded: function(index) {
            var img,
                me=this,
                status=me.status;

            if (status[index]) { return true; }
            img = me[index];
            
            if (typeof img.complete !== 'undefined') {
                status[index]=img.complete;
            } else {
                status[index]=!!u.imgWidth(img);
            }
            // if complete passes, the image is loaded, but may STILL not be available because of stuff like adblock.
            // make sure it is.

            return status[index];
        }
    };
    } (jQuery));
/* mapdata.js
   the MapData object, repesents an instance of a single bound imagemap
*/


(function ($) {

    var m = $.mapster, 
        u = m.utils;
   
    /**
     * Set default values for MapData object properties
     * @param  {MapData} me The MapData object
     */
    
    function initializeDefaults(me) {
        $.extend(me,{
            complete: false,         // (bool)    when configuration is complete       
            map: null,                // ($)      the image map
            base_canvas: null,       // (canvas|var)  where selections are rendered
            overlay_canvas: null,    // (canvas|var)  where highlights are rendered
            commands: [],            // {}        commands that were run before configuration was completed (b/c images weren't loaded)
            data: [],                // MapData[] area groups
            mapAreas: [],            // MapArea[] list. AreaData entities contain refs to this array, so options are stored with each.
            _xref: {},               // (int)      xref of mapKeys to data[]
            highlightId: -1,        // (int)      the currently highlighted element.
            currentAreaId: -1,
            _tooltip_events: [],     // {}         info on events we bound to a tooltip container, so we can properly unbind them
            scaleInfo: null,         // {}         info about the image size, scaling, defaults
            index: -1,                 // index of this in map_cache - so we have an ID to use for wraper div
            activeAreaEvent: null
        });
    }

    /**
     * Return an array of all image-containing options from an options object; 
     * that is, containers that may have an "altImage" property
     * 
     * @param  {object} obj     An options object
     * @return {object[]}       An array of objects
     */
    function getOptionImages(obj) {
        return [obj, obj.render_highlight, obj.render_select];
    }

    /**
     * Parse all the altImage references, adding them to the library so they can be preloaded
     * and aliased.
     * 
     * @param  {MapData} me The MapData object on which to operate
     */
    function configureAltImages(me)
    {
        var opts = me.options,
            mi = me.images;

        // add alt images
        
        if ($.mapster.hasCanvas) {
            // map altImage library first
            
            $.each(opts.altImages || {}, function(i,e) {
                mi.add(e,i);
            });
            
            // now find everything else

            $.each([opts].concat(opts.areas),function(i,e) {
                $.each(getOptionImages(e),function(i2,e2) {
                    if (e2 && e2.altImage) {
                        e2.altImageId=mi.add(e2.altImage);
                    }
                });
            });
        }

        // set area_options
        me.area_options = u.updateProps({}, // default options for any MapArea
            m.area_defaults,
            opts);
    }

    /**
     * Queue a mouse move action based on current delay settings 
     * (helper for mouseover/mouseout handlers)
     * 
     * @param  {MapData}    me       The MapData context
     * @param  {number}     delay    The number of milliseconds to delay the action
     * @param  {AreaData}   area     AreaData affected
     * @param  {Deferred}   deferred A deferred object to return (instead of a new one)
     * @return {Promise}    A promise that resolves when the action is completed
     */
    function queueMouseEvent(me,delay,area, deferred) {
        
        deferred = deferred || u.when.defer();

        function cbFinal(areaId) {
            if (me.currentAreaId!==areaId && me.highlightId>=0) {
                deferred.resolve();
            }
        }
        if (me.activeAreaEvent) {
            window.clearTimeout(me.activeAreaEvent);
            me.activeAreaEvent=0;
        }
        if (delay<0) {
            return;
        }

        if (area.owner.currentAction || delay) {
            me.activeAreaEvent = window.setTimeout((function() {
                    return function() {
                        queueMouseEvent(me,0,area,deferred);
                    };
                }(area)),
                delay || 100);
        } else {
             cbFinal(area.areaId);
        }
        return deferred;
    }

     /**
     * Mousedown event. This is captured only to prevent browser from drawing an outline around an
     * area when it's clicked.
     *
     * @param  {EventData} e jQuery event data
     */
    
    function mousedown(e) {
        if (!$.mapster.hasCanvas) {
            this.blur();
        }
        e.preventDefault();
    }

    /**
     * Mouseover event. Handle highlight rendering and client callback on mouseover
     * 
     * @param  {MapData} me The MapData context
     * @param  {EventData} e jQuery event data
     * @return {[type]}   [description]
     */
    
    function mouseover(me,e) {
        var arData = me.getAllDataForArea(this),
            ar=arData.length ? arData[0] : null;

        // mouseover events are ignored entirely while resizing, though we do care about mouseout events
        // and must queue the action to keep things clean.

        if (!ar || ar.isNotRendered() || ar.owner.currentAction) {
            return;
        }

        if (me.currentAreaId === ar.areaId) {
            return;
        }
        if (me.highlightId !== ar.areaId) {
            me.clearEffects();

            ar.highlight();

            if (me.options.showToolTip) {
                $.each(arData,function(i,e) {
                    if (e.effectiveOptions().toolTip) {
                        e.showToolTip();
                    }
                });
            }
        }

        me.currentAreaId = ar.areaId;

        if ($.isFunction(me.options.onMouseover)) {
            me.options.onMouseover.call(this,
            {
                e: e,
                options:ar.effectiveOptions(),
                key: ar.key,
                selected: ar.isSelected()
            });
        }
    }

    /**
     * Mouseout event.
     *
     * @param  {MapData} me The MapData context
     * @param  {EventData} e jQuery event data
     * @return {[type]}   [description]
     */
    
    function mouseout(me,e) {
        var newArea,
            ar = me.getDataForArea(this),
            opts = me.options;


        if (me.currentAreaId<0 || !ar) {
            return;
        }

        newArea=me.getDataForArea(e.relatedTarget);
        
        if (newArea === ar) {
            return;
        }

        me.currentAreaId = -1;
        ar.area=null;

        queueMouseEvent(me,opts.mouseoutDelay,ar)
            .then(me.clearEffects);

        if ($.isFunction(opts.onMouseout)) {
            opts.onMouseout.call(this,
            {
                e: e,
                options: opts,
                key: ar.key,
                selected: ar.isSelected()
            });
        }

    }
    
    /**
     * Clear any active tooltip or highlight
     *
     * @param  {MapData} me The MapData context
     * @param  {EventData} e jQuery event data
     * @return {[type]}   [description]
     */
    
    function clearEffects(me) {
        var opts = me.options;

        me.ensureNoHighlight();

        if (opts.toolTipClose 
            && $.inArray('area-mouseout', opts.toolTipClose) >= 0 
            && me.activeToolTip) 
        {
            me.clearToolTip();
        }
    }

    /**
     * Mouse click event handler
     *
     * @param  {MapData} me The MapData context
     * @param  {EventData} e jQuery event data
     * @return {[type]}   [description]
     */
    
    function click(me,e) {
        var selected, list, list_target, newSelectionState, canChangeState, cbResult,
            that = this,
            ar = me.getDataForArea(this),
            opts = me.options;

        function clickArea(ar) {
            var areaOpts,target;
            canChangeState = (ar.isSelectable() &&
                (ar.isDeselectable() || !ar.isSelected()));
            
            if (canChangeState) {
                newSelectionState = !ar.isSelected();
            } else {
                newSelectionState = ar.isSelected();
            }

            list_target = m.getBoundList(opts, ar.key);

            if ($.isFunction(opts.onClick)) 
            {
                cbResult= opts.onClick.call(that,
                {
                    e: e,
                    listTarget: list_target,
                    key: ar.key,
                    selected: newSelectionState
                });

                if (u.isBool(cbResult)) {
                    if (!cbResult) {
                        return false;
                    }
                    target = $(ar.area).attr('href');
                    if (target!=='#') {
                        window.location.href=target;
                        return false;
                    }
                }
            }

            if (canChangeState) {
                selected = ar.toggle();
            }

            if (opts.boundList && opts.boundList.length > 0) {
                m.setBoundListProperties(opts, list_target, ar.isSelected());
            }

            areaOpts = ar.effectiveOptions();
            if (areaOpts.includeKeys) {
                list = u.split(areaOpts.includeKeys);
                $.each(list, function (i, e) {
                    var ar = me.getDataForKey(e.toString());
                    if (!ar.options.isMask) {
                        clickArea(ar);
                    }
                });
            }
        }

        mousedown.call(this,e);

        if (opts.clickNavigate && ar.href) {
            window.location.href=ar.href;
            return;
        }

        if (ar && !ar.owner.currentAction) {
            opts = me.options;
            clickArea(ar);
        }
    }

    /**
     * Prototype for a MapData object, representing an ImageMapster bound object
     * @param {Element} image   an IMG element
     * @param {object} options  ImageMapster binding options
     */
    m.MapData = function (image, options) 
    {
        var me = this;
        
        // (Image)  main map image
        
        me.image = image;              

        me.images = new m.MapImages(me); 
        me.graphics = new m.Graphics(me);

        // save the initial style of the image for unbinding. This is problematic, chrome 
        // duplicates styles when assigning, and cssText is apparently not universally supported.
        // Need to do something more robust to make unbinding work universally.
        
        me.imgCssText = image.style.cssText || null;

        initializeDefaults(me);

        me.configureOptions(options);
        
        // create context-bound event handlers from our private functions
        
        me.mouseover = function(e) { mouseover.call(this,me,e); };
        me.mouseout = function(e) { mouseout.call(this,me,e); };
        me.click = function(e) { click.call(this,me,e); };
        me.clearEffects = function(e) { clearEffects.call(this,me,e); };
    };

    m.MapData.prototype = {
        constructor: m.MapData,

         /**
         * Set target.options from defaults + options
         * @param  {[type]} target      The target
         * @param  {[type]} options     The options to merge
         */
        
        configureOptions: function(options) {
            this.options= u.updateProps({}, m.defaults, options);
        },

        /**
         * Ensure all images are loaded
         * @return {Promise} A promise that resolves when the images have finished loading (or fail)
         */
    
        bindImages: function() {
            var me=this,
                mi = me.images;

            // reset the images if this is a rebind
            
            if (mi.length>2) {
                mi.splice(2);
            } else if (mi.length===0) {

                // add the actual main image
                mi.add(me.image);
                // will create a duplicate of the main image, we need this to get raw size info
                mi.add(me.image.src);
            }
            
            configureAltImages(me);

            return me.images.bind();
        },

        /**
         * Test whether an async action is currently in progress
         * @return {Boolean} true or false indicating state
         */
        
        isActive: function() {
            return !this.complete || this.currentAction;
        },

        /**
         * Return an object indicating the various states. This isn't really used by 
         * production code.
         * 
         * @return {object} An object with properties for various states
         */
        
        state: function () {
            return {
                complete: this.complete,
                resizing: this.currentAction==='resizing',
                zoomed: this.zoomed,
                zoomedArea: this.zoomedArea,
                scaleInfo: this.scaleInfo
            };
        },   

        /**
         * Get a unique ID for the wrapper of this imagemapster
         * @return {string} A string that is unique to this image
         */
        
        wrapId: function () {
            return 'mapster_wrap_' + this.index;
        },
        _idFromKey: function (key) {
            return typeof key === "string" && this._xref.hasOwnProperty(key) ?
                        this._xref[key] : -1;
        },

        /**
         * Return a comma-separated string of all selected keys
         * @return {string} CSV of all keys that are currently selected
         */
        
        getSelected: function () {
            var result = '';
            $.each(this.data, function (i,e) {
                if (e.isSelected()) {
                    result += (result ? ',' : '') + this.key;
                }
            });
            return result;
        },

        /**
         * Get an array of MapAreas associated with a specific AREA based on the keys for that area
         * @param  {Element} area   An HTML AREA
         * @param  {number} atMost  A number limiting the number of areas to be returned (typically 1 or 0 for no limit)
         * @return {MapArea[]}      Array of MapArea objects
         */
        
        getAllDataForArea:function (area,atMost) {
            var i,ar, result,
                me=this,
                key = $(area).filter('area').attr(me.options.mapKey);

            if (key) {
                result=[];
                key = u.split(key);

                for (i=0;i<(atMost || key.length);i++) {
                    ar = me.data[me._idFromKey(key[i])];
                    ar.area=area.length ? area[0]:area;
                    // set the actual area moused over/selected
                    // TODO: this is a brittle model for capturing which specific area - if this method was not used,
                    // ar.area could have old data. fix this.
                    result.push(ar);
                }
            }

            return result;
        },
        getDataForArea: function(area) {
            var ar=this.getAllDataForArea(area,1);
            return ar ? ar[0] || null : null;
        },
        getDataForKey: function (key) {
            return this.data[this._idFromKey(key)];
        },
        
        /**
         * Get the primary keys associated with an area group.
         * If this is a primary key, it will be returned.
         * 
         * @param  {string key An area key
         * @return {string} A CSV of area keys
         */
        
        getKeysForGroup: function(key) {
            var ar=this.getDataForKey(key);
            
            return !ar ? '':
                ar.isPrimary ? 
                    ar.key :
                    this.getPrimaryKeysForMapAreas(ar.areas()).join(',');
        },
        
        /**
         * given an array of MapArea object, return an array of its unique primary keys
         * @param  {MapArea[]} areas The areas to analyze
         * @return {string[]} An array of unique primary keys
         */
        
        getPrimaryKeysForMapAreas: function(areas)
        {
            var keys=[];
            $.each(areas,function(i,e) {
                if ($.inArray(e.keys[0],keys)<0) {
                    keys.push(e.keys[0]);
                }
            });
            return keys;
        },
        getData: function (obj) {
            if (typeof obj === 'string') {
                return this.getDataForKey(obj);
            } else if (obj && obj.mapster || u.isElement(obj)) {
                return this.getDataForArea(obj);
            } else {
                return null;
            }
        },
        // remove highlight if present, raise event
        ensureNoHighlight: function () {
            var ar;
            if (this.highlightId >= 0) {
                this.graphics.clearHighlight();
                ar = this.data[this.highlightId];
                ar.changeState('highlight', false);
                this.setHighlightId(-1);
            }
        },
        setHighlightId: function(id) {
            this.highlightId = id;
        },
        
        /**
         * Clear all active selections on this map
         */
        
        clearSelections: function () {
            $.each(this.data, function (i,e) {
                if (e.selected) {
                    e.deselect(true);
                 }
            });
            this.removeSelectionFinish();
            
        },

        /**
         * Set area options from an array of option data.
         * 
         * @param {object[]} areas An array of objects containing area-specific options
         */
        
        setAreaOptions: function (areas) {
            var i, area_options, ar;
            areas = areas || [];

            // refer by: map_data.options[map_data.data[x].area_option_id]
            
            for (i = areas.length - 1; i >= 0; i--) {
                area_options = areas[i];
                if (area_options) {
                    ar = this.getDataForKey(area_options.key);
                    if (ar) {
                        u.updateProps(ar.options, area_options);
                        
                        // TODO: will not deselect areas that were previously selected, so this only works
                        // for an initial bind.
                        
                        if (u.isBool(area_options.selected)) {
                            ar.selected = area_options.selected;
                        }
                    }
                }
            }
        },
        // keys: a comma-separated list
        drawSelections: function (keys) {
            var i, key_arr = u.asArray(keys);

            for (i = key_arr.length - 1; i >= 0; i--) {
                this.data[key_arr[i]].drawSelection();
            }
        },
        redrawSelections: function () {
            $.each(this.data, function (i, e) {
                if (e.isSelectedOrStatic()) {
                    e.drawSelection();
                }
            });

        },
        ///called when images are done loading
        initialize: function () {
            var imgCopy, base_canvas, overlay_canvas, wrap, parentId, css, i,size,
                img,sort_func, sorted_list,  scale,  
                        me = this,
                        opts = me.options;

            if (me.complete) {
                return;
            }

            img = $(me.image);
            
            parentId = img.parent().attr('id');

            // create a div wrapper only if there's not already a wrapper, otherwise, own it
            
            if (parentId && parentId.length >= 12 && parentId.substring(0, 12) === "mapster_wrap") {
                wrap = img.parent();
                wrap.attr('id', me.wrapId());
            } else {
                wrap = $('<div id="' + me.wrapId() + '"></div>');

                if (opts.wrapClass) {
                    if (opts.wrapClass === true) {
                        wrap.addClass(img[0].className);
                    }
                    else {
                        wrap.addClass(opts.wrapClass);
                    }
                }
            }
            me.wrapper = wrap;
            
            // me.images[1] is the copy of the original image. It should be loaded & at its native size now so we can obtain the true
            // width & height. This is needed to scale the imagemap if not being shown at its native size. It is also needed purely
            // to finish binding in case the original image was not visible. It can be impossible in some browsers to obtain the
            // native size of a hidden image.

            me.scaleInfo = scale = u.scaleMap(me.images[0],me.images[1], opts.scaleMap);
            
            me.base_canvas = base_canvas = me.graphics.createVisibleCanvas(me);
            me.overlay_canvas = overlay_canvas = me.graphics.createVisibleCanvas(me);

            // Now we got what we needed from the copy -clone from the original image again to make sure any other attributes are copied
            imgCopy = $(me.images[1])
                .addClass('mapster_el '+ me.images[0].className)
                .attr({id:null, usemap: null});
                
            size=u.size(me.images[0]);
            
            if (size.complete) {
                imgCopy.css({
                    width: size.width,
                    height: size.height
                });
            }
     
            me.buildDataset();

            // now that we have processed all the areas, set css for wrapper, scale map if needed

            css = {
                display: 'block',
                position: 'relative',
                padding: 0,
                width: scale.width,
                height: scale.height
            };

            if (opts.wrapCss) {
                $.extend(css, opts.wrapCss);
            }
            // if we were rebinding with an existing wrapper, the image will aready be in it
            if (img.parent()[0] !== me.wrapper[0]) {

                img.before(me.wrapper);
            }

            wrap.css(css);

            // move all generated images into the wrapper for easy removal later

            $(me.images.slice(2)).hide();
            for (i = 1; i < me.images.length; i++) {
                wrap.append(me.images[i]);
            }

            //me.images[1].style.cssText = me.image.style.cssText;

            wrap.append(base_canvas)
                        .append(overlay_canvas)
                        .append(img.css(m.canvas_style));

            // images[0] is the original image with map, images[1] is the copy/background that is visible

            u.setOpacity(me.images[0], 0);
            $(me.images[1]).show();

            u.setOpacity(me.images[1],1);

            if (opts.isSelectable && opts.onGetList) {
                sorted_list = me.data.slice(0);
                if (opts.sortList) {
                    if (opts.sortList === "desc") {
                        sort_func = function (a, b) {
                            return a === b ? 0 : (a > b ? -1 : 1);
                        };
                    }
                    else {
                        sort_func = function (a, b) {
                            return a === b ? 0 : (a < b ? -1 : 1);
                        };
                    }

                    sorted_list.sort(function (a, b) {
                        a = a.value;
                        b = b.value;
                        return sort_func(a, b);
                    });
                }

                me.options.boundList = opts.onGetList.call(me.image, sorted_list);
            }
            
            me.complete=true;
            me.processCommandQueue();
            
            if (opts.onConfigured && typeof opts.onConfigured === 'function') {
                opts.onConfigured.call(img, true);
            }
        },

        // when rebind is true, the MapArea data will not be rebuilt.
        buildDataset: function(rebind) {
            var sel,areas,j,area_id,$area,area,curKey,mapArea,key,keys,mapAreaId,group_value,dataItem,href,
                me=this,
                opts=me.options,
                default_group;

            function addAreaData(key, value) {
                var dataItem = new m.AreaData(me, key, value);
                dataItem.areaId = me._xref[key] = me.data.push(dataItem) - 1;
                return dataItem.areaId;
            }

            me._xref = {};
            me.data = [];
            if (!rebind) {
                me.mapAreas=[];
            }

            default_group = !opts.mapKey;
            if (default_group) {
                opts.mapKey = 'data-mapster-key';
            }
           /* sel = ($.browser.msie && $.browser.version <= 7) ? 'area' :
                        (default_group ? 'area[coords]' : 'area[' + opts.mapKey + ']');*/
            // areas = $(me.map).find(sel).unbind('.mapster');
                        
            for (mapAreaId = 0;mapAreaId<areas.length; mapAreaId++) {
                area_id = 0;
                area = areas[mapAreaId];
                $area = $(area);

                // skip areas with no coords - selector broken for older ie
                if (!area.coords) {
                    continue;
                }
                // Create a key if none was assigned by the user

                if (default_group) {
                     curKey=String(mapAreaId);
                    $area.attr('data-mapster-key', curKey);
                   
                } else {
                    curKey = area.getAttribute(opts.mapKey);
                }

                // conditions for which the area will be bound to mouse events
                // only bind to areas that don't have nohref. ie 6&7 cannot detect the presence of nohref, so we have to also not bind if href is missing.

                if (rebind) {
                    mapArea = me.mapAreas[$area.data('mapster')-1];
                    mapArea.configure(curKey);
                } else {
                    mapArea = new m.MapArea(me, area,curKey);
                    me.mapAreas.push(mapArea);
                }

                keys = mapArea.keys; // converted to an array by mapArea


                // Iterate through each mapKey assigned to this area
                for (j = keys.length - 1; j >= 0; j--) {
                    key = keys[j];

                    if (opts.mapValue) {
                        group_value = $area.attr(opts.mapValue);
                    }
                    if (default_group) {
                        // set an attribute so we can refer to the area by index from the DOM object if no key
                        area_id = addAreaData(me.data.length, group_value);
                        dataItem = me.data[area_id];
                        dataItem.key = key = area_id.toString();
                    }
                    else {
                        area_id = me._xref[key];
                        if (area_id >= 0) {
                            dataItem = me.data[area_id];
                            if (group_value && !me.data[area_id].value) {
                                dataItem.value = group_value;
                            }
                        }
                        else {
                            area_id = addAreaData(key, group_value);
                            dataItem = me.data[area_id];
                            dataItem.isPrimary=j===0;
                        }
                    }
                    mapArea.areaDataXref.push(area_id);
                    dataItem.areasXref.push(mapAreaId);
                }

                href=$area.attr('href');
                if (href && href!=='#' && !dataItem.href)
                {
                    dataItem.href=href;
                }

                if (!mapArea.nohref) {
                    $area.bind('click.mapster', me.click);
                       
                    if (!m.isTouch) {
                        $area.bind('mouseover.mapster', me.mouseover)
                            .bind('mouseout.mapster', me.mouseout)
                            .bind('mousedown.mapster', me.mousedown);
                        
                    }
                        
                }

                // store an ID with each area. 
                $area.data("mapster", mapAreaId+1);
            }
           
            // TODO listenToList
            //            if (opts.listenToList && opts.nitG) {
            //                opts.nitG.bind('click.mapster', event_hooks[map_data.hooks_index].listclick_hook);
            //            }

            // populate areas from config options
            me.setAreaOptions(opts.areas);
            me.redrawSelections();

        },
        processCommandQueue: function() {
            
            var cur,me=this;
            while (!me.currentAction && me.commands.length) {
                cur = me.commands[0];
                me.commands.splice(0,1);
                m.impl[cur.command].apply(cur.that, cur.args);
            }
        },
        clearEvents: function () {
            $(this.map).find('area')
                        .unbind('.mapster');
            $(this.images)
                        .unbind('.mapster');
        },
        _clearCanvases: function (preserveState) {
            // remove the canvas elements created
            if (!preserveState) {
                $(this.base_canvas).remove();
            }
            $(this.overlay_canvas).remove();
        },
        clearMapData: function (preserveState) {
            var me = this;
            this._clearCanvases(preserveState);

            // release refs to DOM elements
            $.each(this.data, function (i, e) {
                e.reset();
            });
            this.data = null;
            if (!preserveState) {
                // get rid of everything except the original image
                this.image.style.cssText = this.imgCssText;
                $(this.wrapper).before(this.image).remove();
            }

            me.images.clear();

            this.image = null;
            u.ifFunction(this.clearTooltip, this);
        },

        // Compelete cleanup process for deslecting items. Called after a batch operation, or by AreaData for single
        // operations not flagged as "partial"
        
        removeSelectionFinish: function () {
            var g = this.graphics;

            g.refreshSelections();
            // do not call ensure_no_highlight- we don't really want to unhilight it, just remove the effect
            g.clearHighlight();
        }
    };
} (jQuery));
/* areadata.js
   AreaData and MapArea protoypes
*/

(function ($) {
    var m = $.mapster, u = m.utils;
    
    /**
     * Select this area
     * 
     * @param {AreaData} me  AreaData context
     * @param {object} options Options for rendering the selection
     */
    function select(options) {
        // need to add the new one first so that the double-opacity effect leaves the current one highlighted for singleSelect
        
        var me=this, o = me.owner;
        if (o.options.singleSelect) {
            o.clearSelections();
        }

        // because areas can overlap - we can't depend on the selection state to tell us anything about the inner areas.
        // don't check if it's already selected
        if (!me.isSelected()) {
            if (options) {
                
                // cache the current options, and map the altImageId if an altimage 
                // was passed

                me.optsCache = $.extend(me.effectiveRenderOptions('select'),
                    options,
                    { 
                        altImageId: o.images.add(options.altImage)
                    });
            }

            me.drawSelection();

            me.selected = true;
            me.changeState('select', true);
        }

        if (o.options.singleSelect) {
            o.graphics.refreshSelections();
        }
    }

    /**
     * Deselect this area, optionally deferring finalization so additional areas can be deselected
     * in a single operation
     * 
     * @param  {boolean} partial when true, the caller must invoke "finishRemoveSelection" to render 
     */
    
    function deselect(partial) {
        var me=this;
        me.selected = false;
        me.changeState('select', false);

        // release information about last area options when deselecting.
        
        me.optsCache=null;
        me.owner.graphics.removeSelections(me.areaId);

        // Complete selection removal process. This is separated because it's very inefficient to perform the whole
        // process for multiple removals, as the canvas must be totally redrawn at the end of the process.ar.remove
        
        if (!partial) {
            me.owner.removeSelectionFinish();
        }
    }

    /**
     * Toggle the selection state of this area
     * @param  {object} options Rendering options, if toggling on
     * @return {bool} The new selection state
     */
    function toggle(options) {
        var me=this;
        if (!me.isSelected()) {
            me.select(options);
        }
        else {
            me.deselect();
        }
        return me.isSelected();
    }

    /**
     * An AreaData object; represents a conceptual area that can be composed of 
     * one or more MapArea objects
     * 
     * @param {MapData} owner The MapData object to which this belongs
     * @param {string} key   The key for this area
     * @param {string} value The mapValue string for this area
     */
    
    m.AreaData = function (owner, key, value) {
        $.extend(this,{
            owner: owner, 
            key: key || '',
            // means this represents the first key in a list of keys (it's the area group that gets highlighted on mouseover)
            isPrimary: true,
            areaId: -1,
            href: '',
            value: value || '',
            options:{},
            // "null" means unchanged. Use "isSelected" method to just test true/false 
            selected: null,       
            // xref to MapArea objects
            areasXref: [],
            // (temporary storage) - the actual area moused over
            area: null,
            // the last options used to render this. Cache so when re-drawing after a remove, changes in options won't
            // break already selected things. 
            optsCache: null
         });
    };

    /**
     * The public API for AreaData object
     */

    m.AreaData.prototype = {
        constuctor: m.AreaData,
        select: select,
        deselect: deselect,
        toggle: toggle,
        areas: function() {
            var i,result=[];
            for (i=0;i<this.areasXref.length;i++) {
                result.push(this.owner.mapAreas[this.areasXref[i]]);
            }
            return result;
        },
        // return all coordinates for all areas
        coords: function(offset) {
            var coords = [];
            $.each(this.areas(), function (i, el) {
                coords = coords.concat(el.coords(offset));
            });
            return coords;
        },
        reset: function () {
            $.each(this.areas(), function (i, e) {
                e.reset();
            });
            this.areasXref = [];
            this.options = null;
        },
        // Return the effective selected state of an area, incorporating staticState
        isSelectedOrStatic: function () {

            var o = this.effectiveOptions();
            return u.isBool(o.staticState) ? o.staticState :
                        this.isSelected();
        },
        isSelected: function () {
            return u.isBool(this.selected) ? this.selected :
                u.isBool(this.owner.area_options.selected) ? this.owner.area_options.selected : false;
        },
        isSelectable: function () {
            return u.isBool(this.effectiveOptions().staticState) ? false :
                        (u.isBool(this.owner.options.staticState) ? false : u.boolOrDefault(this.effectiveOptions().isSelectable,true));
        },
        isDeselectable: function () {
            return u.isBool(this.effectiveOptions().staticState) ? false :
                        (u.isBool(this.owner.options.staticState) ? false : u.boolOrDefault(this.effectiveOptions().isDeselectable,true));
        },
        isNotRendered: function() {
            var area = $(this.area);
            return area.attr('nohref') ||
                !area.attr('href') ||
                this.effectiveOptions().isMask;

        },

        
         /**
         * Return the overall options effective for this area. 
         * This should get the default options, and merge in area-specific options, finally
         * overlaying options passed by parameter
         * 
         * @param  {[type]} options  options which will supercede all other options for this area
         * @return {[type]}          the combined options
         */
        
        effectiveOptions: function (options) {
            
            var opts = u.updateProps({},
                    this.owner.area_options,
                    this.options,
                    options || {},
                    {
                        id: this.areaId 
                    }
                );

            opts.selected = this.isSelected();
            
            return opts;
        },

        /**
         * Return the options effective for this area for a "render" or "highlight" mode. 
         * This should get the default options, merge in the areas-specific options, 
         * and then the mode-specific options.
         * @param  {string} mode    'render' or 'highlight'
         * @param  {[type]} options  options which will supercede all other options for this area
         * @return {[type]}          the combined options
         */
        
        effectiveRenderOptions: function (mode, options) {
            var allOpts,opts=this.optsCache;
            
            if (!opts || mode==='highlight') {
                allOpts = this.effectiveOptions(options);
                opts = u.updateProps({},
                    allOpts,
                    allOpts["render_" + mode]
                );
                    
                if (mode!=='highlight') {
                    this.optsCache=opts;
                }
            }
            return $.extend({},opts);
        },

        // Fire callback on area state change
        changeState: function (state_type, state) {
            if ($.isFunction(this.owner.options.onStateChange)) {
                this.owner.options.onStateChange.call(this.owner.image,
                    {
                        key: this.key,
                        state: state_type,
                        selected: state
                    }
                );
            }
        },

        // highlight this area
         
        highlight: function (options) {
            var o = this.owner;
            if (this.effectiveOptions().highlight) {
                o.graphics.addShapeGroup(this, "highlight",options);
            }
            o.setHighlightId(this.areaId);
            this.changeState('highlight', true);
        },

        // select this area. if "callEvent" is true then the state change event will be called. (This method can be used
        // during config operations, in which case no event is indicated)
        
        drawSelection: function () {
        

            this.owner.graphics.addShapeGroup(this, "select");
        
        }


    };
    // represents an HTML area
    m.MapArea = function (owner,areaEl,keys) {
        if (!owner) {
            return;
        }
        var me = this;
        me.owner = owner;   // a MapData object
        me.area = areaEl;
        me.areaDataXref=[]; // a list of map_data.data[] id's for each areaData object containing this
        me.originalCoords = [];
        $.each(u.split(areaEl.coords), function (i, el) {
            me.originalCoords.push(parseFloat(el));
        });
        me.length = me.originalCoords.length;
        me.shape = areaEl.shape.toLowerCase();
        me.nohref = areaEl.nohref || !areaEl.href;
        me.configure(keys);
    };
    m.MapArea.prototype= {
        constructor: m.MapArea,
        configure: function(keys) {
            this.keys = u.split(keys);
        },
        reset: function() {
            this.area=null;
        },
        coords: function (offset) {
            return $.map(this.originalCoords,function(e) {
                return offset ? e : e+offset;
            });
        }
    };
} (jQuery));
/* areacorners.js
   determine the best place to put a box of dimensions (width,height) given a circle, rect or poly
*/

(function ($) {
    var u=$.mapster.utils;


    /**
     * Compute positions that will place a target with dimensions [width,height] outside 
     * but near the boundaries of the elements "elements". When an imagemap is passed, the 
     *
     * @param  {Element|Element[]} elements An element or an array of elements (such as a jQuery object)
     * @param  {Element} image The image to which area elements are bound, if this is an image map.
     * @param  {Element} container The contianer in which the target must be constrained (or document, if missing)
     * @param  {int} width The width of the target object
     * @return {object} a structure with the x and y positions
     */
    u.areaCorners = function (elements, image, container, width, height) {
        var pos,found, minX, minY, maxX, maxY, bestMinX, bestMaxX, bestMinY, bestMaxY, curX, curY, nest, j,
           offsetx=0, 
           offsety=0,
           rootx,
           rooty,
           iCoords,radius,angle,el,
           coords=[];

        // if a single element was passed, map it to an array
        
        elements = elements.length ? 
            elements:
            [elements];

        container = container ? 
            $(container):
            $(document.body);

        // get the relative root of calculation

        pos = container.offset();
        rootx = pos.left;
        rooty = pos.top;

        // with areas, all we know about is relative to the top-left corner of the image. We need to add an offset compared to
        // the actual container. After this calculation, offsetx/offsety can be added to either the area coords, or the target's
        // absolute position to get the correct top/left boundaries of the container.

        if (image) {
            pos = $(image).offset();
            offsetx = pos.left;
            offsety = pos.top;
        }

        // map the coordinates of any type of shape to a poly and use the logic. simpler than using three different
        // calculation methods. Circles use a 20 degree increment for this estimation.

        for (j=0;j<elements.length;j++) 
        {
            el=elements[j];
            if (el.nodeName==='AREA') {
                iCoords = u.split(el.coords,parseInt);

                switch(el.shape) {
                    case 'circle':
                        curX=iCoords[0];
                        curY=iCoords[1];
                        radius=iCoords[2];
                        coords=[];
                        for (j=0;j<360;j+=20) {
                             angle=j*Math.PI/180;
                             coords.push(curX+radius*Math.cos(angle),curY+radius*Math.sin(angle));
                        }
                        break;
                      case 'rect':
                          coords.push(iCoords[0],iCoords[1],iCoords[2],iCoords[1],iCoords[2],iCoords[3],iCoords[0],iCoords[3]);
                          break;
                      default:
                          coords=coords.concat(iCoords);
                         break;
                }

                // map area positions to it's real position in the container

                for (j=0;j<coords.length;j+=2)
                {
                    coords[j]=parseInt(coords[j],10)+offsetx;
                    coords[j+1]=parseInt(coords[j+1],10)+offsety;
                }
            } else {
                el=$(el);
                pos = el.position();
                coords.push(pos.left,pos.top,
                            pos.left+el.width(),pos.top,
                            pos.left+el.width(),pos.top+el.height(),
                            pos.left,pos.top+el.height());

            }
        }
        
        minX = minY = bestMinX = bestMinY = 999999;
        maxX = maxY = bestMaxX = bestMaxY = -1;

        for (j = coords.length - 2; j >= 0; j -= 2) {
            curX = coords[j];
            curY = coords[j + 1];
            
            if (curX < minX) {
                minX = curX;
                bestMaxY = curY;
            }
            if (curX > maxX) {
                maxX = curX;
                bestMinY = curY;
            }
            if (curY < minY) {
                minY = curY;
                bestMaxX = curX;
            }
            if (curY > maxY) {
                maxY = curY;
                bestMinX = curX;
            }

        }

        // try to figure out the best place for the tooltip
        
        if (width && height) {
            found=false;
            $.each([[bestMaxX - width, minY - height], [bestMinX, minY - height],
                             [minX - width, bestMaxY - height], [minX - width, bestMinY],
                             [maxX,bestMaxY - height], [ maxX,bestMinY],
                             [bestMaxX - width, maxY], [bestMinX, maxY]
                      ],function (i, e) {
                          if (!found && (e[0] > rootx && e[1] > rooty)) {
                              nest = e;
                              found=true;
                              return false;
                  }
             });
             
             // default to lower-right corner if nothing fit inside the boundaries of the image
             
             if (!found) {
                 nest=[maxX,maxY];
             }
        }
        return nest;
    };
} (jQuery));
/* scale.js: resize and zoom functionality
   requires areacorners.js, when.js
*/


(function ($) {
    var m = $.mapster, u = m.utils, p = m.MapArea.prototype;

    m.utils.getScaleInfo = function (eff, actual) {
        var pct;
        if (!actual) {
            pct = 1;
            actual=eff;
        } else {
            pct = eff.width / actual.width || eff.height / actual.height;
            // make sure a float error doesn't muck us up
            if (pct > 0.98 && pct < 1.02) { pct = 1; }
        }
        return {
            scale: (pct !== 1),
            scalePct: pct,
            realWidth: actual.width,
            realHeight: actual.height,
            width: eff.width,
            height: eff.height,
            ratio: eff.width / eff.height
        };
    };
    // Scale a set of AREAs, return old data as an array of objects
    m.utils.scaleMap = function (image, imageRaw, scale) {
        
        // stunningly, jQuery width can return zero even as width does not, seems to happen only
        // with adBlock or maybe other plugins. These must interfere with onload events somehow.


        var vis=u.size(image),
            raw=u.size(imageRaw,true);

        if (!raw.complete()) {
            throw("Another script, such as an extension, appears to be interfering with image loading. Please let us know about this.");
        }
        if (!vis.complete()) {
            vis=raw;
        }
        return this.getScaleInfo(vis, scale ? raw : null);
    };
    
    /**
     * Resize the image map. Only one of newWidth and newHeight should be passed to preserve scale
     * 
     * @param  {int}   width       The new width OR an object containing named parameters matching this function sig
     * @param  {int}   height      The new height
     * @param  {int}   effectDuration Time in ms for the resize animation, or zero for no animation
     * @param  {function} callback    A function to invoke when the operation finishes
     * @return {promise}              NOT YET IMPLEMENTED
     */
    
    m.MapData.prototype.resize = function (width, height, duration, callback) {
        var p,promises,newsize,els, highlightId, ratio, 
            me = this;
        
        // allow omitting duration
        callback = callback || duration;

        function sizeCanvas(canvas, w, h) {
            if ($.mapster.hasCanvas) {
                canvas.width = w;
                canvas.height = h;
            } else {
                $(canvas).width(w);
                $(canvas).height(h);
            }
        }

        // Finalize resize action, do callback, pass control to command queue

        function cleanupAndNotify() {

            me.currentAction = '';
            
            if ($.isFunction(callback)) {
                callback();
            }
            
            me.processCommandQueue();
        }

        // handle cleanup after the inner elements are resized
        
        function finishResize() {
            sizeCanvas(me.overlay_canvas, width, height);

            // restore highlight state if it was highlighted before
            if (highlightId >= 0) {
                var areaData = me.data[highlightId];
                areaData.tempOptions = { fade: false };
                me.getDataForKey(areaData.key).highlight();
                areaData.tempOptions = null;
            }
            sizeCanvas(me.base_canvas, width, height);
            me.redrawSelections();
            cleanupAndNotify();
        }

        function resizeMapData() {
            $(me.image).css(newsize);
            // start calculation at the same time as effect
            me.scaleInfo = u.getScaleInfo({
                    width: width,
                    height: height
                },
                { 
                    width: me.scaleInfo.realWidth,
                    height: me.scaleInfo.realHeight
                });
            $.each(me.data, function (i, e) {
                $.each(e.areas(), function (i, e) {
                    e.resize();
                });
            });
        }

        if (me.scaleInfo.width === width && me.scaleInfo.height === height) {
            return;
        }

        highlightId = me.highlightId;

        
        if (!width) {
            ratio = height / me.scaleInfo.realHeight;
            width = Math.round(me.scaleInfo.realWidth * ratio);
        }
        if (!height) {
            ratio = width / me.scaleInfo.realWidth;
            height = Math.round(me.scaleInfo.realHeight * ratio);
        }

        newsize = { 'width': String(width) + 'px', 'height': String(height) + 'px' };
        if (!$.mapster.hasCanvas) {
            $(me.base_canvas).children().remove();
        }

        // resize all the elements that are part of the map except the image itself (which is not visible)
        // but including the div wrapper
        els = $(me.wrapper).find('.mapster_el').add(me.wrapper);

        if (duration) {
            promises = [];
            me.currentAction = 'resizing';
            els.each(function (i, e) {
                p = u.defer();
                promises.push(p);

                $(e).animate(newsize, {
                    duration: duration,
                    complete: p.resolve,
                    easing: "linear"
                });
            });

            p = u.defer();
            promises.push(p);

            // though resizeMapData is not async, it needs to be finished just the same as the animations,
            // so add it to the "to do" list.
            
            u.when.all(promises).then(finishResize);
            resizeMapData();
            p.resolve();
        } else {
            els.css(newsize);
            resizeMapData();
            finishResize();
            
        }
    };


    m.MapArea = u.subclass(m.MapArea, function () {
        //change the area tag data if needed
        this.base.init();
        if (this.owner.scaleInfo.scale) {
            this.resize();
        }
    });

    p.coords = function (percent, coordOffset) {
        var j, newCoords = [],
                    pct = percent || this.owner.scaleInfo.scalePct,
                    offset = coordOffset || 0;

        if (pct === 1 && coordOffset === 0) {
            return this.originalCoords;
        }

        for (j = 0; j < this.length; j++) {
            //amount = j % 2 === 0 ? xPct : yPct;
            newCoords.push(Math.round(this.originalCoords[j] * pct) + offset);
        }
        return newCoords;
    };
    p.resize = function () {
        this.area.coords = this.coords().join(',');
    };

    p.reset = function () {
        this.area.coords = this.coords(1).join(',');
    };
    
    m.impl.resize = function (width, height, duration, callback) {
        if (!width && !height) {
            return false;
        }
        var x= (new m.Method(this,
                function () {
                    this.resize(width, height, duration, callback);
                },
                null,
                {
                    name: 'resize',
                    args: arguments
                }
            )).go();
        return x;
    };

/*
    m.impl.zoom = function (key, opts) {
        var options = opts || {};

        function zoom(areaData) {
            // this will be MapData object returned by Method

            var scroll, corners, height, width, ratio,
                    diffX, diffY, ratioX, ratioY, offsetX, offsetY, newWidth, newHeight, scrollLeft, scrollTop,
                    padding = options.padding || 0,
                    scrollBarSize = areaData ? 20 : 0,
                    me = this,
                    zoomOut = false;

            if (areaData) {
                // save original state on first zoom operation
                if (!me.zoomed) {
                    me.zoomed = true;
                    me.preZoomWidth = me.scaleInfo.width;
                    me.preZoomHeight = me.scaleInfo.height;
                    me.zoomedArea = areaData;
                    if (options.scroll) {
                        me.wrapper.css({ overflow: 'auto' });
                    }
                }
                corners = $.mapster.utils.areaCorners(areaData.coords(1, 0));
                width = me.wrapper.innerWidth() - scrollBarSize - padding * 2;
                height = me.wrapper.innerHeight() - scrollBarSize - padding * 2;
                diffX = corners.maxX - corners.minX;
                diffY = corners.maxY - corners.minY;
                ratioX = width / diffX;
                ratioY = height / diffY;
                ratio = Math.min(ratioX, ratioY);
                offsetX = (width - diffX * ratio) / 2;
                offsetY = (height - diffY * ratio) / 2;

                newWidth = me.scaleInfo.realWidth * ratio;
                newHeight = me.scaleInfo.realHeight * ratio;
                scrollLeft = (corners.minX) * ratio - padding - offsetX;
                scrollTop = (corners.minY) * ratio - padding - offsetY;
            } else {
                if (!me.zoomed) {
                    return;
                }
                zoomOut = true;
                newWidth = me.preZoomWidth;
                newHeight = me.preZoomHeight;
                scrollLeft = null;
                scrollTop = null;
            }

            this.resize({
                width: newWidth,
                height: newHeight,
                duration: options.duration,
                scroll: scroll,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                // closure so we can be sure values are correct
                callback: (function () {
                    var isZoomOut = zoomOut,
                            scroll = options.scroll,
                            areaD = areaData;
                    return function () {
                        if (isZoomOut) {
                            me.preZoomWidth = null;
                            me.preZoomHeight = null;
                            me.zoomed = false;
                            me.zoomedArea = false;
                            if (scroll) {
                                me.wrapper.css({ overflow: 'inherit' });
                            }
                        } else {
                            // just to be sure it wasn't canceled & restarted
                            me.zoomedArea = areaD;
                        }
                    };
                } ())
            });
        }
        return (new m.Method(this,
                function (opts) {
                    zoom.call(this);
                },
                function () {
                    zoom.call(this.owner, this);
                },
                {
                    name: 'zoom',
                    args: arguments,
                    first: true,
                    key: key
                }
                )).go();


    };
    */
} (jQuery));
/* tooltip.js - tooltip functionality
   requires areacorners.js
*/

(function ($) {

    var m = $.mapster, u = m.utils;
    
    $.extend(m.defaults, {
        toolTipContainer: '<div style="border: 2px solid black; background: #EEEEEE; width:160px; padding:4px; margin: 4px; -moz-box-shadow: 3px 3px 5px #535353; ' +
        '-webkit-box-shadow: 3px 3px 5px #535353; box-shadow: 3px 3px 5px #535353; -moz-border-radius: 6px 6px 6px 6px; -webkit-border-radius: 6px; ' +
        'border-radius: 6px 6px 6px 6px; opacity: 0.8;"></dteniv>',
        showToolTip: false,
        toolTipFade: true,
        toolTipClose: ['area-mouseout','image-mouseout'],
        onShowToolTip: null,
        onHideToolTip: null
    });
    
    $.extend(m.area_defaults, {
        toolTip: null,
        toolTipClose: null
    });
    

    /**
     * Show a tooltip positioned near this area.
     * 
     * @param {string|jquery} html A string of html or a jQuery object containing the tooltip content.
     * @param {string|jquery} [template] The html template in which to wrap the content
     * @param {string|object} [css] CSS to apply to the outermost element of the tooltip 
     * @return {jquery} The tooltip that was created
     */
    
    function createToolTip(html, template, css) {
        var tooltip;

        // wrap the template in a jQuery object, or clone the template if it's already one.
        // This assumes that anything other than a string is a jQuery object; if it's not jQuery will
        // probably throw an error.
        
        if (template) {
            tooltip = typeof template === 'string' ?
                $(template) : 
                $(template).clone();

            tooltip.append(html);
        } else {
            tooltip=$(html);
        }

        // always set display to block, or the positioning css won't work if the end user happened to
        // use a non-block type element.

        tooltip.css($.extend((css || {}),{
                display:"block",
                position:"absolute"
            })).hide();
        
        $('body').append(tooltip);

        // we must actually add the tooltip to the DOM and "show" it in order to figure out how much space it
        // consumes, and then reposition it with that knowledge.
        // We also cache the actual opacity setting to restore finally.
        
        tooltip.attr("data-opacity",tooltip.css("opacity"))
            .css("opacity",0);
        
        // doesn't really show it because opacity=0
        
        return tooltip.show();
    }


    /**
     * Show a tooltip positioned near this area.
     * 
     * @param {jquery} tooltip The tooltip
     * @param {object} [options] options for displaying the tooltip.
     *  @config {int} [left] The 0-based absolute x position for the tooltip
     *  @config {int} [top] The 0-based absolute y position for the tooltip
     *  @config {string|object} [css] CSS to apply to the outermost element of the tooltip 
     *  @config {bool} [fadeDuration] When non-zero, the duration in milliseconds of a fade-in effect for the tooltip.
     */
    
    function showToolTipImpl(tooltip,options)
    {
        var tooltipCss = { 
                "left":  options.left + "px",
                "top": options.top + "px"
            }, 
            actalOpacity=tooltip.attr("data-opacity") || 0,
            zindex = tooltip.css("z-index");
        
        if (parseInt(zindex,10)===0 
            || zindex === "auto") {
            tooltipCss["z-index"] = 9999;
        }

        tooltip.css(tooltipCss)
            .addClass('mapster_tooltip');

        
        if (options.fadeDuration && options.fadeDuration>0) {
            u.fader(tooltip[0], 0, actalOpacity, options.fadeDuration);
        } else {
            u.setOpacity(tooltip[0], actalOpacity);
        }
    }
      
    /**
     * Hide and remove active tooltips
     * 
     * @param  {MapData} this The mapdata object to which the tooltips belong
     */
    
    m.MapData.prototype.clearToolTip = function() {
        if (this.activeToolTip) {
            this.activeToolTip.stop().remove();
            this.activeToolTip = null;
            this.activeToolTipID = null;
            u.ifFunction(this.options.onHideToolTip, this);
        }
    };

    /**
     * Configure the binding between a named tooltip closing option, and a mouse event.
     *
     * If a callback is passed, it will be called when the activating event occurs, and the tooltip will
     * only closed if it returns true.
     *
     * @param  {MapData}  [this]     The MapData object to which this tooltip belongs.
     * @param  {String}   option     The name of the tooltip closing option
     * @param  {String}   event      UI event to bind to this option
     * @param  {Element}  target     The DOM element that is the target of the event
     * @param  {Function} [beforeClose] Callback when the tooltip is closed
     * @param  {Function} [onClose]  Callback when the tooltip is closed
     */
    function bindToolTipClose(options, bindOption, event, target, beforeClose, onClose) {
        var event_name = event + '.mapster-tooltip';
        
        if ($.inArray(bindOption, options) >= 0) {
            target.unbind(event_name)
                .bind(event_name, function (e) {
                    if (!beforeClose || beforeClose.call(this,e)) {
                        target.unbind('.mapster-tooltip');
                        if (onClose) {
                            onClose.call(this);
                        }
                    }
                });
            
            return {
                object: target, 
                event: event_name
            };
        }
    }
    
    /**
     * Show a tooltip.
     *
     * @param {string|jquery}   [tooltip]       A string of html or a jQuery object containing the tooltip content.
     * 
     * @param {string|jquery}   [target]        The target of the tooltip, to be used to determine positioning. If null,
     *                                          absolute position values must be passed with left and top.
     *
     * @param {string|jquery}   [image]         If target is an [area] the image that owns it
     * 
     * @param {string|jquery}   [container]     An element within which the tooltip must be bounded
     *
     *
     * 
     * @param {object|string|jQuery} [options]  options to apply when creating this tooltip - OR -
     *                                          The markup, or a jquery object, containing the data for the tooltip 
     *                                         
     *  @config {string}        [closeEvents]   A string with one or more comma-separated values that determine when the tooltip
     *                                          closes: 'area-click','tooltip-click','image-mouseout' are valid values
     *                                          then no template will be used.
     *  @config {int}           [offsetx]       the horizontal amount to offset the tooltip 
     *  @config {int}           [offsety]       the vertical amount to offset the tooltip 
     *  @config {string|object} [css]           CSS to apply to the outermost element of the tooltip 
     */
    
    function showToolTip(tooltip,target,image,container,options) {
        var corners,
            ttopts = {};
    
        options = options || {};


        if (target) {

            corners = u.areaCorners(target,image,container,
                                    tooltip.outerWidth(true),
                                    tooltip.outerHeight(true));

            // Try to upper-left align it first, if that doesn't work, change the parameters

            ttopts.left = corners[0];
            ttopts.top = corners[1];

        } else {
            
            ttopts.left = options.left;
            ttopts.top = options.top;
        }

        ttopts.left += (options.offsetx || 0);
        ttopts.top +=(options.offsety || 0);

        ttopts.css= options.css;
        ttopts.fadeDuration = options.fadeDuration;

        showToolTipImpl(tooltip,ttopts);

        return tooltip;
    }
    
    /**
     * Show a tooltip positioned near this area.
      *
     * @param {string|jquery}   [content]       A string of html or a jQuery object containing the tooltip content.
     
     * @param {object|string|jQuery} [options]  options to apply when creating this tooltip - OR -
     *                                          The markup, or a jquery object, containing the data for the tooltip 
     *  @config {string|jquery}   [container]     An element within which the tooltip must be bounded
     *  @config {bool}          [template]      a template to use instead of the default. If this property exists and is null,
     *                                          then no template will be used.
     *  @config {string}        [closeEvents]   A string with one or more comma-separated values that determine when the tooltip
     *                                          closes: 'area-click','tooltip-click','image-mouseout' are valid values
     *                                          then no template will be used.
     *  @config {int}           [offsetx]       the horizontal amount to offset the tooltip 
     *  @config {int}           [offsety]       the vertical amount to offset the tooltip 
     *  @config {string|object} [css]           CSS to apply to the outermost element of the tooltip 
     */
    m.AreaData.prototype.showToolTip= function(content,options) {
        var tooltip, closeOpts, target, tipClosed, template,
            ttopts = {},
            ad=this,
            md=ad.owner,
            areaOpts = ad.effectiveOptions();
    
        // copy the options object so we can update it
        options = options ? $.extend({},options) : {};

        content = content || areaOpts.toolTip;
        closeOpts = options.closeEvents || areaOpts.toolTipClose || md.options.toolTipClose || 'tooltip-click';
        
        template = typeof options.template !== 'undefined' ? 
                options.template :
                md.options.toolTipContainer;

        options.closeEvents = typeof closeOpts === 'string' ?
            closeOpts = u.split(closeOpts) :
            closeOpts;

        options.fadeDuration = options.fadeDuration ||
                 (md.options.toolTipFade ? 
                    (md.options.fadeDuration || areaOpts.fadeDuration) : 0);

        target = ad.area ? 
            ad.area :
            $.map(ad.areas(),
                function(e) {
                    return e.area;
                });

        if (md.activeToolTipID===ad.areaId) {
            return;
        }

        md.clearToolTip();

        md.activeToolTip = tooltip = createToolTip(content,
            template,
            options.css);

        md.activeToolTipID = ad.areaId;

        tipClosed = function() {
            md.clearToolTip();
        };

        bindToolTipClose(closeOpts,'area-click', 'click', $(md.map), null, tipClosed);
        bindToolTipClose(closeOpts,'tooltip-click', 'click', tooltip,null, tipClosed);
        bindToolTipClose(closeOpts,'image-mouseout', 'mouseout', $(md.image), function(e) {
            return (e.relatedTarget && e.relatedTarget.nodeName!=='AREA' && e.relatedTarget!==ad.area);
        }, tipClosed);


        showToolTip(tooltip,
                    target,
                    md.image,
                    options.container,
                    template,
                    options);

        u.ifFunction(md.options.onShowToolTip, ad.area,
        {
            toolTip: tooltip,
            options: ttopts,
            areaOptions: areaOpts,
            key: ad.key,
            selected: ad.isSelected()
        });

        return tooltip;
    };
    

    /**
     * Parse an object that could be a string, a jquery object, or an object with a "contents" property
     * containing html or a jQuery object.
     * 
     * @param  {object|string|jQuery} options The parameter to parse
     * @return {string|jquery} A string or jquery object
     */
    function getHtmlFromOptions(options) {

            // see if any html was passed as either the options object itself, or the content property

            return (options ?
                ((typeof options === 'string' || options.jquery) ?
                    options :
                    options.content) :
                null);
    }

    /**
     * Activate or remove a tooltip for an area. When this method is called on an area, the
     * key parameter doesn't apply and "options" is the first parameter.
     *
     * When called with no parameters, or "key" is a falsy value, any active tooltip is cleared.
     * 
     * When only a key is provided, the default tooltip for the area is used. 
     * 
     * When html is provided, this is used instead of the default tooltip.
     * 
     * When "noTemplate" is true, the default tooltip template will not be used either, meaning only
     * the actual html passed will be used.
     *  
     * @param  {string|AreaElement} key The area for which to activate a tooltip, or a DOM element.
     * 
     * @param {object|string|jquery} [options] options to apply when creating this tooltip - OR -
     *                                         The markup, or a jquery object, containing the data for the tooltip 
     *  @config {string|jQuery} [content]   the inner content of the tooltip; the tooltip text or HTML
     *  @config {Element|jQuery} [container]   the inner content of the tooltip; the tooltip text or HTML
     *  @config {bool}          [template]  a template to use instead of the default. If this property exists and is null,
     *                                      then no template will be used.
     *  @config {int}           [offsetx]   the horizontal amount to offset the tooltip.
     *  @config {int}           [offsety]   the vertical amount to offset the tooltip.
     *  @config {string|object} [css]       CSS to apply to the outermost element of the tooltip 
     *  @config {string|object} [css] CSS to apply to the outermost element of the tooltip 
     *  @config {bool}          [fadeDuration] When non-zero, the duration in milliseconds of a fade-in effect for the tooltip.
     * @return {jQuery} The jQuery object
     */
    
    m.impl.tooltip = function (key,options) {
        return (new m.Method(this,
        function mapData() {
            var tooltip, target, md=this;
            if (!key) {
                md.clearToolTip();
            } else {
                target=$(key);
                if (md.activeToolTipID ===target[0]) {
                    return;
                }
                md.clearToolTip();

                md.activeToolTip = tooltip = createToolTip(getHtmlFromOptions(options),
                            options.template || md.options.toolTipContainer,
                            options.css);
                md.activeToolTipID = target[0];

                bindToolTipClose(['tooltip-click'],'tooltip-click', 'click', tooltip, null, function() {
                    md.clearToolTip();
                });

                md.activeToolTip = tooltip = showToolTip(tooltip,
                    target,
                    md.image,
                    options.container,
                    options);
            }
        },
        function areaData() {
            if ($.isPlainObject(key) && !options) {
                options = key;
            }

            this.showToolTip(getHtmlFromOptions(options),options);
        },
        { 
            name: 'tooltip',
            args: arguments,
            key: key
        }
    )).go();
    };
} (jQuery));

/*
* rwdImageMaps jQuery plugin v1.5
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2013 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").load(function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);
 var myGame;
 $(document).ready(function(){

	// panel.startpanel();
	             // jQuery('#ImageMap1').maphilight();
	             // gameLoop();
	             myGame = new risk();
	             myGame.setMap(maps[1]);
	             myGame.start();

	         });

var paneldata ={
	numberOfPlayers : {
		title : "Choose number of players",
	},
	playerID : {
		title : "Each player rolls a dice, highest writes in their name first"
	}
};

var panel = {

	startpanel : function(control){
		console.log("startpanel");

		$("body").append("<div class='panel' id='players'></div>");
		$("#players").append("<h1></<h1>");

		panel.addPanel("#players", function(){
			$("#players h1").text(paneldata.numberOfPlayers.title);

			$("#players").append("<input type='button' class='btnPlayers' value='2'/>");
			$("#players").append("<input type='button' class='btnPlayers' value='3'/>");
			$("#players").append("<input type='button' class='btnPlayers' value='4'/>");
			$("#players").append("<input type='button' class='btnPlayers' value='5'/>");
			$("#players").append("<input type='button' class='btnPlayers' value='6'/>");

		});
		//action for selection of player size
		$(".btnPlayers").bind('click', function(){

				//record number of players 
				control.setPlayerSize(parseInt(this.value));
				control.setPlayers(players.slice(0,parseInt(this.value)));
				panel.removePanel("#players",function(){});
				$("#players").remove();
				panel.playerPanel(control);

			});
	},

	playerPanel : function(control){
		console.log("playerpanel");

		$("body").append("<div class='panel' id='playerIds'></div>");
		$("#playerIds").append("<h1></<h1>");
		$("#playerIds h1").text(paneldata.playerID.title);

		panel.addPanel("#playerIds", function(){
		console.log(control.getGameData());
			for (var i = 1; i <= control.getPlayerSize(); i++) {
				var value = "Player" + i;

				var color = players[i-1].color;

				$("#playerIds").append('<input id="player'+color+'" type="text" style="width:100px">');
				$("#player"+color).val(value);
				$("#playerIds").append('<img id="terranimg'+i+'" class="raceicon playerrow'+i+'"src="img/terran.jpg"/>');
				$("#playerIds").append('<img id="protossimg'+i+'" class="raceicon playerrow'+i+'"src="img/protoss.jpg"/>');
				$("#playerIds").append('<img id="zergimg'+i+'" class="raceicon playerrow'+i+'"src="img/zerg.jpg"/>');
				//Click on  img
				$(".playerrow"+i).bind('click',function(){

					var id = $(this).attr('id');
					var rowClass = $(this).attr('class').split(' ')[1];
					var num = parseInt(id.split('img')[1])-1;
					$("."+rowClass).removeClass("chosen");
					$(this).addClass("chosen");
					control.setPlayerRace(num,id.split('img')[0]);

				});

				$("#playerIds").append('<Br/>');
			};

			$("#playerIds").append('<Br/>');
			//Button and action to finish 
			$("#playerIds").append('<input id="btnPlayerDone" type="button" value="Done"  style="width:100px">');

			$("#btnPlayerDone").bind('click',function(){
				//Check that all players has chosen a race;
				for (var i = 1; i <= control.getPlayerSize(); i++) {
					var color = control.getPlayerColor(i-1);
					var name = $("#player"+color).val();
					var race = control.getPlayerRace(i-1);
					if( name == "" || race ==""){
						alert("Please enter names and race for all players");
						return;
					}
					control.setPlayerName(i-1,name);
				};
		// Launch game;
		panel.removePanel("#playerIds",function(){
			$("#playerIds").remove();
			gameLoop(control);
		});
	});


		});

},

removePanel : function(id,callback){
	console.log("removing panel ...");
	$(id).animate({
			//genomskinlighet
			'opacity': 0.0,
			'margin-left' : (parseInt($(id).parent().css('width')) - parseInt($(id).css('width'))) + 'px'
		}, 2000, callback());
},

addPanel : function(id,callback){
	console.log("adding panel " + id);
	$(id).animate({
			//genomskinlighet
			'opacity': 100.0,
			'margin-left' : (parseInt($(id).parent().css('width')) - parseInt($(id).css('width')))/3 + 'px'
		}, 1000, callback());
},
territoriumPanel : function(territorium,id){
	var temp = id.split(" ");
	var planet = parseInt(temp[0]);
	var area = parseInt(temp[1]);
	console.log(temp);
	console.log(planet);
	console.log(area);
	$("body").append("<div class='panel' id='territorium'></div>");
	$("#territorium").append("<h1></<h1>");

	panel.addPanel("#territorium",function(){

		var color = maps[gameData.playerSize-3].area[planet].territories[area].color;
		$("#territorium").css('background-image', 'none');
		$("#territorium").css("background-color", color);
		$('map area').off('click');
		$("#territorium h1").text(territorium.toUpperCase());
		$("#territorium").append('<div id="unitscontainer" class="panelcontainer"/>');
		$("#unitscontainer").append('<input id="btnUnitsMinus" class="btnPanel" type="button" value="-" />');
		$("#unitscontainer").append("<h1 id='units'> Units : "+maps[gameData.playerSize-3].area[planet].territories[area].units+"</h1>");
		$("#unitscontainer").append('<input id="btnUnitsPlus" class="btnPanel" type="button" value="+"  />');
		$("#territorium").append('<div id="colorcontainer" class="panelcontainer" />');

		$("#colorcontainer").append('<input id="btnColorNext" class="btnPanel" type="button" value="Next" />');
		$("#colorcontainer").append("<h1 id='color'> Color : "+color+"</h1>");
		//Button and action to finish 
		$("#territorium").append('<input id="btnDoneTerr" class="btnPanel" type="button" value="Done"/>');
		$("#btnDoneTerr").bind('click',function(){

			panel.removePanel("#territorium",function(){
				$("#territorium").remove();

				$('map area').bind('click',function(){
					areaClick($(this).attr('alt'),$(this).attr('title'));
				});
			});
		});
		$("#btnUnitsMinus").bind('click',function(){
			maps[gameData.playerSize-3].area[planet].territories[area].units--;
			$("#units").text("Units : " + maps[gameData.playerSize-3].area[planet].territories[area].units);
		});
		$("#btnUnitsPlus").bind('click',function(){
			maps[gameData.playerSize-3].area[planet].territories[area].units++;
			$("#units").text("Units : " + maps[gameData.playerSize-3].area[planet].territories[area].units);
		});
		$("#btnColorNext").bind('click',function(){
			
			for (var i = 0; i < gameData.players.length; i++) {
				if(gameData.players[i].color === color){
					color = gameData.players[(i+1) % (4)].color
					console.log((i+1) % (4));
					break;
				}
			};
			maps[gameData.playerSize-3].area[planet].territories[area].color = color;
			$("#territorium").css("background-color", color);
			$("#color").text("Color : " + color);
		});
	});
}
}

var scorePanelData ={
	toggleTitle : 'Map color',
	toggleTitleHHTML : "'<h2 id='titleToggle'></h2>'",
	toggleColorHTML : '<div class="toggle-btn-grp joint-toggle"><label onclick="" id="on" class="toggle-btn success"><input id="toggleOn" type="radio" name="group3"/>On</label><label onclick="" id="off" class="toggle-btn"><input id="toggleOff" type="radio" name="group3"/>Off</label></div>'


}
function risk(){
	var data = gameData;
	var gamemap = freemap;
	var control; 
	this.setGameData = function(gamedata){data = gamedata;};
	this.setMap = function(map){gamemap=map};
	this.start = function(){
	 control = new gameControl(data,freemap);
		panel.startpanel(control);
	};

	this.getData = function(){
		return data;
	}
	this.getControl = function(){
		return control;
	}

}

function UIControl(c){
	var self =this;
	this.ratio;
	this.ctx;
this.myCanvas;
	this.control = c;

		$("body").empty();
		$("body").css('background-image', 'none');
		$("body").css("background-color","#000011");


this.setTurn = function(player){
	console.log(player);
	$('#titleTurn').text(player.name);
	$('#titleTurn').css('color',"#"+ player.color);
};
this.setPhase = function(phase){
	$('#titlePhase').text(phase);
}

this.addInfoPanel = function(){
	$("body").append('<div id="scorepanel"></div>');
		$("#scorepanel").append('<div id="score1"></div>');
	$("#score1").append("<h1 id='titleTurn' class='score'></h1>");
	$("#scorepanel").append('<div id="score2"></div>');
	$("#score2").append("<h1 id='titlePhase' class='score'></h1>");


	/*$("#scorepanel").append(scorePanelData.toggleTitleHTML);
	$("#toggleTitle ").append(scorePanelData.toggleTitle);
	$("#scorepanel").append(scorePanelData.toggleColorHTML);

	$(".toggle-btn:not('.noscript') input[type=radio]").addClass("visuallyhidden");
	$(".toggle-btn:not('.noscript') input[type=radio]").change(function() {
		if( $(this).attr("name") ) {
			$(this).parent().addClass("success").siblings().removeClass("success")
		} else {
			$(this).parent().toggleClass("success");
		}
	});
	$(".toggle-btn:not('.noscript') input[type=radio]").bind('click', function(){
		console.log($(this).attr('id'));
		if($(this).attr('id') == 'toggleOn'){
			highlighting.alwaysOn =true;
		}else if($(this).attr('id') == 'toggleOff'){
			highlighting.alwaysOn =false;
		}
		for (var i = 0; i < 42; i++) {
				var pos = $("#terr"+i).attr('title');
			var pos2 = pos.split(" ");
			var color =  self.control.getColor(parseInt(pos2[0]),parseInt(pos2[1]));
			highlighting.setTerritoriumColor("#terr"+i,color);
		};
		$('#playboard').maphilight();
	});

	$('#nextPhase').bind('click',function(){
		console.log(self.control.getGameData());*/
	/*	gameData.gamePhase++;
		if(gameData.gamePhase>4){
			gameData.turn = (gameData.turn+1)%4;
			gameData.gamePhase=0;
		} 
		$('#titleTurn').text(gameData.players[gameData.turn].name);
		$('#titleTurn').css('color',"#"+ gameData.players[gameData.turn].color);
		$('#titlePhase').text(gameData.gamePhases[gameData.gamePhase]);
		$('#titlePhase').css('color',"white");*/
	// });

};

this.addBoard = function(){
	$("body").append('<div id="boardContainer"></div>');
	$("#boardContainer").append(boardImg);
		$("#boardContainer").append(map);
	;
	for (var i = 0; i < 42; i++) {
		$("#Map").append($(area1[i]).attr('id','terr' + i));

		// var pos = $("#terr"+i).attr('title');
		// var pos2 = pos.split(" ");
		// var color =  self.control.getColor(parseInt(pos2[0]),parseInt(pos2[1]));
		// highlighting.setTerritoriumColor("#terr"+i,color);
	};
	
	$('#playboard').maphilight({strokeColor : "#AAAAAA"});
	// $('img[usemap]').rwdImageMaps();
 /* var $span=$('<span class="map_title">'+"30 Units"+'</span>');        
        $span.css({top: 200+'px', left: 200+'px', color : 'purple', "font-size" : '40px', position:'absolute'});
        $span.appendTo('#boardContainer');*/
    }
this.setupBoard = function(){
	this.addInfoPanel();
	this.addBoard();
	this.addInputPanel();
	// this.addOverlayCanvas();
	//Create canvas with the device resolution.
 	self.myCanvas = createHiDPICanvas(800, 540);
	this.drawTerritoryStats(80,110,40);

}

this.addInputPanel = function(){
$("body").append('<div id="inputpanel"></div>');
	
	$("#inputpanel").append('<div id="input1"></div>');
	$("#input1").append("<button id='btnDone' class='score' >Done</button>");
}
this.drawTerritoryStats = function(x, y, units){
var c = $('#overlayCanvas')[0];
      // var context = c[0].getContext('2d');
console.log(c);
      var ctx = c.getContext("2d");
ctx.font = "20px Sans-serif"
    ctx.fillStyle = 'white';
    ctx.fillText(units, x, y);
      // context.lineWidth = 3;
      // // stroke color
      // context.strokeStyle = 'blue';
      // context.font = '22pt calibri';
      // context.fillStyle = 'white';
      // context.fillText(units, 150, 100);

}
this.addOverlayCanvas = function(){
	    $('<canvas>').attr({
        id: 'overlayCanvas'
    }).css({
        width: 800  + 'px',
        height: 540 + 'px'
    }).appendTo("#boardContainer div");
}
}
var PIXEL_RATIO = (function () {
    var ctx =   $('<canvas>').attr({
        id: 'overlayCanvas'
    })[0];
    console.log(ctx);
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();
var createHiDPICanvas = function(w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can =   $('<canvas>').attr({
        id: 'overlayCanvas'
    }).appendTo("#boardContainer div")[0];
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    $(can).attr('id', 'overlayCanvas')
    return can;
}