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

carelinked.child("title").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"

});
var hello = "hi";


var mypatient = 

{
  "Steven Brown" : {
    "Name" : "Steven ",
    "Last Name" : "Brown",
    "Gender" : "Male ",
    "Date of Birth" : "04/04/1940",
    "Age" : "75",
    "Height" : "5'9",
    "Weight" : "165",
    "Blood Type" : "AB+",
    "Address" : {
          "address1" : "320 EAST 57 STREET",
          "address2" : "apt 305",
          "city":  "NEW YORK 10048 ",
          "state" : "NY",
          "zip code" : " 10048"
    },
    "Mobile Number" : "917-246-0000",
    "Home Number" : "509-147-5284",
    "Person of Contact" : "509-147-5284",
    "Phone Number" : "917-246-0000",
    "Marital Status" : "Widow",
    "Nationality" : "Filipino",
    "Social Security Number" : "444-444-4444",
    "Primary Doctor" : "Wiliam Moore MD Beth israel-Mont Sinai Hospital UNION SQUARE NYC.",
    "PD Phone" : "870-632-4748",
    "Insurance Provider" : "Empire Blue Cross Blue Shield PPO plan",
    "MRN" : "MR-111-1111",
    "Referred by" : "Helen Compton MD at ST Lukes Roosvelt Hospital, NYC.",
    "MEDICAL HISTORY" : {
      "Allergies" : ["Aspirin", "Related Drugs", "salicylates ", "NSAIDs group", 
        "Ibuprophene and such", "Peniciline", "Dust Mites","Mice"],
      "Effects": "Obstruction/swwelling in the airways and agressive facial inflammation.",     
      "Physical Status" : "DIABETES TYPE II (ICD-250), HYPERTENSION and BENIGN TUMOR (on left lung, removed last June/2015) (ICD-401.1) ",
      "Current Medications": [ 
          { 
          "medication": "HUMUL COMPOUND INJ 70/30. INSULIN REG and ISOPHANE 20 units",
          "Intake":"ac breakfast.",
          "Last Refill": "#60 x 1.", 
          "prescribingDoctor": "William Moore MD, (08/27/2015)"
          }, 
          {
          "medication" : "LORATADINE TABS 40MG (ANTI ALLERGIC)",
          "Last Refill": "#30 x 2, (08/27/2015)", 
          "Intake": "Only if allergic reaction occur or may occur.",
          "prescribingDoctor" : "William Moore MD (08/27/2015)"
          } 
        ],
      "Complete Physical Examination" : {
        "Performed on (08/27/2015)": "Doesn't show malaise, fever, weight loss.",
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
  }
};

// carelinked.set("mypatient");
console.log("hi");
});





