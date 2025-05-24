"use server";

import { JSX } from "react";

export default async function Page(): Promise<JSX.Element> {
  return (
    <>
      <div className="min-h-screen">
        <main>
          <h1>Binary Search</h1>
          <p>Binary search is a search algorithm that finds the position of a target value within a sorted array.</p>
          <p>It compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful.</p>
        </main>
      </div>
    </>
  );
}
