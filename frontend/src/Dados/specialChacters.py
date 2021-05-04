a_string = "abc i.!,? 123"
alphanumeric = ""

for character in a_string:
    if character == '.' or character == ',':
        pass
    else: :character.isalnum():
        alphanumeric += character

print(alphanumeric)

