import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("App component", () => {
  const wrapper = mount(<App />);
  const items = ["rock", "paper", "scissors"];
  it("Tie game if both choose rock", () => {
    wrapper
      .find("#scissors")
      .simulate("click")
      wrapper.setState({ computer: items[2] })
    expect(wrapper.find(".message").text()).toEqual(" It's a Tie!")
  });

  it("Paper beats rock", () => {
    wrapper
      .find("#paper")
      .simulate("click")
      wrapper.setState({ computer: items[0] })
    expect(wrapper.find(".message").text()).toEqual(" Nice! You Win!")
  });

  it("Rock beats scissors", () => {
    wrapper
      .find("#scissors")
      .simulate("click")
      wrapper.setState({ computer: items[0] })
    expect(wrapper.find(".message").text()).toEqual(" Computer Wins!")
  });
  });