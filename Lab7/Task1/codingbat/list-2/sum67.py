def sum67(nums):
  interval = True
  sum = 0

  for n in nums:
    if n == 6:
      interval = False
    if interval:
      sum += n
      continue
    if n == 7:
      interval = True

  return sum