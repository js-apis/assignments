
function api(){
    const car = {
        id1:{
            type:"2019 BMW, ", 
            model:"M6, ", 
            color:"Silver",
            img:"https://www.bmwusa.com/content/dam/bmwusa/M/M6/2019/BMW-MY19-MSeries-M6-Highlight-01.jpg",
            link:"https://www.bmwusa.com/vehicles/m-models/m6.html"
        },
        id2:{
            type:"2019 Audi, ", 
            model:"S6, ", 
            color:"Red",
            img:"https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/14q4/638369/2016-audi-s6-first-drive-review-car-and-driver-photo-640292-s-original.jpg",
            link:"https://www.audiusa.com/models/audi-s6"
        },
         id3:{
            type:"2019 Mercedes Benz, ", 
            model:"AMG CLS Coupe, ", 
            color:"Silver",
            img:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my19/cls/class-page/amg/2019-CLS-AMG-COUPE-CLASS-HERO-CH1-DR.jpg",
            link:"https://www.mbusa.com/en/vehicles/class/cls/coupe/type-amg"
        }
    }
    return car;      
}

function callApi(val){
  const getResult = api();
    console.log(getResult);//debug
//    console.log(getResult.size);
    
//    for (let i = 0; i<getResult.size; i++){
//        console.log(getResult[i])
//        console.log("test")
//    }
    
    document.getElementById("car1_img").src=getResult.id1.img;
    document.getElementById("car1_link").href=getResult.id1.link; document.getElementById("car1_text").innerHTML=getResult.id1.type+getResult.id1.model+getResult.id1.color; 
    
    document.getElementById("car2_img").src=getResult.id2.img;
    document.getElementById("car2_link").href=getResult.id2.link; document.getElementById("car2_text").innerHTML=getResult.id2.type+getResult.id2.model+getResult.id2.color; 
    
    document.getElementById("car3_img").src=getResult.id3.img;
    document.getElementById("car3_link").href=getResult.id3.link; document.getElementById("car3_text").innerHTML=getResult.id3.type+getResult.id3.model+getResult.id3.color; 

    


    

}

callApi();