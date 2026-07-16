
const content = {

home: `
<h1><i class="bi bi-house-door-fill text-success"></i> Welcome to StockVision</h1>

<p>
StockVision is your trusted financial platform where you can learn about the stock market,
mutual funds, cryptocurrency, portfolio management, and smart investment planning.
Our goal is to help every investor make informed financial decisions.
</p>

<div class="row mt-5">

<div class="col-md-4">
<div class="feature-box text-center">
<i class="bi bi-graph-up-arrow"></i>
<h4>Market Analysis</h4>
<p>Daily stock market analysis with expert insights.</p>
</div>
</div>

<div class="col-md-4">
<div class="feature-box text-center">
<i class="bi bi-currency-exchange"></i>
<h4>Trading Tips</h4>
<p>Learn professional trading strategies.</p>
</div>
</div>

<div class="col-md-4">
<div class="feature-box text-center">
<i class="bi bi-bank2"></i>
<h4>Financial Planning</h4>
<p>Create wealth with smart investments.</p>
</div>
</div>

</div>
`,

about: `
<h1><i class="bi bi-info-circle-fill text-success"></i> About Us</h1>

<p>
StockVision is a modern finance platform dedicated to helping investors understand financial markets.
We provide educational content, investment guidance, market analysis, and portfolio strategies.
</p>


<div class="row mt-5">

    <div class="col-md-6 mb-4">
        <div class="feature-box">
            <i class="bi bi-bullseye"></i>
            <h4>Our Mission</h4>
            <p>
                To make investing simple, secure, and accessible for everyone.
            </p>
        </div>
    </div>

    <div class="col-md-6 mb-4">
        <div class="feature-box">
            <i class="bi bi-eye-fill"></i>
            <h4>Our Vision</h4>
            <p>
                To become one of India's most trusted financial education platforms.
            </p>
        </div>
    </div>

</div>

<div class="row mt-4">

    <div class="col-md-6">
        <div class="feature-box">
            <i class="bi bi-award-fill"></i>
            <h4>Expert Guidance</h4>
            <p>Professional advice from experienced market analysts.</p>
        </div>
    </div>

    <div class="col-md-6">
        <div class="feature-box">
            <i class="bi bi-people-fill"></i>
            <h4>Trusted Community</h4>
            <p>Thousands of investors trust our market insights.</p>
        </div>
    </div>

</div>
`,

services: `
<h1><i class="bi bi-briefcase-fill text-success"></i> Our Services</h1>

<div class="row">

<div class="col-md-6 mb-4">
<div class="feature-box">
<i class="bi bi-graph-up-arrow"></i>
<h4>Stock Market Analysis</h4>
<p>Analyze market trends and investment opportunities.</p>
</div>
</div>

<div class="col-md-6 mb-4">
<div class="feature-box">
<i class="bi bi-currency-exchange"></i>
<h4>Trading Strategies</h4>
<p>Learn intraday, swing, and positional trading.</p>
</div>
</div>

<div class="col-md-6 mb-4">
<div class="feature-box">
<i class="bi bi-pie-chart-fill"></i>
<h4>Portfolio Management</h4>
<p>Manage diversified investment portfolios efficiently.</p>
</div>
</div>

<div class="col-md-6 mb-4">
<div class="feature-box">
<i class="bi bi-cash-stack"></i>
<h4>Investment Planning</h4>
<p>Plan long-term financial growth with confidence.</p>
</div>
</div>

</div>
`,

contact: `
<h1><i class="bi bi-envelope-fill text-success"></i> Contact Support</h1>

<p>If you have any questions, feel free to contact us.</p>

<ul class="list-group">

<li class="list-group-item">
📧 Email : support@stockvision.com
</li>

<li class="list-group-item">
📞 Phone : +91 99260 XXXXX
</li>

<li class="list-group-item">
📍 Address : Indore, Madhya Pradesh, India
</li>

</ul>
`,

news: `
<h1><i class="bi bi-newspaper text-success"></i> Market News</h1>

<p>
Stay updated with the latest stock market news, economic events, IPO launches,
company earnings, and global financial trends.
</p>

<div class="feature-box">
<h4>Today's Highlights</h4>

<ul>
<li>Nifty closes higher with banking stocks leading gains.</li>
<li>Sensex gains over 300 points in today's session.</li>
<li>Gold prices remain stable.</li>
<li>Bitcoin continues to show strong momentum.</li>
</ul>

</div>
`,

faq: `
<h1><i class="bi bi-question-circle-fill text-success"></i> Frequently Asked Questions</h1>

<div class="accordion" id="faqAccordion">

<div class="accordion-item">
<h2 class="accordion-header">
<button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#one">
What is Stock Market?
</button>
</h2>

<div id="one" class="accordion-collapse collapse show">
<div class="accordion-body">
A stock market is a marketplace where investors buy and sell company shares.
</div>
</div>
</div>

<div class="accordion-item">
<h2 class="accordion-header">
<button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#two">
What is SIP?
</button>
</h2>

<div id="two" class="accordion-collapse collapse">
<div class="accordion-body">
SIP (Systematic Investment Plan) allows regular investments in mutual funds.
</div>
</div>
</div>

</div>
`,

privacy: `
<h1><i class="bi bi-shield-lock-fill text-success"></i> Privacy Policy</h1>

<p>
Your privacy is important to us. We do not sell or misuse your personal information.
All user data is kept secure and used only to improve our services.
</p>

<h2>Information We Collect</h2>

<ul>
<li>Name</li>
<li>Email Address</li>
<li>Contact Number</li>
<li>Website Usage Data</li>
</ul>

<h2>Security</h2>

<p>
We use secure technologies to protect your personal information.
</p>
`

};
// ===============================
// Load Page Content
// ===============================

const params = new URLSearchParams(window.location.search);
const page = params.get("page");

const contentDiv = document.getElementById("content");

if (contentDiv) {
    contentDiv.innerHTML =
        content[page] || "<h2>Page Not Found</h2>";
}

// ===============================
// Load Common Navbar
// ===============================

const navbar = document.getElementById("navbar");

if (navbar) {
    fetch("Navigation.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Navigation.html not found");
            }
            return response.text();
        })
        .then(data => {
            navbar.innerHTML = data;

            // Active Menu
            document.querySelectorAll(".nav-link").forEach(link => {
                link.classList.remove("active");
            });

            if (page === "about") {
                document.querySelector('a[href="NavBar.html?page=about"]')?.classList.add("active");
            } 
            else if (page === "services") {
                document.querySelector('a[href="NavBar.html?page=services"]')?.classList.add("active");
            } 
            else {
                document.querySelector('a[href="index.html"]')?.classList.add("active");
            }
        })
        .catch(error => {
            console.error("Navbar Error:", error);
        });
}
const titles = {
    home: {
        title: "Welcome To StockVision",
        sub: "Smart investment starts here."
    },
    about: {
        title: "About Us",
        sub: "Learn more about our company."
    },
    services: {
        title: "Our Services",
        sub: "Professional financial solutions."
    },
    contact: {
        title: "Contact Support",
        sub: "We're here to help you."
    },
    news: {
        title: "Market News",
        sub: "Latest updates from the market."
    },
    faq: {
        title: "Frequently Asked Questions",
        sub: "Find answers to common questions."
    },
    privacy: {
        title: "Privacy Policy",
        sub: "Your privacy matters to us."
    }
};

document.getElementById("pageTitle").innerHTML =
titles[page]?.title || "Welcome To StockVision";

document.getElementById("pageSubTitle").innerHTML =
titles[page]?.sub || "";