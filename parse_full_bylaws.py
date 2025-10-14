import re
import json

def parse_bylaws():
    """Parse the complete user By-Laws document and generate JavaScript data structure"""
    
    with open('/app/user_bylaws.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the start of the actual content (after table of contents)
    preamble_start = content.find('PREAMBLE\n')
    if preamble_start == -1:
        print("ERROR: Could not find PREAMBLE")
        return
    
    # Extract preamble
    preamble_text = []
    lines = content[preamble_start:].split('\n')
    
    preamble_lines = []
    i = 1  # Skip "PREAMBLE" line
    while i < len(lines) and not lines[i].startswith('KOYILI HOSPITAL HUMAN RESOURCE BY-LAWS'):
        if lines[i].strip():
            preamble_lines.append(lines[i].strip())
        i += 1
    
    preamble_content = ' '.join(preamble_lines)
    
    # Split content into sections
    section_pattern = r'^(?:Amended )?Section (\d+):(.*?)$'
    section_matches = list(re.finditer(section_pattern, content[preamble_start:], re.MULTILINE))
    
    sections_data = {}
    
    # Process preamble
    sections_data['preamble'] = {
        'id': 'preamble',
        'title': 'PREAMBLE',
        'searchTerms': ['preamble', 'introduction', 'purpose', 'objectives'],
        'content': preamble_content
    }
    
    print(f"Found {len(section_matches)} sections")
    
    # Process each section
    for idx, match in enumerate(section_matches):
        section_num = int(match.group(1))
        section_title = match.group(2).strip()
        
        # Get section content
        start_pos = match.end()
        if idx < len(section_matches) - 1:
            end_pos = section_matches[idx + 1].start()
        else:
            end_pos = len(content[preamble_start:])
        
        section_content = content[preamble_start + start_pos:preamble_start + end_pos]
        
        # Parse subsections
        subsections = parse_subsections(section_content, section_num)
        
        # Generate search terms
        search_terms = generate_search_terms(section_title)
        
        section_key = f'section{section_num}'
        sections_data[section_key] = {
            'section': f'Section {section_num}',
            'title': section_title,
            'searchTerms': search_terms,
            'icon': get_icon_for_section(section_num),
            'color': get_color_for_section(section_num),
            'subsections': subsections
        }
        
        print(f"Processed Section {section_num}: {section_title} ({len(subsections)} subsections)")
    
    return sections_data

def parse_subsections(section_content, section_num):
    """Parse subsections within a section"""
    subsections = []
    
    # Pattern to match subsection titles (lines that are not indented and end with a colon or are title-cased)
    lines = section_content.split('\n')
    
    current_subsection = None
    current_content = []
    subsection_counter = 1
    
    for line in lines:
        line_stripped = line.strip()
        
        if not line_stripped:
            continue
        
        # Check if this is a subsection title (title-cased, short, no full sentences)
        is_title = (
            line_stripped and 
            len(line_stripped) < 100 and
            line_stripped[0].isupper() and
            not line_stripped.endswith('.') and
            ':' in line_stripped[-20:] or
            (line_stripped[0].isupper() and len(line_stripped.split()) <= 8 and not line_stripped.endswith(','))
        )
        
        if is_title and not line_stripped.endswith(','):
            # Save previous subsection
            if current_subsection:
                subsections.append({
                    'number': f'{section_num}.{subsection_counter}',
                    'title': current_subsection,
                    'content': '\n'.join(current_content).strip()
                })
                subsection_counter += 1
            
            # Start new subsection
            current_subsection = line_stripped.rstrip(':')
            current_content = []
        else:
            # Add to current subsection content
            if current_subsection:
                current_content.append(line_stripped)
    
    # Save last subsection
    if current_subsection:
        subsections.append({
            'number': f'{section_num}.{subsection_counter}',
            'title': current_subsection,
            'content': '\n'.join(current_content).strip()
        })
    
    return subsections

def generate_search_terms(title):
    """Generate search terms from section title"""
    # Convert title to lowercase and split into words
    words = re.findall(r'\w+', title.lower())
    # Remove common words
    common_words = {'and', 'the', 'for', 'of', 'in', 'to', 'a', 'an', 'or'}
    terms = [w for w in words if w not in common_words and len(w) > 2]
    return terms[:5]  # Return top 5 terms

def get_icon_for_section(section_num):
    """Map section numbers to appropriate icons"""
    icon_map = {
        1: 'FileText', 2: 'Users', 3: 'Shield', 4: 'Award', 5: 'Heart',
        6: 'Activity', 7: 'Calendar', 8: 'TrendingUp', 9: 'BookOpen', 10: 'Home',
        11: 'DollarSign', 12: 'MessageSquare', 13: 'Shield', 14: 'AlertCircle', 15: 'Lock',
        16: 'LogOut', 17: 'Monitor', 18: 'Globe', 19: 'MessageCircle', 20: 'Heart',
        21: 'UserCheck', 22: 'CheckCircle', 23: 'Users', 24: 'Smile', 25: 'AlertTriangle',
        26: 'Zap', 27: 'Clock', 28: 'Gift', 29: 'CheckSquare', 30: 'FileText'
    }
    return icon_map.get(section_num, 'FileText')

def get_color_for_section(section_num):
    """Map section numbers to colors"""
    colors = ['blue', 'green', 'red', 'purple', 'indigo', 'pink', 'orange', 'teal', 'cyan', 'lime']
    return colors[section_num % len(colors)]

def escape_js_string(s):
    """Escape string for JavaScript"""
    s = s.replace('\\', '\\\\')
    s = s.replace('`', '\\`')
    s = s.replace('${', '\\${')
    return s

def generate_javascript_file(sections_data):
    """Generate the complete byLawsData.js file"""
    
    js_content = "// KOYILI HOSPITAL - HUMAN RESOURCE BY-LAWS (User's Original Content - All 30 Sections)\n\n"
    js_content += "export const byLawsData = {\n"
    
    # Add preamble
    preamble = sections_data['preamble']
    js_content += "  preamble: {\n"
    js_content += f"    id: '{preamble['id']}',\n"
    js_content += f"    title: '{preamble['title']}',\n"
    js_content += f"    searchTerms: {json.dumps(preamble['searchTerms'])},\n"
    js_content += f"    content: `{escape_js_string(preamble['content'])}`\n"
    js_content += "  },\n\n"
    
    # Add all sections
    for i in range(1, 31):
        section_key = f'section{i}'
        if section_key not in sections_data:
            print(f"WARNING: Missing {section_key}")
            continue
        
        section = sections_data[section_key]
        js_content += f"  {section_key}: {{\n"
        js_content += f"    section: '{section['section']}',\n"
        js_content += f"    title: '{escape_js_string(section['title'])}',\n"
        js_content += f"    searchTerms: {json.dumps(section['searchTerms'])},\n"
        js_content += f"    icon: '{section['icon']}',\n"
        js_content += f"    color: '{section['color']}',\n"
        js_content += f"    subsections: [\n"
        
        for subsection in section['subsections']:
            js_content += "      {\n"
            js_content += f"        number: '{subsection['number']}',\n"
            js_content += f"        title: '{escape_js_string(subsection['title'])}',\n"
            js_content += f"        content: `{escape_js_string(subsection['content'])}`\n"
            js_content += "      },\n"
        
        js_content += "    ]\n"
        js_content += "  }" + ("," if i < 30 else "") + "\n\n"
    
    js_content += "};\n\n"
    
    # Add sections array
    js_content += "export const sections = [\n"
    categories = [
        ('Introduction', [0]), ('Foundational', [1, 2]), ('Conduct & Ethics', [3, 4, 5]),
        ('Patient Care', [6]), ('HR Operations', [7, 8, 9, 10, 11, 12]),
        ('Health & Safety', [13]), ('Compliance', [14, 15, 16, 17, 18]),
        ('Support Programs', [19, 20, 21]), ('Governance', [22, 23, 24, 25, 26, 27, 28, 29, 30])
    ]
    
    for section_num in range(1, 31):
        section_key = f'section{section_num}'
        if section_key in sections_data:
            section = sections_data[section_key]
            category = 'General'
            for cat, nums in categories:
                if section_num in nums:
                    category = cat
                    break
            
            js_content += f"  {{ id: '{section_key}', category: '{category}', "
            js_content += f"title: 'Section {section_num}: {escape_js_string(section['title'])}', "
            js_content += f"icon: '{section['icon']}', color: '{section['color']}' }}"
            js_content += "," if section_num < 30 else ""
            js_content += "\n"
    
    js_content += "];\n\n"
    
    # Add quick reference and key highlights
    js_content += """export const quickReferenceData = {
  leaveEntitlements: [
    'Privilege Leave: 18 days per year',
    'Casual Leave: 12 days per year',
    'Sick Leave: 12 days per year',
    'Maternity Leave: 26 weeks (as per law)',
    'Paternity Leave: 5 days'
  ],
  workingHours: [
    'Standard: 8 hours/day, 48 hours/week',
    'Clinical Staff: Shift-based roster',
    'Admin Staff: 9:00 AM - 6:00 PM',
    'Break Time: 1 hour lunch break',
    'Overtime: As per labor law'
  ],
  compensation: [
    'Salary Structure: Basic + HRA + Allowances',
    'Provident Fund: 12% contribution',
    'Gratuity: As per Act (5+ years)',
    'Annual Increment: Performance-based',
    'Bonus: As applicable'
  ],
  probationNotice: [
    'Probation Period: 6 months',
    'Notice Period: 1-3 months',
    'Extension: Up to 3 months',
    'Confirmation: Upon satisfactory performance'
  ]
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
    
    return js_content

if __name__ == '__main__':
    print("Parsing By-Laws document...")
    sections_data = parse_bylaws()
    
    if sections_data:
        print("\nGenerating JavaScript file...")
        js_content = generate_javascript_file(sections_data)
        
        with open('/app/bylaws_parsed.js', 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        print(f"\n✅ Successfully generated bylaws_parsed.js")
        print(f"Total sections: {len([k for k in sections_data.keys() if k.startswith('section')])}")
