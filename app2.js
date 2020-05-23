var mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://add2kart:coltismyname@cluster0-zntgd.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

var categorySchema = new mongoose.Schema({
    row: Number,
	col: Number,
	elements: Array
});

//------------------------------------------------MODEL
var Category = mongoose.model("Category", categorySchema);

page = new Array(5);
page[0] = new Array(4);
page[1] = new Array(4);
page[2] = new Array(4);
page[3] = new Array(4);
page[4] = new Array(4);
//INITIALISED page array (2-D)

//-------------------------------------------------------------------ROW 1


var names = ["Kraasa Reusable Washable Face Mask germ protection KMSK0006-Black", "InOne N95 Face Masks with Elastic Ear Loop Breatha…e for Blocking Dust Air Pollution Dust Protection", "Wildcraft HypaShield reusable outdoor protection mask 12536-Black", "Wildcraft HypaShield reusable outdoor protection mask 12535-Black", "Wildcraft HypaShield reusable outdoor protection mask 12538", "Allen Solly AHMSCRGP852209", "Louis Philippe Mens PMSMRGF883728", "Louis Philippe Men's 3 Ply LPMSMRGFV21974", "Louis Philippe Mens LPMSMRGFX03699", "Van Heusen VHMSORGP065132", "Van Heusen VHMSBRGPH53287", "Van Heusen VWMSFRGHN52055", "SKC FM01", "Birde CN95 Anti Pollution Dust Proof Mask- Pack of 25", "Young Trendz Anti-Pollution -Virus Saftey -Bike Rider -Cotton Mask (Pack of 3) MASK-03", "Young Trendz Anti-Pollution -Virus Saftey -Bike Rider -Cotton Mask (Pack of 2)", "Bizarro.in P-MASK-BLK-ST10-006 Anti Pollution Breathable Pack of 10", "OROMASK N95 Organic Blue O2", "Anweshas Pack of 5 Pieces Face Cotton Mask With Ea… Anti-dust Anti-Pollution Flu and Personal Health", "Dreamcase Cotton Fabric Washable Mask black 2 M-C-2PCS-1", "Young Trendz Mask (Pack of 5)", "Bizarro.in P-MASK-BLK-ST20-011 Anti Pollution Breathable Pack of 20", "Young Trendz Anti-Pollution -Virus Saftey -Bike Rider -Cotton Mask (Pack of 1)", "Birde CN95 Anti Pollution Dust Proof Mask- Pack of 5", "SKC 2", "Vocado Reusable Anti-dust Anti-Pollution Masks Res…Piece) Unisex Reusable Pollution Mask Black Set 9", "Shop At Bargain Anti pollution & virus protection face mask FACEMASK_5PCS", "Comfy Care HALF DR BLACK 01 TEETH PRINT", "Herbal Aid Reusable And Washable Pollution and Gas Mask MM-145", "Birde CN95 Pollution Dust Proof Mask Respirator- Pack of 10", "Herbal Aid Half Black Face Mask Pack of 3 Black Half Face Mask For Men And Women - Pack Of 3 Mask", "Bizarro.in P-MASK-BLK-ST1-001 Anti Pollution Breathable Pack of 01", "DvineAutoFashionZ Reusable and Washable Anti-Pollution Dust Unisex Mouth Mask Black Set 9 HAPMB4120", "PKKART PK-001-PACK OF 20", "oromask O2 DESIGNER", "RTS pollution mask Air-purifying mask", "QTSY Mask_6 Comfy Dust Cotton Mouth Nose Cover Mas…n Mouth Nose Cover For Bikers Anti-pollution Mask", "Nino Bambino 100% Organic Cotton NBMASK00MX177", "kiros Mouth Nose Cover For Tvs Star City Anti-pollution Mask (Black, Pack of 1)", "PKKART Mask_001"];
var prices = ["₹299", "₹299", "₹879", "₹539", "₹1,189", "₹499", "₹599", "₹599", "₹599", "₹495", "₹499", "₹499", "₹149", "₹464", "₹249", "₹179", "₹349", "₹499", "₹219", "₹199", "₹379", "₹579", "₹129", "₹164", "₹189", "₹246", "₹174", "₹135", "₹289", "₹239", "₹145", "₹139", "₹299", "₹549", "₹499", "₹119", "₹248", "₹299", "₹109", "₹199"];
var ratings = ["4.2", "4.1", "4.2", "4.4", "4.3", "3.4", "3.6", "3.6", "3.6", "3.6", "3.8", "4", "3", "3.6", "4.4", "3.6", "3.7", "3.7", "3.2", "3.8", "4.6", "3.7", "3.1", "3.4", "3.9", "3.7", "3.6", "3.8", "3.3", "4.1", "4.1", "4.1", "4.1", "4.1", "4.1", "4.1", "4.1", "4.1", "4.1", "4.1"];
var noOfRatings = ["(2,882)", "(15,076)", "(1,062)", "(77)", "(82)", "(342)", "(192)", "(2,512)", "(2,850)", "(2,689)", "(27)", "(137)", "(152)", "(1,414)", "(5)", "(495)", "(412)", "(517)", "(631)", "(20)", "(5)", "(79)", "(77)", "(54)", "(89)", "(230)", "(443)", "(6)", "(441)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)"];
var images = 
["https://rukminim1.flixcart.com/image/612/612/k9yjb0w0/mask-respirator/z/8/y/kmsk0006-black-kraasa-original-imafrnaayjzmdytx.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9yjb0w0/mask-respirator/u/c/y/n95-face-masks-with-elastic-ear-loop-breathable-and-comfortable-original-imafrmxvehscbgva.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k8ot7rk0/mask-respirator/f/z/n/12536-black-wildcraft-original-imafqn9ubgjuwvdf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k8ot7rk0/mask-respirator/5/z/v/12535-black-wildcraft-original-imafqn9utzg2grup.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k8ot7rk0/mask-respirator/g/9/f/12538-black-wildcraft-original-imafqn9uv95kfv53.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9k8wi80/mask-respirator/h/n/r/ahmscrgp852209-allen-solly-original-imafrbwymwt5hky8.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9pynww0/mask-respirator/6/b/z/pmsmrgf883728-louis-philippe-original-imafrfyqzzzgguay.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9vofbk0/mask-respirator/c/u/c/lpmsmrgfv21974-louis-philippe-original-imafrkhfeetjgrzk.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9k8wi80/mask-respirator/y/j/m/lpmsmrgfx03699-louis-philippe-original-imafrbr3m7dcatkf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9k8wi80/mask-respirator/r/k/c/vhmsorgp065132-van-heusen-original-imafrbr3psc6as43.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9u8zgw0/mask-respirator/2/k/j/vhmsbrgph53287-van-heusen-original-imafrjnfytwdxfka.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9u8zgw0/mask-respirator/4/q/m/vwmsfrghn52055-van-heusen-original-imafrjnfvh8hddyp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jr2dpjk0/mask-respirator/k/w/j/set-of-4-pcs-anti-pollution-driving-protection-reusable-dust-original-imaezbbqjfunf5na.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ka492fk0/mask-respirator/c/d/6/cn95-anti-pollution-dust-proof-mask-pack-of-25-birde-original-imafrrhy567rp455.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7gikcw0/mask-respirator/q/v/h/mask-03-young-trendz-original-imafpznzzfggcxhm.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7gikcw0/mask-respirator/w/2/y/anti-pollution-virus-saftey-bike-rider-cotton-mask-pack-of-2-original-imafpzbwpqthqyzq.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7hy07k0/mask-respirator/p/a/k/anti-pollution-breathable-pack-of-10-bizarro-in-original-imafppkphyzevrgs.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jnm2efk0/mask-respirator/n/d/a/o2-oromask-original-imafa8gytqwzhjcp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7f34i80/mask-respirator/h/a/c/pack-of-5-pieces-face-cotton-mask-with-ear-loop-for-virus-original-imafpn4u8hy4hgpf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ka492fk0/mask-respirator/x/8/h/m-c-2pcs-1-dreamcase-original-imafrrgzfgcz6yhh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7gikcw0/mask-respirator/n/e/9/mask-pack-of-5-young-trendz-original-imafpzytdsxdkxfy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7hy07k0/mask-respirator/z/z/f/anti-pollution-breathable-pack-of-20-bizarro-in-original-imafppkpyg8xybpn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7gikcw0/mask-respirator/r/b/b/anti-pollution-virus-saftey-bike-rider-cotton-mask-pack-of-1-original-imafpzbwkyj2x9dp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ka492fk0/mask-respirator/3/u/z/cn95-anti-pollution-dust-proof-mask-pack-of-5-birde-original-imafrrhytrxrga4p.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jy90eq80/mask-respirator/a/n/m/set-of-6-pcs-driving-protection-anti-pollution-face-mask-black-original-imaezbbymz47ac24.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5cs87k0/mask-respirator/v/z/b/hapmb4120-dvineautofashionz-original-imafhgehjnemvz4j.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/mask-respirator/m/g/u/facemask-5pcs-shop-at-bargain-original-imafpwc89c29z6tr.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7285u80/mask-respirator/d/3/r/half-dr-black-01-teeth-print-comfy-care-original-imafpd5mhdz6jrj2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6pd7680/mask-respirator/z/5/x/nc-06-fashion-flora-original-imafp3z8ywjbccxj.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ka5oia80/mask-respirator/3/e/f/cn95-pollution-dust-proof-mask-respirator-pack-of-10-birde-original-imafrs4qtkyqbah3.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k2m6ufk0/mask/t/3/9/003-free-size-maharishia-original-imafghz7hhspjfrc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7hy07k0/mask-respirator/d/8/g/anti-pollution-breathable-pack-of-01-bizarro-in-original-imafppkpbhcwhhyc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5cs87k0/mask-respirator/v/z/b/hapmb4120-dvineautofashionz-original-imafhgehjnemvz4j.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9d3p8w0/mask-respirator/z/a/a/mask-001-pkkart-original-imafr6e9ckds5vtx.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jqcns7k0/mask-respirator/q/p/u/o2-designer-oromask-original-imafcah3m6qqbkay.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvzkb680/mask-respirator/k/4/3/1-pcs-mask-for-bikers-pollution-travallers-constraction-mj-original-imafc3v3zu8mdv6x.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k1b1bbk0/mask-respirator/f/a/d/mask-6-eliq-original-imafktwbwhehyvux.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7hy07k0/mask-respirator/p/b/u/nbmask00mx177-nino-bambino-original-imafppzgruznz93s.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jtvtz0w0/mask-respirator/z/h/5/mouth-nose-cover-for-tvs-star-city-anti-pollution-mask-black-original-imafeqe4zzfcm6gp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9d3p8w0/mask-respirator/z/a/a/mask-001-pkkart-original-imafr6e9wpxtusuz.jpeg?q=70"];

var page1=[];
for(var i=0;i<40;i++)
{
    var item={title: names[i],
        rating: ratings[i],
        noOfRating: noOfRatings[i],
        price: prices[i],
        image: images[i]
        }
    page1.push(item);
}
page[1][0] = page1;



names = ["Parachute Advansed Gold Coconut  Hair Oil", "Parachute Advansed Jasmine Coconut  Hair Oil", "WOW Skin Science Red Onion Black Seed Oil Shampoo with Red Onion Seed Oil Extract Men & Women", "Parachute Coconut Hair Oil", "L'Oreal Paris Total Repair 5 Shampoo and Conditioner", "Set Wet Ultimate Hold Hair Gel", "Mamaearth Onion Oil for Hair Regrowth & Hair Fall Control Hair Oil", "Head & Shoulders Smooth & Silky Shampoo Men & Women", "Beardo Strong Hold Wax Hair Wax", "L'Oreal Paris 3X Anti-Hairfall Shampoo and Conditioner", "Head & Shoulders Anti-Hairfall Shampoo Men & Women", "L'Oreal Paris Extraordinary Clay Shampoo and Conditioner", "Kesh King Scalp and Medicinal Ayurvedic Hair Oil", "Vegetal Soft Black ( 150 gm × 3 ) Hair Color", "Parachute Advansed Men Classic Aftershower Hair Cream", "Livon Hair Serum", "Biotique Bio Mountain Ebony vitalizing serum for falling hair", "L'Oreal Paris Excellence Creme Hair Color", "L'Oreal Paris Smooth Intense Instant Smoothing Serum", "Vegetal Soft Black ( 150 gm ×2 ) Hair Color", "Parachute Pure Coconut Hair Oil", "Head & Shoulders Cool Menthol Shampoo Men & Women", "L'Oreal Paris Total Repair 5 Combo - Shampoo, Conditioner and Serum", "Mystiq Living Combo - Onion Black Seed & Castor Oil (Pack of 2 ) - 200 ml each Hair Oil", "Parachute Advansed Ayurvedic Hot-Oil Hair Oil", "Mamaearth 'Onion Hair Fall Shampoo for Hair Growth…with Onion Oil & Plant Keratin 250ml' Men & Women", "Beardo Hair Serum", "Indulekha Bhringa Hair Oil", "Himalaya Anti Hair Fall Shampoo Men & Women", "Head & Shoulders Silky Black Shampoo 340 ml Men & Women", "Dove Hair Fall Rescue Conditioner", "Livon Hair Gain Tonic for Men, 150 ml Each (Pack of 2) With Elmask Derma Roller", "L'Oreal Paris Excellence Creme Hair Color", "Kesh King Ayurvedic Scal & Hair Shampoo Men & Women", "Mamaearth 100% Pure Castor Oil, Cold Pressed, To Support Hair Growth Hair Oil", "L'Oreal Paris Total Repair 5 Smoothening And Repairing Serum", "Pantene Hair Fall Control Shampoo Men & Women", "TRESemme Keratin Smooth Shampoo and Conditioner Plus Philips Hair Dryer", "Navratna Ayurvedic Cool Hair Oil", "Set Wet Cool Hold Hair Gel"]; 
prices = ["₹180", "₹175", "₹399", "₹349", "₹348", "₹85", "₹383", "₹427", "₹235", "₹360", "₹455", "₹360", "₹256", "₹1,900", "₹168", "₹105", "₹185", "₹459", "₹175", "₹1,297", "₹250", "₹450", "₹692", "₹549", "₹218", "₹335", "₹251", "₹387", "₹207", "₹245", "₹190", "₹2,897", "₹459", "₹337", "₹287", "₹120", "₹220", "₹1,203", "₹162", "₹74"];
ratings = ["4.4", "4.4", "4.2", "4.4", "4.4", "4.3", "4.1", "4.4", "4.2", "4.3", "4.4", "4.4", "4.3", "4.5", "4.3", "4.4", "4.1", "4.4", "4.3", "4.5", "4.4", "4.4", "4.3", "4.3", "4.4", "4.1", "4.2", "4", "4.3", "4.4", "4.4", "4.2", "4.4", "4.5", "4.3", "4.2", "4.3", "4.4", "4.5", "4.2"];
noOfRatings = ["(4,744)", "(2,843)", "(12,678)", "(52,521)", "(3,833)", "(12,666)", "(7,339)", "(58,392)", "(67,076)", "(1,694)", "(13,526)", "(1,190)", "(1,914)", "(16)", "(6,978)", "(43,314)", "(42,194)", "(4,893)", "(14,562)", "(33)", "(52,521)", "(28,664)", "(2,578)", "(14)", "(3,039)", "(6,543)", "(14,810)", "(54,444)", "(33,054)", "(211)", "(12,748)", "(732)", "(3,835)", "(137)", "(1,467)", "(7,290)", "(21,281)", "(5,310)", "(1,600)", "(5,535)"];
images = 
["https://rukminim1.flixcart.com/image/612/612/k0plpjk0/hair-oil/5/q/h/400-gold-coconut-hair-oil-parachute-advansed-original-imafkg5wmwy5ybwy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k65d18w0/hair-oil/7/c/h/490-jasmine-coconut-hair-oil-parachute-advansed-original-imafzz4d7hdpprar.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k3erngw0/shampoo/7/j/3/300-red-onion-black-seed-oil-shampoo-with-red-onion-seed-oil-original-imafmjbgxatemz7z.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jhavdzk0/hair-oil/g/k/g/1-pure-coconut-parachute-original-imaf5cjhuvj87zdy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k1dw70w0/combo-kit/b/j/g/total-repair-5-shampoo-and-conditioner-combo-l-oreal-paris-original-imafkey2ecukkwkd.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvv9zm80/hair-styling/m/y/y/hair-gel-250-ultimate-hold-set-wet-original-imaffvhr2hp3j8gh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyrl4sw0/hair-oil/g/e/2/150-onion-oil-for-hair-regrowth-hair-fall-control-mamaearth-original-imafgvfrf6ahxqvy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyq5oy80/shampoo/f/s/5/650-smooth-silky-shampoo-650-ml-head-shoulders-original-imafgwg7ghehfdja.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/hair-styling/d/u/d/beardo-75-strong-hold-wax-original-imaeztcfxd4ru98h.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k1dw70w0/combo-kit/j/9/p/3x-anti-hairfall-shampoo-and-conditioner-combo-l-oreal-paris-original-imafkey3pzxzwhsv.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyq5oy80/shampoo/u/2/d/650-anti-hair-fall-shampoo-650-ml-head-shoulders-original-imafgwytdxwetgft.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k1dw70w0/combo-kit/2/g/g/extraordinary-clay-shampoo-and-conditioner-combo-l-oreal-paris-original-imafkey3ehfzrm9k.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jwtkk280/hair-oil/h/g/h/300-scalp-and-hair-medicine-oil-300-ml-kesh-king-original-imafhf6qgxbkbh4k.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jlqwpe80-1/hair-color/d/q/h/soft-black-150-gm-3-vegetal-original-imaf8syhhkwuuuyv.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jdvziq80/hair-styling/g/s/w/300-hair-cream-classic-parachute-advansed-men-original-imafyt6twbxmptzm.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/hair-serum/e/z/7/livon-50-silky-potion-detangling-hair-fluid-original-imaeb9d3ppw4akg4.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jgcktjk0/hair-serum/p/k/y/120-bio-mountain-ebony-vitalizing-serum-for-falling-hair-original-imaf4huryqp5m83h.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyrl4sw0/hair-color/r/v/a/excellence-creme-l-oreal-paris-original-imafgxg7ggngzzbv.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k2p1q4w0/hair-serum/4/a/g/100-smooth-intense-instant-smoothing-serum-l-oreal-paris-original-imafhzg9p4au2uuz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jlsc58w0/hair-color/f/t/m/soft-black-150-gm-2-vegetal-original-imaf8rzvbfz2n5hw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jmgmmq80/hair-oil/x/f/4/600-pure-coconut-parachute-original-imaf9cw5gh3yeenk.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyq5oy80/shampoo/n/2/z/650-cool-menthol-shampoo-650-ml-head-shoulders-original-imafgwfx4tedq2sy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k1dw70w0/combo-kit/3/g/t/total-repair-5-combo-shampoo-conditioner-and-serum-hestr640-l-original-imafkywc6pehahv2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5msb680/hair-oil/r/c/a/400-combo-onion-black-seed-castor-oil-pack-of-2-200-ml-each-original-imafz9u9fdqa9sfy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k65d18w0/hair-oil/e/r/v/490-ayurvedic-hot-oil-parachute-advansed-original-imafzz4d7gdcfw7y.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jz8qf0w0/shampoo/f/x/y/250-onion-hair-fall-shampoo-for-hair-growth-hair-fall-control-original-imafjay7g3tu5rkp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j2nlwnk0/hair-serum/m/a/p/50-hair-serum-fight-greying-beardo-original-imaetxgn2rqfzkfz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jjq18y80/hair-oil/z/8/p/100-bhringa-indulekha-original-imaf78cbvdgqvyzz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyt0knk0/shampoo/z/f/d/400-anti-hair-fall-shampoo-himalaya-original-imafgwa7sfrfbvbg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jzu60sw0/shampoo/f/g/9/340-silky-black-shampoo-340-ml-head-shoulders-original-imafjrz8f3kvsaxj.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jv5k2a80/conditioner/8/f/q/180-hair-fall-rescue-conditioner-dove-original-imafg486waurgs4z.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0wqwsw0/hair-serum/f/r/x/300-for-men-150-ml-each-pack-of-2-with-elmask-derma-roller-livon-original-imafkhn9ghrpkyzd.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyrl4sw0/hair-color/z/e/3/excellence-creme-l-oreal-paris-original-imaf78d6zgveuev6.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4irzbk0/shampoo/3/k/c/600-ayurvedic-scal-hair-shampoo-kesh-king-original-imafnes5a6wfxam5.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0y6cnk0/hair-oil/n/n/f/150-100-pure-castor-oil-cold-pressed-to-support-hair-growth-original-imafkm2ns3y4nr4n.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0463rk0/hair-serum/4/9/f/40-total-repair-5-smoothening-and-repairing-serum-l-oreal-paris-original-imafjzaa8t4quarh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0y6cnk0/shampoo/a/u/p/340-hair-fall-control-shampoo-pantene-original-imafkmhqfthtexkd.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jkim1zk0/combo-kit/k/r/f/keratin-smooth-shampoo-and-conditioner-plus-philips-hair-dryer-original-imaf7uewr5csxmsy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jwtkk280/hair-oil/7/h/c/300-cool-hair-oil-300ml-navratna-original-imafhf6qgwggrege.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/juu4jgw0/hair-styling/u/h/d/hair-gel-100-cool-hold-set-wet-original-imaffvhwjhpagpbs.jpeg?q=70"]
page1=[];
for(var i=0;i<40;i++)
{
    var item={title: names[i],
        rating: ratings[i],
        noOfRating: noOfRatings[i],
        price: prices[i],
        image: images[i]
        }
    page1.push(item);
}
page[1][1] = page1;







names = ["Himalaya PureHands - Orange Hand Sanitizer Bottle", "Olay Natural White Glowing Fairness Cream DAY SPF 24", "Lifebuoy Total Sanitizer Hand Sanitizer Pump Dispenser", "Neutrogena Ultra Sheer Sunblock Cream - SPF 50 PA+++", "Lifebuoy Total  Hand Sanitizer Bottle", "LOTUS HERBALS White Glow Day And Night Pack", "Parachute Deep Nourish Body Lotion", "GARNIER MEN Oil Clear Deep Cleansing Icy Facewash, Pack of 2 Face Wash", "Garnier Skin Naturals Light Complete Combo - Facewash and Serum Cream SPF 19", "Clean & Clear Oil-Free Foaming Face Wash", "NIVEA Soft Moisturizing Cream", "Neutrogena Ultra Sheer Dry - Touch Sunblock - SPF 50 PA+++", "Himalaya Purifying Neem Face Wash", "Kaya Intense Clarity System Kit", "Biotique Bio Cucumber Pore Tightening Toner Men & Women", "NIVEA Body Milk Nourishing Body Lotion 400ml & 120 ml - Pack of 2", "Plum Green Tea Renewed Clarity Night Gel", "Lakme Sun Expert Ultra Matte Lotion - SPF 30 PA++", "Himalaya Purifying Neem  Face Wash", "Kaya Face Cleanser for Sensitive Skin", "Biotique Bio Wheat Germ Nourishing Night Cream", "Mamaearth 'Skin Illuminate Vitamin C Serum For Rad…Skin with High Potency Vitamin C & Turmeric 30 g'", "Biotique Dandelion Ageless Serum", "Kaya youth Hydro Replenish Face Wash", "NIVEA Body Lotion, Aloe Hydration", "Mamaearth Tea Tree Natural Face Wash for Acne & Pi… Normal & Dry Skin - SLS & Paraben Free Face Wash", "NIVEA MEN Dark Spot Reduction Creme", "Mamaearth Ubtan Face Pack Mask with Saffron, Turmeric & Apricot Oil, 100 ml", "Biotique Bio Neem Purifying Face Wash", "Kaya Youth Hydro Replenish Men & Women", "Biotique Bio Honey Gel Cleanser", "NIVEA Nourishing Body Milk Lotion & Oil in Lotion Cocoa Nourish Body Lotion", "Mamaearth Ubtan Natural Face Wash for Dry Skin wit… brightning 100 ml - SLS & Paraben Free Face Wash", "Kaya Youth Oxy-Infusion Face Serum", "Biotique Bio Papaya Scrub Wash Face Wash", "Vaseline Intensive Care Deep Restore Body Lotion", "Olay Natural White Instant glowing Fairness", "Mediker Instantly Kills 99.9% Germs Without Water Hand Sanitizer Bottle", "Biotique Bio Sandalwood Face & Body Lotion - SPF 50 PA+", "Kaya Pigmentation Reducing Complex"];
prices = ["₹250", "₹356", "₹250", "₹189", "₹250", "₹692", "₹163", "₹306", "₹276", "₹279", "₹123", "₹510", "₹329", "₹1,940", "₹175", "₹348", "₹518", "₹199", "₹145", "₹640", "₹230", "₹575", "₹230", "₹169", "₹363", "₹239", "₹135", "₹479", "₹135", "₹319", "₹149", "₹356", "₹239", "₹399", "₹270", "₹150", "₹180", "₹237", "₹200", "₹1,044"];
ratings = ["4.3", "4.2", "4.5", "4.2", "4.4", "4.3", "4.3", "4.4", "4.4", "4.5", "4.4", "4.3", "4.4", "4.2", "4.2", "4.4", "4.3", "4.2", "4.4", "4.1", "4.2", "4.1", "4.1", "4.4", "4.6", "4.2", "4.2", "4.2", "4.3", "4", "4.3", "4.5", "4.1", "4.8", "4.3", "4.4", "4.2", "4.5", "4.1", "3.8"];
noOfRatings = ["(10,020)", "(9,412)", "(15,150)", "(33,869)", "(19,602)", "(19,257)", "(17,298)", "(1,10,124)", "(661)", "(9,285)", "(12,921)", "(7,079)", "(58,083)", "(175)", "(54,053)", "(23,415)", "(9,032)", "(4,228)", "(81,516)", "(232)", "(16,012)", "(1,744)", "(21,592)", "(83)", "(319)", "(3,747)", "(15,013)", "(3,105)", "(17,916)", "(5)", "(14,082)", "(5,103)", "(7,393)", "(169)", "(5,586)", "(97,467)", "(13,474)", "(3,740)", "(6,483)", "(1,798)"];
images = 
["https://rukminim1.flixcart.com/image/612/612/k933ma80/hand-wash-sanitizer/z/a/j/500-purehands-orange-pump-dispenser-himalaya-original-imafqyh35f7qznz9.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jg2kqkw0/moisturizer-cream/2/k/q/50-natural-white-glowing-fairness-cream-day-spf-24-olay-original-imaffkf7zvrkwrtc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k8ro3gw0/hand-wash-sanitizer/t/w/p/500-total-sanitizer-pump-dispenser-lifebuoy-original-imafqpcsxg3fz8xc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jw0zr0w0/sunscreen/2/m/d/30-ultra-sheer-sunblock-cream-50-neutrogena-original-imafgszc7vhxmgpn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k8ro3gw0/hand-wash-sanitizer/f/g/2/500-total-hand-sanitizer-bottle-lifebuoy-original-imafqpcsnxfb7qxr.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/combo-kit/d/z/h/lh-03-15-lotus-white-glow-day-and-night-pack-original-imaejj464pzh9nhb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/juu4jgw0/moisturizer-cream/r/s/j/400-deep-nourish-body-lotion-lotion-parachute-original-imaffvhshc6thynp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jv2p6kw0/face-wash/y/h/w/200-oil-clear-deep-cleansing-icy-facewash-pack-of-2-garnier-original-imafg244mjtyct4b.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k1dw70w0/combo-kit/q/s/a/skin-naturals-light-complete-combo-facewash-and-serum-cream-spf-original-imafkywchtmrmtcc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k98tdow0/face-wash/5/s/f/300-oil-free-foaming-clean-clear-original-imafr2pxzzjvzjyt.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jtbtt3k0/moisturizer-cream/a/a/n/100-soft-light-moisturiser-nivea-cream-original-imafeph8pdjjxjzy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jw0zr0w0/sunscreen/j/z/h/88-ultra-sheer-dry-touch-sunblock-50-neutrogena-original-imafgszcvqyfzy8z.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jlv70y80/face-wash/k/9/p/400-purifying-neem-himalaya-original-imaf8hadxujyh57c.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jgqv8280/combo-kit/m/p/4/intense-clarity-system-kit-707922-kaya-original-imaf4wvgmh9nrhst.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jq4353k0/toner/6/9/f/120-bio-cucumber-pore-tightening-toner-biotique-original-imafc79rymdn3rfc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jm81zm80/moisturizer-cream/z/d/g/520-body-milk-nourishing-body-lotion-400ml-120-ml-pack-of-2-original-imaf96axt6bjhxff.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j8osu4w0-1/moisturizer-cream/r/p/g/50-green-tea-renewed-clarity-night-gel-50ml-plum-original-imaeymdnrbrvdg3z.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jesunbk0/sunscreen/j/u/v/50-sun-expert-ultra-matte-lotion-30-lakme-original-imaeukpugygt7pwt.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j3xbzww0/face-wash/4/4/s/150-purifying-neem-face-wash-himalaya-original-imaeuyfzgdmythzw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jsdj8nk0/cleanser/z/z/u/200-face-cleanser-for-sensitive-skin-kaya-original-imafdymq9hgcfydb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jq2np8w0/anti-ageing/2/p/p/50-bio-wheat-germ-nourishing-night-cream-biotique-original-imafc64fxzrhcw3g.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k44hksw0/fairness/k/f/h/30-skin-illuminate-vitamin-c-serum-for-radiant-skin-with-high-original-imafn32efghghgks.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jq4353k0/anti-ageing/t/h/m/40-dandelion-ageless-serum-biotique-original-imafc74xdybfsfbw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6tniq80/face-wash/u/z/r/100-hydro-replenish-kaya-youth-original-imafp78h6d6chzdh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5lcvbk0/moisturizer-cream/9/w/g/600-body-lotion-aloe-hydration-for-normal-skin-nivea-lotion-original-imafz8jb3ftt8gf9.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyvvgcw0/face-wash/f/h/d/100-tea-tree-natural-face-wash-for-acne-pimples-wash-100-ml-for-original-imaffh47pd2bd6ur.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jtbtt3k0/fairness/r/t/u/75-dark-spot-reduction-creme-nivea-men-original-imafeph8zndszhk9.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jusp3m80/face-pack/f/f/c/100-ubtan-face-pack-mask-with-saffron-turmeric-apricot-oil-100-original-imaffu2fmbwdc6xt.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jq2np8w0/face-wash/x/e/b/150-bio-neem-purifying-biotique-original-imafc6ygcppf4sww.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6tniq80/toner/d/z/3/100-hydro-replenish-kaya-youth-original-imafp78hvzsgmsby.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jq2np8w0/cleanser/q/a/w/120-bio-honey-gel-cleanser-biotique-original-imafc646de6zbyrg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k20r8nk0/moisturizer-cream/h/m/4/520-nourishing-body-milk-lotion-oil-in-lotion-cocoa-nourish-body-original-imafhghqyvv9sdrz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/juyev0w0/face-wash/d/z/h/100-ubtan-natural-face-wash-for-dry-skin-with-turmeric-saffron-original-imaff5vydz3zuhh3.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k226oi80/moisturizer-cream/d/6/h/50-oxy-infusion-face-serum-kaya-youth-serum-original-imafhh8ch9kykkhz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvv9zm80/face-wash/7/u/h/200-bio-papaya-scrub-wash-biotique-original-imafftfp2gxea4nm.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k070zgw0/moisturizer-cream/y/f/q/200-intensive-care-deep-restore-body-lotion-vaseline-lotion-original-imafkfm7pyhjccdh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jg2kqkw0/moisturizer-cream/y/b/z/40-natural-white-instant-glowing-fairness-olay-original-imaffkf6nmfc43fy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ka492fk0/hand-wash-sanitizer/t/z/u/500-instantly-kills-99-9-germs-without-water-bottle-mediker-original-imafrr8zqz2fwqnz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4irzbk0/sunscreen/w/z/x/50-bio-sandalwood-face-body-lotion-50-biotique-original-imafndercednvffp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jsdj8nk0/face-treatment/g/h/a/30-pigmentation-reducing-complex-kaya-original-imafdymqeetzea8r.jpeg?q=70"];

page1=[];
for(var i=0;i<40;i++)
{
    var item={title: names[i],
        rating: ratings[i],
        noOfRating: noOfRatings[i],
        price: prices[i],
        image: images[i]
        }
    page1.push(item);
}
page[1][2] = page1;






names = ["VWash Plus Expert Hygiene Intimate Wash", "Kimayra Jojoba Oil", "Whisper Ultra Clean XL+ Sanitary Pad", "Santoor PureGlo Glycerine Bathing Bar", "Santoor Sandal & Turmeric Soap", "Pears Pure & Gentle Bathing Bar", "Pears Pure & Gentle Bathing Bar", "Dove Cream Beauty Bathing Bar", "NIVEA Water lily & Oil Shower Gel - Pack of 3", "Whisper Ultra Soft XL Sanitary Pad", "SIRONA Medium Reusable Menstrual Cup", "Dettol Bathing Bar Soap, Original", "Stayfree Secure Cottony XL Wings Sanitary Pad", "Kimayra Black Seed Oil", "NIVEA Creme Soft Soap", "Durex Play Massage 2 in 1 Sensual Lubricant", "Fiama Lemongrass and Jojoba Shower Gel", "NIVEA Creme Soft Soap", "SIRONA Large Reusable Menstrual Cup", "Speaking tree Citronella essential oil - 30ml", "VWash Plus Intimate Hygiene Wash + Vwash Wipes Combi Intimate Wash", "VWash Plus Expert Hygiene ↵ (Pack of 3) Intimate Wipes", "Liril Lemon and Tea Tree Oil Soap", "ST. D'VENCÉ Buy 2 Body Wash Get 1 FREE (3 x 500 ml)", "Liril Berry Blast Body Wash", "Durex Ultra Thin Condoms - Air Condom", "SIRONA Natural pH balanced Intimate Wash with 5 Ma… Hygiene for Men and Women - 200 ml Intimate Wash", "SIRONA Intimate Wet Wipes (50 Wipes - 5 Pack) Intimate Wipes", "SIRONA Small Reusable Menstrual Cup", "ST. D'VENCÉ Ocean Drop Body Wash With Marine Collagen", "Chandrika Glycerine Soap", "SIRONA Intimate Wet Wipes - 40 Wipes (4 Pack - 10 Wipes Each) Intimate Wipes", "Dove Go Fresh Revive Beauty Bar", "ST. D'VENCÉ Alphonso Mango Body Wash With Vanilla Beans", "Pears Naturale Aloe Vera Detoxifying Bathing Bar", "Santoor Sandal & Almond Milk Soap(5 x 125 g) pack of 2", "Dove Cream Beauty Bathing Bar - Set of 3", "NIVEA Creme Smooth Care Shower Gel", "Whisper Ultra Night Sanitary Pad", "Speaking tree Peppermint essential oil 15ml"];
prices = ["₹600", "₹359", "₹333", "₹219", "₹240", "₹104", "₹205", "₹360", "₹384", "₹398", "₹299", "₹368", "₹195", "₹165", "₹446", "₹520", "₹299", "₹105", "₹299", "₹366", "₹390", "₹270", "₹153", "₹799", "₹140", "₹170", "₹275", "₹249", "₹299", "₹379", "₹322", "₹225", "₹199", "₹379", "₹164", "₹260", "₹155", "₹130", "₹243", "₹217"];
ratings = ["4.4", "4.1", "4.4", "4.4", "4.4", "4.4", "4.5", "4.5", "4.5", "4.4", "4", "4.5", "4.4", "4.1", "4.4", "3.9", "4.4", "4.4", "4.1", "3.5", "4.5", "4.4", "4.5", "4.3", "4.2", "4.2", "4.2", "4", "3.8", "4.3", "4.4", "4.6", "4.3", "4.5", "4.5", "4.4", "4.5", "4.3", "4.1", "4.1"];
noOfRatings = ["(2,465)", "(17)", "(43,509)", "(3,934)", "(5,285)", "(12,372)", "(24,473)", "(19,390)", "(4,555)", "(28,816)", "(6,714)", "(2,137)", "(24,047)", "(44)", "(1,668)", "(7,299)", "(1,233)", "(1,365)", "(2,669)", "(19)", "(117)", "(68)", "(4,211)", "(371)", "(13,965)", "(664)", "(69)", "(2,280)", "(5)", "(617)", "(14)", "(348)", "(2,852)", "(1,071)", "(9,872)", "(2,760)", "(3,224)", "(447)", "(105)", "(105)"];
images = 
["https://rukminim1.flixcart.com/image/612/612/k5vcya80/women-intimate-care/f/g/m/400-expert-hygiene-intimate-wash-200-ml-pack-of-2-vwashplus-original-imafzgf3dykrv7dn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvb9tow0/bath-essential-oil/q/h/g/100-jojoba-oil-kimayra-original-imafg8vpfzrd4fm2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jmjhifk0/sanitary-pad-pantyliner/s/z/6/ultra-clean-plus-xl-44-sanitary-pad-whisper-original-imaf9ezuqgkpayhc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k1118cw0/soap/g/q/r/6-750-pureglo-glycerine-bathing-bar-santoor-original-imafknzcsukgxnjt.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jmqmpow0-1/soap/d/k/m/8-1000-sandal-and-turmeric-soap-santoor-original-imaf9ha9kfhhtdhg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jws547k0/soap/8/s/x/3-225-pure-gentle-bathing-bar-pears-original-imafhbkfk43fkxha.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k391w280/soap/g/7/e/4-500-pure-gentle-bathing-bar-pears-original-imafmdzmefm8bkgg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jqmnv680/soap/n/f/h/8-800-cream-beauty-bathing-bar-dove-original-imafbtxxjeffcwun.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jjd6aa80/body-wash/r/s/2/750-water-lily-oil-shower-gel-pack-of-3-nivea-original-imaf6ye6gfeztwnk.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jmmce4w0/sanitary-pad-pantyliner/a/f/v/ultra-soft-xl-50-sanitary-pad-whisper-original-imaf9h9gffqvabha.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4x2du80/menstrual-cup/p/a/t/medium-fsp058-sirona-original-imafnh8cmwyybtug.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jzn0tjk0/soap/p/e/g/8-1000-bathing-bar-soap-original-dettol-original-imafjhxvzvyhz3ht.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jxapua80/sanitary-pad-pantyliner/5/a/7/secure-cottony-xl-wings-xl-40-sanitary-pad-stayfree-original-imafhsgpgtyngaxg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jv8exzk0/bath-essential-oil/z/5/t/100-black-seed-oil-kimayra-original-imafg6kuemspgpzb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvy4vbk0/soap/f/y/b/8-1000-creme-soft-soap-nivea-original-imafgkypaxh5byr2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9loccw0/lubricant/y/c/w/200-play-massage-2-in-1-sensual-durex-original-imafrd4jh8dcwhc2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvfk58w0/body-wash/k/c/c/500-lemongrass-and-jojoba-shower-gel-fiama-original-imafgc5kwu9u54p4.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/joq2qa80/soap/p/s/h/3-225-creme-soft-soap-nivea-original-imafb47fdaphvugp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4zx9jk0/menstrual-cup/y/f/j/large-fsp059-sirona-original-imafnmdfabvyrfuc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k66sh3k0/bath-essential-oil/u/g/c/30-citronella-essential-oil-30ml-speaking-tree-original-imafzpetz4satzun.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5vcya80/women-intimate-care/g/z/s/200-ntimate-hygiene-wash-200ml-vwash-wipes-combi-vwashplus-original-imafzgf3bhcpzpzf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5lcvbk0/women-intimate-care/v/e/j/30-expert-hygiene-intimatewipes-pack-of-3-vwashplus-original-imafz8jdsamwf2hx.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5o7r0w0/soap/d/q/u/3-375-lemon-and-tea-tree-oil-soap-liril-original-imafzaq2fyfjhbns.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k55n0y80/body-wash/h/z/e/1-5-buy-2-body-wash-get-1-free-3-x-500-ml-st-d-venc-original-imafnwjuugtdtjhb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jsj90280/body-wash/g/f/t/250-berry-blast-body-wash-liril-original-imafe3e7ybbade3p.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9loccw0/condom/g/f/m/1-air-ultra-thin-10-durex-original-imafrd4gzg7vd2bj.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k2w6xe80/women-intimate-care/4/e/f/200-natural-ph-balanced-intimate-wash-with-5-magical-herbs-no-original-imafm57mwny3h2sh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jxdkpzk0/women-intimate-care/f/f/m/50-intimate-wet-wipes-50-wipes-5-pack-sirona-original-imafhug8bjne8tnc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jx0prbk0/menstrual-cup/w/q/6/small-fsp103-sirona-original-imafhksm4nzaugyh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k55n0y80/body-wash/g/h/x/500-ocean-drop-body-wash-with-marine-collagen-st-d-venc-original-imafnvhymywvdm6q.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/js23pu80/soap/h/g/3/6-750-glycerine-soap-chandrika-original-imafdpjdhhnftztn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jxdkpzk0/women-intimate-care/z/q/y/40-intimate-wet-wipes-40-wipes-4-pack-10-wipes-each-sirona-original-imafhug8rxc356er.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7usyvk0/soap/p/s/g/3-300-go-fresh-revive-beauty-bar-dove-original-imafpztwnypc3gzd.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k55n0y80/body-wash/h/g/z/500-alphonso-mango-body-wash-with-vanilla-beans-st-d-venc-original-imafnvhycrwj9avp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvy4vbk0/soap/w/k/y/3-375-naturale-aloe-vera-detoxifying-soap-bar-pears-original-imafgqzprpzdh8dy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k30h8y80/soap/6/t/j/10-1250-sandal-almond-milk-soap-5-x-125-g-pack-of-2-santoor-original-imafm6amcdfw9r9x.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jb6tksw0/soap/3/r/g/3-300-cream-beauty-bathing-bar-set-of-3-dove-original-imafyhggrzjnhuw6.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jtbtt3k0/body-wash/t/a/6/250-creme-smooth-care-shower-gel-nivea-original-imafeph79tezmfuq.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jo62kcw0/sanitary-pad-pantyliner/3/j/v/ultra-night-xxxl-10-sanitary-pad-whisper-original-imafah9rpgbzjqhc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k65d18w0/bath-essential-oil/j/b/q/15-peppermint-essential-oil-15ml-speaking-tree-original-imafzze5nkzyyzpq.jpeg?q=70"]

page1=[];
for(var i=0;i<40;i++)
{
    var item={title: names[i],
        rating: ratings[i],
        noOfRating: noOfRatings[i],
        price: prices[i],
        image: images[i]
        }
    page1.push(item);
}
page[1][3] = page1;




//-------------------------------------------------------------------ROW 3

names = ["Ganesh Easy and Quick Vegetable Chopper", "Panasonic 18 W Round B22 LED Bulb", "Milton Thermosteel Flip lid 1000 ml Flask 1000 ml Flask", "Flipkart SmartBuy 500ml Sharp Chopper", "Flipkart SmartBuy 900ml Sharp Chopper", "HIT Electric Insect Killer", "Flipkart SmartBuy 500ml Sharp Chopper", "Pigeon RADIANCE Lantern Emergency Light", "Butterfly Rapid 3 Burner Glass Manual Gas Stove", "Eveready 9 W Globe B22 LED Bulb", "Eveready 10W LED Bulb Pack of 2 with Free 4 Batteries", "Cello cello H2O 1000 ml Bottle", "Flipkart SmartBuy 650ml Sharp Chopper", "Panasonic 7 W Round B22 LED Bulb", "Milton Glassy 1000 ml Flask", "Pigeon Bling 750 Ml bottle Pack of 2 750 ml Bottle", "Milton Thermosteel Flip Lid 750 ml Flask", "Prestige Omega Festival Pack - Build Your Kitchen Induction Bottom Cookware Set", "SYSKA T0790LA Torch", "Panasonic 18 W Round B22 LED Bulb", "Philips 8.5 W Round B22 LED Bulb", "Prestige Pearl Aluminium Manual Gas Stove", "Pigeon Non- stick cookware- Favourite 7Pcs Gift set Cookware Set", "Panasonic 12 W Round B22 LED Bulb", "Eveready 10 W Round B22 LED Bulb", "Prestige Omega Festival Pack Induction Bottom Cookware Set", "Pigeon Pigeon Duo Pack Nonstick cookware set , Fry pan and tawa Cookware Set", "Butterfly Rapid 2 Burner Glass Manual Gas Stove", "Lifelong LLGS118 Glass Manual Gas Stove", "Panasonic 9 W Round B22 LED Bulb", "Cello VENICE FRIDGE WATER BOTTLES 1000 ml Bottle", "Syska Led Lights 9 W Standard B22 LED Bulb", "Cello S.S Swift 1500 ml Flask", "Panasonic 5 W Round B22 LED Bulb", "Halonix LED PRIME INVERTER LIGHT 9W B22 CW PK1 M Bulb Emergency Light", "Pigeon Tamba 1 Ltr Copper water bottle 1000 ml Bottle", "Philips Ojas Lantern Emergency Light", "Philips 10 W T-Bulb B22 LED Bulb", "Philips 8.5 W Round B22 LED Bulb", "Panasonic 23 W Round B22 LED Bulb"];
prices = ["₹199", "₹779", "₹739", "₹239", "₹399", "₹499", "₹239", "₹349", "₹2,649", "₹729", "₹219", "₹679", "₹369", "₹209", "₹793", "₹379", "₹658", "₹1,499", "₹379", "₹249", "₹219", "₹3,599", "₹1,299", "₹369", "₹559", "₹1,499", "₹600", "₹2,149", "₹1,899", "₹139", "₹397", "₹128", "₹999", "₹579", "₹449", "₹689", "₹899", "₹339", "₹361", "₹369"];
ratings = ["4.3", "4.4", "4.4", "4.4", "4.3", "4.4", "4.3", "4.2", "4.3", "4.3", "4.4", "4.4", "4.4", "4.2", "4.4", "4.3", "4.4", "4.3", "4.3", "4.3", "3.9", "4.3", "4.3", "4", "4.2", "4.1", "1.3", "4.5", "4.2", "4.3", "4.1", "4", "4", "4.3", "4.3", "4.1", "4.1", "4.1", "4.1", "4.1"];
noOfRatings = ["(35,091)", "(83,367)", "(1,56,252)", "(1,56,252)", "(3,364)", "(1,56,252)", "(44,075)", "(60,776)", "(7,077)", "(77,009)", "(40,047)", "(1,56,252)", "(12,867)", "(2,406)", "(83,367)", "(1,27,295)", "(178)", "(3)", "(1,14,706)", "(4,513)", "(10,412)", "(77,009)", "(1,27,295)", "(7,114)", "(60,776)", "(9,224)", "(3)", "(23,491)", "(56,649)", "(1,454)", "(7,797)", "(592)", "(6,953)", "(53,169)", "(1,14,706)", "(105)", "(105)", "(105)", "(105)", "(105)"];
images = 
["https://rukminim1.flixcart.com/image/612/612/jvqzo280/chopper/w/s/z/ons009-oneness-original-imaf9p6awhnufvw2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6ci8i80/bulb/m/q/t/pbum01187-pk4-panasonic-original-imafztqgq4av8af5.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4k7f680/bottle/a/j/p/1000-thermosteel-flip-lid-1000-ml-flask-ts-261-milton-original-imafnfmgxtb2jfrw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jjn6d8w0/chopper/k/a/b/sharp-mini-chopper-grey-flipkart-smartbuy-original-imaf766hrdjgt2ym.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jkpr98w0/chopper/x/v/f/big-chopper-flipkart-smartbuy-original-imaf8yaw4bhzbprz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k48rwcw0/electric-insect-killer/v/f/t/8901023019029-hit-original-imafnfhcfjfrywtn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jg406fk0/chopper/c/d/9/sharp-mini-chopper-flipkart-smartbuy-original-imaf4fgfqyhhdyf2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0zlsi80/emergency-light/n/j/h/radiance-pigeon-original-imafknwyujhyzemd.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jp8ngcw0-1/gas-stove/t/z/x/8906022173659-butterfly-original-imafbj9zynzgfzbn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j63x7rk0/bulb/n/h/2/8901691017822-eveready-original-imaewng64apmzz8m.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvzkb680/bulb/6/b/5/10-w-pack-of-2-promo-eveready-original-imafgrqqtz6s4xmc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0plpjk0/bottle/w/5/g/1000-cello-h2o-cello-h2o-water-bottel-cello-original-imafkcra2udxjuqg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jkpr98w0/chopper/g/3/q/swift-chopper-flipkart-smartbuy-original-imaf8yawrcburjgn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6ci8i80/bulb/b/t/2/pbum01077-pk2-panasonic-original-imafzt58saw6byqc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4k7f680/bottle/b/g/v/1000-thermosteel-glassy-hot-cold-bottle-with-drinking-cup-lid-original-imafnfmj4mpbhyzz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jv19qq80/bottle/d/f/h/750-bling-750-ml-bottle-pack-of-2-14253-pigeon-original-imafgf8jqa7kecmr.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4k7f680/bottle/a/s/x/750-750-ml-thermo-steel-flask-24-hrs-hot-cold-flip-lid-flip-lid-original-imafnfmgyvezgyvf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0tw13k0/cookware-set/g/f/r/8091365308416-30841-prestige-original-imafkgyt8rnbjjet.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0plpjk0/emergency-light/4/n/j/tuo-portable-rechargeable-led-lamp-cum-torch-syska-original-imafkfdfbj3rsakn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jthjki80/bulb/z/e/r/kiglu-omni-panasonic-original-imafdt7ysdzv8hz8.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j9it30w0/bulb/p/x/j/929001834413-2-philips-original-imaezatuwpm3xsbw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0h12fk0/gas-stove/g/s/9/40209-prestige-original-imafk9gtyvwahhse.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0plpjk0/cookware-set/h/v/w/0-12450-pigeon-original-imafkfuqxwpegecp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6ci8i80/bulb/j/q/t/pbum01127-pk2-panasonic-original-imafztzgt6kgxcaw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0wqwsw0/bulb/g/n/8/10-eveready-original-imafkhzx5vzn6prk.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jzrb53k0/cookware-set/z/6/e/8901365367574-36757-prestige-original-imafjp5dbffp8hat.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jq5iky80/cookware-set/x/6/t/8904216510990-14099-pigeon-original-imafb5apygnu9qwp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jp8ngcw0-1/gas-stove/p/8/p/8906022173642-butterfly-original-imafbj9zzz2yq9fz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvif0y80/gas-stove/z/9/k/llgs118-lifelong-original-imafgec54amkxbjg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ju79hu80/bulb/a/e/d/9w-white-panasonic-original-imafez59kvetjddb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0cqqvk0/bottle/4/v/c/1000-venice-fridge-water-bottles-120-cello-original-imafk5tysrejtyhj.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/bulb/z/g/8/ssk-srl-9w-syska-original-imaegnks3bwcmwqv.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k20r8nk0/bottle/t/z/s/1500-s-s-swift-cellox93-cello-original-imafhgu6exkfbsxp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6ci8i80/bulb/b/t/u/pbum01057-pk8-panasonic-original-imafzt58fhrg9zuh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyhl1u80/emergency-light/a/n/e/led-prime-inverter-light-9w-b22-cw-pk1-m-halonix-original-imafggq3chddqtzw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4324y80/bottle/k/r/8/1000-tamba-1-ltr-copper-water-bottle-14370-pigeon-original-imafn2scxj8yz82h.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/emergency-light/a/7/5/philips-ojas-original-imadxy84jxzaqunm.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jwxuvm80/tube-light/z/h/k/8w-b22-white-linear-led-battan-pack-of-02-philips-original-imaf6yhhhcmrhwgh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j9it30w0/bulb/z/g/x/929001834413-4-philips-original-imaezasugcbzyh4v.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6ci8i80/bulb/k/3/k/pbum01027-panasonic-original-imafztqzczzzcuar.jpeg?q=70"]

page1=[];
for(var i=0;i<40;i++)
{
    var item={title: names[i],
        rating: ratings[i],
        noOfRating: noOfRatings[i],
        price: prices[i],
        image: images[i]
        }
    page1.push(item);
}
page[3][0] = page1;



names = ["cratos Polyester Adults DOUBLE BED MOSQUITO NET Mosquito Net", "VRV Nylon Adults Single bed Mosquito Net Mosquito Net", "Oxtrix Polyester Adults double bed mosquito net Mosquito Net", "CASA FURNISHING Polyester Adults Mosquito Net King SB Mosquito Net", "HOMECUTE Polyester Adults Double Bed Cotton Edge T…nal Mosquito Net 6 X 7 ft one Colour Mosquito Net", "Mahdiya Nylon Adults Double Bed Size Avoid Annoyin…, 100% AIR Flow (King or Queen Size) Mosquito Net", "Super Nylon Adults kal-net-03 Mosquito Net", "VRV Nylon Adults Double Bed (6x6) Mosquito net to protect Mosquito Net", "My New Born Polyester Adults Premium Quality Folda…Portable Mosquito Net for Double Bed Mosquito Net", "Flipkart SmartBuy Single Bed Box Mosquito Net", "Lifekrafts Polyester Adults Pop-Up Single Bed Mosq…ith Blue Color Border, Foldable Net. Mosquito Net", "Martina Cotton Adults BRITE Mosquito Net", "Fashion Centre Polyester Adults Double Bed Mosquito Net", "HOMECUTE Polyester Adults Double Bed Cotton Edge T…nal Mosquito Net 6 X 7 ft one Colour Mosquito Net", "CASA FURNISHING Polyester Adults Mosquito Net King SB Mosquito Net", "Classic Mosquito Net Polyester Adults Net Double bed Mosquito Net", "Shreejee Nylon Adults 1 PCS. Nylon Adults Double B… Green color Mosquito Net (7x7 feet) Mosquito Net", "Mahdiya Nylon Adults Double Bed Size Avoid Annoyin…, 100% AIR Flow (King or Queen Size) Mosquito Net", "Classic Mosquito Net Polyester Adults Jacquard Double Bed (Blue) Mosquito Net", "ROYALE HI DESIGN Polyester Adults NOMOS03 Mosquito Net", "VRV Nylon Adults Single Bed Mosquito net to protect Various Insects Mosquito Net", "cratos Polyester Adults net003 Mosquito Net", "My New Born HDPE - High Density Poly Ethylene Adul…Portable Mosquito Net for Double Bed Mosquito Net", "HOMECUTE Polyester Adults Double Bed Cotton Edge T…nal Mosquito Net 6 X 7 ft one Colour Mosquito Net", "HOMECUTE Polyester Adults Double Bed Cotton Edge T…nal Mosquito Net 6 X 7 ft one Colour Mosquito Net", "Shayan Polyester Adults Mosquito Net Mosquito Net", "HOMECUTE Polyester Adults Single Bed Cotton Edge T…onal Mosquito Net 4 X6 ft one Colour Mosquito Net", "Popular Nylon Adults Mosquito net 6x6 Easy Install…t any Spray 100 Air flow,Garden,Tent Mosquito Net", "VRV Nylon Adults Double Bed (6x6) Mosquito net to protect Mosquito Net", "Flipzon Polyester Adults Net Double bed Mosquito Net", "ROYALE HI DESIGN Polyester Adults Polyester Adults…ium Foldable Mosquito Net Double Bed Mosquito Net", "ROYALE HI DESIGN Polyester Adults Polyester Adults…ium Foldable Mosquito Net Double Bed Mosquito Net", "Riddhi Nylon Adults mtr14 square (3x6) dark blue Mosquito Net", "Super Nylon Adults Super-06 Mosquito Net", "Libra Polyester Fibre Adults Double Bed Foldable Mosquito Net", "Mahdiya Nylon Adults Single Bed Mosquito net (two …Control Comfortable for Family, 100% Mosquito Net", "anagya Nylon Adults Best washbale Mosquito net single bed Mosquito Net", "LooMantha HDPE - High Density Poly Ethylene Adults Purple Single Bed Mosquito Net Mosquito Net", "keekos Polyester Adults Polyester Adults Net Double bed Mosquito Net (Pink) Mosquito Net", "Mahdiya Nylon Adults Single Bed Mosquito net (two …able for Family, 100% AIR Flow.4x6.5 Mosquito Net"];
prices = ["₹899", "₹199", "₹1,045", "₹975", "₹449", "₹200", "₹193", "₹249", "₹739", "₹299", "₹999", "₹399", "₹429", "₹449", "₹975", "₹1,699", "₹449", "₹200", "₹1,499", "₹949", "₹219", "₹949", "₹739", "₹449", "₹449", "₹449", "₹369", "₹299", "₹249", "₹828", "₹949", "₹949", "₹289", "₹389", "₹848", "₹180", "₹319", "₹299", "₹1,048", "₹200"];
ratings = ["4.1", "4", "4.2", "4", "3.6", "4.6", "3.8", "3.7", "4", "3.7", "4.1", "3.1", "3.7", "3.7", "3.6", "4.2", "3.4", "4.2", "3.7", "3.7", "4", "3.8", "3.8", "3.9", "3", "3.5", "4.2", "3.4", "3.6", "4.4", "3.7", "3.4", "3.3", "3.9", "3.5", "3.6", "3.9", "3.4", "3.9", "5"];
noOfRatings = ["(409)", "(96)", "(107)", "(33)", "(159)", "(8)", "(692)", "(7)", "(14)", "(77)", "(56)", "(194)", "(15)", "(286)", "(16)", "(20,604)", "(5)", "(2,314)", "(726)", "(67)", "(27)", "(26)", "(258)", "(35)", "(2)", "(13)", "(69)", "(17)", "(62)", "(7)", "(180)", "(65)", "(33)", "(883)", "(12)", "(31)", "(33)", "(5)", "(105)", "(105)"];
images = 
["https://rukminim1.flixcart.com/image/612/612/jb3yp3k0/mosquito-net/9/e/d/double-bed-mosquito-net-ctnet001-country-traders-original-imafyggwpzmzm4nz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jll6xzk0/mosquito-net/s/3/b/single-bed-mosquito-net-singele11111-vrv-original-imaf6mh7ypeqmgeh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k63xle80/mosquito-net/r/n/j/double-bed-mosquito-net-doublebedbluemosquitonet1-oxtrix-original-imafzmyutgh3eege.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5y7tzk0/mosquito-net/d/p/n/mosquito-net-king-sb-mn-02-casa-furnishing-original-imafzjy3xrrvf5jy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jjylw280/mosquito-net/u/y/c/double-bed-cotton-edge-traditional-mosquito-net-6-x-7-ft-one-original-imaf7fh6nzncqfhu.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6v2ykw0/mosquito-net/w/y/3/double-bed-size-avoid-annoying-insect-mosquito-net-pest-control-original-imafp7nuazp8dc7w.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jfk00i80/mosquito-net/n/b/z/kal-net-03-kal-net-03-super-original-imaf3zzzg54u9hcp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k05ljm80/mosquito-net/e/w/f/double-bed-6x6-mosquito-net-to-protect-vrv-pink1-6-vrv-original-imafjxwhwmg7xzas.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4rcmfk0/mosquito-net/p/d/2/premium-quality-foldable-portable-mosquito-net-for-double-bed-original-imafnhccthtydrmp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0o69ow0/mosquito-net/d/s/f/mid-size-4x7-feet-15-flipkart-smartbuy-original-imafkf82z3kha8x2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6ci8i80/mosquito-net/h/h/u/pop-up-single-bed-mosquito-net-white-color-net-with-blue-color-original-imafztwmkynnyprr.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/mosquito-net/3/v/r/umnp333b-united-monk-cotton-super-net-original-imaezth9z3msmq5d.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/mosquito-net/9/h/k/6-5ft-7ft-pb7-fashion-centre-double-bed-original-imae64t9jfpyzchw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jjylw280/mosquito-net/c/f/p/double-bed-cotton-edge-traditional-mosquito-net-6-x-7-ft-one-original-imaf7fh68dqdahpw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5y7tzk0/mosquito-net/v/f/z/mosquito-net-king-sb-mn-01-casa-furnishing-original-imafzjy3yd6hsgbv.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvtujrk0/mosquito-net/f/5/z/double-bed-queen-size-cl-pk-qs-classic-original-imafc2unzkx9ybnn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jfsknm80/mosquito-net/a/5/x/2-pcs-nylon-adults-double-bed-foldable-multi-color-mosquito-net-original-imaf2gnhn3tpzehy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6v2ykw0/mosquito-net/j/r/h/double-bed-size-avoid-annoying-insect-mosquito-net-pest-control-original-imafp7nurgxjmgqz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jph83gw0/mosquito-net/h/4/z/jacquard-double-bed-blue-cljaq-bl-db-classic-original-imafbm722zstmqfp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jgy0fbk0/mosquito-net/k/v/z/nomos03-nomos03-royale-hi-design-original-imaf5fyczaxw5zt4.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jwwffrk0/mosquito-net/u/s/g/double-bed-6x6-5-feet-blue-colourwith-cotton-border-std14-original-imaffnv6pgzuzzuv.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jl2m7ww0/mosquito-net/x/z/d/net003-mosnet003-cratos-original-imaf879gduq7hhzs.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k572gsw0/mosquito-net/z/b/c/premium-quality-foldable-portable-mosquito-net-for-double-bed-original-imafnxsduby3cjdq.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jjylw280/mosquito-net/j/p/w/double-bed-cotton-edge-traditional-mosquito-net-6-x-7-ft-one-original-imaf7fh6m6jn4wtb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jjylw280/mosquito-net/u/q/8/double-bed-cotton-edge-traditional-mosquito-net-6-x-7-ft-one-original-imaf7fh677xfghke.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/mosquito-net/f/8/h/6-5x6-5-feet-polynet-hanging-mosquito-net-msnpn6b-shayan-original-imaecqwbbgjqhcfm.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jjylw280/mosquito-net/f/b/y/single-bed-cotton-edge-traditional-mosquito-net-4-x6-ft-one-original-imaf7fh65sfwvhby.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jt641ow0/mosquito-net/8/s/2/mosquito-net-6x6-easy-installation-perfect-fit-for-indoor-original-imafekpmaxzb6hvj.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0bbb0w0/mosquito-net/h/d/y/double-bed-6x6-mosquito-net-to-protect-purple-6-vrv-original-imafk4jhugrmhwyf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jabdw280/mosquito-net/t/y/k/net-double-bed-fp-mnet-flipzon-original-imaezwbgfz7tzng5.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyeq64w0/mosquito-net/h/s/u/polyester-adults-premium-foldable-mosquito-net-double-bed-original-imafgy22bjsakhxg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jfbfde80/mosquito-net/u/4/f/polyester-adults-premium-foldable-mosquito-net-double-bed-original-imaf3sh6vmgfdhcr.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/mosquito-net/m/b/h/14-mtr7x7-6-riddhi-dark-blue-7x7-14mtr-square-original-imaeg37m9qbfwnez.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jjabekw0/mosquito-net/h/f/p/super-06-panna-amn-06-super-original-imaf6v929gayfq9n.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/mosquito-net/z/h/e/lmn03-libra-double-bed-foldable-original-imaehxg9jkzhmzmn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6wiefk0/mosquito-net/p/h/f/single-bed-mosquito-net-two-person-avoid-annoying-insect-original-imafp8vj2uc8gehw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0h12fk0/mosquito-net/m/x/h/best-washbale-mosquito-net-single-bed-a-19009-anagya-original-imafk8tdsv8m7d9u.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jrqo70w0/mosquito-net/n/x/q/purple-single-bed-mosquito-net-sbmn018-loomantha-original-imafdgzdttzdxahk.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jynat8w0/mosquito-net/x/u/3/polyester-adults-net-double-bed-mosquito-net-pink-9-keekos-original-imafgu53uvyhhxck.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6v2ykw0/mosquito-net/e/d/x/double-bed-size-avoid-annoying-insect-mosquito-net-pest-control-original-imafp7nu9gx8fqax.jpeg?q=70"]
page1=[];
for(var i=0;i<40;i++)
{
    var item={title: names[i],
        rating: ratings[i],
        noOfRating: noOfRatings[i],
        price: prices[i],
        image: images[i]
        }
    page1.push(item);
}
page[3][1] = page1;




names = ["Sauran RO Filter Cartridge 5 Micron 10 inches pc of 3 Solid Filter Cartridge", "Sauran RO Filter Cartridge 5 Micron 10 inches pc of 7 Solid Filter Cartridge", "Ampereus Ro Filter Complete Set Suitable For All Kind Of Water Purifier Solid Filter Cartridge", "Ampereus Ro Membrane : Vontron 75 Gpd + Fr-450 Solid Filter Cartridge", "Morning Star Technology RO Water Filter Spanner fo…Filter bowl-1 Piece(Black) Solid Filter Cartridge", "Morning Star Technology RO / UV / UF/ TDS Water pu… / UF/ TDS Water purifiers Solid Filter Cartridge", "Sauran RO Filter Cartridge 5 Micron 10 inches pc of 12 Solid Filter Cartridge", "Sauran RO Filter Cartridge 5 Micron 10 inches pc of 2 Solid Filter Cartridge", "Kent pre Cartridge Solid Filter Cartridge", "NEXUS PURE 100GPD MEMBRANE+CARBON+SEDIMENT Solid Filter Cartridge", "aqua pure grand Ro booster l pump 100 gpd Solid Filter Cartridge", "Ampereus Ro Membrane VONTRON 75gpd + Housing + Elbow Connectors Solid Filter Cartridge", "Sauran RO Filter Cartridge 5 Micron 10 inches pc of 8 Solid Filter Cartridge", "Morning Star Technology ARC33 String Filter Cartridge", "Morning Star Technology RO UV/UF/TDS Water Purifie…for all RO Water Purifiers Solid Filter Cartridge", "Morning Star Technology RO Water Purifier Flow Res…Models ( PACK FOR 01 PCS ) Solid Filter Cartridge", "Morning Star Technology RO UV water filter GAC Gra…nder Sink / Manual Filters Solid Filter Cartridge", "kemflow Spun PP 10' for RO Service Solid Filter Cartridge (0.5, Pack of 4) Solid Filter Cartridge' ", "Morning Star Technology Blue Lock Clips 30 Pcs Of …ilter Fittings Domestic RO Solid Filter Cartridge", "Sauran RO Filter Cartridge 5 Micron 10 inches pc of 5 Solid Filter Cartridge", "Mi Water Purifier PAC Solid Filter Cartridge", "ipure 80 GPD Ro membrane , Universal Type Compatib…RO for upto 1500 TDS Water Solid Filter Cartridge", "IONIX Alkaline Filter / AAA techonology with Bio+ …P Balls , Mineral cartidge Solid Filter Cartridge", "IONIX KT premium Triple Ring Pre filter Full set f…y Branded / Non branded RO Solid Filter Cartridge", "LEXUS AQUA FRESH 4 Pcs Kemflo Original Pp Spun Fil…dge For Ro Water Purifiers Solid Filter Cartridge", "Ampereus Dove Inline filter set with vontron membrane and elbows Solid Filter Cartridge", "ionix Universal Ro service kit with CSM 80 GPD Ro …e RO/UV/UF water purifiers Solid Filter Cartridge", "Morning Star Technology - 3/8″ Inch Big Diameter S… for High Water Flow Rate- Solid Filter Cartridge", "Morning Star Technology RO UV / UF / TDS Water fil…l RO Water Filter Purifier Solid Filter Cartridge", "Ninki Fresh Spun Candle/filter for aqua fresh/aqua/grand/guard/kent filter Solid Filter Cartridge", "Morning Star Technology Inlet for all types of RO …er Purifiers 1/4 size Pipe Solid Filter Cartridge", "Morning Star Technology -2 PCS Threaded water filt…er Filter Water Purifier.- Solid Filter Cartridge", "Kent pre Cartridge 177 Solid Filter Cartridge", "Ninki Fresh Spun Solid Filter Cartridge", "Sauran RO Filter Cartridge 5 Micron 10 inches pc of 24 Solid Filter Cartridge", "NEXUS PURE CARBON+SEDIMENT+SPUN+UF+MINERAL Solid Filter Cartridge", "IONIX Psi 9 Pieces Very Grooved Type Spun Filter, …th All 10 Inch Pre Filters Solid Filter Cartridge", "'Morning Star Technology RO uv Water Filter Purifier PP spun filter 10' inch Wound Filter Cartridge", "Morning Star Technology RO UV Water Purifiers ( LP…Pressure switch 1/4\" Size String Filter Cartridge", "Hi-Tech Melt Blown Replaceable Cartridge 10 in 5 M…fiers (Grooving 150 Grams) Solid Filter Cartridge"];
prices = ["₹199", "₹325", "₹999", "₹799", "₹149", "₹169", "₹499", "₹185", "₹199", "₹1,299", "₹1,499", "₹849", "₹381", "₹149", "₹279", "₹189", "₹299", "₹236", "₹139", "₹289", "₹899", "₹550", "₹850", "₹550", "₹199", "₹1,299", "₹1,950", "₹249", "₹169", "₹229", "₹239", "₹435", "₹199", "₹349", "₹891", "₹1,199", "₹550", "₹189", "₹258", "₹179", "₹149", "₹289", "₹199", "₹1,299", "₹179"];
ratings = ["3.4", "4", "4.3", "3.9", "4.3", "4.2", "3.7", "4.3", "3.6", "3.5", "3.8", "3.4", "4.5", "3.9", "3.9", "4.3", "3.3", "4", "4.4", "3.9", "3.6", "4.5", "4.6", "3.9", "3.7", "3.5", "4.1", "3.6", "4.1", "3.9", "4", "3.8", "3", "3", "3.3", "5", "5", "4.3", "5", "5"];
noOfRatings = ["(36)", "(3)", "(7)", "(16)", "(34)", "(87)", "(36)", "(125)", "(28)", "(43)", "(247)", "(28)", "(6)", "(14)", "(646)", "(20)", "(3)", "(210)", "(11)", "(52)", "(9)", "(4)", "(7)", "(35)", "(61)", "(75)", "(157)", "(10)", "(34)", "(170)", "(11)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)"];
images = 
["https://rukminim1.flixcart.com/image/612/612/k5vcya80/water-filter-cartridge/n/g/e/ro-filter-cartridge-5-micron-10-inches-pc-of-3-sauran-original-imafzgf6hjnpjhhr.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5vcya80/water-filter-cartridge/p/z/5/ro-filter-cartridge-5-micron-10-inches-pc-of-7-sauran-original-imafzgf6zrjsd8e2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k9oj8280/water-filter-cartridge/x/9/v/ro-filter-complete-set-suitable-for-all-kind-of-water-purifier-original-imafrexuehqscnpe.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jxdkpzk0/water-filter-cartridge/r/f/4/ro-membrane-vontron-75-gpd-fr-450-ampereus-original-imafhrhpdd32fmdy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jk01bww0/water-filter-cartridge/4/z/k/ro-water-filter-spanner-for-10-pre-filter-bowl-1-piece-black-original-imaf7fp4umvnb8rp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jeokbrk0/tap-mount-water-filter/s/y/g/water-filters-morning-star-technology-original-imaeyqf9kmrs85hy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5vcya80/water-filter-cartridge/g/h/h/ro-filter-cartridge-5-micron-10-inches-pc-of-12-sauran-original-imafzgf6esnkhkdy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5vcya80/water-filter-cartridge/b/t/f/ro-filter-cartridge-5-micron-10-inches-pc-of-2-sauran-original-imafzgf6wtw5fzfb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jqidjm80/water-filter-cartridge/r/g/k/pre-cartridge-newgen-original-imafchz5fhfcasuf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/joud1u80-1/water-filter-cartridge/d/f/b/100gpd-membrane-carbon-sediment-nexus-pure-original-imafb7zftn82dfgd.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0r15e80/water-filter-cartridge/t/z/5/ro-booster-l-pump-100-gpd-aqua-pure-grand-original-imafkh82h9y2cmeu.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/water-filter-cartridge/p/h/n/ampereus-vontron-membrane-with-housing-for-all-kind-of-r-o-water-original-imaefjyegshjnpwr.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5vcya80/water-filter-cartridge/h/s/6/ro-filter-cartridge-5-micron-10-inches-pc-of-8-sauran-original-imafzdb5zjygsbvh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/water-filter-cartridge/s/a/e/arjun-ro-arc33-original-imaen9mbhe2h9y9x.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/japoakw0/water-filter-cartridge/3/x/u/ro-uv-uf-tds-water-purifiers-system-hero-water-solenoid-valve-original-imaezu7mndeghrca.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j9hdn680/water-filter-cartridge/b/h/h/ro-water-purifier-flow-restrictor-450-ml-ro-spare-compatible-for-original-imaez8kgdrm86hj5.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5zn9u80/water-filter-cartridge/u/a/k/ro-gac-granular-activated-carbon-for-under-sink-wall-hanging-original-imaffug4hzc6fjb4.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/juvjzbk0/water-filter-cartridge/9/v/b/kemflo-10-pp-spun-prefilter-poonam-pari-original-imaetwd7wydwczzd.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jay8xow0/water-filter-cartridge/h/h/p/blue-lock-clips-30-pcs-of-blue-lock-clips-for-ro-push-fit-type-original-imafy2qgxbpwjgpe.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5vcya80/water-filter-cartridge/p/e/s/ro-filter-cartridge-5-micron-10-inches-pc-of-5-sauran-original-imafzgf693abqb6w.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k69ncsw0/water-filter-cartridge/4/q/y/pac-filter-xiaomi-original-imafzrnnw2qfvvbh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ju1jqfk0/water-filter-cartridge/h/b/g/80-gpd-ro-membrane-universal-type-compatible-for-all-ro-for-upto-original-imaff955ptskgymb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jy7kyvk0/water-filter-cartridge/k/g/f/alkaline-filter-aaa-techonology-with-bio-orp-balls-mineral-original-imafghwp2n4fjym6.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k77xx8w0/water-filter-cartridge/8/t/q/kt-premium-triple-ring-pre-filter-full-set-for-installation-with-original-imafpgjtmjxszrzt.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ju2z6a80/water-filter-cartridge/g/y/s/4-pcs-kemflo-original-pp-spun-filter-10-inch-cartridge-for-ro-original-imaff8hf9wbyyksv.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jc299jk0/water-filter-cartridge/e/n/x/dove-inline-filter-set-with-vontron-membrane-and-elbows-ampereus-original-imaff6unzxdz4vt4.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k44hksw0/water-filter-cartridge/g/c/f/universal-ro-service-kit-with-csm-80-gpd-ro-membrane-silver-original-imafn3apngpamep8.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j4rc8sw0/water-filter-cartridge/h/y/f/3-8-inch-big-diameter-size-ro-wire-pipe-3m-length-hose-white-original-imaev5pjhgsdhdqu.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/japoakw0/water-filter-cartridge/q/c/6/ro-uv-uf-tds-water-filter-1-4-inch-elbow-pipe-connectors-both-original-imafy5yfbbgcmfjq.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k02qnww0/water-filter-cartridge/q/n/z/spun-candle-filter-for-aqua-fresh-aqua-grand-guard-kent-filter-original-imafep5b9js5tcrz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j95y4cw0/water-filter-cartridge/9/e/b/inlet-for-all-types-of-ro-uv-uf-tds-water-purifiers-1-4-size-original-imaeywvnb8g5vt9g.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j1b0xow0/water-filter-cartridge/4/h/9/2-pcs-threaded-water-filter-catridge-9-prefilter-cartridge-for-original-imaeswtqhymqfrsg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jrmdvgw0/water-filter-cartridge/y/w/j/water-purifier-filter-solid-filter-cartridge0035-rank-energy-original-imafcz53443stbvx.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k33c4nk0/water-filter-cartridge/h/v/k/spun-ninki-fresh-original-imafj32c3mgwjfs2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5vcya80/water-filter-cartridge/m/4/z/ro-filter-cartridge-5-micron-10-inches-pc-of-24-sauran-original-imafzgf6jmf6ngwd.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jpbic280/water-filter-cartridge/n/g/p/carbon-sediment-spun-uf-mineral-nexus-pure-original-imafb88qugug5znp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jfea93k0/water-filter-cartridge/h/w/t/psi-9-pieces-very-grooved-type-spun-filter-higher-shelf-life-original-imaf3v2hqdde3zb8.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jea9x8w0/water-filter-cartridge/d/c/q/ro-uv-water-filter-purifier-pp-spun-filter-10-inch-morning-star-original-imaf2yf8mmr55xbz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jea9x8w0/water-filter-cartridge/c/s/z/ro-uv-water-purifiers-lps-low-pressure-switch-1-4-size-morning-original-imaf2zgk6dfqyedh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jlwmgsw0/water-filter-cartridge/z/v/v/melt-blown-replaceable-cartridge-10-in-5-micron-sediment-filter-original-imaf8xny5p8pe998.jpeg?q=70"]


page1=[];
for(var i=0;i<40;i++)
{
    var item={title: names[i],
        rating: ratings[i],
        noOfRating: noOfRatings[i],
        price: prices[i],
        image: images[i]
        }
    page1.push(item);
}
page[3][2] = page1;



names = ["Pigeon Clean Easy Deluxe Spin Mop", "HIT Electric Insect Killer", "Pigeon Enjoy mop Mop", "BAWALY Reusable Rubber Silicon Household Safety Wa…y Glove hand gloves for kitchen Wet and Dry Glove", "Spotzero By Milton ELEGANT PLASTIC WRINGER SPIN MOP Mop", "Spotzero By Milton ROYALE STEEL WRINGER SPIN MOP Mop", "Mezire Electric Insect Killer", "Jolly Gloves Silicone Household Safety Wash Scrubb…oth's,Dish, Cleaning, Gardening Wet and Dry Glove", "ShopAtBargain Silicon Kitchen Gloves (Pack of 1 Pair) Wet and Dry Glove", "CLARET White 2 Ply Bathroom Tissue Toilet Roll, 10 in 1 Value Pack-230 x 10 Toilet Paper Roll", "Pick Ur Needs High Range Mosquito Racket/Bat with Torch with Wire Charging Electric Insect Killer", "Shivonic Magic Dry Bucket Mop - 360 Degree Self Sp…3 Super Absorbers for Home & Office Floor Mop Set", "Godrej Ezee Liquid Detergent", "Pidilite Wood Preservative Spray Pack", "Mr. Right Mosquito Bat Electric Insect Killer", "HOKIPO Reusable PVC Hand Gloves for Kitchen, Free Size - For Summer (2 Pair) Wet and Dry Glove Set", "CLARET White 2 Ply Bathroom Tissue Toilet Roll, 6 in 1 Value Pack-240X6 Toilet Paper Roll", "Mezire Electric Insect Killer", "Pick Ur Needs Lithium Battery High Range Mosquito …th Battery Backup Warranty Electric Insect Killer", "Mobone ® Dish Washing Silicon Hand Gloves with Scr…ter Proof Gloves Wet and Dry Disposable Glove Set", "NIKNATS Dishwashing and Pet Grooming, Magic Latex … Protecting Hands (Multicolour) Wet and Dry Glove", "HOKIPO Reusable PVC Hand Gloves for Kitchen, Free Size - For Summer, 1 Pair Wet and Dry Glove", "Vim Concentrated Dish Cleaning Gel", "MIST Ultra Soft Clean Care Embossed 2 ply Toilet tissue Paper Toilet Paper Roll", "Godrej aer Violet Valley Bloom Automatic Spray", "Godrej Petal crush pink, Musk after smoke, Violet …oom, Morning misty meadow, Fresh lush green Spray", "Shivonic House hold using cleaning bucket mop set …ng Wipe, Mop Set, Mop Refill, Floor Wiper, Bucket", "yes plus sstyagi Wet and Dry Disposable Glove Set", "Ketsaal HIGH QUALITY Electric Mosquito Bat Insect Killer Electric Insect Killer", "Pour Home Room Freshener French Flora 270 ML Spray", "Airwick Hills of Munnar Refill", "Green Dragon Bullet Bed Bug & Egg Killer - Make 1500 ml Ready to Use", "Mezire Magic Silicone Dish Washing Gloves, Silicon…shing Dish, Car, Bathroom 1Pair Wet and Dry Glove", "Shopeleven Silicon Safety Wash Scrubber Heat Resis… Kitchen Gloves Wet and Dry Wet and Dry Glove Set", "KitchenFest AK-310 Mosquito Bat/Racket with Led Light Electric Insect Killer", "Garbnoire Resuable Household Rubber Hand Gloves | …shing , Gardening Pair of 3 Wet and Dry Glove Set", "CLARET White 2 Ply Bathroom Tissue Toilet Roll, 10 in 1 Value Pack Toilet Paper Roll", "KETSAAL Electric Insect Killer", "KETSAAL Electric Mosquito Bat Insect Killer Electric Insect Killer", "WDS Best Easy To Clean Floor Magic Bucket 5 Absorbers, Floor, Wet and Dry Mop"];
prices = ["₹1,795", "₹499", "₹799", "₹292", "₹1,049", "₹1,249", "₹343", "₹325", "₹315", "₹275", "₹520", "₹899", "₹480", "₹345", "₹549", "₹399", "₹210", "₹343", "₹599", "₹395", "₹280", "₹249", "₹105", "₹549", "₹489", "₹690", "₹1,499", "₹329", "₹349", "₹135", "₹294", "₹747", "₹347", "₹299", "₹429", "₹199", "₹469", "₹395", "₹395", "₹1,197"];
ratings = ["4.4", "4.3", "4.1", "4", "4.4", "4.4", "3.7", "4", "4.2", "4.4", "4.2", "3.9", "4", "4.1", "4.2", "4", "4.2", "3.6", "4.2", "3.9", "4.1", "3.8", "4.4", "4", "4.3", "4.3", "3.7", "3.9", "3.7", "4.2", "4.2", "4", "4.1", "4.1", "4.4", "4", "4.2", "3.7", "4.1", "3.4"];
noOfRatings = ["(16,716)", "(3,367)", "(45,326)", "(11,060)", "(10,457)", "(6,241)", "(893)", "(580)", "(28)", "(223)", "(1,051)", "(12,953)", "(4)", "(272)", "(1,193)", "(120)", "(417)", "(807)", "(342)", "(17)", "(1,512)", "(320)", "(809)", "(4)", "(266)", "(1,252)", "(80)", "(169)", "(644)", "(375)", "(475)", "(147)", "(12)", "(14)", "(8)", "(530)", "(154)", "(519)", "(68)", "(87)"];
images = 
["https://rukminim1.flixcart.com/image/612/612/jvfk58w0/mop-set/s/m/h/14211-pigeon-original-imafgcyvb5zmx6br.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k48rwcw0/electric-insect-killer/v/f/t/8901023019029-hit-original-imafnfhcfjfrywtn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j7qi9ow0/mop-set/2/4/4/joy-pigeon-original-imaexwufnyzt6nct.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k08gfbk0/cleaning-glove/2/x/h/sg-03-kombuis-kitchenware-original-imaffq5njumdwzrh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4rcmfk0/home-cleaning-set/d/n/w/elegant-plastic-wringer-spin-mop-spotzero-by-milton-original-imafnh8zakpvycch.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0y6cnk0/home-cleaning-set/f/f/x/royale-spin-mop-spotzero-by-milton-original-imafkk9gjfbzyztf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/juoes280/electric-insect-killer/t/h/f/rechargeable-mosquito-killer-racket-electric-insect-killer-original-imaffgnuahjcpjft.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k3j1z0w0/cleaning-glove/n/z/y/jolly-gl-blue-jolly-gloves-original-imafg27fhyunsygm.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jz4g3gw0/cleaning-glove/f/k/f/sab220-spa-silicon-kitchen-gloves-multicolor-po1-shopatbargain-original-imafj4cjzxfzkfmm.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jped7rk0/toilet-paper-roll/f/s/u/white-2-ply-bathroom-tissue-toilet-roll-10-in-1-value-pack-230-x-original-imafbkzccbysntq7.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6jnfrk0/electric-insect-killer/n/y/7/mosquito-racket-bat-with-torch-with-wire-pick-ur-needs-original-imafzrfqggpe63dd.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jj8vyq80/mop-cleaning-wipe/a/k/m/d01-shivonic-original-imaf6uhdrb99ph5z.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jh0vb0w0/laundry-detergent/v/e/g/2-liquid-detergent-godrej-ezee-original-imaf55yzwbdek2ca.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyafukw0/insect-repellent/h/q/u/1000-wood-preservative-spray-pack-1-pidilite-original-imafggxezgy4yqgr.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7ry3680/electric-insect-killer/f/s/m/mr-5615-mr-right-original-imafpx5snmgmzycg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jr6o13k0/cleaning-glove/z/z/s/2pair-g-hokipo-original-imafdybyuw6xryfc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jped7rk0/toilet-paper-roll/q/8/h/white-2-ply-bathroom-tissue-toilet-roll-6-in-1-value-pack-240x6-original-imafbkzmdenwpxdb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/juoes280/electric-insect-killer/j/r/f/rechargeable-mosquito-bat-racket-with-led-torch-multicolour-original-imaffgtd6qvcnghz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k62i5jk0/electric-insect-killer/q/y/z/lithium-battery-high-range-mosquito-racket-bat-torch-pick-ur-original-imafzhs3b8xz7gpp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyt0knk0/cleaning-glove/z/j/7/gv-102-cx-mobone-original-imafgyjh6zxhyjgq.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jybvafk0/cleaning-glove/8/f/y/recx-987-niknats-original-imafg794vdhdfhup.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jb890nk0/cleaning-glove/u/v/8/549851-hokipo-original-imaez33htvckyycy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jwwffrk0/dish-cleaning-gel/y/w/t/lemon-concentrated-500-bottle-vim-original-imafhh88qdxufy5j.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k3erngw0/toilet-paper-roll/s/g/z/ultra-soft-clean-care-embossed-2-ply-toilet-tissue-paper-20-250-original-imafmjwmx2nr2tbs.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4324y80/air-freshener/g/h/w/225-violet-valley-bloom-225ml-bar-godrej-aer-original-imafn2szyztschwf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jq4353k0/air-freshener/u/y/z/1350-aer-spray-morning-violet-fresh-liquid-godrej-original-imafc72sdrxfth7a.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k4vmxzk0/home-cleaning-set/m/g/p/bl-combo-l-001-shivonic-original-imafnztfhphwrcmb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j9n3ekw0/cleaning-glove/2/z/x/sstyagi-yes-plus-original-imaezcyrxxme8mfg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/js3j5ow0/electric-insect-killer/b/c/x/ketsaal105-ketsaal-original-imafdqwy5qjkeuff.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jwi518w0/air-freshener/w/b/m/270-room-freshener-french-flora-270-ml-liquid-pour-home-original-imafh4yystpnygpg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jn97frk0-1/air-freshener/u/t/r/250-liquid-scents-of-india-freshmatic-air-freshner-refill-original-imaf9zqhbknzzcrf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ju1jqfk0/insect-repellent/m/f/g/180-bullet-bed-bug-egg-killer-make-1500-ml-ready-to-use-4-green-original-imaff97svx9zz9zu.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k572gsw0/cleaning-glove/g/v/g/2moy-1-silicone-gloves-black-charuvi-enterprises-original-imafm9g8tbpcxu39.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jw6pifk0/cleaning-glove/6/c/j/gjkg84-shopeleven-original-imafgxm3rysy8vjp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jxp08sw0/electric-insect-killer/s/f/x/ak-310-b-kitchenfest-original-imafhe42fa296fx8.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jwdupow0/cleaning-glove/f/c/f/resuable-household-rubber-hand-gloves-cleaning-gloves-for-original-imafhfu6zzpkyvss.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jped7rk0/toilet-paper-roll/w/k/v/white-2-ply-bathroom-tissue-toilet-roll-10-in-1-value-pack-20-original-imafbhyymkwaaan7.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k687wy80/electric-insect-killer/p/g/a/ksltbuemqtbt-ketsaal-original-imafzqurbrvvmzff.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k687wy80/electric-insect-killer/5/k/v/electric-mosquito-bat-insect-killer-ketsaal-original-imafzqk35qcypzhc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/home-cleaning-set/p/6/m/best-easy-to-clean-floor-magic-bucket-5-absorbers-floor-wet-and-original-imaejrzhdff956xr.jpeg?q=70"];

page1=[];
for(var i=0;i<40;i++)
{
    var item={title: names[i],
        rating: ratings[i],
        noOfRating: noOfRatings[i],
        price: prices[i],
        image: images[i]
        }
    page1.push(item);
}
page[3][3] = page1;




////////////////////////////////////////////////////////////// 0th ROW ///////////////////////////////////////////////////////////

var names=["Tang Orange Instant Drink Mix"
		,"Yogabar Wholegrain Breakfast Muesli+ - Dark Chocolate + Cranberry"
		,"Kellogg's Corn Flakes Original"
		,"Kellogg's Corn Flakes Real Almond & Honey"
		,"Complan Kesar Badam"
		, "Saffola Classic Masala Oats"
		, "Tang Mango Instant Drink Mix"
		, "Saffola Fittify Gourmet Lemongrass Lavender Instant Coffee"
		, "Horlicks Classic Malt"
		, "Red Label Tea Pouch"
		, "Kellogg's Crunchy Granola Almonds and Cranberries"
		, "Saffola Peppy Tomato Masala Oats"
		,"Women's Horlicks Calseal Formula - Chocolate Flavour"
		, "Yogabar Multigrain Energy Bars - (Vanilla Almond, 38gm x 10 Bars)"
		, "Horlicks Chocolate Delight Flavor"
		, "Lite Horlicks Badam Flavour"
		, "Junior Horlicks Chocolate Flavour - Stage 1"
		, "Protinex Vanilla Delight"
		, "Kellogg's Chocos"
		, "Yogabar Multigrain Energy Bars - (Chocolate Chunk Nut ,38gm x 10 Bars)"
		, "Tetley Masala Tea Bags Box"
		, "Junior Horlicks Vanilla Flavour - Stage 1"
		, "Tang Orange Instant Drink Mix, 500g(Each)"
		, "Yogabar Breakfast Protein Variety (Almond Coconut, Apricot & Fig, Blueberry, Apple Cinnamon Bars -6 x 50 g"
		, "Yogabar Wholegrain Breakfast Muesli+ - Fruits, Nuts + Seeds"
		, "Nescafe Sunrise Instant Coffee"
		, "Tetley Ginger, Mint & Lemon Green Tea Bags Box"
		, "Saffola Veggie Twist Masala Oats"
		, "Yogabar Wholegrain Breakfast Muesli+ - Fruits + Seeds & Dark Chocolate"
		, "Yogabar Wholegrain Breakfast Muesli+ - Dark Chocolate + Cranberry (Pack of 2)"
		, "Horlicks Chocolate Delight Flavour Mix"
		, "Women's Horlicks Calseal Formula - Caramel Flavour"
		, "Kellogg's Choco Moon and Stars"
		, "Nestle MILO Activ-Go Powder Health Drink (Chocolate Flavour)"
		, "Nescafe Gold Instant Coffee"
		, "Saffola Curry and Pepper Masala Oats"
		, "Farm Naturelle -Aloevera Wheatgrass Juice-The Finest 400 ml Strong Aloe Vera Wheat grass Juice - Herbal Fat reduction/Burner/Reducer"
		, "Yogabar Multigrain Variety Energy Bars -(Chocolate, Vanilla Almonds, Cashew Orange and Nuts & Seeds - 38gm x 10 Bars)"
		, "Protinex Original"
		, "Farm Naturelle Farm Naturelle-Strong Amla Juice -The Finest 400 MLX2 Packs Herbal Amla Juice"];

var prices=["₹182"
	    ,"₹269"
		,"₹175"
		,"₹331"
		, "₹299"
		, "₹180"
		, "₹190"
		,"₹220"
		,"₹390"
		,"₹299"
		,"₹180"
		,"₹294"
		,"₹360"
		,"₹355"
		,"₹280"
		,"₹285"
		,"₹535"
		,"₹160"
		,"₹360"
		,"₹180"
		,"₹270"
		,"₹257"
		,"₹261"
		,"₹269"
		,"₹319"
		,"₹470"
		,"₹175"
		,"₹538"
		,"₹538"
		,"₹97"
		,"₹278"
		,"₹470"
		,"₹219"
		,"₹261"
		,"₹175"
		,"₹314"
		,"₹360"
		,"₹535"
		,"₹491"];

var ratings=["4.4"
		,"4.4"
		,"4.5"
		,"4.5"
		,"4.6"
		,"4.4"
		,"4.4"
		,"4.3"
		,"4.5"
		,"4.4"
		,"4.5"
		,"4.4"
		,"4.5"
		,"4"
		,"4.4"
		,"4.5"
		,"4.5"
		,"4.3"
		,"4.5"
		,"4.2"
		,"4.3"
		,"4.5"
		,"4.4"
		,"4.3"
		,"4.4"
		,"4.6"
		,"4.4"
		,"4.4"
		,"4.4"
		,"4.4"
		,"4.4"
		,"4.5"
		,"4.6"
		,"4.5"
		,"4.5"
		,"4.4"
		,"4.1"
		,"4.3"
		,"4.3"
		,"4.2"];

var noOfRatings=["(6,006)"
		,"(2,497)"
		,"(3,648)"
		,"(1,418)"
		,"(964)"
		,"(7,754)"
		,"(3,949)"
		,"(3,631)"
		,"(18,013)"
		,"(2,747)"
		,"(765)"
		,"(5,855)"
		,"(3,426)"
		,"(53)"
		,"(4,367)"
		,"(1,381)"
		,"(1,163)"
		,"(17,399)"
		,"(3,589)"
		,"(192)"
		,"(500)"
		,"(1,565)"
		,"(6,006)"
		,"(719)"
		,"(3,633)"
		,"(1,602)"
		,"(13,593)"
		,"(3,735)"
		,"(3,633)"
		,"(2,497)"
		,"(3,674)"
		,"(2,695)"
		,"(180)"
		,"(178)"
		,"(2,666)"
		,"(1,152)"
		,"(81)"
		,"(665)"
		,"(7,146)"
		,"(123)"];

var images=["https://rukminim1.flixcart.com/image/612/612/k84t1u80/concentrate/q/e/x/orange-instant-drink-mix-tang-original-imafq7r8ar2duvh5.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jr0y9ow0/cereal-flake/k/z/w/400-wholegrain-breakfast-muesli-dark-chocolate-cranberry-box-original-imafcwpqdcwpn5d5.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jox7xjk0-1/cereal-flake/8/y/u/475-corn-flakes-original-box-kellogg-s-original-imafba2xjdsar7zh.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jox7xjk0-1/cereal-flake/n/p/n/650-corn-flakes-real-almond-honey-box-kellogg-s-original-imafba2xeuuqffgd.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jf1fafk0/milk-drink-mix/r/y/g/500-kesar-badam-carton-complan-original-imaf3hcuubunzmdp.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jvtujrk0/cereal-flake/c/u/c/500-classic-masala-oats-pouch-saffola-original-imafgghh2z8eswxr.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/k84t1u80/concentrate/5/s/x/mango-instant-drink-mix-tang-original-imafq7r8knyhcffa.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/k5cs87k0/coffee/j/7/y/200-sunrise-instant-coffee-box-nescafe-original-imafnxg8wz3ybg4z.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jph83gw0/coffee/q/j/x/30-green-coffee-instant-beverage-mix-lemongrass-lavender-instant-original-imafbpy8fh3fuph5.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/j4x207k0/milk-drink-mix/k/e/z/500-health-nutrition-drink-classic-malt-sachet-horlicks-original-imaevq3aybdje4cb.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jp2xoy80/cereal-flake/8/z/5/460-crunchy-granola-almonds-cranberries-pouch-kellogg-s-original-imafbetkegd6knbz.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jim0x3k0/cereal-flake/2/2/g/500-peppy-tomato-masala-oats-pouch-saffola-original-imaf6dmfzzstzfk7.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jk8lz0w0/milk-drink-mix/n/w/e/1-chocolate-delight-flavor-carton-horlicks-original-imaf7mwbzyn2kh7a.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jqo3b0w0/cereal-flake/v/s/z/380-multigrain-energy-bars-vanilla-almond-38gm-x-10-bars-box-original-imafcmhej2suruzh.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/k1118cw0/milk-drink-mix/y/6/h/400-calseal-formula-chocolate-flavour-plastic-bottle-women-s-original-imafkzpmabutrswp.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/j4irlow0/milk-drink-mix/a/d/m/450-lite-health-nutrition-drink-badam-flavor-sachet-horlicks-original-imaevet8dfcqysf2.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jy4q3680/milk-drink-mix/z/b/g/500-chocolate-flavour-stage-1-plastic-bottle-junior-horlicks-original-imafgfwjczgvzp7e.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/k6fd47k0/milk-drink-mix/d/f/h/400-vanilla-delight-tin-protinex-original-imafzvvqej5wkqyj.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jw9ke4w0/cereal-flake/h/h/b/375-chocos-box-kellogg-s-original-imafgzgdwkffwav8.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jqo3b0w0/cereal-flake/g/7/u/380-multigrain-energy-bars-chocolate-chunk-nut-38gm-x-10-bars-original-imafcmhemhqddfv6.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jcp4b680/tea/t/h/h/50-masala-black-tea-tea-bag-tetley-original-imaffzhfnzxn88uv.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/ka1e6q80/milk-drink-mix/w/9/q/500-original-flavour-stage-1-carton-junior-horlicks-original-imafrp3y2arrr67g.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/k7z3afk0/concentrate/q/p/n/orange-instant-drink-mix-500g-each-tang-original-imafq3baam7gvfxn.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jyhl1u80/cereal-flake/w/f/b/400-wholegrain-breakfast-muesli-dark-chocolate-cranberry-pack-of-original-imafgppzvapg5hub.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jr0y9ow0/cereal-flake/a/h/g/400-wholegrain-breakfast-muesli-fruits-nuts-seeds-box-yogabar-original-imafcwpqpgf58zbu.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jdeu8i80/milk-drink-mix/x/s/q/450-lite-regular-malt-plastic-bottle-horlicks-original-imaf2bzbzdwrfgyw.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/j63x7rk0/tea/p/w/4/100-ginger-mint-lemon-green-tea-tea-bag-tetley-original-imaewn8q9huzqqgm.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jvl9wnk0/cereal-flake/7/y/a/500-veggie-twist-masala-oats-pouch-saffola-original-imafgghhab2xj4mw.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jyq5oy80/cereal-flake/s/w/6/800-wholegrain-breakfast-muesli-fruits-seeds-dark-chocolate-box-original-imafgu9aazzrxygj.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jd1z9u80/milk-drink-mix/a/r/m/200-chocolate-delight-flavour-mix-plastic-bottle-horlicks-original-imaf2fkbxtuzfwvr.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/k3orqfk0/cereal-flake/h/f/8/1-2-choco-moon-and-stars-pouch-kellogg-s-original-imafmrnk6b5xdysr.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/k1118cw0/milk-drink-mix/t/v/z/400-calseal-formula-caramel-flavour-plastic-bottle-women-s-original-imafkzphmgwchfs6.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/k3j1z0w0/milk-drink-mix/y/f/h/400-activ-go-powder-health-drink-chocolate-flavour-pouch-nestle-original-imafmmpfnhfydzfm.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jsm3vrk0/coffee/g/c/g/50-gold-glass-bottle-instant-coffee-nescafe-original-imafe56yvbwecamj.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jvv9zm80/cereal-flake/r/n/9/500-0-curry-and-pepper-masala-oats-pouch-saffola-original-imafgghh2bez7xwx.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/ji0lbbk0/drinks-juice/e/z/g/400-aloevera-wheatgrass-juice-the-finest-400-ml-strong-aloe-vera-original-imaf5wywghrhzuhd.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jqqy6q80/cereal-flake/f/j/b/380-multigrain-variety-energy-bars-chocolate-vanilla-almonds-original-imafczgazehqsg8z.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/k6fd47k0/milk-drink-mix/s/f/u/400-original-tin-protinex-original-imafzvvqg2bxhvd6.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jezzukw0/milk-drink-mix/g/r/g/750-royale-chocolate-carton-complan-original-imaf3kbwf8azwmcv.jpeg?q=70"
		,"https://rukminim1.flixcart.com/image/612/612/jykfxjk0/cereal-flake/v/d/s/300-breakfast-protein-variety-box-yogabar-original-imafgppbca7h2zjg.jpeg?q=70"];		


var page1=[];


for(var i=0;i<40;i++)
{
	var item={title:names[i],
				rating:ratings[i],
				noOfRating:noOfRatings[i],
				price:prices[i],
				image:images[i]
			}
	page1.push(item);

		
}
page[0][0]=page1;

var names=["Happilo 100% Natural California Almonds"
,"Happilo Premium Seedless Green Raisins"
,"Happilo Premium International Healthy Nutmix"
,"Happilo 100% Natural California Almonds"
,"Happilo Premium Dried Afghani Figs"
,"Wonderland Foods Regular Brown Walnut Kernel Walnuts"
,"Happilo Premium Roasted and Salted Cashew Nuts"
,"Kitchens of India Yellow Dal Tadka and Vegetable Pulao 785 g"
,"Wonderland Raw Cashews"
,"Pillsbury Vanilla Cooker Cake Mix 600 g"
, "Wonderland Kernels Box Walnuts"
,"Wonderland Foods Premium Whole Cashews"
,"Betty Crocker Pancake Mix 500 g"
,"Eighty7 California Almonds"
,"Wonderland Foods Hand Picked Kashmiri Walnut Walnuts"
,"Betty Crocker French Vanilla Cake Mix 520 g"
,"Wonderland California Inshell Walnuts"
,"Happilo Premium Afghani Seedless Black Raisins"
,"Wonderland Foods Regular Brown Walnut Kernel (200g x 2) Walnuts"
,"Glomin Premium Seedless Green Raisins (Kishmish) Raisins"
,"Wonderland Foods Munakka with Seeds(king size) Raisins"
,"Wonderland Foods Roasted Makhana Chaat Masala, Peri Peri, Mint Chatpata & Jalepeno Foxnuts 400g (Pack of 4) (100g Each)"
,"Wonderland California Almonds 1kg (Pack of 2) (500g Each) Almonds"
,"Markstor Sukkary Dates - Wet and Fresh with Natural Sweetness Dates Dates"
, "Shivram Peshawari & Bros Kernels Pistachios"
,"Wonderland Makhana Premium Chaat Masala Foxnuts Assorted Nuts"
,"24 nature PREMIUM CASHEW EXPORT QUALITY Cashews"
,"Wonderland Roasted Makhana Tangy Masala & Chaat Masala Foxnuts Assorted Nuts"
,"Wonderland Foods(Device) 100% Natural Premium Quality Plain Raw Cashews, 1Kg Pack of 2 (500g Each) Cashews"
,"Glomin Premium Roasted and Salted California Pistachios Pistachios"
,"Wonderland Whole & Sliced Cranberries, Blueberries & Prunes Dried Fruits Combo Pack of 4 (750g) Blueberry, Cranberries, Prunes"
,"Wonderland FOODS (DEVICE) Roasted Makhana Sea Salt and Vinegar Foxnuts 100 g - Pack of 3"
,"Shivram Peshawari & Bros Khubani Apricots"
,"Happilo Premium International Exotic Dried Assorted Fruit"
,"Wonderland Foods (Device) Daily Needs Dry Fruits Combo Pack 1kg Pistachios, Cashews, Walnuts, Almonds, Raisins"
,"24 Nature Imported Almonds Almonds"
,"Wonderland Roasted Makhana Wasabi & Peri Peri Foxnuts Assorted Nuts"
,"Wonderland Jumbo Roasted & Salted Pistachios"
,"Wonderland Makhana Mint Chatpata Foxnuts (Pack of 2-100g Each) Assorted Nuts"
,"Wonderland Pitted Dried Plums 1kg ( Pack of 5-200g Each) Prunes"];

var prices=["₹220"
,"₹149"
,"₹292"
,"₹412"
,"₹310"
,"₹299"
,"₹316"
,"₹257"
,"₹594"
,"₹274"
,"₹385"
,"₹649"
,"₹184"
,"₹999"
,"₹449"
,"₹289"
,"₹785"
,"₹200"
,"₹599"
,"₹289"
,"₹247"
,"₹580"
,"₹999"
,"₹575"
,"₹1,089"
,"₹160"
,"₹349"
,"₹311"
,"₹1,099"
,"₹379"
,"₹917"
,"₹480"
,"₹359"
,"₹239"
,"₹1,239"
,"₹479"
,"₹311"
, "₹335"
, "₹311"
,"₹755"];

var ratings=["4.4"
,"4.4"
,"4.2"
,"4.5"
,"4.2"
,"4.1"
,"4.3"
,"4.4"
,"4.1"
,"4.3"
,"4.1"
,"4.2"
,"4.3"
,"4.3"
,"4.3"
,"4.1"
,"4.2"
,"4.3"
,"4.4"
,"4.3"
,"3.9"
,"4.6"
,"4.2"
,"4.5"
,"4.3"
,"4.1"
,"4.3"
,"4"
,"4.2"
,"4.2"
, "4.2"
,"4.2"
,"4.2"
,"4.3"
,"5"
,"4.3"
,"4.2"
,"4.2"];

for(var i=ratings.length; i<40; i++)
{ratings[i] = "4.1"};

var noOfRatings=["(30,521)"
,"(11,447)"
,"(4,843)"
,"(1,255)"
,"(3,746)"
,"(72)"
,"(616)"
,"(16)"
,"(660)"
,"(16)"
,"(201)"
, "(11)"
, "(479)"
,"(3,318)"
, "(58)"
, "(365)"
, "(275)"
,"(4,805)"
,"(21)"
,"(818)"
, "(57)"
,"(9)"
,"(85)"
,"(17)"
,"(102)"
, "(47)"
,"(23)"
,"(6)"
,"(805)"
,"(195)"
,"(14)"
,"(34)"
,"(156)"
,"(47)"
,"(3)"
,"(11)"
,"(13)"
,"(13)"];

for(var i=noOfRatings.length; i<40; i++)
{noOfRatings[i] = "(105)"};

var images=["https://rukminim1.flixcart.com/image/612/612/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7usyvk0/nut-dry-fruit/g/p/a/250-premium-seedless-green-pouch-happilo-original-imafpzshscghmtk9.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/nut-dry-fruit/u/c/t/200-premium-international-healthy-nutmix-pouch-happilo-original-imafpwgxqvj8xhya.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jph83gw0/nut-dry-fruit/r/a/q/400-100-natural-california-pouch-happilo-original-imafbpzy7bzrr55a.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/nut-dry-fruit/e/g/s/200-premium-dried-afghani-pouch-happilo-original-imafpwgxvmwuku5h.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvfk58w0/nut-dry-fruit/9/w/5/200-foods-regular-brown-walnut-kernel-pouch-wonderland-original-imafgc9vybc5hfkc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7usyvk0/snack-savourie/w/b/y/200-premium-toasted-and-salted-cashew-nuts-pouch-happilo-original-imafpzsxsdddazgs.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k5r2mq80/ready-meal/z/7/h/785-yellow-dal-tadka-and-vegetable-pulao-x2-kitchens-of-india-original-imafzd53yqunxvgz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k2z1t3k0/nut-dry-fruit/9/t/e/500-raw-pouch-wonderland-original-imafm7f4fj4hg3yc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k3khevk0/cookie-biscuit/3/z/z/600-vanilla-eggless-pillsbury-original-imafmnz46dmvfd2w.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jdkjzww0/nut-dry-fruit/a/w/w/200-kernels-box-box-wonderland-original-imaf2fy5wjzad4tj.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jxuq07k0/nut-dry-fruit/e/a/v/500-foods-premium-whole-plastic-bottle-wonderland-original-imafhz86wejp2vaf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j84so7k0/ready-mix/w/6/m/500-pancake-mix-baking-mix-betty-crocker-original-imaey7zk25k9jkws.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jsyyufk0/nut-dry-fruit/z/b/g/1000-california-pouch-eighty7-original-imafedffeqehgamj.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jv9udu80/nut-dry-fruit/w/x/d/250-foods-hand-picked-kashmiri-walnut-pouch-wonderland-original-imafg5nzh8st6aey.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jjhglu80/ready-mix/4/g/j/520-french-vanilla-cake-mix-dessert-mix-betty-crocker-original-imaf7fufwkxccjsw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jyt0knk0/nut-dry-fruit/e/z/z/2-foods-premium-quality-jumbo-size-california-inshell-akhrot-original-imafh48hgagpe6hz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ji4vmvk0/nut-dry-fruit/k/w/b/250-premium-afghani-seedless-black-pouch-happilo-original-imaf5zthzsfd7dah.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jvfk58w0/nut-dry-fruit/h/6/3/400-foods-regular-brown-walnut-kernel-200g-x-2-pouch-wonderland-original-imafgc9fhwxz68gz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ka2tmkw0/nut-dry-fruit/4/m/v/500-kishmish500-pouch-glomin-original-imafrqc7cgcbhzzm.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jwjkh3k0/nut-dry-fruit/q/n/4/1-foods-munakka-with-seeds-king-size-pouch-wonderland-original-imaffgu6daudznxh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jtoorrk0/snack-savourie/8/x/w/400-foods-roasted-makhana-chaat-masala-peri-peri-mint-chatpata-original-imafesjhypsggqfz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jwkzwy80/nut-dry-fruit/y/u/g/1000-california-almonds-1kg-pack-of-2-500g-each-pouch-wonderland-original-imafg3mqnprrb8zr.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jve4pe80/nut-dry-fruit/x/t/g/500-sukkary-dates-wet-and-fresh-with-natural-sweetness-dates-box-original-imafg9f3tazwcghy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jfea93k0/nut-dry-fruit/8/z/z/450-kernels-pouch-shivram-peshawari-bros-original-imaf3uz7xkvxvyng.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j687jbk0/nut-dry-fruit/h/b/g/100-makhana-premium-chaat-masala-foxnuts-mason-jar-wonderland-original-imaevxjqzpgqzh6g.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k2arbm80/nut-dry-fruit/k/7/a/400-cashews-imported-quality-vacuum-pack-24-nature-original-imafhzmkabgbkfhw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jsj90280/nut-dry-fruit/j/5/y/200-roasted-makhana-tangy-masala-chaat-masala-foxnuts-mason-jar-original-imafe36mh7jjjfnh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k2tc1ow0/nut-dry-fruit/e/e/k/1000-foods-device-100-natural-premium-quality-plain-raw-cashews-original-imafm2um8rkn6xwh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k12go7k0/nut-dry-fruit/j/f/x/250-pistaamirican-pouch-glomin-original-imafkq9j9pqvbzkw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jmmce4w0/nut-dry-fruit/v/f/h/750-whole-sliced-cranberries-blueberries-prunes-dried-fruits-original-imaf9gb2zwrry4g5.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/ju04akw0/snack-savourie/b/h/h/300-foods-device-roasted-makhana-sea-salt-and-vinegar-foxnuts-original-imaff6ytnhfffksz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/nut-dry-fruit/x/r/q/shivram-peshawari-bros-750-khubani-original-imaegmrzjjjjzftc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/nut-dry-fruit/z/u/y/200-premium-international-exotic-dried-pouch-happilo-original-imafpwgzxuzffucw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jtyouq80/nut-dry-fruit/q/u/4/1000-foods-device-daily-needs-dry-fruits-combo-pack-1kg-box-original-imaff5wrkrkpss2v.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k3hmj680/nut-dry-fruit/3/v/h/400-imported-almonds-vacuum-pack-24-nature-original-imafmk2gj6cadryu.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jsj90280/nut-dry-fruit/p/e/g/200-roasted-makhana-wasabi-peri-peri-foxnuts-mason-jar-original-imafe36j2zws8hcc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jbs96kw0/nut-dry-fruit/k/r/c/200-jumbo-roasted-salted-pouch-wonderland-original-imaffffrcyqgghgv.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jcatwnk0/nut-dry-fruit/z/e/h/200-makhana-mint-chatpata-foxnuts-pack-of-2-100g-each-mason-jar-original-imaffc8ktqdpqm2t.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jn6ck280/nut-dry-fruit/w/e/h/1000-pitted-dried-plums-1kg-pack-of-5-200g-each-pouch-wonderland-original-imaf9x4436w9bhns.jpeg?q=70"];

var page1=[];


for(var i=0;i<40;i++)
{
	var item={title:names[i],
				rating:ratings[i],
				noOfRating:noOfRatings[i],
				price:prices[i],
				image:images[i]
			}
	page1.push(item);

		
}
page[0][1]=page1;

var names=["Saffola Total Pro Heart Conscious Blended Oil Can"
,"Disano Extra Light Olive Oil Plastic Bottle"
,"Betty Crocker French Vanilla Cake Mix 520 g"
,"Farm Naturelle 100% Pure Desi Cow Ghee from A2 Milk (500 Mlx 2) 1000 ml Glass Bottle"
,"Del Monte Classic Olive Oil Tin"
,"Farm Naturelle Farm Naturelle-Virgin Pure Raw Natural Unheated Unprocessed Forest Honey - Jungle Flower Honey-700 GMS-Glass Bottle"
,"Farm Naturelle Pure Desi Cow Ghee from A2 Milk 300Ml Ghee 300 ml Plastic Bottle"
,"Farm Naturelle Pure Raw Natural Unheated Unprocessed Acacia Honey 815 Grams "
,"Farm Naturelle 100% Pure A2 Gir Cow Desi Ghee Through Vedic Bilona Method 750 ml Mason Jar"
,"Ayuramrit Multiflora jam"
,"Farm Naturelle Real Vana Tulsi Forest Honey (250 GMS) and Real Cinnamon Infused Forest Honey (40Gms) Combo-Immense Medicinal Value"
,"Farm Naturelle 100 % Pure Organic Extra-Virgin Cold Pressed Coconut oil 600 ml) Coconut Oil Plastic Bottle"
,"Farm Naturelle Farm Naturelle-Virgin Raw Natural Unprocessed Wild Berry (Sidr) Forest Flower Honey - 700 Grams Glass Jar"
,"Farm Honey Jamun Honey"
,"Borges Extra Light Olive Oil Plastic Bottle"
,"Farm Naturelle Pure Raw Natural Unheated Unprocessed Wild berry Honey 815 Grams "
,"Farm Honey Garlic Honey"
,"Farm Naturelle Farm Naturelle-(Free Cinnamon Powder Rs.69/-)Raw Natural Unprocessed Tulsi Forest Flower Honey & Jungle Flower Forest Honey & Acacia Flower Honey (250 Gms x 3) (Ayurved Recommended)-Huge Medicinal Value"
,"Farm Naturelle Farm Naturelle-Real Clove infused Forest Honey (250 Gms) and Vana Tulsi Forest Honey (40Gms) Combo-Immense Medicinal Value"
,"Farm Naturelle Farm Naturelle-Virgin Eucalyptus Forest 100% Pure Raw Un-Processed Honey 700 Gms (Ayurved recommended)"
,"Farm Naturelle Real Clove Infused Forest Honey (250 GMS) and Real Ginger Infused Forest Honey (40Gms) Combo-Immense Medicinal Value"
,"Farm Naturelle Eucalyptus Honey"
,"Farm Naturelle Farm Naturelle-Virgin Cinnamon infused 100% Pure Raw Natural Wild Forest Honey-700 Gms(Glass bottle)-Delicious and Healthy"
,"Farm Naturelle Raw Honey Of 6 Flavours - Jungle,Jamun, Litchi,Eucalyptus,Wild Berry,Acacia Honey (250 Gms X 6)"
,"Farm Naturelle Acacia Honey"
,"Farm Naturelle Raw Natural Unprocessed Tulsi Forest Flower Honey & Jungle Flower Forest Honey & Eucalyptus Flower Honey (400 Gms x 3) (Ayurved Recommended)-Huge Medicinal Value Combo"
,"Disano Extra Virgin Olive Oil Plastic Bottle"
,"Farm Naturelle Cinnamon Honey"
,"Farm Naturelle 100% Pure Raw Natural Jungle/Forest Honey and Forest Acacia Honey (815 Grams x 2 Packs)-Delicious and Healthy"
,"Farm Naturelle Farm Naturelle-Real Vana Tulsi Forest Honey (250 Gms) and Real Clove Infused Forest Honey (250 Gms) with (40 GMS X 2) Real Ginger infused Forest honey and Cinnamon Infused Forest honey Combo-Immense Medicinal Value"
,"Farm Naturelle Real Ginger Infused Forest Honey (815 GMS)-Immense Medicinal Value"
,"UMANAC ORGANIC COW Ghee 500 ml Glass Bottle"
,"Farm Naturelle 100% Pure A2 Gir Cow Desi Ghee (Glass Bottle- 200 ml) 200 ml Glass Bottle"
,"Farm Naturelle Cinnamon Infused Natural Wild Forest Honey-400 Grams "
,"Farm Naturelle Cinnamon Infused Pure Raw Natural Forest Honey and Big Delicious Figs (Anjeer)-250 GMS"
,"Farm Naturelle 100% Pure A2 Gir Cow Desi Ghee (Glass Bottle- 300 ml) 300 ml Glass Bottle"
,"Farm Naturelle FARMHNY"
,"Farm Naturelle Farm Naturelle-Raw Natural Unprocessed Tulsi Forest Flower Honey & Jamun Flower Forest Honey & Acacia Flower Honey (250 Gms x 3) (Ayurved Recommended)-Huge Medicinal Value"
,"Farm Naturelle 100% Pure A2 Gir Cow Desi Ghee (Glass Bottle- 2x 500ml) 1000 ml Glass Bottle"
,"Farm Naturelle Real Ginger Infused Forest Honey (250 Gms) and Real Clove Infused Forest Honey (250 Gms) with (40 GMS X 2) Real Vana Tulsi Forest honey and Cinnamon Infused Forest honey Combo"];

var prices=["₹400"
,"₹999"
,"₹289"
,"₹1,425"
,"₹407"
,"₹448"
,"₹560"
,"₹439"
,"₹1,525"
,"₹295"
, "₹240"
, "₹647"
, "₹435"
,"₹390"
,"₹1,149"
,"₹455"
,"₹335"
,"₹602"
, "₹267"
, "₹494"
, "₹267"
, "₹211"
, "₹581"
, "₹1,014"
,"₹211"
,"₹829"
,"₹220"
,"₹236"
,"₹939"
,"₹528"
,"₹637"
,"₹519"
,"₹541"
,"₹346"
,"₹391"
,"₹704"
,"₹379"
,"₹593"
,"₹1,946"
,"₹670"];

var ratings=["4.5"
,"4.5"
,"4.1"
,"4.4"
,"4.3"
,"3.8"
,"4.6"
,"4.3"
,"3.3"
,"4"
,"4.5"
,"4.1"
,"4.7"
,"4.5"
,"4.3"
,"4.2"
,"4.8"
,"4.7"
,"4.5"
,"4.5"
,"4.5"
,"4.4"
,"4.4"
,"4.5"
,"4.8"
,"4.5"
, "4.1"
, "4.4"
,"4.3"
,"4"
,"4.4"
,"4.2"
,"4.4"
,"4.6"
,"4.6"];

for(var i=ratings.length; i<40; i++)
{ratings[i] = "4.1"};


var noOfRatings=["(2,129)"
,"(321)"
,"(365)"
,"(241)"
,"(70)"
,"(8)"
,"(9)"
,"(6)"
,"(23)"
,"(9)"
, "(15)"
, "(8)"
, "(3)"
,"(172)"
,"(71)"
,"(14)"
,"(5)"
, "(23)"
,"(21)"
,"(25)"
,"(10)"
,"(217)"
,"(7)"
,"(2)"
,"(5)"
,"(6)"
,"(110)"
,"(10)"
,"(8)"
,"(4)"
,"(7)"
,"(36)"
,"(25)"
,"(5)"
,"(5)"];

for(var i=noOfRatings.length; i<40; i++)
{noOfRatings[i] = "(105)"};

var images=["https://rukminim1.flixcart.com/image/612/612/k8ot7rk0/edible-oil/g/z/t/2-total-pro-heart-conscious-can-blended-oil-saffola-original-imafqnh8f8eaeqzk.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jzeg6fk0/edible-oil/h/k/r/2-extra-light-plastic-bottle-olive-oil-disano-original-imafjf6gzvsym9xf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jjhglu80/ready-mix/4/g/j/520-french-vanilla-cake-mix-dessert-mix-betty-crocker-original-imaf7fufwkxccjsw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0zlsi80/ghee/y/y/g/1000-100-pure-desi-cow-ghee-from-a2-milk-500-mlx-2-glass-bottle-original-imafknzbyvgx9fgd.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jl2m7ww0/edible-oil/z/n/p/500-classic-tin-olive-oil-del-monte-original-imaf8abbyangwnye.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jqwny4w0/honey/x/b/x/700-farm-naturelle-virgin-pure-raw-natural-unheated-unprocessed-original-imafcsh8afjrju6x.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jh2aqvk0/ghee/z/r/f/300-pure-desi-cow-ghee-from-a2-milk-300ml-plastic-bottle-farm-original-imaf56y3vmcagve7.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jf751u80/honey/x/p/j/815-pure-raw-natural-unheated-unprocessed-acacia-honey-815-grams-original-imaf3pvhz2zafhjj.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k45x0nk0/ghee/u/x/n/750-100-pure-a2-gir-cow-desi-ghee-through-vedic-bilona-method-original-imafn3zxw63eym3m.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jzd0qkw0/honey/z/k/p/500-multiflora-jam-ayuramrit-original-imafjeapbatzfzew.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jp5sknk0/honey/u/z/z/290-real-vana-tulsi-forest-honey-250-gms-and-real-cinnamon-original-imafbca2bzzrfqxg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6v2ykw0/edible-oil/h/q/d/600-100-pure-organic-extra-virgin-cold-pressed-coconut-oil-600-original-imafp7kv57bguvsh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jpsnma80/honey/u/m/h/700-farm-naturelle-virgin-raw-natural-unprocessed-wild-berry-original-imafbuf4bsypmytz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jokcyvk0/honey/z/z/e/250-jamun-honey-farm-honey-original-imafbyfrsy69bjhf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jy3anbk0/edible-oil/q/6/a/2-extra-light-plastic-bottle-olive-oil-borges-original-imafgegnd8qxhfy7.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jf751u80/honey/s/c/a/815-pure-raw-natural-unheated-unprocessed-wild-berry-honey-815-original-imaf3pvgrdavvq3t.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/joen7gw0/honey/k/p/p/250-garlic-honey-farm-honey-original-imafav4hfhefk2gm.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jox7xjk0-1/honey/m/7/k/750-farm-naturelle-free-cinnamon-powder-rs-69-raw-natural-original-imafb7sxbfusabmv.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jqy3dzk0/honey/z/y/p/290-farm-naturelle-real-clove-infused-forest-honey-250-gms-and-original-imafauh7ugf7vgnf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jpsnma80/honey/u/6/f/700-farm-naturelle-virgin-eucalyptus-forest-100-pure-raw-un-original-imafbua45jywegaf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jt7jhjk0/honey/r/r/4/290-real-clove-infused-forest-honey-250-gms-and-real-ginger-original-imafegcgtq8haewr.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jefzonk0/honey/b/z/e/250-eucalyptus-honey-farm-naturelle-original-imaf33jg4mzqzzsg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jpsnma80/honey/3/g/x/700-farm-naturelle-virgin-cinnamon-infused-100-pure-raw-natural-original-imafbu6gpdh9skzn.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jf8khow0/honey/f/b/n/1500-raw-honey-of-6-flavours-jungle-jamun-litchi-eucalyptus-wild-original-imaf3px4tq9w7k7r.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jefzonk0/honey/g/c/s/250-acacia-honey-farm-naturelle-original-imaf33j87qq5hybc.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jtaed8w0/honey/g/q/v/1240-raw-natural-unprocessed-tulsi-forest-flower-honey-jungle-original-imafegkcurrpjujz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jzeg6fk0/edible-oil/n/m/f/250-plastic-bottle-extra-virgin-olive-oil-disano-original-imafjf6ghhbamz7m.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jefzonk0/honey/e/t/d/250-cinnamon-honey-farm-naturelle-original-imaf2ywfjgqpkgea.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jf751u80/honey/g/2/c/1630-100-pure-raw-natural-jungle-forest-honey-and-forest-acacia-original-imaf3ptwgryfxryz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/josxlzk0/honey/v/c/h/580-farm-naturelle-real-vana-tulsi-forest-honey-250-gms-and-real-original-imafb6zkb32m625a.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jp02t8w0/honey/e/b/h/1630-00-tulsi-honey-815-gms-x-2-real-vana-tulsi-and-real-ginger-original-imafaj9akfwpqgnf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k4vmxzk0/ghee/3/g/c/500-organic-cow-glass-bottle-umanac-original-imafnzhbzsyeyddq.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jynat8w0/ghee/d/h/d/200-100-pure-a2-gir-cow-desi-ghee-glass-bottle-200-ml-glass-original-imafgu7zzeu7xt7e.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jf8khow0/honey/c/3/c/400-cinnamon-infused-natural-wild-forest-honey-400-grams-farm-original-imaf3pxfyfbucqtn.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jp5sknk0/honey/2/p/g/1-25-set-of-5-aesthetically-designed-jute-bag-with-cinnamon-original-imafbdcb6bdfhuvb.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jyrl4sw0/ghee/u/j/m/300-100-pure-a2-gir-cow-desi-ghee-glass-bottle-300-ml-glass-original-imafgu8hdr39zrhw.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/honey/y/3/c/250-farmhny-flavored-farm-naturelle-original-imaerw3dzkpszbcn.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jp02t8w0/honey/h/h/d/750-00-farm-naturelle-raw-natural-unprocessed-tulsi-forest-original-imafb6szyytnguw3.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jyoq93k0/ghee/f/f/x/1000-100-pure-a2-gir-cow-desi-ghee-glass-bottle-2x-500ml-glass-original-imafgub7qsmggrju.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jtaed8w0/honey/y/z/q/500-real-ginger-infused-forest-honey-250-gms-and-real-clove-original-imafegbwurdkwrjj.jpeg?q=70"];

var page1=[];


for(var i=0;i<40;i++)
{
	var item={title:names[i],
				rating:ratings[i],
				noOfRating:noOfRatings[i],
				price:prices[i],
				image:images[i]
			}
	page1.push(item);

		
}
page[0][2]=page1;


var names=["Cadbury Bournvita Health Drink Nutrition Drink"
,"MuscleBlaze Biozyme Whey Protein"
,"Cadbury Bournvita Inner Strength Nutrition Drink"
,"Pediasure Specialized Nutrition Energy Drink"
,"Glucon-D Instant Energy Drink"
,"MuscleBlaze Raw Whey Protein"
,"WOW Life Science Omega-3 Fish Oil 1000 mg Triple Strength (550mg EPA 350mg DHA)"
, "Protinex Mama Nutrition Drink"
,"Gatorade Sports Powder Mix - Sipper Pack Sports Drink"
,"Pediasure Specialized Nutrition Drink Powder Energy Drink"
, "Glucon-D Regular Instant Energy Drink"
, "PediaSure Vanilla Delight Nutrition Drink"
,"Optimum Nutrition Micronized Creatine"
, "Healthkart Biotin Maximum Strength for Hair Skin & Nails-10000 mcg"
,"MuscleBlaze Super Gainer XXL Weight Gainers/Mass Gainers"
, "MuscleBlaze Fuel One Whey Protein Whey Protein"
,"Glucon-D Energy Drink"
,"Muscletech Performance Series Nitro Tech Whey Protein"
,"Ensure Diabetes Care Vanilla Delight Nutrition Drink"
, "Accumass Weight Gain Granules 525gm Weight Gainers/Mass Gainers"
,"Cadbury Bournvita Health Nutrition Drink"
,"Cadbury Bournvita Health Drink Nutrition Drink"
,"MuscleBlaze Super Gainer XXL Weight Gainers/Mass Gainers"
,"TrueBasics Omega-3 Fish Oil"
,"MuscleBlaze Creatine Monohydrate Creatine"
,"CARBAMIDE FORTE Multivitamin Gummies for Kids - 90 Veg Gummies"
,"MuscleBlaze Super Gainer XXL Weight Gainers/Mass Gainers"
, "MuscleBlaze Whey Energy with DigeZyme Whey Protein"
,"MuscleBlaze Weight Gainer with Added DigeZyme Weight Gainers/Mass Gainers"
,"Healthkart Glutathione, 30 capsules"
,"Optimum Nutrition Gold Standard 100% Whey Protein"
,"MuscleBlaze L-Carnitine L-Tartrate Fat Burner"
,"Ensure Diabetes Care Chocolate Nutrition Drink"
,"TrueBasics Omega Beauty"
,"Optimum Nutrition Gold Standard 100% Whey Protein"
,"Saffola Fittify Gourmet Slim Meal Shake Whey Protein"
,"PediaSure Premium Chocolate Nutrition Drink"
, "Ensure Chocolate Nutrition Drink"
,"Endura Mass Weight Gainers/Mass Gainers"
,"Healthkart Milk Thistle"];

var prices=["₹280"
,"₹2,199"
,"₹630"
,"₹335"
,"₹138"
,"₹1,199"
,"₹799"
,"₹342"
,"₹179"
,"₹335"
, "₹100"
, "₹533"
,"₹1,045"
,"₹499"
,"₹1,469"
, "₹1,199"
, "₹138"
,"₹3,848"
,"₹634"
, "₹411"
,"₹217"
, "₹198"
,"₹755"
, "₹649"
, "₹410"
, "₹424"
, "₹1,999"
, "₹1,399"
, "₹449"
, "₹749"
, "₹2,589"
, "₹635"
, "₹317"
, "₹1,019"
, "₹2,404"
, "₹952"
, "₹1,080"
, "₹248"
, "₹535"
, "₹839"];

var ratings=["4.5"
, "4.5"
, "4.5"
,"4.5"
, "4.5"
,"4.2"
,"4.4"
,"4.4"
,"4.5"
, "4.4"
, "4.5"
, "4.5"
, "4.2"
, "3.9"
, "4"
, "4.3"
, "4.4"
, "4.2"
, "4.5"
, "3.9"
, "4.5"
, "4.5"
, "4"
, "4.3"
, "4.1"
, "4.4"
, "4"
, "4.2"
, "3.9"
, "4.2"
, "4.2"
, "4"
, "4.4"
,"3.9"
, "4.2"
, "4.5"
, "4.5"
, "4.4"
, "3.9"
, "3.9"];

var noOfRatings=["(10,940)"
,"(376)"
,"(7,751)"
, "(601)"
,"(4,357)"
, "(32,678)"
, "(5,649)"
, "(1,915)"
, "(3,639)"
,"(386)"
, "(1,811)"
, "(9,645)"
, "(13,321)"
, "(1,013)"
, "(65,770)"
, "(430)"
, "(4,005)"
, "(3,849)"
, "(4,450)"
, "(792)"
, "(11,602)"
, "(10,940)"
, "(65,770)"
, "(623)"
, "(30,819)"
, "(95)"
, "(65,770)"
, "(8,596)"
, "(19,711)"
, "(123)"
, "(50,994)"
, "(6,131)"
, "(996)"
, "(73)"
, "(50,994)"
, "(84)"
, "(8,030)"
, "(1,133)"
, "(39,433)"
, "(869)"];

var images=["https://rukminim1.flixcart.com/image/612/612/k6s82vk0/energy-sport-drink-mix/g/e/x/750-health-drink-cadbury-bournvita-original-imafp669zzf9drjf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k33c4nk0/protein-supplement/j/y/m/biozyme-nut6374-02-muscleblaze-original-imafmbfmgeqpbbw9.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6s82vk0/energy-sport-drink-mix/y/m/k/2-inner-strength-cadbury-bournvita-original-imafp66asxnzu6ze.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6pd7680/energy-sport-drink-mix/y/5/7/400-specialized-nutrition-drink-powder-pediasure-original-imafp3xpymrusngj.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jo37onk0/energy-sport-drink-mix/e/7/k/450-tangy-orange-glucon-d-original-imafamhbg4sgftwc.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k5bcscw0/protein-supplement/z/g/v/raw-nut4919-02-muscleblaze-original-imafnxks3matwudd.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k2xmd8w0/vitamin-supplement/w/z/w/60-omega-3-fish-oil-1000-mg-triple-strength-550mg-epa-350mg-dha-original-imafm6dujzya52cf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jlo1tow0/energy-sport-drink-mix/y/y/3/250-mama-protinex-original-imaf4aubtcxhz5y8.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k3j1z0w0/energy-sport-drink-mix/t/q/s/125-sports-powder-mix-lemon-flavour-sipper-pack-gatorade-original-imafmmsnxzcjcfkp.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6pd7680/energy-sport-drink-mix/k/q/7/400-specialized-nutrition-drink-powder-pediasure-original-imafp3xszvqbktzg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jo37onk0/energy-sport-drink-mix/d/q/t/450-instant-energy-original-glucon-d-original-imafamhbube5dkxf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jevpj0w0/energy-sport-drink-mix/9/7/c/400-vanilla-delight-pediasure-original-imaf3hfqpc4fqvff.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k8kiw7k0/protein-supplement/z/z/j/micronized-748927023848-optimum-nutrition-original-imafqk8arbytnrdh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/js4yljk0/vitamin-supplement/z/y/f/90-biotin-10000-mcg-healthkart-original-imafdnhgn2adtywj.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k7c88sw0/protein-supplement/d/m/p/super-gainer-xxl-nut5225-02-muscleblaze-original-imafphhk6wrctbry.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k4lmv0w0/protein-supplement/k/4/e/fuel-one-whey-protein-nut6557-01-muscleblaze-original-imafngh977ymn7xy.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jo37onk0/energy-sport-drink-mix/a/q/e/450-na-glucon-d-original-imafamhbkfgmmkte.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jusp3m80/protein-supplement/r/r/h/performance-series-nitro-tech-631656713671-muscletech-original-imaffumsghbpczp5.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jevpj0w0/energy-sport-drink-mix/h/r/r/400-diabetes-care-vanilla-ensure-original-imaf3hfqbjbyghgg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jjylw280/body-skin-treatment/s/y/h/525-weight-gain-granules-525gm-accumass-original-imaf7f6rmzxrgafv.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jr0y9ow0/energy-sport-drink-mix/m/r/w/500-pro-health-chocolate-cadbury-bournvita-original-imafcx6zg3sazzzk.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0igia80/milk-drink-mix/z/p/j/1-chocolate-health-drink-1kg-pouch-1-kg-pouch-bournvita-original-imafg2gkhdzrwszw.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9re3rk0/protein-supplement/m/9/z/super-gainer-xxl-nut5225-03-muscleblaze-original-imafrhfwk4a28hx7.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k2z1t3k0/vitamin-supplement/w/k/c/60-omega-3-fish-oil-truebasics-original-imafk8fzsvpbchck.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/ji4vmvk0-1/protein-supplement/f/p/2/nut1369-04-muscleblaze-original-imaf4g9zvefnbtnv.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k4u7i4w0/vitamin-supplement/z/u/u/90-multivitamin-gummies-for-kids-90-veg-gummies-carbamide-forte-original-imafnmx48gwt4nyz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jz8qf0w0/protein-supplement/y/m/9/super-gainer-xxl-nut5225-01-muscleblaze-original-imafjaxa9hagnz6h.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/ji4vmvk0-1/protein-supplement/f/p/u/nut5183-02-muscleblaze-original-imaf6y9auwug4rgt.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k612pow0/protein-supplement/f/w/a/weight-gainer-with-added-digezyme-nut5312-01-muscleblaze-original-imafzkusf6arny7y.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k5fn3ww0/vitamin-supplement/v/x/w/30-glutathione-30-capsules-healthkart-original-imafz4c2ttvqzbah.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k8kiw7k0/protein-supplement/r/c/z/gold-standard-100-on0014-voi-optimum-nutrition-original-imafqk7mbjfayzqe.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k1dw70w0/vitamin-supplement/s/z/u/60-l-carnitine-l-tartrate-fat-burner-muscleblaze-original-imafkyq42yznqe5g.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jevpj0w0/energy-sport-drink-mix/r/q/f/200-diabetes-care-chocolate-ensure-original-imaf3hfqh8mysxzs.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k2z1t3k0/vitamin-supplement/5/k/j/60-omega-beauty-truebasics-original-imafm7csvhfpfeqe.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k8kiw7k0/protein-supplement/4/c/w/gold-standard-100-748927061123-optimum-nutrition-original-imafqk8am3tyhava.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k4irzbk0/protein-supplement/g/r/z/hi-protein-slim-meal-shake-alphonso-mango-420gm-12-servings-b1g1-original-imafnf24egvmmc4k.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jevpj0w0/energy-sport-drink-mix/n/g/p/1-premium-chocolate-refill-pack-pediasure-original-imaf3hfrwzcjcdqf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jevpj0w0/energy-sport-drink-mix/p/e/d/200-chocolate-ensure-original-imaf3hfqfadafqvj.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k5y7tzk0/protein-supplement/m/9/q/mass-10006-endura-original-imafzgpcaxnhfaas.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jf4a64w0/vitamin-supplement/p/2/k/60-hnut7994-01-healthkart-original-imaf3nfn9ugst7hp.jpeg?q=70"
];

var page1=[];


for(var i=0;i<40;i++)
{
	var item={title:names[i],
				rating:ratings[i],
				noOfRating:noOfRatings[i],
				price:prices[i],
				image:images[i]
			}
	page1.push(item);

		
}
page[0][3]=page1;

////////////////////////////////////////////////////// 2ND ROW //////////////////////////////////////////////////////////////////////

var names=["Mamaearth Natural Mosquito Repellent Gel, 50ml"
, "Farlin Automatic Steam Sterilizer 3 Bottles (Pink) - 3 Slots"
, "Mamaearth Natural Anti Mosquito Body Roll On, 40ml (Pack of 2)"
, "Mamaearth Anti Mosquito Fabric Roll On, 8ml"
, "Mamaearth Natural Repellent Mosquito Patches For Babies with 12 Hour Protection (Pack Of 2)"
, "Mamaearth Natural Mosquito Repellent for babies(3 months+)"
, "Philips Avent 2-in-1 Electric Steam Steriliser - 4 Slots"
, "Mamaearth Mosquito Fabric Roll On, 8ml (Pack of 2)"
, "Pigeon Cotton Ball"
, "LuvLap 100% Natural Mosquito Repellent Patches"
, "Philips Avent 3-in-1 Electric Steam Sterilizer - 6 Slots"
, "BodyGuard Natural Anti Mosquito Repellent - 60 + 12 Patches"
, "LuvLap 100% Natural Anti Mosquito Fabric Roll On, Safe for 0-12 Years"
, "Farlin Warmer Can 300C.C. (Pink) - 1 Slots"
, "Pigeon COTTON SWABS THIN STEM, 200PCS/HINGED CASE, COMBO"
, "BodyGuard Natural Anti Mosquito Repellent - 40 + 8 Patches"
, "Philips Avent Warmer Bottle - 1 Slots"
, "Mamaearth Natural Breathe Easy Vapour Roll-On, 40ml Balm"
, "BodyGuard Herbal Fabric Roll On with Citronella & Lemongrass Oil - 8 ml + 2 ml Extra"
, "IBS Non-Contact Infrared Digital Thermometer Bath Thermometer"
, "LuvLap 100% Natural Anti Mosquito Spray, Safe for 0-12 Years - 100 ml"
, "Tulips Cotton Pads 50 in Each (Pack of 3)"
, "LuvLap Natural Anti Mosquito Spray"
, "avocare biotech CORDY POTION KIDS Honey Flavored Liquid"
, "Kemtech Earpick"
, "LuvLap 100% Natural Anti Mosquito Patches, Safe for 0-12 Years - 24 Patches"
, "LuvLap 3 in 1 Steam Sterilizer - 6 Slots"
, "Seven Seas Kids 2+ Cod Liver Oil Emulsion with DHA Orange Flavored Oil"
, "The Moms Co. Natural Mosquito Repellent (100 ml)"
, "BIOAYURVEDA Lemon Strength  (For Kids) 200 ml - Pack of 2 Hand Sanitizer Bottle"
, "Peston MRE Pest Control 6 in 1 Mosquito Insect Repellent"
, "Mom & World Baby Mosquito Repellent Room Spray 100ml"
, "BodyGuard Herbal Fabric Roll On with Citronella & Lemongrass Oil - 8 ml + 2 ml Extra (Pack of 3)"
, "BIOAYURVEDA Lemon Strength  (For Kids) Combo Hand Sanitizer Bottle"
, "BodyGuard Herbal Fabric Roll On with Citronella & Lemongrass Oil - 8 ml + 2 ml Extra (Pack of 2)"
, "Pigeon Nose Cleaner Manual Nasal Aspirator"
, "Lagom Peston Pest Control 6 in 1 Electric Insect Repellent (Pack of 5)"
, "TASHKURST 2 Pc Rat / Mouse Lizard Trap, Rat Catcher Adhesive Sticky Glue Pad- Non Poisonous - Non Toxic - Odourless - Rat Terminator"
, "Peston Ultrasonic Electro Magnetic Pest Repellent For Mosquitoes,Rats,Cockroach,Spiders Bugs,Lizards, & Other Insects"
, "Mystiq Living Mosquito Repellent Fabric Roll On -100% Natural & Safe |8 ml|Pack of 2"];

var prices=["₹99"
, "₹2,720"
, "₹182"
, "₹99"
, "₹183"
, "₹263"
, "₹2,640"
, "₹182"
, "₹295"
, "₹162"
, "₹3,559"
, "₹449"
, "₹105"
, "₹637"
, "₹474"
, "₹325"
, "₹2,275"
, "₹219"
, "₹75"
, "₹3,890"
, "₹85"
, "₹225"
, "₹119"
, "₹200"
, "₹185"
, "₹125"
, "₹2,545"
, "₹397"
, "₹330"
, "₹199"
, "₹157"
, "₹249"
, "₹191"
, "₹1,250"
, "₹150"
, "₹319"
, "₹541"
, "₹285"
, "₹109"
, "₹284"];

var ratings=["4.1"
, "4.1"
, "3.9"
, "3.9"
,"4"
, "4.5"
, "4.2"
, "4.2"
, "4.1"
, "4.5"
, "3.5"
, "3.6"
, "4.6"
, "3.5"
, "4.5"
, "4.3"
, "3.7"
, "3.7"
, "4.4"
, "3.8"
, "3.1"
, "3.8"
, "3.3"
, "4.1"
, "3.9"
, "3"
, "4.2"
, "3.7"
, "2"
, "3.7"
, "3.9"
, "3.3"
, "2.7"
, "2.9"
, "4"];

for(var i=ratings.length; i<40; i++)
{ratings[i] = "4.1"};


var noOfRatings=["(886)"
, "(448)"
, "(1,562)"
, "(680)"
, "(1,010)"
, "(825)"
, "(471)"
, "(51)"
, "(50)"
, "(1,043)"
, "(413)"
, "(7)"
, "(10)"
, "(413)"
, "(111)"
, "(81)"
, "(539)"
, "(139)"
, "(490)"
, "(12)"
, "(26)"
, "(35)"
, "(26)"
, "(29)"
, "(14)"
, "(500)"
, "(63)"
, "(539)"
, "(7)"
, "(539)"
, "(387)"
, "(6)"
, "(3)"
, "(277)"
, "(40)"];

for(var i=noOfRatings.length; i<40; i++)
{noOfRatings[i] = "(105)"};

var images=["https://rukminim1.flixcart.com/image/612/612/jrcdsi80/baby-care-combo/7/e/q/natural-mosquito-repellent-gel-50ml-nd-nourishing-wash-for-original-imaf77hkyhph8ndm.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jzsqky80/sterilizer-warmer/g/k/j/automatic-steam-sterilizer-3-bottles-pink-top-219-farlin-3-original-imafjqrmzy5gqgdn.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jvtujrk0/insect-repellent/p/k/h/80-natural-anti-mosquito-body-roll-on-40ml-pack-of-2-2-mamaearth-original-imafghp8athfbvgz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jjelq4w0/insect-repellent/y/a/h/16-mosquito-fabric-roll-on-8ml-pack-of-2-2-mamaearth-original-imaf6yghrvxhvyzz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jhi0l8w0/insect-repellent/a/v/n/24-natural-repellent-mosquito-patches-for-babies-with-12-hour-original-imaf5h27dafgf6qh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jrcdsi80/baby-care-combo/p/g/7/natural-insect-repellent-for-babies-100-ml-nd-mineral-based-original-imaf5ycpbdqzc5xt.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j45wn0w0/sterilizer-warmer/a/6/b/avent-2-in-1-electric-steam-steriliser-scf-922-03-philips-4-original-imaev4vvzguz8qup.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jvv9zm80/insect-repellent/y/a/h/16-0-mosquito-fabric-roll-on-8ml-pack-of-2-2-mamaearth-original-imafghp8vgzrahyf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxp08sw0/cotton-ball-pad-bud/g/g/v/1-cotton-ball-200-pigeon-original-imafg3gzrsuv9qpn.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k12go7k0/insect-repellent/7/2/q/48-100-natural-mosquito-repellent-patches-2-luvlap-original-imafkpvrqhzs383g.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j6xxgnk0/sterilizer-warmer/j/h/r/3-in-1-electric-steam-sterilizer-scf284-02-8840-284-02270-original-imaexathyrdcu6u8.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxdkpzk0/insect-repellent/z/k/p/72-natural-anti-mosquito-repellent-60-12-patches-3-bodyguard-original-imafhuzhy2rwgmem.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k4vmxzk0/insect-repellent/b/p/z/10-100-natural-anti-mosquito-fabric-roll-on-safe-for-0-12-years-original-imafnzznc9nqtjer.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jzsqky80/sterilizer-warmer/z/z/3/warmer-can-300c-c-pink-bf-228b-farlin-1-original-imafjqszfa2m7sd2.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxp08sw0/cotton-ball-pad-bud/q/f/4/2-cotton-swabs-thin-stem-200pcs-hinged-case-combo-200-pigeon-original-imafg2dfu8cjgkfy.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxdkpzk0/insect-repellent/h/z/a/48-natural-anti-mosquito-repellent-40-8-patches-2-bodyguard-original-imafhuzh8pmjfvyh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j6xxgnk0/sterilizer-warmer/8/3/d/warmer-bottle-scf355-06-avent-1-original-imaexathk3nqyzbs.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jur9nrk0/body-pain-relief/j/h/t/40-natural-breathe-easy-vapour-roll-on-40ml-mamaearth-original-imaffhxfszkytg42.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxdkpzk0/insect-repellent/8/s/p/10-herbal-fabric-roll-on-with-citronella-lemongrass-oil-8-ml-2-original-imafhuzhhfmuq4z8.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k8ot7rk0/baby-thermometer/n/x/k/non-contact-infrared-digital-thermometer-forehead-thermometer-original-imafqngzfawmuzgg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jvfk58w0/insect-repellent/u/b/r/100-100-natural-anti-mosquito-spray-safe-for-0-12-years-100-ml-1-original-imafgch62hhtthwz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j6xxgnk0/cotton-ball-pad-bud/k/m/n/150-cotton-pads-50-in-each-pack-of-3-50-tulips-original-imaexaqgskeqyryz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k4yhtow0/insect-repellent/j/x/r/200-natural-anti-mosquito-spray-2-luvlap-original-imafnqwycsquzvxb.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k41mp3k0/baby-supplement/9/w/p/150-cordy-potion-kids-avocare-biotech-original-imafnfj5f3tsst9h.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j3lwh3k0/cotton-ball-pad-bud/g/n/u/1-earpick-3-kemtech-original-imaeupergxm85jxv.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k12go7k0/insect-repellent/7/2/q/48-100-natural-mosquito-repellent-patches-2-luvlap-original-imafgbch38hzfunj.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j9x3hjk0/sterilizer-warmer/3/b/6/3-in-1-steam-sterilizer-warmer-18382-luvlap-6-original-imaezhve9ngdducz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxgflow0/baby-supplement/k/p/f/200-kids-2-cod-liver-oil-emulsion-with-dha-seven-seas-original-imafghubrnxe287f.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k3ahbww0/insect-repellent/y/z/u/100-natural-mosquito-repellent-100-ml-1-the-moms-co-original-imafmg6xezqgqevz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9u8zgw0/hand-wash-sanitizer/d/7/z/400-lemon-strength-hand-sanitizer-for-kids-200-ml-pack-of-2-original-imafrjeygc8uzxhg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/insect-repellent/r/s/k/pp03-1-peston-1-bug-away-original-imaephkfu9nqfgmp.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k4yhtow0/insect-repellent/y/p/h/100-baby-mosquito-repellent-room-spray-100ml-1-mom-world-original-imafkgq3hjhrm8z9.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxdkpzk0/insect-repellent/g/e/z/30-herbal-fabric-roll-on-with-citronella-lemongrass-oil-8-ml-2-original-imaf49r5gtsczkew.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9a8tjk0/hand-wash-sanitizer/t/a/z/2500-lemon-strength-hand-sanitizer-for-kids-combo-bottle-original-imafr3d3dxtqgngx.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxdkpzk0/insect-repellent/6/j/t/20-herbal-fabric-roll-on-with-citronella-lemongrass-oil-8-ml-2-original-imaf49qzfs3uvwwv.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jhp5si80/nasal-aspirator/e/g/7/nose-cleaner-pigeon-original-imaf5nw7wfnkqwfh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j7p2tu80/insect-repellent/z/b/g/10-peston-pest-control-6-in-1-electric-insect-repellent-pack-of-original-imaexvrtjayfgnzy.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jpinjbk0/insect-repellent/z/q/t/2-2-pc-rat-mouse-lizard-trap-rat-catcher-adhesive-sticky-glue-original-imafbkyphg6zybdr.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jrkyfm80/insect-repellent/b/z/6/1-ultrasonic-electro-magnetic-pest-repellent-for-mosquitoes-rats-original-imafdbdqmv74kcff.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jv9udu80/insect-repellent/p/q/g/16-mosquito-repellent-fabric-roll-on-100-natural-2-mystiq-living-original-imafg6hhbgy3sqx2.jpeg?q=70"
];

var page1=[];


for(var i=0;i<40;i++)
{
	var item={title:names[i],
				rating:ratings[i],
				noOfRating:noOfRatings[i],
				price:prices[i],
				image:images[i]
			}
	page1.push(item);

		
}
page[2][0]=page1;

var names=["Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Miss & Chief Printed Single Baby Blanket"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Miss & Chief Printed Single Baby Blanket"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "A Baby Cherry Microfiber Baby Play Mat"
, "LuvLap Cotton Baby Sleeping Mat"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Nagar International baby mattress pink mt-20 Polyester Bedding Set"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Babique Cotton Infants Baby Cotton Padded Bed Net Mosquito Net (Multicolor) Mosquito Net"
, "Fashion Huts Nylon Infants Baby Bedding with Mosquitoes net Mosquito Net"
, "SPACES Cotton Baby Bath Mat"
, "LuvLap Cotton Baby Sleeping Mat"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Brandonn Abstract Single Hooded Baby Blanket"
, "LuvLap Printed Crib AC Blanket"
, "Miss & Chief Hooded Baby Wrapper- Sea Green"
, "LuvLap Cotton Baby Sleeping Mat"
, "LuvLap Cotton Baby Sleeping Mat"
, "My New Born Polka Crib AC Blanket"
, "LuvLap Cotton Baby Sleeping Mat"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "Brandonn Solid Single Hooded Baby Blanket"
, "My New Born Printed Single Crib Baby Blanket"
, "Bey Bee Cotton Baby Bed Protecting Mat"
, "CHHOTE SAHEB Cotton U shape Baby Pillow Pack of 1"
, "Miss & Chief Bed Protector Sheet- Waterproof & Reusable"
, "LuvLap Cotton Baby Sleeping Mat"
, "Quick Dry Cotton Baby Bed Protecting Mat"
, "My New Born Printed Crib AC Blanket"];

var prices=["₹289"
, "₹356"
, "₹455"
, "₹171"
, "₹455"
, "₹289"
, "₹455"
, "₹356"
, "₹289"
, "₹171"
, "₹289"
, "₹171"
, "₹289"
, "₹1,799"
, "₹255"
, "₹289"
, "₹171"
, "₹300"
, "₹172"
, "₹389"
, "₹299"
, "₹400"
, "₹345"
, "₹455"
, "₹299"
, "₹304"
, "₹358"
, "₹199"
, "₹345"
, "₹549"
, "₹349"
, "₹172"
, "₹299"
, "₹579"
, "₹285"
, "₹199"
, "₹455"
, "₹249"
, "₹230"
, "₹299"];

var ratings=["4.1"
,"4.2"
, "4.3"
, "4"
, "4.1"
, "4"
, "4.2"
, "4.2"
, "4.1"
, "3.9"
, "4.1"
, "4"
, "4.2"
, "4.2"
, "4.1"
, "3.8"
, "3.9"
, "3.8"
, "4.1"
, "4.1"
, "4.4"
, "4.1"
, "4.2"
, "4.2"
, "4.5"
, "4.4"
, "4.1"
, "4.3"
, "4.3"
, "4.5"
, "3.8"
, "3.9"
, "4.1"
, "4"
, "3.9"
, "4.3"
, "4.5"
, "3.8"
, "4.2"];

for(var i=ratings.length; i<40; i++)
{ratings[i] = "4.1"};

var noOfRatings=["(2,218)"
, "(2,198)"
, "(1,237)"
, "(3,380)"
, "(1,402)"
, "(1,522)"
, "(832)"
, "(2,198)"
, "(972)"
, "(1,610)"
, "(1,922)"
, "(988)"
, "(790)"
, "(59)"
, "(653)"
, "(2,230)"
, "(2,668)"
, "(472)"
, "(227)"
, "(1,811)"
, "(17)"
, "(32)"
, "(977)"
, "(4,538)"
, "(440)"
, "(119)"
, "(47)"
, "(16)"
, "(345)"
, "(36)"
, "(835)"
, "(4,704)"
, "(757)"
, "(2,114)"
, "(3,392)"
, "(387)"
, "(29)"
, "(547)"
, "(679)"];

for(var i=noOfRatings.length; i<40; i++)
{noOfRatings[i] = "(105)"};

var images=["https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/v/m/j/baby-dry-sheet-medium-bpsomedpnk-miss-chief-original-imaf8ytxnuydfbqq.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jkwwgi80/blanket/k/s/h/blanketelephantblue-blelpblu-miss-chief-original-imaf85znnajktbnz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/v/m/j/baby-dry-sheet-medium-bpsomedpnk-miss-chief-original-imaf8ytxnuydfbqq.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/k/f/r/baby-dry-sheet-small-bpsosmlpnk-miss-chief-original-imaf8ytxtsqmt8nw.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/g/h/f/baby-dry-sheet-large-bpsolrgmrn-miss-chief-original-imaf8ytxwphuu788.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/g/h/f/baby-dry-sheet-large-bpsolrgmrn-miss-chief-original-imaf8ytxwphuu788.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/s/h/6/baby-dry-sheet-large-bpsolrglac-miss-chief-original-imaf8ytxwgyshu4f.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jkwwgi80/blanket/m/j/u/blanketpolkaorange-blpolorg-miss-chief-original-imaf85znnaavbsxn.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/s/h/6/baby-dry-sheet-large-bpsolrglac-miss-chief-original-imaf8ytxwgyshu4f.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/s/h/6/baby-dry-sheet-large-bpsolrglac-miss-chief-original-imaf8ytxwgyshu4f.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/g/x/h/baby-dry-sheet-large-bpsolrgpch-miss-chief-original-imaf8ytxxzuarw27.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/r/n/p/baby-dry-sheet-small-bpsosmlpch-miss-chief-original-imaf8ytxwjasdcxf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/v/2/p/baby-dry-sheet-large-bpsolrgsblu-miss-chief-original-imaf8ytywrybrfqm.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6tniq80/mat/3/z/a/extra-large-baby-playmate-722537406307-a-baby-cherry-original-imafp7dtfba8t6je.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k8g8knk0/mat/8/p/z/medium-extra-absorbent-sheet-mat5-luvlap-original-imafqggzxfqg82ts.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jlzhci80/mat/g/z/g/baby-dry-sheet-medium-bpprntmedsolmaz-miss-chief-original-imaf8zxdftunhyyg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/y/f/a/baby-dry-sheet-small-bpsosmlmrn-miss-chief-original-imaf8yty9y7hrqgz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jazodjk0/bedding-set/8/w/z/baby-bedding-set-pink-mt-19-single-mt-19-nagar-international-original-imafyff5e4tkvw7t.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jlzhci80/mat/n/g/d/baby-dry-sheet-small-bpprntsmlyelanml-miss-chief-original-imaf8ytxkhvzycw9.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jhavdzk0/mosquito-net/p/s/m/baby-cotton-padded-bed-net-mosquito-net-multicolor-eiou01-original-imaf5bk2gntvfmcg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jchz3ww0/mosquito-net/c/h/y/baby-bedding-with-mosquitoes-net-bedding01-fashion-huts-original-imaewn9br7qmgjvc.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/mat/b/y/d/1029128-spaces-by-welspun-spaces-disney-princess-pink-cotton-original-imaepw5vaywhrdjs.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k8g8knk0/mat/8/p/z/medium-extra-absorbent-sheet-mat5-luvlap-original-imafqggzxfqg82ts.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/g/x/h/baby-dry-sheet-large-bpsolrgpch-miss-chief-original-imaf8ytxxzuarw27.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k12go7k0/blanket/s/y/z/baby-boy-s-and-baby-girl-s-3-in-1-hooded-welcrow-stitched-baby-original-imafknxsutvxhzpr.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k8ndrww0/blanket/c/g/9/soft-flannel-baby-blanket-80cm-x-100cm-pink-white-flowers-900123-original-imafqmmt2gd3eszc.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/blanket/g/4/h/baby-wrapper-bwsolsgrn-miss-chief-original-imaf8ytxtqrgdkwh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k8g8knk0/mat/8/p/z/medium-extra-absorbent-sheet-mat5-luvlap-original-imafqggzxfqg82ts.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k8g8knk0/mat/r/r/f/medium-extra-absorbent-sheet-mat8-luvlap-original-imafqggzyhkr2hfe.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jihqljk0/blanket/n/g/t/baby-wrap-and-top-sheet-brown-super-soft-luxury-series-brown-my-original-imaf6aa46gbgqwka.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k8g8knk0/mat/h/v/h/large-instadry-extra-absorbent-sheet-mat-3-luvlap-original-imafqghythvmzevq.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jlzhci80/mat/n/p/8/baby-dry-sheet-small-bpprntsmllac12-miss-chief-original-imaf8ytytbqc32dw.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jazodjk0/blanket/n/2/q/cartoon-hooded-classic-baby-wrapper-cool4pc-brandonn-original-imaewngzeqv7fxzu.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jdbzcsw0/blanket/b/2/3/multi-use-supersoft-double-layer-premium-quality-baby-wrapper-original-imaf29pxbxbgztkg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6b2snk0/mat/t/k/4/medium-water-resistant-bed-protector-baby-dry-sheet-bed-original-imafh8zbrfgxyh2e.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jn4x47k0/pillow/g/g/e/new-born-baby-baby-soft-pillow-pink-u-shap-poddar-fashion-square-original-imaf5dudh5mybzy7.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jly1wnk0/mat/v/2/p/baby-dry-sheet-large-bpsolrgsblu-miss-chief-original-imaf8ytywrybrfqm.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k8g8knk0/mat/r/r/f/medium-extra-absorbent-sheet-mat8-luvlap-original-imafqggzyhkr2hfe.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/mat/d/y/f/vre-0071-plum-3-quick-dry-baby-crowd-plum-large-large-original-imaemppuhhsp7ygw.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jwaztzk0/blanket/d/e/8/baby-wrapper-star-blue-spread-star-blue-miss-chief-original-imaf923cmezggczm.jpeg?q=70"
];

var page1=[];


for(var i=0;i<40;i++)
{
	var item={title:names[i],
				rating:ratings[i],
				noOfRating:noOfRatings[i],
				price:prices[i],
				image:images[i]
			}
	page1.push(item);

		
}
page[2][1]=page1;

var names=["SYGA Premium  - Manual"
, "LuvLap Breast Pump  - Manual"
, "SYGA Manual Breast Pump with Nipple  - Manual"
, "Miss & Chief Premium Breast Pump  - Manual"
, "LuvLap Sunshine  - Electric"
,"Pigeon BREAST PUMP BASIC EDITION - MANUAL  - Manual"
, "LuvLap Silicone Breast Milk Saver Pump, 100ml  - Manual"
, "Philips Avent Comfort Breast Pump  - Electric"
, "Philips Avent Manual Breast  - Manual"
, "Philips Avent Comfort Single Electric Breast Pump  - Electric"
, "Pigeon MANUAL BREAST PUMP WITH PP200ML - STANDARD  - Manual"
, "Miss & Chief Breast Pump  - Manual"
, "Pigeon ULTRA PREMIUM MILK SAVER PUMP  - Manual"
, "MeeMee Comapct  - Manual"
, "Pigeon BREAST PUMP PRO PERSONAL NX  - Electric"
, "Oren Empower Manual Massage Preminum Quality Breast Pump With Feeding Bottle  - Manual"
, "Miss & Chief Premium Breast Pump with Glass Bottle  - Manual"
, "MeeMee BREAST PAD Nursing Breast Pad"
, "MeeMee Mee Mee Advanced Electric Breast Pump (White)  - Electric"
, "LuvLap New  - Manual"
, "Oren Empower Manual Massage Preminum Quality Breast Pump With Feeding Bottle - Experience same as baby sucking  - Manual"
, "Niscomed Manual First Feed Manual Breast Pump  - Manual"
, "Bacati Breast Feeding Breastfeeding Pillow"
, "Trumom Breast Pads Nursing Breast Pad"
, "Pigeon 78622 Nursing Breast Pad"
, "Sasimo Breast Pump 180 Degree Rotary Manual 180ml Feeding Breast Pump with Soft Silicone Cushion Milk Bottle, BPA Free  - Manual"
, "Sasimo Breast Pump 180 Degree Rotary Manual 180ml Feeding Breast Pump with Soft Silicone Cushion Milk Bottle, BPA Free  - Manual"
, "Oren Empower FDA Approved Portable Manual Massage Preminum Range Breast Pump with Feeding Bottle and a Nipple  - Manual"
, "SIRONA Pack of 12 Nursing Breast Pad"
, "Medela Harmony Pump & Feed Set  - Manual"
, "Bacati Feeding Breastfeeding Pillow"
, "Fisher-Price Rechargeable & Portable Electric Breast Pump - FPBP02  - Electric"
, "Philips Avent SCF254/24 Nursing Breast Pad"
, "Medela Mini Electric"
, "Morisons Baby Dreams Manual Breast Pump - Classic"
, "Bacati Feeding Breastfeeding Pillow"
, "Pigeon Breast Pump Manual  - Manual"
, "Pin to Pen Manual Breast Reliever Regular  - Manual"
, "Philips Avent Breast Pump Pes Bottle  - Manual"
, "Medela Harmony Manual Breastpump  - Manual"];

var prices=["₹404"
,"₹599"
, "₹329"
, "₹457"
, "₹2,495"
,"₹850"
, "₹287"
, "₹9,550"
, "₹1,590"
, "₹9,550"
, "₹1,255"
, "₹386"
, "₹527"
, "₹211"
, "₹7,259"
, "₹376"
, "₹557"
, "₹326"
, "₹3,999"
, "₹789"
, "₹329"
,"₹499"
, "₹799"
,"₹249"
, "₹583"
, "₹799"
, "₹799"
, "₹483"
, "₹175"
, "₹3,499"
, "₹799"
, "₹3,266"
, "₹244"
, "₹5,999"
, "₹599"
, "₹733"
, "₹2,496"
, "₹199"
, "₹1,599"
, "₹2,150"];

var ratings=["3.9"
,"4"
,"3.9"
, "3.9"
, "3.6"
, "3.9"
, "3.9"
, "3.9"
, "4.1"
, "4.3"
, "3.8"
, "3.7"
, "3.2"
, "3.3"
, "4"
, "4.1"
, "4.2"
, "4"
, "4.1"
,"3.8"
,"3.9"
, "3.9"
, "4.2"
, "4.6"
, "4.6"
, "3.8"
, "3.8"
, "2.7"
, "4"
, "4.2"
, "3.5"
, "3.3"
, "3.8"
, "2.6"
, "4.2"
, "3.8"];

for(var i=ratings.length; i<40; i++)
{ratings[i] = "4.1"};

var noOfRatings=["(2,347)"
,"(3,961)"
, "(9,354)"
,"(205)"
, "(16)"
, "(328)"
, "(10)"
, "(128)"
, "(1,549)"
, "(23)"
, "(26)"
, "(350)"
, "(21)"
, "(213)"
, "(112)"
, "(38)"
, "(653)"
, "(12)"
, "(88)"
, "(598)"
, "(499)"
, "(14)"
, "(47)"
, "(9)"
, "(15)"
, "(320)"
, "(146)"
, "(3)"
, "(3)"
, "(190)"
, "(53)"
, "(337)"
, "(10)"
, "(7)"
, "(113)"
, "(18)"];

for(var i=noOfRatings.length; i<40; i++)
{noOfRatings[i] = "(105)"};

var images=["https://rukminim1.flixcart.com/image/612/612/j81xsi80/breast-pump/e/b/e/premium-s01-syga-original-imaey3vsuhrdgtfz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6ci8i80/breast-pump/6/x/g/breast-pump-18481-luvlap-original-imafzsgz7gh2syzq.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jbi93m80/breast-pump/z/7/9/manual-breast-pump-with-nipple-manualfeedingpump-syga-original-imafyufgvztmy2j7.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0mqtu80/breast-pump/3/z/k/breast-pump-rk-m1003-miss-chief-original-imafk4pqvygh6ddv.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k7531jk0/breast-pump/x/y/4/sunshine-electric-breast-pump-luvlap-original-imafpfztghzjgcdf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j3dbtzk0/breast-pump/z/h/m/breast-pump-basic-edition-manual-26392-pigeon-original-imaeugh86hvvjzxq.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k7531jk0/breast-pump/h/w/y/silicone-breast-milk-saver-pump-100ml-18778-luvlap-original-imafpgy4uhqkkkar.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j76i3rk0/breast-pump/b/s/m/comfort-breast-pump-scf332-12-philips-avent-original-imaevs5tfyuzjuvt.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jppsqkw0/breast-pump/m/h/g/manual-breast-scf-330-20-philips-avent-original-imafbvv569vnsbb7.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jyq5oy80/breast-pump/p/m/n/comfort-single-electric-breast-pump-scf-332-33-philips-avent-original-imafgwjvjmzdtpqx.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jl41nrk0/breast-pump/u/u/3/manual-breast-pump-with-pp200ml-standard-78122-pigeon-original-imaf8a6vemhuh6hh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0zlsi80/breast-pump/u/y/g/breast-pump-rk-3600-miss-chief-original-imafknwtvzzzggjw.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jpcxrww0/breast-pump/4/p/t/ultra-premium-milk-saver-pump-26914-1-pigeon-original-imafbkfgpq7amkb6.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jrs3mvk0/breast-pump/5/d/p/comapct-mm-80219-meemee-original-imafdckbgj4tkv3t.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jyhl1u80/breast-pump/r/c/k/breast-pump-pro-personal-nx-78615-pigeon-original-imafgpzdmtwqjtfb.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jm2c87k0/breast-pump/e/y/r/manual-massage-preminum-quality-breast-pump-with-feeding-bottle-original-imaf9fzhqsaqvrnv.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0mqtu80/breast-pump/6/v/4/premium-breast-pump-with-glass-bottle-rk-m1005-miss-chief-original-imafk4pqeferrzjj.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/j7gi6q80/nursing-breast-pad/a/z/2/mm-3720-a-pk-48-meemee-original-imaewrzx4gxnwa2c.jpeg?q=70" 
,"https://rukminim1.flixcart.com/image/612/612/k5fn3ww0/breast-pump/8/3/k/mee-mee-advanced-electric-breast-pump-white-mm-80220-a-meemee-original-imafz3zhphgzeyws.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k7531jk0/breast-pump/b/h/s/new-manual-breast-pump-luvlap-original-imafpfztsbhv4xdz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jmz7csw0/breast-pump/f/b/a/manual-massage-preminum-quality-breast-pump-with-feeding-bottle-original-imaf9rgt5ghe7wvg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k1pbpu80/breast-pump/k/y/n/manual-first-feed-manual-breast-pump-mbp-02-niscomed-original-imafh8yuvvesnqgw.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/pillow/h/s/s/ealghug-bacati-elephant-aqua-lime-grey-original-imaehzenzwcpz7zh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k5ihzm80/nursing-breast-pad/e/m/z/breast-pads-trumom-original-imafz6j5ngzz4pv3.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k547l3k0/nursing-breast-pad/s/u/s/78622-pigeon-original-imafnuny2f9yqrrr.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k76ihe80/breast-pump/5/u/w/breast-pump-180-degree-rotary-manual-180ml-feeding-breast-pump-original-imafph9gechhcwhs.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6v2ykw0/breast-pump/c/f/g/breast-pump-180-degree-rotary-manual-180ml-feeding-breast-pump-original-imafp7mfazjpvphm.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jmp79u80/breast-pump/z/r/g/fda-approved-portable-manual-massage-preminum-range-breast-pump-original-imaf9j7zkzhtkhek.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jvv9zm80/nursing-breast-pad/d/k/x/pack-of-12-sirona-original-imafgm4fhetb5ddh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9k8wi80/breast-pump/c/4/j/harmony-pump-feed-set-005-2066-medela-original-imafrbsxredddww2.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/pillow/f/g/q/azcmnahug-bacati-nursing-pillow-original-imaeksnaw7eshn6z.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k5vcya80/breast-pump/x/9/w/rechargeable-portable-electric-breast-pump-fpbp02-fpbp02-fisher-original-imafzgh2gfrkhjxh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jr83gy80/nursing-breast-pad/d/x/j/scf254-24-philips-avent-original-imafd28tmyzjhmca.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9k8wi80/breast-pump/8/b/c/mini-electric-breast-pump-006-2046-medela-original-imafrbsxdmhnxh2a.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/breast-pump/z/m/j/6940648905623-morisons-baby-dreams-manual-breast-pump-classic-original-imae2mc5c2xmzjvk.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/pillow/f/g/w/epghco-bacati-elephant-original-imae8bsszqxvnggd.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jwpa8i80/breast-pump/6/g/e/breast-pump-manual-26144-pigeon-original-imafh57fbgzfmwfe.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jd7p18w0/breast-pump/w/p/m/manual-breast-reliever-regular-manual-breast-reliever-regular-original-imaf25ggbcef6hf4.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jn3hocw0/breast-pump/x/x/3/breast-pump-natural-scf330-20-avera-original-imaf7hh4cmbazghy.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9k8wi80/breast-pump/t/k/m/harmony-manual-breastpump-005-2055-medela-original-imafrbsx7saj339g.jpeg?q=70"];

var page1=[];


for(var i=0;i<40;i++)
{
	var item={title:names[i],
				rating:ratings[i],
				noOfRating:noOfRatings[i],
				price:prices[i],
				image:images[i]
			}
	page1.push(item);

		
}
page[2][2]=page1;

var names=["Pampers Pants Diapers Monthly Box Pack New - L"
, "Pampers Active Baby Diapers Taped Extra Large Size"
, "Himalaya Total Care - L"
, "MamyPoko Pants Extra Absorb Diapers - L"
, "Himalaya Total Care - M"
, "MamyPoko Pants Extra Absorb Diapers - M"
, "Pampers Baby-Dry Pants Diaper - XL"
, "MamyPoko Pants Standard Diapers - S"
, "Himalaya Total Care Baby Pants - L"
, "Pampers Baby-Dry Pants Diaper - M"
, "MamyPoko Pants Standard Diapers - L"
, "MamyPoko Extra Absorb Pant Diapers - XXL"
, "MamyPoko Pants Extra Absorb Diapers - XXL"
, "Pampers Active Baby Taped Diapers - S"
, "MamyPoko Pants Standard Diapers - M"
, "Huggies Wonder Pants Diaper - L"
, "Huggies Wonder Pants Diaper - XS"
, "Billion Extra Absorb Diaper Pants - M"
, "Pampers Baby-Dry Pants Diaper - L"
, "Pampers Premium Care Pants Diapers - L"
, "Huggies Wonder Pants Diaper - M"
, "Huggies Wonder Pants Medium Size Diapers Combo Pack Of 2, 54 Counts Per Pack (108 Counts) - M"
, "Pampers Baby-Dry Pants Diaper - M"
, "Pampers Premium Care Pants Diapers Monthly Box Pack - XL"
, "Himalaya Total Care Baby Pants - M"
, "Pampers Baby-Dry Diapers - L"
, "MamyPoko Pants Extra Absorb Diapers - L"
, "Himalaya Total Care - S"
, "Pampers Pants Diapers Monthly Box Pack New - XL"
, "Pigeon PANTS DIAPER, EXTRA LARGE (28 PCS) - XL"
, "Pampers Active Baby Diapers - New Born"
, "MamyPoko Pants Extra Absorb Diapers - XXXL"
, "Pampers New Large Size Diapers Pants (44 Count) - L"
, "FRESHKINS Disposable Tape Diaper - L"
, "MamyPoko Pants Standard Diapers - XL"
, "Huggies Wonder Pants - M"
, "Himalaya Total Care - XL"
, "Pampers Baby-Dry Pants Diaper - S"
, "Billion Extra Absorb Diaper Pants - S"
, "FRESHKINS Disposable Tape Diaper - S"];


var  prices=["₹330"
, "₹720"
, "₹276"
, "₹247"
, "₹207"
, "₹167"
, "₹213"
, "₹105"
, "₹324"
, "₹119"
, "₹270"
, "₹143"
, "₹121"
, "₹1,245"
, "₹155"
, "₹123"
, "₹128"
, "₹88"
,"₹142"
, "₹329"
, "₹224"
, "₹175"
, "₹100"
, "₹349"
, "₹536"
, "₹594"
, "₹450"
, "₹458"
, "₹242"
, "₹479"
, "₹189"
, "₹242"
, "₹55"
, "₹1,326"
, "₹183"
, "₹299"
, "₹191"
, "₹269"
, "₹118"
, "₹230"];

var ratings=["4.1"
,"4.4"
, "4.4"
, "4.4"
, "4.4"
, "4.5"
, "4.4"
, "4.5"
,"4.4"
, "4.5"
, "4.5"
, "4.4"
, "4.4"
, "4.4"
, "4.5"
, "4.4"
, "4.4"
, "4.2"
, "4.3"
, "4.5"
, "4.3"
, "4.3"
,"4.5"
, "4.5"
, "4.5"
, "4.5"
, "4.4"
, "4.5"
, "4.5"
, "4.2"
, "4.4"
, "4.3"
, "4.3"
, "4.3"
, "4.2"
, "4.5"
, "5"
, "5"
, "4.5"
, "4"];

var noOfRatings=["(167)"
,"(15,774)"
, "(14,019)"
, "(35,390)"
, "(38,055)"
, "(14,704)"
, "(6,618)"
, "(14,784)"
, "(20,707)"
, "(17,596)"
, "(7,264)"
, "(7,043)"
, "(10,527)"
, "(9,329)"
, "(8,819)"
, "(2,480)"
, "(3,145)"
, "(1,722)"
, "(3,336)"
, "(14,784)"
,"(228)"
,"(332)"
, "(2,145)"
, "(59)"
, "(488)"
, "(693)"
, "(5,847)"
,"(232)"
, "(2,899)"
, "(4,329)"
, "(2,404)"
, "(3,287)"
, "(833)"
, "(3,287)"
, "(23)"];

for(var i=noOfRatings.length; i<40; i++)
{noOfRatings[i] = "(105)"};

var images=["https://rukminim1.flixcart.com/image/612/612/jhp5si80/diaper/h/h/y/na-l-128-pampers-original-imaf5ngw6hegyxtu.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jf8khow0/diaper/p/g/f/active-baby-xl-56-pampers-original-imaf3rf28zzrhken.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9re3rk0/diaper/s/w/9/total-care-l-76-himalaya-original-imafrhpdvkhvgzzr.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jpa2w7k0/diaper/3/x/g/pants-extra-absorb-diaper-l-96-mamypoko-original-imafbjv2u7nzthdp.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jsqe7bk0/diaper/b/r/e/m-total-care-baby-pants-78-himalaya-original-imafe86fhnjajswy.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k5h2jrk0/diaper/c/g/a/pants-extra-absorb-diapers-m-114-mamypoko-original-imafz54jzcsgzxza.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jmkwya80/diaper/x/y/7/pants-diapers-new-xl-56-pampers-original-imaf9gfjbyvknazz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jkbguq80/diaper/a/t/z/s-pants-standard-46-mamypoko-original-imaf7p8wksuvfjea.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9re3rk0/diaper/w/g/y/total-care-baby-pants-l-54-himalaya-original-imafrhpdgy8cpnwn.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jrqo70w0/diaper/g/6/y/baby-dry-pants-diaper-m-54-pampers-original-imafdgpqq5nrec5f.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jkh6m4w0/diaper/w/p/s/l-pants-standard-34-mamypoko-original-imaf7tqanjucz4gk.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k5h2jrk0/diaper/w/e/n/extra-absorb-pant-diapers-xxl-44-mamypoko-original-imafz54jkevppcff.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jmux18w0/diaper/t/h/z/pants-extra-absorb-diaper-xxl-22-mamypoko-original-imaf9z5cfhqhqbah.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/diaper/j/f/u/4902430671484-46-pampers-active-baby-diapers-original-imaenas32pcknstg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jkbguq80/diaper/e/y/g/m-pants-standard-36-mamypoko-original-imaf7p8w6arfxxec.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k2rwlu80/diaper/v/y/z/wonder-pants-diaper-l-64-huggies-original-imafket4upskabsr.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k2rwlu80/diaper/g/2/c/wonder-pants-diaper-xs-24-huggies-original-imafket4j6bwefnn.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9re3rk0/diaper/y/z/f/extra-absorb-diaper-pants-m-74-billion-original-imafrhpdpzgzz53b.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jrqo70w0/diaper/z/p/f/baby-dry-pants-diaper-l-64-pampers-original-imafdgpqerzmxgzz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jmkwya80/diaper/x/r/u/premium-care-pants-diapers-l-44-pampers-original-imaf9gfjydzhnszc.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k2rwlu80/diaper/z/w/d/wonder-pants-diaper-m-76-huggies-original-imafket4jshjqgej.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k2rwlu80/diaper/y/d/h/wonder-pants-medium-size-diapers-combo-pack-of-2-54-counts-per-original-imafmfh6ypmhey3y.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jmkwya80/diaper/c/f/k/pants-diapers-new-m-76-pampers-original-imaf9gfjwdvghbgg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k5y7tzk0/diaper/m/b/a/premium-care-pants-diapers-monthly-box-pack-xl-72-pampers-original-imafzgkfw4absfgf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9re3rk0/diaper/p/y/x/total-care-baby-pants-m-54-himalaya-original-imafrhpdwhuphbfx.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j391ifk0/diaper/w/v/q/l-baby-diapers-60-4902430666848-pampers-original-imaeufgytpzcgftp.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k5h2jrk0/diaper/c/4/n/pants-extra-absorb-diapers-l-44-mamypoko-original-imafz54jqkr88dhs.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9re3rk0/diaper/h/y/g/total-care-s-80-himalaya-original-imafrhpdxy6hhbz5.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jrqo70w0/diaper/8/g/k/pants-diapers-monthly-box-pack-new-xl-112-pampers-original-imafdhyrgjsz3zhq.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jph83gw0/diaper/v/d/j/pants-diaper-extra-large-28-pcs-xl-28-pigeon-original-imafbncezybhrkuh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jf8khow0/diaper/u/5/f/active-baby-diapers-new-born-72-pampers-original-imafyhftchsuugtz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j1dvte80/diaper/a/s/f/pants-xxxl-7-8903622032706-mamy-poko-original-imaeszf9cx4cgzzh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jsc3ssw0/diaper/g/2/s/l-new-large-size-diapers-pants-44-count-44-pampers-original-imafdxn98wm8gtxw.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k1l1ea80/diaper/9/b/g/disposable-tape-diaper-l-36-freshkins-original-imafkfnukujbebha.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jcjejrk0/diaper/x/q/2/pants-standard-diaper-xl-26-mamypoko-original-imaffngy9nj3cxfy.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k2rwlu80/diaper/k/a/z/wonder-pants-m-54-huggies-original-imafmfh6rgbpccdg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9re3rk0/diaper/z/g/s/total-care-xl-74-himalaya-original-imafrhpd533syp2b.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jmkwya80/diaper/a/s/x/pants-diaper-s-86-pampers-original-imaf95cyzrxpahsu.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k9re3rk0/diaper/4/8/h/extra-absorb-diaper-pants-s-80-billion-original-imafrhpdth8zsnm2.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k1l1ea80/diaper/y/s/h/disposable-tape-diaper-s-48-freshkins-original-imafkfz5a6gjv8rh.jpeg?q=70"];
var page1=[];


for(var i=0;i<40;i++)
{
var item={title:names[i],
rating:ratings[i],
noOfRating:noOfRatings[i],
price:prices[i],
image:images[i]
}
page1.push(item);


}
page[2][3]=page1;


////////////////////////////////////////////////////////////////////////////////4th ROW /////////////////////////////////////////////////////////////

var names=["Cello Butterflow Simply Ball Pen Jar Ball Pen"
, "Luxor GEL ONE Gel Pen"
, "Pilot V5 Liquid Ink Rollerball Pen"
, "Pilot Hi-tecpoint V7 cartridge System ( 2 Black Pen+ 4 Black cartridge) Roller Ball Pen"
,"Cello Technotip Ball Pen"
, "Pilot V5 (Pack of 3) Liquid Ink Rollerball Pen"
, "Pilot Hi-Techpoint 05 (1Blue + 1Black +1Red) Roller Ball Pen"
, "Pilot V7 (Pack of 3) Blue Roller Ball Pen"
, "Cello Finegrip Jar Blue Ball Pen"
, "FLAIR UNIVERSAL PEN Marker Ink"
, "Cello Geltech Gel Pen Jar Gel Pen"
, "NATARAJ NA Ball Pen"
, "Parker vector metallix black (f)with quink Fountain Pen"
, "Cello Butterflow Blue Ball Pen"
, "Luxor SUPER TOP Ball Pen"
, "Cello Buttergel Gel Pen"
, "Pilot V7 (Pack of 3) Liquid Ink Rollerball Pen"
, "Pilot V7 Hi - Techpoint Pen (Pack of 3)"
, "Munix SL-1183 Scissors"
, "Pilot Pilot V-7 Cartridge Pen -Blue Ink Cartridge"
, "Pilot HITEC 05 BLUE Roller Ball Pen"
, "Pilot Hi-Techpoint 05 Super Value(Pack of 3 )Blue Roller Ball Pen"
, "Pilot V5 (Pack of 3) Liquid Ink Rollerball Pen"
, "Luxor UNIFLO Ball Pen"
, "Pilot G2 GEL INK Blue Roller Ball Pen"
, "Luxor UNIFLO Ball Pen"
, "Parker Beta standard Grey Fountain Pen"
, "Cello Finegrip + Gripper Ball Pen Jar Ball Pen"
, "Parker Parker Vector Fountain Pen"
, "Parker moments vector ss mb gt Roller Ball Pen"
, "Parker Classic Gold Ball Pen"
, "Parker vector metallix red (f)with quink Fountain Pen"
, "Parker VECTOR stdard BLUE (F) with 1 Ink cart. Fountain Pen"
, "Pilot Frixion Clicker Roller Ball Pen"
, "Munix GL-2185 Scissors"
, "Parker Vector Standard Roller Ball Pen"
, "Luxor GEL ONE Gel Pen"
, "Pilot 05 Hitec Black ( Pack of 12 ) Roller Ball Pen"
, "Cello Jotdot Ball Pen"
, "Parker moments jotter steel ct Ball Pen"];

var prices=["₹209"
, "₹179"
, "₹150"
, "₹135"
, "₹200"
, "₹150"
, "₹110"
, "₹150"
, "₹175"
, "₹100"
, "₹209"
, "₹280"
, "₹428"
, "₹100"
, "₹89"
, "₹285"
, "₹150"
, "₹150"
, "₹132"
, "₹50"
, "₹40"
, "₹110"
, "₹150"
, "₹179"
, "₹60"
, "₹179"
, "₹139"
, "₹200"
, "₹285"
, "₹495"
, "₹409"
, "₹428"
, "₹285"
, "₹100"
, "₹222"
, "₹285"
, "₹179"
, "₹456"
, "₹200"
, "₹239"];

var ratings=["4.4"
, "4.4"
, "4.5"
, "4.4"
, "4.4"
, "4.5"
, "4.5"
, "4.4"
, "4.3"
, "4.1"
, "4.2"
, "4.4"
, "4.3"
, "4.4"
, "4.2"
, "4.3"
, "4.4"
, "4.3"
, "4.5"
, "4.4"
, "4.4"
, "4.4"
, "4.5"
, "4.5"
, "4.3"
, "4.5"
, "4.1"
, "4.2"
, "4.3"
, "4.4"
, "4.4"
, "4.4"
, "4.3"
, "4.2"
, "4.6"
, "4.2"
, "4.5"
, "4.5"
, "4.4"
, "4.5"];

var noOfRatings=["(16,346)"
, "(2,322)"
, "(7,691)"
,"(7,113)"
,"(5,082)"
,"(7,155)"
, "(8,506)"
,"(7,572)"
,"(9,427)"
,"(18)"
, "(4,048)"
, "(711)"
, "(1,551)"
, "(10,835)"
, "(355)"
, "(4,932)"
, "(4,468)"
, "(5,381)"
, "(355)"
, "(2,790)"
, "(11,217)"
, "(11,278)"
, "(7,161)"
, "(1,605)"
, "(532)"
, "(383)"
, "(1,847)"
, "(5,747)"
, "(3,516)"
, "(304)"
,"(2,288)"
, "(1,203)"
, "(1,105)"
, "(3,547)"
, "(97)"
, "(1,152)"
, "(257)"
,"(125)"
, "(956)"
, "(165)"];

for(var i=noOfRatings.length; i<40; i++)
{noOfRatings[i] = "(105)"};

var images=["https://rukminim1.flixcart.com/image/612/612/jl41nrk0/pen/z/g/4/cello-cel1008538-original-imaf8bcznputgy6z.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k37mg7k0/pen/e/j/n/luxor-9000028000-original-imafme6kncchvf2m.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0y6cnk0/pen/z/p/y/pilot-9000014710-9000014710-original-imafkmubweqmkgxz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0vbgy80/pen/f/e/2/pilot-9000021856-original-imafkkccayf2ywkt.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxxkvww0/pen/w/z/z/cello-cel1008868-original-imafg9y2hdwzzqwv.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0y6cnk0/pen/g/8/b/pilot-9000014712-9000014712-original-imafkmubgt2af5gs.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0y6cnk0/pen/b/c/e/pilot-9000014708-9000014708-original-imafkmubgeggv3tg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0y6cnk0/pen/x/k/s/pilot-9000014715-9000014715-original-imafkmubmf8gdz29.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jjiw1ow0/pen/p/w/9/cello-cel1006381-original-imaf739ay4vbamsz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jzd0qkw0/pen/p/t/s/flair-8901765141736-original-imafjem64kfyyfrh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jm573ww0/pen/m/h/d/cello-cel1008539-original-imaf944tzzq56ujf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0y6cnk0/pen/f/h/c/nataraj-classic-glow-mist-original-imafkmwpmjhd4ufw.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jmz7csw0/pen/z/3/q/parker-9000017256-original-imaf9re45p8g9wvt.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jx257680/pen/x/h/g/cello-cel1006260-original-imafeatz4bkrzjse.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k37mg7k0/pen/w/e/6/luxor-9000028003-original-imafme6kqymph8mx.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k3khevk0/pen/x/f/d/cello-cel1006436-original-imafmnzzbexb7djn.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0y6cnk0/pen/a/k/u/pilot-9000014717-9000014717-original-imafkmubemzyck4c.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/pen/w/z/a/pilot-9000014716-original-imad6q8z93kgf9p4.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0h12fk0/scissor/f/u/7/sl-1183-scissors-munix-original-imafk92xcbgcumvr.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jg9pxu80/pen/t/5/t/pilot-9000020450-original-imaf4j3rvcbxmfuh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j391ifk0/pen/4/z/a/pilot-9000000477-9000000477-original-imaeud8qkjymbhrg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jrtj2q80/pen/m/c/y/pilot-9000014706-9000014706-original-imafdjftmurdgh4d.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0y6cnk0/pen/7/f/k/pilot-9000014711-9000014711-original-imafkmubjhm3zegn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k37mg7k0/pen/z/f/p/luxor-9000027997-original-imafme6kgqfcdxcg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jsm3vrk0/pen/k/v/h/pilot-9000025258-original-imafe5e7bfz8hapm.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k37mg7k0/pen/r/p/d/luxor-9000027998-original-imafme6kbvvw7vf4.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jq8dgnk0/pen/z/s/8/parker-9000023138-original-imafbk42hhvjmwrf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jlcmavk0/pen/y/t/h/cello-cel1008541-original-imaf8g2zee2hscvc.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jk8lz0w0/pen/t/9/g/parker-vector-standard-fountain-pen-chrome-trim-fine-nib-hc-blue-original-imaf7mszunybszbe.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jpbic280/pen/w/6/u/parker-9000025352-original-imafbkwsgeu4dshk.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0vbgy80/pen/7/x/z/parker-9000016330-original-imafkkbzyu9jwkez.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jmz7csw0/pen/n/j/f/parker-9000017257-original-imaf9re4zbgbutfg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j52rrm80/pen/y/t/6/parker-vector-standard-fountain-pen-blue-with-1-ink-cart-original-imaevtshxhwjayah.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0vbgy80/pen/u/r/h/pilot-9000019529-original-imafkkccqzjg3cta.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0h12fk0/scissor/8/f/3/gl-2185-scissors-munix-original-imafk92xsggfnkkq.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0vbgy80/pen/f/d/m/parker-9000017248-9000017248-original-imafbdbxfpyeqtxj.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k37mg7k0/pen/y/y/s/luxor-9000028001-original-imafme6kzhqcuvhy.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j4x207k0/pen/z/u/q/pilot-9000019569-original-imaevmtydhef2agb.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jn4x47k0/pen/q/g/t/cello-cel1000612x-original-imaf96aq8gve55pj.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jsm3vrk0/pen/w/h/c/parker-9000025339-original-imafe5e7gxhzezhm.jpeg?q=70"];

var page1=[];


for(var i=0;i<40;i++)
{
	var item={title:names[i],
				rating:ratings[i],
				noOfRating:noOfRatings[i],
				price:prices[i],
				image:images[i]
			}
	page1.push(item);

		
}
page[4][0]=page1;


var names=["Iit-Jam Joint Admission Test for M.Sc. Chemistry 15 Year's Solved Papers (2005-2019) and 5 Model Papers (with Explanation) 2020"
, "Iit-Jam Joint Admission Test for M.Sc. Physics 15 Year's Solved Papers (2005-2019) and 5 Model Papers (with Explanation) 2020"
,"Dear Stranger, I Know How You Feel - A Journey to Hope and Healing"
, "12 Years' Solved Papers Cbse Aipmt & Neet 2020"
, "Prep Guide to Bitsat 2020 - Prep Guide"
, "Self Study Guide Clat 2020"
, "Objective Physics for Neet 2020"
, "The Theory Of Everything"
, "41 Years' Chapterwise Topicwise Solved Papers (2019-1979) Iit Jee Mathematics"
, "Ncert Solutions Mathematics 12th"
, "41 Years' Chapterwise Topicwise Solved Papers (2019-1979) Iit Jee Chemistry"
, "Certificate Physical and Human Geography"
, "32 Years Neet-Aipmt Chapterwise Solutions - Chemistry 2019"
, "Iit-Jam Joint Admission Test for M.Sc. Mathematical Statistics 15 Year's Solved Papers (2005-2019) and 5 Model Papers (with Explanations) 2020"
, "Smarter Faster Better"
, "17 Years' Chapterwise Solutions Mathematics Jee Main 2020"
, "Geography of India"
, "Ross and Wilson Anatomy and Physiology in Health and Illness International Edition"
, "Mechanical Engineering"
, "Iit-Jam Joint Admission Test for M.Sc. from Iits Geology 15 Year's Solved Papers (2005-2019) and 5 Model Papers/Practice Sets (with Explanation) 2020"
, "40 Days Crash Course for Neet Biology"
, "A Handbook for Mechanical Engineering"
, "Fast Track Objective Arithmetic"
, "Mht-Cet Triumph Biology MCQS"
, "17 Years' Chapterwise Solutions Physics Jee Main 2020"
, "Competitive Book of Agriculture"
, "Physics for Joint Entrance Examination Jee (Advanced) Electrostatics and Current Electricity"
, "Neet Explorer 2019"
, "40 Days Crash Course for Neet Chemistry"
, "Important Judgements That Transformed India"
, "Physics for Joint Entrance Examination Jee (Advanced) Mechanics I - Mechanics I"
, "Let Us C#"
, "Sapiens - A Brief History of Humankind"
, "Bhartiya Nausena Mr & NMR Steward, Cook Avum Topass Bharti Pariksha"
, "Skills in Mathematics - Play with Graphs for Jee Main and Advanced 2020"
, "40 Days Crash Course for Neet Physics"
, "Gate 2020"
, "32 Years' Chapterwise Solutions Cbse Aipmt & Neet Physics (1988-2019)"
, "GGSIPU BJMC Guide 2020"
, "UP B.Ed. Science Group Guide 2020"];

var prices=["₹192"
, "₹192"
, "₹167"
, "₹330"
, "₹540"
, "₹395"
,"₹586"
, "₹156"
, "₹335"
, "₹226"
, "₹271"
, "₹291"
, "₹210"
, "₹352"
, "₹386"
, "₹209"
, "₹558"
, "₹949"
, "₹499"
, "₹256"
, "₹266"
, "₹255"
, "₹326"
, "₹358"
, "₹203"
, "₹320"
, "₹580"
, "₹460"
, "₹298"
, "₹209"
, "₹620"
, "₹263"
, "₹388"
, "₹132"
, "₹188"
, "₹300"
, "₹425"
, "₹220"
, "₹273"
, "₹305"];

var ratings=["4.3"
, "4.1"
, "4.5"
, "4.4"
, "4.5"
, "4.4"
, "4.6"
, "4.5"
, "4.6"
, "4.4"
, "4.6"
, "4.5"
, "4.5"
, "4"
, "3.8"
, "4.5"
, "4.5"
, "4.5"
, "4.3"
, "4.1"
, "4.6"
, "4.4"
, "4.4"
, "4.4"
, "4.5"
, "4.4"
, "4.6"
,"4.4"
, "4.5"
, "4.5"
, "4.5"
, "4.5"
, "4.6"
, "4.3"
, "4.5"
, "4.7"
, "4.4"
, "4.4"
, "4.3"
, "4.2"];

var noOfRatings=["(48)"
, "(52)"
, "(1,752)"
,"(988)"
, "(542)"
, "(881)"
, "(1,753)"
, "(6,432)"
,"(2,094)"
,"(2,642)"
, "(1,990)"
, "(17,301)"
, "(1,358)"
, "(56)"
, "(13)"
, "(876)"
, "(2,081)"
, "(644)"
, "(9,670)"
, "(62)"
, "(186)"
, "(6,359)"
, "(16,600)"
, "(77)"
, "(998)"
, "(515)"
, "(238)"
, "(313)"
, "(165)"
, "(1,367)"
, "(384)"
, "(3,561)"
, "(6,164)"
, "(1,982)"
, "(1,236)"
, "(170)"
, "(1,000)"
, "(726)"
, "(22)"
, "(77)"];

var images=["https://rukminim1.flixcart.com/image/612/612/jw84ya80/book/9/9/7/iit-jam-joint-admission-test-for-m-sc-chemistry-15-year-s-solved-original-imafgy86e5hzb235.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jws547k0/book/9/5/9/iit-jam-joint-admission-test-for-m-sc-from-iits-physics-includes-original-imafhdw6d865njzh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k2urhjk0/book/7/9/8/dear-stranger-i-know-how-you-feel-original-imafm44bxc8nbryc.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jwuzzww0/book/3/1/0/12-years-solved-papers-cbse-aipmt-neet-original-imafhggbfj8fusxr.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jy7kyvk0/book/7/7/8/prep-guide-to-bitsat-2020-original-imafg76fqfm6nbep.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jy1v7gw0/book/0/9/6/self-study-guide-clat-2020-original-imafgdd5hmjgbh5d.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jua4djk0/book/6/1/5/objective-physics-vol-2-for-neet-original-imafffwhbpbbmkbg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/book/9/1/1/the-theory-of-everything-original-imadbgf6d45p2qzh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxp08sw0/book/9/7/6/41-years-chapterwise-topicwise-solved-papers-2019-1979-iit-jee-original-imafg3c3m3ezf7rq.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j1nvwcw0/book/1/2/8/ncert-solutions-mathematics-12th-original-imaet5ync2yqcygf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxtakcw0/book/9/6/9/41-years-chapterwise-topicwise-solved-papers-2019-1979-iit-jee-original-imafg6p3eqj72u3g.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k7dnonk0/regionalbooks/d/f/c/certificate-physical-and-human-geography-indian-edition-original-imafpnff6yyxgv8f.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jx3kn0w0/book/0/1/6/32-years-neet-aipmt-chapterwise-solutions-chemistry-2019-original-imafhmvqzgrzp76v.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k1fbmvk0/book/9/4/2/iit-jam-for-m-sc-mathematical-statistics-original-imafkzz6dgrna77b.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0r15e80/book/4/3/7/smarter-faster-better-original-imafkh8pxpn4jzve.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jwaztzk0/book/3/2/0/17-years-chapterwise-solutions-mathematics-jee-main-2019-original-imafhyv4hghbtpqh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxz0brk0/book/8/9/9/geography-of-india-for-civil-services-and-other-competitive-original-imafg838mfmyhrka.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/joixj0w0/book/7/7/2/ross-and-wilson-anatomy-and-physiology-original-imafayx7e4gjxydj.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jdj4k280/book/2/8/9/mechanical-engineering-original-imaf28kmreqgrymk.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jws547k0/book/9/6/6/iit-jam-joint-admission-test-for-m-sc-from-iits-geology-includes-original-imafhdvsekff3kha.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k05ljm80/book/2/9/8/neet-in-40-days-original-imafkyp77quba9xy.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k3dc7m80/book/2/5/7/a-handbook-for-mechanical-engineering-original-imafmdrqdf2gsunm.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jkobte80/book/8/3/6/fast-track-objective-arithmetic-original-imaf7yvjnyehx3qf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k3t21zk0/regionalbooks/t/z/u/mht-cet-triumph-biology-book-for-2020-medical-and-pharmacy-original-imafhhtvexgarvmn.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jwaztzk0/book/3/0/6/17-years-chapterwise-solutions-physics-jee-main-2019-original-imafhyutdgyn5thz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/js3j5ow0/book/9/1/0/a-competitive-book-of-agriculture-2019-original-imafdzsuuj7t69en.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jv8exzk0/book/7/5/7/cengage-jee-advanced-electrostatics-and-current-electricity-with-original-imafg6qdn9fqzcw8.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jwtkk280/book/8/8/8/neet-explorer-2019-original-imafhezt7aaxsa8g.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k05ljm80/book/2/8/1/neet-in-40-days-original-imafkyp6vzpxzzbt.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k09vv680/book/4/8/6/important-judgments-that-transformed-india-for-upsc-civil-original-imafkygyjkmgymd5.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jvmpci80/book/7/7/1/physics-for-joint-entrance-examination-jee-advanced-original-imafghyhxvenrkgp.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jkfr6a80/book/4/9/4/let-us-c-16th-edition-authentic-guide-to-c-programming-language-original-imaf7sh7hyzxs78b.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jpinjbk0/book/0/8/8/sapiens-original-imafbqt2ufkcqhbg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jqo3b0w0/book/8/5/0/bhartiya-nausena-mr-nmr-steward-cook-avum-topass-bharti-pariksha-original-imafce4g6am5jjzy.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jua4djk0/book/9/4/0/skills-in-mathematics-play-with-graphs-for-jee-main-and-advanced-original-imafesngg6gugng7.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k05ljm80/book/2/7/4/neet-in-40-days-original-imafkyp64c2fz4ks.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0463rk0/book/7/7/5/made-easy-gate-2020-civil-engineering-29-years-previous-papers-original-imafjz64ejhzwmjq.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxrv4i80/book/3/2/6/32-years-chapterwise-solutions-1988-2019-neet-physics-original-imafhggbxvkdk6jp.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k52s58w0/book/0/1/5/ggsipu-bjmc-guide-2020-original-imafnu3wr3hqr9p2.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k34rki80/book/8/8/5/up-b-ed-science-group-guide-2020-original-imafmc2ebmz6sst3.jpeg?q=70"];

var page1=[];


for(var i=0;i<40;i++)
{
	var item={title:names[i],
				rating:ratings[i],
				noOfRating:noOfRatings[i],
				price:prices[i],
				image:images[i]
			}
	page1.push(item);

		
}
page[4][1]=page1;





names = ["Udemy.com Pianoforall - Incredible New Way To Lear…iano & Keyboard Vocational & Personal Development", "Testbook.com 1 Year Subscription Digital Delivery Test Preparation", "Udemy.com The Ultimate Drawing Course - Beginner to Advanced Vocational & Personal Development", "Adda247 SBI Clerk Complete - E KIT (English Medium) eBooks Test Preparation", "Adda247 Bihar Police Enforcement Sub Inspector 2020 Online Test Series Test Preparation", "Adda247 CTET 2020 KA MAHAPACK Live classes Video Courses Test Series E-Books Test Preparation", "EduGorilla Rajasthan High Court Group D Exam Test Preparation", "EduGorilla NTA UGC NET Political Science Exam Test Preparation", "EduGorilla SPMCIL-Officer (Technical Operations/ T…ical Support/ Technical Control) Test Preparation", "EduGorilla KVIC Executive Group B Recruitment Exam Test Preparation", "EduGorilla SRCC GBO Exam Test Preparation", "EduGorilla Undergraduate Common Entrance Exam for Design (UCEED) Test Preparation", "EduGorilla Saraswat Bank Junior Officer Test Preparation", "EduGorilla NPCIL Stipendiary Trainees / Scientific Assistant Exam Test Preparation", "EduGorilla IIT JAM (Mathematical Statistics) Exam Test Preparation", "Udemy.com Technical Analysis MasterClass:Trading B…hnical Analysis Vocational & Personal Development", "Udemy.com Tableau 10 A-Z: Hands-On Tableau Trainin…r Data Science! Vocational & Personal Development", "Udemy.com Machine Learning A-Z: Hands-On Python & …In Data Science Vocational & Personal Development", "Udemy.com Deep Learning A-Z‚Ñ¢: Hands-On Artificia…Neural Networks Vocational & Personal Development", "Udemy.com Tableau 10 Advanced Training: Master Tab…in Data Science Vocational & Personal Development", "Udemy.com AWS Certified Developer - Associate 2019 Vocational & Personal Development", "Udemy.com Digital Marketing Masterclass - 23 Courses in 1 Vocational & Personal Development", "Udemy.com Product Management A-Z: Excel as a PM & … great Products Vocational & Personal Development", "Udemy.com Learning Python for Data Analysis and Visualization Vocational & Personal Development", "Udemy.com Social Media Marketing Agency : Digital …ting + Business Vocational & Personal Development", "Udemy.com The Ultimate Hands-On Hadoop - Tame your Big Data! Vocational & Personal Development", "Udemy.com Machine Learning, Data Science and Deep …ing with Python Vocational & Personal Development", "Udemy.com AWS Certified Solutions Architect - Associate 2019 Vocational & Personal Development", "Udemy.com IELTS Band 7+ Complete Prep Course Vocational & Personal Development", "Udemy.com Ultimate AWS Certified Solutions Archite… Associate 2020 Vocational & Personal Development", "Udemy.com The Ultimate MySQL Bootcamp: Go from SQL…inner to Expert Vocational & Personal Development", "Udemy.com Apache Spark 2 with Scala - Hands On with Big Data! Vocational & Personal Development", "Udemy.com Complete Python Bootcamp: Go from zero t…ero in Python 3 Vocational & Personal Development", "Udemy.com Complete C# Unity Developer 2D: Learn to…de Making Games Vocational & Personal Development", "Udemy.com SQL - MySQL for Data Analytics and Business Intelligence Vocational & Personal Development", "Udemy.com The Complete Financial Analyst Course 2019 Vocational & Personal Development", "Udemy.com The Data Science Course 2019: Complete D…cience Bootcamp Vocational & Personal Development", "Udemy.com Python for Data Science and Machine Learning Bootcamp Vocational & Personal Development", "Udemy.com Mastering IELTS Writing: Task 2 (Achieve… 7+ in 5 Hours) Vocational & Personal Development", "Udemy.com Ultimate AWS Certified Developer Associate 2020 - NEW! Vocational & Personal Development"];
prices = ["₹455", "₹299", "₹455", "₹199", "₹249", "₹1,499", "₹99", "₹99", "₹99", "₹99", "₹199", "₹199", "₹99", "₹99", "₹99", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455", "₹455"];
ratings = ["4.1", "3.7", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"];
noOfRatings = ["(38)", "(3)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)", "(105)"];
images = 
["https://rukminim1.flixcart.com/image/612/612/k0wqwsw0/e-learning/a/r/w/2019-pianoforall-incredible-new-way-to-learn-piano-keyboard-original-imafkh2xtzhyzdmy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jz4g3gw0/e-learning/x/c/8/2014-1-year-subscription-digital-delivery-testbook-com-original-imafj7gyuffgg3e2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k0wqwsw0/e-learning/6/d/5/2019-the-ultimate-drawing-course-beginner-to-advanced-udemy-com-original-imafkhfb6ucrnagp.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k8ot7rk0/e-learning/w/a/f/2020-sbi-clerk-complete-e-kit-english-medium-ebooks-adda247-original-imafqnzz5uzxujuh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7c88sw0/educational-media/f/e/y/adda247-bihar-police-enforcement-sub-inspector-2020-online-test-original-imafphtzrdh9jss8.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k8ot7rk0/e-learning/g/y/3/2020-ctet-2020-ka-mahapack-live-classes-video-courses-test-original-imafqnzzhqtkeh7t.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6xxua80/e-learning/m/k/c/2020-rajasthan-high-court-group-d-exam-edugorilla-original-imafpagy4hzhzg6c.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6xxua80/e-learning/v/k/z/2020-nta-ugc-net-political-science-exam-edugorilla-original-imafpagytgvksyku.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6xxua80/e-learning/z/b/s/2020-spmcil-officer-technical-operations-technical-support-original-imafpagyyhamyt3s.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6xxua80/e-learning/b/t/7/2020-kvic-executive-group-b-recruitment-exam-edugorilla-original-imafpagy5umzdkjm.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6xxua80/e-learning/m/y/d/2020-srcc-gbo-exam-edugorilla-original-imafpagypcgzgxf5.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6xxua80/e-learning/h/z/j/2020-undergraduate-common-entrance-exam-for-design-uceed-original-imafpagyfefz6kjy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6wiefk0/educational-media/a/6/4/edugorilla-bank-of-maharashtra-generalist-officer-economics-original-imafp9ff2fkezkbg.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6xxua80/e-learning/k/g/d/2020-npcil-stipendiary-trainees-scientific-assistant-exam-original-imafpagyszgnff4j.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k6xxua80/e-learning/3/y/u/2020-iit-jam-mathematical-statistics-exam-edugorilla-original-imafpagyduqbcpf6.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/m/s/y/2019-technical-analysis-masterclass-trading-by-technical-original-imafpwzfg4ptvaxq.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7p37gw0/e-learning/d/j/6/2019-tableau-10-a-z-hands-on-tableau-training-for-data-science-original-imafpvnmwddnqedb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/e/8/g/2019-machine-learning-a-z-hands-on-python-r-in-data-science-original-imafpwzgemj6vgpe.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7p37gw0/e-learning/6/2/s/2019-deep-learning-a-z-hands-on-artificial-neural-networks-udemy-original-imafpvnmejtdgx5k.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/x/b/y/2019-tableau-10-advanced-training-master-tableau-in-data-science-original-imafpwzfatrfty8p.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7p37gw0/e-learning/m/w/z/2019-aws-certified-developer-associate-2019-udemy-com-original-imafpvnmfngvhjhd.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/y/h/y/2019-digital-marketing-masterclass-23-courses-in-1-udemy-com-original-imafpwzfhttzkepw.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/e/f/t/2019-product-management-a-z-excel-as-a-pm-build-great-products-original-imafpwzfczb6cyg5.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/n/h/3/2019-learning-python-for-data-analysis-and-visualization-udemy-original-imafpwzfbrxpdnfx.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/y/h/p/2019-social-media-marketing-agency-digital-marketing-business-original-imafpwzgkfumbvnt.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7p37gw0/e-learning/g/n/p/2019-the-ultimate-hands-on-hadoop-tame-your-big-data-udemy-com-original-imafpvnmqschaf76.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/u/x/w/2019-machine-learning-data-science-and-deep-learning-with-python-original-imafpwzgnkhnuffy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/n/3/9/2019-aws-certified-solutions-architect-associate-2019-udemy-com-original-imafpwzqffxnx8yh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/q/n/z/2019-ielts-band-7-complete-prep-course-udemy-com-original-imafpwzffhfbzhcn.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/p/y/u/2019-ultimate-aws-certified-solutions-architect-associate-2020-original-imafpwzgmwxgtrhy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/g/x/g/2019-the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert-original-imafpwzgdxuj6hfk.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7p37gw0/e-learning/s/g/y/2019-apache-spark-2-with-scala-hands-on-with-big-data-udemy-com-original-imafpvnmvppw2gnr.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7p37gw0/e-learning/f/s/c/2019-complete-python-bootcamp-go-from-zero-to-hero-in-python-3-original-imafpvnm64ezmdec.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/a/s/h/2019-complete-c-unity-developer-2d-learn-to-code-making-games-original-imafpwzg6d9y8fry.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7p37gw0/e-learning/q/x/8/2019-sql-mysql-for-data-analytics-and-business-intelligence-original-imafpvnmuyzbuyz5.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7p37gw0/e-learning/y/q/z/2019-the-complete-financial-analyst-course-2019-udemy-com-original-imafpvm5utxxf6rb.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7p37gw0/e-learning/r/p/6/2019-the-data-science-course-2019-complete-data-science-bootcamp-original-imafpvnm5auaqjh2.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7p37gw0/e-learning/9/g/m/2019-python-for-data-science-and-machine-learning-bootcamp-udemy-original-imafpvm5hsxtqgnc.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7p37gw0/e-learning/p/r/z/2019-mastering-ielts-writing-task-2-achieve-band-7-in-5-hours-original-imafpvnmvnufzbbe.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k7qinbk0/e-learning/h/g/f/2019-ultimate-aws-certified-developer-associate-2020-new-udemy-original-imafpwzfhgvhjj2e.jpeg?q=70"];
page1=[];
for(var i=0;i<40;i++)
{
    var item={title: names[i],
        rating: ratings[i],
        noOfRating: noOfRatings[i],
        price: prices[i],
        image: images[i]
        }
    page1.push(item);
}
page[4][2] = page1;







names = ["Pedigree Adult Meat Rice 3 kg Dry Dog Food", "Whiskas Kitten (2-12 months) Chicken 1.02 kg (12x0.09 kg) Wet Cat Food", "Whiskas Kitten (2-12 months) Tuna 0.51 kg (6x0.09 kg) Wet Cat Food", "Whiskas Adult (+1 year) Salmon 0.51 kg (6x0.09 kg) Wet Cat Food", "Pedigree Puppy Milk, Chicken 3 kg Dry Dog Food", "Whiskas Kitten (2-12 months) Fish 1.1 kg Dry Cat Food", "Pedigree Gravy Chicken Chunks for Puppy Chicken 1.05 kg (15x0.07 kg) Wet Dog Food", "Pedigree Puppy Milk, Chicken 1.2 kg Dry Dog Food", "Pedigree Puppy Milk, Chicken 6 kg Dry Dog Food", "Whiskas Dry Meal Junior Ocean Fish 0.45 kg Dry Cat Food", "Whiskas Kitten (2-12 months) Tuna 1.02 kg (12x0.09 kg) Wet Cat Food", "Whiskas Adult (+1 year) Tuna 1.2 kg Dry Cat Food", "Pedigree High Protein Variant Rice, Egg, Chicken 3 kg Dry Dog Food", "Whiskas Adult (+1 year) Ocean Fish 3 kg Dry Cat Food", "Whiskas Adult (+1 year) Chicken 0.51 kg (6x0.09 kg) Wet Cat Food", "Pedigree Gravy Chicken, Liver 2.1 kg (30x0.07 kg) Wet Dog Food", "Whiskas Adult (+1 year) Tuna 0.48 kg Dry Cat Food", "Whiskas Adult (+1 year) Fish 7 kg Dry Cat Food", "IAMS Proactive Health Smart Puppy Small & Medium Breed Dogs (<1 Years) Chicken 1.5 kg Dry Dog Food", "IAMS Proactive Health Smart Puppy Large Breed Dogs (<2 Years) Chicken 3 kg Dry Dog Food", "Whiskas Adult (+1 year) Tuna 0.51 kg (6x0.09 kg) Wet Cat Food", "Whiskas Adult (+1 year) Salmon 1.02 kg (12x0.09 kg) Wet Cat Food", "Whiskas Adult (+1 year) Chicken 1.02 kg (12x0.09 kg) Wet Cat Food", "Whiskas Kitten (2-12 months) Chicken 0.51 kg (6x0.09 kg) Wet Cat Food", "IAMS Proactive Health Chicken 1.5 kg Dry Dog Food", "Drools Labrador Chicken 4 kg Dry Dog Food", "IAMS Proactive Health Chicken 3 kg Dry Dog Food", "Pedigree PRO Expert Nutrition for Active Adult ( 18 Months Onwards ) 20 kg Dry Dog Food", "IAMS IAMS Proactive Health Chicken 3 kg Dry Dog Food", "Pedigree PRO Expert Nutrition for Small Breed Puppy (2-9 months) 1.2 kg Dry Dog Food", "Pedigree Adult Chicken, Vegetable 1.2 kg Dry Dog Food", "Pedigree Adult Vegetable 1.2 kg Dry Dog Food", "Gnawlers Calcium Milk Bone 12 Pcs Milk Dog Treat", "Whiskas Adult (+1 year) Tuna 3 kg Dry Cat Food", "IAMS Proactive Health Smart Puppy Small & Medium Breed Dogs (<1 Years) Chicken 3 kg Dry Dog Food", "Pedigree PRO Expert Nutrition for Large Breed Puppy (3-18 months) 10 kg Dry Dog Food", "Pedigree Pedigree Biscrok Biscuits Dog Treats (Abo…ths), Chicken Flavor, 900g Pack Chicken Dog Treat", "Pedigree Senior Rice, Chicken 1.2 kg Dry Dog Food", "Royal Canin Labrador Retriever Adult 3 kg Dry Dog Food", "Royal Canin Golden Retriever Puppy 3 kg Dry Dog Food"];
prices = ["₹600", "₹420", "₹210", "₹210", "₹630", "₹380", "₹420", "₹260", "₹1,200", "₹175", "₹420", "₹385", "₹650", "₹840", "₹180", "₹1,050", "₹160", "₹1,780", "₹670", "₹1,240", "₹210", "₹360", "₹420", "₹210", "₹630", "₹1,440", "₹1,180", "₹5,400", "₹1,180", "₹450", "₹230", "₹285", "₹375", "₹840", "₹1,240", "₹3,100", "₹275", "₹285", "₹2,070", "₹2,450"];
ratings = ["4.4", "4.5", "4.6", "4.6", "4.4", "4.6", "4.5", "4.4", "4.4", "4.6", "4.6", "4.6", "4.4", "4.6", "4.6", "4.6", "4.6", "4.6", "4.8", "4.4", "4.6", "4.6", "4.6", "4.5", "4.7", "4.4", "4.7", "4.4", "4.9", "4.5", "4.4", "4.4", "4.8", "4.6", "4.8", "4.4", "4.6", "4.5", "4.4", "4.4"];
noOfRatings = ["(22,038)", "(1,446)", "(7,139)", "(2,876)", "(21,650)", "(7,139)", "(6,081)", "(21,650)", "(21,650)", "(7,139)", "(7,139)", "(2,602)", "(22,038)", "(1,657)", "(2,876)", "(884)", "(2,405)", "(2,405)", "(24)", "(13)", "(2,876)", "(2,876)", "(2,876)", "(1,446)", "(26)", "(9)", "(26)", "(863)", "(7)", "(894)", "(22,038)", "(22,038)", "(19)", "(2,602)", "(24)", "(1,458)", "(24)", "(1,072)", "(367)", "(175)"];
images = 
["https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/z/b/q/3-dog-8906002487745-pedigree-original-imaf6tyzjpmn78hz.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/s/e/n/1-02-cat-8410136004049-whiskas-original-imaf6tyghzddjzmy.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/y/r/s/510-cat-8906002484393-whiskas-original-imaf6tyhyg2qnnjf.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/k/g/6/510-cat-8906002484331-whiskas-original-imaf6tyhsyndxdh8.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/f/g/h/3-dog-8906002485000-pedigree-original-imaf6tyhshzxdtfh.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/d/h/e/1-1-cat-8853301140812-whiskas-original-imaehgbhdghhzbyu.jpeg?q=70"
,"https://rukminim1.flixcart.com/image/612/612/k8ot7rk0/pet-food/e/y/a/1-05-dog-18906002481658-pedigree-original-imafqnhyykqab7aa.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/a/x/m/1-2-dog-8906002480432-pedigree-original-imaf6tyhgqdtg9zy.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/y/x/x/6-dog-8906002481828-pedigree-original-imaf6tyh2ffhgwyz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/w/x/h/450-cat-8853301140799-whiskas-original-imaennxxfu5pzfnd.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/y/d/h/1-02-cat-8410136004001-whiskas-original-imaf6tyganhzmjgu.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/m/2/z/1-2-cat-19310022715409-whiskas-original-imaf6tyhgnq8hytg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0zlsi80/pet-food/h/p/v/3-dog-8906002488278-pedigree-original-imafknz5uhavvwpu.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/7/g/f/3-cat-8853301400107-whiskas-original-imaf6tygafjbqk3v.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/w/u/x/510-cat-8906002484355-whiskas-original-imaf6tyhaztczh6e.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k7nnrm80/pet-food/h/e/d/2-4-dog-18853301530740-pedigree-original-imafpu9w6qgmg2bf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/416/416/jj6130w0/pet-food/h/d/h/7-cat-8853301140096-whiskas-original-imaf6tyzvh37cgzt.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/e/9/g/480-cat-9310022866500-whiskas-original-imaf6tyhsktxasxz.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jxapua80/pet-food/m/j/d/1-2-cat-9310022866104-whiskas-original-imafhsp3zt4wdghm.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6l2vm80/pet-food/x/k/h/1-5-dog-fp-puppy-small-medium-breed-1-5kgs-iams-original-imafpya5xwak9k98.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6l2vm80/pet-food/w/p/v/3-dog-fp-puppy-large-breed-3kg-iams-original-imafpya5fbezdxu8.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/k/s/e/510-cat-8906002484317-whiskas-original-imaf6tyhkukuc434.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/h/g/g/1-02-cat-8410136004186-whiskas-original-imaf6tygqdevj3xg.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/j/f/u/1-02-cat-8410136004612-whiskas-original-imaf6tyjgmpw9eya.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/g/y/f/510-cat-8906002484379-whiskas-original-imaf6tyhegzdcnkk.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6l2vm80/pet-food/x/h/x/1-5-dog-fp-iams-adult-small-medium-breed-1-5kg-iams-original-imafpya5zrx42dmh.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jvo4scw0/pet-food/y/d/z/4000-dog-931555-drools-original-imafgjyhgvfgzfw9.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6l2vm80/pet-food/9/x/w/3-dog-fp-iams-adult-small-medium-breed-3kg-iams-original-imafpya55hngbvt8.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/g/8/g/20-dog-8906002484683-pedigree-original-imaf6tyqfwtk7ygf.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6l2vm80/pet-food/g/s/7/3-dog-fp-iams-adult-large-breed-3kg-iams-original-imafpya5yfgmrfzu.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/t/f/q/1-2-dog-8906002484607-pedigree-original-imaf6tymgsgfqqeq.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/h/t/c/1-2-dog-8906002480449-pedigree-original-imaf6tynhhckbchc.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/w/t/b/1-2-dog-8906002480524-pedigree-original-imaf6tyggnhhzzhr.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/j3g6pow0/pet-treat/t/s/8/270-dog-12-in-1-gnawlers-original-imaeugkfhbv6zfw8.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/6/f/4/3-cat-8853301400084-whiskas-original-imaf6tygchmpyvxt.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k6l2vm80/pet-food/s/e/k/3-dog-fp-puppy-small-medium-breed-3kgs-iams-original-imafpya5kzeymnuc.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/a/k/4/10-dog-8906002484584-pedigree-original-imaf6typmvdhfybm.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k0zlsi80/pet-treat/n/p/j/900-dog-8902433001437-pedigree-original-imafhywy4zg5uz5p.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jj6130w0/pet-food/r/f/x/1-2-dog-8906002481293-pedigree-original-imaf6tyh58raj2w3.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/jc0ttow0-1/pet-food/5/r/k/3-dog-3182550715614-royal-canin-original-imaff7umkhkhtnxa.jpeg?q=70"
, "https://rukminim1.flixcart.com/image/612/612/k1tm1e80/pet-food/n/k/m/1-dog-3182550751247-royal-canin-original-imafem4m8n2ghwyg.jpeg?q=70"];

page1=[];
for(var i=0;i<40;i++)
{
    var item={title: names[i],
        rating: ratings[i],
        noOfRating: noOfRatings[i],
        price: prices[i],
        image: images[i]
        }
    page1.push(item);
}
page[4][3] = page1;


// console.log(page);

for(var i=0; i<5; i++){
	for(var j=0; j<4; j++){
		var newCat = {
			row: i+1,
			col: j+1,
			elements: page[i][j]
		}
		Category.create(newCat, function(err, cat){
				if(err){
                    console.log("ERROR IN Creating");
                }
                else{
					console.log("data pushed");
				}
		})
	}
}



//-------------------------------------------------------template
// names = 
// prices = 
// ratings = 
// noOfRatings = 
// images = 

// page1=[];
// for(var i=0;i<40;i++)
// {
//     var item={title: names[i],
//         rating: ratings[i],
//         noOfRating: noOfRatings[i],
//         price: prices[i],
//         image: images[i]
//         }
//     page1.push(item);
// }
// page[][] = page1;