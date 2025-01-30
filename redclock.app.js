// Load and configure widgets
Bangle.loadWidgets();
Bangle.setUI("clock");

// 3-bit color palette for Bangle.js 2
const COLORS = {
  background: "#000000", // Black background for better contrast
  onBackground: "#FF0000", // Bright red
  primary: "#FF0000", // Bright red
  secondary: "#FF0000", // Bright red (same as primary due to limited colors)
};

function drawClock() {
    // Clear the screen
    g.reset().clearRect(Bangle.appRect);
    g.setColor(COLORS.background);
    g.fillRect(Bangle.appRect);
  
    // Get current time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Draw time
    g.setFontAlign(0, 0);
    g.setColor(COLORS.primary);
    g.setFont("Vector", 48);
    g.drawString(`${hours}:${minutes.toString().padStart(2, '0')}`, g.getWidth()/2, g.getHeight()/2 - 30);
    
    // Draw seconds
    g.setFont("6x8", 2);
    g.drawString(`${seconds.toString().padStart(2, '0')}`, g.getWidth()/2, g.getHeight()/2 + 10);
  
    // Draw date
    g.setColor(COLORS.secondary);
    g.setFont("6x8", 2);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateString = `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()}`;
    g.drawString(dateString, g.getWidth()/2, g.getHeight()/2 + 30);
  
    // Draw step count in red
    let steps = Bangle.getHealthStatus("day").steps;
    g.setColor(COLORS.onBackground);
    g.drawString(`Steps: ${steps}`, g.getWidth()/2, g.getHeight()/2 + 50);
  }
  
// Draw clock immediately and every second
drawClock();
setInterval(drawClock, 1000);

// Draw widgets
Bangle.drawWidgets();
