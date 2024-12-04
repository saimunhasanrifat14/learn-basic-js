let myFirstObject = {
    batchName : "mern 2403",
    totalStudent : 23, 
    IsActive : true, 
    StudentName : ["ismail" , "Rubel" , "sakib", "Hima", "anuska"],
    getFemalsStudents : function () {
        let femaleBlankArr = [];
        for (let femaleStudant of this.StudentName) {
            if(
                femaleStudant == "Hima"|| femaleStudant == "anuska"
            ){
                femaleBlankArr.push(femaleStudant);
            }
        }
        return femaleBlankArr;
        
    },
    getmalsStudents : function () {
        let maleBlankArr = [];
        for (let maleStudant of this.StudentName) {
            if(
                maleStudant == "ismail"|| maleStudant == "Rubel"
            ){
                maleBlankArr.push(maleStudant);
            }
        }
        console.log(maleBlankArr);
    },
    mentor : {
        mentor : "Taufik islam", 
        Department : "Web and software", 
        designation : "Faculty Member & Mern Stack Developer", 
        mentorList : ["Shohan", "Tahsan", "wasim", "Rajibur", "Shohel"], 
        DepartmentHead : {
            HodName : "SoHan Hossain eva", 
            experience : 7,
            EducationalBackground: "BSC in CSE",

        }
    }, 
    DigitalMerketing : {
        teamMember : 45,
        teamMemberName : ["shariar", "tanjim", "Akram", "Osman"],
        DigitalMerketingHeadInfo : {
            DHODHead : "Shovo",
            totalExperience : 8,
            getInfoOfdmHead : function (a, b) {
                console.log(this);
            }
        }
    }
};

let returnItem = myFirstObject.getFemalsStudents();


// make a object with the help of constructor

function makeFunction(name, total) {
    this.name = name;
    this.total = total;
}
const myobj = new makeFunction("one", "two")
console.log(myobj);
