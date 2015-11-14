import test from 'ava';
import Heap from '../';

test('should return whether the heap is empty', t => {
  var heap = new Heap();
  t.true(heap.isEmpty());
  heap.insert(1, null);
  t.false(heap.isEmpty());
  heap.extractMinimum();
  t.true(heap.isEmpty());
  t.end();
});
