# GitHub Actions CI/CD Workflows

This directory contains GitHub Actions workflows for automated testing and deployment.

## CI Workflow (`ci.yml`)

### Triggers
- **Pull Requests**: Runs on all pull requests to any branch
- **Push to Main**: Runs when code is pushed directly to the main branch

### What it does
1. **Setup Environment**
   - Uses Ubuntu latest runner
   - Sets up Node.js 16.x (matching your local development environment)
   - Caches npm dependencies for faster builds

2. **Code Quality Checks**
   - **Linting**: Runs ESLint to check code style and catch potential issues
   - **Testing**: Executes Jest tests with coverage reporting
   - **Build**: Compiles the React application to ensure it builds successfully

3. **Coverage Reporting**
   - Generates test coverage reports
   - Optionally uploads to Codecov (requires `CODECOV_TOKEN` secret)

### Environment Variables
- `CI=true`: Enables CI mode for React scripts
- `GENERATE_SOURCEMAP=false`: Disables source map generation for faster builds

### Scripts Used
- `npm run lint`: ESLint code linting
- `npm test`: Jest test runner with coverage
- `npm run build`: Production build

### Status
The workflow will:
- ✅ **Pass** if all linting, tests, and build steps succeed
- ❌ **Fail** if any step fails, blocking the PR from being merged

### Setup Requirements
1. Ensure your repository has the required npm scripts in `package.json`
2. (Optional) Add `CODECOV_TOKEN` to repository secrets for coverage reporting
3. Configure branch protection rules to require CI checks before merging

### Local Testing
Before pushing, you can run the same checks locally:
```bash
npm run lint          # Check code style
npm test              # Run tests
npm run build         # Test production build
```
