import re

class EnglishLParser:
    def __init__(self):
        self.document = []

    def parse(self, input_text):
        # Define regular expressions for different elements
        element_patterns = {
            'header': r'<header>(.*?)</header>',
            'footer': r'<footer>(.*?)</footer>',
            'nav': r'<nav>(.*?)</nav>',
            'main': r'<main>(.*?)</main>',
            'section': r'<section>(.*?)</section>',
            'article': r'<article>(.*?)</article>',
            'aside': r'<aside>(.*?)</aside>',
            'div': r'<div>(.*?)</div>',
            'span': r'<span>(.*?)</span>',
            'h[1-6]': r'<h[1-6]>(.*?)</h[1-6]>',
            'p': r'<p>(.*?)</p>',
            'a': r'<a\s+href="([^"]*)">(.*?)</a>',
            'img': r'<img\s+src="([^"]*)"\s+alt="([^"]*)" />',
            'video': r'<video>(.*?)</video>',
            'audio': r'<audio>(.*?)</audio>',
            'ul': r'<ul>(.*?)</ul>',
            'ol': r'<ol>(.*?)</ol>',
            'li': r'<li>(.*?)</li>',
            'dl': r'<dl>(.*?)</dl>',
            'dt': r'<dt>(.*?)</dt>',
            'dd': r'<dd>(.*?)</dd>',
            'table': r'<table>(.*?)</table>',
            'tr': r'<tr>(.*?)</tr>',
            'th': r'<th>(.*?)</th>',
            'td': r'<td>(.*?)</td>',
            'form': r'<form>(.*?)</form>',
            'input': r'<input\s+type="([^"]*)" />',
            'textarea': r'<textarea>(.*?)</textarea>',
            'button': r'<button>(.*?)</button>',
            'label': r'<label>(.*?)</label>',
            'select': r'<select>(.*?)</select>',
            'option': r'<option>(.*?)</option>',
            'optgroup': r'<optgroup>(.*?)</optgroup>',
            'fieldset': r'<fieldset>(.*?)</fieldset>',
            'legend': r'<legend>(.*?)</legend>',
            'blockquote': r'<blockquote>(.*?)</blockquote>',
            'code': r'<code>(.*?)</code>',
            'pre': r'<pre>(.*?)</pre>',
            'abbr': r'<abbr>(.*?)</abbr>',
            'address': r'<address>(.*?)</address>',
            'hr': r'<hr />',
            'br': r'<br />',
            'em': r'<em>(.*?)</em>',
            'strong': r'<strong>(.*?)</strong>',
            'mark': r'<mark>(.*?)</mark>',
            'small': r'<small>(.*?)</small>',
            'sub': r'<sub>(.*?)</sub>',
            'sup': r'<sup>(.*?)</sup>',
            'del': r'<del>(.*?)</del>',
            'ins': r'<ins>(.*?)</ins>',
            'q': r'<q>(.*?)</q>',
            'time': r'<time>(.*?)</time>',
            'progress': r'<progress>(.*?)</progress>',
            'meter': r'<meter>(.*?)</meter>',
            'details': r'<details>(.*?)</details>',
            'summary': r'<summary>(.*?)</summary>',
            'iframe': r'<iframe>(.*?)</iframe>',
            'canvas': r'<canvas>(.*?)</canvas>',
            'svg': r'<svg>(.*?)</svg>',
            'figure': r'<figure>(.*?)</figure>',
            'figcaption': r'<figcaption>(.*?)</figcaption>',
            'bdi': r'<bdi>(.*?)</bdi>',
            'bdo': r'<bdo>(.*?)</bdo>',
            'dfn': r'<dfn>(.*?)</dfn>',
            'ruby': r'<ruby>(.*?)</ruby>',
            'rt': r'<rt>(.*?)</rt>',
            'rtc': r'<rtc>(.*?)</rtc>',
            's': r'<s>(.*?)</s>',
            'u': r'<u>(.*?)</u>',
            'big': r'<big>(.*?)</big>',
            'hgroup': r'<hgroup>(.*?)</hgroup>',
            'samp': r'<samp>(.*?)</samp>',
            'kbd': r'<kbd>(.*?)</kbd>',
            'var': r'<var>(.*?)</var>',
            'cite': r'<cite>(.*?)</cite>',
            'data': r'<data>(.*?)</data>',
        }

        # Parse each element using regular expressions
        for element_name, pattern in element_patterns.items():
            matches = re.findall(pattern, input_text, re.DOTALL)
            for match in matches:
                self.document.append({'type': element_name, 'content': match})

        return self.document
