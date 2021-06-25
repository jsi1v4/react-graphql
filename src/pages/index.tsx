import React, { FormEvent } from "react";
import { NextPage } from "next";

import { useHomeController } from "../hooks";

export const Home: NextPage = () => {
  const { param, rates, handleParams } = useHomeController();

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleParams(e.target[0].value);
  };

  return (
    <form onSubmit={handleForm}>
      <input placeholder="Select Currency" defaultValue={param} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rate</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {rates?.map((x, i) => (
            <tr key={i}>
              <td>{x.name}</td>
              <td>{Number(x.rate).toFixed(2)}</td>
              <td>{x.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default Home;
