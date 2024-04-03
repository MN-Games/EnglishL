// elementDefinitions.js

const elementDefinitions = {
    comment: {
        htmlEquivalent: '!--',
        requiresClosingTag: false,
        description: 'Defines a comment'
    },
    doctype: {
        htmlEquivalent: 'DOCTYPE',
        requiresClosingTag: false,
        description: 'Defines the document type'
    },
    link: {
        htmlEquivalent: 'a',
        requiresClosingTag: true,
        description: 'Defines a hyperlink',
        attributes: [url', 'target'] // You can add more attributes as needed
    },
    myabbr: {
        htmlEquivalent: 'abbr',
        requiresClosingTag: true,
        description: 'Defines an abbreviation or an acronym'
    },
    myacronym: {
        htmlEquivalent: 'acronym',
        requiresClosingTag: true,
        description: 'Defines an acronym (Not supported in HTML5. Use <abbr> instead.)'
    },
    myaddress: {
        htmlEquivalent: 'address',
        requiresClosingTag: true,
        description: 'Defines contact information for the author/owner of a document'
    },
    myapplet: {
        htmlEquivalent: 'applet',
        requiresClosingTag: true,
        description: 'Defines an embedded applet (Not supported in HTML5. Use <embed> or <object> instead.)'
    },
    myarea: {
        htmlEquivalent: 'area',
        requiresClosingTag: false,
        description: 'Defines an area inside an image map',
        attributes: ['shape', 'coords', 'href', 'alt']
    },
    myarticle: {
        htmlEquivalent: 'article',
        requiresClosingTag: true,
        description: 'Defines an article'
    },
    myaside: {
        htmlEquivalent: 'aside',
        requiresClosingTag: true,
        description: 'Defines content aside from the page content'
    },
    myaudio: {
        htmlEquivalent: 'audio',
        requiresClosingTag: true,
        description: 'Defines embedded sound content',
        attributes: ['src', 'controls', 'autoplay', 'loop', 'volume'] // You can add more attributes as needed
    },
    myb: {
        htmlEquivalent: 'b',
        requiresClosingTag: true,
        description: 'Defines bold text'
    },
    mybase: {
        htmlEquivalent: 'base',
        requiresClosingTag: false,
        description: 'Specifies the base URL/target for all relative URLs in a document',
        attributes: ['href', 'target']
    },
    mybasefont: {
        htmlEquivalent: 'basefont',
        requiresClosingTag: false,
        description: 'Not supported in HTML5. Use CSS instead. Specifies a default color, size, and font for all text in a document',
        attributes: ['color', 'size', 'face']
    },
    mybdi: {
        htmlEquivalent: 'bdi',
        requiresClosingTag: true,
        description: 'Isolates a part of text that might be formatted in a different direction from other text outside it'
    },
    mybdo: {
        htmlEquivalent: 'bdo',
        requiresClosingTag: true,
        description: 'Overrides the current text direction',
        attributes: ['dir']
    },
    mybig: {
        htmlEquivalent: 'big',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use CSS instead. Defines big text'
    },
    myblockquote: {
        htmlEquivalent: 'blockquote',
        requiresClosingTag: true,
        description: 'Defines a section that is quoted from another source'
    },
    mybody: {
        htmlEquivalent: 'body',
        requiresClosingTag: true,
        description: 'Defines the document\'s body'
    },
    mybr: {
        htmlEquivalent: 'br',
        requiresClosingTag: false,
        description: 'Defines a single line break'
    },
    mybutton: {
        htmlEquivalent: 'button',
        requiresClosingTag: true,
        description: 'Defines a clickable button',
        attributes: ['type', 'name', 'value', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'autofocus', 'disabled', 'formnovalidate', 'formtarget']
    },
    mycanvas: {
        htmlEquivalent: 'canvas',
        requiresClosingTag: true,
        description: 'Used to draw graphics, on the fly, via scripting (usually JavaScript)',
        attributes: ['width', 'height']
    },
    mycaption: {
        htmlEquivalent: 'caption',
        requiresClosingTag: true,
        description: 'Defines a table caption'
    },
    mycenter: {
        htmlEquivalent: 'center',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use CSS instead. Defines centered text'
    },
    mycite: {
        htmlEquivalent: 'cite',
        requiresClosingTag: true,
        description: 'Defines the title of a work'
    },
    mycode: {
        htmlEquivalent: 'code',
        requiresClosingTag: true,
        description: 'Defines a piece of computer code'
    },
    mycol: {
        htmlEquivalent: 'col',
        requiresClosingTag: false,
        description: 'Specifies column properties for each column within a <colgroup> element',
        attributes: ['span', 'width']
    },
    mycolgroup: {
        htmlEquivalent: 'colgroup',
        requiresClosingTag: true,
        description: 'Specifies a group of one or more columns in a table for formatting',
        attributes: ['span', 'width']
    },
    mydata: {
        htmlEquivalent: 'data',
        requiresClosingTag: true,
        description: 'Adds a machine-readable translation of a given content',
        attributes: ['value']
    },
    mydatalist: {
        htmlEquivalent: 'datalist',
        requiresClosingTag: true,
        description: 'Specifies a list of pre-defined options for input controls'
    },
    mydd: {
        htmlEquivalent: 'dd',
        requiresClosingTag: true,
        description: 'Defines a description/value of a term in a description list'
    },
    mydel: {
        htmlEquivalent: 'del',
        requiresClosingTag: true,
        description: 'Defines text that has been deleted from a document',
        attributes: ['cite', 'datetime']
    },
    mydetails: {
        htmlEquivalent: 'details',
        requiresClosingTag: true,
        description: 'Defines additional details that the user can view or hide',
        attributes: ['open']
    },
    mydfn: {
        htmlEquivalent: 'dfn',
        requiresClosingTag: true,
        description: 'Specifies a term that is going to be defined within the content'
    },
    mydialog: {
        htmlEquivalent: 'dialog',
        requiresClosingTag: true,
        description: 'Defines a dialog box or window',
        attributes: ['open']
    },
    mydir: {
        htmlEquivalent: 'dir',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use <ul> instead. Defines a directory list'
    },
    mydiv: {
        htmlEquivalent: 'div',
        requiresClosingTag: true,
        description: 'Defines a section in a document'
    },
    mydl: {
        htmlEquivalent: 'dl',
        requiresClosingTag: true,
        description: 'Defines a description list'
    },
    mydt: {
        htmlEquivalent: 'dt',
        requiresClosingTag: true,
        description: 'Defines a term/name in a description list'
    },
    myem: {
        htmlEquivalent: 'em',
        requiresClosingTag: true,
        description: 'Defines emphasized text'
    },
    myembed: {
        htmlEquivalent: 'embed',
        requiresClosingTag: false,
        description: 'Defines a container for an external application',
        attributes: ['src', 'type', 'width', 'height']
    },
    myfieldset: {
        htmlEquivalent: 'fieldset',
        requiresClosingTag: true,
        description: 'Groups related elements in a form'
    },
    myfigcaption: {
        htmlEquivalent: 'figcaption',
        requiresClosingTag: true,
        description: 'Defines a caption for a <figure> element'
    },
    myfigure: {
        htmlEquivalent: 'figure',
        requiresClosingTag: true,
        description: 'Specifies self-contained content'
    },
    myfont: {
        htmlEquivalent: 'font',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use CSS instead. Defines font, color, and size for text',
        attributes: ['color', 'size', 'face']
    },
    myfooter: {
        htmlEquivalent: 'footer',
        requiresClosingTag: true,
        description: 'Defines a footer for a document or section'
    },
    myform: {
        htmlEquivalent: 'form',
        requiresClosingTag: true,
        description: 'Defines an HTML form for user input',
        attributes: ['action', 'method', 'target', 'enctype', 'accept-charset', 'autocomplete', 'novalidate']
    },
    myframe: {
        htmlEquivalent: 'frame',
        requiresClosingTag: false,
        description: 'Not supported in HTML5. Defines a window (a frame) in a frameset',
        attributes: ['src', 'name', 'longdesc', 'frameborder', 'marginwidth', 'marginheight', 'noresize', 'scrolling']
    },
    myframeset: {
        htmlEquivalent: 'frameset',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Defines a set of frames'
    },
    myh1: {
        htmlEquivalent: 'h1',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myh2: {
        htmlEquivalent: 'h2',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myh3: {
        htmlEquivalent: 'h3',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myh4: {
        htmlEquivalent: 'h4',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myh5: {
        htmlEquivalent: 'h5',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myh6: {
        htmlEquivalent: 'h6',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myhead: {
        htmlEquivalent: 'head',
        requiresClosingTag: true,
        description: 'Contains metadata/information for the document'
    },
    myheader: {
        htmlEquivalent: 'header',
        requiresClosingTag: true,
        description: 'Defines a header for a document or section'
    },
    myhgroup: {
        htmlEquivalent: 'hgroup',
        requiresClosingTag: true,
        description: 'Defines a header and related content'
    },
    myhr: {
        htmlEquivalent: 'hr',
        requiresClosingTag: false,
        description: 'Defines a thematic change in the content'
    },
    myhtml: {
        htmlEquivalent: 'html',
        requiresClosingTag: true,
        description: 'Defines the root of an HTML document'
    },
    myi: {
        htmlEquivalent: 'i',
        requiresClosingTag: true,
        description: 'Defines a part of text in an alternate voice or mood'
    },
    myiframe: {
        htmlEquivalent: 'iframe',
        requiresClosingTag: true,
        description: 'Defines an inline frame',
        attributes: ['src', 'name', 'width', 'height', 'sandbox', 'seamless']
    },
    myimg: {
        htmlEquivalent: 'img',
        requiresClosingTag: false,
        description: 'Defines an image',
        attributes: ['src', 'alt', 'usemap', 'ismap', 'width', 'height']
    },
    myinput: {
        htmlEquivalent: 'input',
        requiresClosingTag: false,
        description: 'Defines an input control',
        attributes: ['type', 'name', 'value', 'accept', 'autofocus', 'autocomplete', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'list', 'max', 'maxlength', 'min', 'multiple', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'step']
    },
    myins: {
        htmlEquivalent: 'ins',
        requiresClosingTag: true,
        description: 'Defines a text that has been inserted into a document',
        attributes: ['cite', 'datetime']
    },
    mykbd: {
        htmlEquivalent: 'kbd',
        requiresClosingTag: true,
        description: 'Defines keyboard input'
    },
    mylabel: {
        htmlEquivalent: 'label',
        requiresClosingTag: true,
        description: 'Defines a label for an <input> element',
        attributes: ['for', 'form']
    },
    mylegend: {
        htmlEquivalent: 'legend',
        requiresClosingTag: true,
        description: 'Defines a caption for a <fieldset> element'
    },
    myli: {
        htmlEquivalent: 'li',
        requiresClosingTag: true,
        description: 'Defines a list item'
    },
    mylink: {
        htmlEquivalent: 'link',
        requiresClosingTag: false,
        description: 'Defines the relationship between a document and an external resource (most used to link to style sheets)',
        attributes: ['href', 'rel', 'type', 'media', 'sizes']
    },
    mymain: {
        htmlEquivalent: 'main',
        requiresClosingTag: true,
        description: 'Specifies the main content of a document'
    },
    mymap: {
        htmlEquivalent: 'map',
        requiresClosingTag: true,
        description: 'Defines an image map',
        attributes: ['name']
    },
    mymark: {
        htmlEquivalent: 'mark',
        requiresClosingTag: true,
        description: 'Defines marked/highlighted text'
    },
    mymenu: {
        htmlEquivalent: 'menu',
        requiresClosingTag: true,
        description: 'Defines an unordered list',
        attributes: ['type', 'label']
    },
    mymeta: {
        htmlEquivalent: 'meta',
        requiresClosingTag: false,
        description: 'Defines metadata about an HTML document',
        attributes: ['name', 'content', 'charset', 'http-equiv']
    },
    mymeter: {
        htmlEquivalent: 'meter',
        requiresClosingTag: true,
        description: 'Defines a scalar measurement within a known range (a gauge)',
        attributes: ['value', 'min', 'max', 'low', 'high', 'optimum']
    },
    mynav: {
        htmlEquivalent: 'nav',
        requiresClosingTag: true,
        description: 'Defines navigation links'
    },
    mynoframes: {
        htmlEquivalent: 'noframes',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Defines an alternate content for users that do not support frames'
    },
    mynoscript: {
        htmlEquivalent: 'noscript',
        requiresClosingTag: true,
        description: 'Defines an alternate content for users that do not support client-side scripts'
    },
    myobject: {
        htmlEquivalent: 'object',
        requiresClosingTag: true,
        description: 'Defines a container for an external application',
        attributes: ['data', 'type', 'name', 'usemap', 'form', 'width', 'height']
    },
    myol: {
        htmlEquivalent: 'ol',
        requiresClosingTag: true,
        description: 'Defines an ordered list',
        attributes: ['type', 'start', 'reversed']
    },
    myoptgroup: {
        htmlEquivalent: 'optgroup',
        requiresClosingTag: true,
        description: 'Defines a group of related options in a drop-down list',
        attributes: ['label', 'disabled']
    },
    myoption: {
        htmlEquivalent: 'option',
        requiresClosingTag: true,
        description: 'Defines an option in a drop-down list',
        attributes: ['value', 'disabled', 'selected', 'label']
    },
    myoutput: {
        htmlEquivalent: 'output',
        requiresClosingTag: true,
        description: 'Defines the result of a calculation',
        attributes: ['for', 'form', 'name']
    },
    myp: {
        htmlEquivalent: 'p',
        requiresClosingTag: true,
        description: 'Defines a paragraph'
    },
    myparam: {
        htmlEquivalent: 'param',
        requiresClosingTag: false,
        description: 'Defines a parameter for an object',
        attributes: ['name', 'value']
    },
    mypicture: {
        htmlEquivalent: 'picture',
        requiresClosingTag: true,
        description: 'Defines a container for multiple image resources'
    },
    mypre: {
        htmlEquivalent: 'pre',
        requiresClosingTag: true,
        description: 'Defines preformatted text'
    },
    myprogress: {
        htmlEquivalent: 'progress',
        requiresClosingTag: true,
        description: 'Represents the progress of a task',
        attributes: ['value', 'max']
    },
    myq: {
        htmlEquivalent: 'q',
        requiresClosingTag: true,
        description: 'Defines a short quotation',
        attributes: ['cite']
    },
    myrp: {
        htmlEquivalent: 'rp',
        requiresClosingTag: true,
        description: 'Defines what to show in browsers that do not support ruby annotations'
    },
    myrt: {
        htmlEquivalent: 'rt',
        requiresClosingTag: true,
        description: 'Defines an explanation/pronunciation of characters (for East Asian typography)'
    },
    myruby: {
        htmlEquivalent: 'ruby',
        requiresClosingTag: true,
        description: 'Defines a ruby annotation (for East Asian typography)'
    },
    mys: {
        htmlEquivalent: 's',
        requiresClosingTag: true,
        description: 'Defines text that is no longer correct'
    },
    mysamp: {
        htmlEquivalent: 'samp',
        requiresClosingTag: true,
        description: 'Defines sample output from a computer program'
    },
    myscript: {
        htmlEquivalent: 'script',
        requiresClosingTag: true,
        description: 'Defines a client-side script',
        attributes: ['src', 'type', 'async', 'defer', 'crossorigin', 'integrity', 'referrerpolicy']
    },
    mysearch: {
        htmlEquivalent: 'search',
        requiresClosingTag: true,
        description: 'Defines a search section',
        attributes: ['autocomplete', 'autosave', 'placeholder', 'results', 'dirname']
    },
    mysection: {
        htmlEquivalent: 'section',
        requiresClosingTag: true,
        description: 'Defines a section in a document'
    },
    myselect: {
        htmlEquivalent: 'select',
        requiresClosingTag: true,
        description: 'Defines a drop-down list',
        attributes: ['name', 'size', 'multiple', 'form', 'autofocus', 'disabled', 'required']
    },
    mysmall: {
        htmlEquivalent: 'small',
        requiresClosingTag: true,
        description: 'Defines smaller text'
    },
    mysource: {
        htmlEquivalent: 'source',
        requiresClosingTag: false,
        description: 'Defines multiple media resources for media elements (<video> and <audio>)',
        attributes: ['src', 'type', 'media']
    },
    myspan: {
        htmlEquivalent: 'span',
        requiresClosingTag: true,
        description: 'Defines a section in a document'
    },
    mystrike: {
        htmlEquivalent: 'strike',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use <del> or <s> instead. Defines strikethrough text'
    },
    mystrong: {
        htmlEquivalent: 'strong',
        requiresClosingTag: true,
        description: 'Defines important text'
    },
    mystyle: {
        htmlEquivalent: 'style',
        requiresClosingTag: true,
        description: 'Defines style information for a document',
        attributes: ['media', 'type', 'scoped']
    },
    mysub: {
        htmlEquivalent: 'sub',
        requiresClosingTag: true,
        description: 'Defines subscripted text'
    },
    mysummary: {
        htmlEquivalent: 'summary',
        requiresClosingTag: true,
        description: 'Defines a visible heading for a <details> element'
    },
    mysup: {
        htmlEquivalent: 'sup',
        requiresClosingTag: true,
        description: 'Defines superscripted text'
    },
    mysvg: {
        htmlEquivalent: 'svg',
        requiresClosingTag: true,
        description: 'Defines a container for SVG graphics'
    },
    mytable: {
        htmlEquivalent: 'table',
        requiresClosingTag: true,
        description: 'Defines a table'
    },
    mytbody: {
        htmlEquivalent: 'tbody',
        requiresClosingTag: true,
        description: 'Groups the body content in a table'
    },
    mytd: {
        htmlEquivalent: 'td',
        requiresClosingTag: true,
        description: 'Defines a cell in a table'
    },
    mytemplate: {
        htmlEquivalent: 'template',
        requiresClosingTag: true,
        description: 'Defines a container for content that should be hidden when the page loads'
    },
    mytextarea: {
        htmlEquivalent: 'textarea',
        requiresClosingTag: true,
        description: 'Defines a multiline input control (text area)',
        attributes: ['name', 'rows', 'cols', 'autofocus', 'disabled', 'form', 'maxlength', 'placeholder', 'readonly', 'required', 'wrap']
    },
    mytfoot: {
        htmlEquivalent: 'tfoot',
        requiresClosingTag: true,
        description: 'Groups the footer content in a table'
    },
    myth: {
        htmlEquivalent: 'th',
        requiresClosingTag: true,
        description: 'Defines a header cell in a table'
    },
    mythead: {
        htmlEquivalent: 'thead',
        requiresClosingTag: true,
        description: 'Groups the header content in a table'
    },
    mytime: {
        htmlEquivalent: 'time',
        requiresClosingTag: true,
        description: 'Defines a specific time (or datetime)',
        attributes: ['datetime']
    },
    mytitle: {
        htmlEquivalent: 'title',
        requiresClosingTag: true,
        description: 'Defines a title for the document'
    },
    mytr: {
        htmlEquivalent: 'tr',
        requiresClosingTag: true,
        description: 'Defines a row in a table'
    },
    mytrack: {
        htmlEquivalent: 'track',
        requiresClosingTag: false,
        description: 'Defines text tracks for media elements (<video> and <audio>)',
        attributes: ['src', 'kind', 'srclang', 'label', 'default']
    },
    mytt: {
        htmlEquivalent: 'tt',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use CSS instead. Defines teletype text'
    },
    myu: {
        htmlEquivalent: 'u',
        requiresClosingTag: true,
        description: 'Defines some text that is unarticulated and styled differently from normal text'
    },
    myul: {
        htmlEquivalent: 'ul',
        requiresClosingTag: true,
        description: 'Defines an unordered list'
    },
    myvar: {
        htmlEquivalent: 'var',
        requiresClosingTag: true,
        description: 'Defines a variable'
    },
    myvideo: {
        htmlEquivalent: 'video',
        requiresClosingTag: true,
        description: 'Defines embedded video content',
        attributes: ['src', 'controls', 'autoplay', 'loop', 'muted', 'width', 'height']
    },
    mywbr: {
        htmlEquivalent: 'wbr',
        requiresClosingTag: false,
        description: 'Defines a possible line-break'
    },
};

module.exports = elementDefinitions;
const elementDefinitions = {
    comment: {
        htmlEquivalent: '!--',
        requiresClosingTag: false,
        description: 'Defines a comment'
    },
    doctype: {
        htmlEquivalent: 'DOCTYPE',
        requiresClosingTag: false,
        description: 'Defines the document type'
    },
    link: {
        htmlEquivalent: 'a',
        requiresClosingTag: true,
        description: 'Defines a hyperlink',
        attributes: ['url', 'target'] // You can add more attributes as needed
    },
    myabbr: {
        htmlEquivalent: 'abbr',
        requiresClosingTag: true,
        description: 'Defines an abbreviation or an acronym'
    },
    myacronym: {
        htmlEquivalent: 'acronym',
        requiresClosingTag: true,
        description: 'Defines an acronym (Not supported in HTML5. Use <abbr> instead.)'
    },
    myaddress: {
        htmlEquivalent: 'address',
        requiresClosingTag: true,
        description: 'Defines contact information for the author/owner of a document'
    },
    myapplet: {
        htmlEquivalent: 'applet',
        requiresClosingTag: true,
        description: 'Defines an embedded applet (Not supported in HTML5. Use <embed> or <object> instead.)'
    },
    myarea: {
        htmlEquivalent: 'area',
        requiresClosingTag: false,
        description: 'Defines an area inside an image map',
        attributes: ['shape', 'coords', 'href', 'alt']
    },
    myarticle: {
        htmlEquivalent: 'article',
        requiresClosingTag: true,
        description: 'Defines an article'
    },
    myaside: {
        htmlEquivalent: 'aside',
        requiresClosingTag: true,
        description: 'Defines content aside from the page content'
    },
    myaudio: {
        htmlEquivalent: 'audio',
        requiresClosingTag: true,
        description: 'Defines embedded sound content',
        attributes: ['src', 'controls', 'autoplay', 'loop', 'volume'] // You can add more attributes as needed
    },
    myb: {
        htmlEquivalent: 'b',
        requiresClosingTag: true,
        description: 'Defines bold text'
    },
    mybase: {
        htmlEquivalent: 'base',
        requiresClosingTag: false,
        description: 'Specifies the base URL/target for all relative URLs in a document',
        attributes: ['href', 'target']
    },
    mybasefont: {
        htmlEquivalent: 'basefont',
        requiresClosingTag: false,
        description: 'Not supported in HTML5. Use CSS instead. Specifies a default color, size, and font for all text in a document',
        attributes: ['color', 'size', 'face']
    },
    mybdi: {
        htmlEquivalent: 'bdi',
        requiresClosingTag: true,
        description: 'Isolates a part of text that might be formatted in a different direction from other text outside it'
    },
    mybdo: {
        htmlEquivalent: 'bdo',
        requiresClosingTag: true,
        description: 'Overrides the current text direction',
        attributes: ['dir']
    },
    mybig: {
        htmlEquivalent: 'big',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use CSS instead. Defines big text'
    },
    myblockquote: {
        htmlEquivalent: 'blockquote',
        requiresClosingTag: true,
        description: 'Defines a section that is quoted from another source'
    },
    mybody: {
        htmlEquivalent: 'body',
        requiresClosingTag: true,
        description: 'Defines the document\'s body'
    },
    mybr: {
        htmlEquivalent: 'br',
        requiresClosingTag: false,
        description: 'Defines a single line break'
    },
    mybutton: {
        htmlEquivalent: 'button',
        requiresClosingTag: true,
        description: 'Defines a clickable button',
        attributes: ['type', 'name', 'value', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'autofocus', 'disabled', 'formnovalidate', 'formtarget']
    },
    mycanvas: {
        htmlEquivalent: 'canvas',
        requiresClosingTag: true,
        description: 'Used to draw graphics, on the fly, via scripting (usually JavaScript)',
        attributes: ['width', 'height']
    },
    mycaption: {
        htmlEquivalent: 'caption',
        requiresClosingTag: true,
        description: 'Defines a table caption'
    },
    mycenter: {
        htmlEquivalent: 'center',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use CSS instead. Defines centered text'
    },
    mycite: {
        htmlEquivalent: 'cite',
        requiresClosingTag: true,
        description: 'Defines the title of a work'
    },
    mycode: {
        htmlEquivalent: 'code',
        requiresClosingTag: true,
        description: 'Defines a piece of computer code'
    },
    mycol: {
        htmlEquivalent: 'col',
        requiresClosingTag: false,
        description: 'Specifies column properties for each column within a <colgroup> element',
        attributes: ['span', 'width']
    },
    mycolgroup: {
        htmlEquivalent: 'colgroup',
        requiresClosingTag: true,
        description: 'Specifies a group of one or more columns in a table for formatting',
        attributes: ['span', 'width']
    },
    mydata: {
        htmlEquivalent: 'data',
        requiresClosingTag: true,
        description: 'Adds a machine-readable translation of a given content',
        attributes: ['value']
    },
    mydatalist: {
        htmlEquivalent: 'datalist',
        requiresClosingTag: true,
        description: 'Specifies a list of pre-defined options for input controls'
    },
    mydd: {
        htmlEquivalent: 'dd',
        requiresClosingTag: true,
        description: 'Defines a description/value of a term in a description list'
    },
    mydel: {
        htmlEquivalent: 'del',
        requiresClosingTag: true,
        description: 'Defines text that has been deleted from a document',
        attributes: ['cite', 'datetime']
    },
    mydetails: {
        htmlEquivalent: 'details',
        requiresClosingTag: true,
        description: 'Defines additional details that the user can view or hide',
        attributes: ['open']
    },
    mydfn: {
        htmlEquivalent: 'dfn',
        requiresClosingTag: true,
        description: 'Specifies a term that is going to be defined within the content'
    },
    mydialog: {
        htmlEquivalent: 'dialog',
        requiresClosingTag: true,
        description: 'Defines a dialog box or window',
        attributes: ['open']
    },
    mydir: {
        htmlEquivalent: 'dir',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use <ul> instead. Defines a directory list'
    },
    mydiv: {
        htmlEquivalent: 'div',
        requiresClosingTag: true,
        description: 'Defines a section in a document'
    },
    mydl: {
        htmlEquivalent: 'dl',
        requiresClosingTag: true,
        description: 'Defines a description list'
    },
    mydt: {
        htmlEquivalent: 'dt',
        requiresClosingTag: true,
        description: 'Defines a term/name in a description list'
    },
    myem: {
        htmlEquivalent: 'em',
        requiresClosingTag: true,
        description: 'Defines emphasized text'
    },
    myembed: {
        htmlEquivalent: 'embed',
        requiresClosingTag: false,
        description: 'Defines a container for an external application',
        attributes: ['src', 'type', 'width', 'height']
    },
    myfieldset: {
        htmlEquivalent: 'fieldset',
        requiresClosingTag: true,
        description: 'Groups related elements in a form'
    },
    myfigcaption: {
        htmlEquivalent: 'figcaption',
        requiresClosingTag: true,
        description: 'Defines a caption for a <figure> element'
    },
    myfigure: {
        htmlEquivalent: 'figure',
        requiresClosingTag: true,
        description: 'Specifies self-contained content'
    },
    myfont: {
        htmlEquivalent: 'font',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use CSS instead. Defines font, color, and size for text',
        attributes: ['color', 'size', 'face']
    },
    myfooter: {
        htmlEquivalent: 'footer',
        requiresClosingTag: true,
        description: 'Defines a footer for a document or section'
    },
    myform: {
        htmlEquivalent: 'form',
        requiresClosingTag: true,
        description: 'Defines an HTML form for user input',
        attributes: ['action', 'method', 'target', 'enctype', 'accept-charset', 'autocomplete', 'novalidate']
    },
    myframe: {
        htmlEquivalent: 'frame',
        requiresClosingTag: false,
        description: 'Not supported in HTML5. Defines a window (a frame) in a frameset',
        attributes: ['src', 'name', 'longdesc', 'frameborder', 'marginwidth', 'marginheight', 'noresize', 'scrolling']
    },
    myframeset: {
        htmlEquivalent: 'frameset',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Defines a set of frames'
    },
    myh1: {
        htmlEquivalent: 'h1',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myh2: {
        htmlEquivalent: 'h2',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myh3: {
        htmlEquivalent: 'h3',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myh4: {
        htmlEquivalent: 'h4',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myh5: {
        htmlEquivalent: 'h5',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myh6: {
        htmlEquivalent: 'h6',
        requiresClosingTag: true,
        description: 'Defines HTML headings'
    },
    myhead: {
        htmlEquivalent: 'head',
        requiresClosingTag: true,
        description: 'Contains metadata/information for the document'
    },
    myheader: {
        htmlEquivalent: 'header',
        requiresClosingTag: true,
        description: 'Defines a header for a document or section'
    },
    myhgroup: {
        htmlEquivalent: 'hgroup',
        requiresClosingTag: true,
        description: 'Defines a header and related content'
    },
    myhr: {
        htmlEquivalent: 'hr',
        requiresClosingTag: false,
        description: 'Defines a thematic change in the content'
    },
    myhtml: {
        htmlEquivalent: 'html',
        requiresClosingTag: true,
        description: 'Defines the root of an HTML document'
    },
    myi: {
        htmlEquivalent: 'i',
        requiresClosingTag: true,
        description: 'Defines a part of text in an alternate voice or mood'
    },
    myiframe: {
        htmlEquivalent: 'iframe',
        requiresClosingTag: true,
        description: 'Defines an inline frame',
        attributes: ['src', 'name', 'width', 'height', 'sandbox', 'seamless']
    },
    myimg: {
        htmlEquivalent: 'img',
        requiresClosingTag: false,
        description: 'Defines an image',
        attributes: ['src', 'alt', 'usemap', 'ismap', 'width', 'height']
    },
    myinput: {
        htmlEquivalent: 'input',
        requiresClosingTag: false,
        description: 'Defines an input control',
        attributes: ['type', 'name', 'value', 'accept', 'autofocus', 'autocomplete', 'disabled', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'list', 'max', 'maxlength', 'min', 'multiple', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'step']
    },
    myins: {
        htmlEquivalent: 'ins',
        requiresClosingTag: true,
        description: 'Defines a text that has been inserted into a document',
        attributes: ['cite', 'datetime']
    },
    mykbd: {
        htmlEquivalent: 'kbd',
        requiresClosingTag: true,
        description: 'Defines keyboard input'
    },
    mylabel: {
        htmlEquivalent: 'label',
        requiresClosingTag: true,
        description: 'Defines a label for an <input> element',
        attributes: ['for', 'form']
    },
    mylegend: {
        htmlEquivalent: 'legend',
        requiresClosingTag: true,
        description: 'Defines a caption for a <fieldset> element'
    },
    myli: {
        htmlEquivalent: 'li',
        requiresClosingTag: true,
        description: 'Defines a list item'
    },
    mylink: {
        htmlEquivalent: 'link',
        requiresClosingTag: false,
        description: 'Defines the relationship between a document and an external resource (most used to link to style sheets)',
        attributes: ['href', 'rel', 'type', 'media', 'sizes']
    },
    mymain: {
        htmlEquivalent: 'main',
        requiresClosingTag: true,
        description: 'Specifies the main content of a document'
    },
    mymap: {
        htmlEquivalent: 'map',
        requiresClosingTag: true,
        description: 'Defines an image map',
        attributes: ['name']
    },
    mymark: {
        htmlEquivalent: 'mark',
        requiresClosingTag: true,
        description: 'Defines marked/highlighted text'
    },
    mymenu: {
        htmlEquivalent: 'menu',
        requiresClosingTag: true,
        description: 'Defines an unordered list',
        attributes: ['type', 'label']
    },
    mymeta: {
        htmlEquivalent: 'meta',
        requiresClosingTag: false,
        description: 'Defines metadata about an HTML document',
        attributes: ['name', 'content', 'charset', 'http-equiv']
    },
    mymeter: {
        htmlEquivalent: 'meter',
        requiresClosingTag: true,
        description: 'Defines a scalar measurement within a known range (a gauge)',
        attributes: ['value', 'min', 'max', 'low', 'high', 'optimum']
    },
    mynav: {
        htmlEquivalent: 'nav',
        requiresClosingTag: true,
        description: 'Defines navigation links'
    },
    mynoframes: {
        htmlEquivalent: 'noframes',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Defines an alternate content for users that do not support frames'
    },
    mynoscript: {
        htmlEquivalent: 'noscript',
        requiresClosingTag: true,
        description: 'Defines an alternate content for users that do not support client-side scripts'
    },
    myobject: {
        htmlEquivalent: 'object',
        requiresClosingTag: true,
        description: 'Defines a container for an external application',
        attributes: ['data', 'type', 'name', 'usemap', 'form', 'width', 'height']
    },
    myol: {
        htmlEquivalent: 'ol',
        requiresClosingTag: true,
        description: 'Defines an ordered list',
        attributes: ['type', 'start', 'reversed']
    },
    myoptgroup: {
        htmlEquivalent: 'optgroup',
        requiresClosingTag: true,
        description: 'Defines a group of related options in a drop-down list',
        attributes: ['label', 'disabled']
    },
    myoption: {
        htmlEquivalent: 'option',
        requiresClosingTag: true,
        description: 'Defines an option in a drop-down list',
        attributes: ['value', 'disabled', 'selected', 'label']
    },
    myoutput: {
        htmlEquivalent: 'output',
        requiresClosingTag: true,
        description: 'Defines the result of a calculation',
        attributes: ['for', 'form', 'name']
    },
    myp: {
        htmlEquivalent: 'p',
        requiresClosingTag: true,
        description: 'Defines a paragraph'
    },
    myparam: {
        htmlEquivalent: 'param',
        requiresClosingTag: false,
        description: 'Defines a parameter for an object',
        attributes: ['name', 'value']
    },
    mypicture: {
        htmlEquivalent: 'picture',
        requiresClosingTag: true,
        description: 'Defines a container for multiple image resources'
    },
    mypre: {
        htmlEquivalent: 'pre',
        requiresClosingTag: true,
        description: 'Defines preformatted text'
    },
    myprogress: {
        htmlEquivalent: 'progress',
        requiresClosingTag: true,
        description: 'Represents the progress of a task',
        attributes: ['value', 'max']
    },
    myq: {
        htmlEquivalent: 'q',
        requiresClosingTag: true,
        description: 'Defines a short quotation',
        attributes: ['cite']
    },
    myrp: {
        htmlEquivalent: 'rp',
        requiresClosingTag: true,
        description: 'Defines what to show in browsers that do not support ruby annotations'
    },
    myrt: {
        htmlEquivalent: 'rt',
        requiresClosingTag: true,
        description: 'Defines an explanation/pronunciation of characters (for East Asian typography)'
    },
    myruby: {
        htmlEquivalent: 'ruby',
        requiresClosingTag: true,
        description: 'Defines a ruby annotation (for East Asian typography)'
    },
    mys: {
        htmlEquivalent: 's',
        requiresClosingTag: true,
        description: 'Defines text that is no longer correct'
    },
    mysamp: {
        htmlEquivalent: 'samp',
        requiresClosingTag: true,
        description: 'Defines sample output from a computer program'
    },
    myscript: {
        htmlEquivalent: 'script',
        requiresClosingTag: true,
        description: 'Defines a client-side script',
        attributes: ['src', 'type', 'async', 'defer', 'crossorigin', 'integrity', 'referrerpolicy']
    },
    mysearch: {
        htmlEquivalent: 'search',
        requiresClosingTag: true,
        description: 'Defines a search section',
        attributes: ['autocomplete', 'autosave', 'placeholder', 'results', 'dirname']
    },
    mysection: {
        htmlEquivalent: 'section',
        requiresClosingTag: true,
        description: 'Defines a section in a document'
    },
    myselect: {
        htmlEquivalent: 'select',
        requiresClosingTag: true,
        description: 'Defines a drop-down list',
        attributes: ['name', 'size', 'multiple', 'form', 'autofocus', 'disabled', 'required']
    },
    mysmall: {
        htmlEquivalent: 'small',
        requiresClosingTag: true,
        description: 'Defines smaller text'
    },
    mysource: {
        htmlEquivalent: 'source',
        requiresClosingTag: false,
        description: 'Defines multiple media resources for media elements (<video> and <audio>)',
        attributes: ['src', 'type', 'media']
    },
    myspan: {
        htmlEquivalent: 'span',
        requiresClosingTag: true,
        description: 'Defines a section in a document'
    },
    mystrike: {
        htmlEquivalent: 'strike',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use <del> or <s> instead. Defines strikethrough text'
    },
    mystrong: {
        htmlEquivalent: 'strong',
        requiresClosingTag: true,
        description: 'Defines important text'
    },
    mystyle: {
        htmlEquivalent: 'style',
        requiresClosingTag: true,
        description: 'Defines style information for a document',
        attributes: ['media', 'type', 'scoped']
    },
    mysub: {
        htmlEquivalent: 'sub',
        requiresClosingTag: true,
        description: 'Defines subscripted text'
    },
    mysummary: {
        htmlEquivalent: 'summary',
        requiresClosingTag: true,
        description: 'Defines a visible heading for a <details> element'
    },
    mysup: {
        htmlEquivalent: 'sup',
        requiresClosingTag: true,
        description: 'Defines superscripted text'
    },
    mysvg: {
        htmlEquivalent: 'svg',
        requiresClosingTag: true,
        description: 'Defines a container for SVG graphics'
    },
    mytable: {
        htmlEquivalent: 'table',
        requiresClosingTag: true,
        description: 'Defines a table'
    },
    mytbody: {
        htmlEquivalent: 'tbody',
        requiresClosingTag: true,
        description: 'Groups the body content in a table'
    },
    mytd: {
        htmlEquivalent: 'td',
        requiresClosingTag: true,
        description: 'Defines a cell in a table'
    },
    mytemplate: {
        htmlEquivalent: 'template',
        requiresClosingTag: true,
        description: 'Defines a container for content that should be hidden when the page loads'
    },
    mytextarea: {
        htmlEquivalent: 'textarea',
        requiresClosingTag: true,
        description: 'Defines a multiline input control (text area)',
        attributes: ['name', 'rows', 'cols', 'autofocus', 'disabled', 'form', 'maxlength', 'placeholder', 'readonly', 'required', 'wrap']
    },
    mytfoot: {
        htmlEquivalent: 'tfoot',
        requiresClosingTag: true,
        description: 'Groups the footer content in a table'
    },
    myth: {
        htmlEquivalent: 'th',
        requiresClosingTag: true,
        description: 'Defines a header cell in a table'
    },
    mythead: {
        htmlEquivalent: 'thead',
        requiresClosingTag: true,
        description: 'Groups the header content in a table'
    },
    mytime: {
        htmlEquivalent: 'time',
        requiresClosingTag: true,
        description: 'Defines a specific time (or datetime)',
        attributes: ['datetime']
    },
    mytitle: {
        htmlEquivalent: 'title',
        requiresClosingTag: true,
        description: 'Defines a title for the document'
    },
    mytr: {
        htmlEquivalent: 'tr',
        requiresClosingTag: true,
        description: 'Defines a row in a table'
    },
    mytrack: {
        htmlEquivalent: 'track',
        requiresClosingTag: false,
        description: 'Defines text tracks for media elements (<video> and <audio>)',
        attributes: ['src', 'kind', 'srclang', 'label', 'default']
    },
    mytt: {
        htmlEquivalent: 'tt',
        requiresClosingTag: true,
        description: 'Not supported in HTML5. Use CSS instead. Defines teletype text'
    },
    myu: {
        htmlEquivalent: 'u',
        requiresClosingTag: true,
        description: 'Defines some text that is unarticulated and styled differently from normal text'
    },
    myul: {
        htmlEquivalent: 'ul',
        requiresClosingTag: true,
        description: 'Defines an unordered list'
    },
    myvar: {
        htmlEquivalent: 'var',
        requiresClosingTag: true,
        description: 'Defines a variable'
    },
    myvideo: {
        htmlEquivalent: 'video',
        requiresClosingTag: true,
        description: 'Defines embedded video content',
        attributes: ['src', 'controls', 'autoplay', 'loop', 'muted', 'width', 'height']
    },
    mywbr: {
        htmlEquivalent: 'wbr',
        requiresClosingTag: false,
        description: 'Defines a possible line-break'
    },
};
};

function parseCustomAttributes(tagName, attributes) {
    // Check if the tag is defined in the elementDefinitions object
    if (tagName in elementDefinitions) {
        const tagInfo = elementDefinitions[tagName];
        // Handle each attribute
        for (const attribute of attributes) {
            if (tagInfo.attributes && tagInfo.attributes.includes(attribute)) {
                // Handle the attribute according to its name
                switch (attribute) {
                    case 'url':
                        console.log(`URL attribute found: ${attribute.value}`);
                        break;
                    case 'target':
                        console.log(`Target attribute found: ${attribute.value}`);
                        break;
                    // Add more cases for other attributes if needed
                    default:
                        console.log(`Unknown attribute ${attribute}`);
                        break;
                }
            } else {
                console.log(`Attribute ${attribute} not allowed for tag ${tagName}`);
            }
        }
    } else {
        console.log(`Tag ${tagName} not defined`);
    }
}

// Example usage:
const tagName = 'link';
const attributes = ['url', 'target'];

parseCustomAttributes(tagName, attributes);

