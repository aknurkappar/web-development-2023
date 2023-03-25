n = int(input())
i = 1
while i <= n:
    if n % i == 0:
        i += 2
        print(i)
