// Data, devops, cyber roadmaps + capstone projects (CAP) + project ideas
// ---- New original roadmaps ----
const GH=r=>"https://github.com/"+r;
Object.assign(SYL,{
data:{name:"Python & Data Analyst",short:"Data Analyst",color:"var(--l-data)",days:85,perDay:"1.5 hr",
 forWho:"Anyone comfortable with a computer. School maths is enough.",
 outcome:["Clean and analyse data in Excel, SQL and Python","Build dashboards in Power BI or Looker Studio","Explain findings clearly to a manager or client","Show 3 real analysis projects on GitHub"],
 cert:"Microsoft Learn Power BI modules (free badges); CS50P certificate (free)",
 see:"https://roadmap.sh/data-analyst",
 levels:[
 {name:"Spreadsheets",days:"Days 1–11",goal:"Do real analysis in Excel or Google Sheets.",modules:[
  {name:"Excel and Sheets",course:["GCFGlobal Excel (free)","https://edu.gcfglobal.org/en/excel/"],topics:[
   "Cells, ranges and references|Relative and absolute references ($A$1).",
   "Core formulas|SUM, AVERAGE, COUNT, IF, and nesting them.",
   "Lookups|VLOOKUP, XLOOKUP and INDEX-MATCH to join tables.",
   "Cleaning data|Trim spaces, fix dates, remove duplicates, split columns.",
   "Pivot tables|Summarise thousands of rows in seconds.",
   "Charts in Excel|Choosing the right chart for the question.",
   "Conditional formatting|Making problems stand out."]}]},
 {name:"Statistics you need",days:"Days 12–20",goal:"Read numbers without being fooled.",modules:[
  {name:"Statistics basics",course:["Khan Academy statistics","https://www.khanacademy.org/math/statistics-probability"],topics:[
   "Mean, median, mode|Three kinds of average and when each lies.",
   "Spread|Range, variance and standard deviation.",
   "Percentiles and outliers|Where a value sits, and odd values.",
   "Distributions|Normal and skewed data.",
   "Correlation vs causation|Moving together is not proof of cause.",
   "Sampling and bias|Why who you ask changes the answer.",
   "Hypothesis tests and A/B tests|Is a difference real or luck?"]}]},
 {name:"SQL",days:"Days 21–36",goal:"Get any answer out of a database.",modules:[
  {name:"SQL from zero",course:["SQLBolt interactive lessons","https://sqlbolt.com"],topics:[
   "Databases and tables|Rows, columns, keys.",
   "SELECT, WHERE, ORDER BY|Choosing and sorting data.",
   "Aggregates and GROUP BY|Totals, averages and counts per group.",
   "JOINs|Combining tables: inner, left, right.",
   "Subqueries and CTEs|Queries inside queries, written clearly.",
   "Window functions|Running totals, ranks, previous-row comparisons.",
   "Practice on a real database|The Chinook music store sample."]}]},
 {name:"Python for data",days:"Days 37–54",goal:"Automate and scale your analysis.",modules:[
  {name:"Python basics",course:["CS50's Python (Harvard)","https://cs50.harvard.edu/python"],topics:[
   "Variables, loops, functions|The core of Python.",
   "Lists and dictionaries|Holding collections of data.",
   "Jupyter and Colab|Notebooks for analysis."]},
  {name:"pandas and charts",course:["Data Science for Beginners (Microsoft)",GH("microsoft/Data-Science-For-Beginners")],topics:[
   "Loading data|CSV, Excel and SQL into pandas.",
   "Filtering and sorting|Finding the rows you need.",
   "groupby and pivot|Excel pivot tables, in code.",
   "Merging tables|Joins in pandas.",
   "Cleaning in pandas|Missing values, types, duplicates.",
   "Charts with matplotlib and seaborn|Clear, honest charts."]}]},
 {name:"Dashboards and storytelling",days:"Days 55–68",goal:"Turn analysis into decisions.",modules:[
  {name:"BI tools",course:["Power BI on Microsoft Learn","https://learn.microsoft.com/en-us/training/powerplatform/power-bi"],topics:[
   "Power BI or Looker Studio basics|Connect, model, visualise.",
   "Data modelling|Fact and dimension tables.",
   "DAX basics|Measures like total sales and growth %.",
   "Dashboard design|One page, the key numbers first.",
   "Data storytelling|Context, insight, action.",
   "Presenting to non-technical people|Simple words, one chart per point."]}]},
 {name:"Advanced and career",days:"Days 69–85",goal:"Stand out and get hired.",modules:[
  {name:"Advanced analysis",course:["ML for Beginners (Microsoft)",GH("microsoft/ML-For-Beginners")],topics:[
   "Getting data from APIs and the web|Live data instead of files.",
   "Automating reports|A script that refreshes a weekly report.",
   "Forecasting basics|Trends and seasonality.",
   "Regression for analysts|What drives a number.",
   "Git and GitHub portfolio|Publishing your projects.",
   "Interview preparation|SQL tests, case studies, Excel tasks."]}]}
 ],
 repos:[["microsoft/Data-Science-For-Beginners",GH("microsoft/Data-Science-For-Beginners"),"20 lessons on data science with code."],["lerocha/chinook-database",GH("lerocha/chinook-database"),"A free sample database for SQL practice."],["jakevdp/PythonDataScienceHandbook",GH("jakevdp/PythonDataScienceHandbook"),"Free book as notebooks: NumPy, pandas, charts."]]
},

devops:{name:"DevOps & Cloud",short:"DevOps",color:"var(--l-devops)",days:90,perDay:"2 hr",
 forWho:"Testers, developers or IT staff. Comfort with a computer is enough; Linux is taught from zero.",
 outcome:["Work confidently in Linux and the command line","Build CI/CD pipelines and containers","Deploy to the cloud with Terraform and Kubernetes","Monitor apps and control cloud cost"],
 cert:"AWS Skill Builder free courses; prepare for AWS Cloud Practitioner (paid exam)",
 see:"https://roadmap.sh/devops",
 levels:[
 {name:"Linux and networking",days:"Days 1–15",goal:"Comfort on servers.",modules:[
  {name:"Linux",course:["Linux Journey","https://linuxjourney.com"],topics:[
   "Command line basics|Moving around and managing files.",
   "Permissions and users|Who can read, write, run.",
   "Processes and services|What is running and how to control it.",
   "Package managers|Installing software.",
   "Bash scripting|Automating repeated commands.",
   "Text tools|grep, sed, awk for logs."]},
  {name:"Networking",course:["90 Days of DevOps",GH("MichaelCade/90DaysOfDevOps")],topics:[
   "IP addresses and ports|How machines find each other.",
   "DNS|Names to addresses.",
   "HTTP, HTTPS and TLS|Web traffic and certificates.",
   "SSH|Logging in to servers safely.",
   "Load balancers and proxies|Spreading traffic."]}]},
 {name:"Git and CI/CD",days:"Days 16–25",goal:"Automate build, test and release.",modules:[
  {name:"Pipelines",course:["GitHub Skills","https://skills.github.com"],topics:[
   "Branching strategies|Trunk-based and feature branches.",
   "GitHub Actions|Workflows, jobs, steps.",
   "Build, test, deploy stages|A full pipeline.",
   "Artifacts and versioning|Releasing the right build."]}]},
 {name:"Containers",days:"Days 26–38",goal:"Package apps to run anywhere.",modules:[
  {name:"Docker",course:["Docker getting started","https://docs.docker.com/get-started/"],topics:[
   "Images and containers|The core idea.",
   "Writing a Dockerfile|Building your own image.",
   "Volumes and networks|Saving data and connecting containers.",
   "Docker Compose|Running multi-container apps.",
   "Registries|Sharing images."]}]},
 {name:"Cloud",days:"Days 39–55",goal:"Run apps on AWS (ideas carry to Azure and GCP).",modules:[
  {name:"Cloud basics",course:["AWS Skill Builder","https://skillbuilder.aws"],topics:[
   "Free tier and billing alarms|Avoid surprise bills first.",
   "IAM|Users, roles and least privilege.",
   "Compute: EC2 and Lambda|Servers and serverless.",
   "Storage: S3|Files in the cloud.",
   "Networking: VPC|Private networks and subnets.",
   "Databases: RDS|Managed databases."]}]},
 {name:"Infrastructure as code",days:"Days 56–65",goal:"Create servers from code, repeatably.",modules:[
  {name:"Terraform and Ansible",course:["Terraform tutorials","https://developer.hashicorp.com/terraform/tutorials"],topics:[
   "Why infrastructure as code|Repeatable, reviewable setups.",
   "Terraform basics|Providers, resources, state.",
   "Variables and modules|Reusable infrastructure.",
   "Ansible basics|Configuring servers automatically."]}]},
 {name:"Kubernetes",days:"Days 66–78",goal:"Run containers at scale.",modules:[
  {name:"Kubernetes",course:["Kubernetes basics tutorial","https://kubernetes.io/docs/tutorials/kubernetes-basics/"],topics:[
   "Pods and deployments|Running and updating apps.",
   "Services and ingress|Reaching your app.",
   "ConfigMaps and secrets|Settings and passwords.",
   "Scaling and health checks|Staying up under load.",
   "Helm|Packaging Kubernetes apps."]}]},
 {name:"Monitoring and reliability",days:"Days 79–90",goal:"Know when things break and fix them fast.",modules:[
  {name:"Observability",course:["90 Days of DevOps",GH("MichaelCade/90DaysOfDevOps")],topics:[
   "Logs, metrics and traces|The three signals.",
   "Prometheus and Grafana|Metrics and dashboards.",
   "Alerts and on-call|Waking the right person.",
   "SRE basics|SLOs and error budgets.",
   "DevSecOps basics|Scanning code and images.",
   "Cloud cost control|Tagging, budgets, right-sizing."]}]}
 ],
 repos:[["MichaelCade/90DaysOfDevOps",GH("MichaelCade/90DaysOfDevOps"),"A daily learning journey across DevOps topics."],["bregman-arie/devops-exercises",GH("bregman-arie/devops-exercises"),"Thousands of practice questions and exercises."],["docker/awesome-compose",GH("docker/awesome-compose"),"Ready Docker Compose examples."]]
},

cyber:{name:"Cyber Security",short:"Cyber Security",color:"var(--l-cyber)",days:90,perDay:"2 hr",
 forWho:"Beginners with basic computer skills. No hacking background needed.",
 outcome:["Explain how networks, systems and the web are attacked and defended","Use core tools like Wireshark, Nmap and Burp Suite in a legal lab","Find and report the OWASP Top 10 in practice apps","Prepare for an entry-level certification"],
 cert:"ISC2 Certified in Cybersecurity (check current free offer); CompTIA Security+ (paid)",
 note:"<strong>Stay legal.</strong> Only test systems you own or have written permission to test. Use the practice labs in this roadmap. Attacking real sites without permission is a crime under India's IT Act.",
 see:"https://roadmap.sh/cyber-security",
 levels:[
 {name:"IT foundations",days:"Days 1–15",goal:"Understand the systems you will protect.",modules:[
  {name:"Systems and networks",course:["Security 101 (Microsoft)",GH("microsoft/Security-101")],topics:[
   "How computers and operating systems work|Windows and Linux basics.",
   "Command line|Linux terminal and PowerShell basics.",
   "Networking models|OSI and TCP/IP layers.",
   "IP, ports and protocols|TCP, UDP, DNS, HTTP, SSH.",
   "Virtual machines|Building a safe home lab."]}]},
 {name:"Security basics",days:"Days 16–30",goal:"Core ideas every security role uses.",modules:[
  {name:"Core concepts",course:["Security 101 (Microsoft)",GH("microsoft/Security-101")],topics:[
   "CIA triad|Confidentiality, integrity, availability.",
   "Threats, vulnerabilities and risk|How they differ.",
   "Passwords and MFA|Why one password is not enough.",
   "Encryption and hashing|Keeping data secret and untampered.",
   "Certificates and TLS|The padlock in your browser.",
   "Phishing and social engineering|Attacks on people, not machines."]}]},
 {name:"Network security",days:"Days 31–45",goal:"See and control network traffic.",modules:[
  {name:"Network defence",course:["Wireshark documentation","https://www.wireshark.org/docs/"],topics:[
   "Firewalls|Allowing and blocking traffic.",
   "VPNs|Private tunnels over the internet.",
   "IDS and IPS|Detecting and stopping attacks.",
   "Wireshark|Reading network packets.",
   "Nmap in a lab|Finding open ports on your own machines."]}]},
 {name:"Web security",days:"Days 46–65",goal:"Find and fix web app weaknesses.",modules:[
  {name:"OWASP and labs",course:["PortSwigger Web Security Academy","https://portswigger.net/web-security"],topics:[
   "OWASP Top 10|The most common web risks.",
   "Burp Suite basics|Watching and changing web requests.",
   "Injection, including SQL injection|In a practice lab.",
   "Cross-site scripting (XSS)|In a practice lab.",
   "Broken access control|Seeing what you should not.",
   "Secure coding fixes|How developers prevent each issue."]}]},
 {name:"Defence and response",days:"Days 66–80",goal:"Detect attacks and respond well.",modules:[
  {name:"Blue team",course:["OWASP Top 10","https://owasp.org/Top10/"],topics:[
   "Logs and SIEM basics|Collecting and searching security events.",
   "Incident response steps|Prepare, detect, contain, recover, learn.",
   "Malware basics|Types and how they spread.",
   "Vulnerability management|Scan, prioritise, patch.",
   "Cloud security basics|Shared responsibility and IAM."]}]},
 {name:"Career",days:"Days 81–90",goal:"Get your first security role.",modules:[
  {name:"Certifications and practice",course:["ISC2 Certified in Cybersecurity","https://www.isc2.org/certifications/cc"],topics:[
   "Entry certifications|ISC2 CC and CompTIA Security+ compared.",
   "Capture the flag (CTF) practice|Learning by solving challenges.",
   "Bug bounty basics and rules|Only on programs that invite you.",
   "Indian cyber law basics|The IT Act and responsible disclosure.",
   "Resume and interviews|Showing lab work and write-ups."]}]}
 ],
 repos:[["microsoft/Security-101",GH("microsoft/Security-101"),"7 lessons on security basics."],["OWASP/CheatSheetSeries",GH("OWASP/CheatSheetSeries"),"Short guides to secure coding."],["OWASP/wstg",GH("OWASP/wstg"),"The OWASP web security testing guide."]]
}
});
// see-also links for existing sections
SYL.testing.see="https://roadmap.sh/qa";SYL.ai.see="https://roadmap.sh/ai-engineer";SYL.claude.see="https://roadmap.sh/claude-code";SYL.tools.see="https://roadmap.sh/prompt-engineering";

// ---- Capstone projects (each has a checked GitHub repo) ----
const CAP={
 trading:[
  {lv:"Beginner",t:"Trading journal and risk calculator",b:"A Python or Google Sheets tool that sizes every trade from your capital and stop loss, logs it, and shows win rate, average win/loss and drawdown.",c:["Position sizing","Stop loss and risk-reward","Charges","Journal","Drawdown"],s:["Inputs: capital, entry, stop, target","Calculate quantity at 1% risk and the charges","Log trades to a CSV","Weekly stats and a drawdown chart"],r:["nickmccullum/algorithmic-trading-python",GH("nickmccullum/algorithmic-trading-python")]},
  {lv:"Intermediate",t:"Backtest lab: 3 strategies compared",b:"Backtest a moving-average crossover, an RSI pullback and a support-breakout strategy on 5 years of old NSE data, with costs and slippage.",c:["Candles and indicators","Support and resistance","Backtesting","Overfitting","Sharpe and drawdown"],s:["Download historical data","Code the 3 strategies","Add brokerage and slippage","Compare results in one report","Test on a later period to check overfitting"],r:["kernc/backtesting.py",GH("kernc/backtesting.py")]},
  {lv:"Advanced",t:"Paper-trading bot with safety switches",b:"A bot that reads live prices through a broker API but places paper trades only, with a daily-loss kill switch, logs and alerts. Education only.",c:["Broker APIs","SEBI algo rules","Risk limits","Logging","Python automation"],s:["Connect with the broker's official library","Run your backtested rules on live prices","Record paper trades, never real orders","Stop for the day at the loss limit","Daily summary message"],r:["zerodha/pykiteconnect",GH("zerodha/pykiteconnect")],r2:["angel-one/smartapi-python",GH("angel-one/smartapi-python")]}
 ],
 testing:[
  {lv:"Beginner",t:"Manual test pack for a real app",b:"A full test plan, 60 test cases and 20 bug reports for a RealWorld demo app, stored in GitHub like a professional QA folder.",c:["Test plan","Test design techniques","Bug reports","Exploratory testing","Git"],s:["Pick a RealWorld front-end demo","Write the test plan and risk list","Design cases with boundaries and equivalence","Explore and file bug reports with evidence"],r:["gothinkster/realworld",GH("gothinkster/realworld")]},
  {lv:"Intermediate",t:"Playwright + API framework with CI",b:"An automation framework for the RealWorld app: UI tests with page objects, API tests, test data, reports, and GitHub Actions running everything on each push.",c:["Playwright","Page Object Model","API testing","Data-driven tests","CI/CD","Reports"],s:["Set up Playwright with TypeScript","Page objects for login, article, profile","API tests for the same flows","Run in GitHub Actions with HTML reports"],r:["gothinkster/realworld",GH("gothinkster/realworld")],r2:["microsoft/playwright",GH("microsoft/playwright")]},
  {lv:"Advanced",t:"Mobile framework for Android and iOS (Appium + AI)",b:"A Java or TypeScript Appium framework for the Sauce Labs My Demo App on both platforms: screen objects, gestures, deep links, parallel devices, reports, plus an AI-assisted flow using the Appium MCP server.",c:["Appium 2","UiAutomator2 and XCUITest","Gestures","Screen objects","Parallel devices","Appium MCP","CI"],s:["Run the demo app on an emulator and a simulator","Build screen objects and 15 tests","Add gestures, deep links and permissions","Run in parallel and in CI","Let an AI assistant explore the app via Appium MCP; turn its findings into reviewed tests"],r:["saucelabs/my-demo-app-android",GH("saucelabs/my-demo-app-android")],r2:["appium/appium-mcp",GH("appium/appium-mcp")]},
  {lv:"Advanced",t:"Hybrid framework: UI + API + mobile",b:"One framework with shared config, data builders, logging and Allure reports that runs Selenium or Playwright web tests, REST API tests and Appium mobile tests, in Docker and CI.",c:["Framework layers","Design patterns","Test data","Reporting","Docker","CI/CD","BDD"],s:["Design the folder structure and core","Add web, API and mobile modules","Shared data builders and config","Allure reports and retries policy","Docker + GitHub Actions; add a Cucumber layer"],r:["SeleniumHQ/selenium",GH("SeleniumHQ/selenium")],r2:["appium/appium",GH("appium/appium")]},
  {lv:"Expert",t:"AI test agent vs human tests",b:"Use Playwright MCP and Playwright's test agents to plan, generate and heal tests for the RealWorld app, then compare with your hand-written suite: coverage, bugs found, flakiness and review time.",c:["Playwright MCP","Test agents","Prompting","Reviewing AI tests","Metrics"],s:["Connect an AI assistant to Playwright MCP","Generate a plan and tests with the agents","Review and fix every AI test","Break the app on purpose and let the healer run","Write a comparison report"],r:["microsoft/playwright-mcp",GH("microsoft/playwright-mcp")],r2:["gothinkster/realworld",GH("gothinkster/realworld")]},
  {lv:"Advanced",t:"Security and accessibility audit",b:"Run OWASP Juice Shop on your laptop, find and report OWASP Top 10 issues, check accessibility, and automate a few regression checks.",c:["Security testing","OWASP Top 10","Accessibility","Bug reporting","Automation"],s:["Run Juice Shop locally with Docker","Find issues using the OWASP list","Accessibility scan and manual checks","Write a client-style audit report"],r:["juice-shop/juice-shop",GH("juice-shop/juice-shop")]}
 ],
 ai:[
  {lv:"Beginner",t:"Prediction project with ML",b:"Clean a real dataset, train and compare 3 models, and explain the result in a notebook anyone can read.",c:["pandas","Train/test split","Regression and classification","Metrics","Overfitting"],s:["Pick a lesson dataset","Clean and explore","Train 3 models","Compare and explain"],r:["microsoft/ML-For-Beginners",GH("microsoft/ML-For-Beginners")]},
  {lv:"Intermediate",t:"Chat with your documents (RAG)",b:"Upload PDFs and ask questions; answers come with page sources. Includes chunking, embeddings, a vector store, evaluation and a simple web UI.",c:["Embeddings","Vector databases","RAG","Prompting","Evaluation","Deployment"],s:["Split PDFs into chunks","Embed and store","Retrieve and answer with sources","Test 30 questions for accuracy","Deploy on Hugging Face Spaces"],r:["microsoft/generative-ai-for-beginners",GH("microsoft/generative-ai-for-beginners")]},
  {lv:"Advanced",t:"Research agent with tools and guardrails",b:"An agent that searches, reads, takes notes and writes a cited report, with tool permissions, a step limit, human approval for risky actions and tracing.",c:["Agents","Tool use","Planning","Memory","MCP","Guardrails","Tracing"],s:["Define tools: search, fetch, notes","Plan-act-observe loop with a step limit","Add memory and human approval","Trace every step; evaluate 10 tasks"],r:["huggingface/agents-course",GH("huggingface/agents-course")],r2:["microsoft/ai-agents-for-beginners",GH("microsoft/ai-agents-for-beginners")]},
  {lv:"Expert",t:"Build a tiny GPT from scratch",b:"Follow the lectures to build and train a small language model yourself, then write what each part does in plain words.",c:["Neural networks","Backpropagation","Tokens","Attention and transformers","Training"],s:["micrograd","Bigram and MLP models","Transformer","Train on your own text"],r:["karpathy/nn-zero-to-hero",GH("karpathy/nn-zero-to-hero")]}
 ],
 claude:[
  {lv:"Beginner",t:"Prompt library with scores",b:"20 prompts for your real work, each tested on 5 inputs and scored, with the improved version saved.",c:["Prompt skills","Examples","Structure","Iteration","Evaluation"],s:["Collect 20 real tasks","Write and test prompts","Score outputs 1–5","Improve and save"],r:["anthropics/courses",GH("anthropics/courses")]},
  {lv:"Intermediate",t:"Claude-powered app with tool use",b:"A small app (e.g. test-case writer or support helper) that calls the Claude API, uses tools and returns structured output.",c:["Messages API","System prompts","Tool use","Structured output","Cost"],s:["Start from a quickstart","Add one tool","Return JSON","Track token cost"],r:["anthropics/claude-quickstarts",GH("anthropics/claude-quickstarts")],r2:["anthropics/claude-cookbooks",GH("anthropics/claude-cookbooks")]},
  {lv:"Advanced",t:"Your own MCP server used from Claude Code",b:"Build an MCP server for a data source you use (a CSV, a test-case sheet), connect it to Claude, and run a Claude Code workflow with CLAUDE.md, plan mode and a hook.",c:["MCP","Claude Code","CLAUDE.md","Plan mode","Hooks","Subagents"],s:["Study the reference servers","Build a read-only server","Connect and test from Claude","Automate a task in Claude Code"],r:["modelcontextprotocol/servers",GH("modelcontextprotocol/servers")]}
 ],
 tools:[
  {lv:"Beginner",t:"AI toolkit for a small business",b:"For one local business, build an AI kit: research notes in NotebookLM, posters in Canva, an n8n flow that answers enquiries and logs them to a sheet.",c:["Choosing tools","Safe use","Prompting","Automation"],s:["Interview the owner","Pick 3 tools","Build the n8n flow","Hand over a 1-page guide"],r:["florinpop17/app-ideas",GH("florinpop17/app-ideas")]}
 ],
 data:[
  {lv:"Beginner",t:"Sales analysis of a music store",b:"Answer 15 business questions with SQL on the Chinook database, then build an Excel summary.",c:["SQL joins and GROUP BY","Window functions","Excel pivots","Charts"],s:["Load Chinook","Write 15 queries","Pivot and chart in Excel","One-page summary"],r:["lerocha/chinook-database",GH("lerocha/chinook-database")]},
  {lv:"Intermediate",t:"India public data story",b:"Pick a dataset from data.gov.in, clean it in pandas, find 5 insights and present them as a short report.",c:["pandas cleaning","Statistics","Charts","Storytelling"],s:["Find a dataset","Clean and check","Explore and chart","Write the story"],r:["microsoft/Data-Science-For-Beginners",GH("microsoft/Data-Science-For-Beginners")]},
  {lv:"Advanced",t:"Self-refreshing business dashboard",b:"A Python job pulls fresh data from an API every day, stores it in a database, and feeds a Power BI or Looker dashboard with forecasts.",c:["APIs","SQL","Automation","Data modelling","DAX","Forecasting"],s:["Schedule a data pull","Store in SQL","Model and build the dashboard","Add a simple forecast"],r:["jakevdp/PythonDataScienceHandbook",GH("jakevdp/PythonDataScienceHandbook")]}
 ],
 devops:[
  {lv:"Beginner",t:"Containerise an app with Compose",b:"Take a sample web app and database, write Dockerfiles and a Compose file, and run it with one command.",c:["Linux","Docker","Compose","Networking"],s:["Pick an example","Write Dockerfiles","Compose app + database","Document how to run it"],r:["docker/awesome-compose",GH("docker/awesome-compose")]},
  {lv:"Intermediate",t:"CI/CD pipeline to the cloud",b:"Every push runs tests, builds an image, scans it and deploys to an AWS server created with Terraform.",c:["GitHub Actions","Docker","Terraform","AWS","DevSecOps"],s:["Terraform the server","Pipeline: test, build, scan","Deploy automatically","Billing alarm on"],r:["MichaelCade/90DaysOfDevOps",GH("MichaelCade/90DaysOfDevOps")]},
  {lv:"Advanced",t:"Kubernetes app with monitoring",b:"Run a multi-service app on Kubernetes with Helm, autoscaling, health checks, Prometheus metrics, Grafana dashboards and alerts.",c:["Kubernetes","Helm","Scaling","Prometheus","Grafana","SRE"],s:["Deploy with manifests then Helm","Add probes and autoscaling","Metrics and dashboards","Alerts and a runbook"],r:["kubernetes/examples",GH("kubernetes/examples")],r2:["prometheus/prometheus",GH("prometheus/prometheus")]}
 ],
 cyber:[
  {lv:"Beginner",t:"Home security lab",b:"Build a lab of virtual machines, capture traffic with Wireshark, scan your own machines with Nmap, and write what you found.",c:["Virtual machines","Networking","Wireshark","Nmap","Reporting"],s:["Install VMs","Capture and read traffic","Scan your own lab","Write findings"],r:["microsoft/Security-101",GH("microsoft/Security-101")]},
  {lv:"Intermediate",t:"Web app test of DVWA and Juice Shop",b:"Run both deliberately vulnerable apps locally and find, prove and explain OWASP Top 10 issues, legally, in your own lab.",c:["OWASP Top 10","Burp Suite","Injection","XSS","Access control"],s:["Run apps locally","Test each OWASP category","Capture evidence","Write a pentest-style report"],r:["digininja/DVWA",GH("digininja/DVWA")],r2:["juice-shop/juice-shop",GH("juice-shop/juice-shop")]},
  {lv:"Advanced",t:"Secure code review and hardening guide",b:"Review a sample app's code, fix the issues you find, harden its server and write an incident-response plan.",c:["Secure coding","Vulnerability management","Hardening","Incident response"],s:["Review with the cheat sheets","Fix and retest","Harden the server","Write the IR plan"],r:["OWASP/CheatSheetSeries",GH("OWASP/CheatSheetSeries")],r2:["OWASP/wstg",GH("OWASP/wstg")]}
 ]
};
const IDEAS=[["practical-tutorials/project-based-learning",GH("practical-tutorials/project-based-learning"),"Hundreds of step-by-step project tutorials in many languages."],["codecrafters-io/build-your-own-x",GH("codecrafters-io/build-your-own-x"),"Rebuild real tools (Git, Docker, a database) to learn how they work."],["florinpop17/app-ideas",GH("florinpop17/app-ideas"),"App ideas graded from beginner to advanced."]];
