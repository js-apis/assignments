// alert("hello world!");
document.addEventListener("DOMContainerLoaded",function () {
   console.log("it work!");
});


function Album(name, coverPicUrl, singer, genre, year,songs) {
    this.name = name;
    this.coverPicUrl = coverPicUrl;
    this.singer = singer;
    this.genre = genre;
    this.year = year;
    this.songs = songs;
}




function api(){
    var hb = new Album(
        "808s & HeartBreak",
        "https://is2-ssl.mzstatic.com/image/thumb/Music6/v4/27/e4/bc/27e4bcc2-cbdb-5732-bb16-90bae36aaf3a/UMG_cvrart_00602537665181_01_RGB72_1400x1400_13UAEIM26465.jpg/600x600bf.png",
        "Kanye West",
        "Electropop,synth-pop,R&B,art pop,experimental pop",
        "2008",
        ["Say You Will","Welcome to Heartbreak","Heartless","Amazing","Love Lockdown","Paranoid","RoboCop","Street Lights","Bad News","See You in My Nightmares","Coldest Winter","Pinocchio Story(Live)"]
    );

    var ll = new Album(
        "Lust for Life",
        "https://images-na.ssl-images-amazon.com/images/I/51ldsHJte%2BL._SY355_.jpg",
        "Lana Del Rey",
        "Dream Pop",
        "2017",
        ["Love","Lust for Life","13 Beaches","Cherry","White Mustang","Summer Bummer","Groupie Love","In My Feelings","Coachella","God Bless America","When the World Was At War We Kept Dancing","Tomorrow Never Came"]
    );

    var tt = new Album(
        "2029",
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/0d/bd/85/0dbd85be-fc9a-c1e2-ef01-3fe65277efa7/193017004359.jpg/600x600bf.png",
        "Lexie Liu",
        "HipHop",
        "2018",
        ["Like a Mercedes","Mulan","Sleep Away","Watch Me","Stranger Things","Bygone","Lil Life","Woods","Coachella","Good Girls","Dripping Sauce"]
    );

    var bt = new Album(
        "Bootleg",
        "https://images-na.ssl-images-amazon.com/images/I/51Illeyj-RL._SS500.jpg",
        "Kenshi Yonezu",
        "J-pop, Alternative rock",
        "2018",
        ["Hien","Loser","Peace Sign","Sunanowakusei","Orion","kaijyuunomarch","Moonlight","Shunrai","Fogbound","Number Nine","Alice","Nighthawks","Uchiagehanabi","Haiirotoao"]
    );

    var albums = [hb,ll,tt,bt];

    return albums;
}

function callApi() {
    console.log("get called!");
    var array = api();
    for(var i = 0; i<array.length; i++){
        var div = document.createElement('div');
        div.className = "item";
        div.id = i;
        div.setAttribute("onmouseover","displayInfo(this.id)");
        div.setAttribute("onmouseleave","hideInfo(this.id)");
        div.setAttribute("onclick","displayInfo(this.id)");
        div.innerHTML = "<img src='" + array[i].coverPicUrl + "' width='100%' height='auto'>";
        document.getElementById("albumContainer").appendChild(div);


        var albumSelected = array[i];
        var left = document.createElement('div');
        left.className = "introPart";
        left.id = "left"+i;
        left.innerHTML =
            "<h1>" + albumSelected.name + "</h1>" +
            "<h2>" + albumSelected.singer + "</h2>"+
            "<h2>" + albumSelected.genre + "</h2>" +
            "<h2>" + albumSelected.year + "</h2>";
        document.getElementById("infoContainer").appendChild(left);

        var right = document.createElement('div');
        right.className = "songsPart";
        right.id = "right" + i;
        var list = document.createElement("ol");
        for(var j = 0; j<albumSelected.songs.length;j++){
            var listItem = document.createElement("li");
            listItem.innerHTML = albumSelected.songs[j];
            list.appendChild(listItem);
        }
        right.appendChild(list);
        document.getElementById("infoContainer").appendChild(right);
    }

}

function displayInfo(id) {

    var displayQueryForLeft = "left" + id;
    var displayQueryForRight = "right" + id;

    var left = document.getElementById(displayQueryForLeft);
    var right = document.getElementById(displayQueryForRight);
    left.style.display = "inline-block";
    right.style.display = "inline-block";

}

function hideInfo(id) {

    var displayQueryForLeft = "left" + id;
    var displayQueryForRight = "right" + id;

    var left = document.getElementById(displayQueryForLeft);
    var right = document.getElementById(displayQueryForRight);
    left.style.display = "none";
    right.style.display = "none";
}

function showCase(){
    var arrary = callApi();
    var div = document.getElementById("show");
    for (var i = 0; i < array.length; i++){

    }

}