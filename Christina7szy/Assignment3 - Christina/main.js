var input = document.getElementById("input-box");
input.addEventListener("keydown", function(event){
//    event.preventDefault();
//    if (event.keyCode === 13){
//        console.log("yes");
//        var reset = document.getElementById("search-container");
//        reset.innerHTML = "";
//    }
})

var app = new Vue({
    el: "#search-container",
    data: {
        inputValue:''
    },
    methods:{
        handleKey: function(event){
            var artist = this.inputValue.toString();
            if (event.keyCode == 13){
                console.log(this.inputValue);
                var picture = document.getElementById("picture");
                picture.innerHTML = '';
                $.ajax({
                     url: 'https://api.spotify.com/v1/search',
                        type: 'GET',
                       data: { q: artist, type : "artist"},   
                       contentType: 'application/json; charset=utf-8',    
                       headers: {
                           'Authorization': 'Bearer ' + "BQC0IHolpG6r-X7wFjAkU3L1Nvm1BmMMw_3L0YNx_jFv6zN5l0HBKBeLm49vuGi5A96zZC4Cu4EPRRc-LTUVI0U39cxO1576veCR4vuH6rJrSgvwGKep7Uy8uKKM7Qy_oXvrPqAWPvSB9PPHDDuGtYNWtXXvO6-iSg"
                       },

                       success: function(response) {
                           console.log(response);
                           console.log(response.artists.items[0].images[0].url)
                           var artistItem = response.artists.items.length;
                           console.log(artistItem);
                           var picture = document.getElementById("picture");
                           for (i=0; i<artistItem;i++){
                             var band = document.createElement("div");
                             var bandLink = document.createElement("a");
                             var bandPicture = document.createElement("img");
                             var url = response.artists.items[i].external_urls.spotify;  
                             bandLink.href = url;
                             bandPicture.src = response.artists.items[i].images[0].url; 
                             var bandName = document.createElement("h3");
                             bandName.innerText = response.artists.items[i].name;
                             console.log(url);
                             band.className = "fade-in";    
                             bandLink.append(bandPicture);
                             band.append(bandLink);
                             band.append(bandName);
                          
                             picture.append(band);
                               
                                
                           }
                       }
                    })
            }
        }
    }
})

