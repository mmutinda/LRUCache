export class CustomLinkedListNode {
  public next: CustomLinkedListNode | null;
  public pre: CustomLinkedListNode | null;
  public value: any;

  public constructor(value: any) {
    this.next = null;
    this.pre = null;
    this.value = value;
  }
}

