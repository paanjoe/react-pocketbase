import { FC, useMemo } from "react";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";

import { ListItem } from "./ListItem";

dayjs.extend(calendar);

interface Props {
  data: any;
  deleteFn: (id: string) => void;
}

export const List: FC<Props> = ({ data, deleteFn }) => {
  const totalAmount = useMemo(
    () => data?.items.reduce((acc: number, curr: any) => acc + curr.amount, 0),
    [data]
  );

  return (
    <div className="w-full max-w-lg sm:p-8">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Expenses
        </h5>
        <p className="text-2xl text-gray-500 truncate dark:text-gray-400">
          -${totalAmount}.00
        </p>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {data?.items.map((item: any) => (
            <ListItem item={item} deleteFn={deleteFn} />
          ))}
        </ul>
      </div>
    </div>
  );
};
