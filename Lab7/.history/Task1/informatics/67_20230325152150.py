n = int(input())
arr = list(map(int, input().split()))
counter = 0

for i in range(1, n):
    if (arr[i] > 0 and arr[i-1] > 0) or (arr[i] < 0 and arr[i-1] > 0):
        counter += 1

print(counter)

if counter > 0:
    print("YES")
else:
    print("NO") 