# MDX Components Documentation

Custom components for use in MDX content throughout the Trace website.

## CodeBlock Component

A custom code block component with syntax highlighting, language labels, and copy functionality.

### Features

- **Syntax Highlighting**: Uses [Shiki](https://shiki.style/) with VS Code themes (GitHub Light/Dark)
- **Copy Button**: One-click code copying with visual feedback
- **Language Labels**: Displays the programming language in the header
- **Dark Mode Support**: Automatic theme switching based on system preferences
- **Responsive Design**: Optimized for mobile and desktop viewing

### Usage in MDX

The CodeBlock component is automatically applied to all fenced code blocks in MDX files.

#### Code block with language:

\`\`\`typescript
interface User {
id: string;
name: string;
email: string;
}
\`\`\`

#### Code block without language:

\`\`\`
Plain text or generic code
\`\`\`

### Inline Code

Inline code is also handled automatically:

Use \`inline code\` within paragraphs.

### Supported Languages

Shiki supports all major programming languages including:

- JavaScript/TypeScript
- Swift
- Python
- Java
- SQL
- JSON
- Markdown
- And many more...

### Styling

The component uses the existing Tailwind design system:

- Border radius: `rounded-lg`
- Colors: Uses CSS variables for light/dark mode
- Spacing: Responsive padding (sm/md breakpoints)
- Typography: Monospace font at 13px/14px

### Implementation Details

**Location**: `/components/docs/mdx/code-block.tsx`

**Registered in**: `/mdx-components.tsx`

**CSS Overrides**: `/app/globals.css` (prose styles)

The component consists of two parts:

1. `CodeBlock` - For multi-line code blocks with syntax highlighting
2. `InlineCode` - For inline code snippets

Both are automatically selected based on the MDX context.
