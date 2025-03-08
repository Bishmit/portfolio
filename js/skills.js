const skillsData = {
    languages: [
        { name: "C/C++", level: 80, icon: "fas fa-c" },
        { name: "Python", level: 50, icon: "fab fa-python" },
        { name: "Web Dev", level: 55, icon: "fas fa-code" },
        { name: "C#", level: 50, icon: "fab fa-microsoft" }
    ],
    tools: [
        { name: "Git/Github", level: 85, icon: "fab fa-git-alt" },
        { name: "CMake", level: 55, icon: "fas fa-wrench" },
        { name: "Neovim", level: 60, icon: "fas fa-keyboard" },
        { name: "Linux/Bash", level: 55, icon: "fab fa-linux" }
    ],
    frameworks: [
        { name: "SDL", level: 55, icon: "fas fa-gamepad" },
        { name: "OpenGL", level: 45, icon: "fas fa-cube" },
        { name: "ImGui", level: 60, icon: "fas fa-tools" },
        { name: "React", level: 40, icon: "fab fa-react" }
    ],
    "game-dev": [
        { name: "SFML", level: 80, icon: "fas fa-gamepad" },
        { name: "Unity", level: 35, icon: "fab fa-unity" },
        { name: "Godot", level: 25, icon: "fas fa-dice" },
        { name: "Blender", level: 35, icon: "fas fa-blender" }
    ]
};

function openTab(event, category) {
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    event.currentTarget.classList.add("active");

    const content = document.getElementById("tab-content");
    content.innerHTML = "";  

    // Generate skill list dynamically
    let skillHTML = '';
    skillsData[category].forEach(skill => {
        skillHTML += `
            <div class="skill">
                <div class="skill-name">
                    <i class="${skill.icon}"></i>
                    <span>${skill.name}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: 0%;" data-progress="${skill.level}%"></div>
                </div>
            </div>
        `;
    });

    content.innerHTML = skillHTML;

    // progress bar animation
    setTimeout(() => {
        document.querySelectorAll(".progress").forEach((progress, index) => {
            progress.style.width = skillsData[category][index].level + "%";
        });
    }, 100);

    content.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    openTab({ currentTarget: document.querySelector(".tab-btn.active") }, "languages");
});
