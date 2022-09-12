function foreignLanguages(countryName){
    if(countryName === "England" || countryName === "USA"){
        console.log("English");
    }else if(countryName === "Spain" || countryName === "Argentina" || countryName === "Mexico"){
        console.log("Spanish");
    }else{
        console.log("unknown");
    }
}
