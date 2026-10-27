'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dbe23a248ea49ead8f562064d7d77226",
"version.json": "505bd70d4ed31f3e24809dceb9d09c98",
"index.html": "31269b7b97e618ac91f33c2bc2786c84",
"/": "31269b7b97e618ac91f33c2bc2786c84",
"main.dart.js": "95b42802d6702b007a17fa580df10e5d",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"og-preview.jpg": "8e1240f037ce97ed241b403800198ebc",
"favicon.png": "da87c6b9582e52c3f77e0247b1f5483c",
"audio/katha_ambience.mp3": "68c26fb6e5e13ad84a17c3389d5f5eb2",
"audio/flute.mp3": "7d2578c53c0e4044300db1a78f5283ad",
"icons/Icon-192.png": "a795126334685b926fd6417a53df11dc",
"icons/Icon-maskable-192.png": "a795126334685b926fd6417a53df11dc",
"icons/Icon-maskable-512.png": "90b8bbff04933a5900875ee6527c9806",
"icons/Icon-512.png": "90b8bbff04933a5900875ee6527c9806",
"manifest.json": "e32b834ad23bba3a1d8f7dc79c18bac3",
".git/config": "d02ad062e614100dddeca6f0eb4e65b2",
".git/objects/0d/d3dd45320a5332f8d16c7f3c8584878a175a09": "51167c41893db3bab529748562fd3d24",
".git/objects/0d/2e8a6b214a299a9154a7e5f9c9aa873afbad4c": "db0b13f66942d5faa3944f89620ce5d9",
".git/objects/0c/79302a25006e6506aa78b7db6cbb503d69b8c1": "d4b8bde68aefc11bad6163b30d7fa9d7",
".git/objects/3e/700e1b6bafd49301a00a6eb76435cade4d0ec7": "652f42387a66e2f800d73c22143a7f64",
".git/objects/50/dfd543ddf44bb5e2abee4bcde69136deacd611": "b999b2c05c099f1948577670beb251a6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/57/aef89532308758f41d9c31175378837f78a74c": "c8fc9b5580c93e8ba14ab6a06bb82e94",
".git/objects/3b/5c3bef8f7aec9ac7cbc3faf42b2694d933528c": "4b940d15a94ff62b171aa3b4f48d3a34",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/9b/5fb19a60249c0d576948ab091439e2dbcbe0a0": "f75a782081fea4418e76c69da97a8225",
".git/objects/04/6ed83d9a287de7b843d836909cabc8a1208a66": "ba42017fa9de94041abdc73d6bc7ee96",
".git/objects/04/b5f4e112af62c4d638d64e7f2d0701882d9478": "3948def6cec3ae2795d1fbf80a9f47ea",
".git/objects/32/3913295ab10bd04226e7f4d16aaa55a19a83cd": "81a22d0e9b8df7da71ec7a691bbff236",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/69/bbb1dc6d7a5654a8e250242ce8359a62a6a7fd": "4224f7686b23840dcfe2a558026db9c3",
".git/objects/51/ba415fbca46522eda2f3022288a744f6fcd9f1": "56e84ef8f2bae482a135468936d48086",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/44d98c4bd4a9988e59900a509f67c95537f1c0": "5758ddd9e4feeca7ae7e569e8cf13042",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/60/8e4077c5dd6b32abf058cdfb41e1cfc5836ac8": "c589bd81c47b3b497dfd05ddc8d82d3d",
".git/objects/5a/f81177c83bb90cc6300cd330d2862e4b0ca0b1": "6bb67ef8311fdb5041a3a2a08b8dad5a",
".git/objects/5a/a8f3306c1064aa5063f253b8ecc6cf420eff3c": "b839d425ed5a513fcfc179a376932468",
".git/objects/9d/f8fbe0ccd38652cdc91109af6b99d0c4912232": "fe53870bb68475b7c04e192103b9cf8a",
".git/objects/9c/b34baba0838687e3a4825888eda53736778a18": "ef3b7ae51ec33613f6cc3bb20d09e02e",
".git/objects/02/c5a553404fb634ba70c587ea40ac3a8b86f529": "1e6a56ee9227a74a7cd26d0892bc0830",
".git/objects/02/ebe5933905b86eadbf4d95d197c9274a50d1c3": "8141a857be649845ec013b5494025080",
".git/objects/b2/ae63f5828fdf5f0a41172d70a5a1cf18313755": "cceb658bcfc5586df853bdb9ce1e4d24",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/e4a85d39ae82c98d2a30e1e178a31946bee333": "2ced35654f8195b32a89d260c7c0e743",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/ec194efcf37c86ac22b1e23b1973787d1d4f2a": "a7bbc3c0fa64577c66521efc990623ba",
".git/objects/bb/28e35c4410e6c440046b43ae991636fb321aa9": "67a76bbccea3789241d55b7d5d7f4645",
".git/objects/bb/7fa7b1026c5cfbdb812f0360983e74b1ea2883": "1935fe19947d00175cf3e43fd8268e77",
".git/objects/bb/faaec57762ee7c1eeb8a710c3a251f7b0fb201": "8768e1261a5250050ae513bf0c69024a",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/ed05748a409f47cd34ae33183faa9cf71bd270": "e3fe47be7524c8294084dfb0b4da37ce",
".git/objects/d0/7a8a4010e667ea7580773f10531959788156cf": "2ef6bd9663a07b26d8814668856933db",
".git/objects/be/cb837407d2e60720655c160e668ee6619e0fe4": "5deafd604f10e99795ff161a2c7db287",
".git/objects/b3/59718ad3440423be43b5a7d1ab73632cb020bb": "828e340d09ccff6a6b8a73645a13e31d",
".git/objects/df/bcfd4477440f0f003d68d0260d0200abc99ec0": "eea8edfb19694430fc3caa9b4108e952",
".git/objects/a5/31ec4694f3c55fdd45a310f934ebdbac962a39": "5ca834661a3b1dd04a09ee42a7374924",
".git/objects/d6/a01b86b1e73d76eab66256d53007cc54aebab1": "89f76b91a663025d03f9d9b476145fa7",
".git/objects/ae/9c3a5f7b7cd91becbc4571a9da4d29b603e946": "4aaa9e647edefb2c6db483bd5a52548d",
".git/objects/e5/f3d260d00955bf55b6ddb9cc67772e862b9a6c": "d22ff65434a0ab7ba272f76df613f755",
".git/objects/e5/8b0b7baae1d6257d5bcef5074519410b2a11be": "2649a461852970925c25d1159e807f96",
".git/objects/e2/430828a73e0b5fc1c8caf4f988cc90b893324c": "2799fe9dd02aab697582c079f24e1cc0",
".git/objects/f4/23b78043a581964adc89e632c2f2c16892f32e": "78421adeefdc0d906d1a69080805eec2",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/bbb14f73536922fb379405c933019e2d045c76": "9dabb84e96e385b0a1d39f25311c943b",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/de4b14ef78ccefb275472996eeda7fee00243d": "5620ec517cb6774d681c1b7eebba9448",
".git/objects/fd/c7fe879f00e257a42a95dd967f11b19d35f126": "14a90d1fb18c91583b600f86e0cdbaab",
".git/objects/f5/825843cac6346038fe089fa3a4d2ed6bdda18a": "5b94284fe10a49c6072fad6ae31544fe",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/6764ed40b470687fa5ede881eeedbfa2305eac": "074a7ce89e4d61fe2c854cde9568152e",
".git/objects/ca/1e2fd1a02a4b8d374b6478771303cd54944f35": "9cb32ce8fc37c6683ed9d15b529cf34c",
".git/objects/ca/526535698603a2e5354c52739fe6ace0ee2ad1": "2ab094b8bdc900982f08be42e44f130f",
".git/objects/e4/4cab35c6c680d029bfdae10af8692478cbcebd": "82f538eb5b1b560973eb5598b9821057",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c1/80959ef4a2a15085e3b386371a5df0bfc26551": "07230ab2d73933a1b8659710f6d9b6e2",
".git/objects/c6/1fe370043ea382a809ca2cc02ca4a50fab23bf": "8b5d6d750423e1a6e2c3d92d37fb2d62",
".git/objects/ec/f639213f328a6a5879f8185201597e90df2aa1": "2268c9ed895b59229e15cdfd3974b7e9",
".git/objects/27/2a68dfbf3a0b1b906104656678de16406af4be": "6fee0200797f9f707cf043fd6d28a49a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/102bed1efd232b29cfd79913694dfa2f469297": "94346a7de6689c2350d838e2110669a3",
".git/objects/11/e71079477189dac0cb18ddab231de3a6ac7897": "e52a8559803dd8bd28322e3578537f94",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/16/743109a84a64d32c4f05fd459f4076c350db9f": "e8b4f04521e0de21e7b1c49f0aabb207",
".git/objects/16/bbd257ab3d2ea8c5c29160887e8fd9d1440204": "fa2d4a6deec86aac71b641e0ec3f5de7",
".git/objects/42/b56ff1e1377bdec4fe3e469e04d3ed2d914638": "f92bf02d3d71ab69e0f5c84274a82f58",
".git/objects/1f/27357972e460cb338a34e127a6c04b6067ad85": "5f7351a6e8849aed8114674d8d5d483d",
".git/objects/80/ca08ff9b9b22796b4c034f01737a82a43c4778": "dd6a140da679010d96ccf08e5ffe7413",
".git/objects/1a/3c9c1f0ad48b7f6635c3fc20aa731b92c45ebb": "cca0b4098d54e49c3253fa47fcd67968",
".git/objects/28/b8f619fdc7bf29dec6fca811a08f8bef0cae68": "a688dddc73e5d3190442f2afb944cc1f",
".git/objects/7b/335badfb9f24f9ee19e0cd71947746477d6d38": "e8b60a9b3ef83ce3d455d4623dfe1bd9",
".git/objects/10/3bff05a8fff6ccaf2eecf2bc04cf4c81bea555": "21d8b057ab8f130d1af833bd9d5c16d4",
".git/objects/19/58b712f42913571f76faf05184388a9debf4f6": "6d93cbaad056fb4dfe7ee6881659cfab",
".git/objects/26/3fedbf88364a2041106adfc44fe48f841cf9a2": "8f66432a23241a9eca419fa25eb4c43a",
".git/objects/26/4bbc3d016223aedb1f32273ff977c5cbe930b7": "fbc6f97d8d9bee5c5753b855f40f7998",
".git/objects/72/a9a6fabc0f539650e39ff0f1c69cb4928a9e3a": "2d89e73ac5f3d6ed176ff9fd1db3feec",
".git/objects/2f/88862e69c92492f6844eed0c243a2574bc3e2f": "86d53a6af148a7698a1868c6f233e35e",
".git/objects/43/69adbb1caafcf79bbdf249f8937a0054a710a1": "defe3e9e0f43ac34f4769897e347c971",
".git/objects/43/d06c6f00e96c1c35ebd675327ac54d0f9d55cb": "9062273bd625f0cacc9f931291184291",
".git/objects/88/081777573bb152d34aa1aa8768857bd6d73d1e": "86f8d6dfb63c80a2d405ec6706ff93f6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/9a/690d5cfd37c69340d74645c1112fae748f8d41": "6a8340e7fc84c42a9b1edd1c233f615f",
".git/objects/9a/3e4b6e4cf398cf7a9b209228cd9ed94ade7533": "8cb5edac9652f71340e34496f15a0e8b",
".git/objects/36/389559949bf7c1e94dff14c706bb5988947671": "6116787edf2eef6c19b7413214b80641",
".git/objects/09/9f43edb0a9bd5e0252bd47f94a34a3f84b26f6": "76c789f60130f8c83ef3dfe3d055191f",
".git/objects/31/97ec61b9baa5f80479dfb83e57fead29445feb": "888ac302228e46ca132809e75d19b8ac",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/98/69825f02417185015e96c4df2e148c59b5463d": "32cb0efab7bdfb3bc196d8e996d11c69",
".git/objects/53/7ac0f2a8ff3bb341374aef0e93d78d4bfcd975": "7d10ffee82b2a1fb1fab329a3084b61e",
".git/objects/30/42524b10d84816777f6c568b1897e0eb8343ff": "b21a3fc03c8e11f4143ea909768b6ff6",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6d/863284707b98eda164cee9bb23107ca8a6ad9a": "2124666e16a2cb60bce7a5308678a205",
".git/objects/06/4b023ff32f561ea7557ee6c1f5d968da9a10ae": "69d72180ea0bfbeed4ab67a0629b0368",
".git/objects/39/6b0720a1c17fc3b1073abe6c420a92ef7edb4d": "591c32518bbd60ceef595bd18aa1ede2",
".git/objects/99/7764a90ad7175c4120e174bc9ca7c77cbba161": "30544e9502bf41292602f931cb80ab81",
".git/objects/52/b55aa429c912d2ace4640b1c8041e7911d32a9": "b3d92db978fadcbcede05c860e4c890a",
".git/objects/63/c3ac2c6c652d45b112b855c50aa98779c3ad8c": "b5c9c27ea9f223255cf1089ed28095f6",
".git/objects/bf/a32527981d0101557c808bffc1192931e16204": "240176aaef673dcc6bfa1ddf23c0b71f",
".git/objects/bf/5de9621da46aadaab990857629a988f7e466e9": "3146ff1afd57f40bd958471daa00a96e",
".git/objects/d3/1d76371f726011783048a418b1c8db36949ccd": "154c739a4c6817c66206f9656f57b968",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/38e5b43a5bf037d0d2e0811412241da572710b": "62e16ee41efc82acacd440d7c7c150b4",
".git/objects/dc/3df8ce49e4d79f977ff3321ef6c35f8d762d34": "13d545c118143f2c56cfc705f98b5f77",
".git/objects/dc/45b0bf556c6e1bafcd26724c9d998b1c827941": "0eb0acdfa7fa324f794030edde87bc90",
".git/objects/d5/133902bd8cae5b4ca50e5c98fd84963814df22": "ad5db593daf9758ef68c8c12d9c58e6d",
".git/objects/af/6b580cc88e843e0eda4ff213d16022c67d21ca": "501ea1e2c83c451df35a99b58b6b7c0b",
".git/objects/a8/067e9c343929147b5d93bea237fb802d5d40bf": "81102eb45fa875bb555570110d413b4b",
".git/objects/de/65ff653fe6693f13c237e0b5a2706c6a259007": "a4a2d36a1cc752af61438454de5e6920",
".git/objects/de/67fb5a4e409aba3803254e481fdc710e879bbe": "bce22433f2e96fcc342711eddb372d42",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ef/9b333ae3dfdc2671cb7eb2fb66e0fb756a5e43": "801db6c9aaa6c92fcc2e17a617dc1e27",
".git/objects/c4/800a755be1260a44636b34f6196095e751fa01": "2773d4d2f29206f7e0eeb27e79dbfe8c",
".git/objects/ea/11d32886df39d07cf2502eed2464d9b2f7e985": "dc85c4fc1dbb4b088cf61029b30a6024",
".git/objects/e1/a7ca8f0b7b25abfbd71390b6ab11d7cf4fcf67": "8d94ec455cb14eb412a87704978cc5c6",
".git/objects/e1/4befbc213c7f156a79ee591cf7561a03fc1071": "9e01e8088358bc7da93c45807726332b",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f9/230988a466ebf3cfb51a312ae57feb7d37f64d": "1a014ed55c002cc5e72c4526f1871f21",
".git/objects/f0/70666cde0e1eee54f4510b91196bc2bca56ff9": "3216020c4fbf3d1ea00d0d8d6ebbad39",
".git/objects/f0/411d3cc62cb585153fd42aea51713eadd6565b": "291c3f885551584dcccc9bc6b91fa846",
".git/objects/f7/40b7577f27f760c5db6f0507145ff0ea0e0d95": "2547dc6be50e720345cfd4acc5cc9e81",
".git/objects/f7/e8372bfbbd72195e76f310c43e5c3cd4d18fd8": "a8a267b2ed642f6b82dd4e1bc8cb3364",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/faa41a2f6c77ad1bf026458ebd4096c75a4536": "73f9b61826a25144652e91740bc8ce45",
".git/objects/e9/988fe8f796f4ad27f62f4a9c1bd389ea945ca0": "d6f4959046c8420123bfe7f1522373dd",
".git/objects/e9/8a6be89af74a4fa7ffed3b3ec928d1e82f0149": "d407593622ed1843d8cf82d2bc65a5bb",
".git/objects/e7/df51f0323a9bdcddea5e84d5bc73198a25613c": "9cfb98d38a00b551ea72142422f31d5c",
".git/objects/f8/fd2a8b6794a02d54cb768d1844133d26e6f44c": "d7bd540dd09c1a536155685ff21cea19",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/dce46a3e0694853f52b51b65f289a1d786439e": "d974bf9da60ab9dc6735ab8fc9467c74",
".git/objects/48/b9455d62a0598f77760eb9c32e8a988c967a09": "8a24dd5314113a934304cedd906bf6f7",
".git/objects/48/c09dcdb582d6da356cef6cd2d2889dac5e45fb": "ef0b3a18a1d9f08fe8a3e3831a2df40e",
".git/objects/4a/949e485067d9114a9994a5a15d3efd2e33bd80": "e22ab7d4931dfd8d5b5f67de881fdee5",
".git/objects/24/fecfd4d6031afb84a62e398fef484ad0ae06b9": "d28e33734570c4971f6a6b0c0a7683f4",
".git/objects/4f/e6e04cc1dbb1c5911b838d00146808ce33fddc": "609b88cee9606df715ed9812b9d79f42",
".git/objects/15/e702752813de6bbaaffbdb71512dda4b683dec": "0c22d8de1730a7fb7acb0a3ff17a5a47",
".git/objects/12/b1e8bfa18b91c3255ec3c402599762135d364a": "c932f074fd5ecd07c59a36451962ba90",
".git/objects/8c/1be18d14d13b96ba6dba91d56cb060316f691e": "ec1c703ad6d658cd62cae0b02ee01203",
".git/objects/85/05ef5bb56deee8461c347901f427e267c86a29": "ee2ab24146b67c1bf3ffb24796819b05",
".git/objects/85/7db965c316b4ba541180682807a421f7858097": "2288fcfa503b439e0b702e73f02a82fb",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/71/3492bf7f6bbd75d8d3ac4ba8e62c96d88d4e76": "8e1e4e94b7a9295306df8dd28fc3c2a9",
".git/objects/71/046c7089eaada786225d47047b891b29bf94f4": "6f8a36a04f196be4f1b36c3eaf74d3c4",
".git/objects/1c/c06016ad43a956df141de8c2cc6be7ddc300dc": "c2dbcca4a4d925dfad0bda3205b9b5a3",
".git/objects/40/de556933317ed9627a0dc2e5262f68a15ecfa9": "35d0d90910228f76fe28239a95a401fe",
".git/objects/2b/940432856195647a95a8bd0f0f04a6a279a000": "acb8229374804c1c07a1b5ffd564d420",
".git/objects/2b/614b1b32586c8fbae7c89486ca74f2ad1eafd2": "c3021e394b52d4feb8c60d14dc910de7",
".git/objects/47/a1716e489c02b533fad2c45e37cf08452a3a8f": "a1b16ac3ff99ab88887dfab0dc40ba8e",
".git/objects/78/f5258699ddd75887930d522ac7f04d0cfd29c2": "3c2288aae256bf7146f54069b8c9d2b2",
".git/objects/7f/8bba4e76ffe605f7df1f2044f443f281cef518": "e7ad1572372c052f34b9aef615b82484",
".git/objects/7f/2ff33230347ba9caea82d9273fa0ea34591e21": "54114a5d255daaa4c1bef0e46e2c5bbf",
".git/objects/7a/5860841a7010eef07edb39428e84602741a08a": "595e32d84affb95fae9b9509281d861a",
".git/objects/14/560014949361492e08c190036e68bc0e6e8921": "73a8a8642506ec86c264cd2d9fe3f353",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8bfb7a1bea89a242a28125028fed457",
".git/logs/refs/heads/main": "238cc49296fe77aa2cc165e59ff096b4",
".git/logs/refs/remotes/origin/main": "8909c0a06881bea5dbc01af5a86abf97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "dcb184638e2e43b310fd3cca1ffc3995",
".git/refs/remotes/origin/main": "dcb184638e2e43b310fd3cca1ffc3995",
".git/index": "95ef2875266f9332e0f82bb40884c13b",
".git/COMMIT_EDITMSG": "52c9089a3484697ba928baf3cd4b7f95",
"assets/patterns/floral-mandala.svg": "43a3477bdae56fee94cd230302c961c5",
"assets/patterns/floral-paisley.svg": "bcec17343fb1ef229ba90f0a455193fc",
"assets/patterns/floral-vine.svg": "0bdec3ec6264d8c1abf3dd7c316dd7c4",
"assets/patterns/floral-marigold.svg": "d378f84856ad5efdbc77180aa5131d6a",
"assets/patterns/floral-jasmine.svg": "6a540f55e8230e95aff5c87789c07dfb",
"assets/patterns/floral-butti.svg": "ccd48986e771fe3495b819a989d8cf8c",
"assets/patterns/floral-royal.svg": "f793c5652c6a0b26427b0e5804e78863",
"assets/patterns/floral-chakra.svg": "fe1c669d26d807aa9fd244e39eb2297d",
"assets/patterns/floral-tulip.svg": "f2fe70b8d644c1f135d02c46b93c6a54",
"assets/patterns/floral-lotus.svg": "42b4091cdb4d314b83e391e735ec120b",
"assets/patterns/floral-dahlia.svg": "55f4a6eefac959c92adf88c3fd143f4b",
"assets/patterns/floral-garland.svg": "1e2a04bcfe73b9758ea9abcb44a74bde",
"assets/images/krishna_peacock_row.jpg": "670399fda85bcb43be575f1e2040b703",
"assets/images/venue_map_preview.jpg": "bf6d39a4a52657ab3c85d2380eb47a48",
"assets/images/hari_ram_bhatt.jpg": "605cc6923f07dff4e610f9986c6c3a68",
"assets/images/krishna_flute_feather.jpg": "ff226a67ab2c7416348869b6fed75471",
"assets/images/krishna_peacock_feather.jpg": "00d823412fbf842e8b2ed7cdcffb72ac",
"assets/images/ancestor_4.jpg": "266747f1382fd3f5b88c840e6ad70eae",
"assets/images/ancestor_3.jpg": "ad9efd0fdfd414d09060418382671359",
"assets/images/godambari_devi.jpg": "9008ad8b664fc3de151bd5a319d9b66e",
"assets/images/krishna_peacock.jpg": "3a68e9f29c9cea0346af7b81973cacaa",
"assets/images/krishna_bansuri_ornament.jpg": "9640342fbf223d5268bf5b915c90b229",
"assets/NOTICES": "25424fbbe53f118a6185992a7d7bff0d",
"assets/audio/katha_ambience.mp3": "68c26fb6e5e13ad84a17c3389d5f5eb2",
"assets/audio/flute.mp3": "7d2578c53c0e4044300db1a78f5283ad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8eb1181a883c45ca9a8bf9fbd796d393",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "280dc317cab3a285a29388990bd1ab3a",
"assets/fonts/MaterialIcons-Regular.otf": "8ae532b442d6136a978d42617b2d6a66",
"assets/assets/patterns/floral-mandala.svg": "43a3477bdae56fee94cd230302c961c5",
"assets/assets/patterns/floral-paisley.svg": "bcec17343fb1ef229ba90f0a455193fc",
"assets/assets/patterns/floral-vine.svg": "0bdec3ec6264d8c1abf3dd7c316dd7c4",
"assets/assets/patterns/floral-marigold.svg": "d378f84856ad5efdbc77180aa5131d6a",
"assets/assets/patterns/floral-jasmine.svg": "6a540f55e8230e95aff5c87789c07dfb",
"assets/assets/patterns/floral-butti.svg": "ccd48986e771fe3495b819a989d8cf8c",
"assets/assets/patterns/floral-royal.svg": "f793c5652c6a0b26427b0e5804e78863",
"assets/assets/patterns/floral-chakra.svg": "fe1c669d26d807aa9fd244e39eb2297d",
"assets/assets/patterns/floral-tulip.svg": "f2fe70b8d644c1f135d02c46b93c6a54",
"assets/assets/patterns/floral-lotus.svg": "42b4091cdb4d314b83e391e735ec120b",
"assets/assets/patterns/floral-dahlia.svg": "55f4a6eefac959c92adf88c3fd143f4b",
"assets/assets/patterns/floral-garland.svg": "1e2a04bcfe73b9758ea9abcb44a74bde",
"assets/assets/images/ganesha.png": "4ec1bb3b7004eba1e12c27e82b0ef453",
"assets/assets/images/nageshwar_prasad_bhatt.jpg": "605cc6923f07dff4e610f9986c6c3a68",
"assets/assets/images/venue_map_preview.jpg": "bf6d39a4a52657ab3c85d2380eb47a48",
"assets/assets/images/ancestor_4.jpg": "266747f1382fd3f5b88c840e6ad70eae",
"assets/assets/images/ancestor_3.jpg": "ad9efd0fdfd414d09060418382671359",
"assets/assets/images/app_logo.png": "6c95e99ce435ed6ccacbc7ab4d5eccee",
"assets/assets/images/godambari_devi.jpg": "9008ad8b664fc3de151bd5a319d9b66e",
"assets/assets/images/panditji.png": "f407f225d49409aaf7c76c39287c8257",
"assets/assets/audio/katha_ambience.mp3": "68c26fb6e5e13ad84a17c3389d5f5eb2",
"assets/assets/audio/flute.mp3": "7d2578c53c0e4044300db1a78f5283ad",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
