#!/usr/bin/env python3
"""
Fix unbalanced div tags in specific forms by adding missing closing tags
"""

import re

files_to_fix = {
    'ProfessionalG2Form.jsx': 11,
    'ProfessionalF2Form.jsx': 14,
    'ProfessionalF3Form.jsx': 13,
    'ProfessionalF4Form.jsx': 12,
    'ProfessionalF5Form.jsx': 13,
}

base_path = '/app/frontend/src/components/hr/forms/'

for filename, missing_count in files_to_fix.items():
    filepath = base_path + filename
    print(f"Fixing {filename} (adding {missing_count} closing divs)...")
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Find the position right before the final `  );\n};`
    pattern = r'(</div>\s*\n\s*\);\s*\n\};\s*\n\s*export default)'
    match = re.search(pattern, content)
    
    if match:
        insert_pos = match.start() + len('</div>')
        closing_tags = '\n      </div>' * missing_count
        content = content[:insert_pos] + closing_tags + content[insert_pos:]
        
        with open(filepath, 'w') as f:
            f.write(content)
        
        print(f"  ✅ Added {missing_count} closing </div> tags\n")
    else:
        print(f"  ❌ Could not find insertion point\n")

print("Complete!")
