import React from "react";
import { useState } from 'react'

function TipCalculator() {
  const[bill,setBill] = useState(50);
  const[tip,setTip] = useState(18);
  const[people,setPeople] = useState(1);

  const totalTip = bill*tip*0.01; 
  const tipPerPerson = totalTip/people;

  return (
    <>
      <label htmlFor="bill">
        Bill
        <input min="0" value={bill} onChange={e=>{setBill(parseInt(e.target.value))}} type="number" name="bill" id="bill" />
      </label>
      <label htmlFor="tip">
      Tip Percentage
        <input min="0" value={tip} onChange={e=>{setTip(parseInt(e.target.value))}} type="number" name="tip" id="tip"/>
      </label>
      <label htmlFor="people">
      Number of People
        <input min="0" value={people} onChange={e=>{setPeople(parseInt(e.target.value))}} type="number" name="people" id="people"/>
      </label>
      <p>Total Tip: {isNaN(totalTip) ? '-' : `$${totalTip.toFixed(2)}`}</p>
      <p>Total Per Person: {isNaN(tipPerPerson) ? '-' : `$${tipPerPerson.toFixed(2)}`}</p>
    </>
  );
}

export default TipCalculator;
