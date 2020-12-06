import React from 'react'
import Axios from 'axios'


const Request =()=>
{
    return (
      <div>
        <h3>REQUEST BLOOD</h3>
        <form className="request-form">
          <select id="bloodgroup">
            <option value="A+ve">A+ve</option>
            <option value="A-ve">A-ve</option>
            <option value="B+ve">B+ve</option>
            <option value="B-ve">B-ve</option>
            <option value="AB+ve">AB+ve</option>
            <option value="AB-ve">AB-ve</option>
            <option value="PNUll"></option>
            <option value=""></option>
          </select>
        </form>
      </div>
    );
}
export default Request;