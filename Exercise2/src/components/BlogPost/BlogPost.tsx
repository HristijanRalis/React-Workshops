import React, { Component } from "react";

type Props = {
  img: string;
  title: string;
  body: string;
};

export default class BlogPost extends Component<Props> {
  render() {
    return (
      <div className="BlogPost">
        <img src={this.props.img} alt="" />
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
}
