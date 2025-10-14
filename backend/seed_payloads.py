ARTICLES = [
    {
        "title": "What is Phishing?",
        "description": "Learn how phishing attacks trick users into revealing information. Verify senders and avoid unknown links.",
        "content": (
            "Phishing is a fraudulent attempt to obtain sensitive information by pretending to be a trustworthy source. Attackers often send emails or messages that look legitimate to trick people into sharing passwords or financial details.\n\n"
            "To stay safe, check the sender’s email address carefully, look for grammar mistakes, and hover over links before clicking. If a message feels urgent or threatening, verify it through official channels before acting."
        ),
        "author": "Security Team",
    },
    {
        "title": "Password Hygiene 101",
        "description": "Use long, unique passwords and a password manager. Enable MFA whenever possible.",
        "content": (
            "Strong passwords help protect your accounts from unauthorized access. Use at least 12 characters with letters, numbers, and symbols. Avoid personal information like names or birthdays.\n\n"
            "A password manager can generate and store complex passwords securely. Pair this with multi‑factor authentication for stronger protection."
        ),
        "author": "Security Team",
    },
    {
        "title": "Multi-Factor Authentication",
        "description": "MFA adds a second check like an OTP or app prompt. Turn it on for key accounts.",
        "content": (
            "Multi‑Factor Authentication (MFA) adds another check beyond your password, such as an OTP or authenticator app. This makes it much harder for attackers to access your account even if they know your password.\n\n"
            "Enable MFA for email, banking, and social media. Keep backup codes safe and avoid approving prompts you did not initiate."
        ),
        "author": "Security Team",
    },
    {
        "title": "Recognizing Malware",
        "description": "Malware can slow your device or steal data. Update software and avoid suspicious downloads.",
        "content": (
            "Malware is malicious software that can steal data, display unwanted ads, or encrypt files. It often arrives through risky downloads or email attachments.\n\n"
            "Protect yourself with reputable antivirus software, regular updates, and by downloading apps only from trusted sources."
        ),
        "author": "Security Team",
    },
    {
        "title": "Safe Browsing Habits",
        "description": "Prefer HTTPS, avoid pop‑ups, and keep your browser updated to patch risks.",
        "content": (
            "Safe browsing means being selective about websites and downloads. Look for HTTPS in the address bar and avoid clicking on pop‑ups or suspicious links.\n\n"
            "Update your browser regularly and use privacy settings to limit tracking. Extensions should come from reputable developers only."
        ),
        "author": "Security Team",
    },
    {
        "title": "Social Engineering Tricks",
        "description": "Attackers exploit emotions like urgency or fear. Pause, verify, and never share passwords.",
        "content": (
            "Social engineering uses psychology to obtain information. An attacker may pose as a coworker or service provider and pressure you into acting quickly.\n\n"
            "Verify requests through official channels and be careful with urgent messages asking for secrets or payments."
        ),
        "author": "Security Team",
    },
    {
        "title": "Data Privacy Basics",
        "description": "Limit what you share publicly and review app permissions regularly.",
        "content": (
            "Your personal data is valuable. Limit what you share on social media and avoid apps that request unnecessary permissions.\n\n"
            "Check privacy settings on major platforms and consider privacy‑focused tools to reduce tracking."
        ),
        "author": "Security Team",
    },
]


QUIZZES = [
    {
        "title": "Phishing Awareness",
        "questions": [
            {"q": "What is phishing?", "opts": ["A scam email", "A hardware issue", "A social app", "None"], "ans": 0},
            {"q": "Check first in a suspicious email?", "opts": ["Subject", "Sender’s address", "Image quality", "Font size"], "ans": 1},
            {"q": "Phishing mainly targets?", "opts": ["Hardware", "Personal info", "Network speed", "None"], "ans": 1},
            {"q": "A sign of phishing?", "opts": ["Perfect grammar", "HTTPS link", "Urgency and errors", "Official logos"], "ans": 2},
            {"q": "Click unknown links?", "opts": ["Yes", "Sometimes", "No", "Only from friends"], "ans": 2},
        ],
    },
    {
        "title": "Password Security",
        "questions": [
            {"q": "Ideal password length?", "opts": ["4", "6", "8", "12+"], "ans": 3},
            {"q": "Reuse passwords?", "opts": ["Yes", "No"], "ans": 1},
            {"q": "Safest storage?", "opts": ["Notepad", "Browser", "Password manager", "Paper"], "ans": 2},
            {"q": "What improves strength?", "opts": ["Symbols", "Only letters", "Only numbers", "Name"], "ans": 0},
            {"q": "Change passwords?", "opts": ["Never", "Regularly", "Yearly", "Monthly"], "ans": 1},
        ],
    },
    {
        "title": "Safe Browsing",
        "questions": [
            {"q": "HTTPS indicates?", "opts": ["Encryption", "Faster site", "Free site", "No ads"], "ans": 0},
            {"q": "Avoid?", "opts": ["Bookmarks", "Clicking pop‑ups", "Updates", "Password manager"], "ans": 1},
            {"q": "Risky download?", "opts": ["Official site", "Unknown source", "App store", "After login"], "ans": 1},
            {"q": "Private mode does?", "opts": ["Hides from ISP", "Stops all tracking", "Clears local history", "Encrypts traffic"], "ans": 2},
            {"q": "Limit tracking by?", "opts": ["Random extensions", "Privacy settings", "Old browser", "Sharing more"], "ans": 1},
        ],
    },
    {
        "title": "Malware Defense",
        "questions": [
            {"q": "Malware is?", "opts": ["Malicious software", "Mail tool", "Hardware", "Theme"], "ans": 0},
            {"q": "Common sign?", "opts": ["Faster device", "Random pop‑ups", "Long battery", "None"], "ans": 1},
            {"q": "Avoid malware by?", "opts": ["Disable AV", "Open all attachments", "Update software", "Ignore updates"], "ans": 2},
            {"q": "Download from?", "opts": ["Random blog", "Official website", "Email attach", "Unknown mirror"], "ans": 1},
            {"q": "Ransomware does?", "opts": ["Encrypts files", "Protects files", "Deletes OS", "Speeds PC"], "ans": 0},
        ],
    },
    {
        "title": "MFA & Authentication",
        "questions": [
            {"q": "MFA stands for?", "opts": ["Multi‑Factor Authentication", "Multi‑File Access", "Main Frame Access", "Managed Factor Account"], "ans": 0},
            {"q": "Second factor?", "opts": ["Another password", "OTP code", "Username", "Nickname"], "ans": 1},
            {"q": "Why MFA?", "opts": ["Faster", "Blocks spam", "Password alone isn’t enough", "Stores passwords"], "ans": 2},
            {"q": "Backup codes?", "opts": ["Share online", "Store safely", "Email to friends", "Ignore"], "ans": 1},
            {"q": "Enable MFA for?", "opts": ["Games", "Email and banking", "None", "Public sites"], "ans": 1},
        ],
    },
    {
        "title": "Social Engineering",
        "questions": [
            {"q": "Uses?", "opts": ["Hardware bugs", "Human psychology", "AI always", "None"], "ans": 1},
            {"q": "Red flag?", "opts": ["Polite message", "Urgent ask for secrets", "Friendly greeting", "Known sender"], "ans": 1},
            {"q": "Pressured to share?", "opts": ["Comply", "Verify first", "Ignore policy", "Post online"], "ans": 1},
            {"q": "Impersonation is?", "opts": ["Pretending to be someone", "Using encryption", "Hardware hack", "VPN use"], "ans": 0},
            {"q": "Defense?", "opts": ["Trust all", "Train and verify", "Share passwords", "Disable MFA"], "ans": 1},
        ],
    },
    {
        "title": "Data Privacy",
        "questions": [
            {"q": "Share?", "opts": ["All info", "Minimal needed", "Bank PIN", "Everything"], "ans": 1},
            {"q": "Permissions?", "opts": ["Always allow", "Review regularly", "Never review", "Give admin"], "ans": 1},
            {"q": "Profiles?", "opts": ["Public all", "Limit visibility", "Show passwords", "Ignore settings"], "ans": 1},
            {"q": "Reduce tracking?", "opts": ["Privacy tools", "Share more", "Post more", "Ignore"], "ans": 0},
            {"q": "Strong step?", "opts": ["Use MFA", "Easy passwords", "Disable updates", "Post locations"], "ans": 0},
        ],
    },
]

# Additional payloads (part 2)
ARTICLES_PART2 = [
    {
        "title": "Mobile Device Security",
        "description": "Use strong locks, update apps, and avoid public Wi‑Fi for sensitive tasks.",
        "content": (
            "Mobile devices hold private data. Protect them with a strong passcode or biometrics and enable device encryption.\n\n"
            "Keep your OS and apps updated and install apps only from official stores. Avoid sensitive tasks on public Wi‑Fi or use a VPN."
        ),
        "author": "Security Team",
    },
    {
        "title": "Cyberbullying Awareness",
        "description": "Recognize online harassment. Save evidence, report, block, and seek help.",
        "content": (
            "Cyberbullying harms mental health and safety. If targeted, do not engage with the bully. Save messages and report them on the platform.\n\n"
            "Block the bully and talk to a trusted adult, counselor, or authority. Many organizations provide resources and support."
        ),
        "author": "Awareness Team",
    },
    {
        "title": "Understanding Ransomware",
        "description": "Ransomware encrypts files and demands payment. Back up data and be cautious with attachments.",
        "content": (
            "Ransomware is a serious threat that locks your files and asks for money. It often arrives via phishing emails or unsafe downloads.\n\n"
            "Keep regular backups, patch systems, and avoid opening unexpected attachments. Report incidents and seek professional help."
        ),
        "author": "Security Team",
    },
    {
        "title": "Safe Use of Public Wi‑Fi",
        "description": "Open networks are risky. Use a VPN and avoid logging into sensitive accounts.",
        "content": (
            "Public Wi‑Fi can expose your traffic to others on the network. Attackers might intercept logins or modify content.\n\n"
            "Use a VPN for encryption, disable auto‑connect, and turn off sharing features when on public networks."
        ),
        "author": "Security Team",
    },
    {
        "title": "Recognizing Fake News",
        "description": "Verify stories before sharing. Check URLs, authors, and multiple reputable sources.",
        "content": (
            "Misinformation spreads quickly online. Cross‑check with trusted outlets before you share.\n\n"
            "Question sensational headlines and inspect the site’s credibility and publication date."
        ),
        "author": "Awareness Team",
    },
    {
        "title": "Email Security",
        "description": "Verify senders, be wary of links, and scan attachments before opening.",
        "content": (
            "Email is a common attack path. Phishing emails may look real but often have subtle signs like spelling errors or odd sender addresses.\n\n"
            "Hover over links to preview URLs and use spam filters. When in doubt, verify via another channel."
        ),
        "author": "Security Team",
    },
    {
        "title": "IoT Device Security",
        "description": "Change default passwords, update firmware, and isolate IoT devices on a separate network.",
        "content": (
            "Smart devices increase convenience but can introduce risk. Default passwords are widely known and should be changed immediately.\n\n"
            "Update firmware regularly and consider placing IoT devices on a guest or separate network to limit exposure."
        ),
        "author": "Security Team",
    },
]

QUIZZES_PART2 = [
    {
        "title": "Mobile Safety",
        "questions": [
            {"q": "Best lock type?", "opts": ["None", "Swipe", "Strong passcode/biometrics", "4‑digit"], "ans": 2},
            {"q": "Install apps from?", "opts": ["Anywhere", "Official stores", "Random links", "Email"], "ans": 1},
            {"q": "Public Wi‑Fi banking?", "opts": ["Safe", "Avoid it", "Always fine", "Only midnight"], "ans": 1},
            {"q": "Lost device step?", "opts": ["Ignore", "Remote wipe", "Share IMEI", "Remove lock"], "ans": 1},
            {"q": "USB charging?", "opts": ["Always safe", "Use data‑blocking cable", "Share port", "Unknown"], "ans": 1},
        ],
    },
    {
        "title": "Cloud Security",
        "questions": [
            {"q": "Protect cloud accounts with?", "opts": ["Weak pw", "MFA + strong pw", "Shared creds", "Public links"], "ans": 1},
            {"q": "Doc sharing best?", "opts": ["Open to all", "Link with expiry", "Post online", "No control"], "ans": 1},
            {"q": "Backups help with?", "opts": ["Storage only", "Ransomware recovery", "Nothing", "Ads"], "ans": 1},
            {"q": "Public link risk?", "opts": ["None", "Unauthorized access", "Speed", "Free storage"], "ans": 1},
            {"q": "Good habit?", "opts": ["Reuse pw", "Review permissions", "Share secrets", "Ignore alerts"], "ans": 1},
        ],
    },
    {
        "title": "IoT Safety",
        "questions": [
            {"q": "First IoT step?", "opts": ["Keep default pw", "Change default pw", "Disable updates", "Expose device"], "ans": 1},
            {"q": "Firmware updates?", "opts": ["Ignore", "Apply regularly", "Only PCs", "Optional"], "ans": 1},
            {"q": "Place IoT on?", "opts": ["Work LAN", "Separate/guest network", "Public net", "None"], "ans": 1},
            {"q": "Camera security?", "opts": ["Share feed", "Strong pw", "Public link", "Default pw"], "ans": 1},
            {"q": "Smart bulbs risk?", "opts": ["None", "Potential entry point", "Speed boost", "Long life"], "ans": 1},
        ],
    },
    {
        "title": "Cyberbullying",
        "questions": [
            {"q": "If bullied?", "opts": ["Fight", "Save and report", "Share widely", "Ignore forever"], "ans": 1},
            {"q": "Tell?", "opts": ["No one", "Trusted adult/authority", "Random user", "Bully"], "ans": 1},
            {"q": "First step?", "opts": ["Respond angrily", "Block bully", "Delete account", "Change phone"], "ans": 1},
            {"q": "Platforms have?", "opts": ["No tools", "Reporting tools", "Gifts", "Nothing"], "ans": 1},
            {"q": "Mental health?", "opts": ["Unimportant", "Seek support", "Never discuss", "Ignore"], "ans": 1},
        ],
    },
    {
        "title": "Ransomware",
        "questions": [
            {"q": "Ransomware does?", "opts": ["Encrypt files", "Fix bugs", "Speed PC", "Clean cache"], "ans": 0},
            {"q": "Common delivery?", "opts": ["Trusted store", "Phishing email", "Hardware", "Official update"], "ans": 1},
            {"q": "Mitigation?", "opts": ["No backups", "Regular backups", "Share key", "Pay fast"], "ans": 1},
            {"q": "Pay ransom?", "opts": ["Always", "Not recommended", "Required", "Guaranteed"], "ans": 1},
            {"q": "Prevention?", "opts": ["Open all", "Update software", "Disable AV", "Share pw"], "ans": 1},
        ],
    },
    {
        "title": "Public Wi‑Fi",
        "questions": [
            {"q": "Avoid on public Wi‑Fi?", "opts": ["Banking", "News", "Weather", "Maps"], "ans": 0},
            {"q": "Safer with?", "opts": ["VPN", "Open net", "Unknown AP", "No password"], "ans": 0},
            {"q": "Auto‑join?", "opts": ["Enable", "Disable", "Random", "Ignore"], "ans": 1},
            {"q": "Sharing files?", "opts": ["Enable", "Disable", "Share all", "Post links"], "ans": 1},
            {"q": "HTTPS helps by?", "opts": ["Encrypting", "Speeding", "Blocking ads", "Changing IP"], "ans": 0},
        ],
    },
    {
        "title": "Email Safety",
        "questions": [
            {"q": "Unknown attachment?", "opts": ["Open", "Scan/Avoid", "Share", "Forward"], "ans": 1},
            {"q": "Verify sender by?", "opts": ["Nothing", "Address/domain", "Emojis", "Color"], "ans": 1},
            {"q": "Links?", "opts": ["Click to see", "Hover to preview", "Ignore always", "Open later"], "ans": 1},
            {"q": "Spam filter?", "opts": ["Useless", "Helpful", "Dangerous", "Blocks all good"], "ans": 1},
            {"q": "Money request?", "opts": ["Obey fast", "Verify by another channel", "Share card", "Ignore"], "ans": 1},
        ],
    },
]

ARTICLES += ARTICLES_PART2
QUIZZES += QUIZZES_PART2

# Additional payloads (part 3)
ARTICLES_PART3 = [
    {
        "title": "Digital Footprint",
        "description": "Everything you do online leaves traces. Review old posts and limit public sharing.",
        "content": (
            "Your digital footprint includes posts, likes, and searches. It can affect jobs, relationships, and privacy.\n\n"
            "Review your profiles, clean up old content, and adjust privacy settings to control who sees your information."
        ),
        "author": "Awareness Team",
    },
    {
        "title": "Cloud Security Basics",
        "description": "Protect accounts with strong passwords and MFA. Review sharing settings carefully.",
        "content": (
            "Cloud services are convenient but require care. Use unique, strong passwords and enable MFA for added protection.\n\n"
            "Share documents only with intended recipients and remove links when no longer needed."
        ),
        "author": "Security Team",
    },
    {
        "title": "Cyber Hygiene Checklist",
        "description": "Update software, use antivirus, avoid pirated sites, and back up data regularly.",
        "content": (
            "Good habits reduce risk. Keep systems updated, use reputable antivirus, and be careful with downloads.\n\n"
            "Back up important files and verify links before clicking. A few minutes of caution can prevent big problems."
        ),
        "author": "Awareness Team",
    },
    {
        "title": "Kids and Online Safety",
        "description": "Teach children about online risks. Use parental controls and set healthy rules.",
        "content": (
            "Help kids understand privacy, respectful behavior, and how to handle uncomfortable situations.\n\n"
            "Set screen‑time limits and use parental controls to restrict inappropriate content and in‑app purchases."
        ),
        "author": "Family Safety",
    },
    {
        "title": "Recognizing Scams",
        "description": "Beware of promises of quick money or prizes. If it sounds too good, it likely is.",
        "content": (
            "Scammers use urgency and rewards to pressure you. Do not share personal or financial data with unknown contacts.\n\n"
            "Report suspicious messages and verify offers through official sources before acting."
        ),
        "author": "Awareness Team",
    },
    {
        "title": "Secure Social Media Use",
        "description": "Limit public sharing, review privacy settings, and verify friend requests.",
        "content": (
            "Social networks reveal a lot about you. Keep profiles private when possible and think before posting.\n\n"
            "Decline unknown friend requests and be cautious with unusual messages or links."
        ),
        "author": "Security Team",
    },
]

QUIZZES_PART3 = [
    {
        "title": "Digital Footprint",
        "questions": [
            {"q": "Digital footprint is?", "opts": ["Online traces", "Shoes", "Virus", "App"], "ans": 0},
            {"q": "Reduce risks by?", "opts": ["Post all", "Limit public sharing", "Share passwords", "Enable tracking"], "ans": 1},
            {"q": "Old posts?", "opts": ["Keep all", "Review/clean up", "Promote", "Sell"], "ans": 1},
            {"q": "Privacy settings?", "opts": ["Ignore", "Review regularly", "Share widely", "Set public"], "ans": 1},
            {"q": "Employers may?", "opts": ["Never check", "Check presence", "Share data", "Ignore web"], "ans": 1},
        ],
    },
    {
        "title": "Scam Detection",
        "questions": [
            {"q": "Too good offer?", "opts": ["Likely scam", "Always real", "Ignore", "Guaranteed"], "ans": 0},
            {"q": "Prize asks fee?", "opts": ["Pay now", "Report/ignore", "Share info", "Forward"], "ans": 1},
            {"q": "Huge returns promised?", "opts": ["Safe", "High risk/scam", "Guaranteed", "Bank offer"], "ans": 1},
            {"q": "Protect by?", "opts": ["Share OTPs", "Verify source", "Pay fast", "Click all"], "ans": 1},
            {"q": "Scammers use?", "opts": ["Urgency/fear", "Clear policy", "Secure channels", "Vaults"], "ans": 0},
        ],
    },
    {
        "title": "Safe Social Media",
        "questions": [
            {"q": "Unknown requests?", "opts": ["Accept all", "Verify first", "Share pw", "Send money"], "ans": 1},
            {"q": "Location sharing?", "opts": ["Always", "Limited/off", "Everywhere", "Tag all"], "ans": 1},
            {"q": "Account security?", "opts": ["Weak pw", "MFA enabled", "Same pw", "Public creds"], "ans": 1},
            {"q": "Suspicious DMs?", "opts": ["Click links", "Report/block", "Share info", "Send OTP"], "ans": 1},
            {"q": "Profile privacy?", "opts": ["Public always", "Adjust settings", "Share all", "Ignore"], "ans": 1},
        ],
    },
    {
        "title": "Cyber Hygiene",
        "questions": [
            {"q": "Updates are?", "opts": ["Optional", "Important", "Harmful", "For gamers only"], "ans": 1},
            {"q": "Backups help?", "opts": ["Never", "After ransomware", "Only photos", "Not needed"], "ans": 1},
            {"q": "Pirated sites?", "opts": ["Safe", "Risky", "Always free", "Protected"], "ans": 1},
            {"q": "Antivirus?", "opts": ["Avoid", "Use reputable one", "Disable", "Share license"], "ans": 1},
            {"q": "Links in messages?", "opts": ["Click all", "Verify first", "Ignore caution", "Open all"], "ans": 1},
        ],
    },
    {
        "title": "Fake News",
        "questions": [
            {"q": "Verify news by?", "opts": ["One source", "Multiple sources", "Random blog", "Friend"], "ans": 1},
            {"q": "Sensational headline?", "opts": ["Always true", "Be cautious", "Share fast", "Ignore facts"], "ans": 1},
            {"q": "URL check?", "opts": ["Unneeded", "Useful", "Always wrong", "Hard"], "ans": 1},
            {"q": "Old stories reposted?", "opts": ["Always current", "May mislead", "Always fake", "Always true"], "ans": 1},
            {"q": "Images can be?", "opts": ["Never edited", "Manipulated", "Always real", "From NASA"], "ans": 1},
        ],
    },
    {
        "title": "Kids’ Online Safety",
        "questions": [
            {"q": "Parental controls?", "opts": ["Not needed", "Helpful tool", "Harmful", "Illegal"], "ans": 1},
            {"q": "Kids should?", "opts": ["Hide issues", "Tell adults", "Share passwords", "Meet strangers"], "ans": 1},
            {"q": "Time rules?", "opts": ["None", "Healthy limits", "Always online", "Night only"], "ans": 1},
            {"q": "Privacy lessons?", "opts": ["Too early", "Age‑appropriate", "Ignore", "Use jargon"], "ans": 1},
            {"q": "Unknown links?", "opts": ["Click", "Avoid and tell adult", "Share", "Download"], "ans": 1},
        ],
    },
]

ARTICLES += ARTICLES_PART3
QUIZZES += QUIZZES_PART3
