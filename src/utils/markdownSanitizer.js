const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown')


function sanitizeMarkdownContent(markdownContent) {

	const turndownService = new TurndownService();

	// 1. Convert markdown to html
	const convertedHtml = marked.parse(markdownContent);
	console.log("converted html", convertedHtml);

	// 2. Sanitize html
	const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
		allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
	});

	console.log("Sanitized html", sanitizedHtml);

	//3. Convert the sanitized html back to markdown
	const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
	console.log("Sanitized markdown", sanitizedMarkdown);


	return sanitizedMarkdown;
}


module.exports = sanitizeMarkdownContent;