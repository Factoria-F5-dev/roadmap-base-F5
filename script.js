// Data
const bootcampData = {
    title: "Bootcamp name",
    weeks: 24,
    stack: [
        {
            type: "Tema",
            name: "tema name",
            start: 1,
            end: 1,
        },
        {
            type: "Course",
            name: "course name",
            start: 1,
            end: 1,
        },
        {
            type: "Proyecto",
            name: "project name",
            start: 1,
            end: 1,
        },
      
    ]
}

const { weeks, stack } = bootcampData;

//Generate the roadmap on page load
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Generate the roadmap on page load
    generateGantt();
});

// Generate table depending on the number of weeks
function setWeeksValue(weeksNumber) {
    const weeksInput = document.getElementById("weeks");
    weeksInput.setAttribute("value", weeksNumber); 
}

//Generate title
 function setTitle(title) {
    const titleElement = document.getElementById("nav-title");
    const titleDocument = document.querySelector("title");
    titleElement.textContent = title;
    titleDocument.textContent = title;
 }

//Generate the Gantt chart
function generateGantt() {
    setTitle(bootcampData.title);
    setWeeksValue(bootcampData.weeks);
    const weeks = document.getElementById("weeks").value;
    const table = document.getElementById("gantt-table");
    table.innerHTML = ""; 

    let monthHeaderRow = "<tr><th>Meses</th>";
    for (let i = 1; i <= weeks; i += 4) {
        const month = Math.ceil(i / 4);
        let colspan = Math.min(4, weeks - i + 1); 
        monthHeaderRow += `<th colspan="${colspan}">Mes ${month}</th>`;
    }
    monthHeaderRow += "</tr>";
    table.innerHTML += monthHeaderRow;

    let weekHeaderRow = "<tr><th>Elemento</th>";
    for (let i = 1; i <= weeks; i++) {
        weekHeaderRow += `<th>${i}</th>`;
    }
    weekHeaderRow += "</tr>";
    table.innerHTML += weekHeaderRow;

    let lastEnd = 0;

    stack.forEach((item) => {
        let colorClass = "";
        let iconoProject = '<i class="bi bi-briefcase-fill"></i>';
        let iconoTema = '<i class="bi bi-book-fill"></i>';
        let iconoIntegracion = '<i class="bi bi-diagram-3-fill"></i>';
        let iconCertificate = '<i class="bi bi-arrow-return-right"></i><i class="bi bi-bookmark-check"></i>';
        let icon = '';

        if (item.type === "Proyecto") {
            colorClass = "proyecto";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoProject;
        } else if (item.type === "Tema") {
            colorClass = "tema";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoTema;
        } else if (item.type === "Transición") {
            colorClass = "transicion";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconoIntegracion;

        }else if (item.type === "Course") {
            colorClass = "certificate-course";
            item.start = item.start ? item.start : lastEnd + 1;
            item.end = item.end ? item.end : item.start + 2;
            icon = iconCertificate;
        }

        lastEnd = item.end;

        let row = `<tr><td class="label ${colorClass}">${icon} ${item.name}</td>`;

        for (let i = 1; i <= weeks; i++) {
            if (i >= item.start && i <= item.end) {
                row += `<td class="block ${colorClass}"></td>`;
            } else {
                row += `<td class="empty"></td>`;
            }
        }

        row += "</tr>";
        table.innerHTML += row;
    });

    table.style.width = `${weeks * 30 + 260}px`; 
}
