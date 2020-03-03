import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("App component", () => {
  const wrapper = mount(<App />);
  const items = ["rock", "paper", "scissors"];
  it("Tie game if both choose scissors", () => {
    wrapper
      .find("#scissors")
      .simulate("click")
      wrapper.setState({ computer: items[2] })
    expect(wrapper.find(".message").text()).toEqual(" It's a Tie!")
  });

  it("Tie game if both choose paper", () => {
    wrapper
      .find("#paper")
      .simulate("click")
      wrapper.setState({ computer: items[1] })
    expect(wrapper.find(".message").text()).toEqual(" It's a Tie!")
  });

  it("Tie game if both choose rock", () => {
    wrapper
      .find("#rock")
      .simulate("click")
      wrapper.setState({ computer: items[0] })
    expect(wrapper.find(".message").text()).toEqual(" It's a Tie!")
  });

  it("Player win with paper against the rock", () => {
    wrapper
      .find("#paper")
      .simulate("click")
      wrapper.setState({ computer: items[0] })
    expect(wrapper.find(".message").text()).toEqual(" Nice! You Win!")
  });

  it("Player win with rock against the scissors", () => {
    wrapper
      .find("#rock")
      .simulate("click")
      wrapper.setState({ computer: items[2] })
    expect(wrapper.find(".message").text()).toEqual(" Nice! You Win!")
  });

  it("Player win with scissors against the paper", () => {
    wrapper
      .find("#scissors")
      .simulate("click")
      wrapper.setState({ computer: items[1] })
    expect(wrapper.find(".message").text()).toEqual(" Nice! You Win!")
  });

  it("Computer wins with rock against scissors", () => {
    wrapper
      .find("#scissors")
      .simulate("click")
      wrapper.setState({ computer: items[0] })
    expect(wrapper.find(".message").text()).toEqual(" Computer Wins!")
  });

  it("Computer wins with paper against rock", () => {
    wrapper
      .find("#rock")
      .simulate("click")
      wrapper.setState({ computer: items[1] })
    expect(wrapper.find(".message").text()).toEqual(" Computer Wins!")
  });

  it("Computer wins with scissors against paper", () => {
    wrapper
      .find("#paper")
      .simulate("click")
      wrapper.setState({ computer: items[2] })
    expect(wrapper.find(".message").text()).toEqual(" Computer Wins!")
  });
  });