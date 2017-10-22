# Linked List Demo

Hosted on [JSFiddle.net](https://jsfiddle.net/cjsheets/9Lvae3ay/5/)

---------------------

```html
<b>Initial List</b><br>
<pre id="json-1"></pre><br><br>

<b>Trimmed List</b><br>
<pre id="json-2"></pre>

<b>Inserted List</b><br>
<pre id="json-3"></pre>
```



```typescript
const linkedList = new ads.LinkedList();

linkedList.append('A');
linkedList.append('B');
linkedList.append('C');

document.getElementById("json-1").innerHTML =
  JSON.stringify(linkedList, undefined, 2);

linkedList.removeAt(1);

document.getElementById("json-2").innerHTML =
  JSON.stringify(linkedList, undefined, 2);

linkedList.insert('D', 1);

document.getElementById("json-3").innerHTML =
  JSON.stringify(linkedList, undefined, 2);
```