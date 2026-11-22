// C, C++, Java, Python, SQL, Frontend, Full Stack, Android, iOS + testing videos
// ---- Programming and development courses (original syllabus; videos checked via YouTube oEmbed) ----
const yt=(id,t,ch,len)=>({t,u:"https://www.youtube.com/watch?v="+id,ch,len});
const ypl=(id,t,ch)=>({t,u:"https://www.youtube.com/playlist?list="+id,ch});
const V2={
 cEn:yt("KJgsSFOSQv0","C Programming Tutorial for Beginners","freeCodeCamp.org","3:46:13"),
 cEn2:yt("xND0t1pr3KY","C Programming Full Course","Bro Code"),
 cHi:yt("ZSPZob_1TOk","C Language Tutorial for Beginners in Hindi (with notes)","CodeWithHarry"),
 cHiPl:ypl("PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR","C Language Tutorials in Hindi (playlist)","CodeWithHarry"),
 cppEn:yt("vLnPwxZdW4Y","C++ Tutorial for Beginners – Full Course","freeCodeCamp.org"),
 cppEn2:yt("-TkoO8Z07hI","C++ Full Course","Bro Code"),
 cppHi:yt("yGB9jhsEsr8","C++ Tutorial for Beginners in Hindi","CodeWithHarry"),
 cppHiPl:ypl("PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL","C++ Tutorials in Hindi (playlist)","CodeWithHarry"),
 cppDsaHi:ypl("PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ","C++ Full Course + DSA (playlist)","Apna College"),
 dsaEn:yt("CBYHwZcbD-s","Data Structures and Algorithms Full Course","Bro Code"),
 a2z:ypl("PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz","Striver's A2Z DSA Course (playlist)","take U forward"),
 javaEn:yt("xk4_1vDrzzo","Java Full Course","Bro Code","12:00:00"),
 javaEn2:yt("A74TOX803D0","Java Programming for Beginners – Full Course","freeCodeCamp.org"),
 javaHi:ypl("PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q","Java Tutorials for Beginners in Hindi (playlist)","CodeWithHarry"),
 javaHi2:yt("yRpLlJmRo2w","Introduction to Java – Placement Course Lecture 1","Apna College"),
 javaOopHi:yt("bSrm9RXwBaI","Java OOPs in One Shot","Apna College"),
 pyEn:yt("rfscVS0vtbw","Learn Python – Full Course for Beginners","freeCodeCamp.org"),
 pyEn2:yt("ix9cRaBkVe0","Python Full Course","Bro Code"),
 pyHi:yt("ihk_Xglr164","Python Tutorial in Hindi","CodeWithHarry"),
 pyHiPl:ypl("PLu0W_9lII9agwh1XjRt242xIpHhPT2llg","100 Days of Python in Hindi (playlist)","CodeWithHarry"),
 django:yt("F5mRW0jo-U4","Python Django Web Framework – Full Course","freeCodeCamp.org"),
 sqlEn:yt("HXV3zeQKqGY","SQL Tutorial – Full Database Course for Beginners","freeCodeCamp.org"),
 sqlEn2:yt("5OdVJbNCSso","SQL Full Course","Bro Code"),
 sqlHi:yt("hlGoQC332VM","SQL – Complete Course in 3 Hours (MySQL)","Apna College"),
 html:yt("pQN-pnXPaVg","HTML Full Course – Build a Website","freeCodeCamp.org"),
 css:yt("OXGznpKZ_sA","CSS Tutorial – Full Course for Beginners","freeCodeCamp.org"),
 js:yt("PkZNo7MFNFg","Learn JavaScript – Full Course for Beginners","freeCodeCamp.org"),
 react:yt("bMknfKXIFA8","React Course – Beginner's Tutorial","freeCodeCamp.org"),
 react2:yt("SqcY0GlETPk","React Tutorial for Beginners","Programming with Mosh"),
 sigma:ypl("PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w","Sigma Web Development Course in Hindi (playlist)","CodeWithHarry"),
 apnaWeb:ypl("PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n","Web Development Course (playlist)","Apna College"),
 reactHi:ypl("PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt","React JS Tutorials in Hindi (playlist)","CodeWithHarry"),
 fullstack:yt("nu_pCVPKzTk","Full Stack Web Development for Beginners","freeCodeCamp.org"),
 node:yt("Oe421EPjeBE","Node.js and Express.js – Full Course","freeCodeCamp.org"),
 node2:yt("f2EqECiTBL8","Node.js Full Course for Beginners","Dave Gray"),
 andEn:yt("fis26HvvDII","Android Development for Beginners – Full Course","freeCodeCamp.org"),
 kotlin:yt("EExSSotojVI","Learn Kotlin Programming – Full Course","freeCodeCamp.org"),
 andMaster:yt("blKkRoZPxLc","Android & Kotlin Development Masterclass","freeCodeCamp.org"),
 andHi:yt("mXjZQX3UzOs","Android Development Tutorial for Beginners in Hindi (with notes)","CodeWithHarry"),
 kotlinHi:ypl("PLRZ8CrOUWVbIvLHEktig6PoE5v2WydQYL","Kotlin Full Course in Hindi (playlist)","PhoneLess"),
 cs193p:ypl("PLoROMvodv4rPHblRXKsJCQs8TLGpiCTrG","Stanford CS193p: iOS Development with SwiftUI (playlist)","Stanford Online"),
 swift:yt("CwA1VWP0Ldw","Swift Programming Tutorial – Full Course","Sean Allen"),
 swiftui:yt("b1oC7sLIgpI","SwiftUI Fundamentals – Full Course","Sean Allen"),
 iosHi:yt("n7qOGHWunUY","iOS App Development Crash Course in Hindi","Akash Padhiyar"),
 swiftuiHi:yt("GRY7bZSZDBY","SwiftUI Tutorial for Beginners in Hindi","Yogesh Patel"),
 swiftHiPl:ypl("PLFumv15NAI-U6x-ksTjEwdHVYokrTvOhk","iOS App Development Swift 5 in Hindi (playlist)","Brain4Code Learning")
};
const M=(en,hi)=>({en,hi});
const LAD="https://developer.android.com/courses/android-basics-compose/course";
const LIOS="https://developer.apple.com/tutorials/develop-in-swift";

Object.assign(SYL,{
c:{name:"C Programming",short:"C",color:"var(--l-c)",days:55,perDay:"1.5 hr",group:"Programming languages",
 forWho:"Absolute beginners and students. No coding needed before.",
 outcome:["Write, compile and debug C programs","Understand memory, pointers and how a computer really runs code","Build data structures from scratch","Be ready for C++, embedded systems and DSA"],
 cert:"CS50x certificate from Harvard (free; uses C in early weeks)",see:"https://roadmap.sh/c",
 next:["C++ (adds objects and the STL)","Data structures and algorithms","Embedded systems and microcontrollers","Linux system programming"],
 levels:[
 {name:"Getting started",days:"Days 1–7",goal:"Write and run your first programs.",modules:[
  {name:"Setup and first program",course:["CS50x (Harvard)","https://cs50.harvard.edu/x/"],topics:["What C is and where it is used|Operating systems, devices, games.","Compiler and IDE setup|GCC or Clang with VS Code.","Hello world and program structure|main, headers, statements.","Compiling and running|From source code to a program.","Reading compiler errors|Fixing the most common mistakes."]}]},
 {name:"Core language",days:"Days 8–21",goal:"The building blocks of every program.",modules:[
  {name:"Basics",course:["CS50x (Harvard)","https://cs50.harvard.edu/x/"],topics:["Variables and data types|int, float, char, double.","Input and output|printf and scanf.","Operators|Maths, comparison, logic.","if, else and switch|Making decisions.","Loops|for, while, do-while.","Functions|Splitting work into reusable parts.","Scope and storage classes|Where variables live.","Recursion|A function calling itself."]}]},
 {name:"Memory and pointers",days:"Days 22–36",goal:"The part that makes C powerful.",modules:[
  {name:"Arrays, strings, pointers",course:["CS50x (Harvard)","https://cs50.harvard.edu/x/"],topics:["Arrays|Many values in one variable.","Strings|Character arrays and string functions.","Pointers|Variables that hold addresses.","Pointer arithmetic|Moving through memory.","Pointers and functions|Passing by reference.","Dynamic memory|malloc, calloc, realloc, free.","Memory bugs|Leaks, dangling pointers, buffer overflows.","Debugging with gdb and Valgrind|Finding crashes and leaks."]}]},
 {name:"Structuring programs",days:"Days 37–45",goal:"Programs bigger than one file.",modules:[
  {name:"Structs and files",course:["CS50x (Harvard)","https://cs50.harvard.edu/x/"],topics:["Structures and unions|Grouping related data.","Enums and typedef|Readable custom types.","File handling|Reading and writing files.","Header files and multi-file programs|Organising code.","Makefiles|Building projects with one command.","Preprocessor|#define, #include, macros."]}]},
 {name:"Data structures in C",days:"Days 46–55",goal:"Build the classics yourself.",modules:[
  {name:"Data structures",course:["Data Structures and Algorithms (Bro Code)","https://www.youtube.com/watch?v=CBYHwZcbD-s"],topics:["Linked lists|Nodes joined by pointers.","Stacks and queues|Last-in-first-out and first-in-first-out.","Hash tables|Fast lookups by key.","Binary trees|Hierarchical data.","Sorting and searching|Bubble, merge, quick sort; binary search.","Big-O notation|How fast code grows with input."]}]}
 ],
 repos:[["TheAlgorithms/C",GH("TheAlgorithms/C"),"Algorithms written in C to read and practise."],["jamesroutley/write-a-hash-table",GH("jamesroutley/write-a-hash-table"),"Step-by-step hash table in C."],["cstack/db_tutorial",GH("cstack/db_tutorial"),"Build a simple database from scratch in C."]]
},
cpp:{name:"C++ Programming",short:"C++",color:"var(--l-cpp)",days:65,perDay:"1.5 hr",group:"Programming languages",
 forWho:"Beginners (C helps but is not required) and students preparing for placements.",
 outcome:["Write modern C++ with classes and the STL","Manage memory safely with smart pointers","Solve DSA problems for coding interviews","Build performance-critical apps like games and engines"],
 cert:"No official free certificate; a solved DSA sheet and GitHub projects count more",see:"https://roadmap.sh/cpp",
 next:["Data structures and algorithms (placement prep)","Game development (Unreal Engine)","Systems and high-performance computing","Competitive programming"],
 levels:[
 {name:"Basics",days:"Days 1–13",goal:"Comfortable writing C++ programs.",modules:[
  {name:"C++ fundamentals",course:["C++ (cplusplus.com tutorial)","https://cplusplus.com/doc/tutorial/"],topics:["Setup and first program|Compiler, IDE, hello world.","Variables, types and input/output|cin and cout.","Conditions and loops|Control flow.","Functions and overloading|Same name, different inputs.","References|Aliases for variables.","Arrays and strings|std::string and C-style strings."]}]},
 {name:"Object-oriented C++",days:"Days 14–29",goal:"Design programs with classes.",modules:[
  {name:"OOP",course:["C++ (cplusplus.com tutorial)","https://cplusplus.com/doc/tutorial/"],topics:["Classes and objects|Bundling data and behaviour.","Constructors and destructors|Setting up and cleaning up.","Encapsulation|public, private, protected.","Inheritance|Building on existing classes.","Polymorphism and virtual functions|One interface, many forms.","Abstract classes and interfaces|Pure virtual functions.","Operator overloading|Custom +, ==, <<.","Friend functions and static members|Special access and shared data."]}]},
 {name:"Memory and modern C++",days:"Days 30–42",goal:"Safe, fast, modern code.",modules:[
  {name:"Modern C++",course:["C++ (cplusplus.com tutorial)","https://cplusplus.com/doc/tutorial/"],topics:["Pointers and dynamic memory|new and delete.","RAII|Resources tied to object lifetime.","Smart pointers|unique_ptr, shared_ptr, weak_ptr.","Move semantics|Avoiding needless copies.","Lambdas|Small inline functions.","auto, range-for, structured bindings|Modern syntax.","Exceptions|Handling errors.","Templates|Generic code for any type."]}]},
 {name:"STL",days:"Days 43–52",goal:"Use the standard library like a pro.",modules:[
  {name:"Standard Template Library",course:["C++ (cplusplus.com tutorial)","https://cplusplus.com/doc/tutorial/"],topics:["vector, list, deque|Sequence containers.","map, set, unordered_map|Associative containers.","stack, queue, priority_queue|Adapters.","Iterators|Walking through containers.","Algorithms|sort, find, binary_search, accumulate.","Strings and streams|Text processing and files."]}]},
 {name:"DSA and projects",days:"Days 53–65",goal:"Interview-ready problem solving.",modules:[
  {name:"Data structures and algorithms",course:["Striver's A2Z DSA Course","https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"],topics:["Complexity analysis|Big-O for time and space.","Arrays, strings, two pointers|Most common interview topics.","Recursion and backtracking|Trying all possibilities.","Linked lists, stacks, queues|Classic structures.","Trees and binary search trees|Hierarchies and fast search.","Graphs|BFS, DFS, shortest paths.","Dynamic programming|Breaking problems into sub-problems.","CMake and building projects|Real project builds."]}]}
 ],
 repos:[["TheAlgorithms/C-Plus-Plus",GH("TheAlgorithms/C-Plus-Plus"),"Algorithms in C++."],["ssloy/tinyrenderer",GH("ssloy/tinyrenderer"),"Write a 3D renderer in C++ in about 500 lines."],["ssloy/tinyraytracer",GH("ssloy/tinyraytracer"),"A ray tracer in a weekend-sized C++ project."]]
},
java:{name:"Java Programming",short:"Java",color:"var(--l-java)",days:80,perDay:"1.5 hr",group:"Programming languages",
 forWho:"Beginners, students and testers moving to Selenium/Appium.",
 outcome:["Write clean object-oriented Java","Use collections, streams and exceptions confidently","Build REST APIs with Spring Boot","Solve DSA problems for placements"],
 cert:"Oracle Java certification (paid, optional); free course certificates from the playlists",see:"https://roadmap.sh/java",
 next:["Spring Boot backend development","Selenium/Appium automation (Testing roadmap)","Android development","Data structures and algorithms"],
 levels:[
 {name:"Basics",days:"Days 1–13",goal:"Write your first Java programs.",modules:[
  {name:"Java fundamentals",course:["Dev.java (official Oracle learning)","https://dev.java/learn/"],topics:["JDK, JVM and JRE|How Java runs anywhere.","Setup with IntelliJ IDEA|Your coding environment.","Variables and data types|Primitives and String.","Operators and expressions|Maths and logic.","Conditions and loops|Control flow.","Methods|Reusable code.","Arrays|Fixed-size lists."]}]},
 {name:"Object-oriented programming",days:"Days 14–29",goal:"Think in objects.",modules:[
  {name:"OOP",course:["Dev.java (official Oracle learning)","https://dev.java/learn/"],topics:["Classes and objects|Blueprints and instances.","Constructors and this|Creating objects.","Encapsulation|Getters, setters, access modifiers.","Inheritance|extends and super.","Polymorphism|Overloading and overriding.","Abstraction and interfaces|Contracts between classes.","static and final|Shared and fixed members.","Packages and access|Organising code."]}]},
 {name:"Core APIs",days:"Days 30–47",goal:"Use Java's powerful standard library.",modules:[
  {name:"Core Java",course:["Dev.java (official Oracle learning)","https://dev.java/learn/"],topics:["Strings and StringBuilder|Working with text.","Exceptions|try, catch, finally, custom exceptions.","Collections|List, Set, Map and when to use each.","Generics|Type-safe collections and methods.","Lambdas and streams|Functional style data processing.","File I/O|Reading and writing files.","Dates and times|java.time.","Multithreading basics|Threads, executors, synchronisation."]}]},
 {name:"Tools and testing",days:"Days 48–56",goal:"Work like a professional Java developer.",modules:[
  {name:"Build and test",course:["Dev.java (official Oracle learning)","https://dev.java/learn/"],topics:["Maven and Gradle|Building and managing libraries.","JUnit 5|Writing unit tests.","Debugging in IntelliJ|Breakpoints and inspecting values.","Git for Java projects|Version control."]}]},
 {name:"Spring Boot backend",days:"Days 57–69",goal:"Build real web APIs.",modules:[
  {name:"Spring Boot",course:["Spring Boot guides","https://spring.io/guides"],topics:["Spring Boot basics|Starters and auto-configuration.","REST controllers|Building APIs.","Spring Data JPA|Talking to a database.","Validation and error handling|Clean API responses.","Spring Security basics|Login and roles.","Testing Spring apps|Unit and integration tests."]}]},
 {name:"DSA for placements",days:"Days 70–80",goal:"Crack coding rounds.",modules:[
  {name:"DSA in Java",course:["Striver's A2Z DSA Course","https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"],topics:["Big-O|Time and space.","Arrays and strings|Patterns like two pointers and sliding window.","Recursion|Thinking recursively.","Linked lists, stacks, queues|Classic structures.","Trees and graphs|BFS and DFS.","Dynamic programming basics|Memoisation and tabulation."]}]}
 ],
 repos:[["TheAlgorithms/Java",GH("TheAlgorithms/Java"),"Algorithms in Java."],["spring-projects/spring-petclinic",GH("spring-projects/spring-petclinic"),"The classic Spring Boot sample app."]]
},
python:{name:"Python Programming",short:"Python",color:"var(--l-python)",days:55,perDay:"1.5 hr",group:"Programming languages",
 forWho:"Complete beginners. Python is the easiest first language.",
 outcome:["Write clean Python programs and scripts","Automate boring tasks on your computer","Use libraries, APIs and files","Build a small web app or API"],
 cert:"CS50P certificate from Harvard (free)",see:"https://roadmap.sh/python",
 next:["Data Analyst roadmap","AI with Projects roadmap","Backend with Django or FastAPI","Test automation with Python"],
 levels:[
 {name:"Basics",days:"Days 1–12",goal:"Write simple programs with confidence.",modules:[
  {name:"Python basics",course:["CS50's Python (Harvard)","https://cs50.harvard.edu/python"],topics:["Install Python and VS Code|Your setup.","Variables and types|Numbers, text, booleans.","Input, output and f-strings|Talking to the user.","Conditions|if, elif, else.","Loops|for and while.","Functions|Reusable code with parameters and return."]}]},
 {name:"Data structures",days:"Days 13–22",goal:"Store and work with data.",modules:[
  {name:"Collections",course:["CS50's Python (Harvard)","https://cs50.harvard.edu/python"],topics:["Lists|Ordered, changeable collections.","Tuples|Fixed collections.","Dictionaries|Key-value pairs.","Sets|Unique items.","Comprehensions|Building lists in one line.","String methods|Working with text."]}]},
 {name:"Intermediate Python",days:"Days 23–37",goal:"Write real-world programs.",modules:[
  {name:"Intermediate",course:["CS50's Python (Harvard)","https://cs50.harvard.edu/python"],topics:["Errors and exceptions|try, except, raise.","Files and CSV|Reading and writing data.","Modules and packages|import and pip.","Virtual environments|Keeping projects separate.","Classes and objects|OOP in Python.","Regular expressions|Pattern matching in text.","Unit testing with pytest|Testing your code."]}]},
 {name:"Automation and APIs",days:"Days 38–46",goal:"Make Python do your boring work.",modules:[
  {name:"Automation",course:["Python docs tutorial","https://docs.python.org/3/tutorial/"],topics:["Working with folders and files|os and pathlib.","Excel and PDF automation|openpyxl and PDF libraries.","Calling web APIs|requests and JSON.","Web scraping basics|Reading pages responsibly.","Scheduling scripts|Run tasks every day."]}]},
 {name:"Web and next steps",days:"Days 47–55",goal:"Build a small web app.",modules:[
  {name:"Web with Python",course:["Django tutorial (official)","https://docs.djangoproject.com/en/stable/intro/tutorial01/"],topics:["Flask or FastAPI basics|A tiny API.","Django basics|Models, views, templates.","Databases with Python|SQLite and an ORM.","Deploying a Python app|Putting it online.","Git and GitHub|Sharing your code."]}]}
 ],
 repos:[["TheAlgorithms/Python",GH("TheAlgorithms/Python"),"Algorithms in Python."],["realpython/materials",GH("realpython/materials"),"Code for many Real Python tutorials."]]
},
sql:{name:"SQL and Databases",short:"SQL",color:"var(--l-sql)",days:30,perDay:"1 hr",group:"Programming languages",
 forWho:"Anyone: analysts, testers, developers. No coding needed before.",
 outcome:["Write queries from simple to advanced","Design good database tables","Use joins, CTEs and window functions","Make queries fast and safe"],
 cert:"Free course certificates; SQL tests on hiring sites",see:"https://roadmap.sh/sql",
 next:["Data Analyst roadmap","Backend development (Full Stack roadmap)","PostgreSQL administration","Data engineering"],
 levels:[
 {name:"Basics",days:"Days 1–7",goal:"Ask a database simple questions.",modules:[
  {name:"Getting started",course:["SQLBolt interactive lessons","https://sqlbolt.com"],topics:["What a database is|Tables, rows, columns.","Install MySQL or PostgreSQL|Your practice setup.","SELECT and FROM|Reading data.","WHERE|Filtering rows.","ORDER BY and LIMIT|Sorting and top results.","DISTINCT and aliases|Cleaner results."]}]},
 {name:"Working with data",days:"Days 8–15",goal:"Summarise and combine tables.",modules:[
  {name:"Queries",course:["SQLBolt interactive lessons","https://sqlbolt.com"],topics:["Aggregate functions|COUNT, SUM, AVG, MIN, MAX.","GROUP BY and HAVING|Totals per group.","INNER JOIN|Matching rows.","LEFT and RIGHT JOIN|Keeping unmatched rows.","Self join|Joining a table to itself.","UNION|Stacking results."]}]},
 {name:"Changing data and design",days:"Days 16–22",goal:"Create and maintain good databases.",modules:[
  {name:"DDL and DML",course:["SQLBolt interactive lessons","https://sqlbolt.com"],topics:["INSERT, UPDATE, DELETE|Changing data safely.","CREATE and ALTER TABLE|Building tables.","Data types|Choosing the right type.","Keys and constraints|Primary, foreign, unique, not null.","Normalisation|Avoiding repeated data.","ER diagrams|Drawing your design first."]}]},
 {name:"Advanced SQL",days:"Days 23–30",goal:"Interview and job-level SQL.",modules:[
  {name:"Advanced",course:["SQLBolt interactive lessons","https://sqlbolt.com"],topics:["Subqueries|Queries inside queries.","CTEs|Readable multi-step queries.","Window functions|ROW_NUMBER, RANK, LAG, running totals.","CASE expressions|If-else inside SQL.","Views and stored procedures|Reusable logic.","Transactions and ACID|All-or-nothing changes.","Indexes and query plans|Making queries fast.","SQL injection|How attacks work and how to prevent them."]}]}
 ],
 repos:[["lerocha/chinook-database",GH("lerocha/chinook-database"),"Sample music store database."],["datacharmer/test_db",GH("datacharmer/test_db"),"Employees sample database with millions of rows."]]
},
frontend:{name:"Frontend Development",short:"Frontend",color:"var(--l-web)",days:80,perDay:"2 hr",group:"App and web development",
 forWho:"Complete beginners who want to build websites and web app interfaces.",
 outcome:["Build responsive, accessible pages with HTML and CSS","Make pages interactive with JavaScript","Build React apps that call APIs","Test, optimise and deploy front-end projects"],
 cert:"freeCodeCamp Responsive Web Design and JavaScript certifications (free)",see:"https://roadmap.sh/frontend",
 next:["Full Stack Development","React Native or Flutter for mobile","UI/UX design basics","Frontend testing with Playwright"],
 levels:[
 {name:"How the web works",days:"Days 1–3",goal:"Know what happens when you open a website.",modules:[
  {name:"Web basics",course:["MDN Learn web development","https://developer.mozilla.org/en-US/docs/Learn"],topics:["Internet, servers and browsers|Who talks to whom.","HTTP and HTTPS|Requests and responses.","Domains, DNS and hosting|How a name finds a server.","Browser DevTools|Inspecting pages and network calls."]}]},
 {name:"HTML",days:"Days 4–11",goal:"Structure content correctly.",modules:[
  {name:"HTML",course:["freeCodeCamp Responsive Web Design","https://www.freecodecamp.org/learn"],topics:["Elements and attributes|The building blocks.","Semantic HTML|Header, nav, main, article, footer.","Links, images, media|Core content.","Tables and lists|Structured data.","Forms and inputs|Collecting user data.","Accessibility basics|Alt text, labels, keyboard."]}]},
 {name:"CSS",days:"Days 12–26",goal:"Make it beautiful and responsive.",modules:[
  {name:"CSS",course:["Web Dev for Beginners (Microsoft)",GH("microsoft/Web-Dev-For-Beginners")],topics:["Selectors and specificity|Which rule wins.","Box model|Margin, border, padding.","Typography and colours|Readable, branded text.","Flexbox|Rows and columns.","Grid|Two-dimensional layouts.","Responsive design|Media queries, mobile-first.","Transitions and animations|Smooth movement.","CSS variables and dark mode|Themes.","Tailwind CSS basics|Utility-first styling."]}]},
 {name:"JavaScript",days:"Days 27–48",goal:"Make pages interactive.",modules:[
  {name:"JavaScript",course:["The Odin Project","https://www.theodinproject.com"],topics:["Variables, types, operators|The basics.","Functions and scope|Reusable code.","Arrays and objects|Working with data.","Array methods|map, filter, reduce.","DOM manipulation|Changing the page.","Events|Clicks, typing, forms.","Fetch, promises and async/await|Loading API data.","Modules|import and export.","Error handling and debugging|Finding and fixing bugs.","Local storage|Saving small data."]}]},
 {name:"Tools",days:"Days 49–53",goal:"Professional workflow.",modules:[
  {name:"Developer tools",course:["GitHub Skills","https://skills.github.com"],topics:["Git and GitHub|Version control.","npm and packages|Using libraries.","Vite|Fast builds.","TypeScript|Safer JavaScript.","Linting and formatting|ESLint and Prettier."]}]},
 {name:"React",days:"Days 54–73",goal:"Modern app interfaces.",modules:[
  {name:"React",course:["React docs (official)","https://react.dev/learn"],topics:["Components and JSX|UI from pieces.","Props and state|Data in and changes over time.","Hooks|useState, useEffect, custom hooks.","Lists, keys and forms|Common patterns.","Routing|Multiple pages.","Fetching data|Loading, error and empty states.","Context and state management|Sharing data.","Next.js basics|Server rendering and routes."]}]},
 {name:"Quality and launch",days:"Days 74–80",goal:"Fast, tested, live.",modules:[
  {name:"Ship it",course:["Web Dev for Beginners (Microsoft)",GH("microsoft/Web-Dev-For-Beginners")],topics:["Testing with Vitest and Playwright|Catching bugs before users.","Web performance|Lighthouse and Core Web Vitals.","SEO basics|Being found on Google.","Deploying|Free hosting for front-ends.","Portfolio and freelancing|Showing and selling your work."]}]}
 ],
 repos:[["microsoft/Web-Dev-For-Beginners",GH("microsoft/Web-Dev-For-Beginners"),"24 lessons with projects."],["bradtraversy/50projects50days",GH("bradtraversy/50projects50days"),"50 small HTML, CSS and JS projects."],["florinpop17/app-ideas",GH("florinpop17/app-ideas"),"Graded app ideas."]]
},
fullstack:{name:"Full Stack Web Development",short:"Full Stack",color:"var(--l-full)",days:100,perDay:"2 hr",group:"App and web development",
 forWho:"Beginners ready for a longer path, or frontend developers adding the backend.",
 outcome:["Build complete apps: front end, API and database","Add login, security and file uploads","Deploy with CI and keep apps running","Take full freelance projects end to end"],
 cert:"freeCodeCamp certifications (free)",see:"https://roadmap.sh/full-stack",
 next:["DevOps and Cloud roadmap","System design basics","Mobile apps (Android or iOS)","AI features in web apps (AI roadmap)"],
 levels:[
 {name:"Frontend foundations",days:"Days 1–35",goal:"HTML, CSS, JavaScript and React (short version of the Frontend course).",modules:[
  {name:"Frontend essentials",course:["The Odin Project","https://www.theodinproject.com"],topics:["HTML and semantic structure|Pages that make sense.","CSS layout: Flexbox and Grid|Responsive layouts.","JavaScript core|Variables to async/await.","DOM and events|Interactive pages.","React fundamentals|Components, props, state, hooks.","Routing and data fetching|Real app structure."]}]},
 {name:"Backend with Node.js",days:"Days 36–55",goal:"Build the server side.",modules:[
  {name:"Node and Express",course:["The Odin Project","https://www.theodinproject.com"],topics:["Node.js basics|JavaScript on the server.","npm and project structure|Organising a backend.","Express routing|Handling requests.","Middleware|Logging, parsing, errors.","REST API design|Resources, methods, status codes.","Validation|Never trust input.","Environment variables|Config and secrets."]}]},
 {name:"Databases",days:"Days 56–68",goal:"Store data properly.",modules:[
  {name:"SQL and NoSQL",course:["SQLBolt interactive lessons","https://sqlbolt.com"],topics:["PostgreSQL basics|Relational data.","Schema design and relations|One-to-many, many-to-many.","ORMs (Prisma or Sequelize)|Database from code.","MongoDB basics|Document data.","Migrations and seeding|Changing the schema safely."]}]},
 {name:"Auth and security",days:"Days 69–78",goal:"Keep users and data safe.",modules:[
  {name:"Security",course:["OWASP Top 10","https://owasp.org/Top10/"],topics:["Password hashing|bcrypt and why.","Sessions and JWT|Staying logged in.","OAuth sign-in|Login with Google.","Roles and permissions|Who can do what.","OWASP Top 10 for developers|Common attacks.","CORS, HTTPS, rate limiting|Safe APIs."]}]},
 {name:"Full-stack features",days:"Days 79–90",goal:"Features real apps need.",modules:[
  {name:"Advanced features",course:["MDN Learn web development","https://developer.mozilla.org/en-US/docs/Learn"],topics:["File and image uploads|Storing files.","Real-time with WebSockets|Chat and live updates.","Payments basics|Test mode integration.","Emails and notifications|Sending messages.","Caching|Faster responses.","API testing and end-to-end tests|Postman and Playwright."]}]},
 {name:"Deploy and scale",days:"Days 91–100",goal:"Put it online and keep it healthy.",modules:[
  {name:"Deploy",course:["Docker getting started","https://docs.docker.com/get-started/"],topics:["Docker for your app|Same setup everywhere.","CI/CD with GitHub Actions|Test and deploy on push.","Hosting front-end and back-end|Free and cheap options.","Logs and monitoring|Knowing when it breaks.","System design basics|Scaling an app.","Freelance projects|Scope, price, handover."]}]}
 ],
 repos:[["gothinkster/realworld",GH("gothinkster/realworld"),"Spec for a full Medium-like app."],["mdn/express-locallibrary-tutorial",GH("mdn/express-locallibrary-tutorial"),"MDN's Express library app."],["spring-projects/spring-petclinic",GH("spring-projects/spring-petclinic"),"Full-stack sample in Java, if you prefer Java."]]
},
android:{name:"Android App Development",short:"Android",color:"var(--l-android)",days:75,perDay:"2 hr",group:"App and web development",
 forWho:"Beginners with a laptop (8 GB RAM or more helps). No coding needed before.",
 outcome:["Write Kotlin confidently","Build modern UIs with Jetpack Compose","Use data, networking and local storage","Publish an app on Google Play"],
 cert:"Android Basics with Compose badges (free, Google)",see:"https://roadmap.sh/android",
 next:["Kotlin Multiplatform or Flutter","Mobile testing with Appium (Testing roadmap)","Backend for apps (Full Stack roadmap)","AI features on device"],
 levels:[
 {name:"Kotlin",days:"Days 1–12",goal:"The language of Android.",modules:[
  {name:"Kotlin basics",course:["Android Basics with Compose (Google)",LAD],topics:["Setup Android Studio|Your tools.","Variables, types, null safety|Kotlin's safety features.","Conditions and loops|Control flow.","Functions and lambdas|Reusable code.","Classes, data classes, objects|OOP in Kotlin.","Collections|Lists, sets, maps.","Coroutines basics|Background work without freezing the app."]}]},
 {name:"Compose UI",days:"Days 13–30",goal:"Build beautiful screens.",modules:[
  {name:"Jetpack Compose",course:["Android Basics with Compose (Google)",LAD],topics:["Composables|UI as functions.","Layouts: Row, Column, Box|Arranging UI.","Modifiers|Size, padding, click.","State and recomposition|Updating the UI.","Lists with LazyColumn|Scrolling lists.","Material Design 3|Themes, colours, typography.","Images and icons|Visual content.","Navigation|Moving between screens."]}]},
 {name:"App architecture",days:"Days 31–45",goal:"Apps that do not break as they grow.",modules:[
  {name:"Architecture",course:["Android Basics with Compose (Google)",LAD],topics:["Activity and app lifecycle|What happens when apps pause.","ViewModel|Keeping state safe.","MVVM and UI state|Clean structure.","Dependency injection with Hilt|Wiring parts together.","Kotlin Flow|Streams of data."]}]},
 {name:"Data and networking",days:"Days 46–60",goal:"Real data in your app.",modules:[
  {name:"Data",course:["Android Basics with Compose (Google)",LAD],topics:["Retrofit and REST APIs|Loading data from the internet.","JSON parsing|Turning responses into objects.","Room database|Saving data on the phone.","DataStore|Small settings.","WorkManager|Background tasks.","Permissions|Camera, location, notifications.","Firebase basics|Auth, database, notifications."]}]},
 {name:"Testing and release",days:"Days 61–75",goal:"Ship to Google Play.",modules:[
  {name:"Ship it",course:["Android Basics with Compose (Google)",LAD],topics:["Unit tests|Testing logic.","UI tests with Compose testing|Testing screens.","Debugging and Logcat|Finding problems.","Performance|Smooth, battery-friendly apps.","App signing and release builds|Preparing to publish.","Publishing on Google Play|Store listing and review."]}]}
 ],
 repos:[["android/compose-samples",GH("android/compose-samples"),"Official Compose sample apps."],["android/nowinandroid",GH("android/nowinandroid"),"Google's fully featured reference app."],["android/sunflower",GH("android/sunflower"),"A gardening app showing best practices."]]
},
ios:{name:"iOS App Development",short:"iOS",color:"var(--l-ios)",days:75,perDay:"2 hr",group:"App and web development",
 forWho:"Beginners with a Mac (Xcode only runs on macOS). No coding needed before.",
 outcome:["Write Swift confidently","Build apps with SwiftUI","Use networking, storage and device features","Publish an app on the App Store"],
 cert:"No official free certificate; the Stanford CS193p projects make a strong portfolio",see:"https://roadmap.sh/ios",
 note:"You need a Mac to build iOS apps. Good Hindi iOS videos are fewer; the Hindi links here are from smaller channels, so use the English ones as the main course.",
 next:["Advanced SwiftUI and animations","Mobile testing with Appium (Testing roadmap)","Backend for apps (Full Stack roadmap)","Apple Watch and iPad apps"],
 levels:[
 {name:"Swift",days:"Days 1–12",goal:"The language of Apple apps.",modules:[
  {name:"Swift basics",course:["Develop in Swift (Apple)",LIOS],topics:["Install Xcode and Playgrounds|Your tools.","Variables, constants, types|let and var.","Optionals|Handling missing values safely.","Conditions and loops|Control flow.","Functions and closures|Reusable code.","Structs, classes and enums|Building your own types.","Protocols and extensions|Swift's superpowers.","Error handling|throws, try, catch."]}]},
 {name:"SwiftUI",days:"Days 13–32",goal:"Build screens the modern way.",modules:[
  {name:"SwiftUI basics",course:["Develop in Swift (Apple)",LIOS],topics:["Views and modifiers|UI building blocks.","Stacks and layout|VStack, HStack, ZStack.","State and binding|Updating the UI.","Lists and forms|Common screens.","Navigation|NavigationStack and links.","Images, colours, SF Symbols|Visual polish.","Animations|Smooth changes."]}]},
 {name:"App architecture",days:"Days 33–45",goal:"Clean, testable apps.",modules:[
  {name:"Architecture",course:["Stanford CS193p","https://cs193p.stanford.edu/"],topics:["MVVM in SwiftUI|Separating logic from views.","Observable models|Sharing state across views.","Async/await and concurrency|Background work.","Dependency management with Swift Package Manager|Adding libraries."]}]},
 {name:"Data and device",days:"Days 46–62",goal:"Real data and phone features.",modules:[
  {name:"Data and features",course:["Develop in Swift (Apple)",LIOS],topics:["Networking with URLSession|Loading data from APIs.","Codable and JSON|Parsing responses.","SwiftData|Saving data on the device.","User defaults|Small settings.","Camera, photos and location|Device features with permission.","Notifications|Reminders and alerts."]}]},
 {name:"Testing and release",days:"Days 63–75",goal:"Ship to the App Store.",modules:[
  {name:"Ship it",course:["Develop in Swift (Apple)",LIOS],topics:["Unit tests with XCTest|Testing logic.","UI tests|Testing screens.","Debugging with Xcode|Breakpoints and instruments.","Accessibility|VoiceOver and dynamic type.","TestFlight beta testing|Sharing with testers.","App Store submission|Review guidelines and release."]}]}
 ],
 repos:[["Ranchero-Software/NetNewsWire",GH("Ranchero-Software/NetNewsWire"),"A real open-source Mac and iOS app."],["kickstarter/ios-oss",GH("kickstarter/ios-oss"),"Kickstarter's open-source iOS app."]]
}
});

// module videos for the new courses
Object.assign(MODV,{
 "c::Setup and first program":M(V2.cEn,V2.cHi),"c::Basics":M(V2.cEn,V2.cHiPl),"c::Arrays, strings, pointers":M(V2.cEn2,V2.cHiPl),"c::Structs and files":M(V2.cEn2,V2.cHiPl),"c::Data structures":M(V2.dsaEn,V2.cppDsaHi),
 "cpp::C++ fundamentals":M(V2.cppEn,V2.cppHi),"cpp::OOP":M(V2.cppEn,V2.cppHiPl),"cpp::Modern C++":M(V2.cppEn2,V2.cppHiPl),"cpp::Standard Template Library":M(V2.cppEn2,V2.cppDsaHi),"cpp::Data structures and algorithms":M(V2.a2z,V2.cppDsaHi),
 "java::Java fundamentals":M(V2.javaEn,V2.javaHi2),"java::OOP":M(V2.javaEn,V2.javaOopHi),"java::Core Java":M(V2.javaEn2,V2.javaHi),"java::Build and test":M(V2.javaEn2,V2.javaHi),"java::DSA in Java":M(V2.a2z,V2.javaHi),
 "python::Python basics":M(V2.pyEn,V2.pyHi),"python::Collections":M(V2.pyEn,V2.pyHiPl),"python::Intermediate":M(V2.pyEn2,V2.pyHiPl),"python::Automation":M(V2.pyEn2,V2.pyHiPl),"python::Web with Python":M(V2.django,V2.pyHiPl),
 "sql::Getting started":M(V2.sqlEn,V2.sqlHi),"sql::Queries":M(V2.sqlEn,V2.sqlHi),"sql::DDL and DML":M(V2.sqlEn2,V2.sqlHi),"sql::Advanced":M(V2.sqlEn2,V2.sqlHi),
 "frontend::Web basics":M(V2.html,V2.sigma),"frontend::HTML":M(V2.html,V2.sigma),"frontend::CSS":M(V2.css,V2.sigma),"frontend::JavaScript":M(V2.js,V2.sigma),"frontend::Developer tools":M(V2.fullstack,V2.apnaWeb),"frontend::React":M(V2.react,V2.reactHi),"frontend::Ship it":M(V2.react2,V2.apnaWeb),
 "fullstack::Frontend essentials":M(V2.fullstack,V2.sigma),"fullstack::Node and Express":M(V2.node,V2.sigma),"fullstack::SQL and NoSQL":M(V2.sqlEn,V2.sqlHi),"fullstack::Security":M(V2.node2,V2.apnaWeb),"fullstack::Advanced features":M(V2.node2,V2.apnaWeb),"fullstack::Deploy":M(V2.fullstack,V2.apnaWeb),
 "android::Kotlin basics":M(V2.kotlin,V2.kotlinHi),"android::Jetpack Compose":M(V2.andEn,V2.andHi),"android::Architecture":M(V2.andMaster,V2.andHi),"android::Data":M(V2.andMaster,V2.andHi),"android::Ship it":M(V2.andEn,V2.andHi),
 "ios::Swift basics":M(V2.swift,V2.swiftHiPl),"ios::SwiftUI basics":M(V2.swiftui,V2.swiftuiHi),"ios::Architecture":M(V2.cs193p,V2.iosHi),"ios::Data and features":M(V2.cs193p,V2.iosHi),"ios::Ship it":M(V2.cs193p,V2.iosHi),
 "data::SQL from zero":M(V2.sqlEn,V2.sqlHi),"data::Python basics":M(V2.pyEn,V2.pyHi)
});

// capstones for the new courses
Object.assign(CAP,{
 c:[
  {lv:"Beginner",t:"Student records manager",b:"A menu-driven program that adds, searches, edits and deletes student records, saved to a file.",c:["Structs","Functions","File handling","Loops and conditions"],s:["Design the struct","Menu with switch","Save and load from a file","Search and sort records"],r:["TheAlgorithms/C",GH("TheAlgorithms/C")]},
  {lv:"Intermediate",t:"Your own hash table library",b:"Build a hash table with insert, search, delete and resizing, with tests and a memory-leak check.",c:["Pointers","Dynamic memory","Hashing","Valgrind","Makefiles"],s:["Follow the tutorial step by step","Add resizing","Write tests","Run Valgrind until zero leaks"],r:["jamesroutley/write-a-hash-table",GH("jamesroutley/write-a-hash-table")]},
  {lv:"Advanced",t:"A tiny database from scratch",b:"Build a SQLite-like database: a command prompt, a B-tree on disk, insert and select.",c:["Files","Memory layout","Data structures","Multi-file programs","Testing"],s:["REPL","Serialise rows","Persist to disk","B-tree"],r:["cstack/db_tutorial",GH("cstack/db_tutorial")],r2:["antirez/kilo",GH("antirez/kilo")]}
 ],
 cpp:[
  {lv:"Beginner",t:"Bank account system with classes",b:"Accounts, deposits, withdrawals, interest and history, built with classes and inheritance.",c:["Classes","Inheritance","Polymorphism","STL vector and map","File I/O"],s:["Design classes","Add account types","Save history","Unit-test key rules"],r:["TheAlgorithms/C-Plus-Plus",GH("TheAlgorithms/C-Plus-Plus")]},
  {lv:"Intermediate",t:"Ray tracer",b:"Render a 3D scene to an image file using vectors, spheres, lights and reflections.",c:["Operator overloading","Classes","Maths in code","Performance"],s:["Vector class","Ray-sphere hits","Lights and shadows","Reflections"],r:["ssloy/tinyraytracer",GH("ssloy/tinyraytracer")]},
  {lv:"Advanced",t:"Software 3D renderer",b:"Write a small renderer: lines, triangles, z-buffer, textures and shaders, without any graphics library.",c:["Templates","Memory","Algorithms","CMake","Optimisation"],s:["Lines and triangles","Z-buffer","Textures","Shaders and camera"],r:["ssloy/tinyrenderer",GH("ssloy/tinyrenderer")]}
 ],
 java:[
  {lv:"Beginner",t:"Library management console app",b:"Books, members, issue and return, fines, using OOP and collections, with JUnit tests.",c:["OOP","Collections","Exceptions","JUnit"],s:["Model classes","Use Map and List","Handle errors","Write tests"],r:["TheAlgorithms/Java",GH("TheAlgorithms/Java")]},
  {lv:"Intermediate",t:"Extend Spring PetClinic",b:"Run the classic Spring Boot app, then add a new feature (e.g. vaccination reminders) with API, database and tests.",c:["Spring Boot","REST","JPA","Testing","Maven"],s:["Run PetClinic","Read its structure","Add the feature end to end","Tests and README"],r:["spring-projects/spring-petclinic",GH("spring-projects/spring-petclinic")]},
  {lv:"Advanced",t:"RealWorld backend in Spring Boot",b:"Build the full RealWorld API (users, articles, comments, follows) with Spring Security, JWT, database and tests.",c:["Spring Security","JWT","JPA relations","Validation","Integration tests"],s:["Read the API spec","Build auth","Build articles and comments","Pass the spec's API tests"],r:["gothinkster/realworld",GH("gothinkster/realworld")]}
 ],
 python:[
  {lv:"Beginner",t:"Expense tracker",b:"Add, list and summarise expenses by category and month, saved to CSV, with charts.",c:["Functions","Lists and dicts","Files and CSV","Error handling"],s:["Command menu","Save to CSV","Monthly summary","Bar chart"],r:["realpython/materials",GH("realpython/materials")]},
  {lv:"Intermediate",t:"Office automation toolkit",b:"Scripts that rename files, merge PDFs, build an Excel report from CSVs and email it, scheduled daily.",c:["pathlib","Excel and PDF libraries","APIs","Scheduling","Logging"],s:["File organiser","PDF merger","Excel report","Daily schedule"],r:["practical-tutorials/project-based-learning",GH("practical-tutorials/project-based-learning")]},
  {lv:"Advanced",t:"Web app with Django",b:"A complete web app (e.g. a job board) with login, database, admin panel, tests and deployment.",c:["Django","ORM","Auth","Testing","Deploy"],s:["Models","Views and templates","Login","Tests and deploy"],r:["TheAlgorithms/Python",GH("TheAlgorithms/Python")]}
 ],
 sql:[
  {lv:"Beginner",t:"Music store questions",b:"Answer 20 business questions on the Chinook database, from simple counts to joins.",c:["SELECT and WHERE","GROUP BY","JOINs"],s:["Load Chinook","20 queries","Save in GitHub with answers"],r:["lerocha/chinook-database",GH("lerocha/chinook-database")]},
  {lv:"Intermediate",t:"Design a database for a real business",b:"Design tables for a clinic or coaching centre: ER diagram, keys, constraints, sample data and reports.",c:["Normalisation","Keys and constraints","DDL","Views"],s:["Interview a business","ER diagram","Create tables","Write 10 report queries"],r:["datacharmer/test_db",GH("datacharmer/test_db")]},
  {lv:"Advanced",t:"Performance lab on millions of rows",b:"On the employees database, write analytical queries with window functions, then make slow ones fast with indexes and plans.",c:["Window functions","CTEs","Indexes","Query plans","Transactions"],s:["Load test_db","Analytical queries","Measure and add indexes","Write findings"],r:["datacharmer/test_db",GH("datacharmer/test_db")]}
 ],
 frontend:[
  {lv:"Beginner",t:"50 mini projects sprint",b:"Rebuild 15 of the 50 small projects in your own style: buttons, modals, sliders, forms.",c:["HTML","CSS","DOM","Events"],s:["Pick 15","Build each in a day","Deploy all","Write what you learned"],r:["bradtraversy/50projects50days",GH("bradtraversy/50projects50days")]},
  {lv:"Intermediate",t:"Responsive portfolio + 3 graded apps",b:"Portfolio site plus one Tier 1, Tier 2 and Tier 3 app from the ideas list, built in React.",c:["Responsive design","React","APIs","Testing"],s:["Portfolio","3 apps","Tests","Deploy"],r:["florinpop17/app-ideas",GH("florinpop17/app-ideas")]},
  {lv:"Advanced",t:"RealWorld front end",b:"Build the full Medium-like front end against a public RealWorld API: auth, articles, comments, profiles, tests.",c:["React","Routing","State management","Auth flows","Playwright tests"],s:["Read the spec","Pages and routing","Auth and editor","End-to-end tests and deploy"],r:["gothinkster/realworld",GH("gothinkster/realworld")]}
 ],
 fullstack:[
  {lv:"Intermediate",t:"Local library app",b:"Build MDN's library app: books, authors, copies, forms and a database.",c:["Express","Database","Forms","Templates"],s:["Follow the tutorial","Add search","Add login","Deploy"],r:["mdn/express-locallibrary-tutorial",GH("mdn/express-locallibrary-tutorial")]},
  {lv:"Advanced",t:"Full-stack Medium clone (RealWorld)",b:"Your own front end and back end for the RealWorld spec, with PostgreSQL, auth, tests, Docker and CI.",c:["React","Node/Express","PostgreSQL","Auth","Security","Docker","CI/CD"],s:["Backend API","Front end","Tests","Docker + CI + deploy"],r:["gothinkster/realworld",GH("gothinkster/realworld")]},
  {lv:"Expert",t:"Real-time SaaS for a small business",b:"A booking app for a clinic or salon: accounts, real-time slots, test-mode payments, emails and an admin dashboard.",c:["WebSockets","Payments","Emails","Roles","Monitoring"],s:["Design","Build core flows","Payments and emails","Launch with monitoring"],r:["practical-tutorials/project-based-learning",GH("practical-tutorials/project-based-learning")]}
 ],
 android:[
  {lv:"Beginner",t:"Compose sample deep dive",b:"Run 3 official Compose samples, then change each one: new screen, new theme, new feature.",c:["Compose","State","Navigation","Material 3"],s:["Run the samples","Read the code","Make 3 changes each"],r:["android/compose-samples",GH("android/compose-samples")]},
  {lv:"Intermediate",t:"Expense or habit tracker app",b:"Your own app with Room database, ViewModel, charts, notifications and dark mode.",c:["MVVM","Room","Flow","WorkManager","Notifications"],s:["Design screens","Room + ViewModel","Reminders","Release build"],r:["android/sunflower",GH("android/sunflower")]},
  {lv:"Advanced",t:"Production-style app like Now in Android",b:"Study Google's reference app, then build your own news or learning app with modules, Hilt, offline sync, tests and Play Store release.",c:["Modular architecture","Hilt","Offline-first","Testing","Publishing"],s:["Study the architecture","Build your app","Tests","Publish on Play"],r:["android/nowinandroid",GH("android/nowinandroid")]}
 ],
 ios:[
  {lv:"Beginner",t:"Memorize card game (CS193p)",b:"Build the card-matching game from the Stanford course step by step.",c:["SwiftUI","State","MVVM","Animations"],s:["Follow the lectures","Add themes","Add scoring","Polish animations"],r:["kickstarter/ios-oss",GH("kickstarter/ios-oss")]},
  {lv:"Intermediate",t:"Expense or recipe app",b:"Your own SwiftUI app with SwiftData storage, API data, search and notifications.",c:["SwiftData","Networking","Codable","Notifications"],s:["Design screens","Store data","Load from an API","TestFlight beta"],r:["Ranchero-Software/NetNewsWire",GH("Ranchero-Software/NetNewsWire")]},
  {lv:"Advanced",t:"App Store release",b:"Take your best app to the App Store: tests, accessibility, privacy labels, screenshots and review.",c:["XCTest","Accessibility","Release process"],s:["Tests","Accessibility pass","Store listing","Submit and fix review notes"],r:["kickstarter/ios-oss",GH("kickstarter/ios-oss")]}
 ]
});

// "Learn next" for earlier courses
SYL.trading.next=["Python & Data Analyst (deeper data skills)","AI with Projects (AI for market research, education only)","SQL and Databases"];
SYL.testing.next=["Java or Python (stronger coding)","DevOps & Cloud (CI/CD, Docker)","Cyber Security (security testing)","AI with Projects (testing AI apps)"];
SYL.ai.next=["Claude: Beginner to Power User","DevOps & Cloud (deploy AI apps)","Full Stack Web Development (AI products)"];
SYL.claude.next=["AI with Projects","Python Programming","Full Stack Web Development"];
SYL.tools.next=["Claude: Beginner to Power User","Python Programming (automation)","AI with Projects"];
SYL.data.next=["SQL and Databases (advanced)","AI with Projects (machine learning)","Data engineering"];
SYL.devops.next=["Cyber Security (DevSecOps)","Kubernetes certification (CKA)","Site reliability engineering"];
SYL.cyber.next=["DevOps & Cloud (cloud security)","Python Programming (security scripting)","Certifications: Security+ then specialise"];
// groups for the dropdown
["trading","tools"].forEach(k=>SYL[k].group="Earn and AI tools");
["testing"].forEach(k=>SYL[k].group="Testing and quality");
["ai","claude"].forEach(k=>SYL[k].group="AI");
["data","devops","cyber"].forEach(k=>SYL[k].group="Careers");

// ---- Testing videos (checked via YouTube oEmbed) ----
const T={
 fccTest:yt("jydYq7oAtD8","Software Testing Course – Playwright, E2E and AI Agents","freeCodeCamp.org"),
 ttaHi:yt("L67CWZBnitw","Free Software Testing Course in Hindi","TheTestingAcademy Hindi"),
 ttaHi2:yt("Pk7YlfUX6WA","Learn Software Testing in Hindi (free course)","TheTestingAcademy Hindi"),
 pwEn:yt("wawbt1cATsk","Playwright with TypeScript from Scratch (6 hours)","TestMu AI (LambdaTest)"),
 pwPl:ypl("PLUeDIlio4THElFa-LtxbYaXfZZ_zwCpN3","Complete Playwright with TypeScript in 20 Hours (playlist)","Testers Talk"),
 pwHi:yt("kPqzAAh0Bf0","Playwright JS Tutorial in Hindi/Urdu – Part 1","SQA Trainings"),
 pwMcp:yt("2vnttb-YZrA","Manual Testing with Playwright MCP – No Code, Just Prompts","Debbie O'Brien"),
 pwMcp2:yt("MIlcVo1x3Is","Generating Playwright Tests with AI: the Playwright MCP Server","Checkly"),
 pwAi:yt("emUaq9FPIcc","Modern E2E Testing with Playwright and AI","Checkly"),
 selEn:ypl("PLFGoYjJG_fqo4oVsa6l_V-_7-tzBnlulT","Selenium WebDriver Tutorials (playlist)","Naveen AutomationLabs"),
 selHi:ypl("PLwxbO1LXPsTUfwWs7wWhpCG7ZwiKQuCnS","Selenium Tutorial with Java in Hindi (playlist)","Techie Praveen"),
 apiHi:ypl("PLwbMf8x0S9vDIvIHubBo-0BtG3YaQdqUy","API Testing with Postman in Hindi (playlist)","TheTestingAcademy Hindi"),
 appEn:yt("Fx3ud5wMHYc","Appium Mobile Automation Testing from Scratch in 2 Hours","Rahul Shetty Academy"),
 appAnd:yt("DvgEjgnOxSc","Android Automation from Scratch with Appium 2 and Java","Wasiq Bhamla"),
 appIos:yt("VuO287mmFaM","iOS Automation from Scratch with Appium 2 and Java","Wasiq Bhamla")
};
Object.assign(MODV,{
 "testing::Testing basics":M(T.fccTest,T.ttaHi),"testing::Test design techniques":M(T.fccTest,T.ttaHi2),"testing::Test levels and tools":M(T.fccTest,T.ttaHi2),
 "testing::Web basics for testers":M(V2.html,V2.sigma),"testing::JavaScript and TypeScript":M(V2.js,V2.sigma),"testing::Java for testers":M(V2.javaEn,V2.javaHi),
 "testing::Playwright core":M(T.pwEn,T.pwHi),"testing::Playwright + AI + MCP":M(T.pwMcp,null),
 "testing::Selenium WebDriver (Java)":M(T.selEn,T.selHi),
 "testing::Postman and code":M(null,T.apiHi),"testing::API basics":M(null,T.apiHi),
 "testing::Mobile testing basics":M(T.appEn,null),"testing::Appium automation":M(T.appEn,null),
 "testing::Architecture":M(T.pwPl,null),"testing::AI and MCP for testers":M(T.pwAi,null)
});
Object.assign(VIDEOS,{
 "testing::Playwright MCP server":{en:T.pwMcp2},
 "testing::Generating tests with AI":{en:T.pwMcp2},
 "testing::Healing broken tests":{en:T.pwAi},
 "testing::UiAutomator2 and XCUITest drivers":{en:T.appAnd},
 "testing::Android vs iOS testing":{en:T.appIos},
 "testing::Practice app":{en:T.appAnd}
});
