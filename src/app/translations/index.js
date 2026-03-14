import TopBanner from "@/components/TopBanner";

export const translations = {
  en: {
    // TopBanner
    topbanner: "Don’t miss the limited-time deals!",
    topbannerH: "H",
    topbannerM: "M",
    topbannerS: "S",
    topbannerbutton: "Explore",

    // navbar
    features: "Features",
    why: "Why Different",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Contact Us",
    parkingai: "Parking AI",
    menu: "Menu",
    // hero section
    heroTitle:
      "Design Parking Layouts 10x Faster. Guarantee NBC Compliance. Maximize Revenue Per Square Meter.",

    heroDesc:
      "The AI-driven parking design engine developed for the commercial real estate sector in India. Optimize parking designs in 10 minutes, not days. Unleash 5-15% additional parking capacity from the same land area. Avoid rejection of designs due to compliance issues",
    trustedBy:
      "Used by leading commercial real estate developers and architecture firms across Hyderabad, Bangalore, and Mumbai",

    demo: "Book a Demo Now",
    trial: "Start Free Trial",
    // why choose section
    whyTitle: "Why Teams Choose Parking AI",

    fasterDesign: "Faster Design",
    moreParking: "More Parking",
    compliant: "NBC Compliant",
    redraw: "Redrawing Required",
    // SeamlessGallery section
    crisisTitle: "The Parking Design Crisis",
    crisisDesc:
      "Parking design is costing you time, money, and regulatory headaches.",
    criticalIssue: "Critical Issue",

    advantages: [
      {
        id: 1,
        title: "Design Iterations = Project Delay",
        points: [
          "All parking designs are done manually. Move a column? Redesign 20+ bays. Rejected by the authority? Entire design needs to be done again.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/0b07c0b9e24e7948d47d01d604fd2a67.png",
      },
      {
        id: 2,
        title: "NBC Compliance is a Minefield",
        points: [
          "National Building Code has 10+ stringent parking standards (turning radius, aisle width, PH bays, ramp landings). Violate one, and the project gets rejected by the civic body. Most designs get rejected after submission, requiring costly redesigns.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/4d805ac2d72397dc9f006b6ed870b9c8.png",
      },
      {
        id: 3,
        title: "Lost Revenue Due to Inefficient Designs",
        points: [
          "Manual designs can only capture 85-90% of the maximum parking capacity. Dead space, inefficient circulation paths, and inefficient angles. This translates to 650 parking spots instead of 750, resulting in lost revenue of ₹50-₹300 lakh on a single project.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/df5b41ef4b9ea6dc5395914c80fc8b61.png",
      },
      {
        id: 4,
        title: "Structural Coordination Chaos",
        points: [
          "Column locations, ramp locations, and lift cores do not coordinate well with parking designs. Emails back and forth. No what-if analysis. No single point of truth. This leads to either inefficient parking designs or inefficient structural designs or a 2-week delay.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/c33db8e58cdb93cbe5cbc4ed8b6c9fc7.png",
      },
      {
        id: 5,
        title: "Compliance Errors With Legal Consequences",
        points: [
          "PH bays placed in tandem positions. Ramp entries too close to aisles. Missing landing distances. Municipal inspector flags issues after submission. Redesign, reschedule, reputation damage.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/087d132851e64f8115e85dbe21b02d2c.png",
      },
    ],
    // how it works section
    howItWorksTitle: "How It Works",
    howItWorksDesc:
      "Four simple steps to NBC-compliant, optimized parking layouts",
    steps: [
      {
        id: 1,
        number: 1,
        title: "Upload Floor Plan",
        description:
          "Import any DXF or DWG file directly from your CAD system. No redrawing. No simplification. Just upload.",
        icon: "image/fileupload.png",
      },
      {
        id: 2,
        number: 2,
        title: "Set Parameters",
        description:
          "Define bay dimensions, aisle widths, PH requirements, parking target. AI auto-calculates compliance needs per NBC 2016.",
        icon: "image/aiconfiguration.png",
      },
      {
        id: 3,
        number: 3,
        title: "AI Generates",
        description:
          "In seconds, the engine tests thousands of configurations. Detects columns, obstacles, ramps. Optimizes layout. Checks all 8 NBC rules.",
        icon: "image/reviewfilescreate.png",
      },
      {
        id: 4,
        number: 4,
        title: "Review & Export",
        description:
          "Review layout. Make manual tweaks if needed. Export contractor-ready CAD with layers, annotations, color-coding.",
        icon: "image/finaloutput.png",
      },
    ],
    // future translations
    featuresTitle: "Features Built for Real Parking",
    featuresDesc:
      "Every feature designed to save time, maximize revenue, and guarantee compliance.",
    newarrayfeatures: [
      {
        icon: "🎯",
        title: "Intelligent Space Optimization (50mm Increment Logic)",
        description:
          "Parking AI absorbs dead space when sweat, a 4,900 mm column span yields 3 spaces with waste. Placing AI yields 4 spaces. By distributing 900 mm intelligently across bays, On a 6-level basement that's, 15–45 extra spaces = ₹5–₹45 lakh revenue gain.",
        highlight: "15–45 extra spaces",
      },
      {
        icon: "✓",
        title: "8 Automated Compliance Checks",
        description: "Before you see the layout, Parking AI validates:",
        checks: [
          "Turning radius (8.00m outer radius per NBC)",
          "Aisle widths (3.6m one-way, 6.0m two-way)",
          "Bay minimum dimensions & width",
          "Column obstruction/clearance (door fully rotated)",
          "PH bays (3.6m × 5.0m with 2.4m+)",
          "Fire exit path (door access)",
          "Ramp pitch/landing (max. 20%)",
          "Parking target (zone-specific norms)",
        ],
        footer: "One issue found? AI suggests auto-repair. One click to fix.",
      },
      {
        icon: "📐",
        title: "Native AutoCAD Integration",
        description:
          "Works directly with DXF and DWG files. No redrawing required. Exports contractor-ready CAD with proper layers, color-coding, annotations. Architects never leave their CAD workflow.",
      },
      {
        icon: "🔧",
        title: "Manual Override + Reactive AI",
        description:
          "You're in control. Move a column? AI updates surrounding bays instantly. Swap a bay to 4-wheeler? System re-validates in real time. Full version control (RI saved edit, RI backed undo etc.)",
      },
      {
        icon: "📊",
        title: "Capacity-Driven Reverse Engineering",
        description:
          "Design backward from parking target. Set your goal (750 spaces), and the engine calculates if it's feasible. If not, it tells you why and suggests solutions (add a level, expand the ramp, etc.)",
      },
      {
        icon: "🚴",
        title: "Bike Parking Auto-Integration",
        description:
          "Residual zones classified: If 'Can a 2km × 2km bike bay fit more efficient than forcing car parking', the engine auto-converts and flags it for your approval.",
      },
    ],
    AI: "AI-Powered",

    // comparison section
    comparisontitle: "Why Parking AI Wins",

    comparisondescription: "Direct comparison with market alternatives.",

    comparisons: [
      {
        title: "Parking AI vs. TestFit",
        data: [
          {
            dimension: "Structured Parking",
            parkingAI: "Purpose-built, optimized",
            competitor:
              '"Angled parking NOT YET compatible with structured parking"',
            winner: "Parking AI",
          },
          {
            dimension: "NBC Compliance",
            parkingAI: "Built-in (India-native)",
            competitor: "US zoning only",
            winner: "Parking AI",
          },
          {
            dimension: "Space Optimization",
            parkingAI: "50mm increment logic",
            competitor: "Degree-angle adjustment",
            winner: "Parking AI",
          },
          {
            dimension: "Design Conflict Detection",
            parkingAI: "8 automated checks + auto-repair",
            competitor: "Basic validation",
            winner: "Parking AI",
          },
          {
            dimension: "AutoCAD Integration",
            parkingAI: "Native (direct DXF/DWG)",
            competitor: "Parcel data workflow",
            winner: "Parking AI",
          },
        ],
      },
      {
        title: "Parking AI vs. ParkCAD",
        data: [
          {
            dimension: "Technology",
            parkingAI: "AI-driven generative algorithms",
            competitor: "CAD tool with automation",
            winner: "Parking AI",
          },
          {
            dimension: "Speed",
            parkingAI: "10 minutes (AI generates)",
            competitor: "30–60 minutes (manual with tools)",
            winner: "Parking AI",
          },
          {
            dimension: "NBC Compliance",
            parkingAI: "Fully embedded",
            competitor: "Not built for Indian standards",
            winner: "Parking AI",
          },
          {
            dimension: "Compliance Flags",
            parkingAI: "8 automated checks + auto-repair suggestions",
            competitor: "Manual verification required",
            winner: "Parking AI",
          },
          {
            dimension: "User Interface",
            parkingAI: "Modern, real-time, reactive",
            competitor: "Dated CAD interface",
            winner: "Parking AI",
          },
        ],
      },
    ],

    // ImpactSection
    ImpactSectiontitle: "Real-World Impact by Persona",
    ImpactSectiondec:
      "See how Parking AI transforms workflows across different roles.",

    personas: [
      {
        title: "For Developers",
        icon: (
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
        before: {
          label: "Before:",
          text: "25 hours design + 4–6 weeks approvals + ₹37.5K–₹75K cost + 650 spaces = lost revenue",
        },
        after: {
          label: "After:",
          text: "10 minutes design + 1–2 days approvals + tool cost + 750 spaces = ",
          highlight: "₹50–₹300L revenue gain",
        },
      },
      {
        title: "For Architects",
        icon: "📐",
        before: {
          label: "Before:",
          text: "15–30 hours per project on parking (unpredictable iterations, compliance risk)",
        },
        after: {
          label: "After:",
          text: "10 minutes per project on parking + ",
          highlight: "reclaim 15–30 hours for higher-value design work",
          suffix: " + zero compliance liability",
        },
      },
      {
        title: "For Structural Consultants",
        icon: "🔧",
        before: {
          label: "Before:",
          text: "2–3 week back-and-forth on column placement vs. parking feasibility",
        },
        after: {
          label: "After:",
          text: "",
          highlight: "Parking constraints known day 1",
          suffix:
            " + structural grid optimized with parking pre-validated + zero conflicts",
        },
      },
    ],
    // pricing section
    pricingtitle: "Simple, Transparent Pricing",
    pricingdescription: "Choose the tier that matches your project volume.",

    pricingPlans: [
      {
        name: "Starter",
        price: "₹50K",
        period: "per project",
        description: "Up to 5 projects/quarter",
        features: [
          "Unlimited layouts per project",
          "Unlimited revisions",
          "CAD outputs",
          "Compliance validation",
          "Email support",
        ],
        buttonText: "Get Started",
        popular: false,
        align: "left",
      },
      {
        name: "Growth",
        price: "₹1.25L",
        period: "per quarter",
        description: "Up to 10 projects/quarter",
        features: [
          "All Starter features",
          "Unlimited projects",
          "Team access (5 seats)",
          "Priority support",
          "Analytics reports",
        ],
        buttonText: "Most Popular",
        popular: true,
        align: "center",
      },
      {
        name: "Enterprise",
        price: "₹2.5L",
        period: "per quarter",
        description: "20+ projects/quarter",
        features: [
          "All Growth features",
          "Unlimited team seats",
          "API access",
          "Dedicated support",
          "Custom compliance rules",
        ],
        buttonText: "Contact Sales",
        popular: false,
        align: "right",
      },
    ],
    ro: "ROI Calculator",
    project: "Design time saved per project:",
    ho: "20 hours",
    cost: "₹750/hour architect rate =",
    eghite: "₹18,750",
    parking: "Parking count increase:",
    space: "100 additional spaces",
    revenue: "₹50,000/space =",
    revenueGain: "₹50 lakh revenue",
    pro: "Payback: 1-2 projects. Value captured: 10-100x tool investment.",
    // contact section
    contacttitle: "Ready to Transform Your Parking Design?",
    contactdec: "Book a demo to see Parking AI in action (5 minutes).",
    roleOptions: [
      "Select your role",
      "Architect",
      "Developer",
      "Project Manager",
      "Urban Planner",
      "Real Estate Professional",
      "Other",
    ],

    timelineOptions: [
      "When do you need parking design?",
      "Immediately",
      "Within 1 week",
      "Within 1 month",
      "Within 3 months",
      "Just exploring",
    ],
    demo: "Schedule Your Demo",
    name: "Full Name",
    nameplaceholder: "Enter your full name",
    email: "Email",
    emailplaceholder: "Enter your email address",
    company: "Company",
    companyplaceholder: "Enter your company name",
    role: "Your Role",
    timeline: "Timeline",
    projectdetails: "Project Details (Optional)",
    projectdetailsplaceholder:
      "E.g. Project type, location, parking target, etc.",
    submit: "Submitting...",
    book: "Book Demo",
    wefollowup: "We’ll follow up within 2 hours",

    // faq section
    faqtitle: "Frequently Asked Questions",
    faqData: [
      {
        question: "Won't this replace our architects?",
        answer:
          "No. Parking design is 10% of architectural work. Parking AI eliminates the tedious, repetitive part (31 hours of manual drafting), freeing your architects to focus on building aesthetics, user experience, sustainability—the value-add work. This tool makes architects <strong>more valuable</strong>, not less.",
      },
      {
        question: "How accurate is the NBC compliance?",
        answer:
          "100% for the built-in checks. The AI compliance rules (turning radius, aisle width, bay dimensions, PH access, junction logic, fire exit aisles, stacking distances) are NBC 2016 standards and automatically validated. If something violates a rule, the design won't export and we'll show Error: Some invalid/join has additional constraints (early MVP). Instead review.",
      },
      {
        question: "What if our column grid doesn't support our parking target?",
        answer:
          "The tool tells you upfront: \"It runs a constraint analysis and reports: 'Row 7B6 space target requires bay widths of 2.4m, which is below NBC minimum of 2.5m. Recommended: Design for 650 spaces, or add a 4th basement level, or convert one level to mixed-use parking + retail.'\" This clarity coming early design saves weeks of wasted effort.",
      },
      {
        question: "Can we use it if we don't have DXF/DWG files yet?",
        answer:
          "Yes. You can draw a simple floor plan in any CAD tool (even SketchUp, then export as DWG), or manually draw it fully at the boundary and column grid we defined. Parking AI can work with it. No need for detailed architectural plans—parking design only needs structural and boundary info.",
      },
      {
        question: "What about mechanical parking systems?",
        answer:
          "Parking AI is optimized for standard ramp-based structural parking (the 98% use case in India). Mechanical parking systems (puzzle parking, stack parking, car-skid automation) have different logic and are currently outside scope. We're evaluating mechanical parking as a future feature (2026 roadmap).",
      },
      {
        question: "Do you offer customization for unique parking rules?",
        answer:
          "For standard NBC 2016, no customization needed—rules are built in. For specific municipal variations or unusual site constraints, we can discuss custom rule sets (Enterprise tier only; additional fees apply). Contact our sales team for details.",
      },
    ],

    // cta section
    ctatitle: "Stop Wasting Time on Parking.",
    ctades: "Start Winning Projects.",
    join: "Join developers and architects who ve reclaimed",
    h: "25+ hours",
    project: "per project and recovered",
    p: "₹50L+",
    r: "in parking revenue.",
    button: "Book a 5-Minute Demo",

    // footer
    products: "Product",
    product: [
      { label: "Features", href: "#features" },
      { label: "Why Parking AI", href: "#why" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    Companys: "Company",
    newarraycompany: [
      { label: "Contact Sales", href: "#contact" },
      { label: "Support", href: "#support" },
      { label: "Blog", href: "#blog" },
      { label: "Case Studies", href: "#case-studies" },
    ],
    res: "Resources",
    newarrayresources: [
      { label: "NBC 2016 Guide", href: "#nbc-guide" },
      { label: "Video Tutorials", href: "#tutorials" },
      { label: "Sample DWG Files", href: "#samples" },
      { label: "Best Practices", href: "#practices" },
    ],
    newcontact: "Contact",
    newemail: "hello@nexelvr.com",
    newnumber: "+91 9885643254",
    newcity: "hyderabad, India",
    copyright: "© 2026 Parking AI",
    powder: "Powered by Nexelvr",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    All: "All rights reserved .",

    //dwon to button
    TOP: "TOP",
    // cookies
    title:
      "This website uses cookies, pixel tags, and local storage for performance personalization and marketing purposes. We use our own cookies and some from third parties. Only essential cookies are turned on by default.",
    cookiesetting: "Cookie settings",
    button1: " Allow all cookies",
    button2: " Do not allow cookies",
    coookietitle: "Cookie Preferences",
    cookiesdesc:
      "This website uses cookies, pixel tags, and local storage for performance and marketing purposes. We use our own cookies and some from third parties. If you opted to accept any non-essential cookies, you can change or customize your selection at any time by changing the boxes checked below. To learn more about our privacy practices please see our. ",
    nweprivacy: "Privacy Policy",
    cookieCategories: [
      {
        id: "essential",
        label: "ESSENTIAL",
        description: "These items are necessary for the website to work.",
        locked: true,
        defaultOn: true,
      },
      {
        id: "marketing",
        label: "MARKETING",
        description:
          "These items help deliver advertising that's more relevant to you. They may also be used to limit the number of times you see an ad and measure the effectiveness of ad campaigns. These are third party cookies provided by our advertising partners.",
        locked: false,
        defaultOn: false,
      },
      {
        id: "personalization",
        label: "PERSONALIZATION",
        description:
          "These items let the website remember choices you make (like user name, language, or region) and personalize features for you.",
        locked: false,
        defaultOn: false,
      },
      {
        id: "analytics",
        label: "ANALYTICS",
        description:
          "These items help us understand visitor interactions, measure website performance, and spot potential technical issues.",
        locked: false,
        defaultOn: false,
      },
    ],
    button3: " Save preferences",
    button4: "Cancle",
    parkingtitle: "Smart Parking System",
    parkingdesc: "AI-Powered Layout Generator",
    uploadfiles: "Upload Site Plan",
    sidemap: "site_map.dxf",
    done: "done",
    parkinaiprogess: "AI Processing",
    layoutdone: "Layout generated!",
    parsingvehicledata: "Parsing vehicle data",
    optimizingslots: "Optimizing slots",
    generatinggrid: "Generating grid",
    ParkingLayout: "Parking Layout",
    Available: "Available",
    Occupied: "Occupied",
    Total: "Total",
    Occupied: "Occupied",
    Free: "Free",
    Fill: "Fill",
  },

  ar: {
    topbanner: "لا تفوت العروض محدودة الوقت!",
    topbannerH: "س",
    topbannerM: "د",
    topbannerS: "ث",
    topbannerbutton: "استكشاف",

    features: "الميزات",
    why: "لماذا مختلف",
    pricing: "التسعير",
    faq: "الأسئلة الشائعة",
    contact: "اتصل بنا",
    parkingai: "مواقف الذكاء الاصطناعي",
    menu: "القائمة",

    heroTitle:
      "صمم مخططات مواقف السيارات أسرع بـ 10 مرات مع ضمان الامتثال لمعايير NBC.",

    heroDesc:
      "محرك تصميم مواقف سيارات مدعوم بالذكاء الاصطناعي تم تطويره لقطاع العقارات التجارية في الهند. قم بتحسين تصميمات مواقف السيارات في 10 دقائق بدلاً من أيام. أطلق العنان لزيادة سعة مواقف السيارات بنسبة 5-15٪ من نفس مساحة الأرض. تجنب رفض التصاميم بسبب مشكلات الامتثال.",
    trustedBy:
      "تستخدمه كبرى شركات تطوير العقارات التجارية ومكاتب الهندسة المعمارية في حيدر آباد وبنغالور ومومباي.",
    demo: "احجز عرضاً توضيحياً",
    trial: "ابدأ التجربة المجانية",

    whyTitle: "لماذا تختار الفرق Parking AI",

    fasterDesign: "تصميم أسرع",
    moreParking: "مواقف أكثر",
    compliant: "متوافق مع NBC",
    redraw: "لا حاجة لإعادة الرسم",
    // SeamlessGallery section
    crisisTitle: "أزمة تصميم مواقف السيارات",
    crisisDesc: "تصميم المواقف يسبب خسارة في الوقت والمال ومشكلات تنظيمية.",
    criticalIssue: "مشكلة حرجة",

    advantages: [
      {
        id: 1,
        title: "تكرار التصميم = تأخير المشروع",
        points: [
          "يتم تنفيذ جميع تصاميم مواقف السيارات يدويًا. هل قمت بتحريك عمود؟ يجب إعادة تصميم أكثر من 20 موقفًا. هل تم رفض التصميم من قبل الجهة المختصة؟ يجب إعادة تنفيذ التصميم بالكامل. يمر المشروع المتوسط عبر 3 إلى 5 دورات من مراجعات التصميم، مما يؤدي إلى فقدان 4 إلى 6 أسابيع من الوقت وتكاليف تصميم تتراوح بين ‎₹37.5K‎ و‎₹75K‎.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/0b07c0b9e24e7948d47d01d604fd2a67.png",
      },
      {
        id: 2,
        title: "الامتثال لكود البناء الوطني (NBC) معقد للغاية",
        points: [
          "يحتوي كود البناء الوطني على أكثر من 10 معايير صارمة لمواقف السيارات مثل نصف قطر الدوران، عرض الممرات، مواقف ذوي الاحتياجات الخاصة، ومنحدرات الدخول. إذا تم انتهاك أي معيار، قد يتم رفض المشروع من قبل الجهة البلدية. يتم رفض معظم التصاميم بعد التقديم، مما يتطلب إعادة تصميم مكلفة.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/4d805ac2d72397dc9f006b6ed870b9c8.png",
      },
      {
        id: 3,
        title: "خسارة الإيرادات بسبب التصاميم غير الفعّالة",
        points: [
          "يمكن للتصاميم اليدوية استغلال 85% إلى 90% فقط من السعة القصوى لمواقف السيارات. المساحات المهدرة، ومسارات الحركة غير الفعّالة، والزوايا غير المناسبة تقلل من الكفاءة. هذا قد يعني توفير 650 موقفًا فقط بدلاً من 750، مما يؤدي إلى خسارة إيرادات تتراوح بين ₹50 و₹300 لاك في مشروع واحد.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/df5b41ef4b9ea6dc5395914c80fc8b61.png",
      },
      {
        id: 4,
        title: "فوضى التنسيق الهيكلي",
        points: [
          'غالبًا ما لا تتوافق مواقع الأعمدة، ومواقع المنحدرات، ونوى المصاعد مع تصاميم مواقف السيارات. تبادل مستمر للرسائل بين الفرق. لا يوجد تحليل لسيناريوهات "ماذا لو" ولا مصدر موحد للحقيقة. يؤدي ذلك إلى تصاميم مواقف غير فعّالة أو تصاميم إنشائية غير فعّالة أو تأخير يصل إلى أسبوعين في المشروع.',
        ],
        imageUrl:
          "https://img.sanishtech.com/u/c33db8e58cdb93cbe5cbc4ed8b6c9fc7.png",
      },
      {
        id: 5,
        title: "أخطاء الامتثال ذات العواقب القانونية",
        points: [
          "وضع مواقف ذوي الاحتياجات الخاصة (PH) في مواقع متتابعة. مداخل المنحدرات قريبة جدًا من الممرات. عدم وجود مسافات الهبوط المطلوبة. قد يكتشف مفتش البلدية هذه المشكلات بعد تقديم التصميم، مما يؤدي إلى إعادة التصميم، وإعادة جدولة العمل، وتضرر السمعة.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/087d132851e64f8115e85dbe21b02d2c.png",
      },
    ],
    // how it works section
    howItWorksTitle: "كيف يعمل",
    howItWorksDesc:
      "أربع خطوات بسيطة لإنشاء مخططات مواقف سيارات محسّنة ومتوافقة مع معايير NBC",
    steps: [
      {
        id: 1,
        number: 1,
        title: "رفع مخطط الطابق",
        description:
          "قم باستيراد أي ملف DXF أو DWG مباشرة من نظام CAD الخاص بك. بدون إعادة رسم أو تبسيط، فقط قم بالرفع.",
        icon: "image/fileupload.png",
      },
      {
        id: 2,
        number: 2,
        title: "تحديد المعلمات",
        description:
          "حدد أبعاد المواقف، عرض الممرات، متطلبات مواقف ذوي الاحتياجات الخاصة، والعدد المستهدف للمواقف. يقوم الذكاء الاصطناعي بحساب متطلبات الامتثال وفق NBC 2016.",
        icon: "image/aiconfiguration.png",
      },
      {
        id: 3,
        number: 3,
        title: "الذكاء الاصطناعي ينشئ التصميم",
        description:
          "في ثوانٍ، يختبر النظام آلاف التكوينات. يكتشف الأعمدة والعوائق والمنحدرات. يحسن التخطيط ويتحقق من جميع قواعد NBC.",
        icon: "image/reviewfilescreate.png",
      },
      {
        id: 4,
        number: 4,
        title: "مراجعة وتصدير",
        description:
          "راجع التخطيط وقم بإجراء تعديلات يدوية إذا لزم الأمر. ثم قم بتصدير ملف CAD جاهز للتنفيذ مع الطبقات والتعليقات والترميز اللوني.",
        icon: "image/finaloutput.png",
      },
    ],
    // future translations
    featuresTitle: "ميزات مصممة خصيصًا لمواقف السيارات الحقيقية",

    featuresDesc:
      "كل ميزة مصممة لتوفير الوقت وزيادة الإيرادات وضمان الامتثال للوائح.",

    newarrayfeatures: [
      {
        icon: "🎯",
        title: "تحسين المساحة الذكي (منطق الزيادة بمقدار 50 مم)",
        description:
          "يقوم الذكاء الاصطناعي لمواقف السيارات باستغلال المساحات المهدرة. على سبيل المثال، يمتد العمود لمسافة 4900 مم مما ينتج عادةً 3 مواقف مع مساحة مهدرة. باستخدام الذكاء الاصطناعي يمكن إنشاء 4 مواقف عبر توزيع 900 مم بذكاء بين المواقف. في موقف سيارات مكون من 6 طوابق تحت الأرض يمكن أن يوفر ذلك من 15 إلى 45 موقفًا إضافيًا، مما يحقق إيرادات إضافية من ₹5 إلى ₹45 لاك.",
        highlight: "15–45 موقف إضافي",
      },
      {
        icon: "✓",
        title: "8 فحوصات امتثال تلقائية",
        description: "قبل عرض المخطط، يقوم الذكاء الاصطناعي بالتحقق من:",
        checks: [
          "نصف قطر الدوران (8.00 متر حسب NBC)",
          "عرض الممرات (3.6م في اتجاه واحد, 6.0م في اتجاه معاكس)",
          "أدنى أبعاد وعرض الأكوام",
          "التعقب/المسافة (الباب مدور بالكامل)",
          "أكوام ذوي الاحتياجات الخاصة (3.6م × 5.0م مع 2.4م+)",
          "مسار الخروج من النار (وصول الباب)",
          "ميل المنحدر / الهبوط (حد أقصى 20%)",
          "هدف الوضع (معايير خاصة بالمنطقة)",
        ],
        footer:
          "تم العثور على مشكلة؟ يقترح الذكاء الاصطناعي إصلاحًا تلقائيًا. بنقرة واحدة لإصلاحها.",
      },
      {
        icon: "📐",
        title: "تكامل مباشر مع AutoCAD",
        description:
          "يعمل مباشرة مع ملفات DXF و DWG بدون الحاجة لإعادة الرسم. يقوم بتصدير ملفات CAD جاهزة للتنفيذ مع طبقات وألوان وتعليقات توضيحية.",
      },
      {
        icon: "🔧",
        title: "التجاوز اليدوي + الذكاء الاصطناعي التفاعلي",
        description:
          "أنت في السيطرة. هل تحرك عمودًا؟ يقوم الذكاء الاصطناعي بتحديث الأكوام المحيطة فورًا. هل تبديل أكوام إلى مركبة رباعية العجلات؟ يقوم النظام بإعادة التحقق في الوقت الحقيقي. التحكم الكامل في الإصدارات (التعديل المحفوظ، التراجع المدعوم إلخ.)",
      },
      {
        icon: "📊",
        title: "تصميم موجه نحو السعة",
        description:
          "تصميم من الخلف إلى الهدف. اضبط هدفك (750 مكان)، وتحسب المحرك ما إذا كان ذلك ممكنًا. إذا لم يكن كذلك، يخبرك لماذا ويقترح حلول (إضافة طابق، توسيع الرامب، إلخ.)",
      },
      {
        icon: "🚴",
        title: "تكامل تلقائي لمواقف الدراجات",
        description:
          "تصنيف المناطق المتبقية: إذا كان 'هل يمكن أن يتناسب موقف دراجة 2م × 2م بشكل أكثر كفاءة من إجبار موقف سيارة'، يقوم المحرك بتحويله تلقائيًا ويعلمك للموافقة.",
      },
    ],
    AI: "مدعوم بالذكاء الاصطناعي",
    // comparison section

    comparisontitle: "لماذا يتفوق Parking AI",

    comparisondescription: "مقارنة مباشرة مع الحلول المتوفرة في السوق.",
    comparisons: [
      {
        title: "باركينج AI مقابل TestFit",
        data: [
          {
            dimension: "موقف سيارات مهيكل",
            parkingAI: "مصمم خصيصًا ومُحسن",
            competitor: "مواقف بزاوية غير متوافقة مع المواقف المهيكلة بعد",
            winner: "باركينج AI",
          },
          {
            dimension: "الامتثال لـ NBC",
            parkingAI: "مدمج (وفقًا للمعايير الهندية)",
            competitor: "يدعم فقط قوانين المناطق في الولايات المتحدة",
            winner: "باركينج AI",
          },
          {
            dimension: "تحسين المساحة",
            parkingAI: "منطق زيادة 50 مم",
            competitor: "تعديل الزاوية بالدرجة",
            winner: "باركينج AI",
          },
          {
            dimension: "كشف تعارض التصميم",
            parkingAI: "8 فحوصات آلية + إصلاح تلقائي",
            competitor: "تحقق أساسي",
            winner: "باركينج AI",
          },
          {
            dimension: "تكامل AutoCAD",
            parkingAI: "مباشر (DXF/DWG مباشرة)",
            competitor: "سير عمل بيانات القطعة",
            winner: "باركينج AI",
          },
        ],
      },
      {
        title: "باركينج AI مقابل ParkCAD",
        data: [
          {
            dimension: "التقنية",
            parkingAI: "خوارزميات توليد مدفوعة بالذكاء الاصطناعي",
            competitor: "أداة CAD مع أتمتة",
            winner: "باركينج AI",
          },
          {
            dimension: "السرعة",
            parkingAI: "10 دقائق (توليد بواسطة AI)",
            competitor: "30–60 دقيقة (يدوي باستخدام الأدوات)",
            winner: "باركينج AI",
          },
          {
            dimension: "الامتثال لـ NBC",
            parkingAI: "مدمج بالكامل",
            competitor: "غير مصمم وفقًا للمعايير الهندية",
            winner: "باركينج AI",
          },
          {
            dimension: "علامات الامتثال",
            parkingAI: "8 فحوصات آلية + اقتراحات إصلاح تلقائي",
            competitor: "التحقق اليدوي مطلوب",
            winner: "باركينج AI",
          },
          {
            dimension: "واجهة المستخدم",
            parkingAI: "حديثة، في الوقت الفعلي، تفاعلية",
            competitor: "واجهة CAD قديمة",
            winner: "باركينج AI",
          },
        ],
      },
    ],

    // ImpactSection
    ImpactSectiontitle: "التأثير الواقعي حسب الشخصية",
    ImpactSectiondec:
      "اكتشف كيف يُحوّل باركينج AI سير العمل عبر الأدوار المختلفة.",
    personas: [
      {
        title: "للمطورين",
        icon: (
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
        before: {
          label: "قبل:",
          text: "25 ساعة تصميم + 4–6 أسابيع للموافقات + تكلفة ₹37.5K–₹75K + 650 موقف = خسارة الإيرادات",
        },
        after: {
          label: "بعد:",
          text: "10 دقائق تصميم + 1–2 أيام للموافقات + تكلفة الأداة + 750 موقف = ",
          highlight: "زيادة الإيرادات ₹50–₹300L",
        },
      },
      {
        title: "للمهندسين المعماريين",
        icon: "📐",
        before: {
          label: "قبل:",
          text: "15–30 ساعة لكل مشروع على مواقف السيارات (تكرارات غير متوقعة، مخاطر الامتثال)",
        },
        after: {
          label: "بعد:",
          text: "10 دقائق لكل مشروع على مواقف السيارات + ",
          highlight: "استعادة 15–30 ساعة للعمل على تصميم ذو قيمة أعلى",
          suffix: " + بدون مسؤولية امتثال",
        },
      },
      {
        title: "لمستشاري الهيكلية",
        icon: "🔧",
        before: {
          label: "قبل:",
          text: "2–3 أسابيع من المراجعات المتبادلة حول وضع الأعمدة مقابل جدوى المواقف",
        },
        after: {
          label: "بعد:",
          text: "",
          highlight: "قيود المواقف معروفة من اليوم الأول",
          suffix:
            " + تحسين الشبكة الهيكلية مع التحقق المسبق من المواقف + بدون تعارضات",
        },
      },
    ],
    // pricing section
    pricingtitle: "أسعار بسيطة وشفافة",
    pricingdescription: "اختر الخطة التي تتناسب مع حجم مشروعك.",
    pricingPlans: [
      {
        name: "ستارتر",
        price: "₹50K",
        period: "لكل مشروع",
        description: "حتى 5 مشاريع/الربع",
        features: [
          "تصاميم غير محدودة لكل مشروع",
          "تعديلات غير محدودة",
          "مخرجات CAD",
          "التحقق من الامتثال",
          "دعم عبر البريد الإلكتروني",
        ],
        buttonText: "ابدأ الآن",
        popular: false,
        align: "left",
      },
      {
        name: "نمو",
        price: "₹1.25L",
        period: "لكل ربع",
        description: "حتى 10 مشاريع/الربع",
        features: [
          "جميع ميزات ستارتر",
          "مشاريع غير محدودة",
          "وصول الفريق (5 مقاعد)",
          "دعم أولوياتي",
          "تقارير التحليلات",
        ],
        buttonText: "الأكثر شعبية",
        popular: true,
        align: "center",
      },
      {
        name: "المؤسسة",
        price: "₹2.5L",
        period: "لكل ربع",
        description: "20 مشروعًا أو أكثر/الربع",
        features: [
          "جميع ميزات نمو",
          "عدد مقاعد الفريق غير محدود",
          "الوصول إلى API",
          "دعم مخصص",
          "قواعد امتثال مخصصة",
        ],
        buttonText: "تواصل مع المبيعات",
        popular: false,
        align: "right",
      },
    ],
    ro: "حاسبة العائد على الاستثمار (ROI)",
    project: "وقت التصميم الموفر لكل مشروع:",
    ho: "20 ساعة",
    cost: "₹750/ساعة سعر المهندس المعماري =",
    eghite: "₹18,750",
    parking: "زيادة عدد مواقف السيارات:",
    space: "100 موقف إضافي",
    revenue: "₹50,000/لكل موقف =",
    revenueGain: "إيرادات ₹50 لكح",
    pro: "استرداد الاستثمار: 1–2 مشروع. القيمة المكتسبة: 10–100 ضعف استثمار الأداة.",

    // contact section
    contacttitle: "هل أنت مستعد لتحويل تصميم مواقف السيارات الخاص بك؟",
    contactdec: "احجز تجربة لرؤية باركينج AI أثناء العمل (5 دقائق).",
    roleOptions: [
      "اختر دورك",
      "مهندس معماري",
      "مطور",
      "مدير المشروع",
      "مخطط حضري",
      "متخصص عقاري",
      "آخر",
    ],

    timelineOptions: [
      "متى تحتاج تصميم المواقف؟",
      "على الفور",
      "خلال أسبوع",
      "خلال شهر",
      "خلال 3 أشهر",
      "مجرد استكشاف",
    ],

    demo: "جدولة عرض تجريبي",
    name: "الاسم الكامل",
    nameplaceholder: "أدخل اسمك الكامل",
    email: "البريد الإلكتروني",
    emailplaceholder: "أدخل عنوان بريدك الإلكتروني",
    company: "الشركة",
    companyplaceholder: "أدخل اسم شركتك",
    role: "دورك",
    timeline: "الجدول الزمني",
    projectdetails: "تفاصيل المشروع (اختياري)",
    projectdetailsplaceholder: "مثال: نوع المشروع، الموقع، هدف المواقف، إلخ.",
    submit: "جاري الإرسال...",
    book: "حجز عرض تجريبي",
    wefollowup: "سنتابع معك خلال ساعتين",

    // faq section
    faqtitle: "الأسئلة الشائعة",
    faqData: [
      {
        question: "هل سيحل هذا محل مهندسينا المعماريين؟",
        answer:
          "لا. تصميم مواقف السيارات يمثل 10٪ فقط من العمل المعماري. يقوم باركينج AI بإزالة الجزء الممل والمتكرر (31 ساعة من الرسم اليدوي)، مما يتيح لمهندسيكم التركيز على جماليات المبنى وتجربة المستخدم والاستدامة—العمل ذو القيمة المضافة. هذه الأداة تجعل المهندسين <strong>أكثر قيمة</strong>، وليس أقل.",
      },
      {
        question: "ما مدى دقة الامتثال لـ NBC؟",
        answer:
          "دقة 100٪ للفحوصات المدمجة. قواعد الامتثال التي يستخدمها الذكاء الاصطناعي (نصف قطر الدوران، عرض الممر، أبعاد الباي، وصول الأشخاص ذوي الإعاقة، منطق التقاطعات، ممرات خروج الطوارئ، مسافات التكديس) تتوافق مع معايير NBC 2016 ويتم التحقق منها تلقائيًا. إذا تم انتهاك أي قاعدة، فلن يتم تصدير التصميم وسنعرض رسالة خطأ: بعض الانضمامات/المساحات غير صالحة ولها قيود إضافية (النموذج الأولي المبكر). بدلاً من ذلك، يمكنكم المراجعة.",
      },
      {
        question: "ماذا لو لم يدعم شبكة الأعمدة لدينا هدف مواقفنا؟",
        answer:
          "تخبرك الأداة مقدمًا: \"تجري تحليل القيود وتبلغ: 'الصف 7B6 يتطلب عرض باي 2.4م، وهو أقل من الحد الأدنى لـ NBC البالغ 2.5م. التوصية: صمّم لـ 650 موقفًا، أو أضف الطابق الرابع السفلي، أو حول طابقًا إلى مزيج من مواقف + تجارة.'\" هذا الوضوح في مرحلة التصميم المبكر يوفر أسابيع من الجهد المهدور.",
      },
      {
        question: "هل يمكننا استخدامه إذا لم يكن لدينا ملفات DXF/DWG بعد؟",
        answer:
          "نعم. يمكنك رسم مخطط طابق بسيط في أي أداة CAD (حتى SketchUp ثم تصديره كـ DWG)، أو رسمه يدويًا بالكامل وفق الحدود وشبكة الأعمدة التي حددناها. يمكن لباركينج AI العمل معه. لا حاجة لخطط معمارية مفصلة—تصميم المواقف يحتاج فقط إلى معلومات هيكلية وحدودية.",
      },
      {
        question: "ماذا عن أنظمة مواقف السيارات الميكانيكية؟",
        answer:
          "باركينج AI مُحسّن للمواقف الهيكلية التقليدية القائمة على المنحدرات (98٪ من الحالات في الهند). أنظمة المواقف الميكانيكية (مواقف البازل، التكديس، أتمتة انزلاق السيارات) لها منطق مختلف وهي حاليًا خارج النطاق. نحن نقيم المواقف الميكانيكية كميزة مستقبلية (خارطة طريق 2026).",
      },
      {
        question: "هل تقدمون تخصيصًا لقواعد مواقف فريدة؟",
        answer:
          "لـ NBC 2016 القياسية، لا حاجة للتخصيص—القواعد مدمجة. بالنسبة للاختلافات البلدية أو القيود غير العادية للموقع، يمكننا مناقشة مجموعات قواعد مخصصة (فقط لخطة المؤسسة؛ رسوم إضافية تنطبق). تواصل مع فريق المبيعات لدينا للحصول على التفاصيل.",
      },
    ],

    // cta section
    ctatitle: "توقف عن إضاعة الوقت على مواقف السيارات.",
    ctades: "ابدأ بالفوز بالمشاريع.",
    join: "انضم إلى المطورين والمهندسين المعماريين الذين استعادوا",
    h: "25+ ساعة",
    project: "لكل مشروع واستعادوا",
    p: "₹50 لكح+",
    r: "من إيرادات مواقف السيارات.",
    button: "احجز عرضًا تجريبيًا لمدة 5 دقائق",

    // footer
    products: "المنتج",
    product: [
      { label: "الميزات", href: "#features" },
      { label: "لماذا باركينج AI", href: "#why" },
      { label: "التسعير", href: "#pricing" },
      { label: "الأسئلة الشائعة", href: "#faq" },
    ],
    Companys: "الشركة",
    newarraycompany: [
      { label: "اتصل بالمبيعات", href: "#contact" },
      { label: "الدعم", href: "#support" },
      { label: "المدونة", href: "#blog" },
      { label: "دراسات الحالة", href: "#case-studies" },
    ],
    res: "الموارد",
    newarrayresources: [
      { label: "دليل NBC 2016", href: "#nbc-guide" },
      { label: "الدروس الفيديو", href: "#tutorials" },
      { label: "ملفات DWG نموذجية", href: "#samples" },
      { label: "أفضل الممارسات", href: "#practices" },
    ],
    newcontact: "اتصل بنا",
    newemail: "hello@nexelvr.com",
    newnumber: "+91 9885643254",
    newcity: "حيدر أباد، الهند",
    copyright: "© 2026 باركينج AI",
    powder: "مشغل بواسطة Nexelvr",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    All: "جميع الحقوق محفوظة.",
    // back to top
    TOP: "الأعلى",
    // cookies
    title:
      "يستخدم هذا الموقع ملفات تعريف الارتباط، وعلامات البكسل، والتخزين المحلي لأغراض الأداء، والتخصيص، والتسويق. نستخدم ملفات تعريف الارتباط الخاصة بنا وبعض ملفات تعريف الارتباط من أطراف ثالثة. يتم تفعيل ملفات تعريف الارتباط الأساسية فقط بشكل افتراضي.",
    cookiesetting: "إعدادات الكوكيز",
    button1: "السماح بجميع الكوكيز",
    button2: "عدم السماح بالكوكيز",
    coookietitle: "تفضيلات الكوكيز",
    cookiesdesc:
      "يستخدم هذا الموقع ملفات تعريف الارتباط، وعلامات البكسل، والتخزين المحلي لأغراض الأداء والتسويق. نستخدم ملفات تعريف الارتباط الخاصة بنا وبعض ملفات تعريف الارتباط من أطراف ثالثة. إذا اخترت قبول أي كوكيز غير أساسية، يمكنك تغيير أو تخصيص اختيارك في أي وقت عن طريق تعديل المربعات المحددة أدناه. لمعرفة المزيد عن ممارسات الخصوصية لدينا، يرجى الاطلاع على سياستنا.",
    nweprivacy: "سياسة الخصوصية",
    cookieCategories: [
      {
        id: "essential",
        label: "أساسية",
        description: "هذه العناصر ضرورية لعمل الموقع.",
        locked: true,
        defaultOn: true,
      },
      {
        id: "marketing",
        label: "تسويقية",
        description:
          "تساعد هذه العناصر في تقديم إعلانات أكثر ملاءمة لك. قد تُستخدم أيضًا لتحديد عدد المرات التي ترى فيها إعلانًا وقياس فعالية الحملات الإعلانية. هذه ملفات تعريف ارتباط من أطراف ثالثة مقدمة من شركائنا الإعلانيين.",
        locked: false,
        defaultOn: false,
      },
      {
        id: "personalization",
        label: "تخصيص",
        description:
          "تتيح هذه العناصر للموقع تذكر اختياراتك (مثل اسم المستخدم، اللغة، أو المنطقة) وتخصيص الميزات لك.",
        locked: false,
        defaultOn: false,
      },
      {
        id: "analytics",
        label: "تحليلات",
        description:
          "تساعد هذه العناصر في فهم تفاعلات الزوار، وقياس أداء الموقع، واكتشاف المشكلات التقنية المحتملة.",
        locked: false,
        defaultOn: false,
      },
    ],
    button3: "حفظ التفضيلات",
    button4: "إلغاء",
    parkingtitle: "نظام مواقف السيارات الذكي",
    parkingdesc: "مولد المخططات المدعوم بالذكاء الاصطناعي",
    uploadfiles: "تحميل مخطط الموقع",
    sidemap: "خريطة_الموقع.dxf",
    done: "تم",
    parkinaiprogess: "معالجة الذكاء الاصطناعي",
    layoutdone: "تم إنشاء المخطط!",
    parsingvehicledata: "جاري تحليل بيانات المركبات",
    optimizingslots: "جاري تحسين أماكن الوقوف",
    generatinggrid: "جاري إنشاء الشبكة",
    ParkingLayout: "مخطط مواقف السيارات",
    Available: "متاح",
    Occupied: "مشغول",
    Total: "الإجمالي",
    Free: "فارغ",
    Fill: "ملء",
  },

  ko: {
    topbanner: "한정 기간 프로모션을 놓치지 마세요!",
    topbannerH: "시",
    topbannerM: "분",
    topbannerS: "초",
    topbannerbutton: "자세히 보기",

    features: "기능",
    why: "왜 다른가",
    pricing: "가격",
    faq: "자주 묻는 질문",
    contact: "문의하기",
    parkingai: "주차 AI",
    menu: "메뉴",

    heroTitle: "주차 레이아웃을 10배 더 빠르게 설계하고 NBC 규정을 준수하세요.",

    heroDesc:
      "인도의 상업용 부동산 산업을 위해 개발된 AI 기반 주차 설계 엔진입니다. 며칠이 아닌 단 10분 만에 주차 설계를 최적화하세요. 동일한 토지 면적에서 5~15% 더 많은 주차 공간을 확보할 수 있습니다. 규정 준수 문제로 인한 설계 거부를 방지합니다.",

    trustedBy:
      "하이데라바드, 방갈로르, 뭄바이 전역의 주요 상업용 부동산 개발사와 건축 설계 회사에서 사용하고 있습니다.",

    demo: "데모 예약",
    trial: "무료 체험 시작",

    whyTitle: "왜 팀들이 Parking AI를 선택할까요",

    fasterDesign: "더 빠른 설계",
    moreParking: "더 많은 주차",
    compliant: "NBC 규정 준수",
    redraw: "재설계 필요 없음",
    // SeamlessGallery section
    crisisTitle: "주차 설계 문제",
    crisisDesc: "주차 설계는 시간과 비용, 규정 문제를 발생시킵니다.",
    criticalIssue: "중요 문제",

    advantages: [
      {
        id: 1,
        title: "설계 반복 = 프로젝트 지연",
        points: [
          "모든 주차 설계는 수작업으로 이루어집니다. 기둥을 하나 옮기면 20개 이상의 주차 공간을 다시 설계해야 합니다. 당국에서 거부되면 전체 설계를 다시 해야 합니다. 평균 프로젝트는 3~5번의 설계 수정 과정을 거치며, 그 결과 4~6주의 시간이 지연되고 ₹37.5K~₹75K의 설계 비용이 발생합니다.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/0b07c0b9e24e7948d47d01d604fd2a67.png",
      },
      {
        id: 2,
        title: "NBC 규정 준수는 매우 까다롭습니다",
        points: [
          "국가 건축 법규(NBC)에는 회전 반경, 통로 너비, 장애인 주차 공간(PH), 램프 착지 구역 등 10가지 이상의 엄격한 주차 기준이 있습니다. 이 중 하나라도 위반하면 프로젝트가 지방 당국에 의해 거부될 수 있습니다. 대부분의 설계는 제출 후 거부되어 비용이 많이 드는 재설계를 해야 합니다.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/4d805ac2d72397dc9f006b6ed870b9c8.png",
      },
      {
        id: 3,
        title: "비효율적인 설계로 인한 수익 손실",
        points: [
          "수동 설계는 최대 주차 용량의 85~90%만 활용할 수 있습니다. 죽은 공간, 비효율적인 동선, 비효율적인 각도로 인해 공간이 낭비됩니다. 이로 인해 750대 대신 650대만 주차할 수 있게 되어 단일 프로젝트에서 ₹50~₹300 lakh의 수익 손실이 발생할 수 있습니다.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/df5b41ef4b9ea6dc5395914c80fc8b61.png",
      },
      {
        id: 4,
        title: "구조 설계와의 조정 혼란",
        points: [
          "기둥 위치, 램프 위치, 엘리베이터 코어가 주차 설계와 잘 맞지 않는 경우가 많습니다. 팀 간에 이메일이 계속 오가고, '만약에' 시나리오 분석도 없으며, 단일 기준 데이터도 없습니다. 이로 인해 비효율적인 주차 설계나 구조 설계가 발생하거나 프로젝트가 최대 2주까지 지연될 수 있습니다.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/c33db8e58cdb93cbe5cbc4ed8b6c9fc7.png",
      },
      {
        id: 5,
        title: "법적 결과를 초래하는 규정 준수 오류",
        points: [
          "장애인 주차 공간(PH)이 직렬 위치에 배치됨. 램프 입구가 통로와 너무 가까움. 필요한 착지 거리(landing distance)가 누락됨. 제출 후 시청 검사관이 문제를 발견하면 재설계, 일정 변경, 그리고 평판 손상이 발생할 수 있습니다.",
        ],
        imageUrl:
          "https://img.sanishtech.com/u/087d132851e64f8115e85dbe21b02d2c.png",
      },
    ],
    howItWorksTitle: "작동 방식",
    howItWorksDesc:
      "NBC 규정을 준수하는 최적화된 주차 레이아웃을 만드는 4단계 간단한 과정",

    steps: [
      {
        id: 1,
        number: 1,
        title: "평면도 업로드",
        description:
          "CAD 시스템에서 DXF 또는 DWG 파일을 직접 가져옵니다. 다시 그리거나 단순화할 필요 없이 바로 업로드하세요.",
        icon: "image/fileupload.png",
      },
      {
        id: 2,
        number: 2,
        title: "매개변수 설정",
        description:
          "주차 공간 크기, 통로 너비, 장애인 주차 요구사항, 목표 주차 수를 설정합니다. AI가 NBC 2016 기준에 맞는 규정 요구사항을 자동 계산합니다.",
        icon: "image/aiconfiguration.png",
      },
      {
        id: 3,
        number: 3,
        title: "AI 자동 생성",
        description:
          "몇 초 만에 수천 가지 구성을 테스트합니다. 기둥, 장애물, 램프를 감지하고 레이아웃을 최적화하며 모든 NBC 규칙을 확인합니다.",
        icon: "image/reviewfilescreate.png",
      },
      {
        id: 4,
        number: 4,
        title: "검토 및 내보내기",
        description:
          "레이아웃을 검토하고 필요한 경우 수동으로 수정합니다. 이후 레이어, 주석, 색상 코드가 포함된 시공용 CAD 파일로 내보냅니다.",
        icon: "image/finaloutput.png",
      },
    ],

    featuresTitle: "실제 주차 설계를 위한 기능",

    featuresDesc:
      "모든 기능은 시간을 절약하고 수익을 극대화하며 규정 준수를 보장하도록 설계되었습니다.",

    newarrayfeatures: [
      {
        icon: "🎯",
        title: "지능형 공간 최적화 (50mm 증분 로직)",
        description:
          "Parking AI는 버려지는 공간을 활용합니다. 예를 들어 4,900mm 기둥 간격은 일반적으로 3개의 주차 공간만 만들고 공간이 낭비됩니다. 하지만 AI 배치를 사용하면 900mm를 지능적으로 분배하여 4개의 주차 공간을 만들 수 있습니다. 6층 지하 주차장의 경우 이는 15~45개의 추가 주차 공간을 만들어 ₹5~₹45 lakh의 추가 수익을 창출할 수 있습니다.",
        highlight: "추가 주차 공간 15–45개",
      },
      {
        icon: "✓",
        title: "8가지 자동 규정 준수 검사",
        description: "레이아웃을 보기 전에 Parking AI가 다음을 검증합니다:",
        checks: [
          "회전 반경 (NBC 기준 외부 반경 8.00m)",
          "통로 폭 (일방통행 3.6m, 양방향 6.0m)",
          "주차 공간 최소 치수 및 폭",
          "기둥 간섭 / 여유 공간 (문 완전 개방)",
          "장애인 주차 공간 (3.6m × 5.0m, 2.4m 이상 여유)",
          "비상구 경로 (문 접근 가능)",
          "램프 경사 / 착지 구간 (최대 20%)",
          "주차 목표 (구역별 규정)",
        ],
        footer:
          "문제가 발견되면 AI가 자동 수정안을 제안하며 한 번의 클릭으로 수정할 수 있습니다.",
      },
      {
        icon: "📐",
        title: "AutoCAD 네이티브 통합",
        description:
          "DXF 및 DWG 파일을 직접 지원합니다. 다시 그릴 필요가 없습니다. 레이어, 색상 코드, 주석이 포함된 시공용 CAD 파일을 내보냅니다.",
      },
      {
        icon: "🔧",
        title: "수동 제어 + 반응형 AI",
        description:
          "사용자가 완전히 제어할 수 있습니다. 기둥을 이동하면 AI가 주변 주차 공간을 즉시 업데이트합니다. 주차 유형을 변경하면 시스템이 실시간으로 다시 검증합니다.",
      },
      {
        icon: "📊",
        title: "수용량 기반 역설계",
        description:
          "주차 목표에서 설계를 시작합니다. 예를 들어 750개의 공간을 설정하면 엔진이 실현 가능성을 계산하고 대안을 제안합니다.",
      },
      {
        icon: "🚴",
        title: "자전거 주차 자동 통합",
        description:
          "남은 공간을 자동으로 분석합니다. 자동차 공간보다 자전거 공간이 더 효율적이면 시스템이 자동으로 변환하고 승인을 요청합니다.",
      },
    ],
    AI: "AI 기반",
    //  comparison section
    //  comparisons:

    comparisontitle: "왜 파킹 AI가 더 뛰어난가",
    comparisondescription: "시장에 있는 다른 솔루션과의 직접 비교.",
    comparisons: [
      {
        title: "파킹 AI vs 테스트핏 비교",
        data: [
          {
            dimension: "구조식 주차",
            parkingAI: "목적에 맞게 설계된 최적화 시스템",
            competitor: "각도 주차는 아직 구조식 주차와 호환되지 않음",
            winner: "파킹 AI",
          },
          {
            dimension: "NBC 규정 준수",
            parkingAI: "내장됨 (인도 기준 맞춤)",
            competitor: "미국 구역 규정만 지원",
            winner: "파킹 AI",
          },
          {
            dimension: "공간 최적화",
            parkingAI: "50mm 단위 증가 로직",
            competitor: "각도 기반 조정",
            winner: "파킹 AI",
          },
          {
            dimension: "설계 충돌 감지",
            parkingAI: "8가지 자동 검사 + 자동 수정",
            competitor: "기본 검증",
            winner: "파킹 AI",
          },
          {
            dimension: "AutoCAD 통합",
            parkingAI: "네이티브 지원 (직접 DXF/DWG)",
            competitor: "Parcel 데이터 워크플로우",
            winner: "파킹 AI",
          },
        ],
      },
      {
        title: "파킹 AI vs 파크CAD 비교",
        data: [
          {
            dimension: "기술",
            parkingAI: "AI 기반 생성 알고리즘",
            competitor: "자동화 기능이 있는 CAD 도구",
            winner: "파킹 AI",
          },
          {
            dimension: "속도",
            parkingAI: "10분 (AI 자동 생성)",
            competitor: "30–60분 (도구를 사용한 수동 작업)",
            winner: "파킹 AI",
          },
          {
            dimension: "NBC 규정 준수",
            parkingAI: "완전히 내장됨",
            competitor: "인도 기준에 맞게 설계되지 않음",
            winner: "파킹 AI",
          },
          {
            dimension: "규정 준수 알림",
            parkingAI: "8가지 자동 검사 + 자동 수정 제안",
            competitor: "수동 검증 필요",
            winner: "파킹 AI",
          },
          {
            dimension: "사용자 인터페이스",
            parkingAI: "현대적이고 실시간 반응형 UI",
            competitor: "구식 CAD 인터페이스",
            winner: "파킹 AI",
          },
        ],
      },
    ],

    // ImpactSection
    ImpactSectiontitle: "페르소나별 실제 영향",
    ImpactSectiondec:
      "파킹 AI가 다양한 역할의 업무 흐름을 어떻게 변화시키는지 확인하세요.",
    personas: [
      {
        title: "개발자를 위한",
        icon: (
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
        before: {
          label: "이전:",
          text: "디자인 25시간 + 승인 4–6주 + 비용 ₹37.5K–₹75K + 650 공간 = 수익 손실",
        },
        after: {
          label: "이후:",
          text: "디자인 10분 + 승인 1–2일 + 도구 비용 + 750 공간 = ",
          highlight: "₹50–₹300L 수익 증가",
        },
      },
      {
        title: "건축가를 위한",
        icon: "📐",
        before: {
          label: "이전:",
          text: "주차 프로젝트당 15–30시간 (예측 불가 반복, 규정 준수 위험)",
        },
        after: {
          label: "이후:",
          text: "주차 프로젝트당 10분 + ",
          highlight: "15–30시간 회수하여 더 가치 있는 설계 작업 가능",
          suffix: " + 규정 준수 책임 없음",
        },
      },
      {
        title: "구조 컨설턴트를 위한",
        icon: "🔧",
        before: {
          label: "이전:",
          text: "기둥 배치와 주차 가능성 관련 2–3주 반복 검토",
        },
        after: {
          label: "이후:",
          text: "",
          highlight: "첫날부터 주차 제약 사항 파악",
          suffix: " + 주차 사전 검증으로 구조 격자 최적화 + 충돌 없음",
        },
      },
    ],

    // pricing section
    pricingtitle: "간단하고 투명한 가격",
    pricingdescription: "프로젝트 규모에 맞는 요금제를 선택하세요.",
    pricingPlans: [
      {
        name: "스타터",
        price: "₹50K",
        period: "프로젝트당",
        description: "분기당 최대 5개 프로젝트",
        features: [
          "프로젝트당 무제한 레이아웃",
          "무제한 수정",
          "CAD 출력",
          "규정 준수 검증",
          "이메일 지원",
        ],
        buttonText: "시작하기",
        popular: false,
        align: "left",
      },
      {
        name: "성장",
        price: "₹1.25L",
        period: "분기당",
        description: "분기당 최대 10개 프로젝트",
        features: [
          "스타터의 모든 기능 포함",
          "무제한 프로젝트",
          "팀 접근 (5석)",
          "우선 지원",
          "분석 보고서",
        ],
        buttonText: "가장 인기 있음",
        popular: true,
        align: "center",
      },
      {
        name: "엔터프라이즈",
        price: "₹2.5L",
        period: "분기당",
        description: "분기당 20개 이상 프로젝트",
        features: [
          "성장의 모든 기능 포함",
          "무제한 팀 좌석",
          "API 접근",
          "전담 지원",
          "맞춤 규정 준수 규칙",
        ],
        buttonText: "영업팀 문의",
        popular: false,
        align: "right",
      },
    ],
    ro: "ROI 계산기",
    project: "프로젝트당 절약된 설계 시간:",
    ho: "20시간",
    cost: "₹750/시간 건축가 요율 =",
    eghite: "₹18,750",
    parking: "주차 공간 증가:",
    space: "추가 100 공간",
    revenue: "공간당 ₹50,000 =",
    revenueGain: "₹50만 수익",
    pro: "회수 기간: 1–2 프로젝트. 확보된 가치: 툴 투자 대비 10–100배.",

    // contact us
    contacttitle: "주차 설계를 혁신할 준비가 되셨나요?",
    contactdec:
      "파킹 AI가 실제로 어떻게 작동하는지 데모로 확인해보세요 (5분 소요).",
    roleOptions: [
      "역할 선택",
      "건축가",
      "개발자",
      "프로젝트 매니저",
      "도시 계획가",
      "부동산 전문가",
      "기타",
    ],

    timelineOptions: [
      "주차 설계가 언제 필요하신가요?",
      "즉시",
      "1주 이내",
      "1개월 이내",
      "3개월 이내",
      "단순 탐색 중",
    ],

    demo: "데모 예약하기",
    name: "성명",
    nameplaceholder: "성명을 입력하세요",
    email: "이메일",
    emailplaceholder: "이메일 주소를 입력하세요",
    company: "회사",
    companyplaceholder: "회사명을 입력하세요",
    role: "역할",
    timeline: "일정",
    projectdetails: "프로젝트 세부 정보 (선택 사항)",
    projectdetailsplaceholder: "예: 프로젝트 유형, 위치, 주차 목표 등",
    submit: "제출 중...",
    book: "데모 예약",
    wefollowup: "2시간 내에 연락드리겠습니다",

    // faq section
    faqtitle: "자주 묻는 질문",
    faqData: [
      {
        question: "이 도구가 우리 건축가를 대체하지 않나요?",
        answer:
          "아니요. 주차 설계는 건축 작업의 10%에 불과합니다. Parking AI는 반복적이고 지루한 부분(31시간의 수작업 도면 작성)을 제거하여, 건축가가 건물 미학, 사용자 경험, 지속 가능성 등 부가가치 업무에 집중할 수 있게 합니다. 이 도구는 건축가를 <strong>더 가치 있게</strong> 만들어줍니다.",
      },
      {
        question: "NBC 규정 준수 정확도는 어느 정도인가요?",
        answer:
          "내장된 검증은 100% 정확합니다. AI 규정(회전 반경, 통로 폭, 베이 크기, PH 접근, 교차점 논리, 비상통로, 적재 거리)은 NBC 2016 기준에 맞춰 자동 검증됩니다. 규칙을 위반하면 도면이 내보내지지 않으며, 'Error: 일부 유효하지 않거나 추가 제약이 있음 (초기 MVP)' 메시지를 보여줍니다.",
      },
      {
        question: "컬럼 그리드가 목표 주차 수를 지원하지 않으면 어떻게 되나요?",
        answer:
          "도구가 미리 알려줍니다: \"제약 조건 분석을 수행하고 보고: 'Row 7B6 공간 목표를 달성하려면 베이 폭이 2.4m 필요, 이는 NBC 최소 2.5m 미만입니다. 권장: 650개 공간 설계, 또는 4층 지하 추가, 또는 한 층을 복합용 주차 + 상업용으로 전환.'\" 이렇게 초기 설계 단계에서 명확히 알면 몇 주의 낭비를 줄일 수 있습니다.",
      },
      {
        question: "DXF/DWG 파일이 아직 없어도 사용할 수 있나요?",
        answer:
          "네. CAD 도구에서 간단한 평면도를 그리거나(SketchUp 사용 후 DWG로 내보내기 가능), 경계 및 컬럼 그리드를 기반으로 수동으로 그릴 수 있습니다. 상세 건축 도면은 필요 없으며, Parking AI는 구조와 경계 정보만으로 작동 가능합니다.",
      },
      {
        question: "기계식 주차 시스템은 어떻게 되나요?",
        answer:
          "Parking AI는 표준 램프 기반 구조식 주차에 최적화되어 있습니다(인도에서 98% 사용 사례). 기계식 주차 시스템(퍼즐 주차, 스택 주차, 차량 스키드 자동화)은 다른 로직을 사용하므로 현재 범위에 포함되지 않습니다. 2026 로드맵에 기계식 주차 기능을 검토 중입니다.",
      },
      {
        question: "특별한 주차 규칙에 맞춘 맞춤화가 가능한가요?",
        answer:
          "표준 NBC 2016 기준에서는 맞춤화가 필요 없으며 규칙이 내장되어 있습니다. 특정 지방 규정이나 특수 사이트 제약이 있는 경우, 맞춤 규칙 세트(Enterprise 티어 전용; 추가 요금 적용)를 논의할 수 있습니다. 자세한 내용은 영업팀에 문의하세요.",
      },
    ],

    // cta section
    ctatitle: "주차 설계에 시간을 낭비하지 마세요.",
    ctades: "프로젝트 승리를 시작하세요.",
    join: "시간을 되찾은 개발자와 건축가와 함께하세요",
    h: "25시간 이상",
    project: "프로젝트당 절약하고 회복한",
    p: "₹50L 이상",
    r: "주차 수익에서",
    button: "5분 데모 예약하기",

    products: "제품",
    product: [
      { label: "기능", href: "#features" },
      { label: "왜 파킹 AI인가", href: "#why" },
      { label: "가격", href: "#pricing" },
      { label: "자주 묻는 질문", href: "#faq" },
    ],
    Companys: "회사",
    newarraycompany: [
      { label: "영업팀 문의", href: "#contact" },
      { label: "지원", href: "#support" },
      { label: "블로그", href: "#blog" },
      { label: "사례 연구", href: "#case-studies" },
    ],
    res: "자료",
    newarrayresources: [
      { label: "NBC 2016 가이드", href: "#nbc-guide" },
      { label: "비디오 튜토리얼", href: "#tutorials" },
      { label: "샘플 DWG 파일", href: "#samples" },
      { label: "모범 사례", href: "#practices" },
    ],
    newcontact: "문의",
    newemail: "hello@nexelvr.com",
    newnumber: "+91 9885643254",
    newcity: "하이데라바드, 인도",
    copyright: "© 2026 파킹 AI",
    powder: "제공: Nexelvr",
    privacy: "개인정보 처리방침",
    terms: "서비스 약관",
    All: "모든 권리 보유.",
    // back to top
    TOP: "맨 위",
    // cookiess
    title:
      "이 웹사이트는 성능, 개인화 및 마케팅 목적으로 쿠키, 픽셀 태그, 로컬 스토리지를 사용합니다. 자체 쿠키와 일부 타사 쿠키를 사용합니다. 필수 쿠키만 기본적으로 활성화되어 있습니다.",
    cookiesetting: "쿠키 설정",
    button1: "모든 쿠키 허용",
    button2: "쿠키 허용 안 함",
    coookietitle: "쿠키 환경설정",
    cookiesdesc:
      "이 웹사이트는 성능 및 마케팅 목적으로 쿠키, 픽셀 태그, 로컬 스토리지를 사용합니다. 자체 쿠키와 일부 타사 쿠키를 사용합니다. 필수 쿠키 외의 쿠키를 수락한 경우, 아래 체크 박스를 통해 언제든지 선택을 변경하거나 맞춤 설정할 수 있습니다. 개인정보 보호 관행에 대해 더 알아보려면 당사의 정책을 참조하세요.",
    nweprivacy: "개인정보 처리방침",
    cookieCategories: [
      {
        id: "essential",
        label: "필수",
        description: "웹사이트가 작동하는 데 필요한 항목입니다.",
        locked: true,
        defaultOn: true,
      },
      {
        id: "marketing",
        label: "마케팅",
        description:
          "이 항목은 보다 관련성 높은 광고를 제공하는 데 도움을 줍니다. 또한 광고 노출 횟수를 제한하고 광고 캠페인의 효과를 측정하는 데 사용될 수 있습니다. 이는 광고 파트너가 제공하는 타사 쿠키입니다.",
        locked: false,
        defaultOn: false,
      },
      {
        id: "personalization",
        label: "개인화",
        description:
          "이 항목은 웹사이트가 사용자의 선택(예: 사용자 이름, 언어, 지역)을 기억하고 기능을 개인화하도록 합니다.",
        locked: false,
        defaultOn: false,
      },
      {
        id: "analytics",
        label: "분석",
        description:
          "이 항목은 방문자 상호작용을 이해하고 웹사이트 성능을 측정하며 잠재적인 기술 문제를 파악하는 데 도움을 줍니다.",
        locked: false,
        defaultOn: false,
      },
    ],
    button3: "환경설정 저장",
    button4: "취소",
    parkingtitle: "스마트 주차 시스템",
    parkingdesc: "AI 기반 레이아웃 생성기",
    uploadfiles: "사이트 도면 업로드",
    sidemap: "site_map.dxf",
    done: "완료",
    parkinaiprogess: "AI 처리 중",
    layoutdone: "레이아웃 생성 완료!",
    parsingvehicledata: "차량 데이터 분석 중",
    optimizingslots: "주차 슬롯 최적화 중",
    generatinggrid: "그리드 생성 중",
    ParkingLayout: "주차 레이아웃",
    Available: "사용 가능",
    Occupied: "사용 중",
    Total: "총합",
    Free: "빈 공간",
    Fill: "채우기",
  },
};
