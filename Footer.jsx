import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

function Footer() {
  const count = useSelector((state) => state.todo.count);
  const rendered = useRef(0);

  useEffect(() => {
    rendered.current += 1;
  });

  return (
    <>
      <p>Number of items in my bucket list is {count}</p>
      <p>Number of times rendered: {rendered.current}</p>
    </>
  );
}

export default Footer;