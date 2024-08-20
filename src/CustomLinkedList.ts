import type { CustomLinkedListNode } from "./CustomLinkedListNode";

/**
 * Provides an implementation of a customized LinkedList
 * with Head representing the first node & tail representing the last node of linked list.
 */
export class CustomLinkedList {
	private capacity: number;
	private _head: CustomLinkedListNode = null;
	private _tail: CustomLinkedListNode = null;

	public constructor(capacity: number) {
		this.capacity = capacity;
	}

	public get head(): CustomLinkedListNode {
		return this._head;
	}

	public get tail(): CustomLinkedListNode {
		return this._tail;
	}

	/**
	 * Removes node from the linked list.
	 */
	public deleteNode(node: CustomLinkedListNode): void {
		if (!this.head) {
			return;
		}

		if (!node.pre) {
			// Node is Head node
			// Single Node
			if (!node.next) {
				this._head = null;
				this._tail = null;
			} else {
				// Node is first node
				this._head = node.next;
				this.head.pre = null;
			}
		} else if (!node.next) {
			// Node is Tail node
			this._tail = node.pre;
			this.tail.next = null;
		} else {
			// Node in the middle
			node.pre.next = node.next;
			node.next.pre = node.pre;
		}

		node.next = null;
		node.pre = null;
		// eslint-disable-next-line no-param-reassign -- Suppressed during S#=>TS migration. Do not copy. Clean up.
		node = null;
	}

	/**
	 * Adds a new node to the head of the linked list.
	 */
	public addToHead(node: CustomLinkedListNode): void {
		// Initialize head and tail nodes.
		if (!this.head) {
			this._head = node;
			this._tail = node;
		} else {
			node.next = this.head;
			this._head = node;
			node.next.pre = this.head;
		}
	}

	/**
	 * Returns list of items in the linked list.
	 */
	public getItems(): any[] {
		if (!this.head) {
			return null;
		}

		const values = [];
		let current = this.head;

		while (current) {
			values.push(current.value);
			current = current.next;
			if (current.next == null) {
				break;
			}

			if (values.length > this.capacity) {
				break;
			}
		}

		return values;
	}
}
