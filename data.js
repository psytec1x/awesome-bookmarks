// Bookmark Data Structure
const bookmarkData = {
    'SITES': {
        links: [
            { title: 'Log In — WordPress.com', url: 'https://wordpress.com/log-in' },
            { title: 'Dashboard ‹ ELECTRIBE — WordPress', url: 'http://electribeblog.wordpress.com/wp-admin/index.php' },
            { title: 'ElectribeWeb Portal', url: 'https://sites.google.com/site/electribesound/' },
            { title: 'StartHQ', url: 'https://starthq.com/signup' },
            { title: 'Linktree Admin', url: 'https://linktr.ee/admin' }
        ]
    },
    'MY APPS': {
        links: [
            { title: 'AppsGeyser Dashboard', url: 'http://www.appsgeyser.com/dashboard/' },
            { title: 'Online PDF Converter', url: 'https://www.pdf2go.com/' },
            { title: 'Ninite - Install or Update Multiple Apps', url: 'https://ninite.com/' },
            { title: 'Chrome Remote Desktop', url: 'https://remotedesktop.google.com/' }
        ]
    },
    'CLOUD': {
        links: [
            { title: 'MEGA', url: 'https://mega.nz/fm/dashboard' },
            { title: 'Dropbox', url: 'https://www.dropbox.com/home' },
            { title: 'WeTransfer', url: 'https://wetransfer.com/' },
            { title: 'OneDrive', url: 'https://onedrive.live.com/' },
            { title: 'TeraBox', url: 'https://www.terabox.com/' }
        ]
    },
    'AI LIKE CHATGPT': {
        links: [
            { title: 'ChatGPT', url: 'https://chat.openai.com/chat' },
            { title: 'Google Bard', url: 'https://bard.google.com/' },
            { title: 'Bing', url: 'https://www.bing.com/?FORM=Z9FD1' },
            { title: 'Perplexity AI', url: 'https://www.perplexity.ai/' },
            { title: 'Claude (Anthropic)', url: 'https://claude.ai/' }
        ]
    },
    'AI TOOLS': {
        links: [
            { title: 'Wolfram Alpha', url: 'https://www.wolframalpha.com/' },
            { title: 'Notion', url: 'https://www.notion.so/' },
            { title: 'Copy.ai', url: 'https://www.copy.ai/' },
            { title: 'Grammarly', url: 'https://www.grammarly.com/' },
            { title: 'There\'s An AI For That', url: 'https://theresanaiforthat.com/' }
        ]
    },
    'BILD DESIGN': {
        links: [
            { title: 'Photopea', url: 'https://www.photopea.com/' },
            { title: 'DALL·E 2', url: 'https://openai.com/dall-e-2/' },
            { title: 'Midjourney', url: 'https://www.midjourney.com/' },
            { title: 'Canva', url: 'https://www.canva.com/' },
            { title: 'Adobe Firefly', url: 'https://firefly.adobe.com/' }
        ]
    },
    'AI VIDEO': {
        links: [
            { title: 'Runway ML', url: 'https://runwayml.com/' },
            { title: 'HeyGen', url: 'https://www.heygen.com/' },
            { title: 'Fliki', url: 'https://fliki.ai/' },
            { title: 'Pictory.ai', url: 'https://pictory.ai/' }
        ]
    },
    'SOUND AI': {
        links: [
            { title: 'AudioShake', url: 'https://indie.audioshake.ai/' },
            { title: 'Mubert Render', url: 'https://mubert.com/render' },
            { title: 'Soundful', url: 'https://soundful.com/' },
            { title: 'FakeYou', url: 'https://fakeyou.com/' }
        ]
    },
    'CODE TOOLS': {
        links: [
            { title: 'GitHub Copilot', url: 'https://github.com/features/copilot' },
            { title: 'StackOverflow', url: 'https://stackoverflow.com/' },
            { title: 'CodePen', url: 'https://codepen.io/' },
            { title: 'Replit', url: 'https://replit.com/' }
        ]
    },
    'SEARCH & OSINT': {
        links: [
            { title: 'OSINT Framework', url: 'https://osintframework.com/' },
            { title: 'Shodan', url: 'https://www.shodan.io/' },
            { title: 'Google Trends', url: 'https://trends.google.com/trends/' },
            { title: 'CyberChef', url: 'https://gchq.github.io/CyberChef/' }
        ]
    },
    'PRODUCTIVITY': {
        links: [
            { title: 'Notion', url: 'https://www.notion.so/' },
            { title: 'ClickUp', url: 'https://clickup.com/' },
            { title: 'Todoist', url: 'https://todoist.com/' },
            { title: 'Asana', url: 'https://asana.com/' }
        ]
    },
    'MUSIC DOWNLOADS': {
        links: [
            { title: 'Ektoplazm', url: 'http://www.ektoplazm.com/' },
            { title: 'Bandcamp', url: 'https://bandcamp.com/' },
            { title: 'SoundCloud', url: 'https://soundcloud.com/' },
            { title: 'YouTube Music', url: 'https://music.youtube.com/' }
        ]
    },
    'MARKETING & SEO': {
        links: [
            { title: 'Google Analytics', url: 'https://analytics.google.com/' },
            { title: 'Ahrefs', url: 'https://ahrefs.com/' },
            { title: 'SEMrush', url: 'https://www.semrush.com/' },
            { title: 'Moz', url: 'https://moz.com/' }
        ]
    },
    'DEVELOPMENT': {
        links: [
            { title: 'GitHub', url: 'https://github.com/' },
            { title: 'Docker Hub', url: 'https://hub.docker.com/' },
            { title: 'NPM', url: 'https://www.npmjs.com/' },
            { title: 'Dev.to', url: 'https://dev.to/' }
        ]
    },
    'LEARNING': {
        links: [
            { title: 'Udemy', url: 'https://www.udemy.com/' },
            { title: 'Coursera', url: 'https://www.coursera.org/' },
            { title: 'Khan Academy', url: 'https://www.khanacademy.org/' },
            { title: 'Codecademy', url: 'https://www.codecademy.com/' }
        ]
    }
};

// Calculate totals
const totalLinks = Object.values(bookmarkData).reduce((sum, cat) => sum + cat.links.length, 0);
const totalCategories = Object.keys(bookmarkData).length;
