class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  empty() {
    return this.items.length === 0;
  }
}

export default function maxValue2_new(target, vet) {
  const stack = new Stack();

  stack.push({
    init: 0,
    end: vet.length - 1,
  });

  while (!stack.empty()) {
    const state = stack.pop();

    if (state.end - state.init <= 1) {
      return Math.max(vet[state.init], vet[state.end]);
    } else {
      const m = Math.floor((state.init + state.end) / 2);
      stack.push({
        init: state.init,
        end: m,
      });
      stack.push({
        init: m + 1,
        end: state.end,
      });
    }
  }
}
