#!/usr/bin/env python3
"""
Add standardized blue gradient footers to all Professional Annexure forms
"""

import re
import os

forms_to_update = [
    ('ProfessionalE4Form.jsx', 'E4', 'Holiday Calendar Template'),
    ('ProfessionalE5Form.jsx', 'E5', 'Compensatory Off Application'),
    ('ProfessionalC1Form.jsx', 'C1', 'Orientation Checklist'),
    ('ProfessionalC2Form.jsx', 'C2', 'ID Card & Uniform Request'),
    ('ProfessionalC3Form.jsx', 'C3', 'IT Access Request'),
    ('ProfessionalC4Form.jsx', 'C4', 'Confidentiality Declaration'),
    ('ProfessionalC5Form.jsx', 'C5', 'Clinical Credentialing'),
    ('ProfessionalD1Form.jsx', 'D1', 'Job Description Template'),
    ('ProfessionalD2Form.jsx', 'D2', 'Performance Appraisal'),
    ('ProfessionalD3Form.jsx', 'D3', 'Goal Setting Worksheet'),
    ('ProfessionalD4Form.jsx', 'D4', 'PIP Form'),
    ('ProfessionalD5Form.jsx', 'D5', 'Promotion Proposal'),
    ('ProfessionalB1Form.jsx', 'B1', 'Recruitment Requisition'),
    ('ProfessionalB2Form.jsx', 'B2', 'Job Posting Approval'),
    ('ProfessionalB3Form.jsx', 'B3', 'Candidate Interview Evaluation'),
    ('ProfessionalB4Form.jsx', 'B4', 'Reference Check Form'),
    ('ProfessionalB5Form.jsx', 'B5', 'Offer Letter Template'),
    ('ProfessionalB6Form.jsx', 'B6', 'Background Verification'),
    ('ProfessionalB7Form.jsx', 'B7', 'Joining Formalities'),
    ('ProfessionalB8Form.jsx', 'B8', 'Probation Review'),
    ('ProfessionalB9Form.jsx', 'B9', 'Employee Exit Interview'),
    ('ProfessionalB10Form.jsx', 'B10', 'Resignation Acceptance'),
    ('ProfessionalA2Form.jsx', 'A2', 'Policy Dissemination Log'),
    ('ProfessionalA3Form.jsx', 'A3', 'Policy Training Record'),
    ('ProfessionalA4Form.jsx', 'A4', 'Employee Handbook Acknowledgment'),
]

base_path = '/app/frontend/src/components/hr/forms/'

def generate_standard_footer(annexure_code, form_title_short):
    """Generate the standardized blue gradient footer"""
    return '''
      {/* Matching Blue Gradient Footer */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-5 mt-8">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xs">NABH</span>
            </div>
            <div>
              <p className="text-sm font-semibold">© 2024 Koyili Hospital</p>
              <p className="text-xs text-blue-200">NABH Accredited • Confidential Document • Version-controlled</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold">Form ''' + annexure_code + '''</p>
            <p className="text-xs text-blue-200">''' + form_title_short + '''</p>
          </div>
        </div>
      </div>'''

def add_footer_to_form(filepath, filename, annexure_code, form_title):
    """Add or replace footer in form file"""
    print(f"Processing: {filename}")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Check if form already has the new blue gradient footer
        if 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-5' in content and '© 2024 Koyili Hospital' in content:
            print(f"  ℹ️  Already has standardized footer\n")
            return False
        
        # Find and remove any existing gradient footer
        # Pattern: Look for gradient footer before the closing </div></div> at end
        old_footer_patterns = [
            r'<div className="border-t-2 border-\w+-\d+ bg-gradient-to-r[^>]*?>.*?</div>\s*</div>',
            r'<div className="bg-gradient-to-r from-\w+-\d+[^>]*?px-8 py-[456][^>]*?>.*?</div>\s*</div>',
        ]
        
        for pattern in old_footer_patterns:
            # Search for pattern in last 2000 chars
            search_area = content[-2000:]
            matches = list(re.finditer(pattern, search_area, re.DOTALL))
            if matches:
                last_match = matches[-1]
                match_start = len(content) - 2000 + last_match.start()
                match_end = len(content) - 2000 + last_match.end()
                content = content[:match_start] + content[match_end:]
                print(f"  ✓ Removed old footer")
                break
        
        # Find the position to insert footer (before closing </div> tags and export)
        # Look for the pattern: </div>\n  );\n};\n\nexport default
        insert_pattern = r'(</div>\s*</div>\s*\n\s*\);\s*\n\};\s*\n\s*export default)'
        match = re.search(insert_pattern, content)
        
        if not match:
            # Try alternate pattern
            insert_pattern = r'(</div>\s*\n\s*\);\s*\n\};\s*\n\s*export default)'
            match = re.search(insert_pattern, content)
        
        if match:
            insert_pos = match.start()
            new_footer = generate_standard_footer(annexure_code, form_title)
            content = content[:insert_pos] + new_footer + '\n    ' + content[insert_pos:]
            print(f"  ✓ Added standardized blue gradient footer")
        else:
            print(f"  ⚠ Could not find insertion point")
        
        # Write back if changed
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✅ {filename} successfully updated!\n")
            return True
        else:
            print(f"  ℹ️ No changes made\n")
            return False
            
    except Exception as e:
        print(f"  ❌ Error: {e}\n")
        return False

def main():
    """Main execution"""
    print("="*80)
    print("ADDING STANDARDIZED FOOTERS TO ANNEXURE FORMS")
    print("="*80 + "\n")
    
    updated_count = 0
    
    for filename, code, title in forms_to_update:
        filepath = os.path.join(base_path, filename)
        
        if not os.path.exists(filepath):
            print(f"⚠️  File not found: {filename}\n")
            continue
        
        if add_footer_to_form(filepath, filename, code, title):
            updated_count += 1
    
    print("="*80)
    print(f"FOOTER UPDATE COMPLETE")
    print(f"Successfully updated: {updated_count} forms")
    print("="*80)

if __name__ == '__main__':
    main()
