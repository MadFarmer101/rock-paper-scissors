import React from "react";
import { mount } from "enzyme";
import PlayersChoice from "../PlayersChoice";

describe("PlayersChoice component", () => {
  const wrapper = mount(<PlayersChoice />);

  it("Player chooses rock", () => {
    wrapper.setProps({ item: 'rock' })
     expect(wrapper.find('.player-image').prop('src')).toEqual('rock.png');
  });

  it("Player chooses paper", () => {
    wrapper.setProps({ item: 'paper' })
     expect(wrapper.find('.player-image').prop('src')).toEqual('paper.png');
  });

  it("Player chooses scissors", () => {
    wrapper.setProps({ item: 'scissors' })
     expect(wrapper.find('.player-image').prop('src')).toEqual('scissors.png');
  });
})