n = int(input())
counter = 0

for i in range(1, n+1):
    if n % i == 0:
        counter += 1
print()