n = int(input())
i = 1

if n == 0:
    print("NO")
elif n == 1:
    print("YES")

while i < n:
    i *= 2
    if i == n:
        print("YES")
    else:
        print("NO")
        break