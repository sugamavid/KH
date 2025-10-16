#!/usr/bin/env python3
"""
Fix JSX structure errors caused by bulk branding update scripts.
Removes extra closing div tags that are breaking JSX compilation.
"""

import re
import os

# All files that need fixing based on compilation errors
files_to_fix = [
    'ProfessionalA1Form.jsx',
    'ProfessionalA2Form.jsx',
    'ProfessionalA3Form.jsx',
    'ProfessionalA4Form.jsx',
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
    'ProfessionalE4Form.jsx',
    'ProfessionalE5Form.jsx',
    'ProfessionalF2Form.jsx',
    'ProfessionalF3Form.jsx',
    'ProfessionalF4Form.jsx',
    'ProfessionalF5Form.jsx',
    'ProfessionalG2Form.jsx',
]

base_path = '/app/frontend/src/components/hr/forms/'

def fix_file(filepath, filename):
    """Fix JSX structure issues in a single file"""
    print(f"Fixing: {filename}")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        lines = content.split('\n')
        
        # Pattern 1: Remove standalone </div> after the blue gradient header
        # Look for pattern: </div>\n      </div>\n\n where second </div> is orphaned
        pattern1 = re.compile(
            r'(bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700.*?</div>\s*</div>\s*</div>)\s*</div>(\s*\n\s*<div className="bg-)',
            re.DOTALL
        )
        
        if pattern1.search(content):
            content = pattern1.sub(r'\1\2', content)
            print(f"  ✓ Removed extra </div> after header")
        
        # Pattern 2: Fix footer insertion issues (unterminated JSX)
        # The footer was inserted but may have broken structure
        # Look for cases where footer starts but wrapper div is missing
        
        # Check if fix was applied
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✅ {filename} fixed!\n")
            return True
        else:
            # Try line-by-line approach for stubborn cases
            fixed_lines = []
            i = 0
            while i < len(lines):
                line = lines[i]
                
                # Check if this is an orphaned </div> after header
                if i > 0 and line.strip() == '</div>' and i < len(lines) - 1:
                    prev_line = lines[i-1].strip()
                    next_line = lines[i+1].strip() if i+1 < len(lines) else ''
                    
                    # If previous line is closing div of header and next is empty or new section
                    if '</div>' in prev_line and (next_line == '' or next_line.startswith('<div className=')):
                        # Check if this is genuinely extra by counting divs before
                        context_start = max(0, i - 20)
                        context = '\n'.join(lines[context_start:i+1])
                        
                        # Count opening and closing divs in context
                        open_count = context.count('<div')
                        close_count = context.count('</div>')
                        
                        if close_count > open_count:
                            print(f"  ✓ Skipping orphaned </div> at line {i+1}")
                            i += 1
                            continue
                
                fixed_lines.append(line)
                i += 1
            
            content = '\n'.join(fixed_lines)
            
            if content != original_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"  ✅ {filename} fixed (line-by-line)!\n")
                return True
            else:
                print(f"  ℹ️ No automatic fix applied - may need manual review\n")
                return False
            
    except Exception as e:
        print(f"  ❌ Error: {e}\n")
        return False

def main():
    """Main execution"""
    print("="*80)
    print("JSX STRUCTURE FIX - Correcting Bulk Update Errors")
    print("="*80 + "\n")
    
    fixed_count = 0
    
    for filename in files_to_fix:
        filepath = os.path.join(base_path, filename)
        
        if not os.path.exists(filepath):
            print(f"⚠️  File not found: {filename}\n")
            continue
        
        if fix_file(filepath, filename):
            fixed_count += 1
    
    print("="*80)
    print(f"FIX COMPLETE")
    print(f"Files processed: {len(files_to_fix)}")
    print(f"Files fixed: {fixed_count}")
    print("="*80)

if __name__ == '__main__':
    main()
