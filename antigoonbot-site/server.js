const WebSocket = require("ws");
const fs = require("fs");
const path = require("path");

const wss = new WebSocket.Server({ port: 4001 }, () => {
  console.log("📡 WebSocket server running on ws://localhost:4001");
});

wss.on("connection", ws => {
  console.log("🔌 Bot connected via WebSocket");

  ws.on("message", message => {
    try {
      const data = JSON.parse(message);
      console.log("📊 Received stats:", data);

      const statsDir = path.join(__dirname, "data");
      const statsPath = path.join(statsDir, "stats.json");

      // Make sure the directory exists
      if (!fs.existsSync(statsDir)) {
        fs.mkdirSync(statsDir, { recursive: true });
      }

      fs.writeFileSync(statsPath, JSON.stringify(data, null, 2));
      console.log("💾 Stats saved to stats.json");
    } catch (err) {
      console.error("❌ Failed to parse message:", err);
    }
  });

  ws.on("close", () => {
    console.log("🔌 Bot disconnected");
  });
});
