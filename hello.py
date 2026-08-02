# Open a file in read mode
with open("example.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)