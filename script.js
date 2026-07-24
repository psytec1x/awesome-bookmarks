// Dashboard Functionality Script

// DOM Elements
const searchInput = document.getElementById('searchInput');
const navMenu = document.getElementById('navMenu');
const linksContainer = document.getElementById('linksContainer');
const backToTopBtn = document.getElementById('backToTop');
const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.querySelector('.sidebar');
const tocGrid = document.getElementById('tocGrid');
const linkCount = document.getElementById('linkCount');
const categoryCount = document.getElementById('categoryCount');

// State
let filteredData = { ...bookmarkData };
let currentCategory = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    renderNavigation();
    renderTOC();
    renderAllLinks();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            searchInput.blur();
        }
    });

    // Keyboard shortcut (Ctrl+K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
    });

    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Back to top button
    window.addEventListener('scroll', toggleBackToTop);
    backToTopBtn.addEventListener('click', scrollToTop);

    // Close mobile menu on link click
    document.querySelectorAll('.nav-section a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    });
}

// Update Statistics
function updateStats() {
    linkCount.textContent = `${totalLinks} Links`;
    categoryCount.textContent = `${totalCategories} Kategorien`;
}

// Render Navigation
function renderNavigation() {
    const topCategories = document.getElementById('topCategories');
    const allCategories = document.getElementById('allCategories');
    
    const categories = Object.keys(bookmarkData);
    const topCats = categories.slice(0, 5);
    const otherCats = categories.slice(5);

    topCategories.innerHTML = topCats.map(cat => 
        `<li><a href="#${cat.replace(/\s+/g, '-').toLowerCase()}" class="nav-link" data-category="${cat}">${cat}</a></li>`
    ).join('');

    allCategories.innerHTML = otherCats.map(cat => 
        `<li><a href="#${cat.replace(/\s+/g, '-').toLowerCase()}" class="nav-link" data-category="${cat}">${cat}</a></li>`
    ).join('');

    // Add click handlers
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            scrollToCategory(category);
            setActiveNav(category);
        });
    });
}

// Render Table of Contents
function renderTOC() {
    const categories = Object.keys(bookmarkData);
    
    tocGrid.innerHTML = categories.map(category => {
        const count = bookmarkData[category].links.length;
        return `
            <div class="toc-item" onclick="scrollToCategory('${category}')">
                <div class="toc-item-title">${category}</div>
                <div class="toc-item-count">${count} Links</div>
            </div>
        `;
    }).join('');
}

// Render All Links
function renderAllLinks() {
    const categories = Object.keys(filteredData);
    
    if (categories.length === 0) {
        linksContainer.innerHTML = `
            <div class="no-results">
                <h3>Keine Ergebnisse gefunden</h3>
                <p>Versuche eine andere Suchbegriff</p>
            </div>
        `;
        return;
    }

    linksContainer.innerHTML = categories.map(category => {
        const links = filteredData[category].links;
        if (links.length === 0) return '';

        return `
            <div class="category-section" id="${category.replace(/\s+/g, '-').toLowerCase()}">
                <h2 class="category-title">${category}</h2>
                <div class="links-grid">
                    ${links.map(link => renderLinkCard(link)).join('')}
                </div>
            </div>
        `;
    }).join('');

    // Add event listeners to action buttons
    setupLinkButtons();
}

// Render Link Card
function renderLinkCard(link) {
    const shortUrl = new URL(link.url).hostname;
    return `
        <div class="link-card">
            <a href="${link.url}" target="_blank" class="link-title">${link.title}</a>
            <div class="link-url">${shortUrl}</div>
            <div class="link-actions">
                <button class="link-btn open-btn" data-url="${link.url}" title="Open Link">
                    🔗 Open
                </button>
                <button class="link-btn copy copy-btn" data-url="${link.url}" title="Copy Link">
                    📋 Copy
                </button>
            </div>
        </div>
    `;
}

// Setup Link Button Handlers
function setupLinkButtons() {
    // Open buttons
    document.querySelectorAll('.open-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const url = btn.dataset.url;
            window.open(url, '_blank');
        });
    });

    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const url = btn.dataset.url;
            copyToClipboard(url);
            
            // Visual feedback
            const originalText = btn.textContent;
            btn.textContent = '✓ Copied!';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 2000);
        });
    });
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Search Handler
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query === '') {
        filteredData = { ...bookmarkData };
    } else {
        filteredData = {};
        
        Object.entries(bookmarkData).forEach(([category, data]) => {
            const matchedLinks = data.links.filter(link => 
                link.title.toLowerCase().includes(query) ||
                link.url.toLowerCase().includes(query) ||
                category.toLowerCase().includes(query)
            );
            
            if (matchedLinks.length > 0) {
                filteredData[category] = { links: matchedLinks };
            }
        });
    }

    renderAllLinks();
}

// Scroll to Category
function scrollToCategory(category) {
    const categoryId = category.replace(/\s+/g, '-').toLowerCase();
    const element = document.getElementById(categoryId);
    
    if (element) {
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// Set Active Navigation
function setActiveNav(category) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });
}

// Back to Top
function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll Event Listener for Active Navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.category-section');
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        
        if (window.scrollY >= top - 100 && window.scrollY <= bottom - 100) {
            const categoryName = section.id.replace(/-/g, ' ').toUpperCase();
            setActiveNav(categoryName);
        }
    });
});

// Export functionality (bonus)
function exportAsJSON() {
    const dataStr = JSON.stringify(bookmarkData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'awesome-bookmarks.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Import functionality (bonus)
function importFromJSON(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            Object.assign(bookmarkData, imported);
            filteredData = { ...bookmarkData };
            renderAllLinks();
            updateStats();
            alert('✓ Bookmarks imported successfully!');
        } catch (error) {
            alert('✗ Error importing bookmarks');
            console.error(error);
        }
    };
    reader.readAsText(file);
}

// Console tip
console.log('%c🔖 Welcome to Awesome Bookmarks Dashboard!', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cUse Ctrl+K to search quickly', 'color: #00ff88; font-size: 12px;');
