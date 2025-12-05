LexIcon High-Fidelity Update

Objective: Upgrade the current "LexIcon" frontend to a premium, international standard. This involves fixing mobile directionality logic and injecting high-density, professional legal content with scroll-triggered animations.

Tech Context: HTML5, Tailwind CSS, Vanilla JS, AOS (Animate on Scroll).

🏗 Task 1: Mobile Header & RTL Logic Overhaul
Context: currently, the RTL toggle might only affect text alignment. but on mobile and desktop, the entire header layout must physically mirror.
Requirement: When dir="rtl" is active, the branding must move to the Right, and the Hamburger Menu/Toggle must move to the Left.

Instructions for Copilot:
Modify nav container: Ensure the main header container uses flex.
Tailwind Logic: Use Tailwind's logical properties or specific RTL modifiers.
Default (LTR): Logo (Left) -> Space -> Menu/Toggle (Right).
RTL State: The container should naturally flip if using standard flex behavior, but ensure justify-between works correctly.

Mobile Dropdown: The mobile menu drawer must slide in from the Right in LTR, and slide in from the Left in RTL.

Update rtl-toggle.js:
Ensure that when the "Globe" icon is clicked on mobile, the layout flips instantly (after the fade animation).
___________________________________________________________
📝 Task 2: High-Fidelity Content Injection

find suitable places for the below contents and add it to the pages if those contents are not exist now.

The Legal Process (Animated Journey)
Replace generic steps with this "Milestone" timeline. Use AOS fade-up animations for each step.
Title: " The LexIcon Method: Precision in Practice"
Intro: "We do not rely on luck. We rely on a battle-tested architecture of defense and prosecution."
Content Nodes (Create a Vertical Timeline or Horizontal Cards):
Step 01: Forensic Case Evaluation
Description: "We deconstruct your legal standing piece by piece. Our analysts review every document, precedent, and variable before we sign a single paper."
Step 02: Strategic Blueprinting
Description: "Customized legal architecture. We identify the 'Winning Lane'—whether it is aggressive litigation, arbitration, or a pre-trial settlement."
Step 03: The Discovery Phase
Description: "We unearth what others miss. Our investigative team secures evidence that shifts the leverage in your favor."
Step 04: Execution & Advocacy
Description: "In the courtroom or the boardroom, we speak the language of authority. We present arguments that are legally sound and narratively compelling."
Step 05: Resolution & Future-Proofing
Description: "Winning the case is step one. Securing your assets and reputation against future liability is the final seal."
for the legal process make something innovative like that in the image.png (dont use the same. use this image for a reference and make unique to us)


Why Choose Us (The "Differentiators")
Layout: 3-Column Grid with Glassmorphism cards.
Global Reach, Local Authority
"With partners in London, New York, and Dubai, we bridge the gap between international law and local jurisdiction nuances."
98% Retention Rate
"Our clients do not just hire us for a case; they retain us for a lifetime. We are the guardians of their legacy."
Data-Driven Litigation
"We utilize proprietary legal analytics to predict judicial outcomes, giving you a statistical edge before the gavel bangs."


Fee Schedule (Pricing)
Display this on the suitable page bottom. Make it look like a "Membership/Retainer" selection, not a cheap SaaS pricing table.
Style: Dark Cards with Gold Buttons.
Option 1: The Consultation
Price: $500 / Session
Details: Case Assessment, Risk Analysis, 60-Min Partner Review.
CTA: "Book Strategy Session"
Option 2: Corporate Retainer
Price: $5,000 / Month
Details: On-call General Counsel, Contract Review (Unlimited), Crisis Management.
CTA: "Inquire for Access"
Option 3: High-Stakes Litigation
Price: Custom Allocation
Details: Full Team Deployment, Private Investigation, Media Control.
CTA: "Contact Managing Partner"


Mission & Vision (Animated Reveal)
Layout: Split screen. Left Side: Image. Right Side: Text that reveals line-by-line.
Our Mission:
"To provide a fortress of legal protection in an unpredictable world. We fight not just to win cases, but to secure the commercial and personal longevity of our clients."
Our Vision:
"To redefine the modern law firm—moving away from hourly billing inefficiencies towards a results-oriented partnership that values victory above all else."


Recent Awards (Self-Branding)
Layout: A scrolling ticker or a flex-row of Badges.
🏆 The Golden Gavel 2024: Best Corporate Defense Firm.
⚖️ Legal 500: Top Tier Firm in Mergers & Acquisitions.
🌍 Global Counsel Awards: Excellence in International Arbitration.
⭐ Client Choice: 5-Star Trust Rating (2020-2024).


Case Study (Sample)
Layout: A distinct section titled "Precedent Setters".
Case: Titan Industries vs. State Regulator
Challenge: "The client faced a $50M anti-trust fine and a potential shutdown of operations."
The LexIcon Move: "We uncovered a procedural error in the regulator's filing process dating back three years."
Outcome: "Case dismissed with prejudice. Client assets fully unfrozen within 48 hours."




===============================================================================
"Please implement the changes in UPDATION.md starting with Task 1 (Mobile RTL). Once the header logic is fixed, proceed to Task 2 and replace the placeholder content in index.html and index2.html with the specific texts provided above. Apply Tailwind styling that matches the 'Navy & Gold' luxury aesthetic.
dont create any new files. for adding the contents, find a suitable file based on the content and then add it to those pages without disturbing the other contents. 

In the top horizontal nav bar add one more as (dashboard - if clicked it should have a drop down as client dashboard, admin dashboard.   direct entry to respective dashboards without logins.)

The website should be both mobile and desktop responsive. with dynamic flexings.
===============================================================================
