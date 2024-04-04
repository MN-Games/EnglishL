function parseCustomLanguage(inputText) {
    // Define a mapping of custom elements to their HTML equivalents
    var elementMappings = {
        'header': '<header>{content}</header>',
        'footer': '<footer>{content}</footer>',
        'navigate': '<nav>{content}</nav>',
        'main': '<main>{content}</main>',
        'section': '<section>{content}</section>',
        'meta-info': '<meta-info>{content}</meta-info>',
        'link': '<a href="{url}">{content}</a>',
        'big-h': '<h1>{content}</h1>',
        'medium-h': '<h2>{content}</h2>',
        'h': '<h3>{content}</h3>',
        'small-h': '<h4>{content}</h4>',
        'tx': '<p>{content}</p>',
        'table': '<table>{content}</table>',
        'pic': '<img alt="{alt}" src="{src}">',
        'embed': '<embed src="{href}"></embed>'
    };

    // Replace custom elements with HTML equivalents
    var htmlOutput = inputText.replace(/<([^>]+)>(.*?)<\/\1>/g, function(match, tag, content) {
        // Check if the tag is mapped to an HTML equivalent
        if (elementMappings.hasOwnProperty(tag)) {
            // Replace placeholders in the HTML equivalent with actual content
            var htmlEquivalent = elementMappings[tag]
                .replace('{content}', content)
                .replace('{url}', extractAttributeValue(content, 'url'))
                .replace('{alt}', extractAttributeValue(content, 'alt'))
                .replace('{src}', extractAttributeValue(content, 'src'))
                .replace('{href}', extractAttributeValue(content, 'href'));
            return htmlEquivalent;
        } else {
            // If not mapped, return the original match
            return match;
        }
    });

    return htmlOutput;
}

// Helper function to extract attribute value from a string
function extractAttributeValue(content, attributeName) {
    var regex = new RegExp(attributeName + '="([^"]*)"');
    var match = regex.exec(content);
    return match ? match[1] : '';
}

// Example usage
var inputText = 'This is a <link url="https://example.com">Example</link> of custom language.';
var htmlOutput = parseCustomLanguage(inputText);
console.log(htmlOutput);
