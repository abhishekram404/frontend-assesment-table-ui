import styled from "styled-components";

export const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 53px;
  height: 22px;

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: all 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  .slider::after {
    position: absolute;
    content: "OFF";
    font-size: 12px;
    top: 2px;
    right: 6px;
    color: white;
  }

  input:checked + .slider {
    background-color: #1276ff;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #1276ff;
  }

  input:checked + .slider:before {
    transform: translateX(31px);
  }

  input:checked + .slider::after {
    content: "ON";
    color: #ffffff;
    left: 6px;
    right: auto;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
