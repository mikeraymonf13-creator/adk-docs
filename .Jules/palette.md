## 2026-03-29 - Accessible Action Buttons & Dynamic ARIA Feedback
**Learning:** Icon-only action buttons relying solely on HTML `title` attributes lack consistent screen reader support, and visual icon swaps (e.g., checkmark on copy) are invisible to screen reader users unless `aria-label` is updated dynamically.
**Action:** Include explicit `aria-label` on all icon-only action buttons, and dynamically update `aria-label` during state transitions (e.g., success/error states) before resetting back to the default label.
