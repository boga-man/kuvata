export function getNearestEven(def: number): number {
  def = Math.ceil(def);
  return def % 2 === 0 ? def : def - 1;
}
