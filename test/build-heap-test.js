import test from 'ava';
import Heap from '../';

function wrapBuildHeap(keys, values) {
  return function () {
    new Heap().buildHeap(keys, values);
  };
}

test('should throw if constructing with different number of keys and values', t => {
  t.throws(wrapBuildHeap([], [1]));
  t.throws(wrapBuildHeap([1], []));
  t.throws(wrapBuildHeap([1], [1, 2]));
  t.throws(wrapBuildHeap([1, 2], []));
  t.throws(wrapBuildHeap([1, 2], [1]));
  t.throws(wrapBuildHeap([1, 2], [1, 2, 3]));
  t.end();
});

test('should not throw if constructing with undefined values', t => {
  t.doesNotThrow(wrapBuildHeap([1]));
  t.end();
});

test('should not throw if constructing with same number of keys and values', t => {
  t.doesNotThrow(wrapBuildHeap([], []));
  t.doesNotThrow(wrapBuildHeap([1], [1]));
  t.doesNotThrow(wrapBuildHeap([1, 2], [1, 2]));
  t.end();
});

test('should construct a valid heap with keys only', t => {
  var keys = [5, 8, 9, 1, 2, 6, 3, 7, 4];
  var heap = new Heap();
  heap.buildHeap(keys);
  t.is(heap.size(), 9);
  t.is(heap.extractMinimum().key, 1);
  t.is(heap.extractMinimum().key, 2);
  t.is(heap.extractMinimum().key, 3);
  t.is(heap.extractMinimum().key, 4);
  t.is(heap.extractMinimum().key, 5);
  t.is(heap.extractMinimum().key, 6);
  t.is(heap.extractMinimum().key, 7);
  t.is(heap.extractMinimum().key, 8);
  t.is(heap.extractMinimum().key, 9);
  t.true(heap.isEmpty());
  t.end();
});

test('should construct a valid heap with keys and values', t => {
  var keys = [5, 8, 9, 1, 2, 6, 3, 7, 4];
  var values = ['e', 'h', 'i', 'a', 'b', 'f', 'c', 'g', 'd'];
  var heap = new Heap();
  heap.buildHeap(keys, values);
  t.is(heap.size(), 9);
  var minNode = heap.extractMinimum();
  t.is(minNode.key, 1);
  t.is(minNode.value, 'a');
  minNode = heap.extractMinimum();
  t.is(minNode.key, 2);
  t.is(minNode.value, 'b');
  minNode = heap.extractMinimum();
  t.is(minNode.key, 3);
  t.is(minNode.value, 'c');
  minNode = heap.extractMinimum();
  t.is(minNode.key, 4);
  t.is(minNode.value, 'd');
  minNode = heap.extractMinimum();
  t.is(minNode.key, 5);
  t.is(minNode.value, 'e');
  minNode = heap.extractMinimum();
  t.is(minNode.key, 6);
  t.is(minNode.value, 'f');
  minNode = heap.extractMinimum();
  t.is(minNode.key, 7);
  t.is(minNode.value, 'g');
  minNode = heap.extractMinimum();
  t.is(minNode.key, 8);
  t.is(minNode.value, 'h');
  minNode = heap.extractMinimum();
  t.is(minNode.key, 9);
  t.is(minNode.value, 'i');
  t.true(heap.isEmpty());
  t.end();
});
