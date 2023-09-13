import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const CheckBox = ({ qid, sheetId, isSolved, isBookmarked, barHandle }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(solved);
  }, []);

  const handleChange = () => {
    var data = localStorage.getItem(`tri2do-${sheetId}`);
    data = data ? JSON.parse(data) : [];
    if (!toggle) {
      data.push(qid);
      let newData = [...new Set(data)];
      localStorage.setItem(`tri2do-${sheetId}`, JSON.stringify(newData));
      setToggle(true);
      barHandle(toggle);
      return;
    } else {
      let index = data.indexOf(qid);
      if (index !== -1) data.splice(index, 1);
      localStorage.setItem(`tri2do-${sheetId}`, JSON.stringify(data));
      setToggle(false);
      barHandle(toggle);
      return;
    }
  };

  return (
    <>
      <Container>
        <div class="checkbox-wrapper-13">
          <input
            id="c1-13"
            type="checkbox"
            checked={toggle}
            onChange={handleChange}
          />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    .checkbox-wrapper-13 input[type="checkbox"] {
      --active: var(--blue);
      --active-inner: #fff;
      --focus: 2px rgba(39, 94, 254, 0.3);
      --border: #bbc1e1;
      --border-hover: #275efe;
      --background: #fff;
      --disabled: #f6f8ff;
      --disabled-inner: #e1e6f9;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 21px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 0;
      cursor: pointer;
      border: 1px solid var(--bc, var(--border));
      background: var(--b, var(--background));
      transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
    }
    .checkbox-wrapper-13 input[type="checkbox"]:after {
      content: "";
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
        opacity var(--d-o, 0.2s);
    }
    .checkbox-wrapper-13 input[type="checkbox"]:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: 0.3s;
      --d-t: 0.6s;
      --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }

    .checkbox-wrapper-13
      input[type="checkbox"]:hover:not(:checked):not(:disabled) {
      --bc: var(--border-hover);
    }
    .checkbox-wrapper-13 input[type="checkbox"]:focus {
      box-shadow: 0 0 0 var(--focus);
    }
    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch) {
      width: 21px;
    }
    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch):after {
      opacity: var(--o, 0);
    }
    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch):checked {
      --o: 1;
    }
    .checkbox-wrapper-13 input[type="checkbox"] + label {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      margin-left: 4px;
    }

    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch) {
      border-radius: 7px;
    }
    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch):after {
      width: 5px;
      height: 9px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 7px;
      top: 4px;
      transform: rotate(var(--r, 20deg));
    }
    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch):checked {
      --r: 43deg;
    }
  }

  .checkbox-wrapper-13 * {
    box-sizing: inherit;
  }
  .checkbox-wrapper-13 *:before,
  .checkbox-wrapper-13 *:after {
    box-sizing: inherit;
  }
`;

export default CheckBox;
