// Data Structures & Algorithms course
// ---- Data Structures and Algorithms (videos checked via YouTube oEmbed) ----
const D={
 fiset:yt("RBSGKlAvoiM","Data Structures Easy to Advanced (Google engineer)","freeCodeCamp.org"),
 fccAlgo:yt("8hly31xKli0","Algorithms and Data Structures – Full Course for Beginners","freeCodeCamp.org"),
 bro:yt("CBYHwZcbD-s","Data Structures and Algorithms Full Course","Bro Code"),
 bari:ypl("PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O","Algorithms (playlist)","Abdul Bari"),
 bariQs:yt("7h1s2SojIRw","QuickSort Algorithm","Abdul Bari"),
 a2z:ypl("PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz","Striver's A2Z DSA Course (playlist)","take U forward"),
 rec:ypl("PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9","Recursion and Backtracking Series (playlist)","take U forward"),
 graph:ypl("PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn","Graph Series by Striver (playlist)","take U forward"),
 bfs:yt("-tgVpUgsQ5k","G-5. Breadth-First Search (BFS)","take U forward"),
 dfs:yt("Qzf1a--rhp8","G-6. Depth-First Search (DFS)","take U forward"),
 dp:ypl("PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY","Dynamic Programming Playlist (playlist)","take U forward"),
 kunal:ypl("PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ","Java + DSA + Interview Preparation (playlist)","Kunal Kushwaha"),
 cwhHi:ypl("PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi","Data Structures and Algorithms Course in Hindi (playlist)","CodeWithHarry"),
 apnaHi:ypl("PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt","Complete C++ DSA Course (playlist)","Apna College"),
 apnaHi2:yt("1yrh60og6qc","DSA Complete Series: Data Structures & Algorithms","Apna College")
};
SYL.dsa={name:"Data Structures & Algorithms",short:"DSA",color:"var(--l-dsa)",days:115,perDay:"2 hr",group:"Programming languages",
 forWho:"Anyone who knows one language (C++, Java or Python). Finish the C++, Java or Python course first if you are new.",
 outcome:["Choose the right data structure for any problem","Write and analyse efficient algorithms (Big-O)","Solve 300+ interview problems by pattern, not by memory","Clear coding rounds at product companies and service companies"],
 cert:"No single official certificate; NPTEL DSA courses, GATE CS and contest ratings are the recognised proof",see:"https://roadmap.sh/datastructures-and-algorithms",
 note:"Pick one language (C++, Java or Python) and use it for the whole course. Solve every topic's problems yourself before watching the solution.",
 next:["System design (for senior interviews)","Competitive programming on Codeforces and CodeChef","Full Stack or Android development (build real products)","GATE CS preparation"],
 levels:[
 {name:"Foundations",days:"Days 1–13",goal:"Think like a problem solver.",modules:[
  {name:"Basics and complexity",course:["Striver's A2Z DSA Sheet","https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"],topics:[
   "What DSA is and why companies test it|Problem solving in coding interviews.",
   "Time complexity and Big-O|How running time grows with input.",
   "Space complexity|How much memory a solution needs.",
   "Best, average, worst case|Different inputs, different costs.",
   "Basic maths for DSA|Digits, GCD, primes, modulo.",
   "Bit manipulation basics|AND, OR, XOR and shifts.",
   "How to approach a problem|Understand, examples, brute force, optimise, code, test."]}]},
 {name:"Arrays, strings and searching",days:"Days 14–32",goal:"The most asked interview topics.",modules:[
  {name:"Arrays and strings",course:["Striver's A2Z DSA Sheet","https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"],topics:[
   "Arrays and dynamic arrays|Fixed and growing lists.",
   "Prefix sums|Fast range totals.",
   "Two pointers|Solving pair and partition problems in one pass.",
   "Sliding window|Best sub-array or sub-string in one pass.",
   "Kadane's algorithm|Maximum sub-array sum.",
   "Matrix problems|Rotate, spiral, search.",
   "String basics and patterns|Palindromes, anagrams, reversing.",
   "Hashing with maps and sets|Count and look up in constant time."]},
  {name:"Sorting and searching",course:["Abdul Bari – Algorithms","https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O"],topics:[
   "Bubble, selection, insertion sort|Simple sorts and why they are slow.",
   "Merge sort|Divide and conquer sorting.",
   "Quick sort|Fast in practice; pivot choice matters.",
   "Counting and radix sort|Sorting without comparisons.",
   "Binary search|Halve the search each step.",
   "Binary search on answer|Finding the smallest value that works."]}]},
 {name:"Recursion and linked structures",days:"Days 33–51",goal:"Master recursion and pointers.",modules:[
  {name:"Recursion and backtracking",course:["Recursion and Backtracking (Striver)","https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9"],topics:[
   "How recursion works|Base case, call stack, return.",
   "Recursion patterns|Pick or not pick, all subsets.",
   "Permutations and combinations|Generating every arrangement.",
   "Backtracking|N-Queens, Sudoku, word search.",
   "Divide and conquer|Splitting problems in half."]},
  {name:"Linked lists, stacks and queues",course:["Striver's A2Z DSA Sheet","https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"],topics:[
   "Singly and doubly linked lists|Nodes and pointers.",
   "Fast and slow pointers|Cycle detection and middle node.",
   "Reversing and merging lists|Classic interview questions.",
   "Stacks|Last in, first out; valid brackets.",
   "Queues and deques|First in, first out.",
   "Monotonic stack|Next greater element patterns.",
   "LRU cache|Combining a map and a linked list."]}]},
 {name:"Trees and heaps",days:"Days 52–70",goal:"Hierarchical data and priorities.",modules:[
  {name:"Trees",course:["Striver's A2Z DSA Sheet","https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"],topics:[
   "Binary trees|Nodes with left and right children.",
   "Traversals|Pre-order, in-order, post-order, level-order.",
   "Height, diameter and paths|Common tree measurements.",
   "Binary search trees|Ordered trees for fast search.",
   "Lowest common ancestor|Meeting point of two nodes.",
   "Tries|Trees for words and prefixes.",
   "Segment trees and Fenwick trees|Fast range queries (advanced)."]},
  {name:"Heaps and greedy",course:["Abdul Bari – Algorithms","https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O"],topics:[
   "Heaps and priority queues|Always get the smallest or largest fast.",
   "Top-K problems|K largest, K closest.",
   "Greedy algorithms|Best local choice; when it works.",
   "Interval problems|Merging and scheduling intervals.",
   "Huffman coding|A classic greedy algorithm."]}]},
 {name:"Graphs",days:"Days 71–89",goal:"Networks, maps and dependencies.",modules:[
  {name:"Graph algorithms",course:["Graph Series by Striver","https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn"],topics:[
   "Graph basics and representation|Adjacency list and matrix.",
   "Breadth-first search (BFS)|Level by level.",
   "Depth-first search (DFS)|Go deep, then backtrack.",
   "Connected components and islands|Counting groups.",
   "Cycle detection|In directed and undirected graphs.",
   "Topological sort|Ordering tasks with dependencies.",
   "Shortest paths|Dijkstra and Bellman-Ford.",
   "Minimum spanning tree|Prim and Kruskal.",
   "Disjoint set union|Fast grouping with union-find."]}]},
 {name:"Dynamic programming",days:"Days 90–105",goal:"The hardest and highest-paying topic.",modules:[
  {name:"DP",course:["Dynamic Programming Playlist (Striver)","https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY"],topics:[
   "Memoisation and tabulation|Top-down and bottom-up.",
   "1D DP|Climbing stairs, house robber.",
   "2D and grid DP|Paths in a grid.",
   "Subsequences and knapsack|Pick or skip with limits.",
   "DP on strings|Longest common subsequence, edit distance.",
   "DP on stocks and partitions|Classic interview families.",
   "Longest increasing subsequence|A must-know pattern."]}]},
 {name:"Interview readiness",days:"Days 106–115",goal:"Perform under time pressure.",modules:[
  {name:"Practice and mock interviews",course:["takeUforward interview prep hub","https://takeuforward.org/prep-hub"],topics:[
   "Learning by patterns|Group problems by pattern, not by company.",
   "Daily practice plan|Easy, medium, hard mix.",
   "Contest practice|LeetCode, Codeforces and CodeChef contests.",
   "Mock interviews|Explaining your thinking aloud.",
   "Writing clean code fast|Names, edge cases, testing.",
   "Company question lists|Service companies vs product companies."]}]}
 ],
 repos:[["jwasham/coding-interview-university",GH("jwasham/coding-interview-university"),"A complete self-study plan for coding interviews."],["williamfiset/Algorithms",GH("williamfiset/Algorithms"),"Clean implementations from the freeCodeCamp DSA course author."],["TheAlgorithms/Python",GH("TheAlgorithms/Python"),"Every classic algorithm in Python (also Java, C++)."]]
};
Object.assign(MODV,{
 "dsa::Basics and complexity":M(D.fccAlgo,D.apnaHi2),
 "dsa::Arrays and strings":M(D.a2z,D.apnaHi),
 "dsa::Sorting and searching":M(D.bari,D.cwhHi),
 "dsa::Recursion and backtracking":M(D.rec,D.apnaHi),
 "dsa::Linked lists, stacks and queues":M(D.fiset,D.cwhHi),
 "dsa::Trees":M(D.fiset,D.cwhHi),
 "dsa::Heaps and greedy":M(D.bari,D.cwhHi),
 "dsa::Graph algorithms":M(D.graph,D.apnaHi),
 "dsa::DP":M(D.dp,D.apnaHi),
 "dsa::Practice and mock interviews":M(D.kunal,D.apnaHi2)
});
Object.assign(VIDEOS,{
 "dsa::Quick sort":{en:D.bariQs},
 "dsa::Breadth-first search (BFS)":{en:D.bfs},
 "dsa::Depth-first search (DFS)":{en:D.dfs},
 "dsa::Time complexity and Big-O":{en:D.bro}
});
CAP.dsa=[
 {lv:"Beginner",t:"Build your own data structure library",b:"Implement dynamic array, linked list, stack, queue, hash map, binary search tree and heap from scratch in your language, with tests and Big-O notes.",c:["Arrays","Linked lists","Hashing","Trees","Heaps","Big-O","Testing"],s:["One structure per day","Write unit tests","Note Big-O for each operation","Compare with the standard library"],r:["williamfiset/Algorithms",GH("williamfiset/Algorithms")]},
 {lv:"Intermediate",t:"Algorithm visualiser",b:"A small web or desktop app that animates sorting, binary search, BFS/DFS and Dijkstra step by step.",c:["Sorting","Searching","Graphs","Shortest paths"],s:["Pick the algorithms","Record each step","Animate the steps","Add speed and input controls"],r:["trekhleb/javascript-algorithms",GH("trekhleb/javascript-algorithms")]},
 {lv:"Advanced",t:"Real-world route and scheduling planner",b:"Load a city map or a project plan as a graph; find shortest routes, minimum-cost networks and task order, and explain the complexity.",c:["Graphs","Dijkstra","MST","Topological sort","Union-find","Heaps"],s:["Model the data as a graph","Shortest path between places","Cheapest network and task ordering","Benchmark and explain"],r:["TheAlgorithms/Python",GH("TheAlgorithms/Python")]},
 {lv:"Expert",t:"300-problem pattern sheet in GitHub",b:"Solve the A2Z sheet or a 300-problem list by pattern, with your own notes, complexity and a short explanation for every solution.",c:["All patterns","DP","Graphs","Clean code","Explaining solutions"],s:["Follow the sheet order","Notes for each problem","Weekly contest","Monthly mock interview"],r:["jwasham/coding-interview-university",GH("jwasham/coding-interview-university")],r2:["kdn251/interviews",GH("kdn251/interviews")]}
];
CERTS.dsa=[
 C_("India","NPTEL Programming, Data Structures and Algorithms using Python","NPTEL, Govt. of India (Chennai Mathematical Institute)","Intermediate","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly graded assignments",NPTEL],""),
 C_("India","NPTEL Design and Analysis of Algorithms","NPTEL, Govt. of India","Advanced","Course free; exam fee",NPTEL,["Lecture videos (free)",NPTEL],["Weekly graded assignments",NPTEL],""),
 C_("India","GATE Computer Science (DSA and algorithms are a large share)","IITs / IISc","Advanced","Paid exam","",["Official syllabus on this year's GATE website",""],["Previous years' papers on this year's GATE website",""],"For M.Tech admission and PSU jobs."),
 C_("Co","TCS NQT and TCS CodeVita","TCS","Entry–Advanced","Check current fee (CodeVita is a free contest)","https://www.tcsion.com",["Syllabus on TCS iON","https://www.tcsion.com"],["Sample tests on TCS iON","https://www.tcsion.com"],"Hiring tests where DSA decides the result."),
 C_("Free","HackerRank Problem Solving skill certificate","HackerRank","Entry–Intermediate","Free","https://www.hackerrank.com/skills-verification",["Practice problems","https://www.hackerrank.com/domains/algorithms"],["The skill test itself","https://www.hackerrank.com/skills-verification"],""),
 C_("Intl","Contest ratings: Codeforces, CodeChef, LeetCode","Codeforces, CodeChef, LeetCode","Intermediate–Expert","Free","https://codeforces.com",["Problem archives (free)","https://codeforces.com/problemset"],["Live weekly contests","https://www.codechef.com/contests"],"A good rating is respected by product companies; ICPC is the top university contest.")
];
