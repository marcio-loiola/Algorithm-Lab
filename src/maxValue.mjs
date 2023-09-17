export default function maxValue(target, vet) {
  let max = vet[0];

  for (let i = 0; i < vet.length; i++) {
    if (vet[i] > max) {
      max = vet[i];
    }
  }

  return max;
}
