// const items = new Array(100).fill(null).map((v, i) => `Item ${i}`);

// function filterAndSort(data: string[], text: string, asc: boolean) {
//   return data
//     .filter((i) => text.length === 0 || i.includes(text))
//     .sort(
//       asc
//         ? // (a, b) => (a > b ? 1 : a < b ? -1 : 0)
//           (a, b) => (b > a ? -1 : a === b ? 0 : 1)
//         : // (a, b) => (b > a ? 1 : b < a ? -1 : 0)
//           (a, b) => (a > b ? -1 : a === b ? 0 : 1)
//     );
// }

// Fonction génératrice 'function*' :
// Les fonctions génératrices peuvent pauser et reprendre leur exécution grâce à l'utilisation de l'opérateur yield.
function* genItems() {
  let count = 0;

  while (true) {
    yield `Item ${count++}`;
  }
}

let items = genItems();

export function fetchItems({ refresh }: { refresh?: boolean }) {
  if (refresh) {
    items = genItems();
  }

  return new Promise((resolve) => {
    resolve({
      json: () =>
        Promise.resolve({
          items: new Array(30)
            .fill(null)
            .map(() => items.next().value as string),
        }),
    });
  });
}
