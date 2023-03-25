# svelte-use-debounce

The use directive for debounce.

## Installation

```shell
npm i svelte-use-debounce
```

## Usage

```svelte
<script>
    import {debounce} from "svelte-use-debounce";
</script>

<input use-debounce={{ms: 300, callback: (value) => { ... }}} />
```

### Typescript Support

```svelte
<script lang="ts">
    import {debounce, type DebounceOptions} from "svelte-use-debounce";

    const opts: DebounceOptions = {
        ms: 300,
        callback: (value: string) => {...}
    };
</script>

<input use-debounce={opts} />
```

## Options

| Option   | Type                   | Description                       |
| -------- | ---------------------- | --------------------------------- |
| ms?      | Number                 | Sets the debounce time.           |
| callback | (str: string) => void; | Callback to run when it debounces |
