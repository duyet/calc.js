# Contributing to calc.js

First off, thank you for considering contributing to calc.js! It's people like you that make calc.js such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title** for the issue to identify the problem
- **Describe the exact steps which reproduce the problem** in as many details as possible
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior
- **Explain which behavior you expected to see instead and why**
- **Include code samples and test cases** if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title** for the issue to identify the suggestion
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible
- **Provide specific examples to demonstrate the steps** or provide code samples
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why
- **Explain why this enhancement would be useful** to most calc.js users

### Pull Requests

- Fill in the required template
- Follow the JavaScript styleguide (ESLint configuration)
- Include thoughtfully-written tests
- Document new code based on the JSDoc standard
- End all files with a newline
- Ensure all tests pass
- Update the README.md with details of changes if needed

## Development Process

### Setup

1. Fork the repo
2. Clone your fork
3. Install dependencies:
   ```bash
   npm install
   ```

### Making Changes

1. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. Make your changes and ensure they follow our standards:

   ```bash
   # Run tests
   npm test

   # Run linting
   npm run lint

   # Format code
   npm run format
   ```

3. Add tests for your changes:
   - We aim for high code coverage (>80%)
   - Tests should be clear and descriptive
   - Include edge cases

4. Commit your changes:

   ```bash
   git commit -m "feat: add amazing feature"
   ```

   We follow conventional commits:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `test:` - Test changes
   - `refactor:` - Code refactoring
   - `chore:` - Maintenance tasks

### Testing

We use Jest for testing. Please ensure:

- All tests pass: `npm test`
- Code coverage remains above 80%: `npm run test:coverage`
- New features have corresponding tests
- Bug fixes have regression tests

### Code Style

We use ESLint and Prettier to maintain code quality:

```bash
# Check linting
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

Key style points:

- Use meaningful variable names
- Add JSDoc comments for all functions
- Keep functions small and focused
- Prefer functional programming where appropriate
- Write self-documenting code

### Documentation

- Use JSDoc for all public APIs
- Include examples in JSDoc comments
- Update README.md for significant changes
- Add usage examples to the examples directory

### Commit Messages

Write clear, concise commit messages:

```
feat: add support for custom functions in scope

- Add support for passing functions in scope parameter
- Update tests to cover custom function usage
- Add documentation with examples
```

## Project Structure

```
calc.js/
├── index.js           # Main library file
├── index.d.ts         # TypeScript definitions
├── test/
│   └── test.js        # Test suite
├── examples/          # Usage examples
├── .github/
│   ├── workflows/     # CI/CD pipelines
│   └── ISSUE_TEMPLATE/# Issue templates
└── docs/              # Additional documentation
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be recognized in our README.md. Thank you for your contributions!
