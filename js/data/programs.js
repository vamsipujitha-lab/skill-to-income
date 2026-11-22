// Placement Preparation course + job-oriented programs (PROGRAMS)
// ---- Placement Preparation course ----
const P={
 apt:ypl("PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt","Quantitative Aptitude Tutorials (playlist)","CareerRide"),
 osEn:ypl("PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O","Operating System (playlist)","Neso Academy"),
 dbEn:ypl("PLBlnK6fEyqRi_CUQ-FXxgzKQ1dwr_ZJWZ","Database Management Systems (playlist)","Neso Academy"),
 cnEn:ypl("PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx","Computer Networks (playlist)","Neso Academy"),
 osHi:ypl("PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p","Operating System – Complete Playlist","Gate Smashers"),
 dbHi:ypl("PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y","DBMS – Complete Playlist","Gate Smashers"),
 cnHi:ypl("PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_","Computer Networks – Complete Playlist","Gate Smashers"),
 osRevHi:yt("h8J7X1cEG4E","Complete OS Interview Questions in One Shot","Gate Smashers"),
 sdEn:yt("oz5c88cO5P8","System Design Interview Prep for Beginners","KodeKloud"),
 sdHi:yt("5ozClNjO44A","System Design Complete Course","Gate Smashers"),
 hrEn:yt("_TsNow3fUYo","Top 10 HR Interview Questions for Freshers","How2Become")
};
SYL.placement={name:"Placement Preparation",short:"Placements",color:"var(--l-place)",days:75,perDay:"1.5 hr",group:"Interview preparation",
 forWho:"Students from 2nd year onwards and freshers preparing for campus or off-campus hiring.",
 outcome:["Clear aptitude rounds of service companies","Answer OS, DBMS, networks and OOP interview questions","Build a resume, GitHub and LinkedIn that get shortlisted","Handle technical, HR and managerial interviews with confidence"],
 cert:"Company tests themselves (TCS NQT, Infosys, Wipro, Accenture and others) act as the proof",see:"https://roadmap.sh/computer-science",
 next:["Apply on campus, LinkedIn and company career pages","Keep solving 3–5 DSA problems a week","System design (for product companies)"],
 levels:[
 {name:"Aptitude and reasoning",days:"Days 1–19",goal:"Clear the first online test.",modules:[
  {name:"Quantitative aptitude",course:["CareerRide aptitude playlist","https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt"],topics:["Number system, HCF and LCM|The base of most questions.","Percentages, profit and loss|Very common in tests.","Ratio, averages and mixtures|Quick methods.","Time, speed and distance; time and work|Classic word problems.","Simple and compound interest|Formula questions.","Permutations, combinations, probability|Counting questions.","Data interpretation|Tables and charts."]},
  {name:"Logical reasoning and verbal",course:["IndiaBix reasoning practice","https://www.indiabix.com/logical-reasoning/questions-and-answers/"],topics:["Series and coding-decoding|Pattern spotting.","Blood relations and directions|Puzzle basics.","Seating arrangement and puzzles|High-scoring sections.","Syllogisms and statements|Logic questions.","Reading comprehension|Read fast, answer right.","Grammar and sentence correction|Common verbal questions."]}]},
 {name:"CS core subjects",days:"Days 20–44",goal:"Answer the theory questions every interviewer asks.",modules:[
  {name:"Object-oriented programming (in Java)",course:["Dev.java (OOP)","https://dev.java/learn/"],topics:["Class, object, constructor|The basics with examples.","Four pillars of OOP|Encapsulation, abstraction, inheritance, polymorphism.","Overloading vs overriding|A favourite question.","Interfaces vs abstract classes|When to use which.","SOLID principles|Good design rules."]},
  {name:"Operating systems",course:["Neso Academy – Operating System","https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O"],topics:["Process vs thread|Most asked OS question.","CPU scheduling|FCFS, SJF, round robin.","Synchronisation and deadlock|Mutex, semaphore, deadlock conditions.","Memory management|Paging, segmentation, virtual memory.","File systems|How files are stored."]},
  {name:"Database management systems",course:["Neso Academy – DBMS","https://www.youtube.com/playlist?list=PLBlnK6fEyqRi_CUQ-FXxgzKQ1dwr_ZJWZ"],topics:["Keys and ER model|Designing data.","Normalisation|1NF to BCNF.","Transactions and ACID|Safe changes.","Indexing|Fast lookups.","SQL interview queries|Nth highest salary, joins, group by."]},
  {name:"Computer networks",course:["Neso Academy – Computer Networks","https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"],topics:["OSI and TCP/IP models|Layers and their jobs.","TCP vs UDP|Reliable vs fast.","IP addressing and subnetting|Basics asked often.","DNS, HTTP, HTTPS|What happens when you open a website.","Routers, switches, firewalls|Network devices."]}]},
 {name:"Profile building",days:"Days 45–53",goal:"Get shortlisted.",modules:[
  {name:"Resume, GitHub, LinkedIn",course:["Tech Interview Handbook – Resume","https://www.techinterviewhandbook.org/resume/"],topics:["One-page resume|Projects, skills, results with numbers.","ATS-friendly format|Simple layout that machines can read.","GitHub profile|Pinned projects with clear READMEs.","LinkedIn profile|Headline, about, projects, certificates.","Internships and hackathons|Smart India Hackathon, open source, college fests.","Referrals and cold messages|Polite, short, specific."]}]},
 {name:"Company tests",days:"Days 54–63",goal:"Know each test pattern before you sit it.",modules:[
  {name:"Hiring test patterns",course:["TCS iON (NQT)","https://www.tcsion.com"],topics:["TCS NQT|Numerical, verbal, reasoning and coding sections.","Infosys, Wipro, Accenture, Cognizant, Capgemini|Typical sections and coding rounds.","Product company online assessments|2–3 DSA problems in 60–90 minutes.","Time management in tests|Skip, return, guess wisely.","Full mock tests|Practise under exam time."]}]},
 {name:"Interviews",days:"Days 64–75",goal:"Convert interviews into offers.",modules:[
  {name:"Technical and HR interviews",course:["Tech Interview Handbook","https://www.techinterviewhandbook.org/"],topics:["Explaining your projects|Problem, your role, tech, result.","Live coding|Think aloud, test edge cases.","System design basics|Scaling, caching, databases (for product companies).","HR questions|Tell me about yourself, strengths, why us.","Managerial round|Situations, teamwork, conflict.","Offer letters and negotiation|Reading the offer and asking politely.","Mock interviews|Practise with friends and seniors."]}]}
 ],
 repos:[["jwasham/coding-interview-university",GH("jwasham/coding-interview-university"),"Self-study plan for interviews."],["kdn251/interviews",GH("kdn251/interviews"),"Interview topics and questions in one place."]]
};
// Placement videos, checked topic by topic (9 Nov 2026): every video plays, and EN/HI was confirmed from YouTube's auto-generated captions. A topic can list more than one video per language.
const CR=(id,t,len)=>yt(id,t,"CareerRide",len), CSS=(id,t)=>yt(id,t,"Code Step By Step"), GS=(id,t,len)=>yt(id,t,"Gate Smashers",len);
Object.assign(MODV,{
 "placement::Quantitative aptitude":M(P.apt,yt("S-Ji7aayH3A","Numerical Ability One Shot (TCS NQT)","Yash Jain (KG)","11:50:57")),
 "placement::Logical reasoning and verbal":M(null,yt("sWJfscVkhLI","Reasoning Ability One Shot (TCS NQT)","Yash Jain (KG)","11:30:38")),
 "placement::Object-oriented programming (in Java)":M(yt("DYbi93vuSaU","Learn Java OOP in 10 minutes","Bro Code","9:51"),V2.javaOopHi),
 "placement::Operating systems":M(P.osEn,P.osHi),"placement::Database management systems":M(P.dbEn,P.dbHi),"placement::Computer networks":M(P.cnEn,P.cnHi),
 "placement::Technical and HR interviews":M(yt("1t1_a1BZ04o","How to NOT Fail a Technical Interview","Fireship","8:26"),yt("2MGdGmrAmOw","Tech Jobs Interview Guide: Mistakes to Avoid","Apna College","15:32"))
});
Object.assign(VIDEOS,{
 // Quantitative aptitude: exact videos from the CareerRide playlist (EN) and Code Step By Step series (HI)
 "placement::Number system, HCF and LCM":{en:CR("xyyejJYeILM","HCF and LCM"),hi:CSS("39Hbzfik_zw","Number System")},
 "placement::Percentages, profit and loss":{en:[CR("RWdNhJWwzSs","Percentage"),CR("T2odvmxqi1I","Profit and Loss")]},
 "placement::Ratio, averages and mixtures":{en:[CR("jfoJBivWlnQ","Ratio and Proportion"),CR("rhSxQ4ieAYc","Averages"),CR("OKSJDDAyqP0","Mixture and Alligation")],hi:CSS("UzH3Q2vqAxc","Ratio and Proportion")},
 "placement::Time, speed and distance; time and work":{en:[CR("jzNxXm5twx4","Speed, Distance and Time"),CR("KE7tQf9spPg","Time and Work")],hi:[CSS("S9FNu8vrvI4","Time and Distance"),CSS("o7pY9hCqDZk","Time and Work")]},
 "placement::Simple and compound interest":{en:[CR("jvRq87ZWzIk","Simple Interest"),CR("PbUZnzncmR4","Compound Interest")],hi:[CSS("193rcgrkUcI","Simple Interest"),CSS("SCF44DHpFuY","Compound Interest")]},
 "placement::Permutations, combinations, probability":{en:[CR("ETiRE7N7pEI","Permutation and Combination"),CR("ximxxERGSUc","Probability")],hi:[CSS("9pqePR1hAxQ","Permutation and Combination"),CSS("8Q-uhgxvV5s","Probability")]},
 "placement::Data interpretation":{en:[CR("fA8cQW-nmIw","Pie Chart (DI)"),CR("LEM2xQEVYGo","Bar Graph (DI)"),CR("wLTYn8MVIrA","Line Graph and Table (DI)")]},
 // Logical reasoning and verbal
 "placement::Series and coding-decoding":{en:[CR("gXBuL_FyahE","Series","1:00:13"),CR("wwN3mJ-b4FY","Coding and Decoding","58:50")],hi:[CSS("nfovdgA2tuw","Number Series"),CSS("ZXcULvjpQlM","Coding-Decoding")]},
 "placement::Blood relations and directions":{en:[CR("LRdLhfDupMU","Blood Relations","42:18"),CR("x0WkptLF6oE","Direction Sense Test","51:05")],hi:[CSS("6DNzpn8uhwc","Blood Relations"),CSS("_Xj2Ux_RO8o","Direction Sense Test")]},
 "placement::Seating arrangement and puzzles":{en:CR("GYe98jwCn7g","Seating Arrangement","58:06"),hi:CSS("qZeIDdAVvTQ","Sitting Arrangement")},
 "placement::Syllogisms and statements":{en:[CR("knFLfSr35wU","Syllogism","1:24:51"),CR("8ZZp9LwXPDI","Statement and Conclusion","35:58")],hi:CSS("mStJh_0mO0s","Syllogism")},
 "placement::Reading comprehension":{en:yt("4Ns1jYVuJ7s","Reading Comprehension Tricks: Eliminating Options","Ananta Chhajer","9:24"),hi:yt("SP-ItSWNfIc","Reading Comprehension: Tips and Tricks","Nimisha Bansal","38:26")},
 "placement::Grammar and sentence correction":{en:CR("9pzQhtEKepw","Spot the Error: Articles","18:34"),hi:yt("GDAVuWg0G8M","Verbal Ability One Shot (TCS NQT)","Yash Jain (KG)","11:35:12")},
 // OOP (Java)
 "placement::Four pillars of OOP":{en:yt("pTB0EiLXUC8","Object-Oriented Programming, Simplified","Programming with Mosh","7:34"),hi:yt("LqPl23MTK5o","Encapsulation, Abstraction, Polymorphism, Inheritance","Engineering Digest","22:47")},
 "placement::Overloading vs overriding":{en:[yt("KpwBVAYbPDA","Method Overloading in Java","Telusko","6:03"),yt("CLzgS08equQ","Method Overriding in Java","Telusko","7:57")],hi:yt("ryDeTfmSY_o","Java Overloading vs Overriding","Smartherd","7:32")},
 "placement::Interfaces vs abstract classes":{en:yt("2aQ9Y7bumts","Abstract Classes vs Interfaces (Java)","The Code Hard Truth","9:43"),hi:yt("qZEFslUVfx0","Abstract Classes Vs Interfaces","CodeWithHarry","14:50")},
 "placement::SOLID principles":{en:yt("yxf2spbpTSw","Introduction to SOLID Principles in 8 Minutes","in28minutes","8:17"),hi:yt("UsNl8kcU4UA","SOLID Design Principles with Code","Coder Army","1:07:32")},
 // OS, DBMS, networks: topics the module playlists miss or bury
 "placement::Process vs thread":{hi:P.osRevHi},
 "placement::Normalisation":{en:yt("GFQaEYEc8_8","Learn Database Normalization: 1NF to 5NF","Decomplexify","28:34"),hi:GS("EGEwkad_llA","All Normal Forms with Real-life Examples","11:15")},
 "placement::Transactions and ACID":{en:yt("GAe5oB742dw","ACID Properties in Databases","ByteByteGo","4:57"),hi:GS("-GS0OxFJsYQ","ACID Properties of a Transaction","13:58")},
 "placement::Indexing":{en:yt("3G293is403I","How do indexes make databases read faster?","Arpit Bhayani","23:25"),hi:GS("E--yzX05_k8","Why Indexing is Used","10:20")},
 "placement::SQL interview queries":{en:yt("fvPddKyHxpQ","How to find Nth highest salary in SQL","kudvenkat","11:45"),hi:GS("0xg4X79yHW4","Top 15 SQL Interview Questions","15:19")},
 "placement::TCP vs UDP":{en:yt("uwoD5YsGACg","TCP vs UDP Comparison","PowerCert Animated Videos","4:37"),hi:GS("jJyXpMmXJI0","TCP vs UDP Differences","11:58")},
 "placement::DNS, HTTP, HTTPS":{en:yt("AlkDbnbv7dk","What happens when you type a URL into your browser?","ByteByteGo","5:20"),hi:GS("vhfRArT11jc","Domain Name System (DNS)")},
 "placement::Routers, switches, firewalls":{en:yt("1z0ULvg_pW8","Hub, Switch and Router Explained","PowerCert Animated Videos","7:22"),hi:GS("vdtqEPKYB5M","Switch, Hub and Bridge Explained","4:59")},
 // Profile building
 "placement::One-page resume":{en:yt("qhocVNbvNHs","My Resume That Got Selected at Google, Amazon, Microsoft","Ashish Pratap Singh","8:10"),hi:yt("y3R9e2L8I9E","How to make the Ultimate Resume (Software Engineers)","Apna College","16:49")},
 "placement::ATS-friendly format":{en:yt("0jQwXfsOds4","How to Create an ATS-Friendly Resume","Jobscan","5:40"),hi:yt("ZcuziWFfpQY","Best Resume to Get a Job: ATS Format","Rishabh Mishra","15:11")},
 "placement::GitHub profile":{en:[yt("z8UPAVTh2aE","How To Make Your GitHub Stand Out","Miraya","8:13"),yt("rCt9DatF63I","Professional GitHub README Profile","Cloud Champ","8:29")],hi:yt("fdDSZGBSeiw","Make Your GitHub Profile Look Pro","Techno Snag","13:54")},
 "placement::LinkedIn profile":{en:yt("j2YA_TScR-E","How to Set Up Your LinkedIn Profile","Website Learners","12:26"),hi:yt("KN3_sGhUzUc","How to create a Great LinkedIn Profile (2026)","Apna College","27:12")},
 "placement::Internships and hackathons":{en:yt("yUQbl9J3kJU","How I would get a Software Engineering Internship","Sajjaad Khader","10:00"),hi:[yt("KlfuFFGWw64","How to apply for Off-Campus Internships","Apna College","23:54"),yt("v8zRjyCTgXQ","Ultimate Hackathon Guide for Engineers","Apna College","15:22")]},
 "placement::Referrals and cold messages":{en:yt("TUZWRIwELgw","Do's and Don'ts in LinkedIn Messages for Referrals","Striver","20:17"),hi:yt("hwXU2bOoTbY","How to Ask for a Referral the Right Way","Mansi G.","9:53")},
 // Company tests
 "placement::TCS NQT":{en:yt("dIEah6WavpQ","TCS NQT Complete Guide: Registration and Test Pattern","CVCORP","29:00"),hi:yt("Cl_oVsYqPtI","TCS NQT Updated Exam Pattern and Cutoff","Yash Jain (KG)")},
 "placement::Infosys, Wipro, Accenture, Cognizant, Capgemini":{en:yt("K3eo6HtiutM","Roadmap to Crack Service-Based Companies","Jenny's Lectures CS IT","12:00")},
 "placement::Product company online assessments":{en:yt("OIfBufsJjlU","How to Crack the Online Assessment / Coding Round","Ashish Kumar","11:15")},
 "placement::Time management in tests":{en:[CR("5pWzVhiv5Rg","How to Manage Time in Quantitative Aptitude","6:11"),yt("G4st5-0LYso","How to Crack the Aptitude Test of Any Company","Ashish Kumar","6:41")]},
 // Interviews
 "placement::Explaining your projects":{en:yt("J7q8jh0Try0","How to Explain Your Current Project in an Interview","Naveen AutomationLabs","17:19"),hi:yt("pPPbLeIX_f0","How To Explain Your Project During An Interview","Technical Suneja","17:11")},
 "placement::Live coding":{en:yt("Q4C3ZRJLnac","How to Solve ANY Coding Interview Question in 6 Steps","Anthony D. Mays","12:33"),hi:yt("PG4t_6qjxz0","Best way to Answer DSA Questions and Explain Projects","Striver","15:17")},
 "placement::System design basics":{en:P.sdEn,hi:P.sdHi},
 "placement::HR questions":{en:[P.hrEn,yt("S3zbpX1dvrI","8 Most Asked HR Interview Questions","Vivek Gupta","14:59")],hi:yt("oXXM8c5c-p0","HR Interview Questions and Answers for Freshers","Career Bhai","12:46")},
 "placement::Managerial round":{en:yt("C1PUw4d0O9M","Top 10 Manager Round Interview Questions","Interview Happy","10:37"),hi:yt("uC8OALy53EU","Top 10 Manager Round Interview Questions (Hindi)","Interview Happy","11:47")},
 "placement::Offer letters and negotiation":{en:yt("kBIN2h16Rc4","Exactly How To Negotiate Your Salary","Full Disclosure","12:12"),hi:yt("vLbrwSzXUro","Salary Negotiation Guide for Freshers","warikoo careers","14:10")},
 "placement::Mock interviews":{en:yt("1qw5ITr3k9E","Software Engineering Job Interview: Full Mock Interview","freeCodeCamp.org","1:14:29"),hi:yt("eyI5WkbSckI","Complete Mock Interview Demo","warikoo careers","24:01")}
});
CAP.placement=[
 {lv:"Intermediate",t:"Your placement portfolio",b:"A one-page resume, a GitHub with 3 pinned projects, a LinkedIn profile, and a 2-minute recorded project walkthrough.",c:["Resume","GitHub","LinkedIn","Project storytelling"],s:["Pick your 3 best projects","Write READMEs","Build the resume","Record the walkthrough"],r:["jwasham/coding-interview-university",GH("jwasham/coding-interview-university")]},
 {lv:"Advanced",t:"30-day mock interview sprint",b:"Daily: 2 DSA problems, 10 core-subject questions, 15 minutes aptitude; weekly: one full mock test and one mock interview with feedback.",c:["DSA","OS, DBMS, CN, OOP","Aptitude","Communication"],s:["Make a tracker","Daily practice","Weekly mocks","Fix weak areas"],r:["kdn251/interviews",GH("kdn251/interviews")]}
];
CERTS.placement=[
 C_("Co","TCS NQT (National Qualifier Test)","TCS iON","Entry","Check current fee","https://www.tcsion.com",["Syllabus on TCS iON","https://www.tcsion.com"],["Sample tests on TCS iON","https://www.tcsion.com"],"One score used by many companies."),
 C_("India","NPTEL Operating Systems / DBMS / Computer Networks","NPTEL, Govt. of India","Intermediate","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly graded assignments",NPTEL],"Good proof of core subjects on a resume."),
 C_("Free","HackerRank skill certificates (Problem Solving, SQL)","HackerRank","Entry–Intermediate","Free","https://www.hackerrank.com/skills-verification",["Practice problems","https://www.hackerrank.com/domains/algorithms"],["The skill tests","https://www.hackerrank.com/skills-verification"],"")
];

// ---- Job-oriented programs ----
// Each phase: courses (keys of SYL) + tasks + milestone. Durations: 2-year plan (4 semesters) and 1-year fast track.
const PROGRAMS={
 sde:{name:"Software Development Engineer (SDE)",color:"var(--l-cpp)",role:"Builds and maintains software at product and service companies.",
  forWho:"CS/IT/ECE students from 1st or 2nd year, or anyone aiming for coding jobs.",
  hires:"Product companies (higher bar, DSA-heavy) and service companies (TCS, Infosys, Wipro, Accenture and others).",
  phases:[
   {name:"Programming foundation",two:"Semester 1 (Months 1–6)",one:"Months 1–2",courses:["cpp","c","github"],alt:[["cpp","c"]],parts:{cpp:[1,4],c:[1,4]},pick:"Choose one first language: C++ (best for DSA and placements) or C (if your college teaches it first). Data structures come in phase 2 with the DSA course.",tasks:["Solve 50 easy problems on loops, arrays, strings","Git and GitHub basics","Start a daily coding habit (1 problem a day)"],milestone:"Write any small program without looking up syntax."},
   {name:"Data structures and algorithms",two:"Semester 2 (Months 7–12)",one:"Months 3–5",courses:["dsa"],tasks:["150 problems by pattern","Weekly contest on LeetCode or CodeChef","NPTEL DSA course for the certificate"],milestone:"Solve most easy and many medium problems in 30 minutes."},
   {name:"Development skill",two:"Semester 3 (Months 13–18)",one:"Months 6–9",courses:["java","python","sql","fullstack"],alt:[["java","python"]],parts:{java:[1,5]},pick:"Choose one backend language: Java (Spring Boot, used by most service companies) or Python (Django and FastAPI for web, plus rich libraries like pandas, NumPy and scikit-learn that also open data and AI roles). Both are fine for placements.",tasks:["Build 2 full-stack projects and deploy them","Keep solving 4 DSA problems a week","Apply for internships"],milestone:"Two live projects on GitHub with READMEs."},
   {name:"Placement readiness",two:"Semester 4 (Months 19–24)",one:"Months 10–12",courses:["placement","devops"],parts:{devops:[1,3]},tasks:["300 DSA problems total","OS, DBMS, CN, OOP revision","Weekly mock tests and mock interviews","System design basics"],milestone:"Ready for online assessments and interviews at both service and product companies."}
  ],
  interview:["Online assessment: 2–3 DSA problems","Technical round 1: DSA and your projects","Technical round 2: OOP, DBMS, OS, CN","System design basics (product companies)","HR / managerial round"]},
 fullstack:{name:"Full Stack Web Developer",color:"var(--l-full)",role:"Builds complete web apps: front end, back end and database.",
  forWho:"Students and career-changers who like building visible products.",
  hires:"Startups, product companies, agencies and freelance clients.",
  phases:[
   {name:"Programming foundation",two:"Semester 1 (Months 1–6)",one:"Months 1–3",courses:["frontend","github"],tasks:["10 small HTML/CSS/JS projects","Git and GitHub daily"],milestone:"A responsive portfolio website online."},
   {name:"Full stack core",two:"Semester 2 (Months 7–12)",one:"Months 4–6",courses:["fullstack","sql"],tasks:["Build the RealWorld app end to end","Learn testing with Playwright"],milestone:"One complete app with login and database, deployed."},
   {name:"Problem solving",two:"Semester 3 (Months 13–18)",one:"Months 7–9",courses:["dsa"],parts:{dsa:[1,3]},tasks:["75 DSA problems (easy and medium)","Freelance or internship project","Open-source contributions"],milestone:"Clear easy/medium coding rounds; real user-facing work."},
   {name:"Ship and get hired",two:"Semester 4 (Months 19–24)",one:"Months 10–12",courses:["devops","placement"],parts:{devops:[1,3]},tasks:["Docker + CI for your projects","Mock interviews","Apply to startups with project links"],milestone:"Portfolio of 3 deployed apps and interview-ready."}
  ],
  interview:["Take-home or live build task","JavaScript, React and API questions","Database and system design basics","DSA round (easy/medium)","HR round"]},
 sdet:{name:"QA Automation / SDET (with AI)",color:"var(--l-testing)",role:"Tests software and builds automation frameworks; increasingly uses AI and MCP tools.",
  forWho:"Students and manual testers who like finding problems and improving quality.",
  hires:"Service companies, product companies, testing firms and freelance platforms.",
  phases:[
   {name:"Testing basics and coding",two:"Semester 1 (Months 1–6)",one:"Months 1–3",courses:["testing","java","sql"],parts:{testing:[1,2],java:[1,3],sql:[1,2]},pick:"The Testing course is the main course of this program: its levels are spread over all four phases, in order. Its level 2 gives a quick start in Java; Java levels 1–3 go deeper (strings, collections, OOP) because SDET interviews ask Java programs. SQL levels 1–2 cover the queries testers use.",tasks:["ISTQB Foundation exam","OOP practice in Java","SQL queries for test data"],milestone:"Write good test cases and bug reports; comfortable with Java OOP and SQL."},
   {name:"Web automation with AI",two:"Semester 2 (Months 7–12)",one:"Months 4–5",courses:["testing"],parts:{testing:[3,4]},tasks:["Playwright and Selenium frameworks"],milestone:"A Playwright and a Selenium framework on GitHub."},
   {name:"API, mobile and framework design",two:"Semester 3 (Months 13–18)",one:"Months 6–8",courses:["testing"],parts:{testing:[5,7]},tasks:["API tests with Postman and REST Assured","Appium framework for Android and iOS","Paid testing sites for real experience"],milestone:"One hybrid UI + API + mobile framework on GitHub."},
   {name:"CI/CD, AI and placement",two:"Semester 4 (Months 19–24)",one:"Months 9–12",courses:["testing","dsa","placement"],parts:{testing:[8,9],dsa:[1,2]},tasks:["AI + MCP test generation project","50 easy coding problems (for product-company SDET rounds)","Framework design interview questions","Mock interviews"],milestone:"Framework runs in CI with AI features; interview-ready for QA automation and SDET roles."}
  ],
  interview:["Testing concepts and test design","Automation framework design","Live coding (Java/Python, easy DSA)","API and SQL questions","HR round"]},
 data:{name:"Data Analyst",color:"var(--l-data)",role:"Turns data into answers and dashboards for business decisions.",
  forWho:"Students from any branch who enjoy numbers and explaining insights.",
  hires:"Almost every industry: banks, e-commerce, consulting, healthcare, startups.",
  phases:[
   {name:"Foundations",two:"Semester 1 (Months 1–6)",one:"Months 1–3",courses:["data","sql"],parts:{data:[1,2]},tasks:["Excel practice on real datasets","50 SQL questions"],milestone:"Answer business questions with SQL and Excel."},
   {name:"Analysis",two:"Semester 2 (Months 7–12)",one:"Months 4–6",courses:["data"],parts:{data:[4,6]},tasks:["3 analysis projects with real data","Power BI dashboard"],milestone:"A portfolio of 3 analyses and 1 dashboard."},
   {name:"Advanced and AI",two:"Semester 3 (Months 13–18)",one:"Months 7–10",courses:["ai","claude"],parts:{ai:[2,3],claude:[1,3]},tasks:["Machine learning basics project","PL-300 or Google Data Analytics certificate"],milestone:"One prediction project and one certificate."},
   {name:"Get hired",two:"Semester 4 (Months 19–24)",one:"Months 11–12",courses:["placement"],parts:{placement:[[1,1],[3,5]]},tasks:["Case-study practice","SQL and Excel tests","Mock interviews"],milestone:"Ready for analyst interviews."}
  ],
  interview:["SQL test","Excel or Power BI task","Case study / guesstimate","Statistics questions","HR round"]},
 aiml:{name:"AI / ML Engineer",color:"var(--l-ai)",role:"Builds AI features: models, RAG apps and agents.",
  forWho:"Students strong in maths and coding who want the fastest-growing field.",
  hires:"AI startups, product companies, GCCs (global capability centres) in India.",
  phases:[
   {name:"Programming and maths",two:"Semester 1 (Months 1–6)",one:"Months 1–3",courses:["python","dsa"],parts:{python:[1,4],dsa:[1,3]},tasks:["Linear algebra and probability basics","100 DSA problems"],milestone:"Strong Python and problem solving."},
   {name:"Data and ML",two:"Semester 2 (Months 7–12)",one:"Months 4–5",courses:["data"],parts:{data:[2,4]},tasks:["2 ML projects with real data","Kaggle beginner competitions"],milestone:"Clean data, train and evaluate models."},
   {name:"GenAI and agents",two:"Semester 3 (Months 13–18)",one:"Months 6–8",courses:["ai","claude"],parts:{ai:[3,7]},tasks:["RAG app and research agent capstones","Hugging Face Agents certificate"],milestone:"Two deployed AI apps."},
   {name:"Production and hiring",two:"Semester 4 (Months 19–24)",one:"Months 9–12",courses:["devops","placement"],parts:{devops:[1,4]},tasks:["Deploy with Docker and monitoring","Cloud AI certificate (AWS or Microsoft)","Mock interviews"],milestone:"Interview-ready with production-style AI projects."}
  ],
  interview:["Coding round (DSA)","ML and statistics concepts","GenAI: RAG, agents, evaluation","Project deep dive","System design for AI apps"]},
 mobile:{name:"Mobile App Developer (Android / iOS)",color:"var(--l-android)",role:"Builds apps for phones and tablets.",
  forWho:"Students who want to build apps people carry every day. iOS needs a Mac.",
  hires:"Product companies, startups, agencies and freelance.",
  phases:[
   {name:"Programming",two:"Semester 1 (Months 1–6)",one:"Months 1–2",courses:["java"],parts:{java:[1,2]},tasks:["OOP practice","Kotlin or Swift basics"],milestone:"Comfortable with OOP."},
   {name:"App development",two:"Semester 2 (Months 7–12)",one:"Months 3–6",courses:["android","ios"],alt:[["android","ios"]],pick:"Choose one platform: Android (most phones in India, more jobs) or iOS (needs a Mac). Learn the other later if you want.",tasks:["Pick Android or iOS as your main platform","3 apps of growing difficulty"],milestone:"One app published on Google Play or TestFlight."},
   {name:"Backend and problem solving",two:"Semester 3 (Months 13–18)",one:"Months 7–10",courses:["fullstack","dsa"],parts:{fullstack:[2,4],dsa:[1,3]},tasks:["Build an API for your app","75 DSA problems (easy and medium)"],milestone:"App with your own backend; coding rounds manageable."},
   {name:"Get hired",two:"Semester 4 (Months 19–24)",one:"Months 11–12",courses:["placement"],tasks:["Mobile testing with Appium (optional)","Mock interviews"],milestone:"Published apps + interview-ready."}
  ],
  interview:["Kotlin/Swift and platform questions","App architecture (MVVM)","Live coding (DSA easy/medium)","Project and store release discussion","HR round"]},
 devops:{name:"Cloud / DevOps Engineer",color:"var(--l-devops)",role:"Builds pipelines and runs apps reliably in the cloud.",
  forWho:"Students who enjoy systems, Linux and automation.",
  hires:"Product companies, cloud consultancies, service companies, GCCs.",
  phases:[
   {name:"Foundations",two:"Semester 1 (Months 1–6)",one:"Months 1–2",courses:["devops","python","github"],parts:{devops:[1,1],python:[1,4]},tasks:["Linux daily use","Bash scripting"],milestone:"Comfortable on the command line, with Python scripts and Git."},
   {name:"DevOps core and cloud",two:"Semester 2 (Months 7–12)",one:"Months 3–5",courses:["devops","cloud"],parts:{devops:[2,4],cloud:[1,2]},tasks:["AWS Cloud Practitioner","Docker + CI project"],milestone:"App containerised and deployed to the cloud by a pipeline."},
   {name:"Scale, automate and secure",two:"Semester 3 (Months 13–18)",one:"Months 6–9",courses:["devops","cloud","cyber"],parts:{devops:[5,7],cloud:[3,5],cyber:[2,3]},tasks:["Kubernetes project with monitoring","Terraform Associate or CKA"],milestone:"Kubernetes app built with Terraform, with dashboards and alerts."},
   {name:"Get hired",two:"Semester 4 (Months 19–24)",one:"Months 10–12",courses:["placement"],tasks:["Scripting programs in Python and Bash","Troubleshooting scenario practice","Mock interviews"],milestone:"Interview-ready with 2 cloud projects and a certificate."}
  ],
  interview:["Linux and networking","CI/CD and Docker","Cloud services (AWS/Azure)","Kubernetes scenarios","Troubleshooting round"]},
 cyber:{name:"Cyber Security Analyst",color:"var(--l-cyber)",role:"Protects systems: monitoring, testing and responding to attacks.",
  forWho:"Students curious about how attacks work and how to stop them (legally).",
  hires:"Banks, security firms, SOCs, consultancies, government.",
  phases:[
   {name:"Foundations",two:"Semester 1 (Months 1–6)",one:"Months 1–2",courses:["devops","placement","python"],parts:{devops:[1,1],placement:[2,2],python:[1,3]},tasks:["Networking and OS from the Placement course","Linux daily use"],milestone:"Strong Linux, networking and OS basics; can script in Python."},
   {name:"Security core",two:"Semester 2 (Months 7–12)",one:"Months 3–5",courses:["cyber"],tasks:["Home lab","PortSwigger labs","ISC2 CC or Security+"],milestone:"Lab write-ups and one entry certification."},
   {name:"Cloud and web",two:"Semester 3 (Months 13–18)",one:"Months 6–9",courses:["cloud","fullstack"],parts:{fullstack:[2,4]},tasks:["Cloud security basics","Secure code review project"],milestone:"Can secure a web app and its cloud setup."},
   {name:"Get hired",two:"Semester 4 (Months 19–24)",one:"Months 10–12",courses:["placement"],parts:{placement:[[1,1],[3,5]]},tasks:["CTF competitions","Mock interviews for SOC and security roles"],milestone:"Portfolio of lab reports and CTF results."}
  ],
  interview:["Networking and OS","OWASP Top 10 and web attacks","Incident response scenarios","Tools: Wireshark, Nmap, Burp, SIEM","HR round"]}
};
const PORDER=["sde","fullstack","sdet","data","aiml","mobile","devops","cyber"];
