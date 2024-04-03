from englishl_parser import EnglishLParser

def main():
    # Read EnglishL markup text from file
    with open('sample_markup.txt', 'r') as file:
        markup_text = file.read()

    # Parse the markup text
    parser = EnglishLParser()
    parsed_document = parser.parse(markup_text)

    # Perform operations with the parsed data
    for element in parsed_document:
        print(element)

if __name__ == "__main__":
    main()
