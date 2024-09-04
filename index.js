const fs = require('fs');
const path = require('path');

const blogUrl = process.env.INPUT_BLOG_URL;
const imageUrl = process.env.INPUT_IMAGE_URL;
const title = process.env.INPUT_TITLE;
const publicationDate = process.env.INPUT_PUBLICATION_DATE;
const description = process.env.INPUT_DESCRIPTION;

const readmePath = path.join(process.env.GITHUB_WORKSPACE, 'README.md');
const readmeContent = fs.readFileSync(readmePath, 'utf8');

// Template for the blog preview
const blogPreview = `
<p align="left">
   <a href="${blogUrl}" title="${title}">
      <img src="${imageUrl}" alt="${title}" width="250px" align="left" />
   </a>
   <a href="${blogUrl}" title="${title}"><strong>${title}</strong></a>
   <div><strong>Published on: ${publicationDate}</strong>
   <br/>${description}</p><br/>
`;

// Replace or append the new blog preview in the README.md
const updatedContent = readmeContent.replace(
  /<!-- BLOG_PREVIEW_START -->[\s\S]*<!-- BLOG_PREVIEW_END -->/,
  `<!-- BLOG_PREVIEW_START -->\n${blogPreview}\n<!-- BLOG_PREVIEW_END -->`
);

// Write the updated README.md
fs.writeFileSync(readmePath, updatedContent);
console.log('README.md updated with new blog post.');
