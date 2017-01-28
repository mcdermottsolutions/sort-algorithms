# sort-algorithms

Simple sort algorithms in js

Been learning the algorithms on https://www.toptal.com/developers/sorting-algorithms/selection-sort

## Psuedocode
Sometimes their psuedocode is a little weird, so here's my version:

### Insertion Sort
insertion sort works it's way up the list and when it finds a number that's too low, it pushes it down to where it should be and then keeps working up the list
```
for i = 2:n
  for (j=i; j>1 and (a[j] < a[j-1]) j--)
    swap a[j,j-1]
```

### Selection Sort
