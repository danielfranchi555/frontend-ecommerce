"use client";
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/app/redux/slices/countSlice";

const Count = () => {
  const countValue = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg-[#f6f6f8] flex items-center gap-4   max-w-max rounded-md px-4 py-[10px] ">
        <FiMinus
          size={22}
          onClick={() => dispatch(decrement())}
          className="cursor-pointer bg-white rounded-full"
        />
        <span>{countValue}</span>
        <MdAdd
          size={22}
          onClick={() => dispatch(increment())}
          className="cursor-pointer bg-white rounded-full"
        />
      </div>
    </div>
  );
};

export default Count;
