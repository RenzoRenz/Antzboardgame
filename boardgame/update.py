import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace img src with data-src
content = content.replace('<img loading="lazy" src="', '<img loading="lazy" data-src="')

# Add script before closing body tag if not already there
if 'lazy-load.js' not in content:
    content = content.replace('</body>', '<script src="lazy-load.js"></script>\n</body>')

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Successfully updated index.html')
