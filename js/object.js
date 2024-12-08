// let myFirstObject = {
//     batchName : "mern 2403",
//     totalStudent : 23, 
//     IsActive : true, 
//     StudentName : ["ismail" , "Rubel" , "sakib", "Hima", "anuska"],
//     getFemalsStudents : function () {
//         let femaleBlankArr = [];
//         for (let femaleStudant of this.StudentName) {
//             if(
//                 femaleStudant == "Hima"|| femaleStudant == "anuska"
//             ){
//                 femaleBlankArr.push(femaleStudant);
//             }
//         }
//         return femaleBlankArr;
        
//     },
//     getmalsStudents : function () {
//         let maleBlankArr = [];
//         for (let maleStudant of this.StudentName) {
//             if(
//                 maleStudant == "ismail"|| maleStudant == "Rubel"
//             ){
//                 maleBlankArr.push(maleStudant);
//             }
//         }
//         console.log(maleBlankArr);
//     },
//     mentor : {
//         mentor : "Taufik islam", 
//         Department : "Web and software", 
//         designation : "Faculty Member & Mern Stack Developer", 
//         mentorList : ["Shohan", "Tahsan", "wasim", "Rajibur", "Shohel"], 
//         DepartmentHead : {
//             HodName : "SoHan Hossain eva", 
//             experience : 7,
//             EducationalBackground: "BSC in CSE",

//         }
//     }, 
//     DigitalMerketing : {
//         teamMember : 45,
//         teamMemberName : ["shariar", "tanjim", "Akram", "Osman"],
//         DigitalMerketingHeadInfo : {
//             DHODHead : "Shovo",
//             totalExperience : 8,
//             getInfoOfdmHead : function (a, b) {
//                 console.log(this);
//             }
//         }
//     }
// };

// let returnItem = myFirstObject.getFemalsStudents();


// // make a object with the help of constructor

// function makeFunction(name, total) {
//     this.name = name;
//     this.total = total;
// }
// const myobj = new makeFunction("one", "two")
// console.log(myobj);



// -------------------class 37-----------------------

// const myobj = Object();
// myobj2.name = "Mern 2403";
// myobj2.totalStudent = 24;
// myobj2.isActive = true;
// myobj2.studentName = ["Rubel vai",  "sakib vai", "hridoy khan", "jahangir sir", "Saimun vai", "hima mam", "aylin mam", "anuska mam"];

// console.log(myobj2);

// ----------------manual object create-----------
// function objMaker (){
//     this.name = "Mern 2403";
//     this.totalStudent = 24;
//     this.isActive = true;
// }
// console.log(objMaker);



// class mern {
//     name = "mern 2403"
//     totalStudent= 24;
//     isActive = true;
//     gretting = function(){
//         alert("Hi")
//     }
// }
// const myCreatingObject = new mern();
// console.log(myCreatingObject);


//-------------------------constructor -------------------
// class mern {
//     constructor(one, two, three){
//         this.name = one;
//         this.totalStudent = two;
//         this.isActive = three;       
//     }
// }
// const myCreatingObject = new mern("rifat", 24 , true);
// console.log(myCreatingObject);

// name = "subroto kumar barman";
// collage = "Dhaka collage";
// district = "Rangpur";
// thana = "pirjang";
// familyMember = 4;
// maritualStatus = "UnMarried";

class srk {
    constructor(name, collage, district, thana, familyMember, maritualStatus){
        this.name = name;
        this.collage = collage;
        this.district = district;
        this.thana = thana;
        this.familyMember = familyMember;
        this.maritualStatus = maritualStatus;
    }
    saySomething = function (){
        console.log(`Name : ${this.name} collage : ${this.collage} district : ${this.district} thana : ${this.thana} familyMemer : ${this.familyMember} maritual Status : ${this.maritualStatus}`);
    }
    set setGFName (name){
        this.gf = name;
    }

    get showgfName (){
        return this.gf
    }
}

const srkObj = new srk("subroto kumar barman", "Dhaka collage", "Rangpur", "pirjang", 4, "UnMarried")
console.log(srkObj);

const SakibObj = new srk("Sakibul", "Dhaka collage", "Rangpur", "pirjang", 4, "UnMarried")
SakibObj.setGFName = "opu bissas";
console.log(SakibObj.showgfName);
