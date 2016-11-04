# js-binary-heap

[![Build Status](https://travis-ci.org/gwtw/js-binary-heap.svg?branch=master)](https://travis-ci.org/gwtw/js-binary-heap)
[![Coverage Status](https://coveralls.io/repos/github/gwtw/js-binary-heap/badge.svg?branch=master)](https://coveralls.io/github/gwtw/js-binary-heap?branch=master)

A JavaScript implementation of the [binary heap](http://www.growingwiththeweb.com/data-structures/binary-heap/overview/) data structure.

![](http://www.growingwiththeweb.com/images/data-structures/binary-heap/minheap.svg)

## Features

- 100% test coverage
- Supports all common heap operations\*
- Store keys with optional associated values
- Optional custom compare function that can utilize both key and value to give full control over the order of the data

\* except [delete](https://github.com/gwtw/js-binary-heap/issues/3) and [decrease key](https://github.com/gwtw/js-binary-heap/issues/2)

## Install

```bash
npm install --save @tyriar/binary-heap
```

## Usage

```javascript
// Import npm module
var BinaryHeap = require('@tyriar/binary-heap';

// Construct BinaryHeap
var heap = new BinaryHeap();
// Insert keys only
heap.insert(3);
heap.insert(7);
// Insert keys and values
heap.insert(8, {foo: 'bar'});
heap.insert(1, {foo: 'baz'});

// Extract all nodes in order
while (!heap.isEmpty()) {
  var node = heap.extractMinimum();
  console.log('key: ' + node.key + ', value: ' + node.value);
}
// > key: 1, value: [object Object]
// > key: 3, value: undefined
// > key: 7, value: undefined
// > key: 8, value: [object Object]

// Construct custom compare BinaryHeap
heap = new BinaryHeap(function (a, b) {
  return (a.key + a.value).localeCompare(b.key + b.value);
});
heap.insert('2', 'B');
heap.insert('1', 'a');
heap.insert('1', 'A');
heap.insert('2', 'b');

// Extract all nodes in order
while (!heap.isEmpty()) {
  var node = heap.extractMinimum();
  console.log('key: ' + node.key + ', value: ' + node.value);
}
// > key: 1, value: a
// > key: 1, value: A
// > key: 2, value: b
// > key: 2, value: B
```

## Operation time complexity

| Operation      | Complexity |
| -------------- | ---------- |
| buildHeap      | Θ(n)       |
| clear          | Θ(1)       |
| extractMinimum | Θ(log n)   |
| findMinimum    | Θ(1)       |
| insert         | Θ(log n)   |
| isEmpty        | Θ(1)       |
| size           | Θ(1)       |
| union          | Θ(n)       |

## API

### BinaryHeap

Creates a binary heap.

**Parameters**

-   `customCompare` **function** An optional custom node comparison
    function.

#### buildHeap

Builds a heap with the provided keys and values, this will discard the
heap's current data.

**Parameters**

-   `keys` **Array** An array of keys.
-   `values` **Array** An array of values. This must be the same size as the
    key array.

#### clear

Clears the heap's data, making it an empty heap.

#### extractMinimum

Extracts and returns the minimum node from the heap.

Returns **Node** node The heap's minimum node or undefined if the heap is
empty.

#### findMinimum

Returns the minimum node from the heap.

Returns **Node** node The heap's minimum node or undefined if the heap is
empty.

#### insert

Inserts a new key-value pair into the heap.

**Parameters**

-   `key` **Object** The key to insert.
-   `value` **Object** The value to insert.

Returns **Node** node The inserted node.

#### isEmpty

Returns **boolean** Whether the heap is empty.

#### size

Returns **number** The size of the heap.

#### union

Joins another heap to this one.

**Parameters**

-   `otherHeap` **BinaryHeap** The other heap.

### Node

Creates a node.

**Parameters**

-   `key` **Object** The key of the new node.
-   `value` **Object** The value of the new node.
