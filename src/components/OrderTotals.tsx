import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  tip: number;
  order: OrderItem[];
};

export default function OrderTotals({ order, tip }: OrderTotalProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Sub total a pagar:
          <span className="font-bold"> {formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina:
          <span className="font-bold"> {formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:
          <span className="font-bold"> {formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="cursor-pointer w-full bg-black hover:bg-gray-700 p-3 
        disabled:opacity-10
        disabled:cursor-no-drop
        uppercase text-white"
        disabled={totalAmount === 0}
      >
        Guardar orden
      </button>
    </>
  );
}
