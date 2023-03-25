export interface DebounceOptions {
	ms: number;
	callback: (str: string) => void;
}

export default function debounce(node: HTMLInputElement, opts: DebounceOptions) {
	let { ms = 300, callback } = opts;

	let timeout: ReturnType<typeof setTimeout>;

	const clear = () => clearTimeout(timeout);
	function handler(this: HTMLInputElement) {
		clear();
		timeout = setTimeout(() => {
			callback(this.value);
		}, ms);
	}

	node.addEventListener('input', handler);

	return {
		update(newOpts: DebounceOptions) {
			clear();
			ms = newOpts.ms;
			callback = newOpts.callback;
		},
		destroy() {
			clear();
			node.removeEventListener('input', handler);
		}
	};
}
