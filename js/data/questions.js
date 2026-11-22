// Practice and interview questions for every course. Questions only: no answers, on purpose.
// Each course has: "full" = whole-course interview questions, "prog" = interview programs, "tasks" = practical tasks,
// "topics" = questions for each roadmap topic (the topic name must match the course exactly).
// A question is text, or ["text", "https://..."] when a free practice site has the same problem.
// One question per line, so pull requests are easy to read. Run  node tools/check.js  after any change.
const QBANK={
"c":{
  "full":[
    "What is the difference between a pointer and an array?",
    "What are the different storage classes in C?",
    "Explain malloc vs calloc.",
    "What is a segmentation fault and what usually causes it?",
    "What is the difference between a structure and a union?",
    "What is the use of the volatile keyword?",
    "What is the use of the const keyword with pointers (const int *p vs int *const p)?",
    "What is a dangling pointer? How do you avoid it?",
    "What is a static function in C?",
    "How are arguments passed to functions in C?",
    "What is the difference between #include \u003cfile> and #include \"file\"?",
    "What is recursion? What is tail recursion?",
    "Explain the memory layout of a C program: text, data, BSS, heap and stack.",
    "What is endianness? Write code to check if a machine is little-endian.",
    "How would you find the size of a variable without using sizeof?",
    "What is the difference between ++*p, *p++ and *++p?",
    "Why is gets() removed from the C standard?",
    "What is a function pointer and where is it used?",
    "How do you detect and fix memory leaks?",
    "Write a program to reverse a linked list."
  ],
  "prog":[
    ["Write a program to reverse a string without using strrev()","https://exercism.org/tracks/c/exercises/reverse-string"],
    ["Write a program to check if a string is a palindrome","https://leetcode.com/problems/valid-palindrome/"],
    ["Write a program to check if a number is a palindrome","https://leetcode.com/problems/palindrome-number/"],
    "Write a program to swap two numbers without a third variable",
    ["Write a program to print the Fibonacci series up to n terms","https://leetcode.com/problems/fibonacci-number/"],
    "Write a program to find the factorial of a number using recursion",
    "Write a program to check if a number is prime",
    ["Write a program to print all prime numbers up to n (Sieve of Eratosthenes)","https://exercism.org/tracks/c/exercises/sieve"],
    ["Write a program to check an Armstrong number","https://exercism.org/tracks/c/exercises/armstrong-numbers"],
    "Write a program to find the GCD and LCM of two numbers",
    "Write a program to count vowels, consonants, digits and spaces in a string",
    "Write a program to find the largest and second largest element in an array",
    "Write a program to reverse an array in place",
    ["Write a program to remove duplicates from a sorted array","https://leetcode.com/problems/remove-duplicates-from-sorted-array/"],
    "Write a program to sort an array using bubble sort",
    ["Write a program for binary search on a sorted array","https://exercism.org/tracks/c/exercises/binary-search"],
    "Write a program to multiply two matrices",
    "Write a program to transpose a matrix",
    ["Write a program to count set bits in an integer","https://leetcode.com/problems/number-of-1-bits/"],
    "Write your own strlen(), strcpy() and strcmp() functions",
    ["Write a program to reverse a singly linked list","https://leetcode.com/problems/reverse-linked-list/"],
    ["Write a program to find the middle of a linked list in one pass","https://leetcode.com/problems/middle-of-the-linked-list/"],
    ["Write a program to detect a loop in a linked list","https://leetcode.com/problems/linked-list-cycle/"],
    "Write a program to implement a stack using an array",
    ["Write a program to check balanced brackets in an expression","https://exercism.org/tracks/c/exercises/matching-brackets"],
    "Write a program to convert a decimal number to binary",
    ["Write a program that reads a text file and counts its lines and words","https://exercism.org/tracks/c/exercises/word-count"],
    "Write a program to print a pyramid pattern of stars"
  ],
  "tasks":[
    "Find and fix the bug in a given C program that crashes with a segmentation fault (use gdb)",
    "Run a program under Valgrind and fix every memory leak it reports",
    "Split a single-file program into .h and .c files and write a Makefile for it",
    "Read a CSV of student marks from a file and print each student's average and grade",
    "Build a menu-driven bank account program with deposit, withdraw and balance (using structs)",
    "Explain the output of a tricky pointer program line by line on a whiteboard",
    "Rewrite a function that uses gets() and strcpy() so it is safe from buffer overflow",
    "Write a dynamic array that grows with realloc() and frees all memory at the end",
    "Compile with -Wall -Wextra and remove every warning from a given program",
    "Explain the memory layout (stack, heap, data) of a given program while it runs"
  ],
  "topics":{
    "What C is and where it is used":[
      "Why is C still used for operating systems, embedded systems and compilers?",
      "What is the difference between C and C++?",
      "What does \"C is a compiled language\" mean?"
    ],
    "Compiler and IDE setup":[
      "What is the difference between a compiler, an editor and an IDE?",
      "What does gcc -Wall do, and why should you always use it?"
    ],
    "Hello world and program structure":[
      ["Write a program that prints \"Hello, World!\"","https://exercism.org/tracks/c/exercises/hello-world"],
      "What is the role of #include \u003cstdio.h> and int main()?",
      "What does main() return, and what does the return value mean?"
    ],
    "Compiling and running":[
      "What are the four stages of compilation: preprocessing, compiling, assembling, linking?",
      "What is the difference between a compile-time error, a link error and a run-time error?"
    ],
    "Reading compiler errors":[
      "What does \"implicit declaration of function\" mean and how do you fix it?",
      "A program compiles with warnings. Should you ignore them? Why?"
    ],
    "Variables and data types":[
      "What are the sizes of char, int, long and double on a typical 64-bit system?",
      "What is the difference between signed and unsigned integers? What happens on overflow?",
      ["Write a function that tells if a year is a leap year","https://exercism.org/tracks/c/exercises/leap"]
    ],
    "Input and output":[
      "What is the difference between printf and scanf format specifiers %d, %f, %c and %s?",
      "Why is scanf(\"%s\") unsafe, and what should you use instead?"
    ],
    "Operators":[
      "What is the difference between i++ and ++i?",
      ["Explain bitwise AND, OR, XOR and shifts with an example","https://leetcode.com/problems/number-of-1-bits/"],
      ["Check if a number is a power of two using bit operations","https://leetcode.com/problems/power-of-two/"]
    ],
    "if, else and switch":[
      ["Convert a number to \"Pling\", \"Plang\", \"Plong\" based on its factors","https://exercism.org/tracks/c/exercises/raindrops"],
      "When is switch better than a chain of if-else? What happens if you forget break?"
    ],
    "Loops":[
      ["Write a program to reverse the digits of an integer","https://leetcode.com/problems/reverse-integer/"],
      ["Check if a number is a palindrome without converting it to a string","https://leetcode.com/problems/palindrome-number/"],
      "What is the difference between while and do-while?"
    ],
    "Functions":[
      "What is the difference between call by value and call by reference in C?",
      ["Write a function that returns the nth prime number","https://exercism.org/tracks/c/exercises/nth-prime"],
      "What is a function prototype and why is it needed?"
    ],
    "Scope and storage classes":[
      "Explain auto, static, extern and register storage classes.",
      "What is the difference between a local static variable and a global variable?"
    ],
    "Recursion":[
      ["Write a recursive function for the nth Fibonacci number. Why is it slow?","https://leetcode.com/problems/fibonacci-number/"],
      "What is a base case? What happens without one?",
      ["Solve the climbing stairs problem with recursion, then improve it","https://leetcode.com/problems/climbing-stairs/"]
    ],
    "Arrays":[
      "Find the largest and second largest element of an array in one pass.",
      ["Remove duplicates from a sorted array in place","https://leetcode.com/problems/remove-duplicates-from-sorted-array/"],
      ["Rotate an array by k steps","https://leetcode.com/problems/rotate-array/"]
    ],
    "Strings":[
      ["Reverse a string in place","https://leetcode.com/problems/reverse-string/"],
      ["Check if two strings are anagrams","https://leetcode.com/problems/valid-anagram/"],
      "Why must C strings end with '\\0'? What goes wrong without it?"
    ],
    "Pointers":[
      "What is a pointer? What is a NULL pointer and a dangling pointer?",
      "What is the difference between char *p and char p[]?",
      "What does int **p mean? Give a use."
    ],
    "Pointer arithmetic":[
      "If int *p points to arr[0], what does p + 3 point to? Why is it not 3 bytes ahead?",
      "Why is pointer subtraction allowed but pointer addition (p + q) is not?"
    ],
    "Pointers and functions":[
      "Write a swap function using pointers. Why does swap with plain ints not work?",
      "What is a function pointer? Give a real use (for example qsort)."
    ],
    "Dynamic memory":[
      "What is the difference between malloc, calloc, realloc and free?",
      "What is a memory leak? How do you find one?",
      "Implement a growable array (like a vector) using realloc."
    ],
    "Memory bugs":[
      "What are buffer overflow, use-after-free and double free? Give an example of each.",
      "What is undefined behaviour in C? Give three examples."
    ],
    "Debugging with gdb and Valgrind":[
      "How do you set a breakpoint, step through code and print a variable in gdb?",
      "What does Valgrind report as \"definitely lost\"?"
    ],
    "Structures and unions":[
      "What is the difference between a structure and a union? When is a union useful?",
      "What is structure padding? How does it change sizeof?"
    ],
    "Enums and typedef":[
      "Why use an enum instead of #define constants?",
      "What does typedef struct node Node; do?"
    ],
    "File handling":[
      "Write a program that counts words, lines and characters in a text file.",
      "What is the difference between text and binary file modes?",
      "What does fseek and ftell do?"
    ],
    "Header files and multi-file programs":[
      "What should go in a .h file and what in a .c file?",
      "What are include guards and why are they needed?"
    ],
    "Makefiles":[
      "Write a Makefile that builds a program from three .c files.",
      "How does make decide which files to rebuild?"
    ],
    "Preprocessor":[
      "What is the difference between a macro and a function? What are the dangers of macros?",
      "What is conditional compilation (#ifdef) used for?"
    ],
    "Linked lists":[
      ["Reverse a linked list","https://leetcode.com/problems/reverse-linked-list/"],
      ["Detect a cycle in a linked list","https://leetcode.com/problems/linked-list-cycle/"],
      ["Merge two sorted linked lists","https://leetcode.com/problems/merge-two-sorted-lists/"]
    ],
    "Stacks and queues":[
      ["Check if brackets in an expression are balanced using a stack","https://leetcode.com/problems/valid-parentheses/"],
      ["Implement a queue using two stacks","https://leetcode.com/problems/implement-queue-using-stacks/"],
      ["Implement a circular buffer","https://exercism.org/tracks/c/exercises/circular-buffer"]
    ],
    "Hash tables":[
      "How does a hash table handle collisions (chaining and open addressing)?",
      ["Find two numbers in an array that add up to a target","https://leetcode.com/problems/two-sum/"]
    ],
    "Binary trees":[
      ["Find the maximum depth of a binary tree","https://leetcode.com/problems/maximum-depth-of-binary-tree/"],
      ["Write inorder, preorder and postorder traversals","https://leetcode.com/problems/binary-tree-inorder-traversal/"],
      ["Implement insert and search in a binary search tree","https://exercism.org/tracks/c/exercises/binary-search-tree"]
    ],
    "Sorting and searching":[
      ["Implement binary search","https://leetcode.com/problems/binary-search/"],
      ["Sort an array: write bubble, insertion and quick sort and compare them","https://leetcode.com/problems/sort-an-array/"],
      "Which sorting algorithm is stable? Why does it matter?"
    ],
    "Big-O notation":[
      "What is the time complexity of binary search, merge sort and bubble sort?",
      "What is the difference between O(n log n) and O(n^2) for n = 1,000,000?"
    ]
  }
},
"cpp":{
  "full":[
    "What are the four pillars of OOP? Explain each with a C++ example.",
    "What is the difference between a struct and a class?",
    "What is a virtual destructor and when is it needed?",
    "How does a vtable work?",
    "What is the difference between overloading and overriding?",
    "Explain shallow copy vs deep copy.",
    "What is the rule of three / five / zero?",
    "Explain unique_ptr, shared_ptr and weak_ptr.",
    "What is RAII?",
    "What is move semantics?",
    "What is the difference between map and unordered_map?",
    "What is a template? What is SFINAE (basic idea)?",
    "What is the difference between new and malloc?",
    "What is a friend class?",
    "What is the difference between const and constexpr?",
    "What is the static keyword used for in C++ (four meanings)?",
    "What is an inline function?",
    "What is the diamond problem?",
    "What happens when an exception is thrown in a constructor?",
    ["Implement an LRU cache","https://leetcode.com/problems/lru-cache/"]
  ],
  "prog":[
    ["Write a class for a complex number with + and \u003c\u003c overloaded","https://exercism.org/tracks/cpp/exercises/complex-numbers"],
    ["Write a program to reverse a string using STL algorithms","https://exercism.org/tracks/cpp/exercises/reverse-string"],
    ["Write a program to check if two strings are anagrams","https://leetcode.com/problems/valid-anagram/"],
    ["Write a program to count word frequency using std::map","https://exercism.org/tracks/cpp/exercises/word-count"],
    ["Write a program to find the first non-repeating character in a string","https://leetcode.com/problems/first-unique-character-in-a-string/"],
    "Write a program to remove duplicates from a vector while keeping order",
    "Implement a template function that returns the maximum of two values",
    "Implement a generic Stack class template with push, pop and top",
    ["Implement a singly linked list class with insert, delete and print","https://exercism.org/tracks/cpp/exercises/simple-linked-list"],
    ["Implement a queue using two stacks","https://leetcode.com/problems/implement-queue-using-stacks/"],
    ["Implement a min stack that returns the minimum in O(1)","https://leetcode.com/problems/min-stack/"],
    ["Implement an LRU cache using list and unordered_map","https://leetcode.com/problems/lru-cache/"],
    "Write a Rule of Three/Five class that owns a dynamic array (copy and move)",
    "Write a simple unique_ptr-like smart pointer class",
    "Write a thread-safe singleton class",
    "Write a program using std::thread and std::mutex where two threads update a counter safely",
    "Write a program to sort objects by a field using a lambda comparator",
    ["Write a program to find the kth largest element using priority_queue","https://leetcode.com/problems/kth-largest-element-in-an-array/"],
    "Write a program to merge two sorted vectors",
    ["Write a program to rotate a vector by k steps","https://leetcode.com/problems/rotate-array/"],
    ["Write a program to check balanced brackets using std::stack","https://leetcode.com/problems/valid-parentheses/"],
    ["Write a bank account class with deposit and withdraw that throws on bad input","https://exercism.org/tracks/cpp/exercises/bank-account"],
    "Write a class hierarchy Shape, Circle, Rectangle with a virtual area() function",
    "Write a program that reads a file line by line with ifstream and counts lines",
    ["Write a clock class that adds minutes and compares times","https://exercism.org/tracks/cpp/exercises/clock"]
  ],
  "tasks":[
    "Find the memory leak in a given class that has a raw pointer member and fix it with RAII",
    "Explain why a given class crashes when it is copied, then fix it (Rule of Three)",
    "Refactor C-style code (malloc, char arrays) into modern C++ (vector, string, smart pointers)",
    "Find the data race in a multithreaded program and fix it with a mutex or atomic",
    "Write CMakeLists.txt for a small project with a library and an executable",
    "Choose the right STL container for five given problems and explain the choice",
    "Profile a slow program and make it faster by fixing copies (use references and move)",
    "Debug a program with gdb: set breakpoints, step through and print variables",
    "Add unit tests to a small class using GoogleTest or Catch2",
    "Explain the virtual table and what happens when a virtual function is called"
  ],
  "topics":{
    "Setup and first program":[
      "What is the difference between C and C++? Name three features C++ adds.",
      "What does using namespace std do, and why is it avoided in headers?"
    ],
    "Variables, types and input/output":[
      "What is the difference between cin/cout and scanf/printf?",
      "What is the difference between int, long long and double? When do you need long long?"
    ],
    "Conditions and loops":[
      ["Write FizzBuzz","https://leetcode.com/problems/fizz-buzz/"],
      ["Count the digits that divide a number","https://leetcode.com/problems/count-the-digits-that-divide-a-number/"]
    ],
    "Functions and overloading":[
      "What is function overloading? How does the compiler choose which function to call?",
      "What are default arguments? Where must they be written?"
    ],
    "References":[
      "What is the difference between a reference and a pointer?",
      "Why pass large objects by const reference?"
    ],
    "Arrays and strings":[
      "What is the difference between a C-style string and std::string?",
      ["Find the longest common prefix of a list of strings","https://leetcode.com/problems/longest-common-prefix/"],
      ["Check if a string is a valid palindrome ignoring non-letters","https://leetcode.com/problems/valid-palindrome/"]
    ],
    "Classes and objects":[
      "What is the difference between a class and a struct in C++?",
      ["Design a simple BankAccount class with deposit and withdraw","https://exercism.org/tracks/cpp/exercises/bank-account"]
    ],
    "Constructors and destructors":[
      "What are default, parameterised and copy constructors?",
      "When is the destructor called? In which order for derived classes?",
      "What is the rule of three (and rule of five)?"
    ],
    "Encapsulation":[
      "Why make data members private? How do getters and setters help?",
      "What is the difference between public, private and protected?"
    ],
    "Inheritance":[
      "What are the types of inheritance in C++? What is the diamond problem?",
      "How does virtual inheritance solve the diamond problem?"
    ],
    "Polymorphism and virtual functions":[
      "What is a virtual function? How does a vtable work?",
      "What is the difference between compile-time and run-time polymorphism?",
      "Why should a base class have a virtual destructor?"
    ],
    "Abstract classes and interfaces":[
      "What is a pure virtual function? Can an abstract class have a constructor?",
      "Design a Shape interface with area() for Circle and Rectangle."
    ],
    "Operator overloading":[
      ["Overload + and \u003c\u003c for a Complex number class","https://exercism.org/tracks/cpp/exercises/complex-numbers"],
      "Which operators cannot be overloaded?"
    ],
    "Friend functions and static members":[
      "What is a friend function? Does it break encapsulation?",
      "What is a static member variable? How do you count objects created?"
    ],
    "Pointers and dynamic memory":[
      "What is the difference between new/delete and malloc/free?",
      "What is the difference between delete and delete[]?"
    ],
    "RAII":[
      "What is RAII? Give an example from the standard library.",
      "How does RAII prevent resource leaks when an exception is thrown?"
    ],
    "Smart pointers":[
      "Compare unique_ptr, shared_ptr and weak_ptr. When do you use each?",
      "How can shared_ptr create a memory leak (cycles), and how does weak_ptr fix it?"
    ],
    "Move semantics":[
      "What is an rvalue reference? What does std::move actually do?",
      "Why is moving a vector cheaper than copying it?"
    ],
    "Lambdas":[
      "Sort a vector of pairs by second value using a lambda.",
      "What is the capture list? Explain [=], [&] and [this]."
    ],
    "auto, range-for, structured bindings":[
      "When should you avoid auto?",
      "Iterate over a map with structured bindings."
    ],
    "Exceptions":[
      "What happens if an exception is thrown in a destructor?",
      "What is noexcept and why does it matter for move constructors?"
    ],
    "Templates":[
      "Write a function template that returns the maximum of two values.",
      "What is template specialisation?"
    ],
    "vector, list, deque":[
      "When is std::list better than std::vector? (Hint: almost never — explain why.)",
      "What happens to iterators when a vector grows?"
    ],
    "map, set, unordered_map":[
      "What is the difference between map and unordered_map (order, speed, worst case)?",
      ["Find the first unique character in a string","https://leetcode.com/problems/first-unique-character-in-a-string/"],
      ["Group anagrams together","https://leetcode.com/problems/group-anagrams/"]
    ],
    "stack, queue, priority_queue":[
      ["Find the k-th largest element in an array","https://leetcode.com/problems/kth-largest-element-in-an-array/"],
      ["Design a stack that returns the minimum in O(1)","https://leetcode.com/problems/min-stack/"]
    ],
    "Iterators":[
      "What are the iterator categories (input, forward, bidirectional, random access)?",
      "What is iterator invalidation? Give an example."
    ],
    "Algorithms":[
      "Use std::sort, std::lower_bound and std::unique together to remove duplicates from a vector.",
      ["Find the index where a target should be inserted","https://leetcode.com/problems/search-insert-position/"]
    ],
    "Strings and streams":[
      ["Reverse the words in a string","https://leetcode.com/problems/reverse-words-in-a-string/"],
      "Use stringstream to split a sentence into words."
    ],
    "Complexity analysis":[
      "What is the time complexity of inserting into a std::map and an std::unordered_map?",
      ["Contains duplicate: give an O(n^2), O(n log n) and O(n) solution","https://leetcode.com/problems/contains-duplicate/"]
    ],
    "Arrays, strings, two pointers":[
      ["Container with most water","https://leetcode.com/problems/container-with-most-water/"],
      ["Move all zeroes to the end keeping order","https://leetcode.com/problems/move-zeroes/"],
      ["3Sum","https://leetcode.com/problems/3sum/"]
    ],
    "Recursion and backtracking":[
      ["Generate all subsets of a set","https://leetcode.com/problems/subsets/"],
      ["Generate all permutations","https://leetcode.com/problems/permutations/"],
      ["N-Queens","https://leetcode.com/problems/n-queens/"]
    ],
    "Linked lists, stacks, queues":[
      ["Remove the n-th node from the end of a list","https://leetcode.com/problems/remove-nth-node-from-end-of-list/"],
      ["Evaluate reverse Polish notation","https://leetcode.com/problems/evaluate-reverse-polish-notation/"]
    ],
    "Trees and binary search trees":[
      ["Validate a binary search tree","https://leetcode.com/problems/validate-binary-search-tree/"],
      ["Lowest common ancestor in a BST","https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"],
      ["Level order traversal","https://leetcode.com/problems/binary-tree-level-order-traversal/"]
    ],
    "Graphs":[
      ["Number of islands","https://leetcode.com/problems/number-of-islands/"],
      ["Course schedule (detect a cycle)","https://leetcode.com/problems/course-schedule/"]
    ],
    "Dynamic programming":[
      ["House robber","https://leetcode.com/problems/house-robber/"],
      ["Coin change","https://leetcode.com/problems/coin-change/"],
      ["Longest increasing subsequence","https://leetcode.com/problems/longest-increasing-subsequence/"]
    ],
    "CMake and building projects":[
      "Write a CMakeLists.txt for a project with a library and an executable.",
      "What is the difference between a static and a shared library?"
    ]
  }
},
"java":{
  "full":[
    "What are the main features of Java?",
    "What is the difference between JDK, JRE and JVM?",
    "Explain the four OOP pillars with Java examples.",
    "Why is String immutable?",
    "What is the difference between == and equals()? Why override hashCode with equals?",
    "How does HashMap work internally?",
    "What is the difference between ArrayList and LinkedList?",
    "What is the difference between HashMap and ConcurrentHashMap?",
    "Checked vs unchecked exceptions.",
    "What is the difference between an abstract class and an interface?",
    "What is the Java memory model: heap, stack, metaspace?",
    "How does garbage collection work?",
    "What are lambdas and streams?",
    "What is multithreading? How do you avoid deadlock?",
    "What is the volatile keyword?",
    "What is dependency injection in Spring?",
    "Explain the Spring Boot request flow from controller to database.",
    "What is the difference between @Component, @Service and @Repository?",
    "What is JPA lazy loading?",
    "How do you secure a REST API in Spring Boot?"
  ],
  "prog":[
    ["Write a program to reverse a string without using reverse()","https://exercism.org/tracks/java/exercises/reverse-string"],
    ["Write a program to check if a string is a palindrome","https://leetcode.com/problems/valid-palindrome/"],
    ["Write a program to check if two strings are anagrams","https://leetcode.com/problems/valid-anagram/"],
    "Write a program to count the occurrence of each character in a string using a HashMap",
    "Write a program to find duplicate elements in an array",
    ["Write a program to find the first non-repeating character in a string","https://leetcode.com/problems/first-unique-character-in-a-string/"],
    ["Write a program to print the Fibonacci series using recursion and a loop","https://leetcode.com/problems/fibonacci-number/"],
    "Write a program to check if a number is prime",
    ["Write a program to check an Armstrong number","https://exercism.org/tracks/java/exercises/armstrong-numbers"],
    "Write a program to swap two numbers without a third variable",
    "Write a program to find the second largest number in an array",
    ["Write a program to find the missing number in an array from 1 to n","https://leetcode.com/problems/missing-number/"],
    ["Write a program to move all zeros to the end of an array","https://leetcode.com/problems/move-zeroes/"],
    ["Write a program for Two Sum using a HashMap","https://leetcode.com/problems/two-sum/"],
    ["Write a program to count words in a sentence","https://exercism.org/tracks/java/exercises/word-count"],
    "Write a program to sort a list of Employee objects by salary using Comparator",
    "Write a program using Streams to filter, map and group a list of employees by department",
    "Write a thread-safe singleton class (double-checked locking)",
    "Write an immutable class in Java",
    "Write a producer-consumer program using BlockingQueue",
    "Write a program that prints odd and even numbers using two threads in order",
    "Write a program to read a file and count words using try-with-resources",
    ["Write a custom exception and throw it from a bank withdraw method","https://exercism.org/tracks/java/exercises/bank-account"],
    ["Implement an LRU cache using LinkedHashMap","https://leetcode.com/problems/lru-cache/"],
    ["Write a program to check balanced parentheses using a stack","https://leetcode.com/problems/valid-parentheses/"],
    ["Write a program to reverse a linked list","https://leetcode.com/problems/reverse-linked-list/"],
    ["Write a program to find the longest substring without repeating characters","https://leetcode.com/problems/longest-substring-without-repeating-characters/"]
  ],
  "tasks":[
    "Build a small REST API with Spring Boot that does create, read, update and delete for a \"Book\"",
    "Explain the output of a given program with String, StringBuilder and == vs equals()",
    "Find and fix a NullPointerException in a given program using the stack trace",
    "Write JUnit 5 tests with assertions for a Calculator class",
    "Refactor a long method into small methods and classes using OOP principles",
    "Find a memory leak in a program that keeps adding to a static List and fix it",
    "Fix a ConcurrentModificationException in code that removes items while looping",
    "Set up a Maven project with dependencies and build a runnable JAR",
    "Connect to a database with JDBC and run a parameterised query (no SQL injection)",
    "Explain how HashMap stores entries by drawing buckets for five given keys"
  ],
  "topics":{
    "JDK, JVM and JRE":[
      "What is the difference between JDK, JRE and JVM?",
      "Why is Java called \"write once, run anywhere\"? What is bytecode?",
      "What is the JIT compiler?"
    ],
    "Setup with IntelliJ IDEA":[
      "How do you create, run and debug a Java project in IntelliJ?",
      "What is the difference between a project, a module and a package?"
    ],
    "Variables and data types":[
      "What are the eight primitive types in Java and their sizes?",
      "What is the difference between int and Integer? What is autoboxing?",
      ["Write a program that greets a user by name","https://exercism.org/tracks/java/exercises/two-fer"]
    ],
    "Operators and expressions":[
      "What is the difference between == and equals()?",
      "What does integer division and the % operator give for negative numbers?",
      ["Check if a year is a leap year","https://exercism.org/tracks/java/exercises/leap"]
    ],
    "Conditions and loops":[
      ["Write FizzBuzz","https://leetcode.com/problems/fizz-buzz/"],
      ["Find the sum of digits of a number until it becomes one digit","https://leetcode.com/problems/add-digits/"],
      "What is the difference between break, continue and labelled break?"
    ],
    "Methods":[
      "What is method overloading? Can you overload by return type only?",
      "Is Java pass-by-value or pass-by-reference? Explain with an object."
    ],
    "Arrays":[
      ["Find the maximum subarray sum","https://leetcode.com/problems/maximum-subarray/"],
      ["Merge two sorted arrays","https://leetcode.com/problems/merge-sorted-array/"],
      "What is the difference between an array and an ArrayList?"
    ],
    "Classes and objects":[
      "What is the difference between a class and an object?",
      ["Design a simple BankAccount class","https://exercism.org/tracks/java/exercises/bank-account"]
    ],
    "Constructors and this":[
      "What is constructor chaining? How do this() and super() work?",
      "Does Java have a default constructor? When does it disappear?"
    ],
    "Encapsulation":[
      "Why are fields private and accessed through getters and setters?",
      "How do you make a class immutable?"
    ],
    "Inheritance":[
      "Why does Java not support multiple inheritance of classes?",
      "What is the difference between method overriding and overloading?"
    ],
    "Polymorphism":[
      "What is dynamic method dispatch?",
      "Can you override a static method? Why or why not?"
    ],
    "Abstraction and interfaces":[
      "What is the difference between an abstract class and an interface (Java 8+)?",
      "What are default and static methods in interfaces?"
    ],
    "static and final":[
      "What is the difference between final, finally and finalize?",
      "When is a static block executed?"
    ],
    "Packages and access":[
      "Explain public, protected, default and private access.",
      "Why organise code into packages?"
    ],
    "Strings and StringBuilder":[
      "Why are Strings immutable in Java? What is the string pool?",
      "StringBuilder vs StringBuffer: what is the difference?",
      ["Find the first non-repeating character in a string","https://leetcode.com/problems/first-unique-character-in-a-string/"]
    ],
    "Exceptions":[
      "What is the difference between checked and unchecked exceptions?",
      "What is try-with-resources?",
      "Create a custom exception for invalid age."
    ],
    "Collections":[
      "How does HashMap work inside (hashing, buckets, resizing)?",
      "ArrayList vs LinkedList: when do you use each?",
      ["Find the most frequent element using a HashMap","https://leetcode.com/problems/majority-element/"]
    ],
    "Generics":[
      "What is type erasure?",
      "What do ? extends T and ? super T mean?"
    ],
    "Lambdas and streams":[
      "Use streams to find the squares of even numbers from a list.",
      "What is the difference between map and flatMap?",
      "What is a functional interface?"
    ],
    "File I/O":[
      "Read a file line by line and count words using Files and streams.",
      "What is serialization?"
    ],
    "Dates and times":[
      "Why use java.time (LocalDate) instead of Date?",
      "Calculate the number of days between two dates."
    ],
    "Multithreading basics":[
      "What is the difference between a process and a thread?",
      "What does synchronized do? What is a deadlock?",
      "Thread vs Runnable vs ExecutorService."
    ],
    "Maven and Gradle":[
      "What is pom.xml? What are Maven dependencies and the build lifecycle?",
      "Maven vs Gradle: what is the difference?"
    ],
    "JUnit 5":[
      "Write a JUnit 5 test for a method that adds two numbers.",
      "What do @BeforeEach, @Test and assertThrows do?"
    ],
    "Debugging in IntelliJ":[
      "How do you use breakpoints, step over and step into?",
      "What is a conditional breakpoint?"
    ],
    "Git for Java projects":[
      "What should go into .gitignore for a Maven project?",
      "Walk through clone, branch, commit and push for a Java project."
    ],
    "Spring Boot basics":[
      "What is Spring Boot and how is it different from Spring?",
      "What are dependency injection and inversion of control?",
      "What does @SpringBootApplication do?"
    ],
    "REST controllers":[
      "What is the difference between @Controller and @RestController?",
      "What is the difference between @PathVariable and @RequestParam?",
      "Design REST endpoints for a todo app (GET, POST, PUT, DELETE)."
    ],
    "Spring Data JPA":[
      "What is JPA? How is it related to Hibernate?",
      "What is the N+1 query problem?"
    ],
    "Validation and error handling":[
      "How do you validate a request body with @Valid?",
      "What does @ControllerAdvice do?"
    ],
    "Spring Security basics":[
      "How does Spring Security authenticate a request?",
      "What is the difference between authentication and authorization? What is a JWT?"
    ],
    "Testing Spring apps":[
      "What is the difference between @SpringBootTest and @WebMvcTest?",
      "How do you mock a repository with Mockito?"
    ],
    "Big-O":[
      "What is the time complexity of HashMap get and put? What is the worst case?",
      ["Contains duplicate","https://leetcode.com/problems/contains-duplicate/"]
    ],
    "Arrays and strings":[
      ["Best time to buy and sell stock","https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"],
      ["Longest substring without repeating characters","https://leetcode.com/problems/longest-substring-without-repeating-characters/"]
    ],
    "Recursion":[
      ["Pow(x, n)","https://leetcode.com/problems/powx-n/"],
      ["Generate parentheses","https://leetcode.com/problems/generate-parentheses/"]
    ],
    "Linked lists, stacks, queues":[
      ["Reverse a linked list","https://leetcode.com/problems/reverse-linked-list/"],
      ["Valid parentheses","https://leetcode.com/problems/valid-parentheses/"]
    ],
    "Trees and graphs":[
      ["Invert a binary tree","https://leetcode.com/problems/invert-binary-tree/"],
      ["Number of islands","https://leetcode.com/problems/number-of-islands/"]
    ],
    "Dynamic programming basics":[
      ["Climbing stairs","https://leetcode.com/problems/climbing-stairs/"],
      ["Coin change","https://leetcode.com/problems/coin-change/"]
    ]
  }
},
"python":{
  "full":[
    "What are Python's key features?",
    "What is the difference between a list and a tuple?",
    "How is memory managed in Python? What is the GIL?",
    "What are decorators? Write one that times a function.",
    "What are generators and the yield keyword?",
    "What is the difference between deep copy and shallow copy?",
    "What are *args and **kwargs?",
    "What is the difference between is and ==?",
    "What is a lambda function?",
    "Explain list, dict and set comprehensions.",
    "What is the difference between @staticmethod and @classmethod?",
    "What are dunder (magic) methods?",
    "How do you handle exceptions?",
    "What are modules and packages?",
    "What is a virtual environment?",
    "How does Python's dictionary work internally?",
    "What is monkey patching?",
    "Explain inheritance and method resolution order (MRO).",
    "What is the difference between Flask and Django?",
    "Reverse a string, check a palindrome and count vowels in one function each."
  ],
  "prog":[
    ["Write a program to reverse a string in three different ways","https://exercism.org/tracks/python/exercises/reverse-string"],
    ["Write a program to check if a string is a palindrome","https://leetcode.com/problems/valid-palindrome/"],
    ["Write a program to check if two words are anagrams","https://exercism.org/tracks/python/exercises/anagram"],
    ["Write a program to count the frequency of each word in a text using a dictionary","https://exercism.org/tracks/python/exercises/word-count"],
    "Write a program to find duplicates in a list",
    "Write a program to remove duplicates from a list while keeping order",
    ["Write a program to flatten a nested list","https://exercism.org/tracks/python/exercises/flatten-array"],
    ["Write a program to print the Fibonacci series using a generator","https://leetcode.com/problems/fibonacci-number/"],
    "Write a program to check if a number is prime",
    "Write a program to find the second largest number in a list",
    ["Write a program for Two Sum using a dictionary","https://leetcode.com/problems/two-sum/"],
    "Write a program to merge two dictionaries and sum values of common keys",
    "Write a program to sort a list of dictionaries by a key",
    "Write a program to find the most common element in a list using collections.Counter",
    "Write a decorator that measures how long a function takes",
    "Write a decorator that retries a function three times on failure",
    "Write a context manager that opens and closes a file safely",
    "Write a class with __init__, __str__ and a class method",
    "Write a generator that reads a large file line by line",
    "Write a program to read a CSV file and print the average of a column",
    "Write a program to read and update a JSON file",
    "Write a program to validate an email address using a regular expression",
    "Write a program to call a public REST API with requests and print some fields",
    ["Write a program to rotate a matrix by 90 degrees","https://leetcode.com/problems/rotate-image/"],
    ["Write a program to group anagrams together","https://leetcode.com/problems/group-anagrams/"],
    "Write a program to find the longest word in a sentence"
  ],
  "tasks":[
    "Write a script that renames all files in a folder by adding the date to each name",
    "Build a command-line to-do app that saves tasks to a JSON file",
    "Write a script that downloads a web page and counts the most common words",
    "Explain the output of code that uses a mutable default argument, then fix it",
    "Write pytest tests for a function, including edge cases and an expected exception",
    "Set up a virtual environment and requirements.txt for a small project",
    "Find why a script is slow with cProfile and speed it up",
    "Clean a messy CSV with pandas: remove blanks, fix types and save a new file",
    "Turn a long script into functions and a module with a main() entry point",
    "Explain shallow copy vs deep copy using a nested list example"
  ],
  "topics":{
    "Install Python and VS Code":[
      "How do you check your Python version and run a .py file?",
      "What is the difference between python and pip?"
    ],
    "Variables and types":[
      "Python is dynamically typed: what does that mean?",
      "What is the difference between mutable and immutable types? Give examples.",
      ["Print a personalised greeting","https://exercism.org/tracks/python/exercises/two-fer"]
    ],
    "Input, output and f-strings":[
      "Read two numbers from input and print their sum and average with two decimals.",
      "What is the difference between print with sep and end?"
    ],
    "Conditions":[
      ["Leap year","https://exercism.org/tracks/python/exercises/leap"],
      "What are truthy and falsy values in Python?",
      ["Return the type of a triangle from its sides","https://exercism.org/tracks/python/exercises/triangle"]
    ],
    "Loops":[
      ["FizzBuzz","https://leetcode.com/problems/fizz-buzz/"],
      "What is the difference between for and while? What is the else clause on a loop?",
      ["Collatz conjecture steps","https://exercism.org/tracks/python/exercises/collatz-conjecture"]
    ],
    "Functions":[
      "What are *args and **kwargs?",
      "What is the danger of a mutable default argument?",
      ["Armstrong numbers","https://exercism.org/tracks/python/exercises/armstrong-numbers"]
    ],
    "Lists":[
      ["Two sum","https://leetcode.com/problems/two-sum/"],
      "Remove duplicates from a list while keeping order.",
      "What is the difference between append and extend?"
    ],
    "Tuples":[
      "Why use a tuple instead of a list?",
      "What is tuple unpacking? Swap two variables in one line."
    ],
    "Dictionaries":[
      ["Count word frequency in a sentence","https://exercism.org/tracks/python/exercises/word-count"],
      ["Group anagrams","https://leetcode.com/problems/group-anagrams/"],
      "How is a dictionary implemented? Why are keys required to be hashable?"
    ],
    "Sets":[
      "Find common elements of two lists using sets.",
      ["Contains duplicate","https://leetcode.com/problems/contains-duplicate/"]
    ],
    "Comprehensions":[
      "Create a list of squares of even numbers with a list comprehension.",
      "Write a dictionary comprehension that maps words to their lengths.",
      "What is a generator expression and how does it save memory?"
    ],
    "String methods":[
      ["Check if a sentence is a pangram","https://exercism.org/tracks/python/exercises/pangram"],
      ["Valid palindrome","https://leetcode.com/problems/valid-palindrome/"],
      ["Isogram check","https://exercism.org/tracks/python/exercises/isogram"]
    ],
    "Errors and exceptions":[
      "What is the difference between try/except/else/finally?",
      "Raise a custom exception when input is invalid."
    ],
    "Files and CSV":[
      "Read a CSV file and print the average of a column.",
      "Why use with open(...)?"
    ],
    "Modules and packages":[
      "What does if __name__ == \"__main__\" mean?",
      "What is the difference between a module and a package?"
    ],
    "Virtual environments":[
      "Why use a virtual environment? How do you create one with venv?",
      "What is requirements.txt?"
    ],
    "Classes and objects":[
      "What are __init__ and self?",
      ["Implement a bank account class","https://exercism.org/tracks/python/exercises/bank-account"],
      "What are class variables vs instance variables?"
    ],
    "Regular expressions":[
      "Write a regex to validate an Indian mobile number.",
      ["Clean up phone numbers","https://exercism.org/tracks/python/exercises/phone-number"]
    ],
    "Unit testing with pytest":[
      "Write pytest tests for a function that checks palindromes.",
      "What are fixtures in pytest?"
    ],
    "Working with folders and files":[
      "Write a script that sorts files in a folder into sub-folders by extension.",
      "os vs pathlib: which should you use?"
    ],
    "Excel and PDF automation":[
      "Read an Excel sheet with openpyxl or pandas and write a summary sheet.",
      "Merge several PDFs into one."
    ],
    "Calling web APIs":[
      "Call a public API with requests and print selected fields from the JSON.",
      "How do you handle errors and timeouts in requests?"
    ],
    "Web scraping basics":[
      "Scrape the titles from a web page with BeautifulSoup.",
      "What should you check before scraping a website (robots.txt, terms)?"
    ],
    "Scheduling scripts":[
      "How do you run a Python script every day (Task Scheduler / cron)?",
      "How do you log what a scheduled script did?"
    ],
    "Flask or FastAPI basics":[
      "Build a GET /items and POST /items API.",
      "What is the difference between Flask and FastAPI?"
    ],
    "Django basics":[
      "What is the MTV pattern in Django?",
      "What are migrations?"
    ],
    "Databases with Python":[
      "Connect to SQLite and create, insert and query a table.",
      "What is an ORM? Why use SQLAlchemy?"
    ],
    "Deploying a Python app":[
      "How do you deploy a Flask/FastAPI app for free?",
      "What is gunicorn/uvicorn used for?"
    ],
    "Git and GitHub":[
      "Push your Python project to GitHub with a good README.",
      "What files should never be committed (secrets, venv)?"
    ]
  }
},
"sql":{
  "full":[
    "What is the difference between DELETE, TRUNCATE and DROP?",
    "What is the difference between WHERE and HAVING?",
    "Explain all types of joins with an example.",
    "What is normalisation? Explain the normal forms.",
    "Primary key vs unique key vs foreign key.",
    "What is an index? Clustered vs non-clustered.",
    "What are window functions? ROW_NUMBER vs RANK vs DENSE_RANK.",
    ["Find the Nth highest salary","https://leetcode.com/problems/nth-highest-salary/"],
    "What is a correlated subquery?",
    "What are ACID properties?",
    "What is a deadlock in databases?",
    "What is a view?",
    "What is a stored procedure?",
    "What is a trigger?",
    "How would you find duplicate rows?",
    "UNION vs UNION ALL.",
    "What is SQL injection and how do you prevent it?",
    "How do you optimise a slow query?",
    ["Consecutive numbers","https://leetcode.com/problems/consecutive-numbers/"],
    ["Trips and users","https://leetcode.com/problems/trips-and-users/"]
  ],
  "prog":[
    ["Find the second highest salary from an Employee table","https://leetcode.com/problems/second-highest-salary/"],
    ["Find the percentage of users who confirmed their signup","https://leetcode.com/problems/confirmation-rate/"],
    ["Find duplicate emails in a table","https://leetcode.com/problems/duplicate-emails/"],
    ["Delete duplicate rows and keep the one with the smallest id","https://leetcode.com/problems/delete-duplicate-emails/"],
    ["Find customers who never ordered","https://leetcode.com/problems/customers-who-never-order/"],
    ["Find employees who earn more than their managers","https://leetcode.com/problems/employees-earning-more-than-their-managers/"],
    ["Rank scores without gaps","https://leetcode.com/problems/rank-scores/"],
    ["Find the highest salary in each department","https://leetcode.com/problems/department-highest-salary/"],
    ["Find the top three salaries in each department","https://leetcode.com/problems/department-top-three-salaries/"],
    ["Find numbers that appear at least three times in a row","https://leetcode.com/problems/consecutive-numbers/"],
    ["Find days whose temperature was higher than the day before","https://leetcode.com/problems/rising-temperature/"],
    ["Combine two tables with a LEFT JOIN","https://leetcode.com/problems/combine-two-tables/"],
    ["Find the first login date of each player","https://leetcode.com/problems/game-play-analysis-i/"],
    ["Find the managers with at least five direct reports","https://leetcode.com/problems/managers-with-at-least-5-direct-reports/"],
    ["Find big countries by area or population","https://leetcode.com/problems/big-countries/"],
    ["Find the person with the most friends","https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/"],
    "Write a query for a running total of sales by date using a window function",
    "Write a query to find the month-over-month growth in revenue using LAG()",
    "Write a query to pivot sales by month into columns using CASE WHEN",
    "Write a query to find employees who joined in the last 90 days",
    "Write a query that returns each department's employee count, including departments with zero employees",
    "Write a recursive CTE that lists an employee's full management chain"
  ],
  "tasks":[
    "Design tables for a library system (books, members, loans) with keys and constraints",
    "Normalise a given flat spreadsheet table into 3NF",
    "Read an EXPLAIN plan for a slow query and add the right index",
    "Write a stored procedure that transfers money between two accounts inside a transaction",
    "Explain what happens to two parallel transactions at different isolation levels",
    "Rewrite a query that uses a correlated subquery into a JOIN and compare speed",
    "Find and fix the bug in a query that gives wrong counts because of a JOIN",
    "Load a CSV into a table and clean bad rows with SQL",
    "Write a query to find gaps in a sequence of invoice numbers",
    "Create a view and a user with read-only access to it"
  ],
  "topics":{
    "What a database is":[
      "What is the difference between a database, a table and a DBMS?",
      "SQL vs NoSQL: when do you use each?"
    ],
    "Install MySQL or PostgreSQL":[
      "How do you create a database and a user in MySQL or PostgreSQL?",
      "What is the difference between MySQL and PostgreSQL?"
    ],
    "SELECT and FROM":[
      ["Select all big countries","https://leetcode.com/problems/big-countries/"],
      ["Find products that are low fat and recyclable","https://leetcode.com/problems/recyclable-and-low-fat-products/"]
    ],
    "WHERE":[
      ["Find customers not referred by customer 2 (watch out for NULL)","https://leetcode.com/problems/find-customer-referee/"],
      ["Find invalid tweets longer than 15 characters","https://leetcode.com/problems/invalid-tweets/"]
    ],
    "ORDER BY and LIMIT":[
      ["Find the second highest salary","https://leetcode.com/problems/second-highest-salary/"],
      ["Find not-boring movies with odd ids, ordered by rating","https://leetcode.com/problems/not-boring-movies/"]
    ],
    "DISTINCT and aliases":[
      ["Find authors who viewed their own articles","https://leetcode.com/problems/article-views-i/"],
      ["Find duplicate emails","https://leetcode.com/problems/duplicate-emails/"]
    ],
    "Aggregate functions":[
      ["Find the average selling price per product","https://leetcode.com/problems/average-selling-price/"],
      ["Find the project's average years of experience","https://leetcode.com/problems/project-employees-i/"]
    ],
    "GROUP BY and HAVING":[
      ["Find classes with at least 5 students","https://leetcode.com/problems/classes-with-at-least-5-students/"],
      ["Find the customer who placed the most orders","https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/"]
    ],
    "INNER JOIN":[
      ["Combine two tables","https://leetcode.com/problems/combine-two-tables/"],
      ["Replace employee id with the unique identifier","https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/"]
    ],
    "LEFT and RIGHT JOIN":[
      ["Find customers who never order","https://leetcode.com/problems/customers-who-never-order/"],
      ["Find customers who visited but made no transactions","https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/"]
    ],
    "Self join":[
      ["Find employees earning more than their managers","https://leetcode.com/problems/employees-earning-more-than-their-managers/"],
      ["Find dates with a higher temperature than the previous day","https://leetcode.com/problems/rising-temperature/"]
    ],
    "UNION":[
      "What is the difference between UNION and UNION ALL?",
      ["Count salaries in three categories","https://leetcode.com/problems/count-salary-categories/"]
    ],
    "INSERT, UPDATE, DELETE":[
      ["Delete duplicate emails keeping the smallest id","https://leetcode.com/problems/delete-duplicate-emails/"],
      ["Swap the sex column with one UPDATE","https://leetcode.com/problems/swap-sex-of-employees/"]
    ],
    "CREATE and ALTER TABLE":[
      "Write CREATE TABLE statements for students, courses and enrolments.",
      "How do you add a column and rename a column safely?"
    ],
    "Data types":[
      "CHAR vs VARCHAR vs TEXT: when to use each?",
      "Why store money as DECIMAL, not FLOAT?"
    ],
    "Keys and constraints":[
      "What is the difference between primary key, unique key and foreign key?",
      "What does ON DELETE CASCADE do?"
    ],
    "Normalisation":[
      "Explain 1NF, 2NF and 3NF with an example.",
      "When would you denormalise a table?"
    ],
    "ER diagrams":[
      "Draw an ER diagram for a library: books, members, loans.",
      "How do you turn a many-to-many relationship into tables?"
    ],
    "Subqueries":[
      ["Find the department highest salary","https://leetcode.com/problems/department-highest-salary/"],
      ["Find managers with at least 5 direct reports","https://leetcode.com/problems/managers-with-at-least-5-direct-reports/"]
    ],
    "CTEs":[
      "Rewrite a nested subquery as a CTE. Why is it easier to read?",
      "What is a recursive CTE? Give an example (an org chart)."
    ],
    "Window functions":[
      ["Rank scores","https://leetcode.com/problems/rank-scores/"],
      ["Department top three salaries","https://leetcode.com/problems/department-top-three-salaries/"],
      ["Restaurant growth (moving average)","https://leetcode.com/problems/restaurant-growth/"]
    ],
    "CASE expressions":[
      ["Triangle judgement","https://leetcode.com/problems/triangle-judgement/"],
      ["Exchange seats","https://leetcode.com/problems/exchange-seats/"]
    ],
    "Views and stored procedures":[
      "What is a view? Can you update through a view?",
      "Stored procedure vs function: what is the difference?"
    ],
    "Transactions and ACID":[
      "What do atomicity, consistency, isolation and durability mean?",
      "What are dirty reads, non-repeatable reads and phantom reads?"
    ],
    "Indexes and query plans":[
      "How does a B-tree index speed up a query? When does it not help?",
      "How do you read EXPLAIN output?"
    ],
    "SQL injection":[
      "What is SQL injection? Show a vulnerable query and the fixed version.",
      "Why do prepared statements prevent SQL injection?"
    ]
  }
},
"dsa":{
  "full":[
    "Explain the time and space complexity of your favourite sorting algorithm.",
    "Array vs linked list: trade-offs.",
    "How does a hash map work? What happens on collision?",
    "BFS vs DFS: when to use each.",
    "Explain dynamic programming. Memoisation vs tabulation.",
    "What is a heap? How does a priority queue use it?",
    "What is a trie and where is it used?",
    "How do you detect a cycle in a linked list and in a graph?",
    "Explain binary search on the answer with an example.",
    "Explain the sliding window technique.",
    "What is a monotonic stack?",
    "What is topological sort?",
    "Explain Dijkstra's algorithm and when it fails.",
    "What is union-find with path compression?",
    ["Two sum","https://leetcode.com/problems/two-sum/"],
    ["Merge intervals","https://leetcode.com/problems/merge-intervals/"],
    ["Trapping rain water","https://leetcode.com/problems/trapping-rain-water/"],
    ["Longest palindromic substring","https://leetcode.com/problems/longest-palindromic-substring/"],
    ["Serialize and deserialize binary tree","https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"],
    ["Median of two sorted arrays","https://leetcode.com/problems/median-of-two-sorted-arrays/"]
  ],
  "prog":[
    ["Daily Temperatures (monotonic stack)","https://leetcode.com/problems/daily-temperatures/"],
    ["Best Time to Buy and Sell Stock","https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"],
    ["Contains Duplicate","https://leetcode.com/problems/contains-duplicate/"],
    ["Product of Array Except Self","https://leetcode.com/problems/product-of-array-except-self/"],
    ["Maximum Subarray (Kadane's algorithm)","https://leetcode.com/problems/maximum-subarray/"],
    ["3Sum","https://leetcode.com/problems/3sum/"],
    ["Container With Most Water","https://leetcode.com/problems/container-with-most-water/"],
    ["Longest Substring Without Repeating Characters","https://leetcode.com/problems/longest-substring-without-repeating-characters/"],
    ["Group Anagrams","https://leetcode.com/problems/group-anagrams/"],
    ["Valid Parentheses","https://leetcode.com/problems/valid-parentheses/"],
    ["Insert Interval","https://leetcode.com/problems/insert-interval/"],
    ["Search in Rotated Sorted Array","https://leetcode.com/problems/search-in-rotated-sorted-array/"],
    ["Reverse Linked List","https://leetcode.com/problems/reverse-linked-list/"],
    ["Merge Two Sorted Lists","https://leetcode.com/problems/merge-two-sorted-lists/"],
    ["Linked List Cycle","https://leetcode.com/problems/linked-list-cycle/"],
    ["LRU Cache","https://leetcode.com/problems/lru-cache/"],
    ["Maximum Depth of Binary Tree","https://leetcode.com/problems/maximum-depth-of-binary-tree/"],
    ["Binary Tree Level Order Traversal","https://leetcode.com/problems/binary-tree-level-order-traversal/"],
    ["Validate Binary Search Tree","https://leetcode.com/problems/validate-binary-search-tree/"],
    ["Lowest Common Ancestor of a Binary Tree","https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"],
    ["Number of Islands","https://leetcode.com/problems/number-of-islands/"],
    ["Course Schedule (topological sort)","https://leetcode.com/problems/course-schedule/"],
    ["Kth Largest Element in an Array","https://leetcode.com/problems/kth-largest-element-in-an-array/"],
    ["Top K Frequent Elements","https://leetcode.com/problems/top-k-frequent-elements/"],
    ["Climbing Stairs","https://leetcode.com/problems/climbing-stairs/"],
    ["Coin Change","https://leetcode.com/problems/coin-change/"],
    ["Longest Increasing Subsequence","https://leetcode.com/problems/longest-increasing-subsequence/"],
    ["House Robber","https://leetcode.com/problems/house-robber/"],
    ["Word Search (backtracking)","https://leetcode.com/problems/word-search/"],
    ["Subsets","https://leetcode.com/problems/subsets/"]
  ],
  "tasks":[
    "Solve a problem out loud in 30 minutes: clarify, brute force, optimise, code, test",
    "Find the time and space complexity of five given code snippets",
    "Dry-run Dijkstra's algorithm by hand on a small graph",
    "Explain three ways to solve Two Sum and compare their complexity",
    "Write test cases (empty, one item, duplicates, large input) before coding a problem",
    "Pick the right data structure for five real problems (cache, scheduler, autocomplete, and more)",
    "Take a solution that times out and make it fast enough",
    "Draw the recursion tree for Fibonacci and show how memoisation cuts it",
    "Mock interview: solve one easy and one medium problem with a friend timing you",
    "Explain a solution you wrote last week without looking at the code"
  ],
  "topics":{
    "What DSA is and why companies test it":[
      "Why do product companies test DSA in interviews?",
      "What is the difference between a data structure and an algorithm?"
    ],
    "Time complexity and Big-O":[
      "What is the time complexity of nested loops where the inner loop runs i times?",
      "Explain why binary search is O(log n)."
    ],
    "Space complexity":[
      "What is the space complexity of a recursive Fibonacci call stack?",
      "In-place vs extra space: give an example of each."
    ],
    "Best, average, worst case":[
      "Why is quicksort O(n^2) in the worst case but fast on average?",
      "What is amortised complexity? Explain with a dynamic array."
    ],
    "Basic maths for DSA":[
      ["Count primes using the sieve of Eratosthenes","https://leetcode.com/problems/count-primes/"],
      ["Greatest common divisor of strings","https://leetcode.com/problems/greatest-common-divisor-of-strings/"],
      ["Pow(x, n)","https://leetcode.com/problems/powx-n/"]
    ],
    "Bit manipulation basics":[
      ["Single number","https://leetcode.com/problems/single-number/"],
      ["Counting bits","https://leetcode.com/problems/counting-bits/"],
      ["Reverse bits","https://leetcode.com/problems/reverse-bits/"]
    ],
    "How to approach a problem":[
      "What steps do you follow before writing code in an interview?",
      "How do you test your code with edge cases?"
    ],
    "Arrays and dynamic arrays":[
      ["Remove element","https://leetcode.com/problems/remove-element/"],
      ["Product of array except self","https://leetcode.com/problems/product-of-array-except-self/"]
    ],
    "Prefix sums":[
      ["Range sum query (immutable)","https://leetcode.com/problems/range-sum-query-immutable/"],
      ["Subarray sum equals K","https://leetcode.com/problems/subarray-sum-equals-k/"]
    ],
    "Two pointers":[
      ["Two sum II (sorted input)","https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"],
      ["3Sum","https://leetcode.com/problems/3sum/"]
    ],
    "Sliding window":[
      ["Maximum average subarray I","https://leetcode.com/problems/maximum-average-subarray-i/"],
      ["Longest substring without repeating characters","https://leetcode.com/problems/longest-substring-without-repeating-characters/"],
      ["Minimum window substring","https://leetcode.com/problems/minimum-window-substring/"]
    ],
    "Kadane's algorithm":[
      ["Maximum subarray","https://leetcode.com/problems/maximum-subarray/"],
      ["Maximum product subarray","https://leetcode.com/problems/maximum-product-subarray/"]
    ],
    "Matrix problems":[
      ["Spiral matrix","https://leetcode.com/problems/spiral-matrix/"],
      ["Rotate image","https://leetcode.com/problems/rotate-image/"],
      ["Set matrix zeroes","https://leetcode.com/problems/set-matrix-zeroes/"]
    ],
    "String basics and patterns":[
      ["Valid anagram","https://leetcode.com/problems/valid-anagram/"],
      ["Longest palindromic substring","https://leetcode.com/problems/longest-palindromic-substring/"]
    ],
    "Hashing with maps and sets":[
      ["Two sum","https://leetcode.com/problems/two-sum/"],
      ["Longest consecutive sequence","https://leetcode.com/problems/longest-consecutive-sequence/"]
    ],
    "Bubble, selection, insertion sort":[
      ["Sort colors (Dutch national flag)","https://leetcode.com/problems/sort-colors/"],
      "Which simple sort is best for nearly sorted data, and why?"
    ],
    "Merge sort":[
      ["Sort a linked list","https://leetcode.com/problems/sort-list/"],
      "Count inversions in an array with merge sort: explain the idea."
    ],
    "Quick sort":[
      ["Kth largest element in an array (quickselect)","https://leetcode.com/problems/kth-largest-element-in-an-array/"],
      "How do you choose a pivot to avoid the worst case?"
    ],
    "Counting and radix sort":[
      "When is counting sort faster than comparison sorting?",
      ["Maximum gap","https://leetcode.com/problems/maximum-gap/"]
    ],
    "Binary search":[
      ["Binary search","https://leetcode.com/problems/binary-search/"],
      ["Search in rotated sorted array","https://leetcode.com/problems/search-in-rotated-sorted-array/"],
      ["Find first and last position of an element","https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"]
    ],
    "Binary search on answer":[
      ["Koko eating bananas","https://leetcode.com/problems/koko-eating-bananas/"],
      ["Capacity to ship packages within D days","https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"]
    ],
    "How recursion works":[
      "Explain the call stack for factorial(4).",
      ["Fibonacci number","https://leetcode.com/problems/fibonacci-number/"]
    ],
    "Recursion patterns":[
      ["Merge two sorted lists recursively","https://leetcode.com/problems/merge-two-sorted-lists/"],
      ["Pow(x, n)","https://leetcode.com/problems/powx-n/"]
    ],
    "Permutations and combinations":[
      ["Permutations","https://leetcode.com/problems/permutations/"],
      ["Combinations","https://leetcode.com/problems/combinations/"],
      ["Letter combinations of a phone number","https://leetcode.com/problems/letter-combinations-of-a-phone-number/"]
    ],
    "Backtracking":[
      ["Combination sum","https://leetcode.com/problems/combination-sum/"],
      ["Word search","https://leetcode.com/problems/word-search/"],
      ["N-Queens","https://leetcode.com/problems/n-queens/"]
    ],
    "Divide and conquer":[
      ["Sort an array with merge sort","https://leetcode.com/problems/sort-an-array/"],
      ["Majority element","https://leetcode.com/problems/majority-element/"]
    ],
    "Singly and doubly linked lists":[
      ["Design a linked list","https://leetcode.com/problems/design-linked-list/"],
      ["Remove linked list elements","https://leetcode.com/problems/remove-linked-list-elements/"]
    ],
    "Fast and slow pointers":[
      ["Middle of the linked list","https://leetcode.com/problems/middle-of-the-linked-list/"],
      ["Linked list cycle II","https://leetcode.com/problems/linked-list-cycle-ii/"]
    ],
    "Reversing and merging lists":[
      ["Reverse linked list","https://leetcode.com/problems/reverse-linked-list/"],
      ["Merge k sorted lists","https://leetcode.com/problems/merge-k-sorted-lists/"]
    ],
    "Stacks":[
      ["Valid parentheses","https://leetcode.com/problems/valid-parentheses/"],
      ["Min stack","https://leetcode.com/problems/min-stack/"]
    ],
    "Queues and deques":[
      ["Implement stack using queues","https://leetcode.com/problems/implement-stack-using-queues/"],
      ["Sliding window maximum","https://leetcode.com/problems/sliding-window-maximum/"]
    ],
    "Monotonic stack":[
      ["Daily temperatures","https://leetcode.com/problems/daily-temperatures/"],
      ["Next greater element I","https://leetcode.com/problems/next-greater-element-i/"],
      ["Largest rectangle in histogram","https://leetcode.com/problems/largest-rectangle-in-histogram/"]
    ],
    "LRU cache":[
      ["LRU cache","https://leetcode.com/problems/lru-cache/"],
      "Why does an LRU cache need both a hash map and a doubly linked list?"
    ],
    "Binary trees":[
      ["Maximum depth of binary tree","https://leetcode.com/problems/maximum-depth-of-binary-tree/"],
      ["Same tree","https://leetcode.com/problems/same-tree/"]
    ],
    "Traversals":[
      ["Binary tree level order traversal","https://leetcode.com/problems/binary-tree-level-order-traversal/"],
      ["Binary tree inorder traversal without recursion","https://leetcode.com/problems/binary-tree-inorder-traversal/"]
    ],
    "Height, diameter and paths":[
      ["Diameter of binary tree","https://leetcode.com/problems/diameter-of-binary-tree/"],
      ["Path sum","https://leetcode.com/problems/path-sum/"],
      ["Binary tree maximum path sum","https://leetcode.com/problems/binary-tree-maximum-path-sum/"]
    ],
    "Binary search trees":[
      ["Validate binary search tree","https://leetcode.com/problems/validate-binary-search-tree/"],
      ["Kth smallest element in a BST","https://leetcode.com/problems/kth-smallest-element-in-a-bst/"]
    ],
    "Lowest common ancestor":[
      ["Lowest common ancestor of a binary tree","https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"],
      ["Lowest common ancestor of a BST","https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"]
    ],
    "Tries":[
      ["Implement trie (prefix tree)","https://leetcode.com/problems/implement-trie-prefix-tree/"],
      ["Design add and search words data structure","https://leetcode.com/problems/design-add-and-search-words-data-structure/"]
    ],
    "Segment trees and Fenwick trees":[
      ["Range sum query (mutable)","https://leetcode.com/problems/range-sum-query-mutable/"],
      "When do you need a segment tree instead of prefix sums?"
    ],
    "Heaps and priority queues":[
      ["Last stone weight","https://leetcode.com/problems/last-stone-weight/"],
      ["Find median from data stream","https://leetcode.com/problems/find-median-from-data-stream/"]
    ],
    "Top-K problems":[
      ["Top K frequent elements","https://leetcode.com/problems/top-k-frequent-elements/"],
      ["K closest points to origin","https://leetcode.com/problems/k-closest-points-to-origin/"]
    ],
    "Greedy algorithms":[
      ["Jump game","https://leetcode.com/problems/jump-game/"],
      ["Gas station","https://leetcode.com/problems/gas-station/"],
      ["Assign cookies","https://leetcode.com/problems/assign-cookies/"]
    ],
    "Interval problems":[
      ["Merge intervals","https://leetcode.com/problems/merge-intervals/"],
      ["Non-overlapping intervals","https://leetcode.com/problems/non-overlapping-intervals/"],
      ["Insert interval","https://leetcode.com/problems/insert-interval/"]
    ],
    "Huffman coding":[
      "Explain how Huffman coding builds its tree with a min-heap.",
      "Minimum cost to connect sticks: explain why the greedy choice works."
    ],
    "Graph basics and representation":[
      ["Find the town judge","https://leetcode.com/problems/find-the-town-judge/"],
      "Adjacency list vs adjacency matrix: when to use each?"
    ],
    "Breadth-first search (BFS)":[
      ["Rotting oranges","https://leetcode.com/problems/rotting-oranges/"],
      ["Word ladder","https://leetcode.com/problems/word-ladder/"]
    ],
    "Depth-first search (DFS)":[
      ["Flood fill","https://leetcode.com/problems/flood-fill/"],
      ["Clone graph","https://leetcode.com/problems/clone-graph/"]
    ],
    "Connected components and islands":[
      ["Number of islands","https://leetcode.com/problems/number-of-islands/"],
      ["Max area of island","https://leetcode.com/problems/max-area-of-island/"],
      ["Number of provinces","https://leetcode.com/problems/number-of-provinces/"]
    ],
    "Cycle detection":[
      ["Course schedule","https://leetcode.com/problems/course-schedule/"],
      ["Find eventual safe states","https://leetcode.com/problems/find-eventual-safe-states/"]
    ],
    "Topological sort":[
      ["Course schedule II","https://leetcode.com/problems/course-schedule-ii/"],
      "Explain Kahn's algorithm step by step."
    ],
    "Shortest paths":[
      ["Network delay time (Dijkstra)","https://leetcode.com/problems/network-delay-time/"],
      ["Cheapest flights within K stops","https://leetcode.com/problems/cheapest-flights-within-k-stops/"]
    ],
    "Minimum spanning tree":[
      ["Min cost to connect all points","https://leetcode.com/problems/min-cost-to-connect-all-points/"],
      "Kruskal vs Prim: when is each better?"
    ],
    "Disjoint set union":[
      ["Redundant connection","https://leetcode.com/problems/redundant-connection/"],
      ["Accounts merge","https://leetcode.com/problems/accounts-merge/"]
    ],
    "Memoisation and tabulation":[
      ["Climbing stairs","https://leetcode.com/problems/climbing-stairs/"],
      ["Min cost climbing stairs","https://leetcode.com/problems/min-cost-climbing-stairs/"]
    ],
    "1D DP":[
      ["House robber","https://leetcode.com/problems/house-robber/"],
      ["Decode ways","https://leetcode.com/problems/decode-ways/"],
      ["Word break","https://leetcode.com/problems/word-break/"]
    ],
    "2D and grid DP":[
      ["Unique paths","https://leetcode.com/problems/unique-paths/"],
      ["Minimum path sum","https://leetcode.com/problems/minimum-path-sum/"]
    ],
    "Subsequences and knapsack":[
      ["Partition equal subset sum","https://leetcode.com/problems/partition-equal-subset-sum/"],
      ["Target sum","https://leetcode.com/problems/target-sum/"],
      ["Coin change II","https://leetcode.com/problems/coin-change-ii/"]
    ],
    "DP on strings":[
      ["Longest common subsequence","https://leetcode.com/problems/longest-common-subsequence/"],
      ["Edit distance","https://leetcode.com/problems/edit-distance/"]
    ],
    "DP on stocks and partitions":[
      ["Best time to buy and sell stock II","https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"],
      ["Best time to buy and sell stock with cooldown","https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"]
    ],
    "Longest increasing subsequence":[
      ["Longest increasing subsequence","https://leetcode.com/problems/longest-increasing-subsequence/"],
      ["Russian doll envelopes","https://leetcode.com/problems/russian-doll-envelopes/"]
    ],
    "Learning by patterns":[
      "Which pattern would you try first for \"longest substring with at most K distinct characters\" and why?",
      "List the signals that a problem needs binary search, two pointers or a heap."
    ],
    "Daily practice plan":[
      "Plan a week: which problems would you solve each day from the 300-problem plan?",
      "What do you do after you fail a problem for 30 minutes?"
    ],
    "Contest practice":[
      "Why are timed contests useful before online assessments?",
      "How do you review a contest after it ends?"
    ],
    "Mock interviews":[
      "How do you explain your approach out loud before coding?",
      "What do interviewers look for besides a correct answer?"
    ],
    "Writing clean code fast":[
      "Name variables and split helpers: rewrite a messy two-sum solution cleanly.",
      "Which edge cases do you always test (empty, one element, duplicates, negatives)?"
    ],
    "Company question lists":[
      "How should you use company-tagged question lists without memorising answers?",
      "Which 20 problems would you revise the night before an interview?"
    ]
  }
},
"github":{
  "full":[
    "What is Git and why use it?",
    "Explain the three areas: working directory, staging area, repository.",
    "What is a commit hash?",
    "git merge vs git rebase.",
    "git reset (soft, mixed, hard) vs git revert.",
    "git fetch vs git pull.",
    "How do you resolve a merge conflict?",
    "What is a detached HEAD?",
    "How do you undo the last commit but keep the changes?",
    "What is git stash?",
    "What is cherry-pick?",
    "What is a pull request?",
    "What is a fork?",
    "What is .gitignore?",
    "What are tags?",
    "What is GitHub Actions?",
    "How do you keep secrets out of a repository?",
    "What is a branching strategy?",
    "How do you squash commits?",
    ["Practise everything in order","https://learngitbranching.js.org/"]
  ],
  "prog":[
    ["Create a branch, make two commits and merge it back with a fast-forward","https://learngitbranching.js.org/"],
    "Write the commands to undo the last commit but keep the changes",
    "Write the commands to squash the last three commits into one",
    "Write the commands to rebase a feature branch on the latest main",
    "Write the commands to cherry-pick one commit from another branch",
    "Write the commands to find which commit introduced a bug using git bisect",
    "Write a .gitignore for a Node.js or Python project",
    "Write a GitHub Actions workflow that runs tests on every push and pull request",
    "Write a GitHub Actions workflow that runs only when files in one folder change",
    "Write a pre-commit hook that stops a commit if tests fail",
    "Write a shell script that pulls every repo in a folder",
    "Write the commands to remove a secret that was committed, and explain why you must also rotate it"
  ],
  "tasks":[
    "Fork a repo, fix a typo and open a pull request with a clear description",
    "Resolve a merge conflict in a file that two people edited",
    "Recover a branch that was deleted by mistake using git reflog",
    "Review a teammate's pull request and leave three useful comments",
    "Set up branch protection on main: required reviews and passing checks",
    "Write a good commit message for a given change, then rewrite a bad one",
    "Clean up a messy history on a feature branch before merging",
    "Explain merge vs rebase with a drawing of the commit graph",
    "Set up a GitHub Pages site from a repo",
    "Add an issue template and a pull request template to a repo"
  ],
  "topics":{
    "What version control is":[
      "What problems does version control solve?",
      "What is the difference between Git and GitHub?"
    ],
    "Install and set up Git":[
      "Which git config settings should you set first, and why?",
      "What is the difference between global and local config?"
    ],
    "init, add and commit":[
      ["Do the first Git level: make two commits","https://learngitbranching.js.org/?locale=en_US&level=intro1"],
      "What is the staging area and why does it exist?"
    ],
    "status, log and diff":[
      "How do you see what changed in a file before you commit?",
      "How do you see the history of one file?"
    ],
    ".gitignore":[
      "Write a .gitignore for a Python or Node project.",
      "A file is already committed; adding it to .gitignore does nothing. How do you stop tracking it?"
    ],
    "Undoing changes":[
      ["Practise reset and revert","https://learngitbranching.js.org/?locale=en_US&level=rampup4"],
      "git reset vs git revert vs git restore: when to use each?"
    ],
    "Branches":[
      ["Create and switch branches","https://learngitbranching.js.org/?locale=en_US&level=intro2"],
      "Why work on a branch instead of main?"
    ],
    "Merging":[
      ["Merge a branch","https://learngitbranching.js.org/?locale=en_US&level=intro3"],
      "Fast-forward merge vs merge commit: what is the difference?"
    ],
    "Merge conflicts":[
      "What causes a merge conflict? Walk through resolving one.",
      "How do you abort a merge?"
    ],
    "Rebase":[
      ["Practise rebase","https://learngitbranching.js.org/?locale=en_US&level=intro4"],
      "Merge vs rebase: pros and cons. Why never rebase shared branches?"
    ],
    "Stash and cherry-pick":[
      ["Practise cherry-pick","https://learngitbranching.js.org/?locale=en_US&level=move1"],
      "When would you use git stash?"
    ],
    "Tags and releases":[
      "Lightweight vs annotated tags.",
      "How do you create a GitHub release from a tag?"
    ],
    "GitHub account and profile README":[
      "How do you create a profile README?",
      "What makes a GitHub profile look good to recruiters?"
    ],
    "push, pull and clone":[
      ["Practise remotes: clone, fetch, pull and push","https://learngitbranching.js.org/?locale=en_US&level=remote1"],
      "git fetch vs git pull: what is the difference?"
    ],
    "SSH keys and tokens":[
      "How do you create an SSH key and add it to GitHub?",
      "Why does GitHub not accept your password for git push?"
    ],
    "Pull requests and code review":[
      "What makes a good pull request?",
      "How do you respond to review comments?"
    ],
    "Issues and Projects":[
      "How do you link a pull request to an issue so it closes automatically?",
      "What is a GitHub Project board used for?"
    ],
    "GitHub Pages":[
      "How do you publish a static site with GitHub Pages?",
      "Why might a Pages site show a 404 after publishing?"
    ],
    "Forks and your first contribution":[
      "Fork vs clone vs branch: what is the difference?",
      "How do you keep your fork up to date with the original repository?"
    ],
    "Branching strategies":[
      "Compare GitFlow, GitHub Flow and trunk-based development.",
      "Which strategy suits a small team shipping often?"
    ],
    "README, LICENSE and CONTRIBUTING":[
      "What should a good README contain?",
      "Why does an open-source project need a LICENSE?"
    ],
    "Branch protection and rules":[
      "What can branch protection rules enforce?",
      "Why require status checks before merging?"
    ],
    "Good commit messages":[
      "Rewrite \"fixed stuff\" as a good commit message.",
      "What is the Conventional Commits format?"
    ],
    "GitHub Actions basics":[
      "Write a workflow that runs tests on every push.",
      "What are jobs, steps and runners?"
    ],
    "Secrets in workflows":[
      "How do you use a secret in a workflow without printing it?",
      "Why are secrets not available to pull requests from forks?"
    ],
    "Dependabot and security alerts":[
      "What does Dependabot do?",
      "What would you do with a \"critical\" security alert?"
    ],
    "GitHub Copilot":[
      "How should you check code that Copilot writes?",
      "When should you not use Copilot suggestions?"
    ],
    "Codespaces":[
      "What is a Codespace and when is it useful?",
      "What is a devcontainer.json?"
    ],
    "GitHub certifications":[
      "Which GitHub certifications exist and which suits a beginner?",
      "How would you prepare for GitHub Foundations?"
    ]
  }
},
"frontend":{
  "full":[
    "What is the DOM?",
    "Explain the box model.",
    "Flexbox vs grid.",
    "What is specificity?",
    "What is the event loop?",
    "What is a closure?",
    "What is hoisting?",
    "var vs let vs const.",
    "== vs ===.",
    "What are promises and async/await?",
    "What is event delegation?",
    "What is CORS?",
    "What is the virtual DOM?",
    "Explain useEffect and its cleanup.",
    "Props vs state.",
    "How do you improve website performance?",
    "What is accessibility and why does it matter?",
    ["Memoize","https://leetcode.com/problems/memoize/"],
    ["Event emitter","https://leetcode.com/problems/event-emitter/"],
    ["Flatten deeply nested array","https://leetcode.com/problems/flatten-deeply-nested-array/"]
  ],
  "prog":[
    ["Write a debounce function","https://leetcode.com/problems/debounce/"],
    "Write a throttle function",
    ["Write a memoize function","https://leetcode.com/problems/memoize-ii/"],
    ["Write a function that flattens a deeply nested array","https://leetcode.com/problems/flatten-deeply-nested-array/"],
    "Write a function that deep-compares two objects",
    "Write a function that deep-clones an object",
    ["Write your own Array.prototype.map, filter and reduce","https://leetcode.com/problems/array-reduce-transformation/"],
    ["Write your own Promise.all","https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/"],
    ["Write a function that adds a timeout to any promise","https://leetcode.com/problems/promise-time-limit/"],
    ["Write a function that runs only once","https://leetcode.com/problems/allow-one-function-call/"],
    ["Write a counter using a closure","https://leetcode.com/problems/counter/"],
    ["Write a function that groups an array by a key","https://leetcode.com/problems/group-by/"],
    ["Write an event emitter with on, off and emit","https://leetcode.com/problems/event-emitter/"],
    "Build a to-do list in plain JavaScript with add, delete and mark done",
    "Build a search box that filters a list as you type (with debounce)",
    "Build a modal dialog that closes on Escape and traps focus",
    "Build a star rating component",
    "Build an accordion that opens one section at a time",
    "Build a tab component with keyboard support",
    "Build an infinite scroll list that loads more items from an API",
    "Build a responsive navbar that turns into a menu on phones (CSS only)",
    "Centre a box horizontally and vertically in three different ways using CSS",
    "Build a counter, a form with validation and a fetch-and-show list in React",
    "Build a custom React hook useFetch with loading and error states",
    ["Write a function to check balanced brackets","https://exercism.org/tracks/javascript/exercises/matching-brackets"]
  ],
  "tasks":[
    "Make a given page fully responsive from 320px to desktop without horizontal scroll",
    "Run Lighthouse on a page and fix the top three performance problems",
    "Fix the accessibility problems found by axe on a given form",
    "Find why a React component re-renders too often and fix it with memo or useCallback",
    "Debug a layout bug using browser DevTools (box model, flex and grid tools)",
    "Convert a jQuery page into plain modern JavaScript",
    "Explain the event loop by predicting the output of a setTimeout and Promise puzzle",
    "Fix an XSS hole where user input is put into innerHTML",
    "Reduce a page's load time by lazy-loading images and splitting code",
    "Build a small app from a Figma design pixel by pixel"
  ],
  "topics":{
    "Internet, servers and browsers":[
      "What happens when you type a URL in the browser and press Enter?",
      "What is the difference between a client and a server?"
    ],
    "HTTP and HTTPS":[
      "What are GET, POST, PUT and DELETE used for?",
      "What do status codes 200, 301, 404 and 500 mean?",
      "Why is HTTPS needed even for sites without login?"
    ],
    "Domains, DNS and hosting":[
      "How does DNS turn a domain into an IP address?",
      "What is the difference between a domain, hosting and a CDN?"
    ],
    "Browser DevTools":[
      "How do you find why a page loads slowly using the Network tab?",
      "How do you debug JavaScript with breakpoints in DevTools?"
    ],
    "Elements and attributes":[
      "What is the difference between block and inline elements?",
      "What is the difference between id and class?"
    ],
    "Semantic HTML":[
      "Why use header, nav, main, article and footer instead of div?",
      "How does semantic HTML help SEO and screen readers?"
    ],
    "Links, images, media":[
      "Why must every img have alt text? When can it be empty?",
      "What does target=\"_blank\" with rel=\"noopener\" protect against?"
    ],
    "Tables and lists":[
      "When should you use a table, and when not?",
      "What is the difference between ol, ul and dl?"
    ],
    "Forms and inputs":[
      "Build a sign-up form with labels, required fields and an email input.",
      "What is the difference between GET and POST forms?"
    ],
    "Accessibility basics":[
      "What is ARIA and when should you avoid it?",
      "How do you make a custom button keyboard-accessible?"
    ],
    "Selectors and specificity":[
      "How is CSS specificity calculated? Which wins: id, class or element?",
      "What is the difference between .a .b and .a > .b?"
    ],
    "Box model":[
      "Explain margin, border, padding and content. What does box-sizing: border-box change?",
      "Why do vertical margins collapse?"
    ],
    "Typography and colours":[
      "What are rem, em, px and %? Which do you use for font sizes?",
      "How do you check colour contrast for accessibility?"
    ],
    "Flexbox":[
      "Centre a div horizontally and vertically with flexbox.",
      "What do justify-content and align-items do?"
    ],
    "Grid":[
      "Build a three-column layout that becomes one column on phones with CSS grid.",
      "Flexbox vs grid: when do you use each?"
    ],
    "Responsive design":[
      "What is mobile-first CSS?",
      "What does the viewport meta tag do?"
    ],
    "Transitions and animations":[
      "Transition vs animation: what is the difference?",
      "Which properties are cheap to animate, and why?"
    ],
    "CSS variables and dark mode":[
      "Add a dark mode with CSS variables and prefers-color-scheme.",
      "What is the difference between CSS variables and Sass variables?"
    ],
    "Tailwind CSS basics":[
      "What is utility-first CSS? Pros and cons.",
      "How does Tailwind keep the final CSS file small?"
    ],
    "Variables, types, operators":[
      ["Create hello world function","https://leetcode.com/problems/create-hello-world-function/"],
      "What is the difference between var, let and const?",
      "Why does 0.1 + 0.2 !== 0.3, and what is == vs ===?"
    ],
    "Functions and scope":[
      ["Counter (closures)","https://leetcode.com/problems/counter/"],
      ["Function composition","https://leetcode.com/problems/function-composition/"],
      "What is hoisting?"
    ],
    "Arrays and objects":[
      ["Chunk array","https://leetcode.com/problems/chunk-array/"],
      ["Is object empty","https://leetcode.com/problems/is-object-empty/"],
      "What is the difference between shallow copy and deep copy of an object?"
    ],
    "Array methods":[
      ["Apply transform over each element in array (write your own map)","https://leetcode.com/problems/apply-transform-over-each-element-in-array/"],
      ["Filter elements from array","https://leetcode.com/problems/filter-elements-from-array/"],
      ["Array reduce transformation","https://leetcode.com/problems/array-reduce-transformation/"]
    ],
    "DOM manipulation":[
      "Build a to-do list that adds and removes items with DOM methods.",
      "innerHTML vs textContent: which is safer and why?"
    ],
    "Events":[
      "What is event bubbling and event delegation?",
      ["Debounce","https://leetcode.com/problems/debounce/"]
    ],
    "Fetch, promises and async/await":[
      ["Sleep","https://leetcode.com/problems/sleep/"],
      ["Add two promises","https://leetcode.com/problems/add-two-promises/"],
      ["Promise time limit","https://leetcode.com/problems/promise-time-limit/"]
    ],
    "Modules":[
      "What is the difference between export default and named exports?",
      "What is the difference between ES modules and CommonJS?"
    ],
    "Error handling and debugging":[
      "How do you catch errors from async/await code?",
      "Find and fix a bug using console.log vs the debugger: which is faster when?"
    ],
    "Local storage":[
      "localStorage vs sessionStorage vs cookies.",
      "Why must you never store passwords or tokens carelessly in localStorage?"
    ],
    "Git and GitHub":[
      "Push your portfolio site to GitHub and publish it with GitHub Pages.",
      "What should a frontend project's .gitignore include?"
    ],
    "npm and packages":[
      "dependencies vs devDependencies.",
      "What is package-lock.json for?"
    ],
    "Vite":[
      "Why is Vite faster than older bundlers in development?",
      "How do you build and preview a production build with Vite?"
    ],
    "TypeScript":[
      "Why use TypeScript? Give two bugs it would catch.",
      "interface vs type: what is the difference?"
    ],
    "Linting and formatting":[
      "What is the difference between ESLint and Prettier?",
      "How do you run them automatically before each commit?"
    ],
    "Components and JSX":[
      "What is JSX? Why must components start with a capital letter?",
      "Function components vs class components."
    ],
    "Props and state":[
      "What is the difference between props and state?",
      "Why must you not change state directly?"
    ],
    "Hooks":[
      "When does useEffect run? What does the dependency array do?",
      "useMemo vs useCallback.",
      "Write a custom hook that fetches data."
    ],
    "Lists, keys and forms":[
      "Why does React need keys in lists? Why is the index a bad key?",
      "Controlled vs uncontrolled inputs."
    ],
    "Routing":[
      "How do you add routes and a 404 page with React Router?",
      "How do you read a URL parameter (/users/:id)?"
    ],
    "Fetching data":[
      "How do you show loading and error states while fetching?",
      "What is a race condition when fetching, and how do you avoid it?"
    ],
    "Context and state management":[
      "When should you use Context, and when a library like Zustand or Redux?",
      "What is prop drilling?"
    ],
    "Next.js basics":[
      "What is server-side rendering vs static generation?",
      "What are server components?"
    ],
    "Testing with Vitest and Playwright":[
      "Unit test vs end-to-end test: give an example of each for a login page.",
      ["Write a Playwright test that logs in and checks the dashboard","https://www.saucedemo.com/"]
    ],
    "Web performance":[
      "What are LCP, INP and CLS (Core Web Vitals)?",
      "How do you make images load faster?"
    ],
    "SEO basics":[
      "What are title, meta description and canonical tags?",
      "Why do single-page apps sometimes rank poorly?"
    ],
    "Deploying":[
      "How do you deploy a React app to Netlify, Vercel or GitHub Pages?",
      "What are environment variables in a frontend build, and what must never go there?"
    ],
    "Portfolio and freelancing":[
      "Which three projects should a frontend portfolio have?",
      "How do you price a small website for a client?"
    ]
  }
},
"fullstack":{
  "full":[
    "Explain the request-response cycle of your full stack project.",
    "What is REST? What makes an API RESTful?",
    "How does JWT authentication work?",
    "How do you hash passwords?",
    "SQL vs NoSQL.",
    "What is an ORM?",
    "What is middleware in Express?",
    "What is CORS?",
    "How do you prevent SQL injection and XSS?",
    "What is the Node.js event loop?",
    "How do you handle errors in Express?",
    "What are environment variables?",
    "How do you deploy a full stack app?",
    "What is Docker and why use it?",
    "What is CI/CD?",
    "What is caching and where would you add it?",
    "How would you design a scalable chat app?",
    "What is rate limiting?",
    ["Promise time limit","https://leetcode.com/problems/promise-time-limit/"],
    ["Debounce","https://leetcode.com/problems/debounce/"]
  ],
  "prog":[
    "Build a REST API for notes with create, read, update and delete",
    "Add JWT login to an API and protect one route",
    "Hash and check passwords with bcrypt",
    "Write a middleware that logs each request with time taken",
    "Write a middleware that limits each IP to 100 requests a minute",
    "Write an API endpoint with pagination, sorting and filtering",
    "Write input validation for a sign-up form on both client and server",
    "Upload a file to the server, check its type and size, and store it safely",
    "Write a parameterised database query and show why string building is unsafe",
    "Write a database migration that adds a column without losing data",
    "Write an endpoint that caches results in memory or Redis",
    "Write a WebSocket chat that broadcasts messages to all users",
    "Write integration tests for an API with a test database",
    "Write a Dockerfile for a Node.js or Python web app",
    "Write a docker-compose file for app plus database"
  ],
  "tasks":[
    "Design the database and API for a URL shortener",
    "Design the database and API for a food ordering app",
    "Deploy a full-stack app to a free host with environment variables, not hard-coded secrets",
    "Find and fix a CORS error between frontend and backend",
    "Find a slow API endpoint and fix it with an index or a cache",
    "Add error handling so the API never sends stack traces to users",
    "Set up HTTPS, security headers and secure cookies for a site",
    "Review a given app for the OWASP Top 10 and list what to fix",
    "Add logging and a health-check endpoint to an app",
    "Explain what happens from typing a URL to seeing the page"
  ],
  "topics":{
    "HTML and semantic structure":[
      "Why use semantic HTML in a full stack app?",
      "How do forms send data to the server?"
    ],
    "CSS layout: Flexbox and Grid":[
      "Build a responsive dashboard layout with grid.",
      "Centre a login box with flexbox."
    ],
    "JavaScript core":[
      ["Counter II","https://leetcode.com/problems/counter-ii/"],
      ["Group by","https://leetcode.com/problems/group-by/"]
    ],
    "DOM and events":[
      "What is event delegation and why does it help with lists?",
      "How do you prevent a form from reloading the page?"
    ],
    "React fundamentals":[
      "How does React re-render? What causes unnecessary re-renders?",
      "Lift state up: when and why?"
    ],
    "Routing and data fetching":[
      "How do you protect a route so only logged-in users can open it?",
      "How do you fetch data and handle loading and errors?"
    ],
    "Node.js basics":[
      "What is the Node.js event loop? Why is Node good for I/O-heavy apps?",
      ["Execute asynchronous functions in parallel (write Promise.all)","https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/"]
    ],
    "npm and project structure":[
      "How do you structure an Express project (routes, controllers, services)?",
      "What does npm run do? What are scripts?"
    ],
    "Express routing":[
      "Create GET, POST, PUT and DELETE routes for /api/tasks.",
      "What is the difference between req.params, req.query and req.body?"
    ],
    "Middleware":[
      "What is middleware? Write one that logs every request.",
      "What does the order of middleware change?"
    ],
    "REST API design":[
      "Design REST URLs for users, posts and comments.",
      "PUT vs PATCH. Idempotent methods."
    ],
    "Validation":[
      "Why validate on the server even if the frontend validates?",
      "Validate a request body with zod or Joi."
    ],
    "Environment variables":[
      "How do you load .env files? Why must .env not be committed?",
      "How do you keep different settings for development and production?"
    ],
    "PostgreSQL basics":[
      ["Combine two tables (JOIN)","https://leetcode.com/problems/combine-two-tables/"],
      "How do you connect to PostgreSQL from Node safely?"
    ],
    "Schema design and relations":[
      "Design tables for an online shop: users, products, orders, order items.",
      "One-to-many vs many-to-many relations."
    ],
    "ORMs (Prisma or Sequelize)":[
      "What are the pros and cons of an ORM?",
      "What is the N+1 query problem?"
    ],
    "MongoDB basics":[
      "When would you choose MongoDB over PostgreSQL?",
      "Embedding vs referencing documents."
    ],
    "Migrations and seeding":[
      "What is a migration? Why not edit the database by hand?",
      "What is seed data used for?"
    ],
    "Password hashing":[
      "Why use bcrypt or argon2 instead of SHA-256 for passwords?",
      "What is a salt?"
    ],
    "Sessions and JWT":[
      "Sessions vs JWT: pros and cons.",
      "Where should a JWT be stored in the browser, and why?"
    ],
    "OAuth sign-in":[
      "How does \"Sign in with Google\" work (OAuth flow)?",
      "What is the difference between authentication and authorization?"
    ],
    "Roles and permissions":[
      "How do you implement admin and user roles in an API?",
      "What is the principle of least privilege?"
    ],
    "OWASP Top 10 for developers":[
      "Name five of the OWASP Top 10 and one defence for each.",
      "How do you prevent SQL injection and XSS in a Node app?"
    ],
    "CORS, HTTPS, rate limiting":[
      "What is CORS? Why does the browser block some requests?",
      "How do you add rate limiting to a login route?"
    ],
    "File and image uploads":[
      "How do you upload images safely (size, type, storage)?",
      "Why store files in object storage (S3) and not the database?"
    ],
    "Real-time with WebSockets":[
      "WebSockets vs polling vs server-sent events.",
      "Build a simple chat with Socket.IO."
    ],
    "Payments basics":[
      "How does a payment gateway (Razorpay/Stripe) flow work?",
      "Why must you verify payment status on the server (webhooks)?"
    ],
    "Emails and notifications":[
      "How do you send emails without blocking the request (queues)?",
      "What is a webhook?"
    ],
    "Caching":[
      "Where can you cache: browser, CDN, server, database?",
      ["Cache with time limit","https://leetcode.com/problems/cache-with-time-limit/"]
    ],
    "API testing and end-to-end tests":[
      "Write an API test for POST /api/tasks.",
      "Unit vs integration vs end-to-end tests."
    ],
    "Docker for your app":[
      "Write a Dockerfile for a Node API.",
      "Why use multi-stage builds?"
    ],
    "CI/CD with GitHub Actions":[
      "Write a workflow that runs tests and deploys on push to main.",
      "How do you store deployment secrets?"
    ],
    "Hosting front-end and back-end":[
      "Where do you host a React frontend and an Express API for free?",
      "How do the frontend and backend find each other in production?"
    ],
    "Logs and monitoring":[
      "What should you log, and what must you never log?",
      "How do you know your API is down before users tell you?"
    ],
    "System design basics":[
      "Design a URL shortener at a high level.",
      "How would you scale an API from 100 to 100,000 users?"
    ],
    "Freelance projects":[
      "How do you scope and price a small full stack project?",
      "What should a client handover include?"
    ]
  }
},
"android":{
  "full":[
    "Explain the Activity lifecycle.",
    "What is Jetpack Compose and how is it different from XML views?",
    "What is recomposition?",
    "What is a ViewModel?",
    "Explain MVVM.",
    "What are coroutines? Dispatchers?",
    "Flow vs LiveData.",
    "What is Hilt / dependency injection?",
    "What is Room?",
    "How does Retrofit work?",
    "What is WorkManager?",
    "How do you handle configuration changes?",
    "What is a memory leak in Android? How do you find one?",
    "What is ANR?",
    "Explain Kotlin null safety.",
    "What is a data class? A sealed class?",
    "What are extension functions?",
    "How do you secure API keys in an Android app?",
    "How do you publish an app on Google Play?",
    ["Anagram","https://exercism.org/tracks/kotlin/exercises/anagram"]
  ],
  "prog":[
    ["Write a Kotlin function to check if two words are anagrams","https://exercism.org/tracks/kotlin/exercises/anagram"],
    ["Write a Kotlin function to reverse a string","https://exercism.org/tracks/kotlin/exercises/reverse-string"],
    ["Write a Kotlin function to count words in a text","https://exercism.org/tracks/kotlin/exercises/word-count"],
    "Write a Kotlin data class and sort a list of it by two fields",
    "Write a Kotlin extension function that capitalises each word",
    "Write a sealed class for UI state: Loading, Success and Error",
    "Write a coroutine that loads data from two APIs in parallel and combines them",
    "Write a Flow that emits search results as the user types (debounce)",
    "Build a screen with a list (LazyColumn or RecyclerView) that opens a detail screen",
    "Build a login screen with input validation and a ViewModel",
    "Fetch data from a REST API with Retrofit and show it in a list",
    "Save and read data with Room database",
    "Save a user setting with DataStore",
    "Write a unit test for a ViewModel",
    "Write a UI test with Espresso or Compose testing"
  ],
  "tasks":[
    "Fix a screen that loses its data when the phone is rotated",
    "Find and fix a memory leak caught by LeakCanary",
    "Fix a crash from a given Logcat stack trace",
    "Make a slow list scroll smoothly",
    "Make an app work offline and sync when the network comes back",
    "Move network work off the main thread to fix an ANR",
    "Ask for camera permission the right way, including when the user says no",
    "Build a signed release APK or App Bundle",
    "Set up a simple CI build for an Android project",
    "Explain the activity lifecycle by logging each callback while you use the app"
  ],
  "topics":{
    "Setup Android Studio":[
      "How do you create a project and run it on an emulator and a real phone?",
      "What is Gradle doing when you press Run?"
    ],
    "Variables, types, null safety":[
      "What is the difference between val and var?",
      "How does Kotlin null safety work (?, ?., ?:, !!)?",
      ["Greet a user (Two fer)","https://exercism.org/tracks/kotlin/exercises/two-fer"]
    ],
    "Conditions and loops":[
      ["Leap year","https://exercism.org/tracks/kotlin/exercises/leap"],
      "when vs if-else in Kotlin."
    ],
    "Functions and lambdas":[
      "What are extension functions?",
      "What is a higher-order function? Give an example with a lambda.",
      ["Collatz conjecture","https://exercism.org/tracks/kotlin/exercises/collatz-conjecture"]
    ],
    "Classes, data classes, objects":[
      "What does a data class generate for you?",
      "What is an object declaration and a companion object?"
    ],
    "Collections":[
      "List vs MutableList. map, filter and groupBy examples.",
      ["Word count","https://exercism.org/tracks/kotlin/exercises/word-count"]
    ],
    "Coroutines basics":[
      "What is a coroutine? Why not just use threads?",
      "launch vs async; what are Dispatchers.IO and Dispatchers.Main?"
    ],
    "Composables":[
      "What is a composable function? Why must it be side-effect free?",
      "Stateless vs stateful composables."
    ],
    "Layouts: Row, Column, Box":[
      "Build a profile card with Row, Column and Box.",
      "How do weight and arrangement work in Row and Column?"
    ],
    "Modifiers":[
      "Why does modifier order matter (padding then background vs background then padding)?",
      "How do you make a whole row clickable?"
    ],
    "State and recomposition":[
      "remember vs rememberSaveable.",
      "What triggers recomposition?"
    ],
    "Lists with LazyColumn":[
      "Why use LazyColumn instead of Column for long lists?",
      "Why do list items need stable keys?"
    ],
    "Material Design 3":[
      "What is dynamic colour in Material 3?",
      "How do you apply a custom theme?"
    ],
    "Images and icons":[
      "How do you load an image from a URL (Coil)?",
      "Vector drawables vs PNG images."
    ],
    "Navigation":[
      "How do you pass an argument between screens with Navigation Compose?",
      "How do you handle the back button?"
    ],
    "Activity and app lifecycle":[
      "Explain onCreate, onStart, onResume, onPause, onStop, onDestroy.",
      "What happens to the screen on rotation?"
    ],
    "ViewModel":[
      "Why does a ViewModel survive rotation?",
      "Why must a ViewModel not hold a reference to an Activity?"
    ],
    "MVVM and UI state":[
      "What is MVVM? Where does business logic go?",
      "Model a screen's UI state as a single data class."
    ],
    "Dependency injection with Hilt":[
      "What problem does dependency injection solve?",
      "What do @HiltAndroidApp, @Inject and @Module do?"
    ],
    "Kotlin Flow":[
      "Flow vs LiveData vs StateFlow.",
      "Cold vs hot flows."
    ],
    "Retrofit and REST APIs":[
      "Write a Retrofit interface for GET /users/{id}.",
      "How do you handle network errors and no internet?"
    ],
    "JSON parsing":[
      "Kotlin serialization vs Gson vs Moshi.",
      "How do you map JSON names that differ from Kotlin names?"
    ],
    "Room database":[
      "What are Entity, DAO and Database in Room?",
      "How do you migrate a Room database when a column is added?"
    ],
    "DataStore":[
      "Why replace SharedPreferences with DataStore?",
      "Preferences DataStore vs Proto DataStore."
    ],
    "WorkManager":[
      "When do you use WorkManager?",
      "How do you schedule a daily sync that needs internet?"
    ],
    "Permissions":[
      "How do you request the camera permission at run time in Compose?",
      "What should the app do if the user denies a permission?"
    ],
    "Firebase basics":[
      "What can Firebase Auth, Firestore and Crashlytics do for a small app?",
      "How do Firestore security rules protect data?"
    ],
    "Unit tests":[
      "Write a unit test for a ViewModel.",
      "How do you test coroutines?"
    ],
    "UI tests with Compose testing":[
      "Write a Compose UI test that clicks a button and checks text.",
      "What are semantics and test tags?"
    ],
    "Debugging and Logcat":[
      "How do you filter Logcat to your app?",
      "How do you read a stack trace from a crash?"
    ],
    "Performance":[
      "What causes jank? How do you find it?",
      "How do you reduce APK size?"
    ],
    "App signing and release builds":[
      "What is a keystore? What happens if you lose it?",
      "What does R8 (minify) do?"
    ],
    "Publishing on Google Play":[
      "What is an Android App Bundle (AAB)?",
      "What are internal, closed and open testing tracks?"
    ]
  }
},
"ios":{
  "full":[
    "Struct vs class in Swift.",
    "What are optionals?",
    "What is ARC? What is a retain cycle?",
    "What are closures? Escaping vs non-escaping.",
    "Explain protocols and protocol-oriented programming.",
    "What is SwiftUI? How is it different from UIKit?",
    "@State, @Binding, @Observable: when to use each.",
    "What is MVVM?",
    "Explain async/await and actors.",
    "What is GCD?",
    "What is Codable?",
    "How does URLSession work?",
    "Core Data vs SwiftData.",
    "What is the app lifecycle in SwiftUI?",
    "What is lazy var?",
    "How do you debug a memory leak?",
    "What is TestFlight?",
    "How do you prepare an app for App Store review?",
    ["Anagram","https://exercism.org/tracks/swift/exercises/anagram"],
    ["Bob","https://exercism.org/tracks/swift/exercises/bob"]
  ],
  "prog":[
    ["Write a Swift function to check if two words are anagrams","https://exercism.org/tracks/swift/exercises/anagram"],
    ["Write a Swift function to reverse a string","https://exercism.org/tracks/swift/exercises/reverse-string"],
    ["Write a Swift function to count words in a text","https://exercism.org/tracks/swift/exercises/word-count"],
    "Write a Swift struct and sort an array of it by two fields",
    "Write a Swift enum with associated values for network results",
    "Write a protocol with a default implementation in an extension",
    "Write a generic function that finds the largest item in an array",
    "Write an async function that loads two APIs in parallel with async let",
    "Build a SwiftUI list that opens a detail screen",
    "Build a SwiftUI form with validation",
    "Fetch JSON with URLSession and decode it with Codable",
    "Save data with SwiftData or Core Data",
    "Write a unit test with XCTest for a view model",
    "Fix a retain cycle in a closure using [weak self]",
    ["Write a Swift function to check balanced brackets","https://exercism.org/tracks/swift/exercises/matching-brackets"]
  ],
  "tasks":[
    "Find a memory leak with Instruments and fix it",
    "Fix a crash from a given crash log",
    "Make a slow list scroll smoothly",
    "Support Dark Mode and Dynamic Type in an existing screen",
    "Make a screen accessible with VoiceOver",
    "Ask for location permission the right way, including when the user says no",
    "Archive the app and upload it to TestFlight",
    "Move heavy work off the main thread",
    "Explain the app lifecycle by logging each state change",
    "Turn an MVC screen into MVVM"
  ],
  "topics":{
    "Install Xcode and Playgrounds":[
      "How do you create a SwiftUI project and run it on the simulator?",
      "What is a Playground useful for?"
    ],
    "Variables, constants, types":[
      "let vs var. What is type inference?",
      ["Hello world in Swift","https://exercism.org/tracks/swift/exercises/hello-world"]
    ],
    "Optionals":[
      "What is an optional? Explain if let, guard let and ??.",
      "Why is force unwrapping (!) dangerous?"
    ],
    "Conditions and loops":[
      ["Leap year","https://exercism.org/tracks/swift/exercises/leap"],
      "switch in Swift: why no fallthrough by default?"
    ],
    "Functions and closures":[
      "What is a closure? What are escaping closures?",
      "What is [weak self] and why is it needed?",
      ["Collatz conjecture","https://exercism.org/tracks/swift/exercises/collatz-conjecture"]
    ],
    "Structs, classes and enums":[
      "Struct vs class: value type vs reference type.",
      "Enums with associated values: give an example."
    ],
    "Protocols and extensions":[
      "What is protocol-oriented programming?",
      "What can an extension add, and what can it not add?"
    ],
    "Error handling":[
      "throws, try, try? and try!: what is the difference?",
      "Write a function that throws when input is invalid."
    ],
    "Views and modifiers":[
      "Why are SwiftUI views structs?",
      "Why does modifier order matter?"
    ],
    "Stacks and layout":[
      "Build a card with VStack, HStack and ZStack.",
      "What do Spacer and frame do?"
    ],
    "State and binding":[
      "@State vs @Binding.",
      "When does a SwiftUI view redraw?"
    ],
    "Lists and forms":[
      "Build a settings screen with Form, Toggle and Picker.",
      "How do you delete rows from a List?"
    ],
    "Navigation":[
      "How do you navigate with NavigationStack and pass data?",
      "Sheets vs navigation pushes."
    ],
    "Images, colours, SF Symbols":[
      "What are SF Symbols? How do you use them?",
      "How do you support dark mode colours?"
    ],
    "Animations":[
      "Implicit vs explicit animations.",
      "How do you animate a view appearing?"
    ],
    "MVVM in SwiftUI":[
      "Where does logic live in MVVM with SwiftUI?",
      "How do you test a view model?"
    ],
    "Observable models":[
      "@Observable vs ObservableObject.",
      "@StateObject vs @ObservedObject (older API)."
    ],
    "Async/await and concurrency":[
      "What does async/await replace? What is a Task?",
      "What is @MainActor?"
    ],
    "Dependency management with Swift Package Manager":[
      "How do you add a package with Swift Package Manager?",
      "SPM vs CocoaPods."
    ],
    "Networking with URLSession":[
      "Fetch JSON with URLSession and async/await.",
      "How do you handle errors and timeouts?"
    ],
    "Codable and JSON":[
      "Decode JSON into a struct with Codable.",
      "How do you map snake_case JSON keys?"
    ],
    "SwiftData":[
      "What is SwiftData? How is it related to Core Data?",
      "How do you add a @Model and query it?"
    ],
    "User defaults":[
      "What should and should not be stored in UserDefaults?",
      "What is @AppStorage?"
    ],
    "Camera, photos and location":[
      "How do you pick a photo with PhotosPicker?",
      "What must go in Info.plist before asking for location?"
    ],
    "Notifications":[
      "Local vs push notifications.",
      "How do you ask for notification permission?"
    ],
    "Unit tests with XCTest":[
      "Write an XCTest for a function that validates an email.",
      "What are setUp and tearDown?"
    ],
    "UI tests":[
      "Write a UI test that taps a button and checks a label.",
      "What are accessibility identifiers used for in UI tests?"
    ],
    "Debugging with Xcode":[
      "How do you use breakpoints and the view debugger?",
      "How do you find a memory leak with Instruments?"
    ],
    "Accessibility":[
      "How do you test your app with VoiceOver?",
      "What is Dynamic Type?"
    ],
    "TestFlight beta testing":[
      "How do you send a build to TestFlight testers?",
      "Internal vs external testers."
    ],
    "App Store submission":[
      "What are common reasons Apple rejects an app?",
      "What is needed for an App Store listing?"
    ]
  }
},
"testing":{
  "full":[
    "What is the difference between QA and QC?",
    "Explain SDLC and STLC.",
    "What is the bug life cycle?",
    "Severity vs priority with examples.",
    "Smoke vs sanity vs regression.",
    "Explain boundary value analysis and equivalence partitioning.",
    "How do you design test cases for a login page?",
    "What is a test plan?",
    "Explain your automation framework.",
    "Playwright vs Selenium.",
    "How do you handle dynamic elements and waits?",
    "What is the Page Object Model?",
    "How do you handle flaky tests?",
    "How do you run tests in CI/CD?",
    "How do you test an API? Which status codes do you check?",
    "How do you test a mobile app with Appium?",
    "How do you use AI in testing, and where do you not trust it?",
    "What is MCP and how does it help testers?",
    ["Automate the full purchase flow end to end","https://www.saucedemo.com/"],
    "What would you do if you found a critical bug just before release?"
  ],
  "prog":[
    ["Write a Selenium script that logs in to SauceDemo and checks the products page","https://www.saucedemo.com/"],
    ["Write a Selenium script that adds two items to the cart and checks the total","https://www.saucedemo.com/"],
    ["Write a script that handles a JavaScript alert, confirm and prompt","https://the-internet.herokuapp.com/javascript_alerts"],
    ["Write a script that handles a dropdown","https://the-internet.herokuapp.com/dropdown"],
    ["Write a script that switches into an iframe and types text","https://the-internet.herokuapp.com/iframe"],
    ["Write a script that waits for an element that loads late (explicit wait)","https://the-internet.herokuapp.com/dynamic_loading/1"],
    ["Write a script that uploads a file","https://the-internet.herokuapp.com/upload"],
    ["Write a script that handles multiple windows","https://the-internet.herokuapp.com/windows"],
    ["Write a script that reads table data and finds the row with the highest value","https://the-internet.herokuapp.com/tables"],
    ["Write a script that drags and drops an element","https://the-internet.herokuapp.com/drag_and_drop"],
    "Write a Page Object Model for a login page and a home page",
    "Write a data-driven test that reads logins from Excel or CSV",
    "Write a TestNG or pytest test with setup, teardown and groups",
    "Write a script that takes a screenshot when a test fails",
    ["Write a Playwright test that logs in and checks the cart badge","https://www.saucedemo.com/"],
    "Write a REST Assured or requests test for GET, POST, PUT and DELETE",
    "Write an API test that checks status code, response time and JSON schema",
    "Write a Java program to find duplicate characters in a string (common in tester interviews)",
    "Write a Java program to reverse each word in a sentence",
    ["Write a Java program to count the occurrences of each word","https://exercism.org/tracks/java/exercises/word-count"],
    ["Write a program to check if a string is a palindrome","https://leetcode.com/problems/valid-palindrome/"],
    "Write a program to find the second largest number in an array",
    "Write XPath and CSS locators for ten elements on a given page",
    "Write a Jenkins or GitHub Actions job that runs the test suite every night"
  ],
  "tasks":[
    "Write test cases for a login page (positive, negative, boundary, security)",
    "Write test cases for an ATM withdrawal",
    "Write test cases for a pen, a lift or a coffee machine (classic interview task)",
    "Write a clear bug report for a given bug with steps, expected and actual results and severity",
    "Find ten bugs in a demo site in 30 minutes and log them",
    "Make a test plan for a new feature: scope, approach, risks and exit criteria",
    "Create a traceability matrix linking requirements to test cases",
    "Decide which test cases to automate first and explain why",
    "Fix a flaky test that fails sometimes because of timing",
    "Test an API in Postman: write a collection with tests and run it with Newman",
    "Do a simple load test with JMeter for 100 users and read the report",
    "Explain severity vs priority with three real examples"
  ],
  "topics":{
    "SDLC and STLC":[
      "What are the phases of SDLC and STLC? How do they connect?",
      "When should testing start in a project, and why?"
    ],
    "Types of testing":[
      "Smoke vs sanity vs regression testing.",
      "Functional vs non-functional testing: give two examples of each."
    ],
    "Writing test cases":[
      "Write test cases for a login page (positive, negative, edge).",
      "Write test cases for a pen, a lift or an ATM (classic interview question)."
    ],
    "Bug life cycle":[
      "Explain the bug life cycle from New to Closed.",
      "Severity vs priority: give an example of high severity, low priority."
    ],
    "Writing a good bug report":[
      "What must a good bug report contain?",
      "A developer says \"cannot reproduce\". What do you do?"
    ],
    "Agile, Scrum and Jira":[
      "What happens in sprint planning, daily stand-up and retrospective?",
      "What is the tester's role in a Scrum team?"
    ],
    "Waterfall, V-model and Agile":[
      "Compare Waterfall, V-model and Agile for testing.",
      "Which model fits a project with fixed requirements?"
    ],
    "Verification vs validation":[
      "Verification vs validation: give an example of each.",
      "What are static and dynamic testing?"
    ],
    "Black-box, white-box, gray-box":[
      "Explain black-box, white-box and gray-box testing.",
      "Which one does a tester with API access but no code access do?"
    ],
    "Equivalence partitioning":[
      "Age field accepts 18–60. Write the equivalence classes.",
      "Why does equivalence partitioning reduce the number of tests?"
    ],
    "Boundary value analysis":[
      "For a field that accepts 1–100, which boundary values do you test?",
      "Why do bugs cluster at boundaries?"
    ],
    "Decision tables and state transitions":[
      "Draw a decision table for a discount rule with two conditions.",
      "Draw a state transition diagram for an ATM card (3 wrong PINs)."
    ],
    "Exploratory testing":[
      "What is exploratory testing? How do you document it?",
      "What is a test charter?"
    ],
    "Risk-based prioritisation":[
      "You have one day to test a release. How do you choose what to test?",
      "How do you assess risk (likelihood x impact)?"
    ],
    "Test plan and strategy":[
      "Test plan vs test strategy.",
      "What sections does a test plan have?"
    ],
    "Test data management":[
      "Where does test data come from, and how do you keep it private?",
      "How do you reset test data between runs?"
    ],
    "Root cause analysis":[
      "A bug escaped to production. How do you find the root cause?",
      "What is the 5 Whys technique?"
    ],
    "Unit, integration, system, acceptance":[
      "Explain the test levels with an e-commerce example.",
      "What is UAT and who does it?"
    ],
    "Test management tools":[
      "What do TestRail, Zephyr or Xray do?",
      "How do you link test cases to requirements (traceability matrix)?"
    ],
    "TDD and BDD":[
      "TDD vs BDD.",
      "Write a Gherkin scenario for adding an item to a cart."
    ],
    "What version control is":[
      "Why should testers use Git for test code?",
      "What is the difference between Git and GitHub?"
    ],
    "Repos, commits, branches":[
      ["Practise commits and branches","https://learngitbranching.js.org/?locale=en_US&level=intro1"],
      "Why create a branch for each new test?"
    ],
    "Pull requests":[
      "What should you check when reviewing someone's test pull request?",
      "How do you resolve a merge conflict in a test file?"
    ],
    "Your portfolio repo":[
      "What should your automation portfolio repo contain?",
      "How do you write a README that shows how to run your tests?"
    ],
    "HTML and the DOM":[
      "What is the DOM? How do testers use it?",
      "Why do dynamic ids break tests?"
    ],
    "CSS selectors and XPath":[
      ["Write a CSS selector and an XPath for the login button","https://the-internet.herokuapp.com/login"],
      "Absolute vs relative XPath; why avoid absolute XPath?",
      ["Write XPath with contains() and following-sibling for a table cell","https://the-internet.herokuapp.com/tables"]
    ],
    "Browser DevTools":[
      "How do you check a failed API call from the Network tab?",
      "How do you test a locator in the DevTools console?"
    ],
    "Variables and data types":[
      "let vs const in JavaScript test code.",
      ["Create hello world function","https://leetcode.com/problems/create-hello-world-function/"]
    ],
    "Conditions and loops":[
      ["FizzBuzz","https://leetcode.com/problems/fizz-buzz/"],
      "Loop over test data and run one check per row: how?"
    ],
    "Functions":[
      "Write a reusable login function for your tests.",
      ["Counter (closures)","https://leetcode.com/problems/counter/"]
    ],
    "Arrays and objects":[
      ["Filter elements from array","https://leetcode.com/problems/filter-elements-from-array/"],
      "Store test users as an array of objects and pick the admin user."
    ],
    "Async and await":[
      "Why must Playwright actions be awaited?",
      ["Sleep (and why fixed sleeps are bad in tests)","https://leetcode.com/problems/sleep/"]
    ],
    "TypeScript basics":[
      "Why write tests in TypeScript?",
      "Define a type for test user data."
    ],
    "Java setup, JDK and IntelliJ":[
      "JDK vs JRE vs JVM.",
      "How do you run a Java test from IntelliJ?"
    ],
    "Classes and objects":[
      "Write a LoginPage class with fields and methods.",
      ["Two fer","https://exercism.org/tracks/java/exercises/two-fer"]
    ],
    "Inheritance and interfaces":[
      "How does a BasePage class help a Page Object framework?",
      "Interface vs abstract class: where do you use each in a framework?"
    ],
    "Collections":[
      "List vs Set vs Map: give a test-automation use for each.",
      "Read a list of URLs and check each one's status."
    ],
    "Exceptions":[
      "Which Selenium exceptions have you seen (NoSuchElement, StaleElement, Timeout)? How do you fix each?",
      "Checked vs unchecked exceptions."
    ],
    "Maven":[
      "What is pom.xml? How do you run tests with mvn test?",
      "How do you run only one test group from Maven?"
    ],
    "Install and first test":[
      ["Install Playwright and write a test that opens a page and checks the title","https://www.saucedemo.com/"],
      "What files does npm init playwright create?"
    ],
    "Locators":[
      "getByRole vs CSS vs XPath: which should you prefer and why?",
      ["Automate the login on Sauce Demo using getByRole and getByPlaceholder","https://www.saucedemo.com/"]
    ],
    "Actions":[
      ["Automate checkboxes and a dropdown","https://the-internet.herokuapp.com/checkboxes"],
      ["Drag and drop","https://the-internet.herokuapp.com/drag_and_drop"],
      ["File upload","https://the-internet.herokuapp.com/upload"]
    ],
    "Assertions":[
      "Web-first assertions (toHaveText) vs plain expect: what is the difference?",
      ["Assert that the cart badge shows 2 after adding two items","https://www.saucedemo.com/"]
    ],
    "Auto-waiting":[
      "How does Playwright auto-wait? Why are fixed waits bad?",
      ["Handle dynamically loaded content without sleeps","https://the-internet.herokuapp.com/dynamic_loading/1"]
    ],
    "Codegen and UI mode":[
      "How do you record a test with codegen? Why must you clean it up afterwards?",
      "What does UI mode help you debug?"
    ],
    "Fixtures and hooks":[
      "beforeEach vs fixtures: which is better and why?",
      "Write a fixture that logs in once and shares the page."
    ],
    "Screenshots, video and trace":[
      "How do you open a trace and find why a test failed?",
      "When should you record video: always or on failure only?"
    ],
    "Parallel and cross-browser":[
      "How do you run tests in Chromium, Firefox and WebKit?",
      "What makes tests unsafe to run in parallel?"
    ],
    "Network mocking":[
      "Mock an API response with page.route.",
      "Why mock the network in UI tests?"
    ],
    "What MCP means for testers":[
      "What is the Model Context Protocol (MCP)?",
      "How can an AI assistant drive a browser through MCP?"
    ],
    "Playwright MCP server":[
      "How do you connect the Playwright MCP server to an AI assistant?",
      "What are the risks of letting AI control a browser?"
    ],
    "Playwright test agents":[
      "What do the Playwright planner, generator and healer agents do?",
      "When would you not trust an AI-generated test?"
    ],
    "Planning tests with AI":[
      "Ask AI for test ideas for a checkout page. How do you check its list?",
      "What context should you give the AI?"
    ],
    "Generating tests with AI":[
      "Generate a test with AI, then review: locators, assertions, waits. What do you fix?",
      "How do you keep AI-generated tests consistent with your framework?"
    ],
    "Healing broken tests":[
      "What is self-healing? When can it hide a real bug?",
      "How do you review a \"healed\" locator change?"
    ],
    "Reviewing AI-written tests":[
      "List five problems you often find in AI-written tests.",
      "Who is responsible for an AI-written test that passes wrongly?"
    ],
    "Selenium architecture":[
      "Explain Selenium WebDriver architecture (W3C protocol, drivers).",
      "What is Selenium Manager?"
    ],
    "Locators: id, CSS, XPath":[
      ["Find the login form fields by id, name and CSS","https://the-internet.herokuapp.com/login"],
      ["Write an XPath for the 3rd row's email in the table","https://the-internet.herokuapp.com/tables"]
    ],
    "Waits":[
      "Implicit vs explicit vs fluent wait. Why not mix implicit and explicit?",
      ["Wait for a hidden element to appear","https://the-internet.herokuapp.com/dynamic_loading/1"]
    ],
    "TestNG or JUnit":[
      "TestNG annotations order: @BeforeSuite to @AfterSuite.",
      "How do you run tests with a data provider?"
    ],
    "Handling alerts, frames, windows":[
      ["Handle JavaScript alerts, confirms and prompts","https://the-internet.herokuapp.com/javascript_alerts"],
      ["Switch into an iframe and type text","https://the-internet.herokuapp.com/iframe"],
      ["Switch between browser windows","https://the-internet.herokuapp.com/windows"]
    ],
    "Page Object Model and Page Factory":[
      ["Design page objects for login, inventory and cart","https://www.saucedemo.com/"],
      "Page Object Model vs Page Factory."
    ],
    "Selenium Grid and parallel runs":[
      "What is Selenium Grid? Hub and nodes.",
      "How do you run tests in parallel with TestNG?"
    ],
    "Selenium vs Playwright":[
      "Compare Selenium and Playwright: speed, waits, languages, browsers.",
      "When would you still choose Selenium?"
    ],
    "AI-generated page objects":[
      ["Generate a page object with AI for the Sauce Demo cart page and review it","https://www.saucedemo.com/"],
      "What are common mistakes in AI-written locators?"
    ],
    "Self-healing locators":[
      "How do self-healing tools choose a new locator?",
      "Why can self-healing be risky?"
    ],
    "Selenium MCP server":[
      "What can an AI assistant do through a Selenium MCP server?",
      "How do you keep test credentials safe when using AI tools?"
    ],
    "AI for flaky test triage":[
      "How can AI help group failures by cause?",
      "What data would you give the AI (logs, screenshots, history)?"
    ],
    "What an API is":[
      "What is an API? Give a real example from a mobile app.",
      "REST vs SOAP vs GraphQL."
    ],
    "HTTP methods":[
      "GET vs POST vs PUT vs PATCH vs DELETE.",
      "Which methods are idempotent?"
    ],
    "Status codes":[
      "What do 200, 201, 204, 400, 401, 403, 404, 409, 500 and 503 mean?",
      "Which code should a create-user API return?"
    ],
    "JSON":[
      "Write the JSON for a user with an address and two phone numbers.",
      "How do you validate a JSON response against a schema?"
    ],
    "Collections and environments":[
      "Why use environments (dev, staging) in Postman?",
      "How do you chain requests by saving a token to a variable?"
    ],
    "Writing tests in Postman":[
      "Write a Postman test that checks status 200 and a field value.",
      "How do you run a collection with a data file?"
    ],
    "Authentication and tokens":[
      "Basic auth vs API key vs bearer token vs OAuth.",
      "How do you test an expired token?"
    ],
    "Newman":[
      "How do you run a Postman collection in CI with Newman?",
      "How do you get an HTML report from Newman?"
    ],
    "API tests in Playwright":[
      "Write a Playwright API test that creates and then deletes a resource.",
      "How do you combine API setup with UI tests?"
    ],
    "REST Assured (Java)":[
      "Write a REST Assured test with given-when-then.",
      "How do you extract a value from a response in REST Assured?"
    ],
    "Native, hybrid and mobile web apps":[
      "Native vs hybrid vs mobile web: how does testing differ?",
      "What is a webview?"
    ],
    "Android vs iOS testing":[
      "What is different about testing on iOS vs Android?",
      "Why do you need a Mac for iOS automation?"
    ],
    "Emulators, simulators, real devices":[
      "When must you test on real devices?",
      "What can an emulator not reproduce?"
    ],
    "Android Studio, adb and Xcode setup":[
      "Which adb commands do testers use most?",
      "How do you install an APK on an emulator?"
    ],
    "Manual mobile checks":[
      "List mobile-specific checks: interruptions, network, battery, rotation, permissions.",
      "Write test cases for an incoming call during a payment."
    ],
    "Appium 2 architecture":[
      "Explain Appium 2 architecture: server, drivers and plugins.",
      "What changed from Appium 1 to Appium 2?"
    ],
    "UiAutomator2 and XCUITest drivers":[
      "What are desired capabilities? Give an Android example.",
      "UiAutomator2 vs Espresso driver."
    ],
    "Appium Inspector":[
      "How do you find a locator with Appium Inspector?",
      "Why prefer accessibility id over XPath on mobile?"
    ],
    "Mobile locators":[
      "Accessibility id vs resource-id vs XPath vs UiSelector.",
      "Why is XPath slow on mobile?"
    ],
    "Gestures":[
      "How do you swipe, scroll and long-press with W3C actions?",
      "How do you scroll until an element is visible?"
    ],
    "App states, permissions, deep links":[
      "How do you test an app resuming from background?",
      "How do you grant permissions automatically in tests?"
    ],
    "Hybrid apps and webviews":[
      "How do you switch from native to webview context?",
      "How do you debug a webview in Chrome?"
    ],
    "Screen objects":[
      "What is a screen object? How is it like a page object?",
      "Design screen objects for login and home screens."
    ],
    "Parallel devices and device clouds":[
      "How do you run on several devices in parallel?",
      "What do BrowserStack or Sauce Labs device clouds give you?"
    ],
    "Practice app":[
      "Automate login and add-to-cart on a demo app; which flows would you pick?",
      "What makes a good practice app for a portfolio?"
    ],
    "Mobile MCP servers":[
      "What can a mobile MCP server let an AI do?",
      "What should AI never do on a real user's device?"
    ],
    "Framework layers":[
      "Draw the layers of your framework: tests, pages, utilities, config, reports.",
      "Why keep assertions out of page objects?"
    ],
    "Design patterns":[
      "Which design patterns do you use: Page Object, Factory, Singleton, Builder?",
      "Where would a Builder help with test data?"
    ],
    "Test data strategy":[
      "Hard-coded vs file-based vs generated test data.",
      "How do you avoid tests depending on each other's data?"
    ],
    "BDD layer":[
      "How do Cucumber feature files map to step definitions?",
      "When does BDD add value, and when is it overhead?"
    ],
    "Running in Docker and CI":[
      "Why run tests in Docker?",
      "Write a CI job that runs your suite and uploads the report."
    ],
    "Code reviews and standards":[
      "What would you check in a test code review?",
      "What coding standards matter for test code?"
    ],
    "Performance testing intro":[
      "Load vs stress vs spike vs soak testing.",
      "Which metrics do you report: response time percentiles, throughput, errors?"
    ],
    "Accessibility testing":[
      "What does axe check? What must still be tested by hand?",
      "How do you test with a keyboard only?"
    ],
    "Security testing basics":[
      "Which simple security checks can a manual tester do?",
      "What is the OWASP Top 10?"
    ],
    "Compatibility and responsive testing":[
      "How do you decide which browsers and devices to test?",
      "How do you test a responsive layout quickly?"
    ],
    "Web performance checks":[
      "How do you run Lighthouse and read the report?",
      "What are Core Web Vitals?"
    ],
    "Logs and monitoring":[
      "How do you use server logs to investigate a bug?",
      "What is the difference between logs and metrics?"
    ],
    "Cypress overview":[
      "Cypress vs Playwright vs Selenium.",
      "What are Cypress's main limits?"
    ],
    "Using AI to write test ideas":[
      "Ask AI for edge cases of a date-of-birth field, then judge each idea.",
      "How do you avoid sharing confidential data with AI tools?"
    ],
    "Connecting AI assistants to tools with MCP":[
      "Which tools would you connect for a tester: browser, Jira, test management?",
      "What permissions should an AI tool get?"
    ],
    "Device cloud MCP":[
      "How could AI run a test on a cloud device through MCP?",
      "What should you check in its results?"
    ],
    "Testing AI chatbots":[
      "How do you test a chatbot whose answers change every time?",
      "How do you test for hallucinations and harmful answers?"
    ],
    "Limits of AI in testing":[
      "List tasks where AI helps testers and tasks where it should not decide.",
      "Why is human judgement still needed for test design?"
    ],
    "Portfolio and README":[
      "What should your testing portfolio show recruiters?",
      "Which three projects best show automation skills?"
    ],
    "Resume and LinkedIn":[
      "How do you describe automation work on a resume with numbers?",
      "What keywords do recruiters search for in QA profiles?"
    ],
    "Interview questions":[
      "How do you answer \"Tell me about your framework\"?",
      "How do you answer \"What will you do if a bug is not accepted by the developer\"?"
    ],
    "Paid testing sites":[
      "How do crowd-testing sites (uTest, Test IO) work?",
      "What makes a bug report get approved and paid?"
    ],
    "Upwork and Fiverr profiles":[
      "What should a QA freelancer profile include?",
      "How do you win your first small testing job?"
    ],
    "Appium MCP server":[
      "What does the Appium MCP server let an AI assistant do?",
      "How do you keep control when AI drives a real device?"
    ],
    "AI-generated mobile tests":[
      "Generate a mobile login test with AI and review its locators and waits.",
      "Why do AI-written mobile tests often break on other screen sizes?"
    ],
    "AI visual checks":[
      "How does AI-based visual comparison differ from pixel diffs?",
      "When can a visual check pass even though the screen is wrong?"
    ],
    "Limits of AI on mobile":[
      "Which mobile checks still need a human (gestures feel, real network, battery)?",
      "Why is AI weak at testing device-specific behaviour?"
    ],
    "Configuration and environments":[
      "How do you switch your framework between dev, QA and staging?",
      "Where do you keep URLs and credentials so they are not in the code?"
    ],
    "Logging and reporting":[
      "Which report would you use: Allure, Extent or Playwright HTML? Why?",
      "What should a failure report include for a developer?"
    ],
    "Retries and flaky tests":[
      "Why are retries dangerous if used blindly?",
      "How do you find the real cause of a flaky test?"
    ],
    "Hybrid framework":[
      "What is a hybrid framework (data-driven + keyword-driven + POM)?",
      "When is a hybrid framework too complex?"
    ],
    "Quality metrics":[
      "Which metrics show test quality: coverage, defect leakage, pass rate, flakiness?",
      "What is defect leakage and how do you calculate it?"
    ],
    "GitHub Actions":[
      "Write a GitHub Actions workflow that runs Playwright tests on every push.",
      "How do you upload the test report as an artifact?"
    ],
    "Docker basics":[
      "Image vs container. Write a Dockerfile that runs your tests.",
      "Why do tests behave the same on every machine inside Docker?"
    ],
    "Privacy when using AI":[
      "What data must never be pasted into public AI tools?",
      "How do you mask customer data before asking AI for help?"
    ],
    "Proposals and pricing":[
      "Write a short proposal for a website testing job.",
      "How do you price a testing job: hourly or fixed?"
    ]
  }
},
"placement":{
  "full":[
    "Tell me about yourself.",
    "Explain your final-year project.",
    "Explain OOP pillars with examples.",
    "Process vs thread.",
    "What is deadlock?",
    "Paging vs segmentation.",
    "What is normalisation?",
    "ACID properties.",
    "Write a query for the second highest salary.",
    "OSI model layers.",
    "TCP vs UDP.",
    "What happens when you type a URL?",
    "Reverse a string without built-in functions.",
    "Check whether a number is prime.",
    "Find duplicates in an array.",
    "Reverse a linked list.",
    "Why do you want to join our company?",
    "Where do you see yourself in five years?",
    "Are you willing to relocate or work in shifts?",
    "Do you have any questions for us?"
  ],
  "prog":[
    ["Write a program to reverse a string","https://exercism.org/tracks/python/exercises/reverse-string"],
    ["Write a program to check a palindrome number","https://leetcode.com/problems/palindrome-number/"],
    "Write a program to swap two numbers without a third variable",
    ["Write a program to print the Fibonacci series","https://leetcode.com/problems/fibonacci-number/"],
    "Write a program to check a prime number",
    ["Write a program to check an Armstrong number","https://exercism.org/tracks/python/exercises/armstrong-numbers"],
    "Write a program to find the factorial of a large number",
    "Write a program to find the GCD of two numbers",
    "Write a program to count vowels in a string",
    "Write a program to find the second largest element in an array",
    ["Write a program to remove duplicates from an array","https://leetcode.com/problems/remove-duplicates-from-sorted-array/"],
    ["Write a program to find the missing number in an array","https://leetcode.com/problems/missing-number/"],
    ["Write a program to find the maximum subarray sum","https://leetcode.com/problems/maximum-subarray/"],
    ["Write a program to rotate an array","https://leetcode.com/problems/rotate-array/"],
    ["Write a program to check if two strings are anagrams","https://leetcode.com/problems/valid-anagram/"],
    ["Write a program to find the first non-repeating character","https://leetcode.com/problems/first-unique-character-in-a-string/"],
    ["Write a program to check balanced parentheses","https://leetcode.com/problems/valid-parentheses/"],
    ["Write a program for binary search","https://leetcode.com/problems/binary-search/"],
    ["Write a program to reverse a linked list","https://leetcode.com/problems/reverse-linked-list/"],
    ["Write a program to merge two sorted arrays","https://leetcode.com/problems/merge-sorted-array/"],
    ["Write a program to convert a Roman numeral to an integer","https://leetcode.com/problems/roman-to-integer/"],
    "Write a program to print a number pyramid pattern"
  ],
  "tasks":[
    "Solve a 30-question aptitude test in 40 minutes and review every mistake",
    "Write your resume on one page and check it with an ATS-friendly format",
    "Prepare your \"Tell me about yourself\" answer in under 90 seconds",
    "Prepare two STAR stories: a problem you solved and a team conflict",
    "Explain your final-year project in 2 minutes, then answer \"what would you improve?\"",
    "Do a group discussion practice on a current topic with friends",
    "Do one mock technical interview and one mock HR interview",
    "Write a professional email asking for an interview update",
    "Research a company and prepare three questions to ask the interviewer",
    "Practise a coding round on a timed online test platform"
  ],
  "topics":{
    "Number system, HCF and LCM":[
      "Find the HCF and LCM of 36, 48 and 60. When is each used in word problems?",
      "What is the unit digit of 7^95?",
      ["Count primes up to n","https://leetcode.com/problems/count-primes/"]
    ],
    "Percentages, profit and loss":[
      "A price rises 20% then falls 20%. What is the net change?",
      "A shop marks goods 40% above cost and gives a 20% discount. Find the profit %."
    ],
    "Ratio, averages and mixtures":[
      "The average of 5 numbers is 20; one is removed and the average becomes 18. Find it.",
      "In what ratio must two rice varieties at ₹40/kg and ₹60/kg be mixed to get ₹52/kg?"
    ],
    "Time, speed and distance; time and work":[
      "Two trains 120 m and 180 m long cross each other in 12 s running opposite. Find the relative speed.",
      "A does a job in 10 days, B in 15. How long together?"
    ],
    "Simple and compound interest":[
      "Find the difference between CI and SI on ₹10,000 at 10% for 2 years.",
      "In how many years does money double at 8% compound interest (rule of 72)?"
    ],
    "Permutations, combinations, probability":[
      "In how many ways can the letters of \"LEVEL\" be arranged?",
      "Two dice are thrown. What is the probability that the sum is 8?"
    ],
    "Data interpretation":[
      "From a bar chart of sales, how do you quickly find the year with the highest growth %?",
      "Practise one timed data interpretation set and note your errors."
    ],
    "Series and coding-decoding":[
      "Find the next number: 2, 6, 12, 20, 30, ?",
      "If CAT is coded as DBU, how is DOG coded?"
    ],
    "Blood relations and directions":[
      "\"Pointing to a man, Riya says he is the son of my mother's only brother.\" How is he related to Riya?",
      "A man walks 5 km north, turns right and walks 3 km, turns right and walks 5 km. How far is he from the start?"
    ],
    "Seating arrangement and puzzles":[
      "Eight people sit in a circle facing the centre: how do you set up the diagram from the clues?",
      "What is your method for solving floor-and-person puzzles?"
    ],
    "Syllogisms and statements":[
      "All pens are books. Some books are cups. Does \"some pens are cups\" follow?",
      "How do you use Venn diagrams to solve syllogisms?"
    ],
    "Reading comprehension":[
      "How do you read a passage fast and still answer inference questions?",
      "What is the difference between a stated fact and an inference?"
    ],
    "Grammar and sentence correction":[
      "Find the error: \"Each of the students have submitted the form.\"",
      "Which tense errors are most common in placement tests?"
    ],
    "Class, object, constructor":[
      "What is a class and what is an object? Give a real-world example.",
      "What happens if you do not write a constructor?"
    ],
    "Four pillars of OOP":[
      "Explain encapsulation, abstraction, inheritance and polymorphism with one example each.",
      "Abstraction vs encapsulation."
    ],
    "Overloading vs overriding":[
      "Overloading vs overriding with code examples.",
      "Can you override a private or static method?"
    ],
    "Interfaces vs abstract classes":[
      "When would you choose an interface over an abstract class?",
      "Can an interface have method bodies in Java 8+?"
    ],
    "SOLID principles":[
      "Explain each SOLID principle in one line with an example.",
      "Which SOLID principle does a huge \"God class\" break?"
    ],
    "Process vs thread":[
      "Process vs thread. What do threads share?",
      "What is a context switch?"
    ],
    "CPU scheduling":[
      "Compare FCFS, SJF, Round Robin and Priority scheduling.",
      "Calculate average waiting time for 3 processes with FCFS."
    ],
    "Synchronisation and deadlock":[
      "What are the four conditions for deadlock?",
      "Mutex vs semaphore. What is the producer-consumer problem?"
    ],
    "Memory management":[
      "Paging vs segmentation. What is a page fault?",
      "What is thrashing? Compare FIFO, LRU and optimal page replacement."
    ],
    "File systems":[
      "What is an inode?",
      "How do FAT and NTFS differ?"
    ],
    "Keys and ER model":[
      "Primary, candidate, super, foreign and composite keys.",
      "Draw an ER diagram for a college: students, courses, teachers."
    ],
    "Normalisation":[
      "Explain 1NF, 2NF, 3NF and BCNF with one table.",
      "What anomalies does normalisation remove?"
    ],
    "Transactions and ACID":[
      "What do ACID properties mean?",
      "What is a schedule? What is serialisability?"
    ],
    "Indexing":[
      "How does an index speed up search? What does it cost?",
      "Clustered vs non-clustered index."
    ],
    "SQL interview queries":[
      ["Second highest salary","https://leetcode.com/problems/second-highest-salary/"],
      ["Department highest salary","https://leetcode.com/problems/department-highest-salary/"],
      ["Duplicate emails","https://leetcode.com/problems/duplicate-emails/"]
    ],
    "OSI and TCP/IP models":[
      "Name the 7 OSI layers and one protocol at each.",
      "Map the OSI layers to the TCP/IP model."
    ],
    "TCP vs UDP":[
      "TCP vs UDP. Which do video calls and file downloads use?",
      "Explain the TCP three-way handshake."
    ],
    "IP addressing and subnetting":[
      "How many hosts does a /26 subnet have?",
      "Public vs private IP. What is NAT?"
    ],
    "DNS, HTTP, HTTPS":[
      "What happens when you type google.com in the browser?",
      "How does HTTPS keep data safe (TLS handshake in simple words)?"
    ],
    "Routers, switches, firewalls":[
      "Router vs switch vs hub.",
      "What does a firewall do?"
    ],
    "One-page resume":[
      "Rewrite \"worked on a website\" as an achievement with numbers.",
      "What should a fresher put first: education, skills or projects?"
    ],
    "ATS-friendly format":[
      "What is an ATS? Which formatting breaks it?",
      "How do you match your resume to a job description honestly?"
    ],
    "GitHub profile":[
      "What should your pinned repositories show?",
      "What makes a project README recruiter-friendly?"
    ],
    "LinkedIn profile":[
      "Write a LinkedIn headline for a fresher software developer.",
      "How often should you post, and what?"
    ],
    "Internships and hackathons":[
      "How do you find internships (AICTE, Internshala, LinkedIn)?",
      "How do you present a hackathon project in an interview?"
    ],
    "Referrals and cold messages":[
      "Write a short referral request to a senior on LinkedIn.",
      "What should you never do when asking for a referral?"
    ],
    "TCS NQT":[
      "What are the sections of TCS NQT and the cut-off strategy?",
      "How do you prepare for the coding section in 30 days?"
    ],
    "Infosys, Wipro, Accenture, Cognizant, Capgemini":[
      "How do these companies' test patterns differ?",
      "Which sections do most students fail, and how do you prepare?"
    ],
    "Product company online assessments":[
      "What do product-company OAs test? How many problems in how much time?",
      ["Solve two medium problems in 60 minutes as a mock OA","https://leetcode.com/problems/top-k-frequent-elements/"]
    ],
    "Time management in tests":[
      "How do you decide when to skip a question?",
      "How do you handle negative marking?"
    ],
    "Full mock tests":[
      "Take one full timed mock and list your three weakest topics.",
      "How do you review a mock test so your score improves?"
    ],
    "Explaining your projects":[
      "Explain your best project in 2 minutes: problem, your role, tech, result.",
      "What will interviewers ask about your project's challenges?"
    ],
    "Live coding":[
      "How do you think aloud while coding?",
      ["Valid parentheses (classic live-coding question)","https://leetcode.com/problems/valid-parentheses/"]
    ],
    "System design basics":[
      "Design a URL shortener at a basic level.",
      "What are load balancing and caching?"
    ],
    "HR questions":[
      "Tell me about yourself (prepare a 60-second answer).",
      "Why should we hire you? What are your weaknesses?"
    ],
    "Managerial round":[
      "How would you handle a tight deadline with incomplete requirements?",
      "Tell me about a conflict in a team and how you handled it."
    ],
    "Offer letters and negotiation":[
      "What should you check in an offer letter (CTC breakdown, bond, notice period)?",
      "How do you politely negotiate or ask for more time?"
    ],
    "Mock interviews":[
      "How do you run a mock interview with a friend?",
      "What feedback should you ask for after a mock?"
    ]
  }
},
"ai":{
  "full":[
    "Explain AI, ML and deep learning.",
    "Supervised vs unsupervised learning.",
    "What is overfitting and how do you prevent it?",
    "Precision vs recall.",
    "What is a transformer?",
    "What is attention?",
    "What are embeddings?",
    "What is RAG? Why use it?",
    "How do you reduce hallucinations?",
    "What are temperature and top-p?",
    "What is prompt injection?",
    "What is an AI agent? What is function calling?",
    "What is MCP?",
    "Fine-tuning vs RAG vs prompting.",
    "How do you evaluate an LLM application?",
    "How would you deploy an AI app?",
    "How do you control the cost of an LLM app?",
    "Explain your best AI project.",
    "What are the ethical risks of AI?",
    ["Group anagrams","https://leetcode.com/problems/group-anagrams/"]
  ],
  "prog":[
    "Write NumPy code to normalise each column of a matrix",
    "Write pandas code to fill missing values and one-hot encode a column",
    "Write linear regression from scratch with gradient descent",
    "Write logistic regression from scratch and compute accuracy",
    "Write k-means clustering from scratch",
    "Write code to compute precision, recall and F1 from predictions",
    "Write a train/validation/test split and k-fold cross-validation with scikit-learn",
    "Write a scikit-learn Pipeline with scaling and a model, and tune it with GridSearchCV",
    "Write a small neural network in PyTorch for MNIST",
    "Write a training loop with early stopping",
    "Write cosine similarity between two vectors without a library",
    "Write code that splits a document into chunks for RAG",
    "Write a tiny RAG: embed chunks, find the top 3 for a question and send them to an LLM",
    "Write a function that calls an LLM API and returns JSON that is checked against a schema",
    "Write a prompt evaluation script that runs ten test questions and scores the answers",
    "Write code to fine-tune a small model with Hugging Face on a text dataset",
    "Write a FastAPI endpoint that serves a trained model"
  ],
  "tasks":[
    "Find data leakage in a given notebook and fix it",
    "Pick the right metric for fraud detection, spam filtering and house prices, and explain why",
    "Fix an overfitting model using regularisation, more data or a simpler model",
    "Handle a dataset where only 2 percent of rows are the positive class",
    "Explain a model's predictions with feature importance or SHAP",
    "Build a chatbot that answers from your own PDF and cites the page",
    "Reduce the cost of an LLM app by caching and shorter prompts",
    "Write five tests that catch hallucinations in an LLM app",
    "Present a model to a non-technical manager in five slides",
    "Design an ML system for movie recommendations: data, model, serving and monitoring"
  ],
  "topics":{
    "AI, ML, deep learning, GenAI":[
      "Explain AI vs ML vs deep learning vs generative AI with examples.",
      "Give one example of rule-based software vs a learned model."
    ],
    "What LLMs can and cannot do":[
      "Why do LLMs make up facts?",
      "Name three tasks LLMs do well and three they do badly."
    ],
    "Real uses of AI":[
      "Which AI uses are common in Indian companies today?",
      "Pick a business process and explain how AI could help it."
    ],
    "Variables and types":[
      "What is dynamic typing in Python?",
      ["Two fer","https://exercism.org/tracks/python/exercises/two-fer"]
    ],
    "Conditions and loops":[
      ["FizzBuzz","https://leetcode.com/problems/fizz-buzz/"],
      ["Leap year","https://exercism.org/tracks/python/exercises/leap"]
    ],
    "Functions":[
      "Write a function that returns the mean of a list without libraries.",
      "What are default and keyword arguments?"
    ],
    "Lists and dictionaries":[
      ["Two sum","https://leetcode.com/problems/two-sum/"],
      ["Word count","https://exercism.org/tracks/python/exercises/word-count"]
    ],
    "Files and errors":[
      "Read a CSV of marks and handle a missing file gracefully.",
      "What is the difference between except Exception and a bare except?"
    ],
    "Libraries and virtual environments":[
      "Why pin package versions in requirements.txt?",
      "Create a virtual environment and install pandas and scikit-learn."
    ],
    "Classes":[
      "Write a simple class for a dataset with load() and summary() methods.",
      "What is __init__?"
    ],
    "Commits and branches":[
      ["Practise commits and branches","https://learngitbranching.js.org/?locale=en_US&level=intro1"],
      "Why should notebooks and data files be handled carefully in Git?"
    ],
    "Your first public repo":[
      "Publish your first project to GitHub with a README and a licence.",
      "What must you remove before making a repo public (keys, data)?"
    ],
    "Jupyter and Google Colab":[
      "Jupyter vs Colab: when do you use each?",
      "How do you use a free GPU in Colab?"
    ],
    "NumPy":[
      "Why is NumPy faster than Python lists?",
      "What is broadcasting? Give an example."
    ],
    "pandas":[
      ["Create a DataFrame","https://leetcode.com/problems/create-a-dataframe-from-list/"],
      ["Select data","https://leetcode.com/problems/select-data/"],
      ["Drop missing data","https://leetcode.com/problems/drop-missing-data/"]
    ],
    "matplotlib":[
      "Plot a line chart and a histogram of the same column. When is each useful?",
      "How do you label axes and save a figure?"
    ],
    "Cleaning data":[
      ["Drop duplicate rows","https://leetcode.com/problems/drop-duplicate-rows/"],
      ["Fill missing data","https://leetcode.com/problems/fill-missing-data/"]
    ],
    "Vectors and matrices":[
      "What is a dot product? Why does it measure similarity?",
      "What does a matrix multiplication do in a neural network layer?"
    ],
    "Probability basics":[
      "What is conditional probability? Give a spam-filter example.",
      "What is a probability distribution?"
    ],
    "The idea of a derivative":[
      "What does a derivative tell you about a function?",
      "Why does gradient descent follow the negative gradient?"
    ],
    "Supervised and unsupervised learning":[
      "Supervised vs unsupervised learning with examples.",
      "What is clustering used for?"
    ],
    "Regression":[
      "What does linear regression assume?",
      "How do you measure regression error (MAE, RMSE)?"
    ],
    "Classification":[
      "Logistic regression vs decision tree.",
      "What is a confusion matrix?"
    ],
    "Train and test split":[
      "Why split data into train and test? What is data leakage?",
      "What is cross-validation?"
    ],
    "Accuracy, precision, recall":[
      "Why is accuracy misleading for rare-disease detection?",
      "Precision vs recall. When do you prefer each?"
    ],
    "Overfitting":[
      "What is overfitting? How do you detect and reduce it?",
      "Bias vs variance trade-off."
    ],
    "scikit-learn project":[
      "Walk through a scikit-learn pipeline from data to evaluation.",
      "How do you choose features?"
    ],
    "Neurons and layers":[
      "What does a single neuron compute?",
      "Why do we need activation functions?"
    ],
    "Backpropagation":[
      "Explain backpropagation in simple words.",
      "What are vanishing gradients?"
    ],
    "PyTorch basics":[
      "What is a tensor? What does autograd do?",
      "Write the training loop steps: forward, loss, backward, step."
    ],
    "Embeddings":[
      "What is an embedding? Why are similar words close together?",
      "How are embeddings used in search?"
    ],
    "Attention and transformers":[
      "What problem does attention solve?",
      "Explain self-attention in simple words."
    ],
    "Tokens":[
      "What is a token? Why do token limits matter?",
      "Why do some languages use more tokens than English?"
    ],
    "Pretraining, fine-tuning, RLHF":[
      "Pretraining vs fine-tuning vs RLHF.",
      "When would you fine-tune instead of prompting?"
    ],
    "Using open models":[
      "How do you run an open model from Hugging Face?",
      "What do licences of open models restrict?"
    ],
    "Prompt engineering":[
      "What makes a good prompt?",
      "Rewrite a vague prompt into a clear one with role, task, context and format."
    ],
    "Zero-shot and few-shot prompts":[
      "Zero-shot vs few-shot: when do examples help?",
      "How many examples are too many?"
    ],
    "Chain of thought":[
      "What is chain-of-thought prompting? When does it help?",
      "Why might you hide reasoning from end users?"
    ],
    "Temperature and top-p":[
      "What do temperature and top-p change?",
      "Which temperature would you use for code vs creative writing?"
    ],
    "Hallucinations":[
      "What causes hallucinations? Name three ways to reduce them.",
      "How do you detect a hallucinated answer?"
    ],
    "Context engineering":[
      "What is context engineering? How is it different from prompt engineering?",
      "What should you leave out of the context?"
    ],
    "Calling an LLM API":[
      "Write code that sends a message to an LLM API and prints the reply.",
      "Where should the API key be stored?"
    ],
    "Streaming responses":[
      "Why stream responses? How does the UI change?",
      "How do you handle a stream that stops halfway?"
    ],
    "Structured output":[
      "How do you make an LLM return valid JSON?",
      "How do you validate the JSON you get back?"
    ],
    "Tokens and cost":[
      "Estimate the monthly cost of a chatbot with 1,000 users.",
      "How do you reduce token usage?"
    ],
    "Open vs closed models":[
      "Open vs closed models: privacy, cost, quality.",
      "When would a company choose an open model?"
    ],
    "Choosing the right model":[
      "How do you pick between a small fast model and a large model?",
      "What would you test before switching models?"
    ],
    "Running models on your laptop":[
      "How do you run a model locally with Ollama?",
      "What hardware limits local models?"
    ],
    "Multimodal AI":[
      "What can multimodal models do with images and audio?",
      "Give a business use for image understanding."
    ],
    "Speech to text and text to speech":[
      "How does speech-to-text help in Indian languages?",
      "What are the risks of voice cloning?"
    ],
    "Embeddings and vector databases":[
      "What does a vector database store and how does it search?",
      "Cosine similarity: what does it measure?"
    ],
    "Chunking documents":[
      "Why chunk documents? How big should chunks be?",
      "What is chunk overlap for?"
    ],
    "Retrieval-augmented generation":[
      "Explain RAG step by step.",
      "RAG vs fine-tuning: when to use each?"
    ],
    "Evaluating answers":[
      "How do you check whether a RAG answer is grounded in the documents?",
      "What is an evaluation set?"
    ],
    "Image generation basics":[
      "How do diffusion models create images (simple idea)?",
      "What makes an image prompt good?"
    ],
    "Fine-tuning basics (LoRA)":[
      "What is LoRA and why is it cheaper than full fine-tuning?",
      "What data do you need for fine-tuning?"
    ],
    "Responsible AI":[
      "What is bias in AI? Give an example.",
      "What should an AI app tell users?"
    ],
    "What an AI agent is":[
      "Chatbot vs agent: what is the difference?",
      "Give an example of a useful agent for a tester."
    ],
    "Tool use and function calling":[
      "How does function calling work?",
      "What can go wrong when an LLM calls tools?"
    ],
    "Planning and ReAct":[
      "What is the ReAct pattern?",
      "Why do agents need planning?"
    ],
    "The agent loop and stopping rules":[
      "Why does an agent need a maximum number of steps?",
      "How does an agent know it is done?"
    ],
    "Short-term and long-term memory":[
      "Short-term vs long-term memory in agents.",
      "What should an agent never remember?"
    ],
    "Human in the loop":[
      "Which agent actions should need human approval?",
      "How do you design an approval step?"
    ],
    "Prompt injection and jailbreaks":[
      "What is prompt injection? Give an example from a web page.",
      "How do you defend against it?"
    ],
    "Tool permissions and sandboxing":[
      "Why run agent tools in a sandbox?",
      "What is least privilege for an agent?"
    ],
    "Protecting private data":[
      "How do you stop an AI app leaking personal data?",
      "What is PII and how do you mask it?"
    ],
    "Evaluating RAG and agents":[
      "Which metrics evaluate a RAG system?",
      "How do you test an agent that takes many steps?"
    ],
    "Tracing and observability":[
      "What is tracing for LLM apps? What do you log?",
      "How do you debug a wrong agent answer from a trace?"
    ],
    "Cost and speed monitoring":[
      "How do you track cost per request?",
      "How do caching and smaller models cut cost?"
    ],
    "smolagents":[
      "What does smolagents give you compared to writing the loop yourself?",
      "Build a small agent with one tool."
    ],
    "LangGraph":[
      "What is a graph-based agent workflow?",
      "When is LangGraph better than a simple loop?"
    ],
    "MCP":[
      "What is the Model Context Protocol? Hosts, clients and servers.",
      "Why is MCP useful for connecting tools?"
    ],
    "Multi-agent systems":[
      "When do multiple agents help, and when do they add confusion?",
      "Design a two-agent system: researcher and writer."
    ],
    "Guardrails and evaluation":[
      "What are guardrails? Give input and output examples.",
      "How do you test guardrails?"
    ],
    "Streamlit or Gradio UI":[
      "Build a simple chat UI with Streamlit or Gradio.",
      "How do you keep the API key secret in a Streamlit app?"
    ],
    "FastAPI":[
      "Expose your model as a POST /predict endpoint with FastAPI.",
      "How do you validate input with Pydantic?"
    ],
    "Hugging Face Spaces":[
      "How do you deploy a Gradio app to Hugging Face Spaces?",
      "How do you add secrets to a Space?"
    ],
    "What a coding agent is":[
      "What can a coding agent do beyond autocomplete?",
      "What risks come with letting an agent run commands?"
    ],
    "Using Claude Code or Cursor":[
      "Describe a safe workflow for using a coding agent on a project.",
      "How do you give it good context?"
    ],
    "Reviewing AI-written code":[
      "What do you check in AI-written code?",
      "How do tests help you trust AI-written code?"
    ],
    "Project 1: chat with your PDFs":[
      "Explain the architecture of your chat-with-PDF app.",
      "How do you show the source of each answer?"
    ],
    "Project 2: test-case writer agent":[
      "Which inputs does your test-case writer agent need?",
      "How do you check the test cases it writes?"
    ],
    "Project 3: news summariser":[
      "How do you avoid summaries that add facts not in the article?",
      "How would you schedule the summariser daily?"
    ],
    "README and demo video":[
      "What should a project README show in the first screen?",
      "What should a 2-minute demo video include?"
    ],
    "Sharing on LinkedIn":[
      "Write a LinkedIn post about your AI project.",
      "How do you show results without overclaiming?"
    ]
  }
},
"claude":{
  "full":[
    "What is Claude and how is it different from a search engine?",
    "What makes a good prompt?",
    "What is a system prompt?",
    "What is few-shot prompting?",
    "What is chain-of-thought prompting?",
    "Why do LLMs hallucinate, and how do you reduce it?",
    "What are tokens and context windows?",
    "How do Projects help with repeated work?",
    "What is the Messages API?",
    "What is tool use (function calling)?",
    "What is MCP? Hosts, clients and servers.",
    "What is Claude Code?",
    "What is a CLAUDE.md file?",
    "What is plan mode?",
    "What are subagents and skills?",
    "How do you keep data private when using AI?",
    "How do you evaluate a prompt?",
    "How do you control API cost?",
    "Describe a task you automated with Claude.",
    "When should you not use an AI assistant?"
  ],
  "prog":[
    "Write a Python script that sends a message to the Claude API and prints the reply",
    "Write a script that streams a Claude reply token by token",
    "Write a script that keeps a multi-turn conversation history",
    "Write a script that asks Claude for JSON and checks the result with a schema",
    "Write a tool (function) definition and handle the tool-use loop",
    "Write a script that summarises every text file in a folder",
    "Write a script that sends an image to Claude and asks for a description",
    "Write a script that uses prompt caching for a long system prompt",
    "Write a script that retries with backoff when it hits a rate limit",
    "Write a small MCP server with one tool",
    "Write a script that counts tokens before sending a request"
  ],
  "tasks":[
    "Write a system prompt for a customer-support bot with clear rules and examples",
    "Turn a vague prompt into a clear one with role, task, context and output format",
    "Build a prompt library of ten reusable prompts for your daily work",
    "Use Claude to review a code file and decide which suggestions to accept",
    "Use Claude Code to fix a bug in a small repo and explain each change it made",
    "Set up a Claude Project with files and instructions for one recurring task",
    "Compare two prompts on the same ten inputs and pick the better one",
    "Keep API keys out of code using environment variables",
    "Estimate the monthly cost of an app that sends 1,000 requests a day",
    "Design guardrails so an AI assistant never shares private data"
  ],
  "topics":{
    "What Claude is":[
      "What is Claude, and who makes it?",
      "What kinds of tasks is Claude good at, and where must you double-check it?"
    ],
    "Free and paid plans":[
      "What do you get on the free plan compared with paid plans?",
      "How do usage limits affect long conversations?"
    ],
    "Your first chats":[
      "Write a first prompt that explains your task, your level and the output you want.",
      "How do you continue a conversation versus starting a new one?"
    ],
    "Uploading files and images":[
      "Which files can you upload, and what should you never upload?",
      "Ask Claude to summarise a PDF and check the summary against the PDF."
    ],
    "Projects":[
      "What is a Project and when is it better than a normal chat?",
      "What should go into project instructions and project knowledge?"
    ],
    "Privacy settings":[
      "Which privacy settings should you check first?",
      "What data should you avoid sharing with any AI tool?"
    ],
    "Be clear and specific":[
      "Rewrite \"make this better\" into a clear, specific request.",
      "Why does saying the audience and length improve answers?"
    ],
    "Give context":[
      "What background should you give before asking for a cover letter?",
      "How much context is too much?"
    ],
    "Use examples":[
      "Give Claude two examples of the style you want, then ask for a third.",
      "When can examples make answers worse?"
    ],
    "Ask for step-by-step thinking":[
      "When should you ask Claude to think step by step?",
      "How do you ask it to show assumptions before answering?"
    ],
    "Structure with tags and lists":[
      "Use XML tags to separate instructions, data and the question.",
      "Why do structured prompts reduce mistakes?"
    ],
    "Improve by iterating":[
      "Improve a weak answer in three follow-up messages: what do you ask?",
      "How do you tell Claude what was wrong with its answer?"
    ],
    "Your prompt library":[
      "Which five prompts would you save for daily work?",
      "How do you organise and reuse prompts?"
    ],
    "When to trust and when to check":[
      "Which answers must always be checked (numbers, laws, medicine, citations)?",
      "How do you verify a claim Claude makes?"
    ],
    "Research with web search":[
      "How do you ask for sources and check them?",
      "What are the limits of AI web research?"
    ],
    "Documents, sheets and slides":[
      "Ask Claude to turn notes into a one-page document: what instructions help?",
      "How do you check numbers in a spreadsheet Claude made?"
    ],
    "Analysing data":[
      "Upload a CSV and ask for three insights with the calculations shown.",
      "How do you catch a wrong calculation?"
    ],
    "Writing test cases and bug reports":[
      "Ask Claude for test cases for a login page; which ones would you add or remove?",
      "Turn messy notes into a clear bug report with steps to reproduce."
    ],
    "Connecting your apps":[
      "What do connectors let Claude read or do?",
      "What permissions would you give and refuse?"
    ],
    "API keys and the console":[
      "How do you create an API key and keep it secret?",
      "What happens if a key leaks? What do you do?"
    ],
    "Messages API":[
      "What are the roles in a Messages API request?",
      "Write a request that sends one user message and prints the reply."
    ],
    "System prompts":[
      "What belongs in a system prompt versus the user message?",
      "Write a system prompt for a polite customer-support bot."
    ],
    "Tool use":[
      "How does tool use work: who runs the tool?",
      "Design a tool definition for \"get_weather(city)\"."
    ],
    "Evaluating prompts":[
      "How do you compare two prompts fairly?",
      "What is a test set for prompts?"
    ],
    "Cost basics":[
      "How are API calls priced (input and output tokens)?",
      "How do you estimate the monthly cost of an app?"
    ],
    "Introduction to MCP":[
      "What problem does the Model Context Protocol solve?",
      "Give two examples of tools you would connect through MCP."
    ],
    "MCP hosts, clients and servers":[
      "Explain host, client and server in MCP.",
      "What are tools, resources and prompts in an MCP server?"
    ],
    "Build a small MCP server":[
      "Plan a small MCP server that exposes one tool. What does the tool need?",
      "How do you test an MCP server before connecting it?"
    ],
    "What a coding agent is":[
      "What can a coding agent do that a chat cannot?",
      "Why must you review an agent's changes?"
    ],
    "Install and first session":[
      "How do you install Claude Code and start a session in a project?",
      "What should you ask in your first session?"
    ],
    "CLAUDE.md project memory":[
      "What should a CLAUDE.md contain?",
      "Why keep CLAUDE.md short?"
    ],
    "Plan mode":[
      "When do you use plan mode before coding?",
      "How do you review and change a plan?"
    ],
    "Permissions and safety":[
      "Which actions should always ask for permission?",
      "Why never paste secrets into a session?"
    ],
    "Slash commands":[
      "Which built-in slash commands do you use most?",
      "How do you create a custom slash command?"
    ],
    "Managing context":[
      "Why does a long session get worse? How do you reset context?",
      "What is compaction?"
    ],
    "Connecting tools with MCP":[
      "How do you add an MCP server to Claude Code?",
      "What risks come with third-party MCP servers?"
    ],
    "Subagents":[
      "What is a subagent and when does it help?",
      "Why give a subagent a narrow task?"
    ],
    "Skills":[
      "What is a skill? Give an example you would create.",
      "How is a skill different from a CLAUDE.md note?"
    ],
    "Hooks":[
      "What are hooks used for? Give one example (run tests after edits).",
      "How can a badly written hook cause problems?"
    ],
    "Git, worktrees and GitHub Actions":[
      "How do worktrees let you run tasks in parallel?",
      "How can Claude Code run in GitHub Actions?"
    ],
    "Usage and cost":[
      "How do you check your usage?",
      "How do you reduce cost (smaller tasks, clear context)?"
    ],
    "Download certificates":[
      "Which free Anthropic courses give certificates?",
      "How do you show a certificate on your resume?"
    ],
    "Add to LinkedIn":[
      "How do you add a certificate to LinkedIn?",
      "Write a short post about what you learnt."
    ],
    "Share one project":[
      "Which project best shows your Claude skills?",
      "What should the project README show?"
    ]
  }
},
"tools":{
  "full":[
    "What is generative AI?",
    "How do you write a good prompt?",
    "How do you check an AI answer?",
    "What are the privacy risks of AI tools?",
    "Which AI tool would you use for research, and why?",
    "How can AI help a student study?",
    "How can AI help in an office job?",
    "What is workflow automation?",
    "What is n8n (or Zapier) used for?",
    "How do you add an AI step to a workflow?",
    "What are AI hallucinations?",
    "What are the copyright issues with AI images?",
    "How do you use AI ethically in assignments?",
    "Describe one task you automated.",
    "How do you choose between two AI tools?"
  ],
  "prog":[
    "Write a Python script that calls an AI API to rewrite a paragraph in simple English",
    "Write a script that turns a meeting transcript into action items",
    "Write a script that translates a CSV column into Hindi with an AI API",
    "Write a Google Apps Script that summarises new rows in a sheet",
    "Write a Zapier or Make flow that saves email attachments to Drive and posts a summary",
    "Write a script that creates ten social-media captions from one blog post",
    "Write a script that renames image files based on what an AI says is in them",
    "Write a no-code automation that sends a daily AI news digest to your email"
  ],
  "tasks":[
    "Pick the right AI tool for writing, images, slides, video and coding, and explain why",
    "Make a 5-slide presentation with an AI slide tool, then fix its mistakes by hand",
    "Create a logo and a banner with an AI image tool using a clear prompt",
    "Summarise a 30-page PDF with an AI tool and check three facts against the source",
    "Build a personal research workflow: search, summarise, save notes",
    "Automate one boring weekly task and measure the time saved",
    "Compare two AI tools on the same task and write a short review",
    "Check an AI tool's privacy settings before uploading work files",
    "Make a short how-to video with an AI voice and screen recording",
    "Write a prompt template your team can reuse for weekly reports"
  ],
  "topics":{
    "What AI chat tools do":[
      "What can AI chat tools do well, and where do they fail?",
      "Compare two chat assistants on the same task and note the differences."
    ],
    "Safe use":[
      "What information should you never paste into an AI tool?",
      "How do you use AI for school or office work honestly?"
    ],
    "Checking answers":[
      "How do you fact-check an AI answer?",
      "Ask for sources and verify two of them."
    ],
    "Prompting for any tool":[
      "What four things should every prompt include?",
      "Rewrite a one-line prompt into a clear one."
    ],
    "Research with sources":[
      "Which tools show sources, and how do you check them?",
      "Why can a cited source still be misquoted?"
    ],
    "Study from your notes":[
      "How do you turn your notes into a quiz with an AI tool?",
      "What are the limits of AI-made summaries for exams?"
    ],
    "Writing and email":[
      "Write a polite leave-request email with AI, then edit it in your own words.",
      "How do you keep your own voice when using AI to write?"
    ],
    "Design and images":[
      "Make a poster with an AI design tool. What must you check (text, rights)?",
      "What are the copyright risks of AI images?"
    ],
    "Coding help":[
      "How do you ask an AI tool to explain an error message?",
      "Why must you test AI-written code?"
    ],
    "Building with models":[
      "What is the difference between using an app and calling a model API?",
      "Which free tools let you try models?"
    ],
    "What workflow automation is":[
      "What is a trigger and an action in automation?",
      "Give three office tasks you would automate."
    ],
    "Your first n8n flow":[
      "Build a flow that saves new form responses to a sheet.",
      "How do you test a flow safely?"
    ],
    "Adding an AI step":[
      "Add an AI step that classifies emails. How do you check it is right?",
      "What should happen when the AI step fails?"
    ],
    "Selling automations":[
      "How do you find small businesses that need automation?",
      "How do you price and support an automation?"
    ]
  }
},
"aivideo":{
  "full":[
    "How does text-to-video work in simple words?",
    "Text-to-video vs image-to-video.",
    "How do you keep a character consistent?",
    "How do you write a good video prompt?",
    "What are camera moves and shot types?",
    "What is a storyboard and why use it?",
    "How do you add voice, music and captions?",
    "Which editing tool do you use and why?",
    "What are the legal and ethical risks of AI video?",
    "What is a deepfake?",
    "How do you disclose AI use to clients and viewers?",
    "How do you price AI video work?",
    "How would you grow a faceless YouTube channel?",
    "How do you make a reel for a local business?",
    "Show and explain your best AI video."
  ],
  "prog":[
    "Write a prompt sequence that keeps the same character across five video shots",
    "Write an FFmpeg command to join clips, add music and burn in subtitles",
    "Write an FFmpeg command to resize a video for YouTube Shorts (9:16)",
    "Write a Python script that turns a script file into scene-by-scene prompts",
    "Write a script that generates voice-over with a TTS API for each scene",
    "Write a script that makes subtitles (SRT) from a voice-over with Whisper",
    "Write a shot list as a table: scene, shot type, prompt, duration, audio",
    "Write a batch script that renders thumbnails for ten videos"
  ],
  "tasks":[
    "Make a 30-second product ad using AI video tools from script to final cut",
    "Make a 60-second explainer with AI voice, B-roll and captions",
    "Fix a video where the character's face changes between shots",
    "Edit a talking-head video: cut pauses, add captions and background music",
    "Make one video in three formats: YouTube, Shorts and Instagram",
    "Write a storyboard for a 1-minute story before generating any clips",
    "Check music and image rights before publishing a video",
    "Write a YouTube title, description and tags that match search intent",
    "Review your video's retention graph and change the first 5 seconds",
    "Make a channel trailer that explains what your channel offers"
  ],
  "topics":{
    "What AI video tools can do":[
      "What can text-to-video and image-to-video tools do today?",
      "What are their main limits (length, consistency, hands, text)?"
    ],
    "Choosing a tool":[
      "How do you choose a tool by budget, quality and length?",
      "Compare two tools on the same prompt and list the differences."
    ],
    "Prompting for video":[
      "Write a video prompt with subject, action, setting, camera and style.",
      "Why do short, concrete prompts often work better?"
    ],
    "Safe and legal use":[
      "What is a deepfake, and when is it illegal or harmful?",
      "What permissions do you need to use a real person's face or voice?"
    ],
    "Text to image basics":[
      "Write an image prompt for a product poster.",
      "How do aspect ratio and style words change the image?"
    ],
    "Consistent characters":[
      "How do you keep the same character across ten images?",
      "What is a reference image?"
    ],
    "Storyboards":[
      "Make a six-frame storyboard for a 30-second ad.",
      "Why plan shots before generating video?"
    ],
    "Upscaling and cleanup":[
      "When should you upscale an image or video?",
      "How do you fix small errors in AI images?"
    ],
    "Text to video":[
      "Generate a 5-second clip from text and note what went wrong.",
      "How do you describe motion clearly?"
    ],
    "Image to video":[
      "Why does image-to-video give more control than text-to-video?",
      "Animate a still product photo with a slow camera move."
    ],
    "Camera moves and shot types":[
      "Describe a dolly-in, a pan and a crane shot in a prompt.",
      "Close-up vs wide shot: when do you use each?"
    ],
    "Start and end frames":[
      "How do start and end frames help control a scene?",
      "Plan a transition between two scenes using end frames."
    ],
    "Video with sound and dialogue":[
      "How do you add dialogue and sound effects to a generated clip?",
      "How do you keep lip sync believable?"
    ],
    "Keeping a story consistent":[
      "How do you keep characters, clothes and places consistent across clips?",
      "Plan a one-minute story with five clips."
    ],
    "2D animation with AI":[
      "Make a short 2D cartoon scene. Which steps use AI and which are manual?",
      "How do you keep a cartoon style consistent?"
    ],
    "Lip sync and talking characters":[
      "Make a talking character from a still image and audio.",
      "Why must you have the rights to the voice you use?"
    ],
    "AI avatars and presenters":[
      "When is an AI presenter suitable, and when not?",
      "How do you disclose that a presenter is AI?"
    ],
    "Motion graphics in Canva":[
      "Make an animated reel title in Canva.",
      "How do you keep text readable on a phone?"
    ],
    "AI voiceover":[
      "Make a voiceover and fix pronunciation of names.",
      "How do pacing and pauses change the feel?"
    ],
    "Hindi and Indian language voices":[
      "Make a Hindi voiceover and check the pronunciation of English words in it.",
      "Which tools support Indian languages well?"
    ],
    "AI music and sound effects":[
      "How do you check the licence of AI music?",
      "Add background music that does not cover the voice."
    ],
    "Editing in CapCut":[
      "Cut a 2-minute video to a 30-second reel.",
      "Add captions and a hook in the first two seconds."
    ],
    "Editing in DaVinci Resolve":[
      "Which Resolve pages do you use for cut, colour and audio?",
      "How do you export for YouTube?"
    ],
    "Auto captions and subtitles":[
      "Make auto captions and fix the mistakes.",
      "Why do captions increase views?"
    ],
    "Colour and export settings":[
      "Which export settings suit Instagram Reels and YouTube?",
      "What is colour correction vs colour grading?"
    ],
    "ComfyUI basics":[
      "What is a node workflow in ComfyUI?",
      "What hardware do you need to run it locally?"
    ],
    "Open video models":[
      "Open vs closed video models: cost and control.",
      "What licences do open models have?"
    ],
    "Faceless YouTube channel":[
      "Plan a faceless channel: niche, format, upload schedule.",
      "How do you avoid YouTube's rules on repetitive AI content?"
    ],
    "Ads and reels for local businesses":[
      "Make a 15-second reel for a local bakery: script and shots.",
      "How do you measure if the reel worked?"
    ],
    "Portfolio and showreel":[
      "Which five pieces should a showreel include?",
      "How long should a showreel be?"
    ],
    "Pricing and freelancing":[
      "How do you price a 30-second AI ad?",
      "What should a client contract say about AI use and revisions?"
    ]
  }
},
"trading":{
  "full":[
    "Investing vs trading: which suits most people and why?",
    "What are SEBI, NSE and BSE?",
    "Market vs limit vs stop-loss orders.",
    "What do candlesticks show?",
    "Support and resistance.",
    "Explain RSI and MACD.",
    "What are P/E, ROE and debt-to-equity?",
    "Futures vs options.",
    "What are option Greeks?",
    "Why do most F&O traders lose money?",
    "How do you size a position?",
    "What is a stop-loss and how do you place it?",
    "What is risk-reward?",
    "What is maximum drawdown?",
    "How do you control emotions in trading?",
    "How do you spot a trading scam?",
    "How is trading income taxed in India?",
    "What is backtesting and what are its traps?",
    "What is paper trading?",
    "What would you do before trading real money?"
  ],
  "prog":[
    "Write Python code to download daily prices for a stock and plot them",
    "Write code to calculate a simple and exponential moving average",
    "Write code to calculate RSI from closing prices",
    "Write code to calculate MACD and its signal line",
    "Write code to calculate daily returns, volatility and maximum drawdown",
    "Write a moving-average crossover backtest with entry and exit rules",
    "Write a position-size calculator from capital, risk percent and stop-loss",
    "Write code to calculate an option's Black-Scholes price and delta",
    "Write a TradingView Pine Script indicator that marks RSI below 30",
    "Write a script that scans a list of stocks for a 52-week high breakout",
    "Write code to compute the Sharpe ratio of a strategy",
    "Write a trade journal in a CSV and a script that reports win rate and average R"
  ],
  "tasks":[
    "Mark support, resistance and trend on a given chart and explain your view",
    "Plan a trade with entry, stop-loss, target and risk-reward before entering",
    "Paper trade for two weeks and review every trade in a journal",
    "Explain why a strategy that looked great in backtest failed live",
    "Build a watchlist using a simple scanner and explain why each stock is on it",
    "Read a company's quarterly results and list three good and three bad points",
    "Explain how a 5 percent loss needs more than 5 percent gain to recover",
    "Make a risk plan: maximum loss per trade, per day and per month",
    "Explain an options payoff diagram for a bull call spread",
    "Write down the rules of your strategy so someone else could follow them"
  ],
  "topics":{
    "Why invest":[
      "Why does keeping money only in a savings account lose value over time?",
      "Investing vs trading vs gambling: what is the difference?"
    ],
    "Inflation":[
      "If inflation is 6% and your FD gives 7% before tax, what is your real return?",
      "How does inflation affect stock prices?"
    ],
    "Compounding":[
      "How much does ₹10,000 become at 12% for 20 years?",
      "Why does starting early matter more than investing more later?"
    ],
    "Risk and return":[
      "Why do higher returns come with higher risk?",
      "What is diversification?"
    ],
    "Asset types":[
      "Compare FD, gold, mutual funds, stocks and real estate on risk and liquidity.",
      "What is an index fund?"
    ],
    "What a share is":[
      "What does owning one share of a company mean?",
      "Why do share prices change every second?"
    ],
    "IPO":[
      "How does an IPO work? What is the grey market premium and why is it unreliable?",
      "How do you read an IPO's red herring prospectus?"
    ],
    "NSE and BSE":[
      "What is the difference between NSE and BSE?",
      "What is a stock exchange's job?"
    ],
    "SEBI":[
      "What does SEBI do?",
      "How does SEBI protect small investors?"
    ],
    "Indices: Nifty and Sensex":[
      "What do Nifty 50 and Sensex measure?",
      "How is an index calculated (free-float market cap)?"
    ],
    "Brokers, demat and trading account":[
      "Demat account vs trading account.",
      "How do you choose a broker?"
    ],
    "Market timings and holidays":[
      "What are the pre-open, normal and post-close sessions?",
      "Why do prices gap at the open?"
    ],
    "Market, limit and stop-loss orders":[
      "Market order vs limit order: when do you use each?",
      "What is a stop-loss order? What is slippage?"
    ],
    "Delivery vs intraday":[
      "Delivery vs intraday: costs, margin and risk.",
      "What happens if you do not square off an intraday position?"
    ],
    "T+1 settlement":[
      "What does T+1 settlement mean?",
      "When can you sell shares you bought today?"
    ],
    "Charges":[
      "List the charges on a trade: brokerage, STT, exchange fees, GST, stamp duty, DP charges.",
      "Why do frequent small trades lose money to charges?"
    ],
    "Contract note":[
      "What does a contract note show?",
      "How do you check your charges from it?"
    ],
    "Line, bar and candlestick charts":[
      "Compare line, bar and candlestick charts.",
      "What does one candle tell you?"
    ],
    "OHLC":[
      "What do open, high, low and close mean?",
      "What does a long upper wick show?"
    ],
    "Timeframes":[
      "Why look at a higher timeframe before trading a lower one?",
      "Which timeframe suits a swing trader?"
    ],
    "Volume":[
      "Why should a breakout come with high volume?",
      "What does high volume on a down day suggest?"
    ],
    "Marubozu, doji, spinning top":[
      "What does a doji show about buyers and sellers?",
      "Why is a single candle never enough to trade on?"
    ],
    "Hammer and shooting star":[
      "Where must a hammer appear to matter?",
      "How do you confirm a shooting star?"
    ],
    "Engulfing patterns":[
      "Describe a bullish engulfing pattern.",
      "Why do patterns need context (trend, level)?"
    ],
    "Morning star and evening star":[
      "Describe a morning star.",
      "How often do these patterns fail? How do you test it?"
    ],
    "Why patterns fail":[
      "Why do chart patterns fail in real markets?",
      "How do you limit losses when a pattern fails?"
    ],
    "Trend":[
      "How do you identify an uptrend with highs and lows?",
      "Why is \"the trend is your friend\" useful but incomplete?"
    ],
    "Support and resistance":[
      "How do you draw support and resistance?",
      "What is role reversal (support becomes resistance)?"
    ],
    "Breakouts and fake breakouts":[
      "How do you tell a real breakout from a fake one?",
      "Where do you place a stop-loss on a breakout trade?"
    ],
    "Gaps":[
      "Common, breakaway, runaway and exhaustion gaps.",
      "Do gaps always fill?"
    ],
    "Dow theory":[
      "What are the main ideas of Dow theory?",
      "What are primary, secondary and minor trends?"
    ],
    "Moving averages":[
      "SMA vs EMA. What does a 50/200 crossover show?",
      "Why do moving averages lag?"
    ],
    "RSI":[
      "What do RSI 70 and 30 mean? Why does RSI stay overbought in strong trends?",
      "What is RSI divergence?"
    ],
    "MACD":[
      "How is MACD calculated? What does a signal-line cross mean?",
      "Why is MACD late in fast markets?"
    ],
    "Bollinger Bands":[
      "What do Bollinger Bands measure?",
      "What is a squeeze?"
    ],
    "ATR":[
      "What does ATR measure? How can it set a stop-loss?",
      "Why does ATR not show direction?"
    ],
    "VWAP":[
      "What is VWAP and who uses it?",
      "Why does VWAP reset each day?"
    ],
    "Profit and loss statement":[
      "What are revenue, EBITDA and net profit?",
      "Why can profit rise while cash falls?"
    ],
    "Balance sheet":[
      "What are assets, liabilities and equity?",
      "What does high debt on a balance sheet mean?"
    ],
    "Cash flow statement":[
      "Operating, investing and financing cash flow: what does each show?",
      "Why is operating cash flow important?"
    ],
    "Annual report":[
      "Which sections of an annual report should a beginner read first?",
      "What red flags can you find in an annual report?"
    ],
    "EPS and P/E":[
      "How is EPS calculated? What does a P/E of 40 mean?",
      "Why can a low P/E be a trap?"
    ],
    "P/B, ROE, ROCE":[
      "ROE vs ROCE: what is the difference?",
      "Which businesses are judged on P/B?"
    ],
    "Debt to equity":[
      "What does a debt-to-equity ratio of 2 mean?",
      "Why are banks judged differently on debt?"
    ],
    "Margins and growth":[
      "Gross, operating and net margin.",
      "Why does margin trend matter more than one year's margin?"
    ],
    "Intrinsic value basics":[
      "What is intrinsic value? What is a margin of safety?",
      "Why are valuation models only estimates?"
    ],
    "Interest rates and RBI policy":[
      "How do RBI rate changes affect stocks and bonds?",
      "Which sectors are most rate-sensitive?"
    ],
    "Inflation and crude oil":[
      "How do crude oil prices affect India's inflation and markets?",
      "Which sectors gain or lose when crude rises?"
    ],
    "FII and DII flows":[
      "What are FII and DII flows?",
      "Why do FII outflows hurt the market?"
    ],
    "Results season":[
      "How do markets react to results vs expectations?",
      "Why can a stock fall after good results?"
    ],
    "What a futures contract is":[
      "What is a futures contract? How is it different from buying shares?",
      "Why is futures trading risky for beginners?"
    ],
    "Lot size and margin":[
      "What is lot size? What is SPAN and exposure margin?",
      "Calculate the loss on one lot if the price falls 2%."
    ],
    "Mark-to-market":[
      "What is mark-to-market settlement?",
      "What is a margin call?"
    ],
    "Expiry and rollover":[
      "What happens at expiry?",
      "What is rollover and what does it cost?"
    ],
    "Hedging":[
      "How can futures hedge a stock portfolio?",
      "Hedging vs speculation."
    ],
    "Call and put":[
      "Explain call and put options with an example.",
      "What is the maximum loss for an option buyer?"
    ],
    "Strike price and premium":[
      "What decides an option's premium?",
      "How do you pick a strike price?"
    ],
    "ITM, ATM, OTM":[
      "Define ITM, ATM and OTM for calls and puts.",
      "Why are OTM options cheap?"
    ],
    "Intrinsic and time value":[
      "Split a premium into intrinsic and time value.",
      "Why does time value fall to zero at expiry?"
    ],
    "Buyer vs seller payoff":[
      "Draw the payoff of a call buyer and a call seller.",
      "Why do option sellers need much more margin?"
    ],
    "Delta":[
      "What does a delta of 0.5 mean?",
      "How does delta change as an option goes deeper ITM?"
    ],
    "Theta":[
      "What is theta? Why does it hurt buyers near expiry?",
      "Why is theta highest for ATM options?"
    ],
    "Vega and implied volatility":[
      "What is implied volatility? What is an IV crush?",
      "Why can a buyer lose even when direction is right?"
    ],
    "Gamma":[
      "What is gamma? Why is gamma risk high on expiry day?",
      "How does gamma affect delta?"
    ],
    "Open interest and PCR":[
      "What does open interest show?",
      "How is the put-call ratio read, and why is it not a signal on its own?"
    ],
    "Covered call and protective put":[
      "Explain a covered call and its risk.",
      "Explain a protective put and its cost."
    ],
    "Bull and bear spreads":[
      "Build a bull call spread: max profit, max loss, breakeven.",
      "Why do spreads limit both risk and reward?"
    ],
    "Straddle and strangle":[
      "When do traders buy a straddle?",
      "Why is selling a strangle risky?"
    ],
    "Iron condor":[
      "Explain an iron condor's payoff.",
      "What market view does an iron condor express?"
    ],
    "Why most option buyers lose":[
      "What does SEBI data say about F&O traders' profits and losses?",
      "List three reasons option buyers lose money."
    ],
    "Position sizing":[
      "If you risk 1% of ₹2,00,000 and your stop is ₹10 away, how many shares can you buy?",
      "Why does position size matter more than entry?"
    ],
    "Stop loss":[
      "Where should a stop-loss go: fixed %, ATR, or a chart level?",
      "Why do traders move stops and lose more?"
    ],
    "Risk-reward":[
      "With a 1:2 risk-reward, what win rate breaks even?",
      "Why is a high win rate with bad risk-reward dangerous?"
    ],
    "Maximum daily loss":[
      "Why set a maximum daily loss? What do you do when you hit it?",
      "How do you choose the limit?"
    ],
    "Drawdown":[
      "What is maximum drawdown? Why does a 50% loss need a 100% gain?",
      "How do you recover from a drawdown safely?"
    ],
    "Fear and greed":[
      "How do fear and greed show up in your trades?",
      "Which rules protect you from them?"
    ],
    "FOMO and revenge trading":[
      "What is revenge trading? How do you stop it?",
      "What is FOMO and how does a checklist help?"
    ],
    "Overtrading":[
      "What are the signs of overtrading?",
      "How many trades a day is too many for a beginner?"
    ],
    "Trading journal":[
      "What should a trading journal record?",
      "How do you review your journal weekly?"
    ],
    "Spotting scams":[
      "List five signs of a trading scam (guaranteed returns, tips groups, etc.).",
      "What should you do if you are asked to share your login or pay for tips?"
    ],
    "Checking SEBI registration":[
      "How do you check if an adviser or research analyst is SEBI-registered?",
      "Why must \"finfluencers\" disclose registration?"
    ],
    "Tax on trading":[
      "How are intraday, F&O, short-term and long-term gains taxed in India?",
      "Why must F&O traders file ITR-3?"
    ],
    "What SEBI data says":[
      "What share of individual F&O traders lost money in SEBI's studies?",
      "What does this data mean for a beginner?"
    ],
    "Python setup and Colab":[
      "How do you start Python in Google Colab and install a library?",
      "Why use Colab for market data practice?"
    ],
    "pandas basics":[
      ["Create a DataFrame","https://leetcode.com/problems/create-a-dataframe-from-list/"],
      ["Select data","https://leetcode.com/problems/select-data/"]
    ],
    "Loading historical data":[
      "How do you load daily OHLC data from a CSV into pandas?",
      "What problems appear in market data (missing days, splits)?"
    ],
    "Plotting price and indicators":[
      "Plot close price with 20 and 50-day moving averages.",
      "Calculate and plot RSI from scratch."
    ],
    "Writing a simple strategy":[
      "Write a moving-average crossover strategy with clear entry and exit rules.",
      "Why must rules be fixed before testing?"
    ],
    "Including costs and slippage":[
      "Add brokerage, taxes and slippage to a backtest. How much does profit change?",
      "Why do backtests without costs look too good?"
    ],
    "Overfitting":[
      "What is overfitting in backtesting?",
      "How do out-of-sample tests help?"
    ],
    "Results: win rate, drawdown, Sharpe":[
      "How do you calculate win rate, max drawdown and the Sharpe ratio?",
      "Why is one great year not proof that a strategy works?"
    ],
    "What a broker API is":[
      "What can a broker API do (quotes, orders, positions)?",
      "How do you keep API keys safe?"
    ],
    "SEBI algo rules 2026":[
      "What do SEBI's algo trading rules require from retail users and brokers?",
      "Why are unregistered algo strategies risky?"
    ],
    "Paper trading bot":[
      "How does paper trading differ from live trading?",
      "Build a bot that logs paper trades without placing real orders."
    ],
    "Logging and alerts":[
      "What should a trading bot log?",
      "How do you get an alert when the bot stops or errors?"
    ]
  }
},
"sap":{
  "full":[
    "What is SAP and what is ERP?",
    "What is S/4HANA?",
    "Explain the organisational structure in your module.",
    "Procure-to-pay process.",
    "Order-to-cash process.",
    "How does MM integrate with FI?",
    "How does SD integrate with FI?",
    "What is master data?",
    "What is a transaction code?",
    "What is Fiori?",
    "What is a CDS view?",
    "What is RAP?",
    "What is SAP BTP?",
    "What is SAP Activate?",
    "What is fit-to-standard?",
    "How is data migrated to S/4HANA?",
    "What is GST configuration in SAP?",
    "What is MRP?",
    "What certification would you take first and why?",
    "Explain one end-to-end process you practised."
  ],
  "prog":[
    "Write an ABAP report that reads a table with SELECT and shows it in ALV",
    "Write an ABAP program with a selection screen and input checks",
    "Write an internal table program using LOOP, READ TABLE and SORT",
    "Write an ABAP class with a method and call it from a report",
    "Write a function module that returns customer details for an ID",
    "Write a BAPI call to create a sales order and check the return messages",
    "Write an ABAP CDS view with a join and an association",
    "Write a simple enhancement (BAdI) that adds a check before saving",
    "Write an OData service that exposes a CDS view",
    "Write a program that uploads a file into an internal table and validates it"
  ],
  "tasks":[
    "Explain the procure-to-pay flow with the T-codes used at each step",
    "Explain the order-to-cash flow with the T-codes used at each step",
    "Create a purchase order and goods receipt in a practice system",
    "Configure a new company code at a basic level (practice system)",
    "Find why an invoice is blocked and explain how to release it",
    "Write test scripts for a sales order process (UAT)",
    "Map a client's business process to standard SAP and list the gaps",
    "Explain the difference between a customising change and a code change",
    "Prepare a simple cut-over checklist for a go-live",
    "Explain the role of an SAP functional consultant vs an ABAP developer"
  ],
  "topics":{
    "What ERP is":[
      "What is ERP? Why do companies use one system instead of many?",
      "Give an example of how one sales order touches finance, stock and delivery."
    ],
    "SAP products today":[
      "What are S/4HANA, SAP BTP and SuccessFactors?",
      "S/4HANA vs ECC: what changed?"
    ],
    "Business processes":[
      "Explain procure-to-pay and order-to-cash.",
      "What is record-to-report?"
    ],
    "SAP navigation and Fiori":[
      "What is a transaction code? How do you find one?",
      "What is SAP Fiori?"
    ],
    "SAP job roles":[
      "Functional vs technical vs basis consultant.",
      "What does an SAP end user do?"
    ],
    "Choosing your module":[
      "How do you choose between FICO, MM, SD and ABAP?",
      "Which module suits a commerce graduate? An engineer?"
    ],
    "Organisational structure":[
      "Explain company code, plant, storage location and sales organisation.",
      "Why is the organisational structure set up first?"
    ],
    "Master data":[
      "What is master data vs transaction data?",
      "Customer master, vendor master and material master: what do they hold?"
    ],
    "Transactions and documents":[
      "What is a document in SAP? Give examples from MM and FI.",
      "How do you display a document's flow?"
    ],
    "Integration between modules":[
      "How does a goods receipt create an accounting entry?",
      "How does billing in SD update FI?"
    ],
    "Reports and analytics basics":[
      "Which standard reports would a finance user run?",
      "What is embedded analytics in S/4HANA?"
    ],
    "General ledger":[
      "What is the chart of accounts?",
      "What is a fiscal year variant and posting period?"
    ],
    "Accounts payable and receivable":[
      "Walk through a vendor invoice and payment.",
      "What is dunning?"
    ],
    "Asset accounting":[
      "What is an asset class? How is depreciation run?",
      "What happens when an asset is sold?"
    ],
    "Controlling and cost centres":[
      "Cost centre vs profit centre.",
      "What is internal order costing?"
    ],
    "GST in SAP":[
      "How is GST set up for Indian company codes?",
      "What are CGST, SGST and IGST, and when does each apply?"
    ],
    "Purchase requisition to purchase order":[
      "Purchase requisition vs purchase order.",
      "What is a release strategy?"
    ],
    "Goods receipt and invoice verification":[
      "What is three-way matching?",
      "What movement type is used for a goods receipt against a PO?"
    ],
    "Inventory management":[
      "What are stock types (unrestricted, quality, blocked)?",
      "What is a physical inventory count?"
    ],
    "MRP basics":[
      "What does MRP plan?",
      "What is the difference between MRP and MRP Live?"
    ],
    "Sales order cycle":[
      "Walk through inquiry, quotation, sales order, delivery and billing.",
      "What is a sales document type?"
    ],
    "Pricing and conditions":[
      "What is the condition technique?",
      "How are discounts and taxes added in pricing?"
    ],
    "Delivery and billing":[
      "What is post goods issue?",
      "What is a billing document?"
    ],
    "Credit management":[
      "How does SAP block an order for a customer over the credit limit?",
      "Who releases a credit block?"
    ],
    "ABAP basics":[
      "What is ABAP? What are internal tables?",
      "Write the steps of a simple ABAP report."
    ],
    "ABAP in Eclipse (ADT)":[
      "Why use ADT instead of SE80?",
      "How do you create an ABAP class in ADT?"
    ],
    "Core Data Services (CDS)":[
      "What is a CDS view? Why is it important in S/4HANA?",
      "What are annotations in CDS?"
    ],
    "RAP basics":[
      "What is the ABAP RESTful Application Programming Model?",
      "What are business objects and behaviour definitions?"
    ],
    "SAP BTP trial account":[
      "What can you do with a free BTP trial?",
      "What is the difference between Cloud Foundry and ABAP environment?"
    ],
    "SAP Fiori and UI5 basics":[
      "What is SAPUI5? What is a Fiori Elements app?",
      "How does a Fiori app get its data (OData)?"
    ],
    "SAP Activate methodology":[
      "Name the phases of SAP Activate.",
      "What happens in the Explore phase?"
    ],
    "Fit-to-standard and configuration":[
      "What is a fit-to-standard workshop?",
      "Configuration vs custom development."
    ],
    "Data migration":[
      "How is data moved to S/4HANA (Migration Cockpit)?",
      "What checks do you do after migration?"
    ],
    "Testing in SAP projects":[
      "What are unit, integration and user acceptance tests in an SAP project?",
      "What is regression testing after an SAP upgrade?"
    ],
    "SAP certification":[
      "Which entry-level SAP certification fits each module?",
      "How do you prepare with SAP Learning Hub or free learning journeys?"
    ],
    "Resume and interviews":[
      "How do you show SAP skills without job experience?",
      "Which questions are asked to SAP freshers?"
    ]
  }
},
"devops":{
  "full":[
    "What is DevOps?",
    "Explain CI/CD.",
    "What is a Dockerfile? Image vs container.",
    "Docker vs virtual machine.",
    "What is Kubernetes and why use it?",
    "Pod, deployment, service: explain each.",
    "Liveness vs readiness probes.",
    "What is infrastructure as code? Terraform vs Ansible.",
    "What is the Terraform state file?",
    "Blue-green vs canary deployment.",
    "How do you troubleshoot a slow Linux server?",
    "What is a load balancer?",
    "Explain DNS.",
    "What are IAM roles?",
    "How do you secure secrets in pipelines?",
    "What are SLO and error budget?",
    "How do you monitor an application?",
    "How do you reduce cloud cost?",
    "Explain a pipeline you built.",
    ["Bash: count words","https://exercism.org/tracks/bash/exercises/word-count"]
  ],
  "prog":[
    "Write a Bash script that checks disk usage and alerts if it is above 80 percent",
    "Write a Bash script that backs up a folder with the date in the file name",
    "Write a Bash script that reads a log file and counts errors by type",
    "Write a Python script that checks if a list of URLs is up",
    "Write a Dockerfile for a web app using a small base image and a non-root user",
    "Write a multi-stage Dockerfile that builds and then runs a Go or Node app",
    "Write a docker-compose file for web, database and cache",
    "Write a GitHub Actions or Jenkins pipeline: build, test, scan, push image",
    "Write Kubernetes YAML for a Deployment, Service and ConfigMap",
    "Add liveness and readiness probes and resource limits to a Deployment",
    "Write a Terraform file that creates a virtual machine and a security group",
    "Write an Ansible playbook that installs nginx and starts it",
    "Write a Prometheus alert rule for high CPU",
    "Write a cron job that cleans files older than seven days"
  ],
  "tasks":[
    "Find why a container keeps restarting (CrashLoopBackOff) and fix it",
    "Roll back a bad deployment in Kubernetes",
    "Reduce a Docker image from 1 GB to under 200 MB",
    "Set up blue-green or canary release for an app",
    "Store secrets safely instead of in the repo or the Dockerfile",
    "Find why a server is slow using top, df, free and logs",
    "Design a CI/CD pipeline for a team of ten developers",
    "Set up a dashboard and an alert for an app's error rate",
    "Write a short incident report for an outage: what happened, why, and what to change",
    "Explain how a request reaches a pod: DNS, load balancer, ingress, service, pod"
  ],
  "topics":{
    "Command line basics":[
      ["Play the Linux game: log in and read the first password","https://overthewire.org/wargames/bandit/bandit0.html"],
      "Explain cd, ls -la, cp, mv, rm -r and why rm -rf is dangerous."
    ],
    "Permissions and users":[
      "What does chmod 755 mean? What about chmod 600 for a key file?",
      "sudo vs su. Why not log in as root?"
    ],
    "Processes and services":[
      "How do you find which process uses port 8080 and stop it?",
      "What does systemctl enable vs start do?"
    ],
    "Package managers":[
      "apt vs dnf vs snap. How do you update all packages?",
      "Why pin package versions on servers?"
    ],
    "Bash scripting":[
      ["Write a Bash script that greets a user","https://exercism.org/tracks/bash/exercises/two-fer"],
      ["Leap year in Bash","https://exercism.org/tracks/bash/exercises/leap"],
      "Write a script that backs up a folder with the date in the file name."
    ],
    "Text tools":[
      ["Count word frequency in a file using grep, sort and uniq","https://exercism.org/tracks/bash/exercises/word-count"],
      "Use awk to print the 5th column of a log where the status is 500."
    ],
    "IP addresses and ports":[
      "Public vs private IP. What is a port?",
      "Which ports do SSH, HTTP, HTTPS and PostgreSQL use?"
    ],
    "DNS":[
      "What are A, CNAME, MX and TXT records?",
      "Why might a DNS change take time to show up?"
    ],
    "HTTP, HTTPS and TLS":[
      "What happens in a TLS handshake (simple version)?",
      "How do you check a site's certificate expiry from the command line?"
    ],
    "SSH":[
      "How do you create an SSH key and log in without a password?",
      "How do you harden SSH on a server?"
    ],
    "Load balancers and proxies":[
      "Reverse proxy vs load balancer.",
      "Round robin vs least connections."
    ],
    "Branching strategies":[
      "Trunk-based development vs GitFlow for CI/CD.",
      "What are feature flags?"
    ],
    "GitHub Actions":[
      "Write a workflow that builds, tests and pushes a Docker image.",
      "How do you cache dependencies in GitHub Actions?"
    ],
    "Build, test, deploy stages":[
      "What belongs in each pipeline stage?",
      "What is a blue-green deployment? A canary release?"
    ],
    "Artifacts and versioning":[
      "What is semantic versioning?",
      "Where do you store build artifacts?"
    ],
    "Images and containers":[
      "Image vs container vs virtual machine.",
      "What is a layer in a Docker image?"
    ],
    "Writing a Dockerfile":[
      "Write a small, secure Dockerfile for a Python app.",
      "Why use multi-stage builds and a non-root user?"
    ],
    "Volumes and networks":[
      "Why do container files disappear, and how do volumes fix it?",
      "How do two containers talk to each other?"
    ],
    "Docker Compose":[
      "Write a compose file for an app and a PostgreSQL database.",
      "How do you pass environment variables safely?"
    ],
    "Registries":[
      "Docker Hub vs a private registry (ECR, GHCR).",
      "Why scan images for vulnerabilities?"
    ],
    "Free tier and billing alarms":[
      "How do you set a billing alarm in AWS?",
      "Which free-tier mistakes cause surprise bills?"
    ],
    "IAM":[
      "Users vs roles vs policies. What is least privilege?",
      "Why should you never use the root account daily?"
    ],
    "Compute: EC2 and Lambda":[
      "EC2 vs Lambda: when do you use each?",
      "What is an AMI? What is a security group?"
    ],
    "Storage: S3":[
      "How do you make an S3 bucket private and serve files safely?",
      "What are S3 storage classes?"
    ],
    "Networking: VPC":[
      "Public vs private subnet. What is a NAT gateway?",
      "Security group vs network ACL."
    ],
    "Databases: RDS":[
      "RDS vs running a database on EC2.",
      "What is a read replica? What is Multi-AZ?"
    ],
    "Why infrastructure as code":[
      "What problems does infrastructure as code solve?",
      "Declarative vs imperative tools."
    ],
    "Terraform basics":[
      "What do terraform init, plan and apply do?",
      "What is the state file and why must it be protected?"
    ],
    "Variables and modules":[
      "How do you write a reusable Terraform module?",
      "How do you use different variables for dev and prod?"
    ],
    "Ansible basics":[
      "What is an Ansible playbook? Why is Ansible agentless?",
      "Terraform vs Ansible."
    ],
    "Pods and deployments":[
      "Pod vs deployment vs ReplicaSet.",
      "How does a rolling update work?"
    ],
    "Services and ingress":[
      "ClusterIP vs NodePort vs LoadBalancer.",
      "What does an ingress controller do?"
    ],
    "ConfigMaps and secrets":[
      "ConfigMap vs Secret. Are Kubernetes secrets encrypted by default?",
      "How do you mount a ConfigMap as a file?"
    ],
    "Scaling and health checks":[
      "Liveness vs readiness probes.",
      "How does the Horizontal Pod Autoscaler work?"
    ],
    "Helm":[
      "What is a Helm chart? Why use one?",
      "How do you roll back a Helm release?"
    ],
    "Logs, metrics and traces":[
      "Logs vs metrics vs traces: what question does each answer?",
      "What is structured logging?"
    ],
    "Prometheus and Grafana":[
      "How does Prometheus collect metrics?",
      "Build a Grafana dashboard for CPU, memory and request rate."
    ],
    "Alerts and on-call":[
      "What makes a good alert?",
      "What is alert fatigue and how do you avoid it?"
    ],
    "SRE basics":[
      "What are SLI, SLO and error budget?",
      "What is a blameless postmortem?"
    ],
    "DevSecOps basics":[
      "Where do security checks fit in a pipeline (SAST, dependency scan, image scan)?",
      "How do you keep secrets out of Git?"
    ],
    "Cloud cost control":[
      "List five ways to cut a cloud bill.",
      "How do tags help with cost control?"
    ]
  }
},
"cyber":{
  "full":[
    "What is the CIA triad?",
    "Threat vs vulnerability vs risk.",
    "Encryption vs hashing.",
    "Symmetric vs asymmetric encryption.",
    "What is TLS?",
    "What is a firewall? IDS vs IPS.",
    "What is SQL injection and how do you prevent it?",
    "What is XSS and how do you prevent it?",
    "What is CSRF?",
    "What is the OWASP Top 10?",
    "What is phishing?",
    "What is MFA?",
    "What is a SIEM?",
    "What are the steps of incident response?",
    "What is the principle of least privilege?",
    "What is a CVE?",
    "What is penetration testing? Black-box vs white-box.",
    "How do you secure a home Wi-Fi network?",
    "What is the DPDP Act?",
    "Describe a lab you completed."
  ],
  "prog":[
    "Write a Python port scanner for a host you own",
    "Write a script that checks password strength",
    "Write a script that finds failed SSH logins in a log file and lists the IPs",
    "Write a script that hashes a file with SHA-256 and checks it against a known hash",
    "Write a script that checks which security headers a website sends",
    "Write a script that finds secrets (API keys) in a code folder",
    "Write a Bash one-liner to find files with SUID permission",
    "Write an nmap command to find open ports and service versions on a lab machine",
    ["Write a simple Caesar cipher and break it by trying every key","https://exercism.org/tracks/python/exercises/rotational-cipher"],
    "Write a SQL query that shows why string-built queries are unsafe, then fix it with parameters"
  ],
  "tasks":[
    ["Solve the first ten levels of OverTheWire Bandit","https://overthewire.org/wargames/bandit/"],
    ["Do the PortSwigger SQL injection labs","https://portswigger.net/web-security/sql-injection"],
    ["Do the PortSwigger cross-site scripting labs","https://portswigger.net/web-security/cross-site-scripting"],
    "Read a phishing email and list every red flag",
    "Analyse a packet capture in Wireshark and find a login sent in plain text",
    "Harden a Linux server: SSH keys only, firewall, updates, fail2ban",
    "Write an incident response plan for a ransomware attack",
    "Do a risk assessment for a small office network",
    "Write a short penetration test report for a lab machine with findings and fixes",
    "Explain the OWASP Top 10 with one real example each"
  ],
  "topics":{
    "How computers and operating systems work":[
      "What does the operating system kernel do?",
      "What is the difference between user mode and kernel mode?"
    ],
    "Command line":[
      ["Play OverTheWire Bandit levels 0 to 5","https://overthewire.org/wargames/bandit/bandit0.html"],
      "Which Linux commands help you find files and read logs?"
    ],
    "Networking models":[
      "Name the OSI layers and an attack at each.",
      "TCP vs UDP from a security view."
    ],
    "IP, ports and protocols":[
      "Which ports are commonly attacked and why (22, 23, 445, 3389)?",
      "What is the difference between HTTP and HTTPS?"
    ],
    "Virtual machines":[
      "Why practise hacking only inside your own virtual machines?",
      "How do you set up Kali Linux and a vulnerable lab VM?"
    ],
    "CIA triad":[
      "Explain confidentiality, integrity and availability with examples.",
      "Which part of CIA does ransomware attack?"
    ],
    "Threats, vulnerabilities and risk":[
      "Threat vs vulnerability vs risk.",
      "What is a zero-day?"
    ],
    "Passwords and MFA":[
      "Why are password managers and MFA important?",
      "How do attackers crack weak passwords (dictionary, brute force)?"
    ],
    "Encryption and hashing":[
      "Encryption vs hashing vs encoding.",
      "Symmetric vs asymmetric encryption."
    ],
    "Certificates and TLS":[
      "What does a TLS certificate prove?",
      "What is a certificate authority?"
    ],
    "Phishing and social engineering":[
      "List five signs of a phishing email.",
      "What is vishing and smishing?"
    ],
    "Firewalls":[
      "Stateful vs stateless firewall.",
      "Write two firewall rules for a web server."
    ],
    "VPNs":[
      "What does a VPN protect, and what does it not?",
      "Site-to-site vs remote-access VPN."
    ],
    "IDS and IPS":[
      "IDS vs IPS.",
      "Signature-based vs anomaly-based detection."
    ],
    "Wireshark":[
      "How do you filter HTTP traffic in Wireshark?",
      "What can you see in an unencrypted login?"
    ],
    "Nmap in a lab":[
      "What does nmap -sV do?",
      "Why scan only systems you own or have permission to test?"
    ],
    "OWASP Top 10":[
      "Name the OWASP Top 10 categories.",
      "Which one is most common in web apps today?"
    ],
    "Burp Suite basics":[
      "What do Proxy, Repeater and Intruder do in Burp?",
      "How do you intercept a request from your browser?"
    ],
    "Injection, including SQL injection":[
      ["SQL injection lab: retrieve hidden data","https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data"],
      ["SQL injection lab: login bypass","https://portswigger.net/web-security/sql-injection/lab-login-bypass"],
      "How do prepared statements stop SQL injection?"
    ],
    "Cross-site scripting (XSS)":[
      ["Reflected XSS lab","https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded"],
      "Stored vs reflected vs DOM XSS.",
      "How does output encoding prevent XSS?"
    ],
    "Broken access control":[
      ["Access control lab: unprotected admin functionality","https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality"],
      "What is IDOR? Give an example."
    ],
    "Secure coding fixes":[
      "How do you fix SQL injection, XSS and broken access control in code?",
      "What is input validation vs output encoding?"
    ],
    "Logs and SIEM basics":[
      "What does a SIEM do?",
      "Which log events would you alert on?"
    ],
    "Incident response steps":[
      "Name the steps of incident response.",
      "What do you do first when you find malware on a laptop?"
    ],
    "Malware basics":[
      "Virus vs worm vs trojan vs ransomware.",
      "How does ransomware usually get in?"
    ],
    "Vulnerability management":[
      "What is a CVE? What does CVSS score?",
      "How do you prioritise patching?"
    ],
    "Cloud security basics":[
      "What is the shared responsibility model?",
      "List three common cloud misconfigurations."
    ],
    "Entry certifications":[
      "Compare ISC2 CC, CompTIA Security+ and CEH.",
      "Which should a fresher take first?"
    ],
    "Capture the flag (CTF) practice":[
      "What skills do CTFs train?",
      "How do you write up a CTF challenge you solved?"
    ],
    "Bug bounty basics and rules":[
      "What is in a bug bounty program's scope and rules?",
      "Why is testing outside scope illegal?"
    ],
    "Indian cyber law basics":[
      "What does the IT Act 2000 cover?",
      "What is the DPDP Act about?"
    ],
    "Resume and interviews":[
      "Which labs and certifications should your resume show?",
      "How do you explain a security finding to a non-technical manager?"
    ]
  }
},
"data":{
  "full":[
    "What does a data analyst do?",
    "WHERE vs HAVING.",
    "Explain joins with an example.",
    "Window functions: ROW_NUMBER, RANK, DENSE_RANK.",
    "VLOOKUP vs XLOOKUP.",
    "What is a pivot table?",
    "Mean vs median.",
    "What is standard deviation?",
    "Correlation vs causation.",
    "What is a p-value? What is an A/B test?",
    "How do you handle missing data?",
    "How do you find outliers?",
    "groupby in pandas.",
    "merge vs concat.",
    "What is a star schema?",
    "Measure vs calculated column in Power BI.",
    "How do you design a dashboard?",
    "Sales fell 15% last month. How would you investigate?",
    "Explain your best analysis project.",
    ["Second highest salary","https://leetcode.com/problems/second-highest-salary/"]
  ],
  "prog":[
    "Write SQL to find the top 5 products by revenue each month",
    "Write SQL for month-over-month growth using LAG()",
    "Write SQL to find users who bought in two months in a row",
    "Write SQL to calculate a 7-day moving average",
    "Write SQL for a cohort retention table",
    "Write pandas code to clean a dataset: blanks, duplicates and wrong types",
    "Write pandas code to group sales by region and month and pivot it",
    "Write pandas code to merge two tables and find rows that did not match",
    "Write Python code to find outliers with the IQR rule",
    "Write Python code to plot a trend and a bar chart with matplotlib",
    "Write an Excel formula with XLOOKUP and SUMIFS for a sales report",
    "Write a DAX measure for year-over-year sales in Power BI",
    "Write a Python script that runs an A/B test with a t-test and prints the p-value",
    ["Find the second highest salary","https://leetcode.com/problems/second-highest-salary/"]
  ],
  "tasks":[
    "Build a sales dashboard in Power BI or Tableau with filters and KPIs",
    "Answer a business question from a raw dataset and present it in five slides",
    "Clean a messy real dataset and write down every change you made",
    "Find why sales dropped last month using data and explain it simply",
    "Design KPIs for a food delivery app",
    "Check a dashboard's numbers against the source data and fix mismatches",
    "Explain correlation vs causation with a real example from your data",
    "Plan an A/B test: goal, metric, sample size and how long to run it",
    "Build an automated report that refreshes every day",
    "Present a finding to a manager in two minutes"
  ],
  "topics":{
    "Cells, ranges and references":[
      "Relative vs absolute ($A$1) references: when do you need each?",
      "What is a named range?"
    ],
    "Core formulas":[
      "Write SUMIFS and COUNTIFS for sales by region and month.",
      "IF vs IFS vs nested IF."
    ],
    "Lookups":[
      "VLOOKUP vs XLOOKUP vs INDEX-MATCH.",
      "Why does VLOOKUP return #N/A, and how do you fix it?"
    ],
    "Cleaning data":[
      "How do you remove duplicates and extra spaces in Excel?",
      "Split full names into first and last names."
    ],
    "Pivot tables":[
      "Build a pivot table of sales by region and product.",
      "Why must source data be a clean table first?"
    ],
    "Charts in Excel":[
      "Which chart do you use for trend, comparison and share?",
      "Why avoid 3D and pie charts with many slices?"
    ],
    "Conditional formatting":[
      "Highlight values above the average.",
      "Use colour scales for a heat map."
    ],
    "Mean, median, mode":[
      "When is the median better than the mean?",
      "Salaries: 20k, 22k, 25k, 30k, 2 lakh. Which average would you report?"
    ],
    "Spread":[
      "What do range, variance and standard deviation tell you?",
      "Why can two datasets with the same mean be very different?"
    ],
    "Percentiles and outliers":[
      "How does the IQR rule find outliers?",
      "Should you always remove outliers?"
    ],
    "Distributions":[
      "What is a normal distribution? Name a real skewed distribution.",
      "What does the 68-95-99.7 rule say?"
    ],
    "Correlation vs causation":[
      "Ice-cream sales and drownings rise together. Why?",
      "What is a confounding variable?"
    ],
    "Sampling and bias":[
      "What is selection bias? Give an example from a survey.",
      "Random vs stratified sampling."
    ],
    "Hypothesis tests and A/B tests":[
      "What are the null hypothesis and the p-value?",
      "How long should an A/B test run?"
    ],
    "Databases and tables":[
      ["Combine two tables","https://leetcode.com/problems/combine-two-tables/"],
      "What is a primary key?"
    ],
    "SELECT, WHERE, ORDER BY":[
      ["Big countries","https://leetcode.com/problems/big-countries/"],
      ["Find customer referee","https://leetcode.com/problems/find-customer-referee/"]
    ],
    "Aggregates and GROUP BY":[
      ["Classes with at least 5 students","https://leetcode.com/problems/classes-with-at-least-5-students/"],
      ["Average selling price","https://leetcode.com/problems/average-selling-price/"]
    ],
    "JOINs":[
      ["Customers who never order","https://leetcode.com/problems/customers-who-never-order/"],
      ["Employees earning more than their managers","https://leetcode.com/problems/employees-earning-more-than-their-managers/"]
    ],
    "Subqueries and CTEs":[
      ["Department highest salary","https://leetcode.com/problems/department-highest-salary/"],
      "Rewrite a subquery as a CTE."
    ],
    "Window functions":[
      ["Rank scores","https://leetcode.com/problems/rank-scores/"],
      ["Department top three salaries","https://leetcode.com/problems/department-top-three-salaries/"]
    ],
    "Practice on a real database":[
      ["Monthly transactions","https://leetcode.com/problems/monthly-transactions-i/"],
      ["Immediate food delivery II","https://leetcode.com/problems/immediate-food-delivery-ii/"]
    ],
    "Variables, loops, functions":[
      "Write a function that returns the average of a list without libraries.",
      ["FizzBuzz","https://leetcode.com/problems/fizz-buzz/"]
    ],
    "Lists and dictionaries":[
      ["Count word frequency in a sentence","https://exercism.org/tracks/python/exercises/word-count"],
      ["Two sum","https://leetcode.com/problems/two-sum/"]
    ],
    "Jupyter and Colab":[
      "How do you upload a CSV to Colab and read it?",
      "Why restart and run all before sharing a notebook?"
    ],
    "Loading data":[
      ["Create a DataFrame","https://leetcode.com/problems/create-a-dataframe-from-list/"],
      ["Get the size of a DataFrame","https://leetcode.com/problems/get-the-size-of-a-dataframe/"],
      ["Display the first three rows","https://leetcode.com/problems/display-the-first-three-rows/"]
    ],
    "Filtering and sorting":[
      ["Select data","https://leetcode.com/problems/select-data/"],
      ["Create a new column","https://leetcode.com/problems/create-a-new-column/"]
    ],
    "groupby and pivot":[
      ["Reshape data: pivot","https://leetcode.com/problems/reshape-data-pivot/"],
      ["Reshape data: melt","https://leetcode.com/problems/reshape-data-melt/"]
    ],
    "Merging tables":[
      ["Reshape data: concatenate","https://leetcode.com/problems/reshape-data-concatenate/"],
      "merge vs join vs concat in pandas."
    ],
    "Cleaning in pandas":[
      ["Drop duplicate rows","https://leetcode.com/problems/drop-duplicate-rows/"],
      ["Drop missing data","https://leetcode.com/problems/drop-missing-data/"],
      ["Change data type","https://leetcode.com/problems/change-data-type/"]
    ],
    "Charts with matplotlib and seaborn":[
      "Plot monthly sales as a line chart and a bar chart: which is clearer?",
      "When do you use a box plot?"
    ],
    "Power BI or Looker Studio basics":[
      "Build a dashboard with three KPIs and one trend chart.",
      "Power BI vs Looker Studio."
    ],
    "Data modelling":[
      "What is a star schema? Fact vs dimension tables.",
      "Why do relationships direction and cardinality matter?"
    ],
    "DAX basics":[
      "Calculated column vs measure.",
      "Write a DAX measure for year-on-year growth."
    ],
    "Dashboard design":[
      "What goes at the top-left of a dashboard?",
      "How many charts are too many?"
    ],
    "Data storytelling":[
      "Turn three charts into a story: context, insight, action.",
      "How do you write a chart title that states the insight?"
    ],
    "Presenting to non-technical people":[
      "How do you explain a p-value to a manager?",
      "How do you present bad news in data?"
    ],
    "Getting data from APIs and the web":[
      "Call a public API with Python and load the result into pandas.",
      "What should you check before scraping a site?"
    ],
    "Automating reports":[
      "Schedule a weekly report email with Python.",
      "How do you make a report refresh automatically in Power BI?"
    ],
    "Forecasting basics":[
      "What are trend and seasonality?",
      "What is a moving-average forecast?"
    ],
    "Regression for analysts":[
      "What does a regression coefficient mean?",
      "What is R-squared, and why is a high one not always good?"
    ],
    "Git and GitHub portfolio":[
      "Which three projects should a data analyst portfolio show?",
      "What should each project README include?"
    ],
    "Interview preparation":[
      "How do you answer \"Walk me through a project\"?",
      ["Practise one SQL and one case question each day","https://datalemur.com/sql-interview-questions"]
    ]
  }
},
"cloud":{
  "full":[
    "What is cloud computing?",
    "IaaS vs PaaS vs SaaS.",
    "Region vs availability zone.",
    "What is the shared responsibility model?",
    "What is IAM? Explain least privilege.",
    "EC2 vs Lambda.",
    "What is S3? How do you secure a bucket?",
    "What is a VPC? Public vs private subnet.",
    "Security group vs NACL.",
    "What is auto scaling?",
    "What is a load balancer?",
    "RDS vs DynamoDB.",
    "What is serverless?",
    "What are RTO and RPO?",
    "How do you control cloud cost?",
    "What is infrastructure as code?",
    "What is high availability?",
    "Compare AWS, Azure and Google Cloud.",
    "Which certification did you take and why?",
    "Explain a project you deployed."
  ],
  "prog":[
    "Write AWS CLI commands to create an S3 bucket, upload a file and block public access",
    "Write an IAM policy that allows read-only access to one bucket",
    "Write a Lambda function that resizes an image when it is uploaded to S3",
    "Write a Terraform file for a VPC with public and private subnets",
    "Write a CloudFormation or Terraform template for a web server behind a load balancer",
    "Write a script that lists all running instances and their monthly cost tags",
    "Write a script that stops dev servers every night to save money",
    "Write a GitHub Actions workflow that deploys a static site to S3 or Azure Storage"
  ],
  "tasks":[
    "Design a highly available web app across two availability zones",
    "Design a backup and disaster recovery plan with RPO and RTO",
    "Find why an instance cannot reach the internet (route table, gateway, security group)",
    "Cut a monthly cloud bill by 30 percent and list what you changed",
    "Set up billing alerts so a free-tier account never surprises you",
    "Move a small on-premises app to the cloud and explain the steps",
    "Secure an account: MFA, no root keys, least-privilege roles",
    "Set up monitoring and an alarm for high CPU",
    "Explain shared responsibility with three examples",
    "Choose between virtual machines, containers and serverless for three given apps"
  ],
  "topics":{
    "What cloud computing is":[
      "What is cloud computing? Name its five key characteristics.",
      "Cloud vs on-premises: pros and cons."
    ],
    "IaaS, PaaS and SaaS":[
      "Give an example of IaaS, PaaS and SaaS.",
      "Who manages what in each model?"
    ],
    "Regions and availability zones":[
      "Region vs availability zone vs edge location.",
      "How do you choose a region?"
    ],
    "Pricing and the free tier":[
      "How do pay-as-you-go, reserved and spot pricing differ?",
      "How do you avoid surprise bills on the free tier?"
    ],
    "Shared responsibility":[
      "What does the provider secure, and what do you secure?",
      "Who is responsible if an S3 bucket is left public?"
    ],
    "IAM: users, roles and policies":[
      "Users vs groups vs roles vs policies.",
      "Write a least-privilege policy that allows reading one S3 bucket."
    ],
    "EC2 virtual servers":[
      "Launch a web server on EC2: which steps and settings matter?",
      "What are instance types? On-demand vs spot."
    ],
    "S3 storage":[
      "How do you host a static website on S3?",
      "What are versioning and lifecycle rules?"
    ],
    "VPC networking":[
      "Design a VPC with a public and a private subnet.",
      "Security group vs NACL."
    ],
    "RDS and DynamoDB":[
      "RDS vs DynamoDB: when to use each?",
      "What are partition keys in DynamoDB?"
    ],
    "Lambda and serverless":[
      "What is serverless? What are cold starts?",
      "Build a Lambda that runs when a file is uploaded to S3."
    ],
    "Load balancing and auto scaling":[
      "ALB vs NLB.",
      "How does an auto scaling group decide to add instances?"
    ],
    "CloudWatch monitoring":[
      "Metrics vs logs vs alarms in CloudWatch.",
      "Set an alarm for high CPU."
    ],
    "Azure portal and resource groups":[
      "What is a resource group? Why does it matter for clean-up?",
      "Subscription vs resource group vs management group."
    ],
    "Azure virtual machines and storage":[
      "Create an Azure VM: which choices affect cost?",
      "Blob vs file vs disk storage."
    ],
    "Microsoft Entra ID":[
      "What is Entra ID? How is it different from on-premises Active Directory?",
      "What is conditional access?"
    ],
    "Google Cloud console and projects":[
      "What is a project in Google Cloud?",
      "How does IAM work in Google Cloud?"
    ],
    "Compute Engine and Cloud Storage":[
      "Compute Engine vs App Engine vs Cloud Run.",
      "Cloud Storage classes: Standard, Nearline, Coldline, Archive."
    ],
    "Cloud Run":[
      "What does Cloud Run run? When is it cheaper than a VM?",
      "Deploy a container to Cloud Run: steps."
    ],
    "High availability and backups":[
      "How do you design for high availability across zones?",
      "What are RTO and RPO?"
    ],
    "Cloud security basics":[
      "List five basic cloud security controls.",
      "How do you protect access keys?"
    ],
    "Cost control":[
      "How do budgets and tags help control cost?",
      "Name three ways to cut compute cost."
    ],
    "Infrastructure as code intro":[
      "Why use CloudFormation or Terraform instead of clicking in the console?",
      "What is drift?"
    ],
    "Choosing your first certificate":[
      "AWS Cloud Practitioner vs AZ-900 vs Google Cloud Digital Leader.",
      "Which certificate suits a fresher, and why?"
    ],
    "Practice exams and revision":[
      "How do you use practice exams without memorising answers?",
      "How do you revise the shared responsibility model and pricing?"
    ],
    "Cloud portfolio project":[
      "Design a small portfolio project: static site + API + database.",
      "What should the architecture diagram show?"
    ],
    "Cloud job roles and interviews":[
      "Cloud support vs cloud engineer vs DevOps engineer.",
      "How do you explain a project you deployed on the cloud?"
    ]
  }
},
"embedded":{
  "full":[
    "What is an embedded system?",
    "Microcontroller vs microprocessor.",
    "What is volatile?",
    "What is an interrupt? What is ISR latency?",
    "Polling vs interrupt.",
    "UART vs SPI vs I2C.",
    "What is CAN bus?",
    "What is PWM?",
    "What is an ADC and its resolution?",
    "What is debouncing?",
    "What is an RTOS?",
    "Mutex vs semaphore.",
    "What is priority inversion?",
    "What is a watchdog timer?",
    "What is a bootloader?",
    "Stack vs heap in embedded systems.",
    "How do you reduce power consumption?",
    "What is MQTT?",
    "How do you debug a board that does not boot?",
    "Explain your best embedded project."
  ],
  "prog":[
    "Write C code to set, clear and toggle bit n of a register",
    "Write a macro to check if bit n is set",
    ["Write a function to count set bits in a byte","https://leetcode.com/problems/number-of-1-bits/"],
    ["Write a function to reverse the bits of a 32-bit number","https://leetcode.com/problems/reverse-bits/"],
    "Write a function to swap the two nibbles of a byte",
    "Write a function to check if the machine is little-endian or big-endian",
    ["Write a circular (ring) buffer for UART data","https://exercism.org/tracks/c/exercises/circular-buffer"],
    "Write a debounce routine for a push button",
    "Write code to blink an LED using a timer interrupt instead of a delay",
    "Write an interrupt service routine that sets a flag, and use the flag in main()",
    "Write a UART driver function that sends a string",
    "Write code to read an I2C temperature sensor and convert the value",
    "Write a simple state machine for a traffic light",
    "Write a moving-average filter for ADC readings",
    "Write a function that converts an integer to a string without printf",
    "Write a CRC-8 or checksum function for a data packet"
  ],
  "tasks":[
    "Read a sensor datasheet and list the registers you need to set",
    "Debug a board where the LED does not blink: check power, clock, pins and code",
    "Use a logic analyser to decode an I2C or SPI transaction",
    "Find why a variable shared with an ISR is not updating (volatile)",
    "Reduce the power use of a battery device with sleep modes",
    "Explain the boot sequence of a microcontroller from reset to main()",
    "Port a program from Arduino to bare-metal register code",
    "Add a watchdog timer so the device recovers from a hang",
    "Design the firmware structure for a smart door lock",
    "Explain the RTOS task priorities for a given product and why"
  ],
  "topics":{
    "Voltage, current and Ohm's law":[
      "A 5 V supply drives an LED (2 V drop) at 10 mA. Calculate the series resistor.",
      "What is the difference between series and parallel circuits?"
    ],
    "Resistors, capacitors, diodes and transistors":[
      "How does a transistor work as a switch for a relay?",
      "Why is a flyback diode needed across a relay coil?"
    ],
    "Logic gates and number systems":[
      "Convert 0x3F to binary and decimal.",
      ["Build a NAND-only circuit for an AND gate","https://hdlbits.01xz.net/wiki/Andgate"]
    ],
    "Flip-flops, counters and registers":[
      "SR vs D vs JK flip-flop.",
      "What is a shift register used for?"
    ],
    "Reading a datasheet":[
      "Which datasheet values do you check first for a microcontroller pin?",
      "What is the difference between absolute maximum ratings and recommended operating conditions?"
    ],
    "Microcontroller architecture":[
      "Harvard vs von Neumann architecture.",
      "What are Flash, SRAM and EEPROM used for in a microcontroller?"
    ],
    "Embedded C essentials":[
      "Why is volatile needed for hardware registers?",
      "Set, clear and toggle bit 3 of a register using bit operations.",
      ["Reverse bits of a 32-bit number","https://leetcode.com/problems/reverse-bits/"]
    ],
    "GPIO: LEDs and buttons":[
      "What are pull-up and pull-down resistors?",
      "Why does a button need debouncing? Write a simple software debounce."
    ],
    "Timers and PWM":[
      "How do you calculate timer prescaler and period for a 1 kHz PWM?",
      "How does PWM change LED brightness or motor speed?"
    ],
    "Interrupts":[
      "Polling vs interrupts.",
      "What should an interrupt service routine avoid doing?"
    ],
    "ADC: reading analog sensors":[
      "What do ADC resolution and reference voltage mean?",
      "A 12-bit ADC with 3.3 V reference reads 2048. What is the voltage?"
    ],
    "UART serial":[
      "What are baud rate, start bit, stop bit and parity?",
      "Why does UART need both devices to agree on the baud rate?"
    ],
    "I2C":[
      "How does I2C addressing work? What are SDA and SCL?",
      "Why does I2C need pull-up resistors?"
    ],
    "SPI":[
      "SPI vs I2C vs UART: speed, wires, devices.",
      "What are SPI modes (CPOL, CPHA)?"
    ],
    "CAN bus basics":[
      "Why is CAN used in cars?",
      "What is arbitration in CAN?"
    ],
    "Debugging with a logic analyser":[
      "How do you decode an I2C transaction with a logic analyser?",
      "What does a missing ACK tell you?"
    ],
    "ARM Cortex-M and STM32 basics":[
      "What is the NVIC?",
      "What happens on reset in a Cortex-M (vector table, stack pointer)?"
    ],
    "Writing a device driver":[
      "How would you structure a driver for an I2C temperature sensor?",
      "What is a hardware abstraction layer (HAL)?"
    ],
    "RTOS tasks and scheduling":[
      "Bare-metal super-loop vs RTOS: when do you need an RTOS?",
      "What is pre-emptive priority scheduling?"
    ],
    "Queues, semaphores and mutexes":[
      "Mutex vs binary semaphore.",
      "What is priority inversion and how is it solved?"
    ],
    "Low-power design":[
      "Which sleep modes do microcontrollers offer?",
      "How do you estimate battery life for a sensor node?"
    ],
    "Bootloaders and firmware updates":[
      "What does a bootloader do?",
      "How do you make over-the-air updates safe (A/B slots, signatures)?"
    ],
    "ESP32 and Wi-Fi":[
      "Station vs access-point mode on ESP32.",
      "How do you reconnect to Wi-Fi after it drops?"
    ],
    "MQTT and HTTP":[
      "MQTT vs HTTP for IoT devices.",
      "What are topics, QoS levels and retained messages in MQTT?"
    ],
    "IoT dashboards":[
      "How would you show live sensor data on a dashboard?",
      "How often should a device send data?"
    ],
    "IoT security basics":[
      "List five IoT security mistakes (default passwords, no TLS…).",
      "How do you store Wi-Fi credentials safely on a device?"
    ],
    "Version control for firmware":[
      "What should and should not go into a firmware Git repo?",
      "How do you tag firmware releases?"
    ],
    "Testing embedded code":[
      "How do you unit test embedded C without hardware?",
      "What is hardware-in-the-loop testing?"
    ],
    "Embedded interview questions":[
      "What is the size of an int on your microcontroller, and why does it vary?",
      "Write a function to check whether a system is little-endian."
    ],
    "Embedded job roles":[
      "Firmware engineer vs embedded software vs hardware design engineer.",
      "Which projects show you are ready for an embedded job?"
    ]
  }
},
"pcb":{
  "full":[
    "What is the difference between a schematic and a layout?",
    "What are ERC and DRC?",
    "Symbol vs footprint.",
    "How do you choose track width?",
    "Why use ground planes?",
    "What are decoupling capacitors?",
    "What are vias? Types of vias.",
    "What is a stack-up?",
    "What is controlled impedance?",
    "How do you reduce EMI?",
    "What is DFM?",
    "What files go to fabrication?",
    "What is a BOM?",
    "What is thermal relief?",
    "How do you route a differential pair?",
    "What is creepage and clearance?",
    "How do you test a new board?",
    "KiCad vs Altium.",
    "How do you review someone else's PCB?",
    "Explain a board you designed."
  ],
  "prog":[
    "Write a KiCad Python script that lists every component and its footprint",
    "Write a script that turns a BOM CSV into a cost summary per part",
    "Write a script that checks the BOM for parts with no manufacturer part number",
    "Write a script that calculates trace width for a given current (IPC-2221 formula)",
    "Write a script that calculates the resistor for an LED from supply voltage and current",
    "Write a script that picks the nearest standard E24 resistor value",
    "Write a script that calculates a voltage divider's output and the power in each resistor",
    "Write a script that renames Gerber files to a fab house's required names"
  ],
  "tasks":[
    "Design a schematic for a 5 V to 3.3 V regulator with input and output capacitors",
    "Lay out a 2-layer board for a microcontroller with a USB connector",
    "Place decoupling capacitors correctly and explain why placement matters",
    "Route a USB differential pair with the right impedance",
    "Pass DRC and ERC and fix every error",
    "Create a footprint from a datasheet drawing",
    "Prepare Gerbers, drill files and a BOM for manufacturing",
    "Review a given layout and list five problems (ground, loops, heat, spacing)",
    "Plan the ground plane and power planes for a 4-layer board",
    "Bring up a new board: first power-on checks step by step"
  ],
  "topics":{
    "How a PCB is made":[
      "Walk through the PCB manufacturing steps.",
      "What are copper weight, solder mask and silkscreen?"
    ],
    "KiCad tour and project setup":[
      "What are the schematic editor, PCB editor and footprint editor in KiCad?",
      "How do you set up a new KiCad project and libraries?"
    ],
    "Symbols, footprints and libraries":[
      "Symbol vs footprint.",
      "How do you check a footprint against the datasheet?"
    ],
    "Drawing a clean schematic":[
      "What makes a schematic easy to read?",
      "When do you use net labels instead of wires?"
    ],
    "Electrical rules check":[
      "What does ERC catch?",
      "What is a \"pin not driven\" error and how do you fix it?"
    ],
    "Placing components":[
      "How do you plan component placement?",
      "Where should connectors and decoupling capacitors go?"
    ],
    "Routing tracks and track width":[
      "How do you choose track width for a given current?",
      "Why avoid 90-degree corners (and is it a myth)?"
    ],
    "Ground planes and power":[
      "Why use a solid ground plane?",
      "How do you route power for a board with analogue and digital parts?"
    ],
    "Vias and multi-layer boards":[
      "Through-hole vs blind vs buried vias.",
      "What is a 4-layer stack-up and why is it common?"
    ],
    "Design rule check":[
      "What does DRC check?",
      "Where do you get the manufacturer's design rules?"
    ],
    "Decoupling capacitors":[
      "Why place a 100 nF capacitor close to every IC power pin?",
      "Why combine 100 nF and 10 µF capacitors?"
    ],
    "Signal integrity basics":[
      "What is controlled impedance?",
      "What causes reflections on a fast signal?"
    ],
    "EMI and EMC basics":[
      "What is the difference between EMI and EMC?",
      "List three layout rules that reduce EMI."
    ],
    "Design for manufacture and assembly":[
      "What is DFM? Give three common DFM errors.",
      "How does panelisation help assembly?"
    ],
    "Gerber files and bill of materials":[
      "Which files do you send to a PCB maker?",
      "What must a BOM contain?"
    ],
    "Soldering and assembly":[
      "How do you solder an SMD resistor by hand?",
      "What causes cold solder joints?"
    ],
    "Bring-up and testing":[
      "What do you check first when a new board is powered on?",
      "How do you find a short circuit on a board?"
    ],
    "Building a PCB portfolio":[
      "Which three boards would show your PCB skills?",
      "What should each project page show?"
    ]
  }
},
"vlsi":{
  "full":[
    "What are setup and hold times?",
    "What is metastability? How is it handled?",
    "Blocking vs non-blocking assignments.",
    "Latch vs flip-flop.",
    "Moore vs Mealy FSM.",
    "What is clock gating?",
    "What is clock domain crossing?",
    "What is a synchronizer?",
    "What is synthesis?",
    "What is static timing analysis?",
    "What is slack?",
    "How do you fix setup and hold violations?",
    "What is the ASIC design flow?",
    "FPGA vs ASIC.",
    "What is UVM?",
    "What is functional coverage?",
    "What are SystemVerilog assertions?",
    "What is low-power design (clock gating, power gating)?",
    "Write a Verilog module for a 2:1 mux.",
    "Explain your best Verilog project."
  ],
  "prog":[
    ["Write Verilog for an AND gate","https://hdlbits.01xz.net/wiki/Andgate"],
    ["Write Verilog for a NOT gate","https://hdlbits.01xz.net/wiki/Notgate"],
    ["Write Verilog for a 2-to-1 multiplexer","https://hdlbits.01xz.net/wiki/Mux2to1"],
    ["Write Verilog for a half adder","https://hdlbits.01xz.net/wiki/Hadd"],
    ["Write Verilog for a full adder","https://hdlbits.01xz.net/wiki/Fadd"],
    ["Write Verilog for a D flip-flop","https://hdlbits.01xz.net/wiki/Dff"],
    ["Write Verilog for an 8-bit register","https://hdlbits.01xz.net/wiki/Dff8"],
    ["Write Verilog for a decade counter","https://hdlbits.01xz.net/wiki/Count10"],
    ["Write Verilog for a 4-bit shift register","https://hdlbits.01xz.net/wiki/Shift4"],
    ["Write Verilog for a simple finite state machine","https://hdlbits.01xz.net/wiki/Fsm1"],
    ["Write a testbench that makes a clock","https://hdlbits.01xz.net/wiki/Tb/clock"],
    ["Write a testbench that drives inputs and checks outputs","https://hdlbits.01xz.net/wiki/Tb/tb1"],
    "Write Verilog for a sequence detector (1011) as a Moore machine",
    "Write Verilog for a synchronous FIFO with full and empty flags",
    "Write Verilog for a clock divider by 3",
    "Write SystemVerilog assertions for a request-acknowledge handshake"
  ],
  "tasks":[
    ["Find why a design has unwanted latches and fix it","https://hdlbits.01xz.net/wiki/Always_nolatches"],
    "Fix a setup-time violation in a given timing report",
    "Explain blocking vs non-blocking assignments with a simulation",
    "Design safe clock-domain crossing for a single bit and for a bus",
    "Write a verification plan for a FIFO",
    "Read a synthesis report and explain area, timing and power",
    "Run a simple design through an open-source flow (OpenLane) and read the results",
    "Find a bug from a waveform in a failing simulation",
    "Explain the ASIC flow from RTL to GDSII step by step",
    "Estimate dynamic power of a block and suggest ways to reduce it"
  ],
  "topics":{
    "Combinational logic":[
      ["Build a NOT gate in Verilog","https://hdlbits.01xz.net/wiki/Notgate"],
      ["Build a NOR gate","https://hdlbits.01xz.net/wiki/Norgate"],
      "Simplify a function with a K-map and implement it."
    ],
    "Sequential logic":[
      "Latch vs flip-flop.",
      ["Build a D flip-flop","https://hdlbits.01xz.net/wiki/Dff"]
    ],
    "Finite state machines":[
      "Moore vs Mealy machines.",
      ["Design a simple FSM","https://hdlbits.01xz.net/wiki/Fsm1"]
    ],
    "Timing basics":[
      "What are setup time and hold time?",
      "What is clock skew? What is metastability?"
    ],
    "Verilog basics and data types":[
      ["wire vs reg. What does a simple wire assignment look like?","https://hdlbits.01xz.net/wiki/Wire"],
      ["Vectors in Verilog","https://hdlbits.01xz.net/wiki/Vector0"]
    ],
    "Combinational design in Verilog":[
      ["2-to-1 multiplexer","https://hdlbits.01xz.net/wiki/Mux2to1"],
      ["Half adder","https://hdlbits.01xz.net/wiki/Hadd"],
      ["Full adder","https://hdlbits.01xz.net/wiki/Fadd"]
    ],
    "Sequential design in Verilog":[
      ["8 D flip-flops","https://hdlbits.01xz.net/wiki/Dff8"],
      ["Decade counter","https://hdlbits.01xz.net/wiki/Count10"],
      "Blocking (=) vs non-blocking (\u003c=) assignments: when do you use each?"
    ],
    "FSMs in Verilog":[
      "Write an FSM with three always blocks or two: which style and why?",
      ["Design an FSM","https://hdlbits.01xz.net/wiki/Fsm2"]
    ],
    "Testbenches and simulation":[
      ["Write a clock generator in a testbench","https://hdlbits.01xz.net/wiki/Tb/clock"],
      ["Write a simple testbench","https://hdlbits.01xz.net/wiki/Tb/tb1"]
    ],
    "Writing synthesizable RTL":[
      "Which Verilog constructs cannot be synthesised?",
      ["Avoid latches in combinational always blocks","https://hdlbits.01xz.net/wiki/Always_nolatches"]
    ],
    "SystemVerilog for verification":[
      "What does SystemVerilog add for verification (classes, randomisation, interfaces)?",
      "What is constrained random testing?"
    ],
    "Assertions (SVA)":[
      "Immediate vs concurrent assertions.",
      "Write an assertion that req is followed by ack within 3 cycles."
    ],
    "Functional coverage":[
      "Code coverage vs functional coverage.",
      "What are covergroups and bins?"
    ],
    "UVM basics":[
      "Name the UVM components: driver, monitor, sequencer, agent, scoreboard.",
      "What is the UVM factory?"
    ],
    "Logic synthesis with Yosys":[
      "What does synthesis convert RTL into?",
      "How do you read a Yosys synthesis report?"
    ],
    "Static timing analysis":[
      "What is a timing path? Define slack.",
      "How do you fix a setup violation and a hold violation?"
    ],
    "Physical design flow":[
      "Name the steps from netlist to GDSII.",
      "What happens in floorplanning, placement, CTS and routing?"
    ],
    "Open-source flow with OpenLane":[
      "What does OpenLane automate?",
      "What can you build with open PDKs like SkyWater 130 nm?"
    ],
    "FPGA basics":[
      "FPGA vs ASIC.",
      "What are LUTs, flip-flops and block RAM?"
    ],
    "VLSI job roles":[
      "Front-end design vs verification vs physical design roles.",
      "Which skills does each role need?"
    ],
    "Building a VLSI GitHub portfolio":[
      "Which projects should a VLSI portfolio include?",
      "How do you show waveforms and results in a README?"
    ],
    "VLSI interview questions":[
      ["Implement a 4-bit counter with synchronous reset","https://hdlbits.01xz.net/wiki/Count15"],
      ["Design a 4-bit shift register","https://hdlbits.01xz.net/wiki/Shift4"]
    ],
    "India's semiconductor industry":[
      "Which semiconductor companies and fabs are in India?",
      "What does the India Semiconductor Mission do?"
    ]
  }
},
"powerev":{
  "full":[
    "How does a transformer work?",
    "What is slip in an induction motor?",
    "Why is power transmitted at high voltage?",
    "What is power factor? How is it improved?",
    "What is a relay? Circuit breaker vs fuse.",
    "What is MPPT?",
    "Buck vs boost converter.",
    "How does an inverter work?",
    "What is PWM?",
    "MOSFET vs IGBT.",
    "What is a BMS?",
    "State of charge vs state of health.",
    "What is regenerative braking?",
    "AC vs DC charging.",
    "What is V/f control?",
    "What is earthing?",
    "What is a load flow study?",
    "Symmetrical vs unsymmetrical faults.",
    "What is MATLAB/Simulink used for in EEE jobs?",
    "Explain an EEE project you did."
  ],
  "prog":[
    "Write a Python or MATLAB script for the state of charge of a battery using coulomb counting",
    "Write a script that calculates EV range from battery size and energy use per km",
    "Write a script for a buck converter's duty cycle, inductor and capacitor values",
    "Write a Simulink or Python model of a DC motor speed response",
    "Write a PID speed controller and tune it in a simulation",
    "Write a script that calculates power factor and the capacitor needed to correct it",
    "Write a script that calculates cable size from load current and voltage drop",
    "Write a script that estimates battery pack cells in series and parallel for a target voltage and capacity"
  ],
  "tasks":[
    "Size a battery pack for a 2-wheeler with a target range",
    "Draw a single-line diagram for a small factory supply",
    "Choose a motor and controller for a given EV and explain the choice",
    "Explain the BMS functions: balancing, protection and SOC",
    "Design the cooling needs for a battery pack at a given current",
    "Read a power quality report and list the problems",
    "Plan the charging points for an office car park",
    "Explain the faults a protection relay must detect in a feeder",
    "Do a simple energy audit of your home and suggest savings",
    "Explain regenerative braking with an energy flow diagram"
  ],
  "topics":{
    "MATLAB basics":[
      "Create a vector, plot sin(x) and label the axes in MATLAB.",
      "What is the difference between a script and a function in MATLAB?"
    ],
    "Simulink basics":[
      "Model a first-order RC circuit in Simulink.",
      "What does the solver setting change?"
    ],
    "Simscape Electrical intro":[
      "Simulink vs Simscape Electrical: when do you use each?",
      "Model a simple DC motor in Simscape."
    ],
    "Transformers":[
      "What are the losses in a transformer?",
      "Why is a transformer rated in kVA, not kW?"
    ],
    "DC machines":[
      "Why does a DC motor need a starter?",
      "How do you control the speed of a DC shunt motor?"
    ],
    "Induction motors":[
      "Why does an induction motor always run below synchronous speed (slip)?",
      "Star-delta starter: why is it used?"
    ],
    "Synchronous machines":[
      "How does a synchronous generator stay in sync with the grid?",
      "What is the effect of excitation on power factor?"
    ],
    "Generation, transmission and distribution":[
      "Why is power transmitted at high voltage?",
      "Name the main parts of a substation."
    ],
    "Load flow basics":[
      "What does a load flow study calculate?",
      "What are PQ, PV and slack buses?"
    ],
    "Faults and protection":[
      "Symmetrical vs unsymmetrical faults.",
      "What do relays and circuit breakers do?"
    ],
    "Renewable energy and solar PV":[
      "What is MPPT in a solar inverter?",
      "On-grid vs off-grid vs hybrid solar systems."
    ],
    "Power semiconductor devices":[
      "Compare diode, SCR, MOSFET and IGBT.",
      "Why are SiC MOSFETs used in EVs?"
    ],
    "Rectifiers":[
      "Half-wave vs full-wave vs bridge rectifier.",
      "What is ripple and how is it reduced?"
    ],
    "DC-DC converters":[
      "Buck vs boost vs buck-boost converter.",
      "Calculate the duty cycle of a buck converter from 12 V to 5 V."
    ],
    "Inverters and PWM":[
      "How does an inverter make AC from DC?",
      "What is sinusoidal PWM?"
    ],
    "Motor drives":[
      "What is V/f control of an induction motor?",
      "What is field-oriented control (basic idea)?"
    ],
    "EV architecture":[
      "Name the main blocks of an EV powertrain.",
      "BEV vs HEV vs PHEV."
    ],
    "Batteries and BMS":[
      "What does a battery management system do?",
      "What are state of charge and state of health?"
    ],
    "EV motors":[
      "Why do most EVs use PMSM or induction motors?",
      "What is regenerative braking?"
    ],
    "Charging and standards":[
      "AC vs DC fast charging.",
      "Which charging standards are used in India?"
    ],
    "Modelling an EV in Simulink":[
      "Which blocks do you need to model an EV's range?",
      "How do drive cycles help estimate range?"
    ],
    "Electrical safety and standards":[
      "What do IS/IEC standards cover for electrical safety?",
      "What is earthing and why is it critical?"
    ],
    "Power and EV job roles":[
      "Which jobs exist in power, EV and renewable companies?",
      "Which software skills help an EEE graduate get hired?"
    ],
    "Interview preparation for EEE":[
      "Explain how a transformer works in two minutes.",
      "What is power factor and how do you improve it?"
    ]
  }
},
"plc":{
  "full":[
    "What is a PLC? PLC vs relay logic.",
    "Explain the PLC scan cycle.",
    "What are TON and TOF timers?",
    "Write a start-stop circuit.",
    "NPN vs PNP sensors.",
    "What is a VFD?",
    "DOL vs star-delta starter.",
    "What is PID control?",
    "How do you scale an analog input?",
    "What is SCADA? What is an HMI?",
    "What is Modbus?",
    "What is OPC UA?",
    "What are interlocks?",
    "How do you troubleshoot a PLC system?",
    "What is a safety PLC?",
    "What is Industry 4.0?",
    "What is IIoT?",
    "How do you back up a PLC program?",
    "Which PLC brands have you used?",
    "Explain your best automation project."
  ],
  "prog":[
    "Write ladder logic for start-stop motor control with a seal-in contact",
    "Write ladder logic for forward-reverse motor control with interlocks",
    "Write ladder logic for a star-delta starter with a timer",
    "Write ladder logic for a traffic light sequence using timers",
    "Write ladder logic for a conveyor that counts boxes and stops at 10",
    "Write ladder logic for a tank that fills and empties using level switches",
    "Write a structured text (ST) program for a PID loop on a tank level",
    "Write a structured text function block for a motor with start, stop and fault",
    "Write logic for an alarm that latches until the operator resets it",
    "Write a sequence for a bottle filling machine using a state machine"
  ],
  "tasks":[
    "Read a P&ID and list the inputs and outputs for the PLC",
    "Make an I/O list and allocate addresses for a small machine",
    "Find why a motor does not start using the PLC online view",
    "Design a simple HMI screen with start, stop, status and alarms",
    "Commission a small system: check wiring, test I/O, then run the program",
    "Explain the scan cycle and why an output can change only once per scan",
    "Add a safety stop circuit that does not depend on the PLC program",
    "Back up a PLC program and document the changes you made",
    "Connect a PLC to SCADA and show live values",
    "Tune a PID loop on a simulator and explain each change"
  ],
  "topics":{
    "What industrial automation is":[
      "What are the levels of the automation pyramid (field, control, supervisory, enterprise)?",
      "Give three examples of automation in an Indian factory."
    ],
    "Sensors and transducers":[
      "Inductive vs capacitive vs photoelectric proximity sensors.",
      "NPN vs PNP sensor outputs: how do you wire each to a PLC input?"
    ],
    "Actuators, relays and contactors":[
      "Relay vs contactor.",
      "What does a solenoid valve do in a pneumatic system?"
    ],
    "Motor starters and VFDs":[
      "DOL vs star-delta vs soft starter.",
      "How does a VFD control motor speed? What parameters do you set first?"
    ],
    "PLC hardware and scan cycle":[
      "Explain the PLC scan cycle: read inputs, execute, write outputs.",
      "What happens if the scan time becomes too long?"
    ],
    "Ladder logic basics":[
      "Write a start-stop (seal-in) motor circuit in ladder logic.",
      "Why should the stop button be wired normally closed?"
    ],
    "Timers and counters":[
      "TON vs TOF vs RTO timers.",
      "Count bottles on a conveyor and stop after 12."
    ],
    "Function blocks and structured text":[
      "Ladder vs function block diagram vs structured text: when do you use each?",
      "Write a structured text IF statement for a tank level alarm."
    ],
    "Analog signals and PID":[
      "How do you scale a 4–20 mA signal to 0–100 °C?",
      "What do P, I and D do in a PID loop?"
    ],
    "Sequencing a machine":[
      "Write the sequence for a traffic light using timers.",
      "How do you design a safe sequence with interlocks?"
    ],
    "HMI screens":[
      "What makes an HMI screen easy for operators?",
      "How should alarms be shown on an HMI?"
    ],
    "SCADA systems":[
      "SCADA vs DCS vs PLC.",
      "What are tags, trends and alarm logs in SCADA?"
    ],
    "Industrial networks":[
      "Modbus RTU vs Modbus TCP vs Profinet vs EtherNet/IP.",
      "What is OPC UA used for?"
    ],
    "Industrial cybersecurity basics":[
      "Why are old PLC networks easy to attack?",
      "What does network segmentation mean in a plant?"
    ],
    "Reading electrical drawings":[
      "How do you read a control panel wiring diagram?",
      "What do cross-references in drawings tell you?"
    ],
    "Commissioning and troubleshooting":[
      "What checks do you do before powering a new panel?",
      "A motor does not start. How do you troubleshoot step by step?"
    ],
    "Industry 4.0 and IIoT":[
      "What is Industry 4.0? Give two IIoT examples.",
      "What is predictive maintenance?"
    ],
    "Automation job roles and interviews":[
      "Which roles exist in automation (PLC programmer, commissioning engineer, SCADA engineer)?",
      "How do you explain a PLC project in an interview?"
    ]
  }
},
"cad":{
  "full":[
    "First-angle vs third-angle projection.",
    "What is a fully defined sketch?",
    "Explain fits: clearance, transition, interference.",
    "What does H7/g6 mean?",
    "What is GD&T? Why use it?",
    "What is a datum?",
    "Flatness vs parallelism.",
    "What is true position? What is MMC?",
    "What is the K-factor in sheet metal?",
    "Bottom-up vs top-down assembly.",
    "How do you check interference?",
    "What should a production drawing include?",
    "What is a BOM?",
    "Solid vs surface modelling.",
    "Which CAD software do you know?",
    "How do you choose a material?",
    "What is design for manufacture?",
    "What is tolerance stack-up?",
    "How do you dimension a hole pattern?",
    "Explain your best CAD project."
  ],
  "prog":[
    "Write a FreeCAD Python macro that creates a box with a hole",
    "Write a FreeCAD macro that makes a plate with a pattern of holes from a table of values",
    "Write a SolidWorks or Fusion 360 parametric model driven by equations (design table)",
    "Write an AutoCAD AutoLISP routine that draws a rectangle from two points",
    "Write an AutoLISP routine that counts blocks by name in a drawing",
    "Write a script that exports every part in a folder to STEP",
    "Write a script that reads a BOM from a drawing and saves it to Excel",
    "Write a Python script that calculates a shaft diameter from torque and allowable stress"
  ],
  "tasks":[
    "Model a given part from a 2D drawing in under 30 minutes",
    "Make a full production drawing with views, dimensions, tolerances and title block",
    "Apply GD&T to a part and explain each symbol you used",
    "Build an assembly with mates and check it for interference",
    "Design a sheet-metal bracket and make its flat pattern",
    "Do a tolerance stack-up for three parts in an assembly",
    "Redesign a part to make it cheaper to machine",
    "Read a drawing and list five things a machinist would ask about",
    "Make an exploded view with balloons and a BOM",
    "Explain the design intent of a model and change it without breaking features"
  ],
  "topics":{
    "Lines, scales and title blocks":[
      "What do the line types mean: continuous thick, hidden, centre line?",
      "What goes into a title block?"
    ],
    "Orthographic projection":[
      "First-angle vs third-angle projection. Which does India use?",
      "Draw the three views of a simple stepped block."
    ],
    "Sections and auxiliary views":[
      "When do you use a full section, a half section and a broken-out section?",
      "What is an auxiliary view for?"
    ],
    "Dimensioning rules":[
      "List five dimensioning rules (no duplicates, from datums…).",
      "Chain vs baseline dimensioning."
    ],
    "Fits and tolerances":[
      "Clearance vs transition vs interference fit.",
      "What does H7/g6 mean?"
    ],
    "Sketching and constraints":[
      "What does \"fully defined sketch\" mean and why does it matter?",
      "Which constraints do you add first?"
    ],
    "Extrude, revolve and cut":[
      "Model a flanged shaft using revolve.",
      "Model a part using an extrude with draft and a sweep along a path."
    ],
    "Fillets, shells, ribs and patterns":[
      "When do you add fillets: early or late? Why?",
      "Model a hollow plastic box with ribs and a shell."
    ],
    "Sheet metal design":[
      "What is the K-factor? Why does bend allowance matter?",
      "Design a simple L-bracket in sheet metal."
    ],
    "Surface modelling basics":[
      "Solid vs surface modelling: when do you need surfaces?",
      "What is curvature continuity (G1, G2)?"
    ],
    "Assembly constraints and joints":[
      "Which mates/constraints fully fix a part?",
      "Bottom-up vs top-down assembly."
    ],
    "Interference and motion checks":[
      "How do you check interference in an assembly?",
      "How do you animate a mechanism to check motion?"
    ],
    "Exploded views and BOM":[
      "Create an exploded view and a BOM for a vice assembly.",
      "What should a BOM column list contain?"
    ],
    "Production drawings from 3D":[
      "What makes a drawing manufacturable?",
      "How do you show threads and surface finish on a drawing?"
    ],
    "Why GD&T":[
      "Why is GD&T better than plus-minus tolerancing?",
      "What does \"function, manufacture, inspection\" mean for GD&T?"
    ],
    "Datums and the feature control frame":[
      "What is a datum? Why are datum orders A, B, C important?",
      "Read a feature control frame from left to right."
    ],
    "Form and orientation":[
      "Flatness vs parallelism.",
      "Does perpendicularity need a datum?"
    ],
    "Position and profile":[
      "What is true position? What does MMC add?",
      "Profile of a surface vs profile of a line."
    ],
    "Design portfolio":[
      "Which three models best show your design skills?",
      "How do you present a design project (problem, sketches, model, drawing)?"
    ],
    "Mechanical design interview questions":[
      "Which material would you choose for a bracket and why?",
      "Explain a design you improved: what changed and why."
    ]
  }
},
"cae":{
  "full":[
    "What is FEA?",
    "What is a mesh convergence study?",
    "Explain boundary conditions.",
    "What is a stress singularity?",
    "Von Mises stress vs principal stress.",
    "What is modal analysis?",
    "Linear vs non-linear analysis.",
    "What are contact types?",
    "What is a factor of safety?",
    "How do you validate FEA results?",
    "What is CFD?",
    "What is y+?",
    "Which turbulence model would you use and why?",
    "Laminar vs turbulent flow.",
    "What is topology optimisation?",
    "What is design of experiments?",
    "Which CAE software have you used?",
    "How do you reduce solve time?",
    "What is buckling analysis?",
    "Explain your best CAE project."
  ],
  "prog":[
    "Write a Python script for the bending stress and deflection of a cantilever beam",
    "Write a simple 1D bar finite element program (stiffness matrix, solve, stresses)",
    "Write an ANSYS APDL or Abaqus Python script that builds a plate and applies a load",
    "Write a script that runs a mesh convergence study and plots the result",
    "Write a script that reads a results file and finds the maximum von Mises stress",
    "Write a script for the natural frequency of a spring-mass system",
    "Write a script for 1D heat conduction through a wall",
    "Write a script that calculates the safety factor from stress results and material yield"
  ],
  "tasks":[
    "Run a static analysis of a bracket and explain the stress plot",
    "Do a mesh convergence study and say when the mesh is fine enough",
    "Choose the right boundary conditions for a given part and explain why",
    "Check FEA results against a hand calculation",
    "Run a modal analysis and find the first three natural frequencies",
    "Find why a simulation will not converge and fix it",
    "Run a thermal analysis of a heat sink",
    "Make a short FEA report with setup, results and conclusions",
    "Explain why stress at a sharp corner keeps rising when the mesh is refined",
    "Suggest design changes to lower the maximum stress by 20 percent"
  ],
  "topics":{
    "Stress, strain and material properties":[
      "What are Young's modulus, yield strength and ultimate strength?",
      "Ductile vs brittle materials."
    ],
    "Beams, shafts and columns":[
      "Draw the shear force and bending moment diagrams for a simply supported beam with a point load.",
      "What is buckling? What does Euler's formula give?"
    ],
    "Failure theories":[
      "Von Mises vs maximum shear stress (Tresca) theory.",
      "Which theory suits ductile materials?"
    ],
    "Heat transfer and fluid basics":[
      "Conduction vs convection vs radiation.",
      "What is the Reynolds number and what does it tell you?"
    ],
    "How FEA works":[
      "Explain FEA in simple words: elements, nodes, stiffness matrix.",
      "What are the main sources of FEA error?"
    ],
    "Meshing and mesh quality":[
      "What is a mesh convergence study?",
      "Which mesh quality checks matter (aspect ratio, skewness)?"
    ],
    "Loads, supports and contacts":[
      "Why do wrong boundary conditions ruin results?",
      "Bonded vs frictional contact."
    ],
    "Static structural analysis":[
      "Set up a static analysis of a bracket. What do you check in the result?",
      "What is a stress singularity?"
    ],
    "Modal and vibration analysis":[
      "What does modal analysis give you?",
      "Why should a natural frequency not match the operating frequency?"
    ],
    "Thermal analysis":[
      "Steady-state vs transient thermal analysis.",
      "How do you couple thermal and structural analysis?"
    ],
    "Checking FEA results":[
      "How do you check FEA results by hand calculation?",
      "What is a factor of safety?"
    ],
    "How CFD works":[
      "What equations does CFD solve (simple idea)?",
      "Steps of a CFD study: geometry, mesh, setup, solve, post-process."
    ],
    "Geometry and mesh for CFD":[
      "Why simplify geometry before meshing?",
      "What is an inflation layer and y+?"
    ],
    "Turbulence models":[
      "k-epsilon vs k-omega SST: when to use each?",
      "Laminar vs turbulent flow."
    ],
    "Internal and external flow":[
      "Give examples of internal and external flow problems.",
      "How big must the domain be for external flow?"
    ],
    "Heat transfer with flow":[
      "Model cooling of a heat sink: which settings matter?",
      "What is a conjugate heat transfer study?"
    ],
    "Parametric studies":[
      "What is a parametric study? Give an example.",
      "How do you choose parameters and ranges?"
    ],
    "Topology optimisation":[
      "What does topology optimisation do?",
      "Why must optimised shapes be redesigned for manufacturing?"
    ],
    "Design of experiments":[
      "What is design of experiments?",
      "Full factorial vs fractional factorial."
    ],
    "CAE reports and portfolio":[
      "What must a CAE report include?",
      "How do you show validation in your portfolio?"
    ],
    "CAE interview questions":[
      "How do you know your mesh is fine enough?",
      "Explain a simulation you ran and how you checked it."
    ]
  }
},
"mfg":{
  "full":[
    "Casting vs forging.",
    "Explain turning, milling and drilling.",
    "What are cutting speed, feed and depth of cut?",
    "MIG vs TIG welding.",
    "What is injection moulding?",
    "What is CNC? G-code vs M-code.",
    "Climb vs conventional milling.",
    "What is CAM?",
    "FDM vs SLA vs SLS.",
    "What is GD&T used for on the shop floor?",
    "What is SPC? What is Cpk?",
    "Explain 5S.",
    "What is kaizen?",
    "What is Six Sigma? DMAIC.",
    "What is root cause analysis?",
    "What is OEE?",
    "What is a PPAP?",
    "What is FMEA?",
    "What is just-in-time?",
    "Explain a process improvement you made."
  ],
  "prog":[
    "Write G-code to face a block and drill four holes",
    "Write G-code for a pocket with a roughing and a finishing pass",
    "Write G-code for a turned part with a facing and turning pass",
    "Write a script that calculates spindle speed and feed from cutting speed and tool diameter",
    "Write a script that calculates machining time for a given operation",
    "Write a script that calculates OEE from availability, performance and quality",
    "Write a script that makes an X-bar and R control chart from measurements",
    "Write a script that calculates Cp and Cpk from sample data"
  ],
  "tasks":[
    "Make a process plan for a given part: operations, machines, tools and fixtures",
    "Choose the manufacturing process for five given parts and explain why",
    "Do a 5-Why analysis for a recurring defect",
    "Make a fishbone diagram for a quality problem",
    "Do a PFMEA for one process step",
    "Design a simple fixture for drilling a part",
    "Find waste on a shop floor using the 7 wastes of lean",
    "Plan a 5S rollout for one work area",
    "Read a CNC program and find the mistake that would crash the tool",
    "Estimate the cost of making 1,000 parts"
  ],
  "topics":{
    "Casting, forging and forming":[
      "Casting vs forging: strength and cost.",
      "What are common casting defects?"
    ],
    "Machining: turning, milling, drilling":[
      "Which operations are done on a lathe vs a milling machine?",
      "How do cutting speed, feed and depth of cut affect finish and tool life?"
    ],
    "Welding and joining":[
      "MIG vs TIG vs arc welding.",
      "What are common welding defects?"
    ],
    "Plastics: moulding and extrusion":[
      "Injection moulding vs extrusion.",
      "What is draft angle and why is it needed?"
    ],
    "How a CNC machine works":[
      "What are the axes of a 3-axis and a 5-axis machine?",
      "What is work offset and tool offset?"
    ],
    "G-code and M-code":[
      "What do G00, G01, G02, G03 and M03 do?",
      "Write G-code to mill a 50 × 50 mm square pocket outline."
    ],
    "CAM toolpaths":[
      "Roughing vs finishing toolpaths.",
      "What are climb milling and conventional milling?"
    ],
    "Simulation before cutting":[
      "Why simulate a CAM program before running it?",
      "What crashes can simulation catch?"
    ],
    "3D printing technologies":[
      "FDM vs SLA vs SLS.",
      "Which 3D printing process suits a functional nylon part?"
    ],
    "Design for 3D printing":[
      "Why avoid overhangs above 45°?",
      "How does wall thickness affect strength?"
    ],
    "Slicing and print settings":[
      "What do layer height, infill and supports change?",
      "Why do prints warp, and how do you prevent it?"
    ],
    "Measurement and metrology":[
      "Vernier vs micrometer vs CMM.",
      "What is least count?"
    ],
    "Statistical process control":[
      "What is a control chart? What are UCL and LCL?",
      "What do Cp and Cpk measure?"
    ],
    "Lean tools: 5S, kaizen and value stream":[
      "Explain the 5S steps.",
      "What are the 7 wastes (muda)?"
    ],
    "Six Sigma and root cause analysis":[
      "What does DMAIC stand for?",
      "Use a fishbone diagram and 5 Whys on a defect."
    ],
    "Manufacturing interview questions":[
      "How would you reduce cycle time on a line?",
      "What is OEE and how is it calculated?"
    ]
  }
},
"civilcad":{
  "full":[
    "Plan vs elevation vs section.",
    "What are setbacks and FSI?",
    "Model space vs paper space.",
    "Why use layers and blocks?",
    "How do you plot to scale?",
    "What is a bar bending schedule?",
    "How do you calculate steel weight?",
    "What is rate analysis?",
    "What is a BOQ?",
    "Long wall–short wall vs centre line method.",
    "How do you estimate brickwork?",
    "What is curing and why is it important?",
    "What is the slump test?",
    "What is the mix ratio of M20?",
    "What is a measurement book?",
    "What is a running account bill?",
    "How do you check formwork before concreting?",
    "What are the duties of a site engineer?",
    "How do you handle a delay on site?",
    "Explain a drawing or estimate you prepared."
  ],
  "prog":[
    "Write an AutoLISP routine that draws a grid of columns from spacing values",
    "Write an AutoLISP routine that labels room areas in a plan",
    "Write a Dynamo script that places columns at grid intersections",
    "Write a Python script that calculates the quantity of concrete for footings from a table",
    "Write a script that calculates brick count and mortar for a wall",
    "Write a script that calculates cut and fill volume from level data",
    "Write a script that exports layer names and object counts from a drawing",
    "Write a script that calculates the area of an irregular plot from coordinates (shoelace formula)"
  ],
  "tasks":[
    "Draw a residential floor plan to building rules with dimensions",
    "Draw a site plan with setbacks, levels and drainage",
    "Draw a section and an elevation from a plan",
    "Prepare a working drawing set with title blocks and layers",
    "Draw a road plan and profile with levels",
    "Make a bar bending schedule for a beam",
    "Read a structural drawing and list the reinforcement for a column",
    "Set up layers, text styles and plot styles as a template",
    "Check a drawing for errors before it goes to site",
    "Prepare a rough estimate for a small house from its drawings"
  ],
  "topics":{
    "Plan, elevation and section":[
      "Plan vs elevation vs section: what does each show?",
      "Where do you cut a section through a house?"
    ],
    "Symbols and conventions":[
      "What do the symbols for doors, windows and stairs look like?",
      "Which line types show walls, hidden lines and centre lines?"
    ],
    "Building bye-laws basics":[
      "What are setbacks, FAR/FSI and ground coverage?",
      "Why must drawings follow local bye-laws?"
    ],
    "Reading structural drawings":[
      "How do you read beam and column schedules?",
      "What do bar marks in a drawing mean?"
    ],
    "AutoCAD interface and drawing tools":[
      "Which commands do you use most: LINE, PLINE, OFFSET, TRIM?",
      "What is the difference between model space and paper space?"
    ],
    "Editing and layers":[
      "Why use layers? Name a layer standard for a house plan.",
      "How do you change many objects' properties at once?"
    ],
    "Blocks, hatches and text":[
      "Why use blocks for doors and windows?",
      "How do you hatch a section correctly?"
    ],
    "Dimensioning and annotation":[
      "How do you set dimension styles for plotting at 1:100?",
      "What is annotative scaling?"
    ],
    "Layouts, plotting and PDF":[
      "How do you plot a drawing to PDF at the correct scale?",
      "What is a plot style (CTB)?"
    ],
    "Drawing a full house plan":[
      "Draw a 2BHK plan on a 30 × 40 site: list your steps.",
      "How do you check a plan for errors before sharing?"
    ],
    "Methods of estimation":[
      "Long wall–short wall vs centre line method.",
      "What is a preliminary estimate?"
    ],
    "Quantity of earthwork, concrete and masonry":[
      "Calculate the earthwork for a footing trench.",
      "Calculate brickwork quantity for a wall with openings."
    ],
    "Steel quantity and bar bending schedule":[
      "What is a bar bending schedule?",
      "Calculate the weight of 10 m of 12 mm bar (D²/162)."
    ],
    "Rate analysis":[
      "What goes into rate analysis (material, labour, overheads, profit)?",
      "Find the rate per m³ of M20 concrete from given costs."
    ],
    "Preparing an estimate and BOQ":[
      "What is a bill of quantities?",
      "How do you prepare an abstract of cost?"
    ],
    "Measurement book and billing":[
      "What is a measurement book?",
      "How are running account bills prepared?"
    ],
    "Site engineer job roles and interviews":[
      "What does a site engineer do daily?",
      "How do you check concrete quality on site?"
    ]
  }
},
"structural":{
  "full":[
    "Dead load vs live load.",
    "Limit state vs working stress method.",
    "What is development length?",
    "One-way vs two-way slab.",
    "Short vs long column.",
    "What is punching shear?",
    "What is the minimum cover for beams and slabs?",
    "Singly vs doubly reinforced beam.",
    "What is a bar bending schedule?",
    "What is a load combination?",
    "What does IS 1893 cover?",
    "What is a soft storey?",
    "What is ductile detailing (IS 13920)?",
    "What is safe bearing capacity?",
    "Isolated vs combined vs raft footing.",
    "How do you check STAAD/ETABS results?",
    "What is a moment of inertia used for in beams?",
    "What is shear force and bending moment?",
    "What is the grade of concrete used in residential buildings?",
    "Explain a structure you designed."
  ],
  "prog":[
    "Write a Python script for the shear force and bending moment of a simply supported beam",
    "Write a script that designs a singly reinforced beam section (IS 456)",
    "Write a script that designs an isolated footing for a given load and soil capacity",
    "Write a script that calculates the load on a column from slab areas",
    "Write a script for the deflection of a beam and check it against limits",
    "Write a matrix stiffness program for a 2D truss",
    "Write a script that calculates the effective length and slenderness of a column",
    "Write a script that calculates seismic base shear (IS 1893) for a small building"
  ],
  "tasks":[
    "Do a load calculation for a two-storey house: dead, live and wind loads",
    "Model a building frame in STAAD.Pro or ETABS and check the results",
    "Design a slab, beam, column and footing for a small building by hand",
    "Check a given design against IS 456 and list the problems",
    "Compare a hand calculation with software results and explain the difference",
    "Prepare a design report with assumptions, loads and results",
    "Check a structure for earthquake loads at a basic level",
    "Read a soil report and choose the type of foundation",
    "Detail the reinforcement of a beam-column joint",
    "Explain why a given crack appeared in a beam and how to repair it"
  ],
  "topics":{
    "Loads on buildings":[
      "Dead, live, wind and seismic loads: which IS codes cover them?",
      "How is live load on a residential floor taken?"
    ],
    "Beams: shear force and bending moment":[
      "Draw SFD and BMD for a cantilever with a uniform load.",
      "Where is the bending moment maximum in a simply supported beam with a UDL?"
    ],
    "Trusses and frames":[
      "Method of joints vs method of sections.",
      "Why are truss members assumed pin-jointed?"
    ],
    "Indeterminate structures":[
      "What is static indeterminacy? How do you find its degree?",
      "Name two methods for analysing indeterminate beams."
    ],
    "Influence lines":[
      "What does an influence line show?",
      "Where do you place a moving load for maximum moment?"
    ],
    "Limit state method":[
      "Limit state vs working stress method.",
      "What are partial safety factors for loads and materials?"
    ],
    "Design of beams":[
      "Singly vs doubly reinforced beam: when do you need compression steel?",
      "What is the minimum and maximum steel in a beam?"
    ],
    "Design of slabs":[
      "One-way vs two-way slab.",
      "How do you check deflection of a slab?"
    ],
    "Design of columns":[
      "Short vs long column.",
      "Why is minimum eccentricity considered?"
    ],
    "Design of footings":[
      "Isolated vs combined footing.",
      "How do you check one-way and punching shear?"
    ],
    "Detailing reinforcement":[
      "What is development length?",
      "What are cover requirements for different members?"
    ],
    "Modelling a building frame":[
      "How do you model a G+3 frame in STAAD or ETABS?",
      "What supports would you assign at the base?"
    ],
    "Assigning loads and load combinations":[
      "Which load combinations does IS 456 require?",
      "How do you apply floor loads?"
    ],
    "Running analysis and reading results":[
      "How do you check if analysis results are sensible?",
      "What do you look for in the bending moment diagrams?"
    ],
    "Design and detailing from software":[
      "Why must software design results be checked by hand?",
      "How do you export design results to drawings?"
    ],
    "Earthquake-resistant design (IS 1893)":[
      "What are zone factor, importance factor and response reduction factor?",
      "What is a soft storey and why is it dangerous?"
    ],
    "Steel structures basics (IS 800)":[
      "Bolted vs welded connections.",
      "What is a slenderness ratio?"
    ],
    "Foundations and soil basics":[
      "What is safe bearing capacity?",
      "When do you need pile foundations?"
    ],
    "Structural design job roles and interviews":[
      "What does a junior structural engineer do?",
      "Explain how you designed a beam from loads to reinforcement."
    ]
  }
},
"bim":{
  "full":[
    "What is BIM?",
    "BIM vs CAD.",
    "What are 4D and 5D BIM?",
    "What is IFC?",
    "What is ISO 19650?",
    "System vs loadable families.",
    "How do you create schedules in Revit?",
    "What is clash detection?",
    "What is a CDE?",
    "What is LOD?",
    "What is a WBS?",
    "What is the critical path method?",
    "What is float?",
    "What is earned value?",
    "What do CPI and SPI mean?",
    "What is resource levelling?",
    "What is Primavera P6 used for?",
    "How do you update a schedule?",
    "How do you handle a delay claim?",
    "Explain a BIM or planning project you did."
  ],
  "prog":[
    "Write a Dynamo script that renumbers rooms in order",
    "Write a Dynamo script that places family instances from an Excel list",
    "Write a Dynamo script that exports door and window schedules to Excel",
    "Write a Revit API (C# or pyRevit) script that lists all walls and their lengths",
    "Write a pyRevit script that checks for rooms with no number",
    "Write a script that reads an IFC file and counts elements by type (IfcOpenShell)",
    "Write a Dynamo script that sets a parameter on many elements at once",
    "Write a script that compares two model versions and lists changed elements"
  ],
  "tasks":[
    "Build a small building model in Revit with walls, floors, doors and roof",
    "Create schedules for doors, windows and rooms",
    "Make sheets with plans, sections and a 3D view",
    "Run clash detection in Navisworks and write a clash report",
    "Write a simple BIM Execution Plan for a project",
    "Set up a project template with levels, views and shared parameters",
    "Link architecture and structure models and coordinate them",
    "Export an IFC file and check it in a free viewer",
    "Create a 4D schedule link at a basic level",
    "Explain LOD 100 to 400 with examples from a model"
  ],
  "topics":{
    "What BIM is":[
      "What is BIM? How is it different from 2D CAD?",
      "What are the benefits of BIM for owners and contractors?"
    ],
    "BIM levels and dimensions":[
      "What are BIM levels 0, 1, 2 and 3?",
      "What do 4D, 5D and 6D BIM add?"
    ],
    "BIM standards and IFC":[
      "What is ISO 19650?",
      "What is IFC and why does it matter for sharing models?"
    ],
    "Revit interface, levels and grids":[
      "Why set up levels and grids before modelling?",
      "What is the project browser?"
    ],
    "Walls, floors, roofs and stairs":[
      "How do you create a wall type with layers?",
      "How do you model a staircase between two levels?"
    ],
    "Doors, windows and families":[
      "System vs loadable vs in-place families.",
      "How do you create a simple parametric family?"
    ],
    "Structural modelling in Revit":[
      "How do you model beams, columns and foundations in Revit?",
      "What is an analytical model?"
    ],
    "Sheets, schedules and quantities":[
      "Create a door schedule and a quantity takeoff.",
      "How do you place views on sheets?"
    ],
    "Rendering and walkthroughs":[
      "How do you create a walkthrough in Revit?",
      "Which settings make a quick, clear render?"
    ],
    "MEP services basics":[
      "What do mechanical, electrical and plumbing models include?",
      "Why must MEP be coordinated with structure?"
    ],
    "Clash detection":[
      "What is clash detection? Hard vs soft clashes.",
      "How do you run a clash test in Navisworks?"
    ],
    "Common data environment":[
      "What is a common data environment (CDE)?",
      "What do work-in-progress, shared and published states mean?"
    ],
    "Work breakdown structure":[
      "Create a WBS for a G+2 residential building.",
      "Why must every WBS item be measurable?"
    ],
    "Scheduling and the critical path":[
      "What is the critical path? What is float?",
      "Calculate the critical path for a small network."
    ],
    "Gantt charts and resources":[
      "How do you show dependencies on a Gantt chart?",
      "What is resource levelling?"
    ],
    "Cost control and earned value":[
      "What are planned value, earned value and actual cost?",
      "What do CPI and SPI below 1 mean?"
    ],
    "Primavera P6 basics":[
      "How do you create activities, relationships and a baseline in P6?",
      "P6 vs MS Project."
    ],
    "Planning engineer interviews":[
      "What does a planning engineer report each week?",
      "How do you recover a project that is behind schedule?"
    ]
  }
}
};
