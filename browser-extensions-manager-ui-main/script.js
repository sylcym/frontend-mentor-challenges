// toggle theme 
const btn = document.querySelector('.btn-theme');
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme('light');
}

btn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});



// extensions
const container = document.querySelector(".extensions");
const filterBtn = document.querySelectorAll(".filter-btn");
let extensionsData = []; // dane z JSON

function renderExtensions(filter = "All") {
  container.innerHTML = "";

  extensionsData
    .filter(ext => {
      if (filter === "Active") return ext.isActive;
      if (filter === "Inactive") return !ext.isActive;
      return true;
    })
    .forEach((ext, idx) => {
      const slug = ext.name.toLowerCase().replace(/[^\w]+/g, "-");
      const checked = ext.isActive ? "checked" : "";

      const ul = document.createElement("ul");
      ul.className = "extensions-list";

      ul.innerHTML = `
        <li class="extension-item" data-id="${slug}" data-active="${ext.isActive}">
          <div class="wrapper">
            <img src="${ext.logo}" alt="${ext.name} logo" class="extension-logo" />
            <div class="extension-info">
              <h2 class="extension-name">${ext.name}</h2>
              <p class="extension-description">${ext.description}</p>
            </div>
          </div>
          <div class="extension-actions">
            <button type="button" class="remove-btn">Remove</button>
            <label class="switch">
              <input type="checkbox" id="toggle-${idx}" ${checked} />
              <span class="slider"></span>
            </label>
          </div>
        </li>
      `;
      container.appendChild(ul);


      const remove = ul.querySelector(".remove-btn");

      remove.addEventListener("click", () => {
        extensionsData = extensionsData.filter(card => card.name !== ext.name);
        const activeFilter = document.querySelector(".filter-btn.active").textContent;
        renderExtensions(activeFilter);
      });

      container.appendChild(ul);

    });
}

filterBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtn.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    renderExtensions(btn.textContent);
  });
});

fetch("./data.json")
  .then(r => r.json())
  .then(data => {
    extensionsData = data;
    renderExtensions("All");
  })
  .catch(err => console.error("Error JSON:", err));
