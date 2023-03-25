def lucky_sum(a, b, c):
  nums = [a, b, c]
  sum = 0
  for num in nums:
    if num == 13:
      break
    sum += num
  return sum