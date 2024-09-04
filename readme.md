# GitHub Action: Update Blog Post in GitHub Profile

This GitHub Action allows you to automatically update your GitHub profile with the latest blog post, providing a preview with a link, image, title, and description.

## Usage

To use this action in your repository, create a workflow YAML file, like `.github/workflows/update-blog.yml`, and configure the action.

```yaml
name: Update Blog Post in Profile

on:
  push:
    branches:
      - main
  schedule:
    - cron: '0 0 * * 1'  # Runs every Monday at midnight

jobs:
  update-blog-post:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Update blog post in README
        uses: your-username/update-readme-blog-post@v1.0.0
        with:
          blog_url: "https://example.com/my-blog-post"
          image_url: "https://example.com/my-blog-image.png"
          title: "My Blog Post Title"
          publication_date: "01 Jan 2024"
          description: "A brief description of the blog post."
