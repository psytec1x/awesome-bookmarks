const bookmarkData = {
    'SITES': {
        links: [
            { title: 'WordPress.com', url: 'https://wordpress.com/' },
            { title: 'Blogger', url: 'https://www.blogger.com/' },
            { title: 'Tumblr', url: 'https://www.tumblr.com/' },
            { title: 'Linktree', url: 'https://linktr.ee/' }
        ]
    },
    'AI LIKE CHATGPT': {
        links: [
            { title: 'ChatGPT', url: 'https://chat.openai.com/' },
            { title: 'Google Bard', url: 'https://bard.google.com/' },
            { title: 'Microsoft Bing', url: 'https://www.bing.com/' },
            { title: 'Perplexity AI', url: 'https://www.perplexity.ai/' },
            { title: 'Claude', url: 'https://claude.ai/' }
        ]
    },
    'CLOUD': {
        links: [
            { title: 'MEGA', url: 'https://mega.nz/' },
            { title: 'Google Drive', url: 'https://drive.google.com/' },
            { title: 'Dropbox', url: 'https://www.dropbox.com/' },
            { title: 'OneDrive', url: 'https://onedrive.live.com/' },
            { title: 'WeTransfer', url: 'https://wetransfer.com/' }
        ]
    },
    'AI TOOLS': {
        links: [
            { title: 'Notion AI', url: 'https://www.notion.so/' },
            { title: 'Midjourney', url: 'https://www.midjourney.com/' },
            { title: 'DALL-E', url: 'https://openai.com/dall-e-2/' },
            { title: 'Stable Diffusion', url: 'https://stablediffusionweb.com/' },
            { title: 'Runway ML', url: 'https://runwayml.com/' }
        ]
    },
    'CODE TOOLS': {
        links: [
            { title: 'GitHub', url: 'https://github.com/' },
            { title: 'VS Code', url: 'https://code.visualstudio.com/' },
            { title: 'Stack Overflow', url: 'https://stackoverflow.com/' },
            { title: 'CodePen', url: 'https://codepen.io/' }
        ]
    },
    'DESIGN': {
        links: [
            { title: 'Figma', url: 'https://www.figma.com/' },
            { title: 'Canva', url: 'https://www.canva.com/' },
            { title: 'Adobe XD', url: 'https://www.adobe.com/products/xd.html' },
            { title: 'Photopea', url: 'https://www.photopea.com/' }
        ]
    },
    'MUSIC': {
        links: [
            { title: 'Spotify', url: 'https://www.spotify.com/' },
            { title: 'SoundCloud', url: 'https://soundcloud.com/' },
            { title: 'YouTube Music', url: 'https://music.youtube.com/' },
            { title: 'Bandcamp', url: 'https://bandcamp.com/' }
        ]
    },
    'VIDEO': {
        links: [
            { title: 'YouTube', url: 'https://www.youtube.com/' },
            { title: 'Vimeo', url: 'https://vimeo.com/' },
            { title: 'Runway ML', url: 'https://runwayml.com/' },
            { title: 'Synthesia', url: 'https://www.synthesia.io/' }
        ]
    },
    'PRODUCTIVITY': {
        links: [
            { title: 'Notion', url: 'https://www.notion.so/' },
            { title: 'ClickUp', url: 'https://clickup.com/' },
            { title: 'Asana', url: 'https://asana.com/' },
            { title: 'Monday.com', url: 'https://monday.com/' }
        ]
    },
    'LEARNING': {
        links: [
            { title: 'Udemy', url: 'https://www.udemy.com/' },
            { title: 'Coursera', url: 'https://www.coursera.org/' },
            { title: 'Skillshare', url: 'https://www.skillshare.com/' },
            { title: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/' }
        ]
    },
    'DEVELOPER TOOLS': {
        links: [
            { title: 'Stack Overflow', url: 'https://stackoverflow.com/' },
            { title: 'DevDocs', url: 'https://devdocs.io/' },
            { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
            { title: 'CSS-Tricks', url: 'https://css-tricks.com/' }
        ]
    },
    'HACKING & SECURITY': {
        links: [
            { title: 'OWASP', url: 'https://owasp.org/' },
            { title: 'Hack The Box', url: 'https://www.hackthebox.com/' },
            { title: 'TryHackMe', url: 'https://tryhackme.com/' },
            { title: 'VirusTotal', url: 'https://www.virustotal.com/' }
        ]
    },
    'SEARCH & OSINT': {
        links: [
            { title: 'Google', url: 'https://www.google.com/' },
            { title: 'DuckDuckGo', url: 'https://duckduckgo.com/' },
            { title: 'Shodan', url: 'https://www.shodan.io/' },
            { title: 'Intelligence X', url: 'https://intelx.io/' }
        ]
    },
    'MARKETING & SEO': {
        links: [
            { title: 'Google Analytics', url: 'https://analytics.google.com/' },
            { title: 'SEMrush', url: 'https://www.semrush.com/' },
            { title: 'Ahrefs', url: 'https://ahrefs.com/' },
            { title: 'Google Trends', url: 'https://trends.google.com/' }
        ]
    }
};

// Calculate totals
const totalLinks = Object.values(bookmarkData).reduce((sum, cat) => sum + cat.links.length, 0);
const totalCategories = Object.keys(bookmarkData).length;