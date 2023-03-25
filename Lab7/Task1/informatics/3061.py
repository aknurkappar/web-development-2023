n = int(input())
root = 0
while 2**root < n:
    root += 1

print(root)