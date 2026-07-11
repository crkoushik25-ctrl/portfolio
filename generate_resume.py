import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume():
    # Make sure public directory exists
    os.makedirs("public", exist_ok=True)
    pdf_path = "public/resume.pdf"
    
    # 0.5 inch margins to maximize single page space
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    # Primary Color: Slate / Dark Navy Blue
    primary_color = colors.HexColor("#0F172A")
    secondary_color = colors.HexColor("#334155")
    accent_color = colors.HexColor("#0284C7") # Sky blue accent
    text_color = colors.HexColor("#1E293B")
    
    # Base Styles
    styles = getSampleStyleSheet()
    
    # Custom Paragraph Styles
    style_name = ParagraphStyle(
        'Name',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=primary_color,
        spaceAfter=4
    )
    
    style_contact = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=secondary_color,
        spaceAfter=8
    )
    
    style_section_title = ParagraphStyle(
        'SectionTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=primary_color,
        spaceAfter=2,
        keepWithNext=True
    )
    
    style_item_title = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=primary_color,
        keepWithNext=True
    )
    
    style_item_subtitle = ParagraphStyle(
        'ItemSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=11,
        textColor=secondary_color,
        keepWithNext=True
    )
    
    style_item_right = ParagraphStyle(
        'ItemRight',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=11,
        alignment=TA_RIGHT,
        textColor=secondary_color
    )
    
    style_body = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=text_color,
        spaceAfter=4
    )
    
    style_skills = ParagraphStyle(
        'Skills',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_color
    )

    story = []
    
    # --- HEADER ---
    story.append(Paragraph("KOUSHIK PRABHU C R", style_name))
    
    contact_text = (
        "crkoushik25@gmail.com  |  +91 9597847174  |  Coimbatore, India  |<br/>"
        "GitHub: github.com/crkoushik25-ctrl  |  LinkedIn: linkedin.com/in/koushik-prabhu"
    )
    story.append(Paragraph(contact_text, style_contact))
    
    def add_section_divider(title):
        story.append(Spacer(1, 4))
        story.append(Paragraph(title.upper(), style_section_title))
        # HR Flowable for thin underline
        story.append(HRFlowable(
            width="100%", 
            thickness=1, 
            color=primary_color, 
            spaceBefore=2, 
            spaceAfter=6
        ))
        
    # --- EDUCATION ---
    add_section_divider("Education")
    
    edu_left = Paragraph("<b>PSG College of Arts and Science</b>, Coimbatore", style_item_title)
    edu_right = Paragraph("2024 – 2027", style_item_right)
    edu_sub_left = Paragraph("Bachelor of Science in Information Technology (B.Sc. IT)", style_item_subtitle)
    edu_sub_right = Paragraph("Pursuing", style_item_right)
    
    # We use tables for clean side-by-side positioning
    edu_table_data = [
        [edu_left, edu_right],
        [edu_sub_left, edu_sub_right]
    ]
    edu_table = Table(edu_table_data, colWidths=[400, 140])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(edu_table)
    
    edu_body = (
        "<b>Core Coursework:</b> Software Engineering, Object-Oriented Programming (Python, C++, Java), "
        "Database Management Systems (SQL), Web Technologies, Creative Digital Design, and CGI Media."
    )
    story.append(Spacer(1, 2))
    story.append(Paragraph(edu_body, style_body))
    
    # --- EXPERIENCE ---
    add_section_divider("Work Experience")
    
    exp_left = Paragraph("<b>Full Stack Django Developer Intern</b>", style_item_title)
    exp_right = Paragraph("May 2026", style_item_right)
    exp_sub_left = Paragraph("Robomatiic (A Division of CADD Technologies) | Coimbatore, India", style_item_subtitle)
    exp_sub_right = Paragraph("", style_item_right)
    
    exp_table_data = [
        [exp_left, exp_right],
        [exp_sub_left, exp_sub_right]
    ]
    exp_table = Table(exp_table_data, colWidths=[400, 140])
    exp_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(exp_table)
    
    exp_body = (
        "• Completed intensive internship training program focused on Full Stack Web Development with Django.<br/>"
        "• Designed robust relational database models and integrated scalable REST APIs for server-side logic.<br/>"
        "• Created responsive and interactive front-end user interfaces using HTML5, CSS3, and JavaScript."
    )
    story.append(Spacer(1, 2))
    story.append(Paragraph(exp_body, style_body))
    
    # --- PROJECTS ---
    add_section_divider("Projects")
    
    # Project 1: PrepNova
    p1_title = Paragraph("<b>PrepNova – Placement Preparation Portal</b>", style_item_title)
    p1_tech = Paragraph("React, Django, SQL, CSS Grid, Chart.js", style_item_right)
    p1_desc = (
        "• Built an interactive web platform designed to streamline student placement preparation.<br/>"
        "• Implemented diagnostic assessments, structured learning paths, and progress tracking visualizations using Chart.js.<br/>"
        "• Integrated dynamic AI-driven feedback loops to provide custom recommendations to candidates."
    )
    p1_table = Table([[p1_title, p1_tech]], colWidths=[360, 180])
    p1_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(p1_table)
    story.append(Paragraph(p1_desc, style_body))
    
    story.append(Spacer(1, 2))
    
    # Project 2: Movie Trailer Website
    p2_title = Paragraph("<b>Movie Trailer Website</b>", style_item_title)
    p2_tech = Paragraph("React, CSS Flexbox, TMDB API, Lucide Icons", style_item_right)
    p2_desc = (
        "• Developed a visually immersive movie search and exploration web application using TMDB API.<br/>"
        "• Programmed dynamic filtering capabilities to sort movies by custom genres and popularity ratings.<br/>"
        "• Structured a clean layout allowing users to view high-definition trailer videos and detailed synopsis profiles."
    )
    p2_table = Table([[p2_title, p2_tech]], colWidths=[360, 180])
    p2_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(p2_table)
    story.append(Paragraph(p2_desc, style_body))
    
    story.append(Spacer(1, 2))
    
    # Project 3: Learn-to-Code
    p3_title = Paragraph("<b>Learn-to-Code Static Portal</b>", style_item_title)
    p3_tech = Paragraph("HTML5, CSS3, JavaScript", style_item_right)
    p3_desc = (
        "• Created a multi-page static educational portal to help beginners grasp HTML & CSS basics.<br/>"
        "• Embedded video lessons, navigation panels, and interactive elements for structured course tutorials.<br/>"
        "• Formatted responsive CSS layouts featuring a video-background landing page."
    )
    p3_table = Table([[p3_title, p3_tech]], colWidths=[360, 180])
    p3_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(p3_table)
    story.append(Paragraph(p3_desc, style_body))
    
    # --- SKILLS ---
    add_section_divider("Skills")
    
    skills_data = [
        [Paragraph("<b>Languages & Frameworks:</b>", style_item_title), Paragraph("Python, Java, C/C++, JavaScript, React, Django, SQL, HTML5, CSS3", style_skills)],
        [Paragraph("<b>Creative & CGI Tools:</b>", style_item_title), Paragraph("Adobe Premiere Pro, After Effects, Final Cut Pro, DaVinci Resolve, Blender 3D, Photoshop", style_skills)],
        [Paragraph("<b>Productivity & UI/UX:</b>", style_item_title), Paragraph("Figma UI/UX, MS Excel (Formulas), MS Word, PowerPoint, Database Management", style_skills)]
    ]
    skills_table = Table(skills_data, colWidths=[140, 400])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(skills_table)
    
    # --- CERTIFICATIONS & ACHIEVEMENTS ---
    add_section_divider("Certifications & Achievements")
    
    cert_ach_text = (
        "• <b>Certifications:</b> C++ Programming for College Students (Udemy, 2026) | "
        "The Complete Python Masterclass: Learn Python (Udemy, 2025)<br/>"
        "• <b>Short Film Screened at Coimbatore Vizha:</b> Collaborated on CGI/3D Blender animations and video editing; film officially screened.<br/>"
        "• <b>Sports & Athletics:</b> Secured First Place in school Football Tournaments and 4x100m sprint relay athletic races."
    )
    story.append(Paragraph(cert_ach_text, style_body))
    
    # Build Document
    doc.build(story)
    print("PDF generated successfully at public/resume.pdf")

if __name__ == '__main__':
    create_resume()
