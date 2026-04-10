# Tools

One HTML file per tool. Static, hand-written, no build step.

## Convention

- Copy `_template.html` to `<slug>.html`, then edit the 4 `EDIT ME` blocks.
- Paths to root assets use `../` (e.g. `../assets/images/logo.png`, `../favicon.svg`).
- Paths to root pages use `../index.html`, `../about.html`, `../services.html`, `../contact.html`, `../privacy.html`, `../terms.html`, `../tools.html`.
- Paths to sibling tool pages are bare (e.g. `gst-calculator.html`).
- Each tool is **self-contained**: vanilla JS only, no frameworks, no npm, no build. Inline `<script>` at the bottom of the file.
- Match the site's design language: Manrope font, `handcrafted-border`, `editorial-shadow`, `line-art-icon`, primary `#005ca8`, Material Symbols.

## The 10 tools

| Filename | What it does |
| --- | --- |
| `income-tax-calculator.html` | Compare Old vs New regime for FY 2025-26. Instant results. |
| `gst-calculator.html` | Add or remove GST at 5%, 12%, 18%, 28%. Inclusive & exclusive. |
| `tds-calculator.html` | Calculate TDS on salary, rent, contractor payments and more. |
| `emi-calculator.html` | Loan EMI with full amortisation schedule and interest breakdown. |
| `sip-calculator.html` | Project mutual fund SIP returns with step-up and lumpsum options. |
| `gratuity-calculator.html` | Calculate gratuity payable under the Payment of Gratuity Act, 1972. |
| `rent-receipt-generator.html` | Generate HRA-compliant rent receipts in seconds. Print or download. |
| `rent-agreement.html` | Ready-to-sign rental agreement template. Fill, print, done. |
| `noc-gst.html` | No-Objection Certificate for GST registration from property owner. |
| `compliance-calendar.html` | Monthly due dates for Income Tax, GST, ROC, and Labour Law. |

All tools are linked from the `Tools` dropdown in the nav on every page and from `tools.html` (the hub).
