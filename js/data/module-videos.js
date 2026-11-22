// Module videos for courses that had none, chosen and checked on 9 Nov 2026:
// every video plays, has 30k+ views, and its spoken language (EN / HI) was confirmed from YouTube's auto-captions.
// A module's video is shown once at the top of the module. Topic-by-topic videos come later, course by course.
(()=>{const v=(id,t,ch,len)=>yt(id,t,ch,len), pl=(id,t,ch)=>ypl(id,t,ch);
const add=(course,map)=>Object.entries(map).forEach(([mod,[en,hi]])=>{const k=course+"::"+mod,cur=MODV[k]||{};MODV[k]={en:cur.en||en||undefined,hi:cur.hi||hi||undefined}});

add("tools",{
 "Chat assistants":[v("nVyD6THcvDQ","99% of Beginners Don't Know the Basics of AI","Jeff Su","10:12"),v("Nz1MI8nsFTs","ChatGPT Tutorial for Beginners in Hindi","The Cutting Edge School","14:17")],
 "Pick by task":[v("htZRCE2GgIs","The Only AI Tools You Need","Jeff Su","11:56"),v("bfXd2FuGaQY","Free AI Tools for Students","ExpHub - Prashant Kirad","12:28")],
 "Workflows":[v("UIf-SlmMays","n8n Tutorial – Zero to Hero Course","freeCodeCamp.org","3:35:08"),v("2BuGehPaSBY","N8N Full Course: Build AI Automations","WsCube Tech","2:23:13")]});

add("claude",{
 "Claude 101":[v("0vZ_UVLhSQQ","Getting started with Claude.ai","Anthropic","5:19"),v("2BXpDnXPbOs","Master Claude in 20 Minutes","Vishnu Suthar","18:43")],
 "Prompt skills":[v("_ZvnD73m40o","Prompt Engineering Tutorial","freeCodeCamp.org","41:36"),v("YhRfgYH_AoU","Prompt Engineering Full Course","The iScale","59:16")],
 "AI Fluency":[v("WSPChlfxJyA","Full Claude Tutorial: Beginner to Advanced","Futurepedia","19:13"),v("3RCFAZHs8R8","Claude AI Full Course in 2 Hours","WsCube Tech","2:12:21")],
 "MCP":[v("E2DEHOEbzks","Model Context Protocol (MCP) Explained for Beginners","KodeKloud","24:10"),v("GeVCpohRU8Y","What is MCP? Completely Explained","Apna College","21:57")],
 "Claude Code":[v("ntDIxaeo3Wg","Claude Code – Full Tutorial for Beginners","Tech With Tim","35:49"),v("i3tRkbsE54Q","Claude Code is Amazing!","CodeWithHarry","20:40")],
 "Finish and share":[v("iR2V6RrwEUk","How to add certificates to your LinkedIn profile","Life Style Consultant","4:58"),v("lzuiuRgwwrc","How to create a Great LinkedIn Profile","Apna College","19:09")]});

add("ai",{
 "What AI is":[v("qYNweeDHiyU","AI, Machine Learning, Deep Learning and Generative AI Explained","IBM Technology","10:01"),v("D1eL1EnxXXQ","AI Complete One Shot Course for Beginners","Apna College","1:06:25")],
 "Python":[v("K5KVEU3aaeQ","Python Full Course for Beginners","Programming with Mosh","2:02:21"),v("vLqTf2b6GZw","Python Tutorial for Beginners (1.5 hours)","Apna College","1:17:12")],
 "Git and GitHub":[v("RGOj5yH7evk","Git and GitHub for Beginners – Crash Course","freeCodeCamp.org","1:08:30"),v("Ez8F0nW6S-w","Complete Git and GitHub Tutorial","Apna College","1:14:17")],
 "Data tools":[v("VXU4LSAQDSc","Learn NumPy in 1 hour","Bro Code","1:00:00"),v("E9WGC0SLPVs","Python Pandas Crash Course","CodeWithHarry","36:57")],
 "Maths you need":[pl("PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab","Essence of Linear Algebra (playlist)","3Blue1Brown"),v("mQewAJb8oJ8","Vectors in Linear Algebra for ML","CampusX","1:31:58")],
 "ML basics":[v("0B5eIE_1vpU","Scikit-learn Crash Course","freeCodeCamp.org","2:09:22"),v("LvC68w9JS4Y","Machine Learning Full Course with Practical","WsCube Tech","10:16:47")],
 "Neural networks":[v("aircAruvnKk","But what is a neural network?","3Blue1Brown","18:40"),v("uiZL9rK2Q_Q","But what is a neural network? (Hindi dub)","3Blue1Brown हिंदी","18:40")],
 "Transformers and LLMs":[v("wjZofJX0v4M","Transformers, the tech behind LLMs","3Blue1Brown","27:14"),v("K45s2PgywvI","How LLMs Work – Overview","Piyush Garg","1:00:57")],
 "Prompting and APIs":[v("_ZvnD73m40o","Prompt Engineering Tutorial","freeCodeCamp.org","41:36"),v("YhRfgYH_AoU","Prompt Engineering Full Course","The iScale","59:16")],
 "Choosing and running models":[v("UtSSMs6ObqY","Learn Ollama in 15 Minutes – Run LLMs Locally","Tech With Tim","14:02"),v("YcAYmIFtA0o","Ollama Masterclass: Run Local LLMs","CampusX","2:49:41")],
 "RAG: chat with your documents":[v("_HQ2H_0Ayy0","RAG Explained For Beginners","KodeKloud","10:09"),v("Ty8gcCKuwNI","What is RAG? Completely Explained","Apna College","17:24")],
 "More GenAI":[v("iOdFUJiB0Zc","Fine Tuning LLM Models – Generative AI Course","freeCodeCamp.org","2:37:05"),v("SrYXAd4nMvQ","Fine-tuning LLMs: LoRA and QLoRA","Krish Naik Hindi","26:54")],
 "Agent fundamentals":[v("15_pppse4fY","What is Agentic AI and How Does it Work?","codebasics","13:49"),v("jNJH6uD5LQE","Generative AI vs Agentic AI vs AI Agents","Apna College","11:14")],
 "Safety, evaluation and monitoring":[v("gUNXZMcd2jU","OWASP's Top 10 Ways to Attack LLMs","IBM Technology","25:12"),null],
 "Frameworks and protocols":[v("cUfLrn3TM3M","LangGraph Explained for Beginners","KodeKloud","13:21"),v("GeVCpohRU8Y","What is MCP? Completely Explained","Apna College","21:57")],
 "Deploy your app":[v("D0D4Pa22iG0","Streamlit: The Fastest Way To Build Python Apps","pixegami","11:57"),v("yKTEC1Y5bEQ","Complete Streamlit course for Python developers","Chai aur Code","1:05:10")],
 "AI coding assistants":[v("ocMOZpuAMw4","Cursor Tutorial for Beginners","Tech With Tim","15:20"),v("rwxRoYzwkyM","Cursor AI Tutorial – Tips and Tricks","CodeWithHarry","37:32")],
 "Build and publish":[v("E4l91XKQSgw","Build a Local AI Agent With Python (Ollama, LangChain, RAG)","Tech With Tim","28:09"),v("kcGQlZw1b6Q","RAG with LangGraph Crash Course","Krish Naik Hindi","2:02:32")]});

add("devops",{
 "Linux":[v("2PGnYjbYuUo","Linux Command Line Full Course","Geek's Lesson","3:23:09"),v("ldgl9Bd3lLg","Linux Tutorial For Beginners – Complete Course","CodeWithHarry","2:27:43")],
 "Networking":[v("xj_GjnD4uyI","Every Networking Concept Explained In 20 Minutes","TechWorld with Nana","23:21"),v("xN3BKHji12I","Computer Networking for DevOps in One Shot","TrainWithShubham","4:19:58")],
 "Pipelines":[v("R8_veQiYBjI","GitHub Actions Tutorial – CI/CD Pipeline","TechWorld with Nana","32:31"),v("y7S2oSjJ8PA","GitHub Actions Tutorial – Deploy a Node.js App","Piyush Garg","33:25")],
 "Docker":[v("3c-iBn73dDE","Docker Tutorial for Beginners (Full Course)","TechWorld with Nana","2:46:15"),v("exmSJpJvIPs","Docker Tutorial – Complete One Shot","Apna College","2:06:05")],
 "Cloud basics":[v("NhDYbskXRgc","AWS Certified Cloud Practitioner Course","freeCodeCamp.org","14:17:52"),v("N4sJj-SxX00","AWS in One Video for Beginners","M Prashant","10:25:10")],
 "Terraform and Ansible":[v("l5k1ai_GBDE","Terraform explained in 15 mins","TechWorld with Nana","18:15"),v("S9mohJI_R34","Terraform In One Shot with Projects","TrainWithShubham","7:21:36")],
 "Kubernetes":[v("X48VuDVv0do","Kubernetes Tutorial for Beginners (Full Course)","TechWorld with Nana","3:36:55"),v("a-nWPre5QYI","What is Kubernetes? Explained","Piyush Garg","48:22")],
 "Observability":[v("h4Sl21AKiDg","How Prometheus Monitoring works","TechWorld with Nana","21:31"),v("ddZjhv66o_o","Server Monitoring with Grafana, Prometheus and Loki","Piyush Garg","51:44")]});

add("cyber",{
 "Systems and networks":[v("IPvYjXCsTg8","Computer Networking Full Course","Kunal Kushwaha","4:06:56"),v("q3Z3Qa1UNBA","Complete Computer Networks in One Shot","KnowledgeGATE by Sanchit Sir","6:18:26")],
 "Core concepts":[v("9HOpanT0GRs","Harvard CS50's Intro to Cybersecurity","freeCodeCamp.org and CS50","7:44:27"),v("v3iUx2SNspY","Cyber Security Full Course for Beginners","WsCube Cyber Security","11:45:00")],
 "Network defence":[v("OU-A2EmVrKQ","Learn Wireshark! Tutorial for Beginners","Chris Greer","16:14"),v("hGV8wsiCF28","Complete Wireshark Tutorial (Hindi)","Cyberwings Security","13:20")],
 "OWASP and labs":[v("wUaeKEl1RCw","OWASP Top 10 Web Application Security Risks","Telusko","14:58"),v("HE244moNuXE","OWASP Top 10 Vulnerabilities in Hindi","Cyberwings Security","17:22")],
 "Blue team":[v("9RfsRn7m7OE","What Is SIEM?","IBM Technology","4:29"),v("Jf6VXKoMyvs","SOC Analyst Workshop: Splunk, SIEM, SOAR","Hacker Vlog","3:15:25")],
 "Certifications and practice":[v("8ev9ZX9J45A","What is CTF? An introduction to Capture The Flag","LiveOverflow","6:46"),v("SRdqo-DdIjA","Bug Bounty Full Course in Hindi","IYS","5:06:12")]});

add("data",{
 "Excel and Sheets":[v("LgXzzu68j7M","Excel Tutorial for Beginners","Kevin Stratvert","16:17"),v("OX-iyb-21tk","Excel Tutorial For Beginners in Hindi","Rishabh Mishra","1:15:39")],
 "Statistics basics":[v("LZzq1zSL1bs","Complete Statistics For Data Science","Krish Naik","5:28:32"),v("S7LvZZNq4ys","Complete Statistics for Data Science","Tech Classes","3:45:34")],
 "pandas and charts":[v("2uvysYbKdjM","Complete Python Pandas Data Science Tutorial","Keith Galli","1:34:11"),v("E9WGC0SLPVs","Python Pandas Crash Course","CodeWithHarry","36:57")],
 "BI tools":[v("VaOhNqNtGGE","Power BI Tutorial for Beginners","Kevin Stratvert","12:11"),v("6cV3OwFrOkk","Power BI Tutorial for Beginners","Rishabh Mishra","44:59")],
 "Advanced analysis":[v("5PrZvPeUw60","Complete Data Analytics Portfolio Project","Amlan Mohanty","1:23:20"),v("nmCfNHjfgEY","Data Analytics End-to-End Project","Tech Classes","1:55:20")]});
add("testing",{
 "Git and GitHub":[v("RGOj5yH7evk","Git and GitHub for Beginners – Crash Course","freeCodeCamp.org","1:08:30"),v("Ez8F0nW6S-w","Complete Git and GitHub Tutorial","Apna College","1:14:17")],
 "Playwright + AI + MCP":[null,v("GeVCpohRU8Y","What is MCP? Completely Explained","Apna College","21:57")],
 "Selenium + AI + MCP":[v("wl6ORZBXGis","AI-Powered Test Automation: Self-Healing + Visual Testing","Execute Automation","11:09"),v("tcdtYA0_N7w","MCP Explained: How AI Agents Connect to Tools","Code With Aarohi Hindi","36:40")],
 "API basics":[v("WXsD0ZgxjRw","APIs for Beginners – How to use an API","freeCodeCamp.org","3:07:07"),null],
 "Postman and code":[v("VywxIQ2ZXw4","Postman Beginner's Course – API Testing","freeCodeCamp.org","2:09:38"),null],
 "Mobile testing basics":[null,v("fFpQOMkZHYg","Mobile Application Testing (Hindi)","Fun Doo Testers","16:21")],
 "Appium + AI + MCP":[v("fgn8TKOUfYI","How to Run Real Device Mobile Tests with Claude AI","Automation Testing with Joe Colantonio","31:00"),null],
 "Architecture":[null,v("28mX8Xn_Big","Test Automation Framework for Selenium Interviews (Hindi)","Mukesh otwani","13:42")],
 "CI/CD and tools":[v("ylEy4eLdhFs","GitHub Actions Step by Step Demo for Beginners","Automation Step by Step","23:17"),v("NVaP8qtLm6Q","Master Jenkins For Beginners In One Video","M Prashant","3:33:24")],
 "AI and MCP for testers":[null,v("dZyQNy3-HjU","What Are MCP Servers? Explained","Chai aur Code","26:58")],
 "Get hired or get clients":[v("apVFrq7YklA","How to Start Freelancing: Step by Step Roadmap","Aasil Khan","25:40"),v("S23SvV3XGU4","The Harsh Truth About Software Testing Jobs","Technical Suneja","1:00:16")]});

add("trading",{
 "Risk management":[null,v("s7KApswForA","Risk Management in the Stock Market","Pushkar Raj Thakur","18:10")],
 "Psychology and journal":[v("xoGOZD7-3gY","Trading Psychology","CMC Aureon","18:39"),null],
 "Rules, tax and safety":[v("K-k1XCqxWDo","Income tax for stock market traders","Zerodha","16:34"),v("R-HOr-cUdo8","Tax on Options Trading in India","Apna Trader","5:28")],
 "Python for market data":[v("7wAQCwdvqqo","Financial Data with Python: yfinance","Data Science for Everyone","34:09"),null],
 "Backtesting":[v("K31xH-6g9Vc","How to Backtest a Trading Strategy (Step-by-Step)","In The Money by Zerodha","21:04"),null],
 "Broker APIs and paper trading":[v("r88L9AqnNaE","How to set up Kite Connect API","Zerodha","7:07"),v("5VbIvYuNbRY","Options Trading using Python: Step-by-step","Upsurge Club","44:12")]});

add("java",{
 "Spring Boot":[v("-Fe0zk-F4OA","Spring Framework and Spring Boot Tutorial with Project","Telusko","5:25:26"),v("Q04sTEwC7Kg","Spring Boot and Spring Framework Full Course","Coder Army","43:41")]});
})();
