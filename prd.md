PRD: "LexIcon Legal" - Premium Law Firm Website
Target Audience: High-net-worth individuals, Corporate Executives.
Design Aesthetic: "Quiet Luxury." Deep Navy blues, warm gold accents, serif typography, plenty of whitespace, glassmorphism in dashboards.

1. Technical Architecture
Tech Stack
Structure: HTML5 (Semantic).
Styling: Tailwind CSS (v3.4+ via CDN for standalone simplicity).
Icons: FontAwesome 6 (Pro/Free via CDN).
Fonts:
Headings: Playfair Display (Serif, for authority).
Body: Plus Jakarta Sans (Sans-serif, for modern readability).
Animations: AOS (Animate On Scroll) Library + Custom CSS for RTL transmission.
File Structure
Law (root)
│── index.html           (Home: The "Legacy" Classic Layout)
│── index2.html          (Home: The "Vanguard" Modern Layout)
│── about.html           (Firm History)
│── services.html        (Practice Areas)
│── team.html            (Partners & Associates)
│── contact.html         (Map & Inquiry)
│── login.html           (Unified Entry)
│── admin-dashboard.html (Lawyer View)
│── user-dashboard.html  (Client View)
│── 404.html             (Error)
│── coming-soon.html     (Launch Timer)
│── assets/
│   ├── img/             (Placeholders)
│── css/
│   └── styles.css       (Custom animations & Tailwind @apply)
│── js/
│   ├── main.js          (UI interactions)
│   └── rtl-toggle.js  (The RTL/LTR Transmission Logic)


2. Design System & Global Styles (Tailwind Config)
Color Palette:
Primary (Navy): bg-slate-900 (#0f172a)
Secondary (Gold): text-amber-600 (#d97706) – Use for buttons/highlights.
Surface (White/Grey): bg-slate-50 (#f8fafc)
Text: text-slate-800 (Dark Grey, never pure black).
UI Components:
Buttons: Sharp corners (rounded-none or rounded-sm). Uppercase text. Tracking wide.
Cards: White background, subtle shadow (shadow-xl), thin gold top border (border-t-4 border-amber-600).
Dashboards: Use "Glassmorphism" – Semi-transparent white backgrounds with blur filters on top of a dark image background.


3. The "Transmission" (RTL/LTR Animation) Logic
Objective: When switching languages, the website must not "snap." It must "transition."
Implementation Plan for language-mgr.js:
The Trigger: A "Globe" icon in the navbar.
The Curtain Effect:
Inject a div called #transmission-curtain (Fixed, z-index 9999, bg-slate-900).
Animation State 1: Curtain slides in from the side (covering the screen).
Logic State: While screen is covered, toggle dir="rtl" on <html> and swap text content.
Animation State 2: Curtain slides out to the other side, revealing the new layout.
Duration: Total sequence 800ms.


4. Page Content & Layout Specifications
    1. Global Header (Navbar)
        Layout: Logo Left | Links Center | Actions Right.
        Sticky: Becomes translucent bg-slate-900/90 with backdrop-blur on scroll.
        Action Items:
        Gold Button: "Case Evaluation"
        Icon: User (Login)
        Icon: Globe (Triggers Animation)
    2. index.html (Home Variant A - "The Authority")
        Hero: Static high-res background (Law Library).
        Headline: "Justice is not just a concept. It is our craft."
        Sub: "Defending the rights of corporations and individuals since 1985."
        UI: Centered layout. Serif Font.
        The "Numbers" Strip: Black bar across screen. Gold text.
        "$5B+ Recovered" | "98% Trial Success" | "Top 100 Global Firms"
        Practice Areas (Carousel):
        Cards sliding horizontally. Images of skyscrapers, gavels, shipping ports.
    3. index2.html (Home Variant B - "The Aggressor")
        Hero: Video Background (Abstract cityscape time-lapse).
        Headline: "WINNING IS THE ONLY OPTION." (Bold, Sans-serif, Huge).
        UI: Left-aligned text. "Get Started" button glows.
        Grid Layout: A "Bento Box" grid (uneven squares).
        Large Square: "Corporate Litigation" (Image)
        Small Square: "IP Protection" (Icon)
        Tall Rectangle: "Meet the Team" (Photo of CEO)
    4. About.html
        Story: "From a single desk in Brooklyn to a global powerhouse."
        Timeline: Vertical line. Dots light up as you scroll down.
        1995: Founded by Arthur Vanguard.
        2010: Merged with Sterling Partners.
        2024: Expanded to Dubai & London.
        Signature: High-res png scan of the founder's signature at the bottom.
    5. Services.html
        Design: Alternating rows (Image Left/Text Right -> Text Left/Image Right).
        Content (Realistic):
        M&A: "Navigating complex cross-border mergers."
        White Collar Defense: "Discreet representation for high-profile executives."
        Intellectual Property: "Protecting your patents in a digital age."
        Animation: Text slides in from the side as you scroll (data-aos="fade-left").
    6. Team.html
        The Partners: Large "Hero" cards.
        Name: Alexander Specter (Managing Partner).
        Quote: "I don't play the odds. I play the man."
        The Associates: 3x3 Grid. Professional headshots.
        Hover Effect: Photo turns Black & White -> Color on hover. LinkedIn icon appears.
    7. Contact.html
        Layout:
            Left: "The Headquarters." Address details with a gold vertical line.
            Right: A minimal form. No borders, just underlines (border-b).
        Content:
            Dropdown: "Nature of Inquiry" (options: Media Inquiry, Representation, Partnership).
    8. Login.html
        Vibe: Very exclusive. Dark background. Gold inputs.
        Functionality:
            Two Toggle Buttons at top: [Client Portal] [Attorney Portal].
            Note: Visual toggle only. Both lead to respective dashboards.

5. Dashboard Specifications (The "Better" UI)
A. User Dashboard (user-dashboard.html)
    Theme: Light, clean, reassuring.
    Sidebar: "My Case", "Billing", "Messages", "Documents".
    Top Alert: "Good Morning, Mr. Wayne. Your hearing is set for tomorrow at 09:00 AM." (Green checkmark).
    Main Component: The Case Timeline (Horizontal)
    Consultation (Completed)
    Discovery (Completed)
    Deposition (Active - Pulsing Gold Circle)
    Trial
    Verdict
    Recent Documents Table:
    Subpoena_response.pdf (Download Icon)
    Settlement_Draft_v2.docx (Eye Icon)
B. Admin Dashboard (admin-dashboard.html)
    Theme: Dark Mode by default (High contrast for data).
    Sidebar: "Overview", "Active Cases", "Court Calendar", "Revenue".
    Top Cards (KPIs):
    Billable Hours: 142h (↑ 12% vs last week)
    Win Rate: 94%
    Pending Invoices: $450,000
    Central Widget: "The War Room" (Table)
    Case: State of NY vs. Jones
    Opposing Counsel: Hamlin McGill
    Status: <span class="bg-red-500 text-white text-xs px-2 py-1 rounded">Urgent</span>
    Next Action: File Motion to Dismiss.
    Right Sidebar (Calendar):
    List of meetings. "Lunch with Judge Judy", "Deposition with Client X".

___________________________________________________________
6. Prompt Instructions for GitHub Copilot
Copy and paste these prompts sequentially into Copilot Chat:

Phase 1: Setup & Design System
"Create a file structure for a frontend website named 'Vanguard Legal'. Start with style.css and tailwind.config.js (or CDN link setup). Define a custom color palette: Navy (#0f172a) and Gold (#d97706). Set up the Google Fonts 'Playfair Display' and 'Plus Jakarta Sans'. Create a shared header and footer component in HTML that looks high-end and professional. The header must have a Globe icon for language toggling."

Phase 2: The Logic (RTL Animation)
"Write the js/language-mgr.js file. It needs to handle an LTR to RTL switch.
Create a function toggleLanguage().
When clicked, create a full-screen div (the curtain) that slides in from the left (0.4s).
Once the screen is covered, switch the dir attribute on the HTML tag to 'rtl' and swap the text content of the Navbar links to Arabic (mock data).
Then, slide the curtain out to the right (0.4s).
Use LocalStorage to remember the choice."

Phase 3: The Home Pages
"Create index.html. It should be the 'Classic' version. Use a full-screen background image of a law library with a dark overlay. Center the text. Add a 'Stats Strip' at the bottom.
Then create index2.html as the 'Modern' version. Use a split-screen layout (Text Left, Image Right) and a 'Bento Grid' for the features section. Make sure all buttons have a gold hover effect."

Phase 4: Inner Pages
"Create about.html with a vertical timeline animation using AOS library classes.
Create services.html with alternating text/image rows.
Create team.html featuring a grid of lawyers. Add a hover effect where the lawyer's image zooms in slightly and social icons appear."

Phase 5: The Dashboards (Crucial)
"Create user-dashboard.html. Use a sidebar layout. The main content should feature a 'Progress Timeline' with 5 steps (Discovery, Hearing, etc.) showing the current active step.
Create admin-dashboard.html. This should be in Dark Mode. Create a data table using Tailwind for 'Active Cases' with status badges (Urgent/Pending). Add a mock 'Revenue Chart' using simple CSS bars."

Phase 6: Login & Utilities
"Create login.html with a split-screen design (Image on left, Form on right). Add a tab switcher for 'Client' vs 'Admin'.
Create a humorous 404.html showing a judge's gavel and the text 'Objection! Page Overruled'.
Create coming-soon.html with a countdown timer."