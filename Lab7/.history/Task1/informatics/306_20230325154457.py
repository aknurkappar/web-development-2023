a = int(input())
b = int(input())
c = int(input())
d = int(input())

def minimum(a, b, c, d):
    return min(min(a, b), min(c, d))

print(minimum(a, b, c, d))