export const tags = [
  { name: "React", background: "#61DAFB", color: "#20232A" },
  { name: "Angular", background: "#DD0031", color: "#FFFFFF" },
  { name: "Vue.js", background: "#42B883", color: "#35495E" },
  { name: "HTML5", background: "#E34F26", color: "#FFFFFF" },
  { name: "CSS3", background: "#1572B6", color: "#FFFFFF" },
  { name: "Bootstrap", background: "#7952B3", color: "#FFFFFF" },
  { name: "Tailwind CSS", background: "#06B6D4", color: "#FFFFFF" },

  { name: "Node.js", background: "#339933", color: "#FFFFFF" },
  { name: "Express.js", background: "#000000", color: "#FFFFFF" },
  { name: "FastAPI", background: "#009688", color: "#FFFFFF" },
  { name: "Flask", background: "#FFFFFF", color: "#000000" }, 

  { name: "MongoDB", background: "#47A248", color: "#FFFFFF" },
  { name: "MySQL", background: "#4479A1", color: "#FFFFFF" },
  { name: "SQLite", background: "#003B57", color: "#FFFFFF" },
  { name: "Redis", background: "#e03B57", color: "#3f0300" },
  
  { name: "Linux", background: "#FCC624", color: "#000000" }, 
  { name: "Git", background: "#F05032", color: "#FFFFFF" },
  { name: "Docker", background: "#2496ED", color: "#FFFFFF" },
  { name: "Bash", background: "#2C001E", color: "#FFFFFF" }, 
  { name: "JavaScript", background: "#F7DF1E", color: "#000000" },
  { name: "Python", background: "#3776AB", color: "#FFFFFF" }, 
  { name: "C", background: "#A8B9CC", color: "#000000" },
];

export const skillCategories = {
	frontend: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Vue.js", "Bootstrap", "Tailwind CSS"],
	backend: ["Node.js", "Express.js", "FastAPI", "Flask", "Python"],
	database: ["MongoDB", "MySQL", "SQLite"],
	tools: ["Linux", "Git", "Docker", "Bash", "C"]
};

export const projects = [
	{
		title: "QuranLink",
		description: "A web application designed to assist with memorizing the Holy Quran through interactive typing practice",
		image: "assets/QuranLink.png",
		tags: ["Python", "FastAPI", "MySQL", "JavaScript", "Vue.js"],
		github: "https://github.com/Ehabw57/QuranLink"
	},
	{
		title: "ALX Learning Bot",
		description: "AI-powered application designed to search for learning resources and generate quizzes for a specific topics",
		image: "assets/AlxBot.png",
		tags: ["Python", "FastAPI", "Redis", "React", "Tailwind CSS"],
		github: "https://github.com/ALX-NULL/roundOf11",
    demo: "https://github.com/user-attachments/assets/fb355bbb-96ed-4781-93a4-13231633b3bf"
	},
	{
		title: "PlayBlocks",
		description: "A browser-based E-commerce game website created entirely using HTML, CSS, and JavaScript.",
		image: "assets/playblocks.jpg",
		tags: ["HTML5", "CSS3", "JavaScript"],
		live: "https://www.itiqena.com/playblocks/login.html",
		github: "https://github.com/Ehabw57/playblocks"
	},
	{
		title: "Logger",
		description: "A command-line tool designed for efficient management of employee logs and records.",
		image: "./assets/logger.jpg",
		tags: ["C", "SQLite", "Bash", "Linux"],
		github: "https://github.com/Ehabw57/logger",
		demo: "https://www.youtube.com/watch?v=RHmYFvXhE4Y"
	},
	{
		title: "Geometry Dodge",
		description: "A fun web-based game built with HTML Canvas, where player control a square to dodge incoming shapes.",
		image: "assets/GeomatryDodge.png",
		tags: ["HTML5", "CSS3", "JavaScript"],
		live: "https://ehabw57.github.io/javaScript-Games/Circle_Dodge/",
		github: "https://github.com/Ehabw57/javaScript-Games"
	},

	{
		title: "Terminal Portofolio",
    description: "Interactive portfolio replicating a tiling window manager environment with a terminal-style UI.",
		image: "assets/TerminalPortofolio.jpg",
		tags: ["HTML5", "CSS3", "JavaScript"],
		live: "https://ehabw57.github.io/portofolio",
		github: "https://github.com/Ehabw57/portofolio"
	}
];


