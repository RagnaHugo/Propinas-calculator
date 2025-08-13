import type { MenuItem } from "../types";

type propsMenuItem = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: propsMenuItem) {
  return (
    <>
      <button
        className="hover:bg-teal-200 cursor-pointer border-2 border-teal-400 w-full 
      p-3 flex justify-between rounded-xl "
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  );
}
