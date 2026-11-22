"""Build dist/skill-to-income.html: one self-contained file (CSS + all JS inlined).
Run from the project folder:  python tools/build.py
Use the dist file to publish or share; use index.html while editing."""
import pathlib, re
root = pathlib.Path(__file__).resolve().parent.parent
html = (root / "index.html").read_text(encoding="utf-8")
css = (root / "css" / "styles.css").read_text(encoding="utf-8")
html = html.replace('<link rel="stylesheet" href="css/styles.css">', "<style>\n" + css + "</style>")
# The single file cannot carry the font files or a script-blocking policy (its scripts are inline), so it uses
# Google Fonts and leaves out the page's own Content-Security-Policy. The server sends its own policy for index.html.
html = re.sub(r'<meta http-equiv="Content-Security-Policy"[^>]*>\n', "", html)
html = re.sub(r'<link rel="preload" href="fonts/[^>]*>\n', "", html)
html = html.replace('<link rel="stylesheet" href="css/fonts.css">', '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Atkinson+Hyperlegible:wght@400;700&family=JetBrains+Mono:wght@500&display=swap">')
def inline(m):
    return "<script>\n" + (root / m.group(1)).read_text(encoding="utf-8") + "</script>"
html = re.sub(r'<script src="([^"]+)"></script>', inline, html)
out = root / "dist" / "skill-to-income.html"
out.write_text(html, encoding="utf-8")
print("Built", out, f"({out.stat().st_size // 1024} KB)")
