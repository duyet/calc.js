# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of calc.js seriously. If you believe you have found a security vulnerability, please report it to us as described below.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **me@duyetdev.com**

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the requested information listed below (as much as you can provide) to help us better understand the nature and scope of the possible issue:

- Type of issue (e.g. input validation, injection, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

This information will help us triage your report more quickly.

## Preferred Languages

We prefer all communications to be in English.

## Security Update Process

When we receive a security bug report, we will:

1. Confirm the problem and determine the affected versions
2. Audit code to find any similar problems
3. Prepare fixes for all supported versions
4. Release new versions as soon as possible

## Security Considerations

### Input Validation

calc.js validates all input before evaluation:

- Null/undefined checks
- Empty string checks
- Type validation for scope parameter

### Expression Evaluation

We use mathjs for expression evaluation, which:

- Sandboxes expression evaluation
- Does not allow arbitrary code execution
- Validates mathematical expressions

### Dependencies

We regularly:

- Run `npm audit` to check for known vulnerabilities
- Update dependencies to patch security issues
- Review security advisories

### Best Practices for Users

1. **Always validate user input** before passing to calc.js
2. **Sanitize expressions** from untrusted sources
3. **Keep dependencies updated** by running `npm update`
4. **Review security advisories** regularly

## Acknowledgments

We appreciate the security research community's efforts to responsibly disclose vulnerabilities. Thank you for helping keep calc.js and our users safe!
