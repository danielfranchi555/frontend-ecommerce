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
        <button onClick={() => dispatch(decrement())}>
          <FiMinus size={22} className="cursor-pointer bg-white rounded-full" />
        </button>
        <span>{countValue}</span>
        <button onClick={() => dispatch(increment())}>
          <MdAdd size={22} className="cursor-pointer bg-white rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default Count;
