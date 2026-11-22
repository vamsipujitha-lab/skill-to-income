// Videos for the three new courses (AI Video, Git and GitHub, SAP), chosen 22 Nov 2026.
// Each was found by YouTube search, checked to be online, matched to the topic and reviewed by hand.
// Hindi picks come only from channels that teach in Hindi; where no good Hindi video exists, the topic shows English only.
(()=>{const v=(id,t,ch,len)=>yt(id,t,ch,len);
const MOD=(course,map)=>Object.entries(map).forEach(([m,[en,hi]])=>{const k=course+"::"+m;if(!MODV[k])MODV[k]={en:en||undefined,hi:hi||undefined}});
const T=(course,map)=>Object.entries(map).forEach(([t,x])=>{const k=course+"::"+t;if(!VIDEOS[k])VIDEOS[k]=x});

// ---------- AI Video and Animation ----------
MOD("aivideo",{
 "How AI video works":[v("iO9MiefIpVM","How To Start Making AI Videos in 2026 (Beginner Guide)","Dan Kieft","26:42"),v("e-O2k-0F51w","AI Video बनाना सीखे सिर्फ 5 मिनट में","Manoj Dey","10:32")],
 "AI images":[v("iv-5mZ_9CPY","But how do AI images and videos actually work?","3Blue1Brown and Welch Labs","37:20"),v("e5O9Q-__L8g","Google Flow: Create AI Images & Videos for Free","WsCube Tech","10:07")],
 "Generate clips":[v("0vQ7UEe7rLg","How to Use Google Flow (Step-by-Step Tutorial)","Kevin Stratvert","9:15")],
 "Animation":[v("v7Qv2QrRv1c","How to Make Cartoon Videos With AI (Full Guide)","Roboverse","13:30"),v("6CxjTF577KY","AI se Cartoon Video Kaise Banaye – Step-by-Step Guide","Spreading Gyan","23:50")],
 "Voice and music":[v("yDTbAxJ3sKI","How to Use ElevenLabs AI (Complete Voiceover Beginner Tutorial)","Kevin Stratvert","10:58"),v("jh-LbHGN2oE","How to Use ElevenLabs – Features Explained in Hindi","The Next Signal","32:11")],
 "Editing":[v("aCTJ7MjpAOw","DaVinci Resolve 21 Beginners Tutorial","Ben Claremont","14:14"),v("LKYcLmF0akc","1 Hour DaVinci Resolve Full Course (Hindi)","Cinemasters Films","1:05:42")],
 "Run models yourself":[v("hl7kwMwkLJU","How to Use ComfyUI (Step-by-Step Tutorial)","Kevin Stratvert","9:10"),v("-ojpZgDsxKw","ComfyUI Tutorial for Beginners, in Hindi","AI Tech Gyan","19:29")],
 "Earn with AI video":[v("7ccb8ArAqMs","How To Actually Make Money With AI Video","Dan Kieft","14:35"),v("uJO7Nlh1_Dk","AI Generated Videos Monetization Rules 2026 (YouTube AI policy)","Technical Yogi","4:54")]});
T("aivideo",{
"What AI video tools can do":{en:v("v6bqRIjwddE","AI Video Generators Ranked from Worst to Best (2026)","Youri van Hofwegen","19:13")},
"Choosing a tool":{en:v("2SfZSn-Uca8","Best Free AI Video Generators 2026 (Backed by Data)","Youri van Hofwegen","11:05")},
"Prompting for video":{en:v("zzBmvzR-URg","The Only 7 Prompts You Need to Create Any AI Video","Tao Prompts","18:15")},
"Safe and legal use":{hi:v("PZSQWqV36pI","DeepFake Frauds: Craziest Tech of the Century","Professor Of How","16:10")},
"Text to image basics":{en:v("6RAStep_3OI","How to Write Great Prompts for AI Image Generators","Learn With Shopify","20:38"),hi:v("9aQURsT7pGY","AI se photo kaise banaye – Gemini and ChatGPT","Honey4u","5:43")},
"Consistent characters":{en:v("h5kjDJrHw_g","How to Actually Make 100% Consistent AI Characters","Youri van Hofwegen","13:07"),hi:v("oi98KpzUdTc","Create Consistent AI Characters with Google Whisk AI","WsCube Tech","20:04")},
"Storyboards":{en:v("xZx5940qoKE","How to Storyboard Realistic AI Videos with Google Flow","Youri van Hofwegen","10:49"),hi:v("JOaR-v2oPJg","AI Movies with Consistent Characters – Google Flow Storyboard Studio","Hindi AI Gyaan","13:32")},
"Upscaling and cleanup":{en:v("KaxP4to5szQ","Best 3 Free Image Upscalers + Comparison","PiXimperfect","9:37")},
"Text to video":{en:v("19Fupw7xlN0","How to Make Your First AI Video Today For Free","Roboverse","8:20"),hi:v("xJhbirj2tnw","AI video kaise banaye – Text to video AI free","Digital Raj","13:09")},
"Image to video":{hi:v("8nU3yQzetb0","Image To Video AI Free – Hindi","Learn AI with Ritika","6:09")},
"Camera moves and shot types":{en:v("7GWd4PV3hoA","All Camera Movement Prompts for AI Filmmaking Explained","Dan Kieft","14:14")},
"Start and end frames":{en:v("bPzrNVZnQqY","Using Start & End Image for Video Generation","Magnific","3:47")},
"Video with sound and dialogue":{en:v("IjF5Uun2jrM","Google Veo 3 Tutorial: Make Cinematic AI Videos with Just a Prompt","Kevin Stratvert","6:30"),hi:v("F8MvAbu7Vm8","Make AI Videos with Dialogues + Lip Sync – Full Workflow","Learn AI with Ritika","10:09")},
"Keeping a story consistent":{en:v("dOmKYJoRboE","How to Make Long AI Videos with Consistent Characters (2026)","Isa does AI","13:34"),hi:v("4RAV9Rmv3aU","Google Flow Characters Tutorial – Same Character Every Scene","Raj Pasi","11:35")},
"2D animation with AI":{en:v("_X7KQVwsn9U","How to Make Studio-Quality AI Animation (Full Guide)","Jack Vs. AI","18:33"),hi:v("XYryeerdAuU","30 मिनट का AI Cartoon Video कैसे बनाएं – Full Guide","Yt Aman Tech","23:52")},
"Lip sync and talking characters":{en:v("X2JDKlhhPtU","How to Create Full AI Animated Stories with Lip Sync","Dan Kieft","6:24"),hi:v("dWC3kbft3Bw","AI Lip Sync – Make Anything Talk","Yt Seva","9:40")},
"AI avatars and presenters":{en:v("oM_wcCJzhe4","HeyGen AI Tutorial: How to Use AI Avatars & Video Generator","Kevin Stratvert","10:04"),hi:v("mxuvrPwimyY","How To Create Realistic Talking AI Avatar (HeyGen Tutorial)","Hindi AI Gyaan","9:08")},
"Motion graphics in Canva":{en:v("Hkm3ldGwd6Y","Motion Graphics Tutorial – Canva Animation for Beginners","Webon","7:43"),hi:v("fnhh480L1U8","Cartoon Animation Videos Tutorial in Canva","Canva with Shruti!","8:15")},
"AI voiceover":{en:v("Vs6vJwmJL0Y","How to make AI Voiceovers that sound Human","ElevenLabs","8:19"),hi:v("oGvFRQv8XdU","AI voice kaise generate kare – Text to speech","Tech Aakash Help","10:21")},
"AI music and sound effects":{en:v("MI6vwl_ZHN8","Suno AI Tutorial For Beginners (2026)","Simon Crowe","20:19"),hi:v("1KST4DLfMjM","Suno AI Se Song Kaise Banaye (Hindi Tutorial)","BeatPro Music Production","18:55")},
"Editing in CapCut":{en:v("j5_471mO14c","CapCut Tutorial for Beginners – Full Video Editing Guide","Metics Media","14:17"),hi:v("fL-0G-2b3Sg","CapCut Video Editing Tutorial – Hindi","Tausif Khalid","1:43:16")},
"Editing in DaVinci Resolve":{en:v("DF95K5cNuio","DaVinci Resolve Beginner Tutorial (15 Minutes)","Kevin Stratvert","15:50"),hi:v("7_NGChHNnPA","DaVinci Resolve Full Course in Hindi – Day 01","Ajay Jangra Visuals","16:00")},
"Auto captions and subtitles":{en:v("YddyvmAFxnY","How to Create Smooth Style Captions in CapCut","Matt Loui","5:55"),hi:v("givWAfcITdQ","Video Me Hinglish Captions Kaise Lagaye","Ka Production","12:17")},
"Colour and export settings":{en:v("ReYsGTwHHcw","How to Edit Shorts & Reels in DaVinci Resolve (Start to Finish)","Think Media","22:34"),hi:v("5uLC4qUttoY","Best Reels/Shorts Export Settings for DaVinci Resolve – Hindi","AkashKRavi","5:49")},
"ComfyUI basics":{en:v("23VkGD-4uwk","How to use ComfyUI for beginners","Sebastian Kamph","39:12")},
"Open video models":{en:v("CfdyO2ikv88","How To Use WAN 2.2 in ComfyUI: The Best Free AI Video Model","MDMZ","16:41")},
"Faceless YouTube channel":{en:v("OTLxMmrMyYo","How to Make a Faceless YouTube Channel – Full Course","Tube Wealth","12:30"),hi:v("sm4_TP5VJts","YouTube Faceless Channel Monetization Rules – Complete Guide","Technical Yogi","10:11")},
"Ads and reels for local businesses":{en:v("vpZRulyZe0s","How to Make TikTok Ads With AI (Full Tutorial)","Youri van Hofwegen","13:07"),hi:v("ZhMxaXgB9E4","How to Make Cinematic Ads with AI (Full Tutorial)","Technical Yogi","15:20")},
"Portfolio and showreel":{en:v("bYC4kL1PN-Y","How to make a Showreel that gets you Hired","Grant M. Fletcher","10:56"),hi:v("QVSjssLTrPc","How to make the Best Video Editing Portfolio","Abhay PS Rajawat","9:14")},
"Pricing and freelancing":{en:v("k3A4XPtcON0","How To Become a Freelance Video Editor in 90 Days","Gavin Herman","8:54"),hi:v("HmJOJzko_5c","Freelance Video Editing से Career कैसे शुरू करें","Mahatmaji Technical","12:47")}});

// ---------- Git and GitHub ----------
MOD("github",{
 "Git on your computer":[v("8JJ101D3knE","Git Tutorial for Beginners: Learn Git in 1 Hour","Programming with Mosh","1:09:13"),v("Ez8F0nW6S-w","Complete Git and GitHub Tutorial for Beginners","Apna College","1:14:17")],
 "Branching and merging":[v("Q1kHG842HoI","Git Branching and Merging – Detailed Tutorial","SuperSimpleDev","54:28"),v("tsoa9wdSKAk","Master Git & GitHub – Part 3: Branching","Sheryians Coding School","48:34")],
 "Working on GitHub":[v("a9u2yZvsqHA","How To Use GitHub For Beginners","corbin","10:29"),v("q8EevlEpQ2A","Complete Git and GitHub course in Hindi","Chai aur Code","2:54:56")],
 "Collaboration":[v("mqJIGIxRkEs","How to make a Pull Request and Open Source contribution","Hitesh Choudhary","24:46"),v("o6xikISiz2w","Open Source Crash Course – Beginner Guide","Piyush Garg","33:25")],
 "Actions and Copilot":[v("R8_veQiYBjI","GitHub Actions Tutorial – Basic Concepts and CI/CD Pipeline","TechWorld with Nana","32:31"),v("5Us_oDjaNNE","What are GitHub Actions – Step by Step for Beginners (Hindi)","Automation Step by Step (Hindi)","25:51")]});
T("github",{
"What version control is":{en:v("e9lnsKot_SQ","How Git Works: Explained in 4 Minutes","ByteByteGo","4:18"),hi:v("d50BUkHbB2o","What is Version Control – with Real Life Example","Gate Smashers","9:08")},
"Install and set up Git":{en:v("t2-l3WvWvqg","How to install Git on Windows 11","Amit Thinks","4:46")},
"init, add and commit":{en:v("eL_0Ok_Gkas","Git Tutorial 4: Basic Commands – add, commit, push","codebasics","16:35"),hi:v("JXiJNCtWmcA","How to add, commit in Git and push to GitHub (Hindi)","Technical Guftgu","1:17:45")},
"status, log and diff":{en:v("vXN50AmJjgY","Git Diff – Explained","A shot of code","8:37")},
".gitignore":{en:v("ErJyWO8TGoM","Git Tutorial 8 – .gitignore file","codebasics","3:18")},
"Undoing changes":{en:v("GytsxgB4-HU","Undo a git commit – git reset / revert","Philomatics","3:28")},
"Branches":{en:v("e2IbNHi4uCI","Git Branches Tutorial","freeCodeCamp.org","33:20"),hi:v("6QNgbD2m7gA","Git Branching and Merging – Detailed Tutorial in Hindi","Code with RSV","17:40")},
"Merging":{en:v("0chZFIZLR_0","Git Merge vs Rebase: Everything You Need to Know","ByteByteGo","4:34")},
"Merge conflicts":{en:v("DloR0BOGNU0","Never fear merge conflicts again – git merge/pull tutorial","Philomatics","5:12"),hi:v("l03tGz4pXoQ","How to Resolve Merge Conflicts in Git","Piyush Garg","24:17")},
"Rebase":{en:v("f1wnYdLEpgI","Learn Git Rebase in 6 minutes","The Modern Coder","6:43"),hi:v("p4Cke4D4d1M","git rebase in Hindi","Code TryIt","9:10")},
"Stash and cherry-pick":{en:[v("lH3ZkwbVp5E","Git Stash In 5 Minutes","Colt Steele","4:54"),v("i657Bg_HAWI","Git Cherry Pick Tutorial","The Modern Coder","4:42")]},
"Tags and releases":{en:v("govmXpDGLpo","Git Tags – what, why, when and how","Automation Step by Step","10:42")},
"GitHub account and profile README":{en:v("rCt9DatF63I","How to create a Professional GitHub Readme Profile","Cloud Champ","8:29")},
"push, pull and clone":{en:v("yxvqLBHZfXk","How to clone, push, and pull with git","Tony Teaches Tech","12:04"),hi:v("tk4s7o-ZGhk","Git Push And Pull – Upload Local Project To GitHub (Hindi)","Ajay yadav","8:55")},
"SSH keys and tokens":{en:v("snCP3c7wXw0","How to set up SSH for a GitHub repository","Codemify","9:58"),hi:v("xkhUH9Fx2z8","How To Create and Add SSH Key to GitHub (Hindi)","ProgRank","6:11")},
"Pull requests and code review":{en:v("nCKdihvneS0","How to create a pull request in 4 min – GitHub for Beginners","GitHub","3:44"),hi:v("dcCR86PtS-8","What is a Pull Request – Create, Review, Merge","Aman Jat","10:54")},
"Issues and Projects":{en:v("c67GaAkf1BE","How to use GitHub issues and projects – GitHub for Beginners","GitHub","7:58")},
"GitHub Pages":{en:v("e5AwNU3Y2es","How to Host a Website on GitHub Pages Free (Custom Domain)","IdeaSpot","5:32"),hi:v("4eMnz8VbgyM","Host Website for Free using GitHub Pages","Coding Shuttle by Anuj Bhaiya","7:57")},
"Forks and your first contribution":{en:v("dLRA1lffWBw","How to contribute to open source projects","Web Dev Cody","11:49")},
"Branching strategies":{en:v("GQQqf-C2ha4","3 Git Workflows Every Developer Should Know","TechWorld with Nana","31:32")},
"README, LICENSE and CONTRIBUTING":{en:v("E6NO0rgFub4","How To Write a Useful README On GitHub","Learn Fast Make Things","8:27"),hi:v("Rtpu2cWz7W8","One tool to create README files quickly","CodeWithHarry","6:54")},
"Branch protection and rules":{en:v("CNCE1gts2Yw","GitHub branch rules (protect your git branches)","Eddie Jaoude","7:43")},
"Good commit messages":{en:v("OJqUWvmf4gg","Write git commit messages like a pro with Conventional Commits","Justin Brooks","4:08")},
"GitHub Actions basics":{en:v("Xwpi0ITkL3U","Complete GitHub Actions Course – Beginner to Pro","DevOps Directive","3:42:36"),hi:v("y7S2oSjJ8PA","GitHub Actions Tutorial – Deploy a Node.js App with CI/CD","Piyush Garg","33:25")},
"Dependabot and security alerts":{en:v("TnBEVPUsuAw","Dependabot on GitHub","CJ Avilla","8:05")},
"GitHub Copilot":{en:v("SJqGYwRq0uc","How to use GitHub Copilot (the complete beginner's guide)","GitHub","1:33:24"),hi:v("pOHIe_tJjow","GitHub Copilot Tutorial in Hindi, for Beginners","AI Tech Gyan","10:36")},
"Codespaces":{en:v("kvJf8s18Vr4","How to use GitHub Codespaces","Data Professor","11:53")},
"GitHub certifications":{en:v("2-QiORv6wew","Passed the GitHub Foundations Certification in 1 day","Rishab in Cloud","8:28")}});

// ---------- SAP Career Starter ----------
MOD("sap",{
 "Understand SAP":[v("RZGVPezxwSs","What Is SAP For Beginners?","ERP is Easy","6:27"),v("XbqwUiBcDK4","What is SAP S/4HANA? Job opportunities and why learn it","Veer Tutorial","12:14")],
 "Structure and master data":[v("wsFOqgz7tTA","What is SAP S/4HANA? Introduction to SAP ERP","Digital Transformation with Eric Kimberling","11:16")],
 "Finance (FICO)":[v("ER4xnUGztaE","What is SAP FICO – Introduction and Basics","Learn with Whiteboard","7:21"),v("D0A4c6x1hwY","What is SAP FICO? Full Beginner's Tutorial Step by Step","Tally Tutorial","12:10")],
 "Materials management (MM)":[v("jkxtXXWqMqo","What is SAP MM – Introduction to SAP MM Basics","Learn with Whiteboard","4:46"),v("5roD5Zr_NO4","SAP MM Course in Hindi – Complete SAP MM Course","Himanshu Aggarwal","1:39:16")],
 "Sales and distribution (SD)":[v("7YUkIyTSZoY","What is SAP SD – Introduction to SAP SD Basics","Learn with Whiteboard","4:57"),v("4tQvNkfRvj8","SAP SD Full Process: Sales Order → Delivery → Billing","SAP Information with Rahul sahu","16:05")],
 "ABAP and BTP":[v("xRwqUqFz5Zs","What is SAP ABAP? For Beginners","ERP is Easy","7:17")],
 "Implementation and jobs":[v("XtCcbadFbYI","SAP Implementation Project Explained with a Real-Time Example","7C SAP","9:14")]});
T("sap",{
"What ERP is":{en:v("Da1hUqzoiAo","What is Enterprise Resource Planning (ERP) Software?","IBM Technology","10:24"),hi:v("7ueqEsQ2bk4","ERP Software क्या होता है? – What is ERP in Hindi","Deepak TechTimes","3:19")},
"SAP products today":{en:[v("T6keCslui-w","What Is SAP S/4HANA For Beginners?","ERP is Easy","5:42"),v("ZotakKV7O34","What Is SAP BTP For Beginners?","ERP is Easy","8:08")]},
"Business processes":{en:[v("G9J2Oe2egIw","Procure to Pay (P2P) Cycle","Supply Chain Doctrine","6:18"),v("E8Pcc9XkuQg","Order to Cash (O2C) Process Overview and Accounting Entries","Galal Academy","4:11")],hi:v("UQUNDvD8scY","Procure to Pay and Order to Cash Cycle in SAP FICO","Himanshu Aggarwal","14:25")},
"SAP navigation and Fiori":{en:v("87HSHM3cFY8","What is SAP Fiori? Benefits, Types and Design Principles","Learn with Whiteboard","3:52")},
"SAP job roles":{en:v("Fg2YHTEfKeQ","Is SAP Still a Good Career Choice in 2026?","Rahul Narain Saxena","3:31")},
"Choosing your module":{hi:v("trq34bOnMHU","Top SAP Modules in Demand – MM, SD, PP, FICO Explained","Backseat Engineer","7:39")},
"Organisational structure":{en:v("IBZNBdD18HQ","Enterprise / Organisation Structure – SAP MM Configuration","SAP Tutorials - Santosh","45:55"),hi:v("uFEM5SoMwD4","How to create Enterprise Structure in SAP MM","SAP Learning","14:30")},
"Master data":{en:v("mIlBYrnxygI","Master Data in SAP MM – Introduction and Key Concepts","SAP MM Learning Hub","19:02")},
"Integration between modules":{en:[v("6EK1dO70Zpw","MM–FI Integration: Procure to Pay Cycle in S/4HANA","Vikram F, Gaurav Learning Solutions","37:21"),v("LQVjMqWuat0","SD–FI Integration: Order to Cash Cycle in S/4HANA","Vikram F, Gaurav Learning Solutions","29:54")],hi:v("zWYbCg9peHQ","SAP FI–MM Integration Configuration – P2P Cycle","Himanshu Aggarwal","56:20")},
"Reports and analytics basics":{en:v("Ykv_3cgwSgQ","SAP Analytics Cloud – Step by Step Tutorial for Beginners","Data Storyteller","13:27"),hi:v("NjJazSHIqfg","How to Make a Report in SAP and change its layout","SAP Information with Rahul sahu","8:32")},
"General ledger":{hi:v("U0bT0iAJW9A","SAP GL Module Complete Guide – Beginner to Expert","Accounts Expert","3:14:35")},
"Accounts payable and receivable":{en:v("3rlBBqqgp7M","SAP Accounts Payable Process","My Support Solutions","14:07"),hi:v("JPdU1kNrGj0","Accounts Payable in SAP FICO – Vendor, GL, Invoice, Reports (Hindi)","Sikhlo Bas","54:20")},
"Asset accounting":{en:v("b-Ur-xCa4Pc","New Asset Accounting in SAP S/4HANA","Vikram F, Gaurav Learning Solutions","1:36:47")},
"Controlling and cost centres":{en:v("139Obv9Im20","Cost Center Accounting in SAP FICO","Pradeep Kumar Hota","57:21")},
"GST in SAP":{en:v("cDaUI9nYk84","SAP Taxes on Sales & Purchase – SAP GST Setup","Vikram F, Gaurav Learning Solutions","55:54")},
"Purchase requisition to purchase order":{en:v("t90_LUAWPVo","SAP ME21N – Convert Purchase Requisition to Purchase Order","Efficient eLearning","17:38")},
"Goods receipt and invoice verification":{en:[v("-rmGIANGv0g","Goods Receipt in SAP – MIGO","My Support Solutions","8:55"),v("NOZPJZoauWE","Invoice Verification in SAP MM – MIRO","My Support Solutions","9:20")]},
"Inventory management":{hi:v("jRklSEt0gyI","Most Important Movement Types in SAP","SAP Information with Rahul sahu","9:47")},
"MRP basics":{en:v("u3P6YMI5Ah0","What is Material Requirement Planning (MRP)? MRP Process in 8 Minutes","Educationleaves","8:02")},
"Sales order cycle":{en:v("7F5vjkZhfYw","Order-to-Cash Process in SAP SD – Step by Step","ERP LearningBase","11:43")},
"Pricing and conditions":{en:v("veqAKi9qIk8","Pricing Procedure in SAP SD – Condition Technique","LEARN2WIN SAP","11:42")},
"Credit management":{en:v("Yke487suyf0","SAP S/4HANA Credit Management: Full Simple Process Demo","Galal Academy","9:11")},
"ABAP basics":{en:v("43LG7Qkkx7Q","SAP and ABAP basics – Introduction Part 1","SAP ABAP by Rahul Mehta","15:49")},
"ABAP in Eclipse (ADT)":{en:v("dJosT0kloJ0","Install ABAP Development Tools (ADT) for Eclipse","Cust&Code in SAP ABAP","9:38")},
"Core Data Services (CDS)":{en:v("_846kzfcANc","ABAP CDS Views Introduction","Just2Share","13:39")},
"RAP basics":{en:v("i0A9iZ_46fI","A Beginner's Guide to the ABAP RESTful Application Programming Model","SAP Developers","52:12")},
"SAP BTP trial account":{en:v("Zuq1VKp4rxM","SAP BTP Free Trial Account Creation","SAP with Deepak","7:08")},
"SAP Activate methodology":{en:v("PAINpl-x3Vk","SAP Implementation Methodology – SAP Activate for S/4HANA","SAP with IK","21:33")},
"Fit-to-standard and configuration":{hi:v("YMqg2OSDGHk","Real-Time Discussion on Gap Analysis in an Implementation Project","Ganesh SAP SCM","19:03")},
"Data migration":{en:v("d_QnIBrehVI","Data Migration Cockpit Demo in SAP S/4HANA","Galal Academy","40:26")},
"Testing in SAP projects":{en:v("3BLJn4iJxnI","Types of Testing and Support Projects in SAP","Ganesh SAP SCM","9:55")},
"SAP certification":{en:v("G3Q3abCM-qo","SAP Certification in 2026 – Free for Students, SAP Learning Hub","ERP is Easy","10:05"),hi:v("jPtXV5CHzwI","SAP Certifications Free for Students and Professors (2026 Update)","Aman Jindal","12:48")},
"Resume and interviews":{en:v("mvGtIZT3TLo","SAP FICO Interview of a Fresher – Mock Interview","TECH CONCEPT HUB","30:26"),hi:v("BkJV5N1L_GA","Most Important SAP MM Interview Questions","SAP Information with Rahul sahu","15:47")}});

// ---------- Cloud + core-branch courses: one EN and one HI video per module (HI confirmed from YouTube captions) ----------
MOD("cloud",{
 "Cloud concepts":[v("_a6us8kaq0g","Cloud Computing Explained","PowerCert Animated Videos","8:37"),v("8C_kHJ5YEiA","What is Cloud Computing?","Apna College","5:10")],
 "AWS hands-on":[v("Nzv-tzU-UAw","AWS Tutorial for Beginners – Step-by-Step Guide","Kevin Stratvert","21:52"),v("VLjlle_8bwE","What is Amazon Web Services? AWS Overview for New Users [HINDI]","M Prashant","11:06")],
 "Microsoft Azure":[v("NKEFWyqJ5XA","Microsoft Azure Fundamentals Certification Course (AZ-900)","freeCodeCamp.org","3:10:26"),v("srh5q2_80n4","Azure Course for Beginners – Full Tutorial in Hindi","Happy Rawat","1:54:45")],
 "Google Cloud":[v("OwF9-K5JFb8","Google Cloud Tutorial for Beginners – 50 Services in 50 Minutes","in28minutes","39:20"),v("CTIJWijru9E","Top 40 Google Cloud Services in 30 Minutes","Vishakha Sadhwani","29:47")],
 "Well-architected cloud":[v("MpDJ6TCWKjk","What is the AWS Well-Architected Framework?","Tech With Lucy","9:18"),v("3WZzmiAkYBQ","Top AWS Services Explained – System Design","Piyush Garg","32:13")],
 "Get certified":[v("roi905rA8Zw","Pass AWS Cloud Practitioner in 100 Minutes (CLF-C02)","Cram Exam","1:45:25"),v("ZIfqMYdqNVc","AWS Certified Cloud Practitioner Exam Tips (Hindi/Urdu)","Technical Guftgu","16:25")]});
MOD("embedded",{
 "Basic and digital electronics":[v("2xXErGeeb_Q","Introduction to Digital Electronics","Neso Academy","6:38"),v("c66U-7b7clE","Digital Electronics One Shot","GateWay Classes","3:43:00")],
 "Embedded C and GPIO":[v("j4xw8QomkXs","Getting Started with Bare-metal Arduino C Programming","Low Level","11:03"),v("iTUo5YSgb_s","What is Embedded Systems in Hindi? Role of Embedded Engineers","IoTGyaan","6:10")],
 "Serial buses":[v("IyGwvGzrqp8","Serial Communications Explained: UART, I2C and SPI","Electronoobs","11:58"),v("OF49fnNMHhw","Complete I2C Communication Protocol Explained in Hindi","Engineers & Electronics","12:30")],
 "ARM Cortex-M and RTOS":[v("hArOFZlov9c","How to use FreeRTOS with an STM32 Microcontroller","BINARYUPDATES","28:23")],
 "Connected devices":[v("x5A5S0hoyJ0","Simple ESP32 IoT Sensor Node: Wi-Fi MQTT Sensor Data","Learn Embedded Systems","10:58"),v("23uJtyiGs4g","All about ESP32","Perfect Computer Engineer","3:19")],
 "Embedded career":[v("LLVcy3lIErY","Embedded System Interview Questions and Answers","Easy Electronics","16:12"),v("C4xZKxlWS2w","Embedded System Engineering Roadmap: Skills, Courses, Salary","Ujjwal Kumar Sen","13:48")]});
MOD("pcb",{
 "Schematic capture":[v("vLnu21fS22s","Build a KiCad Project Schematic – Part 1","HTM Workshop","9:12"),v("rHwkqxUNwRY","How to Design Your Own PCB in KiCad – for Beginners (Hindi)","ElectroTech CC","19:38")],
 "Board layout":[v("aVUqaB0IMh4","KiCad STM32 PCB Design Full Tutorial","Phil's Lab","1:40:06")],
 "Design for performance and manufacture":[v("pgJfOklQwNA","Top 5 PCB Grounding Mistakes","Hans Rosenberg","12:16"),v("nYevrbAcmbI","What is PCB? Types, Layers and Manufacturing Process (Hindi)","IoTGyaan","5:40")],
 "Fabrication and testing":[v("pGRm7nT1zaw","Generating Gerber Files in KiCad for Manufacture","The EV Engineer","5:14"),v("j5K_iPS1gLU","How to Order a PCB Online (Hindi)","Debasish Experiment","5:51")]});
MOD("vlsi",{
 "Digital logic":[v("EW_2MhFu7tE","Logic Gates and Boolean Algebra","Najam Academy","21:38"),v("t4jKBFuFZGA","Digital Logic 01: Logic Gates (GATE crash course)","GeeksforGeeks GATE","3:50:21")],
 "Verilog":[v("2IReMT_zjK8","The best way to start learning Verilog","Visual Electric","14:50"),v("SlAL_iGgG08","Verilog Full Course in Hindi (3 Hours)","VLSI POINT","3:15:00")],
 "SystemVerilog and UVM":[v("U18k9TDP5uw","SystemVerilog Classes 1: Basics","Cadence Design Systems","8:46"),v("tuavqVXFF18","Introduction to SystemVerilog (Hindi)","VLSI POINT","12:58")],
 "Synthesis and physical design":[v("6M52YKLH7FU","VLSI Physical Design Flow Overview","Physical Design World","8:10")],
 "VLSI jobs":[v("8WdYWx48ac8","The Ultimate VLSI Roadmap: How to Get into the Semiconductor Industry","Sanchit Kulkarni","21:46"),v("SvbC_WDPfpc","What is VLSI? Career, Salary and Future Scope","GeeksforGeeks EC, EE & IN","22:53")]});
MOD("powerev",{
 "MATLAB and Simulink":[v("ajVN2Pd-p20","Simulink Quick Start for Student Competition Teams","MATLAB","19:28"),v("G5RPZE9nOAc","What is Simulink? Complete Introduction [Hindi]","WsCube Tech","17:45")],
 "Machines":[v("59HBoIXzX_c","How Electric Motors Work – 3-phase AC Induction Motors","The Engineering Mindset","15:34"),v("Vz1yJaTvb9A","Electric Machines One Shot (First Year Engineering)","Pradeep Giri Academy","35:29")],
 "Power systems":[v("v1BMWczn7JM","How Does the Power Grid Work?","Practical Engineering","10:25"),v("zeSEFsR-jZA","Introduction to Power Systems","Kreatryx GATE – EE, ECE & IN","56:00")],
 "Converters and drives":[v("f7oXhDatwtY","Lecture 1: Introduction to Power Electronics","MIT OpenCourseWare","43:22"),v("4F8wyBp4odw","What is Power Electronics?","Kreatryx GATE – EE, ECE & IN","9:20")],
 "EV systems":[v("XU2xd2b-GTs","How Do Electric Vehicles Work? Charger, Battery, Motor Explained","CNET","4:23"),v("SvapQgNrKSw","How Electric Cars Work (Hindi)","Tech Baba","6:12")],
 "Power and EV jobs":[v("qNpcZdkXlGc","Electrical Basics Interview Questions and Answers","The Electrical Guy","6:32"),v("4tU7qqvRusg","Electrical Interview Questions and Answers (Hindi)","Rajeshtop Electrical","4:55")]});
MOD("plc",{
 "Industrial basics":[v("uOtdWHMKhnw","Programmable Logic Controller Basics Explained","The Engineering Mindset","15:11"),v("8GedzJwfhjQ","What is Industrial Automation, PLC Panel, HMI and SCADA?","Niket Shah Plus","12:39")],
 "Ladder logic and more":[v("1WQ70KJu6EY","PLC Basics: Ladder Logic","This is Automation","26:20"),v("iGoqRQcB3S0","PLC Basics for Beginners – How a PLC Works (Hindi)","Automation Training Hindi","55:44")],
 "Supervisory control":[v("nlFM1q9QPJw","What is SCADA?","RealPars","8:09"),v("fCLXreIlkG4","SCADA Explained in Hindi","5 Minutes Engineering","7:50")],
 "On the shop floor":[v("FsC8iUT8QFU","PLC Panel Power and Control Wiring Explained","RAM CONTROL TECH","5:32"),v("ID_JvKYvE8Y","Industrial PLC Panel Wiring (Hindi)","Electrical And automation","11:06")]});
MOD("cad",{
 "Drawing basics":[v("dKNnTxwSS-Q","Orthographic Projection from Isometric View","ADTW Study","9:13"),v("u4Ku-ZABzzo","How to Read Engineering Drawings – GD&T Video 1 (Hindi)","CNC CAD CAM Academy of Sigma Youth Engineers","16:01")],
 "Part design":[v("7lKpzGtoQX0","Fusion 360 Beginners Guide – 30-minute Guide to 3D Design","Design Forge","31:24"),v("Gp6TqLac6Gs","SolidWorks Tutorial in Hindi – Learn in 3 Hours","Design To Future","3:16:56")],
 "Assemblies":[v("XcOzOMelEyc","Beginners Guide to SOLIDWORKS: Assembly Modeling","SOLIDWORKS","8:30")],
 "Geometric tolerancing":[v("G7wnGeR_69k","Understanding GD&T","The Efficient Engineer","29:32"),v("KyrWfrfvkWc","Engineering Drawing GD&T: Concentricity, Parallelism, Perpendicularity (Hindi)","Magician of CNC Machining","26:09")],
 "Design jobs":[v("hcAlUoHKn0c","Essential Skills Every Mechanical Engineering Fresher Must Learn","SourceCAD","10:14"),v("0_Z4v2QcSgI","How to Become a Design Engineer after Mechanical Engineering (Hindi)","Gemba Gyan","8:33")]});
MOD("cae",{
 "Mechanics you need":[v("aQf6Q8t1FQE","An Introduction to Stress and Strain","The Efficient Engineer","10:02"),v("8CP714_wKVk","Introduction to Strength of Materials","Engineers ki Pathshala by Umesh Dhande","30:20")],
 "FEA practice":[v("GHjopp47vvQ","Understanding the Finite Element Method","The Efficient Engineer","18:36")],
 "CFD practice":[v("F0gDV6Ykc5A","What is CFD? – Lesson 1","Ansys Learning","4:40")],
 "Optimisation and career":[v("PMcP7mK1Zec","ANSYS Topology Optimization","DrDalyO","14:48"),v("XcXENyRUcQA","SolidWorks Simulation Topology Optimisation (Hindi)","SOLIDWORKS AND ANSYS TUTOR","9:09")]});
MOD("mfg",{
 "Processes":[v("Um_g8sQ_p3Y","How Things Are Made – An Animated Introduction to Manufacturing Processes","The Efficient Engineer","10:29"),v("WVOk5FUqbGs","Manufacturing Processes Classification (Hindi)","Gear Institute","8:07")],
 "CNC programming":[v("5XihF05K4yM","G and M Code – Manual Programming on a CNC Machine","TITANS of CNC MACHINING","26:32"),v("RCie2GrL6JM","Complete CNC Programming in 3 Hours (Hindi)","CNC CAD CAM Academy of Sigma Youth Engineers","3:13:04")],
 "Additive manufacturing":[v("2vFdwz4U1VQ","3D Printing 101: The Ultimate Beginner's Guide","The 3D Printing Zone","30:49"),v("U94Qg0AIjcA","Learn 3D Printing Step by Step (Hindi)","3DPrintingMonk","8:57")],
 "Quality systems":[v("s2HCrhNVfak","Lean Six Sigma in 8 Minutes","Simplilearn","8:08"),v("1oiKYydbrSw","What is Six Sigma? Learn Six Sigma in 30 Minutes","Quality HUB India","30:03")]});
MOD("civilcad",{
 "Plans and conventions":[v("e5GVlJ_N68I","How to Read Construction Drawings – Beginners Guide","Kienen Koga","16:18"),v("cAOkofzoL5s","How to Read the Drawing of a Building (Hindi)","Civil Engineer Deepak Kumar","5:11")],
 "AutoCAD":[v("hO865EIE0p0","Making a Simple Floor Plan in AutoCAD: Part 1","SourceCAD","12:17"),v("iCLGQNEAs7o","AutoCAD Basics for Beginners in Hindi","MicroCADD By Er. Mukhtar Ansari","16:34")],
 "Estimation and costing":[v("8DX4T64-fpk","Introduction to Cost Estimation Methods in Construction","Cost Engineering Professional","35:11"),v("r0aDjTLxy5c","Building Estimation and Costing","Civiconcepts – Bhushan Mahajan","1:03:43")],
 "Site engineering":[v("u2iSS85hwAs","Duties of a Civil Site Engineer","Engineering Infinity","3:31"),v("QsEUrnPVFAA","Important Points Every Site Engineer Should Know","The Institute of Construction Managment","9:20")]});
MOD("structural",{
 "Analysis":[v("C-FEVzI8oe8","Understanding Shear Force and Bending Moment Diagrams","The Efficient Engineer","16:23"),v("b9qYyNq-c5E","Introduction to Structural Analysis","Engineers ki Pathshala by Umesh Dhande","23:13")],
 "Reinforced concrete (IS 456)":[v("Zop0L689DO8","Design of Singly Reinforced Beam – Limit State Method","Parash Joshi","9:25"),v("6-z5xBpNWBA","RCC Footing Design by IS 456:2000 (Hindi)","Civil Engineering by Shravan","17:14")],
 "Analysis software":[v("GL5_TR9SCaE","Learn Complete Building Design in STAAD Pro for Beginners","Civil Engineering by Shravan","34:53"),v("lzX4j_bbjmM","Complete STAAD.Pro Tutorial – Live Project","PTS CAD EXPERT","3:44:12")],
 "Advanced and career":[v("c4fKBGsllZI","How We Design Buildings to Survive Earthquakes","Seeker","3:58"),v("ELCQkwPWf2w","Earthquake Resistant Building Design (Hindi)","Civil Notebook","13:39")]});
MOD("bim",{
 "What BIM is":[v("sZygHGWiHc8","What is BIM? Understand Building Information Modeling","Civil Mentors","7:29"),v("Q_YaEpadgyQ","What is BIM? Uses and Advantages","REINFORCE","14:09")],
 "Revit":[v("chom9hiewXI","Autodesk Revit – Full Beginner Course, Complete Project","Balkan Architect","1:22:03"),v("5S-wYY464Pk","Revit Architecture Beginner Tutorial in Hindi","PTS CAD EXPERT","54:03")],
 "Model coordination":[v("iAilvymrsNA","Clash Detection with Navisworks Manage","BIMLOD","6:50"),v("zDfn30BTt3o","Navisworks Clash Detection and Report Generation","PTS CAD EXPERT","12:44")],
 "Planning and control":[v("-TDh-5n90vk","Project Scheduling – PERT/CPM: Finding the Critical Path","Joshua Emmanuel","6:57"),v("qlqB78qcrbg","Complete Primavera P6 for Beginners","PTS CAD EXPERT","3:27:58")]});
})();
