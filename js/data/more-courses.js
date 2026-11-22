// Three more courses (Nov 2026): AI Video & Animation, Git & GitHub, SAP career starter.
// Each has roadmap (SYL), capstones (CAP), certifications (CERTS) and "what next".
// Videos for these courses are in module-videos.js / topic-videos.js.
(()=>{
const RW="https://academy.runwayml.com",SL="https://learning.sap.com",SDEV="https://developers.sap.com/tutorial-navigator.html";
Object.assign(SYL,{
aivideo:{name:"AI Video and Animation",short:"AI Video",color:"var(--l-aivideo)",days:45,perDay:"1.5 hr",group:"Earn and AI tools",
 forWho:"Anyone who wants to make videos, reels, ads or cartoons with AI. No editing or drawing skill needed.",
 outcome:["Turn an idea into a short AI video with a script, shots, voice and music","Keep the same character across many clips","Edit, caption and export for YouTube, Reels and Shorts","Make paid videos for small businesses, safely and legally"],
 cert:"No single AI-video certificate; DaVinci Resolve certification (free books) and Adobe Certified Professional are recognised for editing",
 note:"<strong>Use AI video honestly.</strong> Never make fake videos of real people, label AI-made content as YouTube and Instagram require, and use only music you have the rights to. Most tools give a small free quota; paid plans are optional.",
 see:"https://academy.runwayml.com",
 levels:[
 {name:"Basics",days:"Days 1–5",goal:"Know what AI video can do and pick your tools.",modules:[
  {name:"How AI video works",course:["Runway Academy (free)",RW],topics:[
   "What AI video tools can do|Text to video, image to video, avatars and editing.",
   "Choosing a tool|Veo, Kling, Runway, Luma, Pika and their free quotas compared.",
   "Prompting for video|Subject, action, camera, style and light in one line.",
   "Safe and legal use|No deepfakes of real people, label AI content, respect copyright."]}]},
 {name:"Images and characters",days:"Days 6–12",goal:"Make the pictures your video is built from.",modules:[
  {name:"AI images",course:["Image prompting (Learn Prompting)","https://learnprompting.org/docs/image_prompting/introduction"],topics:[
   "Text to image basics|Gemini, Ideogram, Leonardo and other free tools.",
   "Consistent characters|The same face and clothes in every shot.",
   "Storyboards|Planning shots before you generate.",
   "Upscaling and cleanup|Sharp, clean images ready for video."]}]},
 {name:"Video generation",days:"Days 13–22",goal:"Generate clips that look planned, not random.",modules:[
  {name:"Generate clips",course:["Google Flow (Google Labs)","https://labs.google/flow/about"],topics:[
   "Text to video|Your first clip from a prompt.",
   "Image to video|Bringing a picture you made to life.",
   "Camera moves and shot types|Close-up, wide, pan, dolly and drone shots.",
   "Start and end frames|Controlling how a shot begins and ends.",
   "Video with sound and dialogue|Tools that add speech and sound effects.",
   "Keeping a story consistent|One character across many clips."]}]},
 {name:"Animation and avatars",days:"Days 23–28",goal:"Cartoons, talking characters and presenters.",modules:[
  {name:"Animation",course:["Canva Design School","https://www.canva.com/designschool/"],topics:[
   "2D animation with AI|Cartoons, kids' stories and explainer videos.",
   "Lip sync and talking characters|Making a character speak your script.",
   "AI avatars and presenters|Talking-head videos without a camera.",
   "Motion graphics in Canva|Animated text, posts and intros."]}]},
 {name:"Voice, music and editing",days:"Days 29–37",goal:"Finish a video people want to watch.",modules:[
  {name:"Voice and music",course:["ElevenLabs help centre","https://help.elevenlabs.io"],topics:[
   "AI voiceover|Natural voices for narration.",
   "Hindi and Indian language voices|Voiceover and dubbing in Indian languages.",
   "AI music and sound effects|Background music without copyright strikes."]},
  {name:"Editing",course:["DaVinci Resolve training (free books)","https://www.blackmagicdesign.com/products/davinciresolve/training"],topics:[
   "Editing in CapCut|Cuts, effects and text on phone or PC.",
   "Editing in DaVinci Resolve|A free professional editor.",
   "Auto captions and subtitles|More viewers, even with sound off.",
   "Colour and export settings|Right size and quality for YouTube, Reels and Shorts."]}]},
 {name:"Open models and earning",days:"Days 38–45",goal:"Run free models yourself and get paid work.",modules:[
  {name:"Run models yourself",course:["ComfyUI documentation","https://docs.comfy.org"],topics:[
   "ComfyUI basics|Free node-based image and video generation.",
   "Open video models|Wan and LTX on your own GPU or a rented cloud GPU."]},
  {name:"Earn with AI video",course:["YouTube Creators","https://www.youtube.com/creators/"],topics:[
   "Faceless YouTube channel|Ideas, rules and monetisation for AI content.",
   "Ads and reels for local businesses|Short videos shops will pay for.",
   "Portfolio and showreel|Showing your best work in one minute.",
   "Pricing and freelancing|Fiverr, Upwork and direct clients."]}]}
 ],
 repos:[["comfyanonymous/ComfyUI","https://github.com/comfyanonymous/ComfyUI","The most used free tool for running image and video models yourself."],["Comfy-Org/workflow_templates","https://github.com/Comfy-Org/workflow_templates","Ready-made ComfyUI workflows to start from."],["Wan-Video/Wan2.2","https://github.com/Wan-Video/Wan2.2","Open-source video model you can run yourself."],["Lightricks/LTX-Video","https://github.com/Lightricks/LTX-Video","Fast open-source video model."]]
},

github:{name:"Git and GitHub",short:"GitHub",color:"var(--l-git)",days:30,perDay:"1 hr",group:"Programming languages",
 forWho:"Every student, developer and tester. Needed for every coding job and for showing your projects.",
 outcome:["Use Git daily: commit, branch, merge and fix conflicts","Work in a team with pull requests and code review","Contribute to open-source projects","Automate tests with GitHub Actions and publish a site with GitHub Pages"],
 cert:"GitHub Foundations (GH-900); then GitHub Actions or GitHub Copilot",
 see:"https://roadmap.sh/git-github",
 levels:[
 {name:"Git basics",days:"Days 1–6",goal:"Save and track your work with Git.",modules:[
  {name:"Git on your computer",course:["Pro Git book (free)","https://git-scm.com/book/en/v2"],topics:[
   "What version control is|Keeping the full history of your work.",
   "Install and set up Git|Name, email and editor.",
   "init, add and commit|Your first saved snapshots.",
   "status, log and diff|Seeing what changed.",
   ".gitignore|Keeping junk files and secrets out.",
   "Undoing changes|restore, reset and revert, safely."]}]},
 {name:"Branches",days:"Days 7–12",goal:"Work on many things without breaking main.",modules:[
  {name:"Branching and merging",course:["Learn Git Branching (interactive)","https://learngitbranching.js.org"],topics:[
   "Branches|Separate lines of work.",
   "Merging|Joining work back together.",
   "Merge conflicts|Fixing clashes by hand.",
   "Rebase|A cleaner, straight history.",
   "Stash and cherry-pick|Parking work and picking single commits.",
   "Tags and releases|Marking versions."]}]},
 {name:"GitHub",days:"Days 13–19",goal:"Put your work online and work with others.",modules:[
  {name:"Working on GitHub",course:["GitHub Skills (free, hands-on)","https://skills.github.com"],topics:[
   "GitHub account and profile README|Your developer home page.",
   "push, pull and clone|Syncing your computer with GitHub.",
   "SSH keys and tokens|Logging in safely from Git.",
   "Pull requests and code review|Proposing and checking changes.",
   "Issues and Projects|Planning and tracking work.",
   "GitHub Pages|Free website hosting from a repo."]}]},
 {name:"Open source and teams",days:"Days 20–25",goal:"Contribute like a professional.",modules:[
  {name:"Collaboration",course:["First Contributions","https://github.com/firstcontributions/first-contributions"],topics:[
   "Forks and your first contribution|Sending a change to someone else's project.",
   "Branching strategies|GitHub flow and Git flow.",
   "README, LICENSE and CONTRIBUTING|Making a project easy to use and join.",
   "Branch protection and rules|Stopping risky changes to main.",
   "Good commit messages|History that others can read."]}]},
 {name:"Automation and AI",days:"Days 26–30",goal:"Let GitHub test, protect and help you.",modules:[
  {name:"Actions and Copilot",course:["GitHub Docs","https://docs.github.com"],topics:[
   "GitHub Actions basics|Run tests on every push.",
   "Secrets in workflows|Keeping keys safe.",
   "Dependabot and security alerts|Keeping libraries up to date and safe.",
   "GitHub Copilot|AI help in your editor and on GitHub.",
   "Codespaces|A coding computer in the browser.",
   "GitHub certifications|Foundations, Actions and Copilot exams."]}]}
 ],
 repos:[["firstcontributions/first-contributions","https://github.com/firstcontributions/first-contributions","Make your first open-source pull request, step by step."],["skills/introduction-to-github","https://github.com/skills/introduction-to-github","Official hands-on GitHub course inside a repo."],["pcottle/learnGitBranching","https://github.com/pcottle/learnGitBranching","Visual, interactive Git practice."],["github/gitignore","https://github.com/github/gitignore","Ready .gitignore files for every language."]]
},

sap:{name:"SAP Career Starter (S/4HANA)",short:"SAP",color:"var(--l-sap)",days:90,perDay:"2 hr",group:"Careers",
 forWho:"Commerce, MBA and engineering graduates, and working people who want an SAP consultant or SAP developer job.",
 outcome:["Explain how a company runs on SAP: buying, selling, finance","Pick a module that fits your background: FICO, MM, SD or ABAP","Practise in free SAP trial systems and tutorials","Prepare for an SAP associate certification and interviews"],
 cert:"SAP Certified Associate in your module (paid exam, valid one year)",
 note:"<strong>Start free.</strong> SAP's own learning journeys and developer tutorials are free. Institute fees are high, so learn the basics here first. Never add fake experience to your resume, and be careful of institutes that promise a job for a fee.",
 see:SL,
 levels:[
 {name:"ERP and SAP basics",days:"Days 1–10",goal:"Understand what SAP is and choose your path.",modules:[
  {name:"Understand SAP",course:["SAP Learning (free journeys)",SL],topics:[
   "What ERP is|One system for finance, buying, selling and HR.",
   "SAP products today|S/4HANA, Cloud ERP, BTP, SuccessFactors, Ariba.",
   "Business processes|Procure to pay, order to cash, record to report.",
   "SAP navigation and Fiori|Moving around the system.",
   "SAP job roles|Functional, technical, Basis and end user.",
   "Choosing your module|FICO, MM, SD, ABAP and more compared."]}]},
 {name:"S/4HANA core",days:"Days 11–20",goal:"Concepts every SAP role uses.",modules:[
  {name:"Structure and master data",course:["SAP Learning (free journeys)",SL],topics:[
   "Organisational structure|Company code, plant, sales organisation.",
   "Master data|Customer, supplier, material and GL account.",
   "Transactions and documents|What happens when you post.",
   "Integration between modules|How finance, buying and selling connect.",
   "Reports and analytics basics|Getting answers out of SAP."]}]},
 {name:"Functional modules",days:"Days 21–55",goal:"Learn one module deeply, the others at a basic level.",modules:[
  {name:"Finance (FICO)",course:["SAP Learning: Finance",SL],topics:[
   "General ledger|Chart of accounts and postings.",
   "Accounts payable and receivable|Paying suppliers and collecting from customers.",
   "Asset accounting|Buying and depreciating assets.",
   "Controlling and cost centres|Tracking costs inside the company.",
   "GST in SAP|Indian tax setup basics."]},
  {name:"Materials management (MM)",course:["SAP Learning: Sourcing and procurement",SL],topics:[
   "Purchase requisition to purchase order|The buying cycle step by step.",
   "Goods receipt and invoice verification|Receiving goods and matching bills.",
   "Inventory management|Stock types and movements.",
   "MRP basics|Planning what to buy and when."]},
  {name:"Sales and distribution (SD)",course:["SAP Learning: Sales",SL],topics:[
   "Sales order cycle|Inquiry, quotation and order.",
   "Pricing and conditions|Prices, discounts and taxes.",
   "Delivery and billing|Shipping and invoicing.",
   "Credit management|Credit limits for customers."]}]},
 {name:"Technical track",days:"Days 56–75",goal:"Build and extend SAP the modern way.",modules:[
  {name:"ABAP and BTP",course:["SAP developer tutorials (free)",SDEV],topics:[
   "ABAP basics|SAP's own programming language.",
   "ABAP in Eclipse (ADT)|The modern ABAP editor.",
   "Core Data Services (CDS)|Modern data models.",
   "RAP basics|Building Fiori apps the modern way.",
   "SAP BTP trial account|Free cloud practice system.",
   "SAP Fiori and UI5 basics|SAP's web app look and feel."]}]},
 {name:"Projects and career",days:"Days 76–90",goal:"Understand real projects and get hired.",modules:[
  {name:"Implementation and jobs",course:["SAP Activate on SAP Learning",SL],topics:[
   "SAP Activate methodology|How SAP projects are run.",
   "Fit-to-standard and configuration|Matching business needs to SAP.",
   "Data migration|Moving old data into SAP.",
   "Testing in SAP projects|Unit, integration and user acceptance testing.",
   "SAP certification|Exams, cost and how to prepare.",
   "Resume and interviews|Showing practice honestly, not fake experience."]}]}
 ],
 repos:[["SAP-samples/abap-platform-rap100","https://github.com/SAP-samples/abap-platform-rap100","Official RAP100 exercises: build a Fiori app with ABAP."],["SAP/styleguides","https://github.com/SAP/styleguides","Clean ABAP: SAP's guide to readable code."],["SAP-samples/cloud-cap-samples","https://github.com/SAP-samples/cloud-cap-samples","Sample apps for SAP's Cloud Application Programming model."],["abapGit/abapGit","https://github.com/abapGit/abapGit","Git for ABAP: keep ABAP code on GitHub."]]
}
});

SYL.aivideo.next=["AI Tools Hub (automation for clients)","Claude: Beginner to Power User (scripts and ideas)","Frontend Development (build your own creator website)"];
SYL.github.next=["Frontend or Full Stack Development","DevOps and Cloud (CI/CD)","Contribute to open source every week"];
SYL.sap.next=["SQL and Databases (reports and data)","Python & Data Analyst (analytics)","Second SAP module or SAP BTP developer path"];

const R=(r,d)=>[r,"https://github.com/"+r,d];
Object.assign(CAP,{
 aivideo:[
  {lv:"Beginner",t:"60-second story reel",b:"A short story with one main character: script, 8–10 consistent shots, voiceover, music and captions, posted as a Reel or Short.",c:["Prompting for video","Consistent characters","Voiceover","Editing","Captions"],s:["Write a 6-line script","Make the character sheet","Generate and pick shots","Edit, caption and export"],r:R("Comfy-Org/workflow_templates")},
  {lv:"Intermediate",t:"Ad pack for a local business",b:"Three 15-second ads and five posts for a real shop or tutor: product shots, an avatar presenter, Hindi and English voice, and a short pricing note for the client.",c:["Image to video","Avatars","Indian language voice","Motion graphics","Client work"],s:["Interview the owner","Storyboard 3 ads","Produce and edit","Deliver with a 1-page price sheet"],r:R("comfyanonymous/ComfyUI")},
  {lv:"Advanced",t:"3-minute animated short with open models",b:"A 3-minute animated story made with ComfyUI and an open video model, with start and end frames, lip sync, sound design and a colour-graded edit in DaVinci Resolve.",c:["ComfyUI","Open video models","Lip sync","Sound design","DaVinci Resolve"],s:["Set up ComfyUI locally or on a cloud GPU","Build a reusable workflow","Generate scenes","Finish in DaVinci Resolve"],r:R("Wan-Video/Wan2.2")}
 ],
 github:[
  {lv:"Beginner",t:"Your GitHub profile and portfolio site",b:"A profile README, three pinned projects with good READMEs, and a portfolio site on GitHub Pages.",c:["Commits","README","GitHub Pages","Profile"],s:["Create the profile README","Clean up 3 projects","Publish the site","Share the link"],r:R("skills/github-pages")},
  {lv:"Intermediate",t:"Team project with pull requests",b:"With 2–3 friends, build a small app using issues, branches, pull requests, code review and branch protection. Resolve at least one real merge conflict.",c:["Branches","Pull requests","Code review","Merge conflicts","Projects board"],s:["Plan issues on a board","Work in branches","Review each other's PRs","Release v1.0 with a tag"],r:R("firstcontributions/first-contributions")},
  {lv:"Advanced",t:"CI pipeline and open-source contribution",b:"Add a GitHub Actions workflow that tests every push and blocks failing PRs, turn on Dependabot, and get one pull request merged into a real open-source project.",c:["GitHub Actions","Secrets","Dependabot","Open source"],s:["Write the test workflow","Protect main with checks","Enable Dependabot","Find a good-first-issue and send a PR"],r:R("actions/starter-workflows")}
 ],
 sap:[
  {lv:"Beginner",t:"Business process map of a company",b:"For an imaginary trading company, draw procure-to-pay and order-to-cash with the SAP documents, org units and master data used at each step.",c:["Business processes","Org structure","Master data","Integration"],s:["Pick a company","Map buying and selling","Name each SAP document","Show finance postings"],r:R("SAP/styleguides")},
  {lv:"Intermediate",t:"Module case study with test scripts",b:"In your chosen module (FICO, MM or SD), write configuration notes and 20 test scripts for a full cycle, as a consultant would hand over to a client.",c:["Configuration","Fit-to-standard","Test scripts","UAT"],s:["Choose the module","Write the process design","Write 20 test scripts","Present like a client demo"],r:R("SAP-samples/cloud-cap-samples")},
  {lv:"Advanced",t:"Fiori app with ABAP RAP on BTP trial",b:"Follow the RAP100 exercises on a free BTP trial to build a travel-booking Fiori app with CDS views, behaviour and validations, and keep the code on GitHub with abapGit.",c:["ABAP","CDS","RAP","Fiori","abapGit"],s:["Open a BTP trial","Do the RAP100 exercises","Add your own validation","Push code with abapGit"],r:R("SAP-samples/abap-platform-rap100")}
 ]
});

const MSC="https://learn.microsoft.com/en-us/credentials/certifications/";
Object.assign(CERTS,{
 aivideo:[
  C_("Co","DaVinci Resolve Certified User","Blackmagic Design","Entry","Free training books; online exam","https://www.blackmagicdesign.com/products/davinciresolve/training",["Free official training books","https://www.blackmagicdesign.com/products/davinciresolve/training"],["End-of-chapter reviews in the books","https://www.blackmagicdesign.com/products/davinciresolve/training"],"Good proof of editing skill for video jobs."),
  C_("Co","Adobe Certified Professional (Premiere Pro / After Effects)","Adobe (via Certiport)","Entry","Paid exam at Certiport centres","https://certiport.pearsonvue.com/Certifications/Adobe/Certified-Professional/Overview",["Adobe tutorials","https://helpx.adobe.com/premiere-pro/tutorials.html"],["Exam objectives on the Certiport page","https://certiport.pearsonvue.com/Certifications/Adobe/Certified-Professional/Overview"],"Premiere Pro is paid software; DaVinci Resolve is free."),
  C_("Free","Runway Academy courses","Runway","Entry","Free","https://academy.runwayml.com",["Free courses and tutorials","https://academy.runwayml.com"],["Practise with the free credits","https://academy.runwayml.com"],"No exam; your portfolio matters more than a certificate.")
 ],
 github:[
  C_("Co","GitHub Foundations (GH-900)","GitHub / Microsoft","Entry","Paid exam; free for verified students through GitHub Education (check current offer)",MSC+"github-foundations",["Free Microsoft Learn path",MSC+"github-foundations"],["Free study guide",MSC+"resources/study-guides/gh-900"],"Start here."),
  C_("Co","GitHub Actions (GH-200)","GitHub / Microsoft","Intermediate","Paid exam",MSC+"github-actions",["Free Microsoft Learn path",MSC+"github-actions"],["Study guide on the cert page",MSC+"github-actions"],""),
  C_("Co","GitHub Copilot (GH-300)","GitHub / Microsoft","Intermediate","Paid exam",MSC+"github-copilot",["Free Microsoft Learn path",MSC+"github-copilot"],["Study guide on the cert page",MSC+"github-copilot"],""),
  C_("Free","GitHub Skills courses","GitHub","Entry","Free","https://skills.github.com",["Hands-on courses inside repos","https://skills.github.com"],["Each course checks your work automatically","https://skills.github.com"],"")
 ],
 sap:[
  C_("Co","SAP Certified Associate (your module, e.g. Financial Accounting, Sourcing and Procurement, Sales, Back-End Developer – ABAP Cloud)","SAP","Entry–Intermediate","Paid exam (one-attempt, student and Learning Hub options); valid one year, renew with Stay Certified","https://learning.sap.com/certifications",["Free learning journeys on SAP Learning","https://learning.sap.com"],["Sample questions on each certification page","https://learning.sap.com/certifications"],"Check the current exam code for your module before preparing."),
  C_("Co","SAP Certification exam for students (one attempt)","SAP","Entry","Lower price for current college students","https://training.sap.com/course/cers01-sap-certification-exam-one-attempt-for-students-certification-online-010-us-en",["Free learning journeys","https://learning.sap.com"],["Sample questions on each certification page","https://learning.sap.com/certifications"],"Needs proof that you are a current student."),
  C_("Free","SAP Learning journeys and developer tutorials","SAP","Entry","Free","https://learning.sap.com",["Learning journeys","https://learning.sap.com"],["Free BTP trial and tutorials",SDEV],"")
 ]
});
})();
