// Array of projects
const projects = [
    {
      title: "Rigid Body Physics Simulation",
      description:
        "Rigid Body Simulation made in SFML/C++ from scratch which detects collisions and resolve it.",
      image: "../img/rigidbody.png",
      githubLink: "https://github.com/Bishmit/RigidBodyPhysicsEngine",
    },
    {
      title: "Custom Graph Traversal",
      description:
        "This is Graph traversal for DFS, BFS with visually appealing animation of traversal made in C++/SFML.",
      image: "../img/tree.png",
      githubLink: "https://github.com/Bishmit/CustomTreeTraversal",
    },
    {
      title: "Realtime Path Finding Algorithm",
      description:
        "A* Algorithm visualization in C++/SFML which find shortest path from one point to another avoiding obstacles.",
        image: "../img/astar.png",
        githubLink: "https://github.com/Bishmit/PathFinding-Visualization-using-Astar-algorithm",
    },
    {
      title: "Terminal like Portfolio",
      description:
        "Simple Terminal based Portfolio made for linux user or CLI lover with many features of terminal.",
      image: "../img/terminal.png",
      githubLink: "https://github.com/Bishmit/TerminalLikePortfolio",
    },
    {
      title: "Space Shooter",
      description:
        "This is a simple space shooter game that I made in C++/SFML library while dodging bullets and enemy.",
      image: "../img/plane.png",
      githubLink: "https://github.com/Bishmit/Plane",
    },
    {
      title: "Flappy Bird Clone",
      description:
        "This is simple Flappy Bird clone that I made in C++ again with the SFML library.",
      image: "../img/flappybird.png",
      githubLink: "https://github.com/Bishmit/flappybird",
    },

    // more projects if needed will go here 
  ];
  
  
  // Function to create a project item
  function createProjectItem(project) {
    return `
      <a href="${project.githubLink}" target="_blank" class="project-link">
        <div class="project-item">
          <div class="project-info">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
          </div>
          <div class="project-img">
            <img src="${project.image}" alt="${project.title}">
          </div>
        </div>
      </a>
    `;
  }
  
  // Function to render all projects
  function renderProjects() {
    const projectsGrid = document.querySelector(".projects-grid");
  
    // Clear existing content
    projectsGrid.innerHTML = "";
  
    // Add each project to the grid
    projects.forEach((project) => {
      const projectItem = createProjectItem(project);
      projectsGrid.innerHTML += projectItem;
    });

  }
  
  // Render projects when the page loads
  document.addEventListener("DOMContentLoaded", renderProjects);