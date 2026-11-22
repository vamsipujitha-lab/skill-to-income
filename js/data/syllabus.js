// Original 5 sections: trading, testing, ai, claude, tools
const VARSITY="https://zerodha.com/varsity/modules/";
const SYL = {
trading:{name:"Trading for Beginners to Pro",short:"Trading",color:"var(--l-trading)",days:60,perDay:"1.5 hr",
 forWho:"Anyone who has never traded. No finance or maths background needed.",
 outcome:["Read any stock chart and company report","Understand futures and options, and why most option buyers lose","Control risk with position size and stop loss","Test a trading idea on old data with Python, before risking money"],
 cert:"Varsity Certified exam (optional)",
 note:"<strong>Education only.</strong> No tips or buy/sell calls. SEBI's FY26 study found 87.7% of individual F&amp;O traders lost money. Practise with paper trades until you finish Level 6. Price examples use data at least 30 days old.",
 levels:[
 {name:"Foundations",days:"Days 1–11",goal:"Know what the market is and how a trade happens.",modules:[
  {name:"Money basics",course:["Zerodha Varsity – Module 1",VARSITY],topics:[
   "Why invest|Savings lose value to inflation; investing helps money grow.",
   "Inflation|Why ₹100 today buys less next year.",
   "Compounding|How returns earn more returns over time.",
   "Risk and return|Higher possible return always comes with higher risk.",
   "Asset types|Shares, bonds, gold, fixed deposits, mutual funds compared."]},
  {name:"Stock market basics",course:["Zerodha Varsity – Module 1",VARSITY],topics:[
   "What a share is|Owning a small part of a company.",
   "IPO|How a company first sells shares to the public.",
   "NSE and BSE|India's two stock exchanges and what they do.",
   "SEBI|The regulator that protects investors.",
   "Indices: Nifty and Sensex|One number that shows how the market moved.",
   "Brokers, demat and trading account|The three accounts you need and why.",
   "Market timings and holidays|When you can and cannot trade."]},
  {name:"Orders and costs",course:["Zerodha Varsity – Module 1",VARSITY],topics:[
   "Market, limit and stop-loss orders|The order types and when to use each.",
   "Delivery vs intraday|Holding shares vs buying and selling the same day.",
   "T+1 settlement|When shares and money actually move.",
   "Charges|Brokerage, STT, GST, stamp duty and how they eat profit.",
   "Contract note|Reading the bill your broker sends."]}]},
 {name:"Reading charts",days:"Days 12–24",goal:"Read price charts and spot trend, levels and signals.",modules:[
  {name:"Chart basics",course:["Zerodha Varsity – Module 2",VARSITY],topics:[
   "Line, bar and candlestick charts|Three ways to draw price.",
   "OHLC|Open, high, low, close: the four prices in every candle.",
   "Timeframes|5-minute, daily and weekly charts tell different stories.",
   "Volume|How many shares traded and why it matters."]},
  {name:"Candlestick patterns",course:["Zerodha Varsity – Module 2",VARSITY],topics:[
   "Marubozu, doji, spinning top|Single candles and what they suggest.",
   "Hammer and shooting star|Possible turning-point candles.",
   "Engulfing patterns|Two-candle reversal signals.",
   "Morning star and evening star|Three-candle reversal signals.",
   "Why patterns fail|Patterns are probabilities, not promises."]},
  {name:"Trend and levels",course:["Zerodha Varsity – Module 2",VARSITY],topics:[
   "Trend|Higher highs, lower lows, and sideways markets.",
   "Support and resistance|Prices where buying or selling often appears.",
   "Breakouts and fake breakouts|When price crosses a level, and when it traps you.",
   "Gaps|Why price jumps overnight.",
   "Dow theory|The oldest idea about how trends move."]},
  {name:"Indicators",course:["Zerodha Varsity – Module 2",VARSITY],topics:[
   "Moving averages|Smoothing price to see the trend.",
   "RSI|Measures if price moved too far, too fast.",
   "MACD|Trend and momentum in one indicator.",
   "Bollinger Bands|How wide price usually swings.",
   "ATR|Average daily move, used to set stop loss.",
   "VWAP|Average price weighted by volume, used intraday."]}]},
 {name:"Company analysis",days:"Days 25–33",goal:"Judge if a company is strong and fairly priced.",modules:[
  {name:"Financial statements",course:["Zerodha Varsity – Module 3",VARSITY],topics:[
   "Profit and loss statement|How much the company earned and spent.",
   "Balance sheet|What the company owns and owes.",
   "Cash flow statement|Where real cash came from and went.",
   "Annual report|Where to find these and what else to read."]},
  {name:"Ratios and value",course:["Fundamental investment checklist","https://zerodha.com/varsity/chapter/fundamental-investment-checklist/"],topics:[
   "EPS and P/E|Profit per share and how much you pay for it.",
   "P/B, ROE, ROCE|How well the company uses its money.",
   "Debt to equity|How much borrowing the company has.",
   "Margins and growth|Is profit growing, and how fast?",
   "Intrinsic value basics|Estimating what a company is really worth."]},
  {name:"Economy and news",course:["Zerodha Varsity modules",VARSITY],topics:[
   "Interest rates and RBI policy|Why rate changes move markets.",
   "Inflation and crude oil|How prices and oil affect companies.",
   "FII and DII flows|Big investors buying or selling.",
   "Results season|How quarterly results move stocks."]}]},
 {name:"Futures and options",days:"Days 34–45",goal:"Understand derivatives, their payoffs and their risks.",modules:[
  {name:"Futures",course:["Zerodha Varsity – Module 4",VARSITY],topics:[
   "What a futures contract is|An agreement to buy or sell later at a fixed price.",
   "Lot size and margin|Why futures need less money up front, and the danger in that.",
   "Mark-to-market|Daily profit and loss settled in your account.",
   "Expiry and rollover|What happens at month end.",
   "Hedging|Using futures to protect a portfolio."]},
  {name:"Options basics",course:["Zerodha Varsity – Module 5",VARSITY],topics:[
   "Call and put|The right to buy or to sell.",
   "Strike price and premium|The agreed price and the cost of the option.",
   "ITM, ATM, OTM|Where the strike sits against today's price.",
   "Intrinsic and time value|What the premium is made of.",
   "Buyer vs seller payoff|Who wins in which situation."]},
  {name:"Greeks and volatility",course:["Zerodha Varsity – Module 5",VARSITY],topics:[
   "Delta|How much the option moves when price moves.",
   "Theta|How the option loses value each day.",
   "Vega and implied volatility|How fear and calm change option prices.",
   "Gamma|How fast delta changes near expiry.",
   "Open interest and PCR|Reading what option traders are doing."]},
  {name:"Option strategies",course:["Zerodha Varsity – Module 6",VARSITY],topics:[
   "Covered call and protective put|Simple strategies with stock.",
   "Bull and bear spreads|Limiting both risk and reward.",
   "Straddle and strangle|Trading big moves or no moves.",
   "Iron condor|A range-bound strategy.",
   "Why most option buyers lose|Time decay, costs and probability, with SEBI data."]}]},
 {name:"Risk and mindset",days:"Days 46–52",goal:"Protect your capital and your decisions.",modules:[
  {name:"Risk management",course:["SEBI trader study (Aug 2026)","https://www.sebi.gov.in/reports-and-statistics/research/aug-2026/study-trading-behaviour-of-individual-traders-in-the-equity-derivatives-segment-fy25-fy26-_103836.html"],topics:[
   "Position sizing|Risk only 1–2% of capital on one trade.",
   "Stop loss|Decide your exit before you enter.",
   "Risk-reward|Is the possible gain worth the possible loss?",
   "Maximum daily loss|A rule to stop trading for the day.",
   "Drawdown|How deep losses can go, and how hard recovery is."]},
  {name:"Psychology and journal",course:["Varsity – Innerworth","https://zerodha.com/varsity/module/innerworth/"],topics:[
   "Fear and greed|The two emotions behind most mistakes.",
   "FOMO and revenge trading|Chasing moves and trying to win losses back.",
   "Overtrading|More trades usually means more losses.",
   "Trading journal|Writing every trade and reviewing it weekly."]},
  {name:"Rules, tax and safety",course:["Zerodha Varsity modules",VARSITY],topics:[
   "Spotting scams|Tip groups, guaranteed returns, dabba trading.",
   "Checking SEBI registration|How to verify an advisor before you trust them.",
   "Tax on trading|Short and long term gains, and F&O as business income.",
   "What SEBI data says|Why 9 in 10 F&O traders lose."]}]},
 {name:"Automation with Python",days:"Days 53–60",goal:"Test ideas on old data and build a practice bot.",modules:[
  {name:"Python for market data",course:["Algorithmic trading with Python (freeCodeCamp)","https://www.freecodecamp.org/news/algorithmic-trading-using-python-course/"],topics:[
   "Python setup and Colab|Run code in the browser for free.",
   "pandas basics|Tables of prices in Python.",
   "Loading historical data|Getting old prices from NSE archives.",
   "Plotting price and indicators|Drawing your own charts."]},
  {name:"Backtesting",course:["Algo trading with Kite Connect (Quantra, free)","https://quantra.quantinsti.com/course/algo-trading-zerodha-kite"],topics:[
   "Writing a simple strategy|Rules a computer can follow.",
   "Including costs and slippage|Why backtests look better than real life.",
   "Overfitting|When a strategy only works on the past.",
   "Results: win rate, drawdown, Sharpe|How to judge a backtest honestly."]},
  {name:"Broker APIs and paper trading",course:["Algo trading with Kite Connect (Quantra, free)","https://quantra.quantinsti.com/course/algo-trading-zerodha-kite"],topics:[
   "What a broker API is|Placing orders with code.",
   "SEBI algo rules 2026|Algo-ID, static IP, and the 10 orders-per-second limit.",
   "Paper trading bot|Running your strategy without real money.",
   "Logging and alerts|Knowing what your bot did and why."]}]}
 ],
 repos:[["nickmccullum/algorithmic-trading-python","https://github.com/nickmccullum/algorithmic-trading-python","Code for the freeCodeCamp algo trading course."]]
},

testing:{name:"Manual Tester to Automation + AI Tester",short:"Testing",color:"var(--l-testing)",days:115,perDay:"2 hr",
 forWho:"Manual testers and freshers. Basic computer use is enough; coding is taught from zero.",
 outcome:["Automate web apps with Playwright and Selenium","Automate Android and iOS apps with Appium","Design and build a full hybrid framework (UI + API + mobile)","Use AI and MCP to plan, write and fix tests faster, and earn from testing"],
 cert:"Postman API Fundamentals Student Expert badge (free)",
 levels:[
 {name:"Testing foundations",days:"Days 1–13",goal:"Strong manual testing base that automation builds on.",modules:[
  {name:"Testing basics",course:["Software testing tutorial (Guru99, free)","https://www.guru99.com/software-testing.html"],topics:[
   "SDLC and STLC|Where testing fits in building software.",
   "Types of testing|Functional, regression, smoke, sanity, UAT.",
   "Writing test cases|Clear steps, data and expected results.",
   "Bug life cycle|From found to fixed to closed.",
   "Writing a good bug report|Title, steps, actual vs expected, evidence.",
   "Agile, Scrum and Jira|How teams plan and track work.",
   "Waterfall, V-model and Agile|Different ways teams build software, and where testing sits in each.",
   "Verification vs validation|Building the product right vs building the right product."]},
  {name:"Test design techniques",course:["ISTQB Foundation syllabus (free PDF)","https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"],topics:[
   "Black-box, white-box, gray-box|Testing with and without seeing the code.",
   "Equivalence partitioning|Group inputs that behave the same; test one from each group.",
   "Boundary value analysis|Most bugs hide at the edges, like 0, 1 and the maximum.",
   "Decision tables and state transitions|Testing rules and screens that change state.",
   "Exploratory testing|Learning and testing at the same time, without a script.",
   "Risk-based prioritisation|Test what would hurt most if it broke.",
   "Test plan and strategy|What to test, how, by whom, and when it is enough.",
   "Test data management|Creating safe, realistic data for tests.",
   "Root cause analysis|Finding why a bug happened, not just where."]},
  {name:"Test levels and tools",course:["ISTQB Foundation syllabus (free PDF)","https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"],topics:[
   "Unit, integration, system, acceptance|The four levels of testing.",
   "Test management tools|Keeping test cases in Jira with Zephyr or Xray, or TestRail.",
   "TDD and BDD|Writing tests first; Gherkin and Cucumber in plain English."]}]},
 {name:"Coding base",days:"Days 14–28",goal:"Enough coding for Playwright (TypeScript) and Selenium/Appium (Java).",modules:[
  {name:"Git and GitHub",course:["Introduction to GitHub","https://github.com/skills/introduction-to-github"],topics:[
   "What version control is|Saving every change safely.",
   "Repos, commits, branches|The core Git ideas.",
   "Pull requests|Asking to merge your changes.",
   "Your portfolio repo|Showing your work to clients."]},
  {name:"Web basics for testers",course:["JavaScript full course (freeCodeCamp)","https://www.freecodecamp.org/news/full-javascript-course-for-beginners/"],topics:[
   "HTML and the DOM|How a web page is built.",
   "CSS selectors and XPath|Finding elements on a page.",
   "Browser DevTools|Inspecting elements and network calls."]},
  {name:"JavaScript and TypeScript",course:["TypeScript for beginners","https://www.freecodecamp.org/news/learn-typescript-beginners-guide/"],topics:[
   "Variables and data types|Storing values.",
   "Conditions and loops|Making decisions and repeating steps.",
   "Functions|Reusable blocks of code.",
   "Arrays and objects|Lists and records of data.",
   "Async and await|Waiting for pages and APIs.",
   "TypeScript basics|Types that catch mistakes early."]},
  {name:"Java for testers",course:["Java Full Course (Bro Code)","https://www.youtube.com/watch?v=xk4_1vDrzzo"],topics:[
   "Java setup, JDK and IntelliJ|Getting ready to code.",
   "Classes and objects|The building blocks of Java tests.",
   "Inheritance and interfaces|Reusing code in a framework.",
   "Collections|Lists, maps and sets.",
   "Exceptions|Handling errors cleanly.",
   "Maven|Managing libraries and running tests."]}]},
 {name:"Playwright with AI and MCP",days:"Days 29–49",goal:"Modern web automation, powered by AI.",modules:[
  {name:"Playwright core",course:["Playwright + AI (TestGuild, free)","https://testguild.com/mastering-web-automation-with-ai-course/"],topics:[
   "Install and first test|Setting up Playwright in VS Code.",
   "Locators|getByRole, getByText and other ways to find elements.",
   "Actions|Click, type, select, upload.",
   "Assertions|Checking the page shows what it should.",
   "Auto-waiting|Why Playwright tests are less flaky.",
   "Codegen and UI mode|Recording and debugging tests.",
   "Fixtures and hooks|Setup and cleanup for each test.",
   "Screenshots, video and trace|Evidence when a test fails.",
   "Parallel and cross-browser|Chrome, Firefox and Safari at once.",
   "Network mocking|Faking API responses to test edge cases."]},
  {name:"Playwright + AI + MCP",course:["Playwright test agents (official docs)","https://playwright.dev/docs/test-agents"],topics:[
   "What MCP means for testers|A standard way for AI assistants to use tools like a browser.",
   "Playwright MCP server|Letting an AI assistant open pages, click and read results.",
   "Playwright test agents|Official planner, generator and healer agents.",
   "Planning tests with AI|Turning a feature into a test plan, then reviewing it.",
   "Generating tests with AI|Getting a first draft of a test, then cleaning it up.",
   "Healing broken tests|Fixing changed locators, and knowing when a failure is a real bug.",
   "Reviewing AI-written tests|Checking assertions, data and coverage yourself."]}]},
 {name:"Selenium with AI and MCP",days:"Days 50–61",goal:"The tool many companies and interviews still use.",modules:[
  {name:"Selenium WebDriver (Java)",course:["Selenium documentation","https://www.selenium.dev/documentation/"],topics:[
   "Selenium architecture|WebDriver, browser drivers and Selenium Manager.",
   "Locators: id, CSS, XPath|Writing locators that do not break.",
   "Waits|Implicit, explicit and fluent waits.",
   "TestNG or JUnit|Running, grouping and prioritising tests.",
   "Handling alerts, frames, windows|Tricky page parts.",
   "Page Object Model and Page Factory|Clean, reusable page classes.",
   "Selenium Grid and parallel runs|Many browsers at once.",
   "Selenium vs Playwright|When each is used."]},
  {name:"Selenium + AI + MCP",course:["MCP server for Selenium (community)","https://github.com/angiejones/mcp-selenium"],topics:[
   "AI-generated page objects|Drafting page classes from a page, then reviewing.",
   "Self-healing locators|Tools that find an element after the page changes.",
   "Selenium MCP server|Letting an AI assistant drive Selenium.",
   "AI for flaky test triage|Grouping failures and spotting patterns."]}]},
 {name:"API testing",days:"Days 62–70",goal:"Test the backend that every app depends on.",modules:[
  {name:"API basics",course:["Postman Academy","https://academy.postman.com/"],topics:[
   "What an API is|How apps talk to servers.",
   "HTTP methods|GET, POST, PUT, DELETE.",
   "Status codes|200, 400, 401, 404, 500 and what they mean.",
   "JSON|The data format APIs use."]},
  {name:"Postman and code",course:["Postman Student Expert badge","https://academy.postman.com/postman-api-fundamentals-student-expert-certification-1"],topics:[
   "Collections and environments|Organising requests.",
   "Writing tests in Postman|Checking responses automatically.",
   "Authentication and tokens|Testing secure APIs.",
   "Newman|Running Postman tests from the command line.",
   "API tests in Playwright|UI and API tests in one framework.",
   "REST Assured (Java)|API tests in the Selenium/Appium Java stack."]}]},
 {name:"Mobile testing with Appium, AI and MCP",days:"Days 71–89",goal:"Automate Android and iOS apps.",modules:[
  {name:"Mobile testing basics",course:["Appium documentation","https://appium.io/docs/en/latest/"],topics:[
   "Native, hybrid and mobile web apps|Three kinds of mobile apps.",
   "Android vs iOS testing|Differences that change your tests.",
   "Emulators, simulators, real devices|Where to run tests.",
   "Android Studio, adb and Xcode setup|Tools you need.",
   "Manual mobile checks|Install, interrupts, network, rotation, permissions."]},
  {name:"Appium automation",course:["Appium documentation","https://appium.io/docs/en/latest/"],topics:[
   "Appium 2 architecture|Server, drivers and client libraries.",
   "UiAutomator2 and XCUITest drivers|Android and iOS engines.",
   "Appium Inspector|Finding elements on a phone screen.",
   "Mobile locators|Accessibility id, id, XPath and their trade-offs.",
   "Gestures|Tap, swipe, scroll and long press with W3C actions.",
   "App states, permissions, deep links|Controlling the app from tests.",
   "Hybrid apps and webviews|Switching contexts between native and web.",
   "Screen objects|The Page Object Model for mobile.",
   "Parallel devices and device clouds|BrowserStack and Sauce Labs device farms.",
   "Practice app|Sauce Labs My Demo App for Android and iOS."]},
  {name:"Appium + AI + MCP",course:["Appium MCP server (official)","https://github.com/appium/appium-mcp"],topics:[
   "Appium MCP server|Letting an AI assistant drive a phone through Appium.",
   "Mobile MCP servers|Other MCP servers for Android and iOS devices.",
   "AI-generated mobile tests|First drafts from a screen, then reviewed.",
   "AI visual checks|Catching layout problems on many screen sizes.",
   "Limits of AI on mobile|Gestures, timing and device differences to verify yourself."]}]},
 {name:"Framework design and implementation",days:"Days 90–100",goal:"Build a framework a team can use for years.",modules:[
  {name:"Architecture",course:["Playwright course (Mukesh Otwani)","https://classcentral.com/course/youtube-playwright-automation-tutorial-for-beginners-from-scratch-412487"],topics:[
   "Framework layers|Tests, pages/screens, API clients, utilities, config.",
   "Design patterns|Page Object, Screenplay, Factory, Singleton driver, Builder.",
   "Configuration and environments|Dev, QA, staging without code changes.",
   "Test data strategy|Builders, fixtures and cleaning up after tests.",
   "Logging and reporting|Allure and HTML reports people actually read.",
   "Retries and flaky tests|When to retry, and when to fix.",
   "Hybrid framework|UI, API and mobile tests sharing one core.",
   "BDD layer|Cucumber on top of your framework.",
   "Running in Docker and CI|Same results on every machine.",
   "Code reviews and standards|Keeping the framework clean.",
   "Quality metrics|Pass rate, flakiness, run time, coverage."]}]},
 {name:"Advanced skills",days:"Days 101–107",goal:"Skills that raise your pay.",modules:[
  {name:"CI/CD and tools",course:["Test with Actions (GitHub Skills)","https://github.com/skills/test-with-actions"],topics:[
   "GitHub Actions|Tests run on every code change.",
   "Docker basics|Same test setup on any machine.",
   "Performance testing intro|Checking speed under load with k6 or JMeter.",
   "Accessibility testing|Making apps usable for everyone, with tools like axe and Lighthouse.",
   "Security testing basics|The OWASP Top 10 risks every tester should check.",
   "Compatibility and responsive testing|Different browsers, phones and screen sizes.",
   "Web performance checks|Page speed with Lighthouse.",
   "Logs and monitoring|Using logs to find what went wrong in production.",
   "Cypress overview|Another popular web automation tool, compared with Playwright."]},
  {name:"AI and MCP for testers",course:["Playwright test agents (official docs)","https://playwright.dev/docs/test-agents"],topics:[
   "Using AI to write test ideas|Faster test design, checked by you.",
   "Connecting AI assistants to tools with MCP|Browser, device, cloud and tracker servers.",
   "Device cloud MCP|Running tests on BrowserStack from an AI assistant.",
   "Testing AI chatbots|Accuracy, safety and consistency checks.",
   "Privacy when using AI|Never paste real customer data.",
   "Limits of AI in testing|What you must still verify yourself."]}]},
 {name:"Career and earning",days:"Days 108–115",goal:"Turn the skill into income.",modules:[
  {name:"Get hired or get clients",course:["Upwork","https://www.upwork.com"],topics:[
   "Portfolio and README|Making your GitHub easy to judge.",
   "Resume and LinkedIn|Showing automation and AI skills clearly.",
   "Interview questions|Playwright, Selenium, Appium, API and framework questions.",
   "Paid testing sites|UI feedback sites vs bug-finding sites.",
   "Upwork and Fiverr profiles|Writing a profile that wins work.",
   "Proposals and pricing|What to charge and how to pitch."]}]}
 ],
 earn:true,
 repos:[["AutomationPanda/awesome-web-testing-playwright","https://github.com/AutomationPanda/awesome-web-testing-playwright","Practice project for Playwright web testing."],["microsoft/playwright-mcp","https://github.com/microsoft/playwright-mcp","Official Playwright MCP server."],["appium/appium-mcp","https://github.com/appium/appium-mcp","Official Appium MCP server."],["saucelabs/my-demo-app-android","https://github.com/saucelabs/my-demo-app-android","Practice Android app for Appium."],["saucelabs/my-demo-app-ios","https://github.com/saucelabs/my-demo-app-ios","Practice iOS app for Appium."]]
},


ai:{name:"AI with Projects",short:"AI",color:"var(--l-ai)",days:105,perDay:"2 hr",
 forWho:"Anyone curious about AI. School-level maths is enough; Python is taught from zero.",
 outcome:["Write Python and work with data","Understand how machine learning and LLMs work inside","Build generative AI apps such as chat-with-your-PDF","Build AI agents that use tools, and show 3 projects on GitHub"],
 cert:"Hugging Face Agents Course certificate (free); CS50P certificate (free)",
 levels:[
 {name:"Foundations",days:"Days 1–18",goal:"Python, GitHub and the big picture of AI.",modules:[
  {name:"What AI is",course:["Generative AI for Beginners","https://github.com/microsoft/generative-ai-for-beginners"],topics:[
   "AI, ML, deep learning, GenAI|How these words relate.",
   "What LLMs can and cannot do|Strengths, mistakes and limits.",
   "Real uses of AI|Examples from work and daily life."]},
  {name:"Python",course:["CS50's Python (Harvard)","https://cs50.harvard.edu/python"],topics:[
   "Variables and types|Storing numbers and text.",
   "Conditions and loops|Decisions and repetition.",
   "Functions|Reusable code.",
   "Lists and dictionaries|Collections of data.",
   "Files and errors|Reading files and handling problems.",
   "Libraries and virtual environments|Installing and using packages.",
   "Classes|Grouping data and behaviour."]},
  {name:"Git and GitHub",course:["GitHub Skills","https://skills.github.com"],topics:[
   "Commits and branches|Saving your work safely.",
   "Your first public repo|Sharing a project."]}]},
 {name:"Data skills",days:"Days 19–29",goal:"Load, clean and chart data.",modules:[
  {name:"Data tools",course:["Kaggle Learn: pandas","https://www.kaggle.com/learn/pandas"],topics:[
   "Jupyter and Google Colab|Free notebooks in the browser.",
   "NumPy|Fast maths on lists of numbers.",
   "pandas|Working with tables of data.",
   "matplotlib|Drawing charts.",
   "Cleaning data|Missing values, wrong types, duplicates."]},
  {name:"Maths you need",course:["Khan Academy: linear algebra","https://www.khanacademy.org/math/linear-algebra"],topics:[
   "Vectors and matrices|Lists and tables of numbers.",
   "Probability basics|Chance and averages.",
   "The idea of a derivative|How a small change affects a result."]}]},
 {name:"Machine learning",days:"Days 30–47",goal:"Train and judge simple models.",modules:[
  {name:"ML basics",course:["Google Machine Learning Crash Course","https://developers.google.com/machine-learning/crash-course"],topics:[
   "Supervised and unsupervised learning|Learning with and without answers.",
   "Regression|Predicting a number.",
   "Classification|Predicting a category.",
   "Train and test split|Checking the model on unseen data.",
   "Accuracy, precision, recall|Measuring how good a model is.",
   "Overfitting|When a model memorises instead of learns.",
   "scikit-learn project|Your first full ML project."]}]},
 {name:"Deep learning and LLMs",days:"Days 48–64",goal:"See how neural networks and LLMs work inside.",modules:[
  {name:"Neural networks",course:["Neural Networks: Zero to Hero","https://karpathy.ai/zero-to-hero.html"],topics:[
   "Neurons and layers|The building blocks.",
   "Backpropagation|How a network learns from mistakes.",
   "PyTorch basics|The main deep learning library.",
   "Embeddings|Turning words into numbers with meaning."]},
  {name:"Transformers and LLMs",course:["Hugging Face LLM course","https://huggingface.co/learn/llm-course"],topics:[
   "Attention and transformers|The idea behind modern AI.",
   "Tokens|How text is split for a model.",
   "Pretraining, fine-tuning, RLHF|How chat models are made.",
   "Using open models|Running models from Hugging Face."]}]},
 {name:"Generative AI",days:"Days 65–82",goal:"Build useful GenAI apps.",modules:[
  {name:"Prompting and APIs",course:["Prompt Engineering for Developers","https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/"],topics:[
   "Prompt engineering|Clear instructions, examples, roles.",
   "Zero-shot and few-shot prompts|Asking with no examples vs with a few examples.",
   "Chain of thought|Asking the model to work step by step.",
   "Temperature and top-p|Settings that make answers more creative or more consistent.",
   "Hallucinations|Why models invent facts and how to reduce it.",
   "Context engineering|Giving the model the right information at the right time.",
   "Calling an LLM API|Your first AI app in code.",
   "Streaming responses|Showing the answer word by word.",
   "Structured output|Getting JSON back reliably.",
   "Tokens and cost|Keeping AI apps cheap."]},
  {name:"Choosing and running models",course:["Hugging Face LLM course","https://huggingface.co/learn/llm-course"],topics:[
   "Open vs closed models|Trade-offs in cost, privacy and quality.",
   "Choosing the right model|Speed, price and quality for your task.",
   "Running models on your laptop|Local models with Ollama or LM Studio.",
   "Multimodal AI|Models that understand images, audio and video.",
   "Speech to text and text to speech|Voice in and voice out."]},
  {name:"RAG: chat with your documents",course:["Generative AI for Beginners","https://github.com/microsoft/generative-ai-for-beginners"],topics:[
   "Embeddings and vector databases|Searching by meaning.",
   "Chunking documents|Splitting PDFs for search.",
   "Retrieval-augmented generation|Answers grounded in your files.",
   "Evaluating answers|Checking accuracy and sources."]},
  {name:"More GenAI",course:["Hugging Face LLM course","https://huggingface.co/learn/llm-course"],topics:[
   "Image generation basics|How text-to-image works.",
   "Fine-tuning basics (LoRA)|Teaching a model your style cheaply.",
   "Responsible AI|Bias, privacy and safety."]}]},
 {name:"Agentic AI",days:"Days 83–96",goal:"Build agents that plan and use tools.",modules:[
  {name:"Agent fundamentals",course:["Hugging Face Agents Course","https://huggingface.co/learn/agents-course"],topics:[
   "What an AI agent is|An LLM that can take steps and use tools.",
   "Tool use and function calling|Letting AI call your code.",
   "Planning and ReAct|Think, act, observe, repeat.",
   "The agent loop and stopping rules|How an agent keeps going and when it must stop.",
   "Short-term and long-term memory|Remembering within a task and across sessions.",
   "Human in the loop|Asking a person before risky steps."]},
  {name:"Safety, evaluation and monitoring",course:["AI Agents for Beginners","https://github.com/microsoft/ai-agents-for-beginners"],topics:[
   "Prompt injection and jailbreaks|How attackers trick AI apps, and defences.",
   "Tool permissions and sandboxing|Limiting what an agent is allowed to do.",
   "Protecting private data|Removing personal details before sending to AI.",
   "Evaluating RAG and agents|Measuring quality with tools like Ragas and DeepEval.",
   "Tracing and observability|Seeing every step with Langfuse or LangSmith.",
   "Cost and speed monitoring|Tracking spend and response time in production."]},
  {name:"Frameworks and protocols",course:["AI Agents for Beginners","https://github.com/microsoft/ai-agents-for-beginners"],topics:[
   "smolagents|Hugging Face's simple agent library.",
   "LangGraph|Agents as step-by-step graphs.",
   "MCP|A standard way to connect AI to tools and data.",
   "Multi-agent systems|Several agents working together.",
   "Guardrails and evaluation|Keeping agents safe and correct."]},
  {name:"Deploy your app",course:["Streamlit: get started","https://docs.streamlit.io/get-started"],topics:[
   "Streamlit or Gradio UI|A simple web page for your app.",
   "FastAPI|Serving your AI as an API.",
   "Hugging Face Spaces|Free hosting for demos."]},
  {name:"AI coding assistants",course:["Claude Academy","https://academy.claude.com"],topics:[
   "What a coding agent is|AI that reads, writes and runs code for you.",
   "Using Claude Code or Cursor|Building faster with an AI pair programmer.",
   "Reviewing AI-written code|Checking, testing and owning what the AI wrote."]}]},
 {name:"Capstone projects",days:"Days 97–105",goal:"Three projects that prove your skill.",modules:[
  {name:"Build and publish",course:["anthropics/courses","https://github.com/anthropics/courses"],topics:[
   "Project 1: chat with your PDFs|A RAG app with sources.",
   "Project 2: test-case writer agent|An agent that drafts test cases from a feature description.",
   "Project 3: news summariser|Daily summary of market news (education only).",
   "README and demo video|Making projects easy to understand.",
   "Sharing on LinkedIn|Posting your work to get noticed."]}]}
 ],
 repos:[["microsoft/generative-ai-for-beginners","https://github.com/microsoft/generative-ai-for-beginners","21 lessons with code."],["microsoft/ai-agents-for-beginners","https://github.com/microsoft/ai-agents-for-beginners","Agent lessons with code and videos."],["huggingface/agents-course","https://github.com/huggingface/agents-course","Code for the free certified agents course."],["karpathy/nn-zero-to-hero","https://github.com/karpathy/nn-zero-to-hero","Notebooks for the Zero to Hero lectures."]]
},

claude:{name:"Claude: Beginner to Power User",short:"Claude",color:"var(--l-claude)",days:20,perDay:"1 hr",
 forWho:"Anyone. Levels 1–3 need no technical skill; Levels 4–5 need basic Python.",
 outcome:["Use Claude well for daily work and study","Write prompts that get reliable results","Build a small app with the Claude API","Connect tools with MCP and earn free Claude Academy certificates"],
 cert:"Free certificate for each Claude Academy course",
 note:"Claude Academy (academy.claude.com) replaced Anthropic Academy in August 2026. Course names may change; search the title on the site. Claude Code needs a paid Claude plan.",
 levels:[
 {name:"Getting started",days:"Days 1–3",goal:"Use Claude confidently.",modules:[
  {name:"Claude 101",course:["Claude Academy","https://academy.claude.com"],topics:[
   "What Claude is|An AI assistant made by Anthropic.",
   "Free and paid plans|What each plan includes.",
   "Your first chats|Asking clear questions and following up.",
   "Uploading files and images|Asking about your own documents.",
   "Projects|Keeping files and chats for one topic together.",
   "Privacy settings|Controlling memory and data use."]}]},
 {name:"Prompting",days:"Days 4–7",goal:"Get reliable, high-quality answers.",modules:[
  {name:"Prompt skills",course:["Prompt engineering guide","https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview"],topics:[
   "Be clear and specific|Say the goal, audience and format.",
   "Give context|Background that changes the answer.",
   "Use examples|Show good and bad samples.",
   "Ask for step-by-step thinking|Better answers on hard problems.",
   "Structure with tags and lists|Organising long prompts.",
   "Improve by iterating|Refining a prompt in rounds.",
   "Your prompt library|Saving prompts that work."]}]},
 {name:"Claude for work",days:"Days 8–11",goal:"Save real hours every week.",modules:[
  {name:"AI Fluency",course:["Claude Academy","https://academy.claude.com"],topics:[
   "When to trust and when to check|Spotting mistakes.",
   "Research with web search|Answers with sources.",
   "Documents, sheets and slides|Making and editing work files.",
   "Analysing data|Questions about a spreadsheet.",
   "Writing test cases and bug reports|Uses for testers.",
   "Connecting your apps|Using Claude with Drive, email and more."]}]},
 {name:"Building with the API",days:"Days 12–13",goal:"Make your own Claude-powered app.",modules:[
  {name:"Claude API",course:["anthropics/courses","https://github.com/anthropics/courses"],topics:[
   "API keys and the console|Getting set up.",
   "Messages API|Sending a prompt from code.",
   "System prompts|Setting rules for your app.",
   "Tool use|Letting Claude call your functions.",
   "Evaluating prompts|Testing quality before launch.",
   "Cost basics|Tokens, caching and batches."]}]},
 {name:"Advanced: MCP and Claude Code",days:"Days 14–19",goal:"Connect tools and work in code.",modules:[
  {name:"MCP",course:["Claude Academy","https://academy.claude.com"],topics:[
   "Introduction to MCP|Connecting Claude to tools and data.",
   "MCP hosts, clients and servers|The three parts and what each does.",
   "Build a small MCP server|Example: read a CSV file."]},
  {name:"Claude Code",course:["Claude Academy","https://academy.claude.com"],topics:[
   "What a coding agent is|Claude reads, edits and runs code in your project.",
   "Install and first session|Starting Claude Code in a project folder.",
   "CLAUDE.md project memory|A file that tells Claude your project's rules.",
   "Plan mode|Agree the plan before any code changes.",
   "Permissions and safety|Choosing what Claude may do without asking.",
   "Slash commands|Shortcuts such as clearing or compacting the conversation.",
   "Managing context|Keeping long sessions focused and cheaper.",
   "Connecting tools with MCP|Giving Claude Code access to other tools.",
   "Subagents|Splitting big work into focused helpers.",
   "Skills|Reusable instructions for repeated tasks.",
   "Hooks|Running your own checks before or after Claude acts.",
   "Git, worktrees and GitHub Actions|Using Claude Code with branches and CI.",
   "Usage and cost|Plans, limits and ways to use fewer tokens."]}]},
 {name:"Certificates",days:"Day 20",goal:"Show what you learned.",modules:[
  {name:"Finish and share",course:["Claude Academy","https://academy.claude.com"],topics:[
   "Download certificates|One for each finished course.",
   "Add to LinkedIn|Making them visible to employers.",
   "Share one project|Proof beyond a certificate."]}]}
 ],
 repos:[["anthropics/courses","https://github.com/anthropics/courses","Notebook courses: API basics, prompting, evaluations, tool use."]]
},

tools:{name:"AI Tools Hub",short:"AI Tools",color:"var(--l-tools)",days:10,perDay:"45 min",
 forWho:"Anyone who wants to use AI tools for study, work or a side business.",
 outcome:["Pick the right AI tool for each job","Use AI safely without leaking private data","Do research, writing, design and coding faster","Automate repeated tasks"],
 cert:"No certificate (use Claude Academy for one)",
 levels:[
 {name:"Basics",days:"Days 1–3",goal:"Use chat assistants safely.",modules:[
  {name:"Chat assistants",course:["Claude Academy","https://academy.claude.com"],topics:[
   "What AI chat tools do|Claude, ChatGPT, Gemini, Copilot compared.",
   "Safe use|Never paste passwords, bank or personal ID details.",
   "Checking answers|AI can be confidently wrong.",
   "Prompting for any tool|The same habits work everywhere."]}]},
 {name:"Tools by job",days:"Days 4–8",goal:"The best tool for each task.",modules:[
  {name:"Pick by task",course:["Generative AI for Beginners","https://github.com/microsoft/generative-ai-for-beginners"],topics:[
   "Research with sources|Perplexity and web search in chat tools.",
   "Study from your notes|NotebookLM for PDFs and notes.",
   "Writing and email|Drafting, rewriting, summarising.",
   "Design and images|Canva for posters and thumbnails.",
   "Coding help|GitHub Copilot and chat tools.",
   "Building with models|Google AI Studio and Hugging Face."]}]},
 {name:"Automation",days:"Days 9–10",goal:"Let AI do repeated work.",modules:[
  {name:"Workflows",course:["n8n","https://n8n.io"],topics:[
   "What workflow automation is|Trigger, steps, result.",
   "Your first n8n flow|Form to sheet to email.",
   "Adding an AI step|Auto-reply and sorting messages.",
   "Selling automations|Small businesses that pay for this."]}]}
 ],
 hub:true,repos:[]
}
};
