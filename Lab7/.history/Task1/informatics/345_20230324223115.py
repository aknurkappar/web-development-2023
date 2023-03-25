n = int(input())
counter = 0

for i in range(0, n):
    x = int(input())
    if x == 0:
        counter += 1
print(counter)