var modalitemno = 0;
var orderArray = [];
const itemList = [
    {
        prod_name: "G8 AdTech Set",
        prod_price: 450,
        prod_pic: ["../pics/adtechg8.png"]
    },
    {
        prod_name: "General AdTech Set",
        prod_price: 550,
        prod_pic: ["../pics/adtechgen.png"]
    },
    {
        prod_name: "Ballpen",
        prod_price: 15,
        prod_pic: ["../pics/pen.png"]
    },
    {
        prod_name: "Fita",
        prod_price: 12,
        prod_pic: ["../pics/fita.png"]
    },
    {
        prod_name: "Hansel",
        prod_price: 10,
        prod_pic: ["../pics/hansel.png"]
    },
    {
        prod_name: "Hi-ro",
        prod_price: 8,
        prod_pic: ["../pics/hiro.png"]
    },
    {
        prod_name: "Rebisco",
        prod_price: 10,
        prod_pic: ["../pics/rebisco.png"]
    },
    {
        prod_name: "Skyflakes",
        prod_price: 10,
        prod_pic: ["../pics/skyflakes.png"]
    },
    {
        prod_name: "Whatta Tops",
        prod_price: 9,
        prod_pic: ["../pics/whatta_tops.png"]
    },
    {
        prod_name: "Bluetooth Earphones",
        prod_price: 800,
        prod_pic: ["../pics/bt_earphones.png"]
    },
    {
        prod_name: "A4 Bond Paper (30pcs)",
        prod_price: 40,
        prod_pic: ["../pics/bondp_a4.png"]
    },
    {
        prod_name: "Long Bond Paper (30pcs)",
        prod_price: 40,
        prod_pic: ["../pics/bondp_long.png"]
    },
    {
        prod_name: "Short Bond Paper (30pcs)",
        prod_price: 40,
        prod_pic: ["../pics/bondp_short.png"]
    },
    {
        prod_name: "Book (Soft Copy)",
        prod_price: 150,
        prod_pic: ["../pics/book.png"]
    },
    {
        prod_name: "Broom and Dustpan Set",
        prod_price: 175,
        prod_pic: ["../pics/broom_dustpan.png"]
    },
    {
        prod_name: "Canva Poster Templates",
        prod_price: 75,
        prod_pic: ["../picss/poster.png"]
    },
    {
        prod_name: "Canva Presentation Templates",
        prod_price: 75,
        prod_pic: ["../picss/presentation.png"]
    },
    {
        prod_name: "Clipboard",
        prod_price: 50,
        prod_pic: ["../pics/clipboard.png"]
    },
    {
        prod_name: "3-in-1 Coffee",
        prod_price: 25,
        prod_pic: ["../pics/coffee.png"]
    },
    {
        prod_name: "Colored Pencils (24 Color Set)",
        prod_price: 100,
        prod_pic: ["../pics/colored_pencils.png"]
    },
    {
        prod_name: "Correction Tape",
        prod_price: 35,
        prod_pic: ["../pics/correction_tape.png"]
    },
    {
        prod_name: "Dormer Pajama Set",
        prod_price: 230,
        prod_pic: ["../pics/pajamas.png"]
    },
    {
        prod_name: "Envelopes (15pcs)",
        prod_price: 90,
        prod_pic: ["../pics/envelopes.png"]
    },
    {
        prod_name: "Eraser (3pcs)",
        prod_price: 60,
        prod_pic: ["../pics/eraser.png"]
    },
    {
        prod_name: "Feminine Hygiene Products",
        prod_price: 150,
        prod_pic: ["../pics/fem_hygiene.png"]
    },
    {
        prod_name: "Floor Mat",
        prod_price: 20,
        prod_pic: ["../pics/mat.png"]
    },
    {
        prod_name: "Highlighter (5 Color Set)",
        prod_price: 125,
        prod_pic: ["../pics/highlighter.png"]
    },
    {
        prod_name: "Hotel Slippers",
        prod_price: 60,
        prod_pic: ["../pics/hotel_slippers.png"]
    },
    {
        prod_name: "ID Lace",
        prod_price: 100,
        prod_pic: ["../picss/id_lace.png"]
    },
    {
        prod_name: "Index Cards (30pcs)",
        prod_price: 30,
        prod_pic: ["../pics/index_cards.png"]
    },
    {
        prod_name: "Lab Gown",
        prod_price: 500,
        prod_pic: ["../picss/lab_gown.png"]
    },
    {
        prod_name: "Laptop",
        prod_price: 40000,
        prod_pic: ["../pics/laptop.png"]
    },
    {
        prod_name: "Globe Load (500)",
        prod_price: 500,
        prod_pic: ["../pics/load_globe.png"]
    },
    {
        prod_name: "Smart Load (500)",
        prod_price: 500,
        prod_pic: ["../pics/load_smart.png"]
    },
    {
        prod_name: "Sun Load (500)",
        prod_price: 500,
        prod_pic: ["../pics/load_sun.png"]
    },
    {
        prod_name: "TM Load (500)",
        prod_price: 500,
        prod_pic: ["../pics/load_tm.png"]
    },
    {
        prod_name: "TNT Load (500)",
        prod_price: 500,
        prod_pic: ["../pics/load_tnt.png"]
    },
    {
        prod_name: "Lysol",
        prod_price: 200,
        prod_pic: ["../pics/lysol.png"]
    },
    {
        prod_name: "USB Microphone",
        prod_price: 250,
        prod_pic: ["../pics/mic.png"]
    },
    {
        prod_name: "Mop",
        prod_price: 900,
        prod_pic: ["../pics/mop.png"]
    },
    {
        prod_name: "Mouthwash",
        prod_price: 50,
        prod_pic: ["../pics/mouthwash.png"]
    },
    {
        prod_name: "Cup Noodles",
        prod_price: 25,
        prod_pic: ["../pics/noodles.png"]
    },
    {
        prod_name: "1/4 Pad Paper",
        prod_price: 20,
        prod_pic: ["../pics/1_4_pad.png"]
    },
    {
        prod_name: "Crosswise Pad Paper",
        prod_price: 20,
        prod_pic: ["../pics/cwise_pad.png"]
    },
    {
        prod_name: "Intermediate Pad Paper",
        prod_price: 30,
        prod_pic: ["../pics/intermediate_pad.png"]
    },
    {
        prod_name: "Lengthwise Pad Paper",
        prod_price: 20,
        prod_pic: ["../pics/lwise_pad.png"]
    },
    {
        prod_name: "Yellow Pad Paper",
        prod_price: 60,
        prod_pic: ["../pics/yellow_pad.png"]
    },
    {
        prod_name: "Paperclips (25pcs)",
        prod_price: 30,
        prod_pic: ["../pics/paperclips.png"]
    },
    {
        prod_name: "PE Uniform Pants",
        prod_price: 350,
        prod_pic: ["../picss/pe_pants.png"]
    },
    {
        prod_name: "PE Uniform Shirt",
        prod_price: 350,
        prod_pic: ["../picss/pe_shirt.png"]
    },
    {
        prod_name: "Pencils (8pcs)",
        prod_price: 80,
        prod_pic: ["../pics/pencils.png"]
    },
    {
        prod_name: "Phone Charger",
        prod_price: 80,
        prod_pic: ["../pics/charger.png"]
    },
    {
        prod_name: "Globe Pocket Wifi",
        prod_price: 800,
        prod_pic: ["../pics/wifi_globe.png"]
    },
    {
        prod_name: "Smart Pocket Wifi",
        prod_price: 500,
        prod_pic: ["../pics/wifi_smart.png"]
    },
    {
        prod_name: "Sun Pocket Wifi",
        prod_price: 1500,
        prod_pic: ["../pics/wifi_sun.png"]
    },
    {
        prod_name: "Printed Notes",
        prod_price: 500,
        prod_pic: ["../pics/notes.png"]
    },
    {
        prod_name: "Protective Equipment",
        prod_price: 450,
        prod_pic: ["../pics/protective_equipment.png"]
    },
    {
        prod_name: "Rags (4pcs)",
        prod_price: 200,
        prod_pic: ["../pics/rags.png"]
    },
    {
        prod_name: "College Review Booklets",
        prod_price: 500,
        prod_pic: ["../pics/col_review.png"]
    },
    {
        prod_name: "Competition Review Booklets",
        prod_price: 500,
        prod_pic: ["../pics/comp_review.png"]
    },
    {
        prod_name: "Ruler Set",
        prod_price: 45,
        prod_pic: ["../pics/rulers.png"]
    },
    {
        prod_name: "School Uniform Blouse & Skirt",
        prod_price: 250,
        prod_pic: ["../pics/uniform_bs.png"]
    },
    {
        prod_name: "School Uniform Polo & Pants",
        prod_price: 250,
        prod_pic: ["../pics/uniform_pp.png"]
    },
    {
        prod_name: "Scientific Calculator",
        prod_price: 1000,
        prod_pic: ["../pics/scical.png"]
    },
    {
        prod_name: "Shampoo & Conditioner",
        prod_price: 150,
        prod_pic: ["../pics/shampoo_conditioner.png"]
    },
    {
        prod_name: "Skincare Products Set",
        prod_price: 750,
        prod_pic: ["../pics/skincare.png"]
    },
    {
        prod_name: "Slippers",
        prod_price: 80,
        prod_pic: ["../pics/slippers.png"]
    },
    {
        prod_name: "Dove Soap",
        prod_price: 150,
        prod_pic: ["../pics/soap.png"]
    },
    {
        prod_name: "Sports Attire",
        prod_price: 500,
        prod_pic: ["../pics/sports_attire.png"]
    },
    {
        prod_name: "Stapler",
        prod_price: 50,
        prod_pic: ["../pics/stapler.png"]
    },
    {
        prod_name: "Summer Uniform Boys",
        prod_price: 500,
        prod_pic: ["../pics/sum_uniform_b.png"]
    },
    {
        prod_name: "Summer Uniform Girls",
        prod_price: 500,
        prod_pic: ["../pics/sum_uniform_g.png"]
    },
    {
        prod_name: "Tablet + Stylus",
        prod_price: 2500,
        prod_pic: ["../pics/tablet.png"]
    },
    {
        prod_name: "Scotch Tape",
        prod_price: 25,
        prod_pic: ["../pics/tape.png"]
    },
    {
        prod_name: "Tesla",
        prod_price: 2500000,
        prod_pic: ["../picss/tesla.png"]
    },
    {
        prod_name: "Test Reviewer",
        prod_price: 200,
        prod_pic: ["../picss/test.jpg"]
    },
    {
        prod_name: "Tissue Roll",
        prod_price: 20,
        prod_pic: ["../pics/tissue.png"]
    },
    {
        prod_name: "Toilet Cleanser",
        prod_price: 200,
        prod_pic: ["../pics/toilet_cleanser.png"]
    },
    {
        prod_name: "Toilet Scrubber",
        prod_price: 50,
        prod_pic: ["../pics/toilet_scrubber.png"]
    },
    {
        prod_name: "Toothbrush & Toothpaste Set",
        prod_price: 125,
        prod_pic: ["../pics/tooth_set.png"]
    },
    {
        prod_name: "Body Towel",
        prod_price: 80,
        prod_pic: ["../pics/towel_b.png"]
    },
    {
        prod_name: "Face Towel",
        prod_price: 30,
        prod_pic: ["../pics/towel_f.png"]
    },
    {
        prod_name: "Tutoring/Consultation Service (per Hour)",
        prod_price: 250,
        prod_pic: ["../picss/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor.png","../pics/tutor (2).png"]
    },
    {
        prod_name: "USB Webcam",
        prod_price: 450,
        prod_pic: ["../pics/cam.png"]
    },
    {
        prod_name: "Wipes",
        prod_price: 200,
        prod_pic: ["../pics/wipes.png"]
    },
    {
        prod_name: "Wired Earphones",
        prod_price: 300,
        prod_pic: ["../pics/wr_earphones.png"]
    },
    {
        prod_name: "Wired Mouse",
        prod_price: 300,
        prod_pic: ["../pics/wr_mouse.png"]
    },
    {
        prod_name: "Wireless Keyboard",
        prod_price: 500,
        prod_pic: ["../pics/wrls_keyboard.png"]
    },
    {
        prod_name: "Wireless Mouse",
        prod_price: 300,
        prod_pic: ["../pics/wrls_mouse.png"]
    },
    {
        prod_name: "Hoshi Kwon",
        prod_price: 15000000,
        prod_pic: ["../picss/hoshi.png"]
    },
    {
        prod_name: "Kwon Soonyoung",
        prod_price: 15000000,
        prod_pic: ["../picss/soonyoung.png"]
    },
    {
        prod_name: "Changmin Ji",
        prod_price: 15000000,
        prod_pic: ["../pics/q.png"]
    },
    {
        prod_name: "Juyeon + Q",
        prod_price: 30000000,
        prod_pic: ["../picss/jukyu.png"]
    },
    {
        prod_name: "Maverick Agbayani",
        prod_price: 1000000,
        prod_pic: ["../pics/agbayani.png"]
    },
    {
        prod_name: "Xabi Mari Difuntorum",
        prod_price: 1000000,
        prod_pic: ["../pics/difuntorum.jpg"]
    },
    {
        prod_name: "John Paul Tabrilla",
        prod_price: 1000000,
        prod_pic: ["../picss/tabrilla.jpg"]
    },
    {
        prod_name: "Matilda Eunys Barbon",
        prod_price: 1000000,
        prod_pic: ["../picss/barbon.jpg"]
    },
    {
        prod_name: "Pauleen Mariah Guisdan",
        prod_price: 1000000,
        prod_pic: ["../pics/guisdan.png"]
    }
];

function addOrder(x) {
    orderArray[orderArray.length] = itemList[x-1];
    setTimeout(() => { displayOrder();setTimeout(() => { document.getElementById("order-box").scrollTop=document.getElementById("order-box").scrollHeight; }, 1) }, 1);
}

function displayOrder() {
    var orderBox = "";
    var x;
    if (orderArray.length != 0) {
        x = JSON.stringify(orderArray);
        orderBox = "<hr>";
        for (var i = 0; i < orderArray.length; i++) {
            orderBox+="<div class=\"cart-item\"><span class=\"product-name\">"+(i+1)+")&nbsp;"+orderArray[i].prod_name+"</span><br><span class=\"product-price\">₱"+orderArray[i].prod_price+"</span>&nbsp;&nbsp;<span class=\"remove-item\" style=\"user-select: none;\" onclick=\"removeItem("+i+");saveForm()\">Remove Item</span></div><hr>";
        }
        orderBox+="<div class=\"remove-item cart-item\" style=\"user-select: none;text-align:right;margin-right:1vw;margin-bottom:1vw\" onclick=\"orderArray=[];displayOrder();saveForm()\">Remove All Items</div>";
    } else {orderBox = "<div style=\"font-size:4vw;color:gray;text-align:center;user-select: none;\"><br>Empty Cart</div>"; x = ''}
    document.getElementById("cust_order").setAttribute("value", x);
    document.getElementById("order-box").innerHTML=orderBox;
}

function removeItem(x) {
    orderArray.splice(x, 1);
    displayOrder();
}

function saveForm() {
    var x = {
        cust_name: document.getElementById("cust_name").value,
        cust_email: document.getElementById("cust_email").value,
        cust_addr: document.getElementById("cust_addr").value,
        cust_order: JSON.stringify(orderArray)
    };
    localStorage.setItem("formValues", JSON.stringify(x));
}

function loadForm() {
    if (localStorage.getItem("formValues") != null) {
        var x = JSON.parse(localStorage.getItem("formValues"));
        document.getElementById("cust_name").value = x.cust_name;
        document.getElementById("cust_email").value = x.cust_email;
        document.getElementById("cust_addr").value = x.cust_addr;
        orderArray = JSON.parse(x.cust_order);
        //setTimeout(() => { document.getElementById("order-box").scrollTop=document.getElementById("order-box").scrollHeight; }, 1);
    }
    displayOrder();
}

function createcard(x) {
    return "<div class=\"card\"><div class=\"card-img\"><img src=\""+itemList[x-1].prod_pic[Math.floor(Math.random()*itemList[x-1].prod_pic.length)]+"\" alt=\""+itemList[x-1].prod_name+"\" onclick=\"modal("+x+")\"></div><div class=\"card-text\"><div class=\"card-name\">"+itemList[x-1].prod_name+"</div><div class=\"card-price\">₱"+itemList[x-1].prod_price+"</div></div><div class=\"card-button\"><button onclick=\"addOrder("+x+");saveForm()\">Add to Cart</button></div></div>";
}

function createset(x,y) {
    if (x <= y && x >= 1) {
        var numset = [];
        for (var i = 0; i < x; i++){
            var c = false;
            do {
                numset[i] = Math.floor((Math.random() * y) + 1);
                if (i > 0) {
                    for (var v = 0; v < numset.length - 1; v++) {
                        if (numset[numset.length - 1] != numset[v]) {
                            c = true;
                        } else {
                            c = false;
                            v = numset.length;
                        }
                    }
                } else { c = true;}
            } while (c == false);
        }
        return numset;
    }
}

function createcardset(x) {
    var divset = "";
    for (var i = 0; i < x.length; i++) {
        divset+=createcard(x[i]);
    }
    return divset;
}

function search() {
    document.getElementById("searchResult").removeAttribute("hidden");
    document.getElementById("searchResult").innerHTML = "";
    if (document.getElementById( "search-box").value.trim() != "") {
        document.getElementById("searchResult").removeAttribute("hidden");
        var v = 0;
        for (var i = 0; i < itemList.length-5; i++) {
            if (itemList[i].prod_name.toLowerCase().search(document.getElementById("search-box").value.toLowerCase().trim()) >= 0) {
                document.getElementById("searchResult").innerHTML+=
                "<div class=\"cart-item\" id=\"searchResult-"+v+"\" onclick=\"modal("+(i+1)+");sfocus();saveForm();\">"+itemList[i].prod_name+"<span style=\"float:right;\">₱"+itemList[i].prod_price+"</span></div>";
                v++;
            }
        }
        if (v == 0) {document.getElementById("searchResult").innerHTML+="<div class=\"cart-item\">No Results</div>";}
    } else {document.getElementById("searchResult").setAttribute("hidden", true)}
}

function sfocus() {
    var x = window.scrollY;
    setTimeout(() => { document.getElementById( "search-box").focus(); }, 0.1 );
    setTimeout(() => { window.scroll(0, x); }, 0.11 );
}

function navDisplay(x) {
    const card_box = document.getElementById("card-box");
    const head = document.getElementById("header2");
    switch(x){
        case 1:
            card_box.innerHTML = "<div class=\"opening\"><video id=\"left\" src=\"../pics/slideshow.mp4\" autoplay loop muted></video><div class=\"right\"><img src=\"../pics/mustsee.png\" id=\"taas\" onclick=\"navDisplay(2)\"><br><img src=\"../pics/girlboss.png\" id=\"baba\" onclick=\"navDisplay(8)\"></div></div><br><div><h3 id=\"categories\">CATEGORIES</h3><div class=\"cate\"><div class=\"hatc\"><div class=\"cat\" onclick=\"navDisplay(3)\"><img src=\"../pics/catpic1.png\"></div><br><h3 class=\"cap\" onclick=\"navDisplay(3)\">Clothes</h3></div><div class=\"hat\"><div class=\"cat\" onclick=\"navDisplay(4)\"><img src=\"../pics/catpic2.png\"></div><br><h3 class=\"cap\" onclick=\"navDisplay(4)\">Technology</h3></div><div class=\"hat\"><div class=\"cat\" onclick=\"navDisplay(5)\"><img src=\"../pics/catpic3.png\"></div><br><h3 class=\"cap\" onclick=\"navDisplay(5)\">School Supplies</h3></div><div class=\"hat\"><div class=\"cat\" onclick=\"navDisplay(6)\"><img src=\"../pics/catpic4.png\"></div><br><h3 class=\"cap\" onclick=\"navDisplay(6)\">Learning Materials</h3></div><div class=\"hat\"><div class=\"cat\" onclick=\"navDisplay(7)\"><img src=\"../pics/catpic5.png\"></div><br><h3 class=\"cap\" onclick=\"navDisplay(7)\">Dormer Items</h3></div></div><br><div><h3 id=\"meths\">AVAILABLE PAYMENT METHODS</h3><table class=\"table3\"><tr><td><div class=\"pay\"><img src=\"../pics/cod.png\" onclick=\"navDisplay(3)\"><br><h2>Cash on Delivery</h2></div></td><td><div class=\"pay\"><img src=\"../pics/stipend.png\" onclick=\"navDisplay(4)\"><br><h2>Stipend</h2></div></td></tr></table></div><br><br><div><h3 id=\"sells\">BEST SELLERS</h3></div>" + createcardset(createset(12,89));
            head.innerHTML = "Welcome to PisayPlex!";
            break;
        case 2:
            var v = [];
            for (var i = 1; i <= 89; i++){v[v.length] = i}
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "All Items";
            break;
        case 3:
            var v = [29,31,49,50,57,62,63,69,71,72];
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "Clothes";
            break;
        case 4:
            var v = [10,32,33,34,35,36,37,39,52,53,54,55,64,73,75,84,86,87,88,89];
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "Technology";
            break;
        case 5:
            var v = [1,2,3,11,12,13,14,18,20,21,23,24,27,30,43,44,45,46,47,48,51,61,70,74];
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "School Supplies";
            break;
        case 6:
            var v = [16,17,56,59,60,76,83];
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "Supplementary Learning Materials";
            break;
        case 7:
            var v = [4,5,6,7,8,9,15,19,22,25,26,28,38,40,41,42,58,65,66,67,68,77,78,79,80,81,82,85];
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "Dormer Items";
            break;
        case 8:
            var v = [itemList.length-4,itemList.length-3,itemList.length-2,itemList.length-1,itemList.length];
            card_box.innerHTML = "<br><div class=\"card-box\" id=\"card-box\"><h3 class=\"dev\">DEVELOPERS</h3></div>" + createcardset(v) + "<h3 class=\"con\">CONTRIBUTIONS</h3><div class=\"contributions\"><div class=\"contri\"><div class=\"names\">Maverick Agbayani</div><br><ul><li>Images</li><li>Homepage</li></ul></div><div class=\"contri\"><div class=\"names\">Xabi Mari Difuntorum</div><br><ul><li>Images</li><li>About Page</li></ul></div><div class=\"contri\"><div class=\"names\">John Paul Tabrilla</div><br><ul><li>Javascript</li><li>Pages</li></ul></div><div class=\"contri\"><div class=\"names\">Eunys Barbon</div><br><ul><li>Layout & Design</li><li>Pages</li></ul></div><div class=\"contri\"><div class=\"names\">Pauleen Guisdan</div><br><ul><li>Layout & Design</li><li>Modals</li></ul></div></div><br><br><br><h3 class=\"ref\">REFERENCES</h3><div><table class=\"table3\"><tr><td><a href='https://shopee.ph/' target=\"_blank\"><div class=\"refs\"><img src=\"../pics/shopee.png\" onclick=\"navDisplay(3)\" alt=\"afaf\"><br></div></a></td><td><a href='https://docs.google.com/document/d/1WpxSBaiSDTKdyOfgL07W6r7qqIxMo6jw5hipayo6bSA/edit?usp=sharing' target=\"_blank\"><div class=\"refs\"><img src=\"../pics/sources.png\" onclick=\"navDisplay(4)\"><br></div></a></td></tr></table></div>";
            head.innerHTML = "About the Company";
            break;
    }
}

function modal(x) {
    modalitemno = x;
    document.getElementById('modal-img').setAttribute('src', itemList[x-1].prod_pic[Math.floor(Math.random()*itemList[x-1].prod_pic.length)]);
    document.getElementById('modal-img').setAttribute('alt', itemList[x-1].prod_name);
    document.getElementById('item-name').innerHTML = itemList[x-1].prod_name;
    document.getElementById('item-price').innerHTML = '₱' + itemList[x-1].prod_price;
    modalAppear(true);
}

var hide1 = true;
var hide2 = false;

function hideSearch (x) {
    hide1 = x;
    if (hide2 == false) {
        hide2 = true;
        if (hide1 == true) {
            setTimeout(() => { document.getElementById('searchResult').setAttribute('hidden', true);hide2=false; }, 1)
        } else {
            setTimeout(() => { document.getElementById('searchResult').removeAttribute('hidden');hide2=false; }, 1)
        }
    }
}

var modal1 = true;
var modal2 = false;

function modalSearch (x) {
    modal1 = x;
    if (modal2 == false) {
        modal2 = true;
        if (modal1 == true) {
            setTimeout(() => { modalAppear(false);modal2=false; }, 1)
        } else {
            setTimeout(() => { modalAppear(true);modal2=false; }, 1)
        }
    }
}

function modalAppear(x){
    if(x==true){
        if(modal2==false){document.getElementById('number-box').value = ''}
        hideSearch(true);
        document.getElementById('modal').style.opacity = '1';
        document.getElementById('modal').style.top = '0vh';
    }else{
        document.getElementById('modal').style.opacity = '0';
        document.getElementById('modal').style.top = '-100vh';
    }
}

function countUp() {
    if(document.getElementById('number-box').value == ''){document.getElementById('number-box').value = '0'}
    document.getElementById('number-box').value = Number(document.getElementById('number-box').value) + 1;
    resizeInput();
}
function countDown() {
    if(document.getElementById('number-box').value == ''){document.getElementById('number-box').value = '0'}
    document.getElementById('number-box').value = Number(document.getElementById('number-box').value) - 1;
    resizeInput();
}

function resizeInput() {
    document.getElementById('number-box').style.width = document.getElementById('number-box').value.length + 2 + "ch";
    if(Number(document.getElementById('number-box').value) > 50){document.getElementById('number-box').value = "50"}
    if(Number(document.getElementById('number-box').value) < 0){document.getElementById('number-box').value = "0"}
}

function addToCart() {
    if(Number(document.getElementById('number-box').value) > 0){
        for(var i = 1; i <= Number(document.getElementById('number-box').value); i++){
            addOrder(modalitemno);
        }
        saveForm();
    }else{alert('Item Quantity Required')}
}

function buyNow() {
    if(document.getElementById('cust_addr').value == '' && document.getElementById('cust_email').value == '' && document.getElementById('cust_name').value == ''){alert('Incomplete information. Please fill up information on cart.');}else{
        if(Number(document.getElementById('number-box').value) <= 0){alert('Item Quantity Required')}else{
            var x = [];
            for(var i = 1; i <= Number(document.getElementById('number-box').value); i++){
                x[x.length] = itemList[modalitemno-1];
            }
            document.getElementById("cust_order").setAttribute("value", JSON.stringify(x));
            document.getElementById("submit").click();
        }
    }
}

document.addEventListener('keydown', function(event) {
    switch (event.keyCode){
        case 27:
            modalAppear(false);
            break;
    }
});

setTimeout(() => {document.getElementById("search-box").addEventListener('keydown', () => {setTimeout(() => { search() }, 1 );});}, 1);

setTimeout(() => { navDisplay(1); loadForm(); document.getElementById("searchResult").setAttribute("hidden", true) }, 1);
