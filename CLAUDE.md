# CLAUDE.md - AI Assistant Guide for figma-testing

This document provides comprehensive guidance for AI assistants working with this repository.

## Repository Overview

**Project Name:** figma-testing
**Repository Owner:** luukmuu
**Purpose:** Testing repository for Figma-related functionality with GitHub Pages deployment
**Primary Technology:** Jekyll (Static Site Generator)

## Repository Structure

```
figma-testing/
├── .github/
│   └── workflows/
│       └── jekyll-gh-pages.yml    # GitHub Pages deployment workflow
├── .git/                          # Git version control
├── README.md                      # Basic project readme
├── Screenshot 2025-11-15 at 11.35.39.png  # Documentation screenshot
└── CLAUDE.md                      # This file
```

## Key Components

### 1. GitHub Pages Deployment (.github/workflows/jekyll-gh-pages.yml)

The repository uses GitHub Actions to automatically build and deploy a Jekyll site to GitHub Pages.

**Workflow Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Workflow Process:**
1. Checkout code
2. Setup GitHub Pages
3. Build with Jekyll (source: `./`, destination: `./_site`)
4. Upload build artifact
5. Deploy to GitHub Pages

**Important Notes:**
- Only one concurrent deployment allowed
- In-progress deployments are NOT cancelled
- Requires specific GitHub token permissions (contents:read, pages:write, id-token:write)

### 2. Git Configuration

**Remote Origin:** http://local_proxy@127.0.0.1:51585/git/luukmuu/figma-testing
**Main Branch:** `main`
**Current Development Branch:** `claude/claude-md-mi0a6qlnjp4xoqlh-01HQ3xAYnmxjqmJVWawCQ4fa`

## Development Workflows

### Git Branching Strategy

1. **Feature Development:**
   - Create feature branches with prefix `claude/`
   - Branch naming: `claude/claude-md-<session-id>`
   - All development work happens on feature branches

2. **Committing Changes:**
   - Write clear, descriptive commit messages
   - Follow conventional commit format when appropriate
   - Example: "Add Jekyll GitHub Pages deployment workflow"

3. **Pushing Changes:**
   - ALWAYS use: `git push -u origin <branch-name>`
   - Branch MUST start with `claude/` and match session ID
   - Retry logic: Up to 4 retries with exponential backoff (2s, 4s, 8s, 16s) on network errors

4. **Pull Requests:**
   - Create PRs from feature branches to `main`
   - Ensure Jekyll build passes before merging
   - PR merges trigger automatic GitHub Pages deployment

### GitHub Pages Deployment

**Automatic Deployment:**
- Triggered on every push to `main` branch
- Jekyll builds the site from root directory
- Outputs to `_site/` directory
- Deploys to GitHub Pages environment

**Testing Before Merge:**
- Verify Jekyll can build successfully
- Check for any broken links or missing assets
- Preview changes locally if possible

## Coding Conventions

### Jekyll/Markdown Files

1. **Markdown Formatting:**
   - Use standard GitHub-flavored markdown
   - Include front matter for Jekyll pages (when applicable)
   - Keep line length reasonable for readability

2. **File Organization:**
   - Documentation in root or `docs/` folder
   - Assets (images, screenshots) in root or dedicated folder
   - Jekyll configuration in `_config.yml` (when needed)

3. **Image Assets:**
   - Use descriptive filenames
   - Current pattern: `Screenshot YYYY-MM-DD at HH.MM.SS.png`
   - Consider organizing in `assets/` or `images/` folder for larger projects

### Documentation Standards

1. **README.md:**
   - Should contain project overview
   - Installation/setup instructions
   - Usage examples
   - Links to deployed site

2. **CLAUDE.md (This File):**
   - Keep updated with repository changes
   - Document new workflows or conventions
   - Add examples of common tasks

## Common Tasks for AI Assistants

### 1. Adding New Content

```bash
# Create or edit markdown file
# Ensure proper front matter if it's a Jekyll page

# Commit changes
git add .
git commit -m "Add new content: <description>"

# Push to feature branch
git push -u origin claude/claude-md-<session-id>
```

### 2. Updating Documentation

```bash
# Edit README.md, CLAUDE.md, or other docs
# Verify markdown formatting

# Commit and push
git add README.md CLAUDE.md
git commit -m "Update documentation"
git push -u origin <current-branch>
```

### 3. Adding Images/Screenshots

```bash
# Add image files with descriptive names
git add "Screenshot YYYY-MM-DD at HH.MM.SS.png"
git commit -m "Add screenshot for <feature/section>"
git push -u origin <current-branch>
```

### 4. Testing Jekyll Build Locally

```bash
# If Jekyll is installed locally
bundle exec jekyll serve

# Or using Docker
docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 jekyll/jekyll jekyll serve
```

## Best Practices for AI Assistants

### 1. Before Making Changes

- Always check current branch: `git status`
- Verify you're on the correct feature branch
- Read existing files before modifying
- Understand the context of the change

### 2. File Operations

- **Prefer editing over creating:** Always edit existing files when possible
- **Read before write:** Use Read tool before Edit or Write
- **No unnecessary files:** Don't create files unless absolutely required
- **Check for existing patterns:** Follow existing naming and organization patterns

### 3. Git Operations

- **Branch naming:** MUST start with `claude/` and match session ID
- **Commit messages:** Clear, concise, and descriptive
- **Push strategy:** Use `-u origin` flag for new branches
- **Error handling:** Retry network failures with exponential backoff

### 4. Jekyll-Specific Considerations

- **Build testing:** Changes that might break Jekyll build should be tested
- **Front matter:** Include when creating new pages
- **Liquid syntax:** Be aware of Jekyll's templating engine
- **Asset paths:** Use relative paths that work both locally and on GitHub Pages

### 5. Documentation Maintenance

- **Keep CLAUDE.md updated:** Document new patterns and conventions
- **Update README.md:** Reflect significant changes
- **Code comments:** Add where complexity warrants explanation
- **Commit messages:** Serve as inline documentation

## Repository State (Last Updated: 2025-11-15)

**Recent Commits:**
- `85f058e` - Add Jekyll GitHub Pages deployment workflow
- `0ad9d75` - Add files via upload
- `09652bf` - Initial commit

**Current Files:**
- README.md (minimal - needs expansion)
- Screenshot 2025-11-15 at 11.35.39.png
- .github/workflows/jekyll-gh-pages.yml (active)
- CLAUDE.md (this file)

**Active Workflows:**
- Jekyll GitHub Pages deployment (triggers on main branch pushes)

## Future Considerations

### Potential Improvements

1. **Expand README.md:**
   - Add project description
   - Include setup instructions
   - Add links to deployed site

2. **Add Jekyll Configuration:**
   - Create `_config.yml` for customization
   - Define site metadata
   - Configure plugins if needed

3. **Organize Assets:**
   - Create `assets/` or `images/` directory
   - Move screenshots to organized location
   - Add CSS/JS if needed

4. **Add Testing:**
   - HTML validation
   - Link checking
   - Build verification in CI

5. **Documentation:**
   - Create contribution guidelines
   - Add code of conduct if public
   - Document Figma integration (when implemented)

## Troubleshooting

### Common Issues

1. **Jekyll Build Failures:**
   - Check for invalid YAML front matter
   - Verify markdown syntax
   - Ensure all linked assets exist

2. **Git Push Failures (403 Error):**
   - Verify branch name starts with `claude/`
   - Ensure branch name matches session ID
   - Check network connectivity

3. **GitHub Pages Not Updating:**
   - Check Actions tab for workflow status
   - Verify workflow has required permissions
   - Ensure changes are pushed to `main` branch

## Contact and Support

For issues or questions about this repository:
- Repository Owner: luukmuu
- GitHub Issues: Use repository issue tracker
- Repository URL: Based on remote origin configuration

## Version History

- **2025-11-15:** Initial CLAUDE.md creation
  - Documented repository structure
  - Added development workflows
  - Defined coding conventions
  - Created AI assistant guidelines

---

**Note to AI Assistants:** This document should be updated whenever significant changes are made to the repository structure, workflows, or conventions. Always read this file at the start of a new session to understand the current state of the repository.
