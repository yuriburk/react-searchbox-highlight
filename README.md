<h1>React Searchbox Highlight</h1>

![SearchBox gif](https://i.imgur.com/MQJXzv5.gif)

This is a easy searchbox component ready to use with highlight and loading features.

<h2>Example Usage</h2>

```js
<SearchBox
  items={[
    { label: 'Object 1', value: { name: 'obj1' } },
    { label: 'Object 2', value: { name: 'obj2' } },
  ]}
  onChange={(value) => handleChange(value)}
  onItemClick={(value) => handleOpenItem(value)}
/>
```

<h2>Properties</h2>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">Name</th>
    <th class="tg-0pky">Type</th>
    <th class="tg-0lax">Usage</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">items</td>
    <td class="tg-0pky">{ label: string; value: unknown }[]</td>
    <td class="tg-0lax">Will be used to create the list of items below the searchbox</td>
  </tr>
  <tr>
    <td class="tg-0pky">onChange</td>
    <td class="tg-0pky">void</td>
    <td class="tg-0lax">Will fire an event with the typed text that you can use to manipulate<br>the items values or do side effects</td>
  </tr>
  <tr>
    <td class="tg-0pky">onItemClick</td>
    <td class="tg-0pky">void</td>
    <td class="tg-0lax">Will fire an event with the value of the clicked item</td>
  </tr>
  <tr>
    <td class="tg-0pky">debounceTime</td>
    <td class="tg-0pky">number</td>
    <td class="tg-0lax">Will be used to change the value of the debounced change event. Default: 200 (ms).</td>
  </tr>
  <tr>
    <td class="tg-0lax">placeholder</td>
    <td class="tg-0lax">string</td>
    <td class="tg-0lax">Will be shown in the input placeholder. Default: Search...</td>
  </tr>
</tbody>
</table>
