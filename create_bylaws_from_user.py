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

# Create output
output = """// KOYILI HOSPITAL - COMPLETE BY-LAWS (User's Original Content)
export const byLawsData = {
"""

# Add preamble
output += """  preamble: {
    id: 'preamble',
    title: 'PREAMBLE',
    searchTerms: ['preamble', 'introduction', 'purpose', 'objectives'],
    content: `""" + preamble.replace('`', "'") + """`
  },

  sections: [
"""

# Process each section
for idx, (section_num, section_title, section_content) in enumerate(sections[:30]):  # Limit to 30 sections
    section_title = section_title.strip()
    section_content = section_content.strip()
    
    # Extract subsections if present
    subsection_pattern = r'(\d+\.\d+)\s+([^\n]+)\n(.*?)(?=(?:\d+\.\d+|\Z))'
    subsections = re.findall(subsection_pattern, section_content, re.DOTALL)
    
    # Generate icon and color based on section number
    icons = ['FileText', 'Users', 'Shield', 'Award', 'Heart', 'Activity', 'Calendar', 
             'TrendingUp', 'BookOpen', 'Home', 'DollarSign', 'MessageSquare', 'AlertTriangle',
             'Lock', 'Database', 'LogOut', 'Monitor', 'Leaf', 'Radio', 'Phone',
             'UserCheck', 'Scale', 'Briefcase', 'Heart', 'AlertCircle', 'Lightbulb',
             'Coffee', 'Globe', 'CheckCircle', 'Settings']
    colors = ['blue', 'green', 'red', 'purple', 'indigo', 'pink', 'yellow', 'teal',
              'orange', 'cyan', 'blue', 'green', 'red', 'purple', 'indigo', 'pink',
              'yellow', 'teal', 'orange', 'cyan', 'blue', 'green', 'red', 'purple',
              'indigo', 'pink', 'yellow', 'teal', 'orange', 'cyan']
    
    icon = icons[int(section_num) - 1] if int(section_num) <= len(icons) else 'FileText'
    color = colors[int(section_num) - 1] if int(section_num) <= len(colors) else 'blue'
    
    output += f"""    {{
      section: 'Section {section_num}',
      title: '{section_title.replace("'", "\\'")}',
      searchTerms: {str([section_title.lower().replace("'", "")])},
      icon: '{icon}',
      color: '{color}',
"""
    
    if subsections:
        output += "      subsections: [\n"
        for sub_num, sub_title, sub_content in subsections:
            sub_title_clean = sub_title.strip().replace("'", "\\'")
            sub_content_clean = sub_content.strip().replace('`', "'").replace('\\', '\\\\')
            # Limit content length for very large subsections
            if len(sub_content_clean) > 3000:
                sub_content_clean = sub_content_clean[:3000] + "..."
            
            output += f"""        {{
          number: '{sub_num}',
          title: '{sub_title_clean}',
          content: `{sub_content_clean}`
        }},
"""
        output += "      ]\n"
    else:
        # No subsections found, use main content
        content_clean = section_content.strip().replace('`', "'").replace('\\', '\\\\')
        if len(content_clean) > 3000:
            content_clean = content_clean[:3000] + "..."
        output += f"      content: `{content_clean}`\n"
    
    output += "    }"
    if idx < len(sections) - 1:
        output += ","
    output += "\n"

output += """  ]
};

export const keyHighlights = [
  {
    section: 'Code of Conduct',
    highlight: 'Zero tolerance for harassment, discrimination, or misconduct',
    icon: 'Shield',
    color: 'red'
  },
  {
    section: 'Leave Policy',
    highlight: 'Medical certificate required for sick leave exceeding 3 days',
    icon: 'Calendar',
    color: 'blue'
  },
  {
    section: 'Disciplinary Procedures',
    highlight: 'Principles of natural justice followed in all proceedings',
    icon: 'Scale',
    color: 'purple'
  },
  {
    section: 'Grievance Redressal',
    highlight: 'All grievances acknowledged within 3 working days',
    icon: 'AlertCircle',
    color: 'orange'
  }
];
"""

# Write to file
with open('/app/new_bylaws_data.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("✓ Generated new byLawsData.js with user's content")
print(f"✓ Total sections processed: {len(sections[:30])}")

