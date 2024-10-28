# Alacritty 配置管理器

一个基于 Web 界面的 Alacritty 终端配置管理工具，支持可视化编辑 Alacritty 的所有配置项。

代码全部由`Cursor` 自动生成。

## 功能特点

- 🌐 基于 Web 界面，易于使用
- 📝 支持 Alacritty 的所有配置项
- 💾 实时保存配置
- 🖥️ 跨平台支持 (Windows, macOS, Linux)
- 🔄 自动创建配置目录和文件

## 安装

1. 确保你的系统已安装 [Node.js](https://nodejs.org/) (版本 14.0.0 或更高)

2. 克隆仓库：
   ```bash
   git clone git@github.com:leolord/alacritty-config.git
   cd alacritty-config
   ```

3. 安装依赖：
   ```bash
   npm install
   ```

## 使用方法

1. 启动服务：
   ```bash
   node src/server.js
   ```

2. 打开浏览器访问：
   ```
   http://localhost:3000
   ```

3. 通过 Web 界面修改配置，点击"保存配置"按钮使更改生效

## 配置文件位置

配置文件会自动保存在以下位置：

- Windows: `%APPDATA%\alacritty\alacritty.toml`
- macOS: `~/.config/alacritty/alacritty.toml`
- Linux: `~/.config/alacritty/alacritty.toml`

## 支持的配置项

- 常规设置
  - 工作目录
  - 实时配置重载
- 窗口设置
  - 窗口尺寸
  - 不透明度
  - 装饰风格
  - 启动模式
  - 窗口标题
- 字体设置
  - 字体系列
  - 字体样式
  - 字体大小
  - 字符绘制
- 颜色设置
  - 主题颜色
  - 光标颜色
- 光标设置
  - 光标样式
  - 闪烁设置
- 滚动设置
  - 历史记录
  - 滚动倍数

## 开发

### 项目结构

```
alacritty-config-manager/
├── src/
│ └── server.js # 后端服务器代码
├── public/
│ └── index.html # 前端界面
├── package.json
└── README.md
```


### 技术栈

- 后端：Node.js + Express
- 前端：原生 HTML/CSS/JavaScript
- 配置格式：TOML

## 注意事项

1. 确保你有权限访问和修改 Alacritty 配置文件
2. 修改配置后需要重启 Alacritty 才能使某些更改生效
3. 建议在修改配置前备份原有配置文件

## 故障排除

如果遇到问题：

1. 确认 Alacritty 配置目录存在
2. 检查配置文件权限
3. 查看控制台输出的错误信息
4. 确保端口 3000 未被占用

## 贡献

欢迎提交 Pull Requests 和 Issues！

## 许可证

MIT License

## 相关链接

- [Alacritty 官方文档](https://alacritty.org/)
- [Alacritty 配置文档](https://alacritty.org/config-alacritty.html)

## 更新日志

### v1.0.0

- 初始版本发布
- 支持基本配置项管理
- 提供 Web 界面