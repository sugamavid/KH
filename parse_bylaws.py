import re
import json

# Read the original bylaws
with open('/app/original_bylaws.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Find preamble
preamble_match = re.search(r'PREAMBLE\n(.*?)(?=KOYILI HOSPITAL HUMAN RESOURCE BY-LAWS\s+Section 1)', content, re.DOTALL)
if preamble_match:
    preamble_text = preamble_match.group(1).strip()
    print("PREAMBLE FOUND")
    print("="*50)
    print(preamble_text[:500])
else:
    print("PREAMBLE NOT FOUND")

# Find all sections
sections = re.findall(r'Section (\d+):\s+([^\n]+)', content)
print(f"\n\nFOUND {len(sections)} SECTIONS:")
for num, title in sections[:10]:
    print(f"Section {num}: {title}")

