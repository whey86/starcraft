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
	var self = this;
	var map = m;
	var data = d;
	var ui;

	var selection = {
		isSelected : false,
		area : null,
		territory : null,
	}

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
	this.getCurrentMessage = function(){
		return data.message;
	}
	this.setMessage = function(message){
		data.message = message;
	}

	//Number of players (sets startunits at the same time)
	this.setPlayerSize = function(size){
		for (var i = 0; i < size; i++) {
			data.unitCount[i] = data.startUnits[size-3];
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
		// self.updateTerritoryUI(area, territory);
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
		var color = map.area[area].territories[territory].color;
		console.log(color);
		if( color == null || color == ""){return true;} else{return false;} 
	}
	this.getMiddle = function(area, territory){
		return map.area[area].territories[territory].middle;
	}

	/*************** STARTPHASE ************************/

	this.addHero= function(area, territory){
		console.log(territory);
		console.log(area);
		console.log(map.area[area].territories[territory]);
		if(map.area[area].territories[territory].color == data.players[data.turn].color){
			map.area[area].territories[territory].hero = true;
			return true;
		}else{
			return false;
		}
		
	}
	this.addBase= function(area, territory){
		if(self.isFree(area, territory)){
			// map.area[area].territories[territory].color = data.players[data.turn].color;
			map.area[area].territories[territory].base = true;
			// self.updateTerritoryUI(area, territory);
			return true;
		}else{
			return false;
		}
		
	}
	this.addReinforcement = function(area, territory){
		if(self.isFree(area, territory)){
			map.area[area].territories[territory].color = data.players[data.turn].color;
			map.area[area].territories[territory].units++;
			// self.updateTerritoryUI(area, territory);
			return true;
		}else{
			alert("area is taken");
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
				// self.updateTerritoryUI(area2, territory2);
				if(gameControl.isDefeated(area2, territory2)){return true;}
			//Defender wins
		}else{
			gameControl.removeUnits(area1,territory1,1);
			// self.updateTerritoryUI(area1, territory1);
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
    				if(con.addBase(area,territory)){
    					console.log("Base placed");
    					data.baseCount++;
    					con.addReinforcement(area,territory);
    					data.unitCount[data.turn]--;
    					data.unitsOut++;
    					con.turnComplete();
    				}else{
    					alert("base === true");
    				}
    				if(data.baseCount >= data.playerSize){
    				//Place base if territory dont have a base and finish turn
    				con.nextStartPhase();
    				return;
    			}	},
    			function (con,area,territory) {
    				console.log("click 2");
    				//Player has units left 
    				if(data.unitCount[data.turn] > 0 ){
    					//all areas are busy, add reinforcement on own territory instead of free
    					if(data.unitsOut>=map.mapSize){
    						if(	map.area[area].territories[territory].color == data.players[data.turn].color){
    							map.area[area].territories[territory].units++;
    							// self.updateTerritoryUI(area, territory);
    							data.unitCount[data.turn]--;
    							data.unitsOut++;
    							data.message = messages.deployment + data.unitCount[data.turn];
    							con.turnComplete();
    							if(data.unitsOut>=data.max[data.playerSize-3]){
    								data.turn = 0;
    								con.nextStartPhase();
    							}
    							return;
    						}
    						return;
    					}
    					//add reinforcement on free area
    					else{
    						if(con.addReinforcement(area,territory)){
    							data.unitCount[data.turn]--;
    							data.unitsOut++;
    								data.message = messages.deployment + data.unitCount[data.turn];
    							con.turnComplete();
    							if(data.unitsOut>=data.max[data.playerSize-3]){
    								data.turn = 0;
    								con.nextStartPhase();
    							}
    							return;
    						}
    						return;
    					}
    				}
    				else{
    					con.turnComplete();
    					if(data.unitsOut>=data.max[data.playerSize-3]){
    						data.turn = 0;
    						con.nextStartPhase();
    					}

    					return
    				}
    				

    			}
    			,
    			function (con,area,territory) {
    				console.log("click 3");
    				
    				if(self.addHero(area, territory)){
    					data.heroCount++;
    					con.turnComplete();
    				}
    				if(data.heroCount >= data.playerSize){

    					data.turn = 0;
    					con.nextStartPhase();

    							//Begining of a new turn, player gets reinforcement

    								self.setupTurn();
    								data.startOfTurn=false;
    							
    								activateDone();
    						}
    						return;
    					}

    					];

    					var gameFunctions = [
    			//Deployment function
    			function (area,territory){
    				console.log(data.unitCount);
    				console.log(data.turn);

    				if(data.unitCount[data.turn] > 0){
    					if(	map.area[area].territories[territory].color == data.players[data.turn].color){
    						map.area[area].territories[territory].units++;
    						data.unitCount[data.turn]--;
    						data.unitsOut++;
    						data.message = messages.deployment + data.unitCount[data.turn];
    						return;
    					}
    					alert("You have to place your units on a friendly territory");
    				}else{
    					alert("No reinforcements left, start next phase");
    				}
    			}
    			,
    			//Attack select
    			function (area,territory){
    				selection.isSelected = true;
    				selection.area = area;
    				selection.territory = territory;

    				//Mark terrotiry
    				highlighting.markAsSelected('#' + $(obj[0]).attr('id'));
    				

    			}
    			,
    			//Attack target
    			function (area,territory){
    				//is adjcent
    				//....


    			}
    			,
    			//Achivement
    			function (area,territory){
    			}
    			,
    			//Movement select
    			function (area,territory){

    			},
    			//Movment target
    			function (area,territory){

    			}
    			];
    			this.territoryClick = function(obj){
    				var pos = $(obj[0]).attr('title').split(" ");
    				var area = parseInt(pos[0]);
    				var territory = parseInt(pos[1]);

    				if(self.isStartPhase()){

    					startPhaseFunctions[data.startPhase](self,area,territory);
    					var color = self.getColor(area,territory);
    					console.log(color);
    					if(color !=""){
    						console.log("Changing color");
    						console.log($(obj[0]).attr('id'));
    						highlighting.setTerritoriumColor('#' + $(obj[0]).attr('id'),''+color);
    					}

    				//gamephase
    			}else{

    				//Deployment phase
    				if(data.gamePhase == 0){
    					gameFunctions[data.gamePhase](area,territory);
    				}
    				//Attack phase
    				else if(data.gamePhase == 1){

    					//from

    					//to
    				}
    				else if(data.gamePhase == 2){

    				}
    				else if(data.gamePhase == 2){

    				}
    				
    			}
    			setTimeout(function(){
    				var ctx = $("#boardContainer div canvas")[0].getContext("2d");
    				self.updateTerritoryUI();

    			}, 50);
    			self.updateScorePanel();


    		}
    		this.updateScorePanel = function(){
    			ui.setTurn(self.getCurrentPlayer());
    			ui.setPhase(self.getCurrentPhase());
    			ui.setMessage(self.getCurrentMessage());
    		}
    		this.updateTerritoryUI = function(){

    			for (var i = 0; i < map.area.length; i++) {
    				for (var j = 0; j < map.area[i].territories.length; j++) {
    					var middle = self.getMiddle(i,j);
    					var x = middle[0];
    					var y = middle[1];
    					var units = map.area[i].territories[j].units;
    					var base = map.area[i].territories[j].base;
    					var hero = map.area[i].territories[j].hero;
    					var color = map.area[i].territories[j].color;
    					ui.drawTerritoryStats(x,y,units,base,hero,color);

    				};
    			};


    		};

    		this.setupTurn = function(){
    			data.unitCount[data.turn] += self.countReinforcement();
    			self.setMessage("Reinforcement: " + data.unitCount[data.turn]);
    		}
    		this.countReinforcement = function(){
    			var reinforcement = 0;
    			var bonus = 0;
    			var current = data.players[data.turn].color;
    			//loops planet
    			for (var i = 0; i < map.area.length; i++) {
    				var planetbonus = map.area[i].territories.length;
    				var planet = 0;
    				for (var j = 0; j < map.area[i].territories.length; j++) {
    					var color = map.area[i].territories[j].color;
    					if(color == current){
    						if(map.area[i].territories[j].base){bonus++;}
    						if(map.area[i].territories[j].mineral){bonus++;}
    						bonus++;
    						planet++;
    					}



    				};
    				if(planet == planetbonus){
    					reinforcement += map.area[i].bonus;
    				}

    			};

    			reinforcement += (bonus/3);
    			return reinforcement;
    		}
    		function activateDone(){
    			$("#btnDone").bind('click',function(){
    				self.nextGamePhase();
    				self.updateScorePanel();
    			});
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
	startUnits : [5,25,20,15],
	unitsOut :0,
	max : [5*3,25*4,20*5,15*6],
	message : "",
	startOfTurn : true,
	messages : 
	{
		Deployment : "Reinforcement left: ",

	}



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
			{ name : "Char aleph", color : "", hero : false, units : 0, middle:[89,103], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Glass flats", color : "", hero : false, units : 0 , middle:[183,90], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Burning rift", color : "", hero : false, units : 0 , middle:[168,135], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Death valley", color : "", hero : false, units : 0 , middle:[243,111], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Bone trench", color : "", hero : false, units : 0 , middle:[282,159], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Dauntless plateau", color : "", hero : false, units : 0 , middle:[285,215], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Hells gates", color : "", hero : false, units : 0 , middle:[252,282], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Nydus network", color : "", hero : false, units : 0 , middle:[204,236], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Primary hive cluster", color : "", hero : false, units : 0 , middle:[145,212], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Acid marsh", color : "", hero : false, units : 0 , middle:[93,195], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Eris", color : "", hero : false, units : 0 , middle:[193,318], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Ate", color : "", hero : false, units : 0, middle:[343,264], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] }
			]
		},
		{
			name : "Korhal",
			bonus : 5,
			territories : [
			{ name : "Wolfrec province", color : "", hero : false, units : 0, middle:[395,58], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Keresh province", color : "", hero : false, units : 0 , middle:[465,125], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Augustgrad", color : "", hero : false, units : 0 , middle:[374,143], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Radiated wastes", color : "", hero : false, units : 0 , middle:[319,158], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Ruins of styrling", color : "", hero : false, units : 0 , middle:[386,219], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Ursa", color : "", hero : false, units : 0, middle:[487,233], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Canis", color : "", hero : false, units : 0 , middle:[511,64], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			]

		},
		{
			name : "Aiur",
			bonus : 5,
			territories : [
			{ name : "Saalok", color : "", hero : false, units : 0, middle:[579,142], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Temple of the preservers", color : "", hero : false, units :0 , middle:[572,224], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "The great forum", color : "", hero : false, units : 0 , middle:[602,266], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Antioch province", color : "", hero : false, units : 0, middle:[655,300], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Scion province", color : "", hero : false, units : 0 , middle:[671,254], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Remains of the overmind", color : "", hero : false, units : 0 , middle:[696,217], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Feral hives", color : "", hero : false, units : 0 , middle:[695,170], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},

			{ name : "Velari province", color : "", hero : false, units : 0 , middle:[624,196], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Citadel of the executor", color : "", hero : false, units : 0 , base : false, middle:[643,159], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},

			]
		},
		//3
		{
			name : "Zerus",
			bonus : 2,
			territories : [
			{ name : "The eternal scar", color : "", hero : false, units : 0, base : false, middle:[187,393], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Sun valley", color : "", hero : false, units : 0 , middle:[215,434], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Fulmic highlands", color : "", hero : false, units : 0 , middle:[144,438], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Volatile cleft", color : "", hero : false, units : 0 , middle:[193,484], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]}
			]
		},
		//4
		{
			name : "Mar sara",
			bonus : 3,
			territories : [
			{ name : "Thisby", color : "", hero : false, units : 0, middle:[313,465], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Backwater station", color : "", hero : false, units : 0, base : false , middle:[387,445], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Diamondback wastelands", color : "", hero : false, units : 0, middle:[350,366], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Riksville", color : "", hero : false, units : 0, middle:[452,411], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Jacobs installation", color : "", hero : false, units : 0 , middle:[404,314], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Pyramus", color : "", hero : false, units : 0 , middle:[484,346], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			]
		},
		{
			name : "Shakuras",
			bonus : 2,
			territories : [
			{ name : "Rajal", color : "", hero : false, units : 0, base : false, middle:[559,483], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] },
			{ name : "Katuul province", color : "", hero : false, units : 0 , middle:[581,408], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Talematros", color : "", hero : false, units :0 , middle:[640,372], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}]},
			{ name : "Xelnaga temple grounds", color : "", hero : false, units : 0, middle:[639,446], adjacent : [{area : 0, territory : 1}, {area : 0, territory : 2},{area : 0, territory : 8},{area : 0, territory : 9}] }
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
};



    var areaClick = function(area,id){
    	panel.territoriumPanel(area,id);
    }
    var bindTerritoryClick = function(control){
    	$("#Map area").bind('click',function(){

    		control.territoryClick($(this));
    	        highlighting.setTerritoriumColor()
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
		$('#playboard').maphilight();
	},
	markAsSelected : function(id){
		var data = $(id).data('maphilight')  || {};
		data.fillColor = "FFFFFF";
		data.alwaysOn = true;
		data.stroke = true
		data.strokeColor= 'ff0000';
		data.strokeOpacity= 1;
		data.strokeWidth= 1;
		data.fillOpacity  = 0.7;
		$(id).data('maphilight', data);
		$('#playboard').maphilight();
	}


}
/*var getTerrColor= function(id){

	var pos = $(id).attr('title');
	var pos2 = pos.split(" ");
	return maps[gameData.playerSize-3].area[parseInt(pos2[0])].territories[parseInt(pos2[1])].color;
}*/
 var myGame;
 $(document).ready(function(){

	// panel.startpanel();
	             // jQuery('#ImageMap1').maphilight();
	             // gameLoop();
	             myGame = new risk();
	             myGame.setMap(freemap);
	             myGame.start();

	         });

var messages = {
	deployment : "Reforcements :",
	selectAttack : "Click on a friendly territory to select",
	selectTaget : "Click on an adjcent enemy to attack"
}
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
	 control = new gameControl(data,gamemap);
		panel.startpanel(control);
	};

	this.getData = function(){
		return data;
	}
	this.getControl = function(){
		return control;
	}

}

function test(){
	   myGame = new risk();
	             myGame.setMap(freemap);
	             myGame.start();
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
		$('#titleTurn').text(player.name);
		$('#titleTurn').css('color',"#"+ player.color);
	};
	this.setPhase = function(phase){
		$('#titlePhase').text(phase);
	};
	this.setMessage = function(message){
		$('#infoBox').text(message);
	}

	this.addInfoPanel = function(){
		$("body").append('<div id="scorepanel"></div>');
		// $("#scorepanel").append('<div id="score1"></div>');
		$("#scorepanel").append("<h1 id='titleTurn' class='score'></h1>");
		// $("#scorepanel").append('<div id="score2"></div>');
		$("#scorepanel").append("<h1 id='titlePhase' class='score'></h1>");
		$("#scorepanel").append('<div id="score3"></div>');
		$("#score3").append("<p id='infoBox'class='score'>Some info</p>");


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
	for (var i = 0; i < 42; i++) {
		$("#Map").append($(area1[i]).attr('id','terr' + i));

		// var pos = $("#terr"+i).attr('title');
		// var pos2 = pos.split(" ");
		// var color =  self.control.getColor(parseInt(pos2[0]),parseInt(pos2[1]));
		// highlighting.setTerritoriumColor("#terr"+i,'AAAAAA');

	};
	
	$('#playboard').maphilight();
	// $('img[usemap]').rwdImageMaps();
 /* var $span=$('<span class="map_title">'+"30 Units"+'</span>');        
        $span.css({top: 200+'px', left: 200+'px', color : 'purple', "font-size" : '40px', position:'absolute'});
        $span.appendTo('#boardContainer');*/
    }
    this.setupBoard = function(){

    	this.addInfoPanel();


    	this.addBoard();
    	this.addInputPanel();
	//Create canvas with the device resolution.
	// selfmyCanvas = createHiDPICanvas(800, 540);
	// this.addOverlayCanvas();
}

this.addInputPanel = function(){
	$("body").append('<div id="inputpanel"></div>');
	
	$("#inputpanel").append('<div id="input1"></div>');
	$("#input1").append("<button id='btnDone' class='score' >Done</button>");
}
this.drawTerritoryStats = function(x, y, units,base,hero,color){
	console.log("APPENDING " +base);
// $("#boardContainer").append("<p class='.terrtoryUnits'>"+units+"</p>").css({
// 	'top' :'y',
// 	'left' :'x'
// })

	var ctx = $("#boardContainer div canvas")[0].getContext("2d");
         // var ctx = c;
      // ctx.clearRect ( x-7 , y-22 ,35,35);
      // ctx.fillRect(x-7 , y-22 ,35,35);
      if(base==true){
      	ctx.beginPath();
      	// ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
      	ctx.arc(x+10, y-5, 15, 0, 2 * Math.PI, false);
      	if(color == "" || color ==null){
      		color="ffffff";
      	}
      	ctx.fillStyle = '#'+color;
      	ctx.fill();
      	ctx.lineWidth = 1;
      	ctx.strokeStyle = '#003300';
      	ctx.stroke();
      }

 

      if(hero==true){
      	ctx.fillStyle = '#FFD700';
      }else{
      	      ctx.fillStyle = 'white';
      }
      if(units != 0 || units != null){
           ctx.beginPath();
      ctx.font = "15px Sans-serif"

      ctx.fillText(units, x, y);
            	ctx.lineWidth = 1;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

      }

  }
  this.addOverlayCanvas = function(){
  	$('<canvas>').attr({
  		id: 'overlayCanvas'
  	}).css({
  		width: 800  + 'px',
  		height: 540 + 'px',
  		position : 'absolute',
  	}).appendTo("#boardContainer div");
  }
}
/*var PIXEL_RATIO = (function () {
	var ctx =   $("#myCanvas");
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
	var can =   $("#myCanvas");
	can.width = w * ratio;
	can.height = h * ratio;
	can.style.width = w + "px";
	can.style.height = h + "px";
	can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
	// $(can).attr('id', 'overlayCanvas2');
	return can;
}*/