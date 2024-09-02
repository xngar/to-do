import React from "react";
import Link from "next/link";

const Turismo = () => {
  const dato: number = 2;
  return (
    <div>
      <Link href={`/paquetes/${dato}`}>enviar datos</Link>
    </div>
  );
};

export default Turismo;
