"use strict";(self.webpackChunkpersonal_site_2025=self.webpackChunkpersonal_site_2025||[]).push([[5905],{2452:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"cliquiz/index","title":"Exercise #1: Quiz Game","description":"1: Quiz Game","source":"@site/docs/cliquiz/index.md","sourceDirName":"cliquiz","slug":"/cliquiz/","permalink":"/personal-site-2025/docs/cliquiz/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"cliquiz"}');var n=s(4848),a=s(8453);const o={},r="Exercise #1: Quiz Game",l={},c=[{value:"Summary",id:"summary",level:2},{value:"Thoughts",id:"thoughts",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Part 1",id:"part-1",level:3},{value:"Part 2",id:"part-2",level:3},{value:"Bonus",id:"bonus",level:3},{value:"Part 1",id:"part-1-1",level:3},{value:"Part 2",id:"part-2-1",level:3},{value:"Bonus",id:"bonus-1",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"exercise-1-quiz-game",children:"Exercise #1: Quiz Game"})}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"Build a CLI Quiz app that uses flags to customize the game experience. The quiz is trivia style - the user is asked a question and provides a freeform answer."}),"\n",(0,n.jsx)(t.h2,{id:"thoughts",children:"Thoughts"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Total Time: 4 hours 14 minutes"}),"\nI thought this would be easier. I was so confident in my approach that I spent some time researching CLI formatting and ANSI colors codes. I eventually discarded that approach to better the underlying logic."]}),"\n",(0,n.jsxs)(t.p,{children:["I did learn a lot about golang, packages, and concurrency. Idiomatic go still feels a bit alien, especially with repetitive error handling. Typing ",(0,n.jsx)(t.code,{children:"if err != nil {...}"})," is annoying, but I trust its become idiomatic for a reason."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/Nostromos/qli/blob/6671cb7a4a2bda6751cd9a8775a72fa1bae309f2/quiz.go#L15-L18",children:"https://github.com/Nostromos/qli/blob/6671cb7a4a2bda6751cd9a8775a72fa1bae309f2/quiz.go#L15-L18"})}),"\n",(0,n.jsx)(t.p,{children:"I started with multiple structs and was getting really detailed with typing but ended trashing everything but one."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/Nostromos/qli/blob/6671cb7a4a2bda6751cd9a8775a72fa1bae309f2/quiz.go#L115-L135",children:"https://github.com/Nostromos/qli/blob/6671cb7a4a2bda6751cd9a8775a72fa1bae309f2/quiz.go#L115-L135"})}),"\n",(0,n.jsxs)(t.p,{children:["My initial question/answer loop wouldn't break on timer expiration. In fact it originally had elapsed time saved to a variable that updated each loop. Concurrency is a relatively new concept to me and it took at least an hour for me to realize that ",(0,n.jsx)(t.code,{children:"reader.ReadString('\\n')"})," is blocking. It took me another 30-40 mins to figure out that I could use a goroutine to handle the user input portion and a select/case to deal with breaking out of the loop. I'm not sure if this is the best way to do it."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/Nostromos/qli/blob/6671cb7a4a2bda6751cd9a8775a72fa1bae309f2/quiz.go#L130",children:"https://github.com/Nostromos/qli/blob/6671cb7a4a2bda6751cd9a8775a72fa1bae309f2/quiz.go#L130"})}),"\n",(0,n.jsx)(t.p,{children:"Golang Channels and value assignation are not intuitive to me (coming from the JS/TS world) so this syntax was confusing to learn but I can see how useful it would be."}),"\n",(0,n.jsx)(t.h2,{id:"improvements",children:"Improvements"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Remove copilot suggestions for future gophercises. Far too annoying and really hurts ability to learn patterns or reason myself."]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Add handling for different question types: multiple choice, correct order, etc."]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Ensure that all loop segments are handled by goroutines. Reading and printing questions are also blocking (I think), so this would make it insignificantly more responsive but probably unnoticeable to the user. It would be good practice."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(t.h3,{id:"part-1",children:"Part 1"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Ingests CSV file","\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","User-provided path via flags"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Default path and questions included with package (defaults to ",(0,n.jsx)(t.code,{children:"problems.csv"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Parses CSV into questions and answers"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Asks questions of user and accepts input as answer"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Compares user provided input with answer and keeps track of # of correct/incorrect answers"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Regardless of correct/incorrect, next question is asked immediately after user input"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Quiz Format","\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","< 100 questions"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Single word/number answers"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","At end of quiz, program outputs total number of questions correct out of total"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"part-2",children:"Part 2"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Add timer with default limit of 30 secs, customizable with flag"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","User must press ",(0,n.jsx)(t.code,{children:"enter"})," (or another key) before timer starts, then questions are printed out one at a time until an answer is given"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Quiz must stop when time limit is exceeded - do not wait for the user to answer their final question. Ideally stops quiz entirely even if you're waiting on user answer."]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ",'Regardless of whether time limit was exceeded, program must still output "score" with unanswered questions and invalid answers considered incorrect.']}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"bonus",children:"Bonus"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Add string trimming and cleanup to help ensure that correct answers with extra whitespace, capitalization, etc are not considered incorrect. Hint: Check out the strings package."]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Add an option (a new flag) to shuffle the quiz order each time it is run."]}),"\n"]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)("h2",{children:" Exercise details "})}),"\nThis exercise is broken into two parts to help simplify the process of explaining it as well as to make it easier to solve. The second part is harder than the first, so if you get stuck feel free to move on to another problem then come back to part 2 later."]}),(0,n.jsx)(t.h3,{id:"part-1-1",children:"Part 1"}),(0,n.jsx)(t.p,{children:"Create a program that will read in a quiz provided via a CSV file (more details below) and will then give the quiz to a user keeping track of how many questions they get right and how many they get incorrect. Regardless of whether the answer is correct or wrong the next question should be asked immediately afterwards."}),(0,n.jsx)(t.p,{children:"The CSV file should default to problems.csv (example shown below), but the user should be able to customize the filename via a flag."}),(0,n.jsx)(t.p,{children:"The CSV file will be in a format like below, where the first column is a question and the second column in the same row is the answer to that question."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"5+5,10\n7+3,10\n1+1,2\n8+3,11\n1+2,3\n8+6,14\n3+1,4\n1+4,5\n5+1,6\n2+3,5\n3+3,6\n2+4,6\n5+2,7\n"})}),(0,n.jsx)(t.p,{children:"You can assume that quizzes will be relatively short (< 100 questions) and will have single word/number answers."}),(0,n.jsx)(t.p,{children:"At the end of the quiz the program should output the total number of questions correct and how many questions there were in total. Questions given invalid answers are considered incorrect."}),(0,n.jsx)(t.p,{children:'!NOTE: CSV files may have questions with commas in them. Eg: "what 2+2, sir?",4 is a valid row in a CSV. I suggest you look into the CSV package in Go and don\u2019t try to write your own CSV parser.'}),(0,n.jsx)(t.h3,{id:"part-2-1",children:"Part 2"}),(0,n.jsx)(t.p,{children:"Adapt your program from part 1 to add a timer. The default time limit should be 30 seconds, but should also be customizable via a flag."}),(0,n.jsx)(t.p,{children:"Your quiz should stop as soon as the time limit has exceeded. That is, you shouldn\u2019t wait for the user to answer one final questions but should ideally stop the quiz entirely even if you are currently waiting on an answer from the end user."}),(0,n.jsx)(t.p,{children:"Users should be asked to press enter (or some other key) before the timer starts, and then the questions should be printed out to the screen one at a time until the user provides an answer. Regardless of whether the answer is correct or wrong the next question should be asked."}),(0,n.jsx)(t.p,{children:"At the end of the quiz the program should still output the total number of questions correct and how many questions there were in total. Questions given invalid answers or unanswered are considered incorrect."}),(0,n.jsx)(t.h3,{id:"bonus-1",children:"Bonus"}),(0,n.jsx)(t.p,{children:"As a bonus exercises you can also\u2026"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Add string trimming and cleanup to help ensure that correct answers with extra whitespace, capitalization, etc are not considered incorrect. Hint: Check out the strings package."}),"\n",(0,n.jsx)(t.li,{children:"Add an option (a new flag) to shuffle the quiz order each time it is run."}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var i=s(6540);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);