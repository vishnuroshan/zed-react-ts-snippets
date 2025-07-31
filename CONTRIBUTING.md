# Contributing to React TypeScript Snippets for Zed IDE

Thank you for your interest in contributing to React TypeScript Snippets for Zed IDE! We welcome contributions from the community and appreciate your help in making this extension better.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Snippet Guidelines](#snippet-guidelines)
- [Development Setup](#development-setup)
- [Submitting Changes](#submitting-changes)
- [Style Guide](#style-guide)
- [Testing](#testing)

## Code of Conduct

This project adheres to a code of conduct that we expect all contributors to follow. Please be respectful and constructive in all interactions.

## How Can I Contribute?

### 🐛 Reporting Bugs

- Use the GitHub issue tracker to report bugs
- Check if the issue already exists before creating a new one
- Provide clear steps to reproduce the issue
- Include relevant information about your environment (Zed version, OS, etc.)

### 💡 Suggesting Enhancements

- Use GitHub issues to suggest new snippets or improvements
- Provide a clear description of the enhancement
- Explain why this enhancement would be useful
- Include examples of the proposed snippet

### 📝 Adding New Snippets

We're always looking for new useful snippets! Here are some areas where contributions are especially welcome:

- **React Patterns**: Advanced React patterns, context providers, error boundaries
- **TypeScript Utilities**: Advanced TypeScript patterns, utility types, generics
- **Testing**: Jest, React Testing Library, Vitest snippets
- **State Management**: Redux, Zustand, React Query snippets

### 🔧 Improving Documentation

- Fix typos or unclear explanations
- Add better examples
- Improve the README or other documentation
- Translate documentation (if applicable)

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/zed-react-ts-snippets.git
   cd zed-react-ts-snippets
   ```
3. **Create a new branch** for your contribution:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Snippet Guidelines

### Naming Conventions

- Use descriptive, concise prefixes
- Check for prefix conflicts across snippet files
- Follow existing naming patterns:
  - React components: `rfc`, `rff`, `frc`
  - React hooks: `us`, `uem`, `uer`
  - TypeScript: `ts` prefix (e.g., `tsfn`, `tsi`)
  - Generic patterns: descriptive names (e.g., `cleanup`, `enum`)

### Snippet Structure

Each snippet should follow this structure in the JSON files:

```json
{
  "Snippet Name": {
    "prefix": "snippet-prefix",
    "body": ["line 1 of code", "line 2 with ${1:placeholder}", "$0"],
    "description": "Clear description of what the snippet does"
  }
}
```

### Best Practices

1. **Use TypeScript types**: Always include proper TypeScript annotations
2. **Include placeholders**: Use `${1:placeholder}` for user input
3. **End with `$0`**: Place the final cursor position
4. **Keep it focused**: Each snippet should do one thing well
5. **Follow conventions**: Use existing code style and patterns
6. **Add descriptions**: Provide clear, helpful descriptions

### Example of a Good Snippet

```json
{
  "React Query Hook": {
    "prefix": "urq",
    "body": [
      "const { data, isLoading, error } = useQuery({",
      "  queryKey: ['${1:queryKey}'],",
      "  queryFn: () => fetch${2:Data}(),",
      "  $0",
      "});"
    ],
    "description": "React Query hook with TypeScript"
  }
}
```

## Development Setup

### File Structure

```
snippets/
├── tsx.json          # React/TSX snippets
└── typescript.json   # Pure TypeScript snippets
```

### Which File to Edit?

- **`tsx.json`**: For React components, hooks, and TSX-related snippets
- **`typescript.json`**: For pure TypeScript patterns, utilities, and non-React code

### Testing Your Snippets

1. Install the extension in Zed IDE locally:

   - Open Zed IDE
   - Go to Extensions → Install Dev Extension
   - Select your local project folder

2. Test your snippets:
   - Create a new `.tsx` or `.ts` file
   - Type your snippet prefix and press Tab
   - Verify the snippet expands correctly
   - Test all placeholders work as expected

## Submitting Changes

### Before Submitting

- [ ] Test your snippets in Zed IDE
- [ ] Ensure all placeholders work correctly
- [ ] Follow the naming conventions
- [ ] Add appropriate descriptions
- [ ] Update documentation if needed

### Pull Request Process

1. **Commit your changes** with a clear message:

   ```bash
   git add .
   git commit -m "Add React Query hook snippet (urq)"
   ```

2. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** on GitHub:
   - Use a clear, descriptive title
   - Describe what you've added or changed
   - Reference any related issues
   - Include screenshots if relevant

### Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] New snippet(s)
- [ ] Bug fix
- [ ] Documentation update
- [ ] Other (please describe)

## Snippets Added/Modified

- `prefix` - Description

## Testing

- [ ] Tested in Zed IDE
- [ ] All placeholders work correctly
- [ ] Follows existing conventions

## Screenshots (if applicable)
```

## Style Guide

### Code Style

- Use 2 spaces for indentation
- Use double quotes for strings in JSON
- Keep lines under 100 characters when possible
- Use meaningful variable names in snippets

### Placeholder Guidelines

- Use descriptive placeholder names: `${1:componentName}` not `${1:name}`
- Number placeholders logically: most important first
- Use `$0` for final cursor position
- Group related placeholders with the same number for simultaneous editing

### TypeScript Best Practices

- Always include proper type annotations
- Use generic types when appropriate
- Follow React TypeScript best practices
- Include proper imports (`import * as React from 'react'`)

## Testing

### Manual Testing Checklist

- [ ] Snippet expands correctly
- [ ] All placeholders are accessible via Tab
- [ ] TypeScript compilation passes
- [ ] Code follows React/TypeScript best practices
- [ ] No syntax errors
- [ ] Proper indentation and formatting

### Integration Testing

Test your snippets with:

- Different TypeScript configurations
- Various React versions (if applicable)
- Different file types (`.ts` vs `.tsx`)

## Recognition

Contributors will be recognized in the following ways:

- Listed in the project's contributors
- Mentioned in release notes for significant contributions
- Community recognition and thanks

## Questions?

If you have questions about contributing, feel free to:

- Open an issue with the "question" label
- Reach out via GitHub discussions
- Contact the maintainer directly

## Resources

- [Zed Extension Documentation](https://zed.dev/docs/extensions)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [VS Code Snippet Syntax](https://code.visualstudio.com/docs/editor/userdefinedsnippets) (similar to Zed)

---

Thank you for contributing to React TypeScript Snippets for Zed IDE! 🎉
