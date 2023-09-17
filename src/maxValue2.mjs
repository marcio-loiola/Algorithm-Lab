export default function maxValue2(vet, init, end) {
  if (end - init <= 1) {
    return Math.max(vet[init], vet[end]);
  } else {
    let m = Math.floor(init + end) / 2;
    let v1 = maxValue2(vet, init, m);
    let v2 = maxValue2(vet, m + 1, end);
    return Math.max(v1, v2);
  }
}
