#!/usr/bin/env python3
# Create all H-series forms efficiently

forms = {
    'H1': {
        'title': 'GOAL SETTING & KPI SHEET',
        'subtitle': 'Goal Setting & KPI Sheet',
        'sop': 'SOP H.1 – Performance Management System',
        'bylaws': 'Section 8.1(c) – Performance Appraisal Criteria'
    },
    'H2': {
        'title': 'APPRAISAL FORMAT',
        'subtitle': 'Appraisal Format (Mid-Year / Year-End)',
        'sop': 'SOP H.2 – Performance Appraisal Process',
        'bylaws': 'Section 8.1 – Performance Appraisals'
    },
    'H3': {
        'title': '360-DEGREE FEEDBACK FORM',
        'subtitle': '360-Degree Feedback Form',
        'sop': 'SOP H.3 – 360-Degree Feedback Process',
        'bylaws': 'Section 8.2 – Comprehensive Performance Review'
    },
    'H4': {
        'title': 'PERFORMANCE IMPROVEMENT PLAN',
        'subtitle': 'Performance Improvement Plan (PIP)',
        'sop': 'SOP H.4 – Performance Improvement Process',
        'bylaws': 'Section 8.3 – Performance Management'
    },
    'H5': {
        'title': 'PROMOTION APPLICATION',
        'subtitle': 'Promotion & Internal Job Posting Application',
        'sop': 'SOP H.5 – Career Progression & Promotion',
        'bylaws': 'Section 9 – Career Development'
    }
}

for form_num, details in forms.items():
    print(f"Would create Professional{form_num}Form.jsx - {details['title']}")

print("\nAll H-series forms mapped!")
