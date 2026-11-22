// Core-branch job programs (ECE, EEE, Mechanical, Civil) + which branches each program suits.
// Branch keys: cse (CSE / IT), ece, eee, mech, civil. The Job Programs tab can filter by branch.
(()=>{
Object.assign(PROGRAMS,{
 ece:{name:"Electronics Engineer (Embedded / VLSI)",color:"var(--l-ece)",role:"Designs the electronics inside phones, cars and machines: firmware, circuit boards and chips.",
  forWho:"ECE, EEE and instrumentation students from 1st or 2nd year who want core electronics jobs.",
  hires:"Semiconductor companies and their India design centres, automotive and consumer electronics firms, defence and IoT startups.",
  phases:[
   {name:"Programming and electronics base",two:"Semester 1 (Months 1–6)",one:"Months 1–2",courses:["c","python","github"],parts:{python:[1,2],github:[1,3]},tasks:["Digital electronics and circuits revision","Solve 50 easy C problems","Put every program on GitHub"],milestone:"Comfortable with C, digital logic and Git."},
   {name:"Embedded systems and PCB",two:"Semester 2 (Months 7–12)",one:"Months 3–6",courses:["embedded","pcb"],tasks:["Build 3 projects in Wokwi, then on a real board","Design and order your first PCB","Embedded C interview questions"],milestone:"Two working embedded projects and one PCB you designed."},
   {name:"Chip design",two:"Semester 3 (Months 13–18)",one:"Months 7–9",courses:["vlsi"],tasks:["Finish the HDLBits problem set","Verify a small design with SystemVerilog","Internship at an electronics or chip company"],milestone:"Verilog designs with testbenches on GitHub."},
   {name:"Placement readiness",two:"Semester 4 (Months 19–24)",one:"Months 10–12",courses:["placement"],tasks:["Core interview questions for ECE","50 easy coding problems (for IT company tests)","Mock interviews"],milestone:"Ready for core electronics and IT company interviews."}
  ],
  interview:["Aptitude and technical MCQs (digital, analog, C)","Technical round: digital electronics, microcontrollers, protocols","Project and hardware demo discussion","Verilog or embedded C coding round","HR round"]},
 eee:{name:"Electrical Engineer (Power / EV / Automation)",color:"var(--l-eee)",role:"Keeps power flowing and machines running: power systems, electric vehicles and factory automation.",
  forWho:"EEE and instrumentation students from 1st or 2nd year who want core electrical jobs.",
  hires:"Power utilities and PSUs, EV and battery makers, solar companies, automation system integrators and electrical design consultancies.",
  phases:[
   {name:"Tools and power basics",two:"Semester 1 (Months 1–6)",one:"Months 1–3",courses:["python","powerev"],parts:{python:[1,3],powerev:[1,2]},tasks:["Electrical machines revision","MATLAB and Simulink Onramp certificates"],milestone:"Can model machines and converters in Simulink."},
   {name:"Industrial automation",two:"Semester 2 (Months 7–12)",one:"Months 4–6",courses:["plc"],tasks:["Ladder logic practice in OpenPLC","Industrial visit or plant internship"],milestone:"A PLC project with an HMI, tested in simulation."},
   {name:"EV and controllers",two:"Semester 3 (Months 13–18)",one:"Months 7–9",courses:["powerev","embedded"],parts:{powerev:[3,5],embedded:[1,3]},tasks:["EV or solar project","NPTEL EV or power electronics certificate"],milestone:"One EV or renewable-energy project with a report."},
   {name:"Placement readiness",two:"Semester 4 (Months 19–24)",one:"Months 10–12",courses:["placement"],parts:{placement:[[1,1],[3,5]]},tasks:["Core interview questions for EEE","Electrical safety and standards","Mock interviews"],milestone:"Ready for core electrical, EV and automation interviews."}
  ],
  interview:["Aptitude and technical MCQs","Technical: machines, power systems, power electronics","Automation or EV project discussion","Safety and standards questions","HR round"]},
 mech:{name:"Mechanical Design Engineer (CAD / CAE)",color:"var(--l-mech)",role:"Designs and tests mechanical products on the computer before they are made.",
  forWho:"Mechanical, production and automobile students from 1st or 2nd year.",
  hires:"Automotive and aerospace companies, engineering services firms, industrial machinery makers and their India design centres.",
  phases:[
   {name:"Drawing and CAD",two:"Semester 1 (Months 1–6)",one:"Months 1–3",courses:["cad"],tasks:["Engineering drawing practice","Model 20 real objects in CAD"],milestone:"Can model and draw any simple part and assembly."},
   {name:"Simulation",two:"Semester 2 (Months 7–12)",one:"Months 4–6",courses:["cae"],tasks:["Check every FEA result by hand","Ansys Innovation Courses badges"],milestone:"Three validated FEA/CFD studies with reports."},
   {name:"Manufacturing and automation",two:"Semester 3 (Months 13–18)",one:"Months 7–9",courses:["mfg","python"],parts:{python:[1,4]},tasks:["Shop-floor internship","Python for engineering calculations"],milestone:"Understands how designs are made and can automate calculations."},
   {name:"Placement readiness",two:"Semester 4 (Months 19–24)",one:"Months 10–12",courses:["placement"],parts:{placement:[[1,1],[3,5]]},tasks:["Design portfolio","Core interview questions for Mechanical","Mock interviews"],milestone:"Portfolio of designs and analyses; interview-ready."}
  ],
  interview:["Aptitude and technical MCQs","Technical: strength of materials, thermodynamics, materials, manufacturing","CAD test or drawing reading","Portfolio and project discussion","HR round"]},
 civil:{name:"Civil Engineer (Structural / BIM / Site)",color:"var(--l-civil)",role:"Plans, designs and builds buildings and infrastructure.",
  forWho:"Civil engineering students from 1st or 2nd year and diploma holders.",
  hires:"Construction and infrastructure companies, structural design consultancies, BIM service firms, and government departments through exams.",
  phases:[
   {name:"Drawing and estimation",two:"Semester 1 (Months 1–6)",one:"Months 1–3",courses:["civilcad"],tasks:["Draw a full house drawing set","Visit a construction site every month"],milestone:"Can draw and estimate a small building."},
   {name:"Structural design",two:"Semester 2 (Months 7–12)",one:"Months 4–6",courses:["structural"],tasks:["Hand-design before using software","NPTEL RCC design certificate"],milestone:"A G+2 building analysed and designed with calculation sheets."},
   {name:"BIM and planning",two:"Semester 3 (Months 13–18)",one:"Months 7–9",courses:["bim"],tasks:["Revit model of a real building","Site or planning internship"],milestone:"A coordinated Revit model and a project schedule."},
   {name:"Placement readiness",two:"Semester 4 (Months 19–24)",one:"Months 10–12",courses:["placement"],parts:{placement:[[1,1],[3,5]]},tasks:["Portfolio of drawings and designs","Core interview questions for Civil","Mock interviews"],milestone:"Ready for site, design and BIM interviews."}
  ],
  interview:["Aptitude and technical MCQs","Technical: RCC, soil mechanics, surveying, estimation","Software test (AutoCAD, STAAD or Revit)","Site and project discussion","HR round"]}
});
PORDER.push("ece","eee","mech","civil");
// Which branches each program suits (students of any branch can still open any program).
const BR={sde:["cse","ece"],fullstack:["cse","ece"],sdet:["cse","ece","eee","mech","civil"],data:["cse","ece","eee","mech","civil"],aiml:["cse","ece"],mobile:["cse"],devops:["cse","ece"],cyber:["cse","ece"],ece:["ece","eee"],eee:["eee"],mech:["mech"],civil:["civil"]};
Object.entries(BR).forEach(([p,b])=>{if(PROGRAMS[p])PROGRAMS[p].branch=b});
// Which branches each course is for. "any" = useful for every branch (shown to everyone).
const CBR={any:["placement","python","sql","github","dsa","tools","aivideo","claude","ai","data","cloud","sap","trading","testing"],
 c:["cse","ece"],cpp:["cse","ece"],java:["cse"],frontend:["cse"],fullstack:["cse"],android:["cse"],ios:["cse"],devops:["cse"],cyber:["cse","ece"],
 embedded:["ece","eee"],pcb:["ece","eee"],vlsi:["ece"],powerev:["eee"],plc:["eee","mech"],cad:["mech"],cae:["mech","civil"],mfg:["mech"],
 civilcad:["civil"],structural:["civil"],bim:["civil"]};
CBR.any.forEach(k=>{if(SYL[k])SYL[k].branch=["any"]});
Object.entries(CBR).forEach(([k,b])=>{if(k!=="any"&&SYL[k])SYL[k].branch=b});

// Core engineering interview questions (Practice hub section "core").
PRACTICE.sections.splice(5,0,{id:"core",title:"Core engineering interview questions",sub:"For ECE, EEE, Mechanical and Civil interviews. Answer out loud with a diagram or formula, then check in your course or NPTEL notes.",
 groups:[
  ["Electronics (ECE)",["Explain how a MOSFET works as a switch.","What is the difference between a latch and a flip-flop?","Explain setup and hold time.","Compare UART, I2C and SPI.","What does volatile mean in embedded C?","What happens when an interrupt arrives?","Design a mod-6 counter.","Why do we need decoupling capacitors?"]],
  ["Electrical (EEE)",["Why is a transformer rated in kVA, not kW?","Explain the starting methods of an induction motor.","What is power factor and how is it improved?","Compare a buck and a boost converter.","How does a circuit breaker differ from a fuse?","Explain how a PLC scan cycle works.","What does a battery management system do?","Why is power transmitted at high voltage?"]],
  ["Mechanical",["Explain the stress–strain curve of mild steel.","What is the difference between first-angle and third-angle projection?","Explain clearance, transition and interference fits.","Compare the Otto and Diesel cycles.","What is a datum in GD&T?","Why do we check mesh convergence in FEA?","Compare casting and forging.","What are the 5S steps?"]],
  ["Civil",["Explain the limit state method.","Why are steel bars placed at the bottom of a simply supported beam?","What is the difference between one-way and two-way slabs?","Explain slump test and what it tells you.","How do you calculate the quantity of steel in a slab?","What is the critical path in a schedule?","Explain bearing capacity of soil.","What is BIM, and how does it help on site?"]]],
 inside:[["Embedded course","#embedded"],["Power and EV course","#powerev"],["Mechanical CAD course","#cad"],["Structural course","#structural"]],
 outside:[["NPTEL (free lectures for every branch)","https://nptel.ac.in","Revise any core subject with IIT lectures."]]});

Object.assign(TASKLINKS,{
 "Digital electronics and circuits revision":[["Embedded course: electronics you need","#embedded:0"],["VLSI course: digital design","#vlsi:0"]],
 "Solve 50 easy C problems":[["C course","#c"],["HackerRank C","https://www.hackerrank.com/domains/c"]],
 "Put every program on GitHub":[["Git and GitHub course","#github"]],
 "Build 3 projects in Wokwi, then on a real board":[["Embedded projects","#embedded:projects"],["Wokwi simulator","https://wokwi.com"]],
 "Design and order your first PCB":[["PCB course","#pcb"],["PCB projects","#pcb:projects"]],
 "Embedded C interview questions":[["Core interview questions","#practice:core"],["Embedded course: career","#embedded:5"]],
 "Finish the HDLBits problem set":[["VLSI course: Verilog","#vlsi:1"],["HDLBits","https://hdlbits.01xz.net"]],
 "Verify a small design with SystemVerilog":[["VLSI course: verification","#vlsi:2"],["EDA Playground","https://edaplayground.com"]],
 "Internship at an electronics or chip company":[["Placement course: resume and LinkedIn","#placement:2"],["AICTE Internship portal","https://internship.aicte-india.org"]],
 "Core interview questions for ECE":[["ECE interview questions","#practice:core"],["NPTEL","https://nptel.ac.in"]],
 "50 easy coding problems (for IT company tests)":[["Placement course: company tests","#placement:3"],["C course: interview programs","#c:questions"]],
 "Electrical machines revision":[["Power course: machines","#powerev:1:0"],["NPTEL","https://nptel.ac.in"]],
 "MATLAB and Simulink Onramp certificates":[["Power course: MATLAB and Simulink","#powerev:0"],["MATLAB Academy (free Onramps)","https://matlabacademy.mathworks.com"]],
 "Ladder logic practice in OpenPLC":[["PLC course: programming","#plc:1"],["OpenPLC","https://autonomylogic.com/docs"]],
 "Industrial visit or plant internship":[["AICTE Internship portal","https://internship.aicte-india.org"],["Internshala","https://internshala.com"]],
 "EV or solar project":[["Power and EV projects","#powerev:projects"]],
 "NPTEL EV or power electronics certificate":[["Power and EV certificates","#powerev:certs"],["NPTEL","https://nptel.ac.in"]],
 "Core interview questions for EEE":[["EEE interview questions","#practice:core"],["NPTEL","https://nptel.ac.in"]],
 "Electrical safety and standards":[["Power course: career","#powerev:4"]],
 "Engineering drawing practice":[["CAD course: engineering drawing","#cad:0"]],
 "Model 20 real objects in CAD":[["CAD course: part modelling","#cad:1"],["Autodesk Learning (free)","https://www.autodesk.com/learn"]],
 "Check every FEA result by hand":[["CAE course: checking results","#cae:1"]],
 "Ansys Innovation Courses badges":[["CAE certificates","#cae:certs"],["Ansys free courses","https://www.ansys.com/academic/learning-resources"]],
 "Shop-floor internship":[["AICTE Internship portal","https://internship.aicte-india.org"],["Internshala","https://internshala.com"]],
 "Python for engineering calculations":[["Python course","#python"]],
 "Design portfolio":[["CAD course: portfolio","#cad:4"],["Put work on GitHub","#cad:projects"]],
 "Core interview questions for Mechanical":[["Mechanical interview questions","#practice:core"],["NPTEL","https://nptel.ac.in"]],
 "Draw a full house drawing set":[["Civil CAD projects","#civilcad:projects"],["Civil CAD course: AutoCAD","#civilcad:1"]],
 "Visit a construction site every month":[["Civil CAD course: site engineering","#civilcad:3"]],
 "Hand-design before using software":[["Structural course: RCC design","#structural:1"]],
 "NPTEL RCC design certificate":[["Structural certificates","#structural:certs"],["NPTEL","https://nptel.ac.in"]],
 "Revit model of a real building":[["BIM course: Revit","#bim:1"],["BIM projects","#bim:projects"]],
 "Site or planning internship":[["AICTE Internship portal","https://internship.aicte-india.org"],["Internshala","https://internshala.com"]],
 "Portfolio of drawings and designs":[["Put work on GitHub","#civilcad:projects"],["Placement course: resume","#placement:2"]],
 "Core interview questions for Civil":[["Civil interview questions","#practice:core"],["NPTEL","https://nptel.ac.in"]]
});

Object.assign(COURSE_PRACTICE,{
 cloud:[["AWS Skill Builder","https://skillbuilder.aws","Free courses and some free labs."],["Google Cloud Skills Boost","https://www.cloudskillsboost.google","Hands-on labs on Google Cloud."],["Microsoft Learn sandbox modules","https://learn.microsoft.com/en-us/training/azure/","Free Azure modules, some with a free sandbox."]],
 embedded:[["Wokwi","https://wokwi.com","Simulate Arduino, ESP32 and STM32 in the browser."]],
 pcb:[["KiCad documentation","https://docs.kicad.org","Official guides for every tool."]],
 vlsi:[["HDLBits","https://hdlbits.01xz.net","Verilog problems checked automatically."],["EDA Playground","https://edaplayground.com","Free online Verilog and SystemVerilog simulators."]],
 powerev:[["MATLAB Academy","https://matlabacademy.mathworks.com","Free MATLAB, Simulink and Simscape Onramps."]],
 plc:[["OpenPLC","https://autonomylogic.com/docs","Free PLC editor and runtime."]],
 cad:[["Autodesk Learning","https://www.autodesk.com/learn","Free Fusion, Inventor and AutoCAD courses."],["FreeCAD","https://wiki.freecad.org/Getting_started","Free CAD software and tutorials."]],
 cae:[["Ansys Innovation Courses","https://www.ansys.com/academic/learning-resources","Free simulation courses with badges."]],
 mfg:[["Autodesk Learning","https://www.autodesk.com/learn","Free Fusion CAM courses."]],
 civilcad:[["Autodesk Learning","https://www.autodesk.com/learn","Free AutoCAD and construction courses."]],
 structural:[["Bentley Education","https://education.bentley.com","Free student software and learning."]],
 bim:[["Autodesk Learning","https://www.autodesk.com/learn","Free Revit and BIM courses."],["ProjectLibre","https://www.projectlibre.com","Free project scheduling software."]]
});
})();
