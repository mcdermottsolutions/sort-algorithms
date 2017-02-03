# sort-algorithms

Simple sort algorithms in js

Been learning the algorithms on https://www.toptal.com/developers/sorting-algorithms/selection-sort

## Psuedocode
The psuedocode at the toptal site is a little weird, so here are my modified versions.  The notes are pulled mostly from the Toptal site and wikipedia.

### Insertion Sort
```
for i = 2:n
  for (j=i; j>1 and (a[j] < a[j-1]); j--)
    swap a[j,j-1]
```
This one makes two assignments each time it pushes the number down, but it doesn't have to.
```
for i = 2:n
  temp = a[i]
  for (j=i; j>1 and (a[j] < a[j-1]); j--)
    a[j] = a[j-1]
  a[j] = temp
```
Insertion sort works it's way up the list and when it finds a number that's too low, it pushes it down to where it should be and then keeps working up the list

Quirks of insertion sort:
- it starts at 2
- it's O(n²), so it's pretty bad
- it's adaptive, so it actually runs fast (close to O(n)) when the list is almost sorted

### Selection Sort
```
for i = 1:n
  low = i
  for j = i+1:n
    if a[j] < a[low]
      low = j
  swap a[i,low]
```
Select sort finds the lowest number in the list and puts it in spot #1, then it finds the next lowest and puts it in spot #2 and so on.

Quirks of selection sort:
- it's O(n²), so it's pretty bad
- it only does n swaps, so it's decent to use if the cost of swaps is high for some reason
