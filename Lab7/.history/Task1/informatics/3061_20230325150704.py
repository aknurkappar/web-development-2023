n = int(input())
root = 1
while 2**root < n:
    root += 1

print(root+1)
print(2**3)