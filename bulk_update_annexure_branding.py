#!/usr/bin/env python3
"""
Bulk update script to apply standardized NABH-compliant blue gradient header and footer
to all remaining Professional Annexure forms (A1-A4, B1-B10, C1-C5, D1-D5, E4-E5)
"""

import re
import os

# Target forms that need updating
forms_to_update = [
    'ProfessionalE4Form.jsx',
    'ProfessionalE5Form.jsx',
    'ProfessionalC1Form.jsx',
    'ProfessionalC2Form.jsx',
    'ProfessionalC3Form.jsx',
    'ProfessionalC4Form.jsx',
    'ProfessionalC5Form.jsx',
    'ProfessionalD1Form.jsx',
    'ProfessionalD2Form.jsx',
    'ProfessionalD3Form.jsx',
    'ProfessionalD4Form.jsx',
    'ProfessionalD5Form.jsx',
    'ProfessionalB1Form.jsx',
    'ProfessionalB2Form.jsx',
    'ProfessionalB3Form.jsx',
    'ProfessionalB4Form.jsx',
    'ProfessionalB5Form.jsx',
    'ProfessionalB6Form.jsx',
    'ProfessionalB7Form.jsx',
    'ProfessionalB8Form.jsx',
    'ProfessionalB9Form.jsx',
    'ProfessionalB10Form.jsx',
    'ProfessionalA1Form.jsx',
    'ProfessionalA2Form.jsx',
    'ProfessionalA3Form.jsx',
    'ProfessionalA4Form.jsx',
]

base_path = '/app/frontend/src/components/hr/forms/'

# Standard header pattern to match (looking for the old gradient headers)
old_header_pattern = r'<div className="bg-gradient-to-r from-\w+-\d+[^>]*>.*?</div>\s*</div>'

# Standard footer pattern to match
old_footer_pattern = r'<div className="bg-gradient-to-r from-\w+-\d+[^>]*px-8 py-[45].*?</div>\s*</div>\s*</div>'

def extract_form_metadata(content, filename):
    """Extract form-specific metadata like annexure code and title"""
    annexure_code = filename.replace('Professional', '').replace('Form.jsx', '')
    
    # Try to find form title from the content
    title_match = re.search(r'<h2[^>]*>([^<]+)</h2>', content)
    form_title = title_match.group(1).strip() if title_match else "Form"
    
    # Clean up common prefixes
    form_title = form_title.replace('KOYILI HOSPITAL', '').strip()
    form_title = form_title.replace('PROFESSIONAL ANNEXURE', '').strip()
    
    return annexure_code, form_title

def generate_standard_header(annexure_code, form_title):
    """Generate the standardized blue gradient header"""
    return f'''<div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-8 py-6">
        <div className="flex items-center justify-between gap-6">
          <div className="flex-shrink-0">
            {{logoData && <img src={{logoData}} alt="Koyili Hospital Logo" className="w-24 h-24 bg-white rounded-lg p-2 shadow-xl object-contain" />}}
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold tracking-wide mb-1">KOYILI HOSPITAL</h1>
            <p className="text-blue-200 text-sm font-semibold">Human Resources Department</p>
            <p className="text-blue-300 text-xs">NABH Accredited • Pallikkunnu, Talap, Kannur, Kerala</p>
            <div className="mt-3 pt-3 border-t border-blue-400/30">
              <h2 className="text-xl font-bold">{form_title.upper()}</h2>
            </div>
          </div>
          <div className="flex-shrink-0 text-right space-y-2">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200 mb-0.5">Annexure</p>
              <p className="text-2xl font-bold">{annexure_code}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-lg border border-white/20">
              <p className="text-xs text-blue-200">Version 1.0</p>
            </div>
            <div className="bg-yellow-500/90 px-3 py-1 rounded-full">
              <p className="text-xs font-bold text-blue-900">NABH</p>
            </div>
          </div>
        </div>
      </div>'''

def generate_standard_footer(annexure_code, form_title_short):
    """Generate the standardized blue gradient footer"""
    return f'''<div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 px-8 py-5 mt-8">
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
            <p className="text-sm font-bold">Form {annexure_code}</p>
            <p className="text-xs text-blue-200">{form_title_short}</p>
          </div>
        </div>
      </div>'''

def update_form_file(filepath, filename):
    """Update a single form file with standardized header and footer"""
    print(f"Processing: {filename}")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Extract metadata
        annexure_code, form_title = extract_form_metadata(content, filename)
        
        # Find and replace header
        # Look for the opening div with gradient and ending at the closing of that section
        header_start = content.find('<div className="bg-gradient-to-r from-')
        if header_start != -1:
            # Find the end of the header section (usually ends before the content div)
            # We'll look for common patterns that indicate header end
            
            # Strategy: Find the gradient div, then find its matching closing tag
            # Count opening and closing divs
            pos = header_start
            div_count = 0
            in_header = False
            header_end = -1
            
            while pos < len(content):
                if content[pos:pos+5] == '<div ':
                    div_count += 1
                    if not in_header:
                        in_header = True
                elif content[pos:pos+6] == '</div>':
                    div_count -= 1
                    if in_header and div_count == 0:
                        header_end = pos + 6
                        break
                pos += 1
            
            if header_end != -1:
                old_header = content[header_start:header_end]
                new_header = generate_standard_header(annexure_code, form_title)
                content = content[:header_start] + new_header + content[header_end:]
                print(f"  ✓ Header updated for {annexure_code}")
            else:
                print(f"  ⚠ Could not find header end for {filename}")
        
        # Find and replace footer (at the end of the file, before closing tags)
        # Look for gradient footer near the end
        footer_pattern = re.compile(
            r'<div className="bg-gradient-to-r from-[^"]+?"[^>]*?>.*?</div>\s*</div>\s*</div>',
            re.DOTALL
        )
        
        # Search in the last 3000 characters for the footer
        search_start = max(0, len(content) - 3000)
        footer_search = content[search_start:]
        footer_matches = list(footer_pattern.finditer(footer_search))
        
        if footer_matches:
            # Take the last match (should be the footer)
            last_match = footer_matches[-1]
            footer_start_rel = last_match.start()
            footer_end_rel = last_match.end()
            
            footer_start = search_start + footer_start_rel
            footer_end = search_start + footer_end_rel
            
            # Generate short title for footer
            short_title = form_title[:40] + '...' if len(form_title) > 40 else form_title
            new_footer = generate_standard_footer(annexure_code, short_title)
            
            content = content[:footer_start] + new_footer + content[footer_end:]
            print(f"  ✓ Footer updated for {annexure_code}")
        else:
            print(f"  ⚠ Could not find footer for {filename}")
        
        # Only write if content changed
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✅ {filename} successfully updated!\n")
            return True
        else:
            print(f"  ℹ️ No changes needed for {filename}\n")
            return False
            
    except Exception as e:
        print(f"  ❌ Error processing {filename}: {e}\n")
        return False

def main():
    """Main execution function"""
    print("="*80)
    print("BULK ANNEXURE FORM BRANDING UPDATE")
    print("Applying NABH-compliant blue gradient header/footer to 26 forms")
    print("="*80 + "\n")
    
    updated_count = 0
    failed_count = 0
    
    for filename in forms_to_update:
        filepath = os.path.join(base_path, filename)
        
        if not os.path.exists(filepath):
            print(f"⚠️  File not found: {filename}\n")
            failed_count += 1
            continue
        
        if update_form_file(filepath, filename):
            updated_count += 1
    
    print("="*80)
    print(f"BULK UPDATE COMPLETE")
    print(f"Successfully updated: {updated_count} forms")
    print(f"Failed/Skipped: {failed_count} forms")
    print("="*80)

if __name__ == '__main__':
    main()
