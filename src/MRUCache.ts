import { CustomLinkedList } from './CustomLinkedList'; 
import { CustomLinkedListNode } from './CustomLinkedListNode'; 

interface ObjectDictionary<T> {
    [key: string]: T;
}

export class MRUCache {
  private mruItems: ObjectDictionary<CustomLinkedListNode>;
  private capacity: number;
  private count: number;
  private linkedList: CustomLinkedList;

  public constructor(capacity: number) {
    this.capacity = capacity;
    this.mruItems = {};
    this.linkedList = new CustomLinkedList(capacity);
    this.count = 0;
  }

  /**
   * Add an entry to the cache.
   */
  public add(key: string, value: any): void {
    if (!key || !value) {
      console.error(`MRUCache.Add: Key ${key} or Value ${value} is null.`);
      return;
    }

    const node = new CustomLinkedListNode(value);

    if (this.contains(key)) {
      this.linkedList.deleteNode(this.mruItems[key] as CustomLinkedListNode);
    } else {
      if (this.count < this.capacity) {
        this.count++;
      } else {
        // the bang is ok, because we just checked the count
        delete this.mruItems[this.linkedList.tail!.value.toString()];
        this.linkedList.deleteNode(this.linkedList.tail!);
      }
    }

    this.linkedList.addToHead(node);
    this.mruItems[key] = node;
  }

  /**
   * Returns the list of items stored in the cache.
   */
  public getItems(): any[] | null {
    return this.linkedList.getItems();
  }

  /**
   * Returns True if the cache contains an element with the specified key; otherwise, false.
   */
  public contains(key: string): boolean {
    if (!key) {
      return false;
    }

    return key in this.mruItems;
  }

}


