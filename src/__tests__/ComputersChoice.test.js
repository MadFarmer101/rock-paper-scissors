import React from "react";
import { mount } from "enzyme";
import ComputersChoice from '../ComputersChoice';

describe("ComputersChoice component", () => {
  const wrapper = mount(<ComputersChoice />);

  it("Computer chooses rock item, an image of a rock is displayed", () => {
    wrapper.setProps({ item: 'rock' })
     expect(wrapper.find('.computer-image').prop('src')).toEqual('rock.png');
  });

  it("Computer chooses paper item, an image of a paper is displayed", () => {
    wrapper.setProps({ item: 'paper' })
     expect(wrapper.find('.computer-image').prop('src')).toEqual('paper.png');
  });

  it("Computer chooses scissors item, an image of a scissors is displayed", () => {
    wrapper.setProps({ item: 'scissors' })
     expect(wrapper.find('.computer-image').prop('src')).toEqual('scissors.png');
  });
})