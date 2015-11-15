# js-binary-heap  [![NPM version](https://img.shields.io/npm/v/@tyriar/binary-heap.svg?style=flat)](https://www.npmjs.org/package/@tyriar/binary-heap)

[![Build Status](http://img.shields.io/travis/Tyriar/js-binary-heap.svg?style=flat)](http://travis-ci.org/Tyriar/js-binary-heap) [![Coverage Status](https://img.shields.io/coveralls/Tyriar/js-binary-heap.svg?branch=master&service=github)](https://coveralls.io/github/Tyriar/js-binary-heap?branch=master)

A JavaScript implementation of the [binary heap](http://www.growingwiththeweb.com/2013/01/data-structure-binary-heap.html) data structure.

![](http://www.growingwiththeweb.com/images/2013/01/26/minheap.svg)

## Install

```bash
npm install --save @tyriar/binary-heap
```

## Usage

TODO

## Operation time complexity

TODO

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
