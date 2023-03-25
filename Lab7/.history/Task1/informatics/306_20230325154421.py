def minimum(a, b, c, d):
    arr = [a, b, c, d]
    arr.sort()
    return arr[0]

a = int(input())
b = int(input())
c = int(input())
d = int(input())

print(minimum(a, b, c, d))