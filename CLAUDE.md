# CLAUDE.md - Project Philosophy & Guidelines

## The Vision

calc.js is not just another wrapper around mathjs. It's a gateway to mathematical expression evaluation - **simple, elegant, powerful**.

Every line of code should serve a purpose. Every API decision should feel inevitable. Every error message should guide, not confuse.

## Core Principles

### 1. Simplicity is Sophistication

The entire API is one function call. That's not laziness - it's intentional design. Users shouldn't need to learn a complex API to evaluate `2 + 2` or convert units.

```js
calc('12 / (2.3 + 0.7)'); // Just works
```

### 2. Safety First

- Input validation is non-negotiable
- Error messages must be helpful
- No arbitrary code execution beyond math expressions
- Dependencies must be audited and up-to-date

### 3. Developer Experience

- TypeScript definitions for autocomplete and type safety
- Comprehensive JSDoc comments
- Clear error messages with context
- Extensive examples for common use cases

### 4. Testing is Documentation

Every test should tell a story:

- What are we testing?
- Why does it matter?
- What should happen?

Tests aren't bureaucracy - they're a commitment to reliability.

### 5. Performance Matters

While mathjs does the heavy lifting, we must:

- Avoid unnecessary overhead
- Benchmark critical paths
- Document performance characteristics

## Code Standards

### Style

- Use modern JavaScript (ES6+)
- Prefer functional programming where it improves clarity
- Avoid clever code - prefer readable code
- Use meaningful variable names

### Documentation

- Every public function needs JSDoc
- Every parameter needs a description
- Every return value needs documentation
- Include examples in JSDoc

### Error Handling

```js
// Good: Helpful error message
throw new Error(
  'Invalid expression: "abc". Expression must be a valid mathematical formula.'
);

// Bad: Cryptic error
throw new Error('Invalid input');
```

### Testing

- Test happy paths
- Test edge cases
- Test error conditions
- Test with real-world examples

## Architecture Decisions

### Why a Thin Wrapper?

calc.js deliberately stays thin. mathjs is battle-tested and handles the complexity of mathematical evaluation. Our job is to:

1. Provide a clean, simple interface
2. Add safety and validation
3. Improve error messages
4. Ensure quality through testing

### Dependencies

- **mathjs**: The core engine. Keep updated, but test thoroughly on updates.
- **Dev dependencies**: Use best-in-class tools (Jest, ESLint, Prettier)

### Versioning

Follow semantic versioning strictly:

- **Major**: Breaking API changes
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes

## Contribution Guidelines

### Before You Code

1. Read this document
2. Check existing issues and PRs
3. Open an issue to discuss major changes
4. Ensure tests exist for the area you're modifying

### Code Quality

- All tests must pass
- Linting must pass
- Code coverage should not decrease
- Add tests for new features

### Pull Requests

- One logical change per PR
- Clear description of what and why
- Reference related issues
- Update documentation if needed

## Security

### Input Validation

Always validate input before passing to mathjs:

- Check for null/undefined
- Verify string input
- Sanitize if necessary

### Dependency Security

- Run `npm audit` regularly
- Update dependencies promptly
- Review security advisories

### Reporting Vulnerabilities

See SECURITY.md for our security policy.

## The Standard

We hold ourselves to the highest standard:

- Code that reads like prose
- Tests that prevent regressions
- Documentation that empowers users
- Performance that scales
- Security that protects

**This isn't just a library. It's a commitment to excellence.**

---

_Last updated: 2025-11-16_
