const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const TOML = require("@iarna/toml");
const os = require("os");

const app = express();
const port = 3000;

// 设置静态文件目录，使用绝对路径
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// 根据操作系统获取配置文件路径
function getConfigPath() {
  switch (process.platform) {
    case "win32":
      return path.join(
        os.homedir(),
        "AppData/Roaming/alacritty/alacritty.toml"
      );
    case "darwin":
      return path.join(os.homedir(), ".config/alacritty/alacritty.toml");
    default: // linux
      return path.join(os.homedir(), ".config/alacritty/alacritty.toml");
  }
}

const CONFIG_PATH = getConfigPath();

// 确保配置目录存在
async function ensureConfigDir() {
  const configDir = path.dirname(CONFIG_PATH);
  try {
    await fs.mkdir(configDir, { recursive: true });
  } catch (err) {
    if (err.code !== "EEXIST") {
      throw err;
    }
  }
}

// ... 其他代码保持不变 ...

app.get("/api/config", async (req, res) => {
  try {
    await ensureConfigDir(); // 确保配置目录存在

    try {
      const configContent = await fs.readFile(CONFIG_PATH, "utf-8");
      const config = TOML.parse(configContent);
      res.json(config);
    } catch (err) {
      if (err.code === "ENOENT") {
        // 如果配置文件不存在，返回默认配置
        res.json({
          window: { opacity: 1, title: "Alacritty" },
          font: { size: 11 },
        });
      } else {
        throw err;
      }
    }
  } catch (err) {
    console.error("读取配置文件失败:", err);
    res.status(500).json({ error: "读取配置文件失败" });
  }
});

app.post("/api/config", async (req, res) => {
  try {
    await ensureConfigDir(); // 确保配置目录存在

    const newConfig = req.body;
    const tomlString = TOML.stringify(newConfig);
    await fs.writeFile(CONFIG_PATH, tomlString);
    res.json({ message: "配置更新成功" });
  } catch (err) {
    console.error("更新配置文件失败:", err);
    res.status(500).json({ error: "更新配置文件失败" });
  }
});

app.listen(port, () => {
  console.log(`服务运行在 http://localhost:${port}`);
});
