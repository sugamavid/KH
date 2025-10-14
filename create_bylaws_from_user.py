import re

# Read user's original bylaws
with open('/app/user_bylaws.txt', 'r', encoding='utf-8') as f:
    full_content = f.read()

# Extract preamble
preamble_match = re.search(r'PREAMBLE\s*\n(.*?)(?=KOYILI HOSPITAL HUMAN RESOURCE BY-LAWS)', full_content, re.DOTALL)
preamble = preamble_match.group(1).strip() if preamble_match else ""

# Split into sections
section_pattern = r'Section (\d+):\s*([^\n]+)\n(.*?)(?=(?:Section \d+:|$))'
sections = re.findall(section_pattern, full_content, re.DOTALL)

print(f"Found {len(sections)} sections")
print(f"Preamble length: {len(preamble)} chars")

# Save parsed data to temporary file for easier processing
with open('/app/parsed_sections.txt', 'w', encoding='utf-8') as f:
    f.write(f"TOTAL_SECTIONS:{len(sections)}\n")
    f.write(f"PREAMBLE_LENGTH:{len(preamble)}\n")
    for section_num, section_title, section_content in sections[:30]:
        f.write(f"SECTION:{section_num}|{section_title}\n")

print("✓ Parsed sections data saved")

