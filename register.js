var salon={
    name:"The Fashion Pet",
    address:{
        street:"Main St.",
        number:"123",
    },
    hour:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[]
}

class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
    }
}
var scooby=new Pet("Scooby",15,"male","Dane","grooming","Shaggy","123-456-7890");
var scrappy= new Pet("Scrappy",4,"male","Dane","nail clip","Shaggy","123-456-7890");
var speedy= new Pet("Speedy Gonzalez",70,"Male","Mouse","Bath","Bugs","321-098-3424");
var tweety=new Pet("Tweety Bird",3,"male","Canary","bird bath","Sylvester","238-245-3444");

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(speedy);
salon.pets.push(tweety);

function displayPet(){
    var tmp="";
    for(var i=0;i<salon.pets.length;i++){
        tmp+=`<div>
        <p>${salon.pets[i].name}, a ${salon.pets[i].age} year old ${salon.pets[i].breed} </p>
        </div>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
}
displayPet();

function registerPet(){
    // get values and store values from form
    var inputName=document.getElementById("petName").value;
    var inputAge=document.getElementById("petAge").value;
    var inputGender=document.getElementById("petGender").value;
    var inputBreed=document.getElementById("petBreed").value;
    var inputService=document.getElementById("petService").value;
    var inputOwnername=document.getElementById("petOwner").value;
    var inputPhone=document.getElementById("ownerPhone").value;
    //console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputOwnername,inputPhone);
    
    // create generic pet object
    var thePet=new Pet(inputName,Number(inputAge),inputGender,inputBreed,inputService,inputOwnername,inputPhone);
    console.log(thePet);
    
    //push the object into array
    salon.pets.push(thePet);
    //clear the inputs
    clearInputs();
    displayPet();
}

function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("petService").value="";
    document.getElementById("petOwner").value="";
    document.getElementById("ownerPhone").value="";
}