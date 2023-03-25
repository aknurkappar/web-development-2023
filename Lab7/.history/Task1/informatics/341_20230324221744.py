n = int(input())
counter = 2

for i in range(2, int(n/2)+1):
    if n % i == 0:
        counter += 1
print(counter)