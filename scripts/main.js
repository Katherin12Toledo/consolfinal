(function(){


	// var cat = {
	// 	furColor: "orange",
	// 	numberOfLegs: 4,
	// 	hasTail: true,
	// 	name: "Felix",
	// 	age: 3
	// },
	// target = $( ".inner" );

	// target.empty().append(' my cats name is ' + cat.age + "."+'His color is '+ cat.furColor + ".");


var carelinked = new Firebase("https://carelinked.firebaseio.com/");

carelinked.child("Steven Brown/Date of Birth").on("value", function(snapshot) {
  var dob = snapshot.val();  

});

// carelinked.child("title").on("value", function(snapshot) {
//   alert(snapshot.val());  // Alerts "San Francisco"

// });

// carelinked.set({
//   title: "Hello World!",
//   author: "Firebase",
//   location: {
//     city: "San Francisco",
//     state: "California",
//     zip: 94103
//   }
// });


var mypatient = 

{
  "Steven Brown" : {
    "Name" : "Steven",
    "lastname" : "Brown",
    "Gender" : "Male ",
    "dateofbirth" : "04/04/1940",
    "Age" : "75",
    "Height" : "5'9",
    "Weight" : "165",
    "bloodtype" : "AB+",
    "Address" : {
          "address1" : "320 EAST 57 STREET",
          "address2" : "apt 305",
          "city":  "NEW YORK 10048 ",
          "state" : "NY",
          "zip code" : " 10048"
    },
    "mobilenumber" : "917-246-0000",
    "homenumber" : "509-147-5284",
    "personofcontact" : "509-147-5284",
    "phonenumber" : "917-246-0000",
    "maritalstatus" : "Widow",
    "Nationality" : "Filipino",
    "socialsecuritynumber" : "444-444-4444",
    "primarydoctor" : "Wiliam Moore MD Beth israel-Mont Sinai Hospital UNION SQUARE NYC.",
    "pdphone" : "870-632-4748",
    "insuranceprovider" : "Empire Blue Cross Blue Shield PPO plan",
    "referredby" : "Helen Compton MD at ST Lukes Roosvelt Hospital, NYC.",
    
    // "patientmedicalhistory" : {
    //   "Allergies" : "Aspirin", "Related Drugs", "salicylates ", "NSAIDs group", 
    //     "Ibuprophene and such", "Peniciline", "Dust Mites","Mice",
    //   "Effects": "Obstruction/swwelling in the airways and agressive facial inflammation.",     
      // "physicalstatus" : "DIABETES TYPE II (ICD-250), HYPERTENSION and BENIGN TUMOR (on left lung, removed last June/2015) (ICD-401.1) ",
      // "Current Medications":  
    //       { 
    //       "medication1": "HUMUL COMPOUND INJ 70/30. INSULIN REG and ISOPHANE 20 units",
    //       "Intake":"ac breakfast.",
    //       "Last Refill": "#60 x 1.", 
    //       "prescribingDoctor": "William Moore MD, (08/27/2015)"
    //       }, 
    //       {
    //       "medication2" : "LORATADINE TABS 40MG (ANTI ALLERGIC)",
    //       "Last Refill": "#30 x 2, (08/27/2015)", 
    //       "Intake": "Only if allergic reaction occur or may occur.",
    //       "prescribingDoctor" : "William Moore MD (08/27/2015)"
    //       }, 
        
      "completephysicalexamination" : {
        "Performed on 082715": "Doesn't show malaise, fever, weight loss.",
        "Eyes": " Myopia (Eye Glasses -4.75) no irritation or discharge.",
        "Cardiovascular": "Ocassional chest pain when sudden change of environmental tempeture.",
        "Respiratory" : "Had a bening tumor, left lung, removed on June /2015. At this moment doesn't show coughing, wheezing, dyspnea, hemoptysis.",
        "Musculoskeletal": "Presents lower back pain, mild joint swelling.",
        "Skin": " ONLY when allergy occurs; rashes, itching, lumps, sores, lesions, color change.", 
        "Difficulties (including changes)": "Blood pressure is lower than last checkout (Jan/2015).Extremities were inspected and there are no compromised skin. No vision complaints more than Myopia (-4.75).",
        "Home Glucose Monitoring": "AC breakfast 110 to 220 / AC breakfast mean 142. AC dinner 100 to 250 / AC dinner main 120."
      },
      "Comments": "Control with retinopathy and neuropathy medium glucometer readings, Will work harder on diet. Will increase insulin by 2 units. At the moment the bening tumor on left lung hasn't appear again. No traces left and no secondary effects of medication.",
      "Conclusion": "Stable. Lungs and sugar are under control. Eyesight, Body extremities, Mental; under control as well. Fatigue is not serious. Overall good.",
      "Next appointment" : " December 10th 2015.", 
      "Primary Doctor" : "Wiliam Moore MD Beth israel-Mont Sinai Hospital UNION SQUARE NYC." 
  }
};

$(".Name").text(mypatient["Steven Brown"]["Name"]);
$(".lastname").text(mypatient["Steven Brown"]["lastname"]);
$(".Gender").text(mypatient["Steven Brown"]["Gender"]);
$(".dateofbirth").text(mypatient["Steven Brown"]["dateofbirth"]);
$(".Age").text(mypatient["Steven Brown"]["Age"]);
$(".Height").text(mypatient["Steven Brown"]["Height"]);
$(".Weight").text(mypatient["Steven Brown"]["Weight"]);
$(".bloodtype").text(mypatient["Steven Brown"]["bloodtype"]);
$(".Address").text(mypatient["Steven Brown"]["address1"]);
$(".mobilenumber").text(mypatient["Steven Brown"]["mobilenumber"]);
$(".homenumber").text(mypatient["Steven Brown"]["homenumber"]);
$(".personofcontact").text(mypatient["Steven Brown"]["personofcontact"]);
$(".phonenumber").text(mypatient["Steven Brown"]["phonenumber"]);
$(".maritalstatus").text(mypatient["Steven Brown"]["maritalstatus"]);
$(".Nationality").text(mypatient["Steven Brown"]["Nationality"]);

$(".socialsecuritynumber").text(mypatient["Steven Brown"]["socialsecuritynumber"]);
$(".primarydoctor").text(mypatient["Steven Brown"]["primarydoctor"]);
$(".pdphone").text(mypatient["Steven Brown"]["pdphone"]);

$(".insuranceprovider").text(mypatient["Steven Brown"]["insuranceprovider"]);
$(".referredby").text(mypatient["Steven Brown"]["referredby"]);
$(".completephysicalexamination").text(mypatient["Steven Brown"]["completephysicalexamination"]);

// $(".Allergies").text(mypatient["Steven Brown"]["Allergies"]);
// $(".Effects").text(mypatient["Steven Brown"]["Effects"]);

// $(".physicalstatus").text(mypatient["Steven Brown"]["physicalstatus"]);








// carelinked.set(mypatient)*PatientID*;
// carelinked.set("mypatient");
})();




