// Certifications, study material, practice papers (CERTS)
// ---- Certifications, study material, practice papers ----
// type: Intl = international, India = national (India), Co = company / vendor, Free = free certificate of completion
// f: cost note; m: [label,url] study material; p: [label,url] practice papers (official or legitimate)
const C_=(type,name,by,lvl,f,link,m,p,note)=>({type,name,by,lvl,f,link,m,p,note});
const NPTEL="https://nptel.ac.in";
const MSL="https://learn.microsoft.com/en-us/credentials/";
const AWSC="https://aws.amazon.com/certification/";
const SB="https://skillbuilder.aws";
const CERTS={
 trading:[
  C_("India","NISM Series VIII – Equity Derivatives","NISM (set up by SEBI)","Entry","Paid exam","https://www.nism.ac.in/revamp-nism/equity-derivatives/",["Official NISM workbook (on the NISM page)","https://www.nism.ac.in/revamp-nism/equity-derivatives/"],["NISM exam FAQ and pattern","https://www.nism.ac.in/frequently-asked-questions-equity-derivatives-certification-examination"],"Required for people who work for brokers in derivatives; a strong signal for any trader."),
  C_("India","NISM Series XV – Research Analyst","NISM","Intermediate","Paid exam","https://www.nism.ac.in",["NISM workbooks","https://www.nism.ac.in"],["NISM exam pattern on the same page","https://www.nism.ac.in"],"Needed (with SEBI registration) before giving paid stock research or tips."),
  C_("Co","Varsity Certified","Zerodha Varsity","Beginner–Intermediate","Paid exam; study material free","https://zerodha.com/varsity/",["Varsity modules (free)","https://zerodha.com/varsity/modules/"],["Chapter quizzes in the Varsity app","https://zerodha.com/varsity/"],""),
  C_("Intl","CFA Program (Level I)","CFA Institute","Advanced","Paid; serious commitment","https://www.cfainstitute.org",["Official curriculum with registration","https://www.cfainstitute.org"],["Official practice packs with registration","https://www.cfainstitute.org"],"For a career in research or fund management, not needed for personal trading.")
 ],
 testing:[
  C_("Intl","ISTQB Certified Tester Foundation Level (CTFL v4.0)","ISTQB (India: through its member board)","Entry","Paid exam","https://istqb.org/certification/",["Official syllabus (free download)","https://istqb.org/certification/"],["Official Sample Exam A (free PDF)","https://www.istqb.org/wp-content/uploads/sdm-uploads/ISTQB_CTFL_v4.0_Sample-Exam-A-Questions_v1.7.pdf"],"The most asked-for testing certificate in Indian job posts."),
  C_("Intl","ISTQB Test Automation Engineering (CTAL-TAE v2)","ISTQB","Advanced","Paid exam","https://istqb.org/certification/",["Official syllabus","https://istqb.org/certification/"],["Official sample exams on the ISTQB site","https://istqb.org/certification/"],"Matches the framework design level of this course."),
  C_("Intl","ISTQB AI Testing (CT-AI)","ISTQB","Specialist","Paid exam","https://istqb.org/istqb-releases-certified-tester-ai-testing-v10-ct-ai/",["Official syllabus","https://istqb.org/certification/"],["Official sample exams on the ISTQB site","https://istqb.org/certification/"],"Testing AI systems and using AI in testing."),
  C_("Intl","ISTQB Mobile Application Testing (CT-MAT)","ISTQB","Specialist","Paid exam","https://istqb.org/certification/",["Official syllabus","https://istqb.org/certification/"],["Official sample exams on the ISTQB site","https://istqb.org/certification/"],"Matches the Appium level."),
  C_("Free","Postman API Fundamentals Student Expert","Postman","Entry","Free","https://academy.postman.com/postman-api-fundamentals-student-expert-certification-1",["Postman Academy","https://academy.postman.com/"],["Hands-on tasks inside the course","https://academy.postman.com/"],""),
  C_("Co","GitHub Actions certification","GitHub","Intermediate","Paid exam","https://resources.github.com/learn/certifications/",["GitHub Skills (free)","https://skills.github.com"],["Study guide on the certification page","https://resources.github.com/learn/certifications/"],"Proves your CI/CD skills for test pipelines."),
  C_("India","NPTEL Software Testing (IIT/IISc course)","NPTEL, Govt. of India","Entry","Course free; exam fee","https://nptel.ac.in",["Full lecture videos (free)",NPTEL],["Weekly graded assignments act as practice papers",NPTEL],"Check the current semester's course list.")
 ],
 ai:[
  C_("Free","Hugging Face Agents Course certificate","Hugging Face","Intermediate","Free","https://huggingface.co/learn/agents-course",["Course (free)","https://huggingface.co/learn/agents-course"],["Graded assignments in the course","https://huggingface.co/learn/agents-course"],""),
  C_("Co","Azure AI Fundamentals (AI-901)","Microsoft","Entry","Paid exam","https://learn.microsoft.com/en-us/credentials/",["Free Microsoft Learn path",MSL],["Free official practice assessment on Microsoft Learn",MSL],"AI-900 retired on 30 June 2026; AI-901 replaces it."),
  C_("Co","Azure AI App and Agent Developer Associate (AI-103)","Microsoft","Intermediate","Paid exam","https://learn.microsoft.com/en-us/credentials/",["Free Microsoft Learn path",MSL],["Free official practice assessment on Microsoft Learn",MSL],"Replaces AI-102 (retired 30 June 2026)."),
  C_("Co","AWS Certified AI Practitioner","Amazon Web Services","Entry","Paid exam",AWSC,["Free courses on AWS Skill Builder",SB],["Official practice question set on Skill Builder",SB],""),
  C_("Co","Google Cloud Professional Machine Learning Engineer","Google Cloud","Advanced","Paid exam","https://cloud.google.com/learn/certification",["Official learning path","https://cloud.google.com/learn/certification"],["Official sample questions on the exam page","https://cloud.google.com/learn/certification"],""),
  C_("India","NPTEL AI / Machine Learning courses (IIT faculty)","NPTEL, Govt. of India","Entry–Intermediate","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly graded assignments",NPTEL],"")
 ],
 claude:[
  C_("Free","Claude Academy course certificates","Anthropic","Entry–Intermediate","Free","https://academy.claude.com",["All Claude Academy courses","https://academy.claude.com"],["Quizzes at the end of each course","https://academy.claude.com"],"One certificate per finished course; add them to LinkedIn."),
  C_("Co","Claude Certified Associate: Foundations","Anthropic","Entry","Paid, proctored; Partner Network members","https://claude.com/partners",["Prep courses in the Anthropic Partner Academy","https://claude.com/partners"],["Prep material with Partner Network access","https://claude.com/partners"],"Exams are open to Claude Partner Network members (membership is free)."),
  C_("Co","Claude Certified Developer: Foundations","Anthropic","Intermediate","Paid, proctored; Partner Network members","https://claude.com/partners",["Prep courses in the Anthropic Partner Academy","https://claude.com/partners"],["Prep material with Partner Network access","https://claude.com/partners"],"For people building with the Claude API, tools and agents."),
  C_("Co","Claude Certified Architect: Foundations and Professional","Anthropic","Advanced","Paid, proctored; Partner Network members","https://claude.com/partners",["Prep courses in the Anthropic Partner Academy","https://claude.com/partners"],["Prep material with Partner Network access","https://claude.com/partners"],"Professional level starts after a Foundations certificate.")
 ],
 tools:[
  C_("Co","Google AI Essentials","Google","Entry","Paid course certificate (financial aid available)","https://grow.google/ai-essentials/",["Course on the Google page","https://grow.google/ai-essentials/"],["Graded quizzes in the course","https://grow.google/ai-essentials/"],""),
  C_("Free","Claude Academy: AI Fluency","Anthropic","Entry","Free","https://academy.claude.com",["Course","https://academy.claude.com"],["Course quizzes","https://academy.claude.com"],"")
 ],
 c:[
  C_("Free","CS50x certificate","Harvard University","Entry","Free (paid verified option on edX)","https://cs50.harvard.edu/x/",["Lectures, notes, problem sets","https://cs50.harvard.edu/x/"],["Problem sets act as practice papers","https://cs50.harvard.edu/x/"],""),
  C_("Intl","CLA / CLP – C Programming Language Associate / Professional","C++ Institute","Entry / Advanced","Paid exam","https://cppinstitute.org",["Free C Essentials courses linked from the Institute","https://cppinstitute.org"],["Sample tests on the exam pages","https://cppinstitute.org"],""),
  C_("India","NPTEL Problem Solving through Programming in C","NPTEL, Govt. of India","Entry","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly assignments + past exam pattern on the course page",NPTEL],""),
  C_("India","NIELIT 'O' Level (includes C)","NIELIT, Govt. of India","Entry","Paid","https://www.nielit.gov.in",["Syllabus on the NIELIT site","https://www.nielit.gov.in"],["Previous papers listed on the NIELIT site","https://www.nielit.gov.in"],"Accepted for many government jobs."),
  C_("India","GATE Computer Science (C, data structures, algorithms)","IITs / IISc","Advanced","Paid exam","",["Official syllabus on this year's GATE website",""],["Previous years' papers on this year's GATE website",""],"For M.Tech admission and PSU jobs; check this year's organising institute.")
 ],
 cpp:[
  C_("Intl","CPA / CPP – C++ Certified Associate / Professional","C++ Institute","Entry / Advanced","Paid exam","https://cppinstitute.org",["Free C++ Essentials courses","https://cppinstitute.org"],["Sample tests on the exam pages","https://cppinstitute.org"],""),
  C_("India","NPTEL Programming in Modern C++","NPTEL, Govt. of India","Intermediate","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly assignments",NPTEL],""),
  C_("Co","TCS NQT (National Qualifier Test)","TCS iON","Entry","Check current fee","https://www.tcsion.com",["Syllabus on TCS iON","https://www.tcsion.com"],["Sample tests on TCS iON","https://www.tcsion.com"],"A hiring test used by many companies; C++ and DSA help a lot."),
  C_("India","GATE Computer Science","IITs / IISc","Advanced","Paid exam","",["Official syllabus on this year's GATE website",""],["Previous years' papers on this year's GATE website",""],"")
 ],
 java:[
  C_("Intl","Oracle Certified Professional: Java SE 21 Developer (1Z0-830)","Oracle","Intermediate–Advanced","Paid exam","https://education.oracle.com",["Exam topics on Oracle University; Dev.java (free)","https://dev.java/learn/"],["Oracle's official practice test (paid) or reputable practice books","https://education.oracle.com"],""),
  C_("Co","Spring Certified Professional","Broadcom (VMware Spring)","Intermediate","Paid exam","https://spring.io/guides",["Spring guides (free)","https://spring.io/guides"],["Study guide on the certification page","https://spring.io"],""),
  C_("India","NPTEL Programming in Java","NPTEL, Govt. of India","Entry","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly assignments",NPTEL],""),
  C_("Co","Infosys Springboard certificates","Infosys","Entry","Free","https://infyspringboard.onwingspan.com",["Free Java courses","https://infyspringboard.onwingspan.com"],["Course assessments","https://infyspringboard.onwingspan.com"],"")
 ],
 python:[
  C_("Free","CS50P certificate","Harvard University","Entry","Free","https://cs50.harvard.edu/python",["Lectures and problem sets","https://cs50.harvard.edu/python"],["Problem sets + final project","https://cs50.harvard.edu/python"],""),
  C_("Intl","PCEP / PCAP – Python Entry / Associate","Python Institute","Entry / Intermediate","Paid exam","https://pythoninstitute.org",["Free Python Essentials courses on Edube","https://edube.org/page/python-essentials"],["Official practice tests via Edube","https://edube.org/page/python-essentials"],""),
  C_("India","NPTEL The Joy of Computing using Python","NPTEL, Govt. of India","Entry","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly assignments",NPTEL],""),
  C_("Co","Infosys Springboard Python certificates","Infosys","Entry","Free","https://infyspringboard.onwingspan.com",["Free courses","https://infyspringboard.onwingspan.com"],["Course assessments","https://infyspringboard.onwingspan.com"],"")
 ],
 sql:[
  C_("Intl","Oracle Database SQL Certified Associate (1Z0-071)","Oracle","Intermediate","Paid exam","https://education.oracle.com",["Exam topics on Oracle University","https://education.oracle.com"],["Official practice test (paid) or reputable books","https://education.oracle.com"],""),
  C_("India","NPTEL Data Base Management System","NPTEL, Govt. of India","Entry–Intermediate","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly assignments",NPTEL],""),
  C_("Free","SQL practice track (HackerRank skill certificate)","HackerRank","Entry–Intermediate","Free","https://www.hackerrank.com/skills-verification",["SQL practice problems","https://www.hackerrank.com/domains/sql"],["The skill test itself","https://www.hackerrank.com/skills-verification"],"Often used by recruiters as a quick SQL check.")
 ],
 frontend:[
  C_("Free","freeCodeCamp Responsive Web Design + JavaScript certifications","freeCodeCamp","Entry–Intermediate","Free","https://www.freecodecamp.org/learn",["Interactive curriculum","https://www.freecodecamp.org/learn"],["Required certification projects","https://www.freecodecamp.org/learn"],""),
  C_("Co","Meta Front-End Developer Professional Certificate","Meta (on Coursera)","Entry–Intermediate","Paid (financial aid available)","https://www.coursera.org/meta",["Course videos and readings","https://www.coursera.org/meta"],["Graded quizzes and projects","https://www.coursera.org/meta"],""),
  C_("India","NPTEL Modern Application Development","NPTEL, Govt. of India","Intermediate","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly assignments",NPTEL],"Check the current course list.")
 ],
 fullstack:[
  C_("Free","freeCodeCamp certifications (front end + back end APIs)","freeCodeCamp","Entry–Intermediate","Free","https://www.freecodecamp.org/learn",["Interactive curriculum","https://www.freecodecamp.org/learn"],["Certification projects","https://www.freecodecamp.org/learn"],""),
  C_("Co","Meta Back-End / Full-Stack certificates","Meta (on Coursera)","Intermediate","Paid (financial aid available)","https://www.coursera.org/meta",["Course content","https://www.coursera.org/meta"],["Graded quizzes and projects","https://www.coursera.org/meta"],""),
  C_("Co","AWS Certified Developer – Associate","Amazon Web Services","Intermediate","Paid exam",AWSC,["Free Skill Builder courses",SB],["Official practice question set on Skill Builder",SB],"For full-stack apps deployed on AWS.")
 ],
 android:[
  C_("Co","Google Associate Android Developer","Google","Entry–Intermediate","Check current status and fee","https://developers.google.com/certification",["Android Basics with Compose (free)","https://developer.android.com/courses/android-basics-compose/course"],["Study guide on Google's certification site","https://developers.google.com/certification"],"Google has changed this programme over time; confirm it is open before you plan for it."),
  C_("Free","Android Basics with Compose badges","Google","Entry","Free","https://developer.android.com/courses/android-basics-compose/course",["Course","https://developer.android.com/courses/android-basics-compose/course"],["Unit quizzes earn badges","https://developer.android.com/courses/android-basics-compose/course"],""),
  C_("Co","Meta Android Developer Professional Certificate","Meta (on Coursera)","Entry–Intermediate","Paid (financial aid available)","https://www.coursera.org/meta",["Course content","https://www.coursera.org/meta"],["Graded quizzes and projects","https://www.coursera.org/meta"],"")
 ],
 ios:[
  C_("Co","App Development with Swift – Certified User","Apple (via Certiport)","Entry","Paid exam","https://certiport.pearsonvue.com",["Develop in Swift tutorials (free)","https://developer.apple.com/tutorials/develop-in-swift"],["Practice tests offered through Certiport","https://certiport.pearsonvue.com"],""),
  C_("Co","Meta iOS Developer Professional Certificate","Meta (on Coursera)","Entry–Intermediate","Paid (financial aid available)","https://www.coursera.org/meta",["Course content","https://www.coursera.org/meta"],["Graded quizzes and projects","https://www.coursera.org/meta"],""),
  C_("Free","Stanford CS193p (no certificate, strong portfolio)","Stanford University","Intermediate","Free","https://cs193p.stanford.edu/",["Lectures, slides and assignments","https://cs193p.stanford.edu/"],["Programming assignments","https://cs193p.stanford.edu/"],"")
 ],
 data:[
  C_("Co","Google Data Analytics Professional Certificate","Google (on Coursera)","Entry","Paid (financial aid available)","https://grow.google/certificates/data-analytics/",["Course content","https://grow.google/certificates/data-analytics/"],["Graded quizzes and a case study","https://grow.google/certificates/data-analytics/"],""),
  C_("Co","Microsoft Power BI Data Analyst (PL-300)","Microsoft","Intermediate","Paid exam",MSL,["Free Microsoft Learn path","https://learn.microsoft.com/en-us/training/powerplatform/power-bi"],["Free official practice assessment on Microsoft Learn",MSL],""),
  C_("India","NPTEL Python for Data Science / Data Analytics","NPTEL, Govt. of India","Entry–Intermediate","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly assignments",NPTEL],"")
 ],
 devops:[
  C_("Co","AWS Certified Cloud Practitioner","Amazon Web Services","Entry","Paid exam",AWSC,["Free Cloud Practitioner Essentials on Skill Builder",SB],["Official practice question set on Skill Builder",SB],""),
  C_("Co","AWS Certified Solutions Architect – Associate","Amazon Web Services","Intermediate","Paid exam",AWSC,["Free Skill Builder courses",SB],["Official practice question set on Skill Builder",SB],""),
  C_("Co","Microsoft Azure Fundamentals and Administrator","Microsoft","Entry / Intermediate","Paid exam",MSL,["Free Microsoft Learn paths",MSL],["Free official practice assessments on Microsoft Learn",MSL],"Check current exam codes on Microsoft Learn."),
  C_("Intl","CKA / CKAD – Certified Kubernetes Administrator / Developer","Linux Foundation + CNCF","Advanced","Paid exam (includes simulator sessions)","https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",["Kubernetes docs (allowed in the exam)","https://kubernetes.io/docs/home/"],["Exam simulator sessions included with registration","https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/"],""),
  C_("Co","HashiCorp Terraform Associate","HashiCorp","Intermediate","Paid exam","https://developer.hashicorp.com/certifications",["Official tutorials","https://developer.hashicorp.com/terraform/tutorials"],["Official sample questions on the cert page","https://developer.hashicorp.com/certifications"],""),
  C_("Co","GitHub Actions certification","GitHub","Intermediate","Paid exam","https://resources.github.com/learn/certifications/",["GitHub Skills","https://skills.github.com"],["Study guide on the cert page","https://resources.github.com/learn/certifications/"],"")
 ],
 cyber:[
  C_("Intl","ISC2 Certified in Cybersecurity (CC)","ISC2","Entry","Check current fee; the free 'One Million' offer is being concluded","https://www.isc2.org/certifications/cc",["Official online self-paced training","https://www.isc2.org/certifications/cc"],["Practice questions in the official training","https://www.isc2.org/certifications/cc"],""),
  C_("Intl","CompTIA Security+","CompTIA","Entry–Intermediate","Paid exam","https://www.comptia.org/certifications/security",["Exam objectives (free download)","https://www.comptia.org/certifications/security"],["Official sample questions on the CompTIA page","https://www.comptia.org/certifications/security"],"Check the current exam code before buying books."),
  C_("Intl","Certified Ethical Hacker (CEH)","EC-Council","Intermediate","Paid; expensive","https://www.eccouncil.org",["Official courseware with purchase","https://www.eccouncil.org"],["Official practice with purchase","https://www.eccouncil.org"],"Popular with Indian employers; do Security+ or CC first."),
  C_("Free","PortSwigger Web Security Academy labs","PortSwigger","Entry–Advanced","Free (paid BSCP exam optional)","https://portswigger.net/web-security",["Free lessons","https://portswigger.net/web-security"],["Hundreds of free hands-on labs","https://portswigger.net/web-security"],""),
  C_("India","NPTEL Cyber Security / Ethical Hacking courses","NPTEL, Govt. of India","Entry–Intermediate","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly assignments",NPTEL],"")
 ]
};
const CERT_TYPES={Intl:"International",India:"National (India)",Co:"Company / vendor",Free:"Free certificate"};
