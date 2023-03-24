a = int(input())
b = int(input())

for i in range (a, b+1):
    if math.sqrt(i) == floor(sqrt(i)):
        print(i)