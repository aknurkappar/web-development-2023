n = int(input())
i = 1

if n == 0:
    print("NO")


while i < n:
    i *= 2
    if i == n:
        print("YES")
    else:
        print("NO")
        break