"use client";
// import { fetchContent } from "@/data/features/counter";
// // import { increment, decrement } from "@/data/features/counter";
// import { AppDispatch, useAppSelector } from "@/data/redux_store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function About() {
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchContent());
  // }, [dispatch]);
  // const content = useAppSelector((state) => state.contentReducer.content);
  // return (
  //   <>
  //     {/* <button onClick={() => dispatch(increment(counter))}>+</button> */}
  //     <div>{(content as any).brand}</div>
  //     {/* <button onClick={() => dispatch(decrement(counter))}>-</button> */}
  //   </>
  // );
  return <h1>About</h1>;
}
