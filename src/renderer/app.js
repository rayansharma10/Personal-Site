const App = () => {
  return `
    <div class="app">
      <aside class="sidebar">
        <h2>Personal Notion</h2>
        <nav>
          <ul>
            <li>📄 Pages</li>
            <li>✓ Tasks</li>
            <li>📅 Calendar</li>
            <li>🗂️ Databases</li>
          </ul>
        </nav>
        <input type="text" placeholder="Search..." class="search-box">
      </aside>
      <main class="content">
        <h1>Welcome to Personal Notion</h1>
        <p>Start by creating a new page or task.</p>
      </main>
    </div>
  `;
};

document.getElementById('root').innerHTML = App();
