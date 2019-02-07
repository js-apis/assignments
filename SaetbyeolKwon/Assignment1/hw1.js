    var Jojo = {
        Name: 'Georges-Marie Suzanne Nestor',
        Job: 'Assistant store manager',
        Height: 5.8,
        HairColor: 'brown',
        EyesColor: 'brown',

        drink: function(){
            this.isDrinking = true;
            this.isEmpty = false;
            console.log('She is drinking soju: ', this.isDrinking);
        },
        drinkMore: function(){
            this.isDrunken = true;
            this.isEmpty = false;
            console.log('She is drunken: ',this.isDrunken);
        },
        vomit: function(){
            this.isEmpty = true;
            console.log('She brought up everything she had drunken. Is empty?: ', this.isEmpty);
        },
        isEmpty: false,
        isDrunken: false,
        isDrinking: false
    }
    //call your 'api' functon and print the values returned
    //by the API to the console.

    for(var key in Jojo){
        console.log(key,':', Jojo[key]);
    }

//Extra points if you print the values in HTML instead of
//the console.

//Draw a diagram of a client and an API, and how you imagine them communicating.

//Find interesting API's you'd like to work with and post about them on Canvas. 
