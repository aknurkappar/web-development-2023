n = int(input())
i = 1

if b == 1:
    print("YES")
elif n % 2 == 0:
    while i < n:
        i *= 2
    if i == n:
            print("YES")
        else:
            print("NO")
else:
    print("NO")