// Cloud Computing + core-branch courses (ECE, EEE, Mechanical, Civil), added 22 Nov 2026.
// Free sources first: NPTEL (Govt. of India), vendor learning sites with free student software, open-source tools.
(()=>{
const NP="https://nptel.ac.in",AD="https://www.autodesk.com/learn",ADE="https://www.autodesk.com/education/home",MO="https://matlabacademy.mathworks.com",AN="https://www.ansys.com/academic/learning-resources";
const G=r=>"https://github.com/"+r,R=(r,d)=>[r,G(r),d];
Object.assign(SYL,{
cloud:{name:"Cloud Computing (AWS, Azure, Google Cloud)",short:"Cloud",color:"var(--l-cloud)",days:60,perDay:"1.5 hr",group:"Careers",
 forWho:"Students and working people from any branch who want cloud jobs. Basic computer skills are enough; a little Linux helps.",
 outcome:["Explain cloud models, regions, pricing and the shared-responsibility model","Build on AWS: users and permissions, servers, storage, networks and databases","Do the same core tasks on Azure and Google Cloud","Pass an entry cloud certificate and design a small, safe, low-cost setup"],
 cert:"AWS Certified Cloud Practitioner, Microsoft Azure Fundamentals (AZ-900) or Google Cloud Digital Leader",
 note:"<strong>Avoid surprise bills.</strong> Use the free tier, set a billing alarm on day one, and delete what you create after each practice session. Never put your access keys in code or on GitHub.",
 see:"https://roadmap.sh/aws",
 levels:[
 {name:"Cloud basics",days:"Days 1–8",goal:"Know what the cloud is and how it is billed.",modules:[
  {name:"Cloud concepts",course:["AWS Skill Builder: Cloud Practitioner Essentials (free)","https://skillbuilder.aws"],topics:[
   "What cloud computing is|Renting computing power instead of buying servers.",
   "IaaS, PaaS and SaaS|Who manages what in each model.",
   "Regions and availability zones|Why the cloud is spread across places.",
   "Pricing and the free tier|Pay as you go, and how to stay free while learning.",
   "Shared responsibility|What the cloud secures and what you must secure."]}]},
 {name:"AWS core services",days:"Days 9–30",goal:"Build real things on the biggest cloud.",modules:[
  {name:"AWS hands-on",course:["AWS Skill Builder (free courses and labs)","https://skillbuilder.aws"],topics:[
   "IAM: users, roles and policies|Who can do what.",
   "EC2 virtual servers|Launching and connecting to a server.",
   "S3 storage|Buckets, objects and static websites.",
   "VPC networking|Subnets, route tables and security groups.",
   "RDS and DynamoDB|Managed SQL and NoSQL databases.",
   "Lambda and serverless|Running code without a server.",
   "Load balancing and auto scaling|Handling more users automatically.",
   "CloudWatch monitoring|Metrics, logs and alarms."]}]},
 {name:"Azure and Google Cloud",days:"Days 31–42",goal:"Do the same tasks on the other two clouds.",modules:[
  {name:"Microsoft Azure",course:["Microsoft Learn: Azure Fundamentals (free)","https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"],topics:[
   "Azure portal and resource groups|How Azure organises everything.",
   "Azure virtual machines and storage|Servers and files on Azure.",
   "Microsoft Entra ID|Users and sign-in on Azure."]},
  {name:"Google Cloud",course:["Google Cloud Skills Boost (free labs)","https://www.cloudskillsboost.google"],topics:[
   "Google Cloud console and projects|How Google Cloud is organised.",
   "Compute Engine and Cloud Storage|Servers and files on Google Cloud.",
   "Cloud Run|Running a container without managing servers."]}]},
 {name:"Architecture, security and cost",days:"Days 43–52",goal:"Design setups that are safe, reliable and cheap.",modules:[
  {name:"Well-architected cloud",course:["AWS Well-Architected Framework","https://aws.amazon.com/architecture/well-architected/"],topics:[
   "High availability and backups|Surviving a failure.",
   "Cloud security basics|Least privilege, encryption and MFA.",
   "Cost control|Budgets, right-sizing and turning things off.",
   "Infrastructure as code intro|Creating cloud setups from files (CloudFormation or Terraform)."]}]},
 {name:"Certification and career",days:"Days 53–60",goal:"Prove your skills and apply.",modules:[
  {name:"Get certified",course:["AWS Certification","https://aws.amazon.com/certification/"],topics:[
   "Choosing your first certificate|AWS, Azure or Google: which fits you.",
   "Practice exams and revision|Official sample questions only.",
   "Cloud portfolio project|A small app deployed with a diagram and cost note.",
   "Cloud job roles and interviews|Cloud support, cloud engineer, DevOps."]}]}
 ],
 repos:[R("acantril/learn-cantrill-io-labs","Free hands-on AWS labs with step-by-step guides."),R("aws-samples/serverless-patterns","Hundreds of small serverless examples you can deploy."),R("GoogleCloudPlatform/microservices-demo","A real multi-service app to run on Google Cloud.")]
},

embedded:{name:"Embedded Systems and IoT",short:"Embedded",color:"var(--l-ece)",days:90,perDay:"2 hr",group:"Electronics (ECE)",
 forWho:"ECE, EEE and instrumentation students, and anyone who likes making hardware work. Finish the C Programming course first.",
 outcome:["Program microcontrollers in embedded C: GPIO, timers, interrupts","Talk to sensors with UART, I2C and SPI","Write multitasking firmware with an RTOS","Build and present connected IoT devices"],
 cert:"NPTEL Embedded Systems courses (free to learn, exam fee for certificate)",
 note:"<strong>Start free.</strong> The Wokwi simulator runs Arduino, ESP32 and STM32 in the browser, so you can learn before buying any board. A starter kit (board + sensors) costs about ₹1,000–2,000 when you are ready.",
 see:"https://roadmap.sh/cpp",
 levels:[
 {name:"Electronics you need",days:"Days 1–12",goal:"Read circuits and datasheets with confidence.",modules:[
  {name:"Basic and digital electronics",course:["NPTEL (search: Digital Electronics)",NP],topics:[
   "Voltage, current and Ohm's law|The basics every circuit uses.",
   "Resistors, capacitors, diodes and transistors|What each part does.",
   "Logic gates and number systems|Binary, hex and Boolean logic.",
   "Flip-flops, counters and registers|How digital circuits remember.",
   "Reading a datasheet|Pins, limits and timing diagrams."]}]},
 {name:"Microcontroller basics",days:"Days 13–30",goal:"Make a microcontroller do what you want.",modules:[
  {name:"Embedded C and GPIO",course:["Arduino documentation","https://docs.arduino.cc"],topics:[
   "Microcontroller architecture|CPU, memory, peripherals and clock.",
   "Embedded C essentials|Bit operations, volatile and registers.",
   "GPIO: LEDs and buttons|Digital input and output.",
   "Timers and PWM|Delays, blinking and motor speed.",
   "Interrupts|Reacting to events immediately.",
   "ADC: reading analog sensors|Turning voltage into numbers."]}]},
 {name:"Communication protocols",days:"Days 31–45",goal:"Connect sensors, displays and other chips.",modules:[
  {name:"Serial buses",course:["Wokwi simulator (free)","https://wokwi.com"],topics:[
   "UART serial|Talking to a PC and GPS modules.",
   "I2C|Many sensors on two wires.",
   "SPI|Fast displays and memory cards.",
   "CAN bus basics|How car electronics talk.",
   "Debugging with a logic analyser|Seeing signals on the wires."]}]},
 {name:"ARM, RTOS and drivers",days:"Days 46–65",goal:"Write professional firmware.",modules:[
  {name:"ARM Cortex-M and RTOS",course:["FreeRTOS documentation","https://www.freertos.org"],topics:[
   "ARM Cortex-M and STM32 basics|The chips used in industry.",
   "Writing a device driver|Clean code for one peripheral.",
   "RTOS tasks and scheduling|Many jobs on one chip.",
   "Queues, semaphores and mutexes|Tasks working together safely.",
   "Low-power design|Making batteries last.",
   "Bootloaders and firmware updates|Updating devices in the field."]}]},
 {name:"IoT",days:"Days 66–80",goal:"Put devices on the internet safely.",modules:[
  {name:"Connected devices",course:["ESP-IDF get started (Espressif)","https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/"],topics:[
   "ESP32 and Wi-Fi|A cheap board with built-in Wi-Fi.",
   "MQTT and HTTP|Sending data to the cloud.",
   "IoT dashboards|Seeing your sensor data live.",
   "IoT security basics|Passwords, updates and encryption."]}]},
 {name:"Projects and career",days:"Days 81–90",goal:"Show what you built and get hired.",modules:[
  {name:"Embedded career",course:["NPTEL (search: Embedded Systems)",NP],topics:[
   "Version control for firmware|Git for embedded projects.",
   "Testing embedded code|Unit tests and hardware-in-the-loop.",
   "Embedded interview questions|C, pointers, interrupts and protocols.",
   "Embedded job roles|Firmware, IoT, automotive and test roles."]}]}
 ],
 repos:[R("wokwi/wokwi-features","Wokwi simulator: try projects without hardware."),R("FreeRTOS/FreeRTOS","The real-time OS used in millions of devices."),R("espressif/esp-idf","Official ESP32 framework with many examples.")]
},

pcb:{name:"PCB Design (KiCad)",short:"PCB Design",color:"var(--l-ece)",days:40,perDay:"1.5 hr",group:"Electronics (ECE)",
 forWho:"ECE and EEE students, makers and embedded learners who want to design their own circuit boards.",
 outcome:["Draw clean schematics and choose parts","Lay out 2-layer and 4-layer boards that work first time","Follow design rules for power, signals and manufacturing","Order boards and assemble them"],
 cert:"IPC CID (paid, industry); your own manufactured boards are the strongest proof",
 note:"<strong>KiCad is free and professional.</strong> Many Indian and Chinese PCB makers produce 5 small boards for a few hundred rupees, so you can build a real portfolio cheaply.",
 see:"https://docs.kicad.org",
 levels:[
 {name:"Schematics",days:"Days 1–10",goal:"Turn a circuit idea into a correct drawing.",modules:[
  {name:"Schematic capture",course:["KiCad: Getting started","https://docs.kicad.org"],topics:[
   "How a PCB is made|Layers, copper, solder mask and silkscreen.",
   "KiCad tour and project setup|The schematic and board editors.",
   "Symbols, footprints and libraries|Linking a drawing to a real part.",
   "Drawing a clean schematic|Nets, labels and sheets.",
   "Electrical rules check|Catching mistakes before layout."]}]},
 {name:"Layout",days:"Days 11–24",goal:"Place and route a working board.",modules:[
  {name:"Board layout",course:["KiCad: Getting started","https://docs.kicad.org"],topics:[
   "Placing components|Short paths and good grouping.",
   "Routing tracks and track width|Current, heat and spacing.",
   "Ground planes and power|Clean power to every chip.",
   "Vias and multi-layer boards|Going between layers.",
   "Design rule check|Making sure the factory can build it."]}]},
 {name:"Good design practice",days:"Days 25–34",goal:"Boards that work and are easy to make.",modules:[
  {name:"Design for performance and manufacture",course:["NPTEL (search: PCB design)",NP],topics:[
   "Decoupling capacitors|Stopping noise at each chip.",
   "Signal integrity basics|Fast signals and impedance.",
   "EMI and EMC basics|Passing noise and safety tests.",
   "Design for manufacture and assembly|Making the board easy to build."]}]},
 {name:"Make it real",days:"Days 35–40",goal:"Order, assemble and test your board.",modules:[
  {name:"Fabrication and testing",course:["KiCad: Getting started","https://docs.kicad.org"],topics:[
   "Gerber files and bill of materials|What the factory needs.",
   "Soldering and assembly|Hand-soldering SMD and through-hole parts.",
   "Bring-up and testing|Power on safely and debug.",
   "Building a PCB portfolio|Photos, files and lessons learnt."]}]}
 ],
 repos:[R("ruiqimao/keyboard-pcb-guide","Step-by-step KiCad guide to designing a keyboard PCB."),R("kitspace/awesome-electronics","A big list of free electronics learning resources."),R("KiCad/kicad-source-mirror","KiCad itself: open source.")]
},

vlsi:{name:"VLSI Design (Verilog to Chip)",short:"VLSI",color:"var(--l-ece)",days:90,perDay:"1.5 hr",group:"Electronics (ECE)",
 forWho:"ECE students aiming for chip design and verification jobs. Good digital electronics basics help.",
 outcome:["Design digital circuits in Verilog and simulate them","Write testbenches and use SystemVerilog for verification","Understand synthesis, timing and the physical design flow","Prepare for RTL design and verification interviews"],
 cert:"NPTEL VLSI courses (free to learn); India's Chips to Startup (C2S) programme for selected colleges",
 note:"<strong>Free tools are enough to start.</strong> HDLBits and EDA Playground run in the browser; Icarus Verilog, Yosys and OpenLane are free. Paid institute courses are optional.",
 see:"https://hdlbits.01xz.net",
 levels:[
 {name:"Digital design",days:"Days 1–15",goal:"Think in gates, flip-flops and state machines.",modules:[
  {name:"Digital logic",course:["NPTEL (search: Digital Circuits)",NP],topics:[
   "Combinational logic|Adders, multiplexers and decoders.",
   "Sequential logic|Latches, flip-flops and counters.",
   "Finite state machines|Mealy and Moore machines.",
   "Timing basics|Setup time, hold time and clock skew."]}]},
 {name:"Verilog RTL",days:"Days 16–40",goal:"Describe hardware in code.",modules:[
  {name:"Verilog",course:["HDLBits (free practice)","https://hdlbits.01xz.net"],topics:[
   "Verilog basics and data types|Modules, ports, wires and regs.",
   "Combinational design in Verilog|assign and always blocks.",
   "Sequential design in Verilog|Clocks, resets and registers.",
   "FSMs in Verilog|Coding state machines cleanly.",
   "Testbenches and simulation|Checking your design with EDA Playground.",
   "Writing synthesizable RTL|Code that becomes real hardware."]}]},
 {name:"Verification",days:"Days 41–62",goal:"Prove a design works before it is made.",modules:[
  {name:"SystemVerilog and UVM",course:["EDA Playground (free simulators)","https://edaplayground.com"],topics:[
   "SystemVerilog for verification|Classes, randomisation and interfaces.",
   "Assertions (SVA)|Rules that check behaviour automatically.",
   "Functional coverage|Knowing what you have tested.",
   "UVM basics|The industry-standard testbench method."]}]},
 {name:"From RTL to chip",days:"Days 63–80",goal:"Understand how code becomes silicon.",modules:[
  {name:"Synthesis and physical design",course:["NPTEL (search: VLSI Physical Design)",NP],topics:[
   "Logic synthesis with Yosys|Turning RTL into gates.",
   "Static timing analysis|Will the chip meet its speed?",
   "Physical design flow|Floorplan, placement, clock tree and routing.",
   "Open-source flow with OpenLane|From RTL to a chip layout, free.",
   "FPGA basics|Trying designs on real programmable chips."]}]},
 {name:"Career",days:"Days 81–90",goal:"Get into design or verification roles.",modules:[
  {name:"VLSI jobs",course:["NPTEL (search: VLSI Design)",NP],topics:[
   "VLSI job roles|RTL design, verification, physical design, DFT.",
   "Building a VLSI GitHub portfolio|Designs, testbenches and reports.",
   "VLSI interview questions|Digital, Verilog and timing.",
   "India's semiconductor industry|Companies, GCCs and the India Semiconductor Mission."]}]}
 ],
 repos:[R("ultraembedded/riscv","A small RISC-V CPU in Verilog to study."),R("steveicarus/iverilog","Icarus Verilog: free simulator."),R("The-OpenROAD-Project/OpenLane","Free RTL-to-layout chip flow.")]
},

powerev:{name:"Power Systems, Power Electronics and EV",short:"Power & EV",color:"var(--l-eee)",days:85,perDay:"1.5 hr",group:"Electrical (EEE)",
 forWho:"EEE students and engineers moving into power, renewable energy or electric vehicles.",
 outcome:["Model circuits and systems in MATLAB and Simulink","Explain power generation, transmission and protection","Design basic converters and motor drives","Understand EV batteries, motors and charging"],
 cert:"MathWorks free Onramp certificates; NPTEL Power Electronics / Electric Vehicles courses",
 note:"<strong>Safety first.</strong> Mains voltage and large batteries can kill. Practise in simulation (Simulink) and with low-voltage kits; work on high voltage only under supervision.",
 see:"https://matlabacademy.mathworks.com",
 levels:[
 {name:"Tools: MATLAB and Simulink",days:"Days 1–12",goal:"Simulate before you build.",modules:[
  {name:"MATLAB and Simulink",course:["MATLAB and Simulink Onramp (free)",MO],topics:[
   "MATLAB basics|Variables, vectors, plots and scripts.",
   "Simulink basics|Building block-diagram models.",
   "Simscape Electrical intro|Simulating real circuits and machines."]}]},
 {name:"Electrical machines and power systems",days:"Days 13–35",goal:"Understand how electricity reaches every home.",modules:[
  {name:"Machines",course:["NPTEL (search: Electrical Machines)",NP],topics:[
   "Transformers|How voltage is changed.",
   "DC machines|Motors and generators on DC.",
   "Induction motors|The workhorse of industry.",
   "Synchronous machines|Generators in power plants."]},
  {name:"Power systems",course:["NPTEL (search: Power System Analysis)",NP],topics:[
   "Generation, transmission and distribution|The grid end to end.",
   "Load flow basics|How power divides across the grid.",
   "Faults and protection|Relays, breakers and fuses.",
   "Renewable energy and solar PV|Solar plants and grid connection."]}]},
 {name:"Power electronics",days:"Days 36–55",goal:"Control power with switches.",modules:[
  {name:"Converters and drives",course:["NPTEL (search: Power Electronics)",NP],topics:[
   "Power semiconductor devices|Diodes, MOSFETs, IGBTs.",
   "Rectifiers|AC to DC.",
   "DC-DC converters|Buck and boost.",
   "Inverters and PWM|DC to AC.",
   "Motor drives|Controlling motor speed and torque."]}]},
 {name:"Electric vehicles",days:"Days 56–75",goal:"Know every part of an EV.",modules:[
  {name:"EV systems",course:["NPTEL (search: Electric Vehicles)",NP],topics:[
   "EV architecture|Battery, motor, inverter and controller.",
   "Batteries and BMS|Cells, packs and battery management.",
   "EV motors|BLDC, PMSM and induction motors.",
   "Charging and standards|AC, DC fast charging and connectors.",
   "Modelling an EV in Simulink|Range and energy use."]}]},
 {name:"Career",days:"Days 76–85",goal:"Get into power and EV roles.",modules:[
  {name:"Power and EV jobs",course:["MATLAB Onramp courses (free)",MO],topics:[
   "Electrical safety and standards|IS, IEC and safe work practice.",
   "Power and EV job roles|Utilities, EV makers, solar, testing.",
   "Interview preparation for EEE|Machines, power systems and power electronics questions."]}]}
 ],
 repos:[R("vedderb/bldc","VESC: real open-source motor controller firmware."),R("OpenEVSE/open_evse","Open-source EV charger firmware."),R("simplefoc/Arduino-FOC","Field-oriented motor control you can try on cheap boards.")]
},

plc:{name:"PLC, SCADA and Industrial Automation",short:"PLC & SCADA",color:"var(--l-eee)",days:60,perDay:"1.5 hr",group:"Electrical (EEE)",
 forWho:"EEE, instrumentation and mechanical students who want automation jobs in factories and plants.",
 outcome:["Write PLC programs in ladder logic and structured text","Wire and test sensors, actuators and motor starters","Build SCADA/HMI screens and connect devices","Commission and troubleshoot an automated machine"],
 cert:"ISA Certified Control Systems Technician (CCST, paid); NPTEL Industrial Automation",
 note:"<strong>Learn free, then practise on real panels.</strong> OpenPLC and CODESYS are free to install. Never work on live industrial panels without permission and supervision.",
 see:"https://autonomylogic.com/docs",
 levels:[
 {name:"Automation basics",days:"Days 1–10",goal:"Understand a factory control system.",modules:[
  {name:"Industrial basics",course:["NPTEL (search: Industrial Automation)",NP],topics:[
   "What industrial automation is|Machines that run themselves.",
   "Sensors and transducers|Proximity, temperature, pressure, level.",
   "Actuators, relays and contactors|Turning signals into action.",
   "Motor starters and VFDs|Starting and controlling motors."]}]},
 {name:"PLC programming",days:"Days 11–35",goal:"Program the brain of the machine.",modules:[
  {name:"Ladder logic and more",course:["OpenPLC (free PLC software)","https://autonomylogic.com/docs"],topics:[
   "PLC hardware and scan cycle|Inputs, logic, outputs, repeat.",
   "Ladder logic basics|Contacts, coils and rungs.",
   "Timers and counters|Delays and counting parts.",
   "Function blocks and structured text|Cleaner code for bigger programs.",
   "Analog signals and PID|Controlling temperature or level.",
   "Sequencing a machine|Step-by-step automatic cycles."]}]},
 {name:"SCADA, HMI and networks",days:"Days 36–50",goal:"See and control the whole plant.",modules:[
  {name:"Supervisory control",course:["CODESYS (free development system)","https://www.codesys.com"],topics:[
   "HMI screens|Buttons, displays and alarms for operators.",
   "SCADA systems|Monitoring many machines.",
   "Industrial networks|Modbus, Profinet and EtherNet/IP.",
   "Industrial cybersecurity basics|Keeping plants safe from attacks."]}]},
 {name:"Commissioning and career",days:"Days 51–60",goal:"Start a machine for real and get hired.",modules:[
  {name:"On the shop floor",course:["NPTEL (search: Industrial Automation)",NP],topics:[
   "Reading electrical drawings|Panel and wiring diagrams.",
   "Commissioning and troubleshooting|Testing step by step.",
   "Industry 4.0 and IIoT|Data from machines to the cloud.",
   "Automation job roles and interviews|PLC programmer, controls engineer, service engineer."]}]}
 ],
 repos:[R("thiagoralves/OpenPLC_v3","OpenPLC runtime: run PLC programs on a PC or Raspberry Pi.")]
},

cad:{name:"Mechanical CAD and GD&T",short:"Mech CAD",color:"var(--l-mech)",days:60,perDay:"1.5 hr",group:"Mechanical",
 forWho:"Mechanical, production and automobile students, and diploma holders aiming for design jobs.",
 outcome:["Read and make engineering drawings to standard","Model parts and assemblies in 3D CAD","Apply GD&T and tolerances correctly","Prepare a design portfolio for interviews"],
 cert:"SolidWorks CSWA or Autodesk Certified Professional (paid; student discounts)",
 note:"<strong>Free software for students.</strong> Autodesk Fusion and Inventor are free for students; FreeCAD and Onshape (education plan) are free too. Learn the ideas: they carry to SolidWorks, CATIA and NX at work.",
 see:AD,
 levels:[
 {name:"Engineering drawing",days:"Days 1–12",goal:"Read any drawing on the shop floor.",modules:[
  {name:"Drawing basics",course:["NPTEL (search: Engineering Drawing)",NP],topics:[
   "Lines, scales and title blocks|The language of drawings.",
   "Orthographic projection|Front, top and side views.",
   "Sections and auxiliary views|Showing hidden detail.",
   "Dimensioning rules|Clear, complete sizes.",
   "Fits and tolerances|Clearance, transition and interference fits."]}]},
 {name:"3D part modelling",days:"Days 13–30",goal:"Model any part you see.",modules:[
  {name:"Part design",course:["Autodesk Learning (free courses)",AD],topics:[
   "Sketching and constraints|Fully defined 2D sketches.",
   "Extrude, revolve and cut|The core 3D features.",
   "Fillets, shells, ribs and patterns|Finishing features.",
   "Sheet metal design|Bends, flanges and flat patterns.",
   "Surface modelling basics|Smooth, curved shapes."]}]},
 {name:"Assemblies and drawings",days:"Days 31–45",goal:"Put parts together and document them.",modules:[
  {name:"Assemblies",course:["FreeCAD: Getting started","https://wiki.freecad.org/Getting_started"],topics:[
   "Assembly constraints and joints|How parts fit and move.",
   "Interference and motion checks|Catching clashes early.",
   "Exploded views and BOM|Showing how it is built.",
   "Production drawings from 3D|Drawings the factory can use."]}]},
 {name:"GD&T",days:"Days 46–55",goal:"Control shape and position, not just size.",modules:[
  {name:"Geometric tolerancing",course:["GD&T Basics (free articles)","https://www.gdandtbasics.com"],topics:[
   "Why GD&T|What plain tolerances cannot control.",
   "Datums and the feature control frame|Reading the symbols.",
   "Form and orientation|Flatness, straightness, perpendicularity.",
   "Position and profile|The most used controls in industry."]}]},
 {name:"Portfolio and career",days:"Days 56–60",goal:"Show your work and get hired.",modules:[
  {name:"Design jobs",course:["Autodesk Learning (free courses)",AD],topics:[
   "Design portfolio|Renderings, drawings and a short video.",
   "Mechanical design interview questions|Drawing, materials and CAD questions."]}]}
 ],
 repos:[R("FreeCAD/FreeCAD","FreeCAD: free professional 3D CAD."),R("prusa3d/Original-Prusa-i3","Real open-source machine design files to study."),R("CadQuery/cadquery","Make CAD models with Python code.")]
},

cae:{name:"CAE: FEA, CFD and Design Optimisation",short:"CAE",color:"var(--l-mech)",days:70,perDay:"1.5 hr",group:"Mechanical",
 forWho:"Mechanical, aerospace and civil students who want analysis (simulation) roles. Strength of materials and fluid mechanics basics help.",
 outcome:["Set up and solve stress, heat and vibration problems with FEA","Run basic CFD flow and heat-transfer simulations","Check results with hand calculations","Optimise designs for weight, strength and cost"],
 cert:"Ansys Innovation Courses badges (free); NPTEL Finite Element Method",
 note:"<strong>Never trust a colourful plot alone.</strong> Always check simulation results against a hand calculation or a test. Ansys Student and SimScale's community plan are free.",
 see:AN,
 levels:[
 {name:"Engineering mechanics review",days:"Days 1–12",goal:"Know the physics the software solves.",modules:[
  {name:"Mechanics you need",course:["NPTEL (search: Strength of Materials)",NP],topics:[
   "Stress, strain and material properties|Young's modulus, yield and safety factor.",
   "Beams, shafts and columns|Bending, torsion and buckling.",
   "Failure theories|When parts break or yield.",
   "Heat transfer and fluid basics|Conduction, convection and flow."]}]},
 {name:"Finite element analysis",days:"Days 13–40",goal:"Simulate strength, heat and vibration.",modules:[
  {name:"FEA practice",course:["Ansys Innovation Courses (free)",AN],topics:[
   "How FEA works|Elements, nodes and the stiffness matrix.",
   "Meshing and mesh quality|Getting accurate results.",
   "Loads, supports and contacts|Modelling the real world.",
   "Static structural analysis|Stress and deformation.",
   "Modal and vibration analysis|Natural frequencies.",
   "Thermal analysis|Temperature and heat flow.",
   "Checking FEA results|Convergence and hand calculations."]}]},
 {name:"Computational fluid dynamics",days:"Days 41–58",goal:"Simulate air and liquid flow.",modules:[
  {name:"CFD practice",course:["Ansys Innovation Courses (free)",AN],topics:[
   "How CFD works|Governing equations in plain words.",
   "Geometry and mesh for CFD|Fluid domains and boundary layers.",
   "Turbulence models|Choosing the right one.",
   "Internal and external flow|Pipes, ducts and wings.",
   "Heat transfer with flow|Cooling electronics and engines."]}]},
 {name:"Design optimisation",days:"Days 59–70",goal:"Make designs lighter, stronger and cheaper.",modules:[
  {name:"Optimisation and career",course:["Ansys Innovation Courses (free)",AN],topics:[
   "Parametric studies|Changing one size at a time.",
   "Topology optimisation|Letting software find the best shape.",
   "Design of experiments|Testing many options smartly.",
   "CAE reports and portfolio|Presenting results clearly.",
   "CAE interview questions|FEA, CFD and mechanics questions."]}]}
 ],
 repos:[R("sfepy/sfepy","Simple finite elements in Python: see FEA from the inside."),R("OpenFOAM/OpenFOAM-dev","OpenFOAM: free industrial CFD."),R("FEniCS/dolfinx","Research-grade finite element library.")]
},

mfg:{name:"Manufacturing: CNC, CAM, 3D Printing and Quality",short:"Manufacturing",color:"var(--l-mech)",days:50,perDay:"1.5 hr",group:"Mechanical",
 forWho:"Mechanical, production and industrial engineering students aiming for plant, production or quality roles.",
 outcome:["Choose the right manufacturing process for a part","Create CNC toolpaths with CAM and read G-code","Design and print parts with 3D printing","Use lean and quality tools on a real process"],
 cert:"Six Sigma Yellow or Green Belt (ASQ or recognised body); NPTEL Manufacturing Processes",
 note:"<strong>Safety on the shop floor.</strong> Wear eye protection, never reach into a running machine, and learn machines only under a trained person.",
 see:AD,
 levels:[
 {name:"Manufacturing processes",days:"Days 1–12",goal:"Know how things are made.",modules:[
  {name:"Processes",course:["NPTEL (search: Manufacturing Processes)",NP],topics:[
   "Casting, forging and forming|Shaping metal in bulk.",
   "Machining: turning, milling, drilling|Cutting metal precisely.",
   "Welding and joining|Fixing parts together.",
   "Plastics: moulding and extrusion|How plastic parts are made."]}]},
 {name:"CNC and CAM",days:"Days 13–28",goal:"Program machines from a 3D model.",modules:[
  {name:"CNC programming",course:["Autodesk Learning: Fusion CAM (free)",AD],topics:[
   "How a CNC machine works|Axes, spindle and tools.",
   "G-code and M-code|Reading and editing programs.",
   "CAM toolpaths|Facing, pocketing, contouring, drilling.",
   "Simulation before cutting|Catching crashes on screen."]}]},
 {name:"3D printing",days:"Days 29–38",goal:"Prototype fast and cheaply.",modules:[
  {name:"Additive manufacturing",course:["Autodesk Learning (free courses)",AD],topics:[
   "3D printing technologies|FDM, SLA and metal printing.",
   "Design for 3D printing|Overhangs, walls and supports.",
   "Slicing and print settings|Turning a model into a print."]}]},
 {name:"Quality and lean",days:"Days 39–50",goal:"Make parts right, with less waste.",modules:[
  {name:"Quality systems",course:["ASQ: Six Sigma resources","https://asq.org/quality-resources/six-sigma"],topics:[
   "Measurement and metrology|Vernier, micrometer and CMM.",
   "Statistical process control|Control charts and capability.",
   "Lean tools: 5S, kaizen and value stream|Removing waste.",
   "Six Sigma and root cause analysis|DMAIC, 5 Whys and fishbone.",
   "Manufacturing interview questions|Processes, quality and safety."]}]}
 ],
 repos:[R("LinuxCNC/linuxcnc","LinuxCNC: open-source machine control."),R("grbl/grbl","Grbl: CNC firmware that reads G-code."),R("Ultimaker/Cura","Cura: the popular 3D printing slicer.")]
},

civilcad:{name:"Civil CAD, Drawing and Estimation",short:"Civil CAD",color:"var(--l-civil)",days:50,perDay:"1.5 hr",group:"Civil",
 forWho:"Civil engineering students and diploma holders aiming for site, drafting or billing jobs.",
 outcome:["Read and draw building plans in AutoCAD","Prepare working drawings for a small building","Take off quantities and prepare an estimate","Read rate analysis and bills used on sites"],
 cert:"Autodesk Certified Professional: AutoCAD (paid; free software for students)",
 note:"<strong>Free for students.</strong> AutoCAD, Civil 3D and Revit are free on Autodesk's education plan. Check your state's Schedule of Rates (SOR) for current local rates; never copy old rates into a real estimate.",
 see:ADE,
 levels:[
 {name:"Building drawing basics",days:"Days 1–10",goal:"Read a building plan like a site engineer.",modules:[
  {name:"Plans and conventions",course:["NPTEL (search: Building Drawing)",NP],topics:[
   "Plan, elevation and section|How a building is drawn.",
   "Symbols and conventions|Doors, windows, walls and services.",
   "Building bye-laws basics|Setbacks, FAR and approvals.",
   "Reading structural drawings|Footings, columns, beams and slabs."]}]},
 {name:"AutoCAD for civil",days:"Days 11–28",goal:"Draw complete building plans.",modules:[
  {name:"AutoCAD",course:["Autodesk Learning (free courses)",AD],topics:[
   "AutoCAD interface and drawing tools|Lines, circles, polylines.",
   "Editing and layers|Clean, organised drawings.",
   "Blocks, hatches and text|Reusable parts and labels.",
   "Dimensioning and annotation|Sizes and notes to standard.",
   "Layouts, plotting and PDF|Sheets ready to print.",
   "Drawing a full house plan|Plan, elevation and section."]}]},
 {name:"Quantity surveying and estimation",days:"Days 29–44",goal:"Know how much a building will cost.",modules:[
  {name:"Estimation and costing",course:["Autodesk Learning: Construction estimating",AD],topics:[
   "Methods of estimation|Long wall–short wall and centre-line.",
   "Quantity of earthwork, concrete and masonry|Step-by-step take-off.",
   "Steel quantity and bar bending schedule|Reinforcement weights.",
   "Rate analysis|Material, labour and machinery.",
   "Preparing an estimate and BOQ|Abstract and bill of quantities."]}]},
 {name:"Site and career",days:"Days 45–50",goal:"Use these skills on site and get hired.",modules:[
  {name:"Site engineering",course:["NPTEL (search: Construction Management)",NP],topics:[
   "Measurement book and billing|How work is measured and paid.",
   "Site engineer job roles and interviews|Drawing, quantities and site questions."]}]}
 ],
 repos:[R("LibreCAD/LibreCAD","LibreCAD: free 2D CAD for practice on any computer.")]
},

structural:{name:"Structural Analysis and Design (STAAD / ETABS)",short:"Structural",color:"var(--l-civil)",days:80,perDay:"1.5 hr",group:"Civil",
 forWho:"Civil engineering students and graduates aiming for structural design jobs. Strength of materials basics help.",
 outcome:["Find loads and analyse beams, frames and trusses","Design RCC beams, columns, slabs and footings to Indian codes","Model and analyse buildings in STAAD.Pro or ETABS","Check earthquake and wind effects on buildings"],
 cert:"NPTEL Design of Reinforced Concrete Structures (free to learn); Bentley / CSI software certificates",
 note:"<strong>Codes matter.</strong> Indian designs follow IS 456 (concrete), IS 875 (loads), IS 1893 (earthquake) and IS 800 (steel). A design that affects safety must always be checked and signed by a licensed engineer.",
 see:"https://education.bentley.com",
 levels:[
 {name:"Structural analysis",days:"Days 1–20",goal:"Know how loads flow through a structure.",modules:[
  {name:"Analysis",course:["NPTEL (search: Structural Analysis)",NP],topics:[
   "Loads on buildings|Dead, live, wind and earthquake loads (IS 875).",
   "Beams: shear force and bending moment|The basis of all design.",
   "Trusses and frames|Forces in members.",
   "Indeterminate structures|Moment distribution and stiffness method.",
   "Influence lines|Moving loads on bridges."]}]},
 {name:"RCC design",days:"Days 21–45",goal:"Design concrete members safely.",modules:[
  {name:"Reinforced concrete (IS 456)",course:["NPTEL (search: Design of Reinforced Concrete Structures)",NP],topics:[
   "Limit state method|Safety and serviceability.",
   "Design of beams|Singly and doubly reinforced.",
   "Design of slabs|One-way and two-way slabs.",
   "Design of columns|Axial load and bending.",
   "Design of footings|Isolated and combined footings.",
   "Detailing reinforcement|Bars that can be built on site."]}]},
 {name:"Software: STAAD.Pro and ETABS",days:"Days 46–65",goal:"Model and design a full building.",modules:[
  {name:"Analysis software",course:["Bentley Education (free student software)","https://education.bentley.com"],topics:[
   "Modelling a building frame|Nodes, members and supports.",
   "Assigning loads and load combinations|As per IS codes.",
   "Running analysis and reading results|Forces, moments and deflection.",
   "Design and detailing from software|Checking member sizes."]}]},
 {name:"Earthquake, steel and career",days:"Days 66–80",goal:"Go beyond the basics.",modules:[
  {name:"Advanced and career",course:["NPTEL (search: Earthquake Engineering)",NP],topics:[
   "Earthquake-resistant design (IS 1893)|Seismic zones and ductile detailing.",
   "Steel structures basics (IS 800)|Beams, columns and connections.",
   "Foundations and soil basics|Bearing capacity and settlement.",
   "Structural design job roles and interviews|Analysis, codes and software questions."]}]}
 ],
 repos:[R("OpenSees/OpenSees","OpenSees: open-source earthquake engineering simulation.")]
},

bim:{name:"BIM (Revit) and Construction Project Planning",short:"BIM & Planning",color:"var(--l-civil)",days:55,perDay:"1.5 hr",group:"Civil",
 forWho:"Civil and architecture students aiming for BIM modeller, planning or project engineer roles.",
 outcome:["Model a building in Revit with BIM standards","Coordinate architecture, structure and services and find clashes","Plan and schedule a project with a Gantt chart and critical path","Track cost and progress on a construction project"],
 cert:"Autodesk Certified Professional: Revit (paid); PMI CAPM (paid) for project management",
 note:"<strong>Free for students.</strong> Revit is free on Autodesk's education plan and ProjectLibre is a free scheduling tool. Primavera P6 is widely used at work; the planning ideas are the same.",
 see:AD,
 levels:[
 {name:"BIM basics",days:"Days 1–8",goal:"Understand why the industry uses BIM.",modules:[
  {name:"What BIM is",course:["Autodesk Learning: Introduction to BIM",AD],topics:[
   "What BIM is|A 3D model full of information.",
   "BIM levels and dimensions|3D, 4D time and 5D cost.",
   "BIM standards and IFC|Sharing models between tools."]}]},
 {name:"Revit modelling",days:"Days 9–30",goal:"Model a complete building.",modules:[
  {name:"Revit",course:["Autodesk Learning (free courses)",AD],topics:[
   "Revit interface, levels and grids|Setting up a project.",
   "Walls, floors, roofs and stairs|The building shell.",
   "Doors, windows and families|Reusable components.",
   "Structural modelling in Revit|Columns, beams and foundations.",
   "Sheets, schedules and quantities|Drawings and lists from the model.",
   "Rendering and walkthroughs|Showing the design to clients."]}]},
 {name:"Coordination",days:"Days 31–40",goal:"Find problems before they reach site.",modules:[
  {name:"Model coordination",course:["Autodesk Learning (free courses)",AD],topics:[
   "MEP services basics|Pipes, ducts and cables in the model.",
   "Clash detection|Finding conflicts between trades.",
   "Common data environment|Sharing models with the team."]}]},
 {name:"Project planning",days:"Days 41–55",goal:"Plan time and cost like a project engineer.",modules:[
  {name:"Planning and control",course:["ProjectLibre (free scheduling software)","https://www.projectlibre.com"],topics:[
   "Work breakdown structure|Splitting a project into tasks.",
   "Scheduling and the critical path|What decides the finish date.",
   "Gantt charts and resources|Who does what, when.",
   "Cost control and earned value|Are we on budget?",
   "Primavera P6 basics|The tool most big projects use.",
   "Planning engineer interviews|Scheduling, BIM and site questions."]}]}
 ],
 repos:[R("IfcOpenShell/IfcOpenShell","Open-source tools to read and edit BIM (IFC) models."),R("Autodesk/revit-ifc","Autodesk's open-source IFC exporter for Revit.")]
}
});

SYL.cloud.next=["DevOps & Cloud (CI/CD, Docker, Kubernetes)","Cyber Security (cloud security)","Associate-level certificate (AWS Solutions Architect or AZ-104)"];
SYL.embedded.next=["PCB Design (KiCad)","VLSI Design","Automotive embedded (AUTOSAR, CAN) or IoT cloud"];
SYL.pcb.next=["Embedded Systems and IoT","High-speed and RF board design","Power electronics boards"];
SYL.vlsi.next=["UVM in depth","FPGA projects","Design for testability (DFT) or physical design specialisation"];
SYL.powerev.next=["PLC, SCADA and Industrial Automation","Embedded Systems (EV controllers)","Battery management and energy storage"];
SYL.plc.next=["Power Systems and EV","Python Programming (IIoT data)","Robotics and motion control"];
SYL.cad.next=["CAE: FEA, CFD and Design Optimisation","Manufacturing: CNC, CAM and Quality","Product design and DFM"];
SYL.cae.next=["Advanced CFD or nonlinear FEA","Python for engineering automation","Mechanical CAD and GD&T (if not done)"];
SYL.mfg.next=["Mechanical CAD and GD&T","Six Sigma Green Belt project","Industry 4.0 and PLC automation"];
SYL.civilcad.next=["Structural Analysis and Design","BIM (Revit) and Project Planning","Site supervision and quality"];
SYL.structural.next=["BIM (Revit) and Project Planning","Advanced earthquake and steel design","Bridge design"];
SYL.bim.next=["Structural Analysis and Design","Project management certificate (CAPM, then PMP)","Infrastructure BIM with Civil 3D"];

Object.assign(CAP,{
 cloud:[
  {lv:"Beginner",t:"Static resume website on the cloud",b:"Host your resume as a website on S3 (or Azure/Google storage) with HTTPS through a CDN, and a visitor counter.",c:["S3","CDN","DNS","IAM","Billing alarm"],s:["Create the bucket and upload","Add HTTPS with a CDN","Add a small visitor counter","Write a README with a diagram"],r:R("acantril/learn-cantrill-io-labs")},
  {lv:"Intermediate",t:"Serverless API with a database",b:"A to-do or expense API using API Gateway, Lambda and DynamoDB, with least-privilege IAM and CloudWatch alarms.",c:["Lambda","API Gateway","DynamoDB","IAM","Monitoring"],s:["Pick a pattern to start from","Build and test the API","Lock down permissions","Add alarms and a cost note"],r:R("aws-samples/serverless-patterns")},
  {lv:"Advanced",t:"Multi-tier app with infrastructure as code",b:"Deploy a microservices demo with a load balancer, private subnets, managed database and auto scaling, all created from code and torn down after.",c:["VPC","Load balancing","Auto scaling","RDS","Infrastructure as code"],s:["Draw the architecture","Write the code for it","Deploy and test failure","Destroy and note the cost"],r:R("GoogleCloudPlatform/microservices-demo")}],
 embedded:[
  {lv:"Beginner",t:"Smart room monitor",b:"Read temperature, humidity and light, show them on an OLED display and raise an alarm, first in Wokwi, then on a real board.",c:["GPIO","ADC","I2C","Timers"],s:["Build in Wokwi","Add the display","Add thresholds and buzzer","Move to real hardware"],r:R("wokwi/wokwi-features")},
  {lv:"Intermediate",t:"RTOS data logger",b:"A FreeRTOS firmware with separate tasks for sensors, SD-card logging and a serial command line, using queues and a mutex.",c:["RTOS tasks","Queues","SPI","UART"],s:["Plan tasks and priorities","Write each task","Connect with queues","Stress test"],r:R("FreeRTOS/FreeRTOS")},
  {lv:"Advanced",t:"Secure IoT device with over-the-air updates",b:"An ESP32 device that sends data by MQTT over TLS to a dashboard and updates its firmware safely over the air.",c:["Wi-Fi","MQTT","TLS","OTA updates","Low power"],s:["Start from an ESP-IDF example","Add MQTT and TLS","Add OTA updates","Measure battery life"],r:R("espressif/esp-idf")}],
 pcb:[
  {lv:"Beginner",t:"Arduino-style breakout board",b:"Design a 2-layer board for a microcontroller with USB, power regulator and headers, then order and assemble it.",c:["Schematic","Footprints","Routing","Gerbers"],s:["Draw the schematic","Lay out the board","Run DRC","Order and assemble"],r:R("kitspace/awesome-electronics")},
  {lv:"Intermediate",t:"Mechanical keyboard PCB",b:"Follow the keyboard PCB guide to design a full keyboard matrix board with a microcontroller.",c:["Matrix design","Library parts","Routing","Manufacture"],s:["Follow the guide","Customise the layout","Check rules","Get it made"],r:R("ruiqimao/keyboard-pcb-guide")},
  {lv:"Advanced",t:"4-layer mixed-signal board",b:"A 4-layer board with a microcontroller, sensors and a switching regulator, with careful grounding, decoupling and a test report.",c:["4-layer stack-up","Decoupling","Signal integrity","EMI"],s:["Plan the stack-up","Place for clean power","Route and review","Test and report"],r:R("KiCad/kicad-source-mirror")}],
 vlsi:[
  {lv:"Beginner",t:"Digital building blocks with testbenches",b:"Write and verify an ALU, counter, FIFO and UART in Verilog with self-checking testbenches.",c:["Verilog","FSMs","Testbenches","Simulation"],s:["Design each block","Write self-checking tests","Run on EDA Playground","Document waveforms"],r:R("steveicarus/iverilog")},
  {lv:"Intermediate",t:"Verify a RISC-V core",b:"Study a small RISC-V CPU, write SystemVerilog tests with assertions and coverage for its instructions.",c:["SystemVerilog","Assertions","Coverage","CPU basics"],s:["Run the core","Write tests per instruction","Add assertions","Report coverage"],r:R("ultraembedded/riscv")},
  {lv:"Advanced",t:"RTL to layout with OpenLane",b:"Take your own design through synthesis, timing and place-and-route with the free OpenLane flow and explain every report.",c:["Synthesis","Static timing","Floorplan","Routing"],s:["Prepare the design","Run the flow","Fix timing","Explain the layout"],r:R("The-OpenROAD-Project/OpenLane")}],
 powerev:[
  {lv:"Beginner",t:"Simulink model of a DC motor drive",b:"Model a DC motor with a PWM speed controller in Simulink and tune it for a step change in speed.",c:["Simulink","DC motors","PWM","Control"],s:["Build the motor model","Add the controller","Tune and test","Write a short report"],r:R("simplefoc/Arduino-FOC")},
  {lv:"Intermediate",t:"Solar PV with a boost converter",b:"Simulate a solar panel, boost converter and maximum power point tracking, and compare against hand calculations.",c:["Solar PV","DC-DC converters","MPPT","Simulation"],s:["Model the panel","Design the converter","Add MPPT","Compare and report"],r:R("OpenEVSE/open_evse")},
  {lv:"Advanced",t:"EV drivetrain and range model",b:"Model an EV's battery, inverter and motor on a drive cycle to estimate range, and study a real motor controller's firmware.",c:["EV architecture","Batteries","Motor control","Energy"],s:["Model each part","Run a drive cycle","Estimate range","Study VESC firmware"],r:R("vedderb/bldc")}],
 plc:[
  {lv:"Beginner",t:"Traffic light and motor starter in ladder logic",b:"Program a traffic light and a star-delta starter in OpenPLC with timers and interlocks.",c:["Ladder logic","Timers","Interlocks"],s:["Draw the sequence","Write the ladder","Simulate","Document"],r:R("thiagoralves/OpenPLC_v3")},
  {lv:"Intermediate",t:"Tank level control with PID and HMI",b:"Control a simulated tank's level with PID, show it on an HMI screen with alarms and trends.",c:["Analog I/O","PID","HMI","Alarms"],s:["Model the tank","Tune PID","Build the HMI","Test alarms"],r:R("thiagoralves/OpenPLC_v3")},
  {lv:"Advanced",t:"Bottle-filling line with SCADA and Modbus",b:"A full machine sequence with conveyor, sensors and filling, monitored over Modbus from a SCADA screen, with a commissioning checklist.",c:["Sequencing","Modbus","SCADA","Commissioning"],s:["Write the sequence","Connect over Modbus","Build SCADA screens","Test and hand over"],r:R("thiagoralves/OpenPLC_v3")}],
 cad:[
  {lv:"Beginner",t:"Drawing set for a machine part",b:"Model a bracket and a shaft, and make full production drawings with views, sections and tolerances.",c:["Sketching","Part features","Drawings","Tolerances"],s:["Model both parts","Add drawing views","Dimension and tolerance","Export PDF"],r:R("FreeCAD/FreeCAD")},
  {lv:"Intermediate",t:"Bench vice assembly",b:"Model every part of a bench vice, assemble it with motion, check interference and make an exploded view with BOM.",c:["Assemblies","Joints","Interference","BOM"],s:["Model parts","Assemble with joints","Check clashes","Exploded view and BOM"],r:R("prusa3d/Original-Prusa-i3")},
  {lv:"Advanced",t:"Redesign a real product with GD&T",b:"Study an open-source machine design, redesign one sub-assembly for easier manufacture and fully specify it with GD&T.",c:["Reverse engineering","DFM","GD&T","Design review"],s:["Study the design","Redesign","Apply GD&T","Present a design review"],r:R("CadQuery/cadquery")}],
 cae:[
  {lv:"Beginner",t:"Cantilever and plate checks",b:"Analyse a cantilever beam and a plate with a hole in FEA, and match the results with hand calculations.",c:["Static FEA","Meshing","Validation"],s:["Hand-calculate","Model and mesh","Compare results","Mesh convergence"],r:R("sfepy/sfepy")},
  {lv:"Intermediate",t:"Heat sink: thermal and flow study",b:"Simulate cooling of an electronics heat sink with CFD and compare two fin designs.",c:["CFD","Heat transfer","Boundary conditions"],s:["Model the fluid domain","Mesh","Run both designs","Compare and report"],r:R("OpenFOAM/OpenFOAM-dev")},
  {lv:"Advanced",t:"Lightweight bracket by topology optimisation",b:"Reduce a bracket's weight using topology optimisation, rebuild it for manufacture and prove it is still safe.",c:["Topology optimisation","Static and modal","Redesign"],s:["Set loads and goals","Optimise","Rebuild the shape","Re-verify"],r:R("FEniCS/dolfinx")}],
 mfg:[
  {lv:"Beginner",t:"Process plan for a shaft",b:"Choose processes and write a step-by-step process plan with machines, tools and inspection for a stepped shaft.",c:["Process selection","Machining","Inspection"],s:["Study the drawing","Choose processes","Write the plan","List inspection points"],r:R("LinuxCNC/linuxcnc")},
  {lv:"Intermediate",t:"CNC program from CAM",b:"Create CAM toolpaths for a milled part, export G-code, simulate it and explain every block.",c:["CAM","G-code","Simulation"],s:["Model the part","Create toolpaths","Simulate","Annotate the G-code"],r:R("grbl/grbl")},
  {lv:"Advanced",t:"Lean and Six Sigma improvement",b:"Measure a real process (a canteen line, a print job, a workshop task), find the root cause of delays and show the improvement with data.",c:["Value stream","SPC","Root cause","DMAIC"],s:["Map the process","Collect data","Find the root cause","Improve and measure again"],r:R("Ultimaker/Cura")}],
 civilcad:[
  {lv:"Beginner",t:"2BHK house drawing set",b:"Draw the plan, elevation and section of a 2BHK house in AutoCAD with dimensions and a title block.",c:["AutoCAD","Layers","Dimensions","Plotting"],s:["Draw the plan","Add elevation and section","Dimension","Plot to PDF"],r:R("LibreCAD/LibreCAD")},
  {lv:"Intermediate",t:"Estimate and BOQ for the house",b:"Take off quantities for earthwork, concrete, brickwork and steel, and prepare an abstract estimate using your state's current rates.",c:["Quantity take-off","Rate analysis","BOQ"],s:["Take off quantities","Find current rates","Prepare the abstract","Check totals"],r:R("LibreCAD/LibreCAD")},
  {lv:"Advanced",t:"Bar bending schedule and site billing",b:"Prepare the bar bending schedule for the house's beams and slabs, and a sample running bill as a site engineer would.",c:["Reinforcement","BBS","Billing"],s:["Read the structural drawing","Prepare the BBS","Prepare a running bill","Review"],r:R("LibreCAD/LibreCAD")}],
 structural:[
  {lv:"Beginner",t:"Hand design of a beam and slab",b:"Design a simply supported beam and a two-way slab to IS 456 by hand, with neat calculation sheets.",c:["Loads","Bending moment","Limit state design"],s:["Find loads","Analyse","Design","Detail"],r:R("OpenSees/OpenSees")},
  {lv:"Intermediate",t:"G+2 building in STAAD.Pro or ETABS",b:"Model a G+2 RCC building, apply IS code loads and combinations, analyse and check member sizes.",c:["Modelling","Load combinations","Analysis","Design"],s:["Model the frame","Apply loads","Analyse","Design and check"],r:R("OpenSees/OpenSees")},
  {lv:"Advanced",t:"Earthquake check of the building",b:"Check the same building for earthquake loads per IS 1893, compare with and without shear walls, and explain the result.",c:["Seismic analysis","IS 1893","Ductile detailing"],s:["Set seismic data","Run analysis","Compare options","Write conclusions"],r:R("OpenSees/OpenSees")}],
 bim:[
  {lv:"Beginner",t:"Revit model of a small house",b:"Model a house in Revit with walls, floors, roof, doors and windows, and produce sheets and a door schedule.",c:["Revit basics","Families","Sheets","Schedules"],s:["Set levels and grids","Model the shell","Add doors and windows","Make sheets"],r:R("Autodesk/revit-ifc")},
  {lv:"Intermediate",t:"Coordinated model with clash report",b:"Add structure and basic services to the model, run clash detection and write a clash report with fixes.",c:["Structure in Revit","MEP basics","Clash detection"],s:["Add structure","Add services","Run clash checks","Report and fix"],r:R("IfcOpenShell/IfcOpenShell")},
  {lv:"Advanced",t:"4D schedule and cost plan",b:"Build a construction schedule with critical path in ProjectLibre, link it to model quantities and track cost with earned value.",c:["WBS","Critical path","Quantities","Earned value"],s:["Make the WBS","Schedule and find the critical path","Link quantities","Track progress"],r:R("IfcOpenShell/IfcOpenShell")}]
});

Object.assign(CERTS,{
 cloud:[
  C_("Co","AWS Certified Cloud Practitioner","Amazon Web Services","Entry","Paid exam","https://aws.amazon.com/certification/",["Free Cloud Practitioner Essentials on Skill Builder","https://skillbuilder.aws"],["Official practice question set on Skill Builder","https://skillbuilder.aws"],"Start here for AWS."),
  C_("Co","Microsoft Azure Fundamentals (AZ-900)","Microsoft","Entry","Paid exam; free vouchers at some Microsoft events","https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",["Free Microsoft Learn path","https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"],["Free practice assessment on the cert page","https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"],""),
  C_("Co","Google Cloud Digital Leader","Google Cloud","Entry","Paid exam","https://cloud.google.com/learn/certification",["Free Google Cloud Skills Boost paths","https://www.cloudskillsboost.google"],["Sample questions on the cert page","https://cloud.google.com/learn/certification"],"")],
 embedded:[
  C_("India","NPTEL Embedded Systems courses","NPTEL, Govt. of India","Entry–Intermediate","Course free; exam fee",NP,["Lecture videos (free)",NP],["Weekly assignments",NP],""),
  C_("Free","Your own projects on GitHub","You","Any","Free","https://wokwi.com",["Wokwi simulator","https://wokwi.com"],["Share Wokwi links in your resume","https://wokwi.com"],"Working demos impress embedded interviewers more than certificates.")],
 pcb:[
  C_("Intl","IPC Certified Interconnect Designer (CID)","IPC","Intermediate","Paid; through IPC training centres","https://www.ipc.org",["IPC standards overview","https://www.ipc.org"],["Training centre material","https://www.ipc.org"],"Recognised by PCB design employers."),
  C_("India","NPTEL electronics courses","NPTEL, Govt. of India","Entry","Course free; exam fee",NP,["Lecture videos (free)",NP],["Weekly assignments",NP],"")],
 vlsi:[
  C_("India","NPTEL VLSI Design / Digital Circuits","NPTEL, Govt. of India","Entry–Intermediate","Course free; exam fee",NP,["Lecture videos (free)",NP],["Weekly assignments",NP],""),
  C_("Free","HDLBits problem set","HDLBits","Entry","Free","https://hdlbits.01xz.net",["Problems with built-in checking","https://hdlbits.01xz.net"],["Finish all problems","https://hdlbits.01xz.net"],"Good proof of Verilog skill when shared on GitHub.")],
 powerev:[
  C_("Free","MATLAB and Simulink Onramp certificates","MathWorks","Entry","Free","https://matlabacademy.mathworks.com",["Free Onramp courses","https://matlabacademy.mathworks.com"],["Exercises inside each course","https://matlabacademy.mathworks.com"],""),
  C_("Co","MathWorks Certified MATLAB Associate","MathWorks","Entry","Paid exam","https://www.mathworks.com/learn/training/certification.html",["MATLAB Academy","https://matlabacademy.mathworks.com"],["Exam details on the page","https://www.mathworks.com/learn/training/certification.html"],""),
  C_("India","NPTEL Power Electronics / Electric Vehicles","NPTEL, Govt. of India","Entry–Intermediate","Course free; exam fee",NP,["Lecture videos (free)",NP],["Weekly assignments",NP],"")],
 plc:[
  C_("Intl","ISA Certified Control Systems Technician (CCST)","ISA","Intermediate","Paid exam","https://www.isa.org/certification/ccst",["Body of knowledge on the ISA page","https://www.isa.org/certification/ccst"],["Sample questions on the ISA page","https://www.isa.org/certification/ccst"],""),
  C_("India","NPTEL Industrial Automation and Control","NPTEL, Govt. of India","Entry","Course free; exam fee",NP,["Lecture videos (free)",NP],["Weekly assignments",NP],"")],
 cad:[
  C_("Co","SolidWorks CSWA / CSWP","Dassault Systèmes","Entry / Intermediate","Paid; student vouchers often available","https://www.solidworks.com/solidworks-certification-program",["SolidWorks tutorials","https://www.solidworks.com/solidworks-certification-program"],["Sample exams on the cert page","https://www.solidworks.com/solidworks-certification-program"],"Check the current exam page before buying."),
  C_("Co","Autodesk Certified Professional (Fusion / Inventor)","Autodesk","Intermediate","Paid exam","https://www.autodesk.com/certification",["Free cert-prep courses","https://www.autodesk.com/learn"],["Prep courses on Autodesk Learning","https://www.autodesk.com/learn"],"")],
 cae:[
  C_("Free","Ansys Innovation Courses badges","Ansys","Entry–Intermediate","Free","https://www.ansys.com/academic/learning-resources",["Free courses","https://www.ansys.com/academic/learning-resources"],["Quizzes in each course","https://www.ansys.com/academic/learning-resources"],""),
  C_("India","NPTEL Finite Element Method / CFD","NPTEL, Govt. of India","Intermediate","Course free; exam fee",NP,["Lecture videos (free)",NP],["Weekly assignments",NP],"")],
 mfg:[
  C_("Intl","Six Sigma Yellow / Green Belt","ASQ and other recognised bodies","Entry–Intermediate","Paid exam","https://asq.org/cert/catalog/six-sigma",["ASQ Six Sigma resources","https://asq.org/quality-resources/six-sigma"],["Body of knowledge on the ASQ page","https://asq.org/cert/catalog/six-sigma"],"Be careful of very cheap online 'belts' with no exam."),
  C_("India","NPTEL Manufacturing Processes","NPTEL, Govt. of India","Entry","Course free; exam fee",NP,["Lecture videos (free)",NP],["Weekly assignments",NP],"")],
 civilcad:[
  C_("Co","Autodesk Certified Professional: AutoCAD","Autodesk","Intermediate","Paid exam","https://www.autodesk.com/certification",["Free cert-prep courses","https://www.autodesk.com/learn"],["Prep courses on Autodesk Learning","https://www.autodesk.com/learn"],""),
  C_("India","NPTEL Construction / Estimation courses","NPTEL, Govt. of India","Entry","Course free; exam fee",NP,["Lecture videos (free)",NP],["Weekly assignments",NP],"")],
 structural:[
  C_("India","NPTEL Design of RC Structures / Earthquake Engineering","NPTEL, Govt. of India","Intermediate","Course free; exam fee",NP,["Lecture videos (free)",NP],["Weekly assignments",NP],""),
  C_("Co","Bentley STAAD learning","Bentley Systems","Intermediate","Free student software; paid professional certificates","https://education.bentley.com",["Bentley Education","https://education.bentley.com"],["Course exercises","https://education.bentley.com"],"")],
 bim:[
  C_("Co","Autodesk Certified Professional: Revit","Autodesk","Intermediate","Paid exam","https://www.autodesk.com/certification",["Free cert-prep courses","https://www.autodesk.com/learn"],["Prep courses on Autodesk Learning","https://www.autodesk.com/learn"],""),
  C_("Intl","PMI CAPM (Certified Associate in Project Management)","PMI","Entry","Paid exam","https://www.pmi.org/certifications/certified-associate-capm",["Exam content outline on the PMI page","https://www.pmi.org/certifications/certified-associate-capm"],["Sample questions on the PMI page","https://www.pmi.org/certifications/certified-associate-capm"],"Good first step towards PMP.")]
});
})();
