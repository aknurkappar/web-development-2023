n = int(input())
counter = 0

for i in range(1, int(n/2)):
    if n % i == 0:
        counter += 1
print(counter)